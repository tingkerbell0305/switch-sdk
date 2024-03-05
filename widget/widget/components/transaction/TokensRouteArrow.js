import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { VscArrowRight } from "react-icons/vsc";
import { ImageWrapper } from "../ImageWrapper";
export const TokensRouteArrow = ({ fromToken, toToken, size = "lg", }) => {
    return (_jsxs("span", Object.assign({ className: clsx("tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2 ", size === "lg" && "tw-text-lg", size === "md" && "tw-text-base") }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(ImageWrapper, { className: "tw-h-7 tw-w-7", src: fromToken === null || fromToken === void 0 ? void 0 : fromToken.logoURI, alt: "" }), _jsx("span", { children: fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol })] })), _jsx(VscArrowRight, {}), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(ImageWrapper, { className: "tw-h-7 tw-w-7", src: toToken === null || toToken === void 0 ? void 0 : toToken.logoURI, alt: "" }), _jsx("span", { children: toToken === null || toToken === void 0 ? void 0 : toToken.symbol })] }))] })));
};
//# sourceMappingURL=TokensRouteArrow.js.map