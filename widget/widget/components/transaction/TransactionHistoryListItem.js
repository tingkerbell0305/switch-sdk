import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { formatUnits } from "ethers/lib/utils";
import { useMemo } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { useSingleTransaction } from "../../hooks/useSingleTransaction";
import { useSquidChains } from "../../hooks/useSquidChains";
import { formatTransactionHistoryDate, getMainExplorerUrl, } from "../../services/internal/transactionService";
import { useSquidStore } from "../../store/useSquidStore";
import { ImageWrapper } from "../ImageWrapper";
import { NumericValue } from "../NumericValue";
import { TransactionStatusElement } from "./TransactionStatus";
export const TransactionHistoryListItem = ({ transaction }) => {
    var _a, _b, _c, _d, _e;
    const { config } = useSquidStore();
    const { latestStatus, transactionStatusQuery } = useSingleTransaction(transaction);
    const { chains } = useSquidChains();
    const { fromChainLogo, toChainLogo } = useMemo(() => {
        var _a, _b;
        return {
            fromChainLogo: (_a = chains.find((chain) => chain.chainId.toString() === transaction.params.fromChain)) === null || _a === void 0 ? void 0 : _a.chainIconURI,
            toChainLogo: (_b = chains.find((chain) => chain.chainId.toString() === transaction.params.toChain)) === null || _b === void 0 ? void 0 : _b.chainIconURI,
        };
    }, [chains, transaction.params.fromChain, transaction.params.toChain]);
    const formattedDate = useMemo(() => formatTransactionHistoryDate(transaction), [transaction]);
    const mainExplorerUrl = useMemo(() => {
        return getMainExplorerUrl(Object.assign(Object.assign({}, transaction), { statusResponse: transactionStatusQuery.data }));
    }, [transaction, transactionStatusQuery.data]);
    return (_jsx("li", Object.assign({ className: clsx("w-full tw-flex tw-min-h-[66px] tw-flex-row tw-items-center hover:tw-bg-base-200", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) &&
            "tw-bg-opacity-0 hover:tw-bg-opacity-50") }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-px-6 tw-py-3 tw-text-base-sms" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-6" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-max-w-[29px] tw-flex-col tw-items-center tw-justify-center tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-h-[20px] tw-items-center tw-text-base tw-font-medium tw-uppercase tw-text-base-content" }, { children: formattedDate === null || formattedDate === void 0 ? void 0 : formattedDate.month })), _jsx("span", Object.assign({ className: "tw-text-neutral-content" }, { children: formattedDate === null || formattedDate === void 0 ? void 0 : formattedDate.day }))] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(ImageWrapper, { src: fromChainLogo, style: { width: 17, height: 17 }, className: "tw-rounded-full tw-bg-base-100 tw-bg-opacity-60" }), _jsx("span", { children: (_c = transaction.params.fromToken) === null || _c === void 0 ? void 0 : _c.symbol })] })), _jsx(BsArrowRightShort, { size: 20 }), _jsxs("span", Object.assign({ className: "gap-0.5 tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(ImageWrapper, { src: toChainLogo, style: { width: 17, height: 17 }, className: "tw-rounded-full tw-bg-base-100 tw-bg-opacity-60" }), _jsx("span", { children: (_d = transaction.params.toToken) === null || _d === void 0 ? void 0 : _d.symbol })] }))] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-text-sm tw-text-neutral-content" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", { children: "Sent" }), _jsx(NumericValue, { value: formatUnits(transaction.params.fromAmount, transaction.params.fromToken.decimals), significantFigures: 4 })] })), _jsx("span", { children: (_e = transaction.params.fromToken) === null || _e === void 0 ? void 0 : _e.symbol })] })), mainExplorerUrl && (_jsx("span", { children: _jsx("a", Object.assign({ className: "tw-flex tw-flex-row tw-items-center", target: "_blank", rel: "noreferrer", href: mainExplorerUrl }, { children: _jsx(TbExternalLink, {}) })) }))] }))] }))] })), _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2 tw-text-base" }, { children: _jsx(TransactionStatusElement, { loadingLabel: "On its way", transaction: transaction, status: latestStatus }) }))] })) })));
};
//# sourceMappingURL=TransactionHistoryListItem.js.map