(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taW1ne1xuICAgIGhlaWdodDogMzB2aDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgXG59XG5cblxuIl19 */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: white\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"this.utenza=='utente' || this.utenza=='ente'\">\n  <h3 class=\"ion-text-center\">Saldo</h3>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n       <div class=\"ion-text-center\">\n         {{budget}} ANDRON\n       </div>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <div class=\"ion-text-center\">Saldo disponibile al {{today}}.</div>\n    </ion-card-content>\n  </ion-card>\n\n  <h3 class=\"ion-text-center\">News</h3>\n \n  <ion-list>\n    <ion-card style=\"background-color: black;\">\n      <ion-card-content>\n        <ion-card-title class=\"ion-text-center\">\n          Titolo News...  \n        </ion-card-title>\n  \n          <ion-row>\n            <ion-col size=\"4\">\n              <div>\n                <ion-avatar slot=\"start\">\n                  <img src=\"{{img}}\">\n                </ion-avatar>\n              </div>\n            </ion-col>\n          \n            <ion-col size=\"8\">\n              <div class=\"ion-align-items-left\">\n                  Intro news....\n              </div>\n            </ion-col>\n          </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card style=\"background-color: black;\">\n      <ion-card-content>\n        <ion-card-title class=\"ion-text-center\">\n          Titolo News...  \n        </ion-card-title>\n  \n          <ion-row>\n            <ion-col size=\"4\">\n              <div>\n                <ion-avatar slot=\"start\">\n                  <img src=\"{{img}}\">\n                </ion-avatar>\n              </div>\n            </ion-col>\n          \n            <ion-col size=\"8\">\n              <div class=\"ion-align-items-left\">\n                  Intro news....\n              </div>\n            </ion-col>\n          </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"this.utenza=='impresa'\">\n  <h3 class=\"ion-text-center\">Ordini da evadere</h3>\n  <ion-card style=\"background-color: rgb(29, 39, 61)\" *ngIf=\"this.ordini?.length==0\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <div class=\"ion-text-center\">\n          Nessuna ordine da evadere!\n        </div>\n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n  <ion-list>\n\n    <ion-card style=\"background-color: rgb(29, 39, 61);\" *ngFor=\"let item of ordini\">\n      <div *ngIf=\"item.user=='utente'\">\n\n\n      <ion-card-header >\n        <ion-card-subtitle style=\"font-size:10px\" class=\"ion-text-wrap\">\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div class=\"ion-text-center\">\n                  #{{item.id}}\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div>\n                  Ordine di:\n                </div>\n              </ion-col>\n              <ion-col size=\"8\">\n                <div class=\"ion-text-center\">\n                  {{item.acquirente.nome}} {{item.acquirente.cognome}}\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-img src=\"{{ item.img }}\"></ion-img>\n        </ion-card-subtitle>\n        <ion-card-title color=\"black\" lines=\"none\" style=\"font-size:14px\" class=\"ion-text-wrap\">{{item.nomeBene}} x {{item.quantita}}\n        </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\" class=\"ion-text-center\">\n                Contatti acquirente\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\">\n                Telefono\n              </div>\n            </ion-col>\n\n            <ion-col>\n              <div>\n                {{item.acquirente.telefono}}\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\">\n                Email\n              </div>\n            </ion-col>\n          \n            <ion-col>\n              <div>\n                {{item.acquirente.email}}\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\">\n                Via\n              </div>\n            </ion-col>\n          \n            <ion-col>\n              <div>\n                {{item.acquirente.via}}\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div  style=\"color: tomato;\">\n               Cap\n              </div>\n            </ion-col>\n          \n            <ion-col>\n              <div>\n                {{item.acquirente.cap}}\n              </div>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col>\n              <div>\n                <ion-button size=\"small\" expand=\"block\" (click)=\"evadiOrdine(item.id)\">\n                  Evadi Ordine\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n      </div>\n      <div *ngIf=\"item.user=='impresa'\">\n\n\n        <ion-card-header >\n          <ion-card-subtitle style=\"font-size:10px\" class=\"ion-text-wrap\">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <div class=\"ion-text-center\">\n                    #{{item.id}}\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <div>\n                    Ordine di:\n                  </div>\n                </ion-col>\n                <ion-col size=\"8\">\n                  <div class=\"ion-text-center\">\n                    {{item.acquirente.nome}} {{item.acquirente.cognome}}\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-img src=\"{{ item.img }}\"></ion-img>\n          </ion-card-subtitle>\n          <ion-card-title color=\"black\" lines=\"none\" style=\"font-size:14px\" class=\"ion-text-wrap\">{{item.nomeBene}} x {{item.quantita}}\n          </ion-card-title>\n        </ion-card-header>\n  \n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <div  style=\"color: tomato;\" class=\"ion-text-center\">\n                  Contatti acquirente\n                </div>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <div  style=\"color: tomato;\">\n                  Telefono\n                </div>\n              </ion-col>\n  \n              <ion-col>\n                <div>\n                  {{item.acquirente.telefono}}\n                </div>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <div  style=\"color: tomato;\">\n                  Email\n                </div>\n              </ion-col>\n            \n              <ion-col>\n                <div>\n                  {{item.acquirente.email}}\n                </div>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <div  style=\"color: tomato;\">\n                  Via\n                </div>\n              </ion-col>\n            \n              <ion-col>\n                <div>\n                  {{item.acquirente.via}}\n                </div>\n              </ion-col>\n            </ion-row>\n  \n            <ion-row>\n              <ion-col>\n                <div  style=\"color: tomato;\">\n                 Cap\n                </div>\n              </ion-col>\n            \n              <ion-col>\n                <div>\n                  {{item.acquirente.cap}}\n                </div>\n              </ion-col>\n            </ion-row>\n  \n  \n            <ion-row>\n              <ion-col>\n                <div>\n                  <ion-button size=\"small\" expand=\"block\" (click)=\"evadiOrdine(item.id)\">\n                    Evadi Ordine\n                  </ion-button>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n        </div>\n      <div *ngIf=\"item.user=='ente'\">\n\n\n          <ion-card-header >\n            <ion-card-subtitle style=\"font-size:10px\" class=\"ion-text-wrap\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <div class=\"ion-text-center\">\n                      #{{item.id}}\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <div>\n                      Ordine di:\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"8\">\n                    <div class=\"ion-text-center\">\n                      {{item.acquirente.nome}}\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-img src=\"{{ item.img }}\"></ion-img>\n            </ion-card-subtitle>\n            <ion-card-title color=\"black\" lines=\"none\" style=\"font-size:14px\" class=\"ion-text-wrap\">{{item.nomeBene}} x {{item.quantita}}\n            </ion-card-title>\n          </ion-card-header>\n    \n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <div  style=\"color: tomato;\" class=\"ion-text-center\">\n                    Contatti acquirente\n                  </div>\n                </ion-col>\n              </ion-row>\n    \n              <ion-row>\n                <ion-col>\n                  <div  style=\"color: tomato;\">\n                    Telefono\n                  </div>\n                </ion-col>\n    \n                <ion-col>\n                  <div>\n                    {{item.acquirente.telefono}}\n                  </div>\n                </ion-col>\n              </ion-row>\n    \n              <ion-row>\n                <ion-col>\n                  <div  style=\"color: tomato;\">\n                    Email\n                  </div>\n                </ion-col>\n              \n                <ion-col>\n                  <div>\n                    {{item.acquirente.email}}\n                  </div>\n                </ion-col>\n              </ion-row>\n  \n    \n              <ion-row>\n                <ion-col>\n                  <div>\n                    <ion-button size=\"small\" expand=\"block\" (click)=\"evadiOrdine(item.id)\">\n                      Evadi Ordine\n                    </ion-button>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n          </div>\n    </ion-card>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let HomePage = class HomePage {
    constructor(storage, request, utilities) {
        this.storage = storage;
        this.request = request;
        this.utilities = utilities;
        this.ordini = [];
        this.img = this.utilities.img;
        this.storage.get("utenza").then((a) => {
            this.utenza = a;
            if (this.utenza == "utente" || this.utenza == "ente") {
                this.getSaldo();
            }
            else {
                this.searchOrdini();
            }
        });
    }
    getSaldo() {
        this.request.get({
            path: "/budget",
            handler: (response) => {
                this.budget = response["_msg"].andron;
                this.today = new Date().toLocaleDateString();
            },
            error: () => {
                this.utilities.alertError({});
            }
        });
    }
    evadiOrdine(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.utilities.confirmAlert({
                header: "Attenzione",
                message: "Vuoi davvero confermare l'evasione dell'ordine? Non sarà possibile annulare l'operazione",
                handlerYes: () => {
                    this.request.put({
                        path: "/orders" + id,
                        handler: () => {
                            this.utilities.simplyAlert({
                                operation: () => { this.searchOrdini(); },
                                header: "Operazione effettuata",
                                message: "L'ordine è stato evaso, una volta che l'utente lo avrà ricevuto, invierà feedback relativo all'acquisto."
                            });
                        },
                        error: () => {
                            this.utilities.alertError({});
                        }
                    });
                }
            });
        });
    }
    searchOrdini() {
        this.request.get({
            path: "/orders",
            handler: (response) => {
                this.ordini = response["_msg"];
            },
            error: () => {
                this.utilities.alertError({});
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map