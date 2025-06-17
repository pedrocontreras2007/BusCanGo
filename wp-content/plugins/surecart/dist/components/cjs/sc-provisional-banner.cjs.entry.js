'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scProvisionalBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";
const ScProvisionalBannerStyle0 = scProvisionalBannerCss;

const ScProvisionalBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.claimUrl = '';
    }
    render() {
        return (index.h("div", { key: '3d309ea35844ad6efca3459658e3bb70a055f428', class: { 'sc-banner': true } }, index.h("p", { key: 'b91ef47309c6fd9d8ab27f3e7f670211d2235d53' }, wp.i18n.__('Complete your store setup to go live.', 'surecart'), index.h("a", { key: '6fe427e23aa97a4b104069b96172fd8ce0b9d4c1', href: this.claimUrl }, wp.i18n.__('Complete Setup', 'surecart'), " ", index.h("sc-icon", { key: 'be08fcd35c75f9cbc4f02c02c7587cc274c1f3d7', name: "arrow-right" })))));
    }
};
ScProvisionalBanner.style = ScProvisionalBannerStyle0;

exports.sc_provisional_banner = ScProvisionalBanner;

//# sourceMappingURL=sc-provisional-banner.cjs.entry.js.map