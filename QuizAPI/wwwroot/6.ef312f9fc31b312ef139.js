(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6LsV":function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("t/Na"),i=(t("2Vpx"),t("TtU4")),a=t("AmjA"),o=function(){function n(n,e,t,l){this.http=n,this.dataBindService=e,this.router=t,this.toastrService=l,this.isVideoVisible="hidden",this.uploadVisible=!1,this.spinnerStatus=!1,this.destroyByClick=!0,this.duration=2e3,this.hasIcon=!0,this.position=i.k.TOP_RIGHT,this.preventDuplicates=!1}return n.prototype.errorToastMessage=function(n,e){this.showToast(a.a.DANGER,n,e)},n.prototype.successToastMessage=function(n,e){this.showToast(a.a.SUCCESS,n,e)},n.prototype.showToast=function(n,e,t){this.toastrService.show(t,""+e,{status:n,destroyByClick:this.destroyByClick,duration:this.duration,hasIcon:this.hasIcon,position:this.position,preventDuplicates:this.preventDuplicates})},n.prototype.oynat=function(){"atif"==this.router.url.split("/")[2]&&"soru"==this.router.url.split("/")[3]&&this.dataBindService.changeAtifSoru(this.rowData.url),"gaze"==this.router.url.split("/")[2]&&"soru"==this.router.url.split("/")[3]&&(console.log("change gaze soru"),this.dataBindService.changeGazeSoru(this.rowData.videoUrl)),"facetoface"==this.router.url.split("/")[2]&&"soruPhoto"==this.router.url.split("/")[3]&&this.dataBindService.changeFaceKategori(this.rowData.url)},n.prototype.ngOnInit=function(){console.log("ng on init"),"atif"==this.router.url.split("/")[2]&&(console.log("this.row",this.rowData),""!=this.rowData.url&&null!=this.rowData.url&&(this.isVideoVisible="visible"),this.currentUrl="atifSoru"),"facetoface"==this.router.url.split("/")[2]&&"soruPhoto"==this.router.url.split("/")[3]&&(""!=this.rowData.url&&null!=this.rowData.url&&(this.isVideoVisible="visible"),this.currentUrl="facetofaceSoru"),"gaze"==this.router.url.split("/")[2]&&(console.log("gaze sayfa"),"soru"==this.router.url.split("/")[3]&&""!=this.rowData.videoUrl&&null!=this.rowData.videoUrl&&(this.isVideoVisible="visible"),this.currentUrl="gazeSoru")},n.prototype.upload=function(n){var e=this;if(0!==n.length){for(var t,i,a,o=new FormData,r=0,c=n;r<c.length;r++){var s=c[r];o.append(s.name,s),t=s}"image"==(i=String(t.type).split("/")[0])?a="photos":"video"==i&&(a="video"),"atif"==this.currentUrl?this.currentUrl="atifSoru":"facetoface"==this.currentUrl?this.currentUrl="facetofaceKategori":"secenek"==this.currentUrl||("gaze"==this.currentUrl?this.currentUrl="gazeSoru":"facetofaceSoru"==this.currentUrl&&(this.currentUrl="facetofaceSoruPhotos"));var u=new l.k("PUT","https://sosyalbilis.com/api/Custom/"+a+"/"+this.currentUrl+"/"+this.rowData.id,o,{reportProgress:!0});this.http.request(u).subscribe(function(n){n.type===l.g.UploadProgress?e.progress=Math.round(100*n.loaded/n.total):n.type===l.g.Response&&(e.uploadMessage=n.body,200==n.status?(e.rowData.url=n.body,e.successToastMessage("Video/Resim Y\xfckleme","Video/Resim ba\u015far\u0131 ile y\xfcklenmi\u015ftir.")):e.errorToastMessage("Video/Resim Y\xfckleme","Video/Resim y\xfcklerken hata olu\u015ftu!"))})}},n}()},Coom:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("t/Na"),i=(t("2Vpx"),t("AmjA")),a=t("TtU4"),o=function(){function n(n,e,t,l){this.http=n,this.dataBindService=e,this.router=t,this.toastrService=l,this.isVideoVisible="hidden",this.uploadVisible=!1,this.spinnerStatus=!1,this.destroyByClick=!0,this.duration=2e3,this.hasIcon=!0,this.position=a.k.TOP_RIGHT,this.preventDuplicates=!1}return n.prototype.oynat=function(){"atif"==this.router.url.split("/")[2]&&(console.log("row",this.rowData),this.dataBindService.changeAitfKategori(this.rowData.videoUrl)),"facetoface"==this.router.url.split("/")[2]&&(console.log("url face g\xf6ster"),this.dataBindService.changeFaceKategori(this.rowData.videoUrl)),"gaze"==this.router.url.split("/")[2]&&(console.log("url face g\xf6ster"),this.dataBindService.changeGazeKategori(this.rowData.videoUrl))},n.prototype.ngOnInit=function(){"atif"==this.router.url.split("/")[2]&&(console.log("this.row",this.rowData),""!=this.rowData.videoUrl&&null!=this.rowData.videoUrl&&(console.log("girdiii"),this.isVideoVisible="visible"),this.currentUrl="atif"),"facetoface"==this.router.url.split("/")[2]&&(console.log("face g\xf6ster url",this.rowData),""!=this.rowData.videoUrl&&null!=this.rowData.videoUrl&&(console.log("girdiii"),this.isVideoVisible="visible"),this.currentUrl="facetoface"),"gaze"==this.router.url.split("/")[2]&&(console.log("face g\xf6ster url",this.rowData),""!=this.rowData.videoUrl&&null!=this.rowData.videoUrl&&(console.log("girdiii"),this.isVideoVisible="visible"),this.currentUrl="gaze")},n.prototype.errorToastMessage=function(n,e){this.showToast(i.a.DANGER,n,e)},n.prototype.successToastMessage=function(n,e){this.showToast(i.a.SUCCESS,n,e)},n.prototype.showToast=function(n,e,t){this.toastrService.show(t,""+e,{status:n,destroyByClick:this.destroyByClick,duration:this.duration,hasIcon:this.hasIcon,position:this.position,preventDuplicates:this.preventDuplicates})},n.prototype.upload=function(n){var e=this;if(0!==n.length){for(var t,i,a,o=new FormData,r=0,c=n;r<c.length;r++){var s=c[r];o.append(s.name,s),t=s}"image"==(i=String(t.type).split("/")[0])?a="photos":"video"==i&&(a="video"),"atif"==this.currentUrl?this.currentUrl="atifKategori":"facetoface"==this.currentUrl?this.currentUrl="facetofaceKategori":"secenek"==this.currentUrl||"gaze"==this.currentUrl&&(this.currentUrl="gazeKategori");var u=new l.k("POST","https://sosyalbilis.com/api/Custom/"+a+"/"+this.currentUrl,o,{reportProgress:!0});this.http.request(u).subscribe(function(n){n.type===l.g.UploadProgress?e.progress=Math.round(100*n.loaded/n.total):n.type===l.g.Response&&(e.uploadMessage=n.body,200==n.status?(e.rowData.url=n.body,e.successToastMessage("Video/Resim Y\xfckleme","Video/Resim ba\u015far\u0131 ile y\xfcklenmi\u015ftir.")):e.errorToastMessage("Video/Resim Y\xfckleme","Video/Resim y\xfcklerken hata olu\u015ftu!"))})}},n}()},wCuR:function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),i=function(){return function(){console.log("atif module")}}(),a=t("pMnS"),o=t("4bAE"),r=t("mc3f"),c=t("+ImT"),s=t("Qq3i"),u=t("MNmR"),d=t("0ldR"),m=t("2Vpx"),f=t("ZYCi"),p=function(){return function(){}}(),v=t("9py3"),g=t("Coom"),h=function(){function n(n){this.kategoriService=n,this.atif=new p,this.settings={hideSubHeader:!0,actions:{columnTitle:"Kategori",mode:"external",delete:!1,add:!1},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close" ></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{aciklama:{title:"A\xe7\u0131klama",type:"string",filter:!1},aktif:{title:"Aktif mi ?",type:"string",filter:!1},videoUrl:{title:"Video",type:"custom",filter:!1,renderComponent:g.a}}}}return n.prototype.getKategori=function(){var n=this;this.kategoriService.getAtifKategoriService(!0).subscribe(function(e){console.log("data",e),n.kategoriler=e,n.kategoriler.forEach(function(n){n.aktif=n.isAktif?"Aktif":"Pasif"}),n.src=n.kategoriler,console.log("source",n.src)})},n.prototype.onSaveConfirm=function(n){console.log("edit",n.newData),"Aktif"!=n.newData.aktif&&"Pasif"!=n.newData.aktif||(n.newData.isAktif="Aktif"==n.newData.aktif,this.updateAtifKategori(n.newData).subscribe(function(e){e&&n.confirm.resolve(n.newData)}))},n.prototype.updateAtifKategori=function(n){return this.kategoriService.updateAt\u0131fKategori(n)},n.prototype.ngOnInit=function(){this.getKategori(),console.log("kategori sayfas\u0131")},n}(),b=l["\u0275crt"]({encapsulation:0,styles:[[".nb-theme-default   [_nghost-%COMP%]   .full-width[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:220px}.nb-theme-default   [_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 1.5rem 1.5rem}.nb-theme-default   [_nghost-%COMP%]   nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .full-width[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:220px}.nb-theme-cosmic   [_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 1.5rem 1.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .full-width[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:220px}.nb-theme-corporate   [_nghost-%COMP%]   nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 0 1.5rem 1.5rem}.nb-theme-corporate   [_nghost-%COMP%]   nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}"]],data:{}});function y(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,o.f,o.b)),l["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),l["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,o.h,o.d)),l["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),l["\u0275ted"](-1,0,[" Kategoriler "])),(n()(),l["\u0275eld"](7,0,null,1,3,"nb-card-body",[],null,null,null,o.e,o.a)),l["\u0275did"](8,49152,null,0,r.a,[],null,null),(n()(),l["\u0275eld"](9,0,null,0,1,"ng2-smart-table",[],null,[[null,"editConfirm"]],function(n,e,t){var l=!0;return"editConfirm"===e&&(l=!1!==n.component.onSaveConfirm(t)&&l),l},c.b,c.a)),l["\u0275did"](10,573440,null,0,s.a,[],{source:[0,"source"],settings:[1,"settings"]},{editConfirm:"editConfirm"}),(n()(),l["\u0275eld"](11,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),l["\u0275eld"](12,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,o.f,o.b)),l["\u0275did"](13,49152,null,0,r.b,[],null,null),(n()(),l["\u0275eld"](14,0,null,0,2,"nb-card-header",[],null,null,null,o.h,o.d)),l["\u0275did"](15,49152,null,0,r.d,[],null,null),(n()(),l["\u0275ted"](-1,0,[" G\xf6r\xfcnt\xfc "])),(n()(),l["\u0275eld"](17,0,null,1,3,"nb-card-body",[["style","text-align:center"]],null,null,null,o.e,o.a)),l["\u0275did"](18,49152,null,0,r.a,[],null,null),(n()(),l["\u0275eld"](19,0,null,0,1,"video-player",[],null,null,null,u.c,u.a)),l["\u0275did"](20,114688,null,0,d.a,[m.a,f.l],null,null)],function(n,e){var t=e.component;n(e,10,0,t.src,t.settings),n(e,20,0)},function(n,e){n(e,2,1,[l["\u0275nov"](e,3).xxsmall,l["\u0275nov"](e,3).xsmall,l["\u0275nov"](e,3).small,l["\u0275nov"](e,3).medium,l["\u0275nov"](e,3).large,l["\u0275nov"](e,3).xlarge,l["\u0275nov"](e,3).xxlarge,l["\u0275nov"](e,3).active,l["\u0275nov"](e,3).disabled,l["\u0275nov"](e,3).primary,l["\u0275nov"](e,3).info,l["\u0275nov"](e,3).success,l["\u0275nov"](e,3).warning,l["\u0275nov"](e,3).danger,l["\u0275nov"](e,3).hasAccent,l["\u0275nov"](e,3).primaryAccent,l["\u0275nov"](e,3).infoAccent,l["\u0275nov"](e,3).successAccent,l["\u0275nov"](e,3).warningAccent,l["\u0275nov"](e,3).dangerAccent,l["\u0275nov"](e,3).activeAccent,l["\u0275nov"](e,3).disabledAccent]),n(e,12,1,[l["\u0275nov"](e,13).xxsmall,l["\u0275nov"](e,13).xsmall,l["\u0275nov"](e,13).small,l["\u0275nov"](e,13).medium,l["\u0275nov"](e,13).large,l["\u0275nov"](e,13).xlarge,l["\u0275nov"](e,13).xxlarge,l["\u0275nov"](e,13).active,l["\u0275nov"](e,13).disabled,l["\u0275nov"](e,13).primary,l["\u0275nov"](e,13).info,l["\u0275nov"](e,13).success,l["\u0275nov"](e,13).warning,l["\u0275nov"](e,13).danger,l["\u0275nov"](e,13).hasAccent,l["\u0275nov"](e,13).primaryAccent,l["\u0275nov"](e,13).infoAccent,l["\u0275nov"](e,13).successAccent,l["\u0275nov"](e,13).warningAccent,l["\u0275nov"](e,13).dangerAccent,l["\u0275nov"](e,13).activeAccent,l["\u0275nov"](e,13).disabledAccent])})}function C(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"atif-kategori",[],null,null,null,y,b)),l["\u0275did"](1,114688,null,0,h,[v.a],null,null)],function(n,e){n(e,1,0)},null)}var w=l["\u0275ccf"]("atif-kategori",h,C,{},{},[]),A=t("SU4i"),S=t("CG3O"),k=t("3DJ7"),D=function(){function n(n){this.seviyeService=n,this.seviyeler=[],this.source=new S.a,this.loading=!0,this.settings={actions:{columnTitle:"Kategori",mode:"external"},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close" ></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{aciklama:{title:"A\xe7\u0131klama",type:"string"},"s\u0131raNumara":{title:"S\u0131ra Numaras\u0131",type:"string"},aktif:{title:"Aktif mi ?",type:"string"}}}}return n.prototype.ngOnInit=function(){this.getAtifSeviyeAll()},n.prototype.getAtifSeviyeAll=function(){var n=this;this.seviyeService.getAtifSeviyeAll(!0).subscribe(function(e){n.seviyeler=e,n.source.load(n.seviyeler),n.seviyeler.forEach(function(n){n.aktif=n.isAktif?"Aktif":"Pasif"}),console.log("seviyeler",n.seviyeler),n.loading=!1})},n.prototype.deleteAtifSeviye=function(n){return this.seviyeService.deleteAtifSeviye(n)},n.prototype.addAtifSeviye=function(n){return this.seviyeService.addAtifSeviye(n)},n.prototype.onDeleteConfirm=function(n){console.log("ondelete",n.data),window.confirm("Are you sure you want to delete?")?this.deleteAtifSeviye(n.data.id).subscribe(function(e){n.confirm.resolve()}):n.confirm.reject()},n.prototype.updateSeviye=function(n){return this.seviyeService.updateAtifSeviye(n)},n.prototype.onSaveConfirm=function(n){"Aktif"==n.newData.aktif?n.newData.isAktif=!0:"Pasif"==n.newData.aktif?n.newData.isAktif=!1:n.confirm.reject(),n.confirm.resolve(n.newData),this.updateSeviye(n.newData).subscribe(function(n){console.log("data",n)})},n.prototype.onCreateConfirm=function(n){if("Aktif"==n.newData.aktif)n.newData.isAktif=1;else{if("Pasif"!=n.newData.aktif)return void n.confirm.reject();n.newData.isAktif=0}console.log("new Data",n.newData),this.addAtifSeviye(n.newData).subscribe(function(e){e?(n.newData.ID=e.ID,n.confirm.resolve(n.newData)):(console.log("reject"),n.confirm.reject())})},n}(),x=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,10,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,o.f,o.b)),l["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),l["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,o.h,o.d)),l["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),l["\u0275ted"](-1,0,[" Seviyeler "])),(n()(),l["\u0275eld"](7,16777216,null,1,4,"nb-card-body",[["nbSpinnerMessage","Y\xfckleniyor..."],["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null]],null,null,o.e,o.a)),l["\u0275did"](8,49152,null,0,r.a,[],null,null),l["\u0275did"](9,81920,null,0,A.a,[l.ViewContainerRef,l.ComponentFactoryResolver,l.Renderer2,l.ElementRef],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],nbSpinner:[2,"nbSpinner"]},null),(n()(),l["\u0275eld"](10,0,null,0,1,"ng2-smart-table",[],null,[[null,"createConfirm"],[null,"editConfirm"],[null,"deleteConfirm"]],function(n,e,t){var l=!0,i=n.component;return"createConfirm"===e&&(l=!1!==i.onCreateConfirm(t)&&l),"editConfirm"===e&&(l=!1!==i.onSaveConfirm(t)&&l),"deleteConfirm"===e&&(l=!1!==i.onDeleteConfirm(t)&&l),l},c.b,c.a)),l["\u0275did"](11,573440,null,0,s.a,[],{source:[0,"source"],settings:[1,"settings"]},{deleteConfirm:"deleteConfirm",editConfirm:"editConfirm",createConfirm:"createConfirm"})],function(n,e){var t=e.component;n(e,9,0,"Y\xfckleniyor...","success",t.loading),n(e,11,0,t.source,t.settings)},function(n,e){n(e,2,1,[l["\u0275nov"](e,3).xxsmall,l["\u0275nov"](e,3).xsmall,l["\u0275nov"](e,3).small,l["\u0275nov"](e,3).medium,l["\u0275nov"](e,3).large,l["\u0275nov"](e,3).xlarge,l["\u0275nov"](e,3).xxlarge,l["\u0275nov"](e,3).active,l["\u0275nov"](e,3).disabled,l["\u0275nov"](e,3).primary,l["\u0275nov"](e,3).info,l["\u0275nov"](e,3).success,l["\u0275nov"](e,3).warning,l["\u0275nov"](e,3).danger,l["\u0275nov"](e,3).hasAccent,l["\u0275nov"](e,3).primaryAccent,l["\u0275nov"](e,3).infoAccent,l["\u0275nov"](e,3).successAccent,l["\u0275nov"](e,3).warningAccent,l["\u0275nov"](e,3).dangerAccent,l["\u0275nov"](e,3).activeAccent,l["\u0275nov"](e,3).disabledAccent]),n(e,7,0,l["\u0275nov"](e,9).isSpinnerExist)})}function P(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"atif-seviye",[],null,null,null,M,x)),l["\u0275did"](1,114688,null,0,D,[k.a],null,null)],function(n,e){n(e,1,0)},null)}var O=l["\u0275ccf"]("atif-seviye",D,P,{},{},[]),U=t("yOU1"),B=t("6LsV"),_=function(){function n(n,e){this.soruService=n,this.seviyeSeviyeService=e,this.seviyeDropDownList=[],this.source=new S.a,this.loading=!0}return n.prototype.ngOnInit=function(){this.getSeviyeAll(),this.initializeSettings()},n.prototype.getAtifSoruAll=function(){var n=this;this.soruService.getAt\u0131fSoruAll(!0).subscribe(function(e){n.sorular=e,console.log("sorular at\u0131f",n.sorular),n.sorular.forEach(function(e,t){n.seviyeler.forEach(function(n,t){e["at\u0131fID"]==n.id&&(e.seviyeAdi=n.aciklama)}),e.aktif=e.isAktif?"Aktif":"Pasif"}),n.initializeSettings(),n.source.load(n.sorular),n.loading=!1})},n.prototype.getSeviyeAll=function(){var n=this;this.seviyeSeviyeService.getAtifSeviyeAll(!0).subscribe(function(e){n.seviyeler=e,e.forEach(function(e,t){n.seviyeDropDownList.push({value:e.aciklama,title:e.aciklama})}),console.log("dropdown",n.seviyeDropDownList),n.getAtifSoruAll()})},n.prototype.initializeSettings=function(){this.settings={actions:{columnTitle:"Sorular"},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{seviyeAdi:{title:"Seviyeler",editor:{type:"list",config:{selectText:"Select",list:this.seviyeDropDownList}}},aciklama:{title:"Soru C\xfcmlesi",type:"string"},"s\u0131raNumara":{title:"S\u0131ra Numaras\u0131",type:"string"},aktif:{title:"Aktif mi?",type:"string"},url:{title:"Video",type:"custom",filter:!1,renderComponent:B.a}}}},n.prototype.addAt\u0131fSoru=function(n){return this.soruService.addAt\u0131fSoru(n)},n.prototype.getBySeviye=function(n){var e=this.seviyeler.find(function(e){return e.aciklama==n});return e.id?e.id:-1},n.prototype.deleteAtif=function(n){return this.soruService.deleteAtifSoru(n)},n.prototype.onDeleteConfirm=function(n){window.confirm("Are you sure you want to delete?")?(console.log("event",n),n.data.id>0?this.deleteAtif(n.data.id).subscribe(function(){n.confirm.resolve()}):n.confirm.reject()):n.confirm.reject()},n.prototype.updateAtif=function(n){return this.soruService.updateAt\u0131fSoru(n)},n.prototype.onSaveConfirm=function(n){if("Aktif"==n.newData.aktif)n.newData.isAktif=1;else{if("Pasif"!=n.newData.aktif)return void n.confirm.reject();n.newData.isAktif=0}n.newData["at\u0131fID"]=this.getBySeviye(n.newData.seviyeAdi),this.updateAtif(n.newData).subscribe(function(e){e.id?n.confirm.resolve(n.newData):n.confirm.reject()})},n.prototype.onCreateConfirm=function(n){if("Aktif"==n.newData.aktif)n.newData.isAktif=1;else{if("Pasif"!=n.newData.aktif)return void n.confirm.reject();n.newData.isAktif=0}n.newData["at\u0131fID"]=this.getBySeviye(n.newData.seviyeAdi),this.addAt\u0131fSoru(n.newData).subscribe(function(e){e.id?(console.log("event data",n),n.newData.id=e.id,n.confirm.resolve(n.newData)):n.confirm.reject()})},n}(),T=l["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function V(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(n()(),l["\u0275eld"](1,0,null,null,10,"div",[["class","col-md-7"]],null,null,null,null,null)),(n()(),l["\u0275eld"](2,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,o.f,o.b)),l["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),l["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,o.h,o.d)),l["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),l["\u0275ted"](-1,0,[" Sorular "])),(n()(),l["\u0275eld"](7,16777216,null,1,4,"nb-card-body",[["nbSpinnerMessage","Y\xfckleniyor..."],["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null]],null,null,o.e,o.a)),l["\u0275did"](8,49152,null,0,r.a,[],null,null),l["\u0275did"](9,81920,null,0,A.a,[l.ViewContainerRef,l.ComponentFactoryResolver,l.Renderer2,l.ElementRef],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],nbSpinner:[2,"nbSpinner"]},null),(n()(),l["\u0275eld"](10,0,null,0,1,"ng2-smart-table",[],null,[[null,"createConfirm"],[null,"editConfirm"],[null,"deleteConfirm"]],function(n,e,t){var l=!0,i=n.component;return"createConfirm"===e&&(l=!1!==i.onCreateConfirm(t)&&l),"editConfirm"===e&&(l=!1!==i.onSaveConfirm(t)&&l),"deleteConfirm"===e&&(l=!1!==i.onDeleteConfirm(t)&&l),l},c.b,c.a)),l["\u0275did"](11,573440,null,0,s.a,[],{source:[0,"source"],settings:[1,"settings"]},{deleteConfirm:"deleteConfirm",editConfirm:"editConfirm",createConfirm:"createConfirm"}),(n()(),l["\u0275eld"](12,0,null,null,9,"div",[["class","col-md-4"],["id","sagdakayan"],["style","position: fixed; right: 10px; z-index: 1;"]],null,null,null,null,null)),(n()(),l["\u0275eld"](13,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,o.f,o.b)),l["\u0275did"](14,49152,null,0,r.b,[],null,null),(n()(),l["\u0275eld"](15,0,null,0,2,"nb-card-header",[],null,null,null,o.h,o.d)),l["\u0275did"](16,49152,null,0,r.d,[],null,null),(n()(),l["\u0275ted"](-1,0,[" G\xf6r\xfcnt\xfc "])),(n()(),l["\u0275eld"](18,0,null,1,3,"nb-card-body",[["style","text-align:center"]],null,null,null,o.e,o.a)),l["\u0275did"](19,49152,null,0,r.a,[],null,null),(n()(),l["\u0275eld"](20,0,null,0,1,"video-player",[],null,null,null,u.c,u.a)),l["\u0275did"](21,114688,null,0,d.a,[m.a,f.l],null,null)],function(n,e){var t=e.component;n(e,9,0,"Y\xfckleniyor...","success",t.loading),n(e,11,0,t.source,t.settings),n(e,21,0)},function(n,e){n(e,2,1,[l["\u0275nov"](e,3).xxsmall,l["\u0275nov"](e,3).xsmall,l["\u0275nov"](e,3).small,l["\u0275nov"](e,3).medium,l["\u0275nov"](e,3).large,l["\u0275nov"](e,3).xlarge,l["\u0275nov"](e,3).xxlarge,l["\u0275nov"](e,3).active,l["\u0275nov"](e,3).disabled,l["\u0275nov"](e,3).primary,l["\u0275nov"](e,3).info,l["\u0275nov"](e,3).success,l["\u0275nov"](e,3).warning,l["\u0275nov"](e,3).danger,l["\u0275nov"](e,3).hasAccent,l["\u0275nov"](e,3).primaryAccent,l["\u0275nov"](e,3).infoAccent,l["\u0275nov"](e,3).successAccent,l["\u0275nov"](e,3).warningAccent,l["\u0275nov"](e,3).dangerAccent,l["\u0275nov"](e,3).activeAccent,l["\u0275nov"](e,3).disabledAccent]),n(e,7,0,l["\u0275nov"](e,9).isSpinnerExist),n(e,13,1,[l["\u0275nov"](e,14).xxsmall,l["\u0275nov"](e,14).xsmall,l["\u0275nov"](e,14).small,l["\u0275nov"](e,14).medium,l["\u0275nov"](e,14).large,l["\u0275nov"](e,14).xlarge,l["\u0275nov"](e,14).xxlarge,l["\u0275nov"](e,14).active,l["\u0275nov"](e,14).disabled,l["\u0275nov"](e,14).primary,l["\u0275nov"](e,14).info,l["\u0275nov"](e,14).success,l["\u0275nov"](e,14).warning,l["\u0275nov"](e,14).danger,l["\u0275nov"](e,14).hasAccent,l["\u0275nov"](e,14).primaryAccent,l["\u0275nov"](e,14).infoAccent,l["\u0275nov"](e,14).successAccent,l["\u0275nov"](e,14).warningAccent,l["\u0275nov"](e,14).dangerAccent,l["\u0275nov"](e,14).activeAccent,l["\u0275nov"](e,14).disabledAccent])})}function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"atif-soru",[],null,null,null,V,T)),l["\u0275did"](1,114688,null,0,_,[U.a,k.a],null,null)],function(n,e){n(e,1,0)},null)}var R=l["\u0275ccf"]("atif-soru",_,I,{},{},[]),z=t("fdPT"),E=t("MoCo"),j=t("cdOV"),K=t("9AJC"),G=t("8VM6"),N=t("Xoj0"),F=t("4/Py"),L=t("8DeE"),q=t("y9XU"),H=t("y1sj"),Y=t("cMIS"),J=t("H1uz"),Z=t("H6Y4"),X=t("byrr"),Q=t("0HQI"),W=t("81d9"),$=t("TCYN"),nn=t("T4um"),en=t("W13n"),tn=t("olH8"),ln=t("SSyH"),an=t("Thg9"),on=t("zE4a"),rn=t("hAd3"),cn=t("Ip0R"),sn=t("gIcY"),un=t("nA+Y"),dn=t("eDkP"),mn=t("Fzqc"),fn=t("U4uc"),pn=t("4GxJ"),vn=t("AKna"),gn=t("Bvtr"),hn=t("gpGP"),bn=t("t/Na"),yn=t("u1Dc"),Cn=function(){return function(){}}(),wn=t("P8+w"),An=t("Ku2q"),Sn=t("w//a"),kn=t("rNHn"),Dn=t("3Zza"),xn=t("V6uK"),Mn=t("6wBL"),Pn=t("GUlP"),On=t("niCt"),Un=t("UIEa"),Bn=t("o0Gp"),_n=t("M18m"),Tn=t("zTyf"),Vn=t("TcUH"),In=t("4c35"),Rn=t("dWZg"),zn=t("qAlS"),En=t("hle7"),jn=t("lOUe"),Kn=t("yHPJ"),Gn=t("wZaT"),Nn=t("GGqN"),Fn=t("tSKX"),Ln=t("uLH1"),qn=t("WCnA"),Hn=t("DiBj"),Yn=t("TvC7"),Jn=t("7qhI"),Zn=t("aTFX"),Xn=t("7fDR"),Qn=t("y3Bk"),Wn=t("IR2U"),$n=t("sE+l"),ne=t("9mtI"),ee=t("SdSL"),te=t("GF5i"),le=t("ZMzl"),ie=t("tt4K"),ae=t("eBEu"),oe=t("MMI5"),re=t("vTDv"),ce=t("7uma"),se=t("VDLQ"),ue=t("NrAT"),de=t("m1S1"),me=t("WBAi"),fe=t("mbdJ"),pe=t("6t6V"),ve=t("kmuJ"),ge=t("2Z+H"),he=t("qQl2"),be=t("mnB0"),ye=t("9BGC"),Ce=t("CqVu"),we=t("T1If"),Ae=t("0Ird"),Se=t("l+uZ"),ke=t("vkGH");t.d(e,"AtifModuleNgFactory",function(){return De});var De=l["\u0275cmf"](i,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,w,O,R,z.a,E.a,j.a,K.a,K.b,K.g,K.c,K.d,K.e,K.f,G.a,N.a,F.a,L.a,L.b,q.a,H.a,Y.a,J.a,Z.a,X.a,Q.a,W.a,$.a,nn.a,en.a,tn.a,ln.a,an.a,on.a,rn.a,u.b]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,cn.n,cn.m,[l.LOCALE_ID,[2,cn.E]]),l["\u0275mpd"](4608,sn.B,sn.B,[]),l["\u0275mpd"](4608,sn.e,sn.e,[]),l["\u0275mpd"](4608,un.a,un.a,[f.l]),l["\u0275mpd"](4608,dn.d,dn.d,[dn.k,dn.f,l.ComponentFactoryResolver,dn.i,dn.g,l.Injector,l.NgZone,cn.c,mn.b,[2,cn.h]]),l["\u0275mpd"](5120,dn.l,dn.m,[dn.d]),l["\u0275mpd"](4608,fn.a,fn.a,[]),l["\u0275mpd"](4608,pn.t,pn.t,[l.ComponentFactoryResolver,l.Injector,pn.R,pn.u]),l["\u0275mpd"](4608,vn.a,gn.a,[l.LOCALE_ID]),l["\u0275mpd"](4608,cn.d,cn.d,[l.LOCALE_ID]),l["\u0275mpd"](4608,hn.a,hn.a,[vn.a]),l["\u0275mpd"](4608,bn.n,bn.t,[cn.c,l.PLATFORM_ID,bn.r]),l["\u0275mpd"](4608,bn.u,bn.u,[bn.n,bn.s]),l["\u0275mpd"](5120,bn.a,function(n){return[n]},[bn.u]),l["\u0275mpd"](4608,bn.q,bn.q,[]),l["\u0275mpd"](6144,bn.o,null,[bn.q]),l["\u0275mpd"](4608,bn.m,bn.m,[bn.o]),l["\u0275mpd"](6144,bn.b,null,[bn.m]),l["\u0275mpd"](4608,bn.h,bn.p,[bn.b,l.Injector]),l["\u0275mpd"](4608,bn.c,bn.c,[bn.h]),l["\u0275mpd"](4608,yn.i,yn.i,[]),l["\u0275mpd"](4608,yn.k,yn.k,[bn.c]),l["\u0275mpd"](4608,yn.c,yn.c,[yn.i,yn.k]),l["\u0275mpd"](1073742336,cn.b,cn.b,[]),l["\u0275mpd"](1073742336,f.o,f.o,[[2,f.u],[2,f.l]]),l["\u0275mpd"](1073742336,Cn,Cn,[]),l["\u0275mpd"](1073742336,sn.z,sn.z,[]),l["\u0275mpd"](1073742336,sn.j,sn.j,[]),l["\u0275mpd"](1073742336,sn.v,sn.v,[]),l["\u0275mpd"](1073742336,wn.a,wn.a,[]),l["\u0275mpd"](1073742336,An.a,An.a,[]),l["\u0275mpd"](1073742336,Sn.a,Sn.a,[]),l["\u0275mpd"](1073742336,kn.a,kn.a,[]),l["\u0275mpd"](1073742336,Dn.a,Dn.a,[]),l["\u0275mpd"](1073742336,xn.a,xn.a,[]),l["\u0275mpd"](1073742336,Mn.a,Mn.a,[]),l["\u0275mpd"](1073742336,Pn.a,Pn.a,[]),l["\u0275mpd"](1073742336,On.a,On.a,[]),l["\u0275mpd"](1073742336,Un.a,Un.a,[]),l["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),l["\u0275mpd"](1073742336,_n.a,_n.a,[]),l["\u0275mpd"](1073742336,Tn.a,Tn.a,[]),l["\u0275mpd"](1073742336,Vn.a,Vn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,In.f,In.f,[]),l["\u0275mpd"](1073742336,Rn.b,Rn.b,[]),l["\u0275mpd"](1073742336,zn.b,zn.b,[]),l["\u0275mpd"](1073742336,dn.h,dn.h,[]),l["\u0275mpd"](1073742336,En.a,En.a,[]),l["\u0275mpd"](1073742336,jn.a,jn.a,[]),l["\u0275mpd"](1073742336,Kn.a,Kn.a,[]),l["\u0275mpd"](1073742336,Gn.a,Gn.a,[]),l["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),l["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),l["\u0275mpd"](1073742336,Ln.a,Ln.a,[]),l["\u0275mpd"](1073742336,pn.c,pn.c,[]),l["\u0275mpd"](1073742336,pn.f,pn.f,[]),l["\u0275mpd"](1073742336,pn.g,pn.g,[]),l["\u0275mpd"](1073742336,pn.k,pn.k,[]),l["\u0275mpd"](1073742336,pn.l,pn.l,[]),l["\u0275mpd"](1073742336,pn.q,pn.q,[]),l["\u0275mpd"](1073742336,pn.r,pn.r,[]),l["\u0275mpd"](1073742336,pn.v,pn.v,[]),l["\u0275mpd"](1073742336,pn.z,pn.z,[]),l["\u0275mpd"](1073742336,pn.A,pn.A,[]),l["\u0275mpd"](1073742336,pn.D,pn.D,[]),l["\u0275mpd"](1073742336,pn.G,pn.G,[]),l["\u0275mpd"](1073742336,pn.J,pn.J,[]),l["\u0275mpd"](1073742336,pn.N,pn.N,[]),l["\u0275mpd"](1073742336,pn.O,pn.O,[]),l["\u0275mpd"](1073742336,pn.P,pn.P,[]),l["\u0275mpd"](1073742336,pn.w,pn.w,[]),l["\u0275mpd"](1073742336,qn.a,qn.a,[]),l["\u0275mpd"](1073742336,Hn.a,Hn.a,[]),l["\u0275mpd"](1073742336,Yn.a,Yn.a,[]),l["\u0275mpd"](1073742336,Jn.a,Jn.a,[]),l["\u0275mpd"](1073742336,Zn.a,Zn.a,[]),l["\u0275mpd"](1073742336,Xn.a,Xn.a,[]),l["\u0275mpd"](1073742336,Qn.a,Qn.a,[]),l["\u0275mpd"](1073742336,Wn.a,Wn.a,[]),l["\u0275mpd"](1073742336,$n.a,$n.a,[]),l["\u0275mpd"](1073742336,ne.a,ne.a,[]),l["\u0275mpd"](1073742336,ee.a,ee.a,[]),l["\u0275mpd"](1073742336,te.a,te.a,[]),l["\u0275mpd"](1073742336,le.a,le.a,[]),l["\u0275mpd"](1073742336,ie.a,ie.a,[]),l["\u0275mpd"](1073742336,ae.a,ae.a,[]),l["\u0275mpd"](1073742336,oe.a,oe.a,[]),l["\u0275mpd"](1073742336,re.a,re.a,[]),l["\u0275mpd"](1073742336,ce.a,ce.a,[]),l["\u0275mpd"](1073742336,bn.e,bn.e,[]),l["\u0275mpd"](1073742336,bn.d,bn.d,[]),l["\u0275mpd"](1073742336,yn.j,yn.j,[]),l["\u0275mpd"](1073742336,se.a,se.a,[]),l["\u0275mpd"](1073742336,ue.a,ue.a,[]),l["\u0275mpd"](1073742336,de.a,de.a,[]),l["\u0275mpd"](1073742336,me.a,me.a,[]),l["\u0275mpd"](1073742336,fe.a,fe.a,[]),l["\u0275mpd"](1073742336,pe.a,pe.a,[]),l["\u0275mpd"](1073742336,ve.a,ve.a,[]),l["\u0275mpd"](1073742336,ge.a,ge.a,[]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](1024,f.j,function(){return[[{path:"",children:[{path:"kategori",component:h},{path:"seviye",component:D},{path:"soru",component:_}]}],[{path:"",children:[{path:"kategori",component:he.a},{path:"seviye",component:be.a},{path:"soru",component:ye.a},{path:"secenek",component:Ce.a},{path:"kullanici",component:we.a},{path:"kullaniciIlerleme",component:Ae.a},{path:"chat",component:Se.a},{path:"soruFotograf",component:ke.a}]}]]},[]),l["\u0275mpd"](256,bn.r,"XSRF-TOKEN",[]),l["\u0275mpd"](256,bn.s,"X-XSRF-TOKEN",[])])})}}]);