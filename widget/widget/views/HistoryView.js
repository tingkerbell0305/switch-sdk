import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { TransactionHistoryListItem } from "../components/transaction/TransactionHistoryListItem";
import { usePersistStore, useSquidStore } from "../store/useSquidStore";
export const HistoryView = () => {
    var _a, _b, _c, _d, _e;
    const { transactionsHistory } = usePersistStore();
    const { config } = useSquidStore();
    // User is connected
    return (_jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-2 tw-overflow-hidden", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsxs("span", Object.assign({ className: "tw-px-5" }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: _jsx("span", Object.assign({ className: "tw-text-base tw-font-semibold" }, { children: "Recent transactions" })) })), ((_c = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.length) !== null && _c !== void 0 ? _c : 0) === 0 && (_jsx("span", Object.assign({ style: { paddingTop: 20, paddingBottom: 20 }, className: "tw-flex tw-text-base" }, { children: "No transaction found" })))] })), ((_d = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.length) !== null && _d !== void 0 ? _d : 0) > 0 && (_jsx("ul", Object.assign({ className: "tw-flex tw-h-full tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: (_e = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.sort((a, b) => { var _a, _b; return ((_a = b === null || b === void 0 ? void 0 : b.timestamp) !== null && _a !== void 0 ? _a : 0) - ((_b = a === null || a === void 0 ? void 0 : a.timestamp) !== null && _b !== void 0 ? _b : 0); })) === null || _e === void 0 ? void 0 : _e.map((transaction) => (_jsx(TransactionHistoryListItem, { transaction: transaction }, `transaction-${transaction.transactionId}`))) })))] })));
};
//# sourceMappingURL=HistoryView.js.map