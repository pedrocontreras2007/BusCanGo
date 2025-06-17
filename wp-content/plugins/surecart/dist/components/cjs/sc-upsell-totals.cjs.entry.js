'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
require('./watchers-0ab7d3b1.js');
const store = require('./store-d24717c6.js');
require('./watchers-cb566474.js');
require('./index-bcdafe6e.js');
require('./google-03835677.js');
require('./currency-71fce0f0.js');
require('./google-59d23803.js');
require('./utils-ee1bb9d3.js');
require('./util-b877b2bd.js');
require('./index-fb76df07.js');
require('./getters-f6bbfe30.js');
require('./mutations-ca288ff4.js');
require('./fetch-f25a0cb0.js');
require('./add-query-args-49dcb630.js');
require('./remove-query-args-b57e8cd3.js');
require('./mutations-11c8f9a8.js');

const scUpsellTotalsCss = ":host{display:block}";
const ScUpsellTotalsStyle0 = scUpsellTotalsCss;

const ScUpsellTotals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    renderAmountDue() {
        var _a, _b, _c;
        return store.state.amount_due > 0 ? (index.h("sc-format-number", { type: "currency", value: store.state.amount_due, currency: ((_b = (_a = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.currency) || 'usd' })) : !!((_c = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _c === void 0 ? void 0 : _c.trial_amount) ? (wp.i18n.__('Trial', 'surecart')) : (wp.i18n.__('Free', 'surecart'));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (index.h("sc-summary", { key: '76eb62197b8fde597746bca8b0e1eb4c279fc80d', "open-text": "Total", "closed-text": "Total", collapsible: true, collapsed: true }, !!((_a = store.state.line_item) === null || _a === void 0 ? void 0 : _a.id) && index.h("span", { key: 'd3c9220ed70f1cc714276fae89fba1b812802488', slot: "price" }, this.renderAmountDue()), index.h("sc-divider", { key: 'ede7d200c1e169d40cedafead84582619f58f05e' }), index.h("sc-line-item", { key: '1c799e01b03d9a5fa998c0b08e16048ec50e74dd' }, index.h("span", { key: '684598831762d3872ae4d4070dbcb31d2a5290a0', slot: "description" }, wp.i18n.__('Subtotal', 'surecart')), index.h("sc-format-number", { key: '2346a1d39fcb5eb215e07fbe7421c0e432b2590a', slot: "price", type: "currency", value: (_b = store.state.line_item) === null || _b === void 0 ? void 0 : _b.subtotal_amount, currency: ((_d = (_c = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _c === void 0 ? void 0 : _c.price) === null || _d === void 0 ? void 0 : _d.currency) || 'usd' })), (((_f = (_e = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _e === void 0 ? void 0 : _e.fees) === null || _f === void 0 ? void 0 : _f.data) || [])
            .filter(fee => fee.fee_type === 'upsell') // only upsell fees.
            .map(fee => {
            var _a, _b;
            return (index.h("sc-line-item", null, index.h("span", { slot: "description" }, fee.description, " ", `(${wp.i18n.__('one time', 'surecart')})`), index.h("sc-format-number", { slot: "price", type: "currency", value: fee.amount, currency: ((_b = (_a = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _a === void 0 ? void 0 : _a.price) === null || _b === void 0 ? void 0 : _b.currency) || 'usd' })));
        }), !!((_g = store.state.line_item) === null || _g === void 0 ? void 0 : _g.tax_amount) && (index.h("sc-line-item", { key: '86769427511b96a42eb3b4e03a81c708b32a8139' }, index.h("span", { key: '1c86fa9553fc600c832b61e267f0ef4047578a3b', slot: "description" }, wp.i18n.__('Tax', 'surecart')), index.h("sc-format-number", { key: 'daa4ce2ce6418966c69a3dfbaa7d26cf8b15aec2', slot: "price", type: "currency", value: (_h = store.state.line_item) === null || _h === void 0 ? void 0 : _h.tax_amount, currency: ((_k = (_j = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _j === void 0 ? void 0 : _j.price) === null || _k === void 0 ? void 0 : _k.currency) || 'usd' }))), index.h("sc-divider", { key: '01843747074d268875daa516facbe07c025a8ced' }), index.h("sc-line-item", { key: '112a6ea1e66bc963ea44a6ca183c3a52c3e5c16e', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, index.h("span", { key: 'bf0fd4f317bcfe839a2fc8ea16374cfa9ae74983', slot: "title" }, wp.i18n.__('Total', 'surecart')), index.h("sc-format-number", { key: 'd4766c283e9fff33bf8b6afa880d7677f4059ff2', slot: "price", type: "currency", value: (_l = store.state.line_item) === null || _l === void 0 ? void 0 : _l.total_amount, currency: ((_o = (_m = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _m === void 0 ? void 0 : _m.price) === null || _o === void 0 ? void 0 : _o.currency) || 'usd' })), store.state.amount_due !== ((_p = store.state.line_item) === null || _p === void 0 ? void 0 : _p.total_amount) && (index.h("sc-line-item", { key: '2ae956076358d52c24867dfb487fe597d63175e8', style: { '--price-size': 'var(--sc-font-size-x-large)' } }, index.h("span", { key: '27e7552ef7b3c1d70bb7fc0d0a2ed17c05d63659', slot: "title" }, wp.i18n.__('Amount Due', 'surecart')), index.h("span", { key: '0fd7a8cd6cd0ffda49b264c1d56be1747420f883', slot: "price" }, index.h("sc-format-number", { key: 'aa788fcf635dfcce3209dfb414112f48283d663b', slot: "price", type: "currency", value: store.state.amount_due, currency: ((_r = (_q = store.state === null || store.state === void 0 ? void 0 : store.state.line_item) === null || _q === void 0 ? void 0 : _q.price) === null || _r === void 0 ? void 0 : _r.currency) || 'usd' }))))));
    }
};
ScUpsellTotals.style = ScUpsellTotalsStyle0;

exports.sc_upsell_totals = ScUpsellTotals;

//# sourceMappingURL=sc-upsell-totals.cjs.entry.js.map