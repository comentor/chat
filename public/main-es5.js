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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-info\">\n    <h3 *ngIf=\"user\">Logged as {{user.email}}</h3>\n    <img class=\"avatar\" src=\"{{avatar}}\" />\n    <button class=\"btn secondary logout-btn\" (click)=logout()>Logout</button>\n</div>\n\n<div class=\"chatFormWrapper\">\n    <input placeholder=\"Type a new room name\" class=\"input chat-input\" [(ngModel)]=\"roomName\" (keyup)=\"onRoomKeyUp($event)\" />\n    <button class=\"btn primary chat-btn\" [disabled]=\"roomName.trim().length === 0\" (click)=createRoom()>Create Room</button>\n</div>\n\n<div class=\"#scroller wrapper\">\n        <div class=\"side-bar\">\n            <div class=\"side-bar-section\">\n                <h3>Rooms</h3>\n                <div *ngFor=\"let room of rooms\">\n                    <div [ngClass]=\"{'current-room': isCurrentRoom(room)}\" *ngIf=\"roomTypes.COMMON === room.type\" (click)=\"onRoomClick(room)\" class=\"item\">{{room.name}}</div>\n                </div>\n            </div>\n            <div class=\"side-bar-section\">\n                <h3>Private chats</h3>\n                <div class=\"invite-private-block\">\n                    <input [(ngModel)]=\"emailPrivate\" (keyup)=\"onEmailPrivateKeyUp($event)\" placeholder=\"email to invite\" class=\"input invite-input invite-input-private\" />\n                    <button [disabled]=\"emailPrivate.trim().length === 0\" (click)=\"createPrivate()\" class=\"btn primary invite-btn\">Invite</button>\n                </div>\n                <div *ngFor=\"let room of rooms\">\n                    <div [ngClass]=\"{'current-room': isCurrentRoom(room)}\" *ngIf=\"roomTypes.PRIVATE === room.type\" (click)=\"onRoomClick(room)\" class=\"item\">{{getRoomName(room)}}</div>\n                </div>\n            </div>\n        </div>\n        <div #scroller class=\"feedWrapper\">\n            <h3 *ngIf=\"!room\">No message to show. Join/create a room or start private conversation</h3>\n            <div class=\"feed\" *ngIf=\"room\">\n                <div *ngFor=\"let message of messages\" class=\"message\">\n                    <div class=\"messageContainer\" [ngClass]=\"{'own-message': isAuthor(message)}\">\n                        <div class=\"messageData\">\n                            <span class=\"sender\">{{ message.sentBy }}></span>\n                            <span class=\"timestamp\">{{ message.sentAt | date:'medium' }}</span>\n                            <span class=\"delete\" (click)=\"hideMessage(message);\">Delete</span>\n                        </div>\n                        <div class=\"messageContent\">\n                            {{ message.text }}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"side-bar right-bar\" *ngIf=\"room\">\n            <h3>Current Room: <i>{{getRoomName(room)}}</i></h3>\n            <span *ngIf=\"roomTypes.COMMON === room.type\" class=\"invite-room-block\">\n                <input [(ngModel)]=\"emailCommon\" (keyup)=\"onEmailCommonKeyUp($event)\" placeholder=\"email to invite\" class=\"input invite-input\" />\n                <button [disabled]=\"emailCommon.trim().length === 0\" (click)=\"inviteToRoom()\" class=\"btn primary invite-btn\">Invite</button>\n            </span>\n            <div class=\"invite-private-block\">\n                <h3>Members</h3>\n                <div *ngFor=\"let email of room.users\">\n                    <div [ngClass]=\"{'current-room': isMe(email)}\" class=\"item\">{{email}}</div>\n                </div>\n            </div>\n            <button class=\"btn primary leave-btn\" [disabled]=\"false\" (click)=leaveRoom()>Leave room</button>\n        </div>\n      </div>\n      <div class=\"chatFormWrapper\">\n        <input placeholder=\"Type your message\" class=\"input chat-input\" [disabled]=\"!room\" [(ngModel)]=\"message\" (keyup)=\"onMessageKeyUp($event)\" />\n        <button class=\"btn primary chat-btn\" [disabled]=\"!room || message.trim().length === 0\" (click)=send()>Send</button>\n      </div>");
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <h2>Log In</h2>\n    <input [(ngModel)]=\"email\" type=\"email\" name=\"email\" class=\"input login-input\" />\n    <input [(ngModel)]=\"password\" type=\"password\" name=\"password\" class=\"input login-input\" />\n    <button class=\"btn primary\" (click)=\"login()\">Log In</button>\n    <button class=\"btn secondary\" (click)=\"register()\">Register</button>\n    <p class=\"error\">{{error}}</p>\n</div>");
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
            var DataService = /** @class */ (function () {
                // private adapter = 'SERVER';
                function DataService(authService, fireAuth, firestore, httpClient) {
                    var _this = this;
                    this.authService = authService;
                    this.fireAuth = fireAuth;
                    this.firestore = firestore;
                    this.httpClient = httpClient;
                    this.adapter = 'CLIENT';
                    // var HOST = location.origin.replace(/^http/, 'ws')
                    // var ws = new WebSocket(HOST);
                    // ws.onmessage = function (event) {
                    //   console.log(event);
                    // };
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
                DataService.prototype.sendMessage = function (message, roomId) {
                    if (roomId === void 0) { roomId = null; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, arguments, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this["sendMessage" + this.adapter].apply(this, arguments)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.sendMessageSERVER = function (message, roomId) {
                    if (roomId === void 0) { roomId = null; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var timestamp, res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    timestamp = (new Date()).toISOString();
                                    return [4 /*yield*/, this.httpClient.post("//" + location.host + "/api/sendMessage", {
                                            text: message, roomId: roomId, sentBy: this.user.email
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
                DataService.prototype.sendMessageCLIENT = function (message, roomId) {
                    if (roomId === void 0) { roomId = null; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var sentAt;
                        return __generator(this, function (_a) {
                            sentAt = (new Date()).toISOString();
                            this.firestore.collection('messages').add({
                                text: message,
                                sentAt: sentAt,
                                sentBy: this.user.email,
                                roomId: roomId,
                                hiddenFor: []
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                DataService.prototype.createRoom = function (name, type) {
                    if (type === void 0) { type = 'common'; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, arguments, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this["createRoom" + this.adapter].apply(this, arguments)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                DataService.prototype.createRoomSERVER = function (name, type) {
                    if (type === void 0) { type = 'common'; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.httpClient.post("//" + location.host + "/api/createRoom", {
                                        name: name, type: type, sentBy: this.user.email
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
                DataService.prototype.createRoomCLIENT = function (name, type) {
                    if (type === void 0) { type = 'common'; }
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var createdAt, res;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    createdAt = (new Date()).toISOString();
                                    return [4 /*yield*/, this.firestore.collection('rooms').add({
                                            name: name,
                                            createdAt: createdAt,
                                            createdBy: this.user.email,
                                            type: type,
                                            users: [this.user.email],
                                            joinedAt: (_a = {},
                                                _a[this.user.email] = createdAt,
                                                _a)
                                        })];
                                case 1:
                                    res = _b.sent();
                                    return [2 /*return*/, res];
                            }
                        });
                    });
                };
                DataService.prototype.saveRoom = function (room) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    id = room.id || null;
                                    return [4 /*yield*/, this.firestore.collection('rooms').ref.doc(id).set(room)];
                                case 1:
                                    result = _a.sent();
                                    return [2 /*return*/, result];
                            }
                        });
                    });
                };
                DataService.prototype.saveMessage = function (message) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id, result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    id = message.id || null;
                                    return [4 /*yield*/, this.firestore.collection('messages').ref.doc(id).set(message)];
                                case 1:
                                    result = _a.sent();
                                    return [2 /*return*/, result];
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
                DataService.prototype.createPrivate = function (email) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var createdAt;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    createdAt = (new Date()).toISOString();
                                    return [4 /*yield*/, this.firestore.collection('rooms').add({
                                            type: roomTypes.PRIVATE,
                                            joinedAt: (_a = {},
                                                _a[this.user.email] = createdAt,
                                                _a),
                                            users: [this.user.email, email]
                                        })];
                                case 1:
                                    _b.sent();
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
                DataService.prototype.subsribeToFeed = function () {
                    var _this = this;
                    if (this.feedSubscription) {
                        this.feedSubscription.unsubscribe();
                    }
                    if (!this.roomId) {
                        this.messages.next([]);
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
                    var _this = this;
                    if (this.roomSubscription) {
                        this.roomSubscription.unsubscribe();
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
                            console.log(user);
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
                            timeOut: 2500,
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
            /* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  height: 550px;\n  display: flex;\n}\n\n.side-bar {\n  background-color: var(--primary2-color);\n  color: white;\n  width: 20%;\n  padding: 5px 10px 5px 10px;\n  font-size: 1.2em;\n}\n\n.side-bar .item {\n  border-bottom: 1px solid white;\n  padding: 5px 0px;\n  cursor: pointer;\n}\n\n.side-bar-section {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  padding-right: 5px;\n  height: 50%;\n}\n\n.side-bar h3 {\n  margin: 5px;\n}\n\nbutton:disabled {\n  color: gray;\n}\n\n.own-message {\n  float: right;\n  background-color: var(--sucess-color) !important;\n}\n\n.chat-btn {\n  height: 50px;\n  width: auto;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n\n.chat-input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  flex: 10;\n  font-size: 1.3em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee;\n  color: #000;\n  transition: 0.1s ease-out;\n  padding-left: 20px;\n}\n\n.invite-room-block {\n  width: 90%;\n}\n\n.invite-private-block {\n  margin-bottom: 8px;\n  width: 100%;\n}\n\n.invite-input {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n  height: 26px;\n  width: 160px;\n  font-size: 16px;\n}\n\n.invite-btn {\n  width: auto;\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  height: 30px;\n  font-size: 16px;\n  padding: 0px 5px !important;\n}\n\n.avatar {\n  vertical-align: middle;\n}\n\n.logout-btn {\n  width: auto;\n  margin-left: 5px;\n  height: 50px;\n  vertical-align: middle;\n}\n\n.user-info {\n  padding: 5px 0px;\n  text-align: right;\n}\n\n.user-info h3 {\n  display: inline;\n  padding-right: 5px;\n  vertical-align: bottom;\n}\n\n.feedWrapper {\n  background-color: #fff;\n  font-size: 1.2em;\n  flex: 5;\n  overflow-y: scroll;\n  padding: 10px 10px 0px 10px;\n}\n\n.current-room {\n  border: 1px;\n  background-color: var(--primary-color);\n}\n\n.sender {\n  display: block;\n  color: #222;\n  font-weight: bold;\n}\n\n.timestamp {\n  color: #555;\n  font-style: italic;\n}\n\n.delete {\n  cursor: pointer;\n  display: block;\n  color: red;\n  font-style: italic;\n}\n\n.userListWrapper {\n  background-color: #2A2845;\n  color: #fff;\n  display: flex;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  flex: 1;\n  order: 1;\n  padding: 20px 0px 40px 30px;\n  border-right: 1px solid #222;\n}\n\n.chatFormWrapper {\n  display: flex;\n  height: 50px;\n  background-color: #eee;\n  z-index: 3;\n}\n\n#scroll-style::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n\n.leave-btn {\n  margin: 5px 0px;\n}\n\n.user-list {\n  margin-top: 5px;\n}\n\napp-user-list {\n  width: 100%;\n}\n\n.chatInput {\n  flex: 10;\n  font-size: 1.3em;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: #eee;\n  color: #000;\n  transition: 0.1s ease-out;\n  padding-left: 20px;\n}\n\n.chatInput:focus {\n  background-color: #E4F1FE;\n  color: #222;\n  transition: 0.2s ease-in;\n}\n\n.chatButton:hover {\n  background-color: #444;\n}\n\n.feed {\n  display: flex;\n  flex-direction: column;\n}\n\n.message {\n  flex-direction: column;\n  margin: 10px 0;\n}\n\n.messageContainer {\n  display: flex;\n  height: auto;\n  width: 70%;\n  min-width: 400px;\n  border-radius: 5px;\n  align-items: stretch;\n  background-color: #eee;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.26), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n.ownMessage {\n  background-color: #01579B;\n}\n\n.messageData {\n  flex: 1;\n  padding: 10px;\n  font-size: 0.7em;\n}\n\n.sender {\n  display: block;\n  color: #222;\n  font-weight: bold;\n}\n\n.isOwnSender {\n  color: #E1F5FE;\n}\n\n.timestamp {\n  color: #555;\n  font-style: italic;\n}\n\n.isOwnTimestamp {\n  color: #4FC3F7;\n}\n\n.messageContent {\n  height: auto;\n  flex: 9;\n  background-color: #fff;\n  padding: 10px;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.isOwnMessageContent {\n  background-color: #E3F2FD;\n  color: #01579B;\n}\n\n.userItem {\n  height: auto;\n  padding: 10px;\n  width: 90%;\n  margin-top: 10px;\n  border-radius: 1px;\n  align-items: flex-start;\n  background-color: #201835;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  color: #A098A5;\n  border-radius: 8px;\n  transition: ease-in 0.2s;\n}\n\n.userItem:hover {\n  background-color: #453968;\n  color: #ddd;\n  transition: ease-in 0.1s;\n}\n\n.online {\n  background-color: #0FA;\n}\n\n.busy {\n  background-color: #FB0;\n}\n\n.offline {\n  background-color: #888;\n}\n\n.status {\n  border: 1px solid black;\n  display: inline-block;\n  min-width: 10px;\n  min-height: 10px;\n  border-radius: 50%;\n  margin: 10px 12px 0px 10px;\n}\n\n.userName {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jOlxcZGV2XFxyZXBvXFxmb2tvLWNoYXQvc3JjXFxhcHBcXGNoYXRcXGNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFDSSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBQTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUVJLFlBQUE7RUFDQSxnREFBQTtBQ0lKOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDS0o7O0FESEE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxVQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNPSjs7QURGQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ01KOztBREpBO0VBQ0ksc0JBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1FKOztBRE5BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNVSjs7QURSQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBRUEsa0JBQUE7RUFDQSwyQkFBQTtBQ1VKOztBRFJBO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0FDV0o7O0FEUkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDV0o7O0FEUkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNXSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDV0o7O0FETEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ1FKOztBRExBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNRSjs7QURMQTtFQUVDLG1CQUFBO0VBQ0EseUJBQUE7QUNPRDs7QURMQTtFQUNJLGVBQUE7QUNRSjs7QUROQTtFQUNJLGVBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7QUNVSjs7QURGQTtFQUNJLFFBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREZBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNLSjs7QURXQTtFQUNJLHNCQUFBO0FDUko7O0FEYUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNWSjs7QURhQTtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRGNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3RUFBQTtBQ1hKOztBRGNBO0VBQ0kseUJBQUE7QUNYSjs7QURjQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNYSjs7QURjQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNYSjs7QURjQTtFQUNJLGNBQUE7QUNYSjs7QURjQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGNBO0VBQ0ksY0FBQTtBQ1hKOztBRGNBO0VBQ0ksWUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FDWEo7O0FEY0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNYSjs7QURnQkE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdFQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNiSjs7QURnQkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ2JKOztBRGdCQTtFQUNJLHNCQUFBO0FDYko7O0FEZ0JBO0VBQ0ksc0JBQUE7QUNiSjs7QURnQkE7RUFDSSxzQkFBQTtBQ2JKOztBRGdCQTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDYko7O0FEZ0JBO0VBQ0kscUJBQUE7QUNiSiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLy9leHBcclxuLndyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnNpZGUtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkyLWNvbG9yKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uc2lkZS1iYXIgLml0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2lkZS1iYXItc2VjdGlvbiB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuLnNpZGUtYmFyIGgzIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4ub3duLW1lc3NhZ2Uge1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNlc3MtY29sb3IpIWltcG9ydGFudDtcclxufVxyXG4uY2hhdC1idG4ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbn1cclxuLmNoYXQtaW5wdXQge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcbi5pbnZpdGUtcm9vbS1ibG9jayB7ICAgXHJcbiAgICB3aWR0aDogOTAlOyBcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG4uaW52aXRlLXByaXZhdGUtYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLy8gLmludml0ZS1pbnB1dC1wcml2YXRlIHtcclxuLy8gICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuLy8gfVxyXG4uaW52aXRlLWlucHV0IHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5pbnZpdGUtYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5sb2dvdXQtYnRuIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnVzZXItaW5mbyB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnVzZXItaW5mbyBoMyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcbi5mZWVkV3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAoI2ZmZik7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZmxleDogNTtcclxuICAgIC8vIG9yZGVyOiAyO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xyXG59XHJcbi5jdXJyZW50LXJvb20ge1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnNlbmRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpbWVzdGFtcCB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG4vLy8vLy9cclxuXHJcbi51c2VyTGlzdFdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIHBhZGRpbmc6MjBweCAwcHggNDBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcclxufVxyXG5cclxuLmNoYXRGb3JtV3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbiNzY3JvbGwtc3R5bGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXHJcbntcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuLmxlYXZlLWJ0biB7XHJcbiAgICBtYXJnaW46IDVweCAwcHg7IFxyXG59XHJcbi51c2VyLWxpc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbmFwcC11c2VyLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vZm9ybVxyXG4uY2hhdElucHV0e1xyXG4gICAgZmxleDogMTA7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNoYXRJbnB1dDpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEYxRkU7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcclxufVxyXG5cclxuXHJcbi8vIC5jaGF0QnV0dG9ue1xyXG4vLyAgICAgZmxleDogMTtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vICAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbi8vICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbi8vIH1cclxuXHJcbi5jaGF0QnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxufVxyXG5cclxuXHJcbi8vLy9mZWVkXHJcbi5mZWVke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4vLy8vL21lc3NhZ2VcclxuLm1lc3NhZ2VDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczpzdHJldGNoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxufVxyXG5cclxuLm93bk1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzlCO1xyXG59XHJcblxyXG4ubWVzc2FnZURhdGF7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5zZW5kZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pc093blNlbmRlcntcclxuICAgIGNvbG9yOiAjRTFGNUZFO1xyXG59XHJcblxyXG4udGltZXN0YW1wIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaXNPd25UaW1lc3RhbXB7XHJcbiAgICBjb2xvcjogIzRGQzNGNztcclxufVxyXG5cclxuLm1lc3NhZ2VDb250ZW50e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pc093bk1lc3NhZ2VDb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcclxuICAgIGNvbG9yOiAjMDE1NzlCO1xyXG59XHJcblxyXG5cclxuLy8vL3VzZXJcclxuLnVzZXJJdGVte1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDE4MzU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBjb2xvcjogI0EwOThBNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxufVxyXG5cclxuLnVzZXJJdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1Mzk2ODtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjFzO1xyXG59XHJcblxyXG4ub25saW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBGQTtcclxufVxyXG5cclxuLmJ1c3l7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkIwO1xyXG59XHJcblxyXG4ub2ZmbGluZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbn1cclxuXHJcbi5zdGF0dXN7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDEwcHggMTJweCAwcHggMTBweDtcclxufVxyXG5cclxuLnVzZXJOYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59IiwiLndyYXBwZXIge1xuICBoZWlnaHQ6IDU1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2lkZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Mi1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDIwJTtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5zaWRlLWJhciAuaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZS1iYXItc2VjdGlvbiB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uc2lkZS1iYXIgaDMge1xuICBtYXJnaW46IDVweDtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5vd24tbWVzc2FnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjZXNzLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuXG4uY2hhdC1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuLmNoYXQtaW5wdXQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICBmbGV4OiAxMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjMDAwO1xuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5pbnZpdGUtcm9vbS1ibG9jayB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5pbnZpdGUtcHJpdmF0ZS1ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnZpdGUtaW5wdXQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW52aXRlLWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDBweCA1cHggIWltcG9ydGFudDtcbn1cblxuLmF2YXRhciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5sb2dvdXQtYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udXNlci1pbmZvIGgzIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5mZWVkV3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZsZXg6IDU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4uY3VycmVudC1yb29tIHtcbiAgYm9yZGVyOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uc2VuZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpbWVzdGFtcCB7XG4gIGNvbG9yOiAjNTU1O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogcmVkO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi51c2VyTGlzdFdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZsZXg6IDE7XG4gIG9yZGVyOiAxO1xuICBwYWRkaW5nOiAyMHB4IDBweCA0MHB4IDMwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XG59XG5cbi5jaGF0Rm9ybVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIHotaW5kZXg6IDM7XG59XG5cbiNzY3JvbGwtc3R5bGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuLmxlYXZlLWJ0biB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLnVzZXItbGlzdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuYXBwLXVzZXItbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hhdElucHV0IHtcbiAgZmxleDogMTA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLW91dDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uY2hhdElucHV0OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RjFGRTtcbiAgY29sb3I6ICMyMjI7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbn1cblxuLmNoYXRCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xufVxuXG4uZmVlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tZXNzYWdlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5tZXNzYWdlQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG59XG5cbi5vd25NZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTc5Qjtcbn1cblxuLm1lc3NhZ2VEYXRhIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLnNlbmRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pc093blNlbmRlciB7XG4gIGNvbG9yOiAjRTFGNUZFO1xufVxuXG4udGltZXN0YW1wIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmlzT3duVGltZXN0YW1wIHtcbiAgY29sb3I6ICM0RkMzRjc7XG59XG5cbi5tZXNzYWdlQ29udGVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgZmxleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmlzT3duTWVzc2FnZUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNGMkZEO1xuICBjb2xvcjogIzAxNTc5Qjtcbn1cblxuLnVzZXJJdGVtIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxODM1O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XG4gIGNvbG9yOiAjQTA5OEE1O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbn1cblxuLnVzZXJJdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1Mzk2ODtcbiAgY29sb3I6ICNkZGQ7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcbn1cblxuLm9ubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRkE7XG59XG5cbi5idXN5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCMDtcbn1cblxuLm9mZmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG4uc3RhdHVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTBweCAxMnB4IDBweCAxMHB4O1xufVxuXG4udXNlck5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");
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