import { r as registerInstance, h } from './index-745b6bec.js';
import { a as apiFetch } from './fetch-2032d11d.js';
import './add-query-args-0e2a8393.js';
import './remove-query-args-938c53ea.js';

const scWordpressPasswordEditCss = ":host{display:block;position:relative}";
const ScWordpressPasswordEditStyle0 = scWordpressPasswordEditCss;

const ScWordPressPasswordEdit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = undefined;
        this.successUrl = undefined;
        this.user = undefined;
        this.loading = undefined;
        this.error = undefined;
        this.enableValidation = true;
    }
    renderEmpty() {
        return h("slot", { name: "empty" }, wp.i18n.__('User not found.', 'surecart'));
    }
    validatePassword(password) {
        const regex = new RegExp('^(?=.*?[#?!@$%^&*-]).{6,}$');
        if (regex.test(password))
            return true;
        return false;
    }
    async handleSubmit(e) {
        this.loading = true;
        this.error = '';
        try {
            const { password } = await e.target.getFormJson();
            await apiFetch({
                path: `wp/v2/users/me`,
                method: 'PATCH',
                data: {
                    password,
                    meta: {
                        default_password_nag: false,
                    },
                },
            });
            if (this.successUrl) {
                window.location.assign(this.successUrl);
            }
            else {
                this.loading = false;
            }
        }
        catch (e) {
            this.error = (e === null || e === void 0 ? void 0 : e.message) || wp.i18n.__('Something went wrong', 'surecart');
            this.loading = false;
        }
    }
    render() {
        return (h("sc-dashboard-module", { key: '308dedaeba09cb4b08fd28ba1cb1f4f58b7fde62', class: "customer-details", error: this.error }, h("span", { key: 'd9ca41543d10f12bcd5c46851a7427725f59cb4f', slot: "heading" }, this.heading || wp.i18n.__('Update Password', 'surecart'), " "), h("slot", { key: '43059ce5eaa891c7f867716d97212df545288c7b', name: "end", slot: "end" }), h("sc-card", { key: 'e95f7ff5b4881ae8fc8939cd0784ebfff7df7263' }, h("sc-form", { key: 'fd0ea37527769a58f999f38f3fba14c90e6fe96e', onScFormSubmit: e => this.handleSubmit(e) }, h("sc-password", { key: '2a24953373fd3cfdb9b36751a5f798152013573d', enableValidation: this.enableValidation, label: wp.i18n.__('New Password', 'surecart'), name: "password", confirmation: true, required: true }), h("div", { key: '5f85290225bfee190adbe43f852078ab7d0bbc11' }, h("sc-button", { key: '50cca5ebe40dd711c2a45cf38c6cc3e5827c8713', type: "primary", full: true, submit: true }, wp.i18n.__('Update Password', 'surecart'))))), this.loading && h("sc-block-ui", { key: 'c44d9cb7bf0f9a9bf869d24df1bb8a130e577098', spinner: true })));
    }
};
ScWordPressPasswordEdit.style = ScWordpressPasswordEditStyle0;

export { ScWordPressPasswordEdit as sc_wordpress_password_edit };

//# sourceMappingURL=sc-wordpress-password-edit.entry.js.map