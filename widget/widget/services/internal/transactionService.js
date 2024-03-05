import { format, formatDistance } from "date-fns";
import fromUnixTime from "date-fns/fromUnixTime";
import { TransactionType } from "../../core/types/transaction";
import { usePersistStore } from "../../store/useSquidStore";
/**
 * Helper to find the desired transaction history in array
 * @param transactionID
 * @returns
 */
export const findHistoryItem = (transactionID) => {
    var _a;
    return (_a = usePersistStore
        .getState()
        .transactionsHistory) === null || _a === void 0 ? void 0 : _a.find((th) => th.transactionId === transactionID);
};
/**
 * Will return the same object but with the desired transaction history
 * Status changed
 * @param transactionID
 * @param status
 * @param transactionsHistory
 * @param statusResponse
 * @returns
 */
export const updateTransactionHistoryStatus = (transactionID, status, transactionsHistory, statusResponse) => {
    var _a;
    return ((_a = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.map((th) => {
        var _a, _b;
        // Use the status response from the query if available, if not, use the one from the store
        statusResponse = statusResponse !== null && statusResponse !== void 0 ? statusResponse : th.statusResponse;
        // If the transaction is already in the store and had a different status, update status
        if (th.transactionId === transactionID && th.status !== status) {
            return Object.assign(Object.assign({}, th), { status,
                statusResponse, axelarUrl: statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.axelarTransactionUrl, sourceTxExplorerUrl: (_a = statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.fromChain) === null || _a === void 0 ? void 0 : _a.transactionUrl });
        }
        return Object.assign(Object.assign({}, th), { axelarUrl: statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.axelarTransactionUrl, sourceTxExplorerUrl: (_b = statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.fromChain) === null || _b === void 0 ? void 0 : _b.transactionUrl });
    })) !== null && _a !== void 0 ? _a : []);
};
export const replaceTransactionAtNonce = (nonce, fromAddress, transactionsHistory, TransactionHistoryStore) => {
    const newTransactionsHistory = transactionsHistory !== null && transactionsHistory !== void 0 ? transactionsHistory : [];
    // Find the transaction with the same nonce and from address
    const transactionIndex = transactionsHistory === null || transactionsHistory === void 0 ? void 0 : transactionsHistory.findIndex((th) => th.nonce === nonce && th.fromAddress === fromAddress);
    // If found, replace it with the new transaction
    if (transactionIndex !== undefined && transactionIndex !== -1) {
        newTransactionsHistory[transactionIndex] = TransactionHistoryStore;
    }
    return newTransactionsHistory;
};
export const formatTransactionHistoryDate = (transaction) => {
    return (transaction === null || transaction === void 0 ? void 0 : transaction.timestamp)
        ? {
            month: format(fromUnixTime(+transaction.timestamp / 1000), "MMM"),
            day: format(fromUnixTime(+transaction.timestamp / 1000), "dd"),
        }
        : undefined;
};
export const getAxelarExplorerTxUrl = (urlPrefix, routeType, txID) => {
    var _a;
    if (!urlPrefix) {
        return undefined;
    }
    const txType = (_a = routeType) !== null && _a !== void 0 ? _a : TransactionType.BRIDGE;
    if (txType === TransactionType.CALL_BRIDGE ||
        txType === TransactionType.BRIDGE) {
        return `${urlPrefix}transfer/${txID}`;
    }
    return `${urlPrefix}gmp/${txID}`;
};
export const getSourceExplorerTxUrl = (chain, txID) => {
    const transactionUrl = (chain === null || chain === void 0 ? void 0 : chain.blockExplorerUrls)
        ? `${chain.blockExplorerUrls[0]}tx/${txID}`
        : "";
    return transactionUrl;
};
export const getMainExplorerUrl = (transaction) => {
    var _a;
    if ((_a = transaction === null || transaction === void 0 ? void 0 : transaction.statusResponse) === null || _a === void 0 ? void 0 : _a.axelarTransactionUrl) {
        return transaction === null || transaction === void 0 ? void 0 : transaction.statusResponse.axelarTransactionUrl;
    }
    return transaction === null || transaction === void 0 ? void 0 : transaction.sourceTxExplorerUrl;
};
export const formatSeconds = (seconds, secondsTemplate = " seconds", minutesTemplate = " minutes") => {
    let duration = "";
    if (seconds < 60) {
        duration = `${seconds.toString()}${secondsTemplate}`;
    }
    else {
        duration = formatDistance(0, seconds * 1000, { includeSeconds: true });
    }
    return duration
        .replace(" minutes", minutesTemplate)
        .replace(" minute", minutesTemplate);
};
//# sourceMappingURL=transactionService.js.map