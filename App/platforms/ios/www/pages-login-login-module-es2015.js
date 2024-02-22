(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "c7TG");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#errorText {\n  color: red;\n  text-align: center;\n}\n\nion-item {\n  color: #181313;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: rgb(24, 19, 19);\n}\n\nion-item:hover {\n  background-color: #262847;\n}\n\n#idDiv {\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUVBLDhCQUFBO0VBQ0Esd0NBQUE7QUFBSjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlcnJvclRleHQge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gICAgY29sb3I6IHJnYigyNCwgMTksIDE5KTtcbi8vICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTsgLy8gZGVmYXVsdCB1bmRlcmxpbmUgY29sb3JcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZWQ7IC8vIGludmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IHJnYigyNCwgMTksIDE5KTsgLy8gdmFsaWQgdW5kZXJsaW5lIGNvbG9yXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDM0LCAzNCk7XG59XG5cbmlvbi1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOCwgNDAsIDcxKTtcbn1cblxuI2lkRGl2e1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content id=\"myContent\" class=\"ion-padding ion-text-center\">\n  \n  <div id=\"idDiv\">\n    <ion-title>Login</ion-title>\n    <br><br>\n   \n    <form [formGroup]=\"LoginForm\" (ngSubmit)=\"submit()\">\n      <ion-list>\n      \n        <ion-item> <!--!username-->\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input formControlName=\"username\" autocapitalize inputmode=\"text\"></ion-input>\n        </ion-item>\n\n\n        <ion-item> <!--!password-->\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input formControlName=\"password\" autocapitalize type=\"password\" inputmode=\"text\"></ion-input>\n        </ion-item>\n\n        <ion-button id=\"myButtonYellow\" type=\"submit\">Log in</ion-button>\n        <ion-button id=\"myButtonViolet\" routerLink=\"/register\" routerDirection=\"forward\">Register</ion-button>\n        <p id=\"errorText\">{{this.errore}}</p>\n      </ion-list>\n    </form>\n  \n  </div>\n\n</ion-content>");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/request.service */ "CzMn");
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utilities.service */ "tNc6");








let LoginPage = class LoginPage {
    constructor(authService, formBuilder, request, utilities) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.request = request;
        this.utilities = utilities;
        this.LoginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
    }
    get username() {
        return this.LoginForm.get("username");
    }
    get password() {
        return this.LoginForm.get("password");
    }
    submit() {
        if (this.LoginForm.invalid) {
            this.errore = "Compila i campi adeguatamente.";
            return;
        }
        this.request.post({
            path: "/login",
            data: {
                username: this.LoginForm.value.username,
                password: this.LoginForm.value.password
            },
            handler: (response) => {
                this.authService.login(response["access_token"]);
                console.info("token: " + response["access_token"]);
            },
            error: (error) => {
                if (error.status != 401) {
                    this.utilities.alertError({});
                }
                else {
                    let msg = error.error.info == -1 ? "Il tuo account non è stato ancora attivato!" : "Nome utente o password errati.";
                    this.errore = msg;
                }
            },
            httpHeaders: this.request.createHeader()
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] },
    { type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"],
        src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map