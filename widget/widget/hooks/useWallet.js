var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ChainType } from "@0xsquid/sdk";
import { useMemo } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { wallets } from "../core/constants";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { formatChainsForWagmi, redirectExtensionStoreIfNotInstalled, } from "../services/internal/walletService";
import { useSquidChains } from "./useSquidChains";
import { useSquidRouter } from "./useSquidRouter";
export const useWallet = (chain) => {
    const { connector: activeConnector, isConnected: isEvmConnected } = useAccount();
    const { disconnectAsync: disconnectEvm } = useDisconnect();
    const { isConnected: cosmosIsConnected, connectCosmos, cosmosConnectedWallet, } = useCosmosContext();
    const { connectAsync } = useConnect();
    const { previousRoute } = useSquidRouter();
    const { chains } = useSquidChains();
    const connectWallet = (wallet, redirect, direction) => __awaiter(void 0, void 0, void 0, function* () {
        redirectExtensionStoreIfNotInstalled(wallet);
        try {
            if (wallet && wallet.connector && wallet.type === ChainType.EVM) {
                yield disconnectEvm();
                yield connectAsync({
                    connector: wallet.connector(formatChainsForWagmi(chains)),
                });
            }
            else if (wallet.type === ChainType.Cosmos && chain) {
                yield (connectCosmos === null || connectCosmos === void 0 ? void 0 : connectCosmos.mutateAsync({ chain, wallet, direction }));
            }
            if (redirect) {
                previousRoute();
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    /**
     * Get the connected wallet object
     * @returns {Wallet | undefined}
     */
    const currentWallet = useMemo(() => {
        if ((chain === null || chain === void 0 ? void 0 : chain.chainType) === ChainType.EVM) {
            if ((activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.id) && isEvmConnected) {
                const activeWallet = wallets.find((w) => w.connectorId === activeConnector.id);
                return activeWallet;
            }
        }
        if ((chain === null || chain === void 0 ? void 0 : chain.chainType) === ChainType.Cosmos) {
            if (cosmosIsConnected) {
                return wallets.find((w) => w.connectorId === (cosmosConnectedWallet === null || cosmosConnectedWallet === void 0 ? void 0 : cosmosConnectedWallet.connectorId));
            }
        }
        return undefined;
    }, [
        activeConnector === null || activeConnector === void 0 ? void 0 : activeConnector.id,
        chain === null || chain === void 0 ? void 0 : chain.chainType,
        cosmosConnectedWallet === null || cosmosConnectedWallet === void 0 ? void 0 : cosmosConnectedWallet.connectorId,
        cosmosIsConnected,
        isEvmConnected,
    ]);
    return {
        currentWallet,
        connectWallet,
    };
};
//# sourceMappingURL=useWallet.js.map