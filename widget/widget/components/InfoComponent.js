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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { offset, size } from "@floating-ui/react-dom";
import { useFloating, useHover, useInteractions, } from "@floating-ui/react-dom-interactions";
import clsx from "clsx";
import { useState } from "react";
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
export const InfoComponent = (_a) => {
    var { id, tooltipComponent, baseComponent, baseHoverComponent, iconSize = 15, tooltipOffset = 5, placement = "top", maxWidth = "270px" } = _a, props = __rest(_a, ["id", "tooltipComponent", "baseComponent", "baseHoverComponent", "iconSize", "tooltipOffset", "placement", "maxWidth"]);
    const [isOpen, setIsOpen] = useState(false);
    if (baseComponent === undefined) {
        baseComponent = (_jsx(AiOutlineInfoCircle, { size: iconSize, className: "tw-inline-block group-hover:tw-hidden" }));
    }
    if (baseHoverComponent === undefined) {
        baseHoverComponent = (_jsx(AiFillInfoCircle, { size: iconSize, className: "tw-hidden group-hover:tw-inline-block" }));
    }
    const { x, y, reference, floating, strategy, context } = useFloating({
        placement,
        strategy: "fixed",
        middleware: [
            offset(tooltipOffset),
            size({
                apply({ availableWidth, availableHeight, elements }) {
                    Object.assign(elements.floating.style, {
                        maxWidth,
                    });
                },
            }),
        ],
    });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        useHover(context, {
            mouseOnly: true,
        }),
    ]);
    return (_jsxs(_Fragment, { children: [_jsxs("span", Object.assign({}, props, { onMouseEnter: () => setIsOpen(true), onMouseLeave: () => setIsOpen(false), className: clsx("tw-group tw-flex tw-items-center", props.className) }, getReferenceProps({ ref: reference }), { children: [baseComponent, baseHoverComponent] })), isOpen && tooltipComponent && (_jsx("span", Object.assign({ className: "tw-rounded-md tw-bg-black tw-p-2 tw-text-white" }, getFloatingProps({
                ref: floating,
                style: {
                    position: strategy,
                    top: y !== null && y !== void 0 ? y : 0,
                    left: x !== null && x !== void 0 ? x : 0,
                },
            }), { children: tooltipComponent })))] }));
};
//# sourceMappingURL=InfoComponent.js.map