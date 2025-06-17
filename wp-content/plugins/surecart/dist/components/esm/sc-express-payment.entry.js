import { r as registerInstance, h, H as Host } from './index-745b6bec.js';
import { g as getProcessorByType } from './getters-01ae99ba.js';
import { f as formBusy } from './getters-cf357ed2.js';
import './util-50af2a83.js';
import './index-06061d4e.js';
import './utils-e9ee502a.js';
import './mutations-98df238e.js';
import './remove-query-args-938c53ea.js';
import './add-query-args-0e2a8393.js';
import './index-c5a96d53.js';
import './google-a86aa761.js';
import './currency-a0c9bff4.js';
import './store-eb9dd43c.js';
import './price-d5770168.js';

const scExpressPaymentCss = "sc-express-payment{display:block}";
const ScExpressPaymentStyle0 = scExpressPaymentCss;

const ScExpressPayment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.processor = undefined;
        this.dividerText = undefined;
        this.debug = undefined;
        this.hasPaymentOptions = undefined;
    }
    onPaymentRequestLoaded() {
        this.hasPaymentOptions = true;
    }
    renderStripePaymentRequest() {
        const { processor_data } = getProcessorByType('stripe') || {};
        return h("sc-stripe-payment-request", { debug: this.debug, stripeAccountId: processor_data === null || processor_data === void 0 ? void 0 : processor_data.account_id, publishableKey: processor_data === null || processor_data === void 0 ? void 0 : processor_data.publishable_key });
    }
    render() {
        return (h(Host, { key: '91a87d87f5eb428ffc089c43424a39d823cb17f3', class: { 'is-empty': !this.hasPaymentOptions && !this.debug } }, this.renderStripePaymentRequest(), (this.hasPaymentOptions || this.debug) && h("sc-divider", { key: '8edcda43e67e26227500031b882a7943ea70e039', style: { '--spacing': 'calc(var(--sc-form-row-spacing)/2)' } }, this.dividerText), !!formBusy() && h("sc-block-ui", { key: '64faeb9b482bf26f0c055b808b55fc0dab136fec' })));
    }
};
ScExpressPayment.style = ScExpressPaymentStyle0;

export { ScExpressPayment as sc_express_payment };

//# sourceMappingURL=sc-express-payment.entry.js.map