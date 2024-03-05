/* eslint-disable consistent-return */
import Color from "color";
import clsx from "clsx";
import { themeTypesKeys } from "../../core/types/config";
/**
 * Converts Hex color to HSL
 * Because the current daisy theme only accepts HSL css variables
 * @param hex
 * @returns HSL string
 */
export const toHSL = (hex) => {
    const color = Color(hex);
    const hslArray = color.hsl().round().array();
    return `${hslArray[0]} ${hslArray[1]}% ${hslArray[2]}%`;
};
export const generateForegroundColorFrom = (input, percentage = 0.8) => {
    if (Color(input).isDark()) {
        const arr = Color(input)
            .mix(Color("white"), percentage)
            .saturate(10)
            .hsl()
            .round()
            .array();
        return `${arr[0]} ${arr[1]}% ${arr[2]}%`;
    }
    const arr = Color(input)
        .mix(Color("black"), percentage)
        .saturate(10)
        .hsl()
        .round()
        .array();
    return `${arr[0]} ${arr[1]}% ${arr[2]}%`;
};
export const generateFocusColorFrom = (input) => {
    const darkerHslArray = Color(input).darken(0.2).hsl().round().array();
    return `${darkerHslArray[0]} ${darkerHslArray[1]}% ${darkerHslArray[2]}%`;
};
/**
 * Parsing the user readable config to css variables with HSL values
 * @param style
 */
export const getParsedStyle = (style) => {
    if (style) {
        const styleKeys = Object.keys(themeTypesKeys);
        const parsed = styleKeys.map((sk) => {
            const themeItem = themeTypesKeys[sk];
            let userValue = style[sk];
            if (themeItem.type === "color" && userValue) {
                userValue = toHSL(userValue);
            }
            if (themeItem.contentFrom) {
                const parentColor = style[themeItem.contentFrom];
                if (parentColor && !userValue) {
                    userValue = generateForegroundColorFrom(parentColor.toString());
                }
            }
            if (themeItem.focusFrom) {
                const parentColor = style[themeItem.focusFrom];
                if (parentColor) {
                    userValue = generateFocusColorFrom(parentColor.toString());
                }
            }
            return {
                [themeItem.cssVariable]: userValue,
            };
        });
        return parsed.reduce((a, v) => {
            const key = Object.keys(v)[0];
            return Object.assign(Object.assign({}, a), { [key]: v[key] });
        });
    }
};
export const isColorDark = (colorHEX) => {
    if (!colorHEX)
        return false;
    const color = Color(colorHEX);
    return color.isDark();
};
export const getListItemHoverClassName = ({ transparentWidget = false }) => clsx("tw-bg-base-200", transparentWidget && "tw-bg-opacity-70");
//# sourceMappingURL=colorService.js.map