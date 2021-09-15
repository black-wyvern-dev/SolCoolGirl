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
exports.ConnectButton = void 0;
const antd_1 = require("antd");
const react_1 = __importStar(require("react"));
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const contexts_1 = require("../../contexts");
const ConnectButton = (props) => {
    const { onClick, children, disabled, allowWalletChange, ...rest } = props;
    const { wallet, connect, connected } = wallet_adapter_react_1.useWallet();
    const { setVisible } = contexts_1.useWalletModal();
    const open = react_1.useCallback(() => setVisible(true), [setVisible]);
    const handleClick = react_1.useCallback(() => (wallet ? connect().catch(() => { }) : open()), [wallet, connect, open]);
    // only show if wallet selected or user connected
    if (!wallet || !allowWalletChange) {
        return (react_1.default.createElement(antd_1.Button, { ...rest, onClick: handleClick, disabled: connected && disabled }, connected ? props.children : 'Connect'));
    }
    return (react_1.default.createElement(antd_1.Dropdown.Button, { onClick: handleClick, disabled: connected && disabled, overlay: react_1.default.createElement(antd_1.Menu, null,
            react_1.default.createElement(antd_1.Menu.Item, { onClick: open }, "Change Wallet")) }, "Connect"));
};
exports.ConnectButton = ConnectButton;
//# sourceMappingURL=index.js.map