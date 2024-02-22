(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-segnalazione-segnalazione-module"],{

/***/ "3HRV":
/*!*********************************************************!*\
  !*** ./src/app/pages/segnalazione/segnalazione.page.ts ***!
  \*********************************************************/
/*! exports provided: SegnalazionePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegnalazionePage", function() { return SegnalazionePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_segnalazione_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./segnalazione.page.html */ "FMgM");
/* harmony import */ var _segnalazione_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segnalazione.page.scss */ "aGAh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");








let SegnalazionePage = class SegnalazionePage {
    constructor(route, navCtrl, request, utilities) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.request = request;
        this.utilities = utilities;
        this.data = JSON.parse(this.route.snapshot.paramMap.get("item"));
        this.tipo = this.route.snapshot.paramMap.get("tipo");
        this.errore = "";
    }
    segnala() {
        if (!this.msg || this.msg.trim() == '') {
            this.errore = "Inserisci un messaggio di segnalazione";
            return;
        }
        if (this.msg.length < 5 || this.msg.length > 500) {
            this.errore = "Minimo 5 caratteri, massimo 500";
            return;
        }
        this.utilities.confirmAlert({
            header: "Attenzione",
            message: "Vuoi inviare questa segnalazione?",
            handlerYes: () => {
                var _a;
                let utente = (_a = this.data.esponente) !== null && _a !== void 0 ? _a : this.data.richiedente;
                utente = this.tipo == "ordine" ? this.data.nodoImpresa : utente;
                this.request.post({
                    path: "/report",
                    data: {
                        _msg: this.msg,
                        _tipo: this.tipo,
                        id: this.data.id,
                        utente: utente
                    },
                    handler: () => {
                        this.utilities.simplyAlert({
                            operation: () => { this.navCtrl.navigateForward("/home"); },
                            header: "Operazione effettuata",
                            message: "Segnalazione inviata con successo."
                        });
                    },
                    error: () => {
                        this.utilities.alertError({});
                    }
                });
            }
        });
    }
};
SegnalazionePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] }
];
SegnalazionePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-segnalazione',
        template: _raw_loader_segnalazione_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_segnalazione_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]])
], SegnalazionePage);



/***/ }),

/***/ "FMgM":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/segnalazione/segnalazione.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Segnala</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.tipo=='ordine'\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Attenzione!\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <div>\n            Qui potrai inviare segnalare la mancata ricezione del tuo ordine nella data concordata. E' consigliabile effettuare l'operazione di segnalazione solo se non si si riesce a contattare l'azienda che si occupa del prodotto per piu' di 5 giorni lavorativi per evitare che vi siano segnalazioni precoci \n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-textarea placeholder=\"Messaggio...\"  maxlength=\"500\" [(ngModel)]=\"msg\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <p>{{this.errore}}</p>\n  <ion-button size=\"small\" expand=\"block\" (click)=\"segnala()\">\n    Segnala\n  </ion-button>\n</ion-content>\n\n<ion-content *ngIf=\"this.tipo=='servizio'\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Attenzione\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <div>\n            Qui potrai segnalare la mancata esecuzione di un servizio da parte di un utente o la mancata conferma di un servizio effettivamente svolto.\n            E' consigliabile usufruire di questa opzione se non si riesce a contattare l'utente da segnalare per piu' di 5 giorni lavorativi.\n          </div>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-textarea placeholder=\"Messaggio...\"  maxlength=\"500\"[(ngModel)]=\"msg\"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <p>{{this.errore}}</p>\n  <ion-button size=\"small\" expand=\"block\" (click)=\"segnala()\">\n    Segnala\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "aGAh":
/*!***********************************************************!*\
  !*** ./src/app/pages/segnalazione/segnalazione.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWduYWxhemlvbmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "iVZW":
/*!*******************************************************************!*\
  !*** ./src/app/pages/segnalazione/segnalazione-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SegnalazionePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegnalazionePageRoutingModule", function() { return SegnalazionePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _segnalazione_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segnalazione.page */ "3HRV");




const routes = [
    {
        path: '',
        component: _segnalazione_page__WEBPACK_IMPORTED_MODULE_3__["SegnalazionePage"]
    }
];
let SegnalazionePageRoutingModule = class SegnalazionePageRoutingModule {
};
SegnalazionePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SegnalazionePageRoutingModule);



/***/ }),

/***/ "nQFI":
/*!***********************************************************!*\
  !*** ./src/app/pages/segnalazione/segnalazione.module.ts ***!
  \***********************************************************/
/*! exports provided: SegnalazionePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegnalazionePageModule", function() { return SegnalazionePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _segnalazione_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segnalazione-routing.module */ "iVZW");
/* harmony import */ var _segnalazione_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segnalazione.page */ "3HRV");







let SegnalazionePageModule = class SegnalazionePageModule {
};
SegnalazionePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _segnalazione_routing_module__WEBPACK_IMPORTED_MODULE_5__["SegnalazionePageRoutingModule"]
        ],
        declarations: [_segnalazione_page__WEBPACK_IMPORTED_MODULE_6__["SegnalazionePage"]]
    })
], SegnalazionePageModule);



/***/ })

}]);
//# sourceMappingURL=pages-segnalazione-segnalazione-module-es2015.js.map