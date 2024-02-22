(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compra-compra-module"],{

/***/ "2/r0":
/*!***********************************************!*\
  !*** ./src/app/pages/compra/compra.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wcmEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "CwxS":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compra/compra.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n        <ion-text>Compra</ion-text>\n    </ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar  (keyup.enter)=\"filter($event)\" placeholder=\"Cerca\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button size=\"small\" shape=\"round\"(click)=\"searchFilter()\">\n        <ion-icon name=\"options\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" shape=\"round\" (click)=\"openCart()\">\n        <ion-icon ios=\"ios-cart\" md=\"md-cart\"></ion-icon>\n        {{this.cartItemCount}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar *ngIf=\"filtro==true\">\n    <ion-button size=\"small\" expand=\"full\" (click)=\"rimuoviFiltri()\">Rimuovi filtro</ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-list>\n    <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"prodotti?.length==0\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <div class=\"ion-text-center\">\n            Attenzione!\n          </div>\n        </ion-card-subtitle>\n        <ion-card-content>\n          Attualmente non sono presenti prodotti da poter acquistare usando gli Andron.<br>Controlla nei prossimi giorni! \n        </ion-card-content>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngFor=\"let p of prodotti\">\n      <ion-card-content>\n        <ion-card-subtitle>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-center\">\n                Fornito da:\n              </div>\n            </ion-col>\n            <ion-col class=\"ion-text-center\">\n              <div (click)=\"feedback(p.impresa,'impresa',p.fornitore)\">\n                {{p.fornitore}}\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-subtitle>\n          <ion-card-title style=\"font-size:20px\" class=\"ion-text-center\" (click)=\"clickItem(p)\">{{ p.nome }}</ion-card-title>\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <div>\n              <ion-avatar slot=\"start\">\n                <ion-img src=\"{{ p.img }}\"></ion-img>\n              </ion-avatar>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"8\">\n            <div class=\"ion-align-items-left\">\n              {{ p.descrizione }}\n            </div>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col >\n            <div style=\"color: tomato;\">\n              Prezzo\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div>\n              {{p.andron}} Andron\n            </div>\n          </ion-col>\n\n        </ion-row>\n          \n        <ion-row>\n          <ion-col >\n            <div style=\"color: tomato;\">\n              Quantita disponibile:\n            </div>\n          </ion-col>\n\n          <ion-col *ngIf=\"p.quantita>0\">\n                {{ p.quantita}}\n          </ion-col>\n\n          <ion-col *ngIf=\"p.quantita==0\">\n            <div class=\"ion-text-center\"  style=\"color: red\">\n              ESAURITO\n            </div>\n          </ion-col>\n\n        </ion-row>\n              \n        <ion-row>\n          <ion-col>\n            <div>\n              <ion-button class=\"ion-float-right\" fill=\"clear\" (click)=\"cartService.addProduct(p); incrementCounter()\" *ngIf=\"p.quantita>0\">\n                Aggiungi al Carrello <ion-icon name=\"add\" style=\"color: green\"></ion-icon>\n              </ion-button>\n            </div>\n          </ion-col>\n          \n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadmore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Caricamento...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "K8Xd":
/*!***********************************************!*\
  !*** ./src/app/pages/compra/compra.module.ts ***!
  \***********************************************/
/*! exports provided: CompraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraPageModule", function() { return CompraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _compra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compra-routing.module */ "OM7a");
/* harmony import */ var _compra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compra.page */ "M8mF");







let CompraPageModule = class CompraPageModule {
};
CompraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _compra_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompraPageRoutingModule"]
        ],
        declarations: [_compra_page__WEBPACK_IMPORTED_MODULE_6__["CompraPage"]]
    })
], CompraPageModule);



/***/ }),

/***/ "M8mF":
/*!*********************************************!*\
  !*** ./src/app/pages/compra/compra.page.ts ***!
  \*********************************************/
/*! exports provided: CompraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraPage", function() { return CompraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compra_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compra.page.html */ "CwxS");
/* harmony import */ var _compra_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compra.page.scss */ "2/r0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "x/JU");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "I0WS");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let CompraPage = class CompraPage {
    constructor(modalCtrl, cartService, request, utilities, router) {
        this.modalCtrl = modalCtrl;
        this.cartService = cartService;
        this.request = request;
        this.utilities = utilities;
        this.router = router;
        this.prodotti = [];
        this.cartItemCount = 0;
        this.upperPrice = undefined;
        this.lowerPrice = undefined;
        this.page = 0;
        this.psize = 5;
        this.filtro = false;
        this.termine = null;
        this.cartItemCount = this.cartService.getTotalElements();
        this.initializeItems();
    }
    incrementCounter() {
        this.cartItemCount++;
    }
    initializeItems(add = () => { }) {
        this.request.get({
            path: "/products",
            httpParam: {
                "_page": this.page,
                "_psize": this.psize,
                "filtro": this.filtro,
                "termine": this.termine,
                "min": this.min,
                "max": this.max
            },
            handler: (response) => {
                console.log(response);
                for (const t of response["_msg"]) {
                    this.prodotti.push(t);
                }
                ;
                add();
            },
            error: () => {
                this.utilities.alertError({
                    handler: () => { this.router.navigate(["/home"]); },
                    header: "Attenzione!",
                    message: "Si è verificato un errore, la pagina attualmente non è disponibile, riporva più tardi."
                });
            }
        });
    }
    loadmore(event) {
        this.page++;
        this.initializeItems(() => { event.target.complete(); });
    }
    openCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_5__["CartModalPage"],
            });
            modal.onDidDismiss().then(() => {
                this.cartItemCount = this.cartService.getTotalElements();
            });
            return yield modal.present();
        });
    }
    searchFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_6__["SearchFilterPage"]
            });
            modal.onDidDismiss().then((data) => {
                var _a, _b;
                this.upperPrice = (_a = data.data["upper"]) !== null && _a !== void 0 ? _a : 300;
                this.lowerPrice = (_b = data.data["lower"]) !== null && _b !== void 0 ? _b : 0;
                this.filtro = true;
                this.initializeItems();
            });
            return yield modal.present();
        });
    }
    rimuoviFiltri() {
        this.page = 0;
        this.filtro = false;
        this.termine = '';
        this.lowerPrice = undefined;
        this.upperPrice = undefined;
        this.initializeItems();
    }
    filter(event) {
        this.page = 0;
        this.filtro = true;
        this.termine = event.target.value.trim();
        this.initializeItems();
    }
    clickItem(product) {
        this.router.navigate(["/descrizione-prodotto", { "product": JSON.stringify(product) }]);
    }
    feedback(id, tipo, nome) {
        this.router.navigate(["/infofeedback", { "id": id, "tipo": tipo, "nome": nome }]);
    }
};
CompraPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
CompraPage.propDecorators = {
    fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cart', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
CompraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-compra',
        template: _raw_loader_compra_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_compra_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], CompraPage);



/***/ }),

/***/ "OM7a":
/*!*******************************************************!*\
  !*** ./src/app/pages/compra/compra-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CompraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraPageRoutingModule", function() { return CompraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra.page */ "M8mF");




const routes = [
    {
        path: '',
        component: _compra_page__WEBPACK_IMPORTED_MODULE_3__["CompraPage"]
    }
];
let CompraPageRoutingModule = class CompraPageRoutingModule {
};
CompraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompraPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-compra-compra-module-es2015.js.map