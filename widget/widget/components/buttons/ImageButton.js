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
export const ImageButton = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx("button", Object.assign({ type: "button" }, props, { className: clsx(props.disabled && "pointer-events-none opacity-60 saturate-0") }, { children: _jsx("span", Object.assign({ className: clsx(props.disabled && "tw-opacity-40") }, { children: children })) })));
};
//# sourceMappingURL=ImageButton.js.map