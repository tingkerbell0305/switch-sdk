import { jsx as _jsx } from "react/jsx-runtime";
import { RiGasStationFill } from "react-icons/ri";
import { useUserParams } from "../../hooks/useUserParams";
import { BadgeWithIcon } from "./Badge";
export const GasBadge = ({ onClick }) => {
    const { gasEnabled } = useUserParams();
    return (_jsx(BadgeWithIcon, Object.assign({ backgroundClass: gasEnabled ? "tw-bg-success" : "tw-bg-neutral-content", textClass: gasEnabled ? "tw-text-success" : "tw-text-neutral-content", iconSize: 22, maxHeight: 22, icon: RiGasStationFill, onClick: onClick }, { children: _jsx("span", { children: gasEnabled ? "ON" : "OFF" }) })));
};
//# sourceMappingURL=GasBadge.js.map