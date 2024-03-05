import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEstimate } from "../../hooks/useEstimate";
import { useSwap } from "../../hooks/useSwap";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { NumericValue } from "../NumericValue";
export const ExchangeRateRow = ({ isLoading }) => {
    const { fromToken, toToken } = useSwap();
    const { toAmount, exchangeRate } = useEstimate();
    return (_jsxs("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsx("span", { children: "Exchange rate" }), isLoading ? (_jsx(LoadingSkeleton, { width: 100 })) : (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsxs("span", { children: [+toAmount > 0 ? "1" : "0", " ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol] }), _jsx("span", { children: "=" }), _jsxs("span", { children: [_jsx(NumericValue, { value: exchangeRate, significantFigures: 4, currency: {
                                    symbol: toToken === null || toToken === void 0 ? void 0 : toToken.symbol,
                                    symbolPosition: "after",
                                } }), " "] })] })))] })));
};
//# sourceMappingURL=ExchangeRateRow.js.map