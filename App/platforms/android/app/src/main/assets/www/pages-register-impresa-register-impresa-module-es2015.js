(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-impresa-register-impresa-module"],{

/***/ "7tFP":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-impresa/register-impresa.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Registrazione</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"myContent\" class=\"ion-padding ion-text-center\">\n  <form [formGroup]=\"registerImpresaForm\" (ngSubmit)=\"submit()\">\n    <ion-list>\n      <ion-title class=\"ion-text-center\">Dati per il Login</ion-title>\n\n        <ion-item> <!--!Username-->\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input formControlName=\"username\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.username\">\n          <ng-container *ngIf=\"username.hasError(error.type) && (username.dirty || username.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!Password-->\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.password\">\n          <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!check Passowrd-->\n          <ion-label position=\"floating\">Verifica Password</ion-label>\n          <ion-input formControlName=\"check\" type=\"password\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.check\">\n          <ng-container *ngIf=\"check.hasError(error.type) && (check.dirty || check.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n      <ion-title class=\"ion-text-center\">Anagrafica</ion-title>\n\n        <ion-img src=\"{{ imgSrc }}\"></ion-img>\n        <ion-button *ngIf=\"this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"chooseImage()\">Inserisci una tua foto</ion-button>\n        <ion-button *ngIf=\"!this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"f.click()\">Inserisci una tua foto</ion-button>\n        <input  class=\"ion-hide\" #f type=\"file\" (change)=\"chooseImage($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\">\n        \n\n        <ion-item> <!--!Nome-->\n          <ion-label position=\"floating\">Nome</ion-label>\n          <ion-input formControlName=\"nome\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.nome\">\n          <ng-container *ngIf=\"nome.hasError(error.type) && (nome.dirty || nome.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!tipo-->\n          <ion-label position=\"floating\">Tipo</ion-label>\n          <ion-input formControlName=\"tipo\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.tipo\">\n          <ng-container *ngIf=\"tipo.hasError(error.type) && (tipo.dirty || tipo.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!piva-->\n          <ion-label position=\"floating\">P. iva</ion-label>\n          <ion-input formControlName=\"piva\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.piva\">\n          <ng-container *ngIf=\"piva.hasError(error.type) && (piva.dirty || piva.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        \n        <ion-item> <!--!cf-->\n          <ion-label position=\"floating\">Codice Fiscale</ion-label>\n          <ion-input formControlName=\"cf\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cf\">\n          <ng-container *ngIf=\"cf.hasError(error.type) && (cf.dirty || cf.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!telefono-->\n          <ion-label position=\"floating\">Telefono</ion-label>\n          <ion-input formControlName=\"telefono\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.telefono\">\n          <ng-container *ngIf=\"telefono.hasError(error.type) && (telefono.dirty || telefono.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!email-->\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input formControlName=\"email\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.email\">\n          <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!stato-->\n          <ion-label position=\"floating\">Stato</ion-label>\n          <ion-input formControlName=\"stato\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.stato\">\n          <ng-container *ngIf=\"stato.hasError(error.type) && (stato.dirty || stato.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!regione-->\n          <ion-label position=\"floating\">Regione</ion-label>\n          <ion-input formControlName=\"regione\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.regione\">\n          <ng-container *ngIf=\"regione.hasError(error.type) && (regione.dirty || regione.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n\n        <ion-item> <!--!Citta-->\n          <ion-label position=\"floating\">Città</ion-label>\n          <ion-input formControlName=\"citta\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.citta\">\n          <ng-container *ngIf=\"citta.hasError(error.type) && (citta.dirty || citta.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n\n        <ion-item> <!--!Via-->\n          <ion-label position=\"floating\">Via</ion-label>\n          <ion-input formControlName=\"via\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.via\">\n          <ng-container *ngIf=\"via.hasError(error.type) && (via.dirty || via.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!cap-->\n          <ion-label position=\"floating\">CAP</ion-label>\n          <ion-input formControlName=\"cap\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cap\">\n          <ng-container *ngIf=\"cap.hasError(error.type) && (cap.dirty || cap.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <p class=\"error-message\">{{this.errore}}</p>\n\n      <ion-button [disabled]=\"!registerImpresaForm.valid\" type=\"submit\" expand=\"block\">\n        Registrati\n      </ion-button>\n    </ion-list>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "HXiJ":
/*!*******************************************************************!*\
  !*** ./src/app/pages/register-impresa/register-impresa.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterImpresaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterImpresaPageModule", function() { return RegisterImpresaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _register_impresa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-impresa-routing.module */ "RZb6");
/* harmony import */ var _register_impresa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-impresa.page */ "l/nR");







let RegisterImpresaPageModule = class RegisterImpresaPageModule {
};
RegisterImpresaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_impresa_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterImpresaPageRoutingModule"]
        ],
        declarations: [_register_impresa_page__WEBPACK_IMPORTED_MODULE_6__["RegisterImpresaPage"]]
    })
], RegisterImpresaPageModule);



/***/ }),

/***/ "RZb6":
/*!***************************************************************************!*\
  !*** ./src/app/pages/register-impresa/register-impresa-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterImpresaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterImpresaPageRoutingModule", function() { return RegisterImpresaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_impresa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-impresa.page */ "l/nR");




const routes = [
    {
        path: '',
        component: _register_impresa_page__WEBPACK_IMPORTED_MODULE_3__["RegisterImpresaPage"]
    }
];
let RegisterImpresaPageRoutingModule = class RegisterImpresaPageRoutingModule {
};
RegisterImpresaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterImpresaPageRoutingModule);



/***/ }),

/***/ "l/nR":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-impresa/register-impresa.page.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterImpresaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterImpresaPage", function() { return RegisterImpresaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_impresa_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register-impresa.page.html */ "7tFP");
/* harmony import */ var _register_impresa_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-impresa.page.scss */ "qVmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/plugin.service */ "ESzt");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let RegisterImpresaPage = class RegisterImpresaPage {
    constructor(navCtrl, plugin, request, utilities, formBuilder) {
        this.navCtrl = navCtrl;
        this.plugin = plugin;
        this.request = request;
        this.utilities = utilities;
        this.formBuilder = formBuilder;
        this.imgSrc = this.utilities.img;
        this.foto = null;
        this.errore = "";
        //#endregion
        this.varLength = {
            username: { min: 5, max: 50 },
            nome: { min: 5, max: 50 },
            tipo: { min: 5, max: 50 },
            email: { min: 5, max: 100 },
            stato: { min: 5, max: 50 },
            regione: { min: 5, max: 50 },
            citta: { min: 5, max: 50 },
            via: { min: 5, max: 100 },
        };
        this.defaultMessages = {
            required: "Questo campo è obbligatorio",
            spaces: "Non sono ammessi spazi",
            maxlength: (max) => {
                return `Massimo ${max} caratteri`;
            },
            minlength: (min) => {
                return `Minimo ${min} caratteri`;
            }
        };
        this.errorMessages = {
            username: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.username.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.username.min) },
                { type: "spaces", message: this.defaultMessages.spaces }
            ],
            password: [
                { type: "required", message: this.defaultMessages.required },
                { type: "pattern", message: "Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri" }
            ],
            check: [
                { type: "required", message: this.defaultMessages.required },
                { type: "different", message: "Le password devono coincidere" },
            ],
            nome: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.nome.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.nome.min) },
            ],
            tipo: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.tipo.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.tipo.min) },
            ],
            piva: [
                { type: "required", message: this.defaultMessages.required },
                { type: "pattern", message: "Il formato della partita iva non è corretto" }
            ],
            cf: [
                { type: "required", message: this.defaultMessages.required },
                { type: "invalidCF", message: "Il formato del codice fiscale non è corretto" },
            ],
            telefono: [
                { type: "required", message: this.defaultMessages.required },
                { type: "pattern", message: "Il formato del numero di telefono non è corretto" },
            ],
            email: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.email.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.email.min) },
                { type: "email", message: "Il formato dell'email non è corretto" },
            ],
            stato: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.stato.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.stato.min) },
            ],
            regione: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.regione.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.regione.min) },
            ],
            citta: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.citta.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.citta.min) },
            ],
            via: [
                { type: "required", message: this.defaultMessages.required },
                { type: "maxlength", message: this.defaultMessages.maxlength(this.varLength.via.max) },
                { type: "minlength", message: this.defaultMessages.minlength(this.varLength.via.min) },
            ],
            cap: [
                { type: "required", message: this.defaultMessages.required },
                { type: "pattern", message: "Il formato del CAP non è corretto" },
            ],
        };
        this.registerImpresaForm = this.formBuilder.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.username.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.username.min),
                    this.utilities.validatorHasWhiteSpaces // spaces
                ]
            ],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$")
                ]
            ],
            check: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    this.utilities.validatorCheckPassword // different
                ]
            ],
            nome: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.nome.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.nome.min),
                    this.utilities.validatorNotEmpty // required
                ]
            ],
            tipo: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.tipo.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.tipo.min),
                    this.utilities.validatorNotEmpty // required
                ]
            ],
            piva: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^[0-9]{11}$")
                ]
            ],
            cf: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    this.utilities.validatorCF //invaliCF
                ]
            ],
            telefono: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("[0-9]{10,12}")
                ]
            ],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.email.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.email.min),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email,
                ]
            ],
            stato: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.stato.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.stato.min),
                    this.utilities.validatorNotEmpty
                ]
            ],
            regione: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.regione.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.regione.min),
                    this.utilities.validatorNotEmpty
                ]
            ],
            citta: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.citta.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.citta.min),
                    this.utilities.validatorNotEmpty
                ]
            ],
            via: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.via.max),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.via.min),
                    this.utilities.validatorNotEmpty
                ]
            ],
            cap: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("[0-9]{5}")
                ]
            ],
        });
    }
    //#region Variables
    get username() {
        return this.registerImpresaForm.get("username");
    }
    get password() {
        return this.registerImpresaForm.get("password");
    }
    get check() {
        return this.registerImpresaForm.get("check");
    }
    get nome() {
        return this.registerImpresaForm.get("nome");
    }
    get tipo() {
        return this.registerImpresaForm.get("tipo");
    }
    get piva() {
        return this.registerImpresaForm.get("piva");
    }
    get data() {
        return this.registerImpresaForm.get("data");
    }
    get cf() {
        return this.registerImpresaForm.get("cf");
    }
    get telefono() {
        return this.registerImpresaForm.get("telefono");
    }
    get email() {
        return this.registerImpresaForm.get("email");
    }
    get stato() {
        return this.registerImpresaForm.get("stato");
    }
    get regione() {
        return this.registerImpresaForm.get("regione");
    }
    get citta() {
        return this.registerImpresaForm.get("citta");
    }
    get via() {
        return this.registerImpresaForm.get("via");
    }
    get cap() {
        return this.registerImpresaForm.get("cap");
    }
    submit() {
        this.errore = "";
        if (this.foto == null) {
            this.errore = "Inserisci una tua foto";
            return;
        }
        let data = {
            _username: this.registerImpresaForm.value.username,
            _password: this.registerImpresaForm.value.password,
            _nome: this.registerImpresaForm.value.nome,
            _tipo: this.registerImpresaForm.value.tipo,
            _iva: this.registerImpresaForm.value.piva,
            _cf: this.registerImpresaForm.value.cf.toUpperCase(),
            _telefono: this.registerImpresaForm.value.telefono,
            _mail: this.registerImpresaForm.value.email,
            _stato: this.registerImpresaForm.value.stato,
            _regione: this.registerImpresaForm.value.regione,
            _citta: this.registerImpresaForm.value.citta,
            _via: this.registerImpresaForm.value.via,
            _cap: this.registerImpresaForm.value.cap,
            _accountType: "impresa",
            _foto: this.foto
        };
        console.log(data);
        this.request.post({
            path: "/register",
            data: data,
            handler: () => {
                this.utilities.simplyAlert({
                    operation: () => { this.navCtrl.navigateForward("/login"); },
                    header: "Operazione effettuata",
                    message: "Registrazione avvenuta con successo."
                });
            },
            error: (error) => {
                if (error.status == 401) {
                    this.errore = "Username già in uso.";
                }
                else {
                    this.utilities.alertError({
                        handler: () => { this.navCtrl.navigateForward("/login"); },
                        message: "Errore",
                        header: "Si è verificato un errore nella registrazione. Riprova più tardi."
                    });
                }
            }
        });
    }
    chooseImage($event = null) {
        this.plugin.chooseIm($event, (imgPath) => {
            this.imgSrc = 'data:image/jpeg;base64,' + imgPath;
            this.foto = imgPath;
        });
    }
};
RegisterImpresaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
RegisterImpresaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-impresa',
        template: _raw_loader_register_impresa_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_impresa_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
], RegisterImpresaPage);



/***/ }),

/***/ "qVmL":
/*!*******************************************************************!*\
  !*** ./src/app/pages/register-impresa/register-impresa.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLWltcHJlc2EucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLWltcHJlc2EucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-register-impresa-register-impresa-module-es2015.js.map