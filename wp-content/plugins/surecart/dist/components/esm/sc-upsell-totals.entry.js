import { r as registerInstance, h } from './index-745b6bec.js';
import './watchers-46ca00a4.js';
import { s as state } from './store-dcefd119.js';
import './watchers-67501779.js';
import './index-06061d4e.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './utils-e9ee502a.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';
import './getters-b1d93841.js';
import './mutations-30225b1b.js';
import './fetch-2032d11d.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './mutations-ed6d0770.js';

const scUpsellTotalsCss = ":host{display:block}";
const ScUpsellTotalsStyle0 = scUpsellTotalsCss;

const ScUpsellTotals = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    renderAmountDue() {
        var _a, _b, _c;
        return state.amount_due > 0 ? (h("sc-format-number", { type: "currency", value: state.amount_due, currency: ((_b = (_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.currency) || 'usd' })) : !!((_c = state === null || state === void 0 ? void 0 : state.line_item) === null || _c === void 0 ? void 0 : _c.trial_amount) ? (wp.i18n.__('Trial', 'surecart')) : (wp.i18n.__('Free', 'surecart'));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (h("sc-summary", { key: '76eb62197b8fde597746bca8b0e1eb4c279fc80d', "open-text": "Total", "closed-text": "Total", collapsible: true, collapsed: true }, !!((_a = state.line_item) === null || _a === void 0 ? void 0 : _a.id) && h("span", { key: 'd3c9220ed70f1cc714276fae89fba1b812802488', slot: "price" }, this.renderAmountDue()), h("sc-divider", { key: 'ede7d200c1e169d40cedafead84582619f58f05e' }), h("sc-line-item", { key: '1c799e01b03d9a5fa998c0b08e16048ec50e74dd' }, h("span", { key: '684598831762d3872ae4d4070dbcb31d2a5290a0', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), h("sc-format-number", { key: '2346a1d39fcb5eb215e07fbe7421c0e432b2590a', slot: "price", type: "currency", value: (_b = state.line_item) === null || _b === void 0 ? void 0 : _b.subtotal_amount, currency: ((_d = (_c = state === null || state === void 0 ? void 0 : state.line_item) === null || _c === void 0 ? void 0 : _c.price) === null || _d === void 0 ? void 0 : _d.currency) || 'usd' })), (((_f = (_e = state === null || state === void 0 ? void 0 : state.line_item) === null || _e === void 0 ? void 0 : _e.fees) === null || _f === void 0 ? void 0 : _f.data) || [])
            .filter(fee => fee.fee_type === 'upsell') // only upsell fees.
            .map(fee => {
            var _a, _b;
            return (h("sc-line-item", null, h("span", { slot: "description" }, fee.description, " ", `(${wp.i18n.__('one time', 'surecart')})`), h("sc-format-number", { slot: "price", type: "currency", value: fee.amount, currency: ((_b = (_a = state === null || state === void 0 ? void 0 : state.line_item) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.currency) || 'usd' })));
        }), !!((_g = state.line_item) === null || _g === void 0 ? void 0 : _g.tax_amount) && (h("sc-line-item", { key: '86769427511b96a42eb3b4e03a81c708b32a8139' }, h("span", { key: '1c86fa9553fc600c832b61e267f0ef4047578a3b', slot: "description" }, wp.i18n.__('Tax', 'surecart')), h("sc-format-number", { key: 'daa4ce2ce6418966c69a3dfbaa7d26cf8b15aec2', slot: "price", type: "currency", value: (_h = state.line_item) === null || _h === void 0 ? void 0 : _h.tax_amount, currency: ((_k = (_j = state === null || state === void 0 ? void 0 : state.line_item) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.currency) || 'usd' }))), h("sc-divider", { key: '01843747074d268875daa516facbe07c025a8ced' }), h("sc-line-item", { key: '112a6ea1e66bc963ea44a6ca183c3a52c3e5c16e', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { key: 'bf0fd4f317bcfe839a2fc8ea16374cfa9ae74983', slot: "title" }, wp.i18n.__('Total', 'surecart')), h("sc-format-number", { key: 'd4766c283e9fff33bf8b6afa880d7677f4059ff2', slot: "price", type: "currency", value: (_l = state.line_item) === null || _l === void 0 ? void 0 : _l.total_amount, currency: ((_o = (_m = state === null || state === void 0 ? void 0 : state.line_item) === null || _m === void 0 ? void 0 : _m.price) === null || _o === void 0 ? void 0 : _o.currency) || 'usd' })), state.amount_due !== ((_p = state.line_item) === null || _p === void 0 ? void 0 : _p.total_amount) && (h("sc-line-item", { key: '2ae956076358d52c24867dfb487fe597d63175e8', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, h("span", { key: '27e7552ef7b3c1d70bb7fc0d0a2ed17c05d63659', slot: "title" }, wp.i18n.__('Amount Due', 'surecart')), h("span", { key: '0fd7a8cd6cd0ffda49b264c1d56be1747420f883', slot: "price" }, h("sc-format-number", { key: 'aa788fcf635dfcce3209dfb414112f48283d663b', slot: "price", type: "currency", value: state.amount_due, currency: ((_r = (_q = state === null || state === void 0 ? void 0 : state.line_item) === null || _q === void 0 ? void 0 : _q.price) === null || _r === void 0 ? void 0 : _r.currency) || 'usd' }))))));
    }
};
ScUpsellTotals.style = ScUpsellTotalsStyle0;

export { ScUpsellTotals as sc_upsell_totals };

//# sourceMappingURL=sc-upsell-totals.entry.js.map