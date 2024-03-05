import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { formatWalletAddress } from "../services/internal/walletService";
import { ImageWrapper } from "./ImageWrapper";
export const ChainAddressBadge = ({ walletAddress, chainIconUrl }) => {
    const addressLabel = useMemo(() => formatWalletAddress(walletAddress), [walletAddress]);
    return (_jsxs("span", Object.assign({ className: "tw-rounded-box tw-flex tw-flex-row tw-items-center tw-gap-2 tw-bg-base-100 tw-px-3 tw-py-1" }, { children: [_jsx(ImageWrapper, { className: "tw-h-5 tw-w-5", src: chainIconUrl, alt: "" }), _jsx("span", { children: addressLabel })] })));
};
//# sourceMappingURL=ChainAddressBadge.js.map