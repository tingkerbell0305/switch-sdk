var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { useMemo } from "react";
import { HiPencil, HiPlus } from "react-icons/hi2";
import { subTransparentClass } from "../../core/constants";
import { routes } from "../../core/routes";
import { useGnosisContext } from "../../hooks/useGnosisContext";
import { useIntegratorContext } from "../../hooks/useIntegratorContext";
import { useMultiChain } from "../../hooks/useMultiChain";
import { useMultiChainBalance } from "../../hooks/useMultiChainBalance";
import { useSquidRouter } from "../../hooks/useSquidRouter";
import { useSwap } from "../../hooks/useSwap";
import { getDefaultTokenAddressForChain } from "../../services/internal/configService";
import { convertTokenAmountToUSD } from "../../services/internal/priceService";
import { formatWalletAddress } from "../../services/internal/walletService";
import { useSquidStore, useSwapRoutePersistStore, } from "../../store/useSquidStore";
import { ActiveIndicator } from "../ActiveIndicator";
import { DropdownBtn } from "../DropdownBtn";
import { LoadingSkeleton } from "../LoadingSkeleton";
import { NumericInput } from "../NumericInput";
import { NumericValue } from "../NumericValue";
import { RouterLink } from "../RouterLink";
import { ConnectWalletButton } from "../buttons/ConnectWalletButton";
import { HoverButtonPrimary } from "../buttons/HoverButton";
import { SwitchNetworkButton } from "../buttons/SwitchNetworkButton";
import { SwapPriceImpactText } from "./SwapPriceImpactText";
export const SwapConfiguration = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { direction, tokens, selectedChainId, selectedAddress, chains, price, tokenBasePrice, isLoadingPrice = false, onPriceChange } = _a, props = __rest(_a, ["direction", "tokens", "selectedChainId", "selectedAddress", "chains", "price", "tokenBasePrice", "isLoadingPrice", "onPriceChange"]);
    const { config, fromPrice } = useSquidStore();
    const { isSameAddressAndGnosisContext } = useGnosisContext();
    const { walletHandledExternally } = useIntegratorContext();
    const { destinationAddressHasBeenUpdated } = useSwapRoutePersistStore();
    const selectedChain = useMemo(() => chains.find((c) => c.chainId === selectedChainId), [chains, selectedChainId]);
    const selectedToken = useMemo(() => {
        var _a;
        return (_a = tokens.find((t) => t.address === selectedAddress)) !== null && _a !== void 0 ? _a : tokens.find((t) => {
            var _a;
            return t.address.toLowerCase() ===
                ((_a = getDefaultTokenAddressForChain(tokens, config, selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId)) === null || _a === void 0 ? void 0 : _a.toLowerCase());
        });
    }, [config, selectedAddress, selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId, tokens]);
    const { switchRoute } = useSquidRouter();
    const enterMaxAmount = () => {
        onPriceChange === null || onPriceChange === void 0 ? void 0 : onPriceChange(balance !== null && balance !== void 0 ? balance : "0");
    };
    const { changeNetwork, networkConnected, networkConnectedOnRightChain, parsedAddress, } = useMultiChain(selectedChain, selectedToken);
    const { balance } = useMultiChainBalance(selectedChain, selectedToken, direction);
    const { destinationAddress } = useSwap();
    const tokenAmountPrice = convertTokenAmountToUSD((_b = price === null || price === void 0 ? void 0 : price.toString()) !== null && _b !== void 0 ? _b : "0", (_c = tokenBasePrice === null || tokenBasePrice === void 0 ? void 0 : tokenBasePrice.toString()) !== null && _c !== void 0 ? _c : "0");
    const notConnectedBtn = _jsx(ConnectWalletButton, { direction: direction });
    const editableAddressBtn = () => {
        if (isSameAddressAndGnosisContext && !destinationAddressHasBeenUpdated) {
            return _jsx(ConnectWalletButton, { direction: direction });
        }
        return (_jsx(HoverButtonPrimary, { onClick: () => switchRoute(routes.destination, { direction: "to" }), hoverContent: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-normal-case" }, { children: "Add address" })), _jsx(HiPlus, { size: 13 })] })), content: _jsxs(_Fragment, { children: [(destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.updated) &&
                        !(destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.filledFromWallet) && (_jsx(HiPencil, { size: 14 })), _jsx("span", { children: formatWalletAddress(destinationAddress) }), (!(destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.updated) ||
                        ((destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.updated) &&
                            (destinationAddressHasBeenUpdated === null || destinationAddressHasBeenUpdated === void 0 ? void 0 : destinationAddressHasBeenUpdated.filledFromWallet))) && (_jsx("span", Object.assign({ className: "tw-ml-[6px] tw-flex" }, { children: _jsx(ActiveIndicator, {}) })))] }) }));
    };
    const addressLabelOnly = () => {
        // If the wallet is handled externally, we don't need to show the wallet selector
        // Because the user wont be able to select a wallet
        // Example if he is on ledger or gnosis safe context
        if (walletHandledExternally) {
            return (_jsx(HoverButtonPrimary, { content: _jsxs(_Fragment, { children: [_jsx("span", Object.assign({ className: "tw-mr-[6px]" }, { children: parsedAddress })), _jsx(ActiveIndicator, {})] }) }));
        }
        return (_jsx(RouterLink, Object.assign({ className: "tw-flex tw-flex-row tw-justify-end", to: routes.wallets, params: { direction } }, { children: _jsx(HoverButtonPrimary, { hoverContent: _jsx("span", { children: "Change wallet" }), content: _jsxs(_Fragment, { children: [_jsx("span", Object.assign({ className: "tw-mr-[6px]" }, { children: parsedAddress })), _jsx(ActiveIndicator, {})] }) }) })));
    };
    const selectToken = (_jsx(RouterLink, Object.assign({ className: clsx("tw-w-5/12 sm:tw-w-1/2", selectedChain === undefined && "pointer-events-none"), params: {
            chainId: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId,
            chainType: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainType,
            direction,
        }, to: routes.tokens }, { children: _jsx(DropdownBtn, { disabled: selectedChain === undefined, label: selectedChain && (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol)
                ? selectedToken.symbol
                : "Select token", iconUrl: selectedChain && (selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol)
                ? selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.logoURI
                : undefined }) })));
    const selectChain = (_jsx(RouterLink, Object.assign({ className: "tw-w-7/12 sm:tw-w-1/2", to: routes.chains, params: { direction } }, { children: _jsx(DropdownBtn, { label: (_d = selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.networkName) !== null && _d !== void 0 ? _d : "Select a chain", iconUrl: selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainIconURI }) })));
    const walletHandleSource = !networkConnected ? (notConnectedBtn) : networkConnectedOnRightChain ? (addressLabelOnly()) : (_jsx(SwitchNetworkButton, { onClick: () => changeNetwork.mutate() }));
    const walletHandleDestination = networkConnected || !!destinationAddress
        ? editableAddressBtn()
        : notConnectedBtn;
    return (_jsxs("span", Object.assign({}, props, { className: clsx([
            "tw-flex tw-h-[165px] tw-w-full tw-flex-col tw-px-5",
            props.className,
        ]) }, { children: [_jsxs("span", Object.assign({ className: "tw-mb-3.5 tw-flex tw-flex-row tw-items-end tw-justify-between" }, { children: [_jsx("span", Object.assign({ id: "squid-swap-direction-txt", className: "tw-text-[16px] tw-font-medium tw-text-base-content" }, { children: direction === "to" ? "To" : "From" })), direction === "from" && walletHandleSource, direction === "to" && walletHandleDestination] })), _jsxs("span", Object.assign({ className: clsx("tw-rounded-box tw-flex tw-h-full tw-w-full tw-flex-col tw-border-[1px] tw-border-base-300 tw-bg-base-200 tw-px-3 tw-pb-[12px] tw-pt-[10px]", ((_f = (_e = config.style) === null || _e === void 0 ? void 0 : _e.advanced) === null || _f === void 0 ? void 0 : _f.transparentWidget) && subTransparentClass) }, { children: [_jsxs("span", Object.assign({ style: { marginBottom: "0.65rem" }, className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-2" }, { children: [selectChain, selectToken] })), _jsx("span", Object.assign({ className: "tw-relative tw-mb-1 tw-flex tw-h-[39px] tw-w-full tw-flex-row tw-items-center" }, { children: !isLoadingPrice ? (direction === "from" ? (_jsx(NumericInput, { type: "string", placeholder: "0", className: "disabled:bg-transparent tw-w-full tw-rounded-sm tw-bg-transparent tw-pl-0 tw-text-4xl tw-font-light tw-text-base-content tw-placeholder-base-content focus:tw-outline-none disabled:tw-border-none disabled:tw-outline-none", forcedUpdateValue: fromPrice, initialValue: (_g = price === null || price === void 0 ? void 0 : price.toString()) !== null && _g !== void 0 ? _g : "", maxDecimals: (_h = selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.decimals) !== null && _h !== void 0 ? _h : 18, parsedValueChanged: (value) => onPriceChange === null || onPriceChange === void 0 ? void 0 : onPriceChange(value !== null && value !== void 0 ? value : "0") })) : (_jsx("span", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-items-center tw-text-4xl tw-font-light tw-text-neutral-content" }, { children: _jsx(NumericValue, { significantFigures: 10, value: price === null || price === void 0 ? void 0 : price.toString() }) })))) : (_jsx("span", Object.assign({ className: "tw-flex tw-items-center tw-justify-center" }, { children: _jsx(LoadingSkeleton, {}) }))) })), selectedChain && selectedToken && (_jsxs("span", Object.assign({ style: { marginTop: "0.125rem" }, className: "tw-flex tw-flex-row tw-items-center tw-justify-between tw-text-sm" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-neutral-content" }, { children: [_jsx(NumericValue, { formatIfVerySmall: 0.01, value: tokenAmountPrice.toString(), currency: {
                                            symbol: "$",
                                            symbolPosition: "before",
                                        } }), direction === "to" && _jsx(SwapPriceImpactText, {})] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-text-neutral-content" }, { children: "Balance:" })), _jsx("button", Object.assign({ type: "button", className: clsx("tw-text-sm tw-text-neutral-content", direction === "to" && "pointer-events-none"), onClick: () => (direction === "from" ? enterMaxAmount() : null) }, { children: _jsx(NumericValue, { formatIfVerySmall: 0.0001, value: balance !== null && balance !== void 0 ? balance : "0", significantFigures: 4, currency: {
                                                symbol: selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol,
                                                symbolPosition: "after",
                                            } }) }))] }))] })))] }))] })));
};
//# sourceMappingURL=SwapConfiguration.js.map