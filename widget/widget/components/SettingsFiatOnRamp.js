import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiExternalLink } from "react-icons/hi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { defaultFiatOnRamp } from "../core/externalLinks";
import { TextLink } from "./TextLink";
import { SettingsBaseBox } from "./toggles/SettingsBaseToggle";
export const SettingsFiatOnRamp = () => {
    return (_jsx(SettingsBaseBox, Object.assign({ icon: MdOutlineAccountBalanceWallet, iconSize: 18, title: "Fiat on ramp", description: _jsx("span", { children: _jsxs("span", { children: ["Buy crypto on any chain right now with", " ", _jsx(TextLink, Object.assign({ className: "tw-text-xs", href: defaultFiatOnRamp.link }, { children: defaultFiatOnRamp.name })), ", powered by Squid"] }) }) }, { children: _jsxs("a", Object.assign({ className: "tw-flex tw-items-center tw-gap-1 tw-font-medium tw-text-primary hover:tw-underline", href: defaultFiatOnRamp.link, target: "_blank", rel: "noreferrer" }, { children: [_jsx("span", { children: "Buy" }), _jsx(HiExternalLink, { size: 18 })] })) })));
};
//# sourceMappingURL=SettingsFiatOnRamp.js.map