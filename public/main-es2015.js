(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-info\">\n    <img class=\"avatar\" src=\"{{avatar}}\" />\n    <span>\n        <a href=\"#\" (click)=\"logout($event)\">Logout</a>\n    </span>\n</div>\n\n<div class=\"chatFormWrapper\">\n\n<input class=\"input chat-input\" [(ngModel)]=\"roomName\" (keyup)=\"onRoomKeyUp($event)\" />\n<button class=\"btn primary chat-btn\" [disabled]=\"roomName.trim().length === 0\" (click)=createRoom()>Create Room</button>\n</div>\n\n<div class=\"wrapper\">\n        <div class=\"side-bar\">\n            <div class=\"side-bar-section\">\n                <h3>Rooms</h3>\n                <div *ngFor=\"let room of rooms\">\n                    <div *ngIf=\"roomTypes.COMMON === room.type\" (click)=\"onRoomClick(room)\" class=\"item\">{{room.name}}</div>\n                </div>\n            </div>\n            <div class=\"side-bar-section\">\n                    <h3>Private chats</h3>\n                    <span class=\"invite-room-block invite-private-block\">\n                        <input [(ngModel)]=\"emailPrivate\" (keyup)=\"onEmailPrivateKeyUp($event)\" placeholder=\"email to invite\" class=\"input invite-input invite-input-private\" />\n                        <button [disabled]=\"emailPrivate.trim().length === 0\" (click)=\"createPrivate()\" class=\"btn primary invite-btn\">Invite</button>\n                    </span>\n                    <div *ngFor=\"let room of rooms\">\n                        <div *ngIf=\"roomTypes.PRIVATE === room.type\" (click)=\"onRoomClick(room)\" class=\"item\">{{getRoomName(room)}}</div>\n                    </div>\n            </div>\n        </div>\n        <div #scroller class=\"feedWrapper\">\n            <h3 *ngIf=\"!room\">No message to show. Join/create a room or start private conversation</h3>\n            <div class=\"feed\" *ngIf=\"room\">\n                <h3>\n                    Room: <i>{{getRoomName(room)}}</i>\n                    <span *ngIf=\"roomTypes.COMMON === room.type\" class=\"invite-room-block\">\n                        <input [(ngModel)]=\"emailCommon\" (keyup)=\"onEmailCommonKeyUp($event)\" placeholder=\"email to invite\" class=\"input invite-input\" />\n                        <button [disabled]=\"emailCommon.trim().length === 0\" (click)=\"inviteToRoom()\" class=\"btn primary invite-btn\">Invite</button>\n                    </span>\n                </h3>\n                <div *ngFor=\"let message of messages\" class=\"message\">\n                        <div class=\"messageContainer\" [ngClass]=\"{'own-message': isAuthor(message)}\">\n                        <div class=\"messageData\">\n                            <span class=\"sender\">{{ message.sentBy }}></span>\n                            <span class=\"timestamp\">{{ message.sentAt | date:'medium' }}</span>\n                        </div>\n                        <div class=\"messageContent\">\n                            {{ message.text }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n      <div class=\"chatFormWrapper\">\n        <input class=\"input chat-input\" [disabled]=\"!room\" [(ngModel)]=\"message\" (keyup)=\"onMessageKeyUp($event)\" />\n        <button class=\"btn primary chat-btn\" [disabled]=\"!room || message.trim().length === 0\" (click)=send()>Send</button>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <h2>Log In</h2>\n    <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" class=\"input login-input\" />\n    <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" class=\"input login-input\" />\n    <button class=\"btn primary\" (click)=\"login()\">Log In</button>\n    <button class=\"btn secondary\" (click)=\"register()\">Register</button>\n    <p class=\"error\">{{error}}</p>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
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
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





let AuthService = class AuthService {
    constructor(fireAuth) {
        this.fireAuth = fireAuth;
        this.user = fireAuth.authState;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.user.subscribe((user) => {
            this.authState.next(Boolean(user));
        });
    }
    authUser() {
        return this.user;
    }
    canActivate() {
        return this.authState.value;
    }
    login(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fireAuth.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL);
            yield this.fireAuth.auth.signInWithEmailAndPassword(email, password);
        });
    }
    register(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.fireAuth.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL);
            yield this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
        });
    }
    logout() {
        this.fireAuth.auth.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: roomTypes, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomTypes", function() { return roomTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







const roomTypes = {
    'COMMON': 'COMMON',
    'PRIVATE': 'PRIVATE'
};
let DataService = class DataService {
    constructor(authService, fireAuth, firestore, httpClient) {
        this.authService = authService;
        this.fireAuth = fireAuth;
        this.firestore = firestore;
        this.httpClient = httpClient;
        this.adapter = 'SERVER';
        // var HOST = location.origin.replace(/^http/, 'ws')
        // var ws = new WebSocket(HOST);
        // ws.onmessage = function (event) {
        //   console.log(event);
        // };
        this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.rooms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.authService.authUser().subscribe(user => {
            if (user) {
                this.user = user;
                this.subsribeToRooms();
            }
        });
    }
    sendMessage(message, roomId = null) {
        const timestamp = (new Date()).toISOString();
        this.firestore.collection('messages').add({
            text: message,
            sentAt: timestamp,
            sentBy: this.user.email,
            roomId
        });
    }
    createRoom(name, type = 'common') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, arguments, void 0, function* () {
            return yield this[`createRoom${this.adapter}`].apply(this, arguments);
        });
    }
    createRoomSERVER(name, type = 'common') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const res = yield this.httpClient.post(`//${location.host}/api/createRoom`, {
                name, type, sentBy: this.user.email
            }).toPromise();
            console.log(res);
        });
    }
    createRoomCLIENT(name, type = 'common') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const createdAt = (new Date()).toISOString();
            const res = yield this.firestore.collection('rooms').add({
                name: name,
                createdAt,
                createdBy: this.user.email,
                type: type,
                users: [this.user.email],
                joinedAt: {
                    [this.user.email]: createdAt
                }
            });
            return res;
        });
    }
    getMessages() {
        return this.messages;
    }
    getRooms() {
        return this.rooms;
    }
    setRoom(roomId) {
        this.roomId = roomId;
        let room = this.getRooms().getValue().find(room => roomId === room.id);
        if (!room.joinedAt[this.user.email]) {
            room.joinedAt[this.user.email] = (new Date()).toISOString();
            this.saveRoom(room);
        }
        this.subsribeToFeed();
    }
    createPrivate(email) {
        this.firestore.collection('rooms').add({
            type: roomTypes.PRIVATE,
            users: [this.user.email, email]
        });
    }
    inviteToRoom(room, email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (room.users.length > 10) {
                throw 'The room is full!';
            }
            if (room.users.includes(email)) {
                throw 'The user is already in the room!';
            }
            room.users.push(email);
            return yield this.saveRoom(room);
        });
    }
    subsribeToFeed() {
        if (this.feedSubscription) {
            this.feedSubscription.unsubscribe();
        }
        this.feedSubscription = this.firestore.collection('messages', (ref) => {
            let query = ref;
            const room = this.getRooms().getValue().find(room => this.roomId === room.id);
            query = query.orderBy('sentAt', 'asc');
            if (this.roomId) {
                query = query.where('roomId', '==', this.roomId);
            }
            if (room && room.joinedAt[this.user.email]) {
                query = query.where('sentAt', '>', room.joinedAt[this.user.email]);
            }
            console.log(query);
            return query;
        }).snapshotChanges().subscribe((data) => {
            const messages = data.map((e) => {
                return Object.assign({}, e.payload.doc.data(), { id: e.payload.doc.id });
            });
            this.messages.next(messages);
        });
    }
    subsribeToRooms() {
        if (this.roomSubscription) {
            this.roomSubscription.unsubscribe();
        }
        this.roomSubscription = this.firestore.collection('rooms', (ref) => {
            let query = ref;
            query = query.where('users', 'array-contains', this.user.email);
            return query;
        }).snapshotChanges().subscribe((data) => {
            const rooms = data.map((e) => {
                return Object.assign({}, e.payload.doc.data(), { id: e.payload.doc.id });
            });
            this.rooms.next(rooms);
        });
    }
    saveRoom(room) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.firestore.collection('rooms').ref.doc(room.id).set(room);
            return result;
        });
    }
};
DataService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");






const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'foko-chat';
        // console.log(localStorage.getItem('user'));
        // this.authService.authUser().subscribe((user) => {
        //   console.log(user);
        // });
        this.authService.authUser().subscribe((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(user);
            if (user) {
                this.router.navigate(['chat']);
            }
            else {
                this.router.navigate(['login']);
            }
        }));
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



// import { HttpModule } from '@angular/http';












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot({
                timeOut: 2500,
            }),
            // HttpModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  height: 550px;\n  display: flex;\n}\n\n.side-bar {\n  background-color: var(--primary2-color);\n  color: white;\n  width: 25%;\n  padding: 5px 10px 5px 10px;\n  font-size: 1.2em;\n}\n\n.side-bar .item {\n  border-bottom: 1px solid white;\n  padding: 5px 0px;\n  cursor: pointer;\n}\n\n.side-bar-section {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-right: 5px;\n  height: 50%;\n}\n\n.side-bar-section h3 {\n  margin: 5px;\n}\n\nbutton:disabled {\n  color: gray;\n}\n\n.own-message {\n  float: right;\n  background-color: var(--sucess-color) !important;\n}\n\n.chat-btn {\n  height: 50px;\n  width: auto;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.chat-input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  flex: 10;\n  font-size: 1.3em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee;\n  color: #000;\n  transition: 0.1s ease-out;\n  padding-left: 20px;\n}\n\n.invite-room-block {\n  float: right;\n}\n\n.invite-private-block {\n  margin-bottom: 8px;\n  width: 100%;\n}\n\n.invite-input-private {\n  width: auto !important;\n}\n\n.invite-input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  height: 26px;\n  width: 200px;\n  font-size: 16px;\n}\n\n.invite-btn {\n  width: auto;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  height: 30px;\n  font-size: 16px;\n  padding: 0px 5px !important;\n}\n\n.feedWrapper {\n  background-color: #fff;\n  font-size: 1.2em;\n  flex: 5;\n  order: 2;\n  overflow-y: scroll;\n  padding: 10px 10px 0px 10px;\n}\n\n.userListWrapper {\n  background-color: #2A2845;\n  color: #fff;\n  display: flex;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  flex: 1;\n  order: 1;\n  padding: 20px 0px 40px 30px;\n  border-right: 1px solid #222;\n}\n\n.chatFormWrapper {\n  display: flex;\n  height: 50px;\n  background-color: #eee;\n  z-index: 3;\n}\n\n#scroll-style::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n\napp-user-list {\n  width: 100%;\n}\n\n.chatInput {\n  flex: 10;\n  font-size: 1.3em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee;\n  color: #000;\n  transition: 0.1s ease-out;\n  padding-left: 20px;\n}\n\n.chatInput:focus {\n  background-color: #E4F1FE;\n  color: #222;\n  transition: 0.2s ease-in;\n}\n\n.chatButton:hover {\n  background-color: #444;\n}\n\n.feed {\n  display: flex;\n  flex-direction: column;\n}\n\n.message {\n  flex-direction: column;\n  margin: 10px 0;\n}\n\n.messageContainer {\n  display: flex;\n  height: auto;\n  width: 70%;\n  min-width: 400px;\n  border-radius: 5px;\n  align-items: stretch;\n  background-color: #eee;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.ownMessage {\n  background-color: #01579B;\n}\n\n.messageData {\n  flex: 1;\n  padding: 10px;\n  font-size: 0.7em;\n}\n\n.sender {\n  display: block;\n  color: #222;\n  font-weight: bold;\n}\n\n.isOwnSender {\n  color: #E1F5FE;\n}\n\n.timestamp {\n  color: #555;\n  font-style: italic;\n}\n\n.isOwnTimestamp {\n  color: #4FC3F7;\n}\n\n.messageContent {\n  height: auto;\n  flex: 9;\n  background-color: #fff;\n  padding: 10px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.isOwnMessageContent {\n  background-color: #E3F2FD;\n  color: #01579B;\n}\n\n.userItem {\n  height: auto;\n  padding: 10px;\n  width: 90%;\n  margin-top: 10px;\n  border-radius: 1px;\n  align-items: flex-start;\n  background-color: #201835;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  color: #A098A5;\n  border-radius: 8px;\n  transition: ease-in 0.2s;\n}\n\n.userItem:hover {\n  background-color: #453968;\n  color: #ddd;\n  transition: ease-in 0.1s;\n}\n\n.online {\n  background-color: #0FA;\n}\n\n.busy {\n  background-color: #FB0;\n}\n\n.offline {\n  background-color: #888;\n}\n\n.status {\n  border: 1px solid black;\n  display: inline-block;\n  min-width: 10px;\n  min-height: 10px;\n  border-radius: 50%;\n  margin: 10px 12px 0px 10px;\n}\n\n.userName {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jOlxcZGV2XFxyZXBvXFxmb2tvLWNoYXQvc3JjXFxhcHBcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURIQTtFQUVJLFlBQUE7RUFDQSxnREFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDTUo7O0FESkE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0FDUUo7O0FETkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNTSjs7QURQQTtFQUNJLHNCQUFBO0FDVUo7O0FEUkE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDV0o7O0FEVEE7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNZSjs7QURQQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNVSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDTUo7O0FESEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ01KOztBREhBO0VBRUMsbUJBQUE7RUFDQSx5QkFBQTtBQ0tEOztBREZBO0VBQ0ksV0FBQTtBQ0tKOztBREdBO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ0FKOztBRGdCQTtFQUNJLHNCQUFBO0FDYko7O0FEa0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDZko7O0FEa0JBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0FDZko7O0FEbUJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQ2hCSjs7QURtQkE7RUFDSSx5QkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDaEJKOztBRG1CQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNoQko7O0FEbUJBO0VBQ0ksY0FBQTtBQ2hCSjs7QURtQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNoQko7O0FEbUJBO0VBQ0ksY0FBQTtBQ2hCSjs7QURtQkE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNoQko7O0FEbUJBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDaEJKOztBRHFCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0VBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxzQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxzQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxzQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxxQkFBQTtBQ2xCSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy9leHBcclxuLndyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNpZGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uc2lkZS1iYXIgLml0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZS1iYXItc2VjdGlvbiB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxufVxyXG4uc2lkZS1iYXItc2VjdGlvbiBoMyB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLm93bi1tZXNzYWdlIHtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjZXNzLWNvbG9yKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNoYXQtYnRuIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG59XHJcbi5jaGF0LWlucHV0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgZmxleDogMTA7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4uaW52aXRlLXJvb20tYmxvY2sgeyAgICBcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uaW52aXRlLXByaXZhdGUtYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmludml0ZS1pbnB1dC1wcml2YXRlIHtcclxuICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxufVxyXG4uaW52aXRlLWlucHV0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbnZpdGUtYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnVzZXItaW5mbyB7XHJcblxyXG59XHJcbi5mZWVkV3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoI2ZmZik7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZmxleDogNTtcclxuICAgIG9yZGVyOiAyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vL1xyXG5cclxuLnVzZXJMaXN0V3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgcGFkZGluZzoyMHB4IDBweCA0MHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xyXG59XHJcblxyXG4uY2hhdEZvcm1XcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgei1pbmRleDogMztcclxufVxyXG5cclxuI3Njcm9sbC1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuYXBwLXVzZXItbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLy9mb3JtXHJcbi5jaGF0SW5wdXR7XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY2hhdElucHV0OmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RjFGRTtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xyXG59XHJcblxyXG5cclxuLy8gLmNoYXRCdXR0b257XHJcbi8vICAgICBmbGV4OiAxO1xyXG4vLyAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgIHBhZGRpbmc6IDhweCAyNHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2FucycsIHNhbnMtc2VyaWY7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xyXG4vLyAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuLy8gICAgIG1pbi13aWR0aDogNTBweDtcclxuLy8gfVxyXG5cclxuLmNoYXRCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG5cclxuLy8vL2ZlZWRcclxuLmZlZWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1lc3NhZ2V7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi8vLy8vbWVzc2FnZVxyXG4ubWVzc2FnZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG59XHJcblxyXG4ub3duTWVzc2FnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OUI7XHJcbn1cclxuXHJcbi5tZXNzYWdlRGF0YXtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxufVxyXG5cclxuLnNlbmRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlzT3duU2VuZGVye1xyXG4gICAgY29sb3I6ICNFMUY1RkU7XHJcbn1cclxuXHJcbi50aW1lc3RhbXAge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5pc093blRpbWVzdGFtcHtcclxuICAgIGNvbG9yOiAjNEZDM0Y3O1xyXG59XHJcblxyXG4ubWVzc2FnZUNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbGV4OiA5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmlzT3duTWVzc2FnZUNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xyXG4gICAgY29sb3I6ICMwMTU3OUI7XHJcbn1cclxuXHJcblxyXG4vLy8vdXNlclxyXG4udXNlckl0ZW17XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMTgzNTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIGNvbG9yOiAjQTA5OEE1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xyXG59XHJcblxyXG4udXNlckl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUzOTY4O1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XHJcbn1cclxuXHJcbi5vbmxpbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBO1xyXG59XHJcblxyXG4uYnVzeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQjA7XHJcbn1cclxuXHJcbi5vZmZsaW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG5cclxuLnN0YXR1c3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCAxMnB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4udXNlck5hbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIud3JhcHBlciB7XG4gIGhlaWdodDogNTUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkyLWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjUlO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnNpZGUtYmFyIC5pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlLWJhci1zZWN0aW9uIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5zaWRlLWJhci1zZWN0aW9uIGgzIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ub3duLW1lc3NhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Vzcy1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLmNoYXQtYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG5cbi5jaGF0LWlucHV0IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgZmxleDogMTA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaW52aXRlLXJvb20tYmxvY2sge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pbnZpdGUtcHJpdmF0ZS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnZpdGUtaW5wdXQtcHJpdmF0ZSB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZpdGUtaW5wdXQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW52aXRlLWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbn1cblxuLmZlZWRXcmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZmxleDogNTtcbiAgb3JkZXI6IDI7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4udXNlckxpc3RXcmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmbGV4OiAxO1xuICBvcmRlcjogMTtcbiAgcGFkZGluZzogMjBweCAwcHggNDBweCAzMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xufVxuXG4uY2hhdEZvcm1XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB6LWluZGV4OiAzO1xufVxuXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbmFwcC11c2VyLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoYXRJbnB1dCB7XG4gIGZsZXg6IDEwO1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICMwMDA7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNoYXRJbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNEYxRkU7XG4gIGNvbG9yOiAjMjIyO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XG59XG5cbi5jaGF0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbn1cblxuLmZlZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWVzc2FnZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ubWVzc2FnZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xufVxuXG4ub3duTWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OUI7XG59XG5cbi5tZXNzYWdlRGF0YSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59XG5cbi5zZW5kZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMyMjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaXNPd25TZW5kZXIge1xuICBjb2xvcjogI0UxRjVGRTtcbn1cblxuLnRpbWVzdGFtcCB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pc093blRpbWVzdGFtcCB7XG4gIGNvbG9yOiAjNEZDM0Y3O1xufVxuXG4ubWVzc2FnZUNvbnRlbnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5pc093bk1lc3NhZ2VDb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcbiAgY29sb3I6ICMwMTU3OUI7XG59XG5cbi51c2VySXRlbSB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMTgzNTtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICBjb2xvcjogI0EwOThBNTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG59XG5cbi51c2VySXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTM5Njg7XG4gIGNvbG9yOiAjZGRkO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XG59XG5cbi5vbmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBO1xufVxuXG4uYnVzeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQjA7XG59XG5cbi5vZmZsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcbn1cblxuLnN0YXR1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTBweDtcbiAgbWluLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDEwcHggMTJweCAwcHggMTBweDtcbn1cblxuLnVzZXJOYW1lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let ChatComponent = class ChatComponent {
    constructor(dataService, authService, toastr) {
        this.dataService = dataService;
        this.authService = authService;
        this.toastr = toastr;
        this.roomTypes = _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"];
        this.message = '';
        this.roomName = '';
        this.emailCommon = '';
        this.emailPrivate = '';
        this.authService.authUser().subscribe((user) => {
            if (user) {
                this.user = user;
                this.avatar = gravatar__WEBPACK_IMPORTED_MODULE_2__["url"](user.email);
            }
            else {
                this.user = null;
                this.avatar = null;
            }
        });
        this.dataService.getMessages().subscribe(messages => this.messages = messages);
        this.dataService.getRooms().subscribe(rooms => {
            this.rooms = rooms;
            const roomId = localStorage && localStorage.getItem('roomId');
            if (roomId) {
                this.rooms.forEach((room) => {
                    if (room.id === roomId) {
                        this.onRoomClick(room);
                    }
                    return false;
                });
            }
        });
        // this.roomTypes = roomTypes;
    }
    ngOnInit() {
    }
    send() {
        this.dataService.sendMessage(this.message, this.room.id);
        this.message = '';
    }
    createRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.dataService.createRoom(this.roomName, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"].COMMON);
            }
            catch (e) {
                this.toastr.error(e);
            }
            this.roomName = '';
        });
    }
    inviteToRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.emailCommon = this.emailCommon.trim();
            try {
                const res = yield this.dataService.inviteToRoom(this.room, this.emailCommon);
                this.toastr.success(`${this.emailCommon} has been added to the room`);
            }
            catch (e) {
                this.toastr.error(e);
            }
            this.emailCommon = '';
        });
    }
    createPrivate() {
        this.emailPrivate = this.emailPrivate.trim();
        if (this.emailPrivate === this.user.email) {
            this.toastr.error('You cannot invite yourself!');
            return;
        }
        const existed = this.rooms.find((room) => room.type === _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"].PRIVATE && room.users.includes(this.emailPrivate));
        if (existed) {
            this.room = existed;
            this.dataService.setRoom(this.room.id);
            this.toastr.info('Conversation already existed');
            return;
        }
        try {
            this.dataService.createPrivate(this.emailPrivate);
            this.toastr.success('Conversation created');
        }
        catch (e) {
            this.toastr.success(e);
        }
        this.emailPrivate = '';
    }
    onMessageKeyUp(event) {
        if (event.keyCode === 13) {
            this.send();
        }
    }
    onRoomKeyUp(event) {
        if (event.keyCode === 13) {
            this.createRoom();
        }
    }
    onEmailCommonKeyUp(event) {
        if (event.keyCode === 13) {
            this.inviteToRoom();
        }
    }
    onEmailPrivateKeyUp(event) {
        if (event.keyCode === 13) {
            this.createPrivate();
        }
    }
    onRoomClick(room) {
        this.room = room;
        this.dataService.setRoom(room.id);
        localStorage && localStorage.setItem('roomId', this.room.id);
    }
    logout(event) {
        event.preventDefault();
        this.authService.logout();
        return false;
    }
    getRoomName(room) {
        return room.type === _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"].COMMON ? room.name : room.users.find(user => user !== this.user.email);
    }
    isAuthor(message) {
        return this.user && this.user.email === message.sentBy;
    }
};
ChatComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  border: 1px solid #000000;\n  border-radius: 5px;\n  width: 600px;\n  height: 400px;\n  margin: auto;\n  margin-top: 40px;\n  text-align: center;\n  padding: 80px 30px;\n}\n\n.login-input {\n  margin: auto;\n  margin-top: 16px;\n  display: block;\n  width: 60%;\n  height: 40px;\n  padding: 8px;\n  font-size: 1em;\n}\n\n.error {\n  color: red;\n}\n\n.btn {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYzpcXGRldlxccmVwb1xcZm9rby1jaGF0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNJLFVBQUE7QUNDTjs7QURDRTtFQUNFLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC53cmFwcGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4taW5wdXQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9IiwiLndyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMzBweDtcbn1cblxuLmxvZ2luLWlucHV0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.email = '';
        this.password = '';
        this.error = '';
    }
    ngOnInit() {
    }
    login() {
        this.error = '';
        this.authService.login(this.email, this.password)
            .catch(error => this.error = error);
    }
    register() {
        this.error = '';
        this.authService.register(this.email, this.password)
            .catch(error => this.error = error);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBbykWqKtUw8A-gFY3sovcLZmX60YCdNDs',
        authDomain: 'foko-chat.firebaseapp.com',
        databaseURL: 'https://foko-chat.firebaseio.com',
        projectId: 'foko-chat',
        storageBucket: 'foko-chat.appspot.com',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\dev\repo\foko-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map