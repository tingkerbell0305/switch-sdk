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
import { FaChevronLeft } from "react-icons/fa";
import { useSquidRouter } from "../../hooks/useSquidRouter";
import { IconButton } from "./IconButton";
export const BackButton = (_a) => {
    var props = __rest(_a, []);
    const { previousRoute } = useSquidRouter();
    return (_jsx(IconButton, { className: clsx(props.className, "tw-rounded-full tw-text-neutral-content"), size: 20, border: false, hoverEffect: false, onClick: () => previousRoute(), icon: FaChevronLeft }));
};
//# sourceMappingURL=BackButton.js.map