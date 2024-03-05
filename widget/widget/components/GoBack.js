import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { FaArrowLeft } from "react-icons/fa";
import { useSquidRouter } from "../hooks/useSquidRouter";
export const GoBack = ({ showIcon, className }) => {
    const { previousRoute } = useSquidRouter();
    return (_jsxs("button", Object.assign({ onClick: () => previousRoute(), type: "button", className: clsx("tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-base hover:tw-underline", className) }, { children: [showIcon && (_jsx("span", { children: _jsx(FaArrowLeft, { size: 10 }) })), _jsx("span", { children: "Go back" })] })));
};
//# sourceMappingURL=GoBack.js.map