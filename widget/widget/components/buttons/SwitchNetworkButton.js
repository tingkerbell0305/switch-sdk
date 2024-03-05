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
export const SwitchNetworkButton = (_a) => {
    var props = __rest(_a, []);
    return (_jsx("button", Object.assign({}, props, { type: "button", className: clsx("tw-dsw-btn tw-h-6.5 tw-min-h-0 tw-w-30 tw-bg-primary tw-font-medium tw-lowercase tw-text-primary-content hover:tw-border-none") }, { children: _jsx("span", { children: "switch network" }) })));
};
//# sourceMappingURL=SwitchNetworkButton.js.map