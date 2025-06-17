import { r as registerInstance, h, a as getElement } from './index-745b6bec.js';

const scFormRowCss = ".form-row{display:flex;align-items:flex-start;justify-content:space-between;gap:calc(var(--sc-form-row-spacing, 0.75em) * 2.5)}::slotted(*){flex:1;width:0}";
const ScFormRowStyle0 = scFormRowCss;

const ScFormRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.width = undefined;
    }
    componentDidLoad() {
        if ('ResizeObserver' in window) {
            this.observer = new window.ResizeObserver(entries => {
                this.width = entries === null || entries === void 0 ? void 0 : entries[0].contentRect.width;
            });
            this.observer.observe(this.el);
        }
    }
    render() {
        return (h("div", { key: '48aa2fc70e2bb0d413085e4b159f2f1fccb94e64', part: "base", class: {
                'form-row': true,
                'breakpoint-sm': this.width < 384,
                'breakpoint-md': this.width >= 384 && this.width < 576,
                'breakpoint-lg': this.width >= 576 && this.width < 768,
                'breakpoint-xl': this.width >= 768,
            } }, h("slot", { key: '213f9339dadf66345870a434de8129973069bb64' })));
    }
    get el() { return getElement(this); }
};
ScFormRow.style = ScFormRowStyle0;

export { ScFormRow as sc_form_row };

//# sourceMappingURL=sc-form-row.entry.js.map