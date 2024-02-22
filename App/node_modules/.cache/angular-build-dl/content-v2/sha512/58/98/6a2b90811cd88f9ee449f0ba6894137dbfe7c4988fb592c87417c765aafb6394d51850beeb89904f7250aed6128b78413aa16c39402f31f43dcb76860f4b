(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servizi-collettivita-servizi-collettivita-module"],{

/***/ "18ES":
/*!*************************************************************************!*\
  !*** ./src/app/pages/servizi-collettivita/servizi-collettivita.page.ts ***!
  \*************************************************************************/
/*! exports provided: ServiziCollettivitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiziCollettivitaPage", function() { return ServiziCollettivitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_servizi_collettivita_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./servizi-collettivita.page.html */ "HhyJ");
/* harmony import */ var _servizi_collettivita_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servizi-collettivita.page.scss */ "ZEoV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/plugin.service */ "ESzt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










let ServiziCollettivitaPage = class ServiziCollettivitaPage {
    constructor(plugin, route, navCtrl, request, utilities, formBuilder) {
        this.plugin = plugin;
        this.route = route;
        this.navCtrl = navCtrl;
        this.request = request;
        this.utilities = utilities;
        this.formBuilder = formBuilder;
        this.ServizioCollettivitaForm = this.formBuilder.group({
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].minLength(5), this.utilities.validatorNotEmpty]],
            data: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            ets: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            bisogno: [''],
            bisognoSegnalato: [''],
        });
        this.errorMessages = {
            description: [
                { type: "required", message: "Inserisci una descrizione" },
                { type: "maxLength", message: "Minimo 5 caratteri" },
                { type: "minLength", message: "Massimo 500 caratteri" },
            ],
            data: [
                { type: "required", message: "Inserisci la data di esecuzione del servizio" },
            ],
            ets: [
                { type: "required", message: "Seleziona l'ets per la certificazione" },
            ],
        };
        this.imgSrc = this.utilities.img;
        this.imgSrc = this.utilities.img;
        this.bisognoSegnalato.setValue(false);
        let handler = () => {
            this.navCtrl.navigateForward("/home");
        };
        this.request.get({
            path: "/services/community/ets",
            handler: (resp) => {
                this.enti = resp["_msg"];
            },
            error: () => {
                this.utilities.alertError({ handler: handler });
            }
        });
        this.request.get({
            path: "/needs",
            httpParam: {
                _all: "True",
                _page: "",
                _psize: ""
            },
            handler: (resp) => {
                this.bisogni = resp["_msg"];
                this.idBisognoEsterno = JSON.parse(this.route.snapshot.paramMap.get("bisogno"));
                if (this.idBisognoEsterno != null) {
                    this.bisognoSegnalato.setValue(true);
                }
            },
            error: () => {
                this.utilities.alertError({ handler: handler });
            }
        });
    }
    get ets() {
        return this.ServizioCollettivitaForm.get("ets");
    }
    get bisogno() {
        return this.ServizioCollettivitaForm.get("bisogno");
    }
    get bisognoSegnalato() {
        return this.ServizioCollettivitaForm.get("bisognoSegnalato");
    }
    get description() {
        return this.ServizioCollettivitaForm.get("description");
    }
    get data() {
        return this.ServizioCollettivitaForm.get("data");
    }
    submit() {
        if (this.ServizioCollettivitaForm.value.bisognoSegnalato && this.ServizioCollettivitaForm.value.bisogno == "") {
            this.errore = "Inserisci il bisogno che hai soddisfatto";
            return;
        }
        if (this.imgSend == null) {
            this.errore = "Inserisci un allegato";
            return;
        }
        let data = {
            "msg": this.ServizioCollettivitaForm.value.description,
            "date": this.ServizioCollettivitaForm.value.data,
            "bisognoSegnalato": this.ServizioCollettivitaForm.value.bisognoSegnalato,
            "idBisogno": this.ServizioCollettivitaForm.value.bisogno,
            "idEnte": this.ServizioCollettivitaForm.value.ets,
            "foto": this.imgSend
        };
        let handler = () => {
            this.navCtrl.navigateForward("/home");
        };
        this.request.post({
            path: "/services/community",
            data: data,
            handler: () => {
                this.utilities.simplyAlert({
                    header: "Operazione effettuata",
                    message: "Grazie per il tuo contributo!",
                    operation: handler
                });
            },
            error: () => {
                this.utilities.alertError({
                    handler: handler
                });
            }
        });
    }
    chooseImage($event = null) {
        this.plugin.chooseIm($event, (img) => {
            this.imgSrc = 'data:image/jpeg;base64,' + img;
            this.imgSend = img;
        });
    }
};
ServiziCollettivitaPage.ctorParameters = () => [
    { type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_8__["PluginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] }
];
ServiziCollettivitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-servizi-collettivita',
        template: _raw_loader_servizi_collettivita_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_servizi_collettivita_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_8__["PluginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])
], ServiziCollettivitaPage);



/***/ }),

/***/ "HhyJ":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/servizi-collettivita/servizi-collettivita.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Comunità</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Benvenuto!\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Qui potrai inserire eventuali servizi offerti alla comunita'. Compilare tutti i campi per mandare la richiesta, una volta verificata verranno caricati dei token sul tuo account.\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-content id=\"myContent\" class=\"ion-padding ion-text-center\">\n    <form [formGroup]=\"ServizioCollettivitaForm\" (ngSubmit)=\"submit()\">\n      <ion-list>\n\n        <ion-img src=\"{{ imgSrc }}\"></ion-img>\n        <ion-button *ngIf=\"mobile\"  id=\"myButtonYellow\" expand=\"full\" (click)=\"chooseImage()\">Inserisci foto</ion-button>\n        <ion-button *ngIf=\"!mobile\" id=\"myButtonYellow\" expand=\"full\" (click)=\"f.click()\">Inserisci foto</ion-button>\n        <input  class=\"ion-hide\" #f type=\"file\" (change)=\"chooseImage($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\">\n\n        <ion-item> \n          <ion-label position=\"floating\">Descrivi il tuo servizio</ion-label>\n          <ion-input formControlName=\"description\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.description\">\n          <ng-container *ngIf=\"description.hasError(error.type) && (description.dirty || description.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!data-->\n          <ion-label>Data del servizio offerto</ion-label>\n          <ion-input formControlName=\"data\" autocapitalize type=\"date\" inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.data\">\n          <ng-container *ngIf=\"data.hasError(error.type) && (data.dirty || data.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> \n          <ion-label position=\"floating\">ETS Certificatore</ion-label>\n          <ion-select formControlName=\"ets\" cancelText=\"Esci\" okText=\"Scegli\">\n            <ion-select-option  *ngFor=\"let i of enti\" value={{i.id}}>{{i.nome}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.ets\">\n          <ng-container *ngIf=\"ets.hasError(error.type) && (ets.dirty || ets.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label>E' un bisogno segnalato</ion-label>\n          <ion-toggle formControlName=\"bisognoSegnalato\"></ion-toggle>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Bisogni</ion-label>\n          <ion-select formControlName=\"bisogno\" value=\"{{idBisognoEsterno}}\" [disabled]=\"!bisognoSegnalato.value\" cancelText=\"Esci\" okText=\"Scegli\">\n            <ion-select-option *ngFor=\"let i of bisogni\" value={{i?.id}}>{{i?.nome}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <p class=\"error-message\">{{this.errore}}</p>\n        <ion-button [disabled]=\"!ServizioCollettivitaForm.valid\" type=\"submit\" expand=\"block\">\n          Invia\n        </ion-button>\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "SFeI":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/servizi-collettivita/servizi-collettivita-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ServiziCollettivitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiziCollettivitaPageRoutingModule", function() { return ServiziCollettivitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _servizi_collettivita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servizi-collettivita.page */ "18ES");




const routes = [
    {
        path: '',
        component: _servizi_collettivita_page__WEBPACK_IMPORTED_MODULE_3__["ServiziCollettivitaPage"]
    }
];
let ServiziCollettivitaPageRoutingModule = class ServiziCollettivitaPageRoutingModule {
};
ServiziCollettivitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiziCollettivitaPageRoutingModule);



/***/ }),

/***/ "ZEoV":
/*!***************************************************************************!*\
  !*** ./src/app/pages/servizi-collettivita/servizi-collettivita.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlcnZpemktY29sbGV0dGl2aXRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJzZXJ2aXppLWNvbGxldHRpdml0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW1ne1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgXG59XG4iXX0= */");

/***/ }),

/***/ "t3k6":
/*!***************************************************************************!*\
  !*** ./src/app/pages/servizi-collettivita/servizi-collettivita.module.ts ***!
  \***************************************************************************/
/*! exports provided: ServiziCollettivitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiziCollettivitaPageModule", function() { return ServiziCollettivitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _servizi_collettivita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servizi-collettivita-routing.module */ "SFeI");
/* harmony import */ var _servizi_collettivita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servizi-collettivita.page */ "18ES");







let ServiziCollettivitaPageModule = class ServiziCollettivitaPageModule {
};
ServiziCollettivitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _servizi_collettivita_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiziCollettivitaPageRoutingModule"]
        ],
        declarations: [_servizi_collettivita_page__WEBPACK_IMPORTED_MODULE_6__["ServiziCollettivitaPage"]]
    })
], ServiziCollettivitaPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-servizi-collettivita-servizi-collettivita-module-es2015.js.map