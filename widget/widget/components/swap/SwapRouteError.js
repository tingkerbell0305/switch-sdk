import { jsx as _jsx } from "react/jsx-runtime";
import { getSquidRouteErrorMessage } from "../../services/internal/errorService";
export const SwapRouteError = ({ error }) => {
    var _a, _b, _c;
    const axiosError = error;
    const squidError = (_a = axiosError === null || axiosError === void 0 ? void 0 : axiosError.response) === null || _a === void 0 ? void 0 : _a.data;
    const errorMessage = getSquidRouteErrorMessage(((_c = (_b = squidError === null || squidError === void 0 ? void 0 : squidError.errors) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0 ? squidError.errors[0] : undefined);
    return (_jsx("div", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-text-xs tw-text-error tw-line-clamp-3" }, { children: _jsx("span", { children: errorMessage }) })));
};
//# sourceMappingURL=SwapRouteError.js.map