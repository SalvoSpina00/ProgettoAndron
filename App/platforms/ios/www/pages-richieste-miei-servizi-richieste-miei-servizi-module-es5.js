(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-richieste-miei-servizi-richieste-miei-servizi-module"], {
    /***/
    "3lAe":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/richieste-miei-servizi/richieste-miei-servizi.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function lAe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWNoaWVzdGUtbWllaS1zZXJ2aXppLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Fp5w":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/richieste-miei-servizi/richieste-miei-servizi.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: RichiesteMieiServiziPage */

    /***/
    function Fp5w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiesteMieiServiziPage", function () {
        return RichiesteMieiServiziPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_richieste_miei_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./richieste-miei-servizi.page.html */
      "uCcN");
      /* harmony import */


      var _richieste_miei_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./richieste-miei-servizi.page.scss */
      "3lAe");
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

      var RichiesteMieiServiziPage = /*#__PURE__*/function () {
        function RichiesteMieiServiziPage(router, request, utilities) {
          _classCallCheck(this, RichiesteMieiServiziPage);

          this.router = router;
          this.request = request;
          this.utilities = utilities;
        }

        _createClass(RichiesteMieiServiziPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.searchmyRichiesteTODO();
          }
        }, {
          key: "searchmyRichiesteTODO",
          value: function searchmyRichiesteTODO() {
            var _this = this;

            this.request.get({
              path: "/services/mine/requests",
              handler: function handler(results) {
                _this.myRichiesteTODO = results["_msg"];
              },
              error: function error() {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "setStato",
          value: function setStato(id, stato) {
            var _this2 = this;

            console.log(stato);

            if (stato == "rifiutato") {
              this.msg = "Vuoi rifiutare questo servizio?";
            }

            if (stato == "accettato") {
              this.msg = "Vuoi accettare questo servizio?";
            }

            if (stato == "eseguito") {
              this.msg = "Hai davvero eseguito questo servizio?";
            }

            if (stato == "concluso") {
              this.msg = "Confermi di aver ricevuto la transazione?";
            }

            this.utilities.confirmAlert({
              handlerYes: function handlerYes() {
                _this2.request.put({
                  path: "/requests/mine/" + id,
                  data: {
                    _stato: stato
                  },
                  handler: function handler(results) {
                    _this2.utilities.simplyAlert({
                      operation: function operation() {
                        _this2.searchmyRichiesteTODO();
                      },
                      header: "Operazione Effettuata",
                      message: "L'operazione e' stata eseguita con successo"
                    });
                  },
                  error: function error(_error) {
                    _this2.utilities.alertError({});
                  }
                });
              },
              header: "Attenzione",
              message: this.msg
            });
          }
        }, {
          key: "segnala",
          value: function segnala(item, tipo) {
            if (item.sagnalazioneEsponente) {
              this.utilities.simplyAlert({
                header: "Attenzione",
                message: "Hai gia' inviato una segnalazione per questo prodotto! Verrai contattato presto da qualcuno del nostro team."
              });
            } else {
              this.router.navigate(["/segnalazione", {
                "item": JSON.stringify(item),
                "tipo": tipo
              }]);
            }
          }
        }, {
          key: "elimina",
          value: function elimina(id) {
            var _this3 = this;

            this.utilities.confirmAlert({
              header: "Attenzione",
              message: "Vuoi davvero eliminare questa richiesta? Non sarà possibile annullare questa operazione.",
              handlerYes: function handlerYes() {
                _this3.request["delete"]({
                  path: "/requests/mine/" + id,
                  handler: function handler() {
                    _this3.utilities.simplyAlert({
                      operation: function operation() {
                        _this3.searchmyRichiesteTODO();
                      },
                      header: "Operazione effettuata",
                      message: "Richiesta eliminata."
                    });
                  },
                  error: function error() {
                    _this3.utilities.alertError({});
                  }
                });
              }
            });
          }
        }]);

        return RichiesteMieiServiziPage;
      }();

      RichiesteMieiServiziPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }];
      };

      RichiesteMieiServiziPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-richieste-miei-servizi',
        template: _raw_loader_richieste_miei_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_richieste_miei_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])], RichiesteMieiServiziPage);
      /***/
    },

    /***/
    "ffx6":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/richieste-miei-servizi/richieste-miei-servizi.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: RichiesteMieiServiziPageModule */

    /***/
    function ffx6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiesteMieiServiziPageModule", function () {
        return RichiesteMieiServiziPageModule;
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


      var _richieste_miei_servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./richieste-miei-servizi-routing.module */
      "oOOI");
      /* harmony import */


      var _richieste_miei_servizi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./richieste-miei-servizi.page */
      "Fp5w");

      var RichiesteMieiServiziPageModule = function RichiesteMieiServiziPageModule() {
        _classCallCheck(this, RichiesteMieiServiziPageModule);
      };

      RichiesteMieiServiziPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _richieste_miei_servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__["RichiesteMieiServiziPageRoutingModule"]],
        declarations: [_richieste_miei_servizi_page__WEBPACK_IMPORTED_MODULE_6__["RichiesteMieiServiziPage"]]
      })], RichiesteMieiServiziPageModule);
      /***/
    },

    /***/
    "oOOI":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/richieste-miei-servizi/richieste-miei-servizi-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: RichiesteMieiServiziPageRoutingModule */

    /***/
    function oOOI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RichiesteMieiServiziPageRoutingModule", function () {
        return RichiesteMieiServiziPageRoutingModule;
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


      var _richieste_miei_servizi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./richieste-miei-servizi.page */
      "Fp5w");

      var routes = [{
        path: '',
        component: _richieste_miei_servizi_page__WEBPACK_IMPORTED_MODULE_3__["RichiesteMieiServiziPage"]
      }];

      var RichiesteMieiServiziPageRoutingModule = function RichiesteMieiServiziPageRoutingModule() {
        _classCallCheck(this, RichiesteMieiServiziPageRoutingModule);
      };

      RichiesteMieiServiziPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RichiesteMieiServiziPageRoutingModule);
      /***/
    },

    /***/
    "uCcN":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/richieste-miei-servizi/richieste-miei-servizi.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uCcN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Richieste di Servizi\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"this.myRichiesteTODO?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Nessuna richiesta di servizi da svolgere!\n          </div>\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n    <ion-card style=\"background-color: rgb(29, 39, 61);\" *ngFor=\"let item of myRichiesteTODO\">\n      \n      <ion-card-content>\n        <ion-card-subtitle style=\"font-size:10px\" class=\"ion-text-wrap\">\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div>\n                  Da:\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"ion-text-center\">\n                  {{item.nome}} {{item.cognome}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-card-subtitle>\n        <ion-card-title color=\"black\" lines=\"none\" style=\"font-size:20px\" class=\"ion-text-center\" class=\"ion-text-wrap\">{{item.nomeServizio}}</ion-card-title>\n\n      \n        <ion-grid>\n          <ion-row>\n            <div>\n              {{item.messaggio}}\n            </div>\n          </ion-row>\n        \n          <ion-row >\n            <ion-col style=\"color: tomato;\" class=\"ion-text-center\">\n                Data:\n            </ion-col>\n          </ion-row>\n          <ion-row>\n                La richiesta è prevista per giorno {{item.data}} alle ore {{item.orario}} per {{item.ore}} Ore.\n          </ion-row>\n\n   \n          <ion-row>\n            <ion-col><div class=\"ion-text-center\"  style=\"color: tomato;\">Contatti</div></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\">\n                telefono:\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                {{item.tel}}\n              </div>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\" class=\"ion-text-center\">\n                email:\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div>\n                {{item.email}}\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='attesa'\">\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\"  (click)=\"setStato(item.id,'rifiutato')\">\n                  Rifiuta\n                </ion-button>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\" (click)=\"setStato(item.id,'accettato')\">\n                  Accetta\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='accettato'\">\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\" (click)=\"elimina(item.id)\">\n                  Elimina\n                </ion-button>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\" (click)=\"setStato(item.id,'eseguito')\">\n                  Eseguito\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n          \n          <ion-row *ngIf=\"item.stato=='eseguito'\">\n            <ion-col>\n              <div>\n                In attesa di conferma. Una volta confermato riceverai gli Andron sul tuo portafoglio\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='eseguito'\">\n            <ion-col>\n              <div>\n                <ion-button size=\"small\" expand=\"block\" (click)=\"segnala(item,'servizio',0)\">\n                  Segnala\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.stato=='confermato'\">\n            <ion-col>\n              <div>\n                Transazione effettuata\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"item.stato=='confermato'\">\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-button size=\"small\" expand=\"block\" (click)=\"setStato(item.id,'concluso')\">\n                  Concludi\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n      </ion-card-content>\n    </ion-card>\n    \n  </ion-list>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-richieste-miei-servizi-richieste-miei-servizi-module-es5.js.map