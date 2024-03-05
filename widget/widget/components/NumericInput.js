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
import { jsx as _jsx } from "react/jsx-runtime";
import _debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";
import { useMultiChainBalance } from "../hooks/useMultiChainBalance";
import { usePrices } from "../hooks/usePrices";
import { useSwap } from "../hooks/useSwap";
export const NumericInput = (_a) => {
    var _b, _c;
    var { parsedValueChanged, initialValue, forcedUpdateValue, maxDecimals } = _a, props = __rest(_a, ["parsedValueChanged", "initialValue", "forcedUpdateValue", "maxDecimals"]);
    const [inputValue, setInputValue] = useState(initialValue);
    const { fromChain, fromToken } = useSwap();
    const { balance = "0" } = useMultiChainBalance(fromChain, fromToken);
    const { tokenPrices } = usePrices();
    const { sourceTokenUsdPrice = 0 } = (_b = tokenPrices.data) !== null && _b !== void 0 ? _b : {};
    // Probably a better way to handle this
    // This was introduce to handle the "MAX" button setting an amount
    // Other than that, this component is only sending value to the exterior
    // Without this, we were losing inputs such as ".05" that were forced parsed to "0.05" after debounce
    useEffect(() => {
        if (forcedUpdateValue) {
            setInputValue(forcedUpdateValue);
        }
    }, [forcedUpdateValue]);
    /**
     * Get the number of decimals of inputValue
     * If there are more decimals than the maxDecimals
     * remove the extra decimals
     */
    useEffect(() => {
        const split = inputValue.split(".");
        if (split.length > 1) {
            const decimals = split[1];
            if (maxDecimals && decimals.length > maxDecimals) {
                const newValue = `${split[0]}.${decimals.slice(0, maxDecimals)}`;
                setInputValue(newValue);
                parsedValueChanged(newValue);
            }
        }
    }, [maxDecimals]);
    const debouncePriceChanged = (value = "") => {
        if (value.endsWith("."))
            return;
        parsedValueChanged(value);
    };
    // useCallback to memoizes the debounce function, prevents recreating it
    const debouncePriceUpdate = useCallback(_debounce(debouncePriceChanged, 700), []);
    const handlePriceChanged = (event) => {
        try {
            const formattedInput = event.currentTarget.value
                .replace(/[^0-9\.\,$%]/g, "")
                .replace(",", ".");
            if (formattedInput.includes("$") || formattedInput.includes("%")) {
                let cleanedInput = formattedInput;
                if (formattedInput.includes("$") && formattedInput.includes("%")) {
                    // only allow one of them
                    cleanedInput = formattedInput
                        .replaceAll("$", "")
                        .replaceAll("%", "")
                        .concat("%");
                }
                else if (formattedInput.includes("%")) {
                    // remove duplicates & always add % at the end
                    cleanedInput = formattedInput.replaceAll("%", "").concat("%");
                }
                else if (formattedInput.includes("$")) {
                    // Always add $ at the beginning
                    cleanedInput = formattedInput.replaceAll("$", "");
                    cleanedInput = `$${cleanedInput}`;
                }
                setInputValue(cleanedInput);
                debouncePriceUpdate.cancel();
                return;
            }
            // This is to prevent the user from typing more decimals than the decimals attribute of the token
            if (maxDecimals !== undefined) {
                const split = formattedInput.split(".");
                if (split.length > 1) {
                    const decimals = split[1];
                    if (decimals.length > maxDecimals) {
                        // Dont update anything
                        return;
                    }
                }
            }
            // if input includes at least one character different than `0` (zero), `.` (dot), or `,` (comma)
            // means that user is typing a valid amount, for example: 1.02 or 0.005
            // if so, then update the input value and fetch the price
            if (/[^0,.]/.test(formattedInput)) {
                setInputValue(formattedInput);
                debouncePriceUpdate(formattedInput);
            }
            else if (
            // Means the user is currently typing and will add decimal, no need to fetch or parse
            // example input: 0.00
            (formattedInput.includes(".") && formattedInput.endsWith("0")) ||
                formattedInput.endsWith(".") ||
                (formattedInput === "0" && (inputValue === "" || inputValue === "0"))) {
                setInputValue(formattedInput);
            }
            else if (!isNaN(+formattedInput)) {
                setInputValue(formattedInput.toString());
                debouncePriceUpdate(formattedInput.toString());
                // parsedValueChanged(formattedInput.toString());
            }
            else {
                setInputValue("");
            }
        }
        catch (error) {
            setInputValue("");
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.includes("%")) {
            const percentage = Number(inputValue.replace("%", ""));
            // If the percentage is greater than 100, set it to 100
            const formattedPercentage = percentage > 100 ? 100 : percentage;
            const valueByPercentage = Number(balance) * (formattedPercentage / 100);
            // If the value is 0, we want to show 0, not 0.0000
            const formattedValue = valueByPercentage === 0 ? "0" : valueByPercentage.toFixed(4);
            setInputValue(formattedValue);
            parsedValueChanged(formattedValue);
        }
        if (inputValue.includes("$")) {
            const usdAmount = Number(inputValue.replace("$", ""));
            if (usdAmount > 0) {
                const newValue = usdAmount / Number(sourceTokenUsdPrice !== null && sourceTokenUsdPrice !== void 0 ? sourceTokenUsdPrice : 0);
                const newValueFormatted = newValue.toFixed(4);
                setInputValue(newValueFormatted);
                parsedValueChanged(newValueFormatted);
            }
        }
    };
    return (_jsx("form", Object.assign({ onSubmit: handleSubmit }, { children: _jsx("input", Object.assign({}, props, { onChange: handlePriceChanged, value: inputValue, type: "string", placeholder: (_c = props.placeholder) !== null && _c !== void 0 ? _c : "" })) })));
};
//# sourceMappingURL=NumericInput.js.map