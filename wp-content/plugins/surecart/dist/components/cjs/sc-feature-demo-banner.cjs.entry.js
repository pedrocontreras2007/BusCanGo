'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scFeatureDemoBannerCss = ".sc-banner{background-color:var(--sc-color-brand-primary);color:white;display:flex;align-items:center;justify-content:center}.sc-banner>p{font-size:14px;line-height:1;margin:var(--sc-spacing-small)}.sc-banner>p a{color:inherit;font-weight:600;margin-left:10px;display:inline-flex;align-items:center;gap:8px;text-decoration:none;border-bottom:1px solid;padding-bottom:2px}";
const ScFeatureDemoBannerStyle0 = scFeatureDemoBannerCss;

const ScFeatureDemoBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.url = 'https://app.surecart.com/plans';
        this.buttonText = wp.i18n.__('Upgrade Your Plan', 'surecart');
    }
    render() {
        return (index.h("div", { key: '68394791af7d01498939176496db736811915097', class: { 'sc-banner': true } }, index.h("p", { key: '62db696c82c67d29bfe7f9d4f152a56112731624' }, index.h("slot", { key: 'faa4005a0d02a122e2ab74bbdafa22cdcfaad89e' }, wp.i18n.__('This is a feature demo. In order to use it, you must upgrade your plan.', 'surecart')), index.h("a", { key: '1ba532e47e7530abe710591d275264180a63ee7f', href: this.url, target: "_blank" }, index.h("slot", { key: '8a9ba51416eeee194257ac97c9c6c70702d74a95', name: "link" }, this.buttonText, " ", index.h("sc-icon", { key: 'f830bf78241e421a616a7be377dc4d2309446df3', name: "arrow-right" }))))));
    }
};
ScFeatureDemoBanner.style = ScFeatureDemoBannerStyle0;

exports.sc_feature_demo_banner = ScFeatureDemoBanner;

//# sourceMappingURL=sc-feature-demo-banner.cjs.entry.js.map