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
import { useMutation } from "@tanstack/react-query";
import { AddChainError, UserRejectedRequestError } from "@wagmi/core";
import { useMemo } from "react";
import { ChainNotConfiguredError, SwitchChainError, useAccount, useNetwork, useSwitchNetwork, } from "wagmi";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { formatWalletAddress } from "../services/internal/walletService";
import { useCosmosForChain } from "./useCosmosForChain";
export const useMultiChain = (chainToCompare, tokenToCompare) => {
    const { chain: currentEvmChain } = useNetwork();
    const { isConnected: isEvmConnected, connector, address } = useAccount();
    const { isConnected: cosmosIsConnected } = useCosmosContext();
    const { cosmosAddress } = useCosmosForChain(chainToCompare);
    const { switchNetworkAsync } = useSwitchNetwork({
        throwForSwitchChainNotSupported: true,
    });
    /**
     * Get connected address, depends on chainType
     */
    const connectedAddress = useMemo(() => {
        switch (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) {
            case ChainType.EVM:
                return address;
            case ChainType.Cosmos:
                return cosmosAddress;
            default:
                return address;
        }
    }, [address, chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType, cosmosAddress]);
    const parsedAddress = useMemo(() => formatWalletAddress(connectedAddress), [connectedAddress]);
    /**
     * Change current network for desired chain
     */
    const changeNetwork = useMutation(() => __awaiter(void 0, void 0, void 0, function* () {
        if ((chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === ChainType.EVM) {
            yield (switchNetworkAsync === null || switchNetworkAsync === void 0 ? void 0 : switchNetworkAsync(+chainToCompare.chainId));
        }
        // Implement keplr change network
        // Looks like there are no method to do that at the moment
        return false;
    }), {
        onError: (error) => __awaiter(void 0, void 0, void 0, function* () {
            if (error instanceof UserRejectedRequestError) {
                return;
            }
            if ((error instanceof ChainNotConfiguredError ||
                error instanceof SwitchChainError ||
                error instanceof AddChainError) &&
                chainToCompare) {
                const provider = yield (connector === null || connector === void 0 ? void 0 : connector.getProvider());
                const chainParameters = {
                    chainId: `0x${chainToCompare.chainId.toString(16)}`,
                    chainName: chainToCompare.networkName,
                    nativeCurrency: chainToCompare.nativeCurrency,
                    rpcUrls: [chainToCompare.rpc],
                    blockExplorerUrls: chainToCompare.blockExplorerUrls,
                    iconUrls: [chainToCompare.chainIconURI],
                };
                provider.request({
                    method: "wallet_addEthereumChain",
                    params: [chainParameters],
                });
            }
        }),
    });
    /**
     * Add token to wallet
     */
    const addToken = useMutation((tokenToAdd) => __awaiter(void 0, void 0, void 0, function* () {
        const token = tokenToAdd !== null && tokenToAdd !== void 0 ? tokenToAdd : tokenToCompare;
        if (token && (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === ChainType.EVM) {
            const provider = yield (connector === null || connector === void 0 ? void 0 : connector.getProvider());
            // Switch network if needed
            if ((currentEvmChain === null || currentEvmChain === void 0 ? void 0 : currentEvmChain.id) !== (token === null || token === void 0 ? void 0 : token.chainId)) {
                yield (switchNetworkAsync === null || switchNetworkAsync === void 0 ? void 0 : switchNetworkAsync(+token.chainId));
                // Metamask is not popping the second modal if we don't wait a bit
                // eslint-disable-next-line no-promise-executor-return
                yield new Promise((resolve) => setTimeout(resolve, 100));
            }
            // Add token to wallet
            provider.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: token === null || token === void 0 ? void 0 : token.address,
                        symbol: token === null || token === void 0 ? void 0 : token.symbol,
                        decimals: token === null || token === void 0 ? void 0 : token.decimals,
                        image: token === null || token === void 0 ? void 0 : token.logoURI,
                    },
                },
            });
        }
        // TODO: Implement keplr add token
        return false;
    }));
    /**
     * Handle multiple chains
     */
    const networkConnected = useMemo(() => {
        switch (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) {
            case ChainType.EVM:
                return isEvmConnected;
            case ChainType.Cosmos:
                return cosmosIsConnected;
            default:
                return isEvmConnected;
        }
    }, [isEvmConnected, chainToCompare, address, cosmosIsConnected]);
    /**
     * Checks if Network is connected and with the right chain
     */
    const networkConnectedOnRightChain = useMemo(() => {
        if ((chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === ChainType.EVM) {
            return isEvmConnected && (currentEvmChain === null || currentEvmChain === void 0 ? void 0 : currentEvmChain.id) === chainToCompare.chainId;
        }
        // TODO: Implement keplr check
        return true;
    }, [isEvmConnected, currentEvmChain, chainToCompare]);
    return {
        changeNetwork,
        networkConnected,
        networkConnectedOnRightChain,
        connectedAddress,
        parsedAddress,
        addToken,
    };
};
//# sourceMappingURL=useMultiChain.js.map