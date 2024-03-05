import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { formatUnits } from "ethers/lib/utils.js";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { limitTradeSizeUsd } from "../../core/constants";
import { roundNumericValue } from "../../core/numbers";
import { useEstimate } from "../../hooks/useEstimate";
import { useSquidStore } from "../../store/useSquidStore";
import { NumericValue } from "../NumericValue";
export const SwapWarning = () => {
    var _a, _b;
    const { config } = useSquidStore();
    const { priceImpactStatus, toAmountUSDFloat, fromBalanceEnoughToSwap, minAmountValueWarnMsg, isFromTokenNative, fromAmount, fromToken, sourceChainNativeToken, totalNativeFees, } = useEstimate();
    const { isConnected: isEvmConnected } = useAccount();
    const tradeLimitUsdExceeded = useMemo(() => {
        var _a;
        return ((_a = config.advanced) === null || _a === void 0 ? void 0 : _a.disableTradeLimit)
            ? false
            : toAmountUSDFloat > limitTradeSizeUsd;
    }, [toAmountUSDFloat, (_a = config.advanced) === null || _a === void 0 ? void 0 : _a.disableTradeLimit]);
    const priceImpactWarning = useMemo(() => priceImpactStatus !== undefined && priceImpactStatus !== "normal", [priceImpactStatus]);
    // TODO: Delete this when liqudiity is good enough
    if (tradeLimitUsdExceeded) {
        return (_jsx("div", Object.assign({ className: clsx("w-full tw-flex tw-flex-row tw-rounded-xl tw-py-2 tw-text-xs tw-text-error") }, { children: _jsxs("span", { children: ["Transaction size is currently limited to", " ", _jsx("span", { children: _jsx(NumericValue, { style: { display: "inline-block !important" }, value: limitTradeSizeUsd.toString(), currency: {
                                symbol: "$",
                                symbolPosition: "before",
                            } }) }), ". Please decrease the size of your transaction and try again."] }) })));
    }
    if (priceImpactWarning) {
        return (_jsx("div", Object.assign({ className: clsx("w-full tw-flex tw-flex-row tw-text-xs", priceImpactStatus === "critical" && "tw-text-error", priceImpactStatus === "warning" && "tw-text-warning") }, { children: _jsx("span", { children: "The size of this trade is large compared to the available liquidity. Reduce the swap amount to get a better price." }) })));
    }
    // There's not enough balance to pay for the gas + the amount
    // TODO: When allowing cosmos as source chain, we need to check if the user is connected to cosmos wallet
    if (!fromBalanceEnoughToSwap &&
        !!fromAmount &&
        parseFloat(fromAmount) > 0 &&
        isEvmConnected) {
        return (_jsx("div", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-rounded-xl tw-py-2 tw-text-xs tw-text-warning" }, { children: isFromTokenNative &&
                minAmountValueWarnMsg !== "0" &&
                minAmountValueWarnMsg !== undefined ? (_jsxs("span", Object.assign({ className: "tw-line-clamp-3" }, { children: ["You do not have enough ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol, " to cover the swap amount and the estimated gas costs for this transfer. Set your input amount to", " ", _jsx("button", Object.assign({ type: "button", className: "tw-underline", onClick: () => useSquidStore.setState({
                            fromPrice: minAmountValueWarnMsg,
                        }) }, { children: _jsxs("span", Object.assign({ className: "tw-underline" }, { children: [roundNumericValue(minAmountValueWarnMsg, 2, false, 4), " ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol] })) })), " ", "or below to cover gas costs."] }))) : (_jsxs("span", Object.assign({ className: "tw-line-clamp-3" }, { children: ["You do not have enough ", sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.symbol, " to cover the estimated gas costs for this transaction. Make sure you have more than", " ", _jsx("span", { children: roundNumericValue(formatUnits(totalNativeFees, (_b = sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.decimals) !== null && _b !== void 0 ? _b : 18), 2, false, 4) }), " ", sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.symbol, " before trying again."] }))) })));
    }
    return null;
};
//# sourceMappingURL=SwapWarning.js.map