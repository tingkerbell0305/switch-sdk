import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { BsChevronDown } from "react-icons/bs";
import { logos } from "../assets/images/logos";
import { routes } from "../core/routes";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { ImageWrapper } from "./ImageWrapper";
export const ChainDropdownButton = ({ chainData, direction }) => {
    const { switchRoute } = useSquidRouter();
    const isAllChain = chainData === undefined;
    return (_jsxs("button", Object.assign({ className: `tw-rounded-dropdown tw-dsw-btn tw-flex tw-h-[32px] tw-min-h-0 
  tw-gap-1 tw-border-[1px] tw-border-base-300 tw-bg-base-100 tw-pl-1 tw-pr-3 
  tw-text-base tw-font-normal tw-normal-case tw-text-base-content 
  `, type: "button", style: {
            height: 32,
            borderWidth: "1px",
            borderStyle: "solid",
        }, onClick: () => switchRoute(routes.chains, { direction, context: "fromToken" }, false) }, { children: [_jsx(ImageWrapper, { alt: "squid logo", className: "rounded-full", src: isAllChain ? logos.squidLogoPurple : chainData === null || chainData === void 0 ? void 0 : chainData.chainIconURI, style: { height: 24, width: 24 } }), isAllChain ? "All Networks" : chainData === null || chainData === void 0 ? void 0 : chainData.networkName, _jsx(BsChevronDown, { size: 12, className: clsx("rotate-0 cursor-pointer transition-transform tw-flex tw-flex-col") })] })));
};
export const TokensViewHeaderDropdown = ({ chainData, direction }) => {
    return (_jsxs("div", Object.assign({ className: "tw-flex tw-items-center tw-justify-between tw-px-5 tw-pb-3", style: { paddingBottom: "10px" } }, { children: [_jsx("span", Object.assign({ className: "tw-text-base tw-font-semibold" }, { children: "Available tokens" })), _jsx(ChainDropdownButton, { chainData: chainData, direction: direction })] })));
};
//# sourceMappingURL=TokensViewHeaderDropdown.js.map