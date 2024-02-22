(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nuovo-prodotto-nuovo-prodotto-module"], {
    /***/
    "01VR":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/nuovo-prodotto/nuovo-prodotto-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: NuovoProdottoPageRoutingModule */

    /***/
    function VR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuovoProdottoPageRoutingModule", function () {
        return NuovoProdottoPageRoutingModule;
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


      var _nuovo_prodotto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./nuovo-prodotto.page */
      "oSnm");

      var routes = [{
        path: '',
        component: _nuovo_prodotto_page__WEBPACK_IMPORTED_MODULE_3__["NuovoProdottoPage"]
      }];

      var NuovoProdottoPageRoutingModule = function NuovoProdottoPageRoutingModule() {
        _classCallCheck(this, NuovoProdottoPageRoutingModule);
      };

      NuovoProdottoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NuovoProdottoPageRoutingModule);
      /***/
    },

    /***/
    "3oMI":
    /*!***************************************************************!*\
      !*** ./src/app/pages/nuovo-prodotto/nuovo-prodotto.module.ts ***!
      \***************************************************************/

    /*! exports provided: NuovoProdottoPageModule */

    /***/
    function oMI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuovoProdottoPageModule", function () {
        return NuovoProdottoPageModule;
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


      var _nuovo_prodotto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nuovo-prodotto-routing.module */
      "01VR");
      /* harmony import */


      var _nuovo_prodotto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./nuovo-prodotto.page */
      "oSnm");

      var NuovoProdottoPageModule = function NuovoProdottoPageModule() {
        _classCallCheck(this, NuovoProdottoPageModule);
      };

      NuovoProdottoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nuovo_prodotto_routing_module__WEBPACK_IMPORTED_MODULE_5__["NuovoProdottoPageRoutingModule"]],
        declarations: [_nuovo_prodotto_page__WEBPACK_IMPORTED_MODULE_6__["NuovoProdottoPage"]]
      })], NuovoProdottoPageModule);
      /***/
    },

    /***/
    "Biks":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nuovo-prodotto/nuovo-prodotto.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Biks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Nuovo Prodotto</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"myContent\">\n\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Benvenuto!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          In questa pagina potrai inserire i beni che saranno acquistabili tramite ANDRON\n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n    \n    <ion-img src=\"{{ imgSrc }}\"></ion-img>\n    <ion-button *ngIf=\"this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"chooseImage()\">Scegli immagine</ion-button>\n    <ion-button *ngIf=\"!this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"f.click()\">Scegli immagine</ion-button>\n    <input  class=\"ion-hide\" #f type=\"file\" (change)=\"chooseImage($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\">\n    \n    <form [formGroup]=\"newProductForm\" (ngSubmit)=\"submit()\">\n      \n        <ion-item> <!--!Nome-->\n          <ion-label position=\"floating\">Nome</ion-label>\n          <ion-input formControlName=\"nome\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.nome\">\n          <ng-container *ngIf=\"nome.hasError(error.type) && (nome.dirty || nome.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n\n        <ion-item> <!--!marca-->\n          <ion-label position=\"floating\">Marca</ion-label>\n          <ion-input formControlName=\"marca\" autocapitalize inputmode=\"text\" ></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.marca\">\n          <ng-container *ngIf=\"marca.hasError(error.type) && (marca.dirty || marca.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n  \n        <ion-item> <!--!Descrizione-->\n          <ion-label position=\"floating\">Descrizione</ion-label>\n          <ion-input formControlName=\"descrizione\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.descrizione\">\n          <ng-container *ngIf=\"descrizione.hasError(error.type) && (descrizione.dirty || descrizione.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n  \n        <ion-item> <!--!prezzo-->\n          <ion-label position=\"floating\">Prezzo</ion-label>\n          <ion-input formControlName=\"prezzo\" autocapitalize type=\"number\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.prezzo\">\n          <ng-container *ngIf=\"prezzo.hasError(error.type) && (prezzo.dirty || prezzo.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n     \n        <ion-item> <!--!quantita-->\n          <ion-label position=\"floating\">Quantità</ion-label>\n          <ion-input formControlName=\"quantita\" autocapitalize type=\"number\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.quantita\">\n          <ng-container *ngIf=\"quantita.hasError(error.type) && (quantita.dirty || quantita.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n      \n        <ion-item> <!--!categoria-->\n          <ion-label position=\"floating\">Categoria</ion-label>\n          <ion-input formControlName=\"categoria\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n        <div *ngFor=\"let error of errorMessages.categoria\">\n          <ng-container *ngIf=\"categoria.hasError(error.type) && (categoria.dirty || categoria.touched)\">\n            <small class=\"error-message\">{{error.message}}</small>\n          </ng-container>\n        </div>\n        \n        <p class=\"error-message\">{{this.errore}}</p>\n\n        <ion-button [disabled]=\"!newProductForm.valid\" type=\"submit\" expand=\"block\">\n          Registra Prodotto\n        </ion-button>\n    </form>\n\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "I6Tu":
    /*!***************************************************************!*\
      !*** ./src/app/pages/nuovo-prodotto/nuovo-prodotto.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function I6Tu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  color: red;\n  text-align: center;\n}\n\nion-item {\n  color: #181313;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: rgb(24, 19, 19);\n}\n\nion-item:hover {\n  background-color: #262847;\n}\n\nion-img {\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL251b3ZvLXByb2RvdHRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUVBLDhCQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREoiLCJmaWxlIjoibnVvdm8tcHJvZG90dG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taXRlbSB7XG4gICAgY29sb3I6IHJnYigyNCwgMTksIDE5KTtcbi8vICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTsgLy8gZGVmYXVsdCB1bmRlcmxpbmUgY29sb3JcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZWQ7IC8vIGludmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHJnYigyNCwgMTksIDE5KTsgLy8gdmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XG59XG5cbmlvbi1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDAsIDcxKTtcbn1cblxuXG5pb24taW1ne1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgXG59Il19 */";
      /***/
    },

    /***/
    "oSnm":
    /*!*************************************************************!*\
      !*** ./src/app/pages/nuovo-prodotto/nuovo-prodotto.page.ts ***!
      \*************************************************************/

    /*! exports provided: NuovoProdottoPage */

    /***/
    function oSnm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuovoProdottoPage", function () {
        return NuovoProdottoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nuovo_prodotto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nuovo-prodotto.page.html */
      "Biks");
      /* harmony import */


      var _nuovo_prodotto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nuovo-prodotto.page.scss */
      "I6Tu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");
      /* harmony import */


      var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/plugin.service */
      "ESzt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var NuovoProdottoPage = /*#__PURE__*/function () {
        function NuovoProdottoPage(navCtrl, request, utilities, plugin, formBuilder) {
          _classCallCheck(this, NuovoProdottoPage);

          this.navCtrl = navCtrl;
          this.request = request;
          this.utilities = utilities;
          this.plugin = plugin;
          this.formBuilder = formBuilder;
          this.foto = null;
          this.errore = ""; //#endregion

          this.defaultMessages = {
            required: "Questo campo è obbligatorio",
            maxlength: function maxlength(max) {
              return "Massimo ".concat(max, " caratteri");
            },
            minlength: function minlength(min) {
              return "Minimo ".concat(min, " caratteri");
            },
            max: function max(_max) {
              return "Massimo ".concat(_max);
            },
            min: function min(_min) {
              return "Minimo ".concat(_min);
            }
          };
          this.varLength = {
            nome: {
              min: 5,
              max: 50
            },
            marca: {
              min: 5,
              max: 50
            },
            descrizione: {
              min: 5,
              max: 500
            },
            prezzo: {
              min: 1,
              max: 300
            },
            quantita: {
              min: 1,
              max: 99
            },
            categoria: {
              min: 5,
              max: 50
            }
          };
          this.errorMessages = {
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
            marca: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.marca.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.marca.min)
            }],
            descrizione: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.descrizione.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.descrizione.min)
            }],
            quantita: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "max",
              message: this.defaultMessages.max(this.varLength.quantita.max)
            }, {
              type: "min",
              message: this.defaultMessages.min(this.varLength.quantita.min)
            }, {
              type: "pattern",
              message: "Solo numeri interi"
            }],
            prezzo: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "max",
              message: this.defaultMessages.max(this.varLength.prezzo.max)
            }, {
              type: "min",
              message: this.defaultMessages.min(this.varLength.prezzo.min)
            }, {
              type: "pattern",
              message: "Solo numeri interi"
            }],
            categoria: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.categoria.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.categoria.min)
            }]
          };
          this.newProductForm = this.formBuilder.group({
            nome: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.nome.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.nome.min), this.utilities.validatorNotEmpty // required
            ]],
            marca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.marca.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.marca.min), this.utilities.validatorNotEmpty // required
            ]],
            descrizione: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.descrizione.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.descrizione.min), this.utilities.validatorNotEmpty // required
            ]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.varLength.categoria.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.varLength.categoria.min), this.utilities.validatorNotEmpty // required
            ]],
            prezzo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(this.varLength.prezzo.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(this.varLength.prezzo.min), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^[0-9]*$")]],
            quantita: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].max(this.varLength.quantita.max), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].min(this.varLength.quantita.min), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern("^[0-9]*$")]]
          });
          this.imgSrc = this.utilities.img;
        } //#region Getter


        _createClass(NuovoProdottoPage, [{
          key: "nome",
          get: function get() {
            return this.newProductForm.get("nome");
          }
        }, {
          key: "marca",
          get: function get() {
            return this.newProductForm.get("marca");
          }
        }, {
          key: "descrizione",
          get: function get() {
            return this.newProductForm.get("descrizione");
          }
        }, {
          key: "prezzo",
          get: function get() {
            return this.newProductForm.get("prezzo");
          }
        }, {
          key: "quantita",
          get: function get() {
            return this.newProductForm.get("quantita");
          }
        }, {
          key: "categoria",
          get: function get() {
            return this.newProductForm.get("categoria");
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            if (this.foto == null) {
              this.errore = "Inserisci una foto del prodotto";
              return;
            }

            var data = {
              categoria: this.categoria.value,
              descrizione: this.descrizione.value,
              foto: this.foto,
              marca: this.marca.value,
              nome: this.nome.value,
              prezzo: this.prezzo.value,
              quantita: this.quantita.value
            };
            this.request.post({
              path: "/products/mine",
              data: data,
              handler: function handler() {
                _this.utilities.simplyAlert({
                  operation: function operation() {
                    _this.navCtrl.navigateForward("/prodotti");
                  },
                  header: "Operazione effettuata",
                  message: "Prodotto inserito correttamente, una volta che verrà accettato gli altri utenti potranno acquistarlo."
                });
              },
              error: function error() {
                _this.utilities.alertError({
                  handler: function handler() {
                    _this.navCtrl.navigateForward("/prodotti");
                  }
                });
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

        return NuovoProdottoPage;
      }();

      NuovoProdottoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }, {
          type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      NuovoProdottoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nuovo-prodotto',
        template: _raw_loader_nuovo_prodotto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nuovo_prodotto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"], src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_7__["PluginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], NuovoProdottoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-nuovo-prodotto-nuovo-prodotto-module-es5.js.map