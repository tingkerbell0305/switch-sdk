var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import SafeAppsSDK from "@safe-global/safe-apps-sdk";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { useSwapRoutePersistStore } from "../store/useSquidStore";
import { useMultiChain } from "./useMultiChain";
import { useSwap } from "./useSwap";
export const useGnosisContext = () => {
    const { connector } = useAccount();
    const { fromChain, fromToken } = useSwap();
    const { swapRoute } = useSwapRoutePersistStore();
    const { connectedAddress } = useMultiChain(fromChain, fromToken);
    const [isGnosisContext, setisGnosisContext] = useState(false);
    /**
     * Method that will be used to send transaction
     * TODO: could have loaded the sdk when app load and stored globally
     */
    const getGnosisSafeContext = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const appsSdk = new SafeAppsSDK();
        const safe = yield appsSdk.safe.getInfo();
        const isSafeContext = safe.chainId !== undefined &&
            safe.safeAddress !== undefined &&
            (connector === null || connector === void 0 ? void 0 : connector.id) === "safe";
        setisGnosisContext(isSafeContext);
        if (isSafeContext)
            return appsSdk;
        return undefined;
    }), [connector]);
    useEffect(() => {
        getGnosisSafeContext();
    }, [connector]);
    /**
     * Check if we are in a Gnosis Safe Context
     * And if source wallet address = destination address
     * If swapRoute.destinationAddress is not defined, it means that it's the same from the source
     */
    const isSameAddressAndGnosisContext = useMemo(() => {
        const destAddressSameAsSource = connectedAddress === (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) ||
            (swapRoute === null || swapRoute === void 0 ? void 0 : swapRoute.destinationAddress) === undefined;
        return isGnosisContext && destAddressSameAsSource;
    }, [connectedAddress, swapRoute, isGnosisContext]);
    return {
        getGnosisSafeContext,
        isSameAddressAndGnosisContext,
        isGnosisContext,
    };
};
//# sourceMappingURL=useGnosisContext.js.map