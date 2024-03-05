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
import clsx from "clsx";
export const IconButton = (_a) => {
    var { icon, size = 22, border = true, hoverEffect = true } = _a, props = __rest(_a, ["icon", "size", "border", "hoverEffect"]);
    return (_jsx("button", Object.assign({ id: "squid-icon-button", type: "button" }, props, { className: clsx("transition-all tw-group tw-flex tw-items-center tw-justify-center tw-rounded-full", props.className, border && "border tw-border-primary", hoverEffect && "hover:tw-bg-primary") }, { children: icon({
            className: "transition-all",
            size,
        }) })));
};
//# sourceMappingURL=IconButton.js.map