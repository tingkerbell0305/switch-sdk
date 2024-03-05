import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import { offset } from "@floating-ui/react-dom";
import { useFloating, useHover, useInteractions, } from "@floating-ui/react-dom-interactions";
import { useMemo, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useNetwork } from "wagmi";
import { nativeEvmTokenAddress } from "../core/constants";
import { useMultiChain } from "../hooks/useMultiChain";
import { useSquidChains } from "../hooks/useSquidChains";
import { convertTokenAmountToUSD } from "../services/internal/priceService";
import { ListItemAvatar } from "./ListItemAvatar";
import { NumericValue } from "./NumericValue";
export const TokenListItem = ({ token, chain, isLast, onSelect, selected = false, displayChainIcon = false, usdUnitPrice, }) => {
    var _a;
    const { addToken } = useMultiChain(chain, token);
    const { chain: currentEvmChain } = useNetwork();
    const [isOpen, setIsOpen] = useState(false);
    const { chains } = useSquidChains();
    const tokenChain = useMemo(() => chains.find((c) => c.chainId == token.chainId), [chains, token.chainId]);
    const balanceInUsd = useMemo(() => {
        const nullBalance = +token.balance === 0;
        if (!nullBalance) {
            return convertTokenAmountToUSD(token.balance, usdUnitPrice);
        }
        return "0";
    }, [token.balance, usdUnitPrice]);
    const { x, y, reference, floating, strategy, context } = useFloating({
        placement: "top",
        strategy: "fixed",
        middleware: [offset(5)],
    });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        useHover(context, {
            mouseOnly: true,
        }),
    ]);
    const tokenCanBeAddedToWallet = chain &&
        token.address !== nativeEvmTokenAddress &&
        chain.chainType === ChainType.EVM &&
        chain.chainId === (currentEvmChain === null || currentEvmChain === void 0 ? void 0 : currentEvmChain.id);
    return (_jsxs(ListItemAvatar, Object.assign({ isLast: isLast, imageUrl: token.logoURI, relatedImageUrl: displayChainIcon ? tokenChain === null || tokenChain === void 0 ? void 0 : tokenChain.chainIconURI : undefined, selectValue: token.address, onSelect: onSelect, selected: selected, favorite: token.isFavorite }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-start tw-gap-1" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-1 tw-font-semibold" }, { children: [_jsx("span", { children: token.symbol }), tokenCanBeAddedToWallet && (
                                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                                    _jsx("div", Object.assign({ onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false) }, getReferenceProps({ ref: reference }), { onClick: (e) => {
                                            e.stopPropagation();
                                            addToken.mutate();
                                        }, className: "tw-group" }, { children: _jsx(FiPlusCircle, { className: "tw-rounded-full group-hover:tw-bg-primary group-hover:tw-text-base-200" }) })))] })), token.name && (_jsx("span", Object.assign({ className: "tw-text-sm tw-text-neutral-content" }, { children: token.name })))] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-end tw-gap-1" }, { children: [_jsx(NumericValue, { hideIfZero: true, className: "tw-text-base", formatIfVerySmall: 0.0001, significantFigures: 4, value: (_a = token.balance) !== null && _a !== void 0 ? _a : "0" }), _jsx(NumericValue, { hideIfZero: true, formatIfVerySmall: 0.01, className: "tw-text-base tw-text-sm tw-text-neutral-content", currency: { symbol: "$", symbolPosition: "before" }, value: balanceInUsd !== null && balanceInUsd !== void 0 ? balanceInUsd : "0" })] }))] })), isOpen && (_jsx("span", Object.assign({ className: "tw-max-w-[200px] tw-rounded-md tw-bg-black tw-p-2 tw-text-white" }, getFloatingProps({
                ref: floating,
                style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : 0,
                    left: x !== null && x !== void 0 ? x : 0,
                },
            }), { children: "Add token to wallet" })))] })));
};
//# sourceMappingURL=TokenListItem.js.map