(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bisogni-bisogni-module"],{

/***/ "6Nsh":
/*!*************************************************!*\
  !*** ./src/app/pages/bisogni/bisogni.module.ts ***!
  \*************************************************/
/*! exports provided: BisogniPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BisogniPageModule", function() { return BisogniPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _bisogni_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bisogni-routing.module */ "EcZP");
/* harmony import */ var _bisogni_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bisogni.page */ "WCFE");







let BisogniPageModule = class BisogniPageModule {
};
BisogniPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bisogni_routing_module__WEBPACK_IMPORTED_MODULE_5__["BisogniPageRoutingModule"]
        ],
        declarations: [_bisogni_page__WEBPACK_IMPORTED_MODULE_6__["BisogniPage"]]
    })
], BisogniPageModule);



/***/ }),

/***/ "EcZP":
/*!*********************************************************!*\
  !*** ./src/app/pages/bisogni/bisogni-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BisogniPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BisogniPageRoutingModule", function() { return BisogniPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bisogni_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bisogni.page */ "WCFE");




const routes = [
    {
        path: '',
        component: _bisogni_page__WEBPACK_IMPORTED_MODULE_3__["BisogniPage"]
    }
];
let BisogniPageRoutingModule = class BisogniPageRoutingModule {
};
BisogniPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BisogniPageRoutingModule);



/***/ }),

/***/ "WCFE":
/*!***********************************************!*\
  !*** ./src/app/pages/bisogni/bisogni.page.ts ***!
  \***********************************************/
/*! exports provided: BisogniPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BisogniPage", function() { return BisogniPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bisogni_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bisogni.page.html */ "XC5k");
/* harmony import */ var _bisogni_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisogni.page.scss */ "siN3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let BisogniPage = class BisogniPage {
    constructor(router, request, utilities) {
        this.router = router;
        this.request = request;
        this.utilities = utilities;
        this.page = 0;
        this.psize = 3;
        this.bisogni = [];
        this.getBisogni();
    }
    getBisogni(add = () => { }) {
        this.request.get({
            path: "/needs",
            httpParam: {
                "_all": false,
                "_page": this.page,
                "_psize": this.psize
            },
            handler: (result) => {
                result["_msg"].forEach(element => {
                    element["img"] = 'data:image/jpeg;base64,' + element["img"];
                });
                for (const t of result["_msg"]) {
                    this.bisogni.push(t);
                }
                ;
                add();
            },
            error: () => { this.utilities.alertError({}); }
        });
    }
    loadmore(event) {
        this.page++;
        this.getBisogni(() => { event.target.complete(); });
    }
    clickItem(item) {
        this.router.navigate(["/servizi-collettivita", { "bisogno": item.id }]);
    }
};
BisogniPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
BisogniPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bisogni',
        template: _raw_loader_bisogni_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bisogni_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], BisogniPage);



/***/ }),

/***/ "XC5k":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bisogni/bisogni.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text>Bisogni</ion-text>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"bisogni?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Attenzione!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          Attualmente non sono presenti bisogni segnalati, se volessi segnalare un bisogno puoi farlo nella sezione \"Segnalazione Bisogni\".\n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngFor=\"let b of bisogni\">\n      <ion-img src=\"{{ b.img }}\"></ion-img>\n      <div id=\"content\">\n      <ion-card-header>\n        <ion-card-subtitle>Segnalato da {{b[\"u.nome\"]}} {{b.cognome}}</ion-card-subtitle>\n        <ion-card-title>{{b.nome}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{b.descrizione}} <br>\n        Questo bisogno è situato a {{b.citta}} all'indirizzo: {{b.indirizzo}}\n      </ion-card-content>\n      <ion-item (click)=\"clickItem(b)\">\n        <ion-icon name=\"hand\" slot=\"start\"></ion-icon>\n        <ion-label>Offri il tuo aiuto!</ion-label>\n      </ion-item>\n      </div>\n    </ion-card>\n\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "siN3":
/*!*************************************************!*\
  !*** ./src/app/pages/bisogni/bisogni.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaXNvZ25pLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-bisogni-bisogni-module-es2015.js.map