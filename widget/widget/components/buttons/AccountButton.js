import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { FaHistory } from "react-icons/fa";
import { subTransparentClass } from "../../core/constants";
import { routes } from "../../core/routes";
import { useSquidStore } from "../../store/useSquidStore";
import { RouterLink } from "../RouterLink";
import { IconButton } from "./IconButton";
export const AccountButton = () => {
    var _a, _b;
    const { config } = useSquidStore();
    return (_jsx(RouterLink, Object.assign({ to: routes.history }, { children: _jsx(IconButton, { hoverEffect: false, border: false, icon: FaHistory, size: 16, className: clsx("tw-bg-base-200 tw-p-2 tw-text-neutral-content", ((_b = (_a = config.style) === null || _a === void 0 ? void 0 : _a.advanced) === null || _b === void 0 ? void 0 : _b.transparentWidget) && subTransparentClass) }) })));
};
//# sourceMappingURL=AccountButton.js.map