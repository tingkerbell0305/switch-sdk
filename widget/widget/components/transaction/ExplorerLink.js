import { jsx as _jsx } from "react/jsx-runtime";
import { AiOutlineLink } from "react-icons/ai";
export const ExplorerLink = ({ explorerUrl, height = 15, externalExplorerImageUrl, }) => {
    return (_jsx("div", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: _jsx("a", Object.assign({ className: "tw-flex tw-flex-row tw-items-center", target: "_blank", rel: "noreferrer", href: explorerUrl }, { children: _jsx("button", Object.assign({ type: "button", className: "tw-flex tw-items-center" }, { children: _jsx(AiOutlineLink, { className: "tw-font-normal tw-text-neutral-content", color: "tw-text-neutral", size: height * 1.2 }) })) })) })));
};
//# sourceMappingURL=ExplorerLink.js.map