'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const fetch = require('./fetch-f25a0cb0.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');

const scCustomerEditCss = ":host{display:block;position:relative}.customer-edit{display:grid;gap:0.75em}";
const ScCustomerEditStyle0 = scCustomerEditCss;

const ScCustomerEdit = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.customer = undefined;
        this.successUrl = undefined;
        this.loading = undefined;
        this.error = undefined;
    }
    async handleSubmit(e) {
        var _a;
        this.loading = true;
        try {
            const { email, first_name, last_name, phone, billing_matches_shipping, shipping_name, shipping_city, 'tax_identifier.number_type': tax_identifier_number_type, 'tax_identifier.number': tax_identifier_number, shipping_country, shipping_line_1, shipping_postal_code, shipping_state, billing_name, billing_city, billing_country, billing_line_1, billing_postal_code, billing_state, } = await e.target.getFormJson();
            this.customer.billing_address = {
                name: billing_name,
                city: billing_city,
                country: billing_country,
                line_1: billing_line_1,
                postal_code: billing_postal_code,
                state: billing_state,
            };
            this.customer.shipping_address = {
                name: shipping_name,
                city: shipping_city,
                country: shipping_country,
                line_1: shipping_line_1,
                postal_code: shipping_postal_code,
                state: shipping_state,
            };
            await fetch.apiFetch({
                path: addQueryArgs.addQueryArgs(`surecart/v1/customers/${(_a = this.customer) === null || _a === void 0 ? void 0 : _a.id}`, { expand: ['tax_identifier'] }),
                method: 'PATCH',
                data: {
                    email,
                    first_name,
                    last_name,
                    phone,
                    billing_matches_shipping: billing_matches_shipping === 'on',
                    shipping_address: this.customer.shipping_address,
                    billing_address: this.customer.billing_address,
                    ...(tax_identifier_number && tax_identifier_number_type
                        ? {
                            tax_identifier: {
                                number: tax_identifier_number,
                                number_type: tax_identifier_number_type,
                            },
                        }
                        : {}),
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (index.h("sc-dashboard-module", { key: 'f48f16084c6b09a3fb86aaf0119cc8b0202047b4', class: "customer-edit", error: this.error }, index.h("span", { key: 'da3c6d835ae66876d37ae3871959f8a6ff40ac43', slot: "heading" }, this.heading || wp.i18n.__('Update Billing Details', 'surecart'), ' ', !((_a = this === null || this === void 0 ? void 0 : this.customer) === null || _a === void 0 ? void 0 : _a.live_mode) && (index.h("sc-tag", { key: 'e430f1c7ca8c29b009d391a94b65a324f4482ec3', type: "warning", size: "small" }, wp.i18n.__('Test', 'surecart')))), index.h("sc-card", { key: '8bffc4a434b8548ea7160eed6160d337a0178b7c' }, index.h("sc-form", { key: 'b89a0c6e2494e1535f28a3fbd0e18f6c63bd710b', onScFormSubmit: e => this.handleSubmit(e) }, index.h("sc-columns", { key: '30c0cc799afe2c2acb903d09c627fe4eab73cb21', style: { '--sc-column-spacing': 'var(--sc-spacing-medium)' } }, index.h("sc-column", { key: '84ea049f3e780feb540fc399e32b398b669cab8b' }, index.h("sc-input", { key: '86087631025150ea21377bd9b4982551a6fe755c', label: wp.i18n.__('First Name', 'surecart'), name: "first_name", value: (_b = this.customer) === null || _b === void 0 ? void 0 : _b.first_name })), index.h("sc-column", { key: '4a9b00755cba9b5e0195625e701a6fff38bb67ad' }, index.h("sc-input", { key: '3d1c675781941be8e52021c5f8671cd861bf87f7', label: wp.i18n.__('Last Name', 'surecart'), name: "last_name", value: (_c = this.customer) === null || _c === void 0 ? void 0 : _c.last_name }))), index.h("sc-column", { key: 'f7c22b196d87b999430d39f5ca48eb09a04e3101' }, index.h("sc-phone-input", { key: '46d81455eb4b177082d64e49eba9c90b60255a64', label: wp.i18n.__('Phone', 'surecart'), name: "phone", value: (_d = this.customer) === null || _d === void 0 ? void 0 : _d.phone })), index.h("sc-flex", { key: 'f4b716e0781280c4541c42a6342f9d8f7f3fbe23', style: { '--sc-flex-column-gap': 'var(--sc-spacing-medium)' }, flexDirection: "column" }, index.h("div", { key: '2c441429c1fa1247b70190ce9663d2f0ef221467' }, index.h("sc-address", { key: 'c18097241f16bf4828cb73f4055e5e000bda4223', label: wp.i18n.__('Shipping Address', 'surecart'), showName: true, address: {
                ...(_e = this.customer) === null || _e === void 0 ? void 0 : _e.shipping_address,
            }, required: false, names: {
                name: 'shipping_name',
                country: 'shipping_country',
                line_1: 'shipping_line_1',
                line_2: 'shipping_line_2',
                city: 'shipping_city',
                postal_code: 'shipping_postal_code',
                state: 'shipping_state',
            } })), index.h("div", { key: 'df9581e50182883ed28b272ae1c58c7d1aff2510' }, index.h("sc-checkbox", { key: '2f46029de8bfbca0d4b8bc998e940285f95d8fa4', name: "billing_matches_shipping", checked: (_f = this.customer) === null || _f === void 0 ? void 0 : _f.billing_matches_shipping, onScChange: e => {
                this.customer = {
                    ...this.customer,
                    billing_matches_shipping: e.target.checked,
                };
            } }, wp.i18n.__('Billing address is same as shipping', 'surecart'))), index.h("div", { key: '84d6f21983458acbcb1febb7a5556886a3376e93', style: { display: ((_g = this.customer) === null || _g === void 0 ? void 0 : _g.billing_matches_shipping) ? 'none' : 'block' } }, index.h("sc-address", { key: '4c6ab86de50e7d19e2fd31f25df6aa2cde76d769', label: wp.i18n.__('Billing Address', 'surecart'), showName: true, address: {
                ...(_h = this.customer) === null || _h === void 0 ? void 0 : _h.billing_address,
            }, names: {
                name: 'billing_name',
                country: 'billing_country',
                line_1: 'billing_line_1',
                line_2: 'billing_line_2',
                city: 'billing_city',
                postal_code: 'billing_postal_code',
                state: 'billing_state',
            }, required: true })), index.h("sc-tax-id-input", { key: '28465587813c27f71af2f7f5ec1a641dcaa54b9f', show: true, number: (_k = (_j = this.customer) === null || _j === void 0 ? void 0 : _j.tax_identifier) === null || _k === void 0 ? void 0 : _k.number, type: (_m = (_l = this.customer) === null || _l === void 0 ? void 0 : _l.tax_identifier) === null || _m === void 0 ? void 0 : _m.number_type })), index.h("div", { key: 'e5e2be0bc5982818ca553cc9366e5c45746738fd' }, index.h("sc-button", { key: 'c97f0178fefa5f0ee547ff5eb609db009c513b5f', type: "primary", full: true, submit: true }, wp.i18n.__('Save', 'surecart'))))), this.loading && index.h("sc-block-ui", { key: '169220df15564edc71a2fb50a2bffd89c724cf9b', spinner: true })));
    }
};
ScCustomerEdit.style = ScCustomerEditStyle0;

exports.sc_customer_edit = ScCustomerEdit;

//# sourceMappingURL=sc-customer-edit.cjs.entry.js.map