import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatUnits } from "ethers/lib/utils";
import { ImArrowRight2 } from "react-icons/im";
import { NumericValue } from "../NumericValue";
export const TransactionHeader = ({ axelarUrl, toToken, fromAmount, fromToken, fromChain, toChain, estimatedRouteDuration, toAmount, displayTimeEstimate = true, }) => {
    return (_jsx("div", Object.assign({ className: "tw-mt-3 tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-3 tw-text-base" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-2" }, { children: [_jsxs("span", Object.assign({ className: "tw-text-s tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(NumericValue, { value: formatUnits(fromAmount !== null && fromAmount !== void 0 ? fromAmount : "0", fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals), significantFigures: 4, currency: {
                                symbol: fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol,
                                symbolPosition: "after",
                            } }), _jsx(ImArrowRight2, {}), _jsx(NumericValue, { value: toAmount, significantFigures: 4, currency: {
                                symbol: toToken === null || toToken === void 0 ? void 0 : toToken.symbol,
                                symbolPosition: "after",
                            } })] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-center" }, { children: [fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName, " to ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName] }))] })) })));
};
//# sourceMappingURL=TransactionHeader.js.map