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
import { BsChevronDown } from "react-icons/bs";
import { useSquidStore } from "../store/useSquidStore";
import { ImageWrapper } from "./ImageWrapper";
export const DropdownBtn = (_a) => {
    var _b, _c;
    var { iconUrl, label } = _a, props = __rest(_a, ["iconUrl", "label"]);
    const { config } = useSquidStore();
    return (_jsx("span", Object.assign({ id: "squid-dropdown-btn", className: clsx("tw-flex tw-w-full tw-flex-row tw-items-center", props.disabled && "tw-opacity-50", props.className) }, { children: _jsx("button", Object.assign({ type: "button", className: clsx("tw-rounded-dropdown tw-dsw-btn  tw-h-[36px] tw-min-h-0 tw-w-full tw-border-none tw-bg-base-100 tw-pl-1 tw-pr-3 tw-text-base tw-font-normal tw-normal-case tw-text-base-content tw-outline-none", "tw-shadow-[0_4px_12px_rgba(0,0,0,0.1)]", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && "tw-bg-opacity-80") }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-gap-2" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-max-w-[80%] tw-flex-row tw-items-center tw-gap-2" }, { children: [iconUrl && (_jsx(ImageWrapper, { id: "squid-dropdown-icon", src: iconUrl, className: "tw-h-7 tw-w-7 tw-rounded-full tw-bg-base-100 tw-bg-opacity-60" })), _jsx("span", Object.assign({ id: "squid-dropdown-label", className: "tw-truncate tw-text-xl tw-font-medium tw-text-base-content" }, { children: label }))] })), _jsx(BsChevronDown, {})] })) })) })));
};
//# sourceMappingURL=DropdownBtn.js.map