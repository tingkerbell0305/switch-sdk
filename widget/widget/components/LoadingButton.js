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
import { BaseButton } from "./buttons/BaseButton";
import { Loader } from "./Loader";
export const LoadingButton = (_a) => {
    var { title, isLoading = false } = _a, props = __rest(_a, ["title", "isLoading"]);
    return (_jsx(BaseButton, Object.assign({}, props, { children: _jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center" }, { children: isLoading ? _jsx(Loader, {}) : props.children })) })));
};
//# sourceMappingURL=LoadingButton.js.map