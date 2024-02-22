(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-descrizione-prodotto-descrizione-prodotto-module"], {
    /***/
    "5yur":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/descrizione-prodotto/descrizione-prodotto.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function yur(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".info-img {\n  max-height: 30vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Rlc2NyaXppb25lLXByb2RvdHRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJkZXNjcml6aW9uZS1wcm9kb3R0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1pbWd7XG4gICAgbWF4LWhlaWdodDogMzB2aDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "TaWU":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/descrizione-prodotto/descrizione-prodotto.module.ts ***!
      \***************************************************************************/

    /*! exports provided: DescrizioneProdottoPageModule */

    /***/
    function TaWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DescrizioneProdottoPageModule", function () {
        return DescrizioneProdottoPageModule;
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


      var _descrizione_prodotto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./descrizione-prodotto-routing.module */
      "kHzX");
      /* harmony import */


      var _descrizione_prodotto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./descrizione-prodotto.page */
      "bqfR");

      var DescrizioneProdottoPageModule = function DescrizioneProdottoPageModule() {
        _classCallCheck(this, DescrizioneProdottoPageModule);
      };

      DescrizioneProdottoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _descrizione_prodotto_routing_module__WEBPACK_IMPORTED_MODULE_5__["DescrizioneProdottoPageRoutingModule"]],
        declarations: [_descrizione_prodotto_page__WEBPACK_IMPORTED_MODULE_6__["DescrizioneProdottoPage"]]
      })], DescrizioneProdottoPageModule);
      /***/
    },

    /***/
    "bqfR":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/descrizione-prodotto/descrizione-prodotto.page.ts ***!
      \*************************************************************************/

    /*! exports provided: DescrizioneProdottoPage */

    /***/
    function bqfR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DescrizioneProdottoPage", function () {
        return DescrizioneProdottoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_descrizione_prodotto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./descrizione-prodotto.page.html */
      "o/7d");
      /* harmony import */


      var _descrizione_prodotto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./descrizione-prodotto.page.scss */
      "5yur");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DescrizioneProdottoPage = function DescrizioneProdottoPage(route) {
        _classCallCheck(this, DescrizioneProdottoPage);

        this.route = route;
        this.data = JSON.parse(this.route.snapshot.paramMap.get("product"));
      };

      DescrizioneProdottoPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      DescrizioneProdottoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-descrizione-prodotto',
        template: _raw_loader_descrizione_prodotto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_descrizione_prodotto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], DescrizioneProdottoPage);
      /***/
    },

    /***/
    "kHzX":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/descrizione-prodotto/descrizione-prodotto-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: DescrizioneProdottoPageRoutingModule */

    /***/
    function kHzX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DescrizioneProdottoPageRoutingModule", function () {
        return DescrizioneProdottoPageRoutingModule;
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


      var _descrizione_prodotto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./descrizione-prodotto.page */
      "bqfR");

      var routes = [{
        path: '',
        component: _descrizione_prodotto_page__WEBPACK_IMPORTED_MODULE_3__["DescrizioneProdottoPage"]
      }];

      var DescrizioneProdottoPageRoutingModule = function DescrizioneProdottoPageRoutingModule() {
        _classCallCheck(this, DescrizioneProdottoPageRoutingModule);
      };

      DescrizioneProdottoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DescrizioneProdottoPageRoutingModule);
      /***/
    },

    /***/
    "o/7d":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/descrizione-prodotto/descrizione-prodotto.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o7d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>descrizioneProdotto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n    <ion-card-subtitle>\n\n      <ion-row>\n        <ion-col>\n          <div class=\"ion-text-center\">\n            Fornitore:\n          </div>\n        </ion-col>\n\n        <ion-col>\n          <div class=\"ion-text-center\">\n            {{this.data.fornitore}}\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-subtitle>\n\n\n    <ion-row>\n      <ion-col><!--Qui va la foto  {{this.data.foto}}-->\n        <img src=\"assets/img/andrea.jpg\" class=\"info-img\">\n      </ion-col>\n    </ion-row>\n \n    <ion-card-title>\n      <div class=\"ion-text-center\">\n        {{this.data.nome}}\n      </div>\n    </ion-card-title>\n\n    <ion-row>\n      {{this.data.descrizione}}\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"5\" style=\"color: tomato;\">\n        <div class=\"ion-text-center\">\n          Marca:\n        </div>\n      </ion-col>\n\n      <ion-col>\n        <div class=\"ion-text-center\">\n          {{this.data.marca}}\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"5\" style=\"color: tomato;\">\n        <div>\n          Categoria:\n        </div>\n      </ion-col>\n    \n      <ion-col>\n        <div class=\"ion-text-center\">\n          {{this.data.categoria}}\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\" style=\"color: tomato;\">\n          Prezzo\n        </div>\n      </ion-col>\n    \n      <ion-col>\n        <div class=\"ion-text-center\" style=\"color: tomato;\">\n          Quantita\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div class=\"ion-text-center\">\n          {{this.data.andron}}\n        </div>\n      </ion-col>\n    \n      <ion-col>\n        <div class=\"ion-text-center\">\n          {{this.data.quantita}}\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-descrizione-prodotto-descrizione-prodotto-module-es5.js.map