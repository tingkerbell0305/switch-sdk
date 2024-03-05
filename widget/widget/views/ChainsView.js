var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import clsx from "clsx";
import Fuse from "fuse.js";
import { useEffect, useRef, useState } from "react";
import { useNetwork } from "wagmi";
import { logos } from "../assets/images/logos";
import { ListItemAvatar } from "../components/ListItemAvatar";
import { SearchInput } from "../components/SearchInput";
import { destinationAddressResetValue } from "../core/constants";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { routes } from "../core/routes";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useSwap } from "../hooks/useSwap";
import { getFirstAvailableChainId } from "../services/internal/configService";
import { useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
import { getListItemHoverClassName } from "../services/internal/colorService";
export const ChainsView = () => {
    var _a, _b, _c, _d;
    const { currentRouteParams } = useSquidRouter();
    const { direction, context } = currentRouteParams !== null && currentRouteParams !== void 0 ? currentRouteParams : {};
    const { fromChain, toChain } = useSwap();
    const { onSwapChange } = useSwap();
    const { config } = useSquidStore();
    const { swapRoute } = useSwapRoutePersistStore();
    const { supportedDestinationChains, supportedSourceChains, fuseSearchOptions, } = useSquidChains();
    const chainsListRef = useRef(null);
    useKeyboardNavigation({
        activeListItemClassName: getListItemHoverClassName({
            transparentWidget: (_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget,
        }),
        itemsListRef: chainsListRef,
    });
    const { switchRoute } = useSquidRouter();
    const { onCosmosChainChange, connectCosmos, isConnected } = useCosmosContext();
    const chainItems = direction === "from" ? supportedSourceChains : supportedDestinationChains;
    const { chain: connectedEvmChain } = useNetwork();
    const selectedChain = direction === "from" ? fromChain : toChain;
    const [filteredChainsForSearch, setFilteredChainsForSearch] = useState([]);
    const fuse = new Fuse(chainItems !== null && chainItems !== void 0 ? chainItems : [], fuseSearchOptions);
    const inputChanged = (search) => {
        if (search) {
            setFilteredChainsForSearch(fuse.search(search).map((c) => c.item));
        }
        else {
            setFilteredChainsForSearch(chainItems);
        }
    };
    const selectAllChains = () => {
        const addRouteToHistory = context !== "fromToken";
        switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes.allTokens, {
            direction,
        }, addRouteToHistory);
    };
    const changeSwap = (chainId) => __awaiter(void 0, void 0, void 0, function* () {
        const newChain = chainItems.find((c) => c.chainId === chainId);
        const previousChain = chainItems.find((c) => (c === null || c === void 0 ? void 0 : c.chainId) === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId));
        if ((newChain === null || newChain === void 0 ? void 0 : newChain.chainType) === ChainType.Cosmos) {
            onCosmosChainChange === null || onCosmosChainChange === void 0 ? void 0 : onCosmosChainChange(chainId.toString());
            // mutate the connection will retrieve the address and set it in the store
            // But connect is also triggering the wallet popup, so we need to be sure that the user has been connected once by himself
            if (isConnected) {
                connectCosmos === null || connectCosmos === void 0 ? void 0 : connectCosmos.mutateAsync({ chain: newChain });
            }
        }
        if (direction === "from") {
            // If To chain was the same, needs to be reset
            // To default chain
            if (chainId === (toChain === null || toChain === void 0 ? void 0 : toChain.chainId)) {
                const defaultToChainId = getFirstAvailableChainId(chainId, config, "to", supportedDestinationChains);
                onSwapChange({ fromChainId: chainId, toChainId: defaultToChainId });
            }
            else {
                onSwapChange({ fromChainId: chainId });
            }
        }
        else {
            let destinationAddress = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress;
            const isNewChainEvm = (newChain === null || newChain === void 0 ? void 0 : newChain.chainType) === ChainType.EVM;
            const isPreviousChainCosmos = (previousChain === null || previousChain === void 0 ? void 0 : previousChain.chainType) === ChainType.Cosmos;
            const isNewChainCosmos = (newChain === null || newChain === void 0 ? void 0 : newChain.chainType) === ChainType.Cosmos;
            if ((isNewChainEvm && isPreviousChainCosmos) || isNewChainCosmos) {
                destinationAddress = destinationAddressResetValue;
                // To remove the edit pen icon
                useSwapRoutePersistStore.setState({
                    destinationAddressHasBeenUpdated: {
                        updated: false,
                        filledFromWallet: false,
                    },
                });
            }
            onSwapChange({
                toChainId: chainId,
                destinationAddress,
            });
        }
        if (context === "fromToken") {
            switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes.tokens, {
                chainId,
                direction,
                chainType: newChain === null || newChain === void 0 ? void 0 : newChain.chainType,
            }, false);
        }
        else {
            switchRoute === null || switchRoute === void 0 ? void 0 : switchRoute(routes.swap);
        }
    });
    useEffect(() => {
        if (chainItems) {
            setFilteredChainsForSearch(chainItems);
        }
    }, [chainItems]);
    return (_jsxs("div", Object.assign({ className: clsx(" tw-flex tw-h-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_d = (_c = config.style) === null || _c === void 0 ? void 0 : _c.advanced) === null || _d === void 0 ? void 0 : _d.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsx("span", Object.assign({ className: "tw-p-3" }, { children: _jsx(SearchInput, { autoFocus: true, placeholder: "Search chain", onSearchChange: inputChanged }) })), _jsx("div", Object.assign({ className: "tw-px-5 tw-pb-3 tw-text-base tw-font-semibold", style: { paddingBottom: "10px", paddingTop: "2px" } }, { children: "Supported chains" })), _jsxs("ul", Object.assign({ ref: chainsListRef, className: "tw-rounded-b-box tw-flex tw-h-full tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: [filteredChainsForSearch === null || filteredChainsForSearch === void 0 ? void 0 : filteredChainsForSearch.sort((a, b) => {
                        var _a, _b, _c, _d, _e, _f;
                        // Sort by chain found in comingSoonChainIds array first, then by chainId
                        return ((_a = config.comingSoonChainIds) === null || _a === void 0 ? void 0 : _a.find((id) => id === a.chainId)) &&
                            !((_b = config.comingSoonChainIds) === null || _b === void 0 ? void 0 : _b.find((id) => id === b.chainId))
                            ? 1
                            : ((_c = config.comingSoonChainIds) === null || _c === void 0 ? void 0 : _c.find((id) => id === b.chainId)) &&
                                !((_d = config.comingSoonChainIds) === null || _d === void 0 ? void 0 : _d.find((id) => id === a.chainId))
                                ? -1
                                : ((_e = config.comingSoonChainIds) === null || _e === void 0 ? void 0 : _e.find((id) => id === a.chainId)) &&
                                    ((_f = config.comingSoonChainIds) === null || _f === void 0 ? void 0 : _f.find((id) => id === b.chainId))
                                    ? a.chainName.localeCompare(b.chainName)
                                    : 0;
                    }).map((chain, index) => {
                        var _a;
                        // Active means that it is the chain that is currently CONNECTED
                        const active = direction === "from"
                            ? chain.chainId === (connectedEvmChain === null || connectedEvmChain === void 0 ? void 0 : connectedEvmChain.id)
                            : false;
                        // Selected means that it is the chain that is currently SELECTED
                        const selected = chain.chainId === (selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainId);
                        // On some cases, it's allowed to do same chain swaps
                        const sameChainDisabled = direction === "to" &&
                            (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId) === chain.chainId &&
                            !fromChain.sameChainSwapEnabled;
                        const comingSoonChain = (_a = config.comingSoonChainIds) === null || _a === void 0 ? void 0 : _a.find((id) => id === chain.chainId);
                        return (_jsx(ListItemAvatar, Object.assign({ active: active, selected: selected, isLast: index + 1 === filteredChainsForSearch.length, imageUrl: chain.chainIconURI, selectValue: chain.chainId, onSelect: changeSwap, disabled: sameChainDisabled || comingSoonChain }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-flex" }, { children: _jsx("span", { children: chain.networkName }) })), sameChainDisabled && (_jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-sm" }, { children: _jsx("span", Object.assign({ className: "tw-text-left" }, { children: config.internalSameChainSwapAllowed
                                                ? "Please visit the single-chain swap section to swap on the same chain."
                                                : "Support for swaps on the same chain is coming soon." })) }))), !!comingSoonChain && !sameChainDisabled && (_jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-sm" }, { children: _jsx("span", { children: "Coming soon" }) })))] })) }), `chain-${chain.chainId}`));
                    })] }))] })));
};
//# sourceMappingURL=ChainsView.js.map