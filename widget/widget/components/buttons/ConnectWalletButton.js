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
import { HiPlus } from "react-icons/hi2";
import { routes } from "../../core/routes";
import { RouterLink } from "../RouterLink";
export const ConnectWalletButton = (_a) => {
    var { direction } = _a, props = __rest(_a, ["direction"]);
    return (_jsx(RouterLink, Object.assign({ className: "tw-flex tw-flex-row tw-justify-end", to: direction === "from" ? routes.wallets : routes.destination, params: { direction } }, { children: _jsx("button", Object.assign({}, props, { type: "button", className: "tw-group tw-dsw-btn-outline tw-dsw-btn-primary tw-dsw-btn-xs tw-dsw-btn tw-h-6.5 tw-w-30 tw-border-none tw-bg-primary tw-px-1" }, { children: _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-2  tw-text-base tw-font-medium tw-normal-case tw-text-primary-content" }, { children: direction === "from" ? ("connect wallet") : (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", Object.assign({ className: "tw-normal-case" }, { children: "Add address" })), _jsx(HiPlus, { size: 13 })] }))) })) })) })));
};
//# sourceMappingURL=ConnectWalletButton.js.map