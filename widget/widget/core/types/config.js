/**
 * Mapping between readable variables name and css variables used by daisyUI and TailwindCSS
 */
export const themeTypesKeys = {
    neutralContent: { type: "color", cssVariable: "--nc" },
    baseContent: { type: "color", cssVariable: "--bc" },
    base100: { type: "color", cssVariable: "--b1" },
    base200: { type: "color", cssVariable: "--b2" },
    base300: { type: "color", cssVariable: "--b3" },
    error: { type: "color", cssVariable: "--er" },
    warning: { type: "color", cssVariable: "--wa" },
    primary: { type: "color", cssVariable: "--p" },
    primaryContent: {
        type: "color",
        cssVariable: "--pc",
        contentFrom: "primary",
    },
    primaryFocus: {
        type: "color",
        cssVariable: "--pf",
        focusFrom: "primary",
    },
    secondary: { type: "color", cssVariable: "--s" },
    secondaryFocus: {
        type: "color",
        cssVariable: "--sf",
        focusFrom: "secondary",
    },
    secondaryContent: {
        type: "color",
        cssVariable: "--sc",
        contentFrom: "secondary",
    },
    neutral: { type: "color", cssVariable: "--n" },
    success: { type: "color", cssVariable: "--su" },
    roundedBtn: { type: "value", cssVariable: "--rounded-btn" },
    roundedCornerBtn: { type: "value", cssVariable: "--rounded-corner-btn" },
    roundedBox: { type: "value", cssVariable: "--rounded-box" },
    roundedDropDown: { type: "value", cssVariable: "--rounded-dropdown" },
};
//# sourceMappingURL=config.js.map