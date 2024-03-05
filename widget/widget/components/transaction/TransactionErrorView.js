import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsFillXCircleFill } from "react-icons/bs";
import { transactionFailureAnimation, transactionRejectedAnimation, } from "../../assets/animations";
import { TransactionErrorType } from "../../core/types/error";
import { useSquidStore } from "../../store/useSquidStore";
import { ContactSupportButton } from "../buttons/ContactSupportButton";
import { TransactionStateContent } from "./TransactionStateContent";
import { TransactionUnknownAxelarView } from "./TransactionUnknownAxelarView";
import { TransactionUnknownWalletView } from "./TransactionUnknownWalletView";
export const TransactionErrorView = ({ state, }) => {
    var _a, _b, _c;
    const { currentTransaction } = useSquidStore();
    return (_jsx(TransactionStateContent, Object.assign({ animReplacement: _jsx(BsFillXCircleFill, { size: 60 }), animation: state === "rejected"
            ? transactionRejectedAnimation
            : transactionFailureAnimation, title: state === "rejected" ? "No confirmation" : "Swap failed" }, { children: _jsx("span", Object.assign({ className: "tw-text-center" }, { children: (currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.sourceStatus) === "error" ? (((_a = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _a === void 0 ? void 0 : _a.type) ===
                TransactionErrorType.CALL_EXCEPTION ? (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-4 tw-text-center" }, { children: [_jsx("span", { children: "Swap failed on the source chain." }), _jsx(ContactSupportButton, {})] }))) : (_jsx("span", { children: ((_b = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _b === void 0 ? void 0 : _b.message) ? (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4 tw-text-center" }, { children: [_jsx("span", { children: (_c = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _c === void 0 ? void 0 : _c.message }), state !== "rejected" && _jsx(ContactSupportButton, {})] }))) : (_jsx(TransactionUnknownWalletView, {})) }))) : (_jsx("span", { children: _jsx(TransactionUnknownAxelarView, {}) })) })) })));
};
//# sourceMappingURL=TransactionErrorView.js.map