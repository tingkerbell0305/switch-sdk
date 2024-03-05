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
import { useCosmosContext } from "../core/providers/CosmosProvider";
export const useCosmosForChain = (chainData) => {
    const { cosmosChainId: chainId, cosmosAddress: userAddr } = useCosmosContext();
    const { keplrTypeWallet } = useCosmosContext();
    const cosmosAddress = useQuery(["cosmos-address", chainData === null || chainData === void 0 ? void 0 : chainData.chainId, userAddr], () => __awaiter(void 0, void 0, void 0, function* () {
        const key = yield (keplrTypeWallet === null || keplrTypeWallet === void 0 ? void 0 : keplrTypeWallet.getKey(chainData === null || chainData === void 0 ? void 0 : chainData.chainId.toString()));
        return key === null || key === void 0 ? void 0 : key.bech32Address;
    }), {
        enabled: !!keplrTypeWallet &&
            !!chainId &&
            !!userAddr &&
            (chainData === null || chainData === void 0 ? void 0 : chainData.chainType) === ChainType.Cosmos,
    });
    return {
        cosmosAddress: cosmosAddress.data,
    };
};
//# sourceMappingURL=useCosmosForChain.js.map