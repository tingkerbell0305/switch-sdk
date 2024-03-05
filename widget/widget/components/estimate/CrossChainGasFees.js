import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { constants } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { squidGasFeesRefundLink } from "../../core/externalLinks";
import { useEstimate } from "../../hooks/useEstimate";
import { InfoComponent } from "../InfoComponent";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { NumericValue } from "../NumericValue";
import { TextLink } from "../TextLink";
import { TooltipFeeRow } from "./TooltipFeeRow";
export const CrossChainGasFees = ({ isLoading }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { firstGasCost, firstFeeCost, expressSupportedForThisRoute, expressFeeCost, } = useEstimate();
    const fees = {
        CROSS_CHAIN_GAS_FEES: {
            title: "Expected cross-chain fees",
            amount: formatUnits((_a = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _a !== void 0 ? _a : constants.Zero, firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals),
            amountUSD: (_b = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD) !== null && _b !== void 0 ? _b : "0",
            token: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
            display: firstFeeCost !== undefined,
        },
        SOURCE_CHAIN_GAS: {
            title: "Source chain gas",
            amount: formatUnits((_c = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amount) !== null && _c !== void 0 ? _c : constants.Zero, firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token.decimals),
            amountUSD: (_d = firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.amountUSD) !== null && _d !== void 0 ? _d : "0",
            token: firstGasCost === null || firstGasCost === void 0 ? void 0 : firstGasCost.token,
            display: firstGasCost !== undefined,
            approximateFee: true,
        },
        EXPRESS_GAS_FEES: {
            title: "Boost Fee",
            amount: formatUnits((_e = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _e !== void 0 ? _e : constants.Zero, expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token.decimals),
            amountUSD: (_f = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD) !== null && _f !== void 0 ? _f : "0",
            token: expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token,
            display: expressFeeCost !== undefined,
        },
        ESTIMATED_GAS_FEES: {
            title: "Estimated gas fees",
            amount: (+formatUnits((_g = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amount) !== null && _g !== void 0 ? _g : "0", firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.decimals) +
                (expressSupportedForThisRoute
                    ? +formatUnits((_h = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amount) !== null && _h !== void 0 ? _h : "0", expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.token.decimals)
                    : 0)).toString(),
            amountUSD: (+((_j = firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.amountUSD) !== null && _j !== void 0 ? _j : 0) + +((_k = expressFeeCost === null || expressFeeCost === void 0 ? void 0 : expressFeeCost.amountUSD) !== null && _k !== void 0 ? _k : 0)).toString(),
            token: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token,
            display: firstFeeCost !== undefined,
            approximateFee: true,
        },
    };
    return (_jsxs("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsxs("span", { children: ["Expected gas fees after", " ", _jsx(TextLink, Object.assign({ className: "tw-underline", href: squidGasFeesRefundLink }, { children: "refund" }))] }), _jsx(InfoComponent, { maxWidth: "310px", placement: "top-start", id: "crosschaingas-fees", iconSize: 13, tooltipComponent: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2 tw-text-sm" }, { children: [_jsx("span", { children: "We overestimate gas by 50% to ensure your trade. Any gas that isn't used is refunded by Axelar. The fee shown reflects the estimated amount you will have paid after being refunded." }), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-1 tw-text-sm" }, { children: [_jsx(TooltipFeeRow, { row: fees.CROSS_CHAIN_GAS_FEES }), fees.EXPRESS_GAS_FEES.display && (_jsx(TooltipFeeRow, { row: fees.EXPRESS_GAS_FEES }))] }))] })) })] })), isLoading ? (_jsx(LoadingSkeleton, { width: 120 })) : firstFeeCost || expressFeeCost ? (_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-2" }, { children: _jsx("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: _jsx(NumericValue, { significantFigures: 4, value: fees.ESTIMATED_GAS_FEES.amount, currency: {
                            symbol: firstFeeCost === null || firstFeeCost === void 0 ? void 0 : firstFeeCost.token.symbol,
                            symbolPosition: "after",
                        } }) })) }))) : (_jsx("span", { children: "-" }))] })));
};
//# sourceMappingURL=CrossChainGasFees.js.map