import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RiErrorWarningFill } from "react-icons/ri";
import { transactionErrorPauseAnimation } from "../../assets/animations";
import { useTransaction } from "../../hooks/useTransaction";
import { AnimationWrapper } from "../AnimationWrapper";
export const TransactionPauseView = () => {
    const { toChain, currentTransaction } = useTransaction();
    return (_jsx("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-col" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-h-full tw-flex-col tw-items-center tw-justify-center tw-gap-4" }, { children: [_jsx(AnimationWrapper, { animReplacement: _jsx(RiErrorWarningFill, { size: 60 }), lottieJsonFile: transactionErrorPauseAnimation }), _jsx("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-1" }, { children: _jsxs("span", Object.assign({ className: "tw-text-center tw-text-base tw-text-neutral-content" }, { children: ["The transaction needs more gas to be executed on", " ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName, " please add more gas via", " ", _jsx("a", Object.assign({ href: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl, target: "_blank", rel: "noopener noreferrer", className: "tw-cursor-pointer tw-underline" }, { children: "Axelarscan" }))] })) }))] })) })));
};
//# sourceMappingURL=TransactionPauseView.tsx.js.map