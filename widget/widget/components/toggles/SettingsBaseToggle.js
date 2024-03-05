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
import clsx from "clsx";
import { Box } from "../Box";
const iconWrapper = (icon, size) => {
    if (!icon)
        return null;
    const Icon = icon;
    return _jsx(Icon, { size: size, className: "tw-text-base-content" });
};
export const SettingsBaseBox = ({ allowTransparency = true, fadeOnLoad = false, title, description, icon, iconSize = 14, children, }) => {
    return (_jsxs("div", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2" }, { children: [_jsx(Box, Object.assign({ id: "box", allowTransparency: allowTransparency, className: clsx("tw-flex tw-h-[45px] tw-w-full tw-flex-row tw-items-center tw-px-4", fadeOnLoad && "tw-animate-fade") }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-items-center tw-gap-1" }, { children: [icon && (_jsx("span", Object.assign({ className: "tw-p-[3px]" }, { children: iconWrapper(icon, iconSize) }))), _jsx("span", Object.assign({ className: "tw-text-base tw-font-medium" }, { children: title }))] })), children] })) })), _jsx("span", Object.assign({ className: "tw-text-xs tw-text-neutral-content" }, { children: description }))] })));
};
export const SettingsBaseToggle = (_a) => {
    var { title, description, icon, iconSize = 14, fadeOnLoad = false, allowTransparency = true } = _a, props = __rest(_a, ["title", "description", "icon", "iconSize", "fadeOnLoad", "allowTransparency"]);
    return (_jsx(SettingsBaseBox, Object.assign({ title: title, description: description, icon: icon, iconSize: iconSize, fadeOnLoad: fadeOnLoad, allowTransparency: allowTransparency }, { children: _jsx("input", Object.assign({}, props, { type: "checkbox", className: "tw-dsw-toggle-secondary tw-dsw-toggle" })) })));
};
//# sourceMappingURL=SettingsBaseToggle.js.map