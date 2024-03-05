import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSwap } from "../../hooks/useSwap";
import { InfoComponent } from "../InfoComponent";
import { LoadingSkeleton } from "../LoadingSkeleton";
export const ServiceFees = ({ isLoading }) => {
    const { fromToken } = useSwap();
    return (_jsxs("li", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-justify-between" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", { children: "Service fees" }), _jsx(InfoComponent, { id: "service-fees", placement: "top-start", iconSize: 13, tooltipComponent: _jsx("span", Object.assign({ className: "tw-text-sm" }, { children: "Service fees are fees charged by the product that integrates Squid. Squid currently charges zero fees." })) })] })), isLoading ? (_jsx(LoadingSkeleton, { width: 90 })) : (_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-gap-2" }, { children: [_jsxs("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: ["0.00 ", fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol] })), _jsx("span", Object.assign({ className: "tw-flex tw-flex-row tw-text-neutral-content" }, { children: "$0.00" }))] })))] })));
};
//# sourceMappingURL=ServiceFees.js.map