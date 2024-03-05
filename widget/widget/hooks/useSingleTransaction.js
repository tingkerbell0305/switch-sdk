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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo, useState } from "react";
import { axelarEndStatuses, axelarSuccessStatuses } from "../core/constants";
import { keys } from "../core/queries/queries-keys";
import { routes } from "../core/routes";
import { TransactionStatus } from "../core/types/transaction";
import { widgetEvents } from "../services/internal/eventService";
import { findHistoryItem, updateTransactionHistoryStatus, } from "../services/internal/transactionService";
import { usePersistStore, useSquidStore } from "../store/useSquidStore";
import { useSquidRouter } from "./useSquidRouter";
export const useSingleTransaction = (transaction) => {
    var _a, _b, _c, _d, _e;
    const { config } = useSquidStore();
    const { currentRoute } = useSquidRouter();
    const [refetchInterval, setRefetchInterval] = useState(10000);
    const currentHistoryItem = useMemo(() => findHistoryItem(transaction === null || transaction === void 0 ? void 0 : transaction.transactionId), [transaction === null || transaction === void 0 ? void 0 : transaction.transactionId]);
    const isTransactionPage = useMemo(() => (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.path) === routes.transaction.path, [currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.path]);
    /**
     * Transaction status endpoint
     * Squid api is using axelar endpoint and parsing the response
     * @returns {StatusResponse} Status response
     */
    const transactionStatusQuery = useQuery(keys({ apiUrl: config.apiUrl }).transactionStatus(transaction), () => __awaiter(void 0, void 0, void 0, function* () {
        var _f, _g, _h;
        const statusEndpoint = `${config.apiUrl}/v1/status`;
        const response = yield ((_h = axios
            .get(statusEndpoint, {
            params: {
                transactionId: transaction === null || transaction === void 0 ? void 0 : transaction.transactionId,
                fromChainId: (_f = transaction === null || transaction === void 0 ? void 0 : transaction.fromChain) === null || _f === void 0 ? void 0 : _f.chainId,
            },
            headers: {
                "X-Integrator-Id": config.integratorId,
                "X-Request-Id": (_g = useSquidStore.getState().currentRequestId) !== null && _g !== void 0 ? _g : "",
            },
        })) === null || _h === void 0 ? void 0 : _h.catch((error) => {
            throw new Error("Fetch transaction status failed", {
                cause: error,
            });
        }));
        return response.data;
    }), {
        enabled: !!(transaction === null || transaction === void 0 ? void 0 : transaction.transactionId) &&
            transaction !== undefined &&
            (currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) !== "error" &&
            (currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) !== "success",
        refetchInterval(data, query) {
            var _a;
            const statusResponse = data;
            // If the status response is something telling that the transaction
            // is finished, then store transaction history state if success
            // And return false to indicate refetcher to stop
            if (statusResponse &&
                axelarEndStatuses.includes((_a = statusResponse.status) !== null && _a !== void 0 ? _a : "")) {
                return false;
            }
            return refetchInterval; // Had to handle a variable here because after onError, we want the interval to stop
        },
        // At the moment Cosmos indexing takes more time, so need more time between retries
        retryDelay: ((_a = transaction === null || transaction === void 0 ? void 0 : transaction.fromChain) === null || _a === void 0 ? void 0 : _a.chainType) === ChainType.Cosmos ? 5000 : 3000,
        retry: ((_b = transaction === null || transaction === void 0 ? void 0 : transaction.fromChain) === null || _b === void 0 ? void 0 : _b.chainType) === ChainType.Cosmos
            ? 6
            : currentRoute.id === "transaction"
                ? 25
                : 1,
        refetchOnWindowFocus: isTransactionPage ? "always" : false,
        onSuccess: (data) => {
            var _a, _b;
            const statusResponse = data;
            // Dispatch event
            widgetEvents.dispatchSwapStatus((_a = statusResponse.squidTransactionStatus) !== null && _a !== void 0 ? _a : "");
            if (statusResponse &&
                axelarSuccessStatuses.includes((_b = statusResponse.status) !== null && _b !== void 0 ? _b : "") &&
                (currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status) !== "success") {
                usePersistStore.setState({
                    transactionsHistory: updateTransactionHistoryStatus(transaction === null || transaction === void 0 ? void 0 : transaction.transactionId, TransactionStatus.SUCCESS, usePersistStore.getState().transactionsHistory, statusResponse),
                });
            }
        },
        onError: (error) => {
            var _a, _b;
            // Check if axios error and if it's a 404
            const is404 = ((_b = (_a = error.cause) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status) === 404;
            setRefetchInterval(-1);
            usePersistStore.setState({
                transactionsHistory: updateTransactionHistoryStatus(transaction === null || transaction === void 0 ? void 0 : transaction.transactionId, is404 ? TransactionStatus.NOT_FOUND : TransactionStatus.ERROR, usePersistStore.getState().transactionsHistory, undefined),
            });
        },
    });
    return {
        transactionStatusQuery,
        latestStatus: (_e = (_d = (_c = transactionStatusQuery.data) === null || _c === void 0 ? void 0 : _c.squidTransactionStatus) !== null && _d !== void 0 ? _d : transaction === null || transaction === void 0 ? void 0 : transaction.status) !== null && _e !== void 0 ? _e : currentHistoryItem === null || currentHistoryItem === void 0 ? void 0 : currentHistoryItem.status,
    };
};
//# sourceMappingURL=useSingleTransaction.js.map