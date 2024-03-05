import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import { CgSpinnerTwo } from "react-icons/cg";
import { transactionProcessinganimation } from "../../assets/animations";
import { useSwap } from "../../hooks/useSwap";
import { useSquidStore } from "../../store/useSquidStore";
import { Timer } from "../Timer";
import { TrackButton } from "../buttons/TrackButton";
import { ViewTransactionButton } from "../buttons/ViewTransactionButton";
import { TransactionStateContent } from "./TransactionStateContent";
export const TransactionProcessingView = ({ setIsCollapseBoxOpen }) => {
    const { currentTransaction } = useSquidStore();
    const { fromChain } = useSwap();
    return (_jsx(TransactionStateContent, Object.assign({ animation: transactionProcessinganimation, animReplacement: _jsx("div", Object.assign({ className: "tw-animate-spin" }, { children: _jsx(CgSpinnerTwo, { size: 60 }) })), title: "Processing" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-2" }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-1 tw-text-sm tw-font-semibold tw-text-base-content" }, { children: _jsx(Timer, {}) })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-0.5 tw-text-center tw-text-sm" }, { children: ["Your tokens are on their way, feel free to leave this page", _jsxs("span", Object.assign({ className: "tw-mt-2 tw-flex tw-gap-3" }, { children: [(fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM && (_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-justify-center" }, { children: _jsx(TrackButton, { showEstimate: true, onClick: () => setIsCollapseBoxOpen(true) }) }))), _jsx(ViewTransactionButton, { transaction: currentTransaction })] }))] }))] })) })));
};
//# sourceMappingURL=TransactionProcessingView.js.map