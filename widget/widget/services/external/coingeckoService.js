var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export const fetchPriceForToken = ({ apiUrl, chainId, tokenAddress, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (chainId && tokenAddress) {
        const params = {
            chainId,
            tokenAddress,
        };
        const url = `${apiUrl}/v1/token-price`;
        const response = yield axios.get(url, {
            params,
        });
        const result = (yield response.data);
        return result.price;
    }
    return 0;
});
//# sourceMappingURL=coingeckoService.js.map