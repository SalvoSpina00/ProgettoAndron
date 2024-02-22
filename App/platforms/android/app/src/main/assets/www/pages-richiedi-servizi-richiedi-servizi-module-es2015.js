(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-richiedi-servizi-richiedi-servizi-module"],{

/***/ "CHnY":
/*!*****************************************************************!*\
  !*** ./src/app/pages/richiedi-servizi/richiedi-servizi.page.ts ***!
  \*****************************************************************/
/*! exports provided: RichiediServiziPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichiediServiziPage", function() { return RichiediServiziPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_richiedi_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./richiedi-servizi.page.html */ "MFMG");
/* harmony import */ var _richiedi_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./richiedi-servizi.page.scss */ "m9ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let RichiediServiziPage = class RichiediServiziPage {
    constructor(router, request, utilities) {
        this.router = router;
        this.request = request;
        this.utilities = utilities;
        this.servizi = [];
        this.psize = 5;
        this.page = 0;
        this.filtro = false;
        this.termine = "None";
        this.getServizi();
    }
    feedback(id, tipo, nome) {
        this.router.navigate(["/infofeedback", { "id": id, "tipo": tipo, "nome": nome }]);
    }
    getServizi(add = () => { }) {
        this.request.get({
            path: "/services",
            httpParam: {
                _page: this.page,
                _psize: this.psize,
                filtro: this.filtro,
                termine: this.termine
            },
            handler: (results) => {
                for (const t of results["_msg"]) {
                    this.servizi.push(t);
                }
                ;
                add();
            },
            error: () => {
                this.utilities.alertError({});
            }
        });
    }
    loadmore(event) {
        this.page++;
        this.getServizi(() => { event.target.complete(); });
    }
    rimuoviFiltri() {
        this.page = 0;
        this.filtro = false;
        this.termine = '';
        this.getServizi();
    }
    filter(event) {
        let val = event.target.value;
        if (val.trim() != '') {
            this.page = 0;
            this.filtro = true;
            this.termine = val;
        }
        else {
            this.termine = '';
        }
        this.getServizi();
    }
    clickItem(id) {
        this.router.navigate(["/richiesta", { "id": id }]);
    }
};
RichiediServiziPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
RichiediServiziPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-richiedi-servizi',
        template: _raw_loader_richiedi_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_richiedi_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], RichiediServiziPage);



/***/ }),

/***/ "LC7f":
/*!***************************************************************************!*\
  !*** ./src/app/pages/richiedi-servizi/richiedi-servizi-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RichiediServiziPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichiediServiziPageRoutingModule", function() { return RichiediServiziPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _richiedi_servizi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./richiedi-servizi.page */ "CHnY");




const routes = [
    {
        path: '',
        component: _richiedi_servizi_page__WEBPACK_IMPORTED_MODULE_3__["RichiediServiziPage"]
    }
];
let RichiediServiziPageRoutingModule = class RichiediServiziPageRoutingModule {
};
RichiediServiziPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RichiediServiziPageRoutingModule);



/***/ }),

/***/ "MFMG":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/richiedi-servizi/richiedi-servizi.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text>Richiedi servizi</ion-text>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar (keyup.enter)=\"filter($event)\" placeholder=\"Cerca\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"filtro==true\">\n    <ion-button  size=\"small\" expand=\"full\" (click)=\"rimuoviFiltri()\">Rimuovi filtro</ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"servizi?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Attenzione!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          Attualmente non sono presenti servizi da poter richiedere.<br>Controlla nei prossimi giorni! \n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n\n    <ion-card *ngFor=\"let s of this.servizi\">\n      <ion-card-content>\n        <ion-card-subtitle>\n            <ion-row>\n              <ion-col>\n                <div class=\"ion-text-center\">\n                  Fornito da:\n                </div>\n              </ion-col>\n              <ion-col class=\"ion-text-center\">\n                <div (click)=\"feedback(s.utente,'utente',s.nomeUtente + ' ' + s.cognomeUtente)\">\n                  {{s.nomeUtente}} {{s.cognomeUtente}}\n                </div>\n              </ion-col>\n            </ion-row>\n        </ion-card-subtitle>\n        <ion-card-title  class=\"ion-text-center\"(click)=\"clickItem(s.id)\">{{ s.nome }}</ion-card-title>\n     \n          <ion-row>\n            <ion-col>\n                {{s.descrizione}}\n            </ion-col>\n          </ion-row>\n              \n          <ion-row>\n            <ion-col size=\"8\">\n              Prezzo:\n            </ion-col>\n\n            <ion-col>\n                {{s.andron}}\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"8\">\n              Tempo massimo dedicabile (h): \n            </ion-col>\n\n            <ion-col>\n                {{s.ore}}\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"8\">\n                Giorni minimi di preavviso:\n            </ion-col>\n\n            <ion-col>\n                {{s.preavviso}}\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <ion-button id=\"myButtonYellow\" size=\"small\" expand=\"full\" (click)=\"clickItem(s.id)\">Richiedi</ion-button>\n            </ion-col>\n          </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "m9ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/richiedi-servizi/richiedi-servizi.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWNoaWVkaS1zZXJ2aXppLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "rFf3":
/*!*******************************************************************!*\
  !*** ./src/app/pages/richiedi-servizi/richiedi-servizi.module.ts ***!
  \*******************************************************************/
/*! exports provided: RichiediServiziPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichiediServiziPageModule", function() { return RichiediServiziPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _richiedi_servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./richiedi-servizi-routing.module */ "LC7f");
/* harmony import */ var _richiedi_servizi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./richiedi-servizi.page */ "CHnY");







let RichiediServiziPageModule = class RichiediServiziPageModule {
};
RichiediServiziPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _richiedi_servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__["RichiediServiziPageRoutingModule"]
        ],
        declarations: [_richiedi_servizi_page__WEBPACK_IMPORTED_MODULE_6__["RichiediServiziPage"]]
    })
], RichiediServiziPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-richiedi-servizi-richiedi-servizi-module-es2015.js.map