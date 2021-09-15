"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletProvider = exports.WalletModalProvider = exports.WalletModal = exports.useWalletModal = exports.WalletModalContext = void 0;
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const wallet_adapter_wallets_1 = require("@solana/wallet-adapter-wallets");
const antd_1 = require("antd");
const react_1 = __importStar(require("react"));
const utils_1 = require("../utils");
const components_1 = require("../components");
exports.WalletModalContext = react_1.createContext({});
function useWalletModal() {
    return react_1.useContext(exports.WalletModalContext);
}
exports.useWalletModal = useWalletModal;
const WalletModal = () => {
    const { wallets, wallet: selected, select } = wallet_adapter_react_1.useWallet();
    const { visible, setVisible } = useWalletModal();
    const [showWallets, setShowWallets] = react_1.useState(false);
    const close = react_1.useCallback(() => {
        setVisible(false);
        setShowWallets(false);
    }, [setVisible, setShowWallets]);
    return (react_1.default.createElement(components_1.MetaplexModal, { visible: visible, onCancel: close },
        react_1.default.createElement("div", { style: {
                background: 'linear-gradient(180deg, #D329FC 0%, #8F6DDE 49.48%, #19E6AD 100%)',
                borderRadius: 36,
                width: 50,
                height: 50,
                textAlign: 'center',
                verticalAlign: 'middle',
                fontWeight: 700,
                fontSize: '1.3rem',
                lineHeight: 2.4,
                marginBottom: 10,
            } }, "SCG"),
        react_1.default.createElement("h3", null, selected ? 'Change provider' : 'Welcome to SolCoolGirl'),
        react_1.default.createElement("p", null, selected
            ? 'Feel free to switch wallet provider'
            : 'You must be signed in to place a bid'),
        react_1.default.createElement("br", null),
        selected || showWallets ? (wallets.map(wallet => {
            return (react_1.default.createElement(antd_1.Button, { key: wallet.name, size: "large", type: wallet === selected ? 'primary' : 'ghost', onClick: () => {
                    select(wallet.name);
                    close();
                }, icon: react_1.default.createElement("img", { alt: `${wallet.name}`, width: 20, height: 20, src: wallet.icon, style: { marginRight: 8 } }), style: {
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: 8,
                } }, wallet.name));
        })) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Button, { className: "metaplex-button", style: {
                    width: '80%',
                    fontWeight: 'unset',
                }, onClick: () => {
                    select(wallet_adapter_wallets_1.WalletName.Phantom);
                    close();
                } },
                react_1.default.createElement("span", null,
                    react_1.default.createElement("img", { src: "https://www.phantom.app/img/logo.png", style: { width: '1.2rem' } }),
                    "\u00A0Sign in with Phantom"),
                react_1.default.createElement("span", null, ">")),
            react_1.default.createElement("p", { onClick: () => setShowWallets(true), style: { cursor: 'pointer', marginTop: 10 } }, "Select a different Solana wallet")))));
};
exports.WalletModal = WalletModal;
const WalletModalProvider = ({ children, }) => {
    const { publicKey } = wallet_adapter_react_1.useWallet();
    const [connected, setConnected] = react_1.useState(!!publicKey);
    const [visible, setVisible] = react_1.useState(false);
    react_1.useEffect(() => {
        if (publicKey) {
            const base58 = publicKey.toBase58();
            const keyToDisplay = base58.length > 20
                ? `${base58.substring(0, 7)}.....${base58.substring(base58.length - 7, base58.length)}`
                : base58;
            utils_1.notify({
                message: 'Wallet update',
                description: 'Connected to wallet ' + keyToDisplay,
            });
        }
    }, [publicKey]);
    react_1.useEffect(() => {
        if (!publicKey && connected) {
            utils_1.notify({
                message: 'Wallet update',
                description: 'Disconnected from wallet',
            });
        }
        setConnected(!!publicKey);
    }, [publicKey, connected, setConnected]);
    return (react_1.default.createElement(exports.WalletModalContext.Provider, { value: {
            visible,
            setVisible,
        } },
        children,
        react_1.default.createElement(exports.WalletModal, null)));
};
exports.WalletModalProvider = WalletModalProvider;
const WalletProvider = ({ children }) => {
    const wallets = react_1.useMemo(() => [
        wallet_adapter_wallets_1.getPhantomWallet(),
        wallet_adapter_wallets_1.getSolflareWallet(),
        // getTorusWallet({
        //   options: {
        //     // @FIXME: this should be changed for Metaplex, and by each Metaplex storefront
        //     clientId:
        //       'BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ',
        //   },
        // }),
        // getLedgerWallet(),
        // getSolongWallet(),
        // getMathWallet(),
        wallet_adapter_wallets_1.getSolletWallet(),
    ], []);
    const onError = react_1.useCallback((error) => {
        console.error(error);
        utils_1.notify({
            message: 'Wallet error',
            description: error.message,
        });
    }, []);
    return (react_1.default.createElement(wallet_adapter_react_1.WalletProvider, { wallets: wallets, onError: onError, autoConnect: true },
        react_1.default.createElement(exports.WalletModalProvider, null, children)));
};
exports.WalletProvider = WalletProvider;
//# sourceMappingURL=wallet.js.map