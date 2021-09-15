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
exports.Settings = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
const connection_1 = require("../../contexts/connection");
const contexts_1 = require("../../contexts");
const utils_1 = require("../../utils");
const icons_1 = require("@ant-design/icons");
const Settings = ({ additionalSettings, }) => {
    const { connected, disconnect, publicKey } = wallet_adapter_react_1.useWallet();
    const { endpoint, setEndpoint } = connection_1.useConnectionConfig();
    const { setVisible } = contexts_1.useWalletModal();
    const open = react_1.useCallback(() => setVisible(true), [setVisible]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { display: 'grid' } },
            "Network:",
            ' ',
            react_1.default.createElement(antd_1.Select, { onSelect: setEndpoint, value: endpoint, style: { marginBottom: 20 } }, connection_1.ENDPOINTS.map(({ name, endpoint }) => (react_1.default.createElement(antd_1.Select.Option, { value: endpoint, key: endpoint }, name)))),
            connected && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", null, "Wallet:"),
                publicKey && (react_1.default.createElement(antd_1.Button, { style: { marginBottom: 5 }, onClick: async () => {
                        if (publicKey) {
                            await navigator.clipboard.writeText(publicKey.toBase58());
                            utils_1.notify({
                                message: 'Wallet update',
                                description: 'Address copied to clipboard',
                            });
                        }
                    } },
                    react_1.default.createElement(icons_1.CopyOutlined, null),
                    utils_1.shortenAddress(publicKey.toBase58()))),
                react_1.default.createElement(antd_1.Button, { onClick: open, style: { marginBottom: 5 } }, "Change"),
                react_1.default.createElement(antd_1.Button, { type: "primary", onClick: () => disconnect().catch(), style: { marginBottom: 5 } }, "Disconnect"))),
            additionalSettings)));
};
exports.Settings = Settings;
//# sourceMappingURL=index.js.map