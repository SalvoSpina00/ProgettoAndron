(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-richiesta-richiesta-module"], {
    /***/
    "2smt":
    /*!*****************************************************!*\
      !*** ./src/app/pages/richiesta/richiesta.module.ts ***!
      \*****************************************************/

    /*! exports provided: RichiestaPageModule */

    /***/
    function smt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiestaPageModule", function () {
        return RichiestaPageModule;
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


      var _richiesta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./richiesta-routing.module */
      "fuql");
      /* harmony import */


      var _richiesta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./richiesta.page */
      "Rdne");

      var RichiestaPageModule = function RichiestaPageModule() {
        _classCallCheck(this, RichiestaPageModule);
      };

      RichiestaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _richiesta_routing_module__WEBPACK_IMPORTED_MODULE_5__["RichiestaPageRoutingModule"]],
        declarations: [_richiesta_page__WEBPACK_IMPORTED_MODULE_6__["RichiestaPage"]]
      })], RichiestaPageModule);
      /***/
    },

    /***/
    "Rdne":
    /*!***************************************************!*\
      !*** ./src/app/pages/richiesta/richiesta.page.ts ***!
      \***************************************************/

    /*! exports provided: RichiestaPage */

    /***/
    function Rdne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiestaPage", function () {
        return RichiestaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_richiesta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./richiesta.page.html */
      "n2i3");
      /* harmony import */


      var _richiesta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./richiesta.page.scss */
      "Sxoj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");

      var RichiestaPage = /*#__PURE__*/function () {
        function RichiestaPage(route, router, request, utilities) {
          _classCallCheck(this, RichiestaPage);

          this.route = route;
          this.router = router;
          this.request = request;
          this.utilities = utilities;
          this.servizio = null;
          this.errore = "";
          this.idServizio = JSON.parse(this.route.snapshot.paramMap.get("id"));
          this.getServizio();
        }

        _createClass(RichiestaPage, [{
          key: "getServizio",
          value: function getServizio() {
            var _this = this;

            this.request.get({
              path: "/services/" + this.idServizio,
              handler: function handler(results) {
                _this.servizio = results["_msg"];
                console.log(_this.servizio);
              },
              error: function error() {
                _this.utilities.simplyAlert({
                  operation: function operation() {
                    _this.router.navigate(["/home"]);
                  },
                  header: "Attenzione",
                  message: "Si è verificato un errore nell'accesso alla pagina, riprova più tardi."
                });
              }
            });
          }
        }, {
          key: "feedback",
          value: function feedback(id, tipo, nome) {
            this.router.navigate(["/infofeedback", {
              "id": id,
              "tipo": tipo,
              "nome": nome
            }]);
          }
        }, {
          key: "calculateDiff",
          value: function calculateDiff(dateSent) {
            var currentDate = new Date();
            dateSent = new Date(dateSent);
            return Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
          }
        }, {
          key: "richiesta",
          value: function richiesta() {
            var _this2 = this;

            var _a;

            this.msg = (_a = this.msg) !== null && _a !== void 0 ? _a : "";

            if (this.msg.trim() === "" || this.date == null) {
              this.errore = "Compila adeguatamente i campi";
              return;
            }

            if (this.msg.length < 5 || this.msg.length > 500) {
              this.errore = "Minimo 5 caratteri, massimo 500";
              return;
            }

            if (isNaN(this.ore) || this.ore < 0 || this.ore > this.servizio.ore) {
              this.errore = "Il numero di ore massime dedicabili dev'essere un numero positivo (massimo " + this.servizio.ore + " ore)";
              return;
            }

            if (-1 * this.calculateDiff(this.date) < this.servizio.preavviso) {
              this.errore = "Non puoi richiedere il servizio per la data selezionata (Giorni minimi di preavviso:" + this.servizio.preavviso + ")";
              return;
            }

            var _handler = function handler() {
              _this2.router.navigate(["/home"]);
            };

            this.request.get({
              path: "/budget",
              error: function error() {
                _this2.utilities.alertError({});
              },
              handler: function handler(response) {
                var saldo = response["_msg"].andron;

                if (saldo < _this2.servizio.andron * _this2.ore) {
                  _this2.utilities.simplyAlert({
                    header: "Attenzione",
                    message: "Saldo insufficiente."
                  });
                } else {
                  _this2.utilities.confirmAlert({
                    header: "Attenzione",
                    message: "Una volta effettuata la richiesta saranno rimossi preventivamente " + _this2.ore * _this2.servizio.andron + " Andron. Verranno restituiti in caso la richiesta non dovesse andare a buon fine.",
                    handlerYes: function handlerYes() {
                      _this2.request.post({
                        path: "/services/" + _this2.servizio.id,
                        data: {
                          _msg: _this2.msg,
                          _data: _this2.date,
                          _ore: _this2.ore
                        },
                        handler: function handler() {
                          _this2.utilities.simplyAlert({
                            operation: _handler,
                            header: "Operazione effettuata",
                            message: "La richiesta è stata inviata correttamente"
                          });
                        },
                        error: function error() {
                          _this2.utilities.alertError({
                            handler: _handler
                          });
                        }
                      });
                    }
                  });
                }
              }
            });
          }
        }]);

        return RichiestaPage;
      }();

      RichiestaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }];
      };

      RichiestaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-richiesta',
        template: _raw_loader_richiesta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_richiesta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])], RichiestaPage);
      /***/
    },

    /***/
    "Sxoj":
    /*!*****************************************************!*\
      !*** ./src/app/pages/richiesta/richiesta.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Sxoj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWNoaWVzdGEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "fuql":
    /*!*************************************************************!*\
      !*** ./src/app/pages/richiesta/richiesta-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RichiestaPageRoutingModule */

    /***/
    function fuql(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiestaPageRoutingModule", function () {
        return RichiestaPageRoutingModule;
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


      var _richiesta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./richiesta.page */
      "Rdne");

      var routes = [{
        path: '',
        component: _richiesta_page__WEBPACK_IMPORTED_MODULE_3__["RichiestaPage"]
      }];

      var RichiestaPageRoutingModule = function RichiestaPageRoutingModule() {
        _classCallCheck(this, RichiestaPageRoutingModule);
      };

      RichiestaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RichiestaPageRoutingModule);
      /***/
    },

    /***/
    "n2i3":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/richiesta/richiesta.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function n2i3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Richiesta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n    <ion-card-subtitle>\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-center\">\n            Fornito da:\n          </div>\n        </ion-col>\n        <ion-col class=\"ion-text-center\">\n          <div (click)=\"feedback(servizio?.utente,'utente',servizio?.nomeUtente + ' ' + servizio?.cognomeUtente)\">\n            {{servizio?.nomeUtente}} {{servizio?.cognomeUtente}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card-subtitle>\n    <ion-card-title>\n      <div class=\"ion-text-center\">\n        {{servizio?.nome}}\n      </div>\n    </ion-card-title>\n    <ion-grid>\n      <ion-row>\n        {{servizio?.descrizione}}\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size=\"8\">\n          Prezzo per ogni ora:\n        </ion-col>\n\n        <ion-col>\n            {{servizio?.andron}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"8\">\n          Tempo massimo dedicabile (h): \n        </ion-col>\n\n        <ion-col>\n            {{servizio?.ore}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"8\">\n            Giorni minimi di preavviso:\n        </ion-col>\n\n        <ion-col>\n            {{servizio?.preavviso}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-textarea placeholder=\"Messaggio...\"  maxlength=\"200\" [(ngModel)]=\"msg\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Data del servizio</ion-label>\n      <ion-datetime displayFormat=\"MMM DD, YYYY HH:mm\" min=\"2020\" max=\"2025\" [(ngModel)]=\"date\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-input placeholder=\"Ore di servizio richieste\" type=\"number\"  min=0 max=5 [(ngModel)]=\"ore\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-button id=\"myButtonYellow\" expand=\"full\" (click)=\"richiesta()\">Richiedi Servizio</ion-button>\n\n  <p style=\"color:red\">{{ this.errore }}</p>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-richiesta-richiesta-module-es5.js.map