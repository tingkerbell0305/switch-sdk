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
/* eslint-disable jsx-a11y/no-autofocus */
import clsx from "clsx";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import { subTransparentClass } from "../core/constants";
import { useSquidStore } from "../store/useSquidStore";
export const SearchInput = (_a) => {
    var _b, _c;
    var { onSearchChange, autoFocus = false } = _a, props = __rest(_a, ["onSearchChange", "autoFocus"]);
    const [inputValue, setInputValue] = useState("");
    const { config } = useSquidStore();
    const inputChanged = (e) => {
        const searchValue = e.target.value;
        setInputValue(searchValue);
        onSearchChange(searchValue);
    };
    const resetInput = () => {
        setInputValue("");
        onSearchChange("");
    };
    return (_jsxs("span", Object.assign({ className: "tw-relative tw-flex tw-w-full tw-items-center" }, { children: [_jsx("span", Object.assign({ className: "tw-absolute tw-left-[13px] tw-flex tw-items-center" }, { children: _jsx(BiSearch, { className: "tw-text-neutral-content" }) })), _jsx("input", { autoFocus: autoFocus, onChange: inputChanged, value: inputValue, type: "text", placeholder: props.placeholder, className: clsx("tw-border-w-[0px] tw-rounded-box tw-h-[48px] tw-max-h-[48px] tw-w-full tw-rounded-3xl tw-bg-base-200 tw-py-2 tw-pl-[35px] tw-text-lg tw-text-neutral-content tw-outline-none focus:tw-outline-none", ((_c = (_b = config.style) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.transparentWidget) && subTransparentClass), style: { borderRadius: "24px" } }), inputValue !== "" && (_jsx("button", Object.assign({ type: "button", onClick: resetInput, className: "tw-absolute tw-right-[13px] tw-flex tw-items-center" }, { children: _jsx(MdClear, { className: "tw-text-neutral-content" }) })))] })));
};
//# sourceMappingURL=SearchInput.js.map