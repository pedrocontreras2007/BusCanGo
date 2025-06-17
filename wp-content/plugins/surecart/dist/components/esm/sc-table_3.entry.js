import { r as registerInstance, h, H as Host } from './index-745b6bec.js';

const scTableCss = ":host{display:table;width:100%;height:100%;border-spacing:0;border-collapse:collapse;table-layout:fixed;font-family:var(--sc-font-sans);border-radius:var(--border-radius, var(--sc-border-radius-small))}:host([shadowed]){box-shadow:var(--sc-shadow-medium)}::slotted([slot=head]){border-bottom:1px solid var(--sc-table-border-bottom-color, var(--sc-color-gray-200))}";
const ScTableStyle0 = scTableCss;

const ScTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '77abe849e30b417320343f911384215194b2519d' }, h("slot", { key: '73e96aa63ce6d40270fd6cda333c7f37a85d0307', name: "head" }), h("slot", { key: 'd8e1d1c4321d46003c43f499311c59de0aaa9794' }), h("slot", { key: '509d4b5227b4a64eec3df2c4c92453cbd79c169b', name: "footer" })));
    }
};
ScTable.style = ScTableStyle0;

const scTableCellCss = ":host{display:table-cell;font-size:var(--sc-font-size-medium);padding:var(--sc-table-cell-spacing, var(--sc-spacing-small)) var(--sc-table-cell-spacing, var(--sc-spacing-large)) !important;vertical-align:middle}:host([slot=head]){background:var(--sc-table-cell-background-color, var(--sc-color-gray-50));font-size:var(--sc-font-size-x-small);padding:var(--sc-table-cell-spacing, var(--sc-spacing-small));text-transform:uppercase;font-weight:var(--sc-font-weight-semibold);letter-spacing:var(--sc-letter-spacing-loose);color:var(--sc-color-gray-500)}:host(:last-child){text-align:right}sc-table-cell{display:table-cell;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const ScTableCellStyle0 = scTableCellCss;

const ScTableScll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'e528826ac8978c86a20785851a9d865ae5941d0d' }, h("slot", { key: '54f97df7fc7e94f472af13abb01866c09eaec790' })));
    }
};
ScTableScll.style = ScTableCellStyle0;

const scTableRowCss = ":host{display:table-row;border:1px solid var(--sc-table-row-border-bottom-color, var(--sc-color-gray-200))}:host([href]){cursor:pointer}:host([href]:hover){background:var(--sc-color-gray-50)}";
const ScTableRowStyle0 = scTableRowCss;

const ScTableRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = undefined;
    }
    render() {
        return (h(Host, { key: '91166738aca1ed7848f09905c3e53421d098d625' }, h("slot", { key: '48a365285358271a4b4e76105108f51fcf4d4ab7' })));
    }
};
ScTableRow.style = ScTableRowStyle0;

export { ScTable as sc_table, ScTableScll as sc_table_cell, ScTableRow as sc_table_row };

//# sourceMappingURL=sc-table_3.entry.js.map