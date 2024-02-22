(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordini-ordini-module"],{

/***/ "+5zS":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordini/ordini.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ordini</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    \n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"data?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Non hai nessun ordine!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          Puoi acquistare oggetti usando gli Andron andando nella sezione Cerco Oggetti disponibile nel menù. \n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngFor=\"let o of this.data\">\n      <ion-card-content>\n    \n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Ordine #{{o?.id}}\n          </div>\n          \n        </ion-card-subtitle>\n        <ion-card-title style=\"font-size:20px\" class=\"ion-text-center\">{{ o.nomeProdotto}} x {{o.quantita}}</ion-card-title>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=4>\n              <div>\n                <ion-avatar slot=\"start\" class=\"user-avatar\">\n                  <ion-img src=\"{{ o.img }}\"></ion-img>\n                </ion-avatar>\n              </div>\n            </ion-col>\n\n            <ion-col *ngIf=\"o.checkOrdine==1 && o.confermato==0\">\n              <div (click)=\"popover(-1)\" class=\"ion-text-center\" style=\"color: green;\">\n                Ordine evaso! <ion-icon name=\"information-circle-outline\"></ion-icon>\n              </div> \n            </ion-col>\n\n            <ion-col *ngIf=\"o.confermato==1\">\n              <div (click)=\"popover(1)\" class=\"ion-text-center\" style=\"color: green;\">\n                Ordine confermato! \n              </div>\n            </ion-col>\n\n            <ion-col *ngIf=\"o.checkOrdine==0\">\n              <div (click)=\"popover(0)\" class=\"ion-text-center\" style=\"color: red;\">\n                In attesa del check da parte dell'azienda...\n              </div>\n            </ion-col>\n              \n          </ion-row>\n          <ion-row *ngIf=\"o.checkOrdine==1 && o.confermato==0\">\n            <ion-col>\n              <div class=\"ion-text-center\"  style=\"color: tomato;\" >\n                Contatti Azienda\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"o.checkOrdine==1 && o.confermato==0\">\n            <ion-col>\n              <div  style=\"color: tomato;\">\n                Email\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                {{o.email}}\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"o.checkOrdine==1 && o.confermato==0\">\n            <ion-col  style=\"color: tomato;\">\n              <div>\n                Telefono\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                {{o.telefono}}\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"o.checkOrdine==1 && o.confermato==0\">\n          \n            <ion-col>\n              <div>\n                <ion-button size=\"small\" expand=\"block\" (click)=\"segnala(o,'ordine')\">\n                  Segnala\n                </ion-button>\n              </div>\n            </ion-col>\n          \n            <ion-col>\n              <div>\n                <ion-button size=\"small\" expand=\"block\" (click)=\"conferma(o, 'ordine')\">\n                  Conferma\n                </ion-button>\n              </div>\n            </ion-col>\n          \n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "FAv+":
/*!***********************************************!*\
  !*** ./src/app/pages/ordini/ordini.module.ts ***!
  \***********************************************/
/*! exports provided: OrdiniPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdiniPageModule", function() { return OrdiniPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _ordini_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordini-routing.module */ "vmFq");
/* harmony import */ var _ordini_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordini.page */ "svpW");







let OrdiniPageModule = class OrdiniPageModule {
};
OrdiniPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ordini_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdiniPageRoutingModule"]
        ],
        declarations: [_ordini_page__WEBPACK_IMPORTED_MODULE_6__["OrdiniPage"]]
    })
], OrdiniPageModule);



/***/ }),

/***/ "fbGc":
/*!***********************************************!*\
  !*** ./src/app/pages/ordini/ordini.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRpbmkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "svpW":
/*!*********************************************!*\
  !*** ./src/app/pages/ordini/ordini.page.ts ***!
  \*********************************************/
/*! exports provided: OrdiniPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdiniPage", function() { return OrdiniPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ordini_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ordini.page.html */ "+5zS");
/* harmony import */ var _ordini_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordini.page.scss */ "fbGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let OrdiniPage = class OrdiniPage {
    constructor(router, request, utilities) {
        this.router = router;
        this.request = request;
        this.utilities = utilities;
        this.data = [];
        this.page = 0;
        this.psize = 5;
        this.getOrdini();
    }
    loadmore(event) {
        this.page++;
        this.getOrdini(() => { event.target.complete(); });
    }
    getOrdini(add = () => { }) {
        this.request.get({
            path: "/orders/mine",
            httpParam: {
                _page: this.page,
                _psize: this.psize,
            },
            handler: (results) => {
                for (const t of results["_msg"]) {
                    this.data.push(t);
                }
                ;
                add();
            },
            error: () => {
                this.utilities.alertError({});
            }
        });
    }
    conferma(item, tipo) {
        this.router.navigate(["/feedback", { "item": JSON.stringify(item), "tipo": tipo }]);
    }
    segnala(item, tipo) {
        if (item.segnalato) {
            this.utilities.simplyAlert({
                header: "Attenzione!",
                message: "Hai già inviato una segnalazione per questo prodotto! Verrai contattato presto da qualcuno del nostro team."
            });
        }
        else {
            this.router.navigate(["/segnalazione", { "item": JSON.stringify(item), "tipo": tipo }]);
        }
    }
    popover(type) {
        let msg = type == 0 ?
            "In attesa che l'azienda visualizzi l'ordine da te inviato" :
            "Il tuo ordine è stato evaso, lo riceverai al più presto!";
        this.utilities.createPopover(msg);
    }
};
OrdiniPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
OrdiniPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ordini',
        template: _raw_loader_ordini_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ordini_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], OrdiniPage);



/***/ }),

/***/ "vmFq":
/*!*******************************************************!*\
  !*** ./src/app/pages/ordini/ordini-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdiniPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdiniPageRoutingModule", function() { return OrdiniPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ordini_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordini.page */ "svpW");




const routes = [
    {
        path: '',
        component: _ordini_page__WEBPACK_IMPORTED_MODULE_3__["OrdiniPage"]
    }
];
let OrdiniPageRoutingModule = class OrdiniPageRoutingModule {
};
OrdiniPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdiniPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-ordini-ordini-module-es2015.js.map