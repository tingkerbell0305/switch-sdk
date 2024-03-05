var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { ActiveIndicator } from "../components/ActiveIndicator";
import { GoBack } from "../components/GoBack";
import { ChainDropdownButton } from "../components/TokensViewHeaderDropdown";
import { WalletListItem } from "../components/WalletListItem";
import { HoverButtonPrimary } from "../components/buttons/HoverButton";
import { subTransparentClass, wallets } from "../core/constants";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { useCosmosForChain } from "../hooks/useCosmosForChain";
import { useGnosisContext } from "../hooks/useGnosisContext";
import { useIntegratorContext } from "../hooks/useIntegratorContext";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useSwap } from "../hooks/useSwap";
import { useWallet } from "../hooks/useWallet";
import { formatWalletAddress, isWalletAddressValid, } from "../services/internal/walletService";
import { useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
export const DestinationAddressView = () => {
    var _a, _b;
    const { currentRouteParams } = useSquidRouter();
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const { onSwapChange, toChain } = useSwap();
    const { config } = useSquidStore();
    const { chains } = useSquidChains();
    const { widgetInIframe, walletHandledExternally } = useIntegratorContext();
    const { swapRoute, destinationAddressHasBeenUpdated } = useSwapRoutePersistStore();
    const { isGnosisContext, isSameAddressAndGnosisContext } = useGnosisContext();
    const [isUpdatedAddressValid, setIsUpdatedAddressValid] = useState(undefined);
    const { cosmosAddress } = useCosmosForChain(toChain);
    const { isConnected: cosmosConnected, cosmosConnectedWallet } = useCosmosContext();
    const { address: evmAddress, isConnected: evmConnected, connector: activeConnector, } = useAccount();
    const currentChain = useMemo(() => chains.find((c) => c.chainId ===
        (direction === "from"
            ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
            : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId)), [chains, direction, swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId, swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId]);
    const { connectWallet } = useWallet(currentChain);
    const oppositeChain = useMemo(() => chains.find((c) => c.chainId ===
        (direction === "from"
            ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId
            : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId)), [chains, direction, swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId, swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId]);
    const sameChainType = useMemo(() => (currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === (oppositeChain === null || oppositeChain === void 0 ? void 0 : oppositeChain.chainType), [currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType, oppositeChain === null || oppositeChain === void 0 ? void 0 : oppositeChain.chainType]);
    const onlyManualUpdate = useMemo(() => !!sameChainType, [sameChainType]);
    const [currentTab, setCurrentTab] = useState(onlyManualUpdate ? 1 : 0);
    const chainType = currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType;
    const filteredWallets = useMemo(() => wallets.filter((wallet) => chainType === wallet.type), [chainType]);
    const connectedAddress = chainType === ChainType.EVM ? evmAddress : cosmosAddress;
    const isConnected = chainType === ChainType.EVM ? evmConnected : cosmosConnected;
    const [autofillInputValue, setAutofillInputValue] = useState();
    const updateAutoFillInputValue = (value, filledFromWallet) => {
        setAutofillInputValue(value);
        if (currentChain) {
            const valid = isWalletAddressValid(currentChain, value);
            setIsUpdatedAddressValid(valid);
            if (valid) {
                onDestinationAddressChange === null || onDestinationAddressChange === void 0 ? void 0 : onDestinationAddressChange(value, filledFromWallet);
            }
        }
    };
    const onDestinationAddressChange = (address, filledFromWallet) => {
        onSwapChange({ destinationAddress: address });
        useSwapRoutePersistStore.setState({
            destinationAddressHasBeenUpdated: {
                updated: true,
                filledFromWallet,
            },
        });
    };
    const autoFill = () => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if ((currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === ChainType.Cosmos) {
            updateAutoFillInputValue((_c = cosmosAddress !== null && cosmosAddress !== void 0 ? cosmosAddress : connectedAddress) !== null && _c !== void 0 ? _c : "", true);
        }
        else {
            updateAutoFillInputValue(connectedAddress !== null && connectedAddress !== void 0 ? connectedAddress : "", true);
        }
    });
    const pasteFromClipboard = () => __awaiter(void 0, void 0, void 0, function* () {
        const text = yield navigator.clipboard.readText();
        if (text) {
            updateAutoFillInputValue(text, false);
        }
    });
    useEffect(() => {
        var _a, _b;
        if (!destinationAddressHasBeenUpdated && isGnosisContext) {
            setAutofillInputValue(isSameAddressAndGnosisContext
                ? ""
                : (_a = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) !== null && _a !== void 0 ? _a : connectedAddress);
        }
        else {
            setAutofillInputValue((_b = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) !== null && _b !== void 0 ? _b : connectedAddress);
        }
    }, [destinationAddressHasBeenUpdated, isSameAddressAndGnosisContext]);
    const errorMessage = (_jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-text-xs tw-text-error" }, { children: "The address is not in the correct format for the selected chain. Please check the address and try again." })));
    const cexPasteWarning = (_jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-text-xs" }, { children: "Note: CEX addresses are not supported" })));
    const gnosisContextMessage = (_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-text-xs tw-text-warning" }, { children: ["Important! Gnosis Safe addresses are not always the same on every chain, please double check the address on ", toChain === null || toChain === void 0 ? void 0 : toChain.networkName, " or you risk losing your funds"] })));
    const successMessage = (_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-1 tw-text-xs tw-text-success" }, { children: [_jsx("span", { children: "Address is valid. You can return to the previous page." }), _jsx(GoBack, { className: "tw-text-xs tw-underline", showIcon: false })] })));
    const editAddress = () => {
        var _a, _b;
        return (_jsxs("span", Object.assign({ className: "tw-items-left tw-flex tw-w-full tw-flex-col tw-gap-2" }, { children: [_jsx("span", Object.assign({ className: "tw-px-5 tw-text-base tw-font-semibold", style: { paddingTop: "46px", paddingBottom: "5px" } }, { children: "Add custom wallet address" })), _jsxs("span", Object.assign({ className: "tw-px-5" }, { children: [_jsxs("span", Object.assign({ className: "tw-relative tw-mb-2 tw-flex tw-w-full tw-flex-row tw-items-center tw-gap-2" }, { children: [_jsx("input", { className: clsx(`t-w-full tw-rounded-box tw-flex tw-min-h-[2rem] tw-grow tw-flex-row 
                tw-justify-start tw-overflow-hidden tw-border-none tw-bg-base-200 
                tw-px-2 tw-py-0 tw-text-left tw-font-normal tw-text-neutral-content 
                tw-outline-none tw-outline-0 hover:tw-bg-base-100`, isUpdatedAddressValid && "tw-border-success", isUpdatedAddressValid === false &&
                                        "tw-border-error tw-text-error", isUpdatedAddressValid === undefined &&
                                        "tw-border-dashed tw-border-secondary", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && subTransparentClass), type: "text", value: autofillInputValue, onChange: (e) => updateAutoFillInputValue(e.target.value, false), placeholder: "Enter wallet address", style: {
                                        height: "50px",
                                        borderRadius: "25px",
                                        paddingLeft: "16px",
                                        fontSize: "11px",
                                    } }), _jsx("span", Object.assign({ className: "tw-absolute tw-right-[12px]" }, { children: !widgetInIframe && (_jsx("button", Object.assign({ type: "button", className: clsx(`tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-w-[55px] tw-border-none tw-bg-primary 
                  tw-text-sm tw-font-normal tw-normal-case tw-text-primary-content 
                  tw-outline-none`), onClick: pasteFromClipboard }, { children: "Paste" }))) }))] })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2" }, { children: [isUpdatedAddressValid === undefined &&
                                    !isGnosisContext &&
                                    cexPasteWarning, isUpdatedAddressValid === false && errorMessage, isUpdatedAddressValid === true && successMessage, isGnosisContext &&
                                    isSameAddressAndGnosisContext &&
                                    gnosisContextMessage] }))] }))] })));
    };
    // If the wallet is handled externally, we don't need to show the wallet selector
    // Because the user wont be able to select a wallet
    // Example if he is on ledger or gnosis safe context
    if (walletHandledExternally) {
        return (_jsx("div", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-1 tw-flex-col tw-overflow-hidden" }, { children: _jsx("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-justify-start tw-gap-2 tw-py-6" }, { children: editAddress() })) })));
    }
    return (_jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-w-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && subTransparentClass) }, { children: [!onlyManualUpdate && (_jsxs("div", Object.assign({ className: "tw-bg-base-200", style: {
                    height: "38px",
                    margin: "0 20px",
                    position: "relative",
                    borderRadius: "8px",
                } }, { children: [_jsx("span", { className: "tw-bg-base-100", style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: currentTab === 0 ? "translate(0, 0)" : "translate(100%, 0)",
                            height: "37px",
                            width: "50%",
                            borderRadius: "8px",
                            transition: "transform .2s ease-out",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        } }), _jsx("button", Object.assign({ type: "button", className: `tw-font-semibold ${currentTab === 0
                            ? "tw-text-base-content"
                            : "tw-text-neutral-content"}`, style: {
                            width: "50%",
                            lineHeight: "38px",
                            position: "relative",
                        }, onClick: () => setCurrentTab(0) }, { children: "Wallet" })), _jsx("button", Object.assign({ className: `tw-font-semibold ${currentTab === 0
                            ? "tw-text-neutral-content"
                            : "tw-text-base-content"}`, type: "button", style: {
                            width: "50%",
                            lineHeight: "38px",
                            position: "relative",
                        }, onClick: () => setCurrentTab(1) }, { children: "Address" }))] }))), currentTab === 0 && (_jsxs("div", Object.assign({ className: "tw-overflow-auto" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-px-5" }, { children: [_jsx("span", Object.assign({ className: "tw-py-6 tw-text-base tw-font-semibold" }, { children: "Supported wallets" })), _jsx(ChainDropdownButton, { chainData: currentChain, direction: direction })] })), _jsx("ul", Object.assign({ className: "tw-flex tw-h-[75%]  tw-flex-col tw-flex-nowrap tw-overflow-auto tw-pb-[20px]" }, { children: filteredWallets === null || filteredWallets === void 0 ? void 0 : filteredWallets.map((wallet, index) => {
                            const hasWindowFlagEvmAndIsConnected = wallet.type === ChainType.EVM &&
                                (activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.name) === wallet.connectorName &&
                                isConnected;
                            // Only displaying address of active wallet for EVM
                            // Only displaying address of Keplr wallet for cosmos
                            let hoverBtn;
                            if (((currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === ChainType.EVM &&
                                hasWindowFlagEvmAndIsConnected) ||
                                ((currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === ChainType.Cosmos &&
                                    wallet.connectorId === (cosmosConnectedWallet === null || cosmosConnectedWallet === void 0 ? void 0 : cosmosConnectedWallet.connectorId))) {
                                hoverBtn = (_jsx(HoverButtonPrimary, { onClick: autoFill, hoverContent: _jsx("span", { children: "select address" }), content: isConnected ? (_jsxs(_Fragment, { children: [_jsx("span", Object.assign({ className: "tw-mr-[6px]" }, { children: formatWalletAddress(connectedAddress) })), _jsx(ActiveIndicator, {})] })) : undefined }));
                            }
                            return (_jsx(WalletListItem, { wallet: wallet, onSelect: () => connectWallet(wallet, true), hoverBtn: hoverBtn }, wallet.connectorId));
                        }) }))] }))), currentTab === 1 && (_jsx("div", { children: _jsx("span", Object.assign({ className: "tw-flex tw-h-[25%] tw-flex-col tw-items-center tw-justify-start tw-gap-2" }, { children: editAddress() })) }))] })));
};
//# sourceMappingURL=DestinationAddressView.js.map