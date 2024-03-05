var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ChainType } from "@0xsquid/sdk";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { TransactionStatus as GnosisTransactionStatus } from "@safe-global/safe-apps-sdk/dist/src/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { constants, ethers, utils } from "ethers";
import { Logger } from "ethers/lib/utils.js";
import { useCallback, useMemo } from "react";
import { useAccount, useSigner } from "wagmi";
import { defaultSlippage } from "../core/constants";
import { useCosmosContext } from "../core/providers/CosmosProvider";
import { keys } from "../core/queries/queries-keys";
import { routes } from "../core/routes";
import { TransactionErrorType } from "../core/types/error";
import { TransactionStatus } from "../core/types/transaction";
import { getWorkingCosmosRpcUrl } from "../services/external/rpcService";
import { getTransactionError } from "../services/internal/errorService";
import { widgetEvents } from "../services/internal/eventService";
import { getAxelarExplorerTxUrl, getSourceExplorerTxUrl, replaceTransactionAtNonce, updateTransactionHistoryStatus, } from "../services/internal/transactionService";
import { usePersistStore, useSquidStore, useSwapRoutePersistStore, } from "../store/useSquidStore";
import { cosmosHubChainId } from "./useCosmos";
import { useGnosisContext } from "./useGnosisContext";
import { useMultiChain } from "./useMultiChain";
import { useSquidChains } from "./useSquidChains";
import { useSquidRouter } from "./useSquidRouter";
import { useSwap } from "./useSwap";
import { useUserParams } from "./useUserParams";
export const useTransaction = () => {
    const signer = useSigner();
    const { cosmosSigner, getCosmosAddressForChain } = useCosmosContext();
    const { currentRoute } = useSquidRouter();
    const { chains } = useSquidChains();
    const queryClient = useQueryClient();
    const { fromPrice, toPrice, squid, currentTransaction, config } = useSquidStore();
    const { swapRoute } = useSwapRoutePersistStore();
    const { connector: activeConnector } = useAccount();
    const { fromChain, toChain, fromToken, toToken, destinationAddress } = useSwap();
    const { getGnosisSafeContext } = useGnosisContext();
    const { expressEnabled, gasEnabled } = useUserParams();
    const { connectedAddress: sourceUserAddress } = useMultiChain(fromChain, fromToken);
    const isSameChainSwap = useMemo(() => (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId) === (toChain === null || toChain === void 0 ? void 0 : toChain.chainId), [fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId, toChain === null || toChain === void 0 ? void 0 : toChain.chainId]);
    const sourceExplorerUrl = useMemo(() => {
        if (!fromChain ||
            fromChain.blockExplorerUrls.length === 0 ||
            !(currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId)) {
            return undefined;
        }
        return `${fromChain.blockExplorerUrls[0]}/tx/${currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId}`;
    }, [currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId, fromChain]);
    /**
     * Get fallback addresses for cosmos chains
     * This is needed by backend when a cosmos swap occurs between non coin118 chains
     * The backend might need a coin118 address to send the funds to in case of failure for a swap happening between the two chains
     */
    const getCosmosFallbackAddresses = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if ((fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM &&
            (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.EVM) {
            return undefined;
        }
        // We only need coin118, so taking cosmos hub address
        const cosmosHubAddress = yield getCosmosAddressForChain(cosmosHubChainId);
        if (!cosmosHubAddress) {
            return undefined;
        }
        const coinTypeAddress = {
            address: cosmosHubAddress,
            coinType: 118,
        };
        return [coinTypeAddress];
    }), [fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType, getCosmosAddressForChain, toChain === null || toChain === void 0 ? void 0 : toChain.chainType]);
    /**
     * Fetching route data from the API
     * These data will be used to trigger the transaction
     * @returns {Route} Route data
     */
    const squidRoute = useQuery(keys({
        address: destinationAddress,
        apiUrl: config.apiUrl,
    }).transaction(swapRoute, fromPrice, config.slippage, config.infiniteApproval, config.enableGetGasOnDestination, config.enableExpress, sourceUserAddress), () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const quoteOnly = sourceUserAddress === undefined || destinationAddress === undefined;
        const fallbackAddresses = quoteOnly
            ? undefined
            : yield getCosmosFallbackAddresses();
        const params = {
            fromChain: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromChainId,
            fromToken: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.fromTokenAddress,
            // TODO: THe backend should allow having fromAddress as undefined, and should set to addressZero if necessary
            // TODO: remove the ?? constants.AddressZero when the backend is updated
            fromAddress: sourceUserAddress !== null && sourceUserAddress !== void 0 ? sourceUserAddress : constants.AddressZero,
            fromAmount: utils
                .parseUnits((_a = fromPrice === null || fromPrice === void 0 ? void 0 : fromPrice.toString()) !== null && _a !== void 0 ? _a : "0", fromToken === null || fromToken === void 0 ? void 0 : fromToken.decimals)
                .toString(),
            toChain: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId,
            toToken: swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toTokenAddress,
            toAddress: destinationAddress !== null && destinationAddress !== void 0 ? destinationAddress : "",
            quoteOnly: sourceUserAddress === undefined || destinationAddress === undefined,
            slippage: (_b = config.slippage) !== null && _b !== void 0 ? _b : defaultSlippage,
            enableExpress: expressEnabled,
            prefer: config.preferDex,
            receiveGasOnDestination: gasEnabled,
            collectFees: config.collectFees,
            fallbackAddresses,
        };
        const { route, requestId } = yield squid.getRoute(Object.assign({}, params));
        useSquidStore.setState({
            currentRequestId: requestId,
        });
        return route;
    }), {
        enabled: squid !== undefined &&
            fromPrice !== undefined &&
            fromPrice !== "0" &&
            (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.toChainId) !== undefined &&
            swapRoute.toTokenAddress !== undefined &&
            (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.path) !== routes.transaction.path,
        cacheTime: 60000,
        staleTime: 20000,
        refetchOnWindowFocus: (query) => Date.now() - query.state.dataUpdatedAt > 30000,
        refetchIntervalInBackground: false,
        refetchInterval: 30000, // Refetch every 30 seconds
    });
    /**
     * Checking if spending tokens is allowed for this source address
     * On Success: storing the transaction
     * On Error: Showing the error message if any
     * @returns {boolean} approved
     */
    const routeApproved = useQuery(keys({
        address: sourceUserAddress,
        apiUrl: config.apiUrl,
    }).routeApproved(swapRoute, sourceUserAddress, squidRoute.data), () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { isApproved } = yield squid.isRouteApproved({
                route: squidRoute.data,
                sender: sourceUserAddress,
            });
            return isApproved;
        }
        catch (error) {
            return false;
        }
    }), {
        enabled: !!squidRoute.data && !!sourceUserAddress,
    });
    // USDT has a very specific way of handling approvals
    // ```
    /// To change the approve amount you first have to reduce the addresses`
    //  allowance to zero by calling `approve(_spender, 0)` if it is not
    //  already 0 to mitigate the race condition described here:
    //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
    // ```
    // This is why we had an unpredictable gas error for USDT approvals
    // So it needs a custom gas limit
    const approveSpecificTokenToZero = (token) => __awaiter(void 0, void 0, void 0, function* () {
        if (signer.data &&
            token.symbol.toLowerCase() === "usdt" &&
            token.chainId === 1) {
            const squidRouter = "0xce16F69375520ab01377ce7B88f5BA8C48F8D666";
            const usdtContract = new ethers.Contract(fromToken === null || fromToken === void 0 ? void 0 : fromToken.address, [
                {
                    constant: false,
                    inputs: [
                        { name: "_spender", type: "address" },
                        { name: "_value", type: "uint256" },
                    ],
                    name: "approve",
                    outputs: [],
                    payable: false,
                    stateMutability: "nonpayable",
                    type: "function",
                },
                {
                    constant: true,
                    inputs: [
                        { name: "_owner", type: "address" },
                        { name: "_spender", type: "address" },
                    ],
                    name: "allowance",
                    outputs: [{ name: "remaining", type: "uint256" }],
                    payable: false,
                    stateMutability: "view",
                    type: "function",
                },
            ], signer.data);
            // Get approval amount from usdt contract
            const allowance = (yield usdtContract.allowance(sourceUserAddress, squidRouter));
            // If allowance is greater than 0, set it to 0
            if (allowance.gt(constants.Zero)) {
                const approveTx = yield usdtContract.approve(squidRouter, constants.Zero);
                yield approveTx.wait();
            }
        }
        return true;
    });
    /**
     * Manually approve route if necessary
     */
    const approveRoute = useMutation(keys({
        address: sourceUserAddress,
        apiUrl: config.apiUrl,
    }).aproveRoute(), () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (squidRoute.data && signer.data && fromToken) {
                yield approveSpecificTokenToZero(fromToken);
                const approved = yield squid.approveRoute({
                    route: squidRoute.data,
                    signer: signer.data,
                    executionSettings: { infiniteApproval: config.infiniteApproval },
                });
                return approved;
            }
            return false;
        }
        catch (error) {
            // Keep the error in the console to debug future issues
            console.error(error);
            return false;
        }
    }), {
        onSuccess: (data, variable) => {
            queryClient.invalidateQueries(keys({
                address: sourceUserAddress,
                apiUrl: config.apiUrl,
            }).routeApproved(swapRoute, sourceUserAddress, squidRoute.data));
        },
    });
    /**
     * There's a specific way to get the transaction hash for the safe connector
     * SO if the app is being used inside the safe container, we need to use the safe sdk to get the tx hash
     * @param connector
     * @param hashReceived
     * @returns
     */
    const getTransactionHash = (connector, hashReceived) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if ((connector === null || connector === void 0 ? void 0 : connector.id) === "safe") {
            const safeSdk = yield getGnosisSafeContext();
            const tx = yield (safeSdk === null || safeSdk === void 0 ? void 0 : safeSdk.txs.getBySafeTxHash(hashReceived));
            const status = tx === null || tx === void 0 ? void 0 : tx.txStatus;
            if (status !== GnosisTransactionStatus.FAILED &&
                status !== GnosisTransactionStatus.SUCCESS &&
                status !== GnosisTransactionStatus.CANCELLED) {
                // Wait 2 seconds before checking the gnosis status again
                // eslint-disable-next-line no-promise-executor-return
                yield new Promise((res) => setTimeout(res, 2000));
                return getTransactionHash(connector, hashReceived);
            }
            return (_c = tx === null || tx === void 0 ? void 0 : tx.txHash) !== null && _c !== void 0 ? _c : hashReceived;
        }
        return hashReceived;
    });
    const persistTransaction = (currentTransaction) => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        // Persisting the transaction in local storage
        if (squidRoute.data) {
            const previousHistoryList = (_d = usePersistStore.getState().transactionsHistory) !== null && _d !== void 0 ? _d : [];
            const newHistoryElement = Object.assign(Object.assign({}, currentTransaction), { params: squidRoute.data.params });
            usePersistStore.setState({
                transactionsHistory: [...previousHistoryList, newHistoryElement],
            });
        }
    });
    const swapQueryCosmos = useMutation((route) => __awaiter(void 0, void 0, void 0, function* () {
        var _e, _f, _g, _h;
        const chainData = chains.find((c) => c.chainId === (route === null || route === void 0 ? void 0 : route.params.fromChain));
        if (cosmosSigner && chainData) {
            try {
                const rpc = yield getWorkingCosmosRpcUrl(chainData);
                const signingClient = yield SigningCosmWasmClient.connectWithSigner(rpc, cosmosSigner);
                const signerAddress = (yield cosmosSigner.getAccounts())[0].address;
                if (signerAddress && signingClient && route) {
                    const tx = (yield (squid === null || squid === void 0 ? void 0 : squid.executeRoute({
                        signer: signingClient,
                        signerAddress,
                        route,
                        executionSettings: {
                            infiniteApproval: config.infiniteApproval,
                        },
                    })));
                    // set the tx state to loading, as soon as user signed the tx
                    setTransactionState({
                        txHash: "",
                        route,
                        status: TransactionStatus.ONGOING,
                        sourceStatus: TransactionStatus.ONGOING,
                    });
                    // broadcast the signed tx to get hash and listen to events
                    const response = yield signingClient.broadcastTx(TxRaw.encode(tx).finish());
                    const hash = response.transactionHash;
                    // Dispatch event so it can be listened from outside the widget
                    widgetEvents.dispatchSwapExecuteCall(route, hash);
                    const currentTransaction = setTransactionState({
                        route,
                        txHash: hash,
                        userAddress: sourceUserAddress,
                        status: TransactionStatus.ONGOING,
                        sourceStatus: TransactionStatus.ONGOING,
                        axelarUrl: getAxelarExplorerTxUrl(squid === null || squid === void 0 ? void 0 : squid.axelarscanURL, (_f = (_e = route.transactionRequest) === null || _e === void 0 ? void 0 : _e.routeType) !== null && _f !== void 0 ? _f : "", hash),
                    });
                    if (currentTransaction) {
                        persistTransaction(currentTransaction);
                    }
                    return response.code === 0;
                }
            }
            catch (error) {
                console.log(error);
                const castedError = (_g = error) !== null && _g !== void 0 ? _g : {};
                if ((_h = castedError.message) === null || _h === void 0 ? void 0 : _h.includes("Request rejected")) {
                    throw new Error(castedError.message);
                }
            }
        }
        throw new Error("Need all parameters");
    }));
    const swapQueryEvm = useMutation((route) => __awaiter(void 0, void 0, void 0, function* () {
        var _j;
        if (route && !!squid && signer.isSuccess) {
            const txResponse = (yield squid.executeRoute({
                signer: signer.data,
                route,
                executionSettings: {
                    infiniteApproval: config.infiniteApproval,
                },
            }));
            const hash = yield getTransactionHash(activeConnector, txResponse.hash);
            // Dispatch event so it can be listened from outside the widget
            widgetEvents.dispatchSwapExecuteCall(route, hash);
            if (route.transactionRequest) {
                const { routeType } = route.transactionRequest;
                const currentTransaction = setTransactionState({
                    route,
                    txHash: hash,
                    nonce: txResponse.nonce,
                    userAddress: sourceUserAddress,
                    status: TransactionStatus.INITIAL_LOADING,
                    sourceStatus: TransactionStatus.ONGOING,
                    axelarUrl: getAxelarExplorerTxUrl(squid.axelarscanURL, routeType, hash),
                });
                if (currentTransaction) {
                    persistTransaction(currentTransaction);
                }
            }
            try {
                const response = yield txResponse.wait();
                return response;
            }
            catch (error) {
                return handleTransactionReplacementError({
                    error,
                    route,
                    status: TransactionStatus.INITIAL_LOADING,
                    sourceStatus: TransactionStatus.ONGOING,
                    userAddress: sourceUserAddress,
                    axelarUrl: getAxelarExplorerTxUrl(squid.axelarscanURL, (_j = route === null || route === void 0 ? void 0 : route.transactionRequest) === null || _j === void 0 ? void 0 : _j.routeType, hash),
                });
            }
        }
        throw new Error("Need all parameters");
    }));
    const setTransactionState = useCallback(({ route, txHash, nonce, status, sourceStatus, userAddress, axelarUrl, }) => {
        if (route && route.transactionRequest) {
            const { routeType } = route.transactionRequest;
            const currentTransaction = {
                fromChain,
                toChain,
                routeType,
                nonce,
                transactionId: txHash,
                status,
                sourceStatus,
                timestamp: Date.now(),
                fromAddress: userAddress,
                sourceTxExplorerUrl: getSourceExplorerTxUrl(fromChain, txHash),
                sourceExplorerImgUrl: fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainIconURI,
                axelarUrl,
            };
            useSquidStore.setState({
                currentTransaction,
            });
            return currentTransaction;
        }
        return undefined;
    }, [fromChain, toChain]);
    // If the transaction is replaced, we need to update the transaction hash
    // Transaction replaced can mean that the user has speed up the transaction for example
    // Could also be cancelled
    const handleTransactionReplacementError = useCallback(({ error, route, status, sourceStatus, userAddress, axelarUrl, }) => __awaiter(void 0, void 0, void 0, function* () {
        if (route && error.code === Logger.errors.TRANSACTION_REPLACED) {
            const txReplacementError = error;
            const { hash: newHash, nonce: newNonce } = txReplacementError.replacement;
            if (route.transactionRequest && squidRoute.data) {
                const { routeType } = route.transactionRequest;
                const currentTransaction = setTransactionState({
                    route,
                    txHash: newHash,
                    nonce: newNonce,
                    userAddress: sourceUserAddress,
                    status,
                    sourceStatus,
                    axelarUrl: getAxelarExplorerTxUrl(squid === null || squid === void 0 ? void 0 : squid.axelarscanURL, routeType, newHash),
                });
                if (currentTransaction) {
                    const newHistoryElement = Object.assign(Object.assign({}, currentTransaction), { params: squidRoute.data.params });
                    // Need to store the new transaction hash on the previous transaction
                    usePersistStore.setState({
                        transactionsHistory: replaceTransactionAtNonce(newNonce, sourceUserAddress, usePersistStore.getState().transactionsHistory, newHistoryElement),
                    });
                }
            }
            try {
                const response = yield txReplacementError.replacement.wait();
                return response;
            }
            catch (error) {
                // Maybe the transaction was replaced again
                // recursive call
                return handleTransactionReplacementError({
                    error,
                    route,
                    status,
                    sourceStatus,
                    userAddress,
                    axelarUrl,
                });
            }
        }
        else {
            throw error;
        }
    }), [
        setTransactionState,
        sourceUserAddress,
        squid === null || squid === void 0 ? void 0 : squid.axelarscanURL,
        squidRoute.data,
    ]);
    /**
     * Execute cross chain swap with selected tokens
     * getRoute should be called before this mutation
     */
    const swapQuery = useMutation((route) => __awaiter(void 0, void 0, void 0, function* () {
        const fromChain = chains === null || chains === void 0 ? void 0 : chains.find((chain) => { var _a; return chain.chainId == ((_a = route === null || route === void 0 ? void 0 : route.params) === null || _a === void 0 ? void 0 : _a.fromChain); });
        if ((fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.Cosmos) {
            return swapQueryCosmos.mutateAsync(route);
        }
        if ((fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM) {
            return swapQueryEvm.mutateAsync(route);
        }
        throw new Error("Invalid parameters or chain not found");
    }), {
        onError: (error) => {
            const { currentTransaction } = useSquidStore.getState();
            const errorObject = getTransactionError(error);
            useSquidStore.setState({
                currentTransaction: Object.assign(Object.assign({}, currentTransaction), { status: TransactionStatus.ERROR, sourceStatus: TransactionStatus.ERROR, error: errorObject }),
            });
            if ((currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId) &&
                (errorObject === null || errorObject === void 0 ? void 0 : errorObject.type) === TransactionErrorType.CALL_EXCEPTION) {
                usePersistStore.setState({
                    transactionsHistory: updateTransactionHistoryStatus(currentTransaction === null || currentTransaction === void 0 ? void 0 : currentTransaction.transactionId, TransactionStatus.ERROR, usePersistStore.getState().transactionsHistory, undefined),
                });
            }
        },
        onSuccess: () => {
            const { currentTransaction } = useSquidStore.getState();
            queryClient.invalidateQueries(keys({}).balances());
            useSquidStore.setState({
                currentTransaction: Object.assign(Object.assign({}, currentTransaction), { sourceStatus: TransactionStatus.SUCCESS, status: isSameChainSwap
                        ? TransactionStatus.SUCCESS
                        : TransactionStatus.ONGOING }),
            });
        },
    });
    return {
        routeApproved,
        approveRoute,
        swapQuery,
        currentTransaction,
        fromToken,
        toToken,
        squidRoute,
        fromPrice,
        toPrice,
        toChain,
        fromChain,
        sourceExplorerUrl,
    };
};
//# sourceMappingURL=useTransaction.js.map