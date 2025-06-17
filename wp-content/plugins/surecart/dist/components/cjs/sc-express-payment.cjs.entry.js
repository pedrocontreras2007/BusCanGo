'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const getters = require('./getters-b1457ef2.js');
const getters$1 = require('./getters-b93add03.js');
require('./util-b877b2bd.js');
require('./index-bcdafe6e.js');
require('./utils-ee1bb9d3.js');
require('./mutations-076c4044.js');
require('./remove-query-args-b57e8cd3.js');
require('./add-query-args-49dcb630.js');
require('./index-fb76df07.js');
require('./google-59d23803.js');
require('./currency-71fce0f0.js');
require('./store-97df0984.js');
require('./price-653ec1cb.js');

const scExpressPaymentCss = "sc-express-payment{display:block}";
const ScExpressPaymentStyle0 = scExpressPaymentCss;

const ScExpressPayment = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.processor = undefined;
        this.dividerText = undefined;
        this.debug = undefined;
        this.hasPaymentOptions = undefined;
    }
    onPaymentRequestLoaded() {
        this.hasPaymentOptions = true;
    }
    renderStripePaymentRequest() {
        const { processor_data } = getters.getProcessorByType('stripe') || {};
        return index.h("sc-stripe-payment-request", { debug: this.debug, stripeAccountId: processor_data === null || processor_data === void 0 ? void 0 : processor_data.account_id, publishableKey: processor_data === null || processor_data === void 0 ? void 0 : processor_data.publishable_key });
    }
    render() {
        return (index.h(index.Host, { key: '91a87d87f5eb428ffc089c43424a39d823cb17f3', class: { 'is-empty': !this.hasPaymentOptions && !this.debug } }, this.renderStripePaymentRequest(), (this.hasPaymentOptions || this.debug) && index.h("sc-divider", { key: '8edcda43e67e26227500031b882a7943ea70e039', style: { '--spacing': 'calc(var(--sc-form-row-spacing)/2)' } }, this.dividerText), !!getters$1.formBusy() && index.h("sc-block-ui", { key: '64faeb9b482bf26f0c055b808b55fc0dab136fec' })));
    }
};
ScExpressPayment.style = ScExpressPaymentStyle0;

exports.sc_express_payment = ScExpressPayment;

//# sourceMappingURL=sc-express-payment.cjs.entry.js.map