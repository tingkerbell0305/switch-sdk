var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { IFrameEthereumProvider } from "@ledgerhq/iframe-provider";
import { AddChainError, ChainNotConfiguredError, Connector, ConnectorNotFoundError, ResourceUnavailableError, SwitchChainError, UserRejectedRequestError, normalizeChainId, } from "@wagmi/core";
import { providers } from "ethers";
import { getAddress, hexValue } from "ethers/lib/utils";
import { PriorityConnectors } from "../core/constants";
export class IFrameEthereumConnector extends Connector {
    constructor() {
        super(...arguments);
        this.id = PriorityConnectors.LedgerLive;
        this.name = "Ledger Live";
        this.ready = true;
        this.onAccountsChanged = (accounts) => {
            if (accounts.length === 0 || !accounts[0]) {
                this.emit("disconnect");
            }
            else {
                this.emit("change", { account: getAddress(accounts[0]) });
            }
        };
        this.onChainChanged = (chainId) => {
            const id = normalizeChainId(chainId);
            const unsupported = this.isChainUnsupported(id);
            this.emit("change", { chain: { id, unsupported } });
        };
        this.onDisconnect = () => {
            this.emit("disconnect");
        };
    }
    connect({ chainId } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const provider = yield this.getProvider();
                if (!provider)
                    throw new ConnectorNotFoundError();
                if (provider.on) {
                    provider.on("accountsChanged", this.onAccountsChanged);
                    provider.on("chainChanged", this.onChainChanged);
                }
                this.emit("message", { type: "connecting" });
                const account = yield this.getAccount();
                // Switch to chain if provided
                let id = yield this.getChainId();
                let unsupported = this.isChainUnsupported(id);
                if (chainId && id !== chainId) {
                    const chain = yield this.switchChain(chainId);
                    id = chain.id;
                    unsupported = this.isChainUnsupported(id);
                }
                return { account, chain: { id, unsupported }, provider };
            }
            catch (error) {
                if (this.isUserRejectedRequestError(error)) {
                    throw new UserRejectedRequestError(error);
                }
                if (error.code === -32002) {
                    throw new ResourceUnavailableError(error);
                }
                throw error;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            if (!(provider === null || provider === void 0 ? void 0 : provider.removeListener))
                return;
            provider.removeListener("accountsChanged", this.onAccountsChanged);
            provider.removeListener("chainChanged", this.onChainChanged);
        });
    }
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            if (!provider)
                throw new ConnectorNotFoundError();
            const accounts = yield provider.send("eth_requestAccounts");
            // return checksum address
            return getAddress(accounts[0]);
        });
    }
    getChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            if (!provider)
                throw new ConnectorNotFoundError();
            return provider.send("eth_chainId").then(normalizeChainId);
        });
    }
    getProvider() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.providerInstance) {
                this.providerInstance = new IFrameEthereumProvider(this.options);
            }
            return this.providerInstance;
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            const [provider, account] = yield Promise.all([
                this.getProvider(),
                this.getAccount(),
            ]);
            return new providers.Web3Provider(provider).getSigner(account);
        });
    }
    isAuthorized() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const provider = yield this.getProvider();
                if (!provider)
                    throw new ConnectorNotFoundError();
                const accounts = yield provider.send("eth_accounts");
                const account = accounts[0];
                return !!account;
            }
            catch (_a) {
                return false;
            }
        });
    }
    switchChain(chainId) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            if (!provider)
                throw new ConnectorNotFoundError();
            const id = hexValue(chainId);
            try {
                yield provider.send("wallet_switchEthereumChain", [{ chainId: id }]);
                return ((_a = this.chains.find((x) => x.id === chainId)) !== null && _a !== void 0 ? _a : {
                    id: chainId,
                    name: `Chain ${id}`,
                    network: `${id}`,
                    nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
                    rpcUrls: { default: { http: [""] }, public: { http: [""] } },
                });
            }
            catch (error) {
                const chain = this.chains.find((x) => x.id === chainId);
                if (!chain) {
                    throw new ChainNotConfiguredError({ chainId, connectorId: this.id });
                }
                // Indicates chain is not added to provider
                if (error.code === 4902 ||
                    // Unwrapping for MetaMask Mobile
                    // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
                    ((_c = (_b = error === null || error === void 0 ? void 0 : error.data) === null || _b === void 0 ? void 0 : _b.originalError) === null || _c === void 0 ? void 0 : _c.code) === 4902) {
                    try {
                        yield provider.send("wallet_addEthereumChain", [
                            {
                                chainId: id,
                                chainName: chain.name,
                                nativeCurrency: chain.nativeCurrency,
                                rpcUrls: [(_d = chain.rpcUrls.public) !== null && _d !== void 0 ? _d : chain.rpcUrls.default],
                                blockExplorerUrls: this.getBlockExplorerUrls(chain),
                            },
                        ]);
                        return chain;
                    }
                    catch (addError) {
                        if (this.isUserRejectedRequestError(addError)) {
                            throw new UserRejectedRequestError(error);
                        }
                        throw new AddChainError();
                    }
                }
                if (this.isUserRejectedRequestError(error)) {
                    throw new UserRejectedRequestError(error);
                }
                throw new SwitchChainError(error);
            }
        });
    }
    watchAsset({ address, decimals = 18, image, symbol, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield this.getProvider();
            if (!provider)
                throw new ConnectorNotFoundError();
            return provider.send("wallet_watchAsset", [
                {
                    type: "ERC20",
                    options: {
                        address,
                        decimals,
                        image,
                        symbol,
                    },
                },
            ]);
        });
    }
    // eslint-disable-next-line class-methods-use-this
    isUserRejectedRequestError(error) {
        return error.code === 4001;
    }
}
//# sourceMappingURL=LedgerLiveConnector.js.map