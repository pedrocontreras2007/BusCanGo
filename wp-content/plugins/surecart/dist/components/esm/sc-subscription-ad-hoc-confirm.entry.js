import { r as registerInstance, h } from './index-745b6bec.js';
import { i as intervalString } from './price-d5770168.js';
import { a as addQueryArgs } from './add-query-args-0e2a8393.js';
import './currency-a0c9bff4.js';

const scSubscriptionAdHocConfirmCss = ":host{display:block}";
const ScSubscriptionAdHocConfirmStyle0 = scSubscriptionAdHocConfirmCss;

const ScSubscriptionAdHocConfirm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.price = undefined;
        this.busy = false;
    }
    async handleSubmit(e) {
        const { ad_hoc_amount } = await e.target.getFormJson();
        this.busy = true;
        return window.location.assign(addQueryArgs(window.location.href, {
            action: 'confirm',
            ad_hoc_amount,
        }));
    }
    render() {
        return (h("sc-dashboard-module", { key: '9cb13efa4bd8468e50f01892fa968b00102d1147', heading: this.heading || wp.i18n.__('Enter An Amount', 'surecart'), class: "subscription-switch" }, h("sc-card", { key: '83495d98ec41f244524724a5efa91c5fbf2f752d' }, h("sc-form", { key: '099b0fadb7aa7f7661d2c8a93b5b0b95f4b34fd3', onScSubmit: e => this.handleSubmit(e) }, h("sc-price-input", { key: 'c69a11cc4109c22f408160272cf3c066802c5635', label: "Amount", name: "ad_hoc_amount", autofocus: true, required: true }, h("span", { key: '6fa945950136e4e66f40fc3b7d6be74cfc40a2c4', slot: "suffix", style: { opacity: '0.75' } }, intervalString(this.price))), h("sc-button", { key: '5673577d89bdba9d5a76f925851e7ccbee571b39', type: "primary", full: true, submit: true, loading: this.busy }, wp.i18n.__('Next', 'surecart'), " ", h("sc-icon", { key: '4057d9b255723fa2ab4564a58ef58cabf1ff3f3b', name: "arrow-right", slot: "suffix" })))), this.busy && h("sc-block-ui", { key: 'e081fc4cd98af40bc0c8ac62264664ce0f498e33', style: { zIndex: '9' } })));
    }
};
ScSubscriptionAdHocConfirm.style = ScSubscriptionAdHocConfirmStyle0;

export { ScSubscriptionAdHocConfirm as sc_subscription_ad_hoc_confirm };

//# sourceMappingURL=sc-subscription-ad-hoc-confirm.entry.js.map