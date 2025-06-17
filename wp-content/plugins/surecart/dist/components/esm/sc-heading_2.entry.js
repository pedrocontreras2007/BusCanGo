import { r as registerInstance, h, a as getElement } from './index-745b6bec.js';

const scHeadingCss = ":host{display:block}.heading{font-family:var(--sc-font-sans);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.heading--small .heading__title{font-size:var(--sc-font-size-small);text-transform:uppercase}.heading__text{width:100%}.heading__title{font-size:var(--sc-font-size-x-large);font-weight:var(--sc-font-weight-bold);line-height:var(--sc-line-height-dense);white-space:normal}.heading__description{font-size:var(--sc-font-size-normal);line-height:var(--sc-line-height-dense);color:var(--sc-color-gray-500)}";
const ScHeadingStyle0 = scHeadingCss;

const ScHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = 'medium';
    }
    render() {
        return (h("div", { key: '5c4f4a709283b693c9b1ed65fb9225c7941b01c5', part: "base", class: {
                'heading': true,
                'heading--small': this.size === 'small',
                'heading--medium': this.size === 'medium',
                'heading--large': this.size === 'large',
            } }, h("div", { key: 'a7cba0a1e0bf66c6b051437fd5e60cfc72523b24', class: { heading__text: true } }, h("div", { key: '57608f378899490eb0102dcb302714ed9cd0880f', class: "heading__title", part: "title" }, h("slot", { key: '16ab29024968653c888832b2931b9730740028d7' })), h("div", { key: 'b43f7c65bc9869afdf864e2f67e958cbdca94695', class: "heading__description", part: "description" }, h("slot", { key: 'ed06ac76e974ed5fe888be883806da8351d881f8', name: "description" }))), h("slot", { key: '0294ab027665f0d4d2fe14aa1ba4a27f0ff4d658', name: "end" })));
    }
    get el() { return getElement(this); }
};
ScHeading.style = ScHeadingStyle0;

const ScOrderConfirmComponentsValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkout = undefined;
        this.hasManualInstructions = undefined;
    }
    handleOrderChange() {
        var _a;
        if ((_a = this.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment) {
            this.addManualPaymentInstructions();
        }
    }
    addManualPaymentInstructions() {
        var _a, _b;
        if (this.hasManualInstructions)
            return;
        const details = this.el.shadowRoot
            .querySelector('slot')
            .assignedElements({ flatten: true })
            .find(element => element.tagName === 'SC-ORDER-CONFIRMATION-DETAILS');
        const address = document.createElement('sc-order-manual-instructions');
        (_b = (_a = details === null || details === void 0 ? void 0 : details.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore) === null || _b === void 0 ? void 0 : _b.call(_a, address, details);
        this.hasManualInstructions = true;
    }
    componentWillLoad() {
        this.hasManualInstructions = !!this.el.querySelector('sc-order-manual-instructions');
    }
    render() {
        return h("slot", { key: 'c3f3d18b827fd9e7b8ec07e28b88fb2462892f62' });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checkout": ["handleOrderChange"]
    }; }
};

export { ScHeading as sc_heading, ScOrderConfirmComponentsValidator as sc_order_confirm_components_validator };

//# sourceMappingURL=sc-heading_2.entry.js.map