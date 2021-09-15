"use strict";
// const createPaymentTransaction = () => {
//   // TODO:
//   const tx = new Transaction();
//   tx.add(SystemProgram.transfer({
//     fromPubkey: walletKey.publicKey,
//     toPubkey: PAYMENT_WALLET,
//     lamports: storageCost,
//   }));
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromUTF8Array = exports.sleep = exports.sendSignedTransaction = exports.getUnixTs = exports.sendTransactionWithRetryWithKeypair = void 0;
var web3_js_1 = require("@solana/web3.js");
var sendTransactionWithRetryWithKeypair = function (connection, wallet, instructions, signers, commitment, includesFeePayer, block, beforeSend) {
    if (commitment === void 0) { commitment = 'singleGossip'; }
    if (includesFeePayer === void 0) { includesFeePayer = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var transaction, _a, _b, _c, txid, slot;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    transaction = new web3_js_1.Transaction();
                    instructions.forEach(function (instruction) { return transaction.add(instruction); });
                    _a = transaction;
                    _b = block;
                    if (_b) return [3 /*break*/, 2];
                    return [4 /*yield*/, connection.getRecentBlockhash(commitment)];
                case 1:
                    _b = (_d.sent());
                    _d.label = 2;
                case 2:
                    _a.recentBlockhash = (_b).blockhash;
                    if (includesFeePayer) {
                        transaction.setSigners.apply(transaction, __spreadArray([], __read(signers.map(function (s) { return s.publicKey; }))));
                    }
                    else {
                        transaction.setSigners.apply(transaction, __spreadArray([
                            // fee payed by the wallet owner
                            wallet.publicKey], __read(signers.map(function (s) { return s.publicKey; }))));
                    }
                    if (signers.length > 0) {
                        transaction.partialSign.apply(transaction, __spreadArray([], __read(signers)));
                    }
                    transaction.sign(wallet);
                    if (beforeSend) {
                        beforeSend();
                    }
                    return [4 /*yield*/, sendSignedTransaction({
                            connection: connection,
                            signedTransaction: transaction,
                        })];
                case 3:
                    _c = _d.sent(), txid = _c.txid, slot = _c.slot;
                    return [2 /*return*/, { txid: txid, slot: slot }];
            }
        });
    });
};
exports.sendTransactionWithRetryWithKeypair = sendTransactionWithRetryWithKeypair;
var getUnixTs = function () {
    return new Date().getTime() / 1000;
};
exports.getUnixTs = getUnixTs;
var DEFAULT_TIMEOUT = 15000;
function sendSignedTransaction(_a) {
    var signedTransaction = _a.signedTransaction, connection = _a.connection, _b = _a.timeout, timeout = _b === void 0 ? DEFAULT_TIMEOUT : _b;
    return __awaiter(this, void 0, void 0, function () {
        var rawTransaction, startTime, slot, txid, done, confirmation, err_1, simulateResult, e_1, i, line;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    rawTransaction = signedTransaction.serialize();
                    startTime = exports.getUnixTs();
                    slot = 0;
                    return [4 /*yield*/, connection.sendRawTransaction(rawTransaction, {
                            skipPreflight: true,
                        })];
                case 1:
                    txid = _c.sent();
                    console.log('Started awaiting confirmation for', txid);
                    done = false;
                    (function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(!done && exports.getUnixTs() - startTime < timeout)) return [3 /*break*/, 2];
                                    connection.sendRawTransaction(rawTransaction, {
                                        skipPreflight: true,
                                    });
                                    return [4 /*yield*/, sleep(500)];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 0];
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); })();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, 9, 10]);
                    return [4 /*yield*/, awaitTransactionSignatureConfirmation(txid, timeout, connection, 'recent', true)];
                case 3:
                    confirmation = _c.sent();
                    if (!confirmation)
                        throw new Error('Timed out awaiting confirmation on transaction');
                    if (confirmation.err) {
                        console.error(confirmation.err);
                        throw new Error('Transaction failed: Custom instruction error');
                    }
                    slot = (confirmation === null || confirmation === void 0 ? void 0 : confirmation.slot) || 0;
                    return [3 /*break*/, 10];
                case 4:
                    err_1 = _c.sent();
                    console.error('Timeout Error caught', err_1);
                    if (err_1.timeout) {
                        throw new Error('Timed out awaiting confirmation on transaction');
                    }
                    simulateResult = null;
                    _c.label = 5;
                case 5:
                    _c.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, simulateTransaction(connection, signedTransaction, 'single')];
                case 6:
                    simulateResult = (_c.sent()).value;
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _c.sent();
                    return [3 /*break*/, 8];
                case 8:
                    if (simulateResult && simulateResult.err) {
                        if (simulateResult.logs) {
                            for (i = simulateResult.logs.length - 1; i >= 0; --i) {
                                line = simulateResult.logs[i];
                                if (line.startsWith('Program log: ')) {
                                    throw new Error('Transaction failed: ' + line.slice('Program log: '.length));
                                }
                            }
                        }
                        throw new Error(JSON.stringify(simulateResult.err));
                    }
                    return [3 /*break*/, 10];
                case 9:
                    done = true;
                    return [7 /*endfinally*/];
                case 10:
                    console.log('Latency', txid, exports.getUnixTs() - startTime);
                    return [2 /*return*/, { txid: txid, slot: slot }];
            }
        });
    });
}
exports.sendSignedTransaction = sendSignedTransaction;
function simulateTransaction(connection, transaction, commitment) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, signData, wireTransaction, encodedTransaction, config, args, res;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // @ts-ignore
                    _a = transaction;
                    return [4 /*yield*/, connection._recentBlockhash(
                        // @ts-ignore
                        connection._disableBlockhashCaching)];
                case 1:
                    // @ts-ignore
                    _a.recentBlockhash = _b.sent();
                    signData = transaction.serializeMessage();
                    wireTransaction = transaction._serialize(signData);
                    encodedTransaction = wireTransaction.toString('base64');
                    config = { encoding: 'base64', commitment: commitment };
                    args = [encodedTransaction, config];
                    return [4 /*yield*/, connection._rpcRequest('simulateTransaction', args)];
                case 2:
                    res = _b.sent();
                    if (res.error) {
                        throw new Error('failed to simulate transaction: ' + res.error.message);
                    }
                    return [2 /*return*/, res.result];
            }
        });
    });
}
function awaitTransactionSignatureConfirmation(txid, timeout, connection, commitment, queryStatus) {
    if (commitment === void 0) { commitment = 'recent'; }
    if (queryStatus === void 0) { queryStatus = false; }
    return __awaiter(this, void 0, void 0, function () {
        var done, status, subId;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    done = false;
                    status = {
                        slot: 0,
                        confirmations: 0,
                        err: null,
                    };
                    subId = 0;
                    return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        setTimeout(function () {
                                            if (done) {
                                                return;
                                            }
                                            done = true;
                                            console.log('Rejecting for timeout...');
                                            reject({ timeout: true });
                                        }, timeout);
                                        try {
                                            subId = connection.onSignature(txid, function (result, context) {
                                                done = true;
                                                status = {
                                                    err: result.err,
                                                    slot: context.slot,
                                                    confirmations: 0,
                                                };
                                                if (result.err) {
                                                    console.log('Rejected via websocket', result.err);
                                                    reject(status);
                                                }
                                                else {
                                                    console.log('Resolved via websocket', result);
                                                    resolve(status);
                                                }
                                            }, commitment);
                                        }
                                        catch (e) {
                                            done = true;
                                            console.error('WS error in setup', txid, e);
                                        }
                                        _a.label = 1;
                                    case 1:
                                        if (!(!done && queryStatus)) return [3 /*break*/, 3];
                                        // eslint-disable-next-line no-loop-func
                                        (function () { return __awaiter(_this, void 0, void 0, function () {
                                            var signatureStatuses, e_2;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 2, , 3]);
                                                        return [4 /*yield*/, connection.getSignatureStatuses([
                                                                txid,
                                                            ])];
                                                    case 1:
                                                        signatureStatuses = _a.sent();
                                                        status = signatureStatuses && signatureStatuses.value[0];
                                                        if (!done) {
                                                            if (!status) {
                                                                console.log('REST null result for', txid, status);
                                                            }
                                                            else if (status.err) {
                                                                console.log('REST error for', txid, status);
                                                                done = true;
                                                                reject(status.err);
                                                            }
                                                            else if (!status.confirmations) {
                                                                console.log('REST no confirmations for', txid, status);
                                                            }
                                                            else {
                                                                console.log('REST confirmation for', txid, status);
                                                                done = true;
                                                                resolve(status);
                                                            }
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        e_2 = _a.sent();
                                                        if (!done) {
                                                            console.log('REST connection error: txid', txid, e_2);
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); })();
                                        return [4 /*yield*/, sleep(2000)];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 1];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    status = _a.sent();
                    //@ts-ignore
                    if (connection._signatureSubscriptions[subId])
                        connection.removeSignatureListener(subId);
                    done = true;
                    console.log('Returning status', status);
                    return [2 /*return*/, status];
            }
        });
    });
}
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
function fromUTF8Array(data) {
    // array of bytes
    var str = '', i;
    for (i = 0; i < data.length; i++) {
        var value = data[i];
        if (value < 0x80) {
            str += String.fromCharCode(value);
        }
        else if (value > 0xbf && value < 0xe0) {
            str += String.fromCharCode(((value & 0x1f) << 6) | (data[i + 1] & 0x3f));
            i += 1;
        }
        else if (value > 0xdf && value < 0xf0) {
            str += String.fromCharCode(((value & 0x0f) << 12) |
                ((data[i + 1] & 0x3f) << 6) |
                (data[i + 2] & 0x3f));
            i += 2;
        }
        else {
            // surrogate pair
            var charCode = (((value & 0x07) << 18) |
                ((data[i + 1] & 0x3f) << 12) |
                ((data[i + 2] & 0x3f) << 6) |
                (data[i + 3] & 0x3f)) -
                0x010000;
            str += String.fromCharCode((charCode >> 10) | 0xd800, (charCode & 0x03ff) | 0xdc00);
            i += 3;
        }
    }
    return str;
}
exports.fromUTF8Array = fromUTF8Array;
