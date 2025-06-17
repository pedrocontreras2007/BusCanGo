import { r as registerInstance, h, H as Host } from './index-745b6bec.js';
import { d as decline } from './mutations-30225b1b.js';
import './fetch-2032d11d.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';
import './store-dcefd119.js';
import './utils-e9ee502a.js';
import './index-06061d4e.js';
import './watchers-67501779.js';
import './google-dd89f242.js';
import './currency-a0c9bff4.js';
import './google-a86aa761.js';
import './util-50af2a83.js';
import './index-c5a96d53.js';
import './mutations-ed6d0770.js';

const scUpsellNoThanksButtonCss = "sc-upsell-no-thanks-button{display:block}sc-upsell-no-thanks-button p{margin-block-start:0;margin-block-end:1em}sc-upsell-no-thanks-button .wp-block-button__link{position:relative;text-decoration:none}";
const ScUpsellNoThanksButtonStyle0 = scUpsellNoThanksButtonCss;

const ScUpsellNoThanksButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '03f84cb5ae3de9d1852387e9b1841ca04cef6ba4', onClick: () => decline() }, h("slot", { key: '5cafc814e0c5d1a3932da889cdf7a9eebff08ed0' })));
    }
};
ScUpsellNoThanksButton.style = ScUpsellNoThanksButtonStyle0;

export { ScUpsellNoThanksButton as sc_upsell_no_thanks_button };

//# sourceMappingURL=sc-upsell-no-thanks-button.entry.js.map