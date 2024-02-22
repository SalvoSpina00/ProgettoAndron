(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feedback-feedback-module"],{

/***/ "3AGg":
/*!***********************************************************!*\
  !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function() { return FeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.page */ "ak7c");




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ "HBsN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Conferma</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.tipo=='ordine'\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Feedback\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row> \n          <div>\n            Prima di confermare l'arrivo, inserisci un feedback su questo ordine! Facci sapere come ti sei trovato e cosa pensi!\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-textarea placeholder=\"Messaggio...\"  maxlength=\"400\" [(ngModel)]=\"msg\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-col text-center>\n        <rating [(rating)]=\"valutazione\"></rating>\n      </ion-col>\n    </ion-item>\n  </ion-list>\n  \n  <p>{{this.errore}}</p>\n  <ion-button size=\"small\" expand=\"block\" (click)=\"confermaOrdine(this.data)\">\n    Conferma\n  </ion-button>\n</ion-content>\n\n<ion-content *ngIf=\"this.tipo=='servizio'\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Feedback\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <div>\n            Prima di confermare di aver ricevuto il servizio, lascia un messaggio per recensire l'utente che l'ha offerto! Inserisci anche tua valutazione!  \n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n \n  <ion-list>\n    <ion-item>\n      <ion-textarea placeholder=\"Messaggio...\"  maxlength=\"400\"[(ngModel)]=\"msg\"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-col text-center>\n        <rating [(rating)]=\"valutazione\"></rating>\n      </ion-col>\n    </ion-item>\n  </ion-list>\n  <p>{{this.errore}}</p>\n  <ion-button size=\"small\" expand=\"block\" (click)=\"servizioEseguito(this.data.id)\">\n    Conferma\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "OurG":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "QVr5":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-routing.module */ "3AGg");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../rating/rating.component */ "n7cG");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feedback.page */ "ak7c");








let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"]
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_7__["FeedbackPage"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_6__["RatingComponent"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "ak7c":
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feedback.page.html */ "HBsN");
/* harmony import */ var _feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.page.scss */ "OurG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");








let FeedbackPage = class FeedbackPage {
    constructor(route, navCtrl, request, utilities) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.request = request;
        this.utilities = utilities;
        this.data = JSON.parse(this.route.snapshot.paramMap.get("item"));
        this.tipo = this.route.snapshot.paramMap.get("tipo");
    }
    servizioEseguito(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!(this.msg && this.valutazione)) {
                this.errore = "Compila tutti i campi";
                return;
            }
            if (this.msg.trim() === '') {
                this.errore = "Compila adeguatamente i campi";
                return;
            }
            if (this.msg.length < 5 || this.msg.length > 500) {
                this.errore = "Minimo 5 caratteri, massimo 500 caratteri";
                return;
            }
            if (this.valutazione < 1 || this.valutazione > 5) {
                this.errore = "Minimo 1, massimo 5";
            }
            this.utilities.confirmAlert({
                header: "Attenzione",
                message: "Vuoi confermare questo servizio?",
                handlerYes: () => {
                    this.request.post({
                        path: "/request/mine/" + id,
                        data: {
                            "_msg": this.msg,
                            "_valutazione": this.valutazione
                        },
                        handler: (results) => {
                            this.utilities.simplyAlert({
                                operation: () => { this.navCtrl.navigateForward("/home"); },
                                header: "Attenzione",
                                message: "Operazione Effettuata"
                            });
                        },
                        error: (error) => {
                            this.utilities.alertError({});
                        }
                    });
                }
            });
        });
    }
    confermaOrdine(dati) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!(this.msg && this.valutazione)) {
                this.errore = "Compila tutti i campi";
                return;
            }
            if (this.msg.trim() === '') {
                this.errore = "Compila adeguatamente i campi";
                return;
            }
            if (this.msg.length < 5 || this.msg.length > 500) {
                this.errore = "Minimo 5 caratteri, massimo 500 caratteri";
                return;
            }
            if (this.valutazione < 1 || this.valutazione > 5) {
                this.errore = "Minimo 1, massimo 5";
            }
            this.utilities.confirmAlert({
                header: "Attenzione",
                message: "Vuoi confermare questo ordine?",
                handlerYes: () => {
                    this.request.post({
                        path: "/orders/mine/" + this.data.id,
                        data: {
                            "_a": this.data.nodoImpresa,
                            "_msg": this.msg,
                            "_valutazione": this.valutazione
                        },
                        handler: (results) => {
                            this.utilities.simplyAlert({
                                operation: () => { this.navCtrl.navigateForward("/home"); },
                                header: "Attenzione",
                                message: "Operazione Effettuata"
                            });
                        },
                        error: (error) => {
                            this.utilities.alertError({});
                        }
                    });
                }
            });
        });
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] }
];
FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feedback',
        template: _raw_loader_feedback_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feedback_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]])
], FeedbackPage);



/***/ }),

/***/ "n7cG":
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rating.component.html */ "qu75");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



var COLORS;
(function (COLORS) {
    COLORS["GREY"] = "#E0E0E0";
    COLORS["GREEN"] = "#76FF03";
    COLORS["YELLOW"] = "#FFCA28";
    COLORS["RED"] = "#DD2C00";
})(COLORS || (COLORS = {}));
let RatingComponent = class RatingComponent {
    constructor() {
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ;
    rate(index) {
        this.rating = index;
        this.ratingChange.emit(this.rating);
    }
    getColor(index) {
        /* function to return the color of a star based on what
         index it is. All stars greater than the index are assigned
         a grey color , while those equal or less than the rating are
         assigned a color depending on the rating. Using the following criteria:
      
              1-2 stars: red
              3 stars  : yellow
              4-5 stars: green
        */
        if (this.isAboveRating(index)) {
            return COLORS.GREY;
        }
        switch (this.rating) {
            case 1:
            case 2:
                return COLORS.RED;
            case 3:
                return COLORS.YELLOW;
            case 4:
            case 5:
                return COLORS.GREEN;
            default:
                return COLORS.GREY;
        }
    }
    isAboveRating(index) {
        return index > this.rating;
    }
};
RatingComponent.ctorParameters = () => [];
RatingComponent.propDecorators = {
    rating: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    ratingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
RatingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "rating",
        template: _raw_loader_rating_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RatingComponent);



/***/ }),

/***/ "qu75":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <ion-icon size=\"large\" name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"\n    (click)=\"rate(num)\" [ngStyle]=\"{'color':getColor(num)}\">\n  </ion-icon>\n</div>\n\n");

/***/ })

}]);
//# sourceMappingURL=pages-feedback-feedback-module-es2015.js.map