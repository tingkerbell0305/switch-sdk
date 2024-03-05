import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiClock } from "react-icons/fi";
import { useEstimate } from "../../hooks/useEstimate";
import { LightButton } from "./LightButton";
export const TrackButton = ({ onClick, showEstimate = false, }) => {
    const { transactionTimeEstimate } = useEstimate();
    return (_jsx("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: _jsx(LightButton, Object.assign({ onClick: onClick, style: { minHeight: "28px" }, className: "tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx(FiClock, {}), _jsx("span", { children: "Track" }), showEstimate && _jsx("span", { children: ` ~${transactionTimeEstimate}` })] })) })) })));
};
//# sourceMappingURL=TrackButton.js.map