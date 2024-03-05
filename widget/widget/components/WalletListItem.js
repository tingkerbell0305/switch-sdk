import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import clsx from "clsx";
import { useSquidChains } from "../hooks/useSquidChains";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useSwapRoutePersistStore } from "../store/useSquidStore";
import { ListItemAvatar } from "./ListItemAvatar";
export const WalletListItem = ({ wallet, onSelect, hoverBtn }) => {
    const { currentRouteParams } = useSquidRouter();
    const { swapRoute } = useSwapRoutePersistStore();
    const { chains } = useSquidChains();
    const currentChainId = (currentRouteParams === null || currentRouteParams === void 0 ? void 0 : currentRouteParams.direction) === "from"
        ? swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId
        : swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId;
    const currentChain = chains.find((c) => c.chainId === currentChainId);
    return (_jsx(ListItemAvatar, Object.assign({ imageUrl: wallet.icon, onSelect: onSelect, className: clsx("tw-flex tw-flex-row tw-items-center tw-justify-center tw-border-base-content tw-font-normal tw-text-base-content", (currentChain === null || currentChain === void 0 ? void 0 : currentChain.chainType) === ChainType.EVM && "tw-border-[1px]"), roundImage: true, size: "tw-md", gap: "3" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2 tw-text-base" }, { children: [_jsx("span", { children: wallet.name }), hoverBtn] })) }), wallet.connectorId));
};
//# sourceMappingURL=WalletListItem.js.map