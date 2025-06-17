'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');
const mutations$1 = require('./mutations-076c4044.js');
const index$1 = require('./index-d86333db.js');
const mutations$2 = require('./mutations-11c8f9a8.js');
const mutations = require('./mutations-a3c3a9c6.js');
const animationRegistry = require('./animation-registry-f7f1a08b.js');
const getters = require('./getters-36e9dc10.js');
require('./index-bcdafe6e.js');
require('./utils-ee1bb9d3.js');
require('./remove-query-args-b57e8cd3.js');
require('./add-query-args-49dcb630.js');
require('./index-fb76df07.js');
require('./google-59d23803.js');
require('./currency-71fce0f0.js');
require('./store-97df0984.js');
require('./price-653ec1cb.js');
require('./fetch-f25a0cb0.js');

const ScCartSessionProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scSetState = index.createEvent(this, "scSetState", 7);
    }
    handleUpdateSession(e) {
        const { data, options } = e.detail;
        if (options === null || options === void 0 ? void 0 : options.silent) {
            this.update(data);
        }
        else {
            this.loadUpdate(data);
        }
    }
    /** Handle the error response. */
    handleErrorResponse(e) {
        var _a, _b;
        if ((e === null || e === void 0 ? void 0 : e.code) === 'readonly' || ((_b = (_a = e === null || e === void 0 ? void 0 : e.additional_errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.code) === 'checkout.customer.account_mismatch') {
            mutations.clearCheckout();
        }
        // expired
        if ((e === null || e === void 0 ? void 0 : e.code) === 'rest_cookie_invalid_nonce') {
            mutations$1.updateFormState('EXPIRE');
            return;
        }
        // something went wrong
        if (e === null || e === void 0 ? void 0 : e.message) {
            mutations$2.createErrorNotice(e);
        }
        // handle curl timeout errors.
        if ((e === null || e === void 0 ? void 0 : e.code) === 'http_request_failed') {
            mutations$2.createErrorNotice(wp.i18n.__('Something went wrong. Please reload the page and try again.', 'surecart'));
        }
    }
    /** Fetch a session. */
    async fetch(args = {}) {
        this.loadUpdate({ status: 'draft', ...args });
    }
    /** Update a the order */
    async update(data = {}, query = {}) {
        var _a;
        try {
            mutations$1.state.checkout = (await index$1.updateCheckout({
                id: (_a = mutations$1.state.checkout) === null || _a === void 0 ? void 0 : _a.id,
                data: {
                    ...data,
                },
                query: {
                    ...query,
                },
            }));
        }
        catch (e) {
            console.error(e);
            throw e;
        }
    }
    /** Updates a session with loading status changes. */
    async loadUpdate(data = {}) {
        try {
            mutations$1.updateFormState('FETCH');
            await this.update(data);
            mutations$1.updateFormState('RESOLVE');
        }
        catch (e) {
            mutations$1.updateFormState('REJECT');
            this.handleErrorResponse(e);
        }
    }
    render() {
        return (index.h("sc-line-items-provider", { key: 'b1b1ca8294aee6648f24723b8726f2b11d8eb8bd', order: mutations$1.state.checkout, onScUpdateLineItems: e => this.loadUpdate({ line_items: e.detail }) }, index.h("slot", { key: '3df86037d365ec5dde4bb83db59b9ae0c91bf363' })));
    }
    get el() { return index.getElement(this); }
};

const scDrawerCss = ":host{display:contents}.drawer{top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:hidden;font-family:var(--sc-font-sans);font-weight:var(--sc-font-weight-normal)}.drawer--contained{position:absolute;z-index:initial}.drawer--fixed{position:fixed;z-index:var(--sc-z-index-drawer)}.drawer__panel{position:absolute;display:flex;flex-direction:column;z-index:2;max-width:100%;max-height:100%;background-color:var(--sc-panel-background-color);box-shadow:var(--sc-shadow-x-large);transition:var(--sc-transition-medium) transform;overflow:auto;pointer-events:all}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:100%;height:var(--sc-drawer-size, 400px)}.drawer--end .drawer__panel{top:0;right:0;bottom:auto;left:auto;width:100%;max-width:var(--sc-drawer-size, 400px);height:100%}.drawer--bottom .drawer__panel{top:auto;right:auto;bottom:0;left:0;width:100%;height:var(--sc-drawer-size, 400px)}.drawer--start .drawer__panel{top:0;right:auto;bottom:auto;left:0;width:var(--sc-drawer-size, 400px);height:100%}.header__sticky{position:sticky;top:0;z-index:10;background:#fff}.drawer__header{display:flex;align-items:center;padding:var(--sc-drawer-header-spacing);border-bottom:var(--sc-drawer-border)}.drawer__title{flex:1 1 auto;font:inherit;font-size:var(--sc-font-size-large);line-height:var(--sc-line-height-dense);margin:0}.drawer__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--sc-font-size-x-large);color:var(--sc-color-gray-500);cursor:pointer}.drawer__body{flex:1 1 auto}.drawer--has-footer .drawer__footer{border-top:var(--sc-drawer-border);padding:var(--sc-drawer-footer-spacing)}.drawer__overlay{display:block;position:fixed;top:0;right:0;bottom:0;left:0;background-color:var(--sc-overlay-background-color);pointer-events:all}.drawer--contained .drawer__overlay{position:absolute}";
const ScDrawerStyle0 = scDrawerCss;

const ScDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scInitialFocus = index.createEvent(this, "scInitialFocus", 7);
        this.scRequestClose = index.createEvent(this, "scRequestClose", 7);
        this.scShow = index.createEvent(this, "scShow", 7);
        this.scHide = index.createEvent(this, "scHide", 7);
        this.scAfterShow = index.createEvent(this, "scAfterShow", 7);
        this.scAfterHide = index.createEvent(this, "scAfterHide", 7);
        this.open = false;
        this.label = '';
        this.placement = 'end';
        this.contained = false;
        this.noHeader = false;
        this.stickyHeader = false;
    }
    componentDidLoad() {
        this.drawer.hidden = !this.open;
        if (this.open && !this.contained) {
            this.lockBodyScrolling();
        }
        this.handleOpenChange();
    }
    disconnectedCallback() {
        this.unLockBodyScrolling();
    }
    lockBodyScrolling() {
        document.body.classList.add('sc-scroll-lock');
    }
    unLockBodyScrolling() {
        document.body.classList.remove('sc-scroll-lock');
    }
    /** Shows the drawer. */
    async show() {
        if (this.open) {
            return undefined;
        }
        this.open = true;
    }
    /** Hides the drawer */
    async hide() {
        if (!this.open) {
            return undefined;
        }
        this.open = false;
    }
    async requestClose(source = 'method') {
        const slRequestClose = this.scRequestClose.emit(source);
        if (slRequestClose.defaultPrevented) {
            const animation = animationRegistry.getAnimation(this.el, 'drawer.denyClose');
            animationRegistry.animateTo(this.panel, animation.keyframes, animation.options);
            return;
        }
        this.hide();
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') {
            event.stopPropagation();
            this.requestClose('keyboard');
        }
    }
    async handleOpenChange() {
        if (this.open) {
            this.scShow.emit();
            this.originalTrigger = document.activeElement;
            // Lock body scrolling only if the drawer isn't contained
            if (!this.contained) {
                this.lockBodyScrolling();
            }
            // When the drawer is shown, Safari will attempt to set focus on whatever element has autofocus. This causes the
            // drawer's animation to jitter, so we'll temporarily remove the attribute, call `focus({ preventScroll: true })`
            // ourselves, and add the attribute back afterwards.
            //
            // Related: https://github.com/shoelace-style/shoelace/issues/693
            //
            const autoFocusTarget = this.el.querySelector('[autofocus]');
            if (autoFocusTarget) {
                autoFocusTarget.removeAttribute('autofocus');
            }
            await Promise.all([animationRegistry.stopAnimations(this.drawer), animationRegistry.stopAnimations(this.overlay)]);
            this.drawer.hidden = false;
            // Set initial focus
            requestAnimationFrame(() => {
                const slInitialFocus = this.scInitialFocus.emit();
                if (!slInitialFocus.defaultPrevented) {
                    // Set focus to the autofocus target and restore the attribute
                    if (autoFocusTarget) {
                        autoFocusTarget.focus({ preventScroll: true });
                    }
                    else {
                        this.panel.focus({ preventScroll: true });
                    }
                }
                // Restore the autofocus attribute
                if (autoFocusTarget) {
                    autoFocusTarget.setAttribute('autofocus', '');
                }
            });
            const panelAnimation = animationRegistry.getAnimation(this.el, `drawer.show${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`);
            const overlayAnimation = animationRegistry.getAnimation(this.el, 'drawer.overlay.show');
            await Promise.all([animationRegistry.animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animationRegistry.animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
            this.scAfterShow.emit();
        }
        else {
            // Hide
            this.scHide.emit();
            this.unLockBodyScrolling();
            await Promise.all([animationRegistry.stopAnimations(this.drawer), animationRegistry.stopAnimations(this.overlay)]);
            const panelAnimation = animationRegistry.getAnimation(this.el, `drawer.hide${this.placement.charAt(0).toUpperCase() + this.placement.slice(1)}`);
            const overlayAnimation = animationRegistry.getAnimation(this.el, 'drawer.overlay.hide');
            await Promise.all([animationRegistry.animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options), animationRegistry.animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)]);
            this.drawer.hidden = true;
            // Restore focus to the original trigger
            const trigger = this.originalTrigger;
            if (typeof (trigger === null || trigger === void 0 ? void 0 : trigger.focus) === 'function') {
                setTimeout(() => trigger.focus());
            }
            this.scAfterHide.emit();
        }
    }
    render() {
        return (index.h("div", { key: '2b4b5e33d9c7e58872b96e8e299422d5378cf1d4', part: "base", class: {
                'drawer': true,
                'drawer--open': this.open,
                'drawer--top': this.placement === 'top',
                'drawer--end': this.placement === 'end',
                'drawer--bottom': this.placement === 'bottom',
                'drawer--start': this.placement === 'start',
                'drawer--contained': this.contained,
                'drawer--fixed': !this.contained,
                'drawer--has-footer': this.el.querySelector('[slot="footer"]') !== null,
            }, ref: el => (this.drawer = el), onKeyDown: (e) => this.handleKeyDown(e) }, index.h("div", { key: 'bbd6d084a4879ac0b76ec04ded7b86673aa05a48', part: "overlay", class: "drawer__overlay", onClick: () => this.requestClose('overlay'), tabindex: "-1", ref: el => (this.overlay = el) }), index.h("div", { key: 'c932834dbc832a574c24a4f53abce47f601935bf', part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : undefined, "aria-labelledby": !this.noHeader ? 'title' : undefined, tabindex: "0", ref: el => (this.panel = el) }, !this.noHeader && (index.h("header", { key: 'f5d5c9d0131d0927c88aaf6932f27daa3cfc6cb7', part: "header", class: this.stickyHeader ? 'header__sticky' : '' }, index.h("slot", { key: '2f85db9032d2cf3aa3983ae5485711b9d4e7b0b0', name: "header" }, index.h("div", { key: 'e5ec04dae2abc43454a1cc34d28555da7ccfcd27', class: "drawer__header" }, index.h("h2", { key: '23b51f44aa4401288fd7c2c471c3228b1ab78af0', part: "title", class: "drawer__title", id: "title" }, index.h("slot", { key: '58c4a21a5ba83e6e9d3e0454db377d4ea512f78c', name: "label" }, this.label.length > 0 ? this.label : ' ', " ")), index.h("sc-icon", { key: '7e419416e502baa4f1b7aeb693cb383a9626b358', part: "close-button", exportparts: "base:close-button__base", class: "drawer__close", name: "x", label: 
            /** translators: Close this modal window. */
            wp.i18n.__('Close', 'surecart'), onClick: () => this.requestClose('close-button') }))))), index.h("footer", { key: 'a9558ab9e9130a2b27c1b2c280590bc90989b5af', part: "header-suffix", class: "drawer__header-suffix" }, index.h("slot", { key: '5ff373dbcec307bae743f2a49357009af705590f', name: "header-suffix" })), index.h("div", { key: '96c7ec60783d6cdc3489265510c5707c2f87e7b5', part: "body", class: "drawer__body" }, index.h("slot", { key: 'b00ef2f590fada708b28551b57f3f212d96bf48c' })), index.h("footer", { key: 'c6a7f2e04dada2f3350c2f41d1439f17edb29f94', part: "footer", class: "drawer__footer" }, index.h("slot", { key: '09583a12ee4247719cbb3ad0c2fdcb77ee9a3865', name: "footer" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
// Top
animationRegistry.setDefaultAnimation('drawer.showTop', {
    keyframes: [
        { opacity: 0, transform: 'translateY(-100%)' },
        { opacity: 1, transform: 'translateY(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
animationRegistry.setDefaultAnimation('drawer.hideTop', {
    keyframes: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// End
animationRegistry.setDefaultAnimation('drawer.showEnd', {
    keyframes: [
        { opacity: 0, transform: 'translateX(100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
animationRegistry.setDefaultAnimation('drawer.hideEnd', {
    keyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Bottom
animationRegistry.setDefaultAnimation('drawer.showBottom', {
    keyframes: [
        { opacity: 0, transform: 'translateY(100%)' },
        { opacity: 1, transform: 'translateY(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
animationRegistry.setDefaultAnimation('drawer.hideBottom', {
    keyframes: [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Start
animationRegistry.setDefaultAnimation('drawer.showStart', {
    keyframes: [
        { opacity: 0, transform: 'translateX(-100%)' },
        { opacity: 1, transform: 'translateX(0)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
animationRegistry.setDefaultAnimation('drawer.hideStart', {
    keyframes: [
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(-100%)' },
    ],
    options: { duration: 250, easing: 'ease' },
});
// Deny close
animationRegistry.setDefaultAnimation('drawer.denyClose', {
    keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.01)' }, { transform: 'scale(1)' }],
    options: { duration: 250 },
});
// Overlay
animationRegistry.setDefaultAnimation('drawer.overlay.show', {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250, easing: 'ease' },
});
animationRegistry.setDefaultAnimation('drawer.overlay.hide', {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250, easing: 'ease' },
});
ScDrawer.style = ScDrawerStyle0;

const ScFormErrorProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.scUpdateError = index.createEvent(this, "scUpdateError", 7);
        this.error = undefined;
    }
    /** Trigger the error event when an error happens  */
    handleErrorUpdate(val) {
        this.scUpdateError.emit(val);
    }
    render() {
        return !!(mutations$2.state === null || mutations$2.state === void 0 ? void 0 : mutations$2.state.message) ? (index.h("sc-alert", { exportparts: "base, icon, text, title, message, close", type: "danger", scrollOnOpen: true, open: !!(mutations$2.state === null || mutations$2.state === void 0 ? void 0 : mutations$2.state.message), closable: !!(mutations$2.state === null || mutations$2.state === void 0 ? void 0 : mutations$2.state.dismissible) }, (mutations$2.state === null || mutations$2.state === void 0 ? void 0 : mutations$2.state.message) && index.h("span", { slot: "title", innerHTML: mutations$2.state.message }), (getters.getAdditionalErrorMessages() || []).map((message, index$1) => (index.h("div", { innerHTML: message, key: index$1 }))))) : null;
    }
    static get watchers() { return {
        "error": ["handleErrorUpdate"]
    }; }
};

exports.sc_cart_session_provider = ScCartSessionProvider;
exports.sc_drawer = ScDrawer;
exports.sc_error = ScFormErrorProvider;

//# sourceMappingURL=sc-cart-session-provider_3.cjs.entry.js.map