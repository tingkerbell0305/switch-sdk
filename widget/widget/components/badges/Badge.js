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
export const Badge = (_a) => {
    var { children, backgroundClass, textClass, maxHeight } = _a, props = __rest(_a, ["children", "backgroundClass", "textClass", "maxHeight"]);
    return (_jsx("button", Object.assign({}, props, { style: { maxHeight: maxHeight !== null && maxHeight !== void 0 ? maxHeight : "none" }, type: "button", className: clsx("tw-flex tw-items-center tw-rounded-md tw-bg-opacity-20 tw-px-1.5 tw-py-[2px] tw-text-sm tw-font-semibold tw-transition-all hover:tw-bg-opacity-30", backgroundClass, textClass) }, { children: children })));
};
export const BadgeWithIcon = (_a) => {
    var { children, backgroundClass, textClass, icon, iconSize = 18 } = _a, props = __rest(_a, ["children", "backgroundClass", "textClass", "icon", "iconSize"]);
    const Icon = icon;
    return (_jsx(Badge, Object.assign({}, props, { backgroundClass: backgroundClass, textClass: textClass }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-0.5" }, { children: [_jsx(Icon, { className: "tw-p-[3px]", size: iconSize }), children] })) })));
};
//# sourceMappingURL=Badge.js.map