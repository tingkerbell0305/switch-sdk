import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineMinusCircle, AiOutlinePlusCircle, } from "react-icons/ai";
import { useSquidStore } from "../store/useSquidStore";
import { InfoComponent } from "./InfoComponent";
export const AddGasDestination = ({ addGasEnabled, selectedChain, selectedToken, }) => {
    const { config } = useSquidStore();
    const toggleAddGas = () => {
        useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { enableGetGasOnDestination: !config.enableGetGasOnDestination }),
        });
    };
    if (addGasEnabled) {
        return (_jsx(InfoComponent, { id: "gas-dest-toggle", placement: "left", tooltipOffset: 0, tooltipComponent: _jsxs("span", Object.assign({ className: "tw-flex tw-text-sm" }, { children: ["Remove ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.nativeCurrency.symbol, " on", " ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainName, " and swap the entire amount to $", selectedToken === null || selectedToken === void 0 ? void 0 : selectedToken.symbol, "."] })), baseHoverComponent: null, baseComponent: _jsxs("button", Object.assign({ onClick: toggleAddGas, type: "button", className: "tw-group tw-flex tw-flex-row tw-items-center tw-gap-0.5 tw-text-sm hover:tw-underline" }, { children: [_jsx("span", { children: "Remove gas" }), _jsx("span", Object.assign({ className: "tw-visible group-hover:tw-hidden" }, { children: _jsx(AiOutlineMinusCircle, { size: 12 }) })), _jsx("span", Object.assign({ className: "tw-hidden group-hover:tw-inline-block" }, { children: _jsx(AiFillMinusCircle, { size: 12 }) }))] })) }));
    }
    return (_jsx(InfoComponent, { id: "gas-dest-toggle", placement: "left", tooltipOffset: 0, tooltipComponent: _jsxs("span", Object.assign({ className: "tw-flex tw-text-sm" }, { children: ["Swap some of your tokens for ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.nativeCurrency.symbol, " to pay for transactions on ", selectedChain === null || selectedChain === void 0 ? void 0 : selectedChain.chainName, "."] })), baseHoverComponent: null, baseComponent: _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-0.5" }, { children: _jsxs("button", Object.assign({ onClick: toggleAddGas, type: "button", className: "tw-group tw-flex tw-flex-row tw-items-center tw-gap-0.5 tw-text-sm hover:tw-underline" }, { children: [_jsx("span", { children: "Add gas" }), _jsx("span", Object.assign({ className: "tw-visible group-hover:tw-hidden" }, { children: _jsx(AiOutlinePlusCircle, { size: 12 }) })), _jsx("span", Object.assign({ className: "tw-hidden group-hover:tw-inline-block" }, { children: _jsx(AiFillPlusCircle, { size: 12 }) }))] })) })) }));
};
//# sourceMappingURL=AddGasDestination.js.map