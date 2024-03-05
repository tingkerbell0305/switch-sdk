import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { ImageWrapper } from "./ImageWrapper";
export const ActiveImg = ({ logoUrl, size = "tw-md", active = false, pulseActive = false, roundImage = true, }) => {
    const mdSize = {
        container: "tw-w-[44px] tw-h-[44px]",
        activeLight: "tw-w-3 tw-h-3",
    };
    const smSize = {
        container: "tw-w-[36px] tw-h-[36px]",
        activeLight: "tw-w-3 tw-h-3",
    };
    const xsSize = { container: "tw-w-6 tw-h-6", activeLight: "tw-w-3 tw-h-3" };
    const sizeMap = {
        "tw-md": mdSize,
        "tw-sm": smSize,
        "tw-xs": xsSize,
    };
    const currentSize = sizeMap[size];
    return (_jsxs("span", Object.assign({ className: clsx("tw-relative tw-flex tw-items-center tw-justify-center tw-p-1", currentSize.container) }, { children: [active && (_jsx("span", Object.assign({ className: clsx("absolute tw-right-0 tw-top-1 tw-h-3 tw-w-3 tw-bg-success", currentSize.activeLight, roundImage ? "tw-rounded-full" : "tw-rounded-sm") }, { children: pulseActive && (_jsx("span", { className: clsx("absolute tw-right-0 tw-top-0 tw-h-3 tw-w-3 tw-animate-ping tw-bg-success tw-opacity-75", roundImage ? "tw-rounded-full" : "tw-rounded-sm") })) }))), _jsx(ImageWrapper, { src: logoUrl, className: clsx("tw-h-auto tw-w-full tw-rounded-full tw-bg-base-100 tw-bg-opacity-60", roundImage ? "tw-rounded-full" : "tw-rounded-sm") })] })));
};
//# sourceMappingURL=ActiveImg.js.map