import { jsx as _jsx } from "react/jsx-runtime";
import { CgSpinnerTwo } from "react-icons/cg";
export const Loader = ({ size = 20 }) => {
    return (_jsx("div", Object.assign({ className: "tw-flex tw-flex-row tw-items-center" }, { children: _jsx("div", Object.assign({ className: "tw-animate-spin" }, { children: _jsx(CgSpinnerTwo, { size: size, className: "tw-text-secondary" }) })) })));
};
//# sourceMappingURL=Loader.js.map