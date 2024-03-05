import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ExpressToggle } from "../components/toggles/ExpressToggle";
import { GasToggle } from "../components/toggles/GasToggle";
import { TransactionFooter } from "../components/transaction/TransactionFooter";
import { useEstimate } from "../hooks/useEstimate";
import { useTransaction } from "../hooks/useTransaction";
export const SwapViewDetailsCollapsed = ({ isHighlightedExpress, isHighlightedGas, }) => {
    const { toAmount, exchangeRate } = useEstimate();
    const { squidRoute, fromToken, toToken, fromChain } = useTransaction();
    return (_jsxs(_Fragment, { children: [_jsx("span", Object.assign({ id: "squid-header-title", className: "tw-text-xl tw-font-semibold tw-text-base-content", style: {
                    position: "relative",
                    top: "-20px",
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "-20px",
                    pointerEvents: "none",
                } }, { children: "Details" })), _jsx("span", Object.assign({ className: "tw-my-3 tw-flex tw-w-full tw-flex-row tw-items-center tw-text-base tw-font-semibold" }, { children: "Controls" })), _jsxs("div", Object.assign({ className: "tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-3 tw-text-base" }, { children: [_jsx(ExpressToggle, { allowTransparency: false, fadeOnLoad: isHighlightedExpress }), _jsx(GasToggle, { allowTransparency: false, fadeOnLoad: isHighlightedGas })] })), _jsx("span", Object.assign({ className: "tw-bg-neutral" }, { children: _jsx(TransactionFooter, { squidRoute: squidRoute.data, toAmount: toAmount, toToken: toToken, fromToken: fromToken, exchangeRate: exchangeRate }) }))] }));
};
//# sourceMappingURL=SwapViewDetailsCollapsed.js.map