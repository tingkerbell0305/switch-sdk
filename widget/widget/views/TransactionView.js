var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { TransactionErrorType } from "../core/types/error";
import { TransactionStatus } from "../core/types/transaction";
import { useTransaction } from "../hooks/useTransaction";
import { useSquidStore } from "../store/useSquidStore";
import { TransactionProgressView } from "./TransactionProgressView";
export const TransactionView = () => {
    const { swapQuery, squidRoute } = useTransaction();
    const executeTx = () => __awaiter(void 0, void 0, void 0, function* () {
        // Reset current transaction because a new one is coming
        useSquidStore.setState({ currentTransaction: undefined });
        // Check if we need to refetch the route data
        if (squidRoute.isStale) {
            const resp = yield squidRoute.refetch();
            if (resp.data && resp.isSuccess) {
                swapQuery.mutate(resp.data);
            }
        }
        else {
            swapQuery.mutate(squidRoute.data);
        }
    });
    // As soon as this component is mounted
    // We need to execute the transaction
    useEffect(() => {
        executeTx();
        /**
         * Check if the user sign the tx within 30s
         * If not, error must be thrown
         */
        const timerId = setTimeout(() => {
            const { currentTransaction } = useSquidStore.getState();
            if (!currentTransaction) {
                useSquidStore.setState({
                    currentTransaction: Object.assign(Object.assign({}, currentTransaction), { sourceStatus: TransactionStatus.WARNING, error: {
                            type: TransactionErrorType.WARNING,
                            message: "You're taking a while! We suggest rejecting the pending transaction and starting over with a new quote",
                        } }),
                });
            }
        }, 45 * 1000);
        return () => clearTimeout(timerId);
    }, []);
    return (_jsx("div", Object.assign({ className: "tw-flex tw-h-full tw-flex-1 tw-flex-col tw-items-center" }, { children: _jsx(TransactionProgressView, {}) })));
};
//# sourceMappingURL=TransactionView.js.map