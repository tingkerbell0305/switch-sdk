import { jsx as _jsx } from "react/jsx-runtime";
import { BsFillXCircleFill } from "react-icons/bs";
import { transactionPendingAnimation } from "../../assets/animations";
import { useTransaction } from "../../hooks/useTransaction";
import { TransactionStateContent } from "./TransactionStateContent";
export const TransactionWarningView = () => {
    var _a;
    const { currentTransaction } = useTransaction();
    return (_jsx(TransactionStateContent, Object.assign({ animReplacement: _jsx(BsFillXCircleFill, { size: 60 }), animation: transactionPendingAnimation, title: "No confirmation" }, { children: _jsx("span", { children: (_a = currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.error) === null || _a === void 0 ? void 0 : _a.message }) })));
};
//# sourceMappingURL=TransactionWarningView.js.map