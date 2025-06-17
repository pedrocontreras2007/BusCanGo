'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const pageAlign = require('./page-align-5a2ab493.js');

const scProductLineItemCss = ":host {\n  display: block;\n  font-family: var(--sc-font-sans);\n}\n\n.item {\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 100%;\n  border-bottom: none;\n}\n.item--has-image {\n  align-items: center;\n  container-type: inline-size;\n}\n@container (max-width: 290px) {\n  .item--has-image .item__image {\n    display: none;\n  }\n}\n.item__scratch-price {\n  opacity: 0.75;\n  font-size: 90%;\n  text-decoration: line-through;\n}\n\n.item__text {\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  gap: 6px;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex: 1 1 0%;\n}\n\n.item__text-details {\n  display: grid;\n}\n\n.item__title {\n  box-sizing: border-box;\n  min-width: 0px;\n  margin: 0;\n  color: var(--sc-line-item-title-color, var(--sc-input-label-color));\n  font-size: var(--sc-font-size-medium);\n  font-weight: var(--sc-font-weight-semibold);\n  line-height: var(--sc-line-height-dense);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item__variant {\n  box-sizing: border-box;\n  min-width: 0px;\n  margin: 0;\n  color: var(--sc-input-label-color);\n  font-weight: var(--sc-font-weight-semibold);\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item__suffix {\n  flex: 1;\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-width: 100px;\n  margin-left: auto;\n  align-self: center;\n}\n\n.product-line-item__removable .item__suffix {\n  align-self: flex-start;\n}\n\n.product-line-item__editable .item__suffix {\n  align-self: flex-start;\n}\n\n.product-line-item__purchasable-status {\n  font-size: var(--sc-font-size-x-small);\n  color: var(--sc-input-error-text-color);\n}\n\n.item__price {\n  text-align: right;\n  max-width: 100%;\n}\n\n.item__description {\n  color: var(--sc-price-label-color, var(--sc-input-help-text-color));\n  font-size: var(--sc-price-label-font-size, var(--sc-input-help-text-font-size-medium));\n  line-height: var(--sc-line-height-dense);\n}\n\n.item__image,\n.attachment-thumbnail {\n  width: var(--sc-product-line-item-image-size, 4em);\n  height: var(--sc-product-line-item-image-size, 4em);\n  object-fit: cover;\n  border-radius: 4px;\n  border: solid 1px var(--sc-input-border-color, var(--sc-input-border));\n  display: block;\n  box-shadow: var(--sc-input-box-shadow);\n  align-self: flex-start;\n}\n\n.product__description {\n  display: flex;\n  gap: 0.5em;\n  align-items: center;\n}\n\n.price {\n  font-size: var(--sc-font-size-medium);\n  font-weight: var(--sc-font-weight-semibold);\n  color: var(--sc-input-label-color);\n  line-height: var(--sc-line-height-dense);\n}\n\n.price__description {\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-input-label-color);\n  opacity: 0.75;\n}\n\n.item__remove {\n  cursor: pointer;\n  color: var(--sc-color-gray-400);\n  margin-bottom: var(--sc-spacing-small);\n}\n\n.actions__divider {\n  opacity: 0.25;\n  margin: 0 0.2em;\n}\n\n.item--is-rtl.price {\n  text-align: right;\n}\n.item--is-rtl .item__price {\n  text-align: left;\n}\n\n.base {\n  display: grid;\n  gap: var(--sc-spacing-x-small);\n}\n\n.fee__description {\n  opacity: 0.75;\n}";
const ScProductLineItemStyle0 = scProductLineItemCss;

const ScProductLineItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scUpdateQuantity = index.createEvent(this, "scUpdateQuantity", 3);
        this.scRemove = index.createEvent(this, "scRemove", 3);
        this.image = undefined;
        this.name = undefined;
        this.priceName = undefined;
        this.variantLabel = '';
        this.quantity = undefined;
        this.amount = undefined;
        this.fees = undefined;
        this.setupFeeTrialEnabled = true;
        this.scratchAmount = undefined;
        this.currency = undefined;
        this.interval = undefined;
        this.trialDurationDays = undefined;
        this.removable = undefined;
        this.editable = true;
        this.max = undefined;
        this.sku = '';
        this.purchasableStatusDisplay = undefined;
    }
    renderPriceAndInterval() {
        const setupFee = (this.fees || []).find(fee => fee.fee_type === 'setup');
        if (this.trialDurationDays) {
            return (index.h("div", { class: "item__price", part: "price" }, index.h("div", { class: "price", part: "price__amount" }, !!setupFee && !this.setupFeeTrialEnabled ? (index.h(index.Fragment, null, setupFee === null || setupFee === void 0 ? void 0 :
                setupFee.description, " ", index.h("sc-format-number", { part: "price__amount", type: "currency", currency: this.currency, value: setupFee.amount }))) : (wp.i18n.sprintf(wp.i18n._n('%d day free', '%d days free', this.trialDurationDays, 'surecart'), this.trialDurationDays))), index.h("div", { class: "price__description", part: "price__description" }, 
            /** translators: 30 days free, Then $99 per month. */
            wp.i18n.__('Then', 'surecart'), ' ', !!this.scratchAmount && this.scratchAmount > this.amount && (index.h(index.Fragment, null, index.h("sc-format-number", { class: "item__scratch-price", part: "price__scratch", type: "currency", currency: this.currency, value: this.scratchAmount }), ' ')), index.h("sc-format-number", { part: "price__amount", type: "currency", currency: this.currency, value: this.amount }), " ", !!this.interval && this.interval, !!setupFee && !this.setupFeeTrialEnabled && wp.i18n.sprintf(wp.i18n._n('starting in %d day', 'starting in %d days', this.trialDurationDays, 'surecart'), this.trialDurationDays))));
        }
        return (index.h("div", { class: "item__price", part: "price" }, index.h("div", { class: "price", part: "price__amount" }, !!this.scratchAmount && this.scratchAmount !== this.amount && (index.h(index.Fragment, null, index.h("sc-format-number", { class: "item__scratch-price", type: "currency", currency: this.currency, value: this.scratchAmount }), ' ')), index.h("sc-format-number", { type: "currency", currency: this.currency, value: this.amount })), !!this.interval && (index.h("div", { class: "price__description", part: "price__description" }, this.interval))));
    }
    renderPurchasableStatus() {
        if (!this.purchasableStatusDisplay)
            return null;
        return (index.h("div", { class: "item__price", part: "price" }, index.h("div", { class: "product-line-item__purchasable-status", part: "price__amount" }, this.purchasableStatusDisplay)));
    }
    render() {
        var _a, _b;
        return (index.h("div", { key: '3d7c7409319e1f110efa7a115d28481c0617ad6c', class: "base", part: "base" }, index.h("div", { key: '940603baadf97cfafcf4a63981fcbe20ef507802', part: "product-line-item", class: {
                'item': true,
                'item--has-image': !!((_a = this.image) === null || _a === void 0 ? void 0 : _a.src),
                'item--is-rtl': pageAlign.isRtl(),
                'product-line-item__editable': this.editable,
                'product-line-item__removable': this.removable,
            } }, !!((_b = this.image) === null || _b === void 0 ? void 0 : _b.src) && index.h("img", { key: 'fe377bccb4f28363073e2df34d754c1b06eb2540', ...this.image, part: "image" }), index.h("div", { key: '1ae94a88404d3681d5d3e1a3d6e3ab027360e322', class: "item__text", part: "text" }, index.h("div", { key: '607ada73ea5a07c6fb6fa9f03334e436fab9233d', class: "item__text-details" }, index.h("div", { key: 'c333fd90e4c2ee623227c7c42758b42e2953c478', class: "item__title", part: "title" }, index.h("slot", { key: 'ee6fad859e67a27f9889a326ebd04e2910f0cbe2', name: "title" }, this.name)), index.h("div", { key: '58f781734173cc14a59c5b11b7a8d358e9ff0553', class: "item__description item__price-variant", part: "description" }, index.h("div", { key: '127164a563aa88ebd17440d0ccefcb6d9441eda4' }, this.variantLabel), index.h("div", { key: '0b5ad6e1a52b097566f2201f39f2eeec89a11634' }, this.priceName), !!this.sku && (index.h("div", { key: '77645a7bb01aa35932b5b3264314a25d45effc49' }, wp.i18n.__('SKU:', 'surecart'), " ", this.sku))), !this.editable && this.quantity > 1 && (index.h("span", { key: 'e8d239539e1a2e80105b01d1c2247bddb538b4e3', class: "item__description", part: "static-quantity" }, wp.i18n.__('Qty:', 'surecart'), " ", this.quantity))), this.editable && (index.h("sc-quantity-select", { key: '11ea246bec03505153e18052a047c5482246cf77', max: this.max || Infinity, exportparts: "base:quantity, minus:quantity__minus, minus-icon:quantity__minus-icon, plus:quantity__plus, plus-icon:quantity__plus-icon, input:quantity__input", clickEl: this.el, quantity: this.quantity, size: "small", onScChange: e => e.detail && this.scUpdateQuantity.emit(e.detail), "aria-label": 
            /** translators: %1$s: product name, %2$s: product price name */
            wp.i18n.sprintf(wp.i18n.__('Change Quantity - %1$s %2$s', 'surecart'), this.name, this.priceName) }))), index.h("div", { key: 'be436ad807edcd9a921c7da805c85f9e22ec726f', class: "item__suffix", part: "suffix" }, this.removable ? (index.h("sc-icon", { exportparts: "base:remove-icon__base", class: "item__remove", name: "x", onClick: () => this.scRemove.emit(), onKeyDown: e => {
                if (e.key === 'Enter') {
                    this.scRemove.emit();
                }
            }, tabindex: "0", "aria-label": wp.i18n.sprintf(wp.i18n.__('Remove Item - %1$s %2$s', 'surecart'), this.name, this.priceName) })) : (index.h("div", null)), this.renderPriceAndInterval(), this.renderPurchasableStatus())), (this.fees || []).map(fee => {
            if (this.trialDurationDays && !this.setupFeeTrialEnabled && fee.fee_type === 'setup')
                return null;
            return (index.h("sc-line-item", { exportparts: "price-description:line-item__price-description" }, index.h("sc-format-number", { slot: "price-description", type: "currency", value: fee === null || fee === void 0 ? void 0 : fee.amount, currency: this.currency || 'usd' }), index.h("span", { slot: "price-description", class: "fee__description" }, fee === null || fee === void 0 ? void 0 : fee.description)));
        })));
    }
    get el() { return index.getElement(this); }
};
ScProductLineItem.style = ScProductLineItemStyle0;

const scQuantitySelectCss = ":host{--focus-ring:0 0 0 var(--sc-focus-ring-width) var(--sc-focus-ring-color-primary);--border-radius:var(--sc-quantity-border-radius, var(--sc-input-border-radius-small));display:inline-block}.input__control{text-align:center;line-height:1;border:none;flex:1;max-width:var(--sc-quantity-input-max-width, 35px);background-color:var(--sc-input-control-background-color, var(--sc-color-white));color:var(--sc-input-control-color, var(--sc-color-black));-moz-appearance:textfield}.input__control::-webkit-outer-spin-button,.input__control::-webkit-inner-spin-button{-webkit-appearance:none}.input__control::-webkit-search-decoration,.input__control::-webkit-search-cancel-button,.input__control::-webkit-search-results-button,.input__control::-webkit-search-results-decoration{-webkit-appearance:none}.input__control:-webkit-autofill,.input__control:-webkit-autofill:hover,.input__control:-webkit-autofill:focus,.input__control:-webkit-autofill:active{box-shadow:0 0 0 var(--sc-input-height-large) var(--sc-input-background-color-hover) inset !important;-webkit-text-fill-color:var(--sc-input-color)}.input__control::placeholder{color:var(--sc-input-placeholder-color);user-select:none}.input__control:focus{outline:none}.quantity--trigger{cursor:pointer;white-space:nowrap}.quantity{position:relative;display:inline-block;width:var(--sc-quantity-select-width, 100px);height:var(--sc-quantity-control-height, var(--sc-input-height-small));display:flex;align-items:stretch;font-family:var(--sc-input-font-family);font-weight:var(--sc-input-font-weight);letter-spacing:var(--sc-input-letter-spacing);background-color:var(--sc-input-background-color);border:var(--sc-input-border);border-radius:var(--border-radius);vertical-align:middle;box-shadow:var(--sc-input-box-shadow);transition:var(--sc-input-transition, var(--sc-transition-medium)) color, var(--sc-input-transition, var(--sc-transition-medium)) border, var(--sc-input-transition, var(--sc-transition-medium)) box-shadow}.quantity:hover:not(.quantity--disabled){background-color:var(--sc-input-background-color-hover);border-color:var(--sc-input-border-color-hover)}.quantity:hover:not(.quantity--disabled) .quantity__control{color:var(--sc-input-color-hover)}.quantity.quantity--focused:not(.quantity--disabled){background-color:var(--sc-input-background-color-focus);border-color:var(--sc-input-border-color-focus);box-shadow:var(--focus-ring)}.quantity.quantity--focused:not(.quantity--disabled) .quantity__control{color:var(--sc-input-color-focus)}.quantity.quantity--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.quantity.quantity--disabled .input__control{color:var(--sc-input-color-disabled)}.quantity.quantity--disabled .input__control::placeholder{color:var(--sc-input-placeholder-color-disabled)}.button__decrease,.button__increase{display:inline-block;text-align:center;vertical-align:middle;line-height:0;height:auto;top:1px;bottom:1px;width:32px;background:var(--sc-input-background-color);color:var(--sc-input-help-text-color);cursor:pointer;font-size:13px;user-select:none;border-width:0;padding:0}.button__decrease:hover:not(.button--disabled) .quantity__control,.button__increase:hover:not(.button--disabled) .quantity__control{color:var(--sc-input-color-hover)}.button__decrease.button--disabled,.button__increase.button--disabled{background-color:var(--sc-input-background-color-disabled);border-color:var(--sc-input-border-color-disabled);opacity:0.5;cursor:not-allowed}.quantity--small{width:var(--sc-quantity-select-width-small, 76px);height:var(--sc-quantity-control-height-small, 26px)}.quantity--small .button__decrease,.quantity--small .button__increase{width:24px;border:none}.quantity--small .input__control{max-width:24px}.button__decrease{left:1px;border-radius:var(--border-radius) 0 0 var(--border-radius);border-right:var(--sc-input-border)}.button__increase{right:1px;border-radius:0 var(--border-radius) var(--border-radius) 0;border-left:var(--sc-input-border)}.quantity--is-rtl .button__decrease{right:1px;border-left:var(--sc-input-border);border-right:0}.quantity--is-rtl .button__increase{left:1px;border-right:var(--sc-input-border);border-left:0}";
const ScQuantitySelectStyle0 = scQuantitySelectCss;

const ScQuantitySelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scChange = index.createEvent(this, "scChange", 7);
        this.scInput = index.createEvent(this, "scInput", 7);
        this.scFocus = index.createEvent(this, "scFocus", 7);
        this.scBlur = index.createEvent(this, "scBlur", 7);
        this.clickEl = undefined;
        this.disabled = undefined;
        this.max = Infinity;
        this.min = 1;
        this.quantity = 0;
        this.size = 'medium';
        this.hasFocus = undefined;
    }
    decrease() {
        if (this.disabled)
            return;
        this.quantity = Math.max(this.quantity - 1, this.min);
        this.scChange.emit(this.quantity);
        this.scInput.emit(this.quantity);
    }
    increase() {
        if (this.disabled)
            return;
        this.quantity = Math.min(this.quantity + 1, this.max);
        this.scChange.emit(this.quantity);
        this.scInput.emit(this.quantity);
    }
    handleBlur() {
        this.hasFocus = false;
        this.scBlur.emit();
    }
    handleFocus() {
        this.hasFocus = true;
        this.scFocus.emit();
    }
    handleChange() {
        this.quantity = parseInt(this.input.value) > this.max ? this.max : parseInt(this.input.value);
        this.scChange.emit(this.quantity);
    }
    handleInput() {
        this.quantity = parseInt(this.input.value);
        this.scInput.emit(this.quantity);
    }
    render() {
        return (index.h("div", { key: '8c920cda4bd9b49b766b18b77f91332db117c8be', part: "base", class: {
                'quantity': true,
                // States
                'quantity--focused': this.hasFocus,
                'quantity--disabled': this.disabled,
                'quantity--is-rtl': pageAlign.isRtl(),
                'quantity--small': this.size === 'small',
            } }, index.h("button", { key: '378d6b47125312f27995c9b04c3e54ea5eb29162', part: "minus", "aria-label": wp.i18n.__('Decrease quantity by one.', 'surecart'), "aria-disabled": this.disabled || (this.quantity <= this.min && this.min > 1), class: { 'button__decrease': true, 'button--disabled': this.quantity <= this.min && this.min > 1 }, onClick: () => this.quantity > this.min && this.decrease(), disabled: this.disabled || (this.quantity <= this.min && this.min > 1) }, index.h("sc-icon", { key: '65a3a9a3b91363aa887f25df079195ae3e74847d', name: "minus", exportparts: "base:minus__icon" })), index.h("input", { key: '2c7ed4e49f28007b48cca72dc354dff8c1fcd6e8', part: "input", class: "input__control", ref: el => (this.input = el), step: "1", type: "number", max: this.max, min: this.min, value: this.quantity, disabled: this.disabled, autocomplete: "off", role: "spinbutton", "aria-valuemax": this.max, "aria-valuemin": this.min, "aria-valuenow": this.quantity, "aria-disabled": this.disabled, onChange: () => this.handleChange(), onInput: () => this.handleInput(), onFocus: () => this.handleFocus(), onBlur: () => this.handleBlur() }), index.h("button", { key: 'adf38b5c8049936e2cbf14ca8f98ff404a8324cc', part: "plus", "aria-label": wp.i18n.__('Increase quantity by one.', 'surecart'), class: { 'button__increase': true, 'button--disabled': this.quantity >= this.max }, onClick: () => this.quantity < this.max && this.increase(), "aria-disabled": this.disabled || this.quantity >= this.max, disabled: this.disabled || this.quantity >= this.max }, index.h("sc-icon", { key: 'c68b6d4da1cbc2ecf7a56919580149f934503170', name: "plus", exportparts: "base:plus__icon" }))));
    }
    get el() { return index.getElement(this); }
};
ScQuantitySelect.style = ScQuantitySelectStyle0;

exports.sc_product_line_item = ScProductLineItem;
exports.sc_quantity_select = ScQuantitySelect;

//# sourceMappingURL=sc-product-line-item_2.cjs.entry.js.map