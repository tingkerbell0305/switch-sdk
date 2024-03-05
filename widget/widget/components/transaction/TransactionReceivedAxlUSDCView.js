import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { transactionHalfSuccessAnimation } from "../../assets/animations";
import { squidAxlUSDCWarningLink } from "../../core/externalLinks";
import { useMultiChain } from "../../hooks/useMultiChain";
import { useSquidTokens } from "../../hooks/useSquidTokens";
import { useTransaction } from "../../hooks/useTransaction";
import { TextLink } from "../TextLink";
import { LightButton } from "../buttons/LightButton";
import { TransactionStateContent } from "./TransactionStateContent";
export const TransactionReceivedAxlUSDCView = () => {
    const { tokens } = useSquidTokens();
    const { toChain, toToken } = useTransaction();
    const { addToken } = useMultiChain(toChain, toToken);
    const axlUSDCForChain = useMemo(() => {
        return tokens.find((token) => (toChain === null || toChain === void 0 ? void 0 : toChain.chainId) === token.chainId && token.commonKey === "uusdc");
    }, [tokens, toChain]);
    return (_jsx(TransactionStateContent, Object.assign({ animReplacement: _jsx(BsFillCheckCircleFill, { size: 60 }), animation: transactionHalfSuccessAnimation, title: "Received axlUSDC" }, { children: _jsx("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-1" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-4 tw-text-center tw-text-base tw-text-neutral-content" }, { children: [_jsxs("span", Object.assign({ style: {
                            lineHeight: "1.5",
                            marginTop: "10px",
                        } }, { children: ["Due to high slippage, your transaction reverted and you received axlUSDC on ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName, ". To continue, please swap from axlUSDC to your desired token."] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2" }, { children: [axlUSDCForChain && (_jsx(LightButton, Object.assign({ onClick: () => addToken.mutate(axlUSDCForChain), style: { minHeight: "28px" }, className: "tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: ["Add ", axlUSDCForChain === null || axlUSDCForChain === void 0 ? void 0 : axlUSDCForChain.symbol, " to wallet"] })) }))), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(TextLink, Object.assign({ className: "tw-font-medium", href: squidAxlUSDCWarningLink }, { children: "Learn more" })), _jsx(HiExternalLink, {})] }))] }))] })) })) })));
};
//# sourceMappingURL=TransactionReceivedAxlUSDCView.js.map