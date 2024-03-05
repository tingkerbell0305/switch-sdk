import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useMemo } from "react";
import { BiCheck } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { MdWarning } from "react-icons/md";
import { Loader } from "../components/Loader";
import { TransactionStatus } from "../core/types/transaction";
import { useSingleTransaction } from "../hooks/useSingleTransaction";
import { getStepsInfos } from "../services/internal/transactionStatusService";
import { useSquidStore } from "../store/useSquidStore";
const TransactionStep = ({ title, subTitle, subTitleLink, state, hasStepAfter = true, }) => {
    const stateComponentClass = "tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-rounded-full";
    const idleStateComponent = (_jsx("div", { className: clsx(stateComponentClass, "tw-border-2 tw-border-base-200 tw-text-neutral") }));
    const loadingStateComponent = (_jsx("div", Object.assign({ className: clsx(stateComponentClass, "tw-text-neutral") }, { children: _jsx(Loader, { size: 28.8 }) })));
    const successStateComponent = (_jsx("div", Object.assign({ className: clsx(stateComponentClass, "tw-bg-success tw-text-neutral") }, { children: _jsx(BiCheck, {}) })));
    const warningStateComponent = (_jsx("div", Object.assign({ className: clsx(stateComponentClass, "tw-bg-warning tw-text-neutral") }, { children: _jsx(MdWarning, {}) })));
    const errorStateComponent = (_jsx("div", Object.assign({ className: clsx(stateComponentClass, "tw-bg-warning tw-text-neutral") }, { children: _jsx(FaTimes, {}) })));
    const getStateComponent = () => {
        switch (state) {
            case "pending":
                return idleStateComponent;
            case "ongoing" || "initialLoading":
                return loadingStateComponent;
            case "success" || "received_usdc":
                return successStateComponent;
            case "needs_gas":
                return warningStateComponent;
            case "error":
                return errorStateComponent;
            default:
                return idleStateComponent;
        }
    };
    return (_jsxs("div", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-flex-row tw-items-start tw-gap-3 tw-px-2" }, { children: [hasStepAfter && (_jsx("div", { style: { height: 28, width: 2, top: 34, left: 19 }, className: "tw-absolute tw-bg-base-200" })), _jsx("span", Object.assign({ className: "tw-h-6 tw-w-6 tw-rounded-full" }, { children: getStateComponent() })), _jsxs("div", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-font-medium", style: { fontSize: "16px" } }, { children: title })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: subTitle })), subTitleLink && (_jsx("a", Object.assign({ target: "_blank", href: subTitleLink, rel: "noreferrer" }, { children: _jsx(HiExternalLink, { size: 16 }) })))] }))] }))] })));
};
const CollapsibleBoxTitle = ({ title }) => {
    return (_jsx("span", Object.assign({ id: "squid-header-title", className: "tw-text-lg tw-font-semibold tw-text-base-content", style: {
            position: "relative",
            top: "-20px",
            width: "100%",
            textAlign: "center",
            marginBottom: "-20px",
            pointerEvents: "none",
        } }, { children: title })));
};
export const TrackTransactionView = ({ fromChain, fromToken, toToken, toChain, amount, }) => {
    const { currentTransaction } = useSquidStore();
    const { transactionStatusQuery } = useSingleTransaction(currentTransaction);
    const routeType = useMemo(() => currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.routeType, [currentTransaction]);
    const steps = getStepsInfos({
        txType: routeType,
        fromChain,
        fromToken,
        toChain,
        toToken,
        transaction: currentTransaction,
        statusResponse: transactionStatusQuery,
        amount: amount !== null && amount !== void 0 ? amount : "0",
    });
    return (_jsxs("div", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-gap-7" }, { children: [_jsx(CollapsibleBoxTitle, { title: "Track Transaction" }), steps.map((step, index) => {
                var _a;
                return (_jsx(TransactionStep, { title: step.label, state: step.status, subTitle: (_a = step.subTitle) !== null && _a !== void 0 ? _a : "", subTitleLink: step.link }, index));
            }), _jsx(TransactionStep, { title: `Gas refund on ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainName}`, state: TransactionStatus.PENDING, subTitle: "See Axelarscan for details", hasStepAfter: false, subTitleLink: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl })] })));
};
//# sourceMappingURL=TrackTransactionView.js.map