var _a;
import { ChainType } from "@0xsquid/sdk";
import { fromBech32, toBech32 } from "@cosmjs/encoding";
import { ethers } from "ethers";
import { walletStoreLinks, wallets } from "../../core/constants";
export const formatWalletAddress = (walletAddress, trimLength = 5) => {
    return walletAddress
        ? (walletAddress === null || walletAddress === void 0 ? void 0 : walletAddress.length) > trimLength
            ? `${walletAddress.slice(0, trimLength)}...${walletAddress.slice(walletAddress.length - (trimLength - 2), // -2 here because the start of wallet is 0x
            walletAddress.length)}`.toLowerCase()
            : walletAddress
        : "";
};
export const isWalletAddressValid = (chainData, address) => {
    if (address) {
        if (chainData.chainType === ChainType.EVM) {
            return ethers.utils.isAddress(address);
        }
        if (chainData.chainType === ChainType.Cosmos) {
            return isCosmosAddressValid(address);
        }
    }
    return false;
};
export const getWalletByConnectorID = (connectorID) => {
    return wallets.find((w) => w.connectorId === connectorID);
};
export const getCosmosChainInfosObject = (chain) => {
    const cosmosChain = chain;
    return Object.assign(Object.assign({}, cosmosChain), { chainId: cosmosChain.chainId.toString(), rpc: cosmosChain.rpc.split("?chain")[0], feeCurrencies: cosmosChain.feeCurrencies.map((c) => (Object.assign(Object.assign({}, c), { gasPriceStep: cosmosChain.gasPriceStep }))) });
};
export const isWalletExtensionInstalled = (wallet) => {
    if ((wallet.connectorId === "metaMask" && !window.ethereum) ||
        (wallet.connectorId === "keplr" && !window.keplr) ||
        (wallet.connectorId === "leap" && !window.leap) ||
        // Cosmostation has two different connectors for different extensions
        ((wallet.connectorId === "cosmostationCosmos" ||
            wallet.connectorId === "cosmostation") &&
            !window.cosmostation) ||
        (wallet.connectorId === "xdefi" && !window.xfi) ||
        (wallet.connectorId === "bitget" && !window.bitkeep)) {
        return false;
    }
    return true;
};
export const redirectExtensionStoreIfNotInstalled = (wallet) => {
    const { userAgent } = navigator;
    let link;
    if (!isWalletExtensionInstalled(wallet)) {
        if (userAgent.indexOf("Firefox") > -1) {
            link = walletStoreLinks[wallet.connectorId].firefox;
        }
        else if (userAgent.indexOf("Chrome") > -1) {
            link = walletStoreLinks[wallet.connectorId].chrome;
        }
        if (link && link !== "") {
            window === null || window === void 0 ? void 0 : window.open(link, "_blank").focus();
        }
    }
};
/**
 * Get the value of an object property using a string path
 * E.G. window["cosmostation.providers.keplr"]
 * @param obj
 * @param path
 * @returns
 */
export const getDescendantProp = (obj, path) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};
export const formatChainsForWagmi = (chains) => {
    return chains
        .filter((c) => c.chainType === ChainType.EVM)
        .map((c) => ({
        id: +c.chainId,
        name: c.networkName,
        network: c.networkName,
        contracts: {
            multicall3: {
                address: "0xcA11bde05977b3631167028862bE2a173976CA11",
            },
        },
        nativeCurrency: c.nativeCurrency,
        rpcUrls: { public: { http: [c.rpc] }, default: { http: [c.rpc] } },
    }));
};
export const isCosmosAddressValid = (address) => {
    try {
        // If the address is not valid, this will throw an error
        fromBech32(address);
        return true;
    }
    catch (error) {
        return false;
    }
};
export const deriveCosmosAddress = (chainPrefix, address) => {
    if (!address || !chainPrefix) {
        return undefined;
    }
    return toBech32(chainPrefix, fromBech32(address).data);
};
export const metamaskIcon = (_a = getWalletByConnectorID("metaMask")) === null || _a === void 0 ? void 0 : _a.icon;
export const EVMnetworkNotSupportedErrorCode = 4902;
//# sourceMappingURL=walletService.js.map