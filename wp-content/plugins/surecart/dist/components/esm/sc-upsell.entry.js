import { r as registerInstance, h, H as Host } from './index-745b6bec.js';
import './watchers-46ca00a4.js';
import { s as state } from './store-dcefd119.js';
import { c as isBusy } from './getters-b1d93841.js';
import { t as trackOffer, p as preview } from './mutations-30225b1b.js';
import './watchers-67501779.js';
import './index-06061d4e.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './utils-e9ee502a.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';
import './add-query-args-0e2a8393.js';
import './fetch-2032d11d.js';
import './remove-query-args-938c53ea.js';
import './mutations-ed6d0770.js';

const scUpsellCss = ":host{display:block}.confirm__icon{margin-bottom:var(--sc-spacing-medium);display:flex;justify-content:center}.confirm__icon-container{background:var(--sc-color-primary-500);width:55px;height:55px;border-radius:999999px;display:flex;align-items:center;justify-content:center;font-size:26px;line-height:1;color:white}";
const ScUpsellStyle0 = scUpsellCss;

const ScUpsell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        trackOffer();
        preview();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const manualPaymentMethod = (_a = state.checkout) === null || _a === void 0 ? void 0 : _a.manual_payment_method;
        return (h(Host, { key: 'd3ef6ffc60f1bbd60500a54a6a5d6f22a1f1abeb' }, h("slot", { key: '6f76b911384a6534642b50a8a8e5bed1b6507bed' }), isBusy() && h("sc-block-ui", { key: '28cbd6f67b184f7c255d6158449e3a198603cfcb', style: { 'z-index': '30', '--sc-block-ui-position': 'fixed' } }), h("sc-dialog", { key: 'c51293a6ae595f580425582d64acffc646847250', open: state.loading === 'complete', style: { '--body-spacing': 'var(--sc-spacing-xxx-large)' }, noHeader: true, onScRequestClose: e => e.preventDefault() }, h("div", { key: '994837f247b1c91050f739cd4ee02f71d3ccd1fe', class: "confirm__icon" }, h("div", { key: 'e6d8212ca4cf40b0e3cadfa1479eac577172039b', class: "confirm__icon-container" }, h("sc-icon", { key: '4ab3fff29981e772e5f0f36d65dd600432cf2908', name: "check" }))), h("sc-dashboard-module", { key: '3b2938ac7e205c16a6e924fd176c449469869de7', heading: ((_c = (_b = state === null || state === void 0 ? void 0 : state.text) === null || _b === void 0 ? void 0 : _b.success) === null || _c === void 0 ? void 0 : _c.title) || wp.i18n.__('Thank you!', 'surecart'), style: { '--sc-dashboard-module-spacing': 'var(--sc-spacing-x-large)', 'textAlign': 'center' } }, h("span", { key: 'fb020d00a9320f84adb22bfd5260ffebe5a60a09', slot: "description" }, ((_e = (_d = state === null || state === void 0 ? void 0 : state.text) === null || _d === void 0 ? void 0 : _d.success) === null || _e === void 0 ? void 0 : _e.description) || wp.i18n.__('Your purchase was successful. A receipt is on its way to your inbox.', 'surecart')), !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name) && !!(manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions) && (h("sc-alert", { key: '5d9ea8c87d53b0efd4cb20810f4ab3997ce40ca8', type: "info", open: true, style: { 'text-align': 'left' } }, h("span", { key: '05a0045930b5bfa42da06d59448dd73506c922c7', slot: "title" }, manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.name), h("div", { key: '333025160f18633287a1acf3003d163ac55d0d12', innerHTML: manualPaymentMethod === null || manualPaymentMethod === void 0 ? void 0 : manualPaymentMethod.instructions }))), h("sc-button", { key: '9d4b42803a02dba01d42a7d088ffd49c743ff7b2', href: (_g = (_f = window === null || window === void 0 ? void 0 : window.scData) === null || _f === void 0 ? void 0 : _f.pages) === null || _g === void 0 ? void 0 : _g.dashboard, size: "large", type: "primary", autofocus: true }, ((_j = (_h = state === null || state === void 0 ? void 0 : state.text) === null || _h === void 0 ? void 0 : _h.success) === null || _j === void 0 ? void 0 : _j.button) || wp.i18n.__('Continue', 'surecart'), h("sc-icon", { key: '203f761c9aa51bd2ae98d18590b7cea19cb74104', name: "arrow-right", slot: "suffix" }))))));
    }
};
ScUpsell.style = ScUpsellStyle0;

export { ScUpsell as sc_upsell };

//# sourceMappingURL=sc-upsell.entry.js.map