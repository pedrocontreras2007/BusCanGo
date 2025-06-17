'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const address = require('./address-4c70d641.js');
const formData = require('./form-data-0da9940f.js');
const mutations = require('./mutations-076c4044.js');
const getters = require('./getters-b93add03.js');
const store = require('./store-97df0984.js');
const consumer = require('./consumer-9f4ee0e3.js');
const mutations$1 = require('./mutations-a3c3a9c6.js');
const index$1 = require('./index-d86333db.js');
const index$2 = require('./index-fb76df07.js');
const price = require('./price-653ec1cb.js');
const getters$1 = require('./getters-9c4b930e.js');
const mutations$2 = require('./mutations-11c8f9a8.js');
const pageAlign = require('./page-align-5a2ab493.js');
require('./index-bcdafe6e.js');
require('./utils-ee1bb9d3.js');
require('./remove-query-args-b57e8cd3.js');
require('./add-query-args-49dcb630.js');
require('./google-59d23803.js');
require('./currency-71fce0f0.js');
require('./fetch-f25a0cb0.js');

const scCompactAddressCss = ":host{display:block}.sc-address{display:block;position:relative}.sc-address [hidden]{display:none}.sc-address--loading{min-height:70px}.sc-address--loading sc-skeleton{display:block;margin-bottom:1em}.sc-address__control{display:block}.sc-address__control>*{margin-bottom:-1px}.sc-address__columns{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:space-between}.sc-address__columns>*{flex:1;width:50%;margin-left:-1px}.sc-address__columns>*:first-child{margin-left:0}";
const ScCompactAddressStyle0 = scCompactAddressCss;

const ScCompactAddress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scChangeAddress = index.createEvent(this, "scChangeAddress", 7);
        this.scInputAddress = index.createEvent(this, "scInputAddress", 7);
        this.address = {
            country: null,
            city: null,
            line_1: null,
            line_2: null,
            postal_code: null,
            state: null,
        };
        this.names = {
            country: 'shipping_country',
            city: 'shipping_city',
            line_1: 'shipping_line_1',
            line_2: 'shipping_line_2',
            postal_code: 'shipping_postal_code',
            state: 'shipping_state',
        };
        this.placeholders = {
            country: '',
            postal_code: '',
            state: '',
        };
        this.label = wp.i18n.__('Country or region', 'surecart');
        this.required = undefined;
        this.loading = undefined;
        this.countryChoices = address.countryChoices;
        this.regions = undefined;
        this.showState = undefined;
        this.showPostal = undefined;
    }
    /** When the state changes, we want to update city and postal fields. */
    handleAddressChange() {
        var _a;
        if (!((_a = this.address) === null || _a === void 0 ? void 0 : _a.country))
            return;
        this.setRegions();
        this.showState = ['US', 'CA'].includes(this.address.country);
        this.showPostal = ['US'].includes(this.address.country);
        this.scChangeAddress.emit(this.address);
        this.scInputAddress.emit(this.address);
    }
    updateAddress(address) {
        this.address = { ...this.address, ...address };
    }
    handleAddressInput(address) {
        this.scInputAddress.emit({ ...this.address, ...address });
    }
    clearAddress() {
        var _a;
        this.address = {
            name: (_a = this.address) === null || _a === void 0 ? void 0 : _a.name,
            country: null,
            line_1: null,
            line_2: null,
            city: null,
            postal_code: null,
            state: null,
        };
    }
    /** Set the regions based on the country. */
    setRegions() {
        if (address.hasState(this.address.country)) {
            Promise.resolve().then(function () { return require('./countries-367b507a.js'); }).then(module => {
                this.regions = module === null || module === void 0 ? void 0 : module[this.address.country];
            });
        }
        else {
            this.regions = [];
        }
    }
    componentWillLoad() {
        var _a;
        this.handleAddressChange();
        const country = (_a = this.countryChoices.find(country => country.value === this.address.country)) === null || _a === void 0 ? void 0 : _a.value;
        if (country) {
            this.updateAddress({ country });
        }
    }
    async reportValidity() {
        return formData.reportChildrenValidity(this.el);
    }
    getStatePlaceholder() {
        var _a, _b;
        if ((_a = this.placeholders) === null || _a === void 0 ? void 0 : _a.state)
            return this.placeholders.state;
        if (((_b = this.address) === null || _b === void 0 ? void 0 : _b.country) === 'US')
            return wp.i18n.__('State', 'surecart');
        return wp.i18n.__('Province/Region', 'surecart');
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h("div", { key: 'a383fda466b9562ac0b7c47120acbd1fcbe94aac', class: "sc-address", part: "base" }, index.h("sc-form-control", { key: '83981f10da521f50de8fe4ea1d94d79616e3ab17', exportparts: "label, help-text, form-control", label: this.label, class: "sc-address__control", part: "control", required: this.required }, index.h("sc-select", { key: '947cb2602f05b1dc0dd696c2bbe37ab7d49b7931', exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", value: (_a = this.address) === null || _a === void 0 ? void 0 : _a.country, onScChange: (e) => {
                this.clearAddress();
                this.updateAddress({ country: e.target.value || null });
            }, choices: this.countryChoices, autocomplete: 'country-name', placeholder: ((_b = this.placeholders) === null || _b === void 0 ? void 0 : _b.country) || wp.i18n.__('Select Your Country', 'surecart'), name: this.names.country, search: true, unselect: false, "squared-bottom": this.showState || this.showPostal, required: this.required }), index.h("div", { key: '59dbcc96455e0ed14abed28954284241d5bd1f53', class: "sc-address__columns" }, this.showState && (index.h("sc-select", { key: '71b27e566ed826fe2ea93ef4c51f1af4e0b24ce1', exportparts: "base:select__base, input, form-control, label, help-text, trigger, panel, caret, search__base, search__input, search__form-control, menu__base, spinner__base, empty", placeholder: this.getStatePlaceholder(), name: this.names.state, autocomplete: 'address-level1', value: (_c = this === null || this === void 0 ? void 0 : this.address) === null || _c === void 0 ? void 0 : _c.state, onScChange: (e) => this.updateAddress({ state: e.target.value || null }), choices: this.regions, required: this.required, search: true, "squared-top": true, unselect: false, "squared-right": this.showPostal })), this.showPostal && (index.h("sc-input", { key: 'efa751ecacb3aebf11978f2b77a0ffad8e45714b', exportparts: "base:input__base, input, form-control, label, help-text", placeholder: ((_d = this.placeholders) === null || _d === void 0 ? void 0 : _d.postal_code) || wp.i18n.__('Postal Code/Zip', 'surecart'), name: this.names.postal_code, onScChange: (e) => this.updateAddress({ postal_code: e.target.value || null }), onScInput: (e) => this.handleAddressInput({ name: e.target.value || null }), autocomplete: 'postal-code', required: this.required, value: (_e = this === null || this === void 0 ? void 0 : this.address) === null || _e === void 0 ? void 0 : _e.postal_code, "squared-top": true, maxlength: 5, "squared-left": this.showState })))), this.loading && index.h("sc-block-ui", { key: '476f54634125cb49fb3917b2201cc65e21fe3be7', exportparts: "base:block-ui, content:block-ui__content" })));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "address": ["handleAddressChange"]
    }; }
};
ScCompactAddress.style = ScCompactAddressStyle0;

const scInvoiceDetailsCss = ":host{display:block}::slotted(*){margin:4px 0 !important}::slotted(sc-divider){margin:16px 0 !important}";
const ScInvoiceDetailsStyle0 = scInvoiceDetailsCss;

const ScInvoiceDetails = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '93de9ab3e8254d3250596492c07b031dead7764b', style: { ...(!((_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.invoice) ? { display: 'none' } : {}) } }, index.h("div", { key: '7a8155272a27635cd1232fe44ff6f4d760ef62bb', class: "invoice-details" }, index.h("slot", { key: '7b185ab8eb1016fbcd172bb1eccb85ceca1e39a8' }))));
    }
};
ScInvoiceDetails.style = ScInvoiceDetailsStyle0;

const scInvoiceMemoCss = ":host{display:block}.invoice-memo{font-size:var(--sc-font-size-small);line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color);display:grid;gap:5px}.invoice-memo__content{text-align:left;color:var(--sc-input-help-text-color)}";
const ScInvoiceMemoStyle0 = scInvoiceMemoCss;

const ScLineItemInvoiceMemo = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.text = undefined;
    }
    render() {
        var _a;
        const checkout = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout;
        const memo = ((_a = checkout === null || checkout === void 0 ? void 0 : checkout.invoice) === null || _a === void 0 ? void 0 : _a.memo) || null;
        // Stop if checkout has no invoice number.
        if (!memo) {
            return null;
        }
        // loading state
        if (getters.formBusy() && !(checkout === null || checkout === void 0 ? void 0 : checkout.invoice)) {
            return (index.h("div", null, index.h("sc-skeleton", { style: { width: '100px' } }), index.h("sc-skeleton", { style: { width: '200px' } })));
        }
        return (index.h("div", { class: "invoice-memo" }, index.h("div", { class: "invoice-memo__title" }, this.text || wp.i18n.__('Memo', 'surecart')), index.h("div", { class: "invoice-memo__content" }, memo)));
    }
};
ScLineItemInvoiceMemo.style = ScInvoiceMemoStyle0;

const scLineItemInvoiceDueDateCss = ":host{display:block}sc-line-item{text-align:left;line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}";
const ScLineItemInvoiceDueDateStyle0 = scLineItemInvoiceDueDateCss;

const ScLineItemInvoiceDueDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        const checkout = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout;
        const dueDate = ((_a = checkout === null || checkout === void 0 ? void 0 : checkout.invoice) === null || _a === void 0 ? void 0 : _a.due_date) || null;
        // Stop if checkout has no invoice due date.
        if (!dueDate) {
            return null;
        }
        // loading state
        if (getters.formBusy() && !(checkout === null || checkout === void 0 ? void 0 : checkout.invoice)) {
            return (index.h("sc-line-item", null, index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "price", style: { 'width': '50px', 'display': 'inline-block', '--border-radius': '6px' } })));
        }
        return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, index.h("slot", { name: "title" }, wp.i18n.__('Due Date', 'surecart'))), index.h("sc-format-date", { slot: "price-description", date: dueDate, type: "timestamp", month: "short", day: "numeric", year: "numeric" })));
    }
};
ScLineItemInvoiceDueDate.style = ScLineItemInvoiceDueDateStyle0;

const scLineItemInvoiceNumberCss = ":host{display:block}sc-line-item{text-align:left;line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}";
const ScLineItemInvoiceNumberStyle0 = scLineItemInvoiceNumberCss;

const ScLineItemInvoiceNumber = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        var _a;
        const checkout = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout;
        const invoiceNumber = ((_a = checkout === null || checkout === void 0 ? void 0 : checkout.invoice) === null || _a === void 0 ? void 0 : _a.order_number) || null;
        // Stop if checkout has no invoice number.
        if (!invoiceNumber) {
            return null;
        }
        // loading state
        if (getters.formBusy() && !(checkout === null || checkout === void 0 ? void 0 : checkout.invoice)) {
            return (index.h("sc-line-item", null, index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "price", style: { 'width': '50px', 'display': 'inline-block', '--border-radius': '6px' } })));
        }
        return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, index.h("slot", { name: "title" }, wp.i18n.__('Invoice Number', 'surecart'))), index.h("span", { slot: "price-description" }, "#", invoiceNumber)));
    }
};
ScLineItemInvoiceNumber.style = ScLineItemInvoiceNumberStyle0;

const scLineItemInvoiceReceiptDownloadCss = ":host{display:block}sc-line-item{text-align:left;line-height:var(--sc-line-height-dense);color:var(--sc-input-label-color)}.sc-invoice-download-link{display:inline-flex;gap:var(--sc-spacing-x-small);text-decoration:none;color:inherit}";
const ScLineItemInvoiceReceiptDownloadStyle0 = scLineItemInvoiceReceiptDownloadCss;

const ScLineItemInvoiceReceiptDownload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkout = undefined;
    }
    render() {
        var _a;
        const checkout = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout;
        const receiptDownloadLink = ((_a = checkout === null || checkout === void 0 ? void 0 : checkout.invoice) === null || _a === void 0 ? void 0 : _a.id) ? checkout === null || checkout === void 0 ? void 0 : checkout.pdf_url : null;
        // Stop if checkout has no receipt download link.
        if (!receiptDownloadLink) {
            return null;
        }
        // loading state
        if (getters.formBusy() && !(checkout === null || checkout === void 0 ? void 0 : checkout.invoice)) {
            return (index.h("sc-line-item", null, index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "price", style: { 'width': '50px', 'display': 'inline-block', '--border-radius': '6px' } })));
        }
        return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, index.h("slot", { name: "title" }, wp.i18n.__('Receipt / Invoice', 'surecart'))), index.h("span", { slot: "price-description" }, index.h("a", { class: "sc-invoice-download-link", href: receiptDownloadLink, target: "_blank", rel: "noopener noreferrer" }, index.h("sc-icon", { name: "download" }), wp.i18n.__('Download', 'surecart')))));
    }
};
ScLineItemInvoiceReceiptDownload.style = ScLineItemInvoiceReceiptDownloadStyle0;

const scLineItemShippingCss = ":host{display:block}";
const ScLineItemShippingStyle0 = scLineItemShippingCss;

const ScLineItemShipping = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
    }
    render() {
        const { checkout } = mutations.state;
        // don't show if no shipping amount if no choice selected
        if (!(checkout === null || checkout === void 0 ? void 0 : checkout.selected_shipping_choice)) {
            return index.h(index.Host, { style: { display: 'none' } });
        }
        if (store.state.formState.value === 'loading') {
            return (index.h("sc-line-item", null, index.h("sc-skeleton", { slot: "title", style: { width: '120px', display: 'inline-block' } }), index.h("sc-skeleton", { slot: "price", style: { 'width': '70px', 'display': 'inline-block', '--border-radius': '6px' } })));
        }
        return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, this.label || wp.i18n.__('Shipping', 'surecart')), index.h("span", { slot: "price" }, (checkout === null || checkout === void 0 ? void 0 : checkout.shipping_amount) ? (index.h("sc-format-number", { type: "currency", currency: checkout === null || checkout === void 0 ? void 0 : checkout.currency, value: checkout === null || checkout === void 0 ? void 0 : checkout.shipping_amount })) : (wp.i18n.__('Free', 'surecart')))));
    }
};
ScLineItemShipping.style = ScLineItemShippingStyle0;

const scLineItemTaxCss = ":host{display:block}";
const ScLineItemTaxStyle0 = scLineItemTaxCss;

const ScLineItemTax = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.order = undefined;
        this.loading = undefined;
    }
    renderLabel() {
        var _a, _b, _c;
        let label = wp.i18n.sprintf(wp.i18n.__('Estimated %s', 'surecart'), ((_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.tax_label) || '');
        if (((_b = this === null || this === void 0 ? void 0 : this.order) === null || _b === void 0 ? void 0 : _b.tax_status) === 'calculated') {
            label = ((_c = this.order) === null || _c === void 0 ? void 0 : _c.tax_label) || '';
        }
        return (index.h(index.Fragment, null, `${wp.i18n.__('Tax:', 'surecart')} ${label}`, this.renderPercent()));
    }
    renderPercent() {
        var _a;
        if ((_a = this.order) === null || _a === void 0 ? void 0 : _a.tax_percent) {
            return (index.h(index.Fragment, null, '(', this.order.tax_percent, "%", ')'));
        }
        return '';
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        // hide if tax is 0
        if (!((_a = this === null || this === void 0 ? void 0 : this.order) === null || _a === void 0 ? void 0 : _a.tax_amount)) {
            return null;
        }
        return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, this.renderLabel()), ((_b = this.order) === null || _b === void 0 ? void 0 : _b.tax_exclusive_amount) && (index.h("span", { slot: "price" }, index.h("sc-format-number", { type: "currency", currency: ((_c = this === null || this === void 0 ? void 0 : this.order) === null || _c === void 0 ? void 0 : _c.currency) || 'usd', value: (_d = this === null || this === void 0 ? void 0 : this.order) === null || _d === void 0 ? void 0 : _d.tax_exclusive_amount }))), ((_e = this.order) === null || _e === void 0 ? void 0 : _e.tax_inclusive_amount) && (index.h("span", { slot: "price-description" }, '(', index.h("sc-format-number", { type: "currency", currency: ((_f = this === null || this === void 0 ? void 0 : this.order) === null || _f === void 0 ? void 0 : _f.currency) || 'usd', value: (_g = this === null || this === void 0 ? void 0 : this.order) === null || _g === void 0 ? void 0 : _g.tax_inclusive_amount }), " ", wp.i18n.__('included', 'surecart'), ')'))));
    }
};
consumer.openWormhole(ScLineItemTax, ['order', 'loading'], false);
ScLineItemTax.style = ScLineItemTaxStyle0;

const scOrderBillingAddressCss = ":host{display:block}.order-billing-address__toggle{margin-bottom:var(--sc-form-row-spacing, var(--sc-spacing-medium))}";
const ScOrderBillingAddressStyle0 = scOrderBillingAddressCss;

const ScOrderBillingAddress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.showName = undefined;
        this.namePlaceholder = wp.i18n.__('Name or Company Name', 'surecart');
        this.countryPlaceholder = wp.i18n.__('Country', 'surecart');
        this.cityPlaceholder = wp.i18n.__('City', 'surecart');
        this.line1Placeholder = wp.i18n.__('Address', 'surecart');
        this.line2Placeholder = wp.i18n.__('Address Line 2', 'surecart');
        this.postalCodePlaceholder = wp.i18n.__('Postal Code/Zip', 'surecart');
        this.statePlaceholder = wp.i18n.__('State/Province/Region', 'surecart');
        this.defaultCountry = undefined;
        this.toggleLabel = wp.i18n.__('Billing address is same as shipping', 'surecart');
        this.address = {
            country: null,
            city: null,
            line_1: null,
            line_2: null,
            postal_code: null,
            state: null,
        };
    }
    async reportValidity() {
        var _a, _b;
        if (!this.input)
            return true;
        return (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.reportValidity) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    prefillAddress() {
        var _a;
        // check if address keys are empty, if so, update them.
        const addressKeys = Object.keys(this.address).filter(key => key !== 'country');
        const emptyAddressKeys = addressKeys.filter(key => !this.address[key]);
        if (emptyAddressKeys.length === addressKeys.length) {
            this.address = { ...this.address, ...(_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.billing_address };
        }
    }
    componentWillLoad() {
        var _a;
        if (this.defaultCountry && !((_a = this.address) === null || _a === void 0 ? void 0 : _a.country)) {
            this.address.country = this.defaultCountry;
        }
        this.prefillAddress();
        mutations.onChange('checkout', () => this.prefillAddress());
    }
    async updateAddressState(address) {
        var _a, _b;
        if (JSON.stringify(address) === JSON.stringify(this.address))
            return; // no change, don't update.
        this.address = address;
        try {
            mutations$1.lockCheckout('billing-address');
            mutations.state.checkout = (await index$1.createOrUpdateCheckout({
                id: (_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.id,
                data: {
                    billing_matches_shipping: (_b = mutations.state.checkout) === null || _b === void 0 ? void 0 : _b.billing_matches_shipping,
                    billing_address: this.address,
                },
            }));
        }
        catch (e) {
            console.error(e);
        }
        finally {
            mutations$1.unLockCheckout('billing-address');
        }
    }
    async onToggleBillingMatchesShipping(e) {
        mutations.state.checkout = {
            ...mutations.state.checkout,
            billing_matches_shipping: e.target.checked,
        };
    }
    shippingAddressFieldExists() {
        return !!document.querySelector('sc-order-shipping-address');
    }
    render() {
        var _a, _b;
        return (index.h(index.Fragment, { key: '0f9adc881ab492e80b41d8aeeb9db8f21ce893d0' }, this.shippingAddressFieldExists() && (index.h("sc-checkbox", { key: 'aaac75789dda952b0042705d600ecaefa399675e', class: "order-billing-address__toggle", onScChange: e => this.onToggleBillingMatchesShipping(e), checked: (_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.billing_matches_shipping }, this.toggleLabel)), (!this.shippingAddressFieldExists() || !((_b = mutations.state.checkout) === null || _b === void 0 ? void 0 : _b.billing_matches_shipping)) && (index.h("sc-address", { key: 'd62e1bf6894174cafd49bfcd38f1d8983aa27bde', exportparts: "label, help-text, form-control, input__base, select__base, columns, search__base, menu__base", ref: el => {
                this.input = el;
            }, label: this.label || wp.i18n.__('Billing Address', 'surecart'), placeholders: {
                name: this.namePlaceholder,
                country: this.countryPlaceholder,
                city: this.cityPlaceholder,
                line_1: this.line1Placeholder,
                line_2: this.line2Placeholder,
                postal_code: this.postalCodePlaceholder,
                state: this.statePlaceholder,
            }, names: {
                name: 'billing_name',
                country: 'billing_country',
                city: 'billing_city',
                line_1: 'billing_line_1',
                line_2: 'billing_line_2',
                postal_code: 'billing_postal_code',
                state: 'billing_state',
            }, required: true, loading: getters.formLoading(), address: this.address, "show-name": this.showName, onScChangeAddress: e => this.updateAddressState(e.detail) }))));
    }
};
ScOrderBillingAddress.style = ScOrderBillingAddressStyle0;

const scOrderBumpCss = ":host {\n  display: block;\n}\n\n.bump {\n  display: grid;\n  gap: 1em;\n}\n.bump__text {\n  display: grid;\n  gap: 0.25em;\n}\n.bump__tag {\n  background: var(--sc-color-primary-500);\n  color: var(--sc-color-white);\n  border-radius: var(--sc-input-border-radius-medium);\n  padding: var(--sc-spacing-x-small);\n  font-size: var(--sc-font-size-x-small);\n}\n.bump__product {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-choice-padding, 1.3em 1.1em);\n  line-height: var(--sc-line-height-dense);\n}\n.bump__product--wrapper {\n  container-type: inline-size;\n}\n@container (max-width: 325px) {\n  .bump__product {\n    flex-direction: column;\n    align-items: start;\n  }\n}\n.bump__product-title {\n  font-weight: var(--sc-font-weight-semibold);\n}\n.bump__product-description {\n  color: var(--sc-input-label-color);\n}\n.bump__image {\n  width: var(--sc-product-line-item-image-size, 4em);\n  height: var(--sc-product-line-item-image-size, 4em);\n  flex: 0 0 var(--sc-product-line-item-image-size, 4em);\n  object-fit: cover;\n  border-radius: 4px;\n  border: 1px solid var(--sc-color-gray-200);\n  display: block;\n  box-shadow: var(--sc-input-box-shadow);\n}\n.bump__price--has-discount .bump__original-price {\n  text-decoration: line-through;\n  color: var(--sc-color-gray-500);\n  font-size: var(--sc-font-size-small);\n}\n.bump__price .bump__new-price {\n  font-size: var(--sc-font-size-large);\n  color: var(--sc-color-gray-700);\n}\n.bump__price .bump__interval {\n  color: var(--sc-color-gray-500);\n}\n.bump__amount {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-x-small);\n  flex-wrap: wrap;\n  margin-top: var(--sc-spacing-xx-small);\n}";
const ScOrderBumpStyle0 = scOrderBumpCss;

const ScOrderBump = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bump = undefined;
        this.showControl = undefined;
    }
    /** The bump line item */
    lineItem() {
        var _a, _b, _c;
        return (_c = (_b = (_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.find(item => { var _a; return (item === null || item === void 0 ? void 0 : item.bump) === ((_a = this.bump) === null || _a === void 0 ? void 0 : _a.id); });
    }
    /** Update the line item. */
    updateLineItem() {
        var _a, _b, _c, _d;
        const price = ((_a = this.bump.price) === null || _a === void 0 ? void 0 : _a.id) || ((_b = this.bump) === null || _b === void 0 ? void 0 : _b.price);
        if (this.lineItem()) {
            mutations$1.removeCheckoutLineItem((_c = this.lineItem()) === null || _c === void 0 ? void 0 : _c.id);
            index$2.speak(wp.i18n.__('Order bump Removed.', 'surecart'));
            return;
        }
        mutations$1.addCheckoutLineItem({
            bump: (_d = this.bump) === null || _d === void 0 ? void 0 : _d.id,
            price,
            quantity: 1,
        });
        index$2.speak(wp.i18n.__('Order bump applied.', 'surecart'));
    }
    componentDidLoad() {
        var _a;
        mutations$1.trackOrderBump((_a = this.bump) === null || _a === void 0 ? void 0 : _a.id);
    }
    newPrice() {
        var _a, _b, _c, _d, _e, _f;
        let amount = null;
        let initialAmount = ((_b = (_a = this.bump) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.amount) || 0;
        if ((_c = this.bump) === null || _c === void 0 ? void 0 : _c.amount_off) {
            amount = Math.max(0, initialAmount - ((_d = this.bump) === null || _d === void 0 ? void 0 : _d.amount_off));
        }
        if ((_e = this.bump) === null || _e === void 0 ? void 0 : _e.percent_off) {
            const off = initialAmount * (((_f = this.bump) === null || _f === void 0 ? void 0 : _f.percent_off) / 100);
            amount = Math.max(0, initialAmount - off);
        }
        return amount;
    }
    renderInterval() {
        var _a;
        const interval = price.intervalString((_a = this.bump) === null || _a === void 0 ? void 0 : _a.price, { labels: { interval: '/', period: wp.i18n.__('for', 'surecart') } });
        if (!interval.trim().length)
            return null;
        return index.h("span", { class: "bump__interval" }, interval);
    }
    renderPrice() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return (index.h("div", { slot: "description", class: { 'bump__price': true, 'bump__price--has-discount': !!((_a = this.bump) === null || _a === void 0 ? void 0 : _a.percent_off) || !!((_b = this.bump) === null || _b === void 0 ? void 0 : _b.amount_off) }, part: "price" }, index.h("span", { "aria-label": 
            /** translators: %s: old price */
            wp.i18n.sprintf(wp.i18n.__('Originally priced at %s.', 'surecart'), price.getFormattedPrice({
                amount: (_d = (_c = this.bump) === null || _c === void 0 ? void 0 : _c.price) === null || _d === void 0 ? void 0 : _d.amount,
                currency: (_f = (_e = this.bump) === null || _e === void 0 ? void 0 : _e.price) === null || _f === void 0 ? void 0 : _f.currency,
            })) }, index.h("sc-format-number", { type: "currency", class: "bump__original-price", value: (_h = (_g = this.bump) === null || _g === void 0 ? void 0 : _g.price) === null || _h === void 0 ? void 0 : _h.amount, currency: (_k = (_j = this.bump) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.currency }), ' '), index.h("span", null, index.h("span", { "aria-hidden": "true" }, this.newPrice() === 0 && wp.i18n.__('Free', 'surecart'), this.newPrice() !== null && this.newPrice() > 0 && (index.h("sc-format-number", { type: "currency", class: "bump__new-price", value: this.newPrice(), currency: ((_l = this.bump) === null || _l === void 0 ? void 0 : _l.price).currency })), this.renderInterval()))));
    }
    renderDiscount() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!!((_a = this.bump) === null || _a === void 0 ? void 0 : _a.amount_off)) {
            return (index.h("div", { class: "bump__tag", "aria-label": 
                /** translators: %1$s: amount off, %2$s: currency */
                wp.i18n.sprintf(wp.i18n.__('You save %1$s%2$s.', 'surecart'), (_b = this.bump) === null || _b === void 0 ? void 0 : _b.amount_off, ((_c = this.bump) === null || _c === void 0 ? void 0 : _c.price).currency) }, index.h("span", { "aria-hidden": "true" }, wp.i18n.__('Save', 'surecart'), " ", index.h("sc-format-number", { type: "currency", value: (_d = this.bump) === null || _d === void 0 ? void 0 : _d.amount_off, currency: ((_e = this.bump) === null || _e === void 0 ? void 0 : _e.price).currency }))));
        }
        if (!!((_f = this.bump) === null || _f === void 0 ? void 0 : _f.percent_off)) {
            return (index.h("div", { class: "bump__tag", "aria-label": 
                /** translators: %s: amount percent off */
                wp.i18n.sprintf(wp.i18n.__('You save %s%%.', 'surecart'), (_g = this.bump) === null || _g === void 0 ? void 0 : _g.percent_off) }, index.h("span", { "aria-hidden": "true" }, wp.i18n.sprintf(wp.i18n.__('Save %s%%', 'surecart'), (_h = this.bump) === null || _h === void 0 ? void 0 : _h.percent_off))));
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        const product = (_b = (_a = this.bump) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.product;
        return (index.h("sc-choice", { key: 'f54e904ae76ee0f868c351067964d8a44475ffc8', value: (_c = this.bump) === null || _c === void 0 ? void 0 : _c.id, type: "checkbox", showControl: this.showControl, checked: !!this.lineItem(), onClick: e => {
                e.preventDefault();
                e.stopImmediatePropagation();
                this.updateLineItem();
            }, onKeyDown: e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    this.updateLineItem();
                }
            }, exportparts: "base, control, checked-icon, title" }, index.h("div", { key: '5c7a9a7258de07386a8c244fc621e80890d803a7', part: "base-content", class: "bump" }, index.h("div", { key: '98baa728fe2448312876ca85cc3a4abdd77e4721', class: "bump__text" }, index.h("div", { key: '3e4cc583eb22d208e54efab5ec7cab53fd122068', class: "bump__title", "aria-label": wp.i18n.sprintf(
            /* translators: %s: order bump name */
            wp.i18n.__('Product: %s.', 'surecart'), ((_e = (_d = this.bump) === null || _d === void 0 ? void 0 : _d.metadata) === null || _e === void 0 ? void 0 : _e.cta) || ((_f = this.bump) === null || _f === void 0 ? void 0 : _f.name) || (product === null || product === void 0 ? void 0 : product.name)) }, index.h("span", { key: '9ee571cd9875b40d1d5fd64822f6e44314dfc6eb', "aria-hidden": "true" }, ((_h = (_g = this.bump) === null || _g === void 0 ? void 0 : _g.metadata) === null || _h === void 0 ? void 0 : _h.cta) || ((_j = this.bump) === null || _j === void 0 ? void 0 : _j.name) || (product === null || product === void 0 ? void 0 : product.name))), index.h("div", { key: 'ead3a3a0e7e7cf3f912ad585dba10889a141e1ca', class: "bump__amount" }, index.h("span", { key: '0180092589d86c2282eda2e8e64e74183c1599ff' }, this.renderPrice()), index.h("span", { key: 'da8cc55e92eac055eaacec0a5fad52b4b363c61e' }, this.renderDiscount())))), ((_l = (_k = this.bump) === null || _k === void 0 ? void 0 : _k.metadata) === null || _l === void 0 ? void 0 : _l.description) && (index.h("div", { key: 'cee223a47e1f513830a0c8a38ab4496a81cafc29', slot: "footer", class: "bump__product--wrapper" }, index.h("sc-divider", { key: 'ec74fade148f204cdb1b9bfcd2b0722dbe91bfc9', style: { '--spacing': 'var(--sc-spacing-medium)' } }), index.h("div", { key: '1aa0c0b80903b173fea69cd33994f9ff98ab8626', class: "bump__product" }, !!((_m = product === null || product === void 0 ? void 0 : product.line_item_image) === null || _m === void 0 ? void 0 : _m.src) && index.h("img", { key: '13e01bae0717ae627889f7f5f26e56eb42d0182e', ...product === null || product === void 0 ? void 0 : product.line_item_image, class: "bump__image" }), index.h("div", { key: '43215f6d69691ccf49e702124344e2b8d762342c', class: "bump__product-text" }, !!((_p = (_o = this.bump) === null || _o === void 0 ? void 0 : _o.metadata) === null || _p === void 0 ? void 0 : _p.cta) && (index.h("div", { key: '6da14b7b269d77df9624736f0a5305a61ff2367f', class: "bump__product-title", "aria-hidden": "true" }, this.bump.name || (product === null || product === void 0 ? void 0 : product.name))), !!((_r = (_q = this.bump) === null || _q === void 0 ? void 0 : _q.metadata) === null || _r === void 0 ? void 0 : _r.description) && (index.h("div", { key: '4feda35ee0de6c7f5113bde867753dad277fef92', class: "bump__product-description", "aria-label": wp.i18n.sprintf(
            /* translators: %s: Product description */
            wp.i18n.__('Product description: %s.', 'surecart'), (_t = (_s = this.bump) === null || _s === void 0 ? void 0 : _s.metadata) === null || _t === void 0 ? void 0 : _t.description) }, index.h("span", { key: 'd6e8b9a6e2e41b5dafedd90e87d12774808f8e53', "aria-hidden": "true" }, (_v = (_u = this.bump) === null || _u === void 0 ? void 0 : _u.metadata) === null || _v === void 0 ? void 0 : _v.description)))))))));
    }
};
ScOrderBump.style = ScOrderBumpStyle0;

const scOrderBumpsCss = ":host{display:block}.bumps__list{display:grid;gap:10px}";
const ScOrderBumpsStyle0 = scOrderBumpsCss;

const ScOrderBumps = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.showControl = undefined;
        this.help = undefined;
    }
    render() {
        var _a, _b;
        const bumps = (((_b = (_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.recommended_bumps) === null || _b === void 0 ? void 0 : _b.data) || []).filter(bump => { var _a, _b, _c, _d; return ((_d = (_c = (_b = (_a = bump === null || bump === void 0 ? void 0 : bump.price) === null || _a === void 0 ? void 0 : _a.product) === null || _b === void 0 ? void 0 : _b.variants) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.count) === 0; }); // exclude variants for now.;
        if (!(bumps === null || bumps === void 0 ? void 0 : bumps.length)) {
            return null;
        }
        return (index.h("sc-form-control", { label: this.label || wp.i18n.__('Recommended', 'surecart'), help: this.help }, index.h("div", { class: "bumps__list", "aria-label": wp.i18n.__('Order bump summary', 'surecart') }, bumps.map(bump => (index.h("sc-order-bump", { key: bump === null || bump === void 0 ? void 0 : bump.id, showControl: this.showControl, bump: bump }))))));
    }
};
ScOrderBumps.style = ScOrderBumpsStyle0;

const scOrderShippingAddressCss = ":host{display:block}.sc-order-shipping__loading{display:flex;flex-direction:column;gap:0.5em}";
const ScOrderShippingAddressStyle0 = scOrderShippingAddressCss;

const ScOrderShippingAddress = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Names for the address */
        this.names = {
            name: 'shipping_name',
            country: 'shipping_country',
            city: 'shipping_city',
            line_1: 'shipping_line_1',
            line_2: 'shipping_line_2',
            postal_code: 'shipping_postal_code',
            state: 'shipping_state',
        };
        this.label = undefined;
        this.required = false;
        this.full = undefined;
        this.showName = undefined;
        this.namePlaceholder = wp.i18n.__('Name or Company Name', 'surecart');
        this.countryPlaceholder = wp.i18n.__('Country', 'surecart');
        this.cityPlaceholder = wp.i18n.__('City', 'surecart');
        this.line1Placeholder = wp.i18n.__('Address', 'surecart');
        this.line2Placeholder = wp.i18n.__('Address Line 2', 'surecart');
        this.postalCodePlaceholder = wp.i18n.__('Postal Code/Zip', 'surecart');
        this.statePlaceholder = wp.i18n.__('State/Province/Region', 'surecart');
        this.defaultCountry = undefined;
        this.requireName = false;
        this.placeholders = {
            name: wp.i18n.__('Name or Company Name', 'surecart'),
            country: wp.i18n.__('Country', 'surecart'),
            city: wp.i18n.__('City', 'surecart'),
            line_1: wp.i18n.__('Address', 'surecart'),
            line_2: wp.i18n.__('Address Line 2', 'surecart'),
            postal_code: wp.i18n.__('Postal Code/Zip', 'surecart'),
            state: wp.i18n.__('State/Province/Region', 'surecart'),
        };
        this.address = {
            country: null,
            city: null,
            line_1: null,
            line_2: null,
            postal_code: null,
            state: null,
        };
    }
    async updateAddressState(address) {
        var _a;
        if (JSON.stringify(address) === JSON.stringify(this.address))
            return; // no change, don't update.
        this.address = address;
        try {
            mutations$1.lockCheckout('shipping-address');
            mutations.state.checkout = (await index$1.createOrUpdateCheckout({
                id: (_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.id,
                data: {
                    shipping_address: this.address,
                },
            }));
        }
        catch (e) {
            console.error(e);
        }
        finally {
            mutations$1.unLockCheckout('shipping-address');
        }
    }
    async reportValidity() {
        var _a, _b;
        if (!this.input)
            return true;
        return (_b = (_a = this.input) === null || _a === void 0 ? void 0 : _a.reportValidity) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    prefillAddress() {
        var _a;
        // check if address keys are empty, if so, update them.
        const addressKeys = Object.keys(this.address).filter(key => key !== 'country');
        const emptyAddressKeys = addressKeys.filter(key => !this.address[key]);
        if (emptyAddressKeys.length === addressKeys.length) {
            this.address = { ...this.address, ...(_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.shipping_address };
        }
    }
    componentWillLoad() {
        var _a;
        if (this.defaultCountry && !((_a = this.address) === null || _a === void 0 ? void 0 : _a.country)) {
            this.address.country = this.defaultCountry;
        }
        this.prefillAddress();
        mutations.onChange('checkout', () => this.prefillAddress());
    }
    render() {
        // use full if checkout requires it, it's set, or we're showing/requiring name field.
        if (getters$1.fullShippingAddressRequired() || this.full || this.requireName || this.showName) {
            return (index.h("sc-address", { exportparts: "label, help-text, form-control, input__base, select__base, columns, search__base, menu__base", ref: el => (this.input = el), label: this.label || wp.i18n.__('Shipping Address', 'surecart'), placeholders: {
                    name: this.namePlaceholder,
                    country: this.countryPlaceholder,
                    city: this.cityPlaceholder,
                    line_1: this.line1Placeholder,
                    line_2: this.line2Placeholder,
                    postal_code: this.postalCodePlaceholder,
                    state: this.statePlaceholder,
                }, names: this.names, required: this.required || getters$1.shippingAddressRequired(), loading: getters.formLoading(), address: this.address, "show-name": this.showName, "require-name": this.requireName, onScChangeAddress: e => this.updateAddressState(e.detail) }));
        }
        return (index.h("sc-compact-address", { ref: el => (this.input = el), required: this.required || getters$1.shippingAddressRequired(), loading: getters.formLoading(), address: this.address, placeholders: {
                name: this.namePlaceholder,
                country: this.countryPlaceholder,
                city: this.cityPlaceholder,
                line_1: this.line1Placeholder,
                line_2: this.line2Placeholder,
                postal_code: this.postalCodePlaceholder,
                state: this.statePlaceholder,
            }, names: this.names, label: this.label, onScChangeAddress: e => this.updateAddressState(e.detail) }));
    }
};
ScOrderShippingAddress.style = ScOrderShippingAddressStyle0;

const scOrderTaxIdInputCss = ":host{display:block}";
const ScOrderTaxIdInputStyle0 = scOrderTaxIdInputCss;

const ScOrderTaxIdInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.show = false;
        this.otherLabel = undefined;
        this.caGstLabel = undefined;
        this.auAbnLabel = undefined;
        this.gbVatLabel = undefined;
        this.euVatLabel = undefined;
        this.helpText = undefined;
        this.taxIdTypes = undefined;
        this.taxIdTypesData = [];
    }
    handleTaxIdTypesChange() {
        this.taxIdTypesData = typeof this.taxIdTypes === 'string' ? JSON.parse(this.taxIdTypes) : this.taxIdTypes;
    }
    async reportValidity() {
        return this.input.reportValidity();
    }
    getStatus() {
        var _a, _b, _c, _d, _e;
        if (((_b = (_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.tax_identifier) === null || _b === void 0 ? void 0 : _b.number_type) !== 'eu_vat') {
            return 'unknown';
        }
        if (((_c = mutations.state.taxProtocol) === null || _c === void 0 ? void 0 : _c.eu_vat_unverified_behavior) === 'apply_reverse_charge') {
            return 'unknown';
        }
        return ((_e = (_d = mutations.state.checkout) === null || _d === void 0 ? void 0 : _d.tax_identifier) === null || _e === void 0 ? void 0 : _e.eu_vat_verified) ? 'valid' : 'invalid';
    }
    async updateOrder(tax_identifier) {
        try {
            mutations.updateFormState('FETCH');
            mutations.state.checkout = (await index$1.createOrUpdateCheckout({
                id: mutations.state.checkout.id,
                data: { tax_identifier },
            }));
            mutations.updateFormState('RESOLVE');
        }
        catch (e) {
            console.error(e);
            mutations$2.createErrorNotice(e);
            mutations.updateFormState('REJECT');
        }
    }
    componentWillLoad() {
        this.handleTaxIdTypesChange();
    }
    required() {
        var _a, _b, _c;
        return ((_a = mutations.state.taxProtocol) === null || _a === void 0 ? void 0 : _a.eu_vat_required) && ((_c = (_b = mutations.state.checkout) === null || _b === void 0 ? void 0 : _b.tax_identifier) === null || _c === void 0 ? void 0 : _c.number_type) === 'eu_vat';
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h("sc-tax-id-input", { key: 'c7c10f10f04b5bb89c17a1644ed8b76be95812d3', ref: el => (this.input = el), show: this.show, number: (_b = (_a = mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.tax_identifier) === null || _b === void 0 ? void 0 : _b.number, type: ((_d = (_c = mutations.state.checkout) === null || _c === void 0 ? void 0 : _c.tax_identifier) === null || _d === void 0 ? void 0 : _d.number_type) || ((_e = this.taxIdTypesData) === null || _e === void 0 ? void 0 : _e[0]) || 'eu_vat', country: (_g = (_f = mutations.state.checkout) === null || _f === void 0 ? void 0 : _f.shipping_address) === null || _g === void 0 ? void 0 : _g.country, status: this.getStatus(), loading: getters.formBusy(), onScChange: e => {
                e.stopImmediatePropagation();
                this.updateOrder(e.detail);
            }, otherLabel: this.otherLabel, caGstLabel: this.caGstLabel, auAbnLabel: this.auAbnLabel, gbVatLabel: this.gbVatLabel, euVatLabel: this.euVatLabel, help: this.helpText, taxIdTypes: this.taxIdTypesData, required: this.required() }));
    }
    static get watchers() { return {
        "taxIdTypes": ["handleTaxIdTypesChange"]
    }; }
};
ScOrderTaxIdInput.style = ScOrderTaxIdInputStyle0;

const scRadioCss = ":host{display:inline-block}::slotted([slot=description]){display:block;color:var(--sc-radio-description-color, var(--sc-input-help-text-color, var(--sc-color-gray-500)));line-height:var(--sc-line-height-dense);margin:0.5em 0 0;font-size:var(--sc-font-size-small)}.radio{display:inline-flex;align-items:flex-start;font-family:var(--sc-input-font-family);font-size:var(--sc-input-font-size-medium);font-weight:var(--sc-input-font-weight);color:var(--sc-input-color);vertical-align:middle;gap:var(--sc-spacing-xx-small)}.radio:not(.radio--editing){cursor:pointer}.radio__icon{display:inline-flex;width:var(--sc-radio-size);height:var(--sc-radio-size)}.radio__icon svg{width:100%;height:100%}.radio__control{flex:0 0 auto;position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--sc-radio-size);height:var(--sc-radio-size);border:solid var(--sc-input-border-width) var(--sc-input-border-color);border-radius:50%;background-color:var(--sc-input-background-color);color:transparent;transition:var(--sc-input-transition, var(--sc-transition-medium)) border-color, var(--sc-input-transition, var(--sc-transition-medium)) opacity, var(--sc-input-transition, var(--sc-transition-medium)) background-color, var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.radio__control input[type=radio]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover{border-color:var(--sc-input-border-color-hover);background-color:var(--sc-input-background-color-hover)}.radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control{border-color:var(--sc-input-border-color-focus);background-color:var(--sc-input-background-color-focus);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--checked .radio__control{color:var(--var-sc-checked-radio-background-color, var(--sc-input-background-color));border-color:var(--sc-color-primary-500);background-color:var(--sc-color-primary-500)}.radio.radio--checked:not(.radio--disabled) .radio__control:hover{opacity:0.8}.radio.radio--checked:not(.radio--disabled).radio--focused .radio__control{border-color:var(--var-sc-checked-radio-border-color, var(--sc-input-background-color));background-color:var(--sc-color-primary-500);box-shadow:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary)}.radio--disabled{opacity:0.5;cursor:not-allowed}.radio:not(.radio--checked) svg circle{opacity:0}.radio__label{line-height:var(--sc-radio-size);margin-left:0.5em;user-select:none}";
const ScRadioStyle0 = scRadioCss;

let id = 0;
const ScRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scBlur = index.createEvent(this, "scBlur", 7);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.scFocus = index.createEvent(this, "scFocus", 7);
        this.inputId = `radio-${++id}`;
        this.labelId = `radio-label-${id}`;
        this.hasFocus = false;
        this.name = undefined;
        this.value = undefined;
        this.disabled = false;
        this.checked = false;
        this.required = false;
        this.invalid = false;
        this.edit = undefined;
    }
    /** Simulates a click on the radio. */
    async ceClick() {
        this.input.click();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    async reportValidity() {
        this.invalid = !this.input.checkValidity();
        return this.input.reportValidity();
    }
    handleCheckedChange() {
        if (!this.input)
            return;
        if (this.checked) {
            this.getSiblingRadios().map(radio => (radio.checked = false));
        }
        this.input.checked = this.checked;
        this.scChange.emit();
    }
    handleClick() {
        this.checked = true;
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
    setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
    }
    getAllRadios() {
        const radioGroup = this.el.closest('sc-radio-group');
        // Radios must be part of a radio group
        if (!radioGroup) {
            return [];
        }
        return [...radioGroup.querySelectorAll('sc-radio')];
    }
    getSiblingRadios() {
        return this.getAllRadios().filter(radio => radio !== this.el);
    }
    handleKeyDown(event) {
        if (this.edit)
            return true;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
            const radios = this.getAllRadios().filter(radio => !radio.disabled);
            const incr = ['ArrowUp', 'ArrowLeft'].includes(event.key) ? -1 : 1;
            let index = radios.indexOf(this.el) + incr;
            if (index < 0)
                index = radios.length - 1;
            if (index > radios.length - 1)
                index = 0;
            this.getAllRadios().map(radio => (radio.checked = false));
            radios[index].focus();
            radios[index].checked = true;
            event.preventDefault();
        }
    }
    // Prevent clicks on the label from briefly blurring the input
    handleMouseDown(event) {
        if (this.edit)
            return true;
        event.preventDefault();
        this.input.focus();
    }
    componentDidLoad() {
        this.formController = new formData.FormSubmitController(this.el, {
            value: (control) => (control.checked ? control.value : undefined),
        }).addFormData();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.formController) === null || _a === void 0 ? void 0 : _a.removeFormData();
    }
    render() {
        const Tag = this.edit ? 'div' : 'label';
        return (index.h(Tag, { key: 'ff1da5807674eb6e1e20c328652e338c32df8512', part: "base", class: {
                'radio': true,
                'radio--checked': this.checked,
                'radio--disabled': this.disabled,
                'radio--focused': this.hasFocus,
                'radio--editing': this.edit,
            }, htmlFor: this.inputId, onKeyDown: e => this.handleKeyDown(e), onMouseDown: e => this.handleMouseDown(e) }, index.h("span", { key: '5f8913fafa60974e3d498a8c362677207140283d', part: "control", class: "radio__control" }, index.h("span", { key: 'd62c678882b5ab0b7370dbbfd3f384822a285006', part: "checked-icon", class: "radio__icon" }, index.h("svg", { key: 'a080805b57c977b671c042d0bee5a6d044fa3cf2', viewBox: "0 0 16 16" }, index.h("g", { key: 'f360ae9427cf12b9051696cf94fd8723a2bdc934', stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" }, index.h("g", { key: 'a04f5c27fca2c4df61b969b9c02da114732f0f7f', fill: "currentColor" }, index.h("circle", { key: 'e17ea872bc965f0250163dd4f3fb475d68db63bd', cx: "8", cy: "8", r: "3.42857143" }))))), index.h("input", { key: 'da17256673601f91bd554429c4c7cfe4214a2580', id: this.inputId, ref: el => (this.input = el), type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, required: this.required, "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-labelledby": this.labelId, onClick: () => this.handleClick(), onBlur: () => this.handleBlur(), onFocus: () => this.handleFocus() })), index.h("span", { key: '3030e04699df2ef5dbe877b0d448edf68307b961', part: "label", id: this.labelId, class: "radio__label" }, index.h("slot", { key: '3c1569e54b5b29a8dc9e32d4ff0ba2e2f3704462' }), index.h("slot", { key: '2301d8ad703c6111031b2cff480f1f89596d7f21', name: "description" }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
ScRadio.style = ScRadioStyle0;

const scRadioGroupCss = ":host{display:block}.radio-group{border:none;padding:0;margin:0;min-width:0}.radio-group .radio-group__label{display:inline-block;padding:0;color:var(--sc-input-label-color);font-weight:var(--sc-input-label-font-weight);text-transform:var(--sc-input-label-text-transform, none);letter-spacing:var(--sc-input-label-letter-spacing, 0);margin-bottom:var(--sc-input-label-margin)}.radio-group__hidden-input{position:absolute;opacity:0;padding:0px;margin:0px;pointer-events:none}.radio-group--is-required .radio-group__label:after{content:\" *\";color:var(--sc-color-danger-500)}::slotted(sc-radio:not(:last-of-type)){display:block;margin-bottom:var(--sc-spacing-x-small)}.radio-group--is-rtl.radio-group,.radio-group--is-rtl.radio-group .radio-group__label{text-align:right}";
const ScRadioGroupStyle0 = scRadioGroupCss;

const ScRadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.label = '';
        this.invalid = undefined;
        this.value = '';
        this.required = undefined;
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    async reportValidity() {
        this.invalid = !this.input.checkValidity();
        return this.input.reportValidity();
    }
    handleRadioClick(event) {
        if (event.target.tagName !== 'SC-RADIO')
            return;
        event.stopImmediatePropagation();
        const target = event.target;
        if (target.disabled) {
            return;
        }
        if (target.checked) {
            this.value = target.value;
            this.scChange.emit(target.value);
        }
    }
    componentDidLoad() {
        const choices = [...this.el.querySelectorAll('sc-radio')];
        choices.forEach(choice => {
            if (choice.checked) {
                this.value = choice.value;
            }
        });
    }
    render() {
        return (index.h("fieldset", { key: 'c22fb5993eb9405e51d817c6f22a12e60d0534e0', part: "base", class: {
                'radio-group': true,
                'radio-group--invalid': this.invalid,
                'radio-group--is-required': this.required,
                'radio-group--is-rtl': pageAlign.isRtl(),
            }, "aria-invalid": this.invalid, role: "radiogroup" }, index.h("legend", { key: 'c46d5c06133dd0b22a9e22af952ae11dd886b956', part: "label", class: "radio-group__label" }, index.h("slot", { key: '3544868fa6b0d1765da36b1127fae4e8d72a26ac', name: "label" }, this.label)), index.h("input", { key: '5bc4415a960be4aa497201e1ea1b5e484b638ff3', type: "text", class: "radio-group__hidden-input", ref: el => (this.input = el), required: this.required, value: this.value, tabindex: "-1" }), index.h("div", { key: 'eaf7f528acc1d841b1265e8a6bbaf120c654de0e', part: "items", class: "radio-group__items" }, index.h("slot", { key: 'c3f98c182259bad38565fe79f2387f9acedc7139' }))));
    }
    get el() { return index.getElement(this); }
};
ScRadioGroup.style = ScRadioGroupStyle0;

const scShippingChoicesCss = ":host{display:block}.shipping-choice{width:100%;padding:var(--sc-spacing-medium);margin:0;box-sizing:border-box;border-bottom:var(--sc-input-border, 1px solid var(--sc-color-gray-300));background-color:var(--sc-shipping-choice-background-color, var(--sc-input-background-color))}.shipping-choice__empty{background:var(--sc-alert-background-color, var(--sc-color-gray-100));opacity:0.75;padding:var(--sc-spacing-large);border-radius:var(--sc-input-border-radius-medium);line-height:var(--sc-line-height-dense);font-size:var(--sc-font-size-small);border:solid 1px var(--sc-input-border-color, var(--sc-input-border))}.shipping-choice:last-child{border-bottom-width:0}.shipping-choice__text{display:flex;flex-direction:column;gap:var(--sc-spacing-xx-small)}.shipping-choice__price{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));white-space:nowrap;display:var(--sc-shipping-choice-price-display, inherit)}.shipping-choice__name{display:inline-block;color:var(--sc-price-choice-name-color, var(--sc-input-label-color));font-size:var(--sc-price-choice-name-size, var(--sc-input-label-font-size-medium));font-weight:var(--sc-price-choice-name-font-weight, var(--sc-font-weight-bold));text-transform:var(--sc-price-choice-text-transform, var(--sc-input-label-text-transform, none));line-height:var(--sc-shipping-name-line-height, 1)}.shipping-choice__description{color:var(--sc-input-label-color);font-weight:var(--sc-price-choice-price-font-weight, var(--sc-font-weight-normal));line-height:var(--sc-shipping-description-line-height, 1.2)}sc-radio-group::part(items){border:var(--sc-input-border, 1px solid var(--sc-color-gray-300));border-radius:var(--sc-shipping-choice-border-radius, var(--sc-input-border-radius-medium));box-shadow:var(--sc-shipping-box-shadow, var(--sc-input-box-shadow));overflow:hidden;position:relative}sc-radio::part(base){width:100%}sc-radio::part(label){width:100%;display:flex;justify-content:space-between;gap:var(--sc-spacing-small)}sc-radio-group::slotted(sc-radio:not(:last-of-type)){margin-bottom:0}";
const ScShippingChoicesStyle0 = scShippingChoicesCss;

const ScShippingChoices = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.label = undefined;
        this.showDescription = true;
    }
    /** Maybe update the order. */
    async updateCheckout(selectedShippingChoiceId) {
        if (!selectedShippingChoiceId)
            return;
        try {
            mutations$1.lockCheckout('selected_shipping_choice');
            mutations.state.checkout = (await index$1.createOrUpdateCheckout({
                id: mutations.state.checkout.id,
                data: {
                    selected_shipping_choice_id: selectedShippingChoiceId,
                },
            }));
            index$2.speak(wp.i18n.__('Shipping choice updated.', 'surecart'), 'assertive');
            const { total_amount, currency } = mutations.state.checkout;
            /** translators: %1$s: formatted amount */
            index$2.speak(wp.i18n.sprintf(wp.i18n.__('Your order total has changed to: %1$s.', 'surecart'), price.getFormattedPrice({ amount: total_amount, currency })), 'assertive');
        }
        catch (e) {
            console.error(e);
            mutations$2.createErrorNotice(e);
        }
        finally {
            mutations$1.unLockCheckout('selected_shipping_choice');
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        // shipping choice is not rewquired.
        if (!((_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice_required)) {
            return index.h(index.Host, { style: { display: 'none' } });
        }
        // no shipping choices but no country either
        if (!((_d = (_c = (_b = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _b === void 0 ? void 0 : _b.shipping_choices) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.length) && !((_f = (_e = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _e === void 0 ? void 0 : _e.shipping_address) === null || _f === void 0 ? void 0 : _f.country)) {
            return (index.h("sc-form-control", { label: this.label || wp.i18n.__('Shipping', 'surecart') }, index.h("div", { class: "shipping-choice__empty" }, wp.i18n.__('To check available shipping choices, please provide your shipping country in the address section.', 'surecart'))));
        }
        // no shipping choices yet.
        if (!((_j = (_h = (_g = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _g === void 0 ? void 0 : _g.shipping_choices) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.length)) {
            return (index.h("sc-form-control", { part: "empty", label: this.label || wp.i18n.__('Shipping', 'surecart') }, index.h("div", { class: "shipping-choice__empty" }, wp.i18n.__('Sorry, we are not able to ship to your address.', 'surecart'))));
        }
        return (index.h(index.Host, null, index.h("sc-radio-group", { part: "base", label: this.label || wp.i18n.__('Shipping', 'surecart'), class: "shipping-choices", onScChange: e => this.updateCheckout(e.detail) }, (((_l = (_k = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _k === void 0 ? void 0 : _k.shipping_choices) === null || _l === void 0 ? void 0 : _l.data) || []).map(({ id, amount, currency, shipping_method }) => {
            var _a;
            return (index.h("sc-radio", { key: id, checked: ((_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.selected_shipping_choice) === id, exportparts: "base:radio__base,label:radio__label,control:radio__control,checked-icon:radio__checked-icon", class: "shipping-choice", value: id }, index.h("div", { class: "shipping-choice__text" }, index.h("div", { class: "shipping-choice__name" }, (shipping_method === null || shipping_method === void 0 ? void 0 : shipping_method.name) || wp.i18n.__('Standard Shipping', 'surecart')), this.showDescription && !!(shipping_method === null || shipping_method === void 0 ? void 0 : shipping_method.description) && (index.h("div", { class: "shipping-choice__description" }, shipping_method === null || shipping_method === void 0 ? void 0 : shipping_method.description))), index.h("div", { class: "shipping-choice__price" }, !!amount ? index.h("sc-format-number", { type: "currency", value: amount, currency: currency }) : wp.i18n.__('Free', 'surecart'))));
        })), getters$1.checkoutIsLocked('selected_shipping_choice') && index.h("sc-block-ui", null)));
    }
};
ScShippingChoices.style = ScShippingChoicesStyle0;

exports.sc_compact_address = ScCompactAddress;
exports.sc_invoice_details = ScInvoiceDetails;
exports.sc_invoice_memo = ScLineItemInvoiceMemo;
exports.sc_line_item_invoice_due_date = ScLineItemInvoiceDueDate;
exports.sc_line_item_invoice_number = ScLineItemInvoiceNumber;
exports.sc_line_item_invoice_receipt_download = ScLineItemInvoiceReceiptDownload;
exports.sc_line_item_shipping = ScLineItemShipping;
exports.sc_line_item_tax = ScLineItemTax;
exports.sc_order_billing_address = ScOrderBillingAddress;
exports.sc_order_bump = ScOrderBump;
exports.sc_order_bumps = ScOrderBumps;
exports.sc_order_shipping_address = ScOrderShippingAddress;
exports.sc_order_tax_id_input = ScOrderTaxIdInput;
exports.sc_radio = ScRadio;
exports.sc_radio_group = ScRadioGroup;
exports.sc_shipping_choices = ScShippingChoices;

//# sourceMappingURL=sc-compact-address_16.cjs.entry.js.map