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
import { CosmosSnap, installSnap } from "@cosmsnap/snapper";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { wallets } from "../core/constants";
import { getCosmosChainInfosObject, getDescendantProp, } from "../services/internal/walletService";
import { useSwapRoutePersistStore } from "../store/useSquidStore";
import { useSwap } from "./useSwap";
export const cosmosHubChainId = "cosmoshub-4";
export const useCosmos = () => {
    const [cosmosAddress, setCosmosAddress] = useState();
    const [cosmosSigner, setCosmosSigner] = useState(undefined);
    const [cosmosConnectedWallet, setCosmosConnectedWallet] = useState();
    const [cosmosChainId, setCosmosChainId] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);
    const { swapRoute } = useSwapRoutePersistStore();
    const { fromChain } = useSwap();
    const keplrTypeWallet = useMemo(() => { var _a; return window === null || window === void 0 ? void 0 : window[(_a = cosmosConnectedWallet === null || cosmosConnectedWallet === void 0 ? void 0 : cosmosConnectedWallet.windowFlag) !== null && _a !== void 0 ? _a : "keplr"]; }, [cosmosConnectedWallet]);
    // As soon as from chain changes, need to fetch the new signer
    useEffect(() => {
        if ((fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.Cosmos && keplrTypeWallet) {
            setCosmosSigner(keplrTypeWallet.getOfflineSignerOnlyAmino(fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId.toString()));
        }
    }, [fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId, fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType, keplrTypeWallet]);
    const getCosmosAddressForChain = useCallback((chainId) => __awaiter(void 0, void 0, void 0, function* () {
        if (!chainId)
            return undefined;
        const key = yield (keplrTypeWallet === null || keplrTypeWallet === void 0 ? void 0 : keplrTypeWallet.getKey(chainId));
        return key.bech32Address;
    }), [keplrTypeWallet]);
    const getCosmosWalletInfos = useMutation(({ chainId, cosmosWalletObject, }) => __awaiter(void 0, void 0, void 0, function* () {
        const walletObject = cosmosWalletObject !== null && cosmosWalletObject !== void 0 ? cosmosWalletObject : keplrTypeWallet;
        if (walletObject) {
            const address = yield (walletObject === null || walletObject === void 0 ? void 0 : walletObject.getKey(chainId));
            if (address === null || address === void 0 ? void 0 : address.bech32Address) {
                return address.bech32Address;
            }
        }
        return undefined;
    }));
    const getAddress = useCallback(({ wallet, cosmosWalletObject, chainId, }) => __awaiter(void 0, void 0, void 0, function* () {
        if (wallet.connectorId === "snapper") {
            const { address: addressInfo } = yield cosmosWalletObject.getBech32Address(chainId);
            return addressInfo.address;
        }
        const address = yield getCosmosWalletInfos.mutateAsync({
            chainId,
            cosmosWalletObject,
        });
        return address !== null && address !== void 0 ? address : "";
    }), [getCosmosWalletInfos]);
    const handleKeplrAccountChanged = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (cosmosChainId) {
            const address = yield getCosmosWalletInfos.mutateAsync({
                chainId: cosmosChainId,
            });
            if (address) {
                setIsConnected(true);
                setCosmosAddress(address);
            }
        }
    }), [cosmosChainId, getCosmosWalletInfos]);
    useEffect(() => {
        window.addEventListener("keplr_keystorechange", () => handleKeplrAccountChanged());
        return () => {
            window.removeEventListener("keplr_keystorechange", () => handleKeplrAccountChanged());
        };
    }, [handleKeplrAccountChanged]);
    /**
     * If needed, prepare the wallet object and return it
     * Example: install Metamask snaps (Snapper)
     * @param wallet
     * @param cosmosWalletObject
     * @returns
     */
    const prepareCosmosWallet = (wallet, cosmosWalletObject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        let cwo = cosmosWalletObject;
        switch (wallet.connectorId) {
            case "snapper":
                cwo = new CosmosSnap();
                // await installSnap();
                window[(_a = wallet === null || wallet === void 0 ? void 0 : wallet.windowFlag) !== null && _a !== void 0 ? _a : ""] = cwo;
                break;
        }
        return cwo;
    });
    const connectCosmos = useMutation(({ chain, wallet, direction, }) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("HHHHHHHHHH", chain, wallet, direction);
        var _b, _c;
        const chainInfos = getCosmosChainInfosObject(chain);
        const selectedWallet = (_b = wallet !== null && wallet !== void 0 ? wallet : cosmosConnectedWallet) !== null && _b !== void 0 ? _b : wallets === null || wallets === void 0 ? void 0 : wallets.find((w) => w.connectorId === "keplr");
        let cosmosWalletObject = selectedWallet
            ? getDescendantProp(window, selectedWallet.windowFlag)
            : undefined;
        // Some wallets need to be installed | initialized
        if (selectedWallet) {
            cosmosWalletObject = yield prepareCosmosWallet(selectedWallet, cosmosWalletObject);
        }
        if (cosmosWalletObject) {
            setCosmosChainId(chainInfos.chainId.toString());
            try {
                if ((selectedWallet === null || selectedWallet === void 0 ? void 0 : selectedWallet.connectorId) === "snapper") {
                    yield installSnap();
                }
                else {
                    yield cosmosWalletObject.enable(chainInfos.chainId.toString());
                }
                const address = yield getAddress({
                    chainId: chain.chainId.toString(),
                    cosmosWalletObject,
                    wallet: selectedWallet,
                });
                console.log("HHHHHHH", address);
                if (address) {
                    setCosmosConnectedWallet(selectedWallet);
                    setIsConnected(true);
                    setCosmosAddress(address);
                    console.log("HHHHHHHHHH", selectedWallet, address);
                    useSwapRoutePersistStore.setState({
                        swapRoute: Object.assign(Object.assign({}, useSwapRoutePersistStore.getState().swapRoute), {
                            destinationAddress: direction === "to"
                                ? address
                                : (_c = useSwapRoutePersistStore.getState().swapRoute) === null || _c === void 0 ? void 0 : _c.destinationAddress
                        }),
                    });
                }
            }
            catch (error) {
                const e = error;
                if (e.message !== "Request rejected" &&
                    e.message !== "User rejected the request.") {
                    // Maybe the chain is not supported ?
                    if (cosmosWalletObject.experimentalSuggestChain) {
                        const chainInfos = getCosmosChainInfosObject(chain);
                        try {
                            yield cosmosWalletObject.experimentalSuggestChain(chainInfos);
                            // Now try to connect
                            connectCosmos.mutate({ chain });
                        }
                        catch (error) {
                            console.log("Failed to suggest chain", error);
                        }
                    }
                }
            }
        }
        else {
            setIsInstalled(false);
        }
    }));
    const onCosmosChainChange = (newChainId) => {
        if (newChainId !== cosmosChainId) {
            clearData();
        }
        useSwapRoutePersistStore.setState({
            swapRoute: Object.assign({}, swapRoute),
            destinationAddressHasBeenUpdated: {
                updated: false,
                filledFromWallet: false,
            },
        });
    };
    const clearData = () => {
        setIsConnected(false);
        setCosmosChainId(undefined);
        setCosmosAddress(undefined);
    };
    return {
        connectCosmos,
        cosmosChainId,
        setCosmosChainId,
        isConnected,
        setIsConnected,
        isInstalled,
        setIsInstalled,
        clearData,
        onCosmosChainChange,
        getAddress,
        cosmosConnectedWallet,
        keplrTypeWallet,
        cosmosSigner,
        getCosmosAddressForChain,
        getCosmosWalletInfos,
        cosmosAddress,
    };
};
//# sourceMappingURL=useCosmos.js.map