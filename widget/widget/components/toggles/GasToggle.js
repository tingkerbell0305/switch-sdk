import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import { RiGasStationFill } from "react-icons/ri";
import { useSquidStore } from "../../store/useSquidStore";
import { SettingsBaseToggle } from "./SettingsBaseToggle";
export const GasToggle = ({ fadeOnLoad = false, allowTransparency = true }) => {
    const { config } = useSquidStore();
    const changeGetGasOnDestination = () => {
        useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { enableGetGasOnDestination: !config.enableGetGasOnDestination }),
        });
    };
    return (_jsx(SettingsBaseToggle, { title: "Arrival gas", description: " Swap some of your tokens for gas on the destination chain.", icon: RiGasStationFill, onChange: changeGetGasOnDestination, fadeOnLoad: fadeOnLoad, allowTransparency: allowTransparency, checked: config === null || config === void 0 ? void 0 : config.enableGetGasOnDestination }));
};
//# sourceMappingURL=GasToggle.js.map