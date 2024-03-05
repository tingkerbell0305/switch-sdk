import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSquidStore } from "../../store/useSquidStore";
import { ContactSupportButton } from "../buttons/ContactSupportButton";
export const TransactionUnknownAxelarView = () => {
    const { currentTransaction } = useSquidStore();
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-2" }, { children: [_jsxs("span", Object.assign({ style: {
                    lineHeight: "1.5",
                } }, { children: [_jsx("span", { children: "Squid encountered an error that caused your transaction to fail." }), " ", _jsx("a", Object.assign({ className: "tw-cursor-pointer tw-text-base-content tw-underline", target: "_blank", href: currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.axelarUrl, rel: "noreferrer" }, { children: "Copy your Axelarscan transaction link" })), " ", _jsx("span", { children: "and" })] })), _jsx(ContactSupportButton, {})] })));
};
//# sourceMappingURL=TransactionUnknownAxelarView.js.map