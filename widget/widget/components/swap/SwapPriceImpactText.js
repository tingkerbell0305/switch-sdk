import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { useEstimate } from "../../hooks/useEstimate";
export const SwapPriceImpactText = () => {
    const { priceImpact, priceImpactStatus } = useEstimate();
    if (priceImpactStatus === undefined) {
        return null;
    }
    return (_jsx("div", Object.assign({ className: clsx("w-full justify-between tw-flex tw-flex-row tw-text-sm", priceImpactStatus === "critical" && "tw-text-error", priceImpactStatus === "warning" && "tw-text-warning", priceImpactStatus === "normal" && "tw-text-success") }, { children: _jsxs("span", { children: ["(", priceImpact, "%)"] }) })));
};
//# sourceMappingURL=SwapPriceImpactText.js.map