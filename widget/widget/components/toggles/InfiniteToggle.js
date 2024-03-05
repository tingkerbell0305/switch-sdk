import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable react-hooks/rules-of-hooks */
import { HiRefresh } from "react-icons/hi";
import { squidInfiniteApprovalLink } from "../../core/externalLinks";
import { useSquidStore } from "../../store/useSquidStore";
import { TextLink } from "../TextLink";
import { SettingsBaseToggle } from "./SettingsBaseToggle";
export const InfiniteToggle = ({ fadeOnLoad = false }) => {
    const { config } = useSquidStore();
    const changeInfiniteApproval = () => {
        useSquidStore.setState({
            config: Object.assign(Object.assign({}, config), { infiniteApproval: !config.infiniteApproval }),
        });
    };
    return (_jsx(SettingsBaseToggle, { title: "Infinite approval", description: _jsxs("span", Object.assign({ className: "" }, { children: ["When this is unchecked, we limit the amount that you approve the Squid Router contract to spend. This can improve your security in some cases.", " ", _jsx(TextLink, Object.assign({ href: squidInfiniteApprovalLink }, { children: "Learn more" }))] })), icon: HiRefresh, onChange: changeInfiniteApproval, fadeOnLoad: fadeOnLoad, iconSize: 17, checked: config === null || config === void 0 ? void 0 : config.infiniteApproval }));
};
//# sourceMappingURL=InfiniteToggle.js.map