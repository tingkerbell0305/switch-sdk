var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment, useCallback, useEffect, useState } from "react";
import { ChainType, Squid } from "@0xsquid/sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeConnector } from "@wagmi/connectors/safe";
import { WagmiConfig, configureChains, createClient } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import "../compiled-tailwind.css";
import { SquidApp } from "./components/SquidApp";
import { IFrameEthereumConnector } from "./connectors/LedgerLiveConnector";
import { wallets } from "./core/constants";
import { CosmosProvider } from "./core/providers/CosmosProvider";
import { defaultOptions } from "./core/queries/react-query-config";
import { getConfigWithDefaults } from "./services/internal/configService";
import { formatChainsForWagmi } from "./services/internal/walletService";
import { useSquidStore, useSwapRoutePersistStore } from "./store/useSquidStore";
export const SquidMainWidget = ({ config }) => {
    const queryClient = new QueryClient({ defaultOptions });
    // Initialize wagmi client, will be reset when squid is loaded
    const [wagmiClient, setWagmiClient] = useState(null);
    /**
     * EVM Client - Used to connect with multiple wallets using provider
     * Possible to extend and have more wallets
     */
    const initWagmiClient = (chains) => {
        const { provider, chains: wagmiChains } = configureChains(formatChainsForWagmi(chains), [
            jsonRpcProvider({
                rpc: (chain) => {
                    var _a;
                    return ({
                        http: (_a = chain.rpcUrls.default.http[0]) !== null && _a !== void 0 ? _a : "",
                        webSocket: undefined,
                    });
                },
            }),
        ]);
        const evmWalletConnectors = wallets
            .filter((w) => w.type === ChainType.EVM)
            .map((w) => { var _a; return (_a = w.connector) === null || _a === void 0 ? void 0 : _a.call(w, wagmiChains); });
        const wagmiClient = createClient({
            persister: null,
            provider,
            connectors: [
                ...evmWalletConnectors,
                // For Gnosis Safe App Context
                new SafeConnector({
                    chains: wagmiChains,
                    options: {
                        allowedDomains: [/gnosis-safe.io$/, /app.safe.global$/],
                        debug: false,
                    },
                }),
                new IFrameEthereumConnector({ chains: wagmiChains, options: {} }),
            ],
        });
        setWagmiClient(wagmiClient);
    };
    const initFullSquidConfig = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const fullConfig = getConfigWithDefaults(config);
        const squid = new Squid({
            baseUrl: fullConfig.apiUrl,
        });
        squid.setConfig({
            baseUrl: fullConfig.apiUrl,
            integratorId: config.integratorId,
        });
        yield squid.init();
        initWagmiClient(squid.chains);
        // Reset config if integrator doesn't want to load local storage state
        // From previous user session
        // Or if integrator has set up some pre defined states (default chains)
        if (!(config === null || config === void 0 ? void 0 : config.loadPreviousStateFromLocalStorage) ||
            config.initialFromChainId ||
            config.initialToChainId) {
            useSwapRoutePersistStore.setState({
                swapRoute: undefined,
                destinationAddressHasBeenUpdated: undefined,
            });
        }
        useSquidStore.setState((_) => ({
            config: fullConfig,
            squid,
        }));
    }), [config]);
    /**
     *  Init squid SDK
     *  store sdk & config in globalState
     */
    const initSquid = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        // Squid already initialized
        if (useSquidStore.getState().squid) {
            const fullConfig = getConfigWithDefaults(config);
            // if api changed, re-init everything
            if (fullConfig.apiUrl !== useSquidStore.getState().config.apiUrl ||
                !wagmiClient) {
                initFullSquidConfig();
            }
            else {
                // If not, just update config
                useSquidStore.setState((_) => ({
                    config: fullConfig,
                }));
            }
            return;
        }
        initFullSquidConfig();
    }), [config, initFullSquidConfig]);
    useEffect(() => {
        initSquid();
    }, [config, initSquid]);
    return (_jsx(QueryClientProvider, Object.assign({ client: queryClient }, { children: wagmiClient && (_jsx(WagmiConfig, Object.assign({ client: wagmiClient }, { children: _jsx(CosmosProvider, { children: _jsx(AppRouter, { children: _jsx(SquidApp, { configStyle: config === null || config === void 0 ? void 0 : config.style }) }) }) }))) })));
};
export const AppRouter = ({ children }) => {
    const Router = Fragment;
    return _jsx(Router, { children: children });
};
//# sourceMappingURL=index.js.map