import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { squidTheme, transparentClass, widgetHeight, widgetWidth, } from "../core/constants";
import { AppRoutes } from "../core/routes";
import { useAutoConnect } from "../hooks/useAutoConnect";
import { getParsedStyle } from "../services/internal/colorService";
import { useSquidStore } from "../store/useSquidStore";
import { MaintenanceLayout } from "./MaintenanceLayout";
import { WidgetHeader } from "./WidgetHeader";
export const SquidApp = ({ configStyle }) => {
    var _a;
    const parsedStyle = getParsedStyle(configStyle !== null && configStyle !== void 0 ? configStyle : squidTheme);
    // Instead of having wagmi auto connect, we will do it manually
    // Wa want to have Gnosis Safe app connect in priority if it is available
    useAutoConnect();
    const { squid } = useSquidStore();
    // Coming from the api, it can be a string like "true" | "false"
    const isInMaintenanceMode = (squid === null || squid === void 0 ? void 0 : squid.isInMaintenanceMode) === "true" ||
        (squid === null || squid === void 0 ? void 0 : squid.isInMaintenanceMode) === true;
    return (_jsxs("div", Object.assign({ id: "squid-widget", style: {
            minHeight: widgetHeight,
            width: "100%",
        } }, { children: [_jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }), _jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap", rel: "stylesheet" }), _jsxs("div", Object.assign({ style: Object.assign(Object.assign({}, parsedStyle), { maxWidth: widgetWidth, maxHeight: widgetHeight, height: widgetHeight, minHeight: widgetHeight, pointerEvents: isInMaintenanceMode ? "none" : "auto" }), className: clsx("tw-rounded-box tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-4 tw-overflow-hidden tw-bg-neutral tw-font-inter tw-text-base-content", ((_a = configStyle === null || configStyle === void 0 ? void 0 : configStyle.advanced) === null || _a === void 0 ? void 0 : _a.transparentWidget) && transparentClass) }, { children: [isInMaintenanceMode && _jsx(MaintenanceLayout, {}), _jsx(WidgetHeader, {}), _jsx(AppRoutes, {})] }))] })));
};
//# sourceMappingURL=SquidApp.js.map