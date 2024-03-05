import { jsx as _jsx } from "react/jsx-runtime";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { AllTokensView } from "../views/AllTokensView";
import { ChainsView } from "../views/ChainsView";
import { DestinationAddressView } from "../views/DestinationAddressView";
import { HistoryView } from "../views/HistoryView";
import { SettingsView } from "../views/SettingsView";
import { SwapView } from "../views/SwapView";
import { TokensView } from "../views/TokensView";
import { TransactionView } from "../views/TransactionView";
import { WalletsView } from "../views/WalletsView";
export const routes = {
    swap: {
        id: "swap",
        path: "/",
        title: "Swap",
        headerButtons: ["settings", "history"],
    },
    settings: {
        id: "settings",
        path: "/settings",
        title: "Settings",
        headerButtons: ["back"],
    },
    wallets: {
        id: "wallets",
        path: "/wallets",
        title: "Connect Wallet",
        headerButtons: ["back"],
    },
    destination: {
        id: "destination",
        path: "/destination",
        title: "Destination address",
        headerButtons: ["back"],
    },
    tokens: {
        id: "tokens",
        path: "/tokens",
        title: "Select Token",
        headerButtons: ["back"],
    },
    allTokens: {
        id: "allTokens",
        path: "/allTokens",
        title: "Select token",
        headerButtons: ["back"],
    },
    chains: {
        id: "chains",
        path: "/chains",
        title: "Select chain",
        headerButtons: ["back"],
    },
    transaction: {
        id: "transaction",
        path: "/transaction",
        title: "Transaction",
        headerButtons: ["back"],
    },
    history: {
        id: "history",
        path: "/history",
        title: "History",
        headerButtons: ["back"],
    },
};
export const routesArray = Object.values(routes);
export const AppRoutes = () => {
    var _a, _b;
    const { currentRoute } = useSquidRouter();
    const allRoutes = [
        {
            id: "swap",
            path: routes.swap.path,
            element: _jsx(SwapView, {}),
        },
        {
            id: "settings",
            path: routes.settings.path,
            element: _jsx(SettingsView, {}),
        },
        {
            id: "destination",
            path: `${routes.destination.path}/:direction`,
            element: _jsx(DestinationAddressView, {}),
        },
        {
            id: "wallets",
            path: `${routes.wallets.path}/:direction`,
            element: _jsx(WalletsView, {}),
        },
        {
            id: "tokens",
            path: `${routes.tokens.path}/:chainId/:chainType/:direction`,
            element: _jsx(TokensView, {}),
        },
        {
            id: "chains",
            path: `${routes.chains.path}/:direction/:context`,
            element: _jsx(ChainsView, {}),
        },
        {
            id: "transaction",
            path: `${routes.transaction.path}`,
            element: _jsx(TransactionView, {}),
        },
        {
            id: "history",
            path: `${routes.history.path}`,
            element: _jsx(HistoryView, {}),
        },
        {
            id: "allTokens",
            path: `${routes.allTokens.path}/:direction`,
            element: _jsx(AllTokensView, {}),
        },
    ];
    return (_b = (_a = allRoutes.find((r) => r.id === currentRoute.id)) === null || _a === void 0 ? void 0 : _a.element) !== null && _b !== void 0 ? _b : _jsx("span", {});
};
//# sourceMappingURL=routes.js.map