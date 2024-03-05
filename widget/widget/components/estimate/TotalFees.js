import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEstimate } from "../../hooks/useEstimate";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { NumericValue } from "../NumericValue";
export const TotalFees = ({ label = "Total fees", isFetching = false, }) => {
    const { firstFeeCost, totalWithRefundEstimate } = useEstimate();
    const value = () => (_jsxs(_Fragment, { children: [_jsx(NumericValue, { value: totalWithRefundEstimate.totalAmount.toString(), significantFigures: 4, currency: {
                    symbol: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.symbol,
                    symbolPosition: "after",
                } }), _jsxs("span", Object.assign({ className: "tw-text-neutral-content" }, { children: ["(", _jsx(NumericValue, { value: totalWithRefundEstimate.totalAmountUSD.toString(), currency: {
                            symbol: "$",
                            symbolPosition: "before",
                        } }), ")"] }))] }));
    return (_jsxs("li", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: _jsx("span", { children: label }) })), _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1" }, { children: isFetching ? _jsx(LoadingSkeleton, {}) : value() }))] })));
};
//# sourceMappingURL=TotalFees.js.map