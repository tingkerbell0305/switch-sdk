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
import clsx from "clsx";
import { useMemo } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { ActiveIndicator } from "../components/ActiveIndicator";
import { ChainDropdownButton } from "../components/TokensViewHeaderDropdown";
import { WalletListItem } from "../components/WalletListItem";
import { HoverButtonPrimary } from "../components/buttons/HoverButton";
import { wallets } from "../core/constants";
import { useMultiChain } from "../hooks/useMultiChain";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useWallet } from "../hooks/useWallet";
import { formatWalletAddress } from "../services/internal/walletService";
import { useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
export const WalletsView = () => {
    var _a, _b;
    const { connector: activeConnector } = useAccount();
    const { disconnect: disconnectEvm } = useDisconnect();
    const { currentRouteParams } = useSquidRouter();
    const direction = currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction;
    const { config } = useSquidStore();
    const { chains } = useSquidChains();
    const { swapRoute } = useSwapRoutePersistStore();
    const currentChainId = direction === "from"
        ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
        : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
    const currentChain = chains.find((c) => c.chainId === currentChainId);
    const { connectWallet, currentWallet } = useWallet(currentChain);
    const { connectedAddress } = useMultiChain(currentChain, undefined);
    const filteredWallts = useMemo(() => wallets.filter((wallet) => (currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === wallet.type), [currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType]);
    const walletButtonClicked = (canSwitchWallets, e) => {
        if (canSwitchWallets) {
            changeWallet(e);
        }
        else {
            disconnectEvm();
        }
    };
    const changeWallet = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const provider = yield (activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.getProvider());
        provider.request({
            method: "wallet_requestPermissions",
            params: [
                {
                    eth_accounts: {},
                },
            ],
        });
    });
    return (_jsxs("div", Object.assign({ className: clsx("tw-bg-base-neutral tw-flex tw-h-full tw-w-full tw-flex-1 tw-flex-col tw-overflow-hidden", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-px-5" }, { children: [_jsx("span", Object.assign({ className: "tw-py-[20px] tw-text-base tw-font-semibold" }, { children: "Supported wallets" })), _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: _jsx(ChainDropdownButton, { chainData: currentChain, direction: direction }) }))] })), _jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-gap-6 tw-overflow-auto" }, { children: _jsx("ul", Object.assign({ className: "tw-flex tw-h-full  tw-flex-col tw-flex-nowrap tw-pb-[20px]" }, { children: filteredWallts === null || filteredWallts === void 0 ? void 0 : filteredWallts.map((wallet, index) => walletItem(wallet)) })) }))] })));
    function walletItem(wallet) {
        return (_jsx(WalletListItem, { wallet: wallet, onSelect: () => connectWallet(wallet, true, direction), hoverBtn: wallet.connectorId === (currentWallet === null || currentWallet === void 0 ? void 0 : currentWallet.connectorId) && (_jsx("span", Object.assign({ className: "tw-group tw-flex tw-items-center" }, { children: _jsx(HoverButtonPrimary, { onClick: (e) => walletButtonClicked(wallet.canSwitchWallets, e), hoverContent: wallet.canSwitchWallets ? (_jsx("span", { children: "change wallet" })) : (_jsx("span", { children: "Disconnect" })), content: _jsxs(_Fragment, { children: [_jsx("span", Object.assign({ className: "tw-mr-[6px]" }, { children: formatWalletAddress(connectedAddress) })), _jsx(ActiveIndicator, {})] }) }) }))) }, wallet.connectorId));
    }
};
//# sourceMappingURL=WalletsView.js.map