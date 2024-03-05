import { SquidStatusErrorType } from "../../core/types/error";
import { AxelarStatusResponseType, TransactionStatus, TransactionType, } from "../../core/types/transaction";
import { isStatusError } from "./errorService";
/**
 * Get the steps for a transaction
 * First step and second step are always the same
 * @param transaction
 * @param statusResponse
 * @returns {TransactionStepStatus[]}
 */
export const getStepStatuses = ({ transaction, statusResponse, onlyFullStatusStep, }) => {
    let firstStepStatus;
    // "warning" state is a custom one indicating that
    // the user is taking too much time to validate the transaction
    // And can be set to loading
    switch (transaction === null || transaction === void 0 ? void 0 : transaction.sourceStatus) {
        case "error":
        case "success":
        case "ongoing":
            firstStepStatus = transaction.sourceStatus;
            break;
        case "warning":
            firstStepStatus = TransactionStatus.ONGOING;
            break;
        default:
            firstStepStatus = TransactionStatus.PENDING;
    }
    let middleStepStatus = !onlyFullStatusStep && firstStepStatus !== "success"
        ? TransactionStatus.PENDING
        : middleStepChecker(statusResponse);
    const lastStepStatus = getLastStepStatus(firstStepStatus, middleStepStatus);
    // Once we have the last step status,
    // we have to override the middle step for some states
    middleStepStatus =
        middleStepStatus === "needs_gas" || middleStepStatus === "partial_success"
            ? TransactionStatus.SUCCESS
            : middleStepStatus;
    return onlyFullStatusStep
        ? [middleStepStatus]
        : [firstStepStatus, middleStepStatus, lastStepStatus];
};
const getLastStepStatus = (first, middle) => {
    if (first === TransactionStatus.PENDING ||
        first === "ongoing" ||
        first === "error") {
        return TransactionStatus.PENDING;
    }
    switch (middle) {
        case "initialLoading":
        case "ongoing":
            return TransactionStatus.PENDING;
        default:
            return middle;
    }
};
export const getHalfSuccessState = (status) => {
    switch (status) {
        case "success":
            return TransactionStatus.SUCCESS;
        case "partial_success": // Received axlUSDC
            return TransactionStatus.PARTIAL_SUCCESS;
        case "needs_gas":
            return TransactionStatus.NEEDS_GAS;
        default:
            return undefined;
    }
};
const middleStepChecker = (statusResponse) => {
    const squidStatus = statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.data;
    const successState = getHalfSuccessState(squidStatus === null || squidStatus === void 0 ? void 0 : squidStatus.squidTransactionStatus);
    if (successState) {
        return successState;
    }
    if ((squidStatus === null || squidStatus === void 0 ? void 0 : squidStatus.status) === AxelarStatusResponseType.ERROR) {
        const { error } = squidStatus;
        if (isStatusError(error)) {
            if (error.errorType === SquidStatusErrorType.NotFoundError) {
                return TransactionStatus.ERROR;
            }
        }
        return TransactionStatus.ERROR;
    }
    if (statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.isInitialLoading) {
        return TransactionStatus.INITIAL_LOADING;
    }
    return TransactionStatus.ONGOING;
};
export const getStepsInfos = ({ fromChain, toChain, fromToken, toToken, amount, txType, transaction, statusResponse, }) => {
    var _a, _b;
    const [firstStepStatus, middleStepStatus, lastStepStatus] = getStepStatuses({
        transaction,
        statusResponse,
    });
    const payLabel = `Pay ${amount} ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} on ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName}`;
    const swapForUSDCLabel = `Swap ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} for axlUSDC`;
    const sendUSDCLabel = `Send axlUSDC to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}`;
    const swapUSDCLabel = `Swap axlUSDC for ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}`;
    const receiveLabel = `Receive ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} on ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}`;
    const axelarUrl = transaction === null || transaction === void 0 ? void 0 : transaction.axelarUrl;
    const sourceExplorerUrl = transaction === null || transaction === void 0 ? void 0 : transaction.sourceTxExplorerUrl;
    const destinationExplorerUrl = (_b = (_a = statusResponse === null || statusResponse === void 0 ? void 0 : statusResponse.data) === null || _a === void 0 ? void 0 : _a.toChain) === null || _b === void 0 ? void 0 : _b.transactionUrl;
    switch (txType) {
        case TransactionType.CALL_BRIDGE_CALL:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: swapForUSDCLabel,
                    status: firstStepStatus !== "success"
                        ? TransactionStatus.PENDING
                        : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: sendUSDCLabel,
                    status: middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: swapUSDCLabel,
                    status: middleStepStatus !== "success"
                        ? TransactionStatus.PENDING
                        : middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        case TransactionType.CALL_BRIDGE:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: swapForUSDCLabel,
                    status: firstStepStatus !== "success"
                        ? TransactionStatus.PENDING
                        : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: sendUSDCLabel,
                    status: middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        case TransactionType.BRIDGE:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: sendUSDCLabel,
                    status: firstStepStatus !== "success"
                        ? TransactionStatus.PENDING
                        : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        case TransactionType.BRIDGE_CALL:
            return [
                {
                    label: payLabel,
                    status: firstStepStatus,
                    link: sourceExplorerUrl,
                    subTitle: "View on explorer",
                },
                {
                    label: sendUSDCLabel,
                    status: firstStepStatus !== "success"
                        ? TransactionStatus.PENDING
                        : firstStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: swapUSDCLabel,
                    status: middleStepStatus,
                    link: axelarUrl,
                    subTitle: "View on Axelarscan",
                },
                {
                    label: receiveLabel,
                    status: lastStepStatus,
                    link: destinationExplorerUrl,
                    subTitle: "View on explorer",
                },
            ];
        default:
            return [];
    }
};
//# sourceMappingURL=transactionStatusService.js.map