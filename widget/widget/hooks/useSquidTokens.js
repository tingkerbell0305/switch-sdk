import { useMemo } from "react";
import { useSquidStore } from "../store/useSquidStore";
export const useSquidTokens = () => {
    const { squid } = useSquidStore();
    const fuseSearchOptions = {
        isCaseSensitive: false,
        threshold: 0.1,
        findAllMatches: false,
        includeMatches: true,
        keys: [
            {
                name: "symbol",
                weight: 1, // highest relevance
            },
            {
                name: "name",
                weight: 0.8, // slightly less relevance than symbol
            },
            {
                name: "address",
                weight: 0.6, // even less relevance
            },
        ],
    };
    const tokens = useMemo(() => {
        // Remove tokens with same chainId and address
        const uniqueTokens = squid === null || squid === void 0 ? void 0 : squid.tokens.filter((token, index, self) => index ===
            self.findIndex((t) => t.chainId === token.chainId && t.address === token.address));
        return uniqueTokens !== null && uniqueTokens !== void 0 ? uniqueTokens : [];
    }, [squid === null || squid === void 0 ? void 0 : squid.tokens]);
    return { tokens, fuseSearchOptions };
};
//# sourceMappingURL=useSquidTokens.js.map