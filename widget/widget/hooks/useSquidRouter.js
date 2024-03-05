import { useMemo } from "react";
import { useSquidRouterStore, useSquidStore } from "../store/useSquidStore";
export const useSquidRouter = () => {
    const { config } = useSquidStore();
    const { history } = useSquidRouterStore();
    const switchRoute = (route, params, addRouteToHistory = true) => {
        const currentHistory = useSquidRouterStore.getState().history;
        if (addRouteToHistory) {
            useSquidRouterStore.setState({
                history: [...currentHistory, { route, params }],
            });
        }
        else {
            useSquidRouterStore.setState({
                history: [...currentHistory.slice(0, -1), { route, params }],
            });
        }
    };
    const previousRoute = () => {
        const currentHistory = useSquidRouterStore.getState().history;
        currentHistory.pop();
        useSquidRouterStore.setState({
            history: currentHistory,
        });
    };
    const currentRoute = history[history.length - 1].route;
    const currentRouteParams = history[history.length - 1].params;
    const configRouteTitleSet = useMemo(() => {
        var _a, _b;
        if (config.titles !== undefined) {
            return (_b = (_a = config.titles) === null || _a === void 0 ? void 0 : _a[currentRoute.id]) !== null && _b !== void 0 ? _b : undefined;
        }
        return undefined;
    }, [config.titles, currentRoute]);
    const currentRouteTitle = useMemo(() => { var _a; return (_a = configRouteTitleSet !== null && configRouteTitleSet !== void 0 ? configRouteTitleSet : currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.title) !== null && _a !== void 0 ? _a : "Squid"; }, [currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.title, configRouteTitleSet]);
    return {
        currentRoute,
        currentRouteTitle,
        switchRoute,
        previousRoute,
        currentRouteParams,
    };
};
//# sourceMappingURL=useSquidRouter.js.map