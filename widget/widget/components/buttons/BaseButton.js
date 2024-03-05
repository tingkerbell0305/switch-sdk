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
import { transparentClass } from "../../core/constants";
import { useSquidStore } from "../../store/useSquidStore";
const getSizeClass = (size) => {
    switch (size) {
        case "xs":
            return "tw-dsw-btn-xs";
        case "sm":
            return "tw-dsw-btn-sm";
        case "md":
            return "tw-dsw-btn-md";
        case "lg":
            return "tw-dsw-btn-lg";
        default:
            return "tw-dsw-btn-md";
    }
};
export const BaseButton = (_a) => {
    var _b, _c;
    var { children, size = "md" } = _a, props = __rest(_a, ["children", "size"]);
    const sizeClass = getSizeClass(size);
    const { config } = useSquidStore();
    return (_jsx("button", Object.assign({ type: "button" }, props, { className: clsx("transition-all tw-rounded-btn tw-dsw-btn tw-normal-case hover:tw-brightness-95", sizeClass, props.className, props.disabled && "tw-dsw-btn-disabled tw-bg-neutral tw-bg-opacity-20", !props.disabled &&
            ((_c = (_b = config === null || config === void 0 ? void 0 : config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) &&
            transparentClass) }, { children: _jsx("span", { children: children }) })));
};
//# sourceMappingURL=BaseButton.js.map