import { jsx as _jsx } from "react/jsx-runtime";
import { useSquidStore } from "../store/useSquidStore";
const defaultMaintenanceMessage = "Squid is under maintenance, please refresh this page later.";
export const MaintenanceLayout = () => {
    var _a;
    const { squid } = useSquidStore();
    const maintenanceMessage = (_a = squid === null || squid === void 0 ? void 0 : squid.maintenanceMessage) !== null && _a !== void 0 ? _a : defaultMaintenanceMessage;
    return (_jsx("span", Object.assign({ className: "tw-pointer-events-none tw-z-50 tw-flex tw-flex-row tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-80 tw-p-4 tw-text-center tw-text-xl tw-text-white", style: {
            position: "absolute",
            width: "100%",
            height: "100%",
        } }, { children: maintenanceMessage })));
};
//# sourceMappingURL=MaintenanceLayout.js.map