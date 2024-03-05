import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { logos } from "../assets/images/logos";
import { useTheme } from "../hooks/useTheme";
import { useSquidStore } from "../store/useSquidStore";
import { ImageWrapper } from "./ImageWrapper";
export const HeaderLogo = ({ height = 36 }) => {
    const { isHeaderDark } = useTheme();
    const { config } = useSquidStore();
    const isLogoDefined = config.mainLogoUrl !== undefined;
    // Some partners wanted to hide the logo
    if (config.mainLogoUrl === "") {
        return null;
    }
    return (_jsx(ImageWrapper, { alt: "squid logo", src: isLogoDefined ? config.mainLogoUrl : logos.squidLogoDark, className: clsx("aspect-square tw-w-auto", !isLogoDefined && isHeaderDark && "tw-invert"), style: { height } }));
};
//# sourceMappingURL=HeaderLogo.js.map