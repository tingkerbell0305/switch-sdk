import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { transactionSuccessAnimation } from "../../assets/animations";
import { TrackButton } from "../../components/buttons/TrackButton";
import { ShareOnTwitter } from "../../components/transaction/ShareOnTwitter";
import { nativeEvmTokenAddress } from "../../core/constants";
import { useMultiChain } from "../../hooks/useMultiChain";
import { useTransaction } from "../../hooks/useTransaction";
import { ViewTransactionButton } from "../buttons/ViewTransactionButton";
import { TransactionStateContent } from "./TransactionStateContent";
export const TransactionSuccessView = ({ openBox }) => {
    const { fromToken, toToken, toChain, fromChain, currentTransaction } = useTransaction();
    const { addToken } = useMultiChain(toChain, toToken);
    return (_jsx(TransactionStateContent, Object.assign({ animReplacement: _jsx(BsFillCheckCircleFill, { size: 60 }), title: "Complete", animation: transactionSuccessAnimation }, { children: _jsxs("span", { children: [(toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.EVM &&
                    (toToken === null || toToken === void 0 ? void 0 : toToken.address) !== nativeEvmTokenAddress && (_jsxs("button", Object.assign({ type: "button", onClick: () => addToken.mutate(), className: "tw-group tw-mt-2 tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-sm tw-text-base-content hover:tw-underline" }, { children: ["Add ", toToken === null || toToken === void 0 ? void 0 : toToken.symbol, " to your wallet", " ", _jsx(FiPlusCircle, { className: "tw-rounded-full group-hover:tw-bg-primary group-hover:tw-text-base-200" })] }))), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-col tw-items-center tw-gap-2 tw-text-sm" }, { children: [_jsx("span", Object.assign({ className: "tw-text-neutral-content" }, { children: "Your tokens have been sent." })), _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-justify-center tw-gap-2" }, { children: [(fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM && (_jsx(TrackButton, { onClick: () => openBox(true) })), _jsx(ViewTransactionButton, { transaction: currentTransaction })] })), _jsx("span", Object.assign({ className: "tw-flex tw-w-full tw-flex-row tw-justify-center tw-p-1" }, { children: _jsx(ShareOnTwitter, { fromToken: fromToken, toToken: toToken, fromChain: fromChain, toChain: toChain }) }))] }))] }) })));
};
//# sourceMappingURL=TransactionSuccessView.js.map