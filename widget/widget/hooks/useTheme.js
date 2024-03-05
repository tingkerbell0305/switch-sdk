import { useMemo } from "react";
import { isColorDark } from "../services/internal/colorService";
import { useSquidStore } from "../store/useSquidStore";
export const useTheme = () => {
    const { config } = useSquidStore();
    const isHeaderDark = useMemo(() => { var _a; return isColorDark((_a = config.style) === null || _a === void 0 ? void 0 : _a.neutral); }, [config]);
    // If base content (text)
    // Is light, means that the mains backgrounds are dark
    const isGlobalDark = useMemo(() => { var _a; return !isColorDark((_a = config.style) === null || _a === void 0 ? void 0 : _a.baseContent); }, [config.style]);
    return { isHeaderDark, isGlobalDark };
};
//# sourceMappingURL=useTheme.js.map