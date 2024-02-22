(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-descrizione-transazione-descrizione-transazione-module"],{

/***/ "2Oun":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/descrizione-transazione/descrizione-transazione.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DescrizioneTransazionePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescrizioneTransazionePageModule", function() { return DescrizioneTransazionePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _descrizione_transazione_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./descrizione-transazione-routing.module */ "3hAR");
/* harmony import */ var _descrizione_transazione_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descrizione-transazione.page */ "PIE6");







let DescrizioneTransazionePageModule = class DescrizioneTransazionePageModule {
};
DescrizioneTransazionePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _descrizione_transazione_routing_module__WEBPACK_IMPORTED_MODULE_5__["DescrizioneTransazionePageRoutingModule"]
        ],
        declarations: [_descrizione_transazione_page__WEBPACK_IMPORTED_MODULE_6__["DescrizioneTransazionePage"]]
    })
], DescrizioneTransazionePageModule);



/***/ }),

/***/ "3hAR":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/descrizione-transazione/descrizione-transazione-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: DescrizioneTransazionePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescrizioneTransazionePageRoutingModule", function() { return DescrizioneTransazionePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _descrizione_transazione_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descrizione-transazione.page */ "PIE6");




const routes = [
    {
        path: '',
        component: _descrizione_transazione_page__WEBPACK_IMPORTED_MODULE_3__["DescrizioneTransazionePage"]
    }
];
let DescrizioneTransazionePageRoutingModule = class DescrizioneTransazionePageRoutingModule {
};
DescrizioneTransazionePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DescrizioneTransazionePageRoutingModule);



/***/ }),

/***/ "7ibG":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/descrizione-transazione/descrizione-transazione.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjcml6aW9uZS10cmFuc2F6aW9uZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "DY5M":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/descrizione-transazione/descrizione-transazione.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Descrizione</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Transazione #{{data?.id}}\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\" style=\"color: tomato;\">\n              Da:\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div class=\"ion-text-center\" style=\"color: tomato;\">\n              A:\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\">\n              {{data?.emittente}}\n            </div>\n          </ion-col>\n        \n          <ion-col>\n            <div class=\"ion-text-center\">\n              {{data?.ricevente}}\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\" style=\"color: tomato;\">\n              Causale\n            </div>\n          </ion-col>\n        </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div>\n                {{data?.causale}}\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\" style=\"color: tomato;\">\n                Totale Transazione:\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                {{data?.andron}} ANDRON\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\" style=\"color: tomato;\">\n                Data di esecuzione:\n              </div>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                {{data?.data}}\n              </div>\n            </ion-col>\n          </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "PIE6":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/descrizione-transazione/descrizione-transazione.page.ts ***!
  \*******************************************************************************/
/*! exports provided: DescrizioneTransazionePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescrizioneTransazionePage", function() { return DescrizioneTransazionePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_descrizione_transazione_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./descrizione-transazione.page.html */ "DY5M");
/* harmony import */ var _descrizione_transazione_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descrizione-transazione.page.scss */ "7ibG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let DescrizioneTransazionePage = class DescrizioneTransazionePage {
    constructor(route, router, request, utilities) {
        this.route = route;
        this.router = router;
        this.request = request;
        this.utilities = utilities;
        this.request.get({
            path: "/transaction/" + JSON.parse(this.route.snapshot.paramMap.get("transaction")),
            handler: (results) => {
                this.data = results["_msg"];
            },
            error: () => {
                this.utilities.alertError({
                    handler: () => { this.router.navigate(["/home"]); }
                });
            }
        });
    }
};
DescrizioneTransazionePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
DescrizioneTransazionePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-descrizione-transazione',
        template: _raw_loader_descrizione_transazione_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_descrizione_transazione_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], DescrizioneTransazionePage);



/***/ })

}]);
//# sourceMappingURL=pages-descrizione-transazione-descrizione-transazione-module-es2015.js.map