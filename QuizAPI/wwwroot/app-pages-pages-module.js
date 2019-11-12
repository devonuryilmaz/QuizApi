(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pages-module"],{

/***/ "./src/app/pages/admin/admin/kategoriHeader/header-service.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/admin/kategoriHeader/header-service.service.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderServiceService", function() { return HeaderServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/config */ "./src/assets/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderServiceService = /** @class */ (function () {
    function HeaderServiceService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = _assets_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].apiURL + "Header/";
        this.path = "";
    }
    HeaderServiceService.prototype.getHeader = function () {
        this.path = this.baseUrl + "get";
        return this.httpClient.get(this.path);
    };
    HeaderServiceService.prototype.updateHeader = function (header) {
        this.path = this.baseUrl + "put?id=1";
        return this.httpClient.put(this.path, header);
    };
    HeaderServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeaderServiceService);
    return HeaderServiceService;
}());



/***/ }),

/***/ "./src/app/pages/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <nb-card-body>\n    <nb-auth-block>\n      <h1 id=\"title\" class=\"title\">Giris Yap</h1>\n      <p class=\"sub-title\">Merhaba ! Kullanıcı adı ve şifreniz ile giriş yapabilirsiniz. </p>\n      <div style=\"text-align: center\">\n      <img src=\"../../../../assets/images/sitegiris.png\" alt=\"Sosyal Biliş\" width=\"250px\">\n    </div>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginAction()\" class=\"ng-untouched ng-pristine ng-valid\" aria-labelledby=\"title\" >\n          <nb-alert status=\"danger\" *ngIf=\"loggedIn==false && submitted\">Kullanıcı Adı veya Şifre Hatalı. Tekrar Deneyin!\n          </nb-alert>  \n        <label class=\"label\" for=\"input-username\">Kullanıcı Adı:</label>\n          <input fullwidth=\"\" autofocus=\"true\" id=\"input-username\" name=\"username\" formControlName=\"userNameControl\" nbinput=\"\"\n          placeholder='Kullanıcı Adı' class=\"input-full-width input-md input-rectangle ng-untouched ng-pristine ng-valid\"\n          [ngClass]=\"{'form-control-danger': submitted && validate.userNameControl.invalid}\">\n          <div class=\"mt-2\" *ngIf=\"validate.userNameControl.errors && submitted && !validate.invalid\">\n          <nb-alert status=\"danger\" *ngIf=\"validate.userNameControl.invalid\">Kullanıcı Adı Boş Bırakılamaz\n          </nb-alert>\n          </div>\n          <div class=\"form-control-group mt-2\">\n          <label class=\"label\" for=\"input-password\">Şifre:</label>\n          <input fullwidth=\"\" formControlName=\"passwordControl\" id=\"input-password\" name=\"password\" nbinput=\"\"\n          placeholder='Şifre' type=\"password\" class=\"input-full-width input-md input-rectangle ng-untouched ng-pristine ng-valid\"\n          [ngClass]=\"{'form-control-danger': submitted && validate.passwordControl.invalid}\">\n          <div class=\"mt-2\" *ngIf=\"validate.passwordControl.errors && submitted && !validate.invalid\">\n          <nb-alert status=\"danger\" *ngIf=\"validate.passwordControl.invalid\">Şifre Boş Bırakılamaz!\n          </nb-alert>\n          </div>\n          </div>\n          <button fullWidth nbButton status=\"success\" type=\"submit\" aria-disabled=\"false\" tabindex=\"0\">Giriş Yap</button>\n          </form>\n    </nb-auth-block>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customForm {\n  margin: auto; }\n\nnb-auth-block {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXE9OVVJcXERlc2t0b3BcXFNvc3lhbCBCaWxpxZ9cXFF1aXpBcHAvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21Gb3Jte1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5uYi1hdXRoLWJsb2Nre1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, authHelper, router, formBuilder, toastrService) {
        this.authService = authService;
        this.authHelper = authHelper;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.loginUser = {};
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.submitted = false;
        if (this.authService.token != null) {
            if (this.authHelper.loggedIn) {
                this.router.navigateByUrl("/pages/dashboard");
            }
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            userNameControl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordControl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_6__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    LoginComponent.prototype.showToast = function (type, title, body) {
        var config = {
            status: type,
            destroyByClick: this.destroyByClick,
            duration: this.duration,
            hasIcon: this.hasIcon,
            position: this.position,
            preventDuplicates: this.preventDuplicates,
        };
        this.toastrService.show(body, "" + title, config);
    };
    Object.defineProperty(LoginComponent.prototype, "validate", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.loginAction = function () {
        var _this = this;
        this.submitted = true;
        if (!this.loginForm.invalid) {
            this.loginUser = Object.assign({}, this.loginForm.value);
            console.log('loginUser', this.loginUser);
            this.authService.login(this.loginUser).toPromise().catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.loggedIn = false;
                            console.log('error kısmı');
                            this.errorToastMessage("Hatalı Giriş", "Tekrar Deneyiniz!");
                            return [4 /*yield*/, this.delay(1500)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!data) return [3 /*break*/, 2];
                            this.successToastMessage("Giriş Başarılı", "Yönlendirme Yapılıyor.");
                            return [4 /*yield*/, this.delay(1500)];
                        case 1:
                            _a.sent();
                            //window.location.href = 'http://localhost:4200/#/pages/dashboard';
                            window.location.reload();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    LoginComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    LoginComponent.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_6__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth_helper__WEBPACK_IMPORTED_MODULE_3__["AuthHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\" [ngClass]=\"{'col-md-12':!user}\">\n    <button nbButton hero size=\"large\" fullWidth status=\"danger\" (click)=\"turnToOturum()\">EGZERSİZLERİ GÖSTER</button>\n  </div>\n\n  <div class=\"col-md-4\">\n    <button nbButton hero size=\"large\" *ngIf=\"user\" fullWidth status=\"info\" (click)=\"turnToKategori()\">KATEGORİLERİ\n      GÖSTER</button>\n  </div>\n\n  <div class=\"col-md-4\">\n    <button nbButton hero size=\"large\" *ngIf=\"user\" fullWidth status=\"success\" (click)=\"openCustom(dialog)\">KATEGORİ\n      MESAJI GÜNCELLE</button>\n  </div>\n\n  <div class=\"col-md-12\" style=\"margin-top: 1rem;\">\n    <nb-card>\n      <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n        <h5 style=\"color:black;\">\n          {{headerSrc?.kategoriHeaderMessage}}\n        </h5>\n      </div>\n      <div class=\"card-body\" style=\"text-align: center\">\n        <video #videoPlayer style=\"margin:auto;width: 80%;\" class=\"video-stream\" controls>\n          <source [src]=\"headerSrc?.src\">\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </nb-card>\n  </div>\n</div>\n\n\n<ng-template #dialog let-data let-ref=\"dialogRef\">\n  <nb-card style='width:45rem;'>\n    <nb-card-header>Açıklama Güncelle</nb-card-header>\n    <nb-card-body>\n      <form [formGroup]=\"header\" (ngSubmit)=\"onSubmit(dialog)\">\n        <label>Açıklama:</label>\n        <textarea nbInput fullWidth shape=\"round\" formControlName=\"message\" class=\"mt-3 form-control\"\n          style=\"height:10rem;\" placeholder=\"Açıklama\"></textarea>\n        <label>Video:</label><br>\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" accept=\"video/*\" (change)=\"degisti($event)\"\n            #file>\n          <label class=\"custom-file-label\" for=\"customFile\">Dosya Seçiniz</label>\n        </div>\n        <button nbButton status=\"info\" style=\"float:right\" class=\"mt-3\">Güncelle</button>\n      </form>\n    </nb-card-body>\n  </nb-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_AdminPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/AdminPanel */ "./src/app/pages/models/AdminPanel.ts");
/* harmony import */ var _admin_admin_kategoriHeader_header_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/admin/kategoriHeader/header-service.service */ "./src/app/pages/admin/admin/kategoriHeader/header-service.service.ts");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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









var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authHelper, router, dialogService, formBuilder, headerService, toastrService, http) {
        this.authHelper = authHelper;
        this.router = router;
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.headerService = headerService;
        this.toastrService = toastrService;
        this.http = http;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.user = this.authHelper.userActor;
        this.header = this.formBuilder.group({
            message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.authHelper.session();
        this.getHeader();
    };
    DashboardComponent.prototype.openCustom = function (dialog) {
        this.dialogRef = this.dialogService.open(dialog);
    };
    //Yanlış Mesajı
    DashboardComponent.prototype.GuncellemeMesaj = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_7__["NbToastStatus"].INFO;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    DashboardComponent.prototype.showToast = function (type, title, body) {
        var config = {
            status: type,
            destroyByClick: this.destroyByClick,
            duration: this.duration,
            hasIcon: this.hasIcon,
            position: this.position,
            preventDuplicates: this.preventDuplicates,
        };
        this.toastrService.show(body, "" + title, config);
    };
    DashboardComponent.prototype.getHeader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.headerService.getHeader().subscribe(function (data) {
                    _this.headerSrc = data;
                    if (_this.videoplayer) {
                        _this.videoplayer.nativeElement.load();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    DashboardComponent.prototype.turnToOturum = function () {
        var path = "/pages/quiz/oturumlar";
        console.log("deneme", path);
        this.router.navigateByUrl(path);
    };
    DashboardComponent.prototype.turnToKategori = function () {
        var path = "/pages/quiz/kategoriler";
        this.router.navigateByUrl(path);
    };
    DashboardComponent.prototype.onSubmit = function (dialog) {
        var _this = this;
        if (!this.header.invalid) {
            var message = new _models_AdminPanel__WEBPACK_IMPORTED_MODULE_5__["AdminPanel"]();
            message.kategoriHeaderMessage = this.header.controls.message.value;
            this.upload(this.video);
            this.headerService.updateHeader(message).subscribe(function (data) {
                console.log("ok");
                _this.header.reset();
                _this.GuncellemeMesaj("Açıklama Güncelleme", "Açıklama Başarı ile Güncellenmiştir.");
                _this.dialogRef.close();
            });
        }
    };
    DashboardComponent.prototype.degisti = function (gelen) {
        gelen.target.labels[0].textContent = gelen.target.files[0].name;
        this.video = gelen.target.files[0];
        console.log("gelen", this.video);
    };
    DashboardComponent.prototype.upload = function (file) {
        var _this = this;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        formData.append(file.name, file);
        selectedFile = file;
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        urlType = "video";
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpRequest"]('POST', "http://localhost:60181/api/video/adminPanel/1", formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.successToastMessage("Video/Resim Yükleme", "Video/Resim başarı ile yüklenmiştir.");
                    _this.router.navigateByUrl(_this.router.url);
                }
                else if (event.url == null) {
                    _this.errorToastMessage("Video/Resim Yükleme", "Video/Resim yüklerken hata oluştu!");
                }
                else {
                    //todo  başarısız toastı 
                    _this.errorToastMessage("Video/Resim Yükleme", "Video/Resim yüklerken hata oluştu!");
                }
            }
        });
        return this.uploadMessage;
    };
    //Yanlış Mesajı
    DashboardComponent.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_7__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    DashboardComponent.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_7__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoPlayer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "videoplayer", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.scss */ "./src/app/pages/dashboard/dashboard.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__["AuthHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _admin_admin_kategoriHeader_header_service_service__WEBPACK_IMPORTED_MODULE_6__["HeaderServiceService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardModule = /** @class */ (function () {
    /**
     *
     */
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
            ],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.scss":
/*!************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.custom-file-label::after {\n  content: 'Gözat'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvQzpcXFVzZXJzXFxPTlVSXFxEZXNrdG9wXFxTb3N5YWwgQmlsacWfXFxRdWl6QXBwL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiAnR8O2emF0JzsgfVxuIiwiLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICdHw7Z6YXQnO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MiscellaneousRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousRoutingModule", function() { return MiscellaneousRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.component */ "./src/app/pages/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
        children: [{
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            }],
    }];
var MiscellaneousRoutingModule = /** @class */ (function () {
    function MiscellaneousRoutingModule() {
    }
    MiscellaneousRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MiscellaneousRoutingModule);
    return MiscellaneousRoutingModule;
}());

var routedComponents = [
    _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
];


/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.component.ts ***!
  \****************************************************************/
/*! exports provided: MiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousComponent", function() { return MiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiscellaneousComponent = /** @class */ (function () {
    function MiscellaneousComponent() {
    }
    MiscellaneousComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-miscellaneous',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], MiscellaneousComponent);
    return MiscellaneousComponent;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.module.ts ***!
  \*************************************************************/
/*! exports provided: MiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous-routing.module */ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousRoutingModule"],
            ],
            declarations: _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-body>\n        <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n          <h2 class=\"title\">404 Page Not Found</h2>\n          <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n          <button (click)=\"goToHome()\" type=\"button\" class=\"btn btn-block btn-hero-primary\">\n            Take me home\n          </button>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-centered {\n  margin: auto; }\n\nnb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.title {\n  text-align: center; }\n\n.sub-title {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem; }\n\n.btn {\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWlzY2VsbGFuZW91cy9ub3QtZm91bmQvQzpcXFVzZXJzXFxPTlVSXFxEZXNrdG9wXFxTb3N5YWwgQmlsacWfXFxRdWl6QXBwL3NyY1xcYXBwXFxwYWdlc1xcbWlzY2VsbGFuZW91c1xcbm90LWZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxvQkFBYTtFQUFiLG9CQUFhO0VBQWIsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2NlbGxhbmVvdXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNlbnRlcmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxubmItY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(menuService) {
        this.menuService = menuService;
    }
    NotFoundComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/miscellaneous/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/miscellaneous/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/models/AdminPanel.ts":
/*!********************************************!*\
  !*** ./src/app/pages/models/AdminPanel.ts ***!
  \********************************************/
/*! exports provided: AdminPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanel", function() { return AdminPanel; });
var AdminPanel = /** @class */ (function () {
    function AdminPanel() {
    }
    return AdminPanel;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS_USER", function() { return MENU_ITEMS_USER; });
var MENU_ITEMS_USER = [];


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _rapor_user_rapor_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rapor-user/rapor-user.component */ "./src/app/pages/rapor-user/rapor-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'rapor',
                component: _rapor_user_rapor_user_component__WEBPACK_IMPORTED_MODULE_5__["RaporUserComponent"],
            },
            {
                path: 'admin',
                loadChildren: './admin/admin/admin.module#AdminModule',
            },
            {
                path: 'atif',
                loadChildren: './admin/atif/atif.module#AtifModule',
            },
            {
                path: 'gaze',
                loadChildren: './admin/gaze/gaze.module#GazeModule',
            },
            {
                path: 'facetoface',
                loadChildren: './admin/facetoface/facetoface.module#FacetofaceModule',
            },
            {
                path: 'quiz',
                loadChildren: './quiz/quiz.module#QuizModule',
            },
            {
                path: 'login',
                component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            }
        ],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-menu */ "./src/app/pages/pages-menu.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesComponent = /** @class */ (function () {
    function PagesComponent(authHelper, router) {
        this.authHelper = authHelper;
        this.router = router;
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS_USER"];
        this.userActor = this.authHelper.userActor;
        this.loggedIn = this.authHelper.loggedIn;
        if (this.authHelper.token) {
            if (this.userActor) {
                this.menu.push({
                    title: 'Anasayfa',
                    icon: 'nb-home',
                    link: '/pages/dashboard',
                    home: true,
                });
                console.log('initialize');
                this.initialize();
            }
            else {
                this.menu.push({
                    title: 'Anasayfa',
                    icon: 'nb-home',
                    link: '/pages/dashboard',
                    home: true,
                }, {
                    title: 'Raporlarım',
                    icon: 'nb-shuffle',
                    link: '/pages/rapor',
                });
            }
        }
    }
    PagesComponent.prototype.initialize = function () {
        this.menu.push({
            title: 'Admin',
            icon: 'nb-locked',
            children: [
                {
                    title: 'Atıf',
                    icon: 'nb-locked',
                    children: [
                        {
                            title: 'Atıf Kategori',
                            link: '/pages/atif/kategori',
                        },
                        {
                            title: 'Atıf Seviye',
                            link: '/pages/atif/seviye',
                        },
                        {
                            title: 'Atıf Soru',
                            link: '/pages/atif/soru',
                        },
                    ]
                },
                {
                    title: 'Gerçeklerle Yüzleşme',
                    icon: 'nb-locked',
                    children: [
                        {
                            title: 'Gerçeklerle Yüzleşme Kategori',
                            link: '/pages/facetoface/kategori',
                        },
                        {
                            title: 'Gerçeklerle Yüzleşme Seviye',
                            link: '/pages/facetoface/seviye',
                        },
                        {
                            title: 'Gerçeklerle Yüzleşme Soru',
                            link: '/pages/facetoface/soru',
                        },
                        {
                            title: 'Gerçeklerle Yüzleşme Fotoğraf',
                            link: '/pages/facetoface/soruPhoto',
                        },
                        {
                            title: 'Gerçeklerle Yüzleşme Seçenek',
                            link: '/pages/facetoface/soruSecenek',
                        },
                    ]
                },
                {
                    title: 'Bakış Biçimlendirme',
                    icon: 'nb-locked',
                    children: [
                        {
                            title: 'Bakış Biçimlendirme Kategori',
                            link: '/pages/gaze/kategori',
                        },
                        {
                            title: 'Bakış Biçimlendirme Seviye',
                            link: '/pages/gaze/seviye',
                        },
                        {
                            title: 'Bakış Biçimlendirme Soru',
                            link: '/pages/gaze/soru',
                        },
                        {
                            title: 'Bakış Biçimlendirme Seçenek',
                            link: '/pages/gaze/secenek',
                        },
                    ]
                },
                {
                    title: 'Oturum',
                    link: '/pages/admin/oturum/Liste',
                },
                {
                    title: 'Kategori',
                    link: '/pages/admin/kategori',
                },
                {
                    title: 'Seviye',
                    link: '/pages/admin/seviye',
                },
                {
                    title: 'Soru',
                    link: '/pages/admin/soru',
                },
                {
                    title: 'Seçenek',
                    link: '/pages/admin/secenek',
                },
                {
                    title: 'Soru Fotoğrafları',
                    link: '/pages/admin/soruFotograf',
                },
                {
                    title: 'Kullanıcı',
                    link: '/pages/admin/kullanici',
                },
                {
                    title: 'Kullanıcı Rapor',
                    link: '/pages/admin/kullaniciIlerleme',
                },
            ],
        });
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-pages',
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        }),
        __metadata("design:paramtypes", [_auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ "./src/app/pages/miscellaneous/miscellaneous.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/pages/auth/login/login.component.ts");
/* harmony import */ var _admin_helper_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/helper/video-upload/video-upload.component */ "./src/app/pages/admin/helper/video-upload/video-upload.component.ts");
/* harmony import */ var _admin_helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/helper/video-upload-custom/video-upload-custom.component */ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.ts");
/* harmony import */ var _admin_helper_video_upload_custom_soru_video_upload_custom_soru_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/helper/video-upload-custom-soru/video-upload-custom-soru.component */ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek1_video_upload_gaze_secenek1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek2_video_upload_gaze_secenek2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek3_video_upload_gaze_secenek3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek4_video_upload_gaze_secenek4_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek5_video_upload_gaze_secenek5_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek6_video_upload_gaze_secenek6_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek7_video_upload_gaze_secenek7_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.ts");
/* harmony import */ var _admin_helper_video_upload_gaze_secenek8_video_upload_gaze_secenek8_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.ts");
/* harmony import */ var _rapor_user_rapor_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rapor-user/rapor-user.component */ "./src/app/pages/rapor-user/rapor-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"],
                _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousModule"],
            ],
            declarations: PAGES_COMPONENTS.concat([
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _admin_helper_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_7__["VideoUploadComponent"],
                _admin_helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_8__["VideoUploadCustomComponent"],
                _admin_helper_video_upload_custom_soru_video_upload_custom_soru_component__WEBPACK_IMPORTED_MODULE_9__["VideoUploadCustomSoruComponent"],
                _admin_helper_video_upload_gaze_secenek1_video_upload_gaze_secenek1_component__WEBPACK_IMPORTED_MODULE_10__["VideoUploadGazeSecenek1Component"],
                _admin_helper_video_upload_gaze_secenek2_video_upload_gaze_secenek2_component__WEBPACK_IMPORTED_MODULE_11__["VideoUploadGazeSecenek2Component"],
                _admin_helper_video_upload_gaze_secenek3_video_upload_gaze_secenek3_component__WEBPACK_IMPORTED_MODULE_12__["VideoUploadGazeSecenek3Component"],
                _admin_helper_video_upload_gaze_secenek4_video_upload_gaze_secenek4_component__WEBPACK_IMPORTED_MODULE_13__["VideoUploadGazeSecenek4Component"],
                _admin_helper_video_upload_gaze_secenek5_video_upload_gaze_secenek5_component__WEBPACK_IMPORTED_MODULE_14__["VideoUploadGazeSecenek5Component"],
                _admin_helper_video_upload_gaze_secenek6_video_upload_gaze_secenek6_component__WEBPACK_IMPORTED_MODULE_15__["VideoUploadGazeSecenek6Component"],
                _admin_helper_video_upload_gaze_secenek7_video_upload_gaze_secenek7_component__WEBPACK_IMPORTED_MODULE_16__["VideoUploadGazeSecenek7Component"],
                _admin_helper_video_upload_gaze_secenek8_video_upload_gaze_secenek8_component__WEBPACK_IMPORTED_MODULE_17__["VideoUploadGazeSecenek8Component"],
                _rapor_user_rapor_user_component__WEBPACK_IMPORTED_MODULE_18__["RaporUserComponent"],
            ]),
            entryComponents: [
                _admin_helper_video_upload_video_upload_component__WEBPACK_IMPORTED_MODULE_7__["VideoUploadComponent"],
                _admin_helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_8__["VideoUploadCustomComponent"],
                _admin_helper_video_upload_custom_soru_video_upload_custom_soru_component__WEBPACK_IMPORTED_MODULE_9__["VideoUploadCustomSoruComponent"],
                _admin_helper_video_upload_gaze_secenek1_video_upload_gaze_secenek1_component__WEBPACK_IMPORTED_MODULE_10__["VideoUploadGazeSecenek1Component"],
                _admin_helper_video_upload_gaze_secenek2_video_upload_gaze_secenek2_component__WEBPACK_IMPORTED_MODULE_11__["VideoUploadGazeSecenek2Component"],
                _admin_helper_video_upload_gaze_secenek3_video_upload_gaze_secenek3_component__WEBPACK_IMPORTED_MODULE_12__["VideoUploadGazeSecenek3Component"],
                _admin_helper_video_upload_gaze_secenek4_video_upload_gaze_secenek4_component__WEBPACK_IMPORTED_MODULE_13__["VideoUploadGazeSecenek4Component"],
                _admin_helper_video_upload_gaze_secenek5_video_upload_gaze_secenek5_component__WEBPACK_IMPORTED_MODULE_14__["VideoUploadGazeSecenek5Component"],
                _admin_helper_video_upload_gaze_secenek6_video_upload_gaze_secenek6_component__WEBPACK_IMPORTED_MODULE_15__["VideoUploadGazeSecenek6Component"],
                _admin_helper_video_upload_gaze_secenek7_video_upload_gaze_secenek7_component__WEBPACK_IMPORTED_MODULE_16__["VideoUploadGazeSecenek7Component"],
                _admin_helper_video_upload_gaze_secenek8_video_upload_gaze_secenek8_component__WEBPACK_IMPORTED_MODULE_17__["VideoUploadGazeSecenek8Component"]
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/rapor-user/rapor-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/rapor-user/rapor-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 row\">\n<nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n<div  *ngIf=\"showKategori\">\n\n  <div class=\"row\">\n    <div class=\"col-md-4\" *ngFor=\"let kategori of kategoriler\">\n      <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n        <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n          <h5 style=\"color:black;\">\n            {{kategori.kategoriAdi}}\n\n          </h5>\n        </div>\n\n        <div class=\"card-footer\">\n\n          <button nbButton (click)=\"getUserRapor(kategori.kategoriID,false)\" status=\"success\">Sonucu Göster</button>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4\">\n        <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n          <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n            <h5 style=\"color:black;\">\n             Gaze Cast\n  \n            </h5>\n          </div>\n  \n          <div class=\"card-footer\">\n  \n              <button nbButton  (click)=\"getUserRapor(2,true)\" status=\"success\">Sonucu Göster</button>\n  \n          </div>\n        </div>\n      </div>\n      \n      <div class=\"col-md-4\">\n          <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n            <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n              <h5 style=\"color:black;\">\n               Face to Fact\n    \n              </h5>\n            </div>\n    \n            <div class=\"card-footer\">\n    \n                <button nbButton  (click)=\"getUserRapor(5,true)\" status=\"success\">Sonucu Göster</button>\n    \n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-4\">\n            <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n              <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n                <h5 style=\"color:black;\">\n                 Atıf\n      \n                </h5>\n              </div>\n      \n              <div class=\"card-footer\">\n      \n                  <button nbButton  (click)=\"getUserAtifRapor()\" status=\"success\">Sonucu Göster</button>\n      \n              </div>\n            </div>\n          </div>\n\n  </div>\n</div>\n\n\n<div *ngIf=\"showUserRapor\">\n  <div class=\"container\">\n      <button type=\"button\" (click)=\"showUserRapor=false; showKategori=true;\" style=\"float:right\" nbButton >Geri</button>\n    <div class=\"row\">\n      <div class=\"col-md-3\" *ngFor=\"let user of userRapor\">\n        <nb-card status=\"success\">\n          <nb-card-header>\n            {{user.seviyeAdi}}\n          </nb-card-header>\n          <nb-card-body>\n            <div *ngIf=\"user.isTamamlandi\">\n              <h5>Doğru Sayısı:{{user.dogruSayisi}}</h5>\n              <h5>Yanlış Sayısı:{{user.yanlisSayisi}}</h5>\n            </div>\n            <div *ngIf=\"!user.isTamamlandi\">\n              <h5>Test henüz tamamlanmamıştır.</h5>\n            </div>\n\n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showUserAtifRapor\">\n      <div class=\"container\">\n          <button type=\"button\" (click)=\"showUserAtifRapor=false; showKategori=true;\" style=\"float:right\" nbButton >Geri</button>\n      <div class=\"row\">\n        <div class=\"col-md-3\" *ngFor=\"let user of userAtifRapor\">\n          <nb-card status=\"success\">\n            <nb-card-header>\n              {{user.seviyeAdi}}\n            </nb-card-header>\n            <nb-card-body>\n              <div *ngIf=\"user.isTamamlandi\" style=\"cursor:pointer;\"(click)=\"getAtifCevap(user)\">\n               \n                <h5>Cevapları Görmek için tıklayın</h5>\n              </div>\n              <div *ngIf=\"!user.isTamamlandi\">\n                <h5>Test henüz tamamlanmamıştır.</h5>\n              </div>\n  \n            </nb-card-body>\n          </nb-card>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"showUserAtifCevap\">\n      <div class=\"accordions-container row\">\n          <div class=\"accordion-container col-md-12 col-lg-6 col-xxxl-6\">   \n            <nb-accordion status=\"success\" *ngFor=\"let atif of atifCevap\">\n              <nb-accordion-item>\n                <nb-accordion-item-header>\n                  <h3>Soru:</h3>\n                  <h4>{{atif.soru}}</h4>\n                </nb-accordion-item-header>\n                <nb-accordion-item-body>\n                  <h3>Cevap:</h3>\n                  <h4>{{atif.cevap}}</h4>\n                </nb-accordion-item-body>\n              </nb-accordion-item>\n        \n                    \n            </nb-accordion>\n          </div>\n        </div>\n        <button type=\"button\" (click)=\"showUserAtifCevap=false; showKategori=true;\" style=\"float:rigth\" class=\"mt-3\" nbButton >Geri</button> \n  </div>\n</nb-card-body>\n</div>"

/***/ }),

/***/ "./src/app/pages/rapor-user/rapor-user.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/rapor-user/rapor-user.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhcG9yLXVzZXIvcmFwb3ItdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/rapor-user/rapor-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/rapor-user/rapor-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RaporUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaporUserComponent", function() { return RaporUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/admin/kategori/kategori.service */ "./src/app/pages/admin/admin/kategori/kategori.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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



var RaporUserComponent = /** @class */ (function () {
    function RaporUserComponent(kategoriService, authHelper) {
        this.kategoriService = kategoriService;
        this.authHelper = authHelper;
        this.showUser = false;
        this.showUserRapor = false;
        this.showCustomUser = false;
        this.showUserAtifRapor = false;
        this.showUserAtifCevap = false;
        this.atifCevap = [];
        this.kategoriler = [];
        this.showAtifUser = false;
        this.loading = true;
        this.users = [];
        this.userRapor = [];
        this.userAtifRapor = [];
        this.isCompleted = false;
        this.type = 'month';
    }
    RaporUserComponent.prototype.getUserAtif = function () {
        var _this = this;
        this.kategoriService.GetAtifKullaniciUser().subscribe(function (data) {
            console.log('data', data);
            _this.users = data;
            _this.showKategori = false;
            _this.showAtifUser = true;
        });
    };
    RaporUserComponent.prototype.getAtifCevap = function (user) {
        var _this = this;
        this.kategoriService.GetKullaniciAtifRaporCevap(user["userId"], user["seviyeId"]).subscribe(function (data) {
            console.log('data', data);
            _this.showUserAtifRapor = false;
            _this.showUserAtifCevap = true;
            _this.atifCevap = data;
        });
    };
    RaporUserComponent.prototype.getUserAtifRapor = function () {
        var _this = this;
        this.showKategori = false;
        this.showUserAtifRapor = true;
        this.kategoriService.GetKullaniciAtifRaporSoru(this.id).subscribe(function (data) {
            console.log('dataaaaaaa********', data);
            _this.userAtifRapor = data;
        });
    };
    RaporUserComponent.prototype.getUserRapor = function (kategoriId, isCustom) {
        var _this = this;
        this.kategoriService.GetKullaniciRaporSoru(kategoriId, this.id, isCustom).subscribe(function (data) {
            _this.userRapor = data;
            _this.showKategori = false;
            _this.showUserRapor = true;
        });
    };
    RaporUserComponent.prototype.getKategoriAll = function () {
        var _this = this;
        this.kategoriService.getKategoriAll(false).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.kategoriler = data;
                this.loading = false;
                this.showKategori = true;
                console.log('kategoriler', this.kategoriler);
                return [2 /*return*/];
            });
        }); });
    };
    RaporUserComponent.prototype.ngOnInit = function () {
        this.authHelper.session();
        this.id = this.authHelper.userId;
        this.getKategoriAll();
    };
    RaporUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rapor-user',
            template: __webpack_require__(/*! ./rapor-user.component.html */ "./src/app/pages/rapor-user/rapor-user.component.html"),
            styles: [__webpack_require__(/*! ./rapor-user.component.scss */ "./src/app/pages/rapor-user/rapor-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_1__["KategoriService"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"]])
    ], RaporUserComponent);
    return RaporUserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-pages-module.js.map