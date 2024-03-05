import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BiTimer } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";
import { useEstimate } from "../../hooks/useEstimate";
import { BadgeWithIcon } from "./Badge";
export const BoostBadge = ({ onClick }) => {
    const { transactionTimeEstimate, expressActivatedUI } = useEstimate();
    return (_jsx(BadgeWithIcon, Object.assign({ backgroundClass: expressActivatedUI ? "tw-bg-success" : "tw-bg-neutral-content", textClass: expressActivatedUI ? "tw-text-success" : "tw-text-neutral-content", iconSize: expressActivatedUI ? 22 : 24, maxHeight: 22, icon: expressActivatedUI ? HiLightningBolt : BiTimer, onClick: onClick }, { children: _jsxs("span", { children: [expressActivatedUI ? "Boost" : "Normal", _jsxs("span", Object.assign({ className: "tw-ml-1 tw-font-normal" }, { children: [_jsx("span", Object.assign({ style: { position: "relative", top: "0.25rem" } }, { children: "\u02DC" })), transactionTimeEstimate] })), " "] }) })));
};
//# sourceMappingURL=BoostBadge.js.map