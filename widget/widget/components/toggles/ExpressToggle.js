import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import { HiLightningBolt } from "react-icons/hi";
import { useSquidStore } from "../../store/useSquidStore";
import { SettingsBaseToggle } from "./SettingsBaseToggle";
export const ExpressToggle = ({ fadeOnLoad = false, allowTransparency = true, }) => {
    const { config } = useSquidStore();
    const changeExpress = () => {
        useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { enableExpress: !config.enableExpress }),
        });
    };
    return (_jsx(SettingsBaseToggle, { title: "Boost", description: "Boost (GMP Express) is a special feature of Axelar and Squid that reduces transaction time across chains to 5-30 seconds. It is currently available for swaps below a value of $20,000 USD.", icon: HiLightningBolt, iconSize: 13, onChange: changeExpress, fadeOnLoad: fadeOnLoad, checked: config === null || config === void 0 ? void 0 : config.enableExpress, allowTransparency: allowTransparency }));
};
//# sourceMappingURL=ExpressToggle.js.map