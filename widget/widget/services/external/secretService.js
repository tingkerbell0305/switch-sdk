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
import { formatUnits } from "ethers/lib/utils.js";
import { SecretNetworkClient } from "secretjs";
/**
 * Fetch secret network token balance
 * Using the permit signature, see permit function for more details
 * @param secretJS
 * @param contract
 * @param chainId
 * @param walletAddress
 * @param permit
 * @returns
 */
export const getTokenBalance = (secretJS, contract, permit) => __awaiter(void 0, void 0, void 0, function* () {
    if (permit) {
        const msg = {
            balance: {},
        };
        const result = yield secretJS.query.compute.queryContract({
            contract_address: contract.address,
            code_hash: contract.codeHash,
            query: {
                with_permit: {
                    query: msg,
                    permit,
                },
            },
        });
        return result;
    }
    return -1;
});
export const getPermit = (chainId, contracts, address) => __awaiter(void 0, void 0, void 0, function* () {
    const contractsString = contracts.join("_");
    const permKey = `perm_${chainId}_${contractsString}_${address}`;
    let permit;
    const permitStored = window.localStorage.getItem(permKey);
    if (permitStored)
        permit = JSON.parse(permitStored);
    // Not able to fetch permit signature from local storage,
    // Ask user to sign message
    if (!permit) {
        try {
            const result = yield window.keplr.signAmino(chainId, address, {
                chain_id: chainId,
                account_number: "0",
                sequence: "0",
                fee: {
                    amount: [{ denom: "uscrt", amount: "0" }],
                    gas: "1",
                },
                msgs: [
                    {
                        type: "query_permit",
                        value: {
                            permit_name: "secret-bridge-balance",
                            allowed_tokens: contracts,
                            permissions: ["balance"],
                        },
                    },
                ],
                memo: "",
            }, {
                preferNoSetFee: true,
                preferNoSetMemo: true,
            });
            permit = {
                params: {
                    permit_name: "secret-bridge-balance",
                    allowed_tokens: contracts,
                    chain_id: chainId,
                    permissions: ["balance"],
                },
                signature: result.signature,
            };
            window.localStorage.setItem(permKey, JSON.stringify(permit));
        }
        catch (err) {
            console.log("--- PERMIT ERROR ---");
            console.log(err);
        }
    }
    return permit;
});
/**
 * Fetches the secret balance of the user
 * This has a different logic than the other balances because Secret network hides the balance of the user by design
 * So we need to fetch the balance in a different way
 */
export const SECRET_CHAIN_ID = "secret-4";
export const fetchAllSecretBalances = (chainData, userAddress, secretTokens, keplr) => __awaiter(void 0, void 0, void 0, function* () {
    if (!keplr)
        return [];
    // Enables app to utilize keplr's secret utilities
    yield keplr.enable(SECRET_CHAIN_ID);
    // Create a client that handles the query encryption
    const client = new SecretNetworkClient({
        url: chainData.rest,
        chainId: SECRET_CHAIN_ID,
        wallet: keplr.getOfflineSignerOnlyAmino(SECRET_CHAIN_ID),
        encryptionUtils: keplr.getEnigmaUtils(SECRET_CHAIN_ID),
        walletAddress: userAddress,
    });
    // Get secret tokens
    const permit = yield getPermit(SECRET_CHAIN_ID, secretTokens.map((st) => st.address), userAddress);
    // Fetching all balances in parallel
    const privateTokens = yield Promise.all(secretTokens
        .filter((t) => !!t.codeHash)
        .map((token) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const result = (yield getTokenBalance(client, {
            address: token.address,
            codeHash: (_a = token.codeHash) !== null && _a !== void 0 ? _a : "",
        }, permit));
        return Object.assign(Object.assign({}, token), { balance: formatUnits(result.balance.amount, token === null || token === void 0 ? void 0 : token.decimals) });
    })));
    // Use Stargate getBalance for SCRT
    const stargateClient = yield StargateClient.connect(chainData.rpc);
    const nativeSecretToken = secretTokens.find((t) => t.address === "uscrt");
    const publicTokenBalance = yield stargateClient.getBalance(userAddress, "uscrt");
    const publicTokenWithBalance = Object.assign(Object.assign({}, nativeSecretToken), { balance: formatUnits(publicTokenBalance.amount, nativeSecretToken === null || nativeSecretToken === void 0 ? void 0 : nativeSecretToken.decimals) });
    return [...privateTokens, publicTokenWithBalance];
});
//# sourceMappingURL=secretService.js.map