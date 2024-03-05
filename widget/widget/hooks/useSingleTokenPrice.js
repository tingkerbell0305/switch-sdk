var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { keys } from "../core/queries/queries-keys";
import { fetchPriceForToken } from "../services/external/coingeckoService";
import { useSquidStore } from "../store/useSquidStore";
/**
 * If a component need to display price of a single token
 * @param tokenData
 * @returns
 */
export const useSingleTokenPrice = (tokenData) => {
    const { config } = useSquidStore();
    const { address } = useAccount();
    /**
     * Get token price from Squid api
     * Using coingecko under the hood
     */
    const tokenPrice = useQuery(keys({ address, apiUrl: config.apiUrl }).singleTokenPrice(tokenData === null || tokenData === void 0 ? void 0 : tokenData.address, tokenData === null || tokenData === void 0 ? void 0 : tokenData.chainId), () => __awaiter(void 0, void 0, void 0, function* () {
        const price = yield fetchPriceForToken({
            apiUrl: config.apiUrl,
            chainId: tokenData === null || tokenData === void 0 ? void 0 : tokenData.chainId.toString(),
            tokenAddress: tokenData === null || tokenData === void 0 ? void 0 : tokenData.address,
        });
        return price;
    }));
    const getUSDValue = (balance) => {
        var _a, _b;
        return parseFloat((_b = (_a = tokenPrice.data) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "0") * parseFloat(balance);
    };
    return { tokenPrice, getUSDValue };
};
//# sourceMappingURL=useSingleTokenPrice.js.map