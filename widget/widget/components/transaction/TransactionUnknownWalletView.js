import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import { useSwap } from "../../hooks/useSwap";
import { ContactSupportButton } from "../buttons/ContactSupportButton";
export const TransactionUnknownWalletView = () => {
    const { fromChain } = useSwap();
    // Different message if it's source chain cosmos because you cant access the transaction from the wallet
    if ((fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.Cosmos) {
        return (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-text-center" }, { children: [_jsx("span", { children: "Squid encountered an error which caused your transaction to fail. Please collect the details about your transaction and" }), _jsx(ContactSupportButton, {})] })));
    }
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2 tw-text-center" }, { children: [_jsx("span", { children: "Squid encountered an error which caused your transaction to fail. Please check your wallet to see more details about the error and" }), _jsx(ContactSupportButton, {})] })));
};
//# sourceMappingURL=TransactionUnknownWalletView.js.map