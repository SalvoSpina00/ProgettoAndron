(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-utente-register-utente-module"], {
    /***/
    "6TvY":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/register-utente/register-utente.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function TvY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-img {\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLXV0ZW50ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXItdXRlbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbWd7XG4gICAgaGVpZ2h0OiAzMHZoO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBcbn0iXX0= */";
      /***/
    },

    /***/
    "DqAs":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register-utente/register-utente.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DqAs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Registrazione</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"myContent\" class=\"ion-padding ion-text-center\">\n\n  <form [formGroup]=\"registerUserForm\" (ngSubmit)=\"submit()\">\n    <ion-list>\n      <ion-title class=\"ion-text-center\">Dati per il Login</ion-title>\n\n        <ion-item> <!--!Username-->\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input formControlName=\"username\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.username\">\n          <ng-container *ngIf=\"username.hasError(error.type) && (username.dirty || username.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!Password-->\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.password\">\n          <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!check Passowrd-->\n          <ion-label position=\"floating\">Verifica Password</ion-label>\n          <ion-input formControlName=\"check\" type=\"password\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.check\">\n          <ng-container *ngIf=\"check.hasError(error.type) && (check.dirty || check.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n      <ion-title class=\"ion-text-center\">Anagrafica</ion-title>\n\n        <ion-img src=\"{{ imgSrc }}\"></ion-img>\n        <ion-button *ngIf=\"this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"chooseImage()\">Inserisci una tua foto</ion-button>\n        <ion-button *ngIf=\"!this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"f.click()\">Inserisci una tua foto</ion-button>\n        <input  class=\"ion-hide\" #f type=\"file\" (change)=\"chooseImage($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\">\n        \n\n        <ion-item> <!--!Nome-->\n          <ion-label position=\"floating\">Nome</ion-label>\n          <ion-input formControlName=\"nome\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.nome\">\n          <ng-container *ngIf=\"nome.hasError(error.type) && (nome.dirty || nome.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!Cognome-->\n          <ion-label position=\"floating\">Cognome</ion-label>\n          <ion-input formControlName=\"cognome\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cognome\">\n          <ng-container *ngIf=\"cognome.hasError(error.type) && (cognome.dirty || cognome.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!data-->\n          <ion-label position=\"floating\">Data di nascita</ion-label>\n          <ion-input formControlName=\"data\" autocapitalize type=\"date\" inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.data\">\n          <ng-container *ngIf=\"data.hasError(error.type) && (data.dirty || data.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        \n        <ion-item> <!--!cf-->\n          <ion-label position=\"floating\">Codice Fiscale</ion-label>\n          <ion-input formControlName=\"cf\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cf\">\n          <ng-container *ngIf=\"cf.hasError(error.type) && (cf.dirty || cf.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!telefono-->\n          <ion-label position=\"floating\">Telefono</ion-label>\n          <ion-input formControlName=\"telefono\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.telefono\">\n          <ng-container *ngIf=\"telefono.hasError(error.type) && (telefono.dirty || telefono.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!email-->\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input formControlName=\"email\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.email\">\n          <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!stato-->\n          <ion-label position=\"floating\">Stato</ion-label>\n          <ion-input formControlName=\"stato\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.stato\">\n          <ng-container *ngIf=\"stato.hasError(error.type) && (stato.dirty || stato.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!regione-->\n          <ion-label position=\"floating\">Regione</ion-label>\n          <ion-input formControlName=\"regione\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.regione\">\n          <ng-container *ngIf=\"regione.hasError(error.type) && (regione.dirty || regione.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n\n        <ion-item> <!--!Citta-->\n          <ion-label position=\"floating\">Città</ion-label>\n          <ion-input formControlName=\"citta\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.citta\">\n          <ng-container *ngIf=\"citta.hasError(error.type) && (citta.dirty || citta.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n\n        <ion-item> <!--!Via-->\n          <ion-label position=\"floating\">Via</ion-label>\n          <ion-input formControlName=\"via\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.via\">\n          <ng-container *ngIf=\"via.hasError(error.type) && (via.dirty || via.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!cap-->\n          <ion-label position=\"floating\">CAP</ion-label>\n          <ion-input formControlName=\"cap\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.cap\">\n          <ng-container *ngIf=\"cap.hasError(error.type) && (cap.dirty || cap.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        <p class=\"error-message\">{{this.errore}}</p>\n\n      <ion-button [disabled]=\"!registerUserForm.valid\" type=\"submit\" expand=\"block\">\n        Registrati\n      </ion-button>\n    </ion-list>\n  </form>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "PiPV":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/register-utente/register-utente.module.ts ***!
      \*****************************************************************/

    /*! exports provided: RegisterUtentePageModule */

    /***/
    function PiPV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUtentePageModule", function () {
        return RegisterUtentePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _register_utente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-utente-routing.module */
      "UMAD");
      /* harmony import */


      var _register_utente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register-utente.page */
      "wqI6");

      var RegisterUtentePageModule = function RegisterUtentePageModule() {
        _classCallCheck(this, RegisterUtentePageModule);
      };

      RegisterUtentePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_utente_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterUtentePageRoutingModule"]],
        declarations: [_register_utente_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUtentePage"]]
      })], RegisterUtentePageModule);
      /***/
    },

    /***/
    "UMAD":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/register-utente/register-utente-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: RegisterUtentePageRoutingModule */

    /***/
    function UMAD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUtentePageRoutingModule", function () {
        return RegisterUtentePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _register_utente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register-utente.page */
      "wqI6");

      var routes = [{
        path: '',
        component: _register_utente_page__WEBPACK_IMPORTED_MODULE_3__["RegisterUtentePage"]
      }];

      var RegisterUtentePageRoutingModule = function RegisterUtentePageRoutingModule() {
        _classCallCheck(this, RegisterUtentePageRoutingModule);
      };

      RegisterUtentePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterUtentePageRoutingModule);
      /***/
    },

    /***/
    "wqI6":
    /*!***************************************************************!*\
      !*** ./src/app/pages/register-utente/register-utente.page.ts ***!
      \***************************************************************/

    /*! exports provided: RegisterUtentePage */

    /***/
    function wqI6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUtentePage", function () {
        return RegisterUtentePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_utente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register-utente.page.html */
      "DqAs");
      /* harmony import */


      var _register_utente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register-utente.page.scss */
      "6TvY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/plugin.service */
      "ESzt");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RegisterUtentePage = /*#__PURE__*/function () {
        function RegisterUtentePage(navCtrl, plugin, request, utilities, formBuilder) {
          _classCallCheck(this, RegisterUtentePage);

          this.navCtrl = navCtrl;
          this.plugin = plugin;
          this.request = request;
          this.utilities = utilities;
          this.formBuilder = formBuilder;
          this.imgSrc = this.utilities.img;
          this.foto = null;
          this.errore = ""; //#endregion

          this.varLength = {
            username: {
              min: 5,
              max: 50
            },
            nome: {
              min: 5,
              max: 50
            },
            cognome: {
              min: 5,
              max: 50
            },
            email: {
              min: 5,
              max: 100
            },
            stato: {
              min: 5,
              max: 50
            },
            regione: {
              min: 5,
              max: 50
            },
            citta: {
              min: 5,
              max: 50
            },
            via: {
              min: 5,
              max: 100
            }
          };
          this.defaultMessages = {
            required: "Questo campo è obbligatorio",
            spaces: "Non sono ammessi spazi",
            maxlength: function maxlength(max) {
              return "Massimo ".concat(max, " caratteri");
            },
            minlength: function minlength(min) {
              return "Minimo ".concat(min, " caratteri");
            }
          };
          this.errorMessages = {
            username: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.username.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.username.min)
            }, {
              type: "spaces",
              message: this.defaultMessages.spaces
            }],
            password: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "pattern",
              message: "Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri"
            }],
            check: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "different",
              message: "Le password devono coincidere"
            }],
            nome: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.nome.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.nome.min)
            }],
            cognome: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.cognome.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.cognome.min)
            }],
            data: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "minorenne",
              message: "Devi essere maggiorenne per iscriverti ad Andron"
            }],
            cf: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "invalidCF",
              message: "Il formato del codice fiscale non è corretto"
            }],
            telefono: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "pattern",
              message: "Il formato del numero di telefono non è corretto"
            }],
            email: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.email.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.email.min)
            }, {
              type: "email",
              message: "Il formato dell'email non è corretto"
            }],
            stato: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.stato.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.stato.min)
            }],
            regione: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.regione.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.regione.min)
            }],
            citta: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.citta.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.citta.min)
            }],
            via: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.via.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.via.min)
            }],
            cap: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "pattern",
              message: "Il formato del CAP non è corretto"
            }]
          };
          this.registerUserForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.username.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.username.min), this.utilities.validatorHasWhiteSpaces // spaces
            ]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$")]],
            check: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, this.utilities.validatorCheckPassword // different
            ]],
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.nome.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.nome.min), this.utilities.validatorNotEmpty // required
            ]],
            cognome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.cognome.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.cognome.min), this.utilities.validatorNotEmpty]],
            data: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, this.utilities.validatorDate //minorenne
            ]],
            cf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, this.utilities.validatorCF //invaliCF
            ]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("[0-9]{10,12}")]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.email.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.email.min), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email]],
            stato: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.stato.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.stato.min), this.utilities.validatorNotEmpty]],
            regione: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.regione.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.regione.min), this.utilities.validatorNotEmpty]],
            citta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.citta.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.citta.min), this.utilities.validatorNotEmpty]],
            via: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.via.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.via.min), this.utilities.validatorNotEmpty]],
            cap: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("[0-9]{5}")]]
          });
        } //#region Variables


        _createClass(RegisterUtentePage, [{
          key: "username",
          get: function get() {
            return this.registerUserForm.get("username");
          }
        }, {
          key: "password",
          get: function get() {
            return this.registerUserForm.get("password");
          }
        }, {
          key: "check",
          get: function get() {
            return this.registerUserForm.get("check");
          }
        }, {
          key: "nome",
          get: function get() {
            return this.registerUserForm.get("nome");
          }
        }, {
          key: "cognome",
          get: function get() {
            return this.registerUserForm.get("cognome");
          }
        }, {
          key: "data",
          get: function get() {
            return this.registerUserForm.get("data");
          }
        }, {
          key: "cf",
          get: function get() {
            return this.registerUserForm.get("cf");
          }
        }, {
          key: "telefono",
          get: function get() {
            return this.registerUserForm.get("telefono");
          }
        }, {
          key: "email",
          get: function get() {
            return this.registerUserForm.get("email");
          }
        }, {
          key: "stato",
          get: function get() {
            return this.registerUserForm.get("stato");
          }
        }, {
          key: "regione",
          get: function get() {
            return this.registerUserForm.get("regione");
          }
        }, {
          key: "citta",
          get: function get() {
            return this.registerUserForm.get("citta");
          }
        }, {
          key: "via",
          get: function get() {
            return this.registerUserForm.get("via");
          }
        }, {
          key: "cap",
          get: function get() {
            return this.registerUserForm.get("cap");
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            this.errore = "";

            if (this.foto == null) {
              this.errore = "Inserisci una tua foto";
              return;
            }

            var data = {
              _username: this.registerUserForm.value.username,
              _password: this.registerUserForm.value.password,
              _nome: this.registerUserForm.value.nome,
              _cognome: this.registerUserForm.value.cognome,
              _date: this.registerUserForm.value.data,
              _cf: this.registerUserForm.value.cf.toUpperCase(),
              _telefono: this.registerUserForm.value.telefono,
              _mail: this.registerUserForm.value.email,
              _stato: this.registerUserForm.value.stato,
              _regione: this.registerUserForm.value.regione,
              _citta: this.registerUserForm.value.citta,
              _via: this.registerUserForm.value.via,
              _cap: this.registerUserForm.value.cap,
              _foto: this.foto
            };
            this.request.post({
              path: "/register",
              data: data,
              handler: function handler() {
                _this.utilities.simplyAlert({
                  operation: function operation() {
                    _this.navCtrl.navigateForward("/login");
                  },
                  header: "Operazione effettuata",
                  message: "Registrazione avvenuta con successo."
                });
              },
              error: function error(_error) {
                if (_error.status == 401) {
                  _this.errore = "Username già in uso.";
                } else {
                  _this.utilities.alertError({
                    handler: function handler() {
                      _this.navCtrl.navigateForward("/login");
                    },
                    header: "Errore",
                    message: "Si è verificato un errore nella registrazione. Riprova più tardi."
                  });
                }
              }
            });
          }
        }, {
          key: "chooseImage",
          value: function chooseImage() {
            var _this2 = this;

            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            this.plugin.chooseIm($event, function (imgPath) {
              _this2.imgSrc = 'data:image/jpeg;base64,' + imgPath;
              _this2.foto = imgPath;
            });
          }
        }]);

        return RegisterUtentePage;
      }();

      RegisterUtentePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      RegisterUtentePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register-utente',
        template: _raw_loader_register_utente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_utente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_5__["PluginService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], RegisterUtentePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-register-utente-register-utente-module-es5.js.map