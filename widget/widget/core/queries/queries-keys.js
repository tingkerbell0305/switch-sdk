import { ChainType } from "@0xsquid/sdk";
/**
 * Cache keys implementation for react-query caching / invalidating
 * For example if you invalidate a top level query, all its child will be invalidated, e.g "all" key
 * @returns Query Keys array
 */
export const keys = ({ address, apiUrl, }) => ({
    all: [address, apiUrl, "all"],
    // Chains
    chains: () => [...keys({ apiUrl, address }).all, apiUrl, "chains"],
    // Tokens
    tokens: () => [...keys({ apiUrl, address }).all, apiUrl, "tokens"],
    tokensForChain: (chainId) => [
        ...keys({ apiUrl, address }).tokens(),
        chainId,
        "tokensForChain",
    ],
    tokensPrice: (swapRoute) => [
        ...keys({ apiUrl, address }).tokens(),
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
        swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
        "tokensPrice",
    ],
    singleTokenPrice: (tokenAddress, chainId) => [
        ...keys({ apiUrl, address }).tokens(),
        tokenAddress,
        chainId,
        "singleTokenPrice",
    ],
    axelarTokens: () => [...keys({ apiUrl }).tokens(), "axelarTokens"],
    // Balances
    balances: () => [...keys({ apiUrl, address }).all, "balances"],
    balance: (chainId, tokenAddress, userAddress, chainType = ChainType.EVM) => [
        ...keys({ apiUrl, address }).balances(),
        address,
        chainId,
        tokenAddress,
        chainType,
        userAddress,
        "balance",
    ],
    nativeBalanceBigNumber: (chainId, tokenAddress, chainType = ChainType.EVM) => [
        ...keys({ apiUrl, address }).balances(),
        address,
        chainId,
        tokenAddress,
        chainType,
        "nativeBalance",
    ],
    tokensBalanceForChain: (chainType, chainId) => [
        ...keys({ apiUrl, address }).balances(),
        address,
        chainId,
        chainType,
        "tokensBalanceForChain",
    ],
    allTokensBalance: (direction) => [
        ...keys({ apiUrl, address }).balances(),
        address,
        direction,
        "allTokensBalance",
    ],
    allTokensPriceUSDAndBalance: () => [
        ...keys({ apiUrl, address }).balances(),
        address,
        "allTokensPriceUSDAndBalance",
    ],
    // Transactions
    transactions: () => [...keys({ apiUrl, address }).all, "transactions"],
    transaction: (swapDirection, price, slippage, infiniteApproval, getGasOnDestination, expressEnabled, sourceUserAddress) => [
        ...keys({ apiUrl, address }).transactions(),
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toTokenAddress,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromTokenAddress,
        price,
        slippage,
        infiniteApproval,
        getGasOnDestination,
        expressEnabled,
        sourceUserAddress,
        "transaction",
    ],
    transactionStatus: (currentTransaction) => [
        ...keys({ apiUrl, address }).transactions(),
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.routeType,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status,
        "transactionStatus",
    ],
    transactionStatusRefetcher: (currentTransaction) => [
        ...keys({ apiUrl, address }).transactions(),
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.routeType,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId,
        currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.status,
        "transactionStatusRefetcher",
    ],
    routeApproved: (swapDirection, sender, routeData) => [
        ...keys({ apiUrl, address }).transactions(),
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toChainId,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.toTokenAddress,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.fromTokenAddress,
        swapDirection === null || swapDirection === void 0 ? void 0 : swapDirection.destinationAddress,
        sender,
        routeData === null || routeData === void 0 ? void 0 : routeData.estimate.fromAmount,
        "routeApproved",
    ],
    aproveRoute: () => ["aproveRoute"],
});
//# sourceMappingURL=queries-keys.js.map