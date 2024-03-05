import { jsx as _jsx } from "react/jsx-runtime";
import { formatSeconds } from "../services/internal/transactionService";
export const EstimateTime = ({ seconds }) => {
    const duration = formatSeconds(seconds);
    return _jsx("span", { children: duration });
};
//# sourceMappingURL=EstimateTime.js.map