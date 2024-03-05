import { ChainType } from "@0xsquid/sdk";
import { get } from "lodash";
import { defaultValues } from "../../core/constants";
export const getConfigWithDefaults = (config) => {
    return {
        integratorId: get(config, "integratorId", defaultValues.config.integratorId),
        companyName: get(config, "companyName", defaultValues.config.companyName),
        slippage: get(config, "slippage", defaultValues.config.slippage),
        style: get(config, "style", defaultValues.config.style),
        titles: get(config, "titles", defaultValues.config.titles),
        advanced: get(config, "advanced", defaultValues.config.advanced),
        internalSameChainSwapAllowed: get(config, "internalSameChainSwapAllowed", defaultValues.config.internalSameChainSwapAllowed),
        hideAnimations: get(config, "hideAnimations", defaultValues.config.hideAnimations),
        infiniteApproval: get(config, "infiniteApproval", defaultValues.config.infiniteApproval),
        enableExpress: get(config, "enableExpress", defaultValues.config.enableExpress),
        collectFees: get(config, "collectFees", defaultValues.config.collectFees),
        enableGetGasOnDestination: get(config, "enableGetGasOnDestination", defaultValues.config.enableGetGasOnDestination),
        apiUrl: get(config, "apiUrl", defaultValues.config.apiUrl),
        showOnRampLink: get(config, "showOnRampLink", defaultValues.config.showOnRampLink),
        priceImpactWarnings: get(config, "priceImpactWarnings", defaultValues.config.priceImpactWarnings),
        initialFromChainId: get(config, "initialFromChainId", defaultValues.config.initialFromChainId),
        initialToChainId: get(config, "initialToChainId", defaultValues.config.initialToChainId),
        defaultTokens: get(config, "defaultTokens", defaultValues.config.defaultTokens),
        mainLogoUrl: get(config, "mainLogoUrl", defaultValues.config.mainLogoUrl),
        loadPreviousStateFromLocalStorage: get(config, "loadPreviousStateFromLocalStorage", defaultValues.config.loadPreviousStateFromLocalStorage),
        preferDex: get(config, "preferDex", defaultValues.config.preferDex),
        favTokens: get(config, "favTokens", defaultValues.config.favTokens),
        comingSoonChainIds: get(config, "comingSoonChainIds", defaultValues.config.comingSoonChainIds),
        availableChains: get(config, "availableChains", defaultValues.config.availableChains),
    };
};
export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getTokensForChain = (tokens, chainId) => {
    return chainId ? tokens.filter((t) => t.chainId === chainId) : tokens;
};
export const getFirstAvailableChainId = (usedChain, config, direction, chains = []) => {
    const filteredChains = chains.filter((c) => {
        var _a;
        return c.chainId !== usedChain &&
            !((_a = config.comingSoonChainIds) === null || _a === void 0 ? void 0 : _a.find((id) => id === c.chainId));
    });
    if (direction === "from" &&
        config.initialFromChainId &&
        config.initialFromChainId !== usedChain) {
        return config.initialFromChainId;
    }
    if (direction === "to" &&
        config.initialToChainId &&
        config.initialToChainId !== usedChain) {
        return config.initialToChainId;
    }
    return filteredChains.length > 0 ? filteredChains[0].chainId : undefined;
};
export const getDefaultTokenAddressForChain = (tokens, config, chainId) => {
    var _a;
    const chainIdDefaultToken = (_a = config.defaultTokens) === null || _a === void 0 ? void 0 : _a.find((token) => token.chainId == chainId);
    if (chainIdDefaultToken) {
        return chainIdDefaultToken.address;
    }
    const filteredTokens = chainId
        ? tokens.filter((t) => t.chainId === chainId)
        : tokens;
    return filteredTokens.length > 0 ? filteredTokens[0].address : undefined;
};
/**
 * Filter tokens for destination chain
 *
 * Case 1: fromToken.bridgeOnly = true
 * Destination token list shows only tokens with the same commonKey as fromToken
 *
 * Case 2: fromToken.bridgeOnly = false
 * Destination token list shows all tokens with bridgeOnly = false
 * OR Destination token list shows all tokens with the same commonKey as fromToken
 * @param tokens
 * @param selectedDestinationChain
 * @param selectedSourceChainID
 * @param selectedSourceToken
 * @returns
 */
export const filterTokensForDestination = (tokens, selectedDestinationChain, selectedSourceToken) => {
    let filteredTokens = [];
    if (selectedSourceToken === null || selectedSourceToken === void 0 ? void 0 : selectedSourceToken.bridgeOnly) {
        filteredTokens = tokens.filter((t) => t.commonKey === selectedSourceToken.commonKey &&
            t.chainId === (selectedDestinationChain === null || selectedDestinationChain === void 0 ? void 0 : selectedDestinationChain.chainId));
    }
    filteredTokens = tokens.filter((t) => !t.bridgeOnly || t.commonKey === (selectedSourceToken === null || selectedSourceToken === void 0 ? void 0 : selectedSourceToken.commonKey));
    // We don't want to show the same source token & chain in the destination list
    // except for Cosmos swaps
    return filteredTokens.filter((t) => {
        const areSameToken = t.address === (selectedSourceToken === null || selectedSourceToken === void 0 ? void 0 : selectedSourceToken.address) &&
            t.chainId === selectedSourceToken.chainId;
        const isCosmosSwap = (selectedDestinationChain === null || selectedDestinationChain === void 0 ? void 0 : selectedDestinationChain.chainType) === ChainType.Cosmos;
        return isCosmosSwap || !areSameToken;
    });
};
//# sourceMappingURL=configService.js.map