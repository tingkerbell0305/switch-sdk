import { jsx as _jsx } from "react/jsx-runtime";
import { CgSpinnerTwo } from "react-icons/cg";
import { transactionPendingAnimation } from "../../assets/animations";
import { TransactionStateContent } from "./TransactionStateContent";
export const TransactionConfirmView = () => {
    return (_jsx(TransactionStateContent, Object.assign({ animReplacement: _jsx("div", Object.assign({ className: "tw-animate-spin" }, { children: _jsx(CgSpinnerTwo, { size: 60 }) })), animation: transactionPendingAnimation, title: "Confirm in wallet" }, { children: _jsx("span", { children: "Awaiting confirmation in your wallet with a signature." }) })));
};
//# sourceMappingURL=TransactionConfirmView.js.map