import { ethers } from "ethers";
import { take, takeWhile } from "lodash";
export const roundNumericValue = (value = "0", precision = 2, useComaEvery3Digits = true, significantFigures = 0) => {
    var _a;
    let newValue = value;
    const temp = (_a = newValue === null || newValue === void 0 ? void 0 : newValue.toString()) !== null && _a !== void 0 ? _a : "";
    let [integers, decimals] = temp.split(".");
    // toLocaleString is supported on all modern browsers
    // We might monitor and have a polyfill if some people are not
    // Seeing the comas.
    if (useComaEvery3Digits && integers !== "0") {
        integers = parseInt(integers, 10).toLocaleString("en-US").toString();
    }
    if (significantFigures && decimals) {
        const zeros = takeWhile(decimals === null || decimals === void 0 ? void 0 : decimals.toString(), (c) => c === "0").length;
        return `${integers}.${take(decimals, zeros + significantFigures).join("")}`;
    }
    return decimals
        ? `${integers}.${take(decimals, precision).join("")}`
        : integers;
};
export function formatUnitsRounded(value, decimals, maxDecimalDigits) {
    const dc = decimals !== null && decimals !== void 0 ? decimals : "0";
    return ethers.FixedNumber.from(ethers.utils.formatUnits(value, dc))
        .round(maxDecimalDigits !== null && maxDecimalDigits !== void 0 ? maxDecimalDigits : ethers.BigNumber.from(dc).toNumber())
        .toString();
}
//# sourceMappingURL=numbers.js.map