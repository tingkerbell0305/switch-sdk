import { BigNumber as BN } from "bignumber.js";
export const convertTokenAmountToUSD = (tokenAmount, priceUSD) => {
    return BN(tokenAmount)
        .multipliedBy(priceUSD !== null && priceUSD !== void 0 ? priceUSD : "0")
        .toFixed();
};
//# sourceMappingURL=priceService.js.map