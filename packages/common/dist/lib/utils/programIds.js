"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programIds = exports.setProgramIds = exports.getStoreID = void 0;
const utils_1 = require("../utils");
const ids_1 = require("./ids");
const getStoreID = async (storeOwnerAddress) => {
    if (!storeOwnerAddress) {
        return undefined;
    }
    const programs = await utils_1.findProgramAddress([
        Buffer.from('metaplex'),
        ids_1.toPublicKey(ids_1.METAPLEX_ID).toBuffer(),
        ids_1.toPublicKey(storeOwnerAddress).toBuffer(),
    ], ids_1.toPublicKey(ids_1.METAPLEX_ID));
    const storeAddress = programs[0];
    return storeAddress;
};
exports.getStoreID = getStoreID;
const setProgramIds = async (store) => {
    STORE = store ? ids_1.toPublicKey(store) : undefined;
};
exports.setProgramIds = setProgramIds;
let STORE;
const programIds = () => {
    return {
        token: ids_1.TOKEN_PROGRAM_ID,
        associatedToken: ids_1.SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        bpf_upgrade_loader: ids_1.BPF_UPGRADE_LOADER_ID,
        system: ids_1.SYSTEM,
        metadata: ids_1.METADATA_PROGRAM_ID,
        memo: ids_1.MEMO_ID,
        vault: ids_1.VAULT_ID,
        auction: ids_1.AUCTION_ID,
        metaplex: ids_1.METAPLEX_ID,
        store: STORE,
    };
};
exports.programIds = programIds;
//# sourceMappingURL=programIds.js.map