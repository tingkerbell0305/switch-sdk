import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import { AiFillStar } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { useSquidStore } from "../store/useSquidStore";
import { ActiveImg } from "./ActiveImg";
export const ListItemAvatar = ({ children, selectValue, imageUrl, onSelect, disabled = false, active = false, selected = false, favorite = false, roundImage = true, size = "tw-md", gap = "3", relatedImageUrl, }) => {
    var _a, _b;
    const { config } = useSquidStore();
    return (_jsx("li", Object.assign({ className: clsx("tw-flex tw-w-full tw-items-center", disabled && "grayscale tw-opacity-40", "tw-min-h-[66px]") }, { children: _jsxs("button", Object.assign({ type: "button", onClick: () => (!disabled ? onSelect(selectValue) : null), className: clsx("mb-0 tw-flex tw-h-full tw-w-full tw-flex-row tw-items-center tw-justify-center tw-px-5 hover:tw-bg-base-200", `tw-gap-${gap}`, disabled && "cursor-default", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) &&
                "tw-bg-opacity-0 hover:tw-bg-opacity-70") }, { children: [_jsxs("span", Object.assign({ className: "tw-relative tw-flex tw-h-10 tw-w-10 tw-flex-col tw-items-center tw-justify-center tw-p-1.5" }, { children: [_jsx(ActiveImg, { size: size, active: active, logoUrl: imageUrl, roundImage: roundImage }), relatedImageUrl && (_jsx("span", Object.assign({ className: "tw-absolute -tw-bottom-1 -tw-right-1" }, { children: _jsx(ActiveImg, { size: "tw-xs", active: active, logoUrl: relatedImageUrl, roundImage: roundImage }) })))] })), _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-text-base", style: { lineHeight: "1.1rem" } }, { children: [_jsx("span", Object.assign({ className: "tw-grow" }, { children: children })), favorite && (_jsx("span", Object.assign({ className: "tw-ml-[20px]" }, { children: _jsx(AiFillStar, { className: "tw-grow-0 tw-text-primary", size: 20 }) }))), selected && !favorite && (_jsx("span", Object.assign({ className: "tw-ml-[20px]" }, { children: _jsx(FiCheck, { className: "tw-grow-0 tw-text-success", size: 20 }) })))] }))] })) })));
};
//# sourceMappingURL=ListItemAvatar.js.map