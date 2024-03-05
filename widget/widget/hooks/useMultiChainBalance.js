import { ChainType } from "@0xsquid/sdk";
import { useMemo } from "react";
import { useAccount } from "wagmi";
import { useCosmosBalance, useEvmBalance } from "./useBalance";
import { useCosmosForChain } from "./useCosmosForChain";
import { useSwap } from "./useSwap";
export const useMultiChainBalance = (chainToCompare, tokenToCompare, direction) => {
    var _a, _b;
    const { address: evmConnectedAddress } = useAccount();
    const { destinationAddress } = useSwap();
    const { cosmosAddress } = useCosmosForChain(chainToCompare);
    /**
     * Get balance for EVM chain types
     */
    const { balance: evmBalance } = useEvmBalance({
        chain: chainToCompare,
        token: tokenToCompare,
        userAddress: (_a = (direction === "to" ? destinationAddress : evmConnectedAddress)) !== null && _a !== void 0 ? _a : "",
        enabled: (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === ChainType.EVM,
    });
    /**
     * Get balance for Cosmos chain types
     */
    const { balance: cosmosBalance } = useCosmosBalance({
        chainData: chainToCompare,
        token: tokenToCompare,
        userAddress: (_b = (direction === "to" ? destinationAddress : cosmosAddress)) !== null && _b !== void 0 ? _b : "",
        enabled: (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === ChainType.Cosmos,
    });
    /**
     * Get either EVM or cosmos Balance
     */
    const balance = useMemo(() => (chainToCompare === null || chainToCompare === void 0 ? void 0 : chainToCompare.chainType) === ChainType.EVM
        ? evmBalance.data
        : cosmosBalance, [evmBalance.data, chainToCompare, cosmosBalance]);
    return { balance };
};
//# sourceMappingURL=useMultiChainBalance.js.map