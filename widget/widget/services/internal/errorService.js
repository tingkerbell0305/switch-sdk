import { RouteDefaultErrorMsg } from "../../../widget/components/estimate/RouteDefaultErrorMsg";
import { TransactionErrorType } from "../../core/types/error";
export const transactionErrorCode = {
    // Metamask
    ACTION_REJECTED: {
        type: TransactionErrorType.REJECTED_BY_USER,
        message: "Return to the swap page and try again.",
    },
    // Keplr
    "Request rejected": {
        type: TransactionErrorType.REJECTED_BY_USER,
        message: "Return to the swap page and try again.",
    },
    // Metamask
    4001: {
        type: TransactionErrorType.REJECTED_BY_USER,
        message: "Return to the swap page and try again.",
    },
    CALL_EXCEPTION: {
        type: TransactionErrorType.CALL_EXCEPTION,
        message: "Swap failed on the source chain. Please let us know by submitting a ticket here.",
    },
    UNKNOWN: {
        type: TransactionErrorType.UNKNOWN,
        message: "The transaction could not be initiated.",
    },
};
/**
 * Check if the error is an EVM transaction error
 * Because Typescript supports casting but that's only for compilation time,
 * We need it at runtime since we're getting the error object from the wallet
 * @param error
 * @returns boolean
 */
export const isTransactionError = (error) => {
    return (error &&
        (typeof error.code === "string" ||
            typeof error.code === "number" ||
            typeof error.message === "string" ||
            typeof error.reason === "string" ||
            typeof error.action === "string"));
};
/**
 * Return the error from enum entry
 * @param error
 * @returns boolean
 */
export const getTransactionError = (error) => {
    if (isTransactionError(error)) {
        const castError = error;
        if (castError.code)
            return transactionErrorCode[castError.code];
        if (castError.message)
            return transactionErrorCode[castError.message];
        return transactionErrorCode.UNKNOWN;
    }
    return transactionErrorCode.UNKNOWN;
};
// --------------------
// SQUID ROUTE ERRORS
// --------------------
const squidRouteErrorMapping = {
    Unknown: RouteDefaultErrorMsg(),
    UnknownError: RouteDefaultErrorMsg(),
    SquidServiceError: RouteDefaultErrorMsg(),
};
/**
 * Check if the error is an Squid route error
 * Because Typescript supports casting but that's only for compilation time,
 * We need it at runtime since we're getting the error object from the wallet
 * @param error
 * @returns boolean
 */
export const isSwapRouteError = (error) => {
    return (error &&
        (typeof error.code === "string" || typeof error.errorType === "string"));
};
export const isStatusError = (error) => {
    return error && typeof error.errorType === "string";
};
/**
 * Tries to parse as SquidRouteError Type & Return the error from Record entries
 * @param error
 * @returns string error message
 */
export const getSquidRouteErrorMessage = (error) => {
    var _a;
    if (isSwapRouteError(error)) {
        // Try to get the error message from the error code
        const codeMsg = error.code || error.errorType
            ? squidRouteErrorMapping[((_a = error.code) !== null && _a !== void 0 ? _a : error.errorType)]
            : undefined;
        if (codeMsg)
            return codeMsg;
        // If there is no error code, try to get the error message from backend
        if (error.message)
            return error.message;
    }
    return squidRouteErrorMapping.Unknown;
};
//# sourceMappingURL=errorService.js.map