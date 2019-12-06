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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<span class=\"adapter-data\">Communication with database through: {{apiAdapter}}</span>\n<div class=\"user-info\">\n    <h3 *ngIf=\"user\">Logged as {{user.email}}</h3>\n    <img class=\"avatar\" src=\"{{avatar}}\" />\n    <button class=\"btn secondary logout-btn\" (click)=logout()>Logout</button>\n</div>\n\n<div class=\"chatFormWrapper\">\n    <input placeholder=\"Type a new room name\" class=\"input chat-input\" [(ngModel)]=\"roomName\" (keyup)=\"onRoomKeyUp($event)\" />\n    <button class=\"btn primary chat-btn\" [disabled]=\"roomName.trim().length === 0\" (click)=createRoom()>Create Room</button>\n</div>\n\n<div class=\"#scroller wrapper\">\n    <div class=\"side-bar\">\n        <div class=\"side-bar-section\">\n            <h3>Rooms</h3>\n            <div *ngFor=\"let room of rooms\">\n                <div [ngClass]=\"{'current-room': isCurrentRoom(room)}\" *ngIf=\"roomTypes.COMMON === room.type\" (click)=\"onRoomClick(room)\" class=\"item\">\n                    <span class=\"new-room\" *ngIf=\"ifNew(room)\">(new)</span>{{room.name}}\n                </div>\n            </div>\n        </div>\n        <div class=\"side-bar-section\">\n            <h3>Private chats</h3>\n            <div class=\"invite-private-block\">\n                <input [(ngModel)]=\"emailPrivate\" (keyup)=\"onEmailPrivateKeyUp($event)\" placeholder=\"email to invite\" class=\"input invite-input invite-input-private\" />\n                <button [disabled]=\"emailPrivate.trim().length === 0\" (click)=\"createPrivate()\" class=\"btn primary invite-btn\">Invite</button>\n            </div>\n            <div *ngFor=\"let room of rooms\">\n                <div [ngClass]=\"{'current-room': isCurrentRoom(room)}\" *ngIf=\"roomTypes.PRIVATE === room.type\" (click)=\"onRoomClick(room)\" class=\"item\">{{getRoomName(room)}}</div>\n            </div>\n        </div>\n    </div>\n    <div #scroller class=\"feedWrapper\">\n        <h3 *ngIf=\"!room\">No message to show. Join/create a room or start private conversation</h3>\n        <div class=\"feed\" *ngIf=\"room\">\n            <div *ngFor=\"let message of messages\" class=\"message\">\n                <div class=\"messageContainer\" [ngClass]=\"{'own-message': isAuthor(message)}\">\n                    <div class=\"messageData\">\n                        <span class=\"sender\">{{ message.sentBy }}></span>\n                        <span class=\"timestamp\">{{ message.sentAt | date:'medium' }}</span>\n                        <span class=\"delete\" (click)=\"hideMessage(message);\">Delete</span>\n                    </div>\n                    <div class=\"messageContent\">\n                        {{ message.text }}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"side-bar right-bar\" *ngIf=\"room\">\n        <h3>Current Room: <i>{{getRoomName(room)}}</i></h3>\n        <span *ngIf=\"roomTypes.COMMON === room.type\" class=\"invite-room-block\">\n            <input [(ngModel)]=\"emailCommon\" (keyup)=\"onEmailCommonKeyUp($event)\" type=\"email\" placeholder=\"Email to invite\" class=\"input invite-input\" />\n            <button [disabled]=\"emailCommon.trim().length === 0\" (click)=\"inviteToRoom()\" class=\"btn primary invite-btn\">Invite</button>\n        </span>\n        <div class=\"invite-private-block\">\n            <h3>Members</h3>\n            <div *ngFor=\"let email of room.users\">\n                <div [ngClass]=\"{'current-room': isMe(email)}\" class=\"item\"><span class=\"new-room\" *ngIf=\"!isMember(email)\">(invited)</span>{{email}}</div>\n            </div>\n        </div>\n        <button class=\"btn primary leave-btn\" [disabled]=\"false\" (click)=leaveRoom()>Leave room</button>\n    </div>\n</div>\n<div class=\"chatFormWrapper\">\n    <input placeholder=\"Type your message\" class=\"input chat-input\" [disabled]=\"!room\" [(ngModel)]=\"message\" (keyup)=\"onMessageKeyUp($event)\" />\n    <button class=\"btn primary chat-btn\" [disabled]=\"!room || message.trim().length === 0\" (click)=send()>Send</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <h2>Log In</h2>\n    <select [(ngModel)]=\"adapterApi\" (change)=\"adapterChange($event)\">\n        <option value=\"SERVER\">Server-side API</option>\n        <option value=\"CLIENT\">Client-side API</option>\n    </select>\n    <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" class=\"input login-input\" />\n    <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" class=\"input login-input\" />\n    <button class=\"btn primary\" (click)=\"login()\">Log In</button>\n    <button class=\"btn secondary\" (click)=\"register()\">Register</button>\n    <p class=\"error\">{{error}}</p>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/_services/auth.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/_services/auth.service.ts ***!
          \*******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
            var AuthService = /** @class */ (function () {
                function AuthService(fireAuth) {
                    var _this = this;
                    this.fireAuth = fireAuth;
                    this.apiAdapter = 'SERVER';
                    if (localStorage && localStorage.getItem('apiAdapter')) {
                        this.apiAdapter = localStorage.getItem('apiAdapter');
                    }
                    this.user = fireAuth.authState;
                    this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
                    this.user.subscribe(function (user) {
                        _this.authState.next(Boolean(user));
                    });
                }
                AuthService.prototype.authUser = function () {
                    return this.user;
                };
                AuthService.prototype.canActivate = function () {
                    return this.authState.value;
                };
                AuthService.prototype.login = function (email, password) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.fireAuth.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.fireAuth.auth.signInWithEmailAndPassword(email, password)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthService.prototype.register = function (email, password) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.fireAuth.auth.setPersistence(firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.fireAuth.auth.createUserWithEmailAndPassword(email, password)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthService.prototype.logout = function () {
                    this.fireAuth.auth.signOut();
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/_services/data.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/_services/data.service.ts ***!
          \*******************************************/
        /*! exports provided: roomTypes, DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomTypes", function () { return roomTypes; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
            /* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/_services/auth.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var roomTypes = {
                'COMMON': 'COMMON',
                'PRIVATE': 'PRIVATE'
            };
            var WEBSOCKET_HOST = location.origin.replace(/^http/, 'ws').replace(/^https/, 'ws');
            var DataService = /** @class */ (function () {
                // private adapter = 'SERVER';
                // private adapter = 'SERVER';
                function DataService(authService, fireAuth, firestore, httpClient) {
                    var _this = this;
                    this.authService = authService;
                    this.fireAuth = fireAuth;
                    this.firestore = firestore;
                    this.httpClient = httpClient;
                    // var HOST = location.origin.replace(/^http/, 'ws')
                    // var ws = new WebSocket(HOST);
                    // ws.onmessage = function (event) {
                    //   console.log(event);
                    // };
                    console.log(this.authService.apiAdapter);
                    // this.adapter = this.authService.apiAdapter;
                    this.messages = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
                    this.rooms = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
                    this.authService.authUser().subscribe(function (user) {
                        if (user) {
                            _this.user = user;
                            _this.subsribeToRooms();
                        }
                    });
                }
                DataService.prototype.getMessages = function () {
                    return this.messages;
                };
                DataService.prototype.getRooms = function () {
                    return this.rooms;
                };
                DataService.prototype.sendMessage = function (text, roomId) {
                    if (roomId === void 0) { roomId = null; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.saveMessage({ text: text, roomId: roomId })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.saveMessage = function (message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var sentAt;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!message.id) {
                                        sentAt = (new Date()).toISOString();
                                        message = Object.assign({
                                            sentBy: this.user.email,
                                            sentAt: sentAt,
                                            hiddenFor: []
                                        }, message);
                                    }
                                    return [4 /*yield*/, this["saveMessage" + this.authService.apiAdapter](message)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.saveMessageSERVER = function (message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.httpClient.post("//" + location.host + "/api/message", {
                                        data: message,
                                        method: 'save'
                                    }).toPromise()];
                                case 1:
                                    res = _a.sent();
                                    if (!res.success) {
                                        throw res.errormsg;
                                    }
                                    return [2 /*return*/, res];
                            }
                        });
                    });
                };
                DataService.prototype.saveMessageCLIENT = function (message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id, ref, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    id = message.id || null;
                                    ref = this.firestore.collection('messages');
                                    if (!id) return [3 /*break*/, 1];
                                    _a = ref.doc(id).set(message);
                                    return [3 /*break*/, 3];
                                case 1: return [4 /*yield*/, ref.add(message)];
                                case 2:
                                    _a = _b.sent();
                                    _b.label = 3;
                                case 3: return [4 /*yield*/, (_a)];
                                case 4: return [2 /*return*/, _b.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.saveRoomSERVER = function (room) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.httpClient.post("//" + location.host + "/api/room", {
                                        data: room,
                                        method: 'save'
                                    }).toPromise()];
                                case 1:
                                    res = _a.sent();
                                    if (!res.success) {
                                        throw res.errormsg;
                                    }
                                    return [2 /*return*/, res];
                            }
                        });
                    });
                };
                DataService.prototype.saveRoomCLIENT = function (room) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id, ref, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    id = room.id || null;
                                    ref = this.firestore.collection('rooms');
                                    if (!id) return [3 /*break*/, 1];
                                    _a = ref.doc(id).set(room);
                                    return [3 /*break*/, 3];
                                case 1: return [4 /*yield*/, ref.add(room)];
                                case 2:
                                    _a = _b.sent();
                                    _b.label = 3;
                                case 3: return [4 /*yield*/, (_a)];
                                case 4: return [2 /*return*/, _b.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.createRoom = function (name, type) {
                    if (type === void 0) { type = roomTypes.COMMON; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.saveRoom({
                                        name: name, type: type
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                DataService.prototype.createRoomCLIENT = function (name, type) {
                    if (type === void 0) { type = 'common'; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.saveRoom({
                                        name: name,
                                        type: type
                                    })];
                                case 1:
                                    res = _a.sent();
                                    return [2 /*return*/, res];
                            }
                        });
                    });
                };
                DataService.prototype.createPrivate = function (email) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.saveRoom({
                                        type: roomTypes.PRIVATE,
                                        users: [this.user.email, email]
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                DataService.prototype.inviteToRoom = function (room, email) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (room.users.length > 10) {
                                        throw 'The room is full!';
                                    }
                                    if (room.users.includes(email)) {
                                        throw 'The user is already in the room!';
                                    }
                                    room.users.push(email);
                                    return [4 /*yield*/, this.saveRoom(room)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.leaveRoom = function (room) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    room.users = room.users.filter(function (email) { return email !== _this.user.email; });
                                    return [4 /*yield*/, this.saveRoom(room)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                DataService.prototype.saveRoom = function (room) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var createdAt;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!room.id) {
                                        createdAt = (new Date()).toISOString();
                                        room = Object.assign({
                                            createdAt: createdAt,
                                            createdBy: this.user.email,
                                            users: [this.user.email],
                                            joinedAt: (_a = {},
                                                _a[this.user.email] = createdAt,
                                                _a)
                                        }, room);
                                    }
                                    return [4 /*yield*/, this["saveRoom" + this.authService.apiAdapter](room)];
                                case 1: return [2 /*return*/, _b.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.setRoom = function (roomId) {
                    this.roomId = roomId;
                    var room = this.getRooms().getValue().find(function (room) { return roomId === room.id; });
                    if (!room.joinedAt[this.user.email]) {
                        room.joinedAt[this.user.email] = (new Date()).toISOString();
                        this.saveRoom(room);
                    }
                    this.subsribeToFeed();
                };
                DataService.prototype.hideMessage = function (message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!Array.isArray(message.hiddenFor)) {
                                        message.hiddenFor = [];
                                    }
                                    message.hiddenFor.push(this.user.email);
                                    return [4 /*yield*/, this.saveMessage(message)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                DataService.prototype.subsribeToFeed = function () {
                    return this["subsribeToFeed" + this.authService.apiAdapter]();
                };
                DataService.prototype.subsribeToFeedSERVER = function () {
                    var _this = this;
                    this.messages.next([]);
                    if (this.feedSubscription) {
                        this.feedSubscription.unsubscribe();
                    }
                    if (this.feedSocket) {
                        this.feedSocket.close();
                    }
                    if (!this.roomId) {
                        return;
                    }
                    this.feedSocket = new WebSocket(WEBSOCKET_HOST);
                    this.feedSocket.onopen = function () {
                        var room = _this.getRooms().getValue().find(function (room) { return _this.roomId === room.id; });
                        _this.feedSocket.send(JSON.stringify({ event: 'setRoom', data: { roomId: _this.roomId, joinedAt: room.joinedAt[_this.user.email] } }));
                    };
                    this.feedSocket.onmessage = function (event) {
                        var res = JSON.parse(event.data);
                        if (Array.isArray(res.data)) {
                            _this.messages.next(res.data.filter(function (message) { return !message.hiddenFor || !message.hiddenFor.includes(_this.user.email); }));
                        }
                    };
                };
                DataService.prototype.subsribeToFeedCLIENT = function () {
                    var _this = this;
                    this.messages.next([]);
                    if (this.feedSubscription) {
                        this.feedSubscription.unsubscribe();
                    }
                    if (this.feedSocket) {
                        this.feedSocket.close();
                    }
                    if (!this.roomId) {
                        return;
                    }
                    this.feedSubscription = this.firestore.collection('messages', function (ref) {
                        var query = ref;
                        var room = _this.getRooms().getValue().find(function (room) { return _this.roomId === room.id; });
                        query = query.orderBy('sentAt', 'asc');
                        if (_this.roomId) {
                            query = query.where('roomId', '==', _this.roomId);
                        }
                        if (room && room.joinedAt[_this.user.email]) {
                            query = query.where('sentAt', '>', room.joinedAt[_this.user.email]);
                        }
                        return query;
                    }).snapshotChanges().subscribe(function (data) {
                        var messages = data.map(function (e) {
                            return Object.assign({}, e.payload.doc.data(), { id: e.payload.doc.id });
                        }).filter(function (message) { return !message.hiddenFor || !message.hiddenFor.includes(_this.user.email); });
                        _this.messages.next(messages);
                    });
                };
                DataService.prototype.subsribeToRooms = function () {
                    return this["subsribeToRooms" + this.authService.apiAdapter]();
                };
                DataService.prototype.subsribeToRoomsSERVER = function () {
                    var _this = this;
                    if (this.roomSubscription) {
                        this.roomSubscription.unsubscribe();
                    }
                    if (this.roomSocket) {
                        this.roomSocket.close();
                    }
                    this.roomSocket = new WebSocket(WEBSOCKET_HOST);
                    this.roomSocket.onopen = function () {
                        _this.roomSocket.send(JSON.stringify({ event: 'getRooms', data: { email: _this.user.email } }));
                    };
                    this.roomSocket.onmessage = function (event) {
                        var res = JSON.parse(event.data);
                        if (Array.isArray(res.data)) {
                            _this.rooms.next(res.data);
                        }
                    };
                };
                DataService.prototype.subsribeToRoomsCLIENT = function () {
                    var _this = this;
                    if (this.roomSubscription) {
                        this.roomSubscription.unsubscribe();
                    }
                    if (this.roomSocket) {
                        this.roomSocket.close();
                    }
                    this.roomSubscription = this.firestore.collection('rooms', function (ref) {
                        var query = ref;
                        query = query.where('users', 'array-contains', _this.user.email);
                        return query;
                    }).snapshotChanges().subscribe(function (data) {
                        var rooms = data.map(function (e) {
                            return Object.assign({}, e.payload.doc.data(), { id: e.payload.doc.id });
                        });
                        _this.rooms.next(rooms);
                    });
                };
                return DataService;
            }());
            DataService.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
            ]; };
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
            var routes = [
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
                { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService, router) {
                    var _this = this;
                    this.authService = authService;
                    this.router = router;
                    this.title = 'foko-chat';
                    // console.log(localStorage.getItem('user'));
                    // this.authService.authUser().subscribe((user) => {
                    //   console.log(user);
                    // });
                    this.authService.authUser().subscribe(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (user) {
                                this.router.navigate(['chat']);
                            }
                            else {
                                this.router.navigate(['login']);
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
            /* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            // import { HttpModule } from '@angular/http';
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                            timeOut: 3500,
                        }),
                        // HttpModule,
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/chat/chat.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/chat/chat.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  height: 550px;\n  display: flex;\n}\n\n.side-bar {\n  background-color: var(--primary2-color);\n  color: white;\n  width: 20%;\n  padding: 5px 10px 5px 10px;\n  font-size: 1.2em;\n}\n\n.side-bar .item {\n  border-bottom: 1px solid white;\n  padding: 5px 0px;\n  cursor: pointer;\n}\n\n.side-bar-section {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-right: 5px;\n  height: 50%;\n}\n\n.side-bar h3 {\n  margin: 5px;\n}\n\nbutton:disabled {\n  color: gray;\n}\n\n.own-message {\n  float: right;\n  background-color: var(--sucess-color) !important;\n}\n\n.chat-btn {\n  height: 50px;\n  width: auto;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.chat-input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  flex: 10;\n  font-size: 1.3em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee;\n  color: #000;\n  transition: 0.1s ease-out;\n  padding-left: 20px;\n}\n\n.invite-room-block {\n  width: 90%;\n}\n\n.invite-private-block {\n  margin-bottom: 8px;\n  width: 100%;\n}\n\n.invite-input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  height: 26px;\n  width: 160px;\n  font-size: 16px;\n}\n\n.invite-btn {\n  width: auto;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  height: 30px;\n  font-size: 16px;\n  padding: 0px 5px !important;\n}\n\n.avatar {\n  vertical-align: middle;\n}\n\n.logout-btn {\n  width: auto;\n  margin-left: 5px;\n  height: 50px;\n  vertical-align: middle;\n}\n\n.user-info {\n  padding: 5px 0px;\n  text-align: right;\n}\n\n.user-info h3 {\n  display: inline;\n  padding-right: 5px;\n  vertical-align: bottom;\n}\n\n.feedWrapper {\n  background-color: #fff;\n  font-size: 1.2em;\n  flex: 5;\n  overflow-y: scroll;\n  padding: 10px 10px 0px 10px;\n}\n\n.current-room {\n  border: 1px;\n  background-color: var(--primary-color);\n}\n\n.sender {\n  display: block;\n  color: #222;\n  font-weight: bold;\n}\n\n.timestamp {\n  color: #555;\n  font-style: italic;\n}\n\n.delete {\n  cursor: pointer;\n  display: block;\n  color: red;\n  font-style: italic;\n}\n\n.new-room {\n  margin-right: 2px;\n  font-size: 0.7em;\n  cursor: pointer;\n  display: inline;\n  color: green;\n  font-style: italic;\n}\n\n.adapter-data {\n  font-size: 1.2em;\n  float: left;\n  font-style: italic;\n}\n\n.chatFormWrapper {\n  display: flex;\n  height: 50px;\n  background-color: #eee;\n  z-index: 3;\n}\n\n#scroll-style::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n\n.leave-btn {\n  margin: 5px 0px;\n}\n\n.user-list {\n  margin-top: 5px;\n}\n\n.messageData {\n  flex: 1;\n  padding: 10px;\n  font-size: 0.7em;\n}\n\n.chatInput {\n  flex: 10;\n  font-size: 1.3em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee;\n  color: #000;\n  transition: 0.1s ease-out;\n  padding-left: 20px;\n}\n\n.chatInput:focus {\n  background-color: #E4F1FE;\n  color: #222;\n  transition: 0.2s ease-in;\n}\n\n.chatButton:hover {\n  background-color: #444;\n}\n\n.feed {\n  display: flex;\n  flex-direction: column;\n}\n\n.message {\n  flex-direction: column;\n  margin: 10px 0;\n}\n\n.messageContainer {\n  display: flex;\n  height: auto;\n  width: 70%;\n  min-width: 400px;\n  border-radius: 5px;\n  align-items: stretch;\n  background-color: #eee;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.ownMessage {\n  background-color: #01579B;\n}\n\n.messageData {\n  flex: 1;\n  padding: 10px;\n  font-size: 0.7em;\n}\n\n.sender {\n  display: block;\n  color: #222;\n  font-weight: bold;\n}\n\n.isOwnSender {\n  color: #E1F5FE;\n}\n\n.timestamp {\n  color: #555;\n  font-style: italic;\n}\n\n.isOwnTimestamp {\n  color: #4FC3F7;\n}\n\n.messageContent {\n  height: auto;\n  flex: 9;\n  background-color: #fff;\n  padding: 10px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.isOwnMessageContent {\n  background-color: #E3F2FD;\n  color: #01579B;\n}\n\n.userItem {\n  height: auto;\n  padding: 10px;\n  width: 90%;\n  margin-top: 10px;\n  border-radius: 1px;\n  align-items: flex-start;\n  background-color: #201835;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  color: #A098A5;\n  border-radius: 8px;\n  transition: ease-in 0.2s;\n}\n\n.userItem:hover {\n  background-color: #453968;\n  color: #ddd;\n  transition: ease-in 0.1s;\n}\n\n.online {\n  background-color: #0FA;\n}\n\n.busy {\n  background-color: #FB0;\n}\n\n.offline {\n  background-color: #888;\n}\n\n.status {\n  border: 1px solid black;\n  display: inline-block;\n  min-width: 10px;\n  min-height: 10px;\n  border-radius: 50%;\n  margin: 10px 12px 0px 10px;\n}\n\n.userName {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jOlxcZGV2XFxyZXBvXFxmb2tvLWNoYXQvc3JjXFxhcHBcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUVJLFlBQUE7RUFDQSxnREFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDS0o7O0FESEE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNPSjs7QURGQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ01KOztBREpBO0VBQ0ksc0JBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNVSjs7QURSQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0FDV0o7O0FEUkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDV0o7O0FEUkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDV0o7O0FEVEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYUo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElBO0VBRUMsbUJBQUE7RUFDQSx5QkFBQTtBQ0ZEOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREVBO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRFFBO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ0xKOztBRHFCQTtFQUNJLHNCQUFBO0FDbEJKOztBRHVCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7QUNwQko7O0FEd0JBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQ3JCSjs7QUR3QkE7RUFDSSx5QkFBQTtBQ3JCSjs7QUR3QkE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDckJKOztBRHdCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksY0FBQTtBQ3JCSjs7QUR3QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNyQko7O0FEd0JBO0VBQ0ksY0FBQTtBQ3JCSjs7QUR3QkE7RUFDSSxZQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNyQko7O0FEd0JBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDckJKOztBRDBCQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0VBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxzQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxzQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxzQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxxQkFBQTtBQ3ZCSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy9leHBcclxuLndyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNpZGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uc2lkZS1iYXIgLml0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZS1iYXItc2VjdGlvbiB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuLnNpZGUtYmFyIGgzIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4ub3duLW1lc3NhZ2Uge1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNlc3MtY29sb3IpIWltcG9ydGFudDtcclxufVxyXG4uY2hhdC1idG4ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuLmNoYXQtaW5wdXQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5pbnZpdGUtcm9vbS1ibG9jayB7ICAgXHJcbiAgICB3aWR0aDogOTAlOyBcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG4uaW52aXRlLXByaXZhdGUtYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLy8gLmludml0ZS1pbnB1dC1wcml2YXRlIHtcclxuLy8gICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuLy8gfVxyXG4uaW52aXRlLWlucHV0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbnZpdGUtYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5sb2dvdXQtYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnVzZXItaW5mbyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnVzZXItaW5mbyBoMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcbi5mZWVkV3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoI2ZmZik7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZmxleDogNTtcclxuICAgIC8vIG9yZGVyOiAyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcbi5jdXJyZW50LXJvb20ge1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnNlbmRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpbWVzdGFtcCB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLm5ldy1yb29tIHtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uYWRhcHRlci1kYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLy8vLy8vXHJcblxyXG4vLyAudXNlckxpc3RXcmFwcGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTI4NDU7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbi8vICAgICBmbGV4OiAxO1xyXG4vLyAgICAgb3JkZXI6IDE7XHJcbi8vICAgICBwYWRkaW5nOjIwcHggMHB4IDQwcHggMzBweDtcclxuLy8gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XHJcbi8vIH1cclxuXHJcbi5jaGF0Rm9ybVdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcbi5sZWF2ZS1idG4ge1xyXG4gICAgbWFyZ2luOiA1cHggMHB4OyBcclxufVxyXG4udXNlci1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ubWVzc2FnZURhdGF7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vL2Zvcm1cclxuLmNoYXRJbnB1dHtcclxuICAgIGZsZXg6IDEwO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1vdXQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jaGF0SW5wdXQ6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRGMUZFO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW47XHJcbn1cclxuXHJcblxyXG4vLyAuY2hhdEJ1dHRvbntcclxuLy8gICAgIGZsZXg6IDE7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbi8vICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTYW5zJywgc2Fucy1zZXJpZjtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTI4NDU7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4vLyAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4vLyB9XHJcblxyXG4uY2hhdEJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuXHJcblxyXG4vLy8vZmVlZFxyXG4uZmVlZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLy8vLy9tZXNzYWdlXHJcbi5tZXNzYWdlQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjI2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbn1cclxuXHJcbi5vd25NZXNzYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTc5QjtcclxufVxyXG5cclxuLm1lc3NhZ2VEYXRhe1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG59XHJcblxyXG4uc2VuZGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXNPd25TZW5kZXJ7XHJcbiAgICBjb2xvcjogI0UxRjVGRTtcclxufVxyXG5cclxuLnRpbWVzdGFtcCB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmlzT3duVGltZXN0YW1we1xyXG4gICAgY29sb3I6ICM0RkMzRjc7XHJcbn1cclxuXHJcbi5tZXNzYWdlQ29udGVudHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uaXNPd25NZXNzYWdlQ29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XHJcbiAgICBjb2xvcjogIzAxNTc5QjtcclxufVxyXG5cclxuXHJcbi8vLy91c2VyXHJcbi51c2VySXRlbXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxODM1O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgY29sb3I6ICNBMDk4QTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbn1cclxuXHJcbi51c2VySXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTM5Njg7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcclxufVxyXG5cclxuLm9ubGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRkE7XHJcbn1cclxuXHJcbi5idXN5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCMDtcclxufVxyXG5cclxuLm9mZmxpbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG59XHJcblxyXG4uc3RhdHVze1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDEycHggMHB4IDEwcHg7XHJcbn1cclxuXHJcbi51c2VyTmFtZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSIsIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNpZGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeTItY29sb3IpO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uc2lkZS1iYXIgLml0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGUtYmFyLXNlY3Rpb24ge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLnNpZGUtYmFyIGgzIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ub3duLW1lc3NhZ2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Vzcy1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuLmNoYXQtYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG5cbi5jaGF0LWlucHV0IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgZmxleDogMTA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaW52aXRlLXJvb20tYmxvY2sge1xuICB3aWR0aDogOTAlO1xufVxuXG4uaW52aXRlLXByaXZhdGUtYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW52aXRlLWlucHV0IHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmludml0ZS1idG4ge1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwcHggNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9nb3V0LWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi51c2VyLWluZm8ge1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnVzZXItaW5mbyBoMyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uZmVlZFdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmbGV4OiA1O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmN1cnJlbnQtcm9vbSB7XG4gIGJvcmRlcjogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnNlbmRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50aW1lc3RhbXAge1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmV3LXJvb20ge1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uYWRhcHRlci1kYXRhIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmNoYXRGb3JtV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgei1pbmRleDogMztcbn1cblxuI3Njcm9sbC1zdHlsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG4ubGVhdmUtYnRuIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4udXNlci1saXN0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWVzc2FnZURhdGEge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4uY2hhdElucHV0IHtcbiAgZmxleDogMTA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2hhdElucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RjFGRTtcbiAgY29sb3I6ICMyMjI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbn1cblxuLmNoYXRCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xufVxuXG4uZmVlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tZXNzYWdlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5tZXNzYWdlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5vd25NZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTc5Qjtcbn1cblxuLm1lc3NhZ2VEYXRhIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLnNlbmRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pc093blNlbmRlciB7XG4gIGNvbG9yOiAjRTFGNUZFO1xufVxuXG4udGltZXN0YW1wIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmlzT3duVGltZXN0YW1wIHtcbiAgY29sb3I6ICM0RkMzRjc7XG59XG5cbi5tZXNzYWdlQ29udGVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmlzT3duTWVzc2FnZUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xuICBjb2xvcjogIzAxNTc5Qjtcbn1cblxuLnVzZXJJdGVtIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxODM1O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIGNvbG9yOiAjQTA5OEE1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbn1cblxuLnVzZXJJdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1Mzk2ODtcbiAgY29sb3I6ICNkZGQ7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcbn1cblxuLm9ubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRkE7XG59XG5cbi5idXN5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCMDtcbn1cblxuLm9mZmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG4uc3RhdHVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTBweCAxMnB4IDBweCAxMHB4O1xufVxuXG4udXNlck5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/chat/chat.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/chat/chat.component.ts ***!
          \****************************************/
        /*! exports provided: ChatComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function () { return ChatComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gravatar */ "./node_modules/gravatar/index.js");
            /* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_services/data.service */ "./src/app/_services/data.service.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var ChatComponent = /** @class */ (function () {
                function ChatComponent(dataService, authService, toastr) {
                    var _this = this;
                    this.dataService = dataService;
                    this.authService = authService;
                    this.toastr = toastr;
                    this.roomTypes = _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"];
                    this.message = '';
                    this.roomName = '';
                    this.emailCommon = '';
                    this.emailPrivate = '';
                    this.authService.authUser().subscribe(function (user) {
                        if (user) {
                            _this.user = user;
                            _this.avatar = gravatar__WEBPACK_IMPORTED_MODULE_2__["url"](user.email, { default: 'robohash', size: 50 });
                        }
                        else {
                            _this.user = null;
                            _this.avatar = null;
                        }
                    });
                    this.dataService.getMessages().subscribe(function (messages) { _this.messages = messages; setTimeout(_this.scrollToBottom.bind(_this), 200); });
                    this.dataService.getRooms().subscribe(function (rooms) {
                        _this.rooms = rooms;
                        var roomId = localStorage && localStorage.getItem('roomId');
                        if (roomId) {
                            _this.rooms.forEach(function (room) {
                                if (room.id === roomId) {
                                    _this.onRoomClick(room);
                                }
                                return false;
                            });
                        }
                    });
                    // this.roomTypes = roomTypes;
                }
                ChatComponent.prototype.ngOnInit = function () {
                    this.apiAdapter = this.authService.apiAdapter;
                };
                ChatComponent.prototype.scrollToBottom = function () {
                    this.feedContainer.nativeElement.scrollTop
                        = this.feedContainer.nativeElement.scrollHeight;
                };
                ChatComponent.prototype.send = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.dataService.sendMessage(this.message, this.room.id)];
                                case 1:
                                    _a.sent();
                                    this.message = '';
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ChatComponent.prototype.createRoom = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.dataService.createRoom(this.roomName, _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"].COMMON)];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    this.toastr.error(e_1);
                                    return [3 /*break*/, 3];
                                case 3:
                                    this.roomName = '';
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ChatComponent.prototype.inviteToRoom = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var res, e_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.emailCommon = this.emailCommon.trim();
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, this.dataService.inviteToRoom(this.room, this.emailCommon)];
                                case 2:
                                    res = _a.sent();
                                    this.toastr.success(this.emailCommon + " has been added to the room");
                                    return [3 /*break*/, 4];
                                case 3:
                                    e_2 = _a.sent();
                                    this.toastr.error(e_2);
                                    return [3 /*break*/, 4];
                                case 4:
                                    this.emailCommon = '';
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ChatComponent.prototype.createPrivate = function () {
                    var _this = this;
                    this.emailPrivate = this.emailPrivate.trim();
                    if (this.emailPrivate === this.user.email) {
                        this.toastr.error('You cannot invite yourself!');
                        return;
                    }
                    var existed = this.rooms.find(function (room) { return room.type === _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"].PRIVATE && room.users.includes(_this.emailPrivate); });
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
                };
                ChatComponent.prototype.onMessageKeyUp = function (event) {
                    if (event.keyCode === 13) {
                        this.send();
                    }
                };
                ChatComponent.prototype.onRoomKeyUp = function (event) {
                    if (event.keyCode === 13) {
                        this.createRoom();
                    }
                };
                ChatComponent.prototype.onEmailCommonKeyUp = function (event) {
                    if (event.keyCode === 13) {
                        this.inviteToRoom();
                    }
                };
                ChatComponent.prototype.onEmailPrivateKeyUp = function (event) {
                    if (event.keyCode === 13) {
                        this.createPrivate();
                    }
                };
                ChatComponent.prototype.onRoomClick = function (room) {
                    this.room = room;
                    this.dataService.setRoom(room.id);
                    localStorage && localStorage.setItem('roomId', this.room.id);
                };
                ChatComponent.prototype.leaveRoom = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.dataService.leaveRoom(this.room)];
                                case 1:
                                    _a.sent();
                                    this.room = null;
                                    this.dataService.setRoom(null);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ChatComponent.prototype.hideMessage = function (message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.dataService.hideMessage(message)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ChatComponent.prototype.logout = function () {
                    // event.preventDefault();
                    this.authService.logout();
                    return false;
                };
                ChatComponent.prototype.getRoomName = function (room) {
                    var _this = this;
                    return room.type === _services_data_service__WEBPACK_IMPORTED_MODULE_3__["roomTypes"].COMMON ? room.name : room.users.find(function (user) { return user !== _this.user.email; });
                };
                ChatComponent.prototype.isAuthor = function (message) {
                    return this.user && this.user.email === message.sentBy;
                };
                ChatComponent.prototype.isCurrentRoom = function (room) {
                    return room === this.room;
                };
                ChatComponent.prototype.isMe = function (email) {
                    return email === this.user.email;
                };
                ChatComponent.prototype.ifNew = function (room) {
                    return !room.joinedAt[this.user.email];
                };
                ChatComponent.prototype.isMember = function (email) {
                    return this.room.joinedAt[email];
                };
                return ChatComponent;
            }());
            ChatComponent.ctorParameters = function () { return [
                { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroller', { static: false })
            ], ChatComponent.prototype, "feedContainer", void 0);
            ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-chat',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")).default]
                })
            ], ChatComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  border: 1px solid #000000;\n  border-radius: 5px;\n  width: 600px;\n  height: 400px;\n  margin: auto;\n  margin-top: 40px;\n  text-align: center;\n  padding: 80px 30px;\n}\n\n.login-input {\n  margin: auto;\n  margin-top: 16px;\n  display: block;\n  width: 60%;\n  height: 40px;\n  padding: 8px;\n  font-size: 1em;\n}\n\n.error {\n  color: red;\n}\n\n.btn {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vYzpcXGRldlxccmVwb1xcZm9rby1jaGF0L3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNJLFVBQUE7QUNDTjs7QURDRTtFQUNFLGdCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC53cmFwcGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4taW5wdXQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZToxZW07XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICB9IiwiLndyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMzBweDtcbn1cblxuLmxvZ2luLWlucHV0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4uYnRuIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService) {
                    this.authService = authService;
                    this.email = '';
                    this.password = '';
                    this.error = '';
                    this.adapterApi = this.authService.apiAdapter;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.error = '';
                    this.authService.login(this.email, this.password)
                        .catch(function (error) { return _this.error = error; });
                };
                LoginComponent.prototype.register = function () {
                    var _this = this;
                    this.error = '';
                    this.authService.register(this.email, this.password)
                        .catch(function (error) { return _this.error = error; });
                };
                LoginComponent.prototype.adapterChange = function (event) {
                    this.authService.apiAdapter = this.adapterApi;
                    localStorage && localStorage.setItem('apiAdapter', this.authService.apiAdapter);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! c:\dev\repo\foko-chat\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map