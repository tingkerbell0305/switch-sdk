import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEstimate } from "../../hooks/useEstimate";
import { EstimateTime } from "../EstimateTime";
import { LoadingSkeleton } from "../LoadingSkeleton";
export const EstimatedProcessingTime = ({ isLoading, }) => {
    const { estimatedRouteDuration } = useEstimate();
    return (_jsxs("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsx("span", { children: "Estimated processing time" }), isLoading ? (_jsx(LoadingSkeleton, { width: 70 })) : (_jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-3" }, { children: estimatedRouteDuration !== undefined ? (_jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-justify-between tw-text-sm" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", { children: "~" }), _jsx(EstimateTime, { seconds: estimatedRouteDuration })] })) }))) : (_jsx("span", { children: "-" })) })))] })));
};
//# sourceMappingURL=EstimatedProcessingTime.js.map