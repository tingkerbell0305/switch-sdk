import { ChainType } from "@0xsquid/sdk";
import { useMemo } from "react";
import { useSquidStore } from "../store/useSquidStore";
import { useSwap } from "./useSwap";
export const useUserParams = () => {
    const { config } = useSquidStore();
    const { fromToken, toToken, toChain, fromChain } = useSwap();
    //   =============
    //       GAS
    //   =============
    const getGasOnDestSupportedForThisRoute = useMemo(() => 
    // Not supporting get gas on dest for same chains
    (fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId) !== (toChain === null || toChain === void 0 ? void 0 : toChain.chainId) &&
        // If the destination chain is cosmos, we don't support getting gas there
        (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos &&
        // Not supporting get gas on dest for same tokens (bridge)
        ((fromToken === null || fromToken === void 0 ? void 0 : fromToken.commonKey) !== (toToken === null || toToken === void 0 ? void 0 : toToken.commonKey) ||
            // Except for uusdc -> uusdc
            ((fromToken === null || fromToken === void 0 ? void 0 : fromToken.commonKey) === "uusdc" && (toToken === null || toToken === void 0 ? void 0 : toToken.commonKey) === "uusdc")), [
        fromChain === null || fromChain === void 0 ? void 0 : fromChain.chainId,
        fromToken === null || fromToken === void 0 ? void 0 : fromToken.commonKey,
        toChain === null || toChain === void 0 ? void 0 : toChain.chainId,
        toToken === null || toToken === void 0 ? void 0 : toToken.commonKey,
        toChain === null || toChain === void 0 ? void 0 : toChain.chainType,
    ]);
    const gasEnabled = useMemo(() => config.enableGetGasOnDestination && getGasOnDestSupportedForThisRoute, [config.enableGetGasOnDestination, getGasOnDestSupportedForThisRoute]);
    //   =============
    //       BOOST
    //   =============
    const expressSupportedForThisRoute = useMemo(() => (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos, [toChain === null || toChain === void 0 ? void 0 : toChain.chainType]);
    const expressEnabled = useMemo(() => expressSupportedForThisRoute && config.enableExpress, [config.enableExpress, expressSupportedForThisRoute]);
    return {
        gasEnabled,
        expressEnabled,
        expressSupportedForThisRoute,
        getGasOnDestSupportedForThisRoute,
    };
};
//# sourceMappingURL=useUserParams.js.map