(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-gaze-gaze-module"],{

/***/ "./src/app/pages/admin/gaze/gaze-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: GazeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeRoutingModule", function() { return GazeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gaze_gaze_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gaze/gaze.component */ "./src/app/pages/admin/gaze/gaze/gaze.component.ts");
/* harmony import */ var _gaze_seviye_gaze_seviye_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gaze-seviye/gaze-seviye.component */ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.ts");
/* harmony import */ var _gaze_soru_gaze_soru_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gaze-soru/gaze-soru.component */ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.ts");
/* harmony import */ var _gaze_secenek_gaze_secenek_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gaze-secenek/gaze-secenek.component */ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.ts");
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
                component: _gaze_gaze_component__WEBPACK_IMPORTED_MODULE_2__["GazeComponent"],
            },
            {
                path: 'seviye',
                component: _gaze_seviye_gaze_seviye_component__WEBPACK_IMPORTED_MODULE_3__["GazeSeviyeComponent"],
            },
            {
                path: 'soru',
                component: _gaze_soru_gaze_soru_component__WEBPACK_IMPORTED_MODULE_4__["GazeSoruComponent"],
            },
            {
                path: 'secenek',
                component: _gaze_secenek_gaze_secenek_component__WEBPACK_IMPORTED_MODULE_5__["GazeSecenekComponent"],
            },
        ]
    }];
var GazeRoutingModule = /** @class */ (function () {
    function GazeRoutingModule() {
    }
    GazeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GazeRoutingModule);
    return GazeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        seçenekler\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n</div>\n<div class=\"row\">\n\n\n<div class=\"col-md-8\" style=\"margin:auto\">\n  <nb-card>\n    <nb-card-header>\n      Görüntü\n    </nb-card-header>\n  \n    <nb-card-body style=\"text-align:center\">\n        <video-player ></video-player>\n    </nb-card-body>\n  </nb-card>\n  \n</div>\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2dhemUvZ2F6ZS1zZWNlbmVrL2dhemUtc2VjZW5lay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.ts ***!
  \*************************************************************************/
/*! exports provided: GazeSecenekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeSecenekComponent", function() { return GazeSecenekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../admin/secenek/secenek.service */ "./src/app/pages/admin/admin/secenek/secenek.service.ts");
/* harmony import */ var _admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/soru/soru.service */ "./src/app/pages/admin/admin/soru/soru.service.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek1_video_upload_gaze_secenek1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek1/video-upload-gaze-secenek1.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek2_video_upload_gaze_secenek2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek2/video-upload-gaze-secenek2.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek3_video_upload_gaze_secenek3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek3/video-upload-gaze-secenek3.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek4_video_upload_gaze_secenek4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek4/video-upload-gaze-secenek4.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek5_video_upload_gaze_secenek5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek5/video-upload-gaze-secenek5.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek6_video_upload_gaze_secenek6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek6/video-upload-gaze-secenek6.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek7_video_upload_gaze_secenek7_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek7/video-upload-gaze-secenek7.component.ts");
/* harmony import */ var _helper_video_upload_gaze_secenek8_video_upload_gaze_secenek8_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component */ "./src/app/pages/admin/helper/video-upload-gaze-secenek8/video-upload-gaze-secenek8.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GazeSecenekComponent = /** @class */ (function () {
    function GazeSecenekComponent(secenekService, soruService) {
        this.secenekService = secenekService;
        this.soruService = soruService;
        this.loading = true;
        this.seviyeDropDownList = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
    }
    GazeSecenekComponent.prototype.ngOnInit = function () {
        this.getSoruAll();
        this.initializeSettings();
    };
    GazeSecenekComponent.prototype.getGazeCevapAll = function () {
        var _this = this;
        this.secenekService.getGazeCevapAll().subscribe(function (data) {
            _this.gazeCevap = data;
            console.log('gaze cevaplar', _this.gazeCevap);
            _this.gazeCevap.forEach(function (secenek, index) {
                _this.sorular.forEach(function (soru, i) {
                    if (secenek["gazeCastSoruID"] == soru["id"]) {
                        secenek["soruAdi"] = soru["aciklama"];
                    }
                });
                if (secenek["photo1isTrue"] == true) {
                    secenek["dogruMu1"] = "Doğru";
                }
                else {
                    secenek["dogruMu1"] = "Yanlış";
                }
                if (secenek["photo2isTrue"] == true) {
                    secenek["dogruMu2"] = "Doğru";
                }
                else {
                    secenek["dogruMu2"] = "Yanlış";
                }
                if (secenek["photo3isTrue"] == true) {
                    secenek["dogruMu3"] = "Doğru";
                }
                else {
                    secenek["dogruMu3"] = "Yanlış";
                }
                if (secenek["photo4isTrue"] == true) {
                    secenek["dogruMu4"] = "Doğru";
                }
                else {
                    secenek["dogruMu4"] = "Yanlış";
                }
                if (secenek["photo5isTrue"] == true) {
                    secenek["dogruMu5"] = "Doğru";
                }
                else {
                    secenek["dogruMu5"] = "Yanlış";
                }
                if (secenek["photo6isTrue"] == true) {
                    secenek["dogruMu6"] = "Doğru";
                }
                else {
                    secenek["dogruMu6"] = "Yanlış";
                }
                if (secenek["photo7isTrue"] == true) {
                    secenek["dogruMu7"] = "Doğru";
                }
                else {
                    secenek["dogruMu7"] = "Yanlış";
                }
                if (secenek["photo8isTrue"] == true) {
                    secenek["dogruMu8"] = "Doğru";
                }
                else {
                    secenek["dogruMu8"] = "Yanlış";
                }
            });
            _this.initializeSettings();
            _this.source.load(_this.gazeCevap);
            _this.loading = false;
        });
    };
    GazeSecenekComponent.prototype.getSoruAll = function () {
        var _this = this;
        this.soruService.getGazeSoruAll(true).subscribe(function (data) {
            _this.sorular = data;
            console.log('sorular', _this.sorular);
            data.forEach(function (seviye, index) {
                _this.seviyeDropDownList.push({ value: seviye["aciklama"], title: seviye["aciklama"] });
            });
            _this.getGazeCevapAll();
        });
    };
    GazeSecenekComponent.prototype.initializeSettings = function () {
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
                url1: {
                    title: 'Fotoğraf1',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek1_video_upload_gaze_secenek1_component__WEBPACK_IMPORTED_MODULE_4__["VideoUploadGazeSecenek1Component"],
                    isAdd: false
                },
                dogruMu1: {
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
                url2: {
                    title: 'Fotoğraf2',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek2_video_upload_gaze_secenek2_component__WEBPACK_IMPORTED_MODULE_5__["VideoUploadGazeSecenek2Component"]
                },
                dogruMu2: {
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
                url3: {
                    title: 'Fotoğraf3',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek3_video_upload_gaze_secenek3_component__WEBPACK_IMPORTED_MODULE_6__["VideoUploadGazeSecenek3Component"]
                },
                dogruMu3: {
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
                url4: {
                    title: 'Fotoğraf4',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek4_video_upload_gaze_secenek4_component__WEBPACK_IMPORTED_MODULE_7__["VideoUploadGazeSecenek4Component"]
                },
                dogruMu4: {
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
                url5: {
                    title: 'Fotoğraf5',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek5_video_upload_gaze_secenek5_component__WEBPACK_IMPORTED_MODULE_8__["VideoUploadGazeSecenek5Component"]
                },
                dogruMu5: {
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
                url6: {
                    title: 'Fotoğraf6',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek6_video_upload_gaze_secenek6_component__WEBPACK_IMPORTED_MODULE_9__["VideoUploadGazeSecenek6Component"]
                },
                dogruMu6: {
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
                url7: {
                    title: 'Fotoğraf7',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek7_video_upload_gaze_secenek7_component__WEBPACK_IMPORTED_MODULE_10__["VideoUploadGazeSecenek7Component"]
                },
                dogruMu7: {
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
                url8: {
                    title: 'Fotoğraf8',
                    type: 'custom',
                    editable: false,
                    filter: false,
                    renderComponent: _helper_video_upload_gaze_secenek8_video_upload_gaze_secenek8_component__WEBPACK_IMPORTED_MODULE_11__["VideoUploadGazeSecenek8Component"]
                },
                dogruMu8: {
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
    GazeSecenekComponent.prototype.addGazeSecenek = function (secenek) {
        return this.secenekService.addGazeSecenek(secenek);
    };
    GazeSecenekComponent.prototype.getBySeviye = function (photo) {
        var s = this.sorular.find(function (s) { return s["aciklama"] == photo; });
        return s["id"] ? s["id"] : -1;
    };
    GazeSecenekComponent.prototype.onCreateConfirm = function (event) {
        if (event.newData["dogruMu1"] == "Doğru") {
            event.newData["Photo1isTrue"] = true;
        }
        else if (event.newData["dogruMu1"] == "Yanlış") {
            event.newData["Photo1isTrue"] = false;
        }
        if (event.newData["dogruMu2"] == "Doğru") {
            event.newData["Photo2isTrue"] = true;
        }
        else if (event.newData["dogruMu2"] == "Yanlış") {
            event.newData["Photo2isTrue"] = false;
        }
        if (event.newData["dogruMu3"] == "Doğru") {
            event.newData["Photo3isTrue"] = true;
        }
        else if (event.newData["dogruMu3"] == "Yanlış") {
            event.newData["Photo3isTrue"] = false;
        }
        if (event.newData["dogruMu4"] == "Doğru") {
            event.newData["Photo4isTrue"] = true;
        }
        else if (event.newData["dogruMu4"] == "Yanlış") {
            event.newData["Photo4isTrue"] = false;
        }
        if (event.newData["dogruMu5"] == "Doğru") {
            event.newData["Photo5isTrue"] = true;
        }
        else if (event.newData["dogruMu5"] == "Yanlış") {
            event.newData["Photo5isTrue"] = false;
        }
        if (event.newData["dogruMu6"] == "Doğru") {
            event.newData["Photo6isTrue"] = true;
        }
        else if (event.newData["dogruMu6"] == "Yanlış") {
            event.newData["Photo6isTrue"] = false;
        }
        if (event.newData["dogruMu7"] == "Doğru") {
            event.newData["Photo7isTrue"] = true;
        }
        else if (event.newData["dogruMu7"] == "Yanlış") {
            event.newData["Photo7isTrue"] = false;
        }
        if (event.newData["dogruMu8"] == "Doğru") {
            event.newData["Photo8isTrue"] = true;
        }
        else if (event.newData["dogruMu8"] == "Yanlış") {
            event.newData["Photo8isTrue"] = false;
        }
        event.newData["gazeCastSoruID"] = this.getBySeviye(event.newData["soruAdi"]);
        this.addGazeSecenek(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.newData["id"] = data["id"];
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    GazeSecenekComponent.prototype.deleteGazeSecenek = function (id) {
        return this.secenekService.deleteGazeSecenek(id);
    };
    GazeSecenekComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('event', event.data["id"]);
            if (event.data["id"] > 0) {
                this.deleteGazeSecenek(event.data["id"]).subscribe(function () {
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
    GazeSecenekComponent.prototype.updateGazeSecenek = function (secenek) {
        return this.secenekService.updateGazeSecenek(secenek);
    };
    GazeSecenekComponent.prototype.onSaveConfirm = function (event) {
        if (event.newData["dogruMu1"] == "Doğru") {
            event.newData["Photo1isTrue"] = true;
        }
        else if (event.newData["dogruMu1"] == "Yanlış") {
            event.newData["Photo1isTrue"] = false;
        }
        if (event.newData["dogruMu2"] == "Doğru") {
            event.newData["Photo2isTrue"] = true;
        }
        else if (event.newData["dogruMu2"] == "Yanlış") {
            event.newData["Photo2isTrue"] = false;
        }
        if (event.newData["dogruMu3"] == "Doğru") {
            event.newData["Photo3isTrue"] = true;
        }
        else if (event.newData["dogruMu3"] == "Yanlış") {
            event.newData["Photo3isTrue"] = false;
        }
        if (event.newData["dogruMu4"] == "Doğru") {
            event.newData["Photo4isTrue"] = true;
        }
        else if (event.newData["dogruMu4"] == "Yanlış") {
            event.newData["Photo4isTrue"] = false;
        }
        if (event.newData["dogruMu5"] == "Doğru") {
            event.newData["Photo5isTrue"] = true;
        }
        else if (event.newData["dogruMu5"] == "Yanlış") {
            event.newData["Photo5isTrue"] = false;
        }
        if (event.newData["dogruMu6"] == "Doğru") {
            event.newData["Photo6isTrue"] = true;
        }
        else if (event.newData["dogruMu6"] == "Yanlış") {
            event.newData["Photo6isTrue"] = false;
        }
        if (event.newData["dogruMu7"] == "Doğru") {
            event.newData["Photo7isTrue"] = true;
        }
        else if (event.newData["dogruMu7"] == "Yanlış") {
            event.newData["Photo7isTrue"] = false;
        }
        if (event.newData["dogruMu8"] == "Doğru") {
            event.newData["Photo8isTrue"] = true;
        }
        else if (event.newData["dogruMu8"] == "Yanlış") {
            event.newData["Photo8isTrue"] = false;
        }
        event.newData["gazeCastSoruID"] = this.getBySeviye(event.newData["soruAdi"]);
        this.updateGazeSecenek(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    GazeSecenekComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gaze-secenek',
            template: __webpack_require__(/*! ./gaze-secenek.component.html */ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.html"),
            styles: [__webpack_require__(/*! ./gaze-secenek.component.scss */ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_secenek_secenek_service__WEBPACK_IMPORTED_MODULE_2__["SecenekService"], _admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_3__["SoruService"]])
    ], GazeSecenekComponent);
    return GazeSecenekComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-header>\n        Seviyeler\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2dhemUvZ2F6ZS1zZXZpeWUvZ2F6ZS1zZXZpeWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.ts ***!
  \***********************************************************************/
/*! exports provided: GazeSeviyeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeSeviyeComponent", function() { return GazeSeviyeComponent; });
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




var GazeSeviyeComponent = /** @class */ (function () {
    function GazeSeviyeComponent(seviyeService, oturumService) {
        this.seviyeService = seviyeService;
        this.oturumService = oturumService;
        this.seviyeler = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.loading = true;
        this.oturumDropdownList = [];
    }
    GazeSeviyeComponent.prototype.ngOnInit = function () {
        this.initializeSettings();
        this.getGazeCastSeviyeSeviyeSeviyeAll();
    };
    GazeSeviyeComponent.prototype.getGazeCastSeviyeSeviyeSeviyeAll = function () {
        var _this = this;
        this.seviyeService.getGazeCastSeviyeSeviyeAll(true).subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
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
    GazeSeviyeComponent.prototype.deleteGazeCastSeviyeSeviyeSeviye = function (id) {
        return this.seviyeService.deleteGazeCastSeviyeSeviye(id);
    };
    GazeSeviyeComponent.prototype.addGazeCastSeviyeSeviyeSeviye = function (seviye) {
        return this.seviyeService.addGazeCastSeviyeSeviye(seviye);
    };
    GazeSeviyeComponent.prototype.onDeleteConfirm = function (event) {
        console.log('ondelete', event.data);
        if (window.confirm('Are you sure you want to delete?')) {
            this.deleteGazeCastSeviyeSeviyeSeviye(event.data["id"]).subscribe(function (data) {
                event.confirm.resolve();
            });
        }
        else {
            event.confirm.reject();
        }
    };
    GazeSeviyeComponent.prototype.updateSeviye = function (seviye) {
        return this.seviyeService.updateGazeCastSeviyeSeviye(seviye);
    };
    GazeSeviyeComponent.prototype.onSaveConfirm = function (event) {
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
    GazeSeviyeComponent.prototype.getByOturumAdiFetchId = function (name) {
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
    GazeSeviyeComponent.prototype.onCreateConfirm = function (event) {
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
        this.addGazeCastSeviyeSeviyeSeviye(event.newData).subscribe(function (data) {
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
    GazeSeviyeComponent.prototype.getOturumAll = function () {
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
    GazeSeviyeComponent.prototype.getSeviyeOturumlar = function () {
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
    GazeSeviyeComponent.prototype.initializeSettings = function () {
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
    GazeSeviyeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gaze-seviye',
            template: __webpack_require__(/*! ./gaze-seviye.component.html */ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.html"),
            styles: [__webpack_require__(/*! ./gaze-seviye.component.scss */ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_2__["SeviyeService"], _admin_oturum_oturum_service__WEBPACK_IMPORTED_MODULE_3__["OturumService"]])
    ], GazeSeviyeComponent);
    return GazeSeviyeComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <nb-card>\n      <nb-card-header>\n        Sorular\n      </nb-card-header>\n    \n      <nb-card-body [nbSpinner]=\"loading\" nbSpinnerStatus=\"success\" nbSpinnerMessage=\"Yükleniyor...\">\n        <ng2-smart-table [source]=\"source\" [settings]=\"settings\"  (createConfirm)=\"onCreateConfirm($event)\"  (editConfirm)=\"onSaveConfirm($event)\" (deleteConfirm)=\"onDeleteConfirm($event)\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n\n\n<div class=\"col-md-4\" id=\"sagdakayan\" style=\"position: fixed; right: 10px; z-index: 1;\">\n  <nb-card>\n    <nb-card-header>\n      Görüntü\n    </nb-card-header>\n  \n    <nb-card-body style=\"text-align:center\">\n        <video-player ></video-player>\n    </nb-card-body>\n  </nb-card>\n  \n</div>\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2dhemUvZ2F6ZS1zb3J1L2dhemUtc29ydS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.ts ***!
  \*******************************************************************/
/*! exports provided: GazeSoruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeSoruComponent", function() { return GazeSoruComponent; });
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





var GazeSoruComponent = /** @class */ (function () {
    function GazeSoruComponent(soruService, seviyeSeviyeService) {
        this.soruService = soruService;
        this.seviyeSeviyeService = seviyeSeviyeService;
        this.loading = true;
        this.seviyeDropDownList = [];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
    }
    GazeSoruComponent.prototype.ngOnInit = function () {
        this.getSeviyeAll();
        this.initializeSettings();
    };
    GazeSoruComponent.prototype.getAtifSoruAll = function () {
        var _this = this;
        this.soruService.getGazeSoruAll(true).subscribe(function (data) {
            _this.sorular = data;
            console.log('sorular gaze', _this.sorular);
            _this.sorular.forEach(function (soru, index) {
                _this.seviyeler.forEach(function (seviye, i) {
                    if (soru["gazeCastID"] == seviye["id"]) {
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
    GazeSoruComponent.prototype.getSeviyeAll = function () {
        var _this = this;
        this.seviyeSeviyeService.getGazeCastSeviyeSeviyeAll(true).subscribe(function (data) {
            _this.seviyeler = data;
            data.forEach(function (seviye, index) {
                //this.seviyeDropDownList.push({ value: Object.keys(seviye).map(e => seviye[e])[1], title: Object.keys(seviye).map(e => seviye[e])[1] });
                _this.seviyeDropDownList.push({ value: seviye["aciklama"], title: seviye["aciklama"] });
            });
            console.log('dropdown', _this.seviyeDropDownList);
            _this.getAtifSoruAll();
        });
    };
    GazeSoruComponent.prototype.initializeSettings = function () {
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
                sıraNumarasi: {
                    title: 'Sıra Numarası',
                    type: 'string',
                },
                aktif: {
                    title: 'Aktif mi?',
                    type: 'string',
                },
                videoUrl: {
                    title: 'Video',
                    type: 'custom',
                    filter: false,
                    renderComponent: _helper_video_upload_custom_soru_video_upload_custom_soru_component__WEBPACK_IMPORTED_MODULE_4__["VideoUploadCustomSoruComponent"]
                }
            },
        };
    };
    GazeSoruComponent.prototype.addAtıfSoru = function (soru) {
        return this.soruService.addGazeSoru(soru);
    };
    GazeSoruComponent.prototype.getBySeviye = function (seviye) {
        var s = this.seviyeler.find(function (s) { return s["aciklama"] == seviye; });
        return s["id"] ? s["id"] : -1;
    };
    GazeSoruComponent.prototype.deleteAtif = function (id) {
        return this.soruService.deleteGazeSoru(id);
    };
    GazeSoruComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('event', event.data["id"]);
            if (event.data["id"] > 0) {
                this.deleteAtif(event.data["id"]).subscribe(function () {
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
    GazeSoruComponent.prototype.updateAtif = function (soru) {
        return this.soruService.updateGazeSoru(soru);
    };
    GazeSoruComponent.prototype.onSaveConfirm = function (event) {
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
        event.newData["gazeCastID"] = this.getBySeviye(event.newData["seviyeAdi"]);
        this.updateAtif(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    GazeSoruComponent.prototype.onCreateConfirm = function (event) {
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
        event.newData["gazeCastID"] = this.getBySeviye(event.newData["seviyeAdi"]);
        this.addAtıfSoru(event.newData).subscribe(function (data) {
            if (data["id"]) {
                event.newData["id"] = data["id"];
                event.confirm.resolve(event.newData);
            }
            else {
                event.confirm.reject();
            }
        });
    };
    GazeSoruComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gaze-soru',
            template: __webpack_require__(/*! ./gaze-soru.component.html */ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.html"),
            styles: [__webpack_require__(/*! ./gaze-soru.component.scss */ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_soru_soru_service__WEBPACK_IMPORTED_MODULE_2__["SoruService"], _admin_seviye_seviye_service__WEBPACK_IMPORTED_MODULE_3__["SeviyeService"]])
    ], GazeSoruComponent);
    return GazeSoruComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze.module.ts ***!
  \*************************************************/
/*! exports provided: GazeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeModule", function() { return GazeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _gaze_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gaze-routing.module */ "./src/app/pages/admin/gaze/gaze-routing.module.ts");
/* harmony import */ var _gaze_gaze_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gaze/gaze.component */ "./src/app/pages/admin/gaze/gaze/gaze.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/admin.module */ "./src/app/pages/admin/admin/admin.module.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _gaze_seviye_gaze_seviye_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gaze-seviye/gaze-seviye.component */ "./src/app/pages/admin/gaze/gaze-seviye/gaze-seviye.component.ts");
/* harmony import */ var _gaze_soru_gaze_soru_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gaze-soru/gaze-soru.component */ "./src/app/pages/admin/gaze/gaze-soru/gaze-soru.component.ts");
/* harmony import */ var _gaze_secenek_gaze_secenek_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gaze-secenek/gaze-secenek.component */ "./src/app/pages/admin/gaze/gaze-secenek/gaze-secenek.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var GazeModule = /** @class */ (function () {
    function GazeModule() {
    }
    GazeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_gaze_gaze_component__WEBPACK_IMPORTED_MODULE_3__["GazeComponent"], _gaze_seviye_gaze_seviye_component__WEBPACK_IMPORTED_MODULE_7__["GazeSeviyeComponent"], _gaze_soru_gaze_soru_component__WEBPACK_IMPORTED_MODULE_8__["GazeSoruComponent"], _gaze_secenek_gaze_secenek_component__WEBPACK_IMPORTED_MODULE_9__["GazeSecenekComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _gaze_routing_module__WEBPACK_IMPORTED_MODULE_2__["GazeRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_5__["AdminModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], GazeModule);
    return GazeModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze/gaze.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze/gaze.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card>\n      <nb-card-header>\n        Kategoriler\n      </nb-card-header>\n    \n      <nb-card-body>\n        <ng2-smart-table [settings]=\"settings\"  (editConfirm)=\"onSaveConfirm($event)\" [source]=\"src\">\n        </ng2-smart-table>\n      </nb-card-body>\n    </nb-card>\n    \n</div>\n\n\n<div class=\"col-md-6\">\n  <nb-card>\n    <nb-card-header>\n      Görüntü\n    </nb-card-header>\n  \n    <nb-card-body style=\"text-align:center\">\n        <video-player ></video-player>\n    </nb-card-body>\n  </nb-card>\n  \n</div>\n\n</div >\n\n\n\n"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze/gaze.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze/gaze.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2dhemUvZ2F6ZS9nYXplLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/gaze/gaze/gaze.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/gaze/gaze/gaze.component.ts ***!
  \*********************************************************/
/*! exports provided: GazeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GazeComponent", function() { return GazeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/kategori/kategori.service */ "./src/app/pages/admin/admin/kategori/kategori.service.ts");
/* harmony import */ var _helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/video-upload-custom/video-upload-custom.component */ "./src/app/pages/admin/helper/video-upload-custom/video-upload-custom.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GazeComponent = /** @class */ (function () {
    function GazeComponent(kategoriService) {
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
                    renderComponent: _helper_video_upload_custom_video_upload_custom_component__WEBPACK_IMPORTED_MODULE_2__["VideoUploadCustomComponent"]
                }
            },
        };
    }
    GazeComponent.prototype.getKategori = function () {
        var _this = this;
        this.kategoriService.getGazeKategoriService(true).subscribe(function (d) {
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
    GazeComponent.prototype.onSaveConfirm = function (event) {
        console.log('edit', event.newData);
        if (event.newData.aktif == "Aktif" || event.newData.aktif == "Pasif") {
            if (event.newData.aktif == "Aktif") {
                event.newData.isAktif = true;
            }
            else {
                event.newData.isAktif = false;
            }
            this.updateGazeKategori(event.newData).subscribe(function (data) {
                if (data) {
                    event.confirm.resolve(event.newData);
                }
            });
        }
    };
    GazeComponent.prototype.updateGazeKategori = function (kategori) {
        return this.kategoriService.updateGazeKategori(kategori);
    };
    GazeComponent.prototype.ngOnInit = function () {
        this.getKategori();
        console.log('kategori sayfası');
    };
    GazeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gaze',
            template: __webpack_require__(/*! ./gaze.component.html */ "./src/app/pages/admin/gaze/gaze/gaze.component.html"),
            styles: [__webpack_require__(/*! ./gaze.component.scss */ "./src/app/pages/admin/gaze/gaze/gaze.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_kategori_kategori_service__WEBPACK_IMPORTED_MODULE_1__["KategoriService"]])
    ], GazeComponent);
    return GazeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-gaze-gaze-module.js.map