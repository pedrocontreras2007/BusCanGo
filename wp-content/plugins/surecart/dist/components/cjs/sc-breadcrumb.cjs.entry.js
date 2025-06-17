'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8acc3c89.js');

const scBreadcrumbCss = ":host{display:inline-flex}.breadcrumb-item{display:inline-flex;align-items:center;font-family:var(--sc-font-sans);font-size:var(--sc-font-size-small);font-weight:var(--sc-font-weight-semibold);color:var(--sc-breadcrumb-color, var(--sc-color-gray-600));line-height:var(--sc-line-height-normal);white-space:nowrap}.breadcrumb-item__label{display:inline-block;font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;text-decoration:none;color:inherit;background:none;border:none;border-radius:var(--sc-border-radius-medium);padding:0;margin:0;cursor:pointer;transition:color var(--sc-transition-fast) ease}:host(:not(:last-of-type)) .breadcrumb-item__label{color:var(--sc-breadcrumb-item-label-color, var(--sc-color-gray-900))}:host(:not(:last-of-type)) .breadcrumb-item__label:hover{color:var(--sc-breadcrumb-item-label-hover-color, var(--sc-color-primary-500))}:host(:not(:last-of-type)) .breadcrumb-item__label:active{color:var(--sc-breadcrumb-item-label-active-color, var(--sc-color-gray-900))}.breadcrumb-item__label:focus{box-shadow:var(--sc-focus-ring)}.breadcrumb-item__prefix,.breadcrumb-item__suffix{display:none;flex:0 0 auto;display:flex;align-items:center}.breadcrumb-item--has-prefix .breadcrumb-item__prefix{display:inline-flex;margin-right:var(--sc-spacing-x-small)}.breadcrumb-item--has-suffix .breadcrumb-item__suffix{display:inline-flex;margin-left:var(--sc-spacing-x-small)}:host(:last-of-type) .breadcrumb-item__separator{display:none}.breadcrumb-item__separator{display:inline-flex;align-items:center;margin:0 var(--sc-spacing-x-small);user-select:none}";
const ScBreadcrumbStyle0 = scBreadcrumbCss;

const ScBreadcrumb = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.href = undefined;
        this.target = undefined;
        this.rel = 'noreferrer noopener';
        this.hasPrefix = undefined;
        this.hasSuffix = undefined;
    }
    handleSlotChange() {
        this.hasPrefix = !!this.el.querySelector('[slot="prefix"]');
        this.hasSuffix = !!this.el.querySelector('[slot="suffix"]');
    }
    render() {
        const Tag = this.href ? 'a' : 'div';
        return (index.h("div", { key: '8599d14c998b5caf7616897ec666844b2d745724', part: "base", class: {
                'breadcrumb-item': true,
                'breadcrumb-item--has-prefix': this.hasPrefix,
                'breadcrumb-item--has-suffix': this.hasSuffix,
            } }, index.h("span", { key: 'dd54a9100ef9cbaba32888fb2d81336b9c1b0186', part: "prefix", class: "breadcrumb-item__prefix" }, index.h("slot", { key: '5a161742a396e0a47cb42a081008591c30fabdcf', name: "prefix" })), index.h(Tag, { key: 'df1cdd13909e78507ec2170313f54f854d362ce9', part: "label", class: "breadcrumb-item__label breadcrumb-item__label--link", href: this.href, target: this.target, rel: this.rel }, index.h("slot", { key: '46082728125574e58343ccb745bf99b0b10f8071' })), index.h("span", { key: 'f60d947ceb4d7a8ab460de9a32cb8ac6bafa6d9f', part: "suffix", class: "breadcrumb-item__suffix" }, index.h("slot", { key: '9b91ec3388e2df5881fc4fc83c9ac9ae4b0e0cd7', name: "suffix", onSlotchange: () => this.handleSlotChange() })), index.h("span", { key: 'c51051586470e8ddf5ffeb45cde8a9755100acfa', part: "separator", class: "breadcrumb-item__separator", "aria-hidden": "true" }, index.h("slot", { key: '07f352eeb0d3891004b8b7500192178cd77f51f8', name: "separator", onSlotchange: () => this.handleSlotChange() }, index.h("sc-icon", { key: 'f335af9fbf60cca4033ff641a87073c86407862a', name: "chevron-right" })))));
    }
    get el() { return index.getElement(this); }
};
ScBreadcrumb.style = ScBreadcrumbStyle0;

exports.sc_breadcrumb = ScBreadcrumb;

//# sourceMappingURL=sc-breadcrumb.cjs.entry.js.map