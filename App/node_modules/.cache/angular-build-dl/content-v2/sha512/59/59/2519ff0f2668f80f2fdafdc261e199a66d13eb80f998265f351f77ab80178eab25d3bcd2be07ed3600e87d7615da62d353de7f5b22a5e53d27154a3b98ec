(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"], {
    /***/
    "02SC":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: EditProfilePageRoutingModule */

    /***/
    function SC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
        return EditProfilePageRoutingModule;
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


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-profile.page */
      "kmVb");

      var routes = [{
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
      }];

      var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
        _classCallCheck(this, EditProfilePageRoutingModule);
      };

      EditProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditProfilePageRoutingModule);
      /***/
    },

    /***/
    "S5E+":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S5E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Modifica Profilo</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"myContent\">\n  <ion-list>\n    <ion-title class=\"ion-text-center\"></ion-title>\n        \n      <ion-img src=\"{{ imgSrc }}\"></ion-img>\n      <ion-button *ngIf=\"this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"chooseImage()\">Cambia foto</ion-button>\n      \n      <ion-button *ngIf=\"!this.plugin.mobile()\" id=\"myButtonYellow\" expand=\"full\" (click)=\"f.click()\">Cambia foto</ion-button>\n      <input  class=\"ion-hide\" #f type=\"file\" (change)=\"chooseImage($event)\" id=\"file-input\" accept=\"image/png, image/jpeg\">\n\n\n        <form [formGroup]=\"editProfileUserForm\" (ngSubmit)=\"submit()\" *ngIf=\"this.app.utenza=='utente'\">\n                <ion-item> <!--!telefono-->\n                  <ion-label position=\"floating\">Telefono</ion-label>\n                  <ion-input formControlName=\"telefono\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.telefono\">\n                  <ng-container *ngIf=\"telefono.hasError(error.type) && (telefono.dirty || telefono.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n\n                <ion-item> <!--!email-->\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input formControlName=\"email\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.email\">\n                  <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n\n                <ion-item> <!--!stato-->\n                  <ion-label position=\"floating\">Stato</ion-label>\n                  <ion-input formControlName=\"stato\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.stato\">\n                  <ng-container *ngIf=\"stato.hasError(error.type) && (stato.dirty || stato.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n\n                <ion-item> <!--!regione-->\n                  <ion-label position=\"floating\">Regione</ion-label>\n                  <ion-input formControlName=\"regione\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.regione\">\n                  <ng-container *ngIf=\"regione.hasError(error.type) && (regione.dirty || regione.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n\n\n                <ion-item> <!--!Citta-->\n                  <ion-label position=\"floating\">Città</ion-label>\n                  <ion-input formControlName=\"citta\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.citta\">\n                  <ng-container *ngIf=\"citta.hasError(error.type) && (citta.dirty || citta.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n\n\n                <ion-item> <!--!Via-->\n                  <ion-label position=\"floating\">Via</ion-label>\n                  <ion-input formControlName=\"via\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.via\">\n                  <ng-container *ngIf=\"via.hasError(error.type) && (via.dirty || via.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n\n                <ion-item> <!--!cap-->\n                  <ion-label position=\"floating\">CAP</ion-label>\n                  <ion-input formControlName=\"cap\" autocapitalize inputmode=\"text\"></ion-input>\n                </ion-item>\n                <div *ngFor=\"let error of errorMessages.cap\">\n                  <ng-container *ngIf=\"cap.hasError(error.type) && (cap.dirty || cap.touched)\">\n                    <small class=\"error-message\">{{error.message}}</small>\n                  </ng-container>\n                </div>\n                <p class=\"error-message\">{{this.errore}}</p>\n\n              <ion-button type=\"submit\" expand=\"block\">\n                Modifica\n              </ion-button>\n          </form>\n\n  </ion-list>\n  <p>{{this.errorep}}</p>\n    <ion-button id=\"myButtonYellow\" expand=\"full\" (click)=\"cambiaPass()\">Cambia Password</ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "k578":
    /*!***********************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
      \***********************************************************/

    /*! exports provided: EditProfilePageModule */

    /***/
    function k578(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
        return EditProfilePageModule;
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


      var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-profile-routing.module */
      "02SC");
      /* harmony import */


      var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-profile.page */
      "kmVb");

      var EditProfilePageModule = function EditProfilePageModule() {
        _classCallCheck(this, EditProfilePageModule);
      };

      EditProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"]],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
      })], EditProfilePageModule);
      /***/
    },

    /***/
    "kmVb":
    /*!*********************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
      \*********************************************************/

    /*! exports provided: EditProfilePage */

    /***/
    function kmVb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
        return EditProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "S5E+");
      /* harmony import */


      var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit-profile.page.scss */
      "tGd5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "c7TG");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/app.component */
      "Sy1n");
      /* harmony import */


      var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/request.service */
      "CzMn");
      /* harmony import */


      var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/utilities.service */
      "tNc6");
      /* harmony import */


      var src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/plugin.service */
      "ESzt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var EditProfilePage = /*#__PURE__*/function () {
        function EditProfilePage(plugin, storage, alertController, app, request, utilities, formBuilder) {
          var _this = this;

          _classCallCheck(this, EditProfilePage);

          this.plugin = plugin;
          this.storage = storage;
          this.alertController = alertController;
          this.app = app;
          this.request = request;
          this.utilities = utilities;
          this.formBuilder = formBuilder;
          this.errore = "";
          this.errorep = ""; //#endregion 

          this.varLength = {
            email: {
              min: 5,
              max: 30
            },
            stato: {
              min: 5,
              max: 20
            },
            regione: {
              min: 5,
              max: 20
            },
            citta: {
              min: 5,
              max: 30
            },
            via: {
              min: 5,
              max: 100
            }
          };
          this.defaultMessages = {
            required: "Questo campo è obbligatorio",
            spaces: "Non sono ammessi spazi",
            maxlength: function maxlength(max) {
              return "Massimo ".concat(max, " caratteri");
            },
            minlength: function minlength(min) {
              return "Minimo ".concat(min, " caratteri");
            }
          };
          this.errorMessages = {
            telefono: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "pattern",
              message: "Il formato del numero di telefono non è corretto"
            }],
            email: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.email.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.email.min)
            }, {
              type: "email",
              message: "Il formato dell'email non è corretto"
            }],
            stato: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.stato.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.stato.min)
            }],
            regione: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.regione.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.regione.min)
            }],
            citta: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.citta.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.citta.min)
            }],
            via: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "maxlength",
              message: this.defaultMessages.maxlength(this.varLength.via.max)
            }, {
              type: "minlength",
              message: this.defaultMessages.minlength(this.varLength.via.min)
            }],
            cap: [{
              type: "required",
              message: this.defaultMessages.required
            }, {
              type: "pattern",
              message: "Il formato del CAP non è corretto"
            }]
          };
          this.editProfileUserForm = this.formBuilder.group({
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern("[0-9]{10,12}")]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(this.varLength.email.max), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(this.varLength.email.min), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].email]],
            stato: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(this.varLength.stato.max), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(this.varLength.stato.min), this.utilities.validatorNotEmpty]],
            regione: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(this.varLength.regione.max), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(this.varLength.regione.min), this.utilities.validatorNotEmpty]],
            citta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(this.varLength.citta.max), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(this.varLength.citta.min), this.utilities.validatorNotEmpty]],
            via: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(this.varLength.via.max), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(this.varLength.via.min), this.utilities.validatorNotEmpty]],
            cap: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].pattern("[0-9]{5}")]]
          });
          storage.get('anagraficaJson').then(function (val) {
            if (val["foto"] == null) {
              _this.imgSrc = _this.utilities.user;
            } else {
              _this.imgSrc = 'data:image/jpeg;base64,' + val["foto"];
            }

            _this.telefono.setValue(val.tel);

            _this.email.setValue(val.email);

            _this.stato.setValue(val.stato);

            _this.regione.setValue(val.regione);

            _this.citta.setValue(val.citta);

            _this.via.setValue(val.via);

            _this.cap.setValue(val.cap);
          });
        } //#region getter


        _createClass(EditProfilePage, [{
          key: "telefono",
          get: function get() {
            return this.editProfileUserForm.get("telefono");
          }
        }, {
          key: "email",
          get: function get() {
            return this.editProfileUserForm.get("email");
          }
        }, {
          key: "stato",
          get: function get() {
            return this.editProfileUserForm.get("stato");
          }
        }, {
          key: "regione",
          get: function get() {
            return this.editProfileUserForm.get("regione");
          }
        }, {
          key: "citta",
          get: function get() {
            return this.editProfileUserForm.get("citta");
          }
        }, {
          key: "via",
          get: function get() {
            return this.editProfileUserForm.get("via");
          }
        }, {
          key: "cap",
          get: function get() {
            return this.editProfileUserForm.get("cap");
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            Object.values(this.editProfileUserForm.controls).forEach(function (control) {
              control.markAsTouched();
            });

            if (!this.editProfileUserForm.valid) {
              return;
            }

            var data = {
              _telefono: this.editProfileUserForm.value.telefono,
              _mail: this.editProfileUserForm.value.email,
              _stato: this.editProfileUserForm.value.stato,
              _regione: this.editProfileUserForm.value.regione,
              _citta: this.editProfileUserForm.value.citta,
              _via: this.editProfileUserForm.value.via,
              _cap: this.editProfileUserForm.value.cap
            };
            this.request.put({
              path: "/info",
              data: data,
              handler: function handler() {
                _this2.utilities.simplyAlert({
                  operation: function operation() {
                    _this2.request.get({
                      path: "/info",
                      handler: function handler(response) {
                        _this2.storage.set("anagraficaJson", response);
                      },
                      error: function error() {
                        _this2.utilities.alertError({});
                      }
                    });
                  },
                  header: "Operazione effettuata",
                  message: "Le modifiche sono state apportate"
                });
              },
              error: function error() {
                _this2.utilities.alertError({});
              }
            });
          }
        }, {
          key: "cambiaPass",
          value: function cambiaPass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: "Attenzione",
                        message: "Inserire nuova password e la conferma della password. Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri.",
                        inputs: [{
                          name: 'vecchiapassword',
                          type: 'password',
                          placeholder: 'Vecchia password'
                        }, {
                          name: 'password',
                          type: 'password',
                          placeholder: 'Nuova password'
                        }, {
                          name: 'check',
                          type: 'password',
                          placeholder: 'Conferma password'
                        }],
                        buttons: [{
                          text: 'Annulla',
                          role: 'cancel'
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            if (!(data.password && data.check && data.vecchiapassword)) {
                              _this3.errorep = "Compila tutti i campi";
                              return;
                            }

                            var regexPass = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$');

                            if (!regexPass.test(data.password)) {
                              _this3.errorep = "Minimo 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale, massimo 30 caratteri";
                              return;
                            }

                            if (data.password != data.check) {
                              _this3.errorep = "Le password non coincidono";
                              return;
                            }

                            return _this3.request.put({
                              path: "/info/changePassword",
                              data: {
                                "_oldpsw": data.vecchiapassword,
                                "_newpsw": data.password
                              },
                              handler: function handler() {
                                _this3.utilities.simplyAlert({
                                  header: "Operazione effettuata",
                                  message: "Il cambio password è stato effettuato correttamente"
                                });
                              },
                              error: function error(errore) {
                                if (errore.status == 401) {
                                  _this3.errorep = "La vecchia password non è corretta";
                                } else {
                                  _this3.utilities.alertError({});
                                }
                              }
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "chooseImage",
          value: function chooseImage() {
            var _this4 = this;

            var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var handler = function handler(imgPath) {
              var img = _this4.imgSrc;
              _this4.imgSrc = 'data:image/jpeg;base64,' + imgPath;
              _this4.foto = imgPath;

              _this4.utilities.confirmAlert({
                header: "Attenzione",
                message: "Vuoi usare l'immagine selezionata come foto per il profilo?",
                handlerYes: function handlerYes() {
                  _this4.request.put({
                    path: "/info/changeProfilePicture",
                    data: {
                      foto: _this4.foto
                    },
                    handler: function handler(response) {
                      _this4.storage.set("anagraficaJson", response);
                    },
                    error: function error() {
                      _this4.utilities.alertError({});
                    }
                  });
                },
                handlerNo: function handlerNo() {
                  _this4.imgSrc = img;
                }
              });
            };

            this.plugin.chooseIm($event, handler);
          }
        }]);

        return EditProfilePage;
      }();

      EditProfilePage.ctorParameters = function () {
        return [{
          type: src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_9__["PluginService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        }, {
          type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"]
        }, {
          type: src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
        }];
      };

      EditProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_plugin_service__WEBPACK_IMPORTED_MODULE_9__["PluginService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_7__["RequestService"], src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_8__["UtilitiesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]])], EditProfilePage);
      /***/
    },

    /***/
    "tGd5":
    /*!***********************************************************!*\
      !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function tGd5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "p {\n  color: red;\n  text-align: center;\n}\n\nion-item {\n  color: #457c8d;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: rgb(0, 255, 115);\n}\n\nion-item:hover {\n  background-color: #404f79;\n}\n\nion-img {\n  height: 25vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFFQSw4QkFBQTtFQUNBLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6ImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1pdGVtIHtcbiAgICBjb2xvcjogIzQ1N2M4ZDs7XG4vLyAgICAtLWJvcmRlci1jb2xvcjogd2hpdGU7IC8vIGRlZmF1bHQgdW5kZXJsaW5lIGNvbG9yXG4gICAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDogcmVkOyAvLyBpbnZhbGlkIHVuZGVybGluZSBjb2xvclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiByZ2IoMCwgMjU1LCAxMTUpOyAvLyB2YWxpZCB1bmRlcmxpbmUgY29sb3Jcbn1cblxuaW9uLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNGY3OTtcbn1cblxuaW9uLWltZ3tcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIFxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es5.js.map