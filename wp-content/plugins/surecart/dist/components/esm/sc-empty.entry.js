import { r as registerInstance, h } from './index-745b6bec.js';

const scEmptyCss = ":host{display:block}.empty{display:flex;flex-direction:column;align-items:center;padding:var(--sc-spacing-large);text-align:center;gap:var(--sc-spacing-small);color:var(--sc-empty-color, var(--sc-color-gray-500))}.empty sc-icon{font-size:var(--sc-font-size-xx-large);color:var(--sc-empty-icon-color, var(--sc-color-gray-700))}";
const ScEmptyStyle0 = scEmptyCss;

const ScEmpty = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icon = undefined;
    }
    render() {
        return (h("div", { key: 'ebe2ce7e8e15a852463bf88d93e7a15d6277e3b7', part: "base", class: "empty" }, !!this.icon && h("sc-icon", { key: '0133228957cc01ed871a10ec2a970ce177d48d9d', exportparts: "base:icon", name: this.icon }), h("slot", { key: 'd9eabebd9db1e839e7df0c3dfa2458f08eb3ea7a' })));
    }
};
ScEmpty.style = ScEmptyStyle0;

export { ScEmpty as sc_empty };

//# sourceMappingURL=sc-empty.entry.js.map