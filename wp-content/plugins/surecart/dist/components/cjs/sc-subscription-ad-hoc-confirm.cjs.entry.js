'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const price = require('./price-653ec1cb.js');
const addQueryArgs = require('./add-query-args-49dcb630.js');
require('./currency-71fce0f0.js');

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs.addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (index.h("sc-dashboard-module", { key: '9cb13efa4bd8468e50f01892fa968b00102d1147', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, index.h("sc-card", { key: '83495d98ec41f244524724a5efa91c5fbf2f752d' }, index.h("sc-form", { key: '099b0fadb7aa7f7661d2c8a93b5b0b95f4b34fd3', onScSubmit: e => this.handleSubmit(e) }, index.h("sc-price-input", { key: 'c69a11cc4109c22f408160272cf3c066802c5635', label: "Amount", name: "ad_hoc_amount", autofocus: true, required: true }, index.h("span", { key: '6fa945950136e4e66f40fc3b7d6be74cfc40a2c4', slot: "suffix", style: { opacity: '0.75' } }, price.intervalString(this.price))), index.h("sc-button", { key: '5673577d89bdba9d5a76f925851e7ccbee571b39', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", index.h("sc-icon", { key: '4057d9b255723fa2ab4564a58ef58cabf1ff3f3b', name: "arrow-right", slot: "suffix" })))), this.busy && index.h("sc-block-ui", { key: 'e081fc4cd98af40bc0c8ac62264664ce0f498e33', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

exports.sc_subscription_ad_hoc_confirm = ScSubscriptionAdHocConfirm;

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.cjs.entry.js.map