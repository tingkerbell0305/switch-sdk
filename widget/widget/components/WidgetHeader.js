import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { widgetHeaderSize } from "../core/constants";
import { useSquidRouter } from "../hooks/useSquidRouter";
import { useSquidStore } from "../store/useSquidStore";
import { AccountButton } from "./buttons/AccountButton";
import { BackButton } from "./buttons/BackButton";
import { SettingsButton } from "./buttons/SettingsButton";
export const WidgetHeader = () => {
    var _a, _b, _c, _d, _e, _f;
    const { currentRoute, currentRouteTitle: title } = useSquidRouter();
    const { config } = useSquidStore();
    return (_jsxs("div", Object.assign({ style: {
            height: widgetHeaderSize.height,
            paddingTop: widgetHeaderSize.paddingY,
            paddingBottom: widgetHeaderSize.paddingY,
        }, id: "squid-widget-header", className: clsx("tw-rounded-t-box tw-flex tw-flex-row tw-items-center tw-justify-between tw-px-4", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && "tw-bg-opacity-[0.85]") }, { children: [_jsx("span", Object.assign({ id: "squid-header-logo", className: "tw-flex tw-min-w-[65px] tw-flex-row tw-items-center tw-justify-start" }, { children: (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) && (_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-3 tw-text-sm" }, { children: ((_c = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) === null || _c === void 0 ? void 0 : _c.find((hb) => hb === "back")) && (_jsx(BackButton, {})) }))) })), _jsx("span", Object.assign({ id: "squid-header-title", className: "tw-text-xl tw-font-semibold", style: { color: (_d = config.style) === null || _d === void 0 ? void 0 : _d.baseContent } }, { children: title })), _jsx("span", Object.assign({ className: "tw-flex tw-min-w-[65px] tw-flex-row tw-items-center tw-justify-end" }, { children: (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) && (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-3 tw-text-sm" }, { children: [((_e = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) === null || _e === void 0 ? void 0 : _e.find((hb) => hb === "history")) && (_jsx(AccountButton, {})), ((_f = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.headerButtons) === null || _f === void 0 ? void 0 : _f.find((hb) => hb === "settings")) && (_jsx(SettingsButton, {}))] }))) }))] })));
};
//# sourceMappingURL=WidgetHeader.js.map