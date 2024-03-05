var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { StargateClient } from "@cosmjs/stargate";
import { fetchBalance } from "@wagmi/core";
import { constants, utils } from "ethers";
import { readContracts } from "wagmi";
import { ERC20__factory } from "../../contracts/typechain/factories/ERC20__factory";
import { nativeEvmTokenAddress } from "../../core/constants";
import { multicallAbi, multicallAddress } from "../../core/multicall3";
/**
 * Use readContracts to fetch all tokens balance in one call
 * native tokens & erc20 tokens will have different abi & contract & function name
 * Because it's not possible to fetch native token balance with balanceOf
 * @param tokens
 * @param userAddress
 * @returns
 */
const getTokensSupportingMultiCall = (tokens, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const multicallBalances = (yield readContracts({
        contracts: tokens.map((t) => {
            const isTokenNative = t.address === nativeEvmTokenAddress;
            return {
                chainId: +t.chainId,
                abi: isTokenNative ? multicallAbi : ERC20__factory.abi,
                address: isTokenNative
                    ? multicallAddress
                    : t.address,
                functionName: isTokenNative ? "getEthBalance" : "balanceOf",
                args: [userAddress],
            };
        }),
        allowFailure: true,
    }));
    return tokens.map((t, i) => {
        var _a;
        return (Object.assign(Object.assign({}, t), { balance: utils.formatUnits((_a = multicallBalances[i]) !== null && _a !== void 0 ? _a : constants.Zero, t.decimals) }));
    });
});
/**
 * Some chains don't support multicall, so we need to fetch them with Promise.all & fetchBalance
 * @param tokens
 * @param userAddress
 * @returns
 */
const getTokensWithoutMultiCall = (tokens, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    const balances = (yield Promise.all(tokens.map((t) => __awaiter(void 0, void 0, void 0, function* () {
        let balance;
        try {
            if (t.address === nativeEvmTokenAddress) {
                balance = yield fetchBalance({
                    address: userAddress,
                    chainId: +t.chainId,
                });
            }
            else {
                balance = yield fetchBalance({
                    address: userAddress,
                    chainId: +t.chainId,
                    token: t.address,
                });
            }
            return balance;
        }
        catch (error) {
            return {
                decimals: t.decimals,
                formatted: "0",
                symbol: t.symbol,
                value: constants.Zero,
            };
        }
    }))));
    return tokens.map((t, i) => (Object.assign(Object.assign({}, t), { balance: utils.formatUnits(balances[i].value, t.decimals) })));
});
export const getAllEvmTokensBalance = (evmTokens, userAddress) => __awaiter(void 0, void 0, void 0, function* () {
    // Some tokens don't support multicall, so we need to fetch them with Promise.all
    // TODO: Once we support multicall on all chains, we can remove this split
    const chainWithoutMulticall = [314, 3141]; // Filecoin, & Filecoin testnet
    const splittedTokensByMultiCallSupport = evmTokens.reduce((acc, token) => {
        if (chainWithoutMulticall.includes(+token.chainId)) {
            acc[0].push(token);
        }
        else {
            acc[1].push(token);
        }
        return acc;
    }, [[], []]);
    const tokensNotSupportingMulticall = splittedTokensByMultiCallSupport[0];
    const tokensSupportingMulticall = splittedTokensByMultiCallSupport[1];
    const tokensMulticall = yield getTokensSupportingMultiCall(tokensSupportingMulticall, userAddress);
    const tokensNotMultiCall = yield getTokensWithoutMultiCall(tokensNotSupportingMulticall, userAddress);
    return [...tokensMulticall, ...tokensNotMultiCall];
});
/**
 * We'll get the current block of a given RPC to see if we can query it
 * Without getting CORS error or any other error
 * @param rpc
 * @returns
 */
const testCosmosRpc = (rpc) => __awaiter(void 0, void 0, void 0, function* () {
    let rpcIsValid = false;
    try {
        const client = yield StargateClient.connect(rpc);
        const block = yield client.getBlock();
        rpcIsValid = !!block.id;
    }
    catch (error) {
        rpcIsValid = false;
    }
    return rpcIsValid;
});
export const getWorkingCosmosRpcUrl = (chainData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const rpcList = (_a = chainData.rpcList) !== null && _a !== void 0 ? _a : [];
    // if rpcList is empty, use the default rpc
    if (rpcList.length === 0) {
        try {
            const isValid = yield testCosmosRpc(chainData.rpc);
            if (isValid) {
                return chainData.rpc;
            }
        }
        catch (error) {
            console.log(`Error fetching rpc url: ${chainData.rpc} - Error: ${error === null || error === void 0 ? void 0 : error.toString()}`);
        }
    }
    // if rpcList is not empty, try to fetch each rpc until we find a valid one
    for (const rpc of rpcList) {
        try {
            // eslint-disable-next-line no-await-in-loop
            const isValid = yield testCosmosRpc(rpc);
            if (isValid) {
                return rpc;
            }
        }
        catch (error) {
            console.log(`Error fetching rpc url: ${chainData.rpc} - Error: ${error === null || error === void 0 ? void 0 : error.toString()}`);
        }
    }
    // In the case that all rpcs are invalid, return the default rpc anyway
    return chainData.rpc;
});
//# sourceMappingURL=rpcService.js.map