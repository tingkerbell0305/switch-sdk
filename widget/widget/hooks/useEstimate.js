import { BigNumber, constants } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { useMemo } from "react";
import { gasRefundMultiplier } from "../core/constants";
import { formatUnitsRounded } from "../core/numbers";
import { formatSeconds } from "../services/internal/transactionService";
import { useSquidStore } from "../store/useSquidStore";
import { useNativeTokenBalanceFromChain } from "./useBalance";
import { useSingleTokenPrice } from "./useSingleTokenPrice";
import { useSquidTokens } from "./useSquidTokens";
import { useSwap } from "./useSwap";
import { useAllTokensWithBalanceForChain } from "./useTokensWithBalance";
import { useTransaction } from "./useTransaction";
import { useUserParams } from "./useUserParams";
export const useEstimate = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const { squidRoute } = useTransaction();
    const { config } = useSquidStore();
    const { balance } = useNativeTokenBalanceFromChain();
    const { fromChain, fromToken, toChain } = useSwap();
    const { tokens } = useSquidTokens();
    const { expressSupportedForThisRoute } = useUserParams();
    const priceImpact = useMemo(() => { var _a, _b, _c; return (_c = (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate) === null || _b === void 0 ? void 0 : _b.aggregatePriceImpact) !== null && _c !== void 0 ? _c : undefined; }, [(_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate]);
    const fromAmount = useMemo(() => { var _a, _b, _c; return (_c = (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate) === null || _b === void 0 ? void 0 : _b.fromAmount) !== null && _c !== void 0 ? _c : undefined; }, [(_c = (_b = squidRoute.data) === null || _b === void 0 ? void 0 : _b.estimate) === null || _c === void 0 ? void 0 : _c.fromAmount]);
    const fromAmountFormatted = useMemo(() => (fromAmount ? formatUnits(fromAmount, fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals) : ""), [fromAmount, fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals]);
    const sourceChainNativeToken = useMemo(() => {
        return tokens.find((t) => t.symbol === (fromChain === null || fromChain === void 0 ? void 0 : fromChain.nativeCurrency.symbol) &&
            t.chainId == fromChain.chainId);
    }, [tokens, fromChain]);
    const destChainNativeToken = useMemo(() => {
        return tokens.find((t) => t.symbol === (toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol) &&
            t.chainId == toChain.chainId);
    }, [tokens, toChain]);
    const toAmountUSD = useMemo(() => { var _a, _b, _c; return (_c = (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate) === null || _b === void 0 ? void 0 : _b.toAmountUSD) !== null && _c !== void 0 ? _c : undefined; }, [(_e = (_d = squidRoute.data) === null || _d === void 0 ? void 0 : _d.estimate) === null || _e === void 0 ? void 0 : _e.toAmountUSD]);
    const toAmountUSDFloat = useMemo(() => (toAmountUSD ? parseFloat(toAmountUSD.replace(/,/g, "")) : 0), [toAmountUSD]);
    const exchangeRate = useMemo(() => { var _a, _b; return (_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.exchangeRate) !== null && _b !== void 0 ? _b : "0"; }, [(_f = squidRoute.data) === null || _f === void 0 ? void 0 : _f.estimate.exchangeRate]);
    const toAmountMin = useMemo(() => {
        var _a, _b, _c;
        return formatUnits((_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.toAmountMin) !== null && _b !== void 0 ? _b : "0", (_c = squidRoute.data) === null || _c === void 0 ? void 0 : _c.params.toToken.decimals);
    }, [
        (_g = squidRoute.data) === null || _g === void 0 ? void 0 : _g.estimate.toAmountMin,
        (_h = squidRoute.data) === null || _h === void 0 ? void 0 : _h.params.toToken.decimals,
    ]);
    const toAmount = useMemo(() => {
        var _a, _b, _c;
        const formattedAmount = formatUnitsRounded((_b = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.toAmount) !== null && _b !== void 0 ? _b : "0", (_c = squidRoute.data) === null || _c === void 0 ? void 0 : _c.params.toToken.decimals, 14);
        return formattedAmount === "0.0" ? "0" : formattedAmount;
    }, [
        (_j = squidRoute.data) === null || _j === void 0 ? void 0 : _j.estimate.toAmount,
        (_k = squidRoute.data) === null || _k === void 0 ? void 0 : _k.params.toToken.decimals,
    ]);
    /**
     * At the moment we're only taking the first item
     * of fees array, but keeping the possibility to display multiple fees
     */
    const crossChainGasFee = useMemo(() => {
        var _a;
        const estimate = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate;
        return (estimate === null || estimate === void 0 ? void 0 : estimate.feeCosts.length) > 0 ? estimate === null || estimate === void 0 ? void 0 : estimate.feeCosts[0] : undefined;
    }, [(_l = squidRoute.data) === null || _l === void 0 ? void 0 : _l.estimate]);
    const allFeeCosts = useMemo(() => {
        var _a, _b;
        const estimate = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate;
        return (_b = estimate === null || estimate === void 0 ? void 0 : estimate.feeCosts) !== null && _b !== void 0 ? _b : [];
    }, [(_m = squidRoute.data) === null || _m === void 0 ? void 0 : _m.estimate]);
    const allGasCosts = useMemo(() => {
        var _a, _b;
        const estimate = (_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate;
        return (_b = estimate === null || estimate === void 0 ? void 0 : estimate.gasCosts) !== null && _b !== void 0 ? _b : [];
    }, [(_o = squidRoute.data) === null || _o === void 0 ? void 0 : _o.estimate]);
    const firstGasCost = useMemo(() => (allGasCosts.length > 0 ? allGasCosts[0] : undefined), [allGasCosts]);
    const firstFeeCost = useMemo(() => (allFeeCosts.length > 0 ? allFeeCosts[0] : undefined), [allFeeCosts]);
    const integratorFeeCost = useMemo(() => allFeeCosts.length > 0 && config.collectFees
        ? allFeeCosts.find((f) => f.name === "Integrator Fee")
        : undefined, [allFeeCosts, config]);
    const { getUSDValue } = useSingleTokenPrice(firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token);
    const expressFeeCost = useMemo(() => allFeeCosts.length > 0
        ? allFeeCosts.find((f) => f.name === "Express Fee")
        : undefined, [allFeeCosts]);
    const backendSupportingExpress = useMemo(() => {
        var _a, _b;
        return ((_a = squidRoute.data) === null || _a === void 0 ? void 0 : _a.estimate.isExpressSupported) === true ||
            ((_b = squidRoute.data) === null || _b === void 0 ? void 0 : _b.estimate.isExpressSupported) === undefined;
    }, [(_p = squidRoute.data) === null || _p === void 0 ? void 0 : _p.estimate.isExpressSupported]);
    const expressActivatedUI = useMemo(() => expressSupportedForThisRoute &&
        config.enableExpress &&
        backendSupportingExpress, [
        config.enableExpress,
        backendSupportingExpress,
        expressSupportedForThisRoute,
    ]);
    const transactionTimeEstimate = useMemo(() => expressSupportedForThisRoute && config.enableExpress
        ? formatSeconds(20, "s", "min")
        : formatSeconds((fromChain === null || fromChain === void 0 ? void 0 : fromChain.estimatedRouteDuration) || 0, "s", "min"), [
        config.enableExpress,
        fromChain === null || fromChain === void 0 ? void 0 : fromChain.estimatedRouteDuration,
        expressSupportedForThisRoute,
    ]);
    const expectedGasRefundCost = useMemo(() => {
        var _a;
        return BigNumber.from((_a = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _a !== void 0 ? _a : "0")
            .mul(gasRefundMultiplier)
            .div(100);
    }, [firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount]);
    const sameTokenBetweenFees = useMemo(() => (firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.address) === (firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.address) &&
        (firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.chainId) === (firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.chainId), [
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.address,
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.chainId,
        firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.address,
        firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.chainId,
    ]);
    // From token is the same as the native chain token
    // TODO: This only works for EVM chains
    const isFromTokenNative = useMemo(() => {
        if (fromToken === undefined || (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId) === undefined) {
            return false;
        }
        return fromToken.symbol === fromChain.nativeCurrency.symbol;
    }, [fromToken, fromChain]);
    const totalNativeFees = useMemo(() => {
        var _a, _b, _c, _d;
        const expressBn = BigNumber.from((_a = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _a !== void 0 ? _a : constants.Zero);
        if (sameTokenBetweenFees) {
            return BigNumber.from((_b = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _b !== void 0 ? _b : constants.Zero)
                .add(BigNumber.from((_c = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount) !== null && _c !== void 0 ? _c : constants.Zero))
                .add(expressBn);
        }
        return BigNumber.from((_d = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount) !== null && _d !== void 0 ? _d : constants.Zero).add(expressBn);
    }, [
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount,
        firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount,
        sameTokenBetweenFees,
        expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount,
    ]);
    const totalFeesInNativeTokenPlusRatio = useMemo(() => {
        return totalNativeFees.mul(105).div(100);
    }, [totalNativeFees]);
    const totalWithRefundEstimate = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        const firstFee = {
            BN: BigNumber.from((_a = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _a !== void 0 ? _a : "0"),
            token: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
        };
        const expressFee = {
            BN: BigNumber.from((_b = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _b !== void 0 ? _b : "0"),
            token: expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token,
        };
        // Big number amount
        const totalBnbAmount = firstFee.BN.add(expressFee.BN).sub(expectedGasRefundCost);
        const totalAmount = formatUnits(totalBnbAmount, (_d = (_c = firstFee.token) === null || _c === void 0 ? void 0 : _c.decimals) !== null && _d !== void 0 ? _d : 18);
        // USD values
        const formattedRefundCost = formatUnits(expectedGasRefundCost, firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals);
        const formattedRefundCostUSD = getUSDValue(formattedRefundCost);
        const totalAmountUSD = +((_e = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD) !== null && _e !== void 0 ? _e : 0) +
            +((_f = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD) !== null && _f !== void 0 ? _f : 0) -
            +(formattedRefundCostUSD !== null && formattedRefundCostUSD !== void 0 ? formattedRefundCostUSD : 0);
        return {
            totalAmount,
            totalAmountUSD,
            feeToken: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
        };
    }, [
        expectedGasRefundCost,
        expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount,
        expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD,
        expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token,
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount,
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD,
        firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
        getUSDValue,
    ]);
    /**
     * Two cases:
     * 1. If the source token is the same as the native token, check if the balance of native token is less than the (source amount) + (native gas)
     * 2. If the source token is different from the native token, check if the balance of native token is less than (native gas)
     */
    const fromBalanceEnoughToSwap = useMemo(() => {
        var _a;
        if (squidRoute.isLoading)
            return true;
        const fromAmountWei = BigNumber.from(fromAmount !== null && fromAmount !== void 0 ? fromAmount : constants.Zero);
        const fromBalance = (_a = balance.data) !== null && _a !== void 0 ? _a : constants.Zero;
        if (isFromTokenNative) {
            const fromPlusGas = fromAmountWei.add(totalFeesInNativeTokenPlusRatio);
            if (fromPlusGas.lte(fromBalance)) {
                return true;
            }
        }
        else if (totalFeesInNativeTokenPlusRatio.lte(fromBalance)) {
            return true;
        }
        return false;
    }, [
        balance.data,
        fromAmount,
        isFromTokenNative,
        squidRoute.isLoading,
        totalFeesInNativeTokenPlusRatio,
    ]);
    /**
     * In the case where the source token is the same as the native token,
     * we need to advise the user to change the source amount to be less than the balance of native token minus the gas cost
     */
    const minAmountValueWarnMsg = useMemo(() => {
        var _a, _b;
        if (!isFromTokenNative) {
            return undefined;
        }
        const fromBalance = (_a = balance.data) !== null && _a !== void 0 ? _a : constants.Zero;
        const minAmount = fromBalance.sub(totalFeesInNativeTokenPlusRatio);
        if (minAmount.gt(constants.Zero)) {
            const parsedMinAmount = formatUnits(minAmount, (_b = sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.decimals) !== null && _b !== void 0 ? _b : 18);
            return parsedMinAmount;
        }
        return "0";
    }, [
        balance.data,
        isFromTokenNative,
        sourceChainNativeToken === null || sourceChainNativeToken === void 0 ? void 0 : sourceChainNativeToken.decimals,
        totalFeesInNativeTokenPlusRatio,
    ]);
    /**
     * If last updated data is older than X seconds and the query is currently loading, show loading indicator
     */
    const showLoading = useMemo(() => squidRoute.isFetching || squidRoute.isRefetching, [squidRoute.isFetching, squidRoute.isRefetching]);
    const priceImpactStatus = useMemo(() => {
        if (config.priceImpactWarnings !== undefined && priceImpact !== undefined) {
            if (+priceImpact >= config.priceImpactWarnings.warning &&
                +priceImpact < config.priceImpactWarnings.critical) {
                return "warning";
            }
            if (+priceImpact >= config.priceImpactWarnings.critical) {
                return "critical";
            }
            if (+priceImpact < config.priceImpactWarnings.warning) {
                return "normal";
            }
        }
        return undefined;
    }, [config.priceImpactWarnings, priceImpact]);
    const proposedGasDestinationAmount = useMemo(() => {
        // Get native token of chain
        const nativeToken = toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol;
        let gasDestinationAmount = 0;
        switch (nativeToken) {
            case "GLMR":
                gasDestinationAmount = 5.289;
                break;
            case "ETH":
                gasDestinationAmount = 0.0009;
                break;
            case "AVAX":
                gasDestinationAmount = 0.115;
                break;
            case "BNB":
                gasDestinationAmount = 0.00425;
                break;
            case "FTM":
                gasDestinationAmount = 4.45;
                break;
            case "CELO":
                gasDestinationAmount = 3.052;
                break;
            case "KAVA":
                gasDestinationAmount = 2.339;
                break;
            case "MATIC":
                gasDestinationAmount = 1.795;
                break;
            default:
                gasDestinationAmount = 0;
                break;
        }
        return { value: gasDestinationAmount, currency: nativeToken };
    }, [toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol]);
    /**
     * Fetching balances of From & To ChainId tokens
     * This way when user goes to the Token view, tokens are
     * already loaded with their balance
     * Needs to refetch on every chain change
     * Since we're on a hook and fromChain & toChain can change,
     * these two lines below will be called again when chain variable changes
     */
    useAllTokensWithBalanceForChain(fromChain);
    useAllTokensWithBalanceForChain(toChain, "to");
    return {
        allFeeCosts,
        allGasCosts,
        crossChainGasFee,
        priceImpact,
        exchangeRate,
        toAmountMin,
        toAmount,
        fromToken,
        toAmountUSD,
        toAmountUSDFloat,
        isFetching: showLoading,
        squidRouteError: squidRoute.error,
        priceImpactStatus,
        fromAmount,
        fromAmountFormatted,
        estimatedRouteDuration: (_r = (_q = squidRoute.data) === null || _q === void 0 ? void 0 : _q.estimate) === null || _r === void 0 ? void 0 : _r.estimatedRouteDuration,
        minAmountValueWarnMsg,
        fromBalanceEnoughToSwap,
        isFromTokenNative,
        firstFeeCost,
        firstGasCost,
        sameTokenBetweenFees,
        totalFeesInNativeTokenPlusRatio,
        totalNativeFees,
        sourceChainNativeToken,
        expressFeeCost,
        proposedGasDestinationAmount,
        expectedGasRefundCost,
        expressSupportedForThisRoute,
        transactionTimeEstimate,
        totalWithRefundEstimate,
        destChainNativeToken,
        integratorFeeCost,
        expressActivatedUI,
    };
};
//# sourceMappingURL=useEstimate.js.map