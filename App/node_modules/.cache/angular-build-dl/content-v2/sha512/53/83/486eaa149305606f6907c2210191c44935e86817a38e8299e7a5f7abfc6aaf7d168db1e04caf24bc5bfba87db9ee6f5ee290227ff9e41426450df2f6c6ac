(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nuovo-servizio-nuovo-servizio-module"],{

/***/ "Cv0n":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nuovo-servizio/nuovo-servizio.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>nuovo Servizio</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"myContent\">\n\n  <form [formGroup]=\"newServiceForm\" (ngSubmit)=\"submit()\">\n    <ion-list>\n    \n      <ion-item> <!--!Nome-->\n        <ion-label position=\"floating\">Nome</ion-label>\n        <ion-input formControlName=\"nome\" autocapitalize inputmode=\"text\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.nome\">\n        <ng-container *ngIf=\"nome.hasError(error.type) && (nome.dirty || nome.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-item> <!--!Descrizione-->\n        <ion-label position=\"floating\">Descrizione</ion-label>\n        <ion-input formControlName=\"descrizione\" autocapitalize inputmode=\"text\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.descrizione\">\n        <ng-container *ngIf=\"descrizione.hasError(error.type) && (descrizione.dirty || descrizione.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-item> <!--!ore-->\n        <ion-label position=\"floating\">Ore massime dedicabili</ion-label>\n        <ion-input formControlName=\"ore\" autocapitalize inputmode=\"text\" type=\"number\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.ore\">\n        <ng-container *ngIf=\"ore.hasError(error.type) && (ore.dirty || ore.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-item> <!--!preavviso-->\n        <ion-label position=\"floating\">Giorni di preavviso</ion-label>\n        <ion-input formControlName=\"preavviso\" autocapitalize inputmode=\"text\" type=\"number\"></ion-input>\n      </ion-item>\n      <div *ngFor=\"let error of errorMessages.preavviso\">\n        <ng-container *ngIf=\"preavviso.hasError(error.type) && (preavviso.dirty || preavviso.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-button [disabled]=\"!newServiceForm.valid\" type=\"submit\" expand=\"block\">\n        Registra Servizio\n      </ion-button>\n      <p class=\"error-message\">{{this.errore}}</p>\n    </ion-list>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "Vv//":
/*!***********************************************************************!*\
  !*** ./src/app/pages/nuovo-servizio/nuovo-servizio-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: NuovoServizioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuovoServizioPageRoutingModule", function() { return NuovoServizioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nuovo_servizio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nuovo-servizio.page */ "b0WA");




const routes = [
    {
        path: '',
        component: _nuovo_servizio_page__WEBPACK_IMPORTED_MODULE_3__["NuovoServizioPage"]
    }
];
let NuovoServizioPageRoutingModule = class NuovoServizioPageRoutingModule {
};
NuovoServizioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NuovoServizioPageRoutingModule);



/***/ }),

/***/ "b0WA":
/*!*************************************************************!*\
  !*** ./src/app/pages/nuovo-servizio/nuovo-servizio.page.ts ***!
  \*************************************************************/
/*! exports provided: NuovoServizioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuovoServizioPage", function() { return NuovoServizioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nuovo_servizio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nuovo-servizio.page.html */ "Cv0n");
/* harmony import */ var _nuovo_servizio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nuovo-servizio.page.scss */ "uB+9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let NuovoServizioPage = class NuovoServizioPage {
    constructor(navCtrl, request, utilities, formBuilder) {
        this.navCtrl = navCtrl;
        this.request = request;
        this.utilities = utilities;
        this.formBuilder = formBuilder;
        this.newServiceForm = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5)], this.utilities.validatorNotEmpty],
            descrizione: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(500), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(5)], this.utilities.validatorNotEmpty],
            ore: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^[0-9]+$")]],
            preavviso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].max(14), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern("^[0-9]+$"),]],
        });
        this.errorMessages = {
            nome: [
                { type: "required", message: "Questo campo è obbligatorio" },
                { type: "maxlength", message: "Massimo 50 caratteri" },
                { type: "minlength", message: "Minimo 5 caratteri" }
            ],
            descrizione: [
                { type: "required", message: "Questo campo è obbligatorio" },
                { type: "maxlength", message: "Massimo 500 caratteri" },
                { type: "minlength", message: "Minimo 5 caratteri" }
            ],
            ore: [
                { type: "required", message: "Questo campo è obbligatorio" },
                { type: "max", message: "Massimo 5 ore" },
                { type: "min", message: "Minimo 1 ore" },
                { type: "pattern", message: "Solo numeri interi positivi" }
            ],
            preavviso: [
                { type: "pattern", message: "Solo numeri interi positivi" },
                { type: "required", message: "Questo campo è obbligatorio" },
                { type: "max", message: "Massimo 14 giorni" },
                { type: "min", message: "Minimo 1 giorni" },
            ],
        };
    }
    get nome() {
        return this.newServiceForm.get("nome");
    }
    get descrizione() {
        return this.newServiceForm.get("descrizione");
    }
    get ore() {
        return this.newServiceForm.get("ore");
    }
    get preavviso() {
        return this.newServiceForm.get("preavviso");
    }
    submit() {
        let servizio = {
            "nome": this.newServiceForm.value.nome,
            "descrizione": this.newServiceForm.value.descrizione,
            "preavviso": this.newServiceForm.value.ore,
            "ore": this.newServiceForm.value.preavviso,
        };
        this.request.post({
            path: "/services/mine",
            data: servizio,
            handler: (result) => {
                this.utilities.simplyAlert({
                    header: "Operazone effettuata",
                    message: "Il servizio è stato inviato correttamente, una volta accettato gli altri utenti potranno richiederlo",
                    operation: () => {
                        this.navCtrl.navigateForward("/servizi");
                    },
                });
            },
            error: () => {
                this.utilities.alertError({
                    handler: () => {
                        this.navCtrl.navigateForward("/servizi");
                    }
                });
            }
        });
    }
};
NuovoServizioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
NuovoServizioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuovo-servizio',
        template: _raw_loader_nuovo_servizio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuovo_servizio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], NuovoServizioPage);



/***/ }),

/***/ "uB+9":
/*!***************************************************************!*\
  !*** ./src/app/pages/nuovo-servizio/nuovo-servizio.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: red;\n  text-align: center;\n}\n\nion-item {\n  color: #457c8d;\n  --highlight-color-invalid: red;\n}\n\nion-item:hover {\n  background-color: #404f79;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251b3ZvLXNlcnZpemlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUVBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6Im51b3ZvLXNlcnZpemlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWl0ZW0ge1xuICAgIGNvbG9yOiAjNDU3YzhkOztcbi8vICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTsgLy8gZGVmYXVsdCB1bmRlcmxpbmUgY29sb3JcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZWQ7IC8vIGludmFsaWQgdW5kZXJsaW5lIGNvbG9yXG59XG5cbmlvbi1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDRmNzk7XG59Il19 */");

/***/ }),

/***/ "vzTz":
/*!***************************************************************!*\
  !*** ./src/app/pages/nuovo-servizio/nuovo-servizio.module.ts ***!
  \***************************************************************/
/*! exports provided: NuovoServizioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuovoServizioPageModule", function() { return NuovoServizioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _nuovo_servizio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nuovo-servizio-routing.module */ "Vv//");
/* harmony import */ var _nuovo_servizio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nuovo-servizio.page */ "b0WA");







let NuovoServizioPageModule = class NuovoServizioPageModule {
};
NuovoServizioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _nuovo_servizio_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuovoServizioPageRoutingModule"]
        ],
        declarations: [_nuovo_servizio_page__WEBPACK_IMPORTED_MODULE_6__["NuovoServizioPage"]]
    })
], NuovoServizioPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-nuovo-servizio-nuovo-servizio-module-es2015.js.map