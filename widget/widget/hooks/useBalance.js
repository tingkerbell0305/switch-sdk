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
import { useQuery } from "@tanstack/react-query";
import { getProvider } from "@wagmi/core";
import { ethers, utils } from "ethers";
import { useAccount } from "wagmi";
import { useMemo } from "react";
import { ERC20__factory } from "../contracts/typechain/factories/ERC20__factory";
import { nativeEvmTokenAddress } from "../core/constants";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { keys } from "../core/queries/queries-keys";
import { useSquidStore } from "../store/useSquidStore";
import { useCosmosForChain } from "./useCosmosForChain";
import { useSquidTokens } from "./useSquidTokens";
import { useSwap } from "./useSwap";
import { useAllTokensWithBalanceForChain } from "./useTokensWithBalance";
const refreshIntervalMs = 15000;
export const useEvmBalance = ({ chain, token, userAddress, enabled = true, }) => {
    const { isConnected } = useAccount();
    const { config } = useSquidStore();
    const balance = useQuery(keys({ address: userAddress, apiUrl: config.apiUrl }).balance(chain === null || chain === void 0 ? void 0 : chain.chainId, token === null || token === void 0 ? void 0 : token.address, userAddress), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!!chain &&
            isConnected &&
            !!(token === null || token === void 0 ? void 0 : token.address) &&
            chain.chainType === ChainType.EVM) {
            const srcProvider = getProvider({ chainId: +((_a = chain.chainId) !== null && _a !== void 0 ? _a : 1) });
            const srcTokenContract = new ethers.Contract(token === null || token === void 0 ? void 0 : token.address, ERC20__factory.abi, srcProvider);
            if (token.address === nativeEvmTokenAddress) {
                const nativeCurrencyBalance = yield srcProvider.getBalance(userAddress);
                return utils.formatUnits(nativeCurrencyBalance, token === null || token === void 0 ? void 0 : token.decimals);
            }
            try {
                const balance = yield srcTokenContract.balanceOf(userAddress);
                return utils.formatUnits(balance, token === null || token === void 0 ? void 0 : token.decimals);
            }
            catch (error) {
                return "0";
            }
        }
        else {
            return "0";
        }
    }), {
        enabled: isConnected && enabled,
        refetchInterval: refreshIntervalMs,
        retry: 2,
    });
    return { balance };
};
export const useNativeTokenBalanceFromChain = () => {
    const { isConnected, address } = useAccount();
    const { config } = useSquidStore();
    const { fromChain } = useSwap();
    const chainId = fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId;
    const balance = useQuery(keys({ address, apiUrl: config.apiUrl }).nativeBalanceBigNumber(chainId), () => __awaiter(void 0, void 0, void 0, function* () {
        const srcProvider = getProvider({ chainId: +(chainId !== null && chainId !== void 0 ? chainId : 1) });
        const nativeCurrencyBalance = yield srcProvider.getBalance(address);
        return nativeCurrencyBalance;
    }), {
        enabled: isConnected,
    });
    return { balance };
};
export const useNativeTokenBalanceDestinationChain = () => {
    const { isConnected, address } = useAccount();
    const { config } = useSquidStore();
    const { toChain } = useSwap();
    const { tokens } = useSquidTokens();
    const chainId = toChain === null || toChain === void 0 ? void 0 : toChain.chainId;
    const nativeToken = tokens.find((t) => t.symbol.toLowerCase() === (toChain === null || toChain === void 0 ? void 0 : toChain.nativeCurrency.symbol.toLowerCase()) &&
        t.chainId === chainId);
    const balance = useQuery(keys({ address, apiUrl: config.apiUrl }).nativeBalanceBigNumber(chainId, nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.address), () => __awaiter(void 0, void 0, void 0, function* () {
        const srcProvider = getProvider({ chainId: +(chainId !== null && chainId !== void 0 ? chainId : 1) });
        const nativeCurrencyBalance = yield srcProvider.getBalance(address);
        return nativeCurrencyBalance;
    }), {
        enabled: isConnected && !!nativeToken,
    });
    return { balance };
};
export const useCosmosBalance = ({ chainData, token, userAddress, enabled = true, }) => {
    const { isConnected } = useCosmosContext();
    const { cosmosAddress } = useCosmosForChain(chainData);
    const { cosmosBalances } = useAllTokensWithBalanceForChain(chainData);
    const walletAddressToFetch = userAddress !== null && userAddress !== void 0 ? userAddress : cosmosAddress;
    const balance = useMemo(() => {
        var _a, _b, _c;
        if (walletAddressToFetch &&
            chainData &&
            chainData.chainType === ChainType.Cosmos &&
            isConnected) {
            return ((_c = (_b = (_a = cosmosBalances === null || cosmosBalances === void 0 ? void 0 : cosmosBalances.data) === null || _a === void 0 ? void 0 : _a.find((b) => b.address === (token === null || token === void 0 ? void 0 : token.address) && b.chainId === chainData.chainId)) === null || _b === void 0 ? void 0 : _b.balance) !== null && _c !== void 0 ? _c : "0");
        }
        return "0";
    }, [
        cosmosBalances.data,
        walletAddressToFetch,
        chainData,
        token,
        isConnected,
    ]);
    return { balance };
};
//# sourceMappingURL=useBalance.js.map