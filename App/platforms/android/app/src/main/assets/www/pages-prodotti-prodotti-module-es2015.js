(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prodotti-prodotti-module"],{

/***/ "22NN":
/*!***************************************************!*\
  !*** ./src/app/pages/prodotti/prodotti.module.ts ***!
  \***************************************************/
/*! exports provided: ProdottiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottiPageModule", function() { return ProdottiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _prodotti_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prodotti-routing.module */ "lZr3");
/* harmony import */ var _prodotti_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prodotti.page */ "9cHF");







let ProdottiPageModule = class ProdottiPageModule {
};
ProdottiPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _prodotti_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProdottiPageRoutingModule"]
        ],
        declarations: [_prodotti_page__WEBPACK_IMPORTED_MODULE_6__["ProdottiPage"]]
    })
], ProdottiPageModule);



/***/ }),

/***/ "2wBN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prodotti/prodotti.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>prodotti</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n\n      <ion-card style=\"background-color:rgb(29, 39, 61)\" *ngIf=\"products?.length==0\">\n        <ion-card-header>\n          <ion-card-subtitle>\n            <div class=\"ion-text-center\">\n              Non hai inserito ancora nessun prodotto!\n            </div>\n          </ion-card-subtitle>\n          <ion-card-content>\n            Premi il pulsante con il simbolo + per inserire un prodotto.\n          </ion-card-content>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card style=\"background-color: black;\" *ngFor=\"let p of products\">\n        <ion-card-content>\n          <ion-card-title>\n              <div class=\"ion-text-center\">\n                {{ p.nome }}\n              </div>\n            </ion-card-title>\n\n            <ion-img id=\"imgpreview\" src=\"{{ p.img }}\"></ion-img>\n\n            <ion-row>\n                  {{ p.descrizione }}\n            </ion-row>\n          \n        <ion-row>\n          <ion-col size=\"5\" style=\"color: tomato;\">\n            Prezzo:\n          </ion-col>\n          <ion-col>\n            <div class=\"ion-text-center\">\n              {{p.andron}} ANDRON\n            </div>  \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"5\"  style=\"color: tomato;\">\n            Quantita:\n          </ion-col>\n          <ion-col *ngIf=\"p.quantita>0\">\n            <div class=\"ion-text-center\">\n              {{p.quantita}}\n            </div>\n          </ion-col>\n          <ion-col *ngIf=\"p.quantita==0\">\n            <div class=\"ion-text-center\" style=\"color: red;\">\n              ESAURITO\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <div class=\"ion-text-center\">\n              Stato\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-text style=\"color: red;\" *ngIf=\"p.accettato==0 && p.rifiutato==1\">Il prodotto è stato rifiutato, eliminalo per non vederlo più tra quelli inseriti </ion-text>\n            <ion-text (click)=\"popover(0)\" style=\"color: red;\" *ngIf=\"p.accettato==0 && p.rifiutato==0\">In attesa di accettazione...  <ion-icon name=\"help-circle-outline\" (click)=\"popover(0)\"></ion-icon></ion-text>\n            <ion-text (click)=\"popover(1)\" style=\"color: green;\" *ngIf=\"p.accettato==1 && p.rifiutato==0\">Disponibile Online!  <ion-icon name=\"help-circle-outline\" (click)=\"popover(1)\"></ion-icon></ion-text> \n            \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col *ngIf=\"p.accettato==1\">\n            <ion-button (click)=\"aggiungi(p.id)\">\n             Aggiungi\n            </ion-button>\n          </ion-col>\n       \n          <ion-col class=\"ion-text-right\">\n            <ion-button class=\"ion-float-right\" fill=\"clear\" (click)=\"delete(p.id)\">\n              <ion-icon style=\"color: red;\" ios=\"ios-trash\" md=\"md-trash\"></ion-icon>\n            </ion-button>\n          </ion-col>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"warning\" (click)=\"openNewProduct()\">\n      <ion-icon ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "9cHF":
/*!*************************************************!*\
  !*** ./src/app/pages/prodotti/prodotti.page.ts ***!
  \*************************************************/
/*! exports provided: ProdottiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottiPage", function() { return ProdottiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_prodotti_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./prodotti.page.html */ "2wBN");
/* harmony import */ var _prodotti_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prodotti.page.scss */ "sEwA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");







let ProdottiPage = class ProdottiPage {
    constructor(navCtrl, request, utilities) {
        this.navCtrl = navCtrl;
        this.request = request;
        this.utilities = utilities;
        this.products = [];
        this.initializeItems();
    }
    aggiungi(id) {
        this.utilities.alertController.create({
            header: "Aggiungi",
            message: "Inserire la quantità da aggiungere",
            inputs: [
                {
                    name: 'quantita',
                    type: "number",
                    placeholder: 'Quantità'
                }
            ],
            buttons: [
                {
                    text: 'Annulla',
                    role: 'cancel',
                },
                {
                    text: 'Ok',
                    handler: data => {
                        data.quantita = data.quantita == "" ? 0 : data.quantita;
                        data.quantita = parseInt(data.quantita);
                        if (data.quantita <= 0) {
                            data.quantita = 0;
                            return;
                        }
                        this.request.put({
                            path: "/products/mine/" + id,
                            data: { quantita: data.quantita },
                            handler: () => {
                                this.utilities.simplyAlert({
                                    operation: () => { this.initializeItems(); },
                                    header: "Operazione effettuata",
                                    message: "Quantità aggiunta."
                                });
                            },
                            error: (error) => {
                                this.utilities.alertError({});
                            }
                        });
                    }
                }
            ]
        }).then(alert => alert.present());
    }
    initializeItems() {
        this.request.get({
            path: "/products/mine",
            handler: (result) => {
                result["_msg"].forEach(element => {
                    element["img"] = element["img"] != null ? 'data:image/jpeg;base64,' + element["img"] : this.utilities.img;
                });
                this.products = result["_msg"];
            },
            error: () => {
                this.utilities.alertError({});
            }
        });
    }
    delete(idProd) {
        this.utilities.confirmAlert({
            header: "Attenzione",
            message: "Vuoi davvero eliminare questo prodotto?",
            handlerYes: () => {
                this.request.delete({
                    path: "/products/mine/" + idProd,
                    handler: (res) => {
                        this.utilities.simplyAlert({
                            operation: () => { this.initializeItems(); },
                            header: "Operazione effettuata",
                            message: "Prodotto eliminato correttamente."
                        });
                    },
                    error: () => {
                        this.utilities.alertError({});
                    }
                });
            }
        });
    }
    openNewProduct() {
        this.navCtrl.navigateForward("/nuovo-prodotto");
    }
    popover(type) {
        let msg = type == 0 ?
            "Il prodotto da te inserito è in stato di attesa, verrà valutato se considerarlo valido. Controlla nei prossimi giorni" :
            "Il prodotto è attualmente online, gli utenti potranno ora acquistarlo usando gli Andron! Controlla se hai già degli ordini!";
        this.utilities.createPopover(msg);
    }
};
ProdottiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"] }
];
ProdottiPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-prodotti',
        template: _raw_loader_prodotti_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_prodotti_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"]])
], ProdottiPage);



/***/ }),

/***/ "lZr3":
/*!***********************************************************!*\
  !*** ./src/app/pages/prodotti/prodotti-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProdottiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdottiPageRoutingModule", function() { return ProdottiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _prodotti_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodotti.page */ "9cHF");




const routes = [
    {
        path: '',
        component: _prodotti_page__WEBPACK_IMPORTED_MODULE_3__["ProdottiPage"]
    }
];
let ProdottiPageRoutingModule = class ProdottiPageRoutingModule {
};
ProdottiPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProdottiPageRoutingModule);



/***/ }),

/***/ "sEwA":
/*!***************************************************!*\
  !*** ./src/app/pages/prodotti/prodotti.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kb3R0aS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-prodotti-prodotti-module-es2015.js.map