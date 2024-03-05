import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { BsChevronDown } from "react-icons/bs";
import { subTransparentClass, widgetHeaderSize, widgetHeight, } from "../core/constants";
import { useSquidStore } from "../store/useSquidStore";
export const CollapsibleBox = ({ closedStateChildren, children, isOpen, openOffset = 0, onClose, }) => {
    var _a, _b;
    const { config } = useSquidStore();
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-px-5" }, { children: [closedStateChildren, _jsx("div", Object.assign({ style: {
                    top: isOpen ? openOffset : widgetHeight,
                    left: 0,
                    height: `calc(100% + ${widgetHeaderSize.height + widgetHeaderSize.paddingY}px)`,
                    transition: "all 0.3s ease-in-out",
                }, className: clsx("transition-all duration-300 ease-in-out tw-rounded-t-box tw-absolute tw-z-20 tw-flex tw-w-full tw-flex-col tw-overflow-auto tw-bg-neutral") }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-col tw-items-end tw-px-4 tw-pt-4" }, { children: [_jsx("button", Object.assign({ type: "button", onClick: onClose }, { children: _jsx("span", Object.assign({ className: clsx("tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center tw-rounded-full tw-bg-base-200 tw-p-1", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && subTransparentClass) }, { children: _jsx(BsChevronDown, { className: clsx("rotate-0 cursor-pointer transition-transform tw-flex tw-flex-col tw-text-neutral-content", !isOpen && "rotate-180") }) })) })), children] })) }))] })));
};
//# sourceMappingURL=CollapsibleBox.js.map