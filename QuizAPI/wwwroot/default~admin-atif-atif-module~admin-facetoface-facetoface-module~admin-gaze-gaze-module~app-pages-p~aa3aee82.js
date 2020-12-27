(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~admin-atif-atif-module~admin-facetoface-facetoface-module~admin-gaze-gaze-module~app-pages-p~aa3aee82"],{

/***/ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtY3VzdG9tLXNvcnUvdmlkZW8tdXBsb2FkLWN1c3RvbS1zb3J1LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VideoUploadCustomSoruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadCustomSoruComponent", function() { return VideoUploadCustomSoruComponent; });
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






var VideoUploadCustomSoruComponent = /** @class */ (function () {
    function VideoUploadCustomSoruComponent(http, dataBindService, router, toastrService) {
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
    VideoUploadCustomSoruComponent.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    VideoUploadCustomSoruComponent.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_5__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    VideoUploadCustomSoruComponent.prototype.showToast = function (type, title, body) {
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
    VideoUploadCustomSoruComponent.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "atif") {
            if (this.router.url.split("/")[3] == "soru") {
                this.dataBindService.changeAtifSoru(this.rowData["url"]);
            }
        }
        if (this.router.url.split("/")[2] == "gaze") {
            if (this.router.url.split("/")[3] == "soru") {
                console.log('change gaze soru');
                this.dataBindService.changeGazeSoru(this.rowData["videoUrl"]);
            }
        }
        if (this.router.url.split("/")[2] == "facetoface") {
            if (this.router.url.split("/")[3] == "soruPhoto") {
                this.dataBindService.changeFaceKategori(this.rowData["url"]);
            }
        }
    };
    VideoUploadCustomSoruComponent.prototype.ngOnInit = function () {
        console.log('ng on init');
        if (this.router.url.split("/")[2] == "atif") {
            console.log('this.row', this.rowData);
            if (this.rowData["url"] != "" && this.rowData["url"] != null) {
                this.isVideoVisible = 'visible';
            }
            this.currentUrl = "atifSoru";
        }
        if (this.router.url.split("/")[2] == "facetoface") {
            if (this.router.url.split("/")[3] == "soruPhoto") {
                if (this.rowData["url"] != "" && this.rowData["url"] != null) {
                    this.isVideoVisible = 'visible';
                }
                this.currentUrl = "facetofaceSoru";
            }
        }
        if (this.router.url.split("/")[2] == "gaze") {
            console.log('gaze sayfa');
            if (this.router.url.split("/")[3] == "soru") {
                if (this.rowData["videoUrl"] != "" && this.rowData["videoUrl"] != null) {
                    this.isVideoVisible = 'visible';
                }
            }
            this.currentUrl = "gazeSoru";
        }
    };
    VideoUploadCustomSoruComponent.prototype.upload = function (files) {
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
        if (this.currentUrl == "atif") {
            this.currentUrl = "atifSoru";
        }
        else if (this.currentUrl == "facetoface") {
            this.currentUrl = "facetofaceKategori";
        }
        else if (this.currentUrl == "secenek") {
            tmpId = this.rowData["secenekID"];
        }
        else if (this.currentUrl == "gaze") {
            this.currentUrl = "gazeSoru";
        }
        else if (this.currentUrl == "facetofaceSoru") {
            this.currentUrl = "facetofaceSoruPhotos";
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], VideoUploadCustomSoruComponent.prototype, "sendUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadCustomSoruComponent.prototype, "rowData", void 0);
    VideoUploadCustomSoruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-custom-soru',
            template: __webpack_require__(/*! ./video-upload-custom-soru.component.html */ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-custom-soru.component.scss */ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbToastrService"]])
    ], VideoUploadCustomSoruComponent);
    return VideoUploadCustomSoruComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [nbSpinner]=\"spinnerStatus\" >\n   \n  <button [ngStyle]=\"{'visibility':isVideoVisible}\" style=\"color:red\" (click) =\"oynat()\">Göster</button><!--buraya video oynatma ikonu koyabilirsin-->\n  \n  \n  \n  <input #file type=\"file\"   (change)=\"upload(file.files)\" />\n  <br/>\n  \n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2hlbHBlci92aWRlby11cGxvYWQtY3VzdG9tL3ZpZGVvLXVwbG9hZC1jdXN0b20uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: VideoUploadCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoUploadCustomComponent", function() { return VideoUploadCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _bind_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bind-data.service */ "./src/app/pages/admin/helper/bind-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme/components/toastr/model */ "./node_modules/@nebular/theme/components/toastr/model.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoUploadCustomComponent = /** @class */ (function () {
    function VideoUploadCustomComponent(http, dataBindService, router, toastrService) {
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
        this.position = _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbGlobalPhysicalPosition"].TOP_RIGHT;
        this.preventDuplicates = false;
    }
    VideoUploadCustomComponent.prototype.oynat = function () {
        if (this.router.url.split("/")[2] == "atif") {
            console.log('row', this.rowData);
            this.dataBindService.changeAitfKategori(this.rowData["videoUrl"]);
        }
        if (this.router.url.split("/")[2] == "facetoface") {
            console.log('url face göster');
            this.dataBindService.changeFaceKategori(this.rowData["videoUrl"]);
        }
        if (this.router.url.split("/")[2] == "gaze") {
            console.log('url face göster');
            this.dataBindService.changeGazeKategori(this.rowData["videoUrl"]);
        }
    };
    VideoUploadCustomComponent.prototype.ngOnInit = function () {
        if (this.router.url.split("/")[2] == "atif") {
            console.log('this.row', this.rowData);
            if (this.rowData["videoUrl"] != "" && this.rowData["videoUrl"] != null) {
                console.log('girdiii');
                this.isVideoVisible = 'visible';
            }
            this.currentUrl = "atif";
        }
        if (this.router.url.split("/")[2] == "facetoface") {
            console.log('face göster url', this.rowData);
            if (this.rowData["videoUrl"] != "" && this.rowData["videoUrl"] != null) {
                console.log('girdiii');
                this.isVideoVisible = 'visible';
            }
            this.currentUrl = "facetoface";
        }
        if (this.router.url.split("/")[2] == "gaze") {
            console.log('face göster url', this.rowData);
            if (this.rowData["videoUrl"] != "" && this.rowData["videoUrl"] != null) {
                console.log('girdiii');
                this.isVideoVisible = 'visible';
            }
            this.currentUrl = "gaze";
        }
    };
    //Yanlış Mesajı
    VideoUploadCustomComponent.prototype.errorToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_4__["NbToastStatus"].DANGER;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Doğru Mesajı
    VideoUploadCustomComponent.prototype.successToastMessage = function (headerMessage, bodyMessage) {
        var type = _nebular_theme_components_toastr_model__WEBPACK_IMPORTED_MODULE_4__["NbToastStatus"].SUCCESS;
        ;
        this.showToast(type, headerMessage, bodyMessage);
    };
    //Toast Gösterme
    VideoUploadCustomComponent.prototype.showToast = function (type, title, body) {
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
    VideoUploadCustomComponent.prototype.upload = function (files) {
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
        if (this.currentUrl == "atif") {
            this.currentUrl = "atifKategori";
        }
        else if (this.currentUrl == "facetoface") {
            this.currentUrl = "facetofaceKategori";
        }
        else if (this.currentUrl == "secenek") {
            tmpId = this.rowData["secenekID"];
        }
        else if (this.currentUrl == "gaze") {
            this.currentUrl = "gazeKategori";
        }
        var id = -1;
        var url = "";
        id = this.rowData["kategoriID"];
        var uploadReq = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', "/api/Custom/" + urlType + '/' + this.currentUrl, formData, {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", String)
    ], VideoUploadCustomComponent.prototype, "sendUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VideoUploadCustomComponent.prototype, "rowData", void 0);
    VideoUploadCustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'video-upload-custom',
            template: __webpack_require__(/*! ./video-upload-custom.component.html */ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.html"),
            styles: [__webpack_require__(/*! ./video-upload-custom.component.scss */ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _bind_data_service__WEBPACK_IMPORTED_MODULE_2__["BindDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbToastrService"]])
    ], VideoUploadCustomComponent);
    return VideoUploadCustomComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~admin-atif-atif-module~admin-facetoface-facetoface-module~admin-gaze-gaze-module~app-pages-p~aa3aee82.js.map