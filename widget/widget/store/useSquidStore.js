import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultValues } from "../core/constants";
export const useSquidStore = create((_) => defaultValues);
export const useSquidRouterStore = create((_) => ({
    history: [
        {
            route: {
                id: "swap",
                path: "/",
                title: "Swap",
                headerButtons: ["settings", "history"],
            },
        },
    ],
}));
/**
 * Persist the store in local storage
 * So the user can refresh the page and still see his old transactions
 */
export const usePersistStore = create(persist((_) => {
    return {
        transactionsHistory: [],
    };
}, {
    name: "squid.history.store",
}));
export const useSwapRoutePersistStore = create(persist((_) => {
    return {
        swapRoute: undefined,
    };
}, {
    name: "squid.swaproute.store",
}));
//# sourceMappingURL=useSquidStore.js.map