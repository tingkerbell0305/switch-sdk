import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExplorerLink } from "./ExplorerLink";
import { TransactionStatusElement } from "./TransactionStatus";
export const TransactionStep = ({ label, transactionStatus, link, transaction, }) => {
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", { children: label }), link && link.explorerUrl && (_jsx(ExplorerLink, { explorerUrl: link.explorerUrl, externalExplorerImageUrl: link.externalExplorerImageUrl }))] })), _jsx(TransactionStatusElement, { transaction: transaction, status: transactionStatus })] })));
};
//# sourceMappingURL=TransactionStep.js.map