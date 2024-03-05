import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { SQUID_WIDGET_VERSION } from "../../squidWidgetVersion";
import { SettingsFiatOnRamp } from "../components/SettingsFiatOnRamp";
import { SlippageSettingsComponent } from "../components/SlippageSettingsComponent";
import { ExpressToggle } from "../components/toggles/ExpressToggle";
import { GasToggle } from "../components/toggles/GasToggle";
import { InfiniteToggle } from "../components/toggles/InfiniteToggle";
import { useSquidStore } from "../store/useSquidStore";
export const SettingsView = () => {
    var _a, _b;
    const { config } = useSquidStore();
    return (_jsxs("div", Object.assign({ className: clsx("tw-flex tw-h-full tw-flex-col tw-justify-between tw-overflow-auto", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-70") }, { children: [_jsxs("div", Object.assign({ className: "tw-flex tw-h-full tw-flex-1 tw-flex-col tw-gap-4 tw-px-4 tw-pb-4 tw-text-base" }, { children: [_jsx(ExpressToggle, {}), _jsx(GasToggle, {}), _jsx(SlippageSettingsComponent, {}), _jsx(InfiniteToggle, {}), config.showOnRampLink && _jsx(SettingsFiatOnRamp, {})] })), _jsxs("div", Object.assign({ className: " tw-mb-2  tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-text-xs tw-text-neutral-content" }, { children: ["v", SQUID_WIDGET_VERSION.toString()] }))] })));
};
//# sourceMappingURL=SettingsView.js.map