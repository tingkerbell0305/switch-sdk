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
/* eslint-disable react-hooks/rules-of-hooks */
import { ChainType } from "@0xsquid/sdk";
import clsx from "clsx";
import { useMemo } from "react";
import { nativeEvmTokenAddress } from "../../core/constants";
import { routes } from "../../core/routes";
import { useGnosisContext } from "../../hooks/useGnosisContext";
import { useMultiChain } from "../../hooks/useMultiChain";
import { useMultiChainBalance } from "../../hooks/useMultiChainBalance";
import { useSquidRouter } from "../../hooks/useSquidRouter";
import { useSwap } from "../../hooks/useSwap";
import { useTransaction } from "../../hooks/useTransaction";
import { AnalyticsService } from "../../services/external/analyticsService";
import { useSwapRoutePersistStore } from "../../store/useSquidStore";
import { LoadingButton } from "../LoadingButton";
import { BaseButton } from "../buttons/BaseButton";
export const SubmitSwapBtn = ({ disabled }) => {
    const { fromChain, fromToken, fromPrice, destinationAddress } = useSwap();
    const { routeApproved, approveRoute } = useTransaction();
    const { switchRoute } = useSquidRouter();
    const { connectedAddress, networkConnectedOnRightChain, changeNetwork } = useMultiChain(fromChain, fromToken);
    const { balance } = useMultiChainBalance(fromChain, fromToken);
    const { destinationAddressHasBeenUpdated } = useSwapRoutePersistStore();
    const balanceFormatted = useMemo(() => +(balance !== null && balance !== void 0 ? balance : 0), [balance]);
    const fromPriceFormatted = useMemo(() => fromPrice !== null && fromPrice !== void 0 ? fromPrice : 0, [fromPrice]);
    const buttonEnabledClasses = "tw-text-primary-content";
    const buttonDisabledClasses = "tw-text-base-content/30";
    const buttonClass = "tw-base100 tw-w-full tw-min-h-[60px] tw-h-[60px] tw-normal-case tw-dsw-btn tw-dsw-btn-primary tw-bg-primary tw-text-xl tw-font-medium";
    const buttonId = "squid-submit-swap-btn";
    const { isSameAddressAndGnosisContext } = useGnosisContext();
    const internalDisabled = useMemo(() => disabled ||
        approveRoute.isLoading ||
        routeApproved.isFetching ||
        !destinationAddress, [
        approveRoute.isLoading,
        destinationAddress,
        disabled,
        routeApproved.isFetching,
    ]);
    const isApproved = useMemo(() => routeApproved.isSuccess && routeApproved.data === true, [routeApproved.data, routeApproved.isSuccess]);
    if (connectedAddress) {
        if (!networkConnectedOnRightChain) {
            return (_jsx(LoadingButton, Object.assign({ onClick: () => changeNetwork.mutate(), className: clsx(buttonClass, buttonEnabledClasses), id: buttonId }, { children: _jsx("span", { children: "Switch network" }) })));
        }
        if (balanceFormatted <= 0 || balanceFormatted < +fromPriceFormatted) {
            return (_jsx(LoadingButton, Object.assign({ id: buttonId, disabled: true, className: clsx(buttonClass, buttonDisabledClasses) }, { children: _jsx("span", { children: "Insufficient balance" }) })));
        }
        if (isSameAddressAndGnosisContext && !destinationAddressHasBeenUpdated) {
            return (_jsx(BaseButton, Object.assign({ onClick: () => switchRoute(routes.destination), disabled: true, id: buttonId, className: clsx(buttonClass, buttonDisabledClasses) }, { children: _jsx("span", { children: "Add destination address" }) })));
        }
    }
    const approveOrNavigate = () => __awaiter(void 0, void 0, void 0, function* () {
        // Only approve if the user is on the EVM chain
        // There's no need to approve to spend tokens on Cosmos
        if (!isApproved && (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM) {
            approveRoute.mutate();
            AnalyticsService.givePermissionToUseTokenButton();
        }
        else {
            AnalyticsService.submitButtonPushed();
            switchRoute(routes.transaction);
        }
    });
    const getApproveOrSubmitLabel = () => {
        // If Approve is loading
        if (approveRoute.isLoading) {
            return "Approving...";
        }
        // If destination cosmos chain and no destination address, show add destination address
        if (!destinationAddress) {
            return "Add destination address";
        }
        // EVM FromChain Case
        if ((fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainType) === ChainType.EVM) {
            if (!isApproved && (fromToken === null || fromToken === void 0 ? void 0 : fromToken.address) !== nativeEvmTokenAddress) {
                return "Give permission to use tokens";
            }
        }
        return "Submit";
    };
    return (_jsx(LoadingButton, Object.assign({ id: buttonId, className: clsx(buttonClass, internalDisabled ? buttonDisabledClasses : buttonEnabledClasses), disabled: internalDisabled, onClick: approveOrNavigate }, { children: _jsx("span", { children: getApproveOrSubmitLabel() }) })));
};
//# sourceMappingURL=SubmitSwapBtn.js.map