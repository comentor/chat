"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fbAdmin = __importStar(require("firebase-admin"));
var serviceAccount = require("./../firebase-admin.json");
var ChatApi = /** @class */ (function () {
    function ChatApi(server) {
        this.server = server;
        // console.log(this.server);
        fbAdmin.initializeApp({
            credential: fbAdmin.credential.cert(serviceAccount),
            databaseURL: "https://foko-chat.firebaseio.com"
        });
        this.firestore = fbAdmin.firestore();
        var listeningStartedAt = (new Date()).toISOString();
        this.firestore.collection('rooms').onSnapshot(function (docSnapshot) {
            docSnapshot.docChanges().forEach(function (change) {
                // console.log('======ROOMS');
                // console.log(change.doc.data());
                // console.log(change);
            });
            // console.log(`ROOMS: Received doc snapshot:`);
            // console.log(docSnapshot.changes);
            // console.log(docSnapshot);
            // ...
        }, function (err) {
            console.log("Encountered error: " + err);
        });
        this.firestore.collection('messages').onSnapshot(function (docSnapshot) {
            docSnapshot.docChanges().forEach(function (change) {
                var data = change.doc.data();
                if (data.sentAt > listeningStartedAt) {
                    console.log("I have to send an email from room " + data.roomId + " except by " + data.sentBy);
                }
            });
            // console.log(`MESSAGES: Received doc snapshot:`);
            // console.log(docSnapshot.changes);
            // console.log(docSnapshot);
            // ...
        }, function (err) {
            console.log("Encountered error: " + err);
        });
    }
    ChatApi.prototype.createRoom = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var createdAt, dataToAdd, res;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        createdAt = (new Date()).toISOString();
                        dataToAdd = {
                            name: data.name,
                            createdAt: createdAt,
                            createdBy: data.sentBy,
                            type: data.type,
                            users: [data.sentBy],
                            joinedAt: (_a = {},
                                _a[data.sentBy] = createdAt,
                                _a)
                        };
                        return [4 /*yield*/, this.firestore.collection('rooms').add(dataToAdd)];
                    case 1:
                        res = _b.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    return ChatApi;
}());
exports.ChatApi = ChatApi;
