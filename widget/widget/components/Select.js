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
export const Select = (_a) => {
    var { items } = _a, props = __rest(_a, ["items"]);
    return (_jsx("select", Object.assign({}, props, { className: clsx("select select-bordered", props.className) }, { children: items.map((i, index) => (_jsx("option", Object.assign({ value: i.value, selected: i.selected, disabled: i.disabled }, { children: i.name }), index))) })));
};
//# sourceMappingURL=Select.js.map