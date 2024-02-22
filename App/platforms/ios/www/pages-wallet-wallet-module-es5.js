(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"], {
    /***/
    "IUnk":
    /*!*******************************************************!*\
      !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: WalletPageRoutingModule */

    /***/
    function IUnk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
        return WalletPageRoutingModule;
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wallet.page */
      "h+7g");

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
      }];

      var WalletPageRoutingModule = function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      };

      WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WalletPageRoutingModule);
      /***/
    },

    /***/
    "gE1+":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function gE1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>portafoglio</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n          \n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          {{budget}} ANDRON\n        </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div class=\"ion-text-center\">Saldo disponibile al {{today}}.</div>\n    </ion-card-content>\n  </ion-card>\n\n  <div id=\"transaction\">\n    <h5 style=\"color:black\" >Transazioni</h5>\n    <ion-list>\n      <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"transactions?.length==0\">\n        <ion-card-header>\n          <ion-card-subtitle>\n            <div class=\"ion-text-center\">\n              Non è presente nessuna transazione.\n            </div>\n          </ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n\n\n      <ion-card *ngFor=\"let t of transactions; index as i\" (click)=\"clickItem(i)\">\n        <ion-card-content>\n          <ion-card-subtitle>\n            <ion-row>\n              <ion-col>\n                <div class=\"ion-text-center\">\n                  Transazione #{{t.id}} <br> \n                  del {{t.data}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card-subtitle>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                <ion-icon style=\"color: green\" *ngIf=\" t.ricevente == this.idUtente\"  ios=\"ios-add\" md=\"md-add\"></ion-icon>\n                <ion-icon style=\"color: orangered;\" *ngIf=\" t.emittente == this.idUtente\" ios=\"ios-remove\" md=\"md-remove\"></ion-icon>\n                <ion-label>\n                  {{t.andron}} Andron\n                </ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n            \n        </ion-card-content>\n      </ion-card>\n\n      <ion-infinite-scroll (ionInfinite)=\"loadmore($event)\">\n        <ion-infinite-scroll-content\n          loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-list>\n    \n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "h+7g":
    /*!*********************************************!*\
      !*** ./src/app/pages/wallet/wallet.page.ts ***!
      \*********************************************/

    /*! exports provided: WalletPage */

    /***/
    function h7g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
        return WalletPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "gE1+");
      /* harmony import */


      var _wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./wallet.page.scss */
      "it6O");
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

      var WalletPage = /*#__PURE__*/function () {
        function WalletPage(router, request, utilities) {
          _classCallCheck(this, WalletPage);

          this.router = router;
          this.request = request;
          this.utilities = utilities;
          this.transactions = [];
          this.page = 0;
          this.psize = 3;
          this.getSaldo();
          this.getTransazioni();
        }

        _createClass(WalletPage, [{
          key: "clickItem",
          value: function clickItem(index) {
            this.router.navigate(["/descrizione-transazione", {
              "transaction": JSON.stringify(this.transactions[index].id)
            }]);
          }
        }, {
          key: "getSaldo",
          value: function getSaldo() {
            var _this = this;

            this.request.get({
              path: "/budget",
              handler: function handler(response) {
                _this.budget = response["_msg"].andron;
                _this.today = new Date().toLocaleDateString();
              },
              error: function error() {
                _this.utilities.alertError({});
              }
            });
          }
        }, {
          key: "getTransazioni",
          value: function getTransazioni() {
            var _this2 = this;

            var add = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
            this.request.get({
              path: "/transaction",
              httpParam: {
                "_page": this.page,
                "_psize": this.psize
              },
              handler: function handler(results) {
                results["_msg"].forEach(function (element) {
                  _this2.transactions.push(element);
                });
                add();
              },
              error: function error() {
                _this2.utilities.alertError({});
              }
            });
          }
        }, {
          key: "loadmore",
          value: function loadmore(event) {
            this.page++;
            this.getTransazioni(function () {
              event.target.complete();
            });
          }
        }]);

        return WalletPage;
      }();

      WalletPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]
        }];
      };

      WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet',
        template: _raw_loader_wallet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])], WalletPage);
      /***/
    },

    /***/
    "it6O":
    /*!***********************************************!*\
      !*** ./src/app/pages/wallet/wallet.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function it6O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#myWallet {\n  height: 120px;\n  margin: 30px;\n  background-color: black;\n  border-style: solid;\n  border-color: black;\n  border-width: 0.3px;\n  color: white;\n}\n\n#myWallet h1 {\n  padding-left: 30px;\n}\n\n#myWallet p {\n  text-align: right;\n  padding-right: 30px;\n  color: yellow;\n}\n\n#transaction h5 {\n  text-transform: capitalize;\n  font-weight: bold;\n  color: white;\n  margin-top: 0px;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: center;\n}\n\n#transaction ion-col {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBR0o7O0FBQUE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5RUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6IndhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlXYWxsZXR7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci13aWR0aDogMC4zcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI215V2FsbGV0IGgxe1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbiNteVdhbGxldCBwe1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgY29sb3I6IHllbGxvdztcbn1cblxuI3RyYW5zYWN0aW9uIGg1e1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuI3RyYW5zYWN0aW9uIGlvbi1jb2x7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAiXX0= */";
      /***/
    },

    /***/
    "qzon":
    /*!***********************************************!*\
      !*** ./src/app/pages/wallet/wallet.module.ts ***!
      \***********************************************/

    /*! exports provided: WalletPageModule */

    /***/
    function qzon(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
        return WalletPageModule;
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wallet-routing.module */
      "IUnk");
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wallet.page */
      "h+7g");

      var WalletPageModule = function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      };

      WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
      })], WalletPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-wallet-wallet-module-es5.js.map