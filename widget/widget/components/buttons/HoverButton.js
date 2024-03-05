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
import { subTransparentClass } from "../../core/constants";
import { useSquidStore } from "../../store/useSquidStore";
export const HoverButtonSecondary = (_a) => {
    var _b, _c;
    var { content, hoverContent, widthClass = "tw-w-30", paddingClass = "tw-px-2" } = _a, props = __rest(_a, ["content", "hoverContent", "widthClass", "paddingClass"]);
    const { config } = useSquidStore();
    return (_jsx("span", Object.assign({ className: "tw-group tw-flex tw-items-center" }, { children: _jsxs("button", Object.assign({ id: "squid-secondary-hover-button" }, props, { type: "button", className: clsx("tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-border-none tw-bg-base-200 tw-text-base tw-font-medium tw-lowercase tw-outline-none hover:tw-border-none hover:tw-bg-secondary hover:tw-outline-none", widthClass, paddingClass, props.className, ((_c = (_b = config === null || config === void 0 ? void 0 : config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && subTransparentClass) }, { children: [_jsx("span", Object.assign({ className: clsx(hoverContent && "group-hover:tw-hidden") }, { children: _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-neutral-content group-hover:tw-text-secondary-content" }, { children: content })) })), hoverContent && (_jsx("span", Object.assign({ className: "tw-hidden tw-text-secondary-content group-hover:tw-inline-block" }, { children: hoverContent })))] })) })));
};
export const HoverButtonPrimary = (_a) => {
    var _b, _c;
    var { content, hoverContent } = _a, props = __rest(_a, ["content", "hoverContent"]);
    const { config } = useSquidStore();
    return (_jsx("span", Object.assign({ className: "tw-group" }, { children: _jsxs("button", Object.assign({ id: "squid-primary-hover-button" }, props, { type: "button", className: clsx("tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-w-30 tw-bg-base-200 tw-text-base tw-font-medium tw-lowercase hover:tw-border-none hover:tw-bg-base-300", ((_c = (_b = config === null || config === void 0 ? void 0 : config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && subTransparentClass) }, { children: [_jsx("span", Object.assign({ className: clsx(hoverContent && "group-hover:tw-hidden") }, { children: _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base-content" }, { children: content })) })), hoverContent && (_jsx("span", Object.assign({ className: "tw-hidden group-hover:tw-inline-block" }, { children: hoverContent })))] })) })));
};
//# sourceMappingURL=HoverButton.js.map