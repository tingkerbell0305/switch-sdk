import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { HiExternalLink } from "react-icons/hi";
import { useSingleTransaction } from "../../hooks/useSingleTransaction";
import { getMainExplorerUrl } from "../../services/internal/transactionService";
export const ViewTransactionButton = ({ transaction, }) => {
    const { transactionStatusQuery } = useSingleTransaction(transaction);
    // We'll need to display axelar url as soon as we get it from /status endpoint
    const dynamicTx = useMemo(() => (Object.assign(Object.assign({}, transaction), { statusResponse: transactionStatusQuery.data })), [transaction, transactionStatusQuery.data]);
    const mainExplorerUrl = useMemo(() => {
        return getMainExplorerUrl(dynamicTx);
    }, [dynamicTx]);
    if (!mainExplorerUrl || !dynamicTx.transactionId) {
        return null;
    }
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base tw-text-base-content hover:tw-underline" }, { children: [_jsx("a", Object.assign({ target: "_blank", rel: "noreferrer", href: mainExplorerUrl, className: "tw-font-medium" }, { children: "View" })), _jsx(HiExternalLink, {})] })));
};
//# sourceMappingURL=ViewTransactionButton.js.map