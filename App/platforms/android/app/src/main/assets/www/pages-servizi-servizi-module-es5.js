(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-servizi-servizi-module"], {
    /***/
    "4Hl3":
    /*!***********************************************!*\
      !*** ./src/app/pages/servizi/servizi.page.ts ***!
      \***********************************************/

    /*! exports provided: ServiziPage */

    /***/
    function Hl3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiziPage", function () {
        return ServiziPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./servizi.page.html */
      "OQL9");
      /* harmony import */


      var _servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./servizi.page.scss */
      "9KOG");
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

      var ServiziPage = /*#__PURE__*/function () {
        function ServiziPage(navCtrl, request, utilities) {
          _classCallCheck(this, ServiziPage);

          this.navCtrl = navCtrl;
          this.request = request;
          this.utilities = utilities;
          this.upperPrice = 500;
          this.lowerPrice = 0;
          this.searchMieiServizi();
        }

        _createClass(ServiziPage, [{
          key: "searchMieiServizi",
          value: function searchMieiServizi() {
            var _this = this;

            this.request.get({
              path: "/services/mine",
              handler: function handler(results) {
                _this.results = results["_msg"];
              },
              error: function error(_error) {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(idService) {
            var _this2 = this;

            this.utilities.confirmAlert({
              header: "Attenzione",
              message: "Vuoi davvero eliminare questo servizio?",
              handlerYes: function handlerYes() {
                _this2.request["delete"]({
                  path: "/services/mine/" + idService,
                  handler: function handler() {
                    _this2.utilities.simplyAlert({
                      header: "Operazione effettuata",
                      message: "Servizio eliminato correttamente",
                      operation: function operation() {
                        _this2.searchMieiServizi();
                      }
                    });
                  },
                  error: function error() {
                    _this2.utilities.alertError({});
                  }
                });
              }
            });
          }
        }, {
          key: "openNewService",
          value: function openNewService() {
            this.navCtrl.navigateForward("/nuovo-servizio");
          }
        }, {
          key: "popover",
          value: function popover(type) {
            var msg = type == 0 ? "Il servizio da te inserito attualmente è in stato di attesa, verrà valutato se considerarlo valido. Controlla nei prossimi giorni" : "Il servizio è attualmente online, chi necessiterà del servizio potrà contattarti!";
            this.utilities.createPopover(msg);
          }
        }]);

        return ServiziPage;
      }();

      ServiziPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }];
      };

      ServiziPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-servizi',
        template: _raw_loader_servizi_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_servizi_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])], ServiziPage);
      /***/
    },

    /***/
    "9KOG":
    /*!*************************************************!*\
      !*** ./src/app/pages/servizi/servizi.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function KOG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aXppLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "OQL9":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/servizi/servizi.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function OQL9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>i miei servizi</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list>\n      <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"results?.length==0\">\n        <ion-card-header>\n          <ion-card-subtitle>\n            <div class=\"ion-text-center\">\n              Non hai inserito ancora nessun servizio!\n            </div>\n          </ion-card-subtitle>\n          <ion-card-content>\n            Premi il pulsante con il simbolo + per inserire un servizio che sei disposto ad offrire.\n          </ion-card-content>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card *ngFor=\"let item of results\">\n        <ion-card-content>\n          <ion-card-title color=\"black\" style=\"font-size:20px\" lines=\"none\">{{item.nome}}</ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div>\n                  {{item.descrizione}}\n                </div>\n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n              <ion-col>\n                <div>\n                  Stato:\n                </div>\n              </ion-col>\n\n              <ion-col *ngIf=\"item.accettato==0 && item.rifiutato==0\" size=\"8\">\n                <div class=\"ion-text-center\">\n                  <ion-text style=\"color: red;\">Attesa di accettazione...</ion-text> <ion-icon name=\"help-circle-outline\" (click)=\"popover(0)\"></ion-icon>\n                </div>\n              </ion-col>\n\n              <ion-col *ngIf=\"item.accettato==1 && item.rifiutato==0\" size=\"8\">\n                <div class=\"ion-text-center\">\n                  <ion-text style=\"color: green;\">Online!</ion-text> <ion-icon name=\"help-circle-outline\" (click)=\"popover(1)\"></ion-icon>\n                </div>\n              </ion-col>\n\n              <ion-col *ngIf=\"item.accettato==0 && item.rifiutato==1\" size=\"8\">\n                <div class=\"ion-text-center\">\n                  <ion-text style=\"color: red;\">L'inserimento del servizio è stato rifiutato! Eliminalo per non vederlo più tra quelli inseriti</ion-text>\n                </div>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <div>\n                  <ion-button style=\"color: red\" size=\"small\" expand=\"block\" slot=\"icon-only\" (click)=\"delete(item.id)\">\n                    <ion-icon style=\"color: red;\" ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n                  </ion-button>\n                </div>\n              </ion-col>\n            </ion-row>  \n\n          </ion-grid>\n      \n      \n        </ion-card-content>\n      </ion-card>\n\n\n\n\n\n\n\n    </ion-list>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\" console.log(this.data);warning\" (click)=\"openNewService()\">\n      <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "a4tL":
    /*!*************************************************!*\
      !*** ./src/app/pages/servizi/servizi.module.ts ***!
      \*************************************************/

    /*! exports provided: ServiziPageModule */

    /***/
    function a4tL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiziPageModule", function () {
        return ServiziPageModule;
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


      var _servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./servizi-routing.module */
      "uJtr");
      /* harmony import */


      var _servizi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./servizi.page */
      "4Hl3");

      var ServiziPageModule = function ServiziPageModule() {
        _classCallCheck(this, ServiziPageModule);
      };

      ServiziPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _servizi_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiziPageRoutingModule"]],
        declarations: [_servizi_page__WEBPACK_IMPORTED_MODULE_6__["ServiziPage"]]
      })], ServiziPageModule);
      /***/
    },

    /***/
    "uJtr":
    /*!*********************************************************!*\
      !*** ./src/app/pages/servizi/servizi-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ServiziPageRoutingModule */

    /***/
    function uJtr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServiziPageRoutingModule", function () {
        return ServiziPageRoutingModule;
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


      var _servizi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./servizi.page */
      "4Hl3");

      var routes = [{
        path: '',
        component: _servizi_page__WEBPACK_IMPORTED_MODULE_3__["ServiziPage"]
      }];

      var ServiziPageRoutingModule = function ServiziPageRoutingModule() {
        _classCallCheck(this, ServiziPageRoutingModule);
      };

      ServiziPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ServiziPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-servizi-servizi-module-es5.js.map