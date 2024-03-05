import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { useTheme } from "../../../hooks/useTheme";
export const AxelarIcon = ({ height = 15 }) => {
    const { isGlobalDark } = useTheme();
    return (_jsx("svg", Object.assign({ version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: "auto", height: height, viewBox: "0 0 64.000000 64.000000", className: clsx(isGlobalDark && "tw-invert") }, { children: _jsxs("g", Object.assign({ transform: "translate(0.000000,64.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none" }, { children: [_jsx("path", { d: "M127 602 l-37 -38 103 -102 c74 -74 109 -102 127 -102 18 0 53 28\n    127 102 l103 102 -37 38 -37 38 -78 -77 -78 -78 -78 78 -78 77 -37 -38z" }), _jsx("path", { d: "M38 513 l-38 -38 77 -77 78 -78 -78 -78 -77 -78 38 -37 38 -37 107\n    108 c59 60 107 115 107 122 0 7 -48 62 -107 122 l-108 108 -37 -37z" }), _jsx("path", { d: "M462 447 c-74 -74 -102 -109 -102 -127 0 -18 28 -53 102 -127 l102\n    -103 38 37 38 37 -77 78 -78 78 80 80 c43 44 77 81 74 82 -2 2 -20 18 -39 35\n    l-36 33 -102 -103z" }), _jsx("path", { d: "M198 183 l-108 -107 34 -34 c41 -41 45 -40 136 52 l64 66 78 -77 78\n    -78 38 38 37 38 -107 104 c-58 58 -114 105 -124 105 -9 0 -66 -48 -126 -107z" })] })) })));
};
//# sourceMappingURL=AxelarIcon.js.map