import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Player } from "@lottiefiles/react-lottie-player";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useSquidStore } from "../store/useSquidStore";
const AnimReplacementWrapper = ({ children }) => {
    return (_jsx("span", Object.assign({ className: "tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center" }, { children: _jsx("span", Object.assign({ className: "tw-text-secondary-content", style: { width: "60px", height: "60px" } }, { children: children })) })));
};
export const AnimationWrapper = ({ lottieJsonFile, animReplacement, }) => {
    const [display, setDisplay] = useState(false);
    const { config } = useSquidStore();
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
        }, 250);
    }, []);
    return (_jsxs("div", Object.assign({ style: {
            width: "180px",
            height: "180px",
            background: "hsl(var(--s))",
            borderRadius: "32px",
            display: "flex",
            alignItems: "center",
        }, className: clsx("tw-transition-all", display ? "tw-opacity-100" : "tw-opacity-0") }, { children: [!config.hideAnimations && (_jsx(Player, { style: { height: 150 }, autoplay: true, loop: true, src: lottieJsonFile })), config.hideAnimations && animReplacement !== undefined && (_jsx(AnimReplacementWrapper, { children: animReplacement }))] })));
};
//# sourceMappingURL=AnimationWrapper.js.map