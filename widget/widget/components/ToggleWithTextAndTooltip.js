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
import { InfoComponent } from "./InfoComponent";
export const ToggleWithTextAndTooltip = (_a) => {
    var { tooltipProps } = _a, props = __rest(_a, ["tooltipProps"]);
    return (_jsx(InfoComponent, Object.assign({ id: "gas-dest-toggle" }, tooltipProps, { baseComponent: _jsx("input", Object.assign({ type: "checkbox", className: "custom-toggle gas-dest tw-dsw-toggle-secondary tw-dsw-toggle" }, props)) })));
};
//# sourceMappingURL=ToggleWithTextAndTooltip.js.map