var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { roundNumericValue } from "../core/numbers";
export const NumericValue = (_a) => {
    var { value, precision, useComaEvery3Digits = true, hideIfZero = false, currency, significantFigures, formatIfVerySmall } = _a, props = __rest(_a, ["value", "precision", "useComaEvery3Digits", "hideIfZero", "currency", "significantFigures", "formatIfVerySmall"]);
    const isVerySmall = useMemo(() => {
        return (formatIfVerySmall !== undefined &&
            +(value !== null && value !== void 0 ? value : "0") !== 0 &&
            +(value !== null && value !== void 0 ? value : "0") < formatIfVerySmall);
    }, [formatIfVerySmall, value]);
    const newValue = useMemo(() => value !== undefined && value !== ""
        ? roundNumericValue(value, precision, useComaEvery3Digits, significantFigures)
        : undefined, [value, precision, useComaEvery3Digits, significantFigures]);
    if (hideIfZero && (value === "0" || value === "0.0")) {
        return null;
    }
    return (_jsx("span", { children: _jsxs("span", Object.assign({ className: props.className }, { children: [isVerySmall && _jsx("span", Object.assign({ className: "tw-mr-0.5" }, { children: "<" })), currency && currency.symbolPosition === "before" && (_jsx("span", { children: currency.symbol })), newValue && (_jsx("span", { children: isVerySmall ? formatIfVerySmall === null || formatIfVerySmall === void 0 ? void 0 : formatIfVerySmall.toString() : newValue })), currency && currency.symbolPosition === "after" && (_jsx("span", Object.assign({ className: "tw-ml-1" }, { children: currency.symbol })))] })) }));
};
//# sourceMappingURL=NumericValue.js.map