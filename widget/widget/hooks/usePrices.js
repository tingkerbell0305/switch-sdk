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
import { keys } from "../core/queries/queries-keys";
import { fetchPriceForToken } from "../services/external/coingeckoService";
import { useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
export const usePrices = () => {
    const { squid, config } = useSquidStore();
    const { swapRoute } = useSwapRoutePersistStore();
    /**
     * Get token prices from Squid API
     */
    const tokenPrices = useQuery(keys({ apiUrl: config.apiUrl }).tokensPrice(swapRoute), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const result = yield Promise.all([
            // From
            fetchPriceForToken({
                apiUrl: config.apiUrl,
                chainId: (_a = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId) === null || _a === void 0 ? void 0 : _a.toString(),
                tokenAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
            }),
            // To
            fetchPriceForToken({
                apiUrl: config.apiUrl,
                chainId: (_b = swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) === null || _b === void 0 ? void 0 : _b.toString(),
                tokenAddress: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
            }),
        ]);
        return {
            sourceTokenUsdPrice: result[0],
            destinationTokenUsdPrice: result[1],
        };
    }), {
        enabled: swapRoute &&
            !!squid &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId) &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress) &&
            !!(swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress),
    });
    return { tokenPrices };
};
//# sourceMappingURL=usePrices.js.map