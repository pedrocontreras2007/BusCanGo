import { r as registerInstance, h } from './index-745b6bec.js';

const scDividerCss = ":host{display:block;min-height:1px}.divider{position:relative;padding:var(--spacing) 0}.line__container{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center}.line{width:100%;border-top:1px solid var(--sc-divider-border-top-color, var(--sc-color-gray-200))}.text__container{position:relative;display:flex;justify-content:center;font-size:var(--sc-font-size-small)}.text{padding:0 var(--sc-spacing-small);background:var(--sc-divider-text-background-color, var(--sc-color-white));color:var(--sc-color-gray-500)}";
const ScDividerStyle0 = scDividerCss;

const ScDivider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { key: 'e76e33e31e112260374176e4fe5f12b40faafb84', class: "divider", part: "base" }, h("div", { key: '0360007ee630cc86560d542cc5556f5465ede0d8', class: "line__container", "aria-hidden": "true", part: "line-container" }, h("div", { key: '74b54318c71d0d9aa504ba22a9ab3635532bff1f', class: "line", part: "line" })), h("div", { key: '7b3743895a127bf6a967a82f6657deedb9bd649a', class: "text__container", part: "text-container" }, h("span", { key: '82684848c0addc5c89d41d5b7f5679c2c308b976', class: "text", part: "text" }, h("slot", { key: 'cffad4356ba37611722660377635341fc3112187' })))));
    }
};
ScDivider.style = ScDividerStyle0;

export { ScDivider as sc_divider };

//# sourceMappingURL=sc-divider.entry.js.map