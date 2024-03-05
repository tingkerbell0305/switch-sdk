import { jsx as _jsx } from "react/jsx-runtime";
import { squidSupportLink } from "../../core/externalLinks";
import { LightButton } from "./LightButton";
export const ContactSupportButton = () => {
    return (_jsx("span", Object.assign({ className: "tw-flex tw-flex-row" }, { children: _jsx("a", Object.assign({ target: "_blank", href: squidSupportLink, rel: "noreferrer" }, { children: _jsx(LightButton, Object.assign({ style: { minHeight: "28px" }, className: "tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: "Contact support" })) })) })));
};
//# sourceMappingURL=ContactSupportButton.js.map