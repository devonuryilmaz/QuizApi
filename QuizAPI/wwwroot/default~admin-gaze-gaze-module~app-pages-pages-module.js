(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-gaze-gaze-module~app-pages-pages-module"],{

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrMS92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek1Component", function() { return VideoUploadGazeSecenek1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoUploadGazeSecenek1Component = /** @class */ (function () {
    function VideoUploadGazeSecenek1Component(http, dataBindService, router, toastrService) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.toastrService = toastrService;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    //Yanlış Mesajı
    VideoUploadGazeSecenek1Component.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    VideoUploadGazeSecenek1Component.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    VideoUploadGazeSecenek1Component.prototype.showToast = function (type, title, body) {
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
    VideoUploadGazeSecenek1Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                console.log('change gaze secenek');
                this.dataBindService.changeGazeSecenekPhoto(this.rowData["photo1Url"]);
            }
        }
    };
    VideoUploadGazeSecenek1Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek1');
        if (this.rowData["photo1Url"] != "" && this.rowData["photo1Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek";
    };
    VideoUploadGazeSecenek1Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek") {
            this.currentUrl = "gazeSecenekPhoto1";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                    _this.successToastMessage("Video/Resim Yükleme", "Video/Resim başarı ile yüklenmiştir.");
                }
                else {
                    //todo  başarısız toastı 
                    _this.errorToastMessage("Video/Resim Yükleme", "Video/Resim yüklerken hata oluştu!");
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek1Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek1',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek1.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek1.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], VideoUploadGazeSecenek1Component);
    return VideoUploadGazeSecenek1Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrMi92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrMi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek2Component", function() { return VideoUploadGazeSecenek2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoUploadGazeSecenek2Component = /** @class */ (function () {
    function VideoUploadGazeSecenek2Component(http, dataBindService, router, toastrService) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.toastrService = toastrService;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    //Yanlış Mesajı
    VideoUploadGazeSecenek2Component.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    VideoUploadGazeSecenek2Component.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    VideoUploadGazeSecenek2Component.prototype.showToast = function (type, title, body) {
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
    VideoUploadGazeSecenek2Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek2Photo(this.rowData["photo2Url"]);
            }
        }
    };
    VideoUploadGazeSecenek2Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek2');
        if (this.rowData["photo2Url"] != "" && this.rowData["photo2Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek2";
    };
    VideoUploadGazeSecenek2Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek2") {
            this.currentUrl = "gazeSecenekPhoto2";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                    _this.successToastMessage("Video/Resim Yükleme", "Video/Resim başarı ile yüklenmiştir.");
                }
                else {
                    //todo  başarısız toastı 
                    _this.errorToastMessage("Video/Resim Yükleme", "Video/Resim yüklerken hata oluştu!");
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek2Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek2',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek2.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek2.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], VideoUploadGazeSecenek2Component);
    return VideoUploadGazeSecenek2Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrMy92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrMy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek3Component", function() { return VideoUploadGazeSecenek3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoUploadGazeSecenek3Component = /** @class */ (function () {
    function VideoUploadGazeSecenek3Component(http, dataBindService, router, toastrService) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.toastrService = toastrService;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    VideoUploadGazeSecenek3Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek3Photo(this.rowData["photo3Url"]);
            }
        }
    };
    //Yanlış Mesajı
    VideoUploadGazeSecenek3Component.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    VideoUploadGazeSecenek3Component.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    VideoUploadGazeSecenek3Component.prototype.showToast = function (type, title, body) {
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
    VideoUploadGazeSecenek3Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek3');
        if (this.rowData["photo3Url"] != "" && this.rowData["photo3Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek3";
    };
    VideoUploadGazeSecenek3Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek3") {
            this.currentUrl = "gazeSecenekPhoto3";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                    _this.successToastMessage("Video/Resim Yükleme", "Video/Resim başarı ile yüklenmiştir.");
                }
                else {
                    //todo  başarısız toastı 
                    _this.errorToastMessage("Video/Resim Yükleme", "Video/Resim yüklerken hata oluştu!");
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek3Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek3',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek3.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek3.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], VideoUploadGazeSecenek3Component);
    return VideoUploadGazeSecenek3Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNC92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek4Component", function() { return VideoUploadGazeSecenek4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoUploadGazeSecenek4Component = /** @class */ (function () {
    function VideoUploadGazeSecenek4Component(http, dataBindService, router, toastrService) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.toastrService = toastrService;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
        this.destroyByClick = true;
        this.duration = 2000;
        this.hasIcon = true;
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    //Yanlış Mesajı
    VideoUploadGazeSecenek4Component.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    VideoUploadGazeSecenek4Component.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    VideoUploadGazeSecenek4Component.prototype.showToast = function (type, title, body) {
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
    VideoUploadGazeSecenek4Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek4Photo(this.rowData["photo4Url"]);
            }
        }
    };
    VideoUploadGazeSecenek4Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek4');
        if (this.rowData["photo4Url"] != "" && this.rowData["photo4Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek4";
    };
    VideoUploadGazeSecenek4Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek4") {
            this.currentUrl = "gazeSecenekPhoto4";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                    _this.successToastMessage("Video/Resim Yükleme", "Video/Resim başarı ile yüklenmiştir.");
                }
                else {
                    //todo  başarısız toastı 
                    _this.errorToastMessage("Video/Resim Yükleme", "Video/Resim yüklerken hata oluştu!");
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek4Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek4',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek4.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek4.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], VideoUploadGazeSecenek4Component);
    return VideoUploadGazeSecenek4Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNS92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek5Component", function() { return VideoUploadGazeSecenek5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
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




var VideoUploadGazeSecenek5Component = /** @class */ (function () {
    function VideoUploadGazeSecenek5Component(http, dataBindService, router) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
    }
    VideoUploadGazeSecenek5Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek5Photo(this.rowData["photo5Url"]);
            }
        }
    };
    VideoUploadGazeSecenek5Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek5');
        if (this.rowData["photo5Url"] != "" && this.rowData["photo5Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek5";
    };
    VideoUploadGazeSecenek5Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek5") {
            this.currentUrl = "gazeSecenekPhoto5";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                }
                else {
                    //todo  başarısız toastı 
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek5Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek5',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek5.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek5.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VideoUploadGazeSecenek5Component);
    return VideoUploadGazeSecenek5Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNi92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek6Component", function() { return VideoUploadGazeSecenek6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
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




var VideoUploadGazeSecenek6Component = /** @class */ (function () {
    function VideoUploadGazeSecenek6Component(http, dataBindService, router) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
    }
    VideoUploadGazeSecenek6Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek6Photo(this.rowData["photo6Url"]);
            }
        }
    };
    VideoUploadGazeSecenek6Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek6');
        if (this.rowData["photo6Url"] != "" && this.rowData["photo6Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek6";
    };
    VideoUploadGazeSecenek6Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek6") {
            this.currentUrl = "gazeSecenekPhoto6";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                }
                else {
                    //todo  başarısız toastı 
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek6Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek6',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek6.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek6.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VideoUploadGazeSecenek6Component);
    return VideoUploadGazeSecenek6Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNy92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrNy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek7Component", function() { return VideoUploadGazeSecenek7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
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




var VideoUploadGazeSecenek7Component = /** @class */ (function () {
    function VideoUploadGazeSecenek7Component(http, dataBindService, router) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
    }
    VideoUploadGazeSecenek7Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek7Photo(this.rowData["photo7Url"]);
            }
        }
    };
    VideoUploadGazeSecenek7Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek7');
        if (this.rowData["photo7Url"] != "" && this.rowData["photo7Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek7";
    };
    VideoUploadGazeSecenek7Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek7") {
            this.currentUrl = "gazeSecenekPhoto7";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                }
                else {
                    //todo  başarısız toastı 
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek7Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek7',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek7.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek7.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VideoUploadGazeSecenek7Component);
    return VideoUploadGazeSecenek7Component;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrOC92aWRlby11cGxvYWQtZ2F6ZS1zZWNlbmVrOC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideoUploadGazeSecenek8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadGazeSecenek8Component", function() { return VideoUploadGazeSecenek8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
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




var VideoUploadGazeSecenek8Component = /** @class */ (function () {
    function VideoUploadGazeSecenek8Component(http, dataBindService, router) {
        this.http = http;
        this.dataBindService = dataBindService;
        this.router = router;
        this.isVideoVisible = 'hidden';
        this.uploadVisible = false;
        this.spinnerStatus = false;
    }
    VideoUploadGazeSecenek8Component.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "secenek") {
                //  console.log('change gaze secenek')
                this.dataBindService.changeGazeSecenek8Photo(this.rowData["photo8Url"]);
            }
        }
    };
    VideoUploadGazeSecenek8Component.prototype.ngOnInit = function () {
        console.log('ng on init gaze secenek8');
        if (this.rowData["photo8Url"] != "" && this.rowData["photo8Url"] != null) {
            this.isVideoVisible = 'visible';
        }
        this.currentUrl = "gazeSecenek8";
    };
    VideoUploadGazeSecenek8Component.prototype.upload = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var formData = new FormData();
        var selectedFile;
        var fileType;
        var fileTypeSplit;
        var urlType;
        var controller;
        var tmpId;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append(file.name, file);
            selectedFile = file;
        }
        fileType = String(selectedFile.type);
        fileTypeSplit = fileType.split("/")[0];
        if (fileTypeSplit == "image") {
            urlType = "photos";
        }
        else if (fileTypeSplit == "video") {
            urlType = "video";
        }
        if (this.currentUrl == "gazeSecenek8") {
            this.currentUrl = "gazeSecenekPhoto8";
        }
        var id = -1;
        var url = "";
        id = this.rowData["id"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('PUT', "https://sosyalbilis.com/api/Custom/" + urlType + '/' + this.currentUrl + '/' + id, formData, {
            reportProgress: true
        });
        this.http.request(uploadReq).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.progress = Math.round(100 * event.loaded / event.total);
                //todo videoe yüklenirken async arka plan spinner
                //todo video yüklenince sayfa yenilensin
            }
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.uploadMessage = event.body;
                if (event.status == 200) {
                    //todo  başarılı toastı 
                    _this.rowData["url"] = event.body;
                }
                else {
                    //todo  başarısız toastı 
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadGazeSecenek8Component.prototype, "rowData", void 0);
    VideoUploadGazeSecenek8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-gaze-secenek8',
            template: __webpack_require__(/*! ./video-upload-gaze-secenek8.component.html */ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-gaze-secenek8.component.scss */ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VideoUploadGazeSecenek8Component);
    return VideoUploadGazeSecenek8Component;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-gaze-gaze-module~app-pages-pages-module.js.map