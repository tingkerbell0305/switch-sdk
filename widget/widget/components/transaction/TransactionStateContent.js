import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimationWrapper } from "../AnimationWrapper";
export const TransactionStateContent = ({ title, children, animation, animReplacement, }) => {
    return (_jsxs("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center" }, { children: [_jsx(AnimationWrapper, { lottieJsonFile: animation, animReplacement: animReplacement }), _jsx("span", Object.assign({ className: "tw-text-base tw-font-semibold", style: {
                    fontSize: "24px",
                    marginTop: "24px",
                    marginBottom: "10px",
                } }, { children: title })), _jsx("span", Object.assign({ className: "tw-text-center tw-text-sm tw-text-neutral-content" }, { children: children }))] })));
};
//# sourceMappingURL=TransactionStateContent.js.map