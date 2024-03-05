import { jsx as _jsx } from "react/jsx-runtime";
import ContentLoader from "react-content-loader";
import { useTheme } from "../hooks/useTheme";
import { randomIntFromInterval } from "../services/internal/configService";
export const LoadingSkeleton = ({ hasRandomWidth = false, width = 50, height = 10, }) => {
    const { isGlobalDark } = useTheme();
    const componentWidth = hasRandomWidth
        ? randomIntFromInterval(width - width / 2, width + width / 2)
        : width;
    return (_jsx(ContentLoader, Object.assign({ backgroundColor: isGlobalDark ? "#888888" : "#F3F3F3", foregroundColor: isGlobalDark ? "#626060" : "#ECEBEB", width: componentWidth, height: height, viewBox: `0 0 ${componentWidth} ${height}` }, { children: _jsx("rect", { x: "0", y: "0", rx: "3", ry: "3", width: componentWidth, height: height }) })));
};
//# sourceMappingURL=LoadingSkeleton.js.map