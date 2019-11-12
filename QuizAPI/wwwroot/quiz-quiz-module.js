(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-quiz-module"],{

/***/ "./src/app/pages/admin/admin/kullanici-ilerleme/kullanici-ilerleme.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/admin/kullanici-ilerleme/kullanici-ilerleme.service.ts ***!
  \************************************************************************************/
/*! exports provided: KullaniciIlerlemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KullaniciIlerlemeService", function() { return KullaniciIlerlemeService; });
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



var KullaniciIlerlemeService = /** @class */ (function () {
    function KullaniciIlerlemeService(httpClient) {
        this.httpClient = httpClient;
        this.test = _assets_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].apiURL;
        this.baseUrl = this.test + "/KullaniciIlerleme/";
        this.path = "";
    }
    KullaniciIlerlemeService.prototype.getKullaniciIlerlemeAll = function () {
        this.path = this.baseUrl + "getAll";
        return this.httpClient.get(this.path);
    };
    KullaniciIlerlemeService.prototype.addKullaniciIlerleme = function (kullaniciIlerleme) {
        this.path = this.baseUrl + "add";
        this.httpClient.post(this.path, kullaniciIlerleme).subscribe(function (data) {
            //console.log('response data', data)
            //this.alertifyService.success("Şehir başarıyla eklendi.")
            //this.router.navigateByUrl('/cityDetail/'+data["id"])
        });
    };
    KullaniciIlerlemeService.prototype.updateKullaniciIlerleme = function (kullaniciIlerleme) {
        this.path = this.baseUrl + "put?id=" + kullaniciIlerleme.IlerlemeId;
        return this.httpClient.put(this.path, kullaniciIlerleme);
    };
    KullaniciIlerlemeService.prototype.deleteKullaniciIlerleme = function (id) {
        //console.log('kullaniciId', id)
        this.path = this.baseUrl + "delete?id=" + id;
        return this.httpClient.delete(this.path);
    };
    KullaniciIlerlemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KullaniciIlerlemeService);
    return KullaniciIlerlemeService;
}());



/***/ }),

/***/ "./src/app/pages/models/AtifCevap.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/models/AtifCevap.ts ***!
  \*******************************************/
/*! exports provided: AtıfCevap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtıfCevap", function() { return AtıfCevap; });
var AtıfCevap = /** @class */ (function () {
    function AtıfCevap() {
    }
    return AtıfCevap;
}());



/***/ }),

/***/ "./src/app/pages/models/KullaniciAtıfRapor.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/models/KullaniciAtıfRapor.ts ***!
  \****************************************************/
/*! exports provided: KullaniciAtıfRapor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KullaniciAtıfRapor", function() { return KullaniciAtıfRapor; });
var KullaniciAtıfRapor = /** @class */ (function () {
    function KullaniciAtıfRapor() {
    }
    return KullaniciAtıfRapor;
}());



/***/ }),

/***/ "./src/app/pages/models/KullaniciRapor.ts":
/*!************************************************!*\
  !*** ./src/app/pages/models/KullaniciRapor.ts ***!
  \************************************************/
/*! exports provided: KullaniciRapor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KullaniciRapor", function() { return KullaniciRapor; });
var KullaniciRapor = /** @class */ (function () {
    function KullaniciRapor() {
    }
    return KullaniciRapor;
}());



/***/ }),

/***/ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\"  *ngFor=\"let kategori of kategoriler\">\n    <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n        <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n          <h5 style=\"color:black;\">            \n            {{kategori.kategoriAdi}}\n            </h5>\n        </div>\n        <div class=\"card-body\">\n          <p style=\"color:black\">{{kategori.aciklama}}</p>\n          <!--<iframe src=\"http://www.youtube.com/embed/W7qWa52k-nE\" height=\"300px;\" frameborder=\"0\" allowfullscreen></iframe>-->\n        </div>\n        <div class=\"card-footer\">\n          <!--  <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\" type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n          <button (click)=\"openWindow(kategori)\" status=\"success\" nbButton>Kategoriyi Göster</button>\n            <ng-template #contentTemplate>\n            <p>{{kategori.url}}</p>\n            <div class=\"row\">\n            <video width=\"50%\" style=\"margin: auto\" controls>\n                <source src=\"{{kategori.url}}\">\n                Your browser does not support the video tag.\n              </video> \n            </div>\n          <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\"  type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n        </ng-template>\n-->\n          \n        <ng-template #dialog let-data let-ref=\"dialogRef\">\n          <nb-card size=\"large\">\n            <nb-card-header>{{kategoriAdi}}</nb-card-header>\n            <nb-card-body style=\"text-align:center\">\n              <video width=\"700px\" height=\"400px\" style=\"margin: auto\" controls>\n                  <source src=\"{{kategori.url}}\">\n                  Your browser does not support the video tag.\n                </video> \n            </nb-card-body>\n            <nb-card-footer>\n              <div>\n              <button nbButton (click)=\"ref.close()\" [routerLink]=\"['../seviyeler/',kategori.kategoriID]\" >Seviyeleri Göster</button>\n              <button style=\"float:right\" nbButton (click)=\"ref.close()\" >Kapat</button>\n            </div>\n            </nb-card-footer>\n          </nb-card>\n        </ng-template>\n        <button nbButton (click)=\"open(dialog,kategori)\" status=\"success\">Kategori Önizleme</button>\n\n\n        </div>\n      </div>\n  </div>\n\n\n\n  <div class=\"col-md-4\"  *ngFor=\"let kategori of atifKategoriler\">\n    <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n        <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n          <h5 style=\"color:black;\">            \n           Atıf\n            </h5>\n        </div>\n        <div class=\"card-body\">\n          <p style=\"color:black\">{{kategori.aciklama}}</p>\n          <!--<iframe src=\"http://www.youtube.com/embed/W7qWa52k-nE\" height=\"300px;\" frameborder=\"0\" allowfullscreen></iframe>-->\n        </div>\n        <div class=\"card-footer\">\n          <!--  <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\" type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n          <button (click)=\"openWindow(kategori)\" status=\"success\" nbButton>Kategoriyi Göster</button>\n            <ng-template #contentTemplate>\n            <p>{{kategori.url}}</p>\n            <div class=\"row\">\n            <video width=\"50%\" style=\"margin: auto\" controls>\n                <source src=\"{{kategori.url}}\">\n                Your browser does not support the video tag.\n              </video> \n            </div>\n          <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\"  type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n        </ng-template>\n-->\n          \n        <ng-template #dialog let-data let-ref=\"dialogRef\">\n          <nb-card size=\"large\">\n            <nb-card-header>Atıf</nb-card-header>\n            <nb-card-body style=\"text-align:center\">\n                <video width=\"700px\" height=\"400px\" style=\"margin: auto\" controls>\n                  <source src=\"{{kategori.videoUrl}}\">\n                  Your browser does not support the video tag.\n                </video> \n            </nb-card-body>\n            <nb-card-footer>\n              <div>\n              <button nbButton (click)=\"ref.close()\" [routerLink]=\"['../atif-seviyeler/',kategori.id]\" >Seviyeleri Göster</button>\n              <button style=\"float:right\" nbButton (click)=\"ref.close()\" >Kapat</button>\n            </div>\n            </nb-card-footer>\n          </nb-card>\n        </ng-template>\n        <button nbButton (click)=\"openCustom(dialog)\" status=\"success\">Kategori Önizleme</button>\n\n\n        </div>\n      </div>\n  </div>\n\n\n\n\n  <div class=\"col-md-4\"  *ngFor=\"let kategori of gazeCastKategoriler\">\n    <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n        <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n          <h5 style=\"color:black;\">            \n            Bakış Biçimlendirme\n            </h5>\n        </div>\n        <div class=\"card-body\">\n          <p style=\"color:black\">{{kategori.aciklama}}</p>\n          <!--<iframe src=\"http://www.youtube.com/embed/W7qWa52k-nE\" height=\"300px;\" frameborder=\"0\" allowfullscreen></iframe>-->\n        </div>\n        <div class=\"card-footer\">\n          <!--  <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\" type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n          <button (click)=\"openWindow(kategori)\" status=\"success\" nbButton>Kategoriyi Göster</button>\n            <ng-template #contentTemplate>\n            <p>{{kategori.url}}</p>\n            <div class=\"row\">\n            <video width=\"50%\" style=\"margin: auto\" controls>\n                <source src=\"{{kategori.url}}\">\n                Your browser does not support the video tag.\n              </video> \n            </div>\n          <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\"  type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n        </ng-template>\n-->\n          \n        <ng-template #dialog let-data let-ref=\"dialogRef\">\n          <nb-card size=\"large\">\n            <nb-card-header>Bakış Biçimlendirme</nb-card-header>\n            <nb-card-body style=\"text-align:center\">\n              <video width=\"700px\" height=\"400px\" style=\"margin: auto\" controls>\n                <source src=\"{{kategori.videoUrl}}\">\n                Your browser does not support the video tag.\n              </video> \n            </nb-card-body>\n            <nb-card-footer>\n              <div>\n              <button nbButton (click)=\"ref.close()\" [routerLink]=\"['../gazecast-seviyeler/',kategori.id]\" >Seviyeleri Göster</button>\n              <button style=\"float:right\" nbButton (click)=\"ref.close()\" >Kapat</button>\n            </div>\n            </nb-card-footer>\n          </nb-card>\n        </ng-template>\n        <button nbButton (click)=\"openCustom(dialog)\" status=\"success\">Kategori Önizleme</button>\n\n\n        </div>\n      </div>\n  </div>\n\n\n  <div class=\"col-md-4\"  *ngFor=\"let kategori of facetoFaceKategoriler\">\n    <div class=\"card text-center\" style=\"background-color:whitesmoke;margin-bottom: 1rem\">\n        <div class=\"card-header\" style=\"color:black; text-transform:uppercase; \">\n          <h5 style=\"color:black;\">            \n            Gerçeklerle Yüzleşme\n            </h5>\n        </div>\n        <div class=\"card-body\">\n          <p style=\"color:black\">{{kategori.aciklama}}</p>\n          <!--<iframe src=\"http://www.youtube.com/embed/W7qWa52k-nE\" height=\"300px;\" frameborder=\"0\" allowfullscreen></iframe>-->\n        </div>\n        <div class=\"card-footer\">\n          <!--  <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\" type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n          <button (click)=\"openWindow(kategori)\" status=\"success\" nbButton>Kategoriyi Göster</button>\n            <ng-template #contentTemplate>\n            <p>{{kategori.url}}</p>\n            <div class=\"row\">\n            <video width=\"50%\" style=\"margin: auto\" controls>\n                <source src=\"{{kategori.url}}\">\n                Your browser does not support the video tag.\n              </video> \n            </div>\n          <button  [routerLink]=\"['../seviyeler/',kategori.kategoriID]\"  type=\"button\" class=\"btn btn-success\">Seviyeleri Göster</button>\n        </ng-template>\n-->\n          \n        <ng-template #dialog let-data let-ref=\"dialogRef\">\n          <nb-card size=\"large\">\n            <nb-card-header>Gerçeklerle Yüzleşme</nb-card-header>\n            <nb-card-body style=\"text-align:center\">\n              <video width=\"700px\" height=\"400px\" style=\"margin: auto\" controls>\n                <source src=\"{{kategori.videoUrl}}\">\n                Your browser does not support the video tag.\n              </video> \n            </nb-card-body>\n            <nb-card-footer>\n              <div>\n              <button nbButton (click)=\"ref.close()\" [routerLink]=\"['../facetofact-seviyeler/',kategori.id]\" >Seviyeleri Göster</button>\n              <button style=\"float:right\" nbButton (click)=\"ref.close()\" >Kapat</button>\n            </div>\n            </nb-card-footer>\n          </nb-card>\n        </ng-template>\n        <button nbButton (click)=\"openCustom(dialog)\" status=\"success\">Kategori Önizleme</button>\n\n\n        </div>\n      </div>\n  </div>\n\n\n\n\n  \n</div>\n"

/***/ }),

/***/ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXova2F0ZW9yaWxlci1wYWdlL2thdGVvcmlsZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: KateorilerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KateorilerPageComponent", function() { return KateorilerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/admin/kategori/kategori.service */ "./src/app/pages/admin/admin/kategori/kategori.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KateorilerPageComponent = /** @class */ (function () {
    function KateorilerPageComponent(kategoriService, authHelper, windowService, dialogService, router) {
        this.kategoriService = kategoriService;
        this.authHelper = authHelper;
        this.windowService = windowService;
        this.dialogService = dialogService;
        this.router = router;
    }
    KateorilerPageComponent.prototype.ngOnInit = function () {
        this.authHelper.session();
        if (this.authHelper.userActor) {
            this.getKategoriAll();
            this.getAtifKategori();
            this.getGazeKategori();
            this.getFaceKategori();
        }
        else {
            this.router.navigateByUrl("/pages/oturum");
        }
    };
    KateorilerPageComponent.prototype.open = function (dialog, kategori) {
        this.kategoriAdi = kategori["kategoriAdi"];
        this.dialogService.open(dialog);
    };
    KateorilerPageComponent.prototype.openCustom = function (dialog) {
        this.dialogService.open(dialog);
    };
    KateorilerPageComponent.prototype.openWindow = function (kategori) {
        this.kategoriAdi = kategori["kategoriAdi"];
        this.windowService.open(this.contentTemplate, { title: this.kategoriAdi });
    };
    KateorilerPageComponent.prototype.getKategoriAll = function () {
        var _this = this;
        this.kategoriService.getKategoriAll(false).subscribe(function (data) {
            _this.kategoriler = data;
            console.log('kategoriler', _this.kategoriler);
            data.forEach(function (item) {
                if (item["url"] != null) {
                    item["url"] = item["url"].slice(1, item["url"].length);
                }
            });
        });
    };
    KateorilerPageComponent.prototype.getAtifKategori = function () {
        var _this = this;
        this.kategoriService.getAtifKategoriService(false).subscribe(function (data) {
            _this.atifKategoriler = data;
            data.forEach(function (item) {
                if (item["videoUrl"] != null) {
                    item["videoUrl"] = item["videoUrl"].slice(1, item["videoUrl"].length);
                }
            });
            console.log('atif kategoriler', _this.atifKategoriler);
        });
    };
    KateorilerPageComponent.prototype.getGazeKategori = function () {
        var _this = this;
        this.kategoriService.getGazeKategoriService(false).subscribe(function (data) {
            _this.gazeCastKategoriler = data;
            data.forEach(function (item) {
                if (item["videoUrl"] != null) {
                    item["videoUrl"] = item["videoUrl"].slice(1, item["videoUrl"].length);
                }
            });
            console.log('gazeCastKategoriler', _this.gazeCastKategoriler);
        });
    };
    KateorilerPageComponent.prototype.getFaceKategori = function () {
        var _this = this;
        this.kategoriService.getFacetofaceKategoriService(false).subscribe(function (data) {
            _this.facetoFaceKategoriler = data;
            data.forEach(function (item) {
                if (item["videoUrl"] != null) {
                    item["videoUrl"] = item["videoUrl"].slice(1, item["videoUrl"].length);
                }
            });
            console.log('facetoFaceKategoriler', _this.facetoFaceKategoriler);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], KateorilerPageComponent.prototype, "kategoriAdi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], KateorilerPageComponent.prototype, "contentTemplate", void 0);
    KateorilerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'kateoriler-page',
            template: __webpack_require__(/*! ./kateoriler-page.component.html */ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.html"),
            styles: [__webpack_require__(/*! ./kateoriler-page.component.scss */ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_1__["KategoriService"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbWindowService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KateorilerPageComponent);
    return KateorilerPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/oturum-page/oturum-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quiz/oturum-page/oturum-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card status=\"success\">\n  <nb-card-header style=\"color:black; text-transform:uppercase;\">{{oturum?.oturumAdi}}</nb-card-header>\n  <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n    <div class=\"row\">\n      <div *ngFor=\"let seviye of seviyeler\" class=\"col-md-3\">\n        <nb-card status=\"warning\" card-border-color=\"#000000\" style=\"border:1px #00000038 solid !important\">\n          <nb-card-header style=\"color:black; text-transform:uppercase;\">{{seviye?.seviyeNumarasi}}</nb-card-header>\n          <nb-card-body style=\"text-align: center\">\n\n            <ng-template #dialog let-data let-ref=\"dialogRef\">\n              <nb-card size=\"large\">\n                <nb-card-header style=\"text-transform: uppercase;\">{{seviyeAdi}}</nb-card-header>\n                <nb-card-body style=\"text-align:center\">\n                  <video width=\"700px\" height=\"400px\" style=\"margin: auto\" controls>\n                    <source [src]=\"kategoriUrl\">\n                    Your browser does not support the video tag.\n                  </video>\n                </nb-card-body>\n                <nb-card-footer>\n                  <div>\n                    <button nbButton (click)=\"start(seviye,ref)\">BAŞLA</button>\n                    <button style=\"float:right\" nbButton (click)=\"ref.close()\">Kapat</button>\n                  </div>\n                </nb-card-footer>\n              </nb-card>\n            </ng-template>\n\n            <button (click)=\"open(dialog,seviye)\" type=\"button\" class=\"btn btn-success\">Seviyeyi\n              Göster</button>\n          </nb-card-body>\n        </nb-card>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/pages/quiz/oturum-page/oturum-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quiz/oturum-page/oturum-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovb3R1cnVtLXBhZ2Uvb3R1cnVtLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/quiz/oturum-page/oturum-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/quiz/oturum-page/oturum-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: OturumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OturumPageComponent", function() { return OturumPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/admin/oturum/oturum.service */ "./src/app/pages/admin/admin/oturum/oturum.service.ts");
/* harmony import */ var _admin_admin_kullanici_ilerleme_kullanici_ilerleme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/admin/kullanici-ilerleme/kullanici-ilerleme.service */ "./src/app/pages/admin/admin/kullanici-ilerleme/kullanici-ilerleme.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _models_seviye__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/seviye */ "./src/app/pages/models/seviye.ts");
/* harmony import */ var _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../seviyeler-gazecast/seviyeler-gazecast.component */ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.ts");
/* harmony import */ var _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../seviyeler-atif/seviyeler-atif.component */ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.ts");
/* harmony import */ var _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../seviyeler-facetofact/seviyeler-facetofact.component */ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.ts");
/* harmony import */ var _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../seviyeler-page/seviyeler-page.component */ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../admin/admin/kategori/kategori.service */ "./src/app/pages/admin/admin/kategori/kategori.service.ts");
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













var OturumPageComponent = /** @class */ (function () {
    function OturumPageComponent(oturumService, raporService, authHelper, seviyeService, router, gaze, atif, face, seviye, dialogService, kategoriService) {
        this.oturumService = oturumService;
        this.raporService = raporService;
        this.authHelper = authHelper;
        this.seviyeService = seviyeService;
        this.router = router;
        this.gaze = gaze;
        this.atif = atif;
        this.face = face;
        this.seviye = seviye;
        this.dialogService = dialogService;
        this.kategoriService = kategoriService;
        this.loading = true;
    }
    OturumPageComponent.prototype.ngOnInit = function () {
        this.getOturum(this.authHelper.userId);
    };
    OturumPageComponent.prototype.getOturum = function (id) {
        var _this = this;
        this.oturumService.getKullaniciOturum(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.oturumId = data["oturumID"];
                        this.oturum = data;
                        return [4 /*yield*/, this.getSeviyeler(this.oturumId)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    OturumPageComponent.prototype.open = function (dialog, seviye) {
        var _this = this;
        this.seviyeAdi = seviye["seviyeNumarasi"];
        if (seviye["isAtif"] == true) {
            this.kategoriService.getAtifKategoriService(false).subscribe(function (resp) {
                console.log(resp[0]);
                _this.kategoriUrl = resp[0]["videoUrl"].slice(1, resp[0]["videoUrl"].length);
            }, function (error) { }, function () {
                _this.dialogService.open(dialog);
            });
        }
        else if (seviye["isGazeCast"] == true) {
            this.kategoriService.getGazeKategoriService(false).subscribe(function (resp) {
                console.log(resp[0]);
                _this.kategoriUrl = resp[0]["videoUrl"].slice(1, resp[0]["videoUrl"].length);
                console.log(_this.kategoriUrl);
            }, function (error) { }, function () {
                _this.dialogService.open(dialog);
            });
        }
        else if (seviye["isFaceToFace"] == true) {
            this.kategoriService.getFacetofaceKategoriService(false).subscribe(function (resp) {
                console.log(resp[0]);
                _this.kategoriUrl = resp[0]["videoUrl"].slice(1, resp[0]["videoUrl"].length);
                console.log(_this.kategoriUrl);
            }, function (error) { }, function () {
                _this.dialogService.open(dialog);
            });
        }
        else {
            this.kategoriService.getKategoriById(seviye["kategoriID"]).subscribe(function (resp) {
                console.log(resp);
                _this.kategoriUrl = resp["url"].slice(1, resp["url"].length);
            }, function (error) { }, function () {
                _this.dialogService.open(dialog);
            });
        }
    };
    OturumPageComponent.prototype.getSeviyeler = function (id) {
        var _this = this;
        this.seviyeService.getOturumSeviye(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.seviyeler = data;
                        return [4 /*yield*/, this.getAtifSeviye(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getFaceSeviye(id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getGazeSeviye(id)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    OturumPageComponent.prototype.sırala = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.seviyeler.sort(function (a, b) { return a["oturumSirasi"] - b["oturumSirasi"]; })];
                    case 1:
                        _a.sent();
                        console.log("sev", this.seviyeler);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    OturumPageComponent.prototype.getAtifSeviye = function (id) {
        var _this = this;
        this.seviyeService.getAtifOturum(id).subscribe(function (data) {
            data.forEach(function (atif) {
                var seviye = new _models_seviye__WEBPACK_IMPORTED_MODULE_4__["Seviye"]();
                seviye["seviyeID"] = atif["id"];
                seviye["isAtif"] = true;
                seviye["isAktif"] = atif["isAktif"];
                seviye["siraNumarasi"] = atif["sıraNumara"];
                seviye["seviyeNumarasi"] = atif["aciklama"];
                seviye["aktif"] = atif["aktif"];
                seviye["oturumID"] = atif["oturumID"];
                seviye["oturumSirasi"] = atif["oturumSirasi"];
                _this.seviyeler.push(seviye);
            });
        });
    };
    OturumPageComponent.prototype.getFaceSeviye = function (id) {
        var _this = this;
        this.seviyeService.getFaceOturum(id).subscribe(function (data) {
            data.forEach(function (face) {
                var seviye = new _models_seviye__WEBPACK_IMPORTED_MODULE_4__["Seviye"]();
                seviye["seviyeID"] = face["id"];
                seviye["isFaceToFace"] = true;
                seviye["isAktif"] = face["isAktif"];
                seviye["siraNumarasi"] = face["sıraNumara"];
                seviye["seviyeNumarasi"] = face["aciklama"];
                seviye["aktif"] = face["aktif"];
                seviye["oturumID"] = face["oturumID"];
                seviye["oturumSirasi"] = face["oturumSirasi"];
                _this.seviyeler.push(seviye);
            });
        });
    };
    OturumPageComponent.prototype.getGazeSeviye = function (id) {
        var _this = this;
        this.seviyeService.getGazeOturum(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.forEach(function (gaze) {
                            var seviye = new _models_seviye__WEBPACK_IMPORTED_MODULE_4__["Seviye"]();
                            seviye["seviyeID"] = gaze["id"];
                            seviye["isGazeCast"] = true;
                            seviye["isAktif"] = gaze["isAktif"];
                            seviye["siraNumarasi"] = gaze["sıraNumara"];
                            seviye["seviyeNumarasi"] = gaze["aciklama"];
                            seviye["aktif"] = gaze["aktif"];
                            seviye["oturumID"] = gaze["oturumID"];
                            seviye["oturumSirasi"] = gaze["oturumSirasi"];
                            _this.seviyeler.push(seviye);
                        }), function (error) { },
                            function () { };
                        return [4 /*yield*/, this.sırala()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    OturumPageComponent.prototype.start = function (seviye, ref) {
        ref.close();
        seviye.id = seviye["seviyeID"];
        if (seviye["isAtif"] == true) {
            console.log("atif");
            this.atif.start(seviye, this.seviyeler);
            //this.router.navigateByUrl("pages/quiz/atif-sorular/"+seviye.seviyeID)
        }
        else if (seviye["isGazeCast"] == true) {
            console.log("gaze");
            this.gaze.start(seviye, this.seviyeler);
            //this.router.navigateByUrl("pages/quiz/gazecast-sorular/"+seviye.seviyeID)
        }
        else if (seviye["isFaceToFace"] == true) {
            console.log("face");
            this.face.start(seviye, this.seviyeler);
            //this.router.navigateByUrl("pages/quiz/facetı-fact-sorular/"+seviye.seviyeID)
        }
        else {
            console.log("sev", seviye);
            this.seviye.start(seviye, this.seviyeler);
            //this.router.navigateByUrl("pages/quiz/sorular/"+seviye.seviyeID)
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OturumPageComponent.prototype, "seviyeAdi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OturumPageComponent.prototype, "kategoriUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], OturumPageComponent.prototype, "contentTemplate", void 0);
    OturumPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [_seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_7__["SeviyelerGazecastComponent"], _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_8__["SeviyelerAtifComponent"], _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_9__["SeviyelerFacetofactComponent"], _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_10__["SeviyelerPageComponent"]],
            selector: 'oturum-page',
            template: __webpack_require__(/*! ./oturum-page.component.html */ "./src/app/pages/quiz/oturum-page/oturum-page.component.html"),
            styles: [__webpack_require__(/*! ./oturum-page.component.scss */ "./src/app/pages/quiz/oturum-page/oturum-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_1__["OturumService"], _admin_admin_kullanici_ilerleme_kullanici_ilerleme_service__WEBPACK_IMPORTED_MODULE_2__["KullaniciIlerlemeService"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__["AuthHelper"],
            _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_5__["SeviyeService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_7__["SeviyelerGazecastComponent"], _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_8__["SeviyelerAtifComponent"],
            _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_9__["SeviyelerFacetofactComponent"], _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_10__["SeviyelerPageComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_11__["NbDialogService"],
            _admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_12__["KategoriService"]])
    ], OturumPageComponent);
    return OturumPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steppers-container row\">\n  <div class=\"col-md-12 col-lg-12 col-xxxl-12\">\n    <nb-card >\n      <nb-card-body>\n        <nb-stepper #stepper>\n          <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"Soru\">\n            <form   class=\"step-container\">\n                <div class=\"col-md-6 card-center\">\n                <nb-card>\n                    <nb-card-header>\n                      Soru: {{soru.aciklama}}\n                      </nb-card-header>\n                </nb-card>\n                </div>\n                <div class=\"col-md-6 card-center\" *ngIf =\"soru.type\">\n                 \n                    <nb-card>\n                       \n                      <nb-card-header>\n                        Görüntü\n                      </nb-card-header>\n\n              \n                <video *ngIf =\"soru.type == 'v'\" #videoPlayer width=\"100%\"  controls>\n                    <source [src]=\"soru.url\">\n                   Tarayıcınız bu videoyu desteklemiyor.\n                 </video>\n              <div class=\"photoEdit\" *ngIf =\"soru.type == 'f'\">\n                  <img class=\"goruntuCard\" [src]=\"soru.url\" >\n              </div>\n              <nb-card-body>\n                  \n              </nb-card-body>\n            </nb-card>\n            \n          </div>\n          \n                \n             \n              <div class=\"input-group\">\n                <input #i type=\"text\" placeholder=\"Cevabınızı Yazınız\"  class=\"form-control \" >\n              </div>\n              <div class=\"wrapper\">\n                  <button  class=\"button\" nbButton  (click) = \"soruCevapla(soru,i.value,stepper)\">next</button>\n              </div>\n              \n            </form>\n          </nb-step>\n          \n         \n          <nb-step  [hidden]=\"true\" label=\"Third step\">\n            <div class=\"step-container\">\n              <h3>Tebrikler!</h3>\n              <button class=\"button\" nbButton (click)=\"complete()\">Testi Tamamla</button>\n            \n            </div>\n          </nb-step>\n        </nb-stepper>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photoEdit {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.goruntuCard {\n  width: 100%;\n  /* or whatever width you want. */\n  height: 100%;\n  display: inline-block; }\n\n.card-center {\n  margin: 0 auto; }\n\n.wrapper {\n  text-align: center; }\n\n.button {\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LWF0aWYtc29ydS9xdWl6LXNvcnUvQzpcXFVzZXJzXFxPTlVSXFxEZXNrdG9wXFxTb3N5YWwgQmlsacWfXFxRdWl6QXBwL3NyY1xcYXBwXFxwYWdlc1xccXVpelxccXVpei1hdGlmLXNvcnVcXHF1aXotc29ydVxccXVpei1zb3J1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3hCLDJCQUEwQjtFQUN2Qiw0QkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxXQUFVO0VBQUUsZ0NBQUE7RUFDWixZQUFZO0VBQ2IscUJBQXFCLEVBQUE7O0FBRXhCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LWF0aWYtc29ydS9xdWl6LXNvcnUvcXVpei1zb3J1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvRWRpdHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIFxyXG59XHJcblxyXG4uZ29ydW50dUNhcmR7XHJcbiAgICB3aWR0aDoxMDAlOyAvKiBvciB3aGF0ZXZlciB3aWR0aCB5b3Ugd2FudC4gKi9cclxuICAgIGhlaWdodDogMTAwJTs7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uY2FyZC1jZW50ZXJ7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.ts ***!
  \****************************************************************************/
/*! exports provided: QuizSoruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSoruComponent", function() { return QuizSoruComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin/admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/admin/secenek/secenek.service */ "./src/app/pages/admin/admin/secenek/secenek.service.ts");
/* harmony import */ var _models_AtifCevap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/AtifCevap */ "./src/app/pages/models/AtifCevap.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_KullaniciAt_fRapor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/KullaniciAtıfRapor */ "./src/app/pages/models/KullaniciAtıfRapor.ts");
/* harmony import */ var _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../admin/admin/oturum/oturum.service */ "./src/app/pages/admin/admin/oturum/oturum.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuizSoruComponent = /** @class */ (function () {
    function QuizSoruComponent(soruService, route, authHepler, authhElper, router, secenekService, oturumService) {
        this.soruService = soruService;
        this.route = route;
        this.authHepler = authHepler;
        this.authhElper = authhElper;
        this.router = router;
        this.secenekService = secenekService;
        this.oturumService = oturumService;
        this.sorular = [];
        this.atifRaporlar = [];
    }
    QuizSoruComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.soruService.getAllKullaniciAtıfRapor().subscribe(function (data) {
            _this.atifRaporlar = data;
        });
        var id;
        var userRole = this.authHepler.userActor;
        if (!userRole) { //buraya bak***********
            this.storage = JSON.parse(localStorage.getItem(this.authHepler.userId + 'userAtif'));
            console.log('###storage###', this.storage);
            this.route.params.subscribe(function (params) {
                id = params["id"];
            });
            try {
                this.userRaporIndex = this.storage.findIndex(function (r) { return r["seviyeID"] == id; });
                this.nbStepperComponent.selectedIndex = this.storage[this.userRaporIndex]["index"];
            }
            catch (error) {
                this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
        }
        else {
            this.nbStepperComponent.selectedIndex = 0; // admin ise selected index 0 yani hep baştan başlıyor
        }
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            // console.log('***********params',params)
            var id = +params['id'];
            console.log('id', id);
            if (Number.isNaN(id)) {
                //this.router.navigate(['../../'])//error.
                _this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
            else {
                if (_this.videoplayer) {
                    _this.videoplayer.nativeElement.load();
                }
                _this.selectedId = id;
                _this.getAtıfSoruAllBySeviyeId(id);
            }
        });
    };
    QuizSoruComponent.prototype.atifRaporStartDate = function (id) {
        return this.atifRaporlar.find(function (r) { return r['id'] == id; })['startDate'];
    };
    QuizSoruComponent.prototype.getAtıfSoruAllBySeviyeId = function (id) {
        var _this = this;
        this.soruService.getAtıfSoruAllBySeviyeId(id).subscribe(function (data) {
            _this.sorular = data;
            if (_this.sorular.length < 1) {
                _this.router.navigateByUrl("/pages/quiz/oturumlar");
                return;
            }
            console.log('####333 sorular', _this.sorular);
            var g = [];
            _this.sorular.forEach(function (s, i) {
                s["type"] = s["url"][0];
                s["url"] = s.url.slice(1, s.url.length);
            });
        });
    };
    QuizSoruComponent.prototype.soruCevapla = function (soru, value, stepper) {
        var _this = this;
        console.log('soru', soru);
        console.log('value', value);
        console.log('userId', this.authHepler.userId);
        var userRole = this.authHepler.userActor;
        var atıfCevap = new _models_AtifCevap__WEBPACK_IMPORTED_MODULE_4__["AtıfCevap"]();
        atıfCevap.AtıfSoruID = soru["id"];
        atıfCevap.UserID = this.authHepler.userId;
        atıfCevap.Cevap = value;
        atıfCevap.AtıfSeviyeID = this.selectedId;
        if (!userRole) { //buraya bak **** 
            this.secenekService.addAtıfSecenek(atıfCevap).subscribe(function (data) {
                if (data["id"] > 0) {
                    _this.storage[_this.userRaporIndex]["index"] = _this.nbStepperComponent.selectedIndex + 1;
                    localStorage.setItem(_this.authHepler.userId + 'userAtif', JSON.stringify(_this.storage));
                    stepper.next();
                }
            });
        }
        else {
            stepper.next();
        }
    };
    QuizSoruComponent.prototype.complete = function () {
        var _this = this;
        var userRole = this.authHepler.userActor;
        if (!userRole) { // buraya bak ********
            var completeRapor_1 = new _models_KullaniciAt_fRapor__WEBPACK_IMPORTED_MODULE_7__["KullaniciAtıfRapor"]();
            completeRapor_1.ID = this.storage[this.userRaporIndex]["raporId"];
            var date = this.atifRaporStartDate(completeRapor_1.ID);
            completeRapor_1.isTamamlandi = true;
            completeRapor_1.SeviyeID = this.storage[this.userRaporIndex]["seviyeID"];
            completeRapor_1.KullaniciID = this.authHepler.userId;
            completeRapor_1.startDate = date;
            completeRapor_1.oturumSirasi = this.storage[this.userRaporIndex]["oturumSirasi"];
            completeRapor_1["oturumID"] = this.storage[this.userRaporIndex]["oturumID"];
            this.oturumService.getSonSeviye(completeRapor_1["oturumID"]).subscribe(function (data) {
                if (completeRapor_1.oturumSirasi == data) {
                    completeRapor_1.oturumTamamlandi = true;
                }
            });
            this.soruService.updateKullaniciAtıfRapor(completeRapor_1).subscribe(function (data) {
                if (data) {
                    _this.storage.splice(_this.userRaporIndex, 1);
                    console.log('store***', _this.storage);
                    localStorage.setItem(_this.authHepler.userId + 'userAtif', JSON.stringify(_this.storage));
                    _this.router.navigateByUrl("pages/quiz/oturumlar");
                }
            });
        }
        else {
            this.router.navigateByUrl("pages/quiz/oturumlar");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"]),
        __metadata("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbStepperComponent"])
    ], QuizSoruComponent.prototype, "nbStepperComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoPlayer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuizSoruComponent.prototype, "videoplayer", void 0);
    QuizSoruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quiz-soru',
            template: __webpack_require__(/*! ./quiz-soru.component.html */ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.html"),
            styles: [__webpack_require__(/*! ./quiz-soru.component.scss */ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__["SoruService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_3__["SecenekService"],
            _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_8__["OturumService"]])
    ], QuizSoruComponent);
    return QuizSoruComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steppers-container row\">\n  <div class=\"col-md-12 col-lg-12 col-xxxl-12\">\n    <nb-card>\n      <nb-card-body>\n        <nb-stepper #stepper>\n          <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"Soru\">\n            <div class=\"wrapper\">\n              <button class=\"button\" *ngIf=\"!soruPhotosVisible && startBtnVisible\" nbButton (click)=\"start(soru)\">Başla</button>\n            </div>\n            <div *ngIf=\"soruPhotosVisible\">\n              <div *ngFor=\"let photo of selectedPhotos\">\n                <form class=\"step-container\" *ngIf=\"photo['visible']\">\n                  <div class=\"col-md-6 card-center\" style=\"float:left;\">\n                    <nb-card>\n                      <nb-card-body>\n                        <div class=\"photoEdit\">\n                          <a> <img class=\"goruntuCard\" [src]=\"photo['url']\"></a>\n\n                        </div>\n                      </nb-card-body>\n\n\n                    </nb-card>\n                    <nb-card>\n                      <nb-card-header>\n                        {{photo.aciklama}}\n                      </nb-card-header>\n                    </nb-card>\n\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"wrapper\">\n                      <button class=\"button\" (click)=\"nextSoruPhoto()\" nbButton>next</button>\n                    </div>\n                  </div>\n\n                </form>\n              </div>\n            </div>\n\n\n            <div *ngIf=\"cevapVisible\">\n              <div *ngFor=\"let photo of selectedPhotos\">\n                <form class=\"step-container\" *ngIf=\"photo['visible']\">\n                  <div class=\"col-md-6 card-center\" >\n                    <nb-card>\n                      <nb-card-body>\n                        <div class=\"photoEdit\">\n                          <a> <img class=\"goruntuCard\" [src]=\"photo['url']\"></a>\n\n                        </div>\n                      </nb-card-body>\n\n\n                    </nb-card>\n                    <div class=\"row\">\n                    <div *ngFor=\"let secenek of selectedSecenekler\" class=\"col-md-4\">\n                      \n\n                      \n                      <nb-card>\n                         <i *ngIf=\"clicked && secenek['isTrue']\" class=\"ion-checkmark dogru\"></i>\n                         <i *ngIf=\"clicked && !secenek['isTrue']\" class=\"ion-checkmark yanlis\"></i>\n                        <nb-card-body (click)=\"cevapla(secenek,stepper)\">\n                          \n                              {{secenek.aciklama}}\n                              \n                             \n                        </nb-card-body>\n                     \n                      </nb-card>\n                    \n\n                    </div>\n                  </div>\n\n                 \n\n                  </div>\n                  \n\n                </form>\n              </div>\n            </div>\n\n\n          </nb-step>\n          <nb-step [hidden]=\"true\" label=\"Third step\">\n            <div class=\"step-container\">\n              <h3>Tebrikler!</h3>\n              <button class=\"button\" nbButton (click)=\"complete()\">Testi Tamamla</button>\n            </div>\n          </nb-step>\n        </nb-stepper>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photoEdit {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.goruntuCard {\n  width: 100%;\n  /* or whatever width you want. */\n  height: 100%;\n  display: inline-block; }\n\n.card-center {\n  margin: 0 auto; }\n\n.wrapper {\n  text-align: center; }\n\n.button {\n  position: absolute; }\n\n.container {\n  position: relative;\n  width: 50%; }\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.middle {\n  top: 50%;\n  left: 50%;\n  text-align: center; }\n\n.container .image {\n  opacity: 0.3; }\n\n.container .middle {\n  opacity: 1; }\n\n.dogru {\n  color: green;\n  font-size: 100px;\n  position: absolute; }\n\n.yanlis {\n  color: red;\n  font-size: 100px;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LWZhY2V0b2ZhY3Qtc29ydS9mYWNldG8tZmFjdC1zb3J1L0M6XFxVc2Vyc1xcT05VUlxcRGVza3RvcFxcU29zeWFsIEJpbGnFn1xcUXVpekFwcC9zcmNcXGFwcFxccGFnZXNcXHF1aXpcXHF1aXotZmFjZXRvZmFjdC1zb3J1XFxmYWNldG8tZmFjdC1zb3J1XFxmYWNldG8tZmFjdC1zb3J1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3hCLDJCQUEwQjtFQUN2Qiw0QkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxXQUFVO0VBQUUsZ0NBQUE7RUFDWixZQUFZO0VBQ2IscUJBQXFCLEVBQUE7O0FBRXhCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBRUUsUUFBUTtFQUNSLFNBQVM7RUFFVCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVuQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6L3F1aXotZmFjZXRvZmFjdC1zb3J1L2ZhY2V0by1mYWN0LXNvcnUvZmFjZXRvLWZhY3Qtc29ydS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5waG90b0VkaXR7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBcclxufVxyXG5cclxuLmdvcnVudHVDYXJke1xyXG4gICAgd2lkdGg6MTAwJTsgLyogb3Igd2hhdGV2ZXIgd2lkdGggeW91IHdhbnQuICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7O1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmNhcmQtY2VudGVye1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxufVxyXG4ud3JhcHBlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1pZGRsZSB7XHJcblxyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIC5pbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLm1pZGRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuZG9ncnUge1xyXG4gICBjb2xvcjogZ3JlZW47XHJcbiAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLnlhbmxpcyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FacetoFactSoruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetoFactSoruComponent", function() { return FacetoFactSoruComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin/admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/admin/secenek/secenek.service */ "./src/app/pages/admin/admin/secenek/secenek.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/KullaniciRapor */ "./src/app/pages/models/KullaniciRapor.ts");
/* harmony import */ var _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/admin/oturum/oturum.service */ "./src/app/pages/admin/admin/oturum/oturum.service.ts");
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








var FacetoFactSoruComponent = /** @class */ (function () {
    function FacetoFactSoruComponent(soruService, secenekService, route, authHepler, authhElper, router, oturumService) {
        this.soruService = soruService;
        this.secenekService = secenekService;
        this.route = route;
        this.authHepler = authHepler;
        this.authhElper = authhElper;
        this.router = router;
        this.oturumService = oturumService;
        this.sorular = [];
        this.clicked = false;
        this.soruAllPhotos = [];
        this.photosAllSecenekler = [];
        this.soruPhotosVisible = false;
        this.startBtnVisible = true;
        this.openedPhotoIndex = 0;
        this.cevapVisible = false;
        this.selectedPhotos = [];
        this.selectedSecenekler = [];
    }
    FacetoFactSoruComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userRole = this.authHepler.userActor;
        if (!userRole) {
            this.storage = JSON.parse(localStorage.getItem(this.authHepler.userId + 'user'));
            console.log('###storage###', this.storage);
            var id_1;
            this.route.params.subscribe(function (params) {
                id_1 = params["id"];
            });
            try {
                this.userRaporIndex = this.storage.findIndex(function (r) { return r["kategoriID"] == 5 && r["seviyeID"] == id_1 && r["isCustom"] == true; });
                this.nbStepperComponent.selectedIndex = this.storage[this.userRaporIndex]["index"];
            }
            catch (error) {
                this.router.navigateByUrl("/pages/quiz/kategoriler");
            }
        }
        else {
            console.log('this.nbStepperComponent.selectedIndex');
            this.nbStepperComponent.selectedIndex = 0;
        }
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            if (Number.isNaN(id)) {
                console.log(' this.router.navigateByUrl');
                _this.router.navigateByUrl("/pages/quiz/kategoriler");
            }
            else {
                console.log(' this.router.navigateByUrl elseee');
                _this.getFacetoFactSoruById(id);
                _this.getFactoFactAllPhotos();
                _this.getFacetoFactSecenekAllSecenek();
            }
        });
    };
    FacetoFactSoruComponent.prototype.getFacetoFactSoruById = function (id) {
        var _this = this;
        this.soruService.getFacetoFactSoruAllBySeviyeId(id).subscribe(function (data) {
            _this.sorular = data;
            if (_this.sorular.length < 1) {
                _this.router.navigateByUrl("/pages/quiz/facetofact-seviyeler/1");
                return;
            }
        });
    };
    FacetoFactSoruComponent.prototype.getFactoFactAllPhotos = function () {
        var _this = this;
        this.soruService.getFacetoFactSoruAllPhotos().subscribe(function (data) {
            _this.soruAllPhotos = data;
            _this.soruAllPhotos.forEach(function (photo) {
                photo["url"] = photo["url"].slice(1, photo["url"].length);
                photo["visible"] = false;
            });
            console.log('soruAllPhotos', _this.soruAllPhotos);
        });
    };
    FacetoFactSoruComponent.prototype.getFacetoFactSecenekAllSecenek = function () {
        var _this = this;
        this.secenekService.getFacetoFactSecenekAllSecenek().subscribe(function (data) {
            _this.photosAllSecenekler = data;
            console.log('photosSecenekler', _this.photosAllSecenekler);
        });
    };
    FacetoFactSoruComponent.prototype.getBySoruIdPhotos = function (id) {
        var photos = [];
        this.soruAllPhotos.forEach(function (photo) {
            if (photo["faceToFaceSoruID"] == id) {
                photos.push(photo);
            }
        });
        return photos;
    };
    FacetoFactSoruComponent.prototype.getByPhotoIdSecenekler = function (id) {
        console.log('gelen id', id);
        var secenekler = [];
        this.photosAllSecenekler.forEach(function (secenek) {
            if (secenek["faceToFacePhotoID"] == id) {
                console.log('secenek', secenek);
                secenekler.push(secenek);
            }
        });
        return secenekler;
    };
    FacetoFactSoruComponent.prototype.start = function (soru) {
        // this.storage[this.userRaporIndex]["index"]=this.nbStepperComponent.selectedIndex;
        // localStorage.setItem(this.authHepler.userId+'user',JSON.stringify(this.storage))
        this.cevapVisible = false;
        this.soruPhotosVisible = true;
        //console.log('soru',soru)
        this.selectedPhotos = this.getBySoruIdPhotos(soru["id"]);
        this.selectedPhotos[this.openedPhotoIndex]["visible"] = true;
    };
    FacetoFactSoruComponent.prototype.cevapla = function (secenek, stepper) {
        return __awaiter(this, void 0, void 0, function () {
            var userActor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.clicked = true;
                        return [4 /*yield*/, this.delay(1000)];
                    case 1:
                        _a.sent();
                        this.selectedPhotos[this.openedPhotoIndex]["visible"] = false;
                        this.openedPhotoIndex++;
                        userActor = this.authHepler.userActor;
                        if (!userActor) {
                            if (this.openedPhotoIndex == this.selectedPhotos.length) {
                                if (secenek["isTrue"]) {
                                    this.storage[this.userRaporIndex]["dogru"]++;
                                }
                                else {
                                    this.storage[this.userRaporIndex]["yanlis"]++;
                                }
                                console.log("secenek1", secenek);
                                //console.log('girdi')
                                stepper.next();
                                this.storage[this.userRaporIndex]["index"] = this.nbStepperComponent.selectedIndex;
                                localStorage.setItem(this.authHepler.userId + 'user', JSON.stringify(this.storage));
                                this.openedPhotoIndex = 0;
                                this.startBtnVisible = true;
                            }
                            else {
                                //console.log('else')
                                if (secenek["isTrue"]) {
                                    this.storage[this.userRaporIndex]["dogru"]++;
                                }
                                else {
                                    this.storage[this.userRaporIndex]["yanlis"]++;
                                }
                                localStorage.setItem(this.authHepler.userId + 'user', JSON.stringify(this.storage));
                                console.log("secenek2", secenek);
                                this.selectedPhotos[this.openedPhotoIndex]["visible"] = true;
                                this.selectedSecenekler = this.getByPhotoIdSecenekler(this.selectedPhotos[this.openedPhotoIndex]["id"]);
                            }
                        }
                        else {
                            if (this.openedPhotoIndex == this.selectedPhotos.length) {
                                stepper.next();
                                this.openedPhotoIndex = 0;
                                this.startBtnVisible = true;
                            }
                            else {
                                this.selectedPhotos[this.openedPhotoIndex]["visible"] = true;
                                this.selectedSecenekler = this.getByPhotoIdSecenekler(this.selectedPhotos[this.openedPhotoIndex]["id"]);
                            }
                        }
                        //
                        this.clicked = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    FacetoFactSoruComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    FacetoFactSoruComponent.prototype.nextSoruPhoto = function () {
        this.selectedPhotos[this.openedPhotoIndex]["visible"] = false;
        this.openedPhotoIndex++;
        if (this.openedPhotoIndex == this.selectedPhotos.length) {
            this.openedPhotoIndex = 0;
            this.soruPhotosVisible = false;
            this.selectedPhotos[this.openedPhotoIndex]["visible"] = true;
            this.startBtnVisible = false;
            this.selectedSecenekler = this.getByPhotoIdSecenekler(this.selectedPhotos[this.openedPhotoIndex]["id"]);
            this.cevapVisible = true;
        }
        else {
            this.selectedPhotos[this.openedPhotoIndex]["visible"] = true;
        }
    };
    FacetoFactSoruComponent.prototype.complete = function () {
        var _this = this;
        var userRole = this.authHepler.userActor;
        if (!userRole) {
            var completeRapor_1 = new _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_6__["KullaniciRapor"]();
            completeRapor_1.id = this.storage[this.userRaporIndex]["raporId"];
            completeRapor_1.dogruSayisi = this.storage[this.userRaporIndex]["dogru"];
            completeRapor_1.yanlisSayisi = this.storage[this.userRaporIndex]["yanlis"];
            completeRapor_1.isKategoriCustom = this.storage[this.userRaporIndex]["isCustom"];
            completeRapor_1.isTamamlandi = true;
            completeRapor_1.kategoriID = this.storage[this.userRaporIndex]["kategoriID"];
            completeRapor_1.seviyeID = this.storage[this.userRaporIndex]["seviyeID"];
            completeRapor_1.kullaniciID = this.authHepler.userId;
            completeRapor_1.oturumSirasi = this.storage[this.userRaporIndex]["oturumSirasi"];
            completeRapor_1["oturumID"] = this.storage[this.userRaporIndex]["oturumID"];
            this.oturumService.getSonSeviye(completeRapor_1["oturumID"]).subscribe(function (data) {
                console.log("sa", data);
                if (completeRapor_1.oturumSirasi == data) {
                    console.log("gitti", data);
                    completeRapor_1.oturumTamamlandi = true;
                }
            }, function (error) { }, function () {
                _this.soruService.updateKullaniciRapor(completeRapor_1).subscribe(function (data) {
                    if (data) {
                        _this.storage.splice(_this.userRaporIndex, 1);
                        console.log('store***', _this.storage);
                        localStorage.setItem(_this.authHepler.userId + 'user', JSON.stringify(_this.storage));
                        _this.router.navigateByUrl("pages/quiz/kategoriler");
                    }
                });
            });
        }
        else {
            this.router.navigateByUrl("pages/quiz/kategoriler");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperComponent"]),
        __metadata("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbStepperComponent"])
    ], FacetoFactSoruComponent.prototype, "nbStepperComponent", void 0);
    FacetoFactSoruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'faceto-fact-soru',
            template: __webpack_require__(/*! ./faceto-fact-soru.component.html */ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.html"),
            styles: [__webpack_require__(/*! ./faceto-fact-soru.component.scss */ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__["SoruService"], _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_3__["SecenekService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_2__["AuthHelper"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_7__["OturumService"]])
    ], FacetoFactSoruComponent);
    return FacetoFactSoruComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"steppers-container row\">\n  <div class=\"col-md-12 col-lg-12 col-xxxl-12\">\n    <nb-card>\n      <nb-card-body>\n        <nb-stepper #stepper>\n          <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"Soru\">\n              <form   class=\"step-container\">\n                <div *ngIf=\"soruVisible\">\n                  <div class=\"col-md-6 card-center\">\n                  <nb-card>\n                      <nb-card-header>\n                        Soru Açıklaması: {{soru.aciklama}}\n                        </nb-card-header>\n                  </nb-card>\n                  </div>\n                  <div class=\"col-md-6 card-center\" >\n                   \n                      <nb-card>\n  \n                          \n                        <nb-card-header>\n                          Görüntü\n                        </nb-card-header>\n  \n                \n                  <video  #videoPlayer width=\"100%\" autoplay (ended)=\"videoEnd()\" (complete)=\"test()\" >\n                      <source [src]=\"soru.videoUrl\">\n                     Tarayıcınız bu videoyu desteklemiyor.\n                   </video>\n               \n                <nb-card-body>\n                    \n                </nb-card-body>\n              </nb-card>\n              \n            </div>\n            \n                  \n               \n          \n              \n              </div>\n\n\n              <div *ngIf=\"!soruVisible\">\n                 \n                  <div class=\"col-md-6 card-center\" >\n                   \n                      <nb-card>\n  \n                          \n                        <nb-card-header>\n                           \n                           \n                            \n                          Görüntü\n                        </nb-card-header>\n  \n                \n                        \n               \n                <nb-card-body>\n                  <div class=\"row\">\n                    <div class=\"offset-md-4\">\n\n                    </div>\n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ; margin-left: 30px;\">\n                        <div class=\"photoEdit\"  >\n                            <a (click)=\"photoClick(soru['cevap'].photo1isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo1Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo1Url\"  ></a>\n                            <div class=\"middle\">\n                                <div *ngIf=\"soru['cevap'].photo1isTrue && soru['cevap'].photo1Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo1isTrue,soru.id)\" ></i></div>\n                                <div *ngIf=\"!soru['cevap'].photo1isTrue && soru['cevap'].photo1Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo1isTrue,soru.id)\" ></i></div>\n                                \n                              </div>\n                        </div>\n                    </div>\n                    <div class=\"offset-md-4\">\n\n                      </div>\n                   \n\n                   \n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"offset-md-2\">\n\n                        </div>\n                     \n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ;\">\n                        <div class=\"photoEdit\"  >\n                            <a (click)=\"photoClick(soru['cevap'].photo2isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo2Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo2Url\"  ></a>\n                            <div class=\"middle\">\n                                <div *ngIf=\"soru['cevap'].photo2isTrue && soru['cevap'].photo2Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo2isTrue,soru.id)\" ></i></div>\n                                <div *ngIf=\"!soru['cevap'].photo2isTrue && soru['cevap'].photo2Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo2isTrue,soru.id)\"></i></div>\n                                \n                              </div>\n                        </div>\n                    </div>\n                    <div class=\"offset-md-2\">\n\n                      </div>\n                   \n                   \n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ;\">\n                      <div class=\"photoEdit\"  >\n                          <a (click)=\"photoClick(soru['cevap'].photo3isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo3Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo3Url\"  ></a>\n                          <div class=\"middle\">\n                              <div *ngIf=\"soru['cevap'].photo3isTrue && soru['cevap'].photo3Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo3isTrue,soru.id)\" ></i></div>\n                              <div *ngIf=\"!soru['cevap'].photo3isTrue && soru['cevap'].photo3Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo3isTrue,soru.id)\"></i></div>\n                              \n                            </div>\n                      </div>\n                  </div>\n                  <div class=\"offset-md-2\">\n\n                    </div>\n                 \n                   \n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ;\">\n                        <div class=\"photoEdit\"  >\n                            <a (click)=\"photoClick(soru['cevap'].photo4isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo4Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo4Url\"  ></a>\n                            <div class=\"middle\">\n                                <div *ngIf=\"soru['cevap'].photo4isTrue && soru['cevap'].photo4Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo4isTrue,soru.id)\" ></i></div>\n                                <div *ngIf=\"!soru['cevap'].photo4isTrue && soru['cevap'].photo4Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo4isTrue,soru.id)\"></i></div>\n                                \n                              </div>\n                        </div>\n                    </div>\n                    <div class=\"offset-md-6\">\n\n                      </div>\n                   \n                   \n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ;\">\n                      <div class=\"photoEdit\"  >\n                          <a (click)=\"photoClick(soru['cevap'].photo5isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo5Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo5Url\"  ></a>\n                          <div class=\"middle\">\n                              <div *ngIf=\"soru['cevap'].photo5isTrue && soru['cevap'].photo5Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo5isTrue,soru.id)\" ></i></div>\n                              <div *ngIf=\"!soru['cevap'].photo5isTrue && soru['cevap'].photo5Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo5isTrue,soru.id)\"></i></div>\n                              \n                            </div>\n                      </div>\n                  </div>\n                 \n                   \n                  </div>\n\n              \n                  <div class=\"row\">\n                      <div class=\"offset-md-2\">\n\n                        </div>\n                     \n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ;\">\n                        <div class=\"photoEdit\"  >\n                            <a (click)=\"photoClick(soru['cevap'].photo6isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo6Url\" > <img class=\"image\" [src]=\"soru['cevap'].photo6Url\"  ></a>\n                            <div class=\"middle\">\n                                <div *ngIf=\"soru['cevap'].photo6isTrue && soru['cevap'].photo6Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo6isTrue,soru.id)\" ></i></div>\n                                <div *ngIf=\"!soru['cevap'].photo6isTrue && soru['cevap'].photo6Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo6isTrue,soru.id)\"></i></div>\n                                \n                              </div>\n                        </div>\n                    </div>\n                    <div class=\"offset-md-2\">\n\n                      </div>\n                   \n                   \n                    <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ;\">\n                      <div class=\"photoEdit\"  >\n                          <a (click)=\"photoClick(soru['cevap'].photo7isTrue,soru.id)\" *ngIf=\"soru['cevap'].photo7Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo7Url\"  ></a>\n                          <div class=\"middle\">\n                              <div *ngIf=\"soru['cevap'].photo7isTrue && soru['cevap'].photo7Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo7isTrue,soru.id)\" ></i></div>\n                              <div *ngIf=\"!soru['cevap'].photo7isTrue && soru['cevap'].photo7Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo7isTrue,soru.id)\"></i></div>\n                              \n                            </div>\n                      </div>\n                  </div>\n                  <div class=\"offset-md-2\">\n\n                    </div>\n                 \n                   \n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"offset-md-4\">\n\n                      </div>\n                      <div class=\"col-md-3 \" [ngClass]=\"container\"  style=\"margin-bottom:30px ; margin-left: 30px;\">\n                          <div class=\"photoEdit\"  >\n                              <a (click)=\"photoClick(soru['cevap'].photo8isTrue,soru.id)\"  *ngIf=\"soru['cevap'].photo8Url\"> <img class=\"image\" [src]=\"soru['cevap'].photo8Url\"  ></a>\n                              <div class=\"middle\">\n                                  <div *ngIf=\"soru['cevap'].photo8isTrue && soru['cevap'].photo8Url\" ><i class=\"ion-checkmark dogru\" (click)=\"photoClick(soru['cevap'].photo8isTrue,soru.id)\" ></i></div>\n                                  <div *ngIf=\"!soru['cevap'].photo8isTrue && soru['cevap'].photo8Url\" ><i class=\"ion-close-round yanlis\" (click)=\"photoClick(soru['cevap'].photo8isTrue,soru.id)\"></i></div>\n                                  \n                                </div>\n                          </div>\n                      </div>\n                      <div class=\"offset-md-4\">\n\n                        </div>\n                     \n\n                     \n                    </div>\n                    \n                \n                </nb-card-body>\n              </nb-card>\n              \n            </div>\n            \n            <div class=\"wrapper\" *ngIf = \"devamButton\">\n                  \n                      \n                <button  class=\"button\" nbButton  (click) = \"next(stepper)\">Devam</button>\n            </div>\n                  \n               \n               \n               \n              </div>\n\n              </form>\n          \n          </nb-step>\n          \n         \n          <nb-step  [hidden]=\"true\" label=\"Third step\">\n            <div class=\"step-container\">\n              <h3>Tebrikler!</h3>\n              <button class=\"button\" nbButton (click)=\"complete()\">Testi Tamamla</button>\n            \n            </div>\n          </nb-step>\n        </nb-stepper>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photoEdit {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.goruntuCard {\n  width: 100%;\n  /* or whatever width you want. */\n  height: 100%;\n  display: inline-block; }\n\n.card-center {\n  margin: 0 auto; }\n\n.wrapper {\n  text-align: center; }\n\n.button {\n  position: absolute; }\n\n.container {\n  position: relative;\n  width: 50%; }\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center; }\n\n.container .image {\n  opacity: 0.3; }\n\n.container .middle {\n  opacity: 1; }\n\n.dogru {\n  color: green;\n  font-size: 100px; }\n\n.yanlis {\n  color: red;\n  font-size: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LWdhemUtc29ydS9xdWl6LWdhemUtc29ydS9DOlxcVXNlcnNcXE9OVVJcXERlc2t0b3BcXFNvc3lhbCBCaWxpxZ9cXFF1aXpBcHAvc3JjXFxhcHBcXHBhZ2VzXFxxdWl6XFxxdWl6LWdhemUtc29ydVxccXVpei1nYXplLXNvcnVcXHF1aXotZ2F6ZS1zb3J1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQXFCO0VBQ3hCLDJCQUEwQjtFQUN2Qiw0QkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxXQUFVO0VBQUUsZ0NBQUE7RUFDWixZQUFZO0VBQ2IscUJBQXFCLEVBQUE7O0FBRXhCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVqQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovcXVpei1nYXplLXNvcnUvcXVpei1nYXplLXNvcnUvcXVpei1nYXplLXNvcnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG9FZGl0e1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgXHJcbn1cclxuXHJcbi5nb3J1bnR1Q2FyZHtcclxuICAgIHdpZHRoOjEwMCU7IC8qIG9yIHdoYXRldmVyIHdpZHRoIHlvdSB3YW50LiAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOztcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jYXJkLWNlbnRlcntcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5taWRkbGUge1xyXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciAuaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIC5taWRkbGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLmRvZ3J1IHtcclxuICAgY29sb3I6IGdyZWVuO1xyXG4gICBmb250LXNpemU6IDEwMHB4O1xyXG4gIH1cclxuICAueWFubGlzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.ts ***!
  \**************************************************************************************/
/*! exports provided: QuizGazeSoruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizGazeSoruComponent", function() { return QuizGazeSoruComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin/admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin/admin/secenek/secenek.service */ "./src/app/pages/admin/admin/secenek/secenek.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/KullaniciRapor */ "./src/app/pages/models/KullaniciRapor.ts");
/* harmony import */ var _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/admin/oturum/oturum.service */ "./src/app/pages/admin/admin/oturum/oturum.service.ts");
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








var QuizGazeSoruComponent = /** @class */ (function () {
    function QuizGazeSoruComponent(soruService, route, authHepler, router, secenekService, authhElper, oturumService) {
        this.soruService = soruService;
        this.route = route;
        this.authHepler = authHepler;
        this.router = router;
        this.secenekService = secenekService;
        this.authhElper = authhElper;
        this.oturumService = oturumService;
        this.soruVisible = true;
        this.sorular = [];
        this.container = "";
        this.devamButton = false;
        this.cevaplananSorular = [];
    }
    QuizGazeSoruComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userRole = this.authhElper.userActor;
        if (!userRole) {
            this.storage = JSON.parse(localStorage.getItem(this.authHepler.userId + 'user'));
            console.log('###storage###', this.storage);
            var id_1;
            this.route.params.subscribe(function (params) {
                id_1 = params["id"];
            });
            try {
                this.userRaporIndex = this.storage.findIndex(function (r) { return r["kategoriID"] == 2 && r["seviyeID"] == id_1 && r["isCustom"] == true; });
                this.nbStepperComponent.selectedIndex = this.storage[this.userRaporIndex]["index"];
            }
            catch (error) {
                this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
        }
        else {
            this.nbStepperComponent.selectedIndex = 0;
        }
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            console.log('*****params', params);
            var id = +params['id'];
            if (Number.isNaN(id)) {
                //this.router.navigate(['../../'])//error.
                _this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
            else {
                if (_this.videoplayer) {
                    _this.videoplayer.nativeElement.load();
                }
                _this.getGazeSoruAllBySeviyeId(id);
            }
        });
    };
    QuizGazeSoruComponent.prototype.getGazeSoruAllBySeviyeId = function (id) {
        var _this = this;
        this.soruService.getGazeSoruAllBySeviyeId(id).subscribe(function (data) {
            _this.sorular = data;
            if (_this.sorular.length < 1) {
                _this.router.navigateByUrl("/pages/quiz/gazecast-seviyeler/1");
                return;
            }
            var soruVideolaru = [];
            _this.sorular.forEach(function (s, i) {
                s["isCevap"] = false;
                s["videoUrl"] = s["videoUrl"].slice(1, s["videoUrl"].length);
                _this.secenekService.getGazeCevapAllBySoruId(s["id"]).subscribe(function (data) {
                    data["photo1Url"] = data["photo1Url"] ? data["photo1Url"].slice(1, data["photo1Url"].length) : null;
                    data["photo2Url"] = data["photo2Url"] ? data["photo2Url"].slice(1, data["photo2Url"].length) : null;
                    data["photo3Url"] = data["photo3Url"] ? data["photo3Url"].slice(1, data["photo3Url"].length) : null;
                    data["photo4Url"] = data["photo4Url"] ? data["photo4Url"].slice(1, data["photo4Url"].length) : null;
                    data["photo5Url"] = data["photo5Url"] ? data["photo5Url"].slice(1, data["photo5Url"].length) : null;
                    data["photo6Url"] = data["photo6Url"] ? data["photo6Url"].slice(1, data["photo6Url"].length) : null;
                    data["photo7Url"] = data["photo7Url"] ? data["photo7Url"].slice(1, data["photo7Url"].length) : null;
                    data["photo8Url"] = data["photo8Url"] ? data["photo8Url"].slice(1, data["photo8Url"].length) : null;
                    s["cevap"] = data;
                });
                console.log('soru', data);
            });
        });
    };
    QuizGazeSoruComponent.prototype.photoClick = function (cevap, soruId) {
        this.container = "container";
        var userRole = this.authHepler.userActor;
        if (!this.soruCevapKontrol(soruId)) {
            if (!userRole) {
                console.log('cevap', cevap);
                if (cevap) {
                    this.storage[this.userRaporIndex]["dogru"]++;
                }
                else {
                    this.storage[this.userRaporIndex]["yanlis"]++;
                }
                this.storage[this.userRaporIndex]["index"] = this.nbStepperComponent.selectedIndex + 1;
                localStorage.setItem(this.authHepler.userId + 'user', JSON.stringify(this.storage));
            }
            this.cevaplananSorular.push({ id: soruId, cevap: cevap });
            console.log('id', this.cevaplananSorular);
        }
        this.devamButton = true;
    };
    QuizGazeSoruComponent.prototype.soruCevapKontrol = function (id) {
        var a = 0;
        this.cevaplananSorular.forEach(function (soru) {
            if (id == soru["id"]) {
                a = 1;
                return;
            }
        });
        return a;
    };
    QuizGazeSoruComponent.prototype.next = function (stepper) {
        this.devamButton = false;
        this.container = "";
        this.soruVisible = true;
        stepper.next();
    };
    QuizGazeSoruComponent.prototype.cevapGoster = function () {
        this.soruVisible = false;
    };
    QuizGazeSoruComponent.prototype.videoEnd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delay(4000)];
                    case 1:
                        _a.sent();
                        this.soruVisible = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    QuizGazeSoruComponent.prototype.test = function () {
        console.log("play");
    };
    QuizGazeSoruComponent.prototype.complete = function () {
        var _this = this;
        var userRole = this.authHepler.userActor;
        if (!userRole) {
            var completeRapor_1 = new _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_6__["KullaniciRapor"]();
            completeRapor_1.id = this.storage[this.userRaporIndex]["raporId"];
            completeRapor_1.dogruSayisi = this.storage[this.userRaporIndex]["dogru"];
            completeRapor_1.yanlisSayisi = this.storage[this.userRaporIndex]["yanlis"];
            completeRapor_1.isKategoriCustom = this.storage[this.userRaporIndex]["isCustom"];
            completeRapor_1.isTamamlandi = true;
            completeRapor_1.oturumSirasi = this.storage[this.userRaporIndex]["oturumSirasi"];
            completeRapor_1["oturumID"] = this.storage[this.userRaporIndex]["oturumID"];
            completeRapor_1.kategoriID = this.storage[this.userRaporIndex]["kategoriID"];
            completeRapor_1.seviyeID = this.storage[this.userRaporIndex]["seviyeID"];
            completeRapor_1.kullaniciID = this.authhElper.userId;
            this.oturumService.getSonSeviye(completeRapor_1["oturumID"]).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (completeRapor_1.oturumSirasi == data) {
                        completeRapor_1["oturumTamamlandi"] = true;
                    }
                    return [2 /*return*/];
                });
            }); }, function (error) { }, function () {
                console.log("rapo", completeRapor_1);
                _this.soruService.updateKullaniciRapor(completeRapor_1).subscribe(function (data) {
                    if (data) {
                        //Local storageden o seviyeyi kaldırma işlemi 
                        _this.storage.splice(_this.userRaporIndex, 1);
                        console.log('store***', _this.storage);
                        localStorage.setItem(_this.authhElper.userId + 'user', JSON.stringify(_this.storage));
                    }
                });
            });
        }
        else {
            this.router.navigateByUrl("pages/quiz/oturumlar");
        }
        //
    };
    QuizGazeSoruComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperComponent"]),
        __metadata("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbStepperComponent"])
    ], QuizGazeSoruComponent.prototype, "nbStepperComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoPlayer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QuizGazeSoruComponent.prototype, "videoplayer", void 0);
    QuizGazeSoruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quiz-gaze-soru',
            template: __webpack_require__(/*! ./quiz-gaze-soru.component.html */ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.html"),
            styles: [__webpack_require__(/*! ./quiz-gaze-soru.component.scss */ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__["SoruService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__["AuthHelper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_2__["SecenekService"], _auth_auth_helper__WEBPACK_IMPORTED_MODULE_4__["AuthHelper"],
            _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_7__["OturumService"]])
    ], QuizGazeSoruComponent);
    return QuizGazeSoruComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/quiz/quiz-routing.module.ts ***!
  \***************************************************/
/*! exports provided: QuizRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function() { return QuizRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kateoriler_page_kateoriler_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kateoriler-page/kateoriler-page.component */ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.ts");
/* harmony import */ var _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seviyeler-page/seviyeler-page.component */ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.ts");
/* harmony import */ var _sorular_page_sorular_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sorular-page/sorular-page.component */ "./src/app/pages/quiz/sorular-page/sorular-page.component.ts");
/* harmony import */ var _quiz_atif_soru_quiz_soru_quiz_soru_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quiz-atif-soru/quiz-soru/quiz-soru.component */ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.ts");
/* harmony import */ var _quiz_gaze_soru_quiz_gaze_soru_quiz_gaze_soru_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component */ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.ts");
/* harmony import */ var _quiz_facetofact_soru_faceto_fact_soru_faceto_fact_soru_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component */ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.ts");
/* harmony import */ var _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seviyeler-atif/seviyeler-atif.component */ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.ts");
/* harmony import */ var _seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seviyeler-gazecast/seviyeler-gazecast.component */ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.ts");
/* harmony import */ var _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seviyeler-facetofact/seviyeler-facetofact.component */ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.ts");
/* harmony import */ var _oturum_page_oturum_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oturum-page/oturum-page.component */ "./src/app/pages/quiz/oturum-page/oturum-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var routes = [{
        path: '',
        //component:KateorilerPageComponent,
        children: [
            {
                path: 'oturumlar',
                component: _oturum_page_oturum_page_component__WEBPACK_IMPORTED_MODULE_11__["OturumPageComponent"],
            },
            {
                path: 'kategoriler',
                component: _kateoriler_page_kateoriler_page_component__WEBPACK_IMPORTED_MODULE_2__["KateorilerPageComponent"],
            },
            {
                path: 'seviyeler/:id',
                component: _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_3__["SeviyelerPageComponent"],
            },
            {
                path: 'atif-seviyeler/:id',
                component: _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_8__["SeviyelerAtifComponent"],
            },
            {
                path: 'gazecast-seviyeler/:id',
                component: _seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_9__["SeviyelerGazecastComponent"],
            },
            {
                path: 'facetofact-seviyeler/:id',
                component: _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_10__["SeviyelerFacetofactComponent"],
            },
            {
                path: 'sorular/:id',
                component: _sorular_page_sorular_page_component__WEBPACK_IMPORTED_MODULE_4__["SorularPageComponent"],
            },
            {
                path: 'atif-sorular/:id',
                component: _quiz_atif_soru_quiz_soru_quiz_soru_component__WEBPACK_IMPORTED_MODULE_5__["QuizSoruComponent"],
            },
            {
                path: 'gazecast-sorular/:id',
                component: _quiz_gaze_soru_quiz_gaze_soru_quiz_gaze_soru_component__WEBPACK_IMPORTED_MODULE_6__["QuizGazeSoruComponent"],
            },
            {
                path: 'facetı-fact-sorular/:id',
                component: _quiz_facetofact_soru_faceto_fact_soru_faceto_fact_soru_component__WEBPACK_IMPORTED_MODULE_7__["FacetoFactSoruComponent"],
            },
        ]
    }];
var QuizRoutingModule = /** @class */ (function () {
    /**
     *
     */
    function QuizRoutingModule() {
    }
    QuizRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        }),
        __metadata("design:paramtypes", [])
    ], QuizRoutingModule);
    return QuizRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/quiz/quiz.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/quiz/quiz.module.ts ***!
  \*******************************************/
/*! exports provided: QuizModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizModule", function() { return QuizModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kateoriler_page_kateoriler_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kateoriler-page/kateoriler-page.component */ "./src/app/pages/quiz/kateoriler-page/kateoriler-page.component.ts");
/* harmony import */ var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quiz-routing.module */ "./src/app/pages/quiz/quiz-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seviyeler-page/seviyeler-page.component */ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.ts");
/* harmony import */ var _sorular_page_sorular_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sorular-page/sorular-page.component */ "./src/app/pages/quiz/sorular-page/sorular-page.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _quiz_atif_soru_quiz_soru_quiz_soru_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz-atif-soru/quiz-soru/quiz-soru.component */ "./src/app/pages/quiz/quiz-atif-soru/quiz-soru/quiz-soru.component.ts");
/* harmony import */ var _quiz_facetofact_soru_faceto_fact_soru_faceto_fact_soru_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component */ "./src/app/pages/quiz/quiz-facetofact-soru/faceto-fact-soru/faceto-fact-soru.component.ts");
/* harmony import */ var _quiz_gaze_soru_quiz_gaze_soru_quiz_gaze_soru_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component */ "./src/app/pages/quiz/quiz-gaze-soru/quiz-gaze-soru/quiz-gaze-soru.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seviyeler-atif/seviyeler-atif.component */ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.ts");
/* harmony import */ var _seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./seviyeler-gazecast/seviyeler-gazecast.component */ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.ts");
/* harmony import */ var _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./seviyeler-facetofact/seviyeler-facetofact.component */ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.ts");
/* harmony import */ var _oturum_page_oturum_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./oturum-page/oturum-page.component */ "./src/app/pages/quiz/oturum-page/oturum-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var QuizModule = /** @class */ (function () {
    /**
     *
     */
    function QuizModule() {
        console.log('...');
    }
    QuizModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_kateoriler_page_kateoriler_page_component__WEBPACK_IMPORTED_MODULE_2__["KateorilerPageComponent"], _seviyeler_page_seviyeler_page_component__WEBPACK_IMPORTED_MODULE_5__["SeviyelerPageComponent"], _sorular_page_sorular_page_component__WEBPACK_IMPORTED_MODULE_6__["SorularPageComponent"], _quiz_atif_soru_quiz_soru_quiz_soru_component__WEBPACK_IMPORTED_MODULE_8__["QuizSoruComponent"], _quiz_gaze_soru_quiz_gaze_soru_quiz_gaze_soru_component__WEBPACK_IMPORTED_MODULE_10__["QuizGazeSoruComponent"], _quiz_facetofact_soru_faceto_fact_soru_faceto_fact_soru_component__WEBPACK_IMPORTED_MODULE_9__["FacetoFactSoruComponent"], _seviyeler_atif_seviyeler_atif_component__WEBPACK_IMPORTED_MODULE_12__["SeviyelerAtifComponent"], _seviyeler_gazecast_seviyeler_gazecast_component__WEBPACK_IMPORTED_MODULE_13__["SeviyelerGazecastComponent"], _seviyeler_facetofact_seviyeler_facetofact_component__WEBPACK_IMPORTED_MODULE_14__["SeviyelerFacetofactComponent"], _oturum_page_oturum_page_component__WEBPACK_IMPORTED_MODULE_15__["OturumPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _quiz_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuizRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbWindowModule"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], QuizModule);
    return QuizModule;
}());



/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <button nbButton hero status=\"warning\" style=\"width:100%;\" (click)=\"turnToKategori()\">KATEGORİLERE DÖN</button>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"  *ngFor=\"let seviye of seviyeler\">\n        <div class=\"card text-center\" style=\"background-color:whitesmoke; margin-bottom: 1rem\">\n            <div class=\"card-header\" style=\"color:black; text-transform:uppercase;\">\n              {{seviye.aciklama}}\n            </div>\n            <div class=\"card-body\">\n                <button (click)=\"start(seviye)\"  type=\"button\" class=\"btn btn-success\">BAŞLA</button>\n              </div>\n          </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovc2V2aXllbGVyLWF0aWYvc2V2aXllbGVyLWF0aWYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.ts ***!
  \***********************************************************************/
/*! exports provided: SeviyelerAtifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeviyelerAtifComponent", function() { return SeviyelerAtifComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
/* harmony import */ var _models_KullaniciAt_fRapor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/KullaniciAtıfRapor */ "./src/app/pages/models/KullaniciAtıfRapor.ts");
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







var SeviyelerAtifComponent = /** @class */ (function () {
    function SeviyelerAtifComponent(route, router, seviyeService, authhElper, toastrService) {
        this.route = route;
        this.router = router;
        this.seviyeService = seviyeService;
        this.authhElper = authhElper;
        this.toastrService = toastrService;
        this.destroyByClick = true;
        this.duration = 3000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    SeviyelerAtifComponent.prototype.warningToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].WARNING;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    SeviyelerAtifComponent.prototype.showToast = function (type, title, body) {
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
    SeviyelerAtifComponent.prototype.turnToKategori = function () {
        var path = "/pages/quiz/kategoriler";
        console.log("deneme", path);
        this.router.navigateByUrl(path);
    };
    SeviyelerAtifComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            console.log('***********params', params);
            _this.id = +params['id'];
            console.log('id', _this.id);
            if (Number.isNaN(_this.id)) {
                //this.router.navigate(['../../'])//error.
                _this.router.navigateByUrl("/pages/quiz/kategoriler");
            }
            else {
                _this.getAllByKategoriId();
            }
        });
    };
    SeviyelerAtifComponent.prototype.start = function (seviye, seviyeOturum) {
        var _this = this;
        var rapor = new _models_KullaniciAt_fRapor__WEBPACK_IMPORTED_MODULE_6__["KullaniciAtıfRapor"]();
        rapor.KullaniciID = this.authhElper.userId;
        rapor.SeviyeID = seviye.id;
        rapor["oturumID"] = seviye.oturumID;
        rapor["oturumSirasi"] = seviye["oturumSirasi"];
        var suankiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == seviye["oturumSirasi"]; }).valueOf();
        var oncekiSira = 0;
        console.log('rapor', rapor);
        var userRol = this.authhElper.userActor;
        console.log('******rol', userRol);
        if (!userRol) { //BURAYA BAK***************
            this.seviyeService.kullaniciAtıfRaporKontrol(rapor).subscribe(function (isFind) { return __awaiter(_this, void 0, void 0, function () {
                var atifVar_1, girilebilir_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isFind) return [3 /*break*/, 1];
                            this.seviyeService.kullaniciAtıfCompleteKontrol(rapor).subscribe(function (complete) {
                                if (!complete["isTamamlandi"]) {
                                    _this.router.navigateByUrl("pages/quiz/atif-sorular/" + seviye.id);
                                }
                                else {
                                    // todo notification(zaten bu quizi tamamlamışsınız)
                                    _this.warningToastMessage("Seviye Uyarısı", "Bu seviye tamamlanmıştır. Tekrar girilemez.");
                                    console.log('tamamlamışsınız');
                                    return;
                                }
                            });
                            return [3 /*break*/, 4];
                        case 1:
                            atifVar_1 = false;
                            girilebilir_1 = false;
                            if (!(rapor["oturumSirasi"] > 1)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.seviyeService.sonAtifRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                        if (rp && rp["isTamamlandi"]) {
                                            atifVar_1 = true;
                                            if ((suankiSira - oncekiSira) == 1) {
                                                girilebilir_1 = true;
                                                this.localStorageEkle(rapor, seviye);
                                            }
                                        }
                                        return [2 /*return*/];
                                    });
                                }); }, function (error) { }, function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!!atifVar_1) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.seviyeService.sonRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                                            console.log("rp", rp);
                                                            if (rp && rp["isTamamlandi"]) {
                                                                atifVar_1 = true;
                                                                if ((suankiSira - oncekiSira) == 1) {
                                                                    girilebilir_1 = true;
                                                                    this.localStorageEkle(rapor, seviye);
                                                                }
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    }); }, function (error) { }, function () {
                                                        if (!girilebilir_1) {
                                                            _this.warningToastMessage("Seviye Uyarısı", "Şuan bu seviyeye girilemez!");
                                                        }
                                                    })];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            if (rapor["oturumSirasi"] == 1) {
                                this.localStorageEkle(rapor, seviye);
                            }
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); }); //
        }
        else { //BİR DE BURAYA********************
            this.router.navigateByUrl("pages/quiz/atif-sorular/" + seviye.id);
        }
    };
    SeviyelerAtifComponent.prototype.localStorageEkle = function (rapor, seviye) {
        var _this = this;
        this.seviyeService.addKullaniciAtıfRapor(rapor).subscribe(function (r) {
            if (localStorage.getItem(r["kullaniciID"] + 'userAtif')) {
                var data = void 0;
                data = JSON.parse(localStorage.getItem(r["kullaniciID"] + 'userAtif'));
                var arr = [];
                arr = data;
                arr.push({
                    index: 0, seviyeID: r["seviyeID"], raporId: r["id"],
                    oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                });
                localStorage.setItem(r["kullaniciID"] + 'userAtif', JSON.stringify(arr));
                _this.router.navigateByUrl("pages/quiz/atif-sorular/" + seviye.id);
            }
            else {
                localStorage.setItem(r["kullaniciID"] + 'userAtif', JSON.stringify([{
                        index: 0, seviyeID: r["seviyeID"], raporId: r["id"],
                        oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                    }]));
                _this.router.navigateByUrl("pages/quiz/atif-sorular/" + seviye.id);
            }
        });
    };
    SeviyelerAtifComponent.prototype.getAllByKategoriId = function () {
        var _this = this;
        this.seviyeService.getAtifSeviyeAll(false).subscribe(function (data) {
            _this.seviyeler = data;
            console.log('seviyeler', _this.seviyeler);
        });
    };
    SeviyelerAtifComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'seviyeler-atif',
            template: __webpack_require__(/*! ./seviyeler-atif.component.html */ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.html"),
            styles: [__webpack_require__(/*! ./seviyeler-atif.component.scss */ "./src/app/pages/quiz/seviyeler-atif/seviyeler-atif.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__["SeviyeService"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__["AuthHelper"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], SeviyelerAtifComponent);
    return SeviyelerAtifComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <button nbButton hero status=\"warning\" style=\"width:100%;\" (click)=\"turnToKategori()\">KATEGORİLERE DÖN</button>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"  *ngFor=\"let seviye of seviyeler\">\n        <div class=\"card text-center\" style=\"background-color:whitesmoke; margin-bottom: 1rem\">\n            <div class=\"card-header\" style=\"color:black; text-transform:uppercase;\">\n              {{seviye.aciklama}}\n            </div>\n            <div class=\"card-body\">\n                <button (click)=\"start(seviye)\"  type=\"button\" class=\"btn btn-success\">BAŞLA</button>\n              </div>\n          </div>\n    </div>\n  </div>\n\n  <!-- [routerLink]=\"['../../facetı-fact-sorular/',seviye.id]\" -->"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovc2V2aXllbGVyLWZhY2V0b2ZhY3Qvc2V2aXllbGVyLWZhY2V0b2ZhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SeviyelerFacetofactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeviyelerFacetofactComponent", function() { return SeviyelerFacetofactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/KullaniciRapor */ "./src/app/pages/models/KullaniciRapor.ts");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
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







var SeviyelerFacetofactComponent = /** @class */ (function () {
    function SeviyelerFacetofactComponent(route, router, seviyeService, authhElper, toastrService) {
        this.route = route;
        this.router = router;
        this.seviyeService = seviyeService;
        this.authhElper = authhElper;
        this.toastrService = toastrService;
        this.destroyByClick = true;
        this.duration = 3000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    SeviyelerFacetofactComponent.prototype.warningToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].WARNING;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    SeviyelerFacetofactComponent.prototype.showToast = function (type, title, body) {
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
    SeviyelerFacetofactComponent.prototype.turnToKategori = function () {
        var path = "/pages/quiz/kategoriler";
        console.log("deneme", path);
        this.router.navigateByUrl(path);
    };
    SeviyelerFacetofactComponent.prototype.start = function (seviye, seviyeOturum) {
        var _this = this;
        var rapor = new _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_4__["KullaniciRapor"]();
        rapor.isKategoriCustom = true;
        rapor.kullaniciID = this.authhElper.userId;
        rapor.kategoriID = 5;
        rapor.seviyeID = seviye.id;
        rapor["oturumID"] = seviye.oturumID;
        rapor["oturumSirasi"] = seviye["oturumSirasi"];
        var suankiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == seviye["oturumSirasi"]; }).valueOf();
        var oncekiSira = 0;
        console.log("rapor", rapor.seviyeID);
        var userRole = this.authhElper.userActor;
        if (!userRole) {
            this.seviyeService.kullaniciRaporKontrol(rapor).subscribe(function (isFind) { return __awaiter(_this, void 0, void 0, function () {
                var atifVar_1, girilebilir_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isFind) return [3 /*break*/, 1];
                            this.seviyeService.kullaniciCompleteKontrol(rapor).subscribe(function (complete) {
                                if (!complete["isTamamlandi"]) {
                                    _this.router.navigateByUrl("pages/quiz/facetı-fact-sorular/" + seviye.id);
                                }
                                else {
                                    // todo notification(zaten bu quizi tamamlamışsınız)
                                    _this.warningToastMessage("Seviye Uyarısı", "Bu seviye tamamlanmıştır. Tekrar girilemez.");
                                    console.log('tamamlamışsınız');
                                    return;
                                }
                            });
                            return [3 /*break*/, 4];
                        case 1:
                            atifVar_1 = false;
                            girilebilir_1 = false;
                            if (!(rapor["oturumSirasi"] > 1)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.seviyeService.sonAtifRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                        if (rp && rp["isTamamlandi"]) {
                                            atifVar_1 = true;
                                            if ((suankiSira - oncekiSira) == 1) {
                                                girilebilir_1 = true;
                                                this.localStorageEkle(rapor, seviye);
                                            }
                                        }
                                        return [2 /*return*/];
                                    });
                                }); }, function (error) { }, function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!!atifVar_1) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.seviyeService.sonRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                                            console.log("rp", rp);
                                                            if (rp && rp["isTamamlandi"]) {
                                                                atifVar_1 = true;
                                                                if ((suankiSira - oncekiSira) == 1) {
                                                                    girilebilir_1 = true;
                                                                    this.localStorageEkle(rapor, seviye);
                                                                }
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    }); }, function (error) { }, function () {
                                                        if (!girilebilir_1) {
                                                            _this.warningToastMessage("Seviye Uyarısı", "Şuan bu seviyeye girilemez!");
                                                        }
                                                    })];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            if (rapor["oturumSirasi"] == 1) {
                                this.localStorageEkle(rapor, seviye);
                            }
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.router.navigateByUrl("pages/quiz/facetı-fact-sorular/" + seviye.id);
        }
    };
    SeviyelerFacetofactComponent.prototype.localStorageEkle = function (rapor, seviye) {
        var _this = this;
        this.seviyeService.addKullaniciRapor(rapor).subscribe(function (r) {
            if (localStorage.getItem(r["kullaniciID"] + 'user')) {
                var data = void 0;
                data = JSON.parse(localStorage.getItem(r["kullaniciID"] + 'user'));
                var arr = [];
                arr = data;
                arr.push({
                    index: 0, kategoriID: r["kategoriID"], seviyeID: r["seviyeID"], isCustom: true, dogru: 0, yanlis: 0, raporId: r["id"],
                    oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                });
                console.log("arr", arr);
                localStorage.setItem(r["kullaniciID"] + 'user', JSON.stringify(arr));
                _this.router.navigateByUrl("pages/quiz/facetı-fact-sorular/" + seviye.seviyeID);
            }
            else {
                localStorage.setItem(r["kullaniciID"] + 'user', JSON.stringify([{
                        index: 0, kategoriID: r["kategoriID"], seviyeID: r["seviyeID"], isCustom: true, dogru: 0, yanlis: 0, raporId: r["id"],
                        oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                    }]));
                _this.router.navigateByUrl("pages/quiz/facetı-fact-sorular/" + seviye.seviyeID);
            }
        });
    };
    SeviyelerFacetofactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            console.log('***********params', params);
            _this.id = +params['id'];
            console.log('id', _this.id);
            if (Number.isNaN(_this.id)) {
                //this.router.navigate(['../../'])//error.
                _this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
            else {
                _this.getAllByKategoriId();
            }
        });
    };
    SeviyelerFacetofactComponent.prototype.getAllByKategoriId = function () {
        var _this = this;
        this.seviyeService.getFacetoFaceSeviyeAll(false).subscribe(function (data) {
            _this.seviyeler = data;
            console.log('seviyeler', _this.seviyeler);
        });
    };
    SeviyelerFacetofactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'seviyeler-facetofact',
            template: __webpack_require__(/*! ./seviyeler-facetofact.component.html */ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.html"),
            styles: [__webpack_require__(/*! ./seviyeler-facetofact.component.scss */ "./src/app/pages/quiz/seviyeler-facetofact/seviyeler-facetofact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__["SeviyeService"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__["AuthHelper"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]])
    ], SeviyelerFacetofactComponent);
    return SeviyelerFacetofactComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <button nbButton hero status=\"warning\" style=\"width:100%;\" (click)=\"turnToKategori()\">KATEGORİLERE DÖN</button>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"  *ngFor=\"let seviye of seviyeler\">\n        <div class=\"card text-center\" style=\"background-color:whitesmoke; margin-bottom: 1rem\">\n            <div class=\"card-header\" style=\"color:black; text-transform:uppercase;\">\n              {{seviye.aciklama}}\n            </div>\n            <div class=\"card-body\">\n                <button (click)=\"start(seviye)\"  type=\"button\" class=\"btn btn-success\">BAŞLA</button>\n              </div>\n          </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovc2V2aXllbGVyLWdhemVjYXN0L3Nldml5ZWxlci1nYXplY2FzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SeviyelerGazecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeviyelerGazecastComponent", function() { return SeviyelerGazecastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/KullaniciRapor */ "./src/app/pages/models/KullaniciRapor.ts");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
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







var SeviyelerGazecastComponent = /** @class */ (function () {
    function SeviyelerGazecastComponent(route, router, seviyeService, authhElper, toastrService) {
        this.route = route;
        this.router = router;
        this.seviyeService = seviyeService;
        this.authhElper = authhElper;
        this.toastrService = toastrService;
        this.destroyByClick = true;
        this.duration = 3000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    SeviyelerGazecastComponent.prototype.warningToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].WARNING;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    SeviyelerGazecastComponent.prototype.showToast = function (type, title, body) {
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
    SeviyelerGazecastComponent.prototype.turnToKategori = function () {
        var path = "/pages/quiz/kategoriler";
        console.log("deneme", path);
        this.router.navigateByUrl(path);
    };
    SeviyelerGazecastComponent.prototype.start = function (seviye, seviyeOturum) {
        var _this = this;
        var rapor = new _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_4__["KullaniciRapor"]();
        rapor.isKategoriCustom = true;
        rapor.kullaniciID = this.authhElper.userId;
        rapor.kategoriID = 2;
        rapor.seviyeID = seviye.id;
        rapor["oturumID"] = seviye.oturumID;
        rapor["oturumSirasi"] = seviye["oturumSirasi"];
        var suankiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == seviye["oturumSirasi"]; }).valueOf();
        var oncekiSira = 0;
        var userRole = this.authhElper.userActor;
        if (!userRole) {
            this.seviyeService.kullaniciRaporKontrol(rapor).subscribe(function (isFind) { return __awaiter(_this, void 0, void 0, function () {
                var atifVar_1, girilebilir_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isFind) return [3 /*break*/, 1];
                            this.seviyeService.kullaniciCompleteKontrol(rapor).subscribe(function (complete) {
                                console.log("rapor", rapor);
                                if (!complete["isTamamlandi"]) {
                                    _this.router.navigateByUrl("pages/quiz/sorular/" + seviye.seviyeID);
                                }
                                else {
                                    _this.warningToastMessage("Seviye Uyarısı", "Bu seviye tamamlanmıştır. Tekrar girilemez.");
                                    console.log('tamamlamışsınız');
                                    return;
                                }
                            });
                            return [3 /*break*/, 4];
                        case 1:
                            atifVar_1 = false;
                            girilebilir_1 = false;
                            if (!(rapor["oturumSirasi"] > 1)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.seviyeService.sonAtifRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                        if (rp && rp["isTamamlandi"]) {
                                            atifVar_1 = true;
                                            if ((suankiSira - oncekiSira) == 1) {
                                                girilebilir_1 = true;
                                                this.localStorageEkle(rapor, seviye);
                                            }
                                        }
                                        return [2 /*return*/];
                                    });
                                }); }, function (error) { }, function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!!atifVar_1) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.seviyeService.sonRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            console.log("rp", rp);
                                                            oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                                            if (rp && rp["isTamamlandi"]) {
                                                                atifVar_1 = true;
                                                                if ((suankiSira - oncekiSira) == 1) {
                                                                    girilebilir_1 = true;
                                                                    this.localStorageEkle(rapor, seviye);
                                                                }
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    }); }, function (error) { }, function () {
                                                        if (!girilebilir_1) {
                                                            _this.warningToastMessage("Seviye Uyarısı", "Şuan bu seviyeye girilemez!");
                                                        }
                                                    })];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            if (rapor["oturumSirasi"] == 1) {
                                this.localStorageEkle(rapor, seviye);
                            }
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.router.navigateByUrl("pages/quiz/gazecast-sorular/" + seviye.id);
        }
        //
    };
    SeviyelerGazecastComponent.prototype.localStorageEkle = function (rapor, seviye) {
        var _this = this;
        this.seviyeService.addKullaniciRapor(rapor).subscribe(function (r) {
            if (localStorage.getItem(r["kullaniciID"] + 'user')) {
                var data = void 0;
                data = JSON.parse(localStorage.getItem(r["kullaniciID"] + 'user'));
                var arr = [];
                arr = data;
                arr.push({
                    index: 0, kategoriID: r["kategoriID"], seviyeID: r["seviyeID"], isCustom: true, dogru: 0, yanlis: 0, raporId: r["id"],
                    oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                });
                console.log("arr", arr);
                localStorage.setItem(r["kullaniciID"] + 'user', JSON.stringify(arr));
                _this.router.navigateByUrl("pages/quiz/gazecast-sorular/" + seviye.seviyeID);
            }
            else {
                localStorage.setItem(r["kullaniciID"] + 'user', JSON.stringify([{
                        index: 0, kategoriID: r["kategoriID"], seviyeID: r["seviyeID"], isCustom: true, dogru: 0, yanlis: 0, raporId: r["id"],
                        oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                    }]));
                _this.router.navigateByUrl("pages/quiz/gazecast-sorular/" + seviye.seviyeID);
            }
        });
    };
    SeviyelerGazecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            console.log('***********params', params);
            _this.id = +params['id'];
            console.log('id', _this.id);
            if (Number.isNaN(_this.id)) {
                //this.router.navigate(['../../'])//error.
                _this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
            else {
                _this.getAllByKategoriId();
            }
        });
    };
    SeviyelerGazecastComponent.prototype.getAllByKategoriId = function () {
        var _this = this;
        this.seviyeService.getGazeCastSeviyeSeviyeAll(false).subscribe(function (data) {
            _this.seviyeler = data;
            console.log('seviyeler', _this.seviyeler);
        });
    };
    SeviyelerGazecastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'seviyeler-gazecast',
            template: __webpack_require__(/*! ./seviyeler-gazecast.component.html */ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.html"),
            styles: [__webpack_require__(/*! ./seviyeler-gazecast.component.scss */ "./src/app/pages/quiz/seviyeler-gazecast/seviyeler-gazecast.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__["SeviyeService"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__["AuthHelper"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrService"]])
    ], SeviyelerGazecastComponent);
    return SeviyelerGazecastComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <button nbButton hero status=\"warning\" style=\"width:100%;\" (click)=\"turnToKategori()\">KATEGORİLERE DÖN</button>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\"  *ngFor=\"let seviye of seviyeler\">\n        <div class=\"card text-center\" style=\"background-color:whitesmoke; margin-bottom: 1rem\">\n            <div class=\"card-header\" style=\"color:black; text-transform:uppercase;\">\n              {{seviye.seviyeNumarasi}}\n            </div>\n            <div class=\"card-body\">\n                <button (click)=\"start(seviye)\" type=\"button\" class=\"btn btn-success\">BAŞLA</button>\n              </div>\n          </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovc2V2aXllbGVyLXBhZ2Uvc2V2aXllbGVyLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: SeviyelerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeviyelerPageComponent", function() { return SeviyelerPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/KullaniciRapor */ "./src/app/pages/models/KullaniciRapor.ts");
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







var SeviyelerPageComponent = /** @class */ (function () {
    function SeviyelerPageComponent(route, router, seviyeService, authhElper, toastrService) {
        this.route = route;
        this.router = router;
        this.seviyeService = seviyeService;
        this.authhElper = authhElper;
        this.toastrService = toastrService;
        this.destroyByClick = true;
        this.duration = 3000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    SeviyelerPageComponent.prototype.warningToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_6__["NbToastStatus"].WARNING;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    SeviyelerPageComponent.prototype.showToast = function (type, title, body) {
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
    SeviyelerPageComponent.prototype.turnToKategori = function () {
        var path = "/pages/quiz/oturumlar";
        console.log("deneme", path);
        this.router.navigateByUrl(path);
    };
    SeviyelerPageComponent.prototype.start = function (seviye, seviyeOturum) {
        var _this = this;
        var rapor = new _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_4__["KullaniciRapor"]();
        rapor.isKategoriCustom = false;
        rapor.kullaniciID = this.authhElper.userId;
        rapor.kategoriID = seviye.kategoriID;
        rapor.seviyeID = seviye.seviyeID;
        rapor["oturumID"] = seviye.oturumID;
        rapor["oturumSirasi"] = seviye["oturumSirasi"];
        var suankiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == seviye["oturumSirasi"]; }).valueOf();
        var oncekiSira = 0;
        //console.log("rapor", rapor.seviyeID)
        if (!this.authhElper.userActor) {
            this.seviyeService.kullaniciRaporKontrol(rapor).subscribe(function (isFind) { return __awaiter(_this, void 0, void 0, function () {
                var atifVar_1, girilebilir_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isFind) return [3 /*break*/, 1];
                            this.seviyeService.kullaniciCompleteKontrol(rapor).subscribe(function (complete) {
                                console.log("rapor", rapor);
                                if (!complete["isTamamlandi"]) {
                                    _this.router.navigateByUrl("pages/quiz/sorular/" + seviye.seviyeID);
                                }
                                else {
                                    _this.warningToastMessage("Seviye Uyarısı", "Bu seviye tamamlanmıştır. Tekrar girilemez.");
                                    console.log('tamamlamışsınız');
                                    return;
                                }
                            });
                            return [3 /*break*/, 4];
                        case 1:
                            atifVar_1 = false;
                            girilebilir_1 = false;
                            if (!(rapor["oturumSirasi"] > 1)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.seviyeService.sonAtifRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                        if (rp && rp["isTamamlandi"]) {
                                            if ((suankiSira - oncekiSira) == 1) {
                                                atifVar_1 = true;
                                                girilebilir_1 = true;
                                                this.localStorageEkle(rapor, seviye);
                                            }
                                        }
                                        return [2 /*return*/];
                                    });
                                }); }, function (error) {
                                    console.log("error");
                                }, function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!!atifVar_1) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.seviyeService.sonRapor(seviye.oturumID, this.authhElper.userId).subscribe(function (rp) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            oncekiSira = seviyeOturum.findIndex(function (s) { return s["oturumSirasi"] == rp["oturumSirasi"]; }).valueOf();
                                                            console.log("rp", rp);
                                                            if (rp && rp["isTamamlandi"]) {
                                                                atifVar_1 = true;
                                                                if ((suankiSira - oncekiSira) == 1) {
                                                                    girilebilir_1 = true;
                                                                    this.localStorageEkle(rapor, seviye);
                                                                }
                                                            }
                                                            return [2 /*return*/];
                                                        });
                                                    }); }, function (error) { }, function () {
                                                        if (!girilebilir_1) {
                                                            _this.warningToastMessage("Seviye Uyarısı", "Şuan bu seviyeye girilemez!");
                                                        }
                                                    })];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                }); })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            if (rapor["oturumSirasi"] == 1) {
                                this.localStorageEkle(rapor, seviye);
                            }
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            this.router.navigateByUrl("pages/quiz/sorular/" + seviye.seviyeID);
        }
    };
    SeviyelerPageComponent.prototype.localStorageEkle = function (rapor, seviye) {
        var _this = this;
        this.seviyeService.addKullaniciRapor(rapor).subscribe(function (r) {
            if (localStorage.getItem(r["kullaniciID"] + 'user')) {
                var data = void 0;
                data = JSON.parse(localStorage.getItem(r["kullaniciID"] + 'user'));
                var arr = [];
                arr = data;
                arr.push({
                    index: 0, kategoriID: r["kategoriID"], seviyeID: r["seviyeID"], isCustom: false, dogru: 0, yanlis: 0, raporId: r["id"],
                    oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                });
                console.log("arr", arr);
                localStorage.setItem(r["kullaniciID"] + 'user', JSON.stringify(arr));
                _this.router.navigateByUrl("pages/quiz/sorular/" + seviye.seviyeID);
            }
            else {
                localStorage.setItem(r["kullaniciID"] + 'user', JSON.stringify([{
                        index: 0, kategoriID: r["kategoriID"], seviyeID: r["seviyeID"], isCustom: false, dogru: 0, yanlis: 0, raporId: r["id"],
                        oturumID: r["oturumID"], oturumSirasi: r["oturumSirasi"], oturumTamamlandi: r["oturumTamamlandi"]
                    }]));
                _this.router.navigateByUrl("pages/quiz/sorular/" + seviye.seviyeID);
            }
        });
    };
    SeviyelerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authhElper.session();
        this.sub = this.route.params.subscribe(function (params) {
            console.log('***********params', params);
            _this.id = +params['id'];
            console.log('id', _this.id);
            if (Number.isNaN(_this.id)) {
                //this.router.navigate(['../../'])//error.
                _this.router.navigateByUrl("/pages/quiz/oturumlar");
            }
            else {
                _this.getAllByKategoriId(_this.id);
            }
        });
    };
    SeviyelerPageComponent.prototype.getAllByKategoriId = function (id) {
        var _this = this;
        this.seviyeService.getAllByKategoriId(id).subscribe(function (data) {
            _this.seviyeler = data;
            console.log('seviyeler', _this.seviyeler);
        });
    };
    SeviyelerPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'seviyeler-page',
            template: __webpack_require__(/*! ./seviyeler-page.component.html */ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.html"),
            styles: [__webpack_require__(/*! ./seviyeler-page.component.scss */ "./src/app/pages/quiz/seviyeler-page/seviyeler-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__["SeviyeService"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_3__["AuthHelper"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]])
    ], SeviyelerPageComponent);
    return SeviyelerPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/quiz/sorular-page/sorular-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/quiz/sorular-page/sorular-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .bos {}\n\n  .bos>>>nb-card {\n    background: none;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n  }\n\n  .hidden {\n    visibility: hidden;\n  }\n\n  .none {\n    display: none;\n  }\n</style>\n\n\n<div class=\"steppers-container row\">\n  <div class=\"col-md-12 col-lg-12 col-xxxl-12\">\n    <nb-card>\n      <nb-card-body>\n        <nb-card-body>\n          <label for=\"exampleInputEmail1\">İlerleme Durumu</label>\n          <nb-progress-bar [value]=\"status\" [displayValue]=\"true\" status=\"success\"></nb-progress-bar>\n        </nb-card-body>\n        <nb-stepper #stepper>\n          <div *ngIf=\"tema==1\">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <nb-reveal-card #revealCard>\n                  <nb-card-front>\n                    <nb-card accent=\"success\" size=\"xsmall\">\n                      <nb-card-body style=\"background-color:whitesmoke\">\n                        <h3 style=\"text-align:center;text-transform: uppercase; color: black\">\n                          {{soru.soruIcerik}}\n                        </h3>\n                      </nb-card-body>\n                      <button nbButton style=\"border-radius:0% !important; color: black; font-size: 1.20rem;\"\n                        status=\"success\" (click)=\"soruGoster(revealCard)\">Soruyu Göster</button>\n                    </nb-card>\n                  </nb-card-front>\n                  <nb-card-back>\n                    <nb-card accent=\"primary\" size=\"xsmall\">\n                      <nb-card-body style=\"background-color:whitesmoke;\">\n                        <h1 style=\"text-align:center;text-transform: uppercase; color: black\">\n                          {{soru.soruCumlesi}}\n                        </h1>\n                      </nb-card-body>\n                      <button nbButton status=\"success\"\n                        style=\"border-radius:0% !important ;color: black; font-size: 1.20rem;\"\n                        (click)=\"soruGoster(revealCard)\">METİNİ GÖSTER</button>\n                    </nb-card>\n                  </nb-card-back>\n                </nb-reveal-card>\n                <div class=\"card-deck\">\n                  <nb-flip-card\n                    [ngClass]=\"{'col-md-4 col-sm-4':secenekler.length<=3,'col-md-3 col-sm-3':secenekler.length==4 ,'col-md-2 col-sm-2':secenekler.length>4 }\"\n                    class=\"bos card col-md-4\" style=\"text-align:center; border-radius: 5%;\" *ngFor=\"let s of secenekler\"\n                    [ngStyle]=\"sayiStyle\" #flipCard>\n                    <nb-card-front>\n                      <nb-card size=\"xsmall\">\n                        <div style=\"margin-top:3rem\">\n                          <h4 class=\"mt-3\" style=\"color:black; text-transform: uppercase;\">{{s.icerik}}</h4>\n                        </div>\n                        <div class=\"card-body\">\n                          <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                            (click)=\"soruKontrol(stepper,s.isTrue,i,flipCard)\">Seç</button>\n                        </div>\n                      </nb-card>\n                    </nb-card-front>\n                    <nb-card-back>\n                      <nb-card style=\"align-items:center;\" size=\"xsmall\">\n                        <div *ngIf=\"s.isTrue==true; else yanlis\">\n                          <h3 style=\" color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                          <img width=\"50%\" src=\"../../../../assets/images/tick.png\">\n                          <div *ngIf='i != length-1; else son'>\n                            <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                              (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                          </div>\n                          <ng-template #son>\n                            <div>\n                              <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                                (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                            </div>\n                          </ng-template>\n                        </div>\n                        <ng-template #yanlis>\n                          <div>\n                            <h3 style=\"color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                            <img width=\"50%\"\n                              src=\"http://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/256/Close-icon.png\">\n                            <div *ngIf=\"i != length-1; else son\">\n                              <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                                (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                            </div>\n                            <ng-template #son>\n                              <div>\n                                <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                                  (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                              </div>\n                            </ng-template>\n                          </div>\n                        </ng-template>\n                      </nb-card>\n                    </nb-card-back>\n                  </nb-flip-card>\n                </div>\n              </form>\n            </nb-step>\n\n          </div>\n          <div *ngIf=\"tema==3\">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <div class=\"row justify-content-between\" *ngIf=\"secenekUzunluk>0;\">\n                  <div class=\"col-4\">\n                    <button #buton1 isTrue='secenekler[0][\"isTrue\"]'\n                      (click)='soruKontrol(stepper,secenekler[0][\"isTrue\"],i,null,buton1,null)' adi=\"sol\" nbButton\n                      size=\"large\" style=\"float:inline-start;border-radius: 50%;margin-top: 50%;font-size: xx-large\"\n                      [ngStyle]=\"butonStyle\"\n                      [style.background-color]='submitted? butonYak(secenekler[0][\"isTrue\"]) : \"#7659ff\"'>\n                      &lt; <br> {{secenekler[0][\"icerik\"]}}\n                    </button>\n                  </div>\n                  <div class=\"col-4\" [ngClass]=\"{'container':submitted}\">\n                    <div class=\"photoEdit\" style=\"text-align:center\">\n                      <h1\n                        style=\"font-size:3rem;position: absolute;color: red;text-transform: uppercase;margin-top: 50%;width: 90%; font-weight: 900\">\n                        {{emotionalFaceTrue}}</h1>\n                      <img *ngIf=\"emotionalFaceResim==true\" class=\"image\" style=\"margin:auto;width: 100%;\"\n                        src='{{soru.url}}'>\n                    </div>\n                  </div>\n                  <div class=\"col-4\">\n                    <button #buton2 adi='sag' isTrue='secenekler[1][\"isTrue\"]'\n                      (click)='soruKontrol(stepper,secenekler[1][\"isTrue\"],i,null,buton2,null)' nbButton\n                      [ngStyle]=\"butonStyle\" size=\"large\"\n                      style=\"float:right;border-radius: 50%;margin-top: 50%;font-size: xx-large\"\n                      [style.background-color]='submitted? butonYak(secenekler[1][\"isTrue\"]): \"#7659ff\"'>&gt; <br>\n                      {{secenekler[1][\"icerik\"]}}</button>\n                  </div>\n                  <div *ngIf=\"i != length-1 && submitted; \" class=\"col-md-12 mt-5 row\">\n                    <button nbButton hero status=\"success\" style=\"font-size:larger; color:black; margin: auto\"\n                      (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                  </div>\n                  <div *ngIf=\"i == length-1 && submitted\" class=\"col-md-12 mt-5 row\">\n                    <button nbButton hero status=\"success\" style=\"font-size:larger; color:black;margin: auto\"\n                      (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                  </div>\n                </div>\n              </form>\n            </nb-step>\n\n          </div>\n          <div *ngIf=\"tema==2\">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <div class=\"row\" *ngIf=\"secenekUzunluk>0;\">\n                  <div *ngIf=\"(firstShowing || submitted ) && !dogruCevap && !ucuncuGosterim \"\n                    style=\"text-align:center; margin: auto\">\n                    <img style=\"margin: auto\" src='{{soru.url}}'>\n                  </div>\n                  <div *ngIf=\"secondShowing\" class=\"row\" style=\"text-align:center; margin: auto\">\n                    <div class=\"col-12 \" style=\"display: contents !important\"\n                      *ngIf=\"secenekler.length>=4; else secondTemplate\">\n                      <div class=\"col-md-3 mb-2\" [ngClass]=\"{'container':submitted}\"\n                        style=\"margin: auto;text-align:center;\" *ngFor=\"let sc of secenekler\">\n                        <div class=\"photoEdit\" #target\n                          [ngClass]=\"{'hidden': dogruCevap,'none':!dogruCevap && submitted}\">\n                          <input type=\"image\" (click)='soruKontrol(stepper,sc.isTrue,i,null,null,target)' class=\"image\"\n                            src='{{sc.url}}'>\n                          <div class=\"middle\">\n                            <div *ngIf=\"sc.isTrue && submitted\"><i class=\"ion-checkmark dogru\"\n                                (click)='soruKontrol(stepper,sc.isTrue,i,null,null)'></i></div>\n                            <div *ngIf=\"!sc.isTrue && submitted\"><i class=\"ion-close-round yanlis\"\n                                (click)='soruKontrol(stepper,sc.isTrue,i,null,null)'></i></div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-template #secondTemplate>\n                      <div class=\"col-12\" style=\"display: contents !important\">\n                        <div class=\"col-md-4 mb-2\" [ngClass]=\"{'container':submitted}\"\n                          style=\"margin: auto;text-align:center\" *ngFor=\"let sc of secenekler\">\n                          <div class=\"photoEdit\" #target\n                            [ngClass]=\"{'hidden': dogruCevap,'none':!dogruCevap && submitted}\">\n                            <input type=\"image\" (click)='soruKontrol(stepper,sc.isTrue,i,null,null,target)'\n                              class=\"image\" src='{{sc.url}}'>\n                            <div class=\"middle\">\n                              <div *ngIf=\"sc.isTrue && submitted\"><i class=\"ion-checkmark dogru\"\n                                  (click)='soruKontrol(stepper,sc.isTrue,i,null,null)'></i></div>\n                              <div *ngIf=\"!sc.isTrue && submitted\"><i class=\"ion-close-round yanlis\"\n                                  (click)='soruKontrol(stepper,sc.isTrue,i,null,null)'></i></div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div *ngIf=\"ucuncuGosterim && !dogruCevap\" class=\"col-12\" style=\"display: contents !important\">\n                        <div class=\"photoEdit mb-2\">\n                          <img class=\"image\" style=\"width:200px\" [src]=\"soru.url\">\n                        </div>\n                        <div class=\"photoEdit mb-2\">\n                          <img class=\"image\" style=\"width:200px\" [src]=\"cevapSrc\">\n                        </div>\n                      </div>\n                    </ng-template>\n                  </div>\n                  <div *ngIf=\"i != length-1 && submitted && secondShowing; \" style=\"text-align:center\"\n                    class=\"col-md-12 row\">\n                    <button nbButton hero status=\"success\" style=\"font-size:larger; color:black; margin: auto\"\n                      (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                  </div>\n                  <div *ngIf=\"i == length-1 && submitted && secondShowing\" style=\"text-align:center\"\n                    class=\"col-md-12 row\">\n                    <button nbButton hero status=\"success\" style=\"font-size:larger; color:black;margin: auto\"\n                      (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                  </div>\n                </div>\n              </form>\n            </nb-step>\n\n          </div>\n          <div *ngIf=\"tema==4\">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <div class=\"row\">\n                  <div *ngIf=\"sorufotogosterim\" class=\"col-md-12\" style=\"text-align:center\">\n                    <div *ngFor=\"let image of soruPhotos;\">\n                      <div *ngIf=\"image['visible'] && !fotoMu\">\n                        <video width=\"25%\" style=\"margin: auto\" muted autoplay (ended)=\"videoEnd()\">\n                          <source [src]=\"image.url\">\n                          Your browser does not support the video tag.\n                        </video>\n                      </div>\n                      <div *ngIf=\"image['visible'] && fotoMu\">\n                        <img width=\"25%\" style=\"margin: auto\" src=\"{{image.url}}\">\n                      </div>\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"soruSecenekGosterim\" class=\"card-deck\">\n                    <div class=\"col-12\" style=\"display: contents !important\">\n                      <div\n                        [ngClass]=\"{'col-md-4 col-sm-4':soruPhotos.length<=3,'col-md-3 col-sm-3':soruPhotos.length==4 ,'col-md-2 col-sm-2':soruPhotos.length>6 }\"\n                        class=\"bos card\" style=\"text-align:center; border-radius: 5%;margin: auto;text-align:center;\"\n                        *ngFor=\"let s of soruPhotos\" [ngStyle]=\"sayiStyle\" #item>\n                        <nb-flip-card #flipCard>\n                          <nb-card-front>\n                            <nb-card size=\"xsmall\">\n                              <div style=\"margin-top:3rem\">\n                                <h4 class=\"mt-3\" style=\"color:black; text-transform: uppercase;\">{{s.secenekAciklama}}\n                                </h4>\n                              </div>\n                              <div class=\"card-body\">\n                                <button nbButton hero fullWidth status=\"success\"\n                                  style=\"font-size:larger; color:black;width: 60%;\"\n                                  (click)=\"EmotionReplayKontrol(stepper,i,item,s.secenekAciklama,s.sira,flipCard,cevap)\">Seç</button>\n                              </div>\n                            </nb-card>\n                          </nb-card-front>\n                          <nb-card-back>\n                            <nb-card style=\"align-items:center;\" size=\"xsmall\">\n                              <div>\n                                <h3 class=\"mt-2\" style=\" color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                                <img #cevap width=\"50%\" src=\"../../../../assets/images/tick.png\">\n                              </div>\n                            </nb-card>\n                          </nb-card-back>\n                        </nb-flip-card>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </form>\n            </nb-step>\n\n          </div>\n          <div *ngIf=\"tema==5 \">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <div *ngIf=\"faceReplayGoster\" class=\"col-md-12\" style=\"text-align:center\">\n                  <div *ngFor=\"let image of soruPhotos;\">\n                    <a *ngIf=\"image['visible']\"><img src='{{image.url}}'></a>\n                  </div>\n                </div>\n                <div *ngIf=\"faceReplayDagitim;\">\n                  <div class=\"row\" style=\"text-align:center; margin: auto\">\n                    <div class=\"col-md-3 mb-2\" *ngFor=\"let num of faceReplayNumbers\">\n                      <div *ngFor=\"let item of soruPhotos\">\n                        <input *ngIf=\"item.dagit==num\" type=\"image\" (click)=\"FaceReplaySoruKontrol(stepper,i,item.sira)\"\n                          width=\"75%\" [src]='item.url'>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </nb-step>\n          </div>\n          <div *ngIf=\"tema==6\">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <nb-reveal-card *ngIf=\"soru.soruTipi==2\" #revealCard>\n                  <nb-card-front>\n                    <nb-card accent=\"success\" size=\"xsmall\">\n                      <nb-card-body style=\"background-color:whitesmoke\">\n                        <h3 style=\"text-align:center;text-transform: uppercase; color: black\">\n                          {{soru.soruIcerik}}\n                        </h3>\n                      </nb-card-body>\n                      <button nbButton style=\"border-radius:0% !important; color: black; font-size: 1.20rem;\"\n                        status=\"success\" (click)=\"soruGoster(revealCard)\">Soruyu Göster</button>\n                    </nb-card>\n                  </nb-card-front>\n                  <nb-card-back>\n                    <nb-card accent=\"primary\" size=\"xsmall\">\n                      <nb-card-body style=\"background-color:whitesmoke;\">\n                        <h1 style=\"text-align:center;text-transform: uppercase; color: black\">\n                          {{soru.soruCumlesi}}\n                        </h1>\n                      </nb-card-body>\n                      <button nbButton status=\"success\"\n                        style=\"border-radius:0% !important ;color: black; font-size: 1.20rem;\"\n                        (click)=\"soruGoster(revealCard)\">METİNİ GÖSTER</button>\n                    </nb-card>\n                  </nb-card-back>\n                </nb-reveal-card>\n                <div *ngIf=\"soruSuresi>0 ; else soruFoto\">\n                  <div *ngIf=\"soru.soruTipi==1 && firstShowing\" style=\"text-align:center\">\n                    <img src=\"{{soru.url}}\" width=\"175px\" height=\"175px\">\n                  </div>\n                </div>\n                <ng-template #soruFoto>\n                  <div *ngIf=\"soru.soruTipi==1\" style=\"text-align:center\">\n                    <img src=\"{{soru.url}}\" width=\"175px\" height=\"175px\">\n                  </div>\n                </ng-template>\n                <div *ngIf=\"soru.soruTipi==3\" style=\"text-align:center\">\n                  <video width=\"25%\" style=\"margin: auto\" id={{i}} (ended)=\"customVideo(vide)\" muted autoplay #vide>\n                    <source [src]=\"soru.url\">\n                    Your browser does not support the video tag.\n                  </video>\n                </div>\n                <div class=\"card-deck\" *ngIf=\"secondShowing\">\n                  <nb-flip-card\n                    [ngClass]=\"{'col-md-4 col-sm-4':secenekler.length <=3,'col-md-3 col-sm-3':secenekler.length==4 ,'col-md-2 col-sm-2':secenekler.length>4 }\"\n                    class=\"bos card col-md-4\" style=\"text-align:center; border-radius: 5%;\" *ngFor=\"let s of secenekler\"\n                    [ngStyle]=\"sayiStyle\" #flipCard>\n                    <nb-card-front>\n                      <nb-card size=\"xsmall\">\n                        <div style=\"margin-top:3rem\" *ngIf=\"s.url ==null || s.url==''\">\n                          <h4 class=\"mt-3\" style=\"color:black; text-transform: uppercase;\">{{s.icerik}}</h4>\n                        </div>\n                        <div style=\"margin-top:3rem\" *ngIf=\"s.url !=null && s.url!=''\">\n                          <img src=\"{{s.url}}\" width=\"100px\" height=\"100px\">\n                        </div>\n                        <div class=\"card-body\">\n                          <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                            (click)=\"soruKontrol(stepper,s.isTrue,i,flipCard)\">Seç</button>\n                        </div>\n                      </nb-card>\n                    </nb-card-front>\n                    <nb-card-back>\n                      <nb-card style=\"align-items:center;\" size=\"xsmall\">\n                        <div *ngIf=\"s.isTrue==true; else yanlis\">\n                          <h3 style=\" color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                          <img width=\"125px\" height=\"125px\" src=\"../../../../assets/images/tick.png\">\n                          <div *ngIf='i != length-1; else son'>\n                            <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                              (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                          </div>\n                          <ng-template #son>\n                            <div>\n                              <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                                (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                            </div>\n                          </ng-template>\n                        </div>\n                        <ng-template #yanlis>\n                          <div>\n                            <h3 style=\"color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                            <img width=\"125px\" height=\"125px\" src=\"../../../../assets/images/false.png\">\n                            <div *ngIf=\"i != length-1; else son\">\n                              <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                                (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                            </div>\n                            <ng-template #son>\n                              <div>\n                                <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                                  (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                              </div>\n                            </ng-template>\n                          </div>\n                        </ng-template>\n                      </nb-card>\n                    </nb-card-back>\n                  </nb-flip-card>\n                </div>\n              </form>\n            </nb-step>\n          </div>\n          <div *ngIf=\"tema==7\">\n            <nb-step *ngFor=\"let soru of sorular; let i = index\" label=\"{{i + 1}}.Soru\">\n              <form class=\"step-container\">\n                <div *ngIf=\"firstShowing\" style=\"text-align:center; margin: auto\">\n                  <img src=\"{{soru.url}}\" width=\"175px\" height=\"175px\">\n                </div>\n                <div class=\"card-deck\" *ngIf=\"secondShowing\" #target\n                  [ngClass]=\"{'hidden': dogruCevap,'none':!dogruCevap && submitted}\">\n                  <nb-flip-card\n                    [ngClass]=\"{'col-md-4 col-sm-4':secenekler.length <=3,'col-md-3 col-sm-3':secenekler.length==4 ,'col-md-2 col-sm-2':secenekler.length>4 }\"\n                    class=\"bos card col-md-4\" style=\"text-align:center; border-radius: 5%;\" *ngFor=\"let s of secenekler\"\n                    [ngStyle]=\"sayiStyle\" #flipCard>\n                    <nb-card-front>\n                      <nb-card size=\"xsmall\">\n                        <div style=\"margin-top:3rem\" *ngIf=\"s.url ==null || s.url==''\">\n                          <h4 class=\"mt-3\" style=\"color:rgb(109, 100, 100); text-transform: uppercase;\">{{s.icerik}}\n                          </h4>\n                        </div>\n                        <div style=\"margin-top:3rem\" *ngIf=\"s.url !=null && s.url!=''\">\n                          <img src=\"{{s.url}}\" width=\"100px\" height=\"100px\">\n                        </div>\n                        <div class=\"card-body\">\n                          <button nbButton hero fullWidth status=\"success\" style=\"font-size:larger; color:black;\"\n                            (click)=\"soruKontrol(stepper,s.isTrue,i,flipCard,null,target)\">Seç</button>\n                        </div>\n                      </nb-card>\n                    </nb-card-front>\n                    <nb-card-back>\n                      <nb-card style=\"align-items:center;\" size=\"xsmall\">\n                        <div *ngIf=\"s.isTrue==true; else yanlis\">\n                          <h3 style=\" color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                          <img width=\"125px\" height=\"125px\" src=\"../../../../assets/images/tick.png\">\n                          <div *ngIf=\"i != length-1 && submitted && secondShowing; \" style=\"text-align:center\"\n                            class=\"col-md-12 row\">\n                            <button nbButton hero status=\"success\" style=\"font-size:larger; color:black; margin: auto\"\n                              (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                          </div>\n                          <div *ngIf=\"i == length-1 && submitted && secondShowing\" style=\"text-align:center\"\n                            class=\"col-md-12 row\">\n                            <button nbButton hero status=\"success\" style=\"font-size:larger; color:black;margin: auto\"\n                              (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                          </div>\n                        </div>\n                        <ng-template #yanlis>\n                          <div>\n                            <h3 style=\"color:black;  text-transform: uppercase;\">{{s.icerik}}</h3>\n                            <img width=\"125px\" height=\"125px\" src=\"../../../../assets/images/false.png\">\n                            <div *ngIf=\"i != length-1 && submitted && secondShowing; \" style=\"text-align:center\"\n                              class=\"col-md-12 row\">\n                              <button nbButton hero status=\"success\" style=\"font-size:larger; color:black; margin: auto\"\n                                (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                            </div>\n                            <div *ngIf=\"i == length-1 && submitted && secondShowing\" style=\"text-align:center\"\n                              class=\"col-md-12 row\">\n                              <button nbButton hero status=\"success\" style=\"font-size:larger; color:black;margin: auto\"\n                                (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                            </div>\n                          </div>\n                        </ng-template>\n                      </nb-card>\n                    </nb-card-back>\n                  </nb-flip-card>\n                </div>\n                <div *ngIf=\"ucuncuGosterim && !dogruCevap\" style=\"text-align: center;display: flex\">\n                  <div class=\"mb-2 col-4\">\n                    <img class=\"image\" style=\"width:200px;float: right\" src=\"{{soru.url}}\">\n                  </div>\n                  <div class=\"mb-2 col-4\">\n                    <nb-card accent=\"success\">\n                      <div>\n                        <h3 style=\"color:black;  text-transform: uppercase;\">{{ cevapSrc }}</h3>\n                        <img width=\"125px\" src=\"../../../../assets/images/false.png\">\n                        <div *ngIf=\"i != length-1; else son\">\n                          <button nbButton hero status=\"success\" style=\"font-size:larger; color:black;\"\n                            (click)=\"sonrakiSoru(stepper,i)\">Sonraki Soru</button>\n                        </div>\n                        <ng-template #son>\n                          <div>\n                            <button nbButton hero status=\"success\" style=\"font-size:larger; color:black;\"\n                              (click)=\"sonrakiSoru(stepper,i)\">Egzersizi Bitir</button>\n                          </div>\n                        </ng-template>\n                      </div>\n                    </nb-card>\n                  </div>\n                </div>\n              </form>\n            </nb-step>\n          </div>\n\n          <nb-step [hidden]=\"true\" label=\"Third step\">\n            <div *ngIf=\"uzunluk>0 && !soruYok\" class=\"step-container\">\n              <h3 style=\"text-align: center; text-transform: uppercase;\">Egzersiz Bitti </h3>\n              <h3 style=\"text-align: center; text-transform: uppercase;\">\n                <i class=\"fas fa-check-circle\"></i>Doğru Sayısı: {{dogruSayisi}}</h3>\n              <h3 style=\"text-align: center; text-transform: uppercase;\">Yanlış Sayısı: {{yanlisSayisi}}</h3>\n              <button nbButton (click)=\"turnToSeviye()\">Egzersizi Bitir</button>\n            </div>\n            <div *ngIf=\"soruYok;\">\n              <h3 style=\"text-align: center;text-transform: uppercase;\">Soru Yok! </h3>\n              <h3 style=\"text-align: center;text-transform: uppercase;\">Seviyelere Dönün </h3>\n              <button nbButton hero status=\"warning\" (click)=\"turnToSeviye()\">Seviyelere Dön</button>\n            </div>\n          </nb-step>\n        </nb-stepper>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n\n<!--  <div class=\"col-md-6\" style=\"margin:auto\">\n                    <div id=\"myCarousel\"  *ngIf=\"soruPhotos\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner\">\n                          <div class=\"carousel-item active\" *ngFor=\"let image of soruPhotos;let ind =index\" >\n                              <video style=\"width:50%;margin:auto\" muted loop autoplay>\n                                  <source [src]=\"image.url\" type=\"video/mp4\" />\n                                </video>\n                          </div>\n                        </div>\n                      </div>\n                    </div>-->"

/***/ }),

/***/ "./src/app/pages/quiz/sorular-page/sorular-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/quiz/sorular-page/sorular-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photoEdit {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.photoEdit h1 {\n  opacity: 1; }\n\n.container {\n  position: relative;\n  width: 50%; }\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center; }\n\n.container .image {\n  opacity: 0.3; }\n\n.container .middle {\n  opacity: 1; }\n\n.dogru {\n  color: green;\n  font-size: 100px; }\n\n.yanlis {\n  color: red;\n  font-size: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9zb3J1bGFyLXBhZ2UvQzpcXFVzZXJzXFxPTlVSXFxEZXNrdG9wXFxTb3N5YWwgQmlsacWfXFxRdWl6QXBwL3NyY1xcYXBwXFxwYWdlc1xccXVpelxcc29ydWxhci1wYWdlXFxzb3J1bGFyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFBcUI7RUFDeEIsMkJBQTBCO0VBQ3ZCLDRCQUEyQixFQUFBOztBQUcvQjtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVqQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovc29ydWxhci1wYWdlL3NvcnVsYXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5waG90b0VkaXR7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgICBcclxufVxyXG4ucGhvdG9FZGl0IGgxe1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLm1pZGRsZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIC5pbWFnZSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIgLm1pZGRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAuZG9ncnUge1xyXG4gICBjb2xvcjogZ3JlZW47XHJcbiAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgfVxyXG4gIC55YW5saXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/quiz/sorular-page/sorular-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quiz/sorular-page/sorular-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: KEY_CODE, SorularPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorularPageComponent", function() { return SorularPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/admin/secenek/secenek.service */ "./src/app/pages/admin/admin/secenek/secenek.service.ts");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
/* harmony import */ var _nebular_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme/components/card/flip-card/flip-card.component */ "./node_modules/@nebular/theme/components/card/flip-card/flip-card.component.js");
/* harmony import */ var _nebular_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/theme/components/card/reveal-card/reveal-card.component */ "./node_modules/@nebular/theme/components/card/reveal-card/reveal-card.component.js");
/* harmony import */ var _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../auth/auth-helper */ "./src/app/pages/auth/auth-helper.ts");
/* harmony import */ var _admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/admin/kategori/kategori.service */ "./src/app/pages/admin/admin/kategori/kategori.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../models/KullaniciRapor */ "./src/app/pages/models/KullaniciRapor.ts");
/* harmony import */ var _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../admin/admin/oturum/oturum.service */ "./src/app/pages/admin/admin/oturum/oturum.service.ts");
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














var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["ENTER"] = 13] = "ENTER";
})(KEY_CODE || (KEY_CODE = {}));
var SorularPageComponent = /** @class */ (function () {
    function SorularPageComponent(sorularService, seviyeService, route, router, seceneklerService, toastrService, authhElper, kategoriService, elRef, oturumService, config) {
        this.sorularService = sorularService;
        this.seviyeService = seviyeService;
        this.route = route;
        this.router = router;
        this.seceneklerService = seceneklerService;
        this.toastrService = toastrService;
        this.authhElper = authhElper;
        this.kategoriService = kategoriService;
        this.elRef = elRef;
        this.oturumService = oturumService;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
        this.dogruSayisi = 0;
        this.yanlisSayisi = 0;
        this.emotionalFaceTrue = "";
        this.status = 0;
        this.secenekUzunluk = 0;
        this.faceReplayDagitim = false;
        this.tema = 0;
        this.indexler = [];
        this.emotionalFaceResim = false;
        this.soruYok = false;
        this.soruPhotoIndex = 0;
        this.keyTıkSayisi = 0;
        this.submitted = false;
        this.duyguIsımDogru = "";
        this.soruPhotoSelect = [];
        this.emotionSelect = 1;
        this.secondShowing = false;
        this.firstShowing = true;
        this.sorufotogosterim = true;
        this.soruSecenekGosterim = false;
        this.faceReplayGoster = true;
        this.faceReplayNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
        this.faceReplayRandom = [];
        this.videoBitis = false;
        this.say = 0;
        this.videolar = [];
    }
    //Yanlış Mesajı
    SorularPageComponent.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    SorularPageComponent.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    SorularPageComponent.prototype.showToast = function (type, title, body) {
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
    SorularPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Giriş Kontrolü
        this.authhElper.session();
        //Local Strorage kontrolü (User id ile alma)
        this.storage = JSON.parse(localStorage.getItem(this.authhElper.userId + 'user'));
        console.log('###storage###', this.storage);
        //Seviye id den kategoriyi bulma sonrasında seviyenin sorularını alma 
        this.sub = this.route.params.subscribe(function (params) {
            _this.urlId = +params['id'];
            console.log('this.urlId', _this.urlId);
            if (_this.urlId > 0) {
                _this.seviyeService.getSeviyeById(_this.urlId).subscribe(function (data) {
                    console.log("data", data);
                    _this.seviye = data;
                    if (_this.seviye["soruSuresi"] && _this.seviye["soruSuresi"] != null) {
                        _this.soruSuresi = _this.seviye["soruSuresi"];
                    }
                    console.log("süre", _this.seviye);
                }, function (error) { console.log("error"); }, function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.kategoriService.getKategoriById(this.seviye["kategoriID"]).subscribe(function (item) {
                                    _this.kategori = item;
                                    _this.tema = item.tema;
                                    _this.kategoriAdi = _this.kategori["kategoriAdi"];
                                    console.log("kate", _this.tema);
                                });
                                return [4 /*yield*/, this.getAllBySoruId(this.urlId)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
            if (Number.isNaN(_this.urlId)) {
                _this.router.navigateByUrl("/pages/quiz/kategoriler");
            }
        });
    };
    //Seviyelere geri dönüş fonksiyonu
    SorularPageComponent.prototype.turnToSeviye = function () {
        var _this = this;
        //Sorular varsa eğer seviyelere dönmeden önce veritabanına kayıt edilir
        if (this.sorular.length > 0 && !this.authhElper.userActor) {
            var completeRapor_1 = new _models_KullaniciRapor__WEBPACK_IMPORTED_MODULE_12__["KullaniciRapor"]();
            completeRapor_1.id = this.storage[this.userRaporIndex]["raporId"];
            completeRapor_1.dogruSayisi = this.storage[this.userRaporIndex]["dogru"];
            completeRapor_1.yanlisSayisi = this.storage[this.userRaporIndex]["yanlis"];
            completeRapor_1.isKategoriCustom = this.storage[this.userRaporIndex]["isCustom"];
            completeRapor_1.isTamamlandi = true;
            completeRapor_1.oturumSirasi = this.storage[this.userRaporIndex]["oturumSirasi"];
            completeRapor_1["oturumID"] = this.storage[this.userRaporIndex]["oturumID"];
            completeRapor_1.kategoriID = this.storage[this.userRaporIndex]["kategoriID"];
            completeRapor_1.seviyeID = this.storage[this.userRaporIndex]["seviyeID"];
            completeRapor_1.kullaniciID = this.authhElper.userId;
            this.oturumService.getSonSeviye(completeRapor_1["oturumID"]).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (completeRapor_1.oturumSirasi == data) {
                        completeRapor_1["oturumTamamlandi"] = true;
                    }
                    return [2 /*return*/];
                });
            }); }, function (error) { }, function () {
                console.log("rapo", completeRapor_1);
                _this.sorularService.updateKullaniciRapor(completeRapor_1).subscribe(function (data) {
                    if (data) {
                        //Local storageden o seviyeyi kaldırma işlemi 
                        _this.storage.splice(_this.userRaporIndex, 1);
                        console.log('store***', _this.storage);
                        localStorage.setItem(_this.authhElper.userId + 'user', JSON.stringify(_this.storage));
                    }
                });
            });
        }
        //Eğer test cevaplanıp çıkılmışsa mesaj göster
        if (this.sorular.length > 0) {
            this.successToastMessage("Tebrikler", "Diğer egzersizde başarılar");
        }
        var path = "/pages/quiz/oturumlar";
        this.router.navigateByUrl(path);
    };
    //Sorunun seçeneklerini al
    SorularPageComponent.prototype.getAllBySecenekId = function (id) {
        var _this = this;
        //Tıklanma olayını hayıra çevir 
        this.submitted = false;
        this.seceneklerService.getAllBySecenekId(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var last;
            return __generator(this, function (_a) {
                this.secenekler = data;
                this.secenekler.forEach(function (item) {
                    //Urlleri f ve v yi atarak çevirme 
                    if (item["url"] != null || item["url"] == "") {
                        item["url"] = item["url"].slice(1, item["url"].length);
                    }
                    else {
                        item["url"] = null;
                    }
                });
                console.log("burda");
                this.secenekUzunluk = this.secenekler.length;
                if (this.tema == 3) {
                    //Emotional face butonları için doğru yanlış atamaları
                    if (this.secenekler[0]["isTrue"]) {
                        this.emotionalFaceTrue = this.secenekler[1]["icerik"];
                    }
                    else {
                        this.emotionalFaceTrue = this.secenekler[0]["icerik"];
                    }
                    this.emotionalFaceResim = true;
                    console.log("secenek", this.emotionalFaceTrue);
                }
                console.log("secenekler", this.buttons);
                this.sayiStyle = {
                    'margin': this.secenekler.length == 2 ? 'auto' : ''
                };
                last = 0;
                return [2 /*return*/];
            });
        }); });
    };
    //Seviyelerin soruları alnır
    SorularPageComponent.prototype.getAllBySoruId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.soruPhotos = [];
                this.sorularService.getAllBySoruId(id).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        if (data.length == 0) {
                            this.soruYok = true;
                            return [2 /*return*/];
                        }
                        else {
                            this.sorular = data;
                        }
                        try {
                            //local storage kontrol ediliyor eğer daha önce bu seviyeye girilmişse 
                            //seviyenin hangi indexte kaldığı alınarak soru id belirleniyor
                            //İlk defa giriliyorsa catch'e düşecek ve 0 dan başlayacak
                            this.userRaporIndex = this.storage.findIndex(function (r) { return r["seviyeID"] == _this.urlId; });
                            //await this.delay(500)
                            console.log("rapor", this.storage[this.userRaporIndex]);
                            this.soruId = this.sorular[this.storage[this.userRaporIndex]["index"]]["soruID"];
                            //Progress bar yüzdesi kalınan soruya göre ayarlanıyor
                            this.status = Math.trunc(((this.storage[this.userRaporIndex]["index"]) / this.sorular.length) * 100);
                            console.log("status", this.status);
                        }
                        catch (_b) {
                            this.soruId = this.sorular[0]["soruID"];
                        }
                        this.uzunluk = this.sorular.length;
                        this.length = this.sorular.length;
                        return [2 /*return*/];
                    });
                }); }, function (error) { }, function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.getSoruAllPhotos(this.soruId)];
                            case 1:
                                _a.sent();
                                console.log("sa", this.sorular);
                                if (!(this.sorular.length > 0)) return [3 /*break*/, 4];
                                //Resimli sorular için urllerin dönüştürülmesi yapılıyor
                                this.sorular.forEach(function (soru) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (soru.url != null) {
                                            soru.url = soru.url.slice(1, soru.url.length);
                                        }
                                        else {
                                            soru.url = null;
                                        }
                                        return [2 /*return*/];
                                    });
                                }); });
                                //Sorunun Seçenekleri Alınıyor
                                return [4 /*yield*/, this.getAllBySecenekId(this.soruId)
                                    //Sorudan sonra seçenek, seçenekten sonra cevabın gösterilmesi için çağırılan fonksiyon
                                ];
                            case 2:
                                //Sorunun Seçenekleri Alınıyor
                                _a.sent();
                                //Sorudan sonra seçenek, seçenekten sonra cevabın gösterilmesi için çağırılan fonksiyon
                                return [4 /*yield*/, this.birinciGosterim()];
                            case 3:
                                //Sorudan sonra seçenek, seçenekten sonra cevabın gösterilmesi için çağırılan fonksiyon
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    //Sorunun fotoğrafları alınır 
    SorularPageComponent.prototype.getSoruAllPhotos = function (soruID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.soruPhotos = [];
                this.soruPhotoSelect = [];
                this.faceReplayRandom = [];
                this.sorularService.getSoruFoto(soruID).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        //Url dönüşüm işlemleri yapılıyor
                        this.soruPhotos = data;
                        this.soruPhotos.sort(function (a, b) {
                            return a.sira - b.sira;
                        });
                        console.log("getAll", this.soruPhotos);
                        this.soruPhotos.forEach(function (item) {
                            if (item.url != null) {
                                var neBu = item.url.slice(0, 1);
                                console.log("nebu", neBu);
                                if (neBu == "v") {
                                    _this.fotoMu = false;
                                }
                                else if (neBu == "f") {
                                    _this.fotoMu = true;
                                }
                                item.url = item.url.slice(1, item.url.length);
                            }
                            else {
                                item.url = null;
                            }
                            //Soruların visibility başta false olarak ayarlanıyor
                            //Sonrasında ilk soruya true verilecek ve sıra sıra true değerini alacaklar
                            item["visible"] = false;
                            //Sorunun sıraları diziye atılıyor
                            _this.soruPhotoSelect.push(item["sira"]);
                        });
                        console.log(this.soruPhotos);
                        return [2 /*return*/];
                    });
                }); }, function (error) {
                    console.log("error");
                }, function () { return __awaiter(_this, void 0, void 0, function () {
                    var i, randomnumber;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(this.tema == 5)) return [3 /*break*/, 2];
                                //Face replayde 8'lik bi alana yayıldığı tasarlanarak farklı indexler alması için ve diziye atama işlemleri
                                console.log("uzunluk", this.soruPhotos.length);
                                for (i = 0; i < this.soruPhotos.length; i++) {
                                    randomnumber = Math.floor(Math.random() * (9 - 1)) + 1;
                                    if (this.faceReplayRandom.indexOf(randomnumber) == -1) { // dizideki indexine bakıyorum -1 ise yani yoksa 
                                        this.faceReplayRandom.push(randomnumber); // diziye ekliyorum
                                    }
                                    else { //varsa i'yi 1 düşürüp başa döndüp yine rakam üretiyorum.. böylece aynı rakam gelse bile başa dönüp yine rakam üretecek!
                                        i--;
                                    }
                                    console.log("select list", this.soruPhotoSelect);
                                }
                                //Bu kategoriye ait gösterim
                                return [4 /*yield*/, this.faceReplayGosterim()];
                            case 1:
                                //Bu kategoriye ait gösterim
                                _a.sent();
                                return [3 /*break*/, 4];
                            case 2: 
                            //Diğer fotoğraf/video sorularının gösterimi için çalışacak fonksiyon
                            return [4 /*yield*/, this.soruFotoGosterim()];
                            case 3:
                                //Diğer fotoğraf/video sorularının gösterimi için çalışacak fonksiyon
                                _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    //Klavye eventlerini yakalaması için 
    SorularPageComponent.prototype.keyEvent = function (event) {
        console.log(event);
        //Entera basılırsa,tıklanmışsa ve tık sayısı soruların uzunluğundan az ya da eşitse
        if (event.keyCode === KEY_CODE.ENTER && this.submitted && this.keyTıkSayisi <= this.sorular.length) {
            this.sonrakiSoru(this.nbStepperComponent, this.keyTıkSayisi - 1);
        }
        if (this.kategori["tema"] == 3 && this.keyTıkSayisi < this.sorular.length) {
            if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
                //Sağ yön tuşuna basılırsa
                this.keyTıkSayisi++;
                console.log("sağ", this.sorular.indexOf);
                console.log("buton", this.buttons.find(function (i) { return i.adi == "sag"; }));
                if (this.submitted != true) {
                    this.soruKontrol(this.nbStepperComponent, this.secenekler[1]["isTrue"], this.sorular.indexOf, null, this.buttons.find(function (i) { return i.adi == "sag"; }));
                }
            }
            if (event.keyCode === KEY_CODE.LEFT_ARROW) {
                //Sol yön tuşuna basılırsa
                this.keyTıkSayisi++;
                console.log("sol");
                console.log("buton", this.buttons);
                if (this.submitted != true) {
                    this.soruKontrol(this.nbStepperComponent, this.secenekler[0]["isTrue"], this.sorular.indexOf, null, this.buttons.find(function (i) { return i.adi == "sol"; }));
                }
                //    console.log("buton",this.buttons.find(i=>i.adi=="sol"))
            }
        }
    };
    //Sonraki soruya geçiş fonksiyonu 
    SorularPageComponent.prototype.sonrakiSoru = function (stepper, i, vide) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Doğru cevap ve soru  gösterimi
                        this.emotionalFaceResim = false;
                        this.ucuncuGosterim = false;
                        //Doğru cevap gösterimi
                        this.dogruCevap = false;
                        this.secondShowing = false;
                        this.firstShowing = true;
                        //Emotion replayseçeneği gösterimi
                        this.soruSecenekGosterim = false;
                        //Emotion replay fotoğrafı gösterimi
                        this.sorufotogosterim = true;
                        //Fotoğraflı soruların başlangıç indexi
                        this.soruPhotoIndex = 0;
                        //İlk gösterim için çağırılan fonksiyon
                        this.birinciGosterim();
                        this.submitted = false;
                        console.log("sub", this.submitted);
                        //Doğru yanlış sayısı local storagedeki değerlere eşitleniyor
                        if (!this.authhElper.userActor) {
                            this.dogruSayisi = this.storage[this.userRaporIndex]["dogru"];
                            this.yanlisSayisi = this.storage[this.userRaporIndex]["yanlis"];
                        }
                        //Kalınan yere göre progress bar ayarlanıyor
                        this.status += Math.trunc(100 / this.length); //float değeri integera çeviriyor.çünkü float değer progreste kötü gözüküyor.
                        if (i == this.length - 1) {
                            this.status = 100; // floattan integere çevirdiğimiz için veri kaybı oluyor son aşamada %100ü dolduramıyor o yüzden ??
                        }
                        if (this.tema == 3) {
                            //Buton renklerini sıfırladık
                            this.buttons.forEach(function (item) { return item.status = ""; });
                        }
                        //Sonraki step
                        stepper.next();
                        //Sonraki step local storagedeki item atandı
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["index"] = this.nbStepperComponent.selectedIndex;
                            localStorage.setItem(this.authhElper.userId + 'user', JSON.stringify(this.storage));
                        }
                        if (!(i < this.length - 1)) return [3 /*break*/, 5];
                        //soruların uzunluğundan az ise sonraki soruya geç
                        this.soruId = this.sorular[i + 1]["soruID"];
                        if (!(this.tema == 4 || this.tema == 5)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getSoruAllPhotos(this.soruId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.delay(1000)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.getAllBySecenekId(this.soruId)
                        //await this.customVideo(null,i);
                    ];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //Soru doğruluğunun kontrol edildiği fonksiyon
    SorularPageComponent.prototype.soruKontrol = function (stepper, isTrue, i, flipCard, buton, element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        console.log("lengt", this.length);
                        if (element) {
                            //Gelen divden doğru cevabı buluyoruz ve cevap srcye atıyoruz
                            if (element["children"][0]["src"]) {
                                this.cevapSrc = element["children"][0]["src"];
                                console.log("element", element["children"][0]["src"]);
                            }
                            //Doğru cevap ve soru fotoğrafı gösterilir
                            this.ucuncuGosterim = true;
                        }
                        console.log("i", i);
                        if (!isTrue) return [3 /*break*/, 5];
                        //Doğru cevabın görünürlüğünü ayarlıyoruz 
                        if (element) {
                            element.setAttribute("style", "visibility:visible");
                        }
                        //Doğru sayısı local storage'e kayıt ediliyor
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["dogru"]++;
                        }
                        this.dogruCevap = true;
                        this.dogruSayisi++;
                        //Fotoğraflı soruların doğru gösterim süresi %10 düşüyor
                        //3 sn -> 2.7 sn >>> 2.7 sn -> 2.5 sn (isteğe göre ayarlanır)
                        console.log("süre", this.soruSuresi);
                        this.soruSuresi = (this.soruSuresi - (this.soruSuresi * 0.10));
                        //Eğer flipcard ise seçenek
                        if (flipCard) {
                            //seçenekleri gösterme fonk
                            this.secenekGoster();
                        }
                        //Seçenek buton ise
                        if (buton) {
                            //buton görüntülerini ayarlama fonksiyonu 
                            this.butonYak(true);
                        }
                        if (!(i == this.length - 1)) return [3 /*break*/, 2];
                        this.successToastMessage("Doğru Cevap", "Tebrikler test bitmiştir .");
                        return [4 /*yield*/, this.delay(750)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.successToastMessage("Doğru Cevap", "Sonraki soruya geçebilirsiniz.");
                        return [4 /*yield*/, this.delay(750)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        //Local storage'e yanlış sayısı 
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["yanlis"]++;
                        }
                        if (this.tema == 7 && this.fotoMu) {
                            this.cevapSrc = this.secenekler.find(function (s) { return s.isTrue == true; })["icerik"];
                        }
                        if (!this.cevapSrc && this.fotoMu) {
                            this.cevapSrc = this.secenekler.find(function (s) { return s.isTrue == true; })["icerik"];
                        }
                        console.log("duyguIsimDogu", this.duyguIsımDogru);
                        this.yanlisSayisi++;
                        this.dogruCevap = false;
                        //Eğer flipcard ise seçenek
                        if (flipCard) {
                            //seçenekleri gösterme fonk
                            this.secenekGoster();
                        }
                        if (buton) {
                            //buton görüntülerini ayarlama fonksiyonu
                            this.butonYak(false);
                        }
                        if (!(i == this.length - 1)) return [3 /*break*/, 7];
                        this.errorToastMessage("Yanlış Cevap", "Tebrikler test bitmiştir .");
                        return [4 /*yield*/, this.delay(750)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        this.errorToastMessage("Yanlış Cevap", "Sonraki soruya geçebilirsiniz.");
                        return [4 /*yield*/, this.delay(750)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        //local storage'e stepperın indexini atama
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["index"] = this.nbStepperComponent.selectedIndex;
                            localStorage.setItem(this.authhElper.userId + 'user', JSON.stringify(this.storage));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //Emotion Replay kategorisi için soru kontrolü fonksiyonu
    SorularPageComponent.prototype.EmotionReplayKontrol = function (stepper, i, item, secenekIcerik, sira, flipCard, cevap) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //Tıklandı = true
                        this.submitted = true;
                        console.log("i", this.soruPhotoSelect);
                        if (!(sira == this.soruPhotoSelect[this.soruPhotoIndex])) return [3 /*break*/, 4];
                        this.soruPhotoIndex++;
                        if (!item) return [3 /*break*/, 2];
                        flipCard.toggle();
                        return [4 /*yield*/, this.delay(500)];
                    case 1:
                        _a.sent();
                        console.log("element", item);
                        console.log("cevap", cevap);
                        console.log("secenek", secenekIcerik);
                        item.setAttribute("style", "visibility:hidden");
                        _a.label = 2;
                    case 2:
                        //Test bitimi ve doğru cevap mesajları
                        if (i == this.length - 1) {
                            this.successToastMessage("Doğru Cevap", "Tebrikler test bitmiştir .");
                        }
                        else {
                            this.successToastMessage("Doğru Cevap", "Sonraki soruya geçebilirsiniz.");
                        }
                        return [4 /*yield*/, this.delay(750)];
                    case 3:
                        _a.sent();
                        //Soruların sırası ile son gelen sıra aynı ise doğru sayısını arttır sonraki soruya geç
                        if (this.soruPhotos.length == sira) {
                            this.dogruSayisi++;
                            if (!this.authhElper.userActor) {
                                this.storage[this.userRaporIndex]["dogru"]++;
                            }
                            this.sonrakiSoru(stepper, i);
                        }
                        return [3 /*break*/, 9];
                    case 4:
                        //Yanlış sayısı arttırılıyor
                        this.yanlisSayisi++;
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["yanlis"]++;
                        }
                        if (!item) return [3 /*break*/, 7];
                        cevap["src"] = "../../../../assets/images/false.png";
                        return [4 /*yield*/, this.delay(300)];
                    case 5:
                        _a.sent();
                        flipCard.toggle();
                        return [4 /*yield*/, this.delay(500)];
                    case 6:
                        _a.sent();
                        item.setAttribute("style", "visibility:hidden");
                        _a.label = 7;
                    case 7:
                        //Son soru ise testi bitiriyor değilse sonraki soruya geçiyor 
                        if (i == this.length - 1) {
                            this.errorToastMessage("Yanlış Cevap", "Tebrikler test bitmiştir .");
                        }
                        else {
                            this.errorToastMessage("Yanlış Cevap", "Sonraki soruya geçebilirsiniz.");
                        }
                        return [4 /*yield*/, this.delay(750)];
                    case 8:
                        _a.sent();
                        this.sonrakiSoru(stepper, i);
                        _a.label = 9;
                    case 9:
                        //local storage'e son kalınan index atanıyor
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["index"] = this.nbStepperComponent.selectedIndex;
                            localStorage.setItem(this.authhElper.userId + 'user', JSON.stringify(this.storage));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //Face Replay kategorisi için 
    SorularPageComponent.prototype.faceReplayGosterim = function () {
        return __awaiter(this, void 0, void 0, function () {
            var say, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        say = 0;
                        if (!this.authhElper.userActor) {
                            this.soruId = this.sorular[this.storage[this.userRaporIndex]["index"]]["soruID"];
                            //Progress bar yüzdesi kalınan soruya göre ayarlanıyor
                            this.status = Math.trunc(((this.storage[this.userRaporIndex]["index"]) / this.sorular.length) * 100);
                        }
                        this.soruPhotos[0]["visible"] = true;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.soruPhotos.length)) return [3 /*break*/, 6];
                        //Sorulara dağılacakları index veriliyor
                        this.soruPhotos[i]["dagit"] = this.faceReplayRandom[i];
                        if (!(i == this.soruPhotos.length - 1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.delay(this.soruSuresi)];
                    case 2:
                        _a.sent();
                        //Soru fotoğrafını kapat
                        this.faceReplayGoster = false;
                        //Soru fotoğraflarının dağılacağı yeri aç 
                        this.faceReplayDagitim = true;
                        //Soru fotoğrafının indexini sıfırla
                        this.soruPhotoIndex = 0;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.delay(this.soruSuresi)];
                    case 4:
                        _a.sent();
                        this.soruPhotos[i + 1]["visible"] = true;
                        this.soruPhotos[i]["visible"] = false;
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //Face Replay kategorisinin soru kontrolü
    SorularPageComponent.prototype.FaceReplaySoruKontrol = function (stepper, i, sira) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("sira", sira);
                        this.submitted = true;
                        console.log("i", i);
                        if (!(sira == this.soruPhotoSelect[this.soruPhotoIndex])) return [3 /*break*/, 4];
                        this.soruPhotoIndex++;
                        if (i == this.length - 1) {
                            this.successToastMessage("Doğru Cevap", "Tebrikler test bitmiştir .");
                        }
                        else {
                            this.successToastMessage("Doğru Cevap", "Sonraki soruya geçebilirsiniz.");
                        }
                        return [4 /*yield*/, this.delay(750)];
                    case 1:
                        _a.sent();
                        if (!(this.soruPhotos.length == sira)) return [3 /*break*/, 3];
                        this.dogruSayisi++;
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["dogru"]++;
                        }
                        return [4 /*yield*/, this.faceReplaySonrakiSoru(stepper, i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 7];
                    case 4:
                        this.yanlisSayisi++;
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["yanlis"]++;
                        }
                        if (i == this.length - 1) {
                            this.errorToastMessage("Yanlış Cevap", "Tebrikler test bitmiştir ."); //stepper.next();
                        }
                        else {
                            this.errorToastMessage("Yanlış Cevap", "Sonraki soruya geçebilirsiniz.");
                        }
                        return [4 /*yield*/, this.delay(750)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.faceReplaySonrakiSoru(stepper, i)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    //Face Replay sonraki soruya geçiş
    SorularPageComponent.prototype.faceReplaySonrakiSoru = function (stepper, i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("sadeneme");
                        if (!this.authhElper.userActor) {
                            this.dogruSayisi = this.storage[this.userRaporIndex]["dogru"];
                            this.yanlisSayisi = this.storage[this.userRaporIndex]["yanlis"];
                        }
                        stepper.next();
                        if (!this.authhElper.userActor) {
                            this.storage[this.userRaporIndex]["index"] = this.nbStepperComponent.selectedIndex;
                            localStorage.setItem(this.authhElper.userId + 'user', JSON.stringify(this.storage));
                        }
                        //Dağıtımı kapatma
                        this.faceReplayDagitim = false;
                        if (i == this.length - 1) {
                            this.status = 100; // floattan integere çevirdiğimiz için veri kaybı oluyor son aşamada %100ü dolduramıyor o yüzden ??
                        }
                        else {
                            this.status += Math.trunc(100 / this.length);
                        }
                        if (!(i < this.length - 1)) return [3 /*break*/, 5];
                        this.soruId = this.sorular[i + 1]["soruID"];
                        if (!(this.tema == 4 || this.tema == 5)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getSoruAllPhotos(this.soruId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.delay(1000)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.getAllBySecenekId(this.soruId)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this.faceReplayDagitim = false;
                        this.faceReplayGoster = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    SorularPageComponent.prototype.birinciGosterim = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("sa");
                        try {
                            if (!this.authhElper.userActor) {
                                console.log("idrapor", this.urlId);
                                this.userRaporIndex = this.storage.findIndex(function (r) { return r["seviyeID"] == _this.urlId; });
                                console.log("rapor", this.storage[this.userRaporIndex]);
                                this.nbStepperComponent.selectedIndex = this.storage[this.userRaporIndex]["index"];
                            }
                        }
                        catch (_b) {
                            console.log("yok");
                        }
                        //this.faceReplayDagitim=true;
                        return [4 /*yield*/, this.delay(this.soruSuresi)];
                    case 1:
                        //this.faceReplayDagitim=true;
                        _a.sent();
                        this.firstShowing = false;
                        this.secondShowing = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    //Video sonlanınca çalışan fonksiyon
    SorularPageComponent.prototype.videoEnd = function () {
        if (this.soruPhotoIndex == this.soruPhotos.length - 1) {
            this.soruPhotos.sort(function (a, b) { return 0.5 - Math.random(); });
            console.log("sort", this.soruPhotos);
            this.sorufotogosterim = false;
            this.soruSecenekGosterim = true;
            this.soruPhotoIndex = 0;
        }
        else {
            this.soruPhotoIndex++;
            this.soruPhotos[this.soruPhotoIndex - 1]["visible"] = false;
            this.soruPhotos[this.soruPhotoIndex]["visible"] = true;
        }
    };
    SorularPageComponent.prototype.emotionReplayFoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.soruPhotos[0]["visible"] = true;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.soruPhotos.length)) return [3 /*break*/, 6];
                        if (!(i == this.soruPhotos.length - 1)) return [3 /*break*/, 3];
                        /*this.soruPhotos.sort((a,b)=>{
                          return a.sira - b.sira;
                        })*/
                        this.soruPhotos.sort(function (a, b) { return 0.5 - Math.random(); });
                        return [4 /*yield*/, this.delay(this.soruSuresi)];
                    case 2:
                        _a.sent();
                        //Soru fotoğrafını kapat
                        this.sorufotogosterim = false;
                        //Soru fotoğraflarının dağılacağı yeri aç 
                        this.soruSecenekGosterim = true;
                        //Soru fotoğrafının indexini sıfırla
                        this.soruPhotoIndex = 0;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.delay(this.soruSuresi)];
                    case 4:
                        _a.sent();
                        this.soruPhotoIndex++;
                        this.soruPhotos[this.soruPhotoIndex - 1]["visible"] = false;
                        this.soruPhotos[this.soruPhotoIndex]["visible"] = true;
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    SorularPageComponent.prototype.soruFotoGosterim = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.soruPhotos.length > 0) {
                    /* this.soruPhotos.sort((a,b)=>{
                       return a.sira - b.sira;
                     })*/
                    this.soruPhotos[this.soruPhotoIndex]["visible"] = true;
                }
                if (this.tema == 4 && this.fotoMu == true) {
                    this.emotionReplayFoto();
                }
                return [2 /*return*/];
            });
        });
    };
    SorularPageComponent.prototype.soruGoster = function (revealCard) {
        revealCard.toggle();
    };
    SorularPageComponent.prototype.secenekGoster = function () {
        //flipCard.toggle();
        this.cards.forEach(function (item) { return item.toggle(); });
    };
    SorularPageComponent.prototype.butonYak = function (isTrue) {
        if (isTrue == true) {
            return 'green';
        }
        else {
            return 'red';
        }
    };
    SorularPageComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    SorularPageComponent.prototype.customVideo = function (vide, i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (vide && this.videolar.length != this.sorular.length) {
                    this.videolar.push(vide);
                    this.videolar.sort(function (a, b) {
                        return parseInt(a.id) - parseInt(b.id);
                    });
                    console.log("vide", this.videolar);
                }
                if (vide["id"] >= 0) {
                    //this.videolar[vide["id"]].play();
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_nebular_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_6__["NbFlipCardComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SorularPageComponent.prototype, "cards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], SorularPageComponent.prototype, "buttons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_6__["NbFlipCardComponent"]),
        __metadata("design:type", _nebular_theme_components_card_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_6__["NbFlipCardComponent"])
    ], SorularPageComponent.prototype, "flipCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_7__["NbRevealCardComponent"]),
        __metadata("design:type", _nebular_theme_components_card_reveal_card_reveal_card_component__WEBPACK_IMPORTED_MODULE_7__["NbRevealCardComponent"])
    ], SorularPageComponent.prototype, "revealCard", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperComponent"]),
        __metadata("design:type", _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbStepperComponent"])
    ], SorularPageComponent.prototype, "nbStepperComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], SorularPageComponent.prototype, "keyEvent", null);
    SorularPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sorular-page',
            template: __webpack_require__(/*! ./sorular-page.component.html */ "./src/app/pages/quiz/sorular-page/sorular-page.component.html"),
            styles: [__webpack_require__(/*! ./sorular-page.component.scss */ "./src/app/pages/quiz/sorular-page/sorular-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__["SoruService"],
            _admin_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_8__["SeviyeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _admin_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_4__["SecenekService"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"],
            _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__["AuthHelper"],
            _admin_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_10__["KategoriService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _admin_admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_13__["OturumService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCarouselConfig"]])
    ], SorularPageComponent);
    return SorularPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=quiz-quiz-module.js.map