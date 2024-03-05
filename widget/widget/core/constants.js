import { ChainType } from "@0xsquid/sdk";
import { CoinbaseWalletConnector } from "@wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "@wagmi/connectors/injected";
import { MetaMaskConnector } from "@wagmi/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/connectors/walletConnect";
import { walletIcons } from "../assets/images/icons/wallets";
import { squidApiBaseUrl } from "./externalLinks";
import { WindowWalletFlag } from "./types/wallet";
export const nativeEvmTokenAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const maxPriceImpact = 30;
export const limitTradeSizeUsd = 10000000;
export const defaultSlippage = 1.5;
export const chainIdResetValue = -1;
export const destinationAddressResetValue = "null";
export const widgetHeight = 684;
export const widgetWidth = 440;
export const gasRefundMultiplier = 25;
export const transparentClass = "tw-bg-opacity-80";
export const subTransparentClass = "tw-bg-opacity-50";
export const widgetHeaderSize = {
    height: 60,
    paddingY: 16,
};
export const squidTheme = {
    neutralContent: "#747379",
    baseContent: "#2E2C33",
    base100: "#F5F5F7",
    base200: "#F2F2F2",
    base300: "#DADADA",
    error: "#ED6A5E",
    warning: "#FFB155",
    success: "#2EAEB0",
    primary: "#2E2C33",
    secondary: "#070707",
    secondaryContent: "#FFFFFF",
    neutral: "#FFFFFF",
    roundedBtn: "999px",
    roundedCornerBtn: "999px",
    roundedBox: "1rem",
    roundedDropDown: "999px",
};
export const defaultValues = {
    config: {
        integratorId: "squid-swap-widget",
        companyName: "Squid",
        style: squidTheme,
        slippage: defaultSlippage,
        infiniteApproval: false,
        enableExpress: true,
        apiUrl: squidApiBaseUrl,
        mainLogoUrl: undefined,
        comingSoonChainIds: [],
        titles: {
            swap: "Swap",
            settings: "Settings",
            wallets: "Wallets",
            tokens: "Select Token",
            chains: "Select Chain",
            history: "History",
            transaction: "Transaction",
            allTokens: "Select Token",
            destination: "Destination address",
        },
        priceImpactWarnings: {
            warning: 3,
            critical: 5,
        },
    },
};
export var PriorityConnectors;
(function (PriorityConnectors) {
    PriorityConnectors["Safe"] = "safe";
    PriorityConnectors["LedgerLive"] = "ledgerLive";
})(PriorityConnectors || (PriorityConnectors = {}));
export const wallets = [
    {
        name: "Trust Wallet",
        type: ChainType.EVM,
        connectorId: "trustwallet",
        connectorName: "Trust Wallet",
        windowFlag: WindowWalletFlag.TrustWallet,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Trust Wallet",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.trustwallet) &&
                    (window === null || window === void 0 ? void 0 : window.trustwallet)
                    ? window === null || window === void 0 ? void 0 : window.trustwallet
                    : undefined,
            },
        }),
        icon: walletIcons.trustwallet,
        canSwitchWallets: false,
    },
    {
        name: "Metamask",
        type: ChainType.EVM,
        connectorId: "metaMask",
        connectorName: "MetaMask",
        connector: (chains) => new MetaMaskConnector({ chains }),
        icon: walletIcons.metamask,
        windowFlag: WindowWalletFlag.MetaMask,
        canSwitchWallets: true,
    },
    {
        name: "Coinbase Wallet",
        type: ChainType.EVM,
        connectorId: "coinbaseWallet",
        connectorName: "Coinbase Wallet",
        windowFlag: WindowWalletFlag.Coinbase,
        connector: (chains) => new CoinbaseWalletConnector({
            chains,
            options: { appName: "Coinbase" },
        }),
        icon: walletIcons.coinbase,
        canSwitchWallets: false,
    },
    {
        name: "XDEFI Wallet",
        type: ChainType.EVM,
        connectorId: "xdefi",
        connectorName: "XDefi",
        windowFlag: WindowWalletFlag.Xdefi,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "XDefi",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.xfi) &&
                    (window === null || window === void 0 ? void 0 : window.xfi.ethereum)
                    ? window === null || window === void 0 ? void 0 : window.xfi.ethereum
                    : undefined,
            },
        }),
        icon: walletIcons.xdefi,
        canSwitchWallets: false,
    },
    {
        name: "Rabby",
        type: ChainType.EVM,
        connectorId: "rabby",
        connectorName: "Rabby",
        windowFlag: WindowWalletFlag.Rabby,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Rabby",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.ethereum) &&
                    (window === null || window === void 0 ? void 0 : window.ethereum.isRabby)
                    ? window === null || window === void 0 ? void 0 : window.ethereum
                    : undefined,
            },
        }),
        icon: walletIcons.rabby,
        canSwitchWallets: false,
    },
    {
        name: "Injected",
        type: ChainType.EVM,
        connectorId: "injected",
        connectorName: "Injected",
        windowFlag: WindowWalletFlag.Injected,
        connector: (chains) => new InjectedConnector({
            chains,
        }),
        icon: walletIcons.injected,
        canSwitchWallets: false,
    },
    {
        name: "Zerion",
        type: ChainType.EVM,
        connectorId: "zerion",
        connectorName: "Zerion",
        windowFlag: WindowWalletFlag.Zerion,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Zerion",
                shimDisconnect: true,
                getProvider: () => {
                    var _a;
                    return typeof window !== "undefined" &&
                        (window === null || window === void 0 ? void 0 : window.ethereum) &&
                        ((_a = window === null || window === void 0 ? void 0 : window.ethereum) === null || _a === void 0 ? void 0 : _a.isZerion)
                        ? window === null || window === void 0 ? void 0 : window.zerionWallet
                        : undefined;
                },
            },
        }),
        icon: walletIcons.zerion,
        canSwitchWallets: false,
    },
    {
        name: "WalletConnect",
        type: ChainType.EVM,
        connectorId: "walletConnect",
        connectorName: "WalletConnect",
        windowFlag: WindowWalletFlag.WalletConnect,
        connector: (chains) => new WalletConnectConnector({
            chains,
            options: {
                showQrModal: true,
                projectId: "db6a4f6ff58e4172b2fd52f01360bc49",
            },
        }),
        icon: walletIcons.walletConnect,
        canSwitchWallets: false,
    },
    {
        name: "Cosmostation",
        type: ChainType.EVM,
        connectorId: "cosmostation",
        connectorName: "Cosmostation",
        windowFlag: WindowWalletFlag.CosmostationEVM,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Cosmostation",
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.cosmostation)
                    ? window === null || window === void 0 ? void 0 : window.cosmostation.ethereum
                    : undefined,
            },
        }),
        icon: walletIcons.cosmostation,
        canSwitchWallets: false,
    },
    {
        name: "BitGet Wallet",
        type: ChainType.EVM,
        connectorId: "bitget",
        connectorName: "BitGet Wallet",
        windowFlag: WindowWalletFlag.BitGet,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "BitGet Wallet",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.bitkeep) &&
                    (window === null || window === void 0 ? void 0 : window.bitkeep.ethereum)
                    ? window === null || window === void 0 ? void 0 : window.bitkeep.ethereum
                    : undefined,
            },
        }),
        icon: walletIcons.bitget,
        canSwitchWallets: false,
    },
    {
        name: "OKX Wallet",
        type: ChainType.EVM,
        connectorId: "okx",
        connectorName: "okx",
        windowFlag: WindowWalletFlag.OKX,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "OKX",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.ethereum) &&
                    (window === null || window === void 0 ? void 0 : window.okxwallet)
                    ? window === null || window === void 0 ? void 0 : window.okxwallet
                    : undefined,
            },
        }),
        icon: walletIcons.okx,
        canSwitchWallets: false,
    },
    {
        name: "Coin98",
        type: ChainType.EVM,
        connectorId: "coin98",
        connectorName: "Coin98",
        windowFlag: WindowWalletFlag.Coin98,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Coin98",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" && (window === null || window === void 0 ? void 0 : window.coin98)
                    ? window === null || window === void 0 ? void 0 : window.coin98.provider
                    : undefined,
            },
        }),
        icon: walletIcons.coin98,
        canSwitchWallets: false,
    },
    {
        name: "Defi Connect",
        type: ChainType.EVM,
        connectorId: "deficonnect",
        connectorName: "Defi Connect",
        windowFlag: WindowWalletFlag.DefiConnect,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Defi Connect",
                shimDisconnect: true,
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.deficonnectProvider)
                    ? window === null || window === void 0 ? void 0 : window.deficonnectProvider
                    : undefined,
            },
        }),
        icon: walletIcons.defiConnect,
        canSwitchWallets: false,
    },
    {
        name: "Keplr",
        type: ChainType.Cosmos,
        windowFlag: WindowWalletFlag.Keplr,
        icon: walletIcons.keplr,
        canSwitchWallets: false,
        connectorId: "keplr",
        connectorName: "Keplr",
    },
    {
        name: "XDEFI Wallet",
        type: ChainType.Cosmos,
        connectorId: "xdeficosmos",
        connectorName: "XDefi",
        windowFlag: WindowWalletFlag.XdefiCosmos,
        icon: walletIcons.xdefi,
        canSwitchWallets: false,
    },
    {
        name: "Leap",
        type: ChainType.Cosmos,
        windowFlag: WindowWalletFlag.Leap,
        icon: walletIcons.leap,
        canSwitchWallets: false,
        connectorId: "leap",
        connectorName: "Leap",
    },
    {
        name: "Cosmostation",
        type: ChainType.Cosmos,
        connectorId: "cosmostationCosmos",
        connectorName: "Cosmostation Cosmos",
        windowFlag: WindowWalletFlag.CosmostationCosmos,
        connector: (chains) => new InjectedConnector({
            chains,
            options: {
                name: "Cosmostation",
                getProvider: () => typeof window !== "undefined" &&
                    (window === null || window === void 0 ? void 0 : window.cosmostation)
                    ? window === null || window === void 0 ? void 0 : window.cosmostation.ethereum
                    : undefined,
            },
        }),
        icon: walletIcons.cosmostation,
        canSwitchWallets: false,
    },
    {
        name: "Fetch.ai",
        type: ChainType.Cosmos,
        connectorId: "fetchai",
        connectorName: "Fetch.ai",
        windowFlag: WindowWalletFlag.FetchAi,
        icon: walletIcons.fetchai,
        canSwitchWallets: false,
    },
    {
        name: "Cosmos Extension",
        type: ChainType.Cosmos,
        connectorId: "snapper",
        connectorName: "Cosmos Extension",
        windowFlag: WindowWalletFlag.Snapper,
        icon: walletIcons.metamask,
        canSwitchWallets: false,
    },
];
export const axelarSuccessStatuses = [
    "destination_executed",
    "executed",
    "express_executed",
];
export const axelarEndStatuses = [
    ...axelarSuccessStatuses,
    "error_fetching_status",
    "error",
];
export const walletStoreLinks = {
    leap: {
        chrome: "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
        firefox: "",
    },
    keplr: {
        chrome: "https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/keplr/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
    },
    metaMask: {
        chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
        firefox: "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search",
    },
    walletConnect: {
        chrome: "https://chrome.google.com/webstore/detail/walletconnect-extension/omaakakjkplhggaabmbmcbmipdiboenn",
        firefox: "",
    },
    coinbaseWallet: {
        chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
        firefox: "",
    },
    cosmostation: {
        chrome: "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
        firefox: "",
    },
    cosmostationCosmos: {
        chrome: "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
        firefox: "",
    },
    xdefi: {
        chrome: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
        firefox: "",
    },
    xdeficosmos: {
        chrome: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
        firefox: "",
    },
    bitget: {
        chrome: "https://chrome.google.com/webstore/detail/bitget-wallet-formerly-bi/jiidiaalihmmhddjgbnbgdfflelocpak",
        firefox: "",
    },
    trustwallet: {
        chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
        firefox: "",
    },
    fetchai: {
        chrome: "https://chrome.google.com/webstore/detail/fetch-wallet/ellkdbaphhldpeajbepobaecooaoafpg",
        firefox: "",
    },
    coin98: {
        chrome: "https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",
        firefox: "",
    },
    rabby: {
        chrome: "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch",
        firefox: "",
    },
    okx: {
        chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
        firefox: "",
    },
    injected: {
        chrome: "",
        firefox: "",
    },
    zerion: {
        chrome: "https://chrome.google.com/webstore/detail/zerion-wallet-for-web3-nf/klghhnkeealcohjjanjjdaeeggmfmlpl",
        firefox: "",
    },
    deficonnect: {
        chrome: "https://chrome.google.com/webstore/detail/cryptocom-wallet-extensio/hifafgmccdpekplomjjkcfgodnhcellj",
        firefox: "",
    },
    snapper: {
        chrome: "https://metamask.mysticlabs.xyz/",
        firefox: "",
    },
};
//# sourceMappingURL=constants.js.map