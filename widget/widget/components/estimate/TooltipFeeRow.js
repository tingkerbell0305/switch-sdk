import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NumericValue } from "../NumericValue";
export const TooltipFeeRow = ({ row }) => {
    var _a;
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-justify-between tw-gap-6" }, { children: [_jsx("span", { children: row.title }), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1" }, { children: [row.approximateFee && _jsx("span", { children: "~" }), _jsx(NumericValue, { value: row.amount, significantFigures: 4, currency: {
                                    symbol: (_a = row.token) === null || _a === void 0 ? void 0 : _a.symbol,
                                    symbolPosition: "after",
                                } })] })), _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-text-neutral-content" }, { children: _jsx(NumericValue, { value: row.amountUSD, currency: {
                                symbol: "$",
                                symbolPosition: "before",
                            } }) }))] }))] })));
};
//# sourceMappingURL=TooltipFeeRow.js.map