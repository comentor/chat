"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var nodemailer = __importStar(require("nodemailer"));
var ws_1 = require("ws");
var _ = __importStar(require("lodash"));
var serviceAccount = require("./../firebase-admin.json");
var ChatApi = /** @class */ (function () {
    function ChatApi(server) {
        this.server = server;
        this.rooms = [];
        fbAdmin.initializeApp({
            credential: fbAdmin.credential.cert(serviceAccount),
            databaseURL: "https://foko-chat.firebaseio.com"
        });
        this.firestore = fbAdmin.firestore();
        this.initMailer();
        this.openWebsocket();
        this.subscribeToAllMessages();
        this.subscribeToAllRooms();
    }
    ChatApi.prototype.initMailer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var testAccount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, nodemailer.createTestAccount()];
                    case 1:
                        testAccount = _a.sent();
                        this.mailer = nodemailer.createTransport({
                            host: "smtp.ethereal.email",
                            port: 587,
                            secure: false,
                            auth: {
                                user: testAccount.user,
                                pass: testAccount.pass
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatApi.prototype.sendEmail = function (sentBy, roomId) {
        return __awaiter(this, void 0, void 0, function () {
            var room, receipients, text, info, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        room = this.rooms.find(function (room) { return room.id === roomId; });
                        receipients = room.users.filter(function (email) { return room.joinedAt[email] && email !== sentBy; });
                        text = room.type === 'PRIVATE' ?
                            sentBy + " has sent a private message to you" :
                            sentBy + " has sent a message to a group you joined: " + room.name;
                        receipients.forEach(function (email) {
                            console.log(email);
                            console.log(text);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.mailer.sendMail({
                                from: 'Chat',
                                to: receipients.join(', '),
                                subject: "You received a message",
                                text: text,
                                html: text
                            })];
                    case 2:
                        info = _a.sent();
                        console.log("===console.log(info);");
                        console.log(info);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log("===mailer error");
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ChatApi.prototype.subscribeToAllMessages = function () {
        var debouncedSend = _.debounce(this.sendEmail.bind(this), 2000);
        var listeningStartedAt = (new Date()).toISOString();
        this.firestore.collection('messages').onSnapshot(function (docSnapshot) {
            docSnapshot.docChanges().forEach(function (change) {
                var data = change.doc.data();
                console.log('===change');
                // console.log(change.doc.metadata);
                if (data.sentAt > listeningStartedAt) {
                    debouncedSend(data.sentBy, data.roomId);
                }
            });
        }, function (err) {
            console.log("Encountered error: " + err);
        });
    };
    ChatApi.prototype.subscribeToAllRooms = function () {
        var _this = this;
        this.firestore.collection('rooms').onSnapshot(function (docSnapshot) {
            _this.rooms = docSnapshot.docs.map(function (doc) { return (__assign({ id: doc.id }, doc.data())); });
        });
    };
    ChatApi.prototype.openWebsocket = function () {
        var _this = this;
        var wss = new ws_1.Server({ server: this.server });
        wss.on('connection', function (ws) {
            var feedUnsubscribe;
            var roomsUnsubscribe;
            console.log('Client connected');
            ws.on('message', function (msg) {
                msg = JSON.parse(msg);
                switch (msg.event) {
                    case 'setRoom':
                        feedUnsubscribe = _this.getFeedSubscriber(msg.data, ws);
                        break;
                    case 'getRooms':
                        roomsUnsubscribe = _this.getRoomsSubscriber(msg.data, ws);
                        break;
                }
            });
            ws.on('close', function () {
                console.log('Client disconnected');
                if (feedUnsubscribe) {
                    feedUnsubscribe.call();
                }
                if (roomsUnsubscribe) {
                    roomsUnsubscribe.call();
                }
            });
        });
    };
    ChatApi.prototype.getFeedSubscriber = function (data, ws) {
        var ref = this.firestore.collection('messages');
        return ref
            .where('roomId', '==', data.roomId)
            .where('sentAt', '>', data.joinedAt)
            .orderBy('sentAt', 'asc')
            .onSnapshot(function (docSnapshot) {
            var records = docSnapshot.docs.map(function (doc) { return (__assign({ id: doc.id }, doc.data())); });
            ws.send(JSON.stringify({ event: 'newMessages', data: records }));
        });
    };
    ChatApi.prototype.getRoomsSubscriber = function (data, ws) {
        var ref = this.firestore.collection('rooms');
        return ref
            .where('users', 'array-contains', data.email)
            .orderBy('createdAt', 'desc')
            .onSnapshot(function (docSnapshot) {
            var records = docSnapshot.docs.map(function (doc) { return (__assign({ id: doc.id }, doc.data())); });
            ws.send(JSON.stringify({ event: 'newRooms', data: records }));
        });
    };
    ChatApi.prototype.apiRoom = function (data, method) {
        if (method === void 0) { method = 'save'; }
        return __awaiter(this, void 0, void 0, function () {
            var id, ref, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        id = data.id || null;
                        ref = this.firestore.collection('rooms');
                        _a = method;
                        switch (_a) {
                            case 'save': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 1];
                    case 1:
                        if (!id) return [3 /*break*/, 2];
                        _b = ref.doc(id).set(data);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ref.add(data)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4: return [4 /*yield*/, (_b)];
                    case 5: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    ChatApi.prototype.apiMessage = function (data, method) {
        if (method === void 0) { method = 'save'; }
        return __awaiter(this, void 0, void 0, function () {
            var id, ref, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        id = data.id || null;
                        ref = this.firestore.collection('messages');
                        _a = method;
                        switch (_a) {
                            case 'save': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 1];
                    case 1:
                        if (!id) return [3 /*break*/, 2];
                        _b = ref.doc(id).set(data);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, ref.add(data)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4: return [4 /*yield*/, (_b)];
                    case 5: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    return ChatApi;
}());
exports.ChatApi = ChatApi;
