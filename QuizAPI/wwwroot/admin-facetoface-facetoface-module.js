(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-facetoface-facetoface-module"],{

/***/ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <nb-card>\n      <nb-card-header>\n        Sorular\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n<div class=\"col-md-4\" id=\"sagdakayan\" style=\"position: fixed; right: 10px; z-index: 1;\">\n  <nb-card>\n    <nb-card-header>\n      Görüntü\n    </nb-card-header>\n  \n    <nb-card-body style=\"text-align:center\">\n        <video-player ></video-player>\n    </nb-card-body>\n  </nb-card>\n  \n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2ZhY2V0b2ZhY2UvZmFjZXRvZmFjZS1waG90by9mYWNldG9mYWNlLXBob3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FacetofacePhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofacePhotoComponent", function() { return FacetofacePhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _helper_video_upload_custom_soru_video_upload_custom_soru_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/video-upload-custom-soru/video-upload-custom-soru.component */ "./src/app/pages/admin/helper/video-upload-custom-soru/video-upload-custom-soru.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacetofacePhotoComponent = /** @class */ (function () {
    function FacetofacePhotoComponent(soruService, seviyeSeviyeService) {
        this.soruService = soruService;
        this.seviyeSeviyeService = seviyeSeviyeService;
        this.loading = true;
        this.seviyeDropDownList = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
    }
    FacetofacePhotoComponent.prototype.ngOnInit = function () {
        this.getSoruAll();
        this.initializeSettings();
    };
    FacetofacePhotoComponent.prototype.getFAcePhotoSoruAll = function () {
        var _this = this;
        this.soruService.getFaceSoruPhotoAll().subscribe(function (data) {
            _this.sorularPhoto = data;
            console.log('sorular photo', _this.sorularPhoto);
            _this.sorularPhoto.forEach(function (photo, index) {
                _this.sorular.forEach(function (soru, i) {
                    if (photo["faceToFaceSoruID"] == soru["id"]) {
                        photo["soruAdi"] = soru["aciklama"];
                    }
                });
            });
            _this.initializeSettings();
            _this.source.load(_this.sorularPhoto);
            _this.loading = false;
        });
    };
    FacetofacePhotoComponent.prototype.getSoruAll = function () {
        var _this = this;
        this.soruService.getFacetoFaceSoruAll(true).subscribe(function (data) {
            _this.sorular = data;
            console.log('sorular', _this.sorular);
            data.forEach(function (seviye, index) {
                //this.seviyeDropDownList.push({ value: Object.keys(seviye).map(e => seviye[e])[1], title: Object.keys(seviye).map(e => seviye[e])[1] });
                _this.seviyeDropDownList.push({ value: seviye["aciklama"], title: seviye["aciklama"] });
            });
            _this.getFAcePhotoSoruAll();
        });
    };
    FacetofacePhotoComponent.prototype.initializeSettings = function () {
        this.settings = {
            actions: {
                columnTitle: 'Sorular'
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                soruAdi: {
                    title: 'Sorular',
                    editor: {
                        type: 'list',
                        config: {
                            selectText: 'Select',
                            list: this.seviyeDropDownList,
                        },
                    },
                },
                aciklama: {
                    title: 'Fotoğraf Açıklama',
                    type: 'string',
                },
                url: {
                    title: 'Fotoğraf',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_custom_soru_video_upload_custom_soru_component__WEBPACK_IMPORTED_MODULE_4__["VideoUploadCustomSoruComponent"]
                }
            },
        };
    };
    FacetofacePhotoComponent.prototype.addFacePhoto = function (soru) {
        return this.soruService.addFacetofacePhoto(soru);
    };
    FacetofacePhotoComponent.prototype.getBySeviye = function (photo) {
        var s = this.sorular.find(function (s) { return s["aciklama"] == photo; });
        return s["id"] ? s["id"] : -1;
    };
    FacetofacePhotoComponent.prototype.deleteFacePhoto = function (id) {
        return this.soruService.deleteFacetofacePhoto(id);
    };
    FacetofacePhotoComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('event', event.data["id"]);
            if (event.data["id"] > 0) {
                this.deleteFacePhoto(event.data["id"]).subscribe(function () {
                    event.confirm.resolve();
                });
            }
            else {
                event.confirm.reject();
            }
        }
        else {
            event.confirm.reject();
        }
    };
    FacetofacePhotoComponent.prototype.updateFacePhoto = function (soru) {
        return this.soruService.updateFacetofacePhoto(soru);
    };
    FacetofacePhotoComponent.prototype.onSaveConfirm = function (event) {
        event.newData["faceToFaceSoruID"] = this.getBySeviye(event.newData["soruAdi"]);
        this.updateFacePhoto(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    FacetofacePhotoComponent.prototype.onCreateConfirm = function (event) {
        event.newData["faceToFaceSoruID"] = this.getBySeviye(event.newData["soruAdi"]);
        this.addFacePhoto(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.newData["id"] = data["id"];
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    FacetofacePhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facetoface-photo',
            template: __webpack_require__(/*! ./facetoface-photo.component.html */ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.html"),
            styles: [__webpack_require__(/*! ./facetoface-photo.component.scss */ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__["SoruService"], _admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_3__["SeviyeService"]])
    ], FacetofacePhotoComponent);
    return FacetofacePhotoComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FacetofaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofaceRoutingModule", function() { return FacetofaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _facetoface_facetoface_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facetoface/facetoface.component */ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.ts");
/* harmony import */ var _facetoface_seviye_facetoface_seviye_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facetoface-seviye/facetoface-seviye.component */ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.ts");
/* harmony import */ var _facetoface_soru_facetoface_soru_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facetoface-soru/facetoface-soru.component */ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.ts");
/* harmony import */ var _facetoface_photo_facetoface_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facetoface-photo/facetoface-photo.component */ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.ts");
/* harmony import */ var _facetoface_secenek_facetoface_secenek_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facetoface-secenek/facetoface-secenek.component */ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        children: [
            {
                path: 'kategori',
                component: _facetoface_facetoface_component__WEBPACK_IMPORTED_MODULE_2__["FacetofaceComponent"],
            },
            {
                path: 'seviye',
                component: _facetoface_seviye_facetoface_seviye_component__WEBPACK_IMPORTED_MODULE_3__["FacetofaceSeviyeComponent"],
            },
            {
                path: 'soru',
                component: _facetoface_soru_facetoface_soru_component__WEBPACK_IMPORTED_MODULE_4__["FacetofaceSoruComponent"],
            },
            {
                path: 'soruPhoto',
                component: _facetoface_photo_facetoface_photo_component__WEBPACK_IMPORTED_MODULE_5__["FacetofacePhotoComponent"],
            },
            {
                path: 'soruSecenek',
                component: _facetoface_secenek_facetoface_secenek_component__WEBPACK_IMPORTED_MODULE_6__["FacetofaceSecenekComponent"],
            },
        ]
    }];
var FacetofaceRoutingModule = /** @class */ (function () {
    function FacetofaceRoutingModule() {
    }
    FacetofaceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FacetofaceRoutingModule);
    return FacetofaceRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <nb-card>\n      <nb-card-header>\n        Seçenekler\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2ZhY2V0b2ZhY2UvZmFjZXRvZmFjZS1zZWNlbmVrL2ZhY2V0b2ZhY2Utc2VjZW5lay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FacetofaceSecenekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofaceSecenekComponent", function() { return FacetofaceSecenekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/secenek/secenek.service */ "./src/app/pages/admin/admin/secenek/secenek.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacetofaceSecenekComponent = /** @class */ (function () {
    function FacetofaceSecenekComponent(secenekService, faceSoruService) {
        this.secenekService = secenekService;
        this.faceSoruService = faceSoruService;
        this.loading = true;
        this.photoSoruAciklamaList = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
    }
    FacetofaceSecenekComponent.prototype.ngOnInit = function () {
        this.getFAceSoruPhotoAll();
        this.initializeSettings();
    };
    FacetofaceSecenekComponent.prototype.getFacePhotosSecenekAll = function () {
        var _this = this;
        this.secenekService.getFacePhotosSecenekAll().subscribe(function (data) {
            _this.secenekler = data;
            console.log('secenekler face', _this.secenekler);
            _this.secenekler.forEach(function (secenek, index) {
                _this.facetofaceSorular.forEach(function (soru, i) {
                    if (secenek["faceToFacePhotoID"] == soru["id"]) {
                        secenek["photoAciklama"] = soru["aciklama"];
                    }
                });
                if (secenek["isTrue"] == true) {
                    secenek["dogruMu"] = "Doğru";
                }
                else {
                    secenek["dogruMu"] = "Yanlış";
                }
            });
            _this.initializeSettings();
            _this.source.load(_this.secenekler);
            _this.loading = false;
        });
    };
    FacetofaceSecenekComponent.prototype.getFAceSoruPhotoAll = function () {
        var _this = this;
        this.faceSoruService.getFaceSoruPhotoAll().subscribe(function (data) {
            _this.facetofaceSorular = data;
            data.forEach(function (photo, index) {
                //this.seviyeDropDownList.push({ value: Object.keys(seviye).map(e => seviye[e])[1], title: Object.keys(seviye).map(e => seviye[e])[1] });
                _this.photoSoruAciklamaList.push({ value: photo["aciklama"], title: photo["aciklama"] });
            });
            _this.getFacePhotosSecenekAll();
        });
    };
    FacetofaceSecenekComponent.prototype.initializeSettings = function () {
        this.settings = {
            actions: {
                columnTitle: 'Sorular'
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                photoAciklama: {
                    title: 'Fotoğraf Açıklaması',
                    editor: {
                        type: 'list',
                        config: {
                            selectText: 'Select',
                            list: this.photoSoruAciklamaList,
                        },
                    },
                },
                aciklama: {
                    title: 'Seçenek Cümlesi',
                    type: 'string',
                },
                dogruMu: {
                    title: 'Doğru Mu?',
                    type: 'boolean',
                    editor: {
                        type: 'list',
                        config: {
                            selectText: 'Select',
                            list: [{ value: 'Doğru', title: 'Doğru' },
                                { value: 'Yanlış', title: 'Yanlış' },
                            ]
                        },
                    },
                },
            },
        };
    };
    FacetofaceSecenekComponent.prototype.getByPhotoSoru = function (soruPhoto) {
        var s = this.facetofaceSorular.find(function (s) { return s["aciklama"] == soruPhoto; });
        return s["id"] ? s["id"] : -1;
    };
    FacetofaceSecenekComponent.prototype.addFaceSecenek = function (secenek) {
        return this.secenekService.addFacePhotoSecenek(secenek);
    };
    FacetofaceSecenekComponent.prototype.onCreateConfirm = function (event) {
        if (event.newData["dogruMu"] == "Doğru") {
            event.newData["isTrue"] = true;
        }
        else if (event.newData["dogruMu"] == "Yanlış") {
            event.newData["isTrue"] = false;
        }
        event.newData["faceToFacePhotoID"] = this.getByPhotoSoru(event.newData["photoAciklama"]);
        this.addFaceSecenek(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.newData["id"] = data["id"];
                event.confirm.resolve();
            }
            else {
                event.confirm.reject();
            }
        });
    };
    FacetofaceSecenekComponent.prototype.deleteFacePhotoSecenek = function (id) {
        return this.secenekService.deleteFacePhotoSecenek(id);
    };
    FacetofaceSecenekComponent.prototype.onDeleteConfirm = function (event) {
        console.log('event data', event.data);
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('event', event.data["id"]);
            if (event.data["id"] > 0) {
                this.deleteFacePhotoSecenek(event.data["id"]).subscribe(function () {
                    event.confirm.resolve();
                });
            }
            else {
                event.confirm.reject();
            }
        }
        else {
            event.confirm.reject();
        }
    };
    FacetofaceSecenekComponent.prototype.updateFacePhotoSecenek = function (secenek) {
        return this.secenekService.updateFacePhotoSecenek(secenek);
    };
    FacetofaceSecenekComponent.prototype.onSaveConfirm = function (event) {
        if (event.newData["dogruMu"] == "Doğru") {
            event.newData["isTrue"] = true;
        }
        else if (event.newData["dogruMu"] == "Yanlış") {
            event.newData["isTrue"] = false;
        }
        event.newData["faceToFacePhotoID"] = this.getByPhotoSoru(event.newData["photoAciklama"]);
        this.updateFacePhotoSecenek(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    FacetofaceSecenekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facetoface-secenek',
            template: __webpack_require__(/*! ./facetoface-secenek.component.html */ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.html"),
            styles: [__webpack_require__(/*! ./facetoface-secenek.component.scss */ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_2__["SecenekService"], _admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_1__["SoruService"]])
    ], FacetofaceSecenekComponent);
    return FacetofaceSecenekComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        Seviyeler\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2ZhY2V0b2ZhY2UvZmFjZXRvZmFjZS1zZXZpeWUvZmFjZXRvZmFjZS1zZXZpeWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FacetofaceSeviyeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofaceSeviyeComponent", function() { return FacetofaceSeviyeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
/* harmony import */ var _admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/oturum/oturum.service */ "./src/app/pages/admin/admin/oturum/oturum.service.ts");
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




var FacetofaceSeviyeComponent = /** @class */ (function () {
    function FacetofaceSeviyeComponent(seviyeService, oturumService) {
        this.seviyeService = seviyeService;
        this.oturumService = oturumService;
        this.seviyeler = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.loading = true;
        this.oturumDropdownList = [];
    }
    FacetofaceSeviyeComponent.prototype.ngOnInit = function () {
        this.initializeSettings();
        this.getfaceSeviyeSeviyeAll();
    };
    FacetofaceSeviyeComponent.prototype.getfaceSeviyeSeviyeAll = function () {
        var _this = this;
        this.seviyeService.getFacetoFaceSeviyeAll(true).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.seviyeler = data;
                        this.source.load(this.seviyeler);
                        this.seviyeler.forEach(function (k) {
                            if (k.isAktif) {
                                k.aktif = "Aktif";
                            }
                            else {
                                k.aktif = "Pasif";
                            }
                        });
                        console.log('seviyeler', this.seviyeler);
                        this.loading = false;
                        return [4 /*yield*/, this.getOturumAll()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FacetofaceSeviyeComponent.prototype.deletefaceSeviyeSeviye = function (id) {
        return this.seviyeService.deleteFaceToFaceSeviyeSeviye(id);
    };
    FacetofaceSeviyeComponent.prototype.addfaceSeviyeSeviye = function (seviye) {
        return this.seviyeService.addFacetoFaceSeviye(seviye);
    };
    FacetofaceSeviyeComponent.prototype.onDeleteConfirm = function (event) {
        console.log('ondelete', event.data);
        if (window.confirm('Are you sure you want to delete?')) {
            this.deletefaceSeviyeSeviye(event.data["id"]).subscribe(function (data) {
                event.confirm.resolve();
            });
        }
        else {
            event.confirm.reject();
        }
    };
    FacetofaceSeviyeComponent.prototype.updateSeviye = function (seviye) {
        return this.seviyeService.updateFacetofaceSeviyeSeviye(seviye);
    };
    FacetofaceSeviyeComponent.prototype.onSaveConfirm = function (event) {
        if (event.newData.aktif == "Aktif") {
            event.newData.isAktif = true;
        }
        else if (event.newData.aktif == "Pasif") {
            event.newData.isAktif = false;
        }
        else {
            event.confirm.reject();
        }
        var oturumId = this.getByOturumAdiFetchId(event.newData["oturumAdi"]);
        event.newData["oturumID"] = oturumId;
        event.confirm.resolve(event.newData);
        this.updateSeviye(event.newData).subscribe(function (data) {
            console.log('data', data);
        });
    };
    FacetofaceSeviyeComponent.prototype.onCreateConfirm = function (event) {
        if (event.newData["aktif"] == "Aktif") {
            event.newData.isAktif = 1;
        }
        else if (event.newData["aktif"] == "Pasif") {
            event.newData.isAktif = 0;
        }
        else {
            event.confirm.reject();
            return;
        }
        var oturumId = this.getByOturumAdiFetchId(event.newData["oturumAdi"]);
        event.newData["oturumID"] = oturumId;
        console.log('new Data', event.newData);
        this.addfaceSeviyeSeviye(event.newData).subscribe(function (data) {
            if (data) {
                event.newData["ID"] = data["ID"];
                event.confirm.resolve(event.newData);
            }
            else {
                console.log('reject');
                event.confirm.reject();
            }
        });
    };
    FacetofaceSeviyeComponent.prototype.getByOturumAdiFetchId = function (name) {
        var o;
        var id;
        try {
            o = this.oturumlar.find(function (o) { return o["oturumAdi"] == name; });
            id = o["oturumID"];
            return id;
        }
        catch (_a) {
            return 0;
        }
    };
    FacetofaceSeviyeComponent.prototype.getOturumAll = function () {
        var _this = this;
        this.oturumService.getOturumlar().subscribe(function (data) {
            _this.oturumlar = data;
            data.forEach(function (oturum, index) {
                _this.oturumDropdownList.push({ value: oturum["oturumAdi"], title: oturum["oturumAdi"] });
            });
            _this.initializeSettings();
            _this.getSeviyeOturumlar();
        });
    };
    FacetofaceSeviyeComponent.prototype.getSeviyeOturumlar = function () {
        var _this = this;
        this.seviyeler.forEach(function (s, index) {
            _this.oturumlar.forEach(function (o, i) {
                if (o["oturumID"] == s["oturumID"]) {
                    console.log("girdi");
                    s.oturumAdi = o["oturumAdi"];
                }
            });
        });
        console.log("oturum", this.seviyeler);
    };
    FacetofaceSeviyeComponent.prototype.initializeSettings = function () {
        this.settings = {
            actions: {
                columnTitle: 'Kategori',
                mode: 'external'
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close" ></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                oturumAdi: {
                    title: 'Oturum',
                    editor: {
                        type: 'list',
                        config: {
                            selectText: 'Select',
                            list: this.oturumDropdownList,
                        },
                    },
                },
                aciklama: {
                    title: 'Açıklama',
                    type: 'string',
                },
                sıraNumarası: {
                    title: 'Sıra Numarası',
                    type: 'string',
                },
                aktif: {
                    title: 'Aktif mi ?',
                    type: 'string'
                },
                oturumSirasi: {
                    title: 'Oturum Sırası',
                    type: 'string',
                },
            },
        };
    };
    FacetofaceSeviyeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facetoface-seviye',
            template: __webpack_require__(/*! ./facetoface-seviye.component.html */ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.html"),
            styles: [__webpack_require__(/*! ./facetoface-seviye.component.scss */ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__["SeviyeService"], _admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_3__["OturumService"]])
    ], FacetofaceSeviyeComponent);
    return FacetofaceSeviyeComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Sorular\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2ZhY2V0b2ZhY2UvZmFjZXRvZmFjZS1zb3J1L2ZhY2V0b2ZhY2Utc29ydS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FacetofaceSoruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofaceSoruComponent", function() { return FacetofaceSoruComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/seviye/seviye.service */ "./src/app/pages/admin/admin/seviye/seviye.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacetofaceSoruComponent = /** @class */ (function () {
    function FacetofaceSoruComponent(soruService, seviyeSeviyeService) {
        this.soruService = soruService;
        this.seviyeSeviyeService = seviyeSeviyeService;
        this.loading = true;
        this.seviyeDropDownList = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
    }
    FacetofaceSoruComponent.prototype.ngOnInit = function () {
        this.getSeviyeAll();
        this.initializeSettings();
    };
    FacetofaceSoruComponent.prototype.getFAceSoruAll = function () {
        var _this = this;
        this.soruService.getFacetoFaceSoruAll(true).subscribe(function (data) {
            _this.sorular = data;
            console.log('sorular face', _this.sorular);
            _this.sorular.forEach(function (soru, index) {
                _this.seviyeler.forEach(function (seviye, i) {
                    if (soru["faceToFaceID"] == seviye["id"]) {
                        soru["seviyeAdi"] = seviye["aciklama"];
                    }
                });
                if (soru["isAktif"]) {
                    soru["aktif"] = "Aktif";
                }
                else {
                    soru["aktif"] = "Pasif";
                }
            });
            _this.initializeSettings();
            _this.source.load(_this.sorular);
            _this.loading = false;
        });
    };
    FacetofaceSoruComponent.prototype.getSeviyeAll = function () {
        var _this = this;
        this.seviyeSeviyeService.getFacetoFaceSeviyeAll(true).subscribe(function (data) {
            _this.seviyeler = data;
            data.forEach(function (seviye, index) {
                //this.seviyeDropDownList.push({ value: Object.keys(seviye).map(e => seviye[e])[1], title: Object.keys(seviye).map(e => seviye[e])[1] });
                _this.seviyeDropDownList.push({ value: seviye["aciklama"], title: seviye["aciklama"] });
            });
            console.log('dropdown', _this.seviyeDropDownList);
            _this.getFAceSoruAll();
        });
    };
    FacetofaceSoruComponent.prototype.initializeSettings = function () {
        this.settings = {
            actions: {
                columnTitle: 'Sorular'
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                seviyeAdi: {
                    title: 'Seviyeler',
                    editor: {
                        type: 'list',
                        config: {
                            selectText: 'Select',
                            list: this.seviyeDropDownList,
                        },
                    },
                },
                aciklama: {
                    title: 'Soru Cümlesi',
                    type: 'string',
                },
                siraNumarasi: {
                    title: 'Sıra Numarası',
                    type: 'string',
                },
                aktif: {
                    title: 'Aktif mi?',
                    type: 'string',
                }
            },
        };
    };
    FacetofaceSoruComponent.prototype.addFaceSoru = function (soru) {
        return this.soruService.addFacetofaceSoru(soru);
    };
    FacetofaceSoruComponent.prototype.getBySeviye = function (seviye) {
        var s = this.seviyeler.find(function (s) { return s["aciklama"] == seviye; });
        return s["id"] ? s["id"] : -1;
    };
    FacetofaceSoruComponent.prototype.deleteFace = function (id) {
        return this.soruService.deleteFacetofaceSoru(id);
    };
    FacetofaceSoruComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('event', event.data["id"]);
            if (event.data["id"] > 0) {
                this.deleteFace(event.data["id"]).subscribe(function () {
                    event.confirm.resolve();
                });
            }
            else {
                event.confirm.reject();
            }
        }
        else {
            event.confirm.reject();
        }
    };
    FacetofaceSoruComponent.prototype.updateFace = function (soru) {
        return this.soruService.updateFacetofaceSoru(soru);
    };
    FacetofaceSoruComponent.prototype.onSaveConfirm = function (event) {
        if (event.newData["aktif"] == "Aktif") {
            event.newData["isAktif"] = 1;
        }
        else if (event.newData["aktif"] == "Pasif") {
            event.newData["isAktif"] = 0;
        }
        else {
            event.confirm.reject();
            return;
        }
        event.newData["faceToFaceID"] = this.getBySeviye(event.newData["seviyeAdi"]);
        this.updateFace(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    FacetofaceSoruComponent.prototype.onCreateConfirm = function (event) {
        if (event.newData["aktif"] == "Aktif") {
            event.newData["isAktif"] = 1;
        }
        else if (event.newData["aktif"] == "Pasif") {
            event.newData["isAktif"] = 0;
        }
        else {
            event.confirm.reject();
            return;
        }
        event.newData["faceToFaceID"] = this.getBySeviye(event.newData["seviyeAdi"]);
        this.addFaceSoru(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.newData["id"] = data["id"];
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    FacetofaceSoruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facetoface-soru',
            template: __webpack_require__(/*! ./facetoface-soru.component.html */ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.html"),
            styles: [__webpack_require__(/*! ./facetoface-soru.component.scss */ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__["SoruService"], _admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_3__["SeviyeService"]])
    ], FacetofaceSoruComponent);
    return FacetofaceSoruComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface.module.ts ***!
  \*************************************************************/
/*! exports provided: FacetofaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofaceModule", function() { return FacetofaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _facetoface_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facetoface-routing.module */ "./src/app/pages/admin/facetoface/facetoface-routing.module.ts");
/* harmony import */ var _facetoface_facetoface_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facetoface/facetoface.component */ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/admin.module */ "./src/app/pages/admin/admin/admin.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _facetoface_seviye_facetoface_seviye_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facetoface-seviye/facetoface-seviye.component */ "./src/app/pages/admin/facetoface/facetoface-seviye/facetoface-seviye.component.ts");
/* harmony import */ var _facetoface_soru_facetoface_soru_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facetoface-soru/facetoface-soru.component */ "./src/app/pages/admin/facetoface/facetoface-soru/facetoface-soru.component.ts");
/* harmony import */ var _facetoface_photo_facetoface_photo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facetoface-photo/facetoface-photo.component */ "./src/app/pages/admin/facetoface/facetoface-photo/facetoface-photo.component.ts");
/* harmony import */ var _facetoface_secenek_facetoface_secenek_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./facetoface-secenek/facetoface-secenek.component */ "./src/app/pages/admin/facetoface/facetoface-secenek/facetoface-secenek.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FacetofaceModule = /** @class */ (function () {
    /**
     *
     */
    function FacetofaceModule() {
        console.log('face');
    }
    FacetofaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_facetoface_facetoface_component__WEBPACK_IMPORTED_MODULE_3__["FacetofaceComponent"], _facetoface_seviye_facetoface_seviye_component__WEBPACK_IMPORTED_MODULE_7__["FacetofaceSeviyeComponent"], _facetoface_soru_facetoface_soru_component__WEBPACK_IMPORTED_MODULE_8__["FacetofaceSoruComponent"], _facetoface_photo_facetoface_photo_component__WEBPACK_IMPORTED_MODULE_9__["FacetofacePhotoComponent"], _facetoface_secenek_facetoface_secenek_component__WEBPACK_IMPORTED_MODULE_10__["FacetofaceSecenekComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _facetoface_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacetofaceRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
            ], schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], FacetofaceModule);
    return FacetofaceModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface/facetoface.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <nb-card>\n      <nb-card-header>\n        Kategoriler\n      </nb-card-header>\n    \n      <nb-card-body>\n        <ng2-smart-table [settings]=\"settings\" (editConfirm)=\"onSaveConfirm($event)\" [source]=\"src\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n\n<div class=\"col-md-5\">\n  <nb-card>\n    <nb-card-header>\n      Görüntü\n    </nb-card-header>\n  \n    <nb-card-body style=\"text-align:center\">\n        <video-player ></video-player>\n    </nb-card-body>\n  </nb-card>\n  \n</div>\n\n</div >\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface/facetoface.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2ZhY2V0b2ZhY2UvZmFjZXRvZmFjZS9mYWNldG9mYWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/facetoface/facetoface/facetoface.component.ts ***!
  \***************************************************************************/
/*! exports provided: FacetofaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacetofaceComponent", function() { return FacetofaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper/video-upload-custom/video-upload-custom.component */ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.ts");
/* harmony import */ var _admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/kategori/kategori.service */ "./src/app/pages/admin/admin/kategori/kategori.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacetofaceComponent = /** @class */ (function () {
    function FacetofaceComponent(kategoriService) {
        this.kategoriService = kategoriService;
        this.settings = {
            hideSubHeader: true,
            actions: {
                columnTitle: 'Kategori',
                mode: 'external',
                delete: false,
                add: false
            },
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
                confirmCreate: true,
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close" ></i>',
                confirmSave: true,
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                aciklama: {
                    title: 'Açıklama',
                    type: 'string',
                    filter: false
                },
                aktif: {
                    title: 'Aktif mi ?',
                    type: 'string',
                    filter: false
                },
                videoUrl: {
                    title: 'Video',
                    type: 'custom',
                    filter: false,
                    renderComponent: _helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_1__["VideoUploadCustomComponent"]
                }
            },
        };
    }
    FacetofaceComponent.prototype.getKategori = function () {
        var _this = this;
        this.kategoriService.getFacetofaceKategoriService(true).subscribe(function (d) {
            console.log('data', d);
            _this.kategoriler = d;
            _this.kategoriler.forEach(function (k) {
                if (k.isAktif) {
                    k.aktif = "Aktif";
                }
                else {
                    k.aktif = "Pasif";
                }
            });
            //this.source.load(datath,ss
            _this.src = _this.kategoriler;
            console.log('source', _this.src);
        });
    };
    FacetofaceComponent.prototype.onSaveConfirm = function (event) {
        console.log('edit', event.newData);
        if (event.newData.aktif == "Aktif" || event.newData.aktif == "Pasif") {
            if (event.newData.aktif == "Aktif") {
                event.newData.isAktif = true;
            }
            else {
                event.newData.isAktif = false;
            }
            this.updateFaceKategori(event.newData).subscribe(function (data) {
                if (data) {
                    event.confirm.resolve(event.newData);
                }
            });
        }
    };
    FacetofaceComponent.prototype.updateFaceKategori = function (kategori) {
        return this.kategoriService.updateFacetofaceKategori(kategori);
    };
    FacetofaceComponent.prototype.ngOnInit = function () {
        this.getKategori();
        console.log('kategori sayfası');
    };
    FacetofaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'facetoface',
            template: __webpack_require__(/*! ./facetoface.component.html */ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.html"),
            styles: [__webpack_require__(/*! ./facetoface.component.scss */ "./src/app/pages/admin/facetoface/facetoface/facetoface.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_2__["KategoriService"]])
    ], FacetofaceComponent);
    return FacetofaceComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-facetoface-facetoface-module.js.map