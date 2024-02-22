(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/antoniopipitone/Desktop/AndroN/App/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6ZXX":
    /*!***********************************************!*\
      !*** ./src/app/pages/popover/popover.page.ts ***!
      \***********************************************/

    /*! exports provided: PopoverPage */

    /***/
    function ZXX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
        return PopoverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./popover.page.html */
      "WEWd");
      /* harmony import */


      var _popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popover.page.scss */
      "BRn6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");

      var PopoverPage = function PopoverPage(_navParams) {
        _classCallCheck(this, PopoverPage);

        this._navParams = _navParams;
        this.msg = this._navParams.data.msg;
      };

      PopoverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }];
      };

      PopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popover',
        template: _raw_loader_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])], PopoverPage);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BRn6":
    /*!*************************************************!*\
      !*** ./src/app/pages/popover/popover.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function BRn6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "CzMn":
    /*!*********************************************!*\
      !*** ./src/app/services/request.service.ts ***!
      \*********************************************/

    /*! exports provided: RequestService */

    /***/
    function CzMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestService", function () {
        return RequestService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RequestService = /*#__PURE__*/function () {
        function RequestService(http) {
          _classCallCheck(this, RequestService);

          this.http = http;
          this.url = "http://127.0.0.1:5001";
        }

        _createClass(RequestService, [{
          key: "createAuthHeader",
          value: function createAuthHeader() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.token,
              'Content-Type': 'application/json'
            });
            return headers;
          }
        }, {
          key: "createHeader",
          value: function createHeader() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return headers;
          }
        }, {
          key: "post",
          value: function post(_ref) {
            var path = _ref.path,
                data = _ref.data,
                _ref$httpHeaders = _ref.httpHeaders,
                httpHeaders = _ref$httpHeaders === void 0 ? this.createAuthHeader() : _ref$httpHeaders,
                handler = _ref.handler,
                _ref$error = _ref.error,
                error = _ref$error === void 0 ? function (error) {} : _ref$error;
            this.http.post(this.url + path, data, {
              headers: httpHeaders
            }).subscribe({
              next: handler,
              error: error
            });
          }
        }, {
          key: "put",
          value: function put(_ref2) {
            var path = _ref2.path,
                _ref2$data = _ref2.data,
                data = _ref2$data === void 0 ? {} : _ref2$data,
                _ref2$httpHeaders = _ref2.httpHeaders,
                httpHeaders = _ref2$httpHeaders === void 0 ? this.createAuthHeader() : _ref2$httpHeaders,
                _ref2$httpParam = _ref2.httpParam,
                httpParam = _ref2$httpParam === void 0 ? {} : _ref2$httpParam,
                handler = _ref2.handler,
                _ref2$error = _ref2.error,
                error = _ref2$error === void 0 ? function (error) {} : _ref2$error;
            this.http.put(this.url + path, data, {
              headers: httpHeaders,
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: httpParam
              })
            }).subscribe({
              next: handler,
              error: error
            });
          }
        }, {
          key: "delete",
          value: function _delete(_ref3) {
            var path = _ref3.path,
                _ref3$httpHeaders = _ref3.httpHeaders,
                httpHeaders = _ref3$httpHeaders === void 0 ? this.createAuthHeader() : _ref3$httpHeaders,
                _ref3$httpParam = _ref3.httpParam,
                httpParam = _ref3$httpParam === void 0 ? {} : _ref3$httpParam,
                handler = _ref3.handler,
                _ref3$error = _ref3.error,
                error = _ref3$error === void 0 ? function (error) {} : _ref3$error;
            this.http["delete"](this.url + path, {
              headers: httpHeaders,
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: httpParam
              })
            }).subscribe({
              next: handler,
              error: error
            });
          }
        }, {
          key: "get",
          value: function get(_ref4) {
            var path = _ref4.path,
                handler = _ref4.handler,
                _ref4$error = _ref4.error,
                error = _ref4$error === void 0 ? function (error) {} : _ref4$error,
                _ref4$httpHeaders = _ref4.httpHeaders,
                httpHeaders = _ref4$httpHeaders === void 0 ? this.createAuthHeader() : _ref4$httpHeaders,
                _ref4$httpParam = _ref4.httpParam,
                httpParam = _ref4$httpParam === void 0 ? {} : _ref4$httpParam;
            this.http.get(this.url + path, {
              headers: httpHeaders,
              params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: httpParam
              })
            }).subscribe({
              next: handler,
              error: error
            });
          }
        }]);

        return RequestService;
      }();

      RequestService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], RequestService);
      /***/
    },

    /***/
    "E8I8":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
      \*******************************************************/

    /*! exports provided: CartModalPageModule */

    /***/
    function E8I8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPageModule", function () {
        return CartModalPageModule;
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


      var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-modal-routing.module */
      "WjKV");
      /* harmony import */


      var _cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart-modal.page */
      "x/JU");

      var CartModalPageModule = function CartModalPageModule() {
        _classCallCheck(this, CartModalPageModule);
      };

      CartModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartModalPageRoutingModule"]],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"]]
      })], CartModalPageModule);
      /***/
    },

    /***/
    "EuVl":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/modal/search-filter/search-filter-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: SearchFilterPageRoutingModule */

    /***/
    function EuVl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFilterPageRoutingModule", function () {
        return SearchFilterPageRoutingModule;
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


      var _search_filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search-filter.page */
      "I0WS");

      var routes = [{
        path: '',
        component: _search_filter_page__WEBPACK_IMPORTED_MODULE_3__["SearchFilterPage"]
      }];

      var SearchFilterPageRoutingModule = function SearchFilterPageRoutingModule() {
        _classCallCheck(this, SearchFilterPageRoutingModule);
      };

      SearchFilterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchFilterPageRoutingModule);
      /***/
    },

    /***/
    "I0WS":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/modal/search-filter/search-filter.page.ts ***!
      \*****************************************************************/

    /*! exports provided: SearchFilterPage */

    /***/
    function I0WS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFilterPage", function () {
        return SearchFilterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_search_filter_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./search-filter.page.html */
      "rGFX");
      /* harmony import */


      var _search_filter_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-filter.page.scss */
      "U2a0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");

      var SearchFilterPage = /*#__PURE__*/function () {
        function SearchFilterPage(modalCtrl) {
          _classCallCheck(this, SearchFilterPage);

          this.modalCtrl = modalCtrl;
          this.minmaxprice = {
            upper: 0,
            lower: 300
          };
        }

        _createClass(SearchFilterPage, [{
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss(this.minmaxprice);
          }
        }]);

        return SearchFilterPage;
      }();

      SearchFilterPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      SearchFilterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-filter',
        template: _raw_loader_search_filter_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_search_filter_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], SearchFilterPage);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/authentication.service */
      "ej43");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _services_request_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/request.service */
      "CzMn");
      /* harmony import */


      var _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./services/utilities.service */
      "tNc6");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authenticationService, router, storage, request, utilities, menu) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.authenticationService = authenticationService;
          this.router = router;
          this.storage = storage;
          this.request = request;
          this.utilities = utilities;
          this.menu = menu;
          this.authenticationService.authenticationState.subscribe(function (state) {
            if (state) {
              _this.router.navigate(['home']);

              _this.storage.get("anagraficaJson").then(function (anagrafica) {
                _this.data = anagrafica;
                _this.utenza = anagrafica.utenza;

                if (anagrafica.foto != null) {
                  _this.userPic = 'data:image/jpeg;base64,' + anagrafica.foto;
                } else {
                  _this.userPic = _this.utilities.user;
                }
              });
            } else {
              _this.router.navigate(['login']);
            }
          });
        }

        _createClass(AppComponent, [{
          key: "logout",
          value: function logout() {
            var _this2 = this;

            var handler = function handler() {
              _this2.authenticationService.logout();
            };

            this.request["delete"]({
              path: "/logout",
              handler: handler,
              error: handler
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _services_request_service__WEBPACK_IMPORTED_MODULE_8__["RequestService"]
        }, {
          type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _services_request_service__WEBPACK_IMPORTED_MODULE_8__["RequestService"], _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])], AppComponent);
      /***/
    },

    /***/
    "T794":
    /*!*******************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function T794(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#idbutton {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJjYXJ0LW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpZGJ1dHRvbntcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "U2a0":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/modal/search-filter/search-filter.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function U2a0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-text {\n  color: navy;\n}\n\nion-item {\n  color: navy;\n}\n\nion-item:hover {\n  background-color: navy;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NlYXJjaC1maWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7QUFHSiIsImZpbGUiOiJzZWFyY2gtZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0e1xuICAgIGNvbG9yOiBuYXZ5O1xufVxuaW9uLWl0ZW17XG4gICAgY29sb3I6IG5hdnk7XG59XG5pb24taXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm5hdnk7XG59Il19 */";
      /***/
    },

    /***/
    "UTcu":
    /*!**************************************!*\
      !*** ./src/app/guards/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(auth) {
          _classCallCheck(this, AuthGuard);

          this.auth = auth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return this.auth.isAuthenticated();
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], AuthGuard);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n    <ion-menu contentId=\"my-content\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-item>\n            <ion-avatar slot=\"start\" class=\"user-avatar\">\n              <img src={{userPic}}>\n            </ion-avatar>\n            <ion-label>\n              <ion-text style=\"color: rgb(29, 39, 61);\">\n                <h1><strong>{{ data?.nome }} {{ data?.cognome}}</strong></h1>\n              </ion-text>\n              <ion-text style=\"color:rgb(26, 47, 92)\">\n                <h3>\n                  {{ data?.citta }}, {{ data?.stato}}\n                </h3>\n              </ion-text>\n              <ion-menu-toggle class=\"mto\" auto-hide=\"false\">\n                <a  class=\"text08\" tappable (click)=\"this.menu.close()\" routerLink=\"/edit-profile\" routerDirection=\"forward\">\n                  <ion-text style=\"color:white\">\n                    <ion-icon name=\"contact\"></ion-icon>\n                    <strong>modifica profilo</strong>\n                  </ion-text>\n                </a> <ion-text style=\"color:white\"> | </ion-text> \n                <a class=\"text08\" tappable (click)=\"this.menu.close();logout()\">\n                  <ion-text style=\"color:red\">\n                    <ion-icon name=\"log-out\"></ion-icon>\n                    <strong>esci</strong>\n                  </ion-text>\n                </a>\n              </ion-menu-toggle>\n            </ion-label>\n          </ion-item>\n        </ion-toolbar>\n      </ion-header>\n\n  <ion-content *ngIf=\"this.utenza=='utente'\">\n        <ion-list id=\"idListMenu\">\n\n          <ion-item (click)=\"this.menu.close()\" routerLink=\"/home\" routerDirection=\"forward\"><ion-icon ios=\"ios-home\" md=\"md-home\"></ion-icon>Home</ion-item>\n      \n          <ion-item (click)=\"this.menu.close()\" routerLink=\"/wallet\" routerDirection=\"forward\"><ion-icon ios=\"ios-cash\" md=\"md-cash\"></ion-icon>Portafoglio</ion-item>\n\n          <ion-item (click)=\"this.menu.close()\" routerLink=\"/servizi\" routerDirection=\"forward\"><ion-icon  ios=\"ios-hand\" md=\"md-hand\"></ion-icon>Offro il mio tempo per...</ion-item>\n\n          <ion-item (click)=\"this.menu.close()\" routerLink=\"/richieste-miei-servizi\" routerDirection=\"forward\"><ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>Chi cerca il mio tempo</ion-item>\n\n          <ion-item (click)=\"isCerca === 1 ? isCerca = 0 : isCerca = 1; isServizi=false; isComunita=false; isOrdini=false\">\n            <ion-icon ios=\"logo-usd\" md=\"logo-usd\"></ion-icon>\n            Cerco\n            <ion-icon slot=\"end\" [name]=\"isCerca? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\n          </ion-item>\n          <ion-menu-toggle auto-hide=\"false\">\n              <ion-item menuclose [hidden]=\"!isCerca\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isCerca=false\" routerLink=\"/compra\" routerDirection=\"forward\"><ion-icon slot=\"start\"></ion-icon>Oggetti</ion-item>\n\n              <ion-item menuclose [hidden]=\"!isCerca\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isCerca=false\" routerLink=\"/richiedi-servizi\" routerDirection=\"forward\"><ion-icon slot=\"start\"></ion-icon>Tempo</ion-item>\n          </ion-menu-toggle>\n\n\n\n          <ion-item (click)=\"isOrdini === 1 ? isOrdini = 0 : isOrdini = 1; isServizi=false; isComunita=false; isCerca=false\">\n            <ion-icon ios=\"ios-basket\" md=\"md-basket\"></ion-icon>Le mie richieste in corso<ion-icon slot=\"end\" [name]=\"isOrdini? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\n          </ion-item>\n          <ion-menu-toggle auto-hide=\"false\">\n \n              <ion-item menuclose [hidden]=\"!isOrdini\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isOrdini=false\" routerLink=\"/ordini\" routerDirection=\"forward\"><ion-icon slot=\"start\"></ion-icon>Oggetti</ion-item>\n\n              <ion-item menuclose [hidden]=\"!isOrdini\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isOrdini=false\" routerLink=\"/richieste-mie\" routerDirection=\"forward\"><ion-icon slot=\"start\"></ion-icon>Tempo</ion-item>\n          </ion-menu-toggle>\n\n\n          <ion-item (click)=\"isComunita === 1 ? isComunita = 0 : isComunita = 1;  isServizi=false; isOrdini=false; isCerca=false\">\n            <ion-icon ios=\"ios-globe\" md=\"md-globe\"></ion-icon>Comunità<ion-icon slot=\"end\" [name]=\"isComunita? 'arrow-dropdown' : 'arrow-dropright'\"></ion-icon>\n          </ion-item>\n          <ion-menu-toggle auto-hide=\"false\">\n\n              <ion-item  menuclose [hidden]=\"!isComunita\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isComunita=false\" routerLink=\"/segnala-bisogni\" routerDirection=\"forward\">\n                <ion-icon slot=\"start\"></ion-icon>Segnalazione Bisogni</ion-item>\n\n              <ion-item  menuclose [hidden]=\"!isComunita\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isComunita=false\" routerLink=\"/bisogni\" routerDirection=\"forward\">\n                <ion-icon slot=\"start\"></ion-icon>Elenco Bisogni</ion-item>\n\n              <ion-item  menuclose [hidden]=\"!isComunita\" menuClose class=\"sub-menu\" (click)=\"this.menu.close(); isComunita=false\" routerLink=\"/servizi-collettivita\" routerDirection=\"forward\">\n                <ion-icon slot=\"start\"></ion-icon>Tempo donato</ion-item>\n\n          </ion-menu-toggle>\n\n          <!--<ion-item (click)=\"this.menu.close()\" routerLink=\"/setting\" routerDirection=\"forward\"> <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>Impostazioni</ion-item>-->\n        \n        </ion-list>\n      \n  </ion-content>\n\n  <ion-content *ngIf=\"this.utenza=='impresa'\">\n      <ion-list id=\"idListMenu\">\n\n        <ion-item (click)=\"this.menu.close()\" routerLink=\"/home\" routerDirection=\"forward\"><ion-icon ios=\"ios-home\" md=\"md-home\"></ion-icon>Home</ion-item>\n      \n        <ion-item (click)=\"this.menu.close()\" routerLink=\"/wallet\" routerDirection=\"forward\"><ion-icon ios=\"ios-cash\" md=\"md-cash\"></ion-icon>Portafoglio</ion-item>\n\n        <ion-item (click)=\"this.menu.close()\" routerLink=\"/compra\" routerDirection=\"forward\"><ion-icon ios=\"logo-usd\" md=\"logo-usd\"></ion-icon>Cerco oggetti</ion-item>\n      \n        <ion-item (click)=\"this.menu.close()\" routerLink=\"/prodotti\" routerDirection=\"forward\"><ion-icon ios=\"ios-archive\" md=\"md-archive\"></ion-icon>I miei oggetti</ion-item>\n\n        <ion-item (click)=\"this.menu.close()\" routerLink=\"/ordini\" routerDirection=\"forward\"><ion-icon ios=\"ios-basket\" md=\"md-basket\"></ion-icon>I miei Ordini</ion-item>\n\n        <!--<ion-item (click)=\"this.menu.close()\" routerLink=\"/setting\" routerDirection=\"forward\"> <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>Impostazioni</ion-item>-->\n      \n      </ion-list>\n  </ion-content>\n\n  <ion-content *ngIf=\"this.utenza=='ente'\">\n    <ion-list id=\"idListMenu\">\n      \n      <ion-item (click)=\"this.menu.close()\" routerLink=\"/home\" routerDirection=\"forward\">\n        <ion-icon ios=\"ios-home\" md=\"md-home\"></ion-icon>\n        Home\n      </ion-item>\n      \n      <ion-item (click)=\"this.menu.close()\" routerLink=\"/wallet\" routerDirection=\"forward\">\n        <ion-icon ios=\"ios-cash\" md=\"md-cash\"></ion-icon>\n        Portafoglio\n      </ion-item>\n\n      <ion-item (click)=\"this.menu.close()\" routerLink=\"/compra\" routerDirection=\"forward\">\n        <ion-icon ios=\"logo-usd\" md=\"logo-usd\"></ion-icon>\n        Cerco oggetti\n      </ion-item>\n\n      <ion-item (click)=\"this.menu.close()\" routerLink=\"/ordini\" routerDirection=\"forward\">\n        <ion-icon ios=\"ios-basket\" md=\"md-basket\"></ion-icon>\n        I miei Ordini\n      </ion-item>\n      \n      <ion-item (click)=\"this.menu.close()\" routerLink=\"/certifica-servizi\" routerDirection=\"forward\">\n        <ion-icon ios=\"ios-globe\" md=\"md-globe\"></ion-icon>\n        Certifica servizi\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n    </ion-menu>\n    <ion-router-outlet id=\"my-content\"></ion-router-outlet>\n    \n\n</ion-app>\n";
      /***/
    },

    /***/
    "WEWd":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/popover/popover.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function WEWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-card style=\"background-color:rgb(29, 39, 61)\">\n    <ion-card-header>\n      <ion-card-title>\n        <div class=\"ion-text-center\">\n          Info\n        </div>\n      </ion-card-title>\n        <ion-card-content>\n          {{msg}}    \n        </ion-card-content>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n";
      /***/
    },

    /***/
    "WjKV":
    /*!***************************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CartModalPageRoutingModule */

    /***/
    function WjKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPageRoutingModule", function () {
        return CartModalPageRoutingModule;
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


      var _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart-modal.page */
      "x/JU");

      var routes = [{
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_3__["CartModalPage"]
      }];

      var CartModalPageRoutingModule = function CartModalPageRoutingModule() {
        _classCallCheck(this, CartModalPageRoutingModule);
      };

      CartModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartModalPageRoutingModule);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _pages_modal_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/modal/search-filter/search-filter.module */
      "fvoU");
      /* harmony import */


      var _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/cart-modal/cart-modal.module */
      "E8I8");
      /* harmony import */


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "tAfe");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1"); // Modal Pages


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _pages_modal_search_filter_search_filter_module__WEBPACK_IMPORTED_MODULE_11__["SearchFilterPageModule"], _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_12__["CartModalPageModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_14__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__["Geolocation"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "c14U":
    /*!******************************************!*\
      !*** ./src/app/services/cart.service.ts ***!
      \******************************************/

    /*! exports provided: CartService */

    /***/
    function c14U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartService", function () {
        return CartService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CartService = /*#__PURE__*/function () {
        function CartService() {
          _classCallCheck(this, CartService);

          this.cart = new Map();
        }

        _createClass(CartService, [{
          key: "addProduct",
          value: function addProduct(product) {
            console.log(product);

            if (this.cart.has(product.id)) {
              var value = this.cart.get(product.id);
              value.quantity++;
            } else {
              this.cart.set(product.id, {
                id: product.id,
                quantity: 1,
                cost: product.andron,
                name: product.nome
              });
            }
          }
        }, {
          key: "removeProduct",
          value: function removeProduct(product) {
            if (this.cart.has(product.id)) {
              var value = this.cart.get(product.id);
              value.quantity--;

              if (value.quantity == 0) {
                this.cart["delete"](product.id);
              }
            }
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(id) {
            if (this.cart.has(id)) this.cart["delete"](id);
          }
        }, {
          key: "getTotal",
          value: function getTotal() {
            var total = 0;

            var _iterator = _createForOfIteratorHelper(this.cart.values()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var entry = _step.value;
                total += entry.cost * entry.quantity;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return total;
          }
        }, {
          key: "getTotalElements",
          value: function getTotalElements() {
            var total = 0;

            var _iterator2 = _createForOfIteratorHelper(this.cart.values()),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var entry = _step2.value;
                total += entry.quantity;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return total;
          }
        }, {
          key: "getCartElements",
          value: function getCartElements() {
            return Array.from(this.cart.keys());
          }
        }]);

        return CartService;
      }();

      CartService.ctorParameters = function () {
        return [];
      };

      CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CartService);
      /***/
    },

    /***/
    "cBv1":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart-modal/cart-modal.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function cBv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Carrello</ion-title>\n    <ion-button (click)=\"this.modalCtrl.dismiss()\" fill=\"clear\" slot=\"start\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n    <ion-list>\n      <ion-item *ngFor=\"let p of this.cartService.getCartElements()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <b>{{ this.cartService.cart.get(p).name }}</b>\n            </ion-col>\n            <ion-col>\n              <ion-button color=\"warning\" fill=\"clear\" (click)=\"this.cartService.removeProduct(this.cartService.cart.get(p) )\">\n                <ion-icon id=\"idbutton\" ios=\"ios-remove-circle\" md=\"md-remove-circle\"></ion-icon>\n              </ion-button>\n\n              <ion-text style=\"color:skyblue\"class=\"ion-text-md-justify\">{{ this.cartService.cart.get(p).quantity}}</ion-text>\n\n              <ion-button color=\"warning\" fill=\"clear\" (click)=\"this.cartService.addProduct(this.cartService.cart.get(p))\">\n                <ion-icon id=\"idbutton\" ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col style=\"color: skyblue;\">\n              <ion-text>{{ this.cartService.cart.get(p).quantity * this.cartService.cart.get(p).cost}} Andron</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-end\">\n              <ion-button fill=\"clear\" (click)=\"this.cartService.deleteProduct(p)\">\n                <ion-icon ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-text style=\"color:tomato\">Totale:</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-end\" style=\"color:tomato\">\n              <ion-text>{{ this.cartService.getTotal()}} Andron</ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <div style=\"text-align: center;\">\n      <ion-button id=\"myButtonYellow\" (click)=\"conferma()\">\n        <ion-text>Compra</ion-text>\n      </ion-button>\n    </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "ej43":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function ej43(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./request.service */
      "CzMn");

      var TOKEN_KEY = 'auth-token';

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(storage, plt, request) {
          var _this3 = this;

          _classCallCheck(this, AuthenticationService);

          this.storage = storage;
          this.plt = plt;
          this.request = request;
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.plt.ready().then(function () {
            _this3.checkToken();
          });
        }

        _createClass(AuthenticationService, [{
          key: "checkToken",
          value: function checkToken() {
            var _this4 = this;

            return this.storage.get(TOKEN_KEY).then(function (res) {
              if (res) {
                _this4.request.token = res;

                _this4.getAnagrafica();
              } else {
                _this4.authenticationState.next(false);
              }
            });
          } //! Aggiungi Cambio password

        }, {
          key: "getAnagrafica",
          value: function getAnagrafica() {
            var _this5 = this;

            this.request.get({
              path: "/info",
              handler: function handler(response) {
                _this5.storage.set("anagraficaJson", response);

                _this5.userType = response["utenza"];

                _this5.storage.set("utenza", response["utenza"]).then(function () {
                  _this5.authenticationState.next(true);
                });

                if (response["utenza"] == "ente" && response["firstLog"] == 0) {//this.cambiaPass()
                }
              }
            });
          }
        }, {
          key: "login",
          value: function login(tokenKey) {
            var _this6 = this;

            this.request.token = tokenKey;
            return this.storage.set(TOKEN_KEY, tokenKey).then(function () {
              _this6.getAnagrafica();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this7 = this;

            return this.storage.remove("anagraficaJson") && this.storage.remove(TOKEN_KEY).then(function () {
              _this7.authenticationState.next(false);
            });
          }
        }, {
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return this.storage.get(TOKEN_KEY).then(function (token) {
              return token;
            });
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]])], AuthenticationService);
      /***/
    },

    /***/
    "fvoU":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/modal/search-filter/search-filter.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SearchFilterPageModule */

    /***/
    function fvoU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchFilterPageModule", function () {
        return SearchFilterPageModule;
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


      var _search_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-filter-routing.module */
      "EuVl");
      /* harmony import */


      var _search_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search-filter.page */
      "I0WS");

      var SearchFilterPageModule = function SearchFilterPageModule() {
        _classCallCheck(this, SearchFilterPageModule);
      };

      SearchFilterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchFilterPageRoutingModule"]],
        declarations: [_search_filter_page__WEBPACK_IMPORTED_MODULE_6__["SearchFilterPage"]]
      })], SearchFilterPageModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-controller_8.entry.js": ["0BR9", "common", 0],
        "./ion-action-sheet-ios.entry.js": ["bnjm", "common", 1],
        "./ion-action-sheet-md.entry.js": ["utt2", "common", 2],
        "./ion-alert-ios.entry.js": ["yaSn", "common", 3],
        "./ion-alert-md.entry.js": ["2/RY", "common", 4],
        "./ion-app_8-ios.entry.js": ["iInF", "common", 5],
        "./ion-app_8-md.entry.js": ["K9Nc", "common", 6],
        "./ion-avatar_3-ios.entry.js": ["hH1s", "common", 7],
        "./ion-avatar_3-md.entry.js": ["Jw9y", "common", 8],
        "./ion-back-button-ios.entry.js": ["ouVF", "common", 9],
        "./ion-back-button-md.entry.js": ["/joy", "common", 10],
        "./ion-backdrop-ios.entry.js": ["uJLv", 11],
        "./ion-backdrop-md.entry.js": ["fSmE", 12],
        "./ion-button_2-ios.entry.js": ["s1jK", "common", 13],
        "./ion-button_2-md.entry.js": ["Wou7", "common", 14],
        "./ion-card_5-ios.entry.js": ["qshq", "common", 15],
        "./ion-card_5-md.entry.js": ["Q1uX", "common", 16],
        "./ion-checkbox-ios.entry.js": ["059i", "common", 17],
        "./ion-checkbox-md.entry.js": ["eLfv", "common", 18],
        "./ion-chip-ios.entry.js": ["+FzG", "common", 19],
        "./ion-chip-md.entry.js": ["yRpg", "common", 20],
        "./ion-col_3.entry.js": ["/CAe", 21],
        "./ion-datetime_3-ios.entry.js": ["Z1Jy", "common", 22],
        "./ion-datetime_3-md.entry.js": ["X0Dk", "common", 23],
        "./ion-fab_3-ios.entry.js": ["wvyA", "common", 24],
        "./ion-fab_3-md.entry.js": ["NkKY", "common", 25],
        "./ion-img.entry.js": ["wHD8", 26],
        "./ion-infinite-scroll_2-ios.entry.js": ["nf6t", "common", 27],
        "./ion-infinite-scroll_2-md.entry.js": ["lg/V", "common", 28],
        "./ion-input-ios.entry.js": ["sdJS", "common", 29],
        "./ion-input-md.entry.js": ["uQUw", "common", 30],
        "./ion-item-option_3-ios.entry.js": ["Pa1g", "common", 31],
        "./ion-item-option_3-md.entry.js": ["KTnd", "common", 32],
        "./ion-item_8-ios.entry.js": ["Z51p", "common", 33],
        "./ion-item_8-md.entry.js": ["8bam", "common", 34],
        "./ion-loading-ios.entry.js": ["J3Yu", "common", 35],
        "./ion-loading-md.entry.js": ["N3W9", "common", 36],
        "./ion-menu_4-ios.entry.js": ["GEuc", "common", 37],
        "./ion-menu_4-md.entry.js": ["BHpw", "common", 38],
        "./ion-modal-ios.entry.js": ["mgaC", "common", 39],
        "./ion-modal-md.entry.js": ["EpFf", "common", 40],
        "./ion-nav_5.entry.js": ["qF1+", "common", 41],
        "./ion-popover-ios.entry.js": ["Gdks", "common", 42],
        "./ion-popover-md.entry.js": ["VgKV", "common", 43],
        "./ion-progress-bar-ios.entry.js": ["0PGG", "common", 44],
        "./ion-progress-bar-md.entry.js": ["h/Bu", "common", 45],
        "./ion-radio_2-ios.entry.js": ["5bK7", "common", 46],
        "./ion-radio_2-md.entry.js": ["pOmE", "common", 47],
        "./ion-range-ios.entry.js": ["5g9+", "common", 48],
        "./ion-range-md.entry.js": ["fD4w", "common", 49],
        "./ion-refresher_2-ios.entry.js": ["CXux", "common", 50],
        "./ion-refresher_2-md.entry.js": ["RODS", "common", 51],
        "./ion-reorder_2-ios.entry.js": ["IdzL", "common", 52],
        "./ion-reorder_2-md.entry.js": ["Ftzj", "common", 53],
        "./ion-ripple-effect.entry.js": ["STjf", 54],
        "./ion-route_4.entry.js": ["k5eQ", "common", 55],
        "./ion-searchbar-ios.entry.js": ["l0q3", "common", 56],
        "./ion-searchbar-md.entry.js": ["mLlG", "common", 57],
        "./ion-segment_2-ios.entry.js": ["Iymp", "common", 58],
        "./ion-segment_2-md.entry.js": ["3msy", "common", 59],
        "./ion-select_3-ios.entry.js": ["rYLK", "common", 60],
        "./ion-select_3-md.entry.js": ["WOXB", "common", 61],
        "./ion-slide_2-ios.entry.js": ["F/Xn", 62],
        "./ion-slide_2-md.entry.js": ["k8us", 63],
        "./ion-spinner.entry.js": ["nI0H", "common", 64],
        "./ion-split-pane-ios.entry.js": ["edcM", 65],
        "./ion-split-pane-md.entry.js": ["RyPD", 66],
        "./ion-tab-bar_2-ios.entry.js": ["DP4G", "common", 67],
        "./ion-tab-bar_2-md.entry.js": ["gaXT", "common", 68],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 69],
        "./ion-text.entry.js": ["ISmu", "common", 70],
        "./ion-textarea-ios.entry.js": ["xNZy", "common", 71],
        "./ion-textarea-md.entry.js": ["p1XJ", "common", 72],
        "./ion-toast-ios.entry.js": ["XGfm", "common", 73],
        "./ion-toast-md.entry.js": ["Y/uG", "common", 74],
        "./ion-toggle-ios.entry.js": ["WbT0", "common", 75],
        "./ion-toggle-md.entry.js": ["upP9", "common", 76],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 77]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "rGFX":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal/search-filter/search-filter.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rGFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-button (click)=\"this.modalCtrl.dismiss()\">\n            <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    <ion-title>\n    \tFiltri\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-item>\n    <ion-label><ion-text>Prezzo:</ion-text></ion-label>\n        <ion-range dualKnobs=\"true\" [(ngModel)]=\"minmaxprice\" min=\"1\" max=\"300\" step=\"5\" pin=\"true\">\n          <ion-label slot=\"start\"><ion-text>Minimo</ion-text></ion-label>\n          <ion-label slot=\"end\"><ion-text>Massimo</ion-text></ion-label>\n        </ion-range>\n\t</ion-item>\n\n<div style=\"text-align: center;\">\n\t<ion-button id=\"myButtonYellow\" (click)=\"closeModal()\">Filtra i risultati</ion-button>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "tNc6":
    /*!***********************************************!*\
      !*** ./src/app/services/utilities.service.ts ***!
      \***********************************************/

    /*! exports provided: UtilitiesService */

    /***/
    function tNc6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilitiesService", function () {
        return UtilitiesService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _pages_popover_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../pages/popover/popover.page */
      "6ZXX");

      var UtilitiesService = /*#__PURE__*/function () {
        function UtilitiesService(alertController, popoverController) {
          _classCallCheck(this, UtilitiesService);

          this.alertController = alertController;
          this.popoverController = popoverController; //#endregion
          //#region //*Images

          this.img = "data:image/png;base64,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";
          this.user = "data:image/png;base64,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";
        }

        _createClass(UtilitiesService, [{
          key: "simplyAlert",
          value: function simplyAlert(_ref5) {
            var _ref5$operation = _ref5.operation,
                operation = _ref5$operation === void 0 ? function () {} : _ref5$operation,
                header = _ref5.header,
                message = _ref5.message;
            this.alertController.create({
              header: header,
              message: message,
              buttons: [{
                text: 'OK',
                role: 'cancel',
                handler: operation
              }]
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "alertError",
          value: function alertError(_ref6) {
            var _ref6$handler = _ref6.handler,
                handler = _ref6$handler === void 0 ? function () {} : _ref6$handler,
                _ref6$header = _ref6.header,
                header = _ref6$header === void 0 ? "Errore" : _ref6$header,
                _ref6$message = _ref6.message,
                message = _ref6$message === void 0 ? "Si è verificato un errore nell'esecuzione dell'operazione richiesta. Riprova più tardi, se il problema dovesse persistere contatta l'amministrazione." : _ref6$message;
            this.alertController.create({
              header: header,
              message: message,
              buttons: [{
                text: 'OK',
                role: 'cancel',
                handler: handler
              }]
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "confirmAlert",
          value: function confirmAlert(_ref7) {
            var _ref7$handlerYes = _ref7.handlerYes,
                handlerYes = _ref7$handlerYes === void 0 ? function () {} : _ref7$handlerYes,
                _ref7$handlerNo = _ref7.handlerNo,
                handlerNo = _ref7$handlerNo === void 0 ? function () {} : _ref7$handlerNo,
                header = _ref7.header,
                message = _ref7.message;
            this.alertController.create({
              header: header,
              message: message,
              buttons: [{
                text: 'No',
                role: 'cancel',
                handler: handlerNo
              }, {
                text: 'Si',
                handler: handlerYes
              }]
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "createPopover",
          value: function createPopover(msg) {
            this.popoverController.create({
              component: _pages_popover_popover_page__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
              componentProps: {
                "msg": msg
              }
            }).then(function (pop) {
              pop.present();
            });
          } //#region //! Validator 

        }, {
          key: "validatorCheckPassword",
          value: function validatorCheckPassword(control) {
            if (control.parent != null && control.value != control.parent.value.password) {
              return {
                different: true
              };
            }

            return null;
          }
        }, {
          key: "validatorNotEmpty",
          value: function validatorNotEmpty(control) {
            if (control.value.trim().length == 0) {
              return {
                required: true
              };
            }

            return null;
          }
        }, {
          key: "validatorHasWhiteSpaces",
          value: function validatorHasWhiteSpaces(control) {
            if (control.value.length != control.value.replace(" ", "").length) {
              return {
                spaces: true
              };
            }

            return null;
          }
        }, {
          key: "validatorCF",
          value: function validatorCF(control) {
            if (!new RegExp("^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$").test(control.value.toUpperCase())) {
              return {
                invalidCF: true
              };
            }

            return null;
          }
        }, {
          key: "validatorDate",
          value: function validatorDate(control) {
            var data = new Date(control.value).getTime();
            var ageDifMs = Date.now() - data;
            var ageDate = new Date(ageDifMs);

            if (ageDate.getUTCFullYear() - 1970 < 18) {
              return {
                minorenne: true
              };
            }

            return null;
          }
        }]);

        return UtilitiesService;
      }();

      UtilitiesService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }];
      };

      UtilitiesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], UtilitiesService);
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");

      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "F4UR")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'home',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "99Un")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-register-register-module */
          "pages-register-register-module").then(__webpack_require__.bind(null,
          /*! ./pages/register/register.module */
          "fhSy")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'register-utente',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-register-utente-register-utente-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-register-utente-register-utente-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/register-utente/register-utente.module */
          "PiPV")).then(function (m) {
            return m.RegisterUtentePageModule;
          });
        }
      }, {
        path: 'register-impresa',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-register-impresa-register-impresa-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-register-impresa-register-impresa-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/register-impresa/register-impresa.module */
          "HXiJ")).then(function (m) {
            return m.RegisterImpresaPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-edit-profile-edit-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/edit-profile/edit-profile.module */
          "k578")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'compra',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-compra-compra-module */
          "pages-compra-compra-module").then(__webpack_require__.bind(null,
          /*! ./pages/compra/compra.module */
          "K8Xd")).then(function (m) {
            return m.CompraPageModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-wallet-wallet-module */
          "pages-wallet-wallet-module").then(__webpack_require__.bind(null,
          /*! ./pages/wallet/wallet.module */
          "qzon")).then(function (m) {
            return m.WalletPageModule;
          });
        }
      }, {
        path: 'servizi',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-servizi-servizi-module */
          "pages-servizi-servizi-module").then(__webpack_require__.bind(null,
          /*! ./pages/servizi/servizi.module */
          "a4tL")).then(function (m) {
            return m.ServiziPageModule;
          });
        }
      }, {
        path: 'richiedi-servizi',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-richiedi-servizi-richiedi-servizi-module */
          "pages-richiedi-servizi-richiedi-servizi-module").then(__webpack_require__.bind(null,
          /*! ./pages/richiedi-servizi/richiedi-servizi.module */
          "rFf3")).then(function (m) {
            return m.RichiediServiziPageModule;
          });
        }
      }, {
        path: 'search-filter',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/modal/search-filter/search-filter.module */
          "fvoU")).then(function (m) {
            return m.SearchFilterPageModule;
          });
        }
      }, {
        path: 'cart-modal',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./pages/cart-modal/cart-modal.module */
          "E8I8")).then(function (m) {
            return m.CartModalPageModule;
          });
        }
      }, {
        path: 'descrizione-transazione',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-descrizione-transazione-descrizione-transazione-module */
          "pages-descrizione-transazione-descrizione-transazione-module").then(__webpack_require__.bind(null,
          /*! ./pages/descrizione-transazione/descrizione-transazione.module */
          "2Oun")).then(function (m) {
            return m.DescrizioneTransazionePageModule;
          });
        }
      }, {
        path: 'prodotti',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-prodotti-prodotti-module */
          "pages-prodotti-prodotti-module").then(__webpack_require__.bind(null,
          /*! ./pages/prodotti/prodotti.module */
          "22NN")).then(function (m) {
            return m.ProdottiPageModule;
          });
        }
      }, {
        path: 'descrizione-prodotto',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-descrizione-prodotto-descrizione-prodotto-module */
          "pages-descrizione-prodotto-descrizione-prodotto-module").then(__webpack_require__.bind(null,
          /*! ./pages/descrizione-prodotto/descrizione-prodotto.module */
          "TaWU")).then(function (m) {
            return m.DescrizioneProdottoPageModule;
          });
        }
      }, {
        path: 'nuovo-prodotto',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-nuovo-prodotto-nuovo-prodotto-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-nuovo-prodotto-nuovo-prodotto-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/nuovo-prodotto/nuovo-prodotto.module */
          "3oMI")).then(function (m) {
            return m.NuovoProdottoPageModule;
          });
        }
      }, {
        path: 'nuovo-servizio',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-nuovo-servizio-nuovo-servizio-module */
          "pages-nuovo-servizio-nuovo-servizio-module").then(__webpack_require__.bind(null,
          /*! ./pages/nuovo-servizio/nuovo-servizio.module */
          "vzTz")).then(function (m) {
            return m.NuovoServizioPageModule;
          });
        }
      }, {
        path: 'ordini',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-ordini-ordini-module */
          "pages-ordini-ordini-module").then(__webpack_require__.bind(null,
          /*! ./pages/ordini/ordini.module */
          "FAv+")).then(function (m) {
            return m.OrdiniPageModule;
          });
        }
      }, {
        path: 'richiesta',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-richiesta-richiesta-module */
          "pages-richiesta-richiesta-module").then(__webpack_require__.bind(null,
          /*! ./pages/richiesta/richiesta.module */
          "2smt")).then(function (m) {
            return m.RichiestaPageModule;
          });
        }
      }, {
        path: 'servizi-collettivita',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-servizi-collettivita-servizi-collettivita-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-servizi-collettivita-servizi-collettivita-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/servizi-collettivita/servizi-collettivita.module */
          "t3k6")).then(function (m) {
            return m.ServiziCollettivitaPageModule;
          });
        }
      }, {
        path: 'segnalazione',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-segnalazione-segnalazione-module */
          "pages-segnalazione-segnalazione-module").then(__webpack_require__.bind(null,
          /*! ./pages/segnalazione/segnalazione.module */
          "nQFI")).then(function (m) {
            return m.SegnalazionePageModule;
          });
        }
      }, {
        path: 'feedback',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-feedback-feedback-module */
          "pages-feedback-feedback-module").then(__webpack_require__.bind(null,
          /*! ./pages/feedback/feedback.module */
          "QVr5")).then(function (m) {
            return m.FeedbackPageModule;
          });
        }
      }, {
        path: 'infofeedback',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-infofeedback-infofeedback-module */
          "pages-infofeedback-infofeedback-module").then(__webpack_require__.bind(null,
          /*! ./pages/infofeedback/infofeedback.module */
          "d9ge")).then(function (m) {
            return m.InfofeedbackPageModule;
          });
        }
      }, {
        path: 'richieste-mie',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-richieste-mie-richieste-mie-module */
          "pages-richieste-mie-richieste-mie-module").then(__webpack_require__.bind(null,
          /*! ./pages/richieste-mie/richieste-mie.module */
          "/o0I")).then(function (m) {
            return m.RichiesteMiePageModule;
          });
        }
      }, {
        path: 'richieste-miei-servizi',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-richieste-miei-servizi-richieste-miei-servizi-module */
          "pages-richieste-miei-servizi-richieste-miei-servizi-module").then(__webpack_require__.bind(null,
          /*! ./pages/richieste-miei-servizi/richieste-miei-servizi.module */
          "ffx6")).then(function (m) {
            return m.RichiesteMieiServiziPageModule;
          });
        }
      }, {
        path: 'certifica-servizi',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-certifica-servizi-certifica-servizi-module */
          "pages-certifica-servizi-certifica-servizi-module").then(__webpack_require__.bind(null,
          /*! ./pages/certifica-servizi/certifica-servizi.module */
          "qOBS")).then(function (m) {
            return m.CertificaServiziPageModule;
          });
        }
      }, {
        path: 'bisogni',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-bisogni-bisogni-module */
          "pages-bisogni-bisogni-module").then(__webpack_require__.bind(null,
          /*! ./pages/bisogni/bisogni.module */
          "6Nsh")).then(function (m) {
            return m.BisogniPageModule;
          });
        }
      }, {
        path: 'segnala-bisogni',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-segnala-bisogni-segnala-bisogni-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-segnala-bisogni-segnala-bisogni-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/segnala-bisogni/segnala-bisogni.module */
          "9AOk")).then(function (m) {
            return m.SegnalaBisogniPageModule;
          });
        }
      }, {
        path: 'popover',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-popover-popover-module */
          "pages-popover-popover-module").then(__webpack_require__.bind(null,
          /*! ./pages/popover/popover.module */
          "kXnM")).then(function (m) {
            return m.PopoverPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"],
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "x/JU":
    /*!*****************************************************!*\
      !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
      \*****************************************************/

    /*! exports provided: CartModalPage */

    /***/
    function xJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartModalPage", function () {
        return CartModalPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cart-modal.page.html */
      "cBv1");
      /* harmony import */


      var _cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cart-modal.page.scss */
      "T794");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/cart.service */
      "c14U");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");

      var CartModalPage = /*#__PURE__*/function () {
        function CartModalPage(cartService, modalCtrl, request, utilities) {
          _classCallCheck(this, CartModalPage);

          this.cartService = cartService;
          this.modalCtrl = modalCtrl;
          this.request = request;
          this.utilities = utilities;
        }

        _createClass(CartModalPage, [{
          key: "conferma",
          value: function conferma() {
            var _this8 = this;

            if (this.cartService.getTotalElements() == 0) {
              this.utilities.simplyAlert({
                header: "Attenzione",
                message: "Il carrello è vuoto."
              });
              return;
            }

            this.utilities.confirmAlert({
              handlerYes: function handlerYes() {
                _this8.checkout();
              },
              header: "Attenzione",
              message: "Vuoi proseguire con l'ordine?"
            });
          }
        }, {
          key: "checkout",
          value: function checkout() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.request.get({
                        path: "/budget",
                        handler: function handler(response) {
                          var saldo = response["_msg"].andron;

                          if (saldo < _this9.cartService.getTotal()) {
                            _this9.utilities.simplyAlert({
                              header: "Attenzione",
                              message: "Saldo insufficiente per effettuare l'operazione!"
                            });
                          } else {
                            _this9.request.post({
                              path: "/products",
                              data: Array.from(_this9.cartService.cart.values()),
                              handler: function handler() {
                                _this9.utilities.simplyAlert({
                                  operation: function operation() {
                                    _this9.cartService.cart = new Map();

                                    _this9.modalCtrl.dismiss();
                                  },
                                  header: "Grazie per il tuo ordine!",
                                  message: "Speriamo che usufrirai ancora dei nostri servizi"
                                });
                              },
                              error: function error(errore) {
                                console.log(errore);

                                if (errore.error.status == -1) {
                                  _this9.utilities.alertError({
                                    header: "Attenzione!",
                                    message: errore.error.messaggio
                                  });
                                } else {
                                  _this9.utilities.alertError({});
                                }
                              }
                            });
                          }
                        },
                        error: function error() {
                          _this9.utilities.alertError({});
                        }
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CartModalPage;
      }();

      CartModalPage.ctorParameters = function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]
        }];
      };

      CartModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-modal',
        template: _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]])], CartModalPage);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h1, h3 {\n  text-transform: capitalize;\n}\n\nion-text {\n  font-size: 12px;\n}\n\n#idListMenu ion-icon {\n  padding-right: 17px;\n  color: #1d273d;\n}\n\nion-item {\n  color: #1d273d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0FBQ0Q7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7QUFJSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSwgaDN7XG4gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tdGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4jaWRMaXN0TWVudSBpb24taWNvbntcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICAgIGNvbG9yOiByZ2IoMjksIDM5LCA2MSk7XG59XG5pb24taXRlbXtcbiAgICBjb2xvcjogcmdiKDI5LCAzOSwgNjEpO1xufVxuXG5cblxuXG5cbiJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map