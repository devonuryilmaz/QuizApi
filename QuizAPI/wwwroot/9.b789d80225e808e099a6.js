(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{aPeO:function(n,e,l){"use strict";l.r(e);var a=l("CcnG"),t=function(){return function(){}}(),o=l("pMnS"),i=l("4bAE"),r=l("mc3f"),u=l("+ImT"),c=l("Qq3i"),d=l("MNmR"),s=l("0ldR"),m=l("2Vpx"),v=l("ZYCi"),p=l("9py3"),f=l("Coom"),g=function(){function n(n){this.kategoriService=n,this.settings={hideSubHeader:!0,actions:{columnTitle:"Kategori",mode:"external",delete:!1,add:!1},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close" ></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{aciklama:{title:"A\xe7\u0131klama",type:"string",filter:!1},aktif:{title:"Aktif mi ?",type:"string",filter:!1},videoUrl:{title:"Video",type:"custom",filter:!1,renderComponent:f.a}}}}return n.prototype.getKategori=function(){var n=this;this.kategoriService.getGazeKategoriService(!0).subscribe(function(e){console.log("data",e),n.kategoriler=e,n.kategoriler.forEach(function(n){n.aktif=n.isAktif?"Aktif":"Pasif"}),n.src=n.kategoriler,console.log("source",n.src)})},n.prototype.onSaveConfirm=function(n){console.log("edit",n.newData),"Aktif"!=n.newData.aktif&&"Pasif"!=n.newData.aktif||(n.newData.isAktif="Aktif"==n.newData.aktif,this.updateGazeKategori(n.newData).subscribe(function(e){e&&n.confirm.resolve(n.newData)}))},n.prototype.updateGazeKategori=function(n){return this.kategoriService.updateGazeKategori(n)},n.prototype.ngOnInit=function(){this.getKategori(),console.log("kategori sayfas\u0131")},n}(),y=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function D(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" Kategoriler "])),(n()(),a["\u0275eld"](7,0,null,1,3,"nb-card-body",[],null,null,null,i.e,i.a)),a["\u0275did"](8,49152,null,0,r.a,[],null,null),(n()(),a["\u0275eld"](9,0,null,0,1,"ng2-smart-table",[],null,[[null,"editConfirm"]],function(n,e,l){var a=!0;return"editConfirm"===e&&(a=!1!==n.component.onSaveConfirm(l)&&a),a},u.b,u.a)),a["\u0275did"](10,573440,null,0,c.a,[],{source:[0,"source"],settings:[1,"settings"]},{editConfirm:"editConfirm"}),(n()(),a["\u0275eld"](11,0,null,null,9,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),a["\u0275eld"](12,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](13,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](14,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](15,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" G\xf6r\xfcnt\xfc "])),(n()(),a["\u0275eld"](17,0,null,1,3,"nb-card-body",[["style","text-align:center"]],null,null,null,i.e,i.a)),a["\u0275did"](18,49152,null,0,r.a,[],null,null),(n()(),a["\u0275eld"](19,0,null,0,1,"video-player",[],null,null,null,d.c,d.a)),a["\u0275did"](20,114688,null,0,s.a,[m.a,v.l],null,null)],function(n,e){var l=e.component;n(e,10,0,l.src,l.settings),n(e,20,0)},function(n,e){n(e,2,1,[a["\u0275nov"](e,3).xxsmall,a["\u0275nov"](e,3).xsmall,a["\u0275nov"](e,3).small,a["\u0275nov"](e,3).medium,a["\u0275nov"](e,3).large,a["\u0275nov"](e,3).xlarge,a["\u0275nov"](e,3).xxlarge,a["\u0275nov"](e,3).active,a["\u0275nov"](e,3).disabled,a["\u0275nov"](e,3).primary,a["\u0275nov"](e,3).info,a["\u0275nov"](e,3).success,a["\u0275nov"](e,3).warning,a["\u0275nov"](e,3).danger,a["\u0275nov"](e,3).hasAccent,a["\u0275nov"](e,3).primaryAccent,a["\u0275nov"](e,3).infoAccent,a["\u0275nov"](e,3).successAccent,a["\u0275nov"](e,3).warningAccent,a["\u0275nov"](e,3).dangerAccent,a["\u0275nov"](e,3).activeAccent,a["\u0275nov"](e,3).disabledAccent]),n(e,12,1,[a["\u0275nov"](e,13).xxsmall,a["\u0275nov"](e,13).xsmall,a["\u0275nov"](e,13).small,a["\u0275nov"](e,13).medium,a["\u0275nov"](e,13).large,a["\u0275nov"](e,13).xlarge,a["\u0275nov"](e,13).xxlarge,a["\u0275nov"](e,13).active,a["\u0275nov"](e,13).disabled,a["\u0275nov"](e,13).primary,a["\u0275nov"](e,13).info,a["\u0275nov"](e,13).success,a["\u0275nov"](e,13).warning,a["\u0275nov"](e,13).danger,a["\u0275nov"](e,13).hasAccent,a["\u0275nov"](e,13).primaryAccent,a["\u0275nov"](e,13).infoAccent,a["\u0275nov"](e,13).successAccent,a["\u0275nov"](e,13).warningAccent,a["\u0275nov"](e,13).dangerAccent,a["\u0275nov"](e,13).activeAccent,a["\u0275nov"](e,13).disabledAccent])})}function b(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"gaze",[],null,null,null,D,y)),a["\u0275did"](1,114688,null,0,g,[p.a],null,null)],function(n,e){n(e,1,0)},null)}var w=a["\u0275ccf"]("gaze",g,b,{},{},[]),h=l("SU4i"),S=l("CG3O"),C=l("3DJ7"),A=function(){function n(n){this.seviyeService=n,this.seviyeler=[],this.source=new S.a,this.loading=!0,this.settings={actions:{columnTitle:"Kategori",mode:"external"},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close" ></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{aciklama:{title:"A\xe7\u0131klama",type:"string"},"s\u0131raNumaras\u0131":{title:"S\u0131ra Numaras\u0131",type:"string"},aktif:{title:"Aktif mi ?",type:"string"}}}}return n.prototype.ngOnInit=function(){this.getGazeCastSeviyeSeviyeSeviyeAll()},n.prototype.getGazeCastSeviyeSeviyeSeviyeAll=function(){var n=this;this.seviyeService.getGazeCastSeviyeSeviyeAll(!0).subscribe(function(e){n.seviyeler=e,n.source.load(n.seviyeler),n.seviyeler.forEach(function(n){n.aktif=n.isAktif?"Aktif":"Pasif"}),console.log("seviyeler",n.seviyeler),n.loading=!1})},n.prototype.deleteGazeCastSeviyeSeviyeSeviye=function(n){return this.seviyeService.deleteGazeCastSeviyeSeviye(n)},n.prototype.addGazeCastSeviyeSeviyeSeviye=function(n){return this.seviyeService.addGazeCastSeviyeSeviye(n)},n.prototype.onDeleteConfirm=function(n){console.log("ondelete",n.data),window.confirm("Are you sure you want to delete?")?this.deleteGazeCastSeviyeSeviyeSeviye(n.data.id).subscribe(function(e){n.confirm.resolve()}):n.confirm.reject()},n.prototype.updateSeviye=function(n){return this.seviyeService.updateGazeCastSeviyeSeviye(n)},n.prototype.onSaveConfirm=function(n){"Aktif"==n.newData.aktif?n.newData.isAktif=!0:"Pasif"==n.newData.aktif?n.newData.isAktif=!1:n.confirm.reject(),n.confirm.resolve(n.newData),this.updateSeviye(n.newData).subscribe(function(n){console.log("data",n)})},n.prototype.onCreateConfirm=function(n){if("Aktif"==n.newData.aktif)n.newData.isAktif=1;else{if("Pasif"!=n.newData.aktif)return void n.confirm.reject();n.newData.isAktif=0}console.log("new Data",n.newData),this.addGazeCastSeviyeSeviyeSeviye(n.newData).subscribe(function(e){e?(n.newData.ID=e.ID,n.confirm.resolve(n.newData)):(console.log("reject"),n.confirm.reject())})},n}(),k=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,10,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" Seviyeler "])),(n()(),a["\u0275eld"](7,16777216,null,1,4,"nb-card-body",[["nbSpinnerMessage","Y\xfckleniyor..."],["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null]],null,null,i.e,i.a)),a["\u0275did"](8,49152,null,0,r.a,[],null,null),a["\u0275did"](9,81920,null,0,h.a,[a.ViewContainerRef,a.ComponentFactoryResolver,a.Renderer2,a.ElementRef],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],nbSpinner:[2,"nbSpinner"]},null),(n()(),a["\u0275eld"](10,0,null,0,1,"ng2-smart-table",[],null,[[null,"createConfirm"],[null,"editConfirm"],[null,"deleteConfirm"]],function(n,e,l){var a=!0,t=n.component;return"createConfirm"===e&&(a=!1!==t.onCreateConfirm(l)&&a),"editConfirm"===e&&(a=!1!==t.onSaveConfirm(l)&&a),"deleteConfirm"===e&&(a=!1!==t.onDeleteConfirm(l)&&a),a},u.b,u.a)),a["\u0275did"](11,573440,null,0,c.a,[],{source:[0,"source"],settings:[1,"settings"]},{deleteConfirm:"deleteConfirm",editConfirm:"editConfirm",createConfirm:"createConfirm"})],function(n,e){var l=e.component;n(e,9,0,"Y\xfckleniyor...","success",l.loading),n(e,11,0,l.source,l.settings)},function(n,e){n(e,2,1,[a["\u0275nov"](e,3).xxsmall,a["\u0275nov"](e,3).xsmall,a["\u0275nov"](e,3).small,a["\u0275nov"](e,3).medium,a["\u0275nov"](e,3).large,a["\u0275nov"](e,3).xlarge,a["\u0275nov"](e,3).xxlarge,a["\u0275nov"](e,3).active,a["\u0275nov"](e,3).disabled,a["\u0275nov"](e,3).primary,a["\u0275nov"](e,3).info,a["\u0275nov"](e,3).success,a["\u0275nov"](e,3).warning,a["\u0275nov"](e,3).danger,a["\u0275nov"](e,3).hasAccent,a["\u0275nov"](e,3).primaryAccent,a["\u0275nov"](e,3).infoAccent,a["\u0275nov"](e,3).successAccent,a["\u0275nov"](e,3).warningAccent,a["\u0275nov"](e,3).dangerAccent,a["\u0275nov"](e,3).activeAccent,a["\u0275nov"](e,3).disabledAccent]),n(e,7,0,a["\u0275nov"](e,9).isSpinnerExist)})}function M(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"gaze-seviye",[],null,null,null,x,k)),a["\u0275did"](1,114688,null,0,A,[C.a],null,null)],function(n,e){n(e,1,0)},null)}var z=a["\u0275ccf"]("gaze-seviye",A,M,{},{},[]),T=l("yOU1"),P=l("6LsV"),Y=function(){function n(n,e){this.soruService=n,this.seviyeSeviyeService=e,this.loading=!0,this.seviyeDropDownList=[],this.source=new S.a}return n.prototype.ngOnInit=function(){this.getSeviyeAll(),this.initializeSettings()},n.prototype.getAtifSoruAll=function(){var n=this;this.soruService.getGazeSoruAll(!0).subscribe(function(e){n.sorular=e,console.log("sorular gaze",n.sorular),n.sorular.forEach(function(e,l){n.seviyeler.forEach(function(n,l){e.gazeCastID==n.id&&(e.seviyeAdi=n.aciklama)}),e.aktif=e.isAktif?"Aktif":"Pasif"}),n.initializeSettings(),n.source.load(n.sorular),n.loading=!1})},n.prototype.getSeviyeAll=function(){var n=this;this.seviyeSeviyeService.getGazeCastSeviyeSeviyeAll(!0).subscribe(function(e){n.seviyeler=e,e.forEach(function(e,l){n.seviyeDropDownList.push({value:e.aciklama,title:e.aciklama})}),console.log("dropdown",n.seviyeDropDownList),n.getAtifSoruAll()})},n.prototype.initializeSettings=function(){this.settings={actions:{columnTitle:"Sorular"},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{seviyeAdi:{title:"Seviyeler",editor:{type:"list",config:{selectText:"Select",list:this.seviyeDropDownList}}},aciklama:{title:"Soru C\xfcmlesi",type:"string"},"s\u0131raNumarasi":{title:"S\u0131ra Numaras\u0131",type:"string"},aktif:{title:"Aktif mi?",type:"string"},videoUrl:{title:"Video",type:"custom",filter:!1,renderComponent:P.a}}}},n.prototype.addAt\u0131fSoru=function(n){return this.soruService.addGazeSoru(n)},n.prototype.getBySeviye=function(n){var e=this.seviyeler.find(function(e){return e.aciklama==n});return e.id?e.id:-1},n.prototype.deleteAtif=function(n){return this.soruService.deleteGazeSoru(n)},n.prototype.onDeleteConfirm=function(n){window.confirm("Are you sure you want to delete?")?(console.log("event",n.data.id),n.data.id>0?this.deleteAtif(n.data.id).subscribe(function(){n.confirm.resolve()}):n.confirm.reject()):n.confirm.reject()},n.prototype.updateAtif=function(n){return this.soruService.updateGazeSoru(n)},n.prototype.onSaveConfirm=function(n){if("Aktif"==n.newData.aktif)n.newData.isAktif=1;else{if("Pasif"!=n.newData.aktif)return void n.confirm.reject();n.newData.isAktif=0}n.newData.gazeCastID=this.getBySeviye(n.newData.seviyeAdi),this.updateAtif(n.newData).subscribe(function(e){e.id?n.confirm.resolve(n.newData):n.confirm.reject()})},n.prototype.onCreateConfirm=function(n){if("Aktif"==n.newData.aktif)n.newData.isAktif=1;else{if("Pasif"!=n.newData.aktif)return void n.confirm.reject();n.newData.isAktif=0}n.newData.gazeCastID=this.getBySeviye(n.newData.seviyeAdi),this.addAt\u0131fSoru(n.newData).subscribe(function(e){e.id?(n.newData.id=e.id,n.confirm.resolve(n.newData)):n.confirm.reject()})},n}(),G=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function B(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,10,"div",[["class","col-md-7"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" Sorular "])),(n()(),a["\u0275eld"](7,16777216,null,1,4,"nb-card-body",[["nbSpinnerMessage","Y\xfckleniyor..."],["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null]],null,null,i.e,i.a)),a["\u0275did"](8,49152,null,0,r.a,[],null,null),a["\u0275did"](9,81920,null,0,h.a,[a.ViewContainerRef,a.ComponentFactoryResolver,a.Renderer2,a.ElementRef],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],nbSpinner:[2,"nbSpinner"]},null),(n()(),a["\u0275eld"](10,0,null,0,1,"ng2-smart-table",[],null,[[null,"createConfirm"],[null,"editConfirm"],[null,"deleteConfirm"]],function(n,e,l){var a=!0,t=n.component;return"createConfirm"===e&&(a=!1!==t.onCreateConfirm(l)&&a),"editConfirm"===e&&(a=!1!==t.onSaveConfirm(l)&&a),"deleteConfirm"===e&&(a=!1!==t.onDeleteConfirm(l)&&a),a},u.b,u.a)),a["\u0275did"](11,573440,null,0,c.a,[],{source:[0,"source"],settings:[1,"settings"]},{deleteConfirm:"deleteConfirm",editConfirm:"editConfirm",createConfirm:"createConfirm"}),(n()(),a["\u0275eld"](12,0,null,null,9,"div",[["class","col-md-4"],["id","sagdakayan"],["style","position: fixed; right: 10px; z-index: 1;"]],null,null,null,null,null)),(n()(),a["\u0275eld"](13,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](14,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](15,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](16,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" G\xf6r\xfcnt\xfc "])),(n()(),a["\u0275eld"](18,0,null,1,3,"nb-card-body",[["style","text-align:center"]],null,null,null,i.e,i.a)),a["\u0275did"](19,49152,null,0,r.a,[],null,null),(n()(),a["\u0275eld"](20,0,null,0,1,"video-player",[],null,null,null,d.c,d.a)),a["\u0275did"](21,114688,null,0,s.a,[m.a,v.l],null,null)],function(n,e){var l=e.component;n(e,9,0,"Y\xfckleniyor...","success",l.loading),n(e,11,0,l.source,l.settings),n(e,21,0)},function(n,e){n(e,2,1,[a["\u0275nov"](e,3).xxsmall,a["\u0275nov"](e,3).xsmall,a["\u0275nov"](e,3).small,a["\u0275nov"](e,3).medium,a["\u0275nov"](e,3).large,a["\u0275nov"](e,3).xlarge,a["\u0275nov"](e,3).xxlarge,a["\u0275nov"](e,3).active,a["\u0275nov"](e,3).disabled,a["\u0275nov"](e,3).primary,a["\u0275nov"](e,3).info,a["\u0275nov"](e,3).success,a["\u0275nov"](e,3).warning,a["\u0275nov"](e,3).danger,a["\u0275nov"](e,3).hasAccent,a["\u0275nov"](e,3).primaryAccent,a["\u0275nov"](e,3).infoAccent,a["\u0275nov"](e,3).successAccent,a["\u0275nov"](e,3).warningAccent,a["\u0275nov"](e,3).dangerAccent,a["\u0275nov"](e,3).activeAccent,a["\u0275nov"](e,3).disabledAccent]),n(e,7,0,a["\u0275nov"](e,9).isSpinnerExist),n(e,13,1,[a["\u0275nov"](e,14).xxsmall,a["\u0275nov"](e,14).xsmall,a["\u0275nov"](e,14).small,a["\u0275nov"](e,14).medium,a["\u0275nov"](e,14).large,a["\u0275nov"](e,14).xlarge,a["\u0275nov"](e,14).xxlarge,a["\u0275nov"](e,14).active,a["\u0275nov"](e,14).disabled,a["\u0275nov"](e,14).primary,a["\u0275nov"](e,14).info,a["\u0275nov"](e,14).success,a["\u0275nov"](e,14).warning,a["\u0275nov"](e,14).danger,a["\u0275nov"](e,14).hasAccent,a["\u0275nov"](e,14).primaryAccent,a["\u0275nov"](e,14).infoAccent,a["\u0275nov"](e,14).successAccent,a["\u0275nov"](e,14).warningAccent,a["\u0275nov"](e,14).dangerAccent,a["\u0275nov"](e,14).activeAccent,a["\u0275nov"](e,14).disabledAccent])})}function I(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"gaze-soru",[],null,null,null,B,G)),a["\u0275did"](1,114688,null,0,Y,[T.a,C.a],null,null)],function(n,e){n(e,1,0)},null)}var E=a["\u0275ccf"]("gaze-soru",Y,I,{},{},[]),R=l("EM8U"),j=l("oQX8"),F=l("dH2P"),L=l("RSfO"),O=l("v1Hh"),N=l("olNE"),K=l("WE1F"),q=l("ViqO"),H=l("79XY"),V=function(){function n(n,e){this.secenekService=n,this.soruService=e,this.loading=!0,this.seviyeDropDownList=[],this.source=new S.a}return n.prototype.ngOnInit=function(){this.getSoruAll(),this.initializeSettings()},n.prototype.getGazeCevapAll=function(){var n=this;this.secenekService.getGazeCevapAll().subscribe(function(e){n.gazeCevap=e,console.log("gaze cevaplar",n.gazeCevap),n.gazeCevap.forEach(function(e,l){n.sorular.forEach(function(n,l){e.gazeCastSoruID==n.id&&(e.soruAdi=n.aciklama)}),e.dogruMu1=1==e.photo1isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu2=1==e.photo2isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu3=1==e.photo3isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu4=1==e.photo4isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu5=1==e.photo5isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu6=1==e.photo6isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu7=1==e.photo7isTrue?"Do\u011fru":"Yanl\u0131\u015f",e.dogruMu8=1==e.photo8isTrue?"Do\u011fru":"Yanl\u0131\u015f"}),n.initializeSettings(),n.source.load(n.gazeCevap),n.loading=!1})},n.prototype.getSoruAll=function(){var n=this;this.soruService.getGazeSoruAll(!0).subscribe(function(e){n.sorular=e,console.log("sorular",n.sorular),e.forEach(function(e,l){n.seviyeDropDownList.push({value:e.aciklama,title:e.aciklama})}),n.getGazeCevapAll()})},n.prototype.initializeSettings=function(){this.settings={actions:{columnTitle:"Sorular"},add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{soruAdi:{title:"Sorular",editor:{type:"list",config:{selectText:"Select",list:this.seviyeDropDownList}}},url1:{title:"Foto\u011fraf1",type:"custom",editable:!1,filter:!1,renderComponent:j.a,isAdd:!1},dogruMu1:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url2:{title:"Foto\u011fraf2",type:"custom",editable:!1,filter:!1,renderComponent:F.a},dogruMu2:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url3:{title:"Foto\u011fraf3",type:"custom",editable:!1,filter:!1,renderComponent:L.a},dogruMu3:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url4:{title:"Foto\u011fraf4",type:"custom",editable:!1,filter:!1,renderComponent:O.a},dogruMu4:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url5:{title:"Foto\u011fraf5",type:"custom",editable:!1,filter:!1,renderComponent:N.a},dogruMu5:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url6:{title:"Foto\u011fraf6",type:"custom",editable:!1,filter:!1,renderComponent:K.a},dogruMu6:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url7:{title:"Foto\u011fraf7",type:"custom",editable:!1,filter:!1,renderComponent:q.a},dogruMu7:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}},url8:{title:"Foto\u011fraf8",type:"custom",editable:!1,filter:!1,renderComponent:H.a},dogruMu8:{title:"Do\u011fru Mu?",type:"boolean",editor:{type:"list",config:{selectText:"Select",list:[{value:"Do\u011fru",title:"Do\u011fru"},{value:"Yanl\u0131\u015f",title:"Yanl\u0131\u015f"}]}}}}}},n.prototype.addGazeSecenek=function(n){return this.secenekService.addGazeSecenek(n)},n.prototype.getBySeviye=function(n){var e=this.sorular.find(function(e){return e.aciklama==n});return e.id?e.id:-1},n.prototype.onCreateConfirm=function(n){"Do\u011fru"==n.newData.dogruMu1?n.newData.Photo1isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu1&&(n.newData.Photo1isTrue=!1),"Do\u011fru"==n.newData.dogruMu2?n.newData.Photo2isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu2&&(n.newData.Photo2isTrue=!1),"Do\u011fru"==n.newData.dogruMu3?n.newData.Photo3isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu3&&(n.newData.Photo3isTrue=!1),"Do\u011fru"==n.newData.dogruMu4?n.newData.Photo4isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu4&&(n.newData.Photo4isTrue=!1),"Do\u011fru"==n.newData.dogruMu5?n.newData.Photo5isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu5&&(n.newData.Photo5isTrue=!1),"Do\u011fru"==n.newData.dogruMu6?n.newData.Photo6isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu6&&(n.newData.Photo6isTrue=!1),"Do\u011fru"==n.newData.dogruMu7?n.newData.Photo7isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu7&&(n.newData.Photo7isTrue=!1),"Do\u011fru"==n.newData.dogruMu8?n.newData.Photo8isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu8&&(n.newData.Photo8isTrue=!1),n.newData.gazeCastSoruID=this.getBySeviye(n.newData.soruAdi),this.addGazeSecenek(n.newData).subscribe(function(e){e.id?(n.newData.id=e.id,n.confirm.resolve(n.newData)):n.confirm.reject()})},n.prototype.deleteGazeSecenek=function(n){return this.secenekService.deleteGazeSecenek(n)},n.prototype.onDeleteConfirm=function(n){window.confirm("Are you sure you want to delete?")?(console.log("event",n.data.id),n.data.id>0?this.deleteGazeSecenek(n.data.id).subscribe(function(){n.confirm.resolve()}):n.confirm.reject()):n.confirm.reject()},n.prototype.updateGazeSecenek=function(n){return this.secenekService.updateGazeSecenek(n)},n.prototype.onSaveConfirm=function(n){"Do\u011fru"==n.newData.dogruMu1?n.newData.Photo1isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu1&&(n.newData.Photo1isTrue=!1),"Do\u011fru"==n.newData.dogruMu2?n.newData.Photo2isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu2&&(n.newData.Photo2isTrue=!1),"Do\u011fru"==n.newData.dogruMu3?n.newData.Photo3isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu3&&(n.newData.Photo3isTrue=!1),"Do\u011fru"==n.newData.dogruMu4?n.newData.Photo4isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu4&&(n.newData.Photo4isTrue=!1),"Do\u011fru"==n.newData.dogruMu5?n.newData.Photo5isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu5&&(n.newData.Photo5isTrue=!1),"Do\u011fru"==n.newData.dogruMu6?n.newData.Photo6isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu6&&(n.newData.Photo6isTrue=!1),"Do\u011fru"==n.newData.dogruMu7?n.newData.Photo7isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu7&&(n.newData.Photo7isTrue=!1),"Do\u011fru"==n.newData.dogruMu8?n.newData.Photo8isTrue=!0:"Yanl\u0131\u015f"==n.newData.dogruMu8&&(n.newData.Photo8isTrue=!1),n.newData.gazeCastSoruID=this.getBySeviye(n.newData.soruAdi),this.updateGazeSecenek(n.newData).subscribe(function(e){e.id?n.confirm.resolve(n.newData):n.confirm.reject()})},n}(),U=a["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function J(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](1,0,null,null,10,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),a["\u0275eld"](2,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](3,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](4,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](5,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" se\xe7enekler "])),(n()(),a["\u0275eld"](7,16777216,null,1,4,"nb-card-body",[["nbSpinnerMessage","Y\xfckleniyor..."],["nbSpinnerStatus","success"]],[[2,"nb-spinner-container",null]],null,null,i.e,i.a)),a["\u0275did"](8,49152,null,0,r.a,[],null,null),a["\u0275did"](9,81920,null,0,h.a,[a.ViewContainerRef,a.ComponentFactoryResolver,a.Renderer2,a.ElementRef],{spinnerMessage:[0,"spinnerMessage"],spinnerStatus:[1,"spinnerStatus"],nbSpinner:[2,"nbSpinner"]},null),(n()(),a["\u0275eld"](10,0,null,0,1,"ng2-smart-table",[],null,[[null,"createConfirm"],[null,"editConfirm"],[null,"deleteConfirm"]],function(n,e,l){var a=!0,t=n.component;return"createConfirm"===e&&(a=!1!==t.onCreateConfirm(l)&&a),"editConfirm"===e&&(a=!1!==t.onSaveConfirm(l)&&a),"deleteConfirm"===e&&(a=!1!==t.onDeleteConfirm(l)&&a),a},u.b,u.a)),a["\u0275did"](11,573440,null,0,c.a,[],{source:[0,"source"],settings:[1,"settings"]},{deleteConfirm:"deleteConfirm",editConfirm:"editConfirm",createConfirm:"createConfirm"}),(n()(),a["\u0275eld"](12,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),a["\u0275eld"](13,0,null,null,9,"div",[["class","col-md-8"],["style","margin:auto"]],null,null,null,null,null)),(n()(),a["\u0275eld"](14,0,null,null,8,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,i.f,i.b)),a["\u0275did"](15,49152,null,0,r.b,[],null,null),(n()(),a["\u0275eld"](16,0,null,0,2,"nb-card-header",[],null,null,null,i.h,i.d)),a["\u0275did"](17,49152,null,0,r.d,[],null,null),(n()(),a["\u0275ted"](-1,0,[" G\xf6r\xfcnt\xfc "])),(n()(),a["\u0275eld"](19,0,null,1,3,"nb-card-body",[["style","text-align:center"]],null,null,null,i.e,i.a)),a["\u0275did"](20,49152,null,0,r.a,[],null,null),(n()(),a["\u0275eld"](21,0,null,0,1,"video-player",[],null,null,null,d.c,d.a)),a["\u0275did"](22,114688,null,0,s.a,[m.a,v.l],null,null)],function(n,e){var l=e.component;n(e,9,0,"Y\xfckleniyor...","success",l.loading),n(e,11,0,l.source,l.settings),n(e,22,0)},function(n,e){n(e,2,1,[a["\u0275nov"](e,3).xxsmall,a["\u0275nov"](e,3).xsmall,a["\u0275nov"](e,3).small,a["\u0275nov"](e,3).medium,a["\u0275nov"](e,3).large,a["\u0275nov"](e,3).xlarge,a["\u0275nov"](e,3).xxlarge,a["\u0275nov"](e,3).active,a["\u0275nov"](e,3).disabled,a["\u0275nov"](e,3).primary,a["\u0275nov"](e,3).info,a["\u0275nov"](e,3).success,a["\u0275nov"](e,3).warning,a["\u0275nov"](e,3).danger,a["\u0275nov"](e,3).hasAccent,a["\u0275nov"](e,3).primaryAccent,a["\u0275nov"](e,3).infoAccent,a["\u0275nov"](e,3).successAccent,a["\u0275nov"](e,3).warningAccent,a["\u0275nov"](e,3).dangerAccent,a["\u0275nov"](e,3).activeAccent,a["\u0275nov"](e,3).disabledAccent]),n(e,7,0,a["\u0275nov"](e,9).isSpinnerExist),n(e,14,1,[a["\u0275nov"](e,15).xxsmall,a["\u0275nov"](e,15).xsmall,a["\u0275nov"](e,15).small,a["\u0275nov"](e,15).medium,a["\u0275nov"](e,15).large,a["\u0275nov"](e,15).xlarge,a["\u0275nov"](e,15).xxlarge,a["\u0275nov"](e,15).active,a["\u0275nov"](e,15).disabled,a["\u0275nov"](e,15).primary,a["\u0275nov"](e,15).info,a["\u0275nov"](e,15).success,a["\u0275nov"](e,15).warning,a["\u0275nov"](e,15).danger,a["\u0275nov"](e,15).hasAccent,a["\u0275nov"](e,15).primaryAccent,a["\u0275nov"](e,15).infoAccent,a["\u0275nov"](e,15).successAccent,a["\u0275nov"](e,15).warningAccent,a["\u0275nov"](e,15).dangerAccent,a["\u0275nov"](e,15).activeAccent,a["\u0275nov"](e,15).disabledAccent])})}function X(n){return a["\u0275vid"](0,[(n()(),a["\u0275eld"](0,0,null,null,1,"gaze-secenek",[],null,null,null,J,U)),a["\u0275did"](1,114688,null,0,V,[R.a,T.a],null,null)],function(n,e){n(e,1,0)},null)}var Z=a["\u0275ccf"]("gaze-secenek",V,X,{},{},[]),Q=l("fdPT"),W=l("MoCo"),_=l("cdOV"),$=l("9AJC"),nn=l("8VM6"),en=l("Xoj0"),ln=l("4/Py"),an=l("8DeE"),tn=l("y9XU"),on=l("y1sj"),rn=l("cMIS"),un=l("H1uz"),cn=l("H6Y4"),dn=l("byrr"),sn=l("0HQI"),mn=l("81d9"),vn=l("TCYN"),pn=l("T4um"),fn=l("W13n"),gn=l("olH8"),yn=l("SSyH"),Dn=l("Thg9"),bn=l("zE4a"),wn=l("hAd3"),hn=l("Ip0R"),Sn=l("gIcY"),Cn=l("nA+Y"),An=l("eDkP"),kn=l("Fzqc"),xn=l("U4uc"),Mn=l("4GxJ"),zn=l("AKna"),Tn=l("Bvtr"),Pn=l("gpGP"),Yn=l("t/Na"),Gn=l("u1Dc"),Bn=function(){return function(){}}(),In=l("P8+w"),En=l("Ku2q"),Rn=l("w//a"),jn=l("rNHn"),Fn=l("3Zza"),Ln=l("V6uK"),On=l("6wBL"),Nn=l("GUlP"),Kn=l("niCt"),qn=l("UIEa"),Hn=l("o0Gp"),Vn=l("M18m"),Un=l("zTyf"),Jn=l("TcUH"),Xn=l("4c35"),Zn=l("dWZg"),Qn=l("qAlS"),Wn=l("hle7"),_n=l("lOUe"),$n=l("yHPJ"),ne=l("wZaT"),ee=l("GGqN"),le=l("tSKX"),ae=l("uLH1"),te=l("WCnA"),oe=l("DiBj"),ie=l("TvC7"),re=l("7qhI"),ue=l("aTFX"),ce=l("7fDR"),de=l("y3Bk"),se=l("IR2U"),me=l("sE+l"),ve=l("9mtI"),pe=l("SdSL"),fe=l("GF5i"),ge=l("ZMzl"),ye=l("tt4K"),De=l("eBEu"),be=l("MMI5"),we=l("vTDv"),he=l("7uma"),Se=l("VDLQ"),Ce=l("NrAT"),Ae=l("m1S1"),ke=l("WBAi"),xe=l("mbdJ"),Me=l("6t6V"),ze=l("kmuJ"),Te=l("2Z+H"),Pe=l("qQl2"),Ye=l("mnB0"),Ge=l("9BGC"),Be=l("CqVu"),Ie=l("T1If"),Ee=l("0Ird"),Re=l("l+uZ"),je=l("vkGH");l.d(e,"GazeModuleNgFactory",function(){return Fe});var Fe=a["\u0275cmf"](t,[],function(n){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,w,z,E,Z,Q.a,W.a,_.a,$.a,$.b,$.g,$.c,$.d,$.e,$.f,nn.a,en.a,ln.a,an.a,an.b,tn.a,on.a,rn.a,un.a,cn.a,dn.a,sn.a,mn.a,vn.a,pn.a,fn.a,gn.a,yn.a,Dn.a,bn.a,wn.a,d.b]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,hn.n,hn.m,[a.LOCALE_ID,[2,hn.E]]),a["\u0275mpd"](4608,Sn.B,Sn.B,[]),a["\u0275mpd"](4608,Sn.e,Sn.e,[]),a["\u0275mpd"](4608,Cn.a,Cn.a,[v.l]),a["\u0275mpd"](4608,An.d,An.d,[An.k,An.f,a.ComponentFactoryResolver,An.i,An.g,a.Injector,a.NgZone,hn.c,kn.b,[2,hn.h]]),a["\u0275mpd"](5120,An.l,An.m,[An.d]),a["\u0275mpd"](4608,xn.a,xn.a,[]),a["\u0275mpd"](4608,Mn.t,Mn.t,[a.ComponentFactoryResolver,a.Injector,Mn.R,Mn.u]),a["\u0275mpd"](4608,zn.a,Tn.a,[a.LOCALE_ID]),a["\u0275mpd"](4608,hn.d,hn.d,[a.LOCALE_ID]),a["\u0275mpd"](4608,Pn.a,Pn.a,[zn.a]),a["\u0275mpd"](4608,Yn.n,Yn.t,[hn.c,a.PLATFORM_ID,Yn.r]),a["\u0275mpd"](4608,Yn.u,Yn.u,[Yn.n,Yn.s]),a["\u0275mpd"](5120,Yn.a,function(n){return[n]},[Yn.u]),a["\u0275mpd"](4608,Yn.q,Yn.q,[]),a["\u0275mpd"](6144,Yn.o,null,[Yn.q]),a["\u0275mpd"](4608,Yn.m,Yn.m,[Yn.o]),a["\u0275mpd"](6144,Yn.b,null,[Yn.m]),a["\u0275mpd"](4608,Yn.h,Yn.p,[Yn.b,a.Injector]),a["\u0275mpd"](4608,Yn.c,Yn.c,[Yn.h]),a["\u0275mpd"](4608,Gn.i,Gn.i,[]),a["\u0275mpd"](4608,Gn.k,Gn.k,[Yn.c]),a["\u0275mpd"](4608,Gn.c,Gn.c,[Gn.i,Gn.k]),a["\u0275mpd"](1073742336,hn.b,hn.b,[]),a["\u0275mpd"](1073742336,v.o,v.o,[[2,v.u],[2,v.l]]),a["\u0275mpd"](1073742336,Bn,Bn,[]),a["\u0275mpd"](1073742336,Sn.z,Sn.z,[]),a["\u0275mpd"](1073742336,Sn.j,Sn.j,[]),a["\u0275mpd"](1073742336,Sn.v,Sn.v,[]),a["\u0275mpd"](1073742336,In.a,In.a,[]),a["\u0275mpd"](1073742336,En.a,En.a,[]),a["\u0275mpd"](1073742336,Rn.a,Rn.a,[]),a["\u0275mpd"](1073742336,jn.a,jn.a,[]),a["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),a["\u0275mpd"](1073742336,Ln.a,Ln.a,[]),a["\u0275mpd"](1073742336,On.a,On.a,[]),a["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),a["\u0275mpd"](1073742336,Kn.a,Kn.a,[]),a["\u0275mpd"](1073742336,qn.a,qn.a,[]),a["\u0275mpd"](1073742336,Hn.a,Hn.a,[]),a["\u0275mpd"](1073742336,Vn.a,Vn.a,[]),a["\u0275mpd"](1073742336,Un.a,Un.a,[]),a["\u0275mpd"](1073742336,Jn.a,Jn.a,[]),a["\u0275mpd"](1073742336,kn.a,kn.a,[]),a["\u0275mpd"](1073742336,Xn.f,Xn.f,[]),a["\u0275mpd"](1073742336,Zn.b,Zn.b,[]),a["\u0275mpd"](1073742336,Qn.b,Qn.b,[]),a["\u0275mpd"](1073742336,An.h,An.h,[]),a["\u0275mpd"](1073742336,Wn.a,Wn.a,[]),a["\u0275mpd"](1073742336,_n.a,_n.a,[]),a["\u0275mpd"](1073742336,$n.a,$n.a,[]),a["\u0275mpd"](1073742336,ne.a,ne.a,[]),a["\u0275mpd"](1073742336,ee.a,ee.a,[]),a["\u0275mpd"](1073742336,le.a,le.a,[]),a["\u0275mpd"](1073742336,ae.a,ae.a,[]),a["\u0275mpd"](1073742336,Mn.c,Mn.c,[]),a["\u0275mpd"](1073742336,Mn.f,Mn.f,[]),a["\u0275mpd"](1073742336,Mn.g,Mn.g,[]),a["\u0275mpd"](1073742336,Mn.k,Mn.k,[]),a["\u0275mpd"](1073742336,Mn.l,Mn.l,[]),a["\u0275mpd"](1073742336,Mn.q,Mn.q,[]),a["\u0275mpd"](1073742336,Mn.r,Mn.r,[]),a["\u0275mpd"](1073742336,Mn.v,Mn.v,[]),a["\u0275mpd"](1073742336,Mn.z,Mn.z,[]),a["\u0275mpd"](1073742336,Mn.A,Mn.A,[]),a["\u0275mpd"](1073742336,Mn.D,Mn.D,[]),a["\u0275mpd"](1073742336,Mn.G,Mn.G,[]),a["\u0275mpd"](1073742336,Mn.J,Mn.J,[]),a["\u0275mpd"](1073742336,Mn.N,Mn.N,[]),a["\u0275mpd"](1073742336,Mn.O,Mn.O,[]),a["\u0275mpd"](1073742336,Mn.P,Mn.P,[]),a["\u0275mpd"](1073742336,Mn.w,Mn.w,[]),a["\u0275mpd"](1073742336,te.a,te.a,[]),a["\u0275mpd"](1073742336,oe.a,oe.a,[]),a["\u0275mpd"](1073742336,ie.a,ie.a,[]),a["\u0275mpd"](1073742336,re.a,re.a,[]),a["\u0275mpd"](1073742336,ue.a,ue.a,[]),a["\u0275mpd"](1073742336,ce.a,ce.a,[]),a["\u0275mpd"](1073742336,de.a,de.a,[]),a["\u0275mpd"](1073742336,se.a,se.a,[]),a["\u0275mpd"](1073742336,me.a,me.a,[]),a["\u0275mpd"](1073742336,ve.a,ve.a,[]),a["\u0275mpd"](1073742336,pe.a,pe.a,[]),a["\u0275mpd"](1073742336,fe.a,fe.a,[]),a["\u0275mpd"](1073742336,ge.a,ge.a,[]),a["\u0275mpd"](1073742336,ye.a,ye.a,[]),a["\u0275mpd"](1073742336,De.a,De.a,[]),a["\u0275mpd"](1073742336,be.a,be.a,[]),a["\u0275mpd"](1073742336,we.a,we.a,[]),a["\u0275mpd"](1073742336,he.a,he.a,[]),a["\u0275mpd"](1073742336,Yn.e,Yn.e,[]),a["\u0275mpd"](1073742336,Yn.d,Yn.d,[]),a["\u0275mpd"](1073742336,Gn.j,Gn.j,[]),a["\u0275mpd"](1073742336,Se.a,Se.a,[]),a["\u0275mpd"](1073742336,Ce.a,Ce.a,[]),a["\u0275mpd"](1073742336,Ae.a,Ae.a,[]),a["\u0275mpd"](1073742336,ke.a,ke.a,[]),a["\u0275mpd"](1073742336,xe.a,xe.a,[]),a["\u0275mpd"](1073742336,Me.a,Me.a,[]),a["\u0275mpd"](1073742336,ze.a,ze.a,[]),a["\u0275mpd"](1073742336,Te.a,Te.a,[]),a["\u0275mpd"](1073742336,t,t,[]),a["\u0275mpd"](1024,v.j,function(){return[[{path:"",children:[{path:"kategori",component:g},{path:"seviye",component:A},{path:"soru",component:Y},{path:"secenek",component:V}]}],[{path:"",children:[{path:"kategori",component:Pe.a},{path:"seviye",component:Ye.a},{path:"soru",component:Ge.a},{path:"secenek",component:Be.a},{path:"kullanici",component:Ie.a},{path:"kullaniciIlerleme",component:Ee.a},{path:"chat",component:Re.a},{path:"soruFotograf",component:je.a}]}]]},[]),a["\u0275mpd"](256,Yn.r,"XSRF-TOKEN",[]),a["\u0275mpd"](256,Yn.s,"X-XSRF-TOKEN",[])])})}}]);