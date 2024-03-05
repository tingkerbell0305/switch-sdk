import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiArrowDown } from "react-icons/hi";
import { CollapsibleBox } from "../components/CollapsibleBox";
import { Loader } from "../components/Loader";
import { PoweredBy } from "../components/PoweredBy";
import { BoostBadge } from "../components/badges/BoostBadge";
import { GasBadge } from "../components/badges/GasBadge";
import { SubmitSwapBtn } from "../components/swap/SubmitSwapBtn";
import { SwapConfiguration } from "../components/swap/SwapConfiguration";
import { SwapRouteError } from "../components/swap/SwapRouteError";
import { SwapWarning } from "../components/swap/SwapWarning";
import { limitTradeSizeUsd, maxPriceImpact, widgetHeaderSize, } from "../core/constants";
import { roundNumericValue } from "../core/numbers";
import { useEstimate } from "../hooks/useEstimate";
import { usePrices } from "../hooks/usePrices";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSwap } from "../hooks/useSwap";
import { useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
import { SwapViewDetailsCollapsed } from "./SwapViewDetailsCollapsed";
export const SwapView = () => {
    var _a, _b, _c, _d, _e;
    const { tokenItems, fromPrice, fromPriceChanged, invertSwaps, isSameChain } = useSwap();
    const [isCollapseBoxOpen, setIsCollapseBoxOpen] = useState(false);
    const [isHighlightedGas, setIsHighlightedGas] = useState(false);
    const [isHighlightedExpress, setIsHighlightedExpress] = useState(false);
    const { supportedDestinationChains, supportedSourceChains } = useSquidChains();
    const { tokenPrices } = usePrices();
    const { toAmount, isFetching: isFetchingEstimate, squidRouteError, priceImpact, toAmountUSDFloat, totalWithRefundEstimate, } = useEstimate();
    const { config } = useSquidStore();
    const { swapRoute } = useSwapRoutePersistStore();
    const swapButtonDisabledConditions = useMemo(() => [
        toAmountUSDFloat > limitTradeSizeUsd,
        isFetchingEstimate,
        +toAmount <= 0,
        +(priceImpact !== null && priceImpact !== void 0 ? priceImpact : "0") > maxPriceImpact, //  If the price impact is too high, we don't want to allow the user to swap
    ], [isFetchingEstimate, priceImpact, toAmount, toAmountUSDFloat]);
    return (_jsxs("div", Object.assign({ className: "tw-rounded-b-box tw-relative tw-flex tw-h-full tw-grow tw-flex-col" }, { children: [_jsx("span", Object.assign({ className: "tw-flex tw-flex-col" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-3" }, { children: [_jsx(SwapConfiguration, { id: "squid-swap-source", direction: "from", onPriceChange: (d) => fromPriceChanged(d), price: fromPrice, tokens: tokenItems.from, chains: supportedSourceChains, tokenBasePrice: (_a = tokenPrices.data) === null || _a === void 0 ? void 0 : _a.sourceTokenUsdPrice, selectedChainId: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId, selectedAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress }), _jsx("span", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-justify-center" }, { children: _jsx("span", Object.assign({ className: "tw-absolute" }, { children: _jsx("button", Object.assign({ onClick: invertSwaps, type: "button", className: "w-rounded-md tw-group tw-dsw-btn-primary tw-flex tw-flex-row tw-items-center tw-justify-center tw-bg-primary tw-p-0 tw-text-center", style: {
                                        padding: "0 !important",
                                        width: "26px",
                                        height: "26px",
                                        borderRadius: "8px",
                                        marginTop: "4px",
                                    } }, { children: _jsx(HiArrowDown, { size: 16, className: "tw-text-primary-content tw-transition-all group-hover:tw-rotate-180" }) })) })) })), _jsx(SwapConfiguration, { id: "squid-swap-destination", direction: "to", price: toAmount, tokens: tokenItems.to, chains: supportedDestinationChains, tokenBasePrice: (_b = tokenPrices.data) === null || _b === void 0 ? void 0 : _b.destinationTokenUsdPrice, selectedChainId: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId, selectedAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress, isLoadingPrice: isFetchingEstimate })] })) })), _jsxs("span", Object.assign({ className: clsx("tw-flex tw-h-full tw-w-full tw-grow tw-flex-col tw-gap-2 tw-pt-4", ((_d = (_c = config.style) === null || _c === void 0 ? void 0 : _c.advanced) === null || _d === void 0 ? void 0 : _d.transparentWidget) && "tw-bg-opacity-0") }, { children: [_jsx(CollapsibleBox, Object.assign({ isOpen: isCollapseBoxOpen, openOffset: `-${widgetHeaderSize.height + widgetHeaderSize.paddingY}px`, onClose: () => {
                            setIsCollapseBoxOpen(false);
                            setIsHighlightedExpress(false);
                            setIsHighlightedGas(false);
                        }, closedStateChildren: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [isFetchingEstimate ? (_jsxs("div", Object.assign({ className: "tw-flex tw-min-h-[31px] tw-flex-row tw-items-center tw-gap-1.5 tw-text-sm tw-font-semibold" }, { children: [_jsx(Loader, {}), _jsx("span", { children: "Fetching estimations" })] }))) : (_jsxs("button", Object.assign({ type: "button", onClick: () => setIsCollapseBoxOpen(true), className: "tw-flex tw-flex-col" }, { children: [_jsxs("span", Object.assign({ className: "tw-text-sm tw-font-semibold" }, { children: [_jsx("span", { children: roundNumericValue(totalWithRefundEstimate.totalAmount.toString(), 2, false, 4) }), " ", _jsx("span", Object.assign({ className: "tw-ml-0.5" }, { children: (_e = totalWithRefundEstimate === null || totalWithRefundEstimate === void 0 ? void 0 : totalWithRefundEstimate.feeToken) === null || _e === void 0 ? void 0 : _e.symbol })), " "] })), _jsx("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: "Estimated fee" }))] }))), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1.5" }, { children: [!isSameChain && (_jsx("span", Object.assign({ className: "tw-flex tw-items-center" }, { children: _jsx(GasBadge, { onClick: () => {
                                                    setIsCollapseBoxOpen(true);
                                                    setIsHighlightedGas(true);
                                                } }) }))), _jsx("span", Object.assign({ className: "tw-flex tw-items-center" }, { children: _jsx(BoostBadge, { onClick: () => {
                                                    setIsCollapseBoxOpen(true);
                                                    setIsHighlightedExpress(true);
                                                } }) })), _jsx("button", Object.assign({ type: "button", onClick: () => setIsCollapseBoxOpen(true) }, { children: _jsx("span", Object.assign({ className: "tw-relative tw-flex tw-h-7 tw-w-7 tw-items-center tw-justify-center" }, { children: _jsx(BsChevronDown, { className: clsx("rotate-0 cursor-pointer transition-transform tw-flex tw-flex-col") }) })) }))] }))] })) }, { children: _jsx(SwapViewDetailsCollapsed, { isHighlightedExpress: isHighlightedExpress, isHighlightedGas: isHighlightedGas }) })), _jsx("span", Object.assign({ className: "tw-mb-2  tw-w-full tw-px-5" }, { children: squidRouteError ? (_jsx(SwapRouteError, { error: squidRouteError })) : (_jsx(SwapWarning, {})) }))] })), _jsxs("span", Object.assign({ className: " tw-mb-2 tw-flex tw-w-full tw-flex-col tw-items-center tw-gap-1 tw-px-5 tw-text-sm tw-font-semibold" }, { children: [_jsx(SubmitSwapBtn, { disabled: swapButtonDisabledConditions.some((c) => c) }), _jsx(PoweredBy, {})] }))] })));
};
//# sourceMappingURL=SwapView.js.map