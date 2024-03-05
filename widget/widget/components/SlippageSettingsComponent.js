import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { squidSlippageToleranceLink } from "../core/externalLinks";
import { useSquidStore } from "../store/useSquidStore";
import { Box } from "./Box";
import { TextLink } from "./TextLink";
export const SlippageSettingsComponent = () => {
    const slippageOptions = [
        { value: 0.5, name: "0.5%" },
        { value: 1.5, name: "1.5%" },
        { value: 3, name: "3%" },
        { value: 1, name: "auto" },
    ];
    const { config } = useSquidStore();
    const changeSlippage = (value) => {
        useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { slippage: value }),
        });
    };
    return (_jsxs("div", Object.assign({ className: "tw-flex tw-flex-col tw-gap-2" }, { children: [_jsx(Box, Object.assign({ className: "tw-flex tw-h-[45px] tw-w-full tw-flex-row tw-items-center tw-px-4" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsx("span", Object.assign({ className: "tw-font-medium" }, { children: "Slippage" })), _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-2" }, { children: slippageOptions.map((slippageOption) => (_jsx("button", Object.assign({ type: "button", onClick: () => changeSlippage(slippageOption.value), className: clsx("tw-rounded-corner-btn tw-dsw-btn-sm tw-dsw-btn tw-h-6 tw-min-h-[1.5rem] tw-max-w-[105px] tw-items-center tw-border-none tw-px-2 tw-font-normal tw-outline-none", config.slippage === slippageOption.value
                                    ? "tw-dsw-btn-secondary tw-bg-secondary tw-text-secondary-content"
                                    : "tw-dsw-btn-secondary tw-bg-base-300 tw-text-base-content") }, { children: _jsx("span", Object.assign({ className: "tw-lowercase" }, { children: slippageOption.name })) }), slippageOption.value))) }))] })) })), _jsxs("span", Object.assign({ className: "tw-text-xs tw-text-neutral-content" }, { children: ["Slippage is the price variation you are willing to accept in the event that the price of the trade changes while it is processing. If the trade fails due to too-low slippage, you will receive axlUSDC on the destination chain.", " ", _jsx(TextLink, Object.assign({ href: squidSlippageToleranceLink }, { children: "Learn more" }))] }))] })));
};
//# sourceMappingURL=SlippageSettingsComponent.js.map