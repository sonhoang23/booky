(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/EIB":
    /*!*************************************************************************!*\
      !*** ./src/app/core/store/customer/setting/customer-setting.actions.ts ***!
      \*************************************************************************/

    /*! exports provided: SETTING_CHANGE_LANGUAGE, SETTING_CHANGE_THEME, actionSettingsChangeLanguage, actionSettingsChangeTheme */

    /***/
    function EIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTING_CHANGE_LANGUAGE", function () {
        return SETTING_CHANGE_LANGUAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTING_CHANGE_THEME", function () {
        return SETTING_CHANGE_THEME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actionSettingsChangeLanguage", function () {
        return actionSettingsChangeLanguage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actionSettingsChangeTheme", function () {
        return actionSettingsChangeTheme;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var SETTING_CHANGE_LANGUAGE = '\'[Settings] Customer Change Language\',';
      var SETTING_CHANGE_THEME = '[Settings] Customer Change Theme';
      var actionSettingsChangeLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SETTING_CHANGE_LANGUAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var actionSettingsChangeTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SETTING_CHANGE_THEME, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\develop\asp.net\personalBlogFile\Final-Hust-Project-HoangSon\client\personalblogfrontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1Eiw":
    /*!**********************************************************!*\
      !*** ./src/app/core/store/seller/login/login.actions.ts ***!
      \**********************************************************/

    /*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_RESET, login, loginSuccess, loginFailed, loginReset */

    /***/
    function Eiw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN", function () {
        return LOGIN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function () {
        return LOGIN_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN_FAILED", function () {
        return LOGIN_FAILED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN_RESET", function () {
        return LOGIN_RESET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "login", function () {
        return login;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginSuccess", function () {
        return loginSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginFailed", function () {
        return loginFailed;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginReset", function () {
        return loginReset;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var LOGIN = '@Authen/Login';
      var LOGIN_SUCCESS = '@Authen/LoginSuccess';
      var LOGIN_FAILED = '@Authen/LoginFailed';
      var LOGIN_RESET = '@Authen/LoginReset';
      var login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loginFailed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loginReset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_RESET);
      /***/
    },

    /***/
    "1Y/V":
    /*!***********************************************!*\
      !*** ./src/app/core/utils/material.module.ts ***!
      \***********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function YV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angular-responsive-carousel */
      "T6vt");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /*material*/
      //other module


      var MaterialModuleAdd = [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__["DragDropModule"], //ngoai
      angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__["IvyCarouselModule"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], MaterialModuleAdd],
        exports: [MaterialModuleAdd]
      })], MaterialModule);
      /***/
    },

    /***/
    "1zjI":
    /*!******************************************************************!*\
      !*** ./src/app/core/utils/URL/customer-url/customer-url-base.ts ***!
      \******************************************************************/

    /*! exports provided: CustomerUrlBase */

    /***/
    function zjI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerUrlBase", function () {
        return CustomerUrlBase;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/utils/URL/URL_String */
      "kbxs");

      var CustomerUrlBase = /*#__PURE__*/function (_src_app_core_utils_U) {
        _inherits(CustomerUrlBase, _src_app_core_utils_U);

        var _super = _createSuper(CustomerUrlBase);

        function CustomerUrlBase() {
          var _this;

          _classCallCheck(this, CustomerUrlBase);

          _this = _super.call(this);
          _this.customerUrl = _this.hostBase + '/customer';
          return _this;
        }

        return CustomerUrlBase;
      }(src_app_core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_2__["URL_String"]);

      CustomerUrlBase.ctorParameters = function () {
        return [];
      };

      CustomerUrlBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CustomerUrlBase);
      /***/
    },

    /***/
    "2o9x":
    /*!*****************************************************************************!*\
      !*** ./src/app/core/services/comon-services/title-service/title.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: TitleService */

    /***/
    function o9x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleService", function () {
        return TitleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../error-handler/app-error-handler.service */
      "Bp2A");

      var TitleService = /*#__PURE__*/function () {
        function TitleService(translateService, title, appErrorHandler) {
          _classCallCheck(this, TitleService);

          this.translateService = translateService;
          this.title = title;
          this.appErrorHandler = appErrorHandler;
        }

        _createClass(TitleService, [{
          key: "setTitle",
          value: function setTitle(snapshot, lazyTranslateService) {
            var _this2 = this;

            var lastChild = snapshot; // console.log('lastChild title');
            // console.log(lastChild);

            while (lastChild.children.length) {
              lastChild = lastChild.children[0];
            }

            var title = lastChild.data.title;
            var translate = lazyTranslateService || this.translateService;

            if (title) {
              translate.get(title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (translatedTitle) {
                return translatedTitle !== title;
              })).subscribe(function (translatedTitle) {
                _this2.title.setTitle("".concat(translatedTitle, " - ").concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName));
              }, function () {
                _this2.appErrorHandler.handleErrorWithNoti();
              });
            } else {
              this.title.setTitle(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].appName);
            }
          }
        }]);

        return TitleService;
      }();

      TitleService.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
        }, {
          type: _error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandler"]
        }];
      };

      TitleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], TitleService);
      /***/
    },

    /***/
    "3nDU":
    /*!*********************************************************************!*\
      !*** ./src/app/core/store/customer/login/customer-login.reducer.ts ***!
      \*********************************************************************/

    /*! exports provided: customerLoginReducer */

    /***/
    function nDU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLoginReducer", function () {
        return customerLoginReducer;
      });
      /* harmony import */


      var _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customer-login.actions */
      "sMhy");

      var initialState = {
        status: 'loading',
        message: '',
        isAuthenticated: false
      };

      function customerLoginReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]:
            return Object.assign(Object.assign({}, state), {
              status: 'loading'
            });

          case _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
            return Object.assign(Object.assign({}, state), {
              status: 'loaded',
              isAuthenticated: true,
              message: action.message
            });

          case _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILED"]:
            return Object.assign(Object.assign({}, state), {
              status: 'loaded',
              message: action.message
            });

          case _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_RESET"]:
            return Object.assign(Object.assign({}, state), {
              isAuthenticated: false,
              status: 'loading',
              message: action.message
            });

          case _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_SUCCESS"]:
            return Object.assign(Object.assign({}, state), {
              message: action.message,
              isAuthenticated: false,
              status: 'loaded'
            });

          case _customer_login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_FAILED"]:
            return Object.assign(Object.assign({}, state), {
              message: action.message,
              isAuthenticated: true,
              status: 'loaded'
            });

          default:
            return Object.assign({}, state);
        }
      }
      /***/

    },

    /***/
    "5ZKo":
    /*!*************************************************************************!*\
      !*** ./src/app/core/store/customer/setting/customer-setting.reducer.ts ***!
      \*************************************************************************/

    /*! exports provided: initialState, customerSettingReducer */

    /***/
    function ZKo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerSettingReducer", function () {
        return customerSettingReducer;
      });
      /* harmony import */


      var _customer_setting_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customer-setting.actions */
      "/EIB");

      var initialState = {
        language: 'customer-vn',
        theme: 'default'
      };

      var customerSettingReducer = function customerSettingReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _customer_setting_actions__WEBPACK_IMPORTED_MODULE_0__["SETTING_CHANGE_LANGUAGE"]:
            return Object.assign(Object.assign({}, state), action);

          case _customer_setting_actions__WEBPACK_IMPORTED_MODULE_0__["SETTING_CHANGE_THEME"]:
            return Object.assign(Object.assign({}, state), action);

          default:
            return Object.assign({}, state);
        }
      };
      /***/

    },

    /***/
    "5ZM+":
    /*!***************************************************************!*\
      !*** ./src/app/core/utils/URL/admin-url/admin-url-account.ts ***!
      \***************************************************************/

    /*! exports provided: AdminUrlAccount */

    /***/
    function ZM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUrlAccount", function () {
        return AdminUrlAccount;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _admin_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-url-base */
      "xZP7");

      var AdminUrlAccount = /*#__PURE__*/function (_admin_url_base__WEBP) {
        _inherits(AdminUrlAccount, _admin_url_base__WEBP);

        var _super2 = _createSuper(AdminUrlAccount);

        function AdminUrlAccount() {
          var _this3;

          _classCallCheck(this, AdminUrlAccount);

          _this3 = _super2.apply(this, arguments);
          _this3.adminUrlLogin = _this3.adminUrl + '/admin/login';
          return _this3;
        }

        return AdminUrlAccount;
      }(_admin_url_base__WEBPACK_IMPORTED_MODULE_2__["AdminUrlBase"]);

      AdminUrlAccount = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminUrlAccount);
      /***/
    },

    /***/
    "8kNQ":
    /*!*******************************************************************!*\
      !*** ./src/app/core/store/admin/setting/admin-setting.actions.ts ***!
      \*******************************************************************/

    /*! exports provided: SETTING_CHANGE_LANGUAGE, SETTING_CHANGE_THEME, actionSettingsChangeLanguage, actionSettingsChangeTheme */

    /***/
    function kNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTING_CHANGE_LANGUAGE", function () {
        return SETTING_CHANGE_LANGUAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTING_CHANGE_THEME", function () {
        return SETTING_CHANGE_THEME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actionSettingsChangeLanguage", function () {
        return actionSettingsChangeLanguage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actionSettingsChangeTheme", function () {
        return actionSettingsChangeTheme;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var SETTING_CHANGE_LANGUAGE = '\'[Settings] Admin Change Language\',';
      var SETTING_CHANGE_THEME = '[Settings] Admin Change Theme';
      var actionSettingsChangeLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SETTING_CHANGE_LANGUAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var actionSettingsChangeTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SETTING_CHANGE_THEME, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "AEuP":
    /*!********************************************!*\
      !*** ./src/app/core/configs/app.config.ts ***!
      \********************************************/

    /*! exports provided: appConfig */

    /***/
    function AEuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "appConfig", function () {
        return appConfig;
      });

      var appConfig = {
        snackBarDuration: 3000,
        homePageGetProductLimit: 10,
        homePageGetProductStart: 1
      };
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


      var packageJson = __webpack_require__(
      /*! ../../package.json */
      "kiQV");

      var environment = {
        appName: 'Booky',
        envName: 'DEV',
        production: false,
        test: false,
        i18nPrefix: '',
        //apiUrl: 'https://localhost:5005',
        //apiUrl: 'https://localhost:44360',
        apiUrl: 'https://3.133.133.81',
        //apiUrl: 'https://bookyapideploy.azurewebsites.net',
        //////////////////////////////////////////////////////////////////
        //clientUrlForgotPassword: 'http://localhost:4200/password/reset-password',
        //clientUrl:"http://localhost:4200",
        clientUrl: 'https://booky.digital',
        clientUrlForgotPassword: 'https://booky.digital/password/reset-password',
        versions: {
          app: packageJson.version,
          angular: packageJson.dependencies['@angular/core'],
          ngrx: packageJson.dependencies['@ngrx/store'],
          material: packageJson.dependencies['@angular/material'],
          bootstrap: packageJson.dependencies.bootstrap,
          rxjs: packageJson.dependencies.rxjs,
          ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
          fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
          angularCli: packageJson.devDependencies['@angular/cli'],
          typescript: packageJson.devDependencies.typescript,
          cypress: packageJson.devDependencies.cypress,
          eslint: packageJson.devDependencies.eslint
        }
      };
      /***/
    },

    /***/
    "BcRE":
    /*!***************************************************!*\
      !*** ./src/app/features/test/test.component.less ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function BcRE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5sZXNzIn0= */";
      /***/
    },

    /***/
    "Bp2A":
    /*!*****************************************************************!*\
      !*** ./src/app/core/error-handler/app-error-handler.service.ts ***!
      \*****************************************************************/

    /*! exports provided: AppErrorHandler */

    /***/
    function Bp2A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function () {
        return AppErrorHandler;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "JXeA");
      /* harmony import */


      var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../configs/app.config */
      "AEuP");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /** Application-wide error handler that adds a UI notification to the error handling
       * provided by the default Angular ErrorHandler.
       */


      var AppErrorHandler = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(AppErrorHandler, _angular_core__WEBPAC);

        var _super3 = _createSuper(AppErrorHandler);

        function AppErrorHandler(message, appTranslateService) {
          var _this4;

          _classCallCheck(this, AppErrorHandler);

          _this4 = _super3.call(this);
          _this4.message = message;
          _this4.appTranslateService = appTranslateService;
          return _this4;
        }

        _createClass(AppErrorHandler, [{
          key: "handleError",
          value: function handleError(error) {
            _get(_getPrototypeOf(AppErrorHandler.prototype), "handleError", this).call(this, error);

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
          }
        }, {
          key: "handleErrorWithNoti",
          value: function handleErrorWithNoti(error) {
            var displayMessage = 'Có Lỗi Xảy Ra, Vui Lòng Thử Lại';

            if (!_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
              displayMessage += ' ,Xem Console Thêm Chi Tiết';
            }

            this.message.error(this.appTranslateService.instant(displayMessage), {
              nzDuration: _configs_app_config__WEBPACK_IMPORTED_MODULE_4__["appConfig"].snackBarDuration,
              nzPauseOnHover: true,
              nzAnimate: true
            });

            _get(_getPrototypeOf(AppErrorHandler.prototype), "handleError", this).call(this, error);

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
          }
        }]);

        return AppErrorHandler;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]);

      AppErrorHandler.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }];
      };

      AppErrorHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppErrorHandler);
      /***/
    },

    /***/
    "EEDf":
    /*!*****************************************************************!*\
      !*** ./src/app/core/interceptor/seller/app-auth.interceptor.ts ***!
      \*****************************************************************/

    /*! exports provided: AppAuthInterceptor */

    /***/
    function EEDf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAuthInterceptor", function () {
        return AppAuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _utils_URL_customer_url_customer_url_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../utils/URL/customer-url/customer-url-base */
      "1zjI");
      /* harmony import */


      var _utils_URL_seller_url_seller_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../utils/URL/seller-url/seller-url-base */
      "KfMq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/auth/auth.service */
      "RL7/");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _store_customer_login_customer_login_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../store/customer/login/customer-login.actions */
      "sMhy");
      /* harmony import */


      var _utils_URL_admin_url_admin_url_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../utils/URL/admin-url/admin-url-base */
      "xZP7");
      /* harmony import */


      var _services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../services/comon-services/local-storage-service/localstorage.service */
      "px64");

      var AppAuthInterceptor = /*#__PURE__*/function () {
        function AppAuthInterceptor(router, authService, sellerUrlString, adminUrlString, customerUrlString, store, localStore) {
          _classCallCheck(this, AppAuthInterceptor);

          this.router = router;
          this.authService = authService;
          this.sellerUrlString = sellerUrlString;
          this.adminUrlString = adminUrlString;
          this.customerUrlString = customerUrlString;
          this.store = store;
          this.localStore = localStore;
        }

        _createClass(AppAuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this5 = this;

            if (request.url.includes(this.sellerUrlString.sellerUrl)) {
              var isAuthenticated = this.authService.isAuthenticated('seller-token');

              if (isAuthenticated) {
                var tokenValue = this.localStore.getItem('seller-token');
                var cloned = request.clone({
                  headers: request.headers.set('Authorization', 'Bearer ' + tokenValue)
                });
                return next.handle(cloned);
              } else {
                return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])({
                  error: function error(err) {
                    if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                      if (err.status === 401) {
                        return; //mỗi khi gửi token đi, nếu không có token hoặc token hết hạn thì dispatch logout
                        // this.localStorageService.removeItem('customerlogin');
                        // this.store.dispatch(customerLoginResetAction({message: 'logout'}));
                      } else {
                        return;
                      }
                    } else {
                      return;
                    }
                  }
                }));
              }
            }

            if (request.url.includes(this.customerUrlString.customerUrl)) {
              var _isAuthenticated = this.authService.isAuthenticated('customer-token');

              if (_isAuthenticated) {
                //const tokenValue = this.appCookieService.get('customer-token');
                var _tokenValue = this.localStore.getItem('customer-token');

                var _cloned = request.clone({
                  headers: request.headers.set('Authorization', 'Bearer ' + _tokenValue)
                });

                return next.handle(_cloned);
              } else {
                return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])({
                  error: function error(err) {
                    if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                      if (err.status === 401) {
                        //mỗi khi gửi token đi, nếu không có token hoặc token hết hạn thì dispatch logout
                        return; //this.localStorageService.removeItem('customerlogin');

                        _this5.store.dispatch(Object(_store_customer_login_customer_login_actions__WEBPACK_IMPORTED_MODULE_9__["customerLoginResetAction"])({
                          message: 'logout'
                        }));
                      } else {
                        return;
                      }
                    } else {
                      return;
                    }
                  }
                }));
              }
            }

            if (request.url.includes(this.adminUrlString.adminUrl)) {
              var _isAuthenticated2 = this.authService.isAuthenticated('admin-token');

              if (_isAuthenticated2) {
                var _tokenValue2 = this.localStore.getItem('admin-token');

                var _cloned2 = request.clone({
                  headers: request.headers.set('Authorization', 'Bearer ' + _tokenValue2)
                });

                return next.handle(_cloned2);
              } else {
                return next.handle(request);
              }
            } else {
              return next.handle(request);
            }
          }
        }]);

        return AppAuthInterceptor;
      }();

      AppAuthInterceptor.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _utils_URL_seller_url_seller_url_base__WEBPACK_IMPORTED_MODULE_2__["SellerUrlBase"]
        }, {
          type: _utils_URL_admin_url_admin_url_base__WEBPACK_IMPORTED_MODULE_10__["AdminUrlBase"]
        }, {
          type: _utils_URL_customer_url_customer_url_base__WEBPACK_IMPORTED_MODULE_1__["CustomerUrlBase"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
        }, {
          type: _services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"]
        }];
      };

      AppAuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], AppAuthInterceptor);
      /***/
    },

    /***/
    "FRRm":
    /*!**********************************************!*\
      !*** ./src/app/features/test/test.module.ts ***!
      \**********************************************/

    /*! exports provided: TestModule */

    /***/
    function FRRm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestModule", function () {
        return TestModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test-routing.module */
      "rtm9");
      /* harmony import */


      var _test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./test.component */
      "zklV");

      var TestModule = function TestModule() {
        _classCallCheck(this, TestModule);
      };

      TestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestRoutingModule"]]
      })], TestModule);
      /***/
    },

    /***/
    "FftL":
    /*!************************************************************************************!*\
      !*** ./src/app/core/services/comon-services/jwt-token-service/jwttoken.service.ts ***!
      \************************************************************************************/

    /*! exports provided: JWTTokenService */

    /***/
    function FftL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JWTTokenService", function () {
        return JWTTokenService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var JWTTokenService = /*#__PURE__*/function () {
        //jwtToken: string;
        function JWTTokenService() {
          _classCallCheck(this, JWTTokenService);
        } // setToken(token: string) {
        // 	if (token) {
        // 		this.jwtToken = token;
        // 	}
        // }


        _createClass(JWTTokenService, [{
          key: "decodeToken",
          value: function decodeToken(jwtToken) {
            if (jwtToken) {
              this.decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(jwtToken);
              return this.decodedToken;
            } else {
              return null;
            }
          }
        }, {
          key: "getDecodeToken",
          value: function getDecodeToken(jwtToken) {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(jwtToken);
          }
        }, {
          key: "getUser",
          value: function getUser(jwtToken) {
            this.decodeToken(jwtToken);
            return this.decodedToken ? this.decodedToken.displayname : null;
          }
        }, {
          key: "getEmailId",
          value: function getEmailId(jwtToken) {
            this.decodeToken(jwtToken);
            return this.decodedToken ? this.decodedToken.email : null;
          }
        }, {
          key: "getRole",
          value: function getRole(jwtToken) {
            this.decodeToken(jwtToken);
            return this.decodedToken ? this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : null;
          }
        }, {
          key: "getExpiryTime",
          value: function getExpiryTime(jwtToken) {
            this.decodeToken(jwtToken);
            return this.decodedToken ? this.decodedToken.exp : null;
          }
        }, {
          key: "isTokenExpired",
          value: function isTokenExpired(jwtToken) {
            var expiryTime = this.getExpiryTime(jwtToken);

            if (expiryTime) {
              return 1000 * parseInt(expiryTime, 10) - new Date().getTime() < 5000;
            } else {
              return false;
            }
          }
        }]);

        return JWTTokenService;
      }();

      JWTTokenService.ctorParameters = function () {
        return [];
      };

      JWTTokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JWTTokenService);
      /***/
    },

    /***/
    "FsL/":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/test/test.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function FsL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>test works!</p>\n\n";
      /***/
    },

    /***/
    "Hhmg":
    /*!******************************************!*\
      !*** ./src/app/icons-provider.module.ts ***!
      \******************************************/

    /*! exports provided: IconsProviderModule */

    /***/
    function Hhmg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function () {
        return IconsProviderModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "66zS");
      /* harmony import */


      var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ant-design/icons-angular/icons */
      "D4Yc");

      var icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutline"]];

      var IconsProviderModule = function IconsProviderModule() {
        _classCallCheck(this, IconsProviderModule);
      };

      IconsProviderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"]],
        exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"]],
        providers: [{
          provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NZ_ICONS"],
          useValue: icons
        }]
      })], IconsProviderModule);
      /***/
    },

    /***/
    "IS2O":
    /*!*********************************************************************!*\
      !*** ./src/app/core/store/seller/setting/seller-setting.actions.ts ***!
      \*********************************************************************/

    /*! exports provided: SETTING_CHANGE_LANGUAGE, SETTING_CHANGE_THEME, actionSettingsChangeLanguage, actionSettingsChangeTheme */

    /***/
    function IS2O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTING_CHANGE_LANGUAGE", function () {
        return SETTING_CHANGE_LANGUAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SETTING_CHANGE_THEME", function () {
        return SETTING_CHANGE_THEME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actionSettingsChangeLanguage", function () {
        return actionSettingsChangeLanguage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "actionSettingsChangeTheme", function () {
        return actionSettingsChangeTheme;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var SETTING_CHANGE_LANGUAGE = '\'[Settings] Seller Change Language\',';
      var SETTING_CHANGE_THEME = '[Settings] Seller Change Theme';
      var actionSettingsChangeLanguage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SETTING_CHANGE_LANGUAGE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var actionSettingsChangeTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SETTING_CHANGE_THEME, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "KfMq":
    /*!**************************************************************!*\
      !*** ./src/app/core/utils/URL/seller-url/seller-url-base.ts ***!
      \**************************************************************/

    /*! exports provided: SellerUrlBase */

    /***/
    function KfMq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerUrlBase", function () {
        return SellerUrlBase;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/utils/URL/URL_String */
      "kbxs");

      var SellerUrlBase = /*#__PURE__*/function (_src_app_core_utils_U2) {
        _inherits(SellerUrlBase, _src_app_core_utils_U2);

        var _super4 = _createSuper(SellerUrlBase);

        function SellerUrlBase() {
          var _this6;

          _classCallCheck(this, SellerUrlBase);

          _this6 = _super4.call(this);
          _this6.sellerUrl = _this6.hostBase + '/seller';
          _this6.sellerUrlLogin = _this6.sellerUrl + '/seller/login';
          _this6.sellerUrlRegister = _this6.sellerUrl + '/seller/register';
          return _this6;
        }

        return SellerUrlBase;
      }(src_app_core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_2__["URL_String"]);

      SellerUrlBase.ctorParameters = function () {
        return [];
      };

      SellerUrlBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SellerUrlBase);
      /***/
    },

    /***/
    "NGFM":
    /*!**************************************************************************!*\
      !*** ./src/app/core/components/mat-snack-bar/mat-snack-bar.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MatSnackBarComponent */

    /***/
    function NGFM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatSnackBarComponent", function () {
        return MatSnackBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mat_snack_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mat-snack-bar.component.html */
      "Tbdw");
      /* harmony import */


      var _mat_snack_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mat-snack-bar.component.scss */
      "j/Wn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");

      var MatSnackBarComponent = /*#__PURE__*/function () {
        function MatSnackBarComponent(data) {
          _classCallCheck(this, MatSnackBarComponent);

          this.data = data;
        }

        _createClass(MatSnackBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MatSnackBarComponent;
      }();

      MatSnackBarComponent.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"]]
          }]
        }];
      };

      MatSnackBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mat-snack-bar',
        template: _raw_loader_mat_snack_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mat_snack_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MatSnackBarComponent);
      /***/
    },

    /***/
    "RL7/":
    /*!****************************************************!*\
      !*** ./src/app/core/services/auth/auth.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthService */

    /***/
    function RL7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "tl5U");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _store_customer_login_customer_login_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../store/customer/login/customer-login.actions */
      "sMhy");
      /* harmony import */


      var _store_seller_login_login_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../store/seller/login/login.actions */
      "1Eiw");
      /* harmony import */


      var _comon_services_cookie_service_app_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../comon-services/cookie-service/app-cookie.service */
      "kH6Y");
      /* harmony import */


      var _comon_services_jwt_token_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../comon-services/jwt-token-service/jwttoken.service */
      "FftL");
      /* harmony import */


      var _comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../comon-services/local-storage-service/localstorage.service */
      "px64");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(jwtHelper, appCookieService, jwtTokenService, store, localStore) {
          _classCallCheck(this, AuthService);

          this.jwtHelper = jwtHelper;
          this.appCookieService = appCookieService;
          this.jwtTokenService = jwtTokenService;
          this.store = store;
          this.localStore = localStore;
        }
        /**
         * isAuthenticated
        :boolean    */


        _createClass(AuthService, [{
          key: "isAuthenticated",
          value: function isAuthenticated(tokenName) {
            var tokenValue = this.localStore.getItem(tokenName); //exsit tokenValue

            if (tokenValue) {
              //if token is not exprired
              if (!this.jwtHelper.isTokenExpired(tokenValue)) {
                return true;
              } else {
                switch (tokenName) {
                  case 'seller-token':
                    {
                      this.store.dispatch(Object(_store_seller_login_login_actions__WEBPACK_IMPORTED_MODULE_5__["loginReset"])()); //this.store.dispatch(login({userLogin: null}));
                    }
                }

                this.localStore.removeItem(tokenName);
                return false;
              }
            } else {
              return false;
            }
          }
        }, {
          key: "getRoleByToken",
          value: function getRoleByToken(tokenName) {
            switch (tokenName) {
              case 'seller-token':
                {
                  var tokenValue = this.appCookieService.get(tokenName);

                  if (this.jwtTokenService.getRole(tokenValue) === 'seller') {
                    return true;
                  } else {
                    return false;
                  }
                }

              case 'customer-token':
                {
                  var _tokenValue3 = this.appCookieService.get(tokenName);

                  if (this.jwtTokenService.getRole(_tokenValue3) === 'customer') {
                    return true;
                  } else {
                    return false;
                  }
                }

              case 'admin-token':
                {
                  var _tokenValue4 = this.appCookieService.get(tokenName);

                  if (this.jwtTokenService.getRole(_tokenValue4) === 'admin') {
                    return true;
                  } else {
                    return false;
                  }
                }

              default:
                return false;
            }
          }
        }, {
          key: "logout",
          value: function logout(tokenName, router) {
            switch (tokenName) {
              case 'customer':
                this.store.dispatch(Object(_store_customer_login_customer_login_actions__WEBPACK_IMPORTED_MODULE_4__["customerLoginResetAction"])({
                  message: 'logout'
                }));
                this.localStore.removeItem('customer-token');

                if (router) {
                  router.navigate(['/login'], {
                    queryParams: {
                      returnUrl: router.routerState.snapshot.url
                    }
                  });
                }

                break;

              case 'seller':
              case 'admin':
              default:
            }
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
        }, {
          type: _comon_services_cookie_service_app_cookie_service__WEBPACK_IMPORTED_MODULE_6__["AppCookieService"]
        }, {
          type: _comon_services_jwt_token_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_7__["JWTTokenService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: _comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["LocalStorageService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthService);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.isDarkTheme = false;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "Tbdw":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/components/mat-snack-bar/mat-snack-bar.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tbdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"font-size: 1.4rem;\">\n  {{ data }}\n</div>\n\n";
      /***/
    },

    /***/
    "Vyv5":
    /*!*************************************************************************!*\
      !*** ./src/app/core/store/app/init-state-from-local-storage.reducer.ts ***!
      \*************************************************************************/

    /*! exports provided: initStateFromLocalStorage, clearState */

    /***/
    function Vyv5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initStateFromLocalStorage", function () {
        return initStateFromLocalStorage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clearState", function () {
        return clearState;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var src_app_core_services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/comon-services/local-storage-service/localstorage.service */
      "px64");

      function initStateFromLocalStorage(reducer) {
        // console.log('reducer truoc: ' + reducer);
        // console.log('count truoc: ' + count);
        return function (state, action) {
          // console.log('lan: ' + count);
          // count++;
          // console.log('initStateFromLocalStorage');
          // console.log('state');
          // console.log(state);
          // console.log('action');
          // console.log(action);
          var newState = reducer(state, action); // console.log('newState');
          // console.log(newState);
          // console.log('INIT.toString()');
          // console.log(INIT.toString());
          // console.log('UPDATE.toString()');
          // console.log(UPDATE.toString());

          if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()].includes(action.type)) {
            //console.log('trong if ******************************');
            return Object.assign(Object.assign({}, newState), src_app_core_services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].loadInitialState());
          } //console.log('Ngoai if ******************************');


          return newState;
        };
      }

      function clearState(reducer) {
        return function (state, action) {
          return reducer(state, action);
        };
      } // export function initStateFromCookie(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
      // 	return function (state, action) {
      // 		const newState = reducer(state, action);
      // 		if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
      // 			return {...newState, ...AppCookieService.loadInitialState()};
      // 		}
      // 		return newState;
      // 	};
      // }

      /*
      ///thieu customer setting
      init-state-from-local-storage.reducer.ts:9 count truoc: 1
      init-state-from-local-storage.reducer.ts:11 lan: 1
      init-state-from-local-storage.reducer.ts:13 initStateFromLocalStorage
      init-state-from-local-storage.reducer.ts:14 state
      init-state-from-local-storage.reducer.ts:15 undefined
      init-state-from-local-storage.reducer.ts:16 action
      init-state-from-local-storage.reducer.ts:17 {type: "@ngrx/store/init"}
      init-state-from-local-storage.reducer.ts:19 newState
      init-state-from-local-storage.reducer.ts:20 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}}adminsettings: {language: "admin-vn", theme: "default"}sellerLogin: {user: null, status: 2, message: "", isAuthenticated: false}sellersettings: {language: "seller-vn", theme: "default"}__proto__: Object
      init-state-from-local-storage.reducer.ts:22 INIT.toString()
      init-state-from-local-storage.reducer.ts:23 @ngrx/store/init
      init-state-from-local-storage.reducer.ts:25 UPDATE.toString()
      init-state-from-local-storage.reducer.ts:26 @ngrx/store/update-reducers
      init-state-from-local-storage.reducer.ts:29 trong if ******************************
      init-state-from-local-storage.reducer.ts:11 lan: 2
      init-state-from-local-storage.reducer.ts:13 initStateFromLocalStorage
      init-state-from-local-storage.reducer.ts:14 state
      init-state-from-local-storage.reducer.ts:15 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}adminsettings: {language: "admin-vn", theme: "default"}customerlogin: {customer: {…}, status: 0, message: "notification.login.common.sucessfully", isAuthenticated: true}sellerLogin: {user: null, status: 2, message: "", isAuthenticated: false}sellersettings: {language: "seller-vn", theme: "default"}__proto__: Object
      init-state-from-local-storage.reducer.ts:16 action
      init-state-from-local-storage.reducer.ts:17 {type: "@ngrx/effects/init"}
      init-state-from-local-storage.reducer.ts:19 newState
      init-state-from-local-storage.reducer.ts:20 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}}
      init-state-from-local-storage.reducer.ts:22 INIT.toString()
      init-state-from-local-storage.reducer.ts:23 @ngrx/store/init
      init-state-from-local-storage.reducer.ts:25 UPDATE.toString()
      init-state-from-local-storage.reducer.ts:26 @ngrx/store/update-reducers
      init-state-from-local-storage.reducer.ts:33 Ngoai if ******************************
      
      init-state-from-local-storage.reducer.ts:9 count truoc: 3
      init-state-from-local-storage.reducer.ts:11 lan: 3
      init-state-from-local-storage.reducer.ts:13 initStateFromLocalStorage
      init-state-from-local-storage.reducer.ts:14 state
      init-state-from-local-storage.reducer.ts:15 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}}
      init-state-from-local-storage.reducer.ts:16 action
      init-state-from-local-storage.reducer.ts:17 {type: "@ngrx/store/update-reducers", features: Array(1)}
      init-state-from-local-storage.reducer.ts:19 newState
      init-state-from-local-storage.reducer.ts:20 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}
      init-state-from-local-storage.reducer.ts:22 INIT.toString()
      init-state-from-local-storage.reducer.ts:23 @ngrx/store/init
      init-state-from-local-storage.reducer.ts:25 UPDATE.toString()
      init-state-from-local-storage.reducer.ts:26 @ngrx/store/update-reducers
      init-state-from-local-storage.reducer.ts:29 trong if ******************************
      init-state-from-local-storage.reducer.ts:11 lan: 4
      init-state-from-local-storage.reducer.ts:13 initStateFromLocalStorage
      init-state-from-local-storage.reducer.ts:14 state
      init-state-from-local-storage.reducer.ts:15 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}
      init-state-from-local-storage.reducer.ts:16 action
      init-state-from-local-storage.reducer.ts:17 {type: "@ngrx/store-devtools/recompute"}
      init-state-from-local-storage.reducer.ts:19 newState
      init-state-from-local-storage.reducer.ts:20 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}
      init-state-from-local-storage.reducer.ts:22 INIT.toString()
      init-state-from-local-storage.reducer.ts:23 @ngrx/store/init
      init-state-from-local-storage.reducer.ts:25 UPDATE.toString()
      init-state-from-local-storage.reducer.ts:26 @ngrx/store/update-reducers
      init-state-from-local-storage.reducer.ts:33 Ngoai if ******************************
      init-state-from-local-storage.reducer.ts:11 lan: 5
      init-state-from-local-storage.reducer.ts:13 initStateFromLocalStorage
      init-state-from-local-storage.reducer.ts:14 state
      init-state-from-local-storage.reducer.ts:15 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}}
      init-state-from-local-storage.reducer.ts:16 action
      init-state-from-local-storage.reducer.ts:17 {type: "@ngrx/store-devtools/recompute"}
      init-state-from-local-storage.reducer.ts:19 newState
      init-state-from-local-storage.reducer.ts:20 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}
      init-state-from-local-storage.reducer.ts:22 INIT.toString()
      init-state-from-local-storage.reducer.ts:23 @ngrx/store/init
      init-state-from-local-storage.reducer.ts:25 UPDATE.toString()
      init-state-from-local-storage.reducer.ts:26 @ngrx/store/update-reducers
      init-state-from-local-storage.reducer.ts:33 Ngoai if ******************************
      init-state-from-local-storage.reducer.ts:11 lan: 6
      init-state-from-local-storage.reducer.ts:13 initStateFromLocalStorage
      init-state-from-local-storage.reducer.ts:14 state
      init-state-from-local-storage.reducer.ts:15 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}
      init-state-from-local-storage.reducer.ts:16 action
      init-state-from-local-storage.reducer.ts:17 {type: "@ngrx/store-devtools/recompute"}
      init-state-from-local-storage.reducer.ts:19 newState
      init-state-from-local-storage.reducer.ts:20 {sellersettings: {…}, sellerLogin: {…}, adminsettings: {…}, customerlogin: {…}}
      init-state-from-local-storage.reducer.ts:22 INIT.toString()
      init-state-from-local-storage.reducer.ts:23 @ngrx/store/init
      init-state-from-local-storage.reducer.ts:25 UPDATE.toString()
      init-state-from-local-storage.reducer.ts:26 @ngrx/store/update-reducers
      init-state-from-local-storage.reducer.ts:33 Ngoai if ******************************
      
      */

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


      __webpack_exports__["default"] = "<router-outlet></router-outlet> \r\n\r\n";
      /***/
    },

    /***/
    "WJMM":
    /*!******************************************************************!*\
      !*** ./src/app/core/utils/ng-zorro-antd/ng-zorro-antd.module.ts ***!
      \******************************************************************/

    /*! exports provided: NgZorroAntdModule */

    /***/
    function WJMM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgZorroAntdModule", function () {
        return NgZorroAntdModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/affix */
      "v1Dh");
      /* harmony import */


      var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-zorro-antd/alert */
      "5Izy");
      /* harmony import */


      var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/anchor */
      "yTpB");
      /* harmony import */


      var ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/auto-complete */
      "r19J");
      /* harmony import */


      var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-zorro-antd/avatar */
      "anqq");
      /* harmony import */


      var ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-zorro-antd/back-top */
      "IYs4");
      /* harmony import */


      var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-zorro-antd/badge */
      "EcpC");
      /* harmony import */


      var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-zorro-antd/breadcrumb */
      "rJp6");
      /* harmony import */


      var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-zorro-antd/button */
      "GaVp");
      /* harmony import */


      var ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-zorro-antd/calendar */
      "WPSl");
      /* harmony import */


      var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ng-zorro-antd/card */
      "YdS3");
      /* harmony import */


      var ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-zorro-antd/carousel */
      "wQFA");
      /* harmony import */


      var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-zorro-antd/cascader */
      "3ZFI");
      /* harmony import */


      var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-zorro-antd/checkbox */
      "CYS+");
      /* harmony import */


      var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-zorro-antd/collapse */
      "oBm0");
      /* harmony import */


      var ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng-zorro-antd/comment */
      "A7zk");
      /* harmony import */


      var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ng-zorro-antd/core/no-animation */
      "W0Pu");
      /* harmony import */


      var ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ng-zorro-antd/core/trans-button */
      "9Cd2");
      /* harmony import */


      var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/core/wave */
      "Jp/u");
      /* harmony import */


      var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/date-picker */
      "lAiz");
      /* harmony import */


      var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-zorro-antd/descriptions */
      "ce6n");
      /* harmony import */


      var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ng-zorro-antd/divider */
      "SBNi");
      /* harmony import */


      var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ng-zorro-antd/drawer */
      "iC8E");
      /* harmony import */


      var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng-zorro-antd/dropdown */
      "phDe");
      /* harmony import */


      var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng-zorro-antd/empty */
      "mW00");
      /* harmony import */


      var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ng-zorro-antd/form */
      "wf2+");
      /* harmony import */


      var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ng-zorro-antd/grid */
      "tYkK");
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rgb0");
      /* harmony import */


      var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ng-zorro-antd/icon */
      "66zS");
      /* harmony import */


      var ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng-zorro-antd/image */
      "C/7j");
      /* harmony import */


      var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ng-zorro-antd/input */
      "px0D");
      /* harmony import */


      var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ng-zorro-antd/input-number */
      "eCGT");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "nHXS");
      /* harmony import */


      var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ng-zorro-antd/list */
      "zTFG");
      /* harmony import */


      var ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ng-zorro-antd/mention */
      "JK0T");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "/L1H");
      /* harmony import */


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "JXeA");
      /* harmony import */


      var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ng-zorro-antd/modal */
      "NFMk");
      /* harmony import */


      var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ng-zorro-antd/notification */
      "0CZq");
      /* harmony import */


      var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ng-zorro-antd/page-header */
      "qU0y");
      /* harmony import */


      var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ng-zorro-antd/pagination */
      "vZsH");
      /* harmony import */


      var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ng-zorro-antd/popconfirm */
      "SHEi");
      /* harmony import */


      var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ng-zorro-antd/popover */
      "FPpa");
      /* harmony import */


      var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ng-zorro-antd/progress */
      "RVNi");
      /* harmony import */


      var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ng-zorro-antd/radio */
      "kS4m");
      /* harmony import */


      var ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ng-zorro-antd/rate */
      "NDed");
      /* harmony import */


      var ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ng-zorro-antd/result */
      "5A4h");
      /* harmony import */


      var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ng-zorro-antd/select */
      "jTf7");
      /* harmony import */


      var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ng-zorro-antd/skeleton */
      "N2O2");
      /* harmony import */


      var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ng-zorro-antd/slider */
      "ozKM");
      /* harmony import */


      var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ng-zorro-antd/spin */
      "fb/r");
      /* harmony import */


      var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ng-zorro-antd/statistic */
      "OvZZ");
      /* harmony import */


      var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ng-zorro-antd/steps */
      "z+yo");
      /* harmony import */


      var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ng-zorro-antd/switch */
      "DQmg");
      /* harmony import */


      var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ng-zorro-antd/table */
      "haRT");
      /* harmony import */


      var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ng-zorro-antd/tabs */
      "1+nf");
      /* harmony import */


      var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ng-zorro-antd/tag */
      "XFzh");
      /* harmony import */


      var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ng-zorro-antd/time-picker */
      "YRt3");
      /* harmony import */


      var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ng-zorro-antd/timeline */
      "p+Sl");
      /* harmony import */


      var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ng-zorro-antd/tooltip */
      "W4B1");
      /* harmony import */


      var ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ng-zorro-antd/transfer */
      "HhpN");
      /* harmony import */


      var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ng-zorro-antd/tree */
      "SN7N");
      /* harmony import */


      var ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ng-zorro-antd/tree-view */
      "3zcM");
      /* harmony import */


      var ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ng-zorro-antd/tree-select */
      "fwnu");
      /* harmony import */


      var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ng-zorro-antd/typography */
      "VbP7");
      /* harmony import */


      var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ng-zorro-antd/upload */
      "gaRz");
      /* harmony import */


      var ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ng-zorro-antd/resizable */
      "s2Rw");
      /* harmony import */


      var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ng-zorro-antd/pipes */
      "S/WK");

      var NgZorroAntdModule = function NgZorroAntdModule() {
        _classCallCheck(this, NgZorroAntdModule);
      };

      NgZorroAntdModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixModule"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_3__["NzAlertModule"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_4__["NzAnchorModule"], ng_zorro_antd_auto_complete__WEBPACK_IMPORTED_MODULE_5__["NzAutocompleteModule"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_6__["NzAvatarModule"], ng_zorro_antd_back_top__WEBPACK_IMPORTED_MODULE_7__["NzBackTopModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["NzBreadCrumbModule"], ng_zorro_antd_calendar__WEBPACK_IMPORTED_MODULE_11__["NzCalendarModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_12__["NzCardModule"], ng_zorro_antd_carousel__WEBPACK_IMPORTED_MODULE_13__["NzCarouselModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_14__["NzCascaderModule"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_15__["NzCheckboxModule"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__["NzCollapseModule"], ng_zorro_antd_comment__WEBPACK_IMPORTED_MODULE_17__["NzCommentModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_21__["NzDatePickerModule"], ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_22__["NzDescriptionsModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_23__["NzDividerModule"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_24__["NzDrawerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_25__["NzDropDownModule"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_26__["NzEmptyModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_27__["NzFormModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__["NzGridModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_29__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_30__["NzIconModule"], ng_zorro_antd_image__WEBPACK_IMPORTED_MODULE_31__["NzImageModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__["NzInputModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_33__["NzInputNumberModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_34__["NzLayoutModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_35__["NzListModule"], ng_zorro_antd_mention__WEBPACK_IMPORTED_MODULE_36__["NzMentionModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_37__["NzMenuModule"], ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_38__["NzMessageModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_39__["NzModalModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_18__["NzNoAnimationModule"], ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_40__["NzNotificationModule"], ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_41__["NzPageHeaderModule"], ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_42__["NzPaginationModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_43__["NzPopconfirmModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_44__["NzPopoverModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_45__["NzProgressModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_46__["NzRadioModule"], ng_zorro_antd_rate__WEBPACK_IMPORTED_MODULE_47__["NzRateModule"], ng_zorro_antd_result__WEBPACK_IMPORTED_MODULE_48__["NzResultModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_49__["NzSelectModule"], ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_50__["NzSkeletonModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_51__["NzSliderModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_52__["NzSpinModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_53__["NzStatisticModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_54__["NzStepsModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_55__["NzSwitchModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_56__["NzTableModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_57__["NzTabsModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_58__["NzTagModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_59__["NzTimePickerModule"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_60__["NzTimelineModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_61__["NzToolTipModule"], ng_zorro_antd_core_trans_button__WEBPACK_IMPORTED_MODULE_19__["NzTransButtonModule"], ng_zorro_antd_transfer__WEBPACK_IMPORTED_MODULE_62__["NzTransferModule"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_63__["NzTreeModule"], ng_zorro_antd_tree_view__WEBPACK_IMPORTED_MODULE_64__["NzTreeViewModule"], ng_zorro_antd_tree_select__WEBPACK_IMPORTED_MODULE_65__["NzTreeSelectModule"], ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_66__["NzTypographyModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_67__["NzUploadModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__["NzWaveModule"], ng_zorro_antd_resizable__WEBPACK_IMPORTED_MODULE_68__["NzResizableModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_69__["NzPipesModule"]]
      })], NgZorroAntdModule);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: httpLoaderFactory, tokenGetter, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function () {
        return httpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tokenGetter", function () {
        return tokenGetter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _core_services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/services/comon-services/local-storage-service/localstorage.service */
      "px64");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "k5Gf");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "yQ3t");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/effects */
      "7bNT");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./core/utils/URL/URL_String */
      "kbxs");
      /* harmony import */


      var _core_interceptor_seller_app_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./core/interceptor/seller/app-auth.interceptor */
      "EEDf");
      /* harmony import */


      var _core_services_auth_admin_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./core/services/auth/admin/account.service */
      "dDsO");
      /* harmony import */


      var _core_components_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./core/components/mat-snack-bar/mat-snack-bar.component */
      "NGFM");
      /* harmony import */


      var _core_utils_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./core/utils/material.module */
      "1Y/V");
      /* harmony import */


      var _core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./core/utils/ng-zorro-antd/ng-zorro-antd.module */
      "WJMM");
      /* harmony import */


      var _icons_provider_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./icons-provider.module */
      "Hhmg");
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "nHXS");
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "/L1H");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @auth0/angular-jwt */
      "tl5U");
      /* harmony import */


      var _core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./core/error-handler/app-error-handler.service */
      "Bp2A");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _core_services_comon_services_jwt_token_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./core/services/comon-services/jwt-token-service/jwttoken.service */
      "FftL");
      /* harmony import */


      var _core_store_app_core_state__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./core/store/app/core.state */
      "l9FX");
      /* harmony import */


      var _core_services_comon_services_title_service_title_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./core/services/comon-services/title-service/title.service */
      "2o9x");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/common/locales/en */
      "tAZD");
      /* harmony import */


      var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_30__);
      /* harmony import */


      var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ng-zorro-antd/i18n */
      "Rgb0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _features_test_test_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./features/test/test.module */
      "FRRm");
      /*CORE SYSTEM */
      //
      //NGRX

      /*CORE APP */

      /*CORE GUI MODULE */

      /*NG-ANT*/
      //INIT
      //import {AppInitializerProvider} from '../app/features/customer/app-initializer.service';
      //Env
      //Component
      //NOT IMPORT


      Object(_angular_common__WEBPACK_IMPORTED_MODULE_32__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_30___default.a);

      var httpLoaderFactory = function httpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
      }; //


      var tokenGetter = function tokenGetter() {
        return localStorage.getItem('token');
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ctorParameters = function () {
        return [];
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _core_components_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarComponent"]],
        imports: [// angular
        //CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], // app
        //TitleService,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _icons_provider_module__WEBPACK_IMPORTED_MODULE_19__["IconsProviderModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__["NzLayoutModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_21__["NzMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_utils_material_module__WEBPACK_IMPORTED_MODULE_17__["MaterialModule"], _core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_18__["NgZorroAntdModule"], //RouterModule,
        //	CoreModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: httpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
          }
        }), //StoreModule.forRoot({}, {}),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([]), _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_core_store_app_core_state__WEBPACK_IMPORTED_MODULE_28__["reducers"], {
          metaReducers: _core_store_app_core_state__WEBPACK_IMPORTED_MODULE_28__["metaReducers"]
        }), //StoreModule.forRoot(customerReducers,{customerMetaReducers}),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
          maxAge: 25,
          logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].production
        }), //RouterModule.forRoot({}),
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_24__["JwtModule"].forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ['localhost:5005'],
            disallowedRoutes: []
          }
        }), ng2_charts__WEBPACK_IMPORTED_MODULE_26__["ChartsModule"], _features_test_test_module__WEBPACK_IMPORTED_MODULE_33__["TestModule"]],
        //schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ],
        providers: [{
          provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_31__["NZ_I18N"],
          useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_31__["en_US"]
        }, _core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_25__["AppErrorHandler"], _core_services_comon_services_title_service_title_service__WEBPACK_IMPORTED_MODULE_29__["TitleService"], _core_services_comon_services_jwt_token_service_jwttoken_service__WEBPACK_IMPORTED_MODULE_27__["JWTTokenService"], _core_services_auth_admin_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"], _core_services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_13__["URL_String"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptor_seller_app_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AppAuthInterceptor"],
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "cKsM":
    /*!***********************************************************!*\
      !*** ./src/app/core/models/common/status/status.model.ts ***!
      \***********************************************************/

    /*! exports provided: Status */

    /***/
    function cKsM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Status", function () {
        return Status;
      });

      var Status;

      (function (Status) {
        Status[Status["idle"] = 0] = "idle";
        Status[Status["loading"] = 1] = "loading";
        Status[Status["error"] = 2] = "error";
      })(Status || (Status = {}));
      /***/

    },

    /***/
    "d3kp":
    /*!**********************************************************!*\
      !*** ./src/app/core/store/seller/login/login.reducer.ts ***!
      \**********************************************************/

    /*! exports provided: loginReducer */

    /***/
    function d3kp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginReducer", function () {
        return loginReducer;
      });
      /* harmony import */


      var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.actions */
      "1Eiw");
      /* harmony import */


      var src_app_core_models_common_status_status_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/models/common/status/status.model */
      "cKsM");

      var initialState = {
        user: null,
        status: src_app_core_models_common_status_status_model__WEBPACK_IMPORTED_MODULE_1__["Status"].idle,
        message: '',
        isAuthenticated: false
      };

      function loginReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]:
            return Object.assign(Object.assign({}, state), {
              status: src_app_core_models_common_status_status_model__WEBPACK_IMPORTED_MODULE_1__["Status"].loading,
              isAuthenticated: false
            });

          case _login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
            return {
              user: action.user,
              message: action.message,
              status: src_app_core_models_common_status_status_model__WEBPACK_IMPORTED_MODULE_1__["Status"].idle,
              isAuthenticated: true
            };

          case _login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAILED"]:
            return {
              status: src_app_core_models_common_status_status_model__WEBPACK_IMPORTED_MODULE_1__["Status"].error,
              message: action.message,
              isAuthenticated: false
            };

          case _login_actions__WEBPACK_IMPORTED_MODULE_0__["LOGIN_RESET"]:
            return {
              isAuthenticated: initialState.isAuthenticated,
              status: initialState.status,
              message: initialState.message,
              user: initialState.user
            };

          default:
            return Object.assign(Object.assign({}, state), {
              status: src_app_core_models_common_status_status_model__WEBPACK_IMPORTED_MODULE_1__["Status"].error
            });
        }
      }
      /***/

    },

    /***/
    "dDsO":
    /*!*************************************************************!*\
      !*** ./src/app/core/services/auth/admin/account.service.ts ***!
      \*************************************************************/

    /*! exports provided: AccountService */

    /***/
    function dDsO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_core_services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/comon-services/local-storage-service/localstorage.service */
      "px64");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_core_utils_URL_admin_url_admin_url_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/utils/URL/admin-url/admin-url-account */
      "5ZM+");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(http, adminUrlAccountString, localStorageService) {
          _classCallCheck(this, AccountService);

          this.http = http;
          this.adminUrlAccountString = adminUrlAccountString;
          this.localStorageService = localStorageService;
        }

        _createClass(AccountService, [{
          key: "adminlogin",
          value: function adminlogin(_adminlogin) {
            var _this7 = this;

            return this.http.post(this.adminUrlAccountString.adminUrlLogin, //"https://localhost:5005/api/admin/Admin/login",
            {
              email: _adminlogin.email,
              passWord: _adminlogin.passWord,
              remember: _adminlogin.remember,
              urlReturn: _adminlogin.urlReturn
            }, {
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
              if (result.isSuccessed === true) {
                if (result.isSuccessed && result.resultObj) {
                  if (result.resultObj.tokenValue) {
                    _this7.localStorageService.removeItem('admin-token');

                    _this7.localStorageService.removeItem('admin-infor');

                    _this7.localStorageService.setItem('admin-token', result.resultObj.tokenValue); //this.adminSubject.next(customer);
                    // if (this.jwtTokenService.getExpiryTime(result.resultObj.tokenValue)) {
                    // 	this.appCookieService.set(
                    // 		'admin-token',
                    // 		result.resultObj.tokenValue,
                    // 		parseInt(this.jwtTokenService.getExpiryTime(result.resultObj.tokenValue), 10)
                    // 	);
                    // 	this.appCookieService.set(
                    // 		'admin-infor',
                    // 		JSON.stringify(result.resultObj),
                    // 		parseInt(this.jwtTokenService.getExpiryTime(result.resultObj.tokenValue), 10)
                    // 	);
                    // }


                    return result;
                  } else {
                    return result;
                  }
                } else {
                  return result;
                }
              } else {
                return result;
              }
            }, function (error) {
              console.log(error);
            }));
          }
        }]);

        return AccountService;
      }();

      AccountService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: src_app_core_utils_URL_admin_url_admin_url_account__WEBPACK_IMPORTED_MODULE_5__["AdminUrlAccount"]
        }, {
          type: src_app_core_services_comon_services_local_storage_service_localstorage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]
        }];
      };

      AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], AccountService);
      /***/
    },

    /***/
    "j/Wn":
    /*!****************************************************************************!*\
      !*** ./src/app/core/components/mat-snack-bar/mat-snack-bar.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function jWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*Customer-header*/\n/* Colors for the ripple elements.*/\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-badge-small .mat-badge-content {\n  font-size: 9px;\n}\n.mat-badge-large .mat-badge-content {\n  font-size: 24px;\n}\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h5, .mat-typography h5 {\n  font: 400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-h6, .mat-typography h6 {\n  font: 400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body p, .mat-body-1 p, .mat-typography p {\n  margin: 0 0 12px;\n}\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.05em;\n  margin: 0 0 56px;\n}\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.02em;\n  margin: 0 0 64px;\n}\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.005em;\n  margin: 0 0 64px;\n}\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n.mat-bottom-sheet-container {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 500;\n}\n.mat-card-header .mat-card-title {\n  font-size: 20px;\n}\n.mat-card-subtitle,\n.mat-card-content {\n  font-size: 14px;\n}\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px;\n}\n.mat-chip {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n.mat-chip .mat-chip-remove.mat-icon {\n  font-size: 18px;\n}\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-cell, .mat-footer-cell {\n  font-size: 14px;\n}\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-calendar-body {\n  font-size: 13px;\n}\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400;\n}\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n}\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em;\n}\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125;\n}\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em;\n}\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n.mat-form-field-suffix .mat-icon-button .mat-icon {\n  height: 1.125em;\n  line-height: 1.125;\n}\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.34375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.34374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em;\n}\n.mat-form-field-label {\n  top: 1.34375em;\n}\n.mat-form-field-underline {\n  bottom: 1.34375em;\n}\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.6666666667em;\n  top: calc(100% - 1.7916666667em);\n}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.3333533333%;\n}\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em;\n}\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.5416666667em;\n  top: calc(100% - 1.6666666667em);\n}\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n    transform: translateY(-1.28122em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper .mat-form-field-label {\n    transform: translateY(-1.28121em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n    transform: translateY(-1.2812em) scale(0.75);\n  }\n}\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0;\n}\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-0.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-0.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0;\n}\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper .mat-form-field-label {\n  transform: translateY(-1.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px;\n}\n.mat-grid-tile-header .mat-line,\n.mat-grid-tile-footer .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n.mat-grid-tile-footer .mat-line:nth-child(n+2) {\n  font-size: 12px;\n}\ninput.mat-input-element {\n  margin-top: -0.0625em;\n}\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select-trigger {\n  height: 1.125em;\n}\n.mat-slide-toggle-content {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-step-sub-label-error {\n  font-weight: normal;\n}\n.mat-step-label-error {\n  font-size: 14px;\n}\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-base .mat-list-item {\n  font-size: 16px;\n}\n.mat-list-base .mat-list-item .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base .mat-list-option {\n  font-size: 16px;\n}\n.mat-list-base .mat-list-option .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base .mat-list-option .mat-line:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-list-base[dense] .mat-list-item {\n  font-size: 12px;\n}\n.mat-list-base[dense] .mat-list-item .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense] .mat-list-option {\n  font-size: 12px;\n}\n.mat-list-base[dense] .mat-list-option .mat-line {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n}\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tree-node,\n.mat-nested-tree-node {\n  font-weight: 400;\n  font-size: 14px;\n}\n.mat-ripple {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible;\n}\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0);\n}\n.cdk-high-contrast-active .mat-ripple-element {\n  display: none;\n}\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container:empty {\n  display: none;\n}\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 1;\n}\n.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0.6;\n}\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0;\n}\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n@-webkit-keyframes cdk-text-field-autofill-start {\n  /*!*/\n}\n@keyframes cdk-text-field-autofill-start {\n  /*!*/\n}\n@-webkit-keyframes cdk-text-field-autofill-end {\n  /*!*/\n}\n@keyframes cdk-text-field-autofill-end {\n  /*!*/\n}\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation: cdk-text-field-autofill-start 0s 1ms;\n          animation: cdk-text-field-autofill-start 0s 1ms;\n}\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation: cdk-text-field-autofill-end 0s 1ms;\n          animation: cdk-text-field-autofill-end 0s 1ms;\n}\ntextarea.cdk-textarea-autosize {\n  resize: none;\n}\ntextarea.cdk-textarea-autosize-measuring {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\ntextarea.cdk-textarea-autosize-measuring-firefox {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n.mat-focus-indicator {\n  position: relative;\n}\n.mat-mdc-focus-indicator {\n  position: relative;\n}\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-option {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-active {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option.mat-option-disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #424242;\n}\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ffc107;\n}\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #f44336;\n}\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-pseudo-checkbox::after {\n  color: #fafafa;\n}\n.mat-pseudo-checkbox-disabled {\n  color: #b0b0b0;\n}\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #424242;\n}\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ffc107;\n}\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f44336;\n}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0;\n}\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-theme-loaded-marker {\n  display: none;\n}\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-autocomplete-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n  background: white;\n}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-content {\n  color: white;\n  background: #424242;\n}\n.cdk-high-contrast-active .mat-badge-content {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.mat-badge-accent .mat-badge-content {\n  background: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #f44336;\n}\n.mat-badge {\n  position: relative;\n}\n.mat-badge-hidden .mat-badge-content {\n  display: none;\n}\n.mat-badge-disabled .mat-badge-content {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.ng-animate-disabled .mat-badge-content,\n.mat-badge-content._mat-animation-noopable {\n  transition: none;\n}\n.mat-badge-content.mat-badge-active {\n  transform: none;\n}\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px;\n}\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px;\n}\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px;\n}\n[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px;\n}\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px;\n}\n[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px;\n}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px;\n}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px;\n}\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px;\n}\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px;\n}\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px;\n}\n[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px;\n}\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px;\n}\n[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px;\n}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px;\n}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px;\n}\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px;\n}\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px;\n}\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px;\n}\n[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px;\n}\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px;\n}\n[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px;\n}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px;\n}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px;\n}\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent;\n}\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n  color: #424242;\n}\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n  color: #ffc107;\n}\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n  color: #f44336;\n}\n.mat-button.mat-primary.mat-button-disabled, .mat-button.mat-accent.mat-button-disabled, .mat-button.mat-warn.mat-button-disabled, .mat-button.mat-button-disabled.mat-button-disabled, .mat-icon-button.mat-primary.mat-button-disabled, .mat-icon-button.mat-accent.mat-button-disabled, .mat-icon-button.mat-warn.mat-button-disabled, .mat-icon-button.mat-button-disabled.mat-button-disabled, .mat-stroked-button.mat-primary.mat-button-disabled, .mat-stroked-button.mat-accent.mat-button-disabled, .mat-stroked-button.mat-warn.mat-button-disabled, .mat-stroked-button.mat-button-disabled.mat-button-disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n  background-color: #424242;\n}\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n  background-color: #ffc107;\n}\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n  background-color: #f44336;\n}\n.mat-button.mat-button-disabled .mat-button-focus-overlay, .mat-icon-button.mat-button-disabled .mat-button-focus-overlay, .mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {\n  background-color: transparent;\n}\n.mat-button .mat-ripple-element, .mat-icon-button .mat-ripple-element, .mat-stroked-button .mat-ripple-element {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.mat-button-focus-overlay {\n  background: black;\n}\n.mat-stroked-button:not(.mat-button-disabled) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n}\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  color: white;\n}\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n  color: white;\n}\n.mat-flat-button.mat-primary.mat-button-disabled, .mat-flat-button.mat-accent.mat-button-disabled, .mat-flat-button.mat-warn.mat-button-disabled, .mat-flat-button.mat-button-disabled.mat-button-disabled, .mat-raised-button.mat-primary.mat-button-disabled, .mat-raised-button.mat-accent.mat-button-disabled, .mat-raised-button.mat-warn.mat-button-disabled, .mat-raised-button.mat-button-disabled.mat-button-disabled, .mat-fab.mat-primary.mat-button-disabled, .mat-fab.mat-accent.mat-button-disabled, .mat-fab.mat-warn.mat-button-disabled, .mat-fab.mat-button-disabled.mat-button-disabled, .mat-mini-fab.mat-primary.mat-button-disabled, .mat-mini-fab.mat-accent.mat-button-disabled, .mat-mini-fab.mat-warn.mat-button-disabled, .mat-mini-fab.mat-button-disabled.mat-button-disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #424242;\n}\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n  background-color: #ffc107;\n}\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n  background-color: #f44336;\n}\n.mat-flat-button.mat-primary.mat-button-disabled, .mat-flat-button.mat-accent.mat-button-disabled, .mat-flat-button.mat-warn.mat-button-disabled, .mat-flat-button.mat-button-disabled.mat-button-disabled, .mat-raised-button.mat-primary.mat-button-disabled, .mat-raised-button.mat-accent.mat-button-disabled, .mat-raised-button.mat-warn.mat-button-disabled, .mat-raised-button.mat-button-disabled.mat-button-disabled, .mat-fab.mat-primary.mat-button-disabled, .mat-fab.mat-accent.mat-button-disabled, .mat-fab.mat-warn.mat-button-disabled, .mat-fab.mat-button-disabled.mat-button-disabled, .mat-mini-fab.mat-primary.mat-button-disabled, .mat-mini-fab.mat-accent.mat-button-disabled, .mat-mini-fab.mat-warn.mat-button-disabled, .mat-mini-fab.mat-button-disabled.mat-button-disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-stroked-button:not([class*=mat-elevation-z]), .mat-flat-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button.mat-button-disabled:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab:not([class*=mat-elevation-z]), .mat-mini-fab:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .mat-mini-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-fab.mat-button-disabled:not([class*=mat-elevation-z]), .mat-mini-fab.mat-button-disabled:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  box-shadow: none;\n}\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n  background-color: black;\n}\n.mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button-toggle-disabled {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee;\n}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard {\n  background: white;\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n  background-color: #bdbdbd;\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {\n  line-height: 48px;\n}\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card.mat-card-flat:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-checkmark {\n  fill: #fafafa;\n}\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important;\n}\n.mat-checkbox-mixedmark {\n  background-color: #fafafa;\n}\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #424242;\n}\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ffc107;\n}\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336;\n}\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0;\n}\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0;\n}\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox .mat-ripple-element {\n  background-color: black;\n}\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,\n.mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {\n  background: #424242;\n}\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,\n.mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {\n  background: #ffc107;\n}\n.mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,\n.mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {\n  background: #f44336;\n}\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip .mat-chip-remove {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover {\n  opacity: 0.54;\n}\n.mat-chip.mat-standard-chip.mat-chip-disabled {\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip::after {\n  background: black;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #424242;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #f44336;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-table {\n  background: white;\n}\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit;\n}\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-body-cell-content,\n.mat-date-range-input-separator {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-disabled .mat-date-range-input-separator {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-in-preview {\n  color: rgba(0, 0, 0, 0.24);\n}\n.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.mat-calendar-body-in-range::before {\n  background: rgba(66, 66, 66, 0.2);\n}\n.mat-calendar-body-comparison-identical,\n.mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-calendar-body-comparison-bridge-start::before,\n[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(66, 66, 66, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-comparison-bridge-end::before,\n[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(66, 66, 66, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n.mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n.mat-calendar-body-selected {\n  background-color: #424242;\n  color: white;\n}\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(66, 66, 66, 0.4);\n}\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(66, 66, 66, 0.3);\n}\n.mat-datepicker-content {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-range::before {\n  background: rgba(255, 193, 7, 0.2);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start::before,\n.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(255, 193, 7, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end::before,\n.mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(255, 193, 7, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(255, 193, 7, 0.4);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(255, 193, 7, 0.3);\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-range::before {\n  background: rgba(244, 67, 54, 0.2);\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start::before,\n.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end::before,\n.mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(244, 67, 54, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n  background-color: #f44336;\n  color: white;\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(244, 67, 54, 0.4);\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(244, 67, 54, 0.3);\n}\n.mat-datepicker-content-touch {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-toggle-active {\n  color: #424242;\n}\n.mat-datepicker-toggle-active.mat-accent {\n  color: #ffc107;\n}\n.mat-datepicker-toggle-active.mat-warn {\n  color: #f44336;\n}\n.mat-date-range-input-inner[disabled] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover {\n    background: white;\n  }\n}\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-expansion-panel-header[aria-disabled=true] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {\n  color: inherit;\n}\n.mat-expansion-panel-header {\n  height: 48px;\n}\n.mat-expansion-panel-header.mat-expanded {\n  height: 64px;\n}\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #424242;\n}\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n  color: #ffc107;\n}\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n  color: #f44336;\n}\n.mat-focused .mat-form-field-required-marker {\n  color: #ffc107;\n}\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #424242;\n}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n  background-color: #ffc107;\n}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n  background-color: #f44336;\n}\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {\n  color: #424242;\n}\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {\n  color: #ffc107;\n}\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #f44336;\n}\n.mat-error {\n  color: #f44336;\n}\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent;\n}\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #424242;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ffc107;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #f44336;\n}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336;\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06);\n}\n.mat-icon.mat-primary {\n  color: #424242;\n}\n.mat-icon.mat-accent {\n  color: #ffc107;\n}\n.mat-icon.mat-warn {\n  color: #f44336;\n}\n.mat-form-field-type-mat-native-select .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-input-element:disabled,\n.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-input-element {\n  caret-color: #424242;\n}\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field.mat-accent .mat-input-element {\n  caret-color: #ffc107;\n}\n.mat-form-field.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {\n  color: #f44336;\n}\n.mat-list-base .mat-list-item {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base .mat-list-option {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base .mat-subheader {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-list-item-disabled {\n  background-color: #eeeeee;\n}\n.mat-list-option:hover, .mat-list-option:focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item:focus,\n.mat-action-list .mat-list-item:hover,\n.mat-action-list .mat-list-item:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-list-single-selected-option, .mat-list-single-selected-option:hover, .mat-list-single-selected-option:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-menu-panel {\n  background: white;\n}\n.mat-menu-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after,\n.mat-menu-item[disabled] .mat-icon-no-color {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-menu-item .mat-icon-no-color,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-paginator {\n  background: white;\n}\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-paginator-container {\n  min-height: 56px;\n}\n.mat-progress-bar-background {\n  fill: whitesmoke;\n}\n.mat-progress-bar-buffer {\n  background-color: whitesmoke;\n}\n.mat-progress-bar-fill::after {\n  background-color: #424242;\n}\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ffecb3;\n}\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ffecb3;\n}\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ffc107;\n}\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffcdd2;\n}\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2;\n}\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f44336;\n}\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #424242;\n}\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ffc107;\n}\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f44336;\n}\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #424242;\n}\n.mat-radio-button.mat-primary .mat-radio-inner-circle,\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple, .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {\n  background-color: #424242;\n}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ffc107;\n}\n.mat-radio-button.mat-accent .mat-radio-inner-circle,\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple, .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {\n  background-color: #ffc107;\n}\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f44336;\n}\n.mat-radio-button.mat-warn .mat-radio-inner-circle,\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple, .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {\n  background-color: #f44336;\n}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button .mat-ripple-element {\n  background-color: black;\n}\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-select-panel {\n  background: white;\n}\n.mat-select-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #424242;\n}\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ffc107;\n}\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f44336;\n}\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f44336;\n}\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer.mat-drawer-push {\n  background-color: white;\n}\n.mat-drawer:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side.mat-drawer-end {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ffc107;\n}\n.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(255, 193, 7, 0.54);\n}\n.mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #ffc107;\n}\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #424242;\n}\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(66, 66, 66, 0.54);\n}\n.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {\n  background-color: #424242;\n}\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {\n  background-color: #f44336;\n}\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.54);\n}\n.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {\n  background-color: #f44336;\n}\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: black;\n}\n.mat-slide-toggle-thumb {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #424242;\n}\n.mat-primary .mat-slider-thumb-label-text {\n  color: white;\n}\n.mat-primary .mat-slider-focus-ring {\n  background-color: rgba(66, 66, 66, 0.2);\n}\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ffc107;\n}\n.mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-accent .mat-slider-focus-ring {\n  background-color: rgba(255, 193, 7, 0.2);\n}\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f44336;\n}\n.mat-warn .mat-slider-thumb-label-text {\n  color: white;\n}\n.mat-warn .mat-slider-focus-ring {\n  background-color: rgba(244, 67, 54, 0.2);\n}\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none;\n  }\n}\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-step-header .mat-step-icon {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white;\n}\n.mat-step-header .mat-step-icon-selected,\n.mat-step-header .mat-step-icon-state-done,\n.mat-step-header .mat-step-icon-state-edit {\n  background-color: #424242;\n  color: white;\n}\n.mat-step-header.mat-accent .mat-step-icon {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header.mat-accent .mat-step-icon-selected,\n.mat-step-header.mat-accent .mat-step-icon-state-done,\n.mat-step-header.mat-accent .mat-step-icon-state-edit {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header.mat-warn .mat-step-icon {\n  color: white;\n}\n.mat-step-header.mat-warn .mat-step-icon-selected,\n.mat-step-header.mat-warn .mat-step-icon-state-done,\n.mat-step-header.mat-warn .mat-step-icon-state-edit {\n  background-color: #f44336;\n  color: white;\n}\n.mat-step-header .mat-step-icon-state-error {\n  background-color: transparent;\n  color: #f44336;\n}\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header .mat-step-label.mat-step-label-error {\n  color: #f44336;\n}\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white;\n}\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header::before,\n.mat-horizontal-stepper-header::after,\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header {\n  height: 72px;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header,\n.mat-vertical-stepper-header {\n  padding: 24px 24px;\n}\n.mat-stepper-vertical-line::before {\n  top: -16px;\n  bottom: -16px;\n}\n.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before {\n  top: 36px;\n}\n.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {\n  top: 36px;\n}\n.mat-sort-header-arrow {\n  color: #757575;\n}\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-group[class*=mat-background-] .mat-tab-header,\n.mat-tab-nav-bar[class*=mat-background-] {\n  border-bottom: none;\n  border-top: none;\n}\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(245, 245, 245, 0.3);\n}\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #424242;\n}\n.mat-tab-group.mat-primary.mat-background-primary > .mat-tab-header .mat-ink-bar, .mat-tab-group.mat-primary.mat-background-primary > .mat-tab-link-container .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary > .mat-tab-header .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary > .mat-tab-link-container .mat-ink-bar {\n  background-color: white;\n}\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 236, 179, 0.3);\n}\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ffc107;\n}\n.mat-tab-group.mat-accent.mat-background-accent > .mat-tab-header .mat-ink-bar, .mat-tab-group.mat-accent.mat-background-accent > .mat-tab-link-container .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent > .mat-tab-header .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent > .mat-tab-link-container .mat-ink-bar {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f44336;\n}\n.mat-tab-group.mat-warn.mat-background-warn > .mat-tab-header .mat-ink-bar, .mat-tab-group.mat-warn.mat-background-warn > .mat-tab-link-container .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn > .mat-tab-header .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn > .mat-tab-link-container .mat-ink-bar {\n  background-color: white;\n}\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(245, 245, 245, 0.3);\n}\n.mat-tab-group.mat-background-primary > .mat-tab-header, .mat-tab-group.mat-background-primary > .mat-tab-link-container, .mat-tab-group.mat-background-primary > .mat-tab-header-pagination, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header, .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header-pagination {\n  background-color: #424242;\n}\n.mat-tab-group.mat-background-primary > .mat-tab-header .mat-tab-label, .mat-tab-group.mat-background-primary > .mat-tab-link-container .mat-tab-link, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-tab-label, .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container .mat-tab-link {\n  color: white;\n}\n.mat-tab-group.mat-background-primary > .mat-tab-header .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary > .mat-tab-link-container .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.mat-tab-group.mat-background-primary > .mat-tab-links .mat-focus-indicator::before,\n.mat-tab-group.mat-background-primary > .mat-tab-header .mat-focus-indicator::before, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.mat-tab-nav-bar.mat-background-primary > .mat-tab-links .mat-focus-indicator::before,\n.mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-focus-indicator::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-primary > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary > .mat-tab-header .mat-ripple-element,\n.mat-tab-group.mat-background-primary > .mat-tab-link-container .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-ripple-element,\n.mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 236, 179, 0.3);\n}\n.mat-tab-group.mat-background-accent > .mat-tab-header, .mat-tab-group.mat-background-accent > .mat-tab-link-container, .mat-tab-group.mat-background-accent > .mat-tab-header-pagination, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header, .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header-pagination {\n  background-color: #ffc107;\n}\n.mat-tab-group.mat-background-accent > .mat-tab-header .mat-tab-label, .mat-tab-group.mat-background-accent > .mat-tab-link-container .mat-tab-link, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-tab-label, .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-group.mat-background-accent > .mat-tab-header .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent > .mat-tab-link-container .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container .mat-tab-link.mat-tab-disabled {\n  color: rgba(0, 0, 0, 0.4);\n}\n.mat-tab-group.mat-background-accent > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.mat-tab-group.mat-background-accent > .mat-tab-links .mat-focus-indicator::before,\n.mat-tab-group.mat-background-accent > .mat-tab-header .mat-focus-indicator::before, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.mat-tab-nav-bar.mat-background-accent > .mat-tab-links .mat-focus-indicator::before,\n.mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-focus-indicator::before {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-group.mat-background-accent > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.4);\n}\n.mat-tab-group.mat-background-accent > .mat-tab-header .mat-ripple-element,\n.mat-tab-group.mat-background-accent > .mat-tab-link-container .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-ripple-element,\n.mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n.mat-tab-group.mat-background-warn > .mat-tab-header, .mat-tab-group.mat-background-warn > .mat-tab-link-container, .mat-tab-group.mat-background-warn > .mat-tab-header-pagination, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header, .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header-pagination {\n  background-color: #f44336;\n}\n.mat-tab-group.mat-background-warn > .mat-tab-header .mat-tab-label, .mat-tab-group.mat-background-warn > .mat-tab-link-container .mat-tab-link, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-tab-label, .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container .mat-tab-link {\n  color: white;\n}\n.mat-tab-group.mat-background-warn > .mat-tab-header .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn > .mat-tab-link-container .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.mat-tab-group.mat-background-warn > .mat-tab-links .mat-focus-indicator::before,\n.mat-tab-group.mat-background-warn > .mat-tab-header .mat-focus-indicator::before, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.mat-tab-nav-bar.mat-background-warn > .mat-tab-links .mat-focus-indicator::before,\n.mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-focus-indicator::before {\n  border-color: white;\n}\n.mat-tab-group.mat-background-warn > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn > .mat-tab-header .mat-ripple-element,\n.mat-tab-group.mat-background-warn > .mat-tab-link-container .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-ripple-element,\n.mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-primary {\n  background: #424242;\n  color: white;\n}\n.mat-toolbar.mat-accent {\n  background: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-warn {\n  background: #f44336;\n  color: white;\n}\n.mat-toolbar .mat-form-field-underline,\n.mat-toolbar .mat-form-field-ripple,\n.mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n.mat-toolbar .mat-form-field-label,\n.mat-toolbar .mat-focused .mat-form-field-label,\n.mat-toolbar .mat-select-value,\n.mat-toolbar .mat-select-arrow,\n.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n.mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n.mat-toolbar-multiple-rows {\n  min-height: 64px;\n}\n.mat-toolbar-row, .mat-toolbar-single-row {\n  height: 64px;\n}\n@media (max-width: 599px) {\n  .mat-toolbar-multiple-rows {\n    min-height: 56px;\n  }\n\n  .mat-toolbar-row, .mat-toolbar-single-row {\n    height: 56px;\n  }\n}\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9);\n}\n.mat-tree {\n  background: white;\n}\n.mat-tree-node,\n.mat-nested-tree-node {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tree-node {\n  min-height: 48px;\n}\n.mat-snack-bar-container {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-simple-snackbar-action {\n  color: #ffc107;\n}\n.darka .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-option {\n  color: white;\n}\n.darka .mat-option:hover:not(.mat-option-disabled), .darka .mat-option:focus:not(.mat-option-disabled) {\n  background: rgba(255, 255, 255, 0.04);\n}\n.darka .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(255, 255, 255, 0.04);\n}\n.darka .mat-option.mat-active {\n  background: rgba(255, 255, 255, 0.04);\n  color: white;\n}\n.darka .mat-option.mat-option-disabled {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #536dfe;\n}\n.darka .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #9c27b0;\n}\n.darka .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff5722;\n}\n.darka .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-pseudo-checkbox {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-pseudo-checkbox::after {\n  color: #303030;\n}\n.darka .mat-pseudo-checkbox-disabled {\n  color: #686868;\n}\n.darka .mat-primary .mat-pseudo-checkbox-checked,\n.darka .mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #536dfe;\n}\n.darka .mat-pseudo-checkbox-checked,\n.darka .mat-pseudo-checkbox-indeterminate,\n.darka .mat-accent .mat-pseudo-checkbox-checked,\n.darka .mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #9c27b0;\n}\n.darka .mat-warn .mat-pseudo-checkbox-checked,\n.darka .mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #ff5722;\n}\n.darka .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.darka .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #686868;\n}\n.darka .mat-app-background, .darka.mat-app-background {\n  background-color: #303030;\n  color: white;\n}\n.darka .mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-theme-loaded-marker {\n  display: none;\n}\n.darka .mat-autocomplete-panel {\n  background: #424242;\n  color: white;\n}\n.darka .mat-autocomplete-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n  background: #424242;\n}\n.darka .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: white;\n}\n.darka .mat-badge-content {\n  color: white;\n  background: #536dfe;\n}\n.cdk-high-contrast-active .darka .mat-badge-content {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.darka .mat-badge-accent .mat-badge-content {\n  background: #9c27b0;\n  color: white;\n}\n.darka .mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #ff5722;\n}\n.darka .mat-badge {\n  position: relative;\n}\n.darka .mat-badge-hidden .mat-badge-content {\n  display: none;\n}\n.darka .mat-badge-disabled .mat-badge-content {\n  background: #6e6e6e;\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.darka .ng-animate-disabled .mat-badge-content,\n.darka .mat-badge-content._mat-animation-noopable {\n  transition: none;\n}\n.darka .mat-badge-content.mat-badge-active {\n  transform: none;\n}\n.darka .mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.darka .mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px;\n}\n.darka .mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px;\n}\n.darka .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px;\n}\n[dir=rtl] .darka .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px;\n}\n.darka .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px;\n}\n[dir=rtl] .darka .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px;\n}\n.darka .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px;\n}\n[dir=rtl] .darka .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px;\n}\n.darka .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px;\n}\n[dir=rtl] .darka .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px;\n}\n.darka .mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.darka .mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px;\n}\n.darka .mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px;\n}\n.darka .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px;\n}\n[dir=rtl] .darka .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px;\n}\n.darka .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px;\n}\n[dir=rtl] .darka .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px;\n}\n.darka .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px;\n}\n[dir=rtl] .darka .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px;\n}\n.darka .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px;\n}\n[dir=rtl] .darka .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px;\n}\n.darka .mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.darka .mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px;\n}\n.darka .mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px;\n}\n.darka .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px;\n}\n[dir=rtl] .darka .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px;\n}\n.darka .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px;\n}\n[dir=rtl] .darka .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px;\n}\n.darka .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px;\n}\n[dir=rtl] .darka .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px;\n}\n.darka .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px;\n}\n[dir=rtl] .darka .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px;\n}\n.darka .mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: #424242;\n  color: white;\n}\n.darka .mat-button, .darka .mat-icon-button, .darka .mat-stroked-button {\n  color: inherit;\n  background: transparent;\n}\n.darka .mat-button.mat-primary, .darka .mat-icon-button.mat-primary, .darka .mat-stroked-button.mat-primary {\n  color: #536dfe;\n}\n.darka .mat-button.mat-accent, .darka .mat-icon-button.mat-accent, .darka .mat-stroked-button.mat-accent {\n  color: #9c27b0;\n}\n.darka .mat-button.mat-warn, .darka .mat-icon-button.mat-warn, .darka .mat-stroked-button.mat-warn {\n  color: #ff5722;\n}\n.darka .mat-button.mat-primary.mat-button-disabled, .darka .mat-button.mat-accent.mat-button-disabled, .darka .mat-button.mat-warn.mat-button-disabled, .darka .mat-button.mat-button-disabled.mat-button-disabled, .darka .mat-icon-button.mat-primary.mat-button-disabled, .darka .mat-icon-button.mat-accent.mat-button-disabled, .darka .mat-icon-button.mat-warn.mat-button-disabled, .darka .mat-icon-button.mat-button-disabled.mat-button-disabled, .darka .mat-stroked-button.mat-primary.mat-button-disabled, .darka .mat-stroked-button.mat-accent.mat-button-disabled, .darka .mat-stroked-button.mat-warn.mat-button-disabled, .darka .mat-stroked-button.mat-button-disabled.mat-button-disabled {\n  color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-button.mat-primary .mat-button-focus-overlay, .darka .mat-icon-button.mat-primary .mat-button-focus-overlay, .darka .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n  background-color: #536dfe;\n}\n.darka .mat-button.mat-accent .mat-button-focus-overlay, .darka .mat-icon-button.mat-accent .mat-button-focus-overlay, .darka .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n  background-color: #9c27b0;\n}\n.darka .mat-button.mat-warn .mat-button-focus-overlay, .darka .mat-icon-button.mat-warn .mat-button-focus-overlay, .darka .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n  background-color: #ff5722;\n}\n.darka .mat-button.mat-button-disabled .mat-button-focus-overlay, .darka .mat-icon-button.mat-button-disabled .mat-button-focus-overlay, .darka .mat-stroked-button.mat-button-disabled .mat-button-focus-overlay {\n  background-color: transparent;\n}\n.darka .mat-button .mat-ripple-element, .darka .mat-icon-button .mat-ripple-element, .darka .mat-stroked-button .mat-ripple-element {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.darka .mat-button-focus-overlay {\n  background: white;\n}\n.darka .mat-stroked-button:not(.mat-button-disabled) {\n  border-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-flat-button, .darka .mat-raised-button, .darka .mat-fab, .darka .mat-mini-fab {\n  color: white;\n  background-color: #424242;\n}\n.darka .mat-flat-button.mat-primary, .darka .mat-raised-button.mat-primary, .darka .mat-fab.mat-primary, .darka .mat-mini-fab.mat-primary {\n  color: white;\n}\n.darka .mat-flat-button.mat-accent, .darka .mat-raised-button.mat-accent, .darka .mat-fab.mat-accent, .darka .mat-mini-fab.mat-accent {\n  color: white;\n}\n.darka .mat-flat-button.mat-warn, .darka .mat-raised-button.mat-warn, .darka .mat-fab.mat-warn, .darka .mat-mini-fab.mat-warn {\n  color: white;\n}\n.darka .mat-flat-button.mat-primary.mat-button-disabled, .darka .mat-flat-button.mat-accent.mat-button-disabled, .darka .mat-flat-button.mat-warn.mat-button-disabled, .darka .mat-flat-button.mat-button-disabled.mat-button-disabled, .darka .mat-raised-button.mat-primary.mat-button-disabled, .darka .mat-raised-button.mat-accent.mat-button-disabled, .darka .mat-raised-button.mat-warn.mat-button-disabled, .darka .mat-raised-button.mat-button-disabled.mat-button-disabled, .darka .mat-fab.mat-primary.mat-button-disabled, .darka .mat-fab.mat-accent.mat-button-disabled, .darka .mat-fab.mat-warn.mat-button-disabled, .darka .mat-fab.mat-button-disabled.mat-button-disabled, .darka .mat-mini-fab.mat-primary.mat-button-disabled, .darka .mat-mini-fab.mat-accent.mat-button-disabled, .darka .mat-mini-fab.mat-warn.mat-button-disabled, .darka .mat-mini-fab.mat-button-disabled.mat-button-disabled {\n  color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-flat-button.mat-primary, .darka .mat-raised-button.mat-primary, .darka .mat-fab.mat-primary, .darka .mat-mini-fab.mat-primary {\n  background-color: #536dfe;\n}\n.darka .mat-flat-button.mat-accent, .darka .mat-raised-button.mat-accent, .darka .mat-fab.mat-accent, .darka .mat-mini-fab.mat-accent {\n  background-color: #9c27b0;\n}\n.darka .mat-flat-button.mat-warn, .darka .mat-raised-button.mat-warn, .darka .mat-fab.mat-warn, .darka .mat-mini-fab.mat-warn {\n  background-color: #ff5722;\n}\n.darka .mat-flat-button.mat-primary.mat-button-disabled, .darka .mat-flat-button.mat-accent.mat-button-disabled, .darka .mat-flat-button.mat-warn.mat-button-disabled, .darka .mat-flat-button.mat-button-disabled.mat-button-disabled, .darka .mat-raised-button.mat-primary.mat-button-disabled, .darka .mat-raised-button.mat-accent.mat-button-disabled, .darka .mat-raised-button.mat-warn.mat-button-disabled, .darka .mat-raised-button.mat-button-disabled.mat-button-disabled, .darka .mat-fab.mat-primary.mat-button-disabled, .darka .mat-fab.mat-accent.mat-button-disabled, .darka .mat-fab.mat-warn.mat-button-disabled, .darka .mat-fab.mat-button-disabled.mat-button-disabled, .darka .mat-mini-fab.mat-primary.mat-button-disabled, .darka .mat-mini-fab.mat-accent.mat-button-disabled, .darka .mat-mini-fab.mat-warn.mat-button-disabled, .darka .mat-mini-fab.mat-button-disabled.mat-button-disabled {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-flat-button.mat-primary .mat-ripple-element, .darka .mat-raised-button.mat-primary .mat-ripple-element, .darka .mat-fab.mat-primary .mat-ripple-element, .darka .mat-mini-fab.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-flat-button.mat-accent .mat-ripple-element, .darka .mat-raised-button.mat-accent .mat-ripple-element, .darka .mat-fab.mat-accent .mat-ripple-element, .darka .mat-mini-fab.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-flat-button.mat-warn .mat-ripple-element, .darka .mat-raised-button.mat-warn .mat-ripple-element, .darka .mat-fab.mat-warn .mat-ripple-element, .darka .mat-mini-fab.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-stroked-button:not([class*=mat-elevation-z]), .darka .mat-flat-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-raised-button:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-raised-button:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-raised-button.mat-button-disabled:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-fab:not([class*=mat-elevation-z]), .darka .mat-mini-fab:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]), .darka .mat-mini-fab:not(.mat-button-disabled):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-fab.mat-button-disabled:not([class*=mat-elevation-z]), .darka .mat-mini-fab.mat-button-disabled:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-button-toggle-standalone,\n.darka .mat-button-toggle-group {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.darka .mat-button-toggle-group-appearance-standard {\n  box-shadow: none;\n}\n.darka .mat-button-toggle {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-button-toggle .mat-button-toggle-focus-overlay {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-button-toggle-appearance-standard {\n  color: white;\n  background: #424242;\n}\n.darka .mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n  background-color: white;\n}\n.darka .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: solid 1px rgba(255, 255, 255, 0.12);\n}\n.darka [dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: solid 1px rgba(255, 255, 255, 0.12);\n}\n.darka .mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(255, 255, 255, 0.12);\n}\n.darka .mat-button-toggle-checked {\n  background-color: #212121;\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  color: white;\n}\n.darka .mat-button-toggle-disabled {\n  color: rgba(255, 255, 255, 0.3);\n  background-color: black;\n}\n.darka .mat-button-toggle-disabled.mat-button-toggle-appearance-standard {\n  background: #424242;\n}\n.darka .mat-button-toggle-disabled.mat-button-toggle-checked {\n  background-color: #424242;\n}\n.darka .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.darka .mat-button-toggle-group-appearance-standard {\n  border: solid 1px rgba(255, 255, 255, 0.12);\n}\n.darka .mat-card {\n  background: #424242;\n  color: white;\n}\n.darka .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-card.mat-card-flat:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-card-subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-checkbox-checkmark {\n  fill: #303030;\n}\n.darka .mat-checkbox-checkmark-path {\n  stroke: #303030 !important;\n}\n.darka .mat-checkbox-mixedmark {\n  background-color: #303030;\n}\n.darka .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .darka .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #536dfe;\n}\n.darka .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .darka .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #9c27b0;\n}\n.darka .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .darka .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #ff5722;\n}\n.darka .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .darka .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #686868;\n}\n.darka .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #686868;\n}\n.darka .mat-checkbox-disabled .mat-checkbox-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-checkbox .mat-ripple-element {\n  background-color: white;\n}\n.darka .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element,\n.darka .mat-checkbox:active:not(.mat-checkbox-disabled).mat-primary .mat-ripple-element {\n  background: #536dfe;\n}\n.darka .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element,\n.darka .mat-checkbox:active:not(.mat-checkbox-disabled).mat-accent .mat-ripple-element {\n  background: #9c27b0;\n}\n.darka .mat-checkbox-checked:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element,\n.darka .mat-checkbox:active:not(.mat-checkbox-disabled).mat-warn .mat-ripple-element {\n  background: #ff5722;\n}\n.darka .mat-chip.mat-standard-chip {\n  background-color: #616161;\n  color: white;\n}\n.darka .mat-chip.mat-standard-chip .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n.darka .mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover {\n  opacity: 0.54;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-disabled {\n  opacity: 0.4;\n}\n.darka .mat-chip.mat-standard-chip::after {\n  background: white;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #536dfe;\n  color: white;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #ff5722;\n  color: white;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #9c27b0;\n  color: white;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n  color: white;\n  opacity: 0.4;\n}\n.darka .mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-table {\n  background: #424242;\n}\n.darka .mat-table thead, .darka .mat-table tbody, .darka .mat-table tfoot,\n.darka mat-header-row, .darka mat-row, .darka mat-footer-row,\n.darka [mat-header-row], .darka [mat-row], .darka [mat-footer-row],\n.darka .mat-table-sticky {\n  background: inherit;\n}\n.darka mat-row, .darka mat-header-row, .darka mat-footer-row,\n.darka th.mat-header-cell, .darka td.mat-cell, .darka td.mat-footer-cell {\n  border-bottom-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-header-cell {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-cell, .darka .mat-footer-cell {\n  color: white;\n}\n.darka .mat-calendar-arrow {\n  border-top-color: white;\n}\n.darka .mat-datepicker-toggle,\n.darka .mat-datepicker-content .mat-calendar-next-button,\n.darka .mat-datepicker-content .mat-calendar-previous-button {\n  color: white;\n}\n.darka .mat-calendar-table-header {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-calendar-table-header-divider::after {\n  background: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-calendar-body-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-calendar-body-cell-content,\n.darka .mat-date-range-input-separator {\n  color: white;\n  border-color: transparent;\n}\n.darka .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-form-field-disabled .mat-date-range-input-separator {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-calendar-body-in-preview {\n  color: rgba(255, 255, 255, 0.24);\n}\n.darka .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-calendar-body-in-range::before {\n  background: rgba(83, 109, 254, 0.2);\n}\n.darka .mat-calendar-body-comparison-identical,\n.darka .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.darka .mat-calendar-body-comparison-bridge-start::before,\n.darka [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(83, 109, 254, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.darka .mat-calendar-body-comparison-bridge-end::before,\n.darka [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(83, 109, 254, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.darka .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.darka .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n.darka .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.darka .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n.darka .mat-calendar-body-selected {\n  background-color: #536dfe;\n  color: white;\n}\n.darka .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(83, 109, 254, 0.4);\n}\n.darka .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n.darka .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.darka .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.darka .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(83, 109, 254, 0.3);\n}\n.darka .mat-datepicker-content {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: #424242;\n  color: white;\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-in-range::before {\n  background: rgba(156, 39, 176, 0.2);\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical,\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-start::before,\n.darka .mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(156, 39, 176, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-comparison-bridge-end::before,\n.darka .mat-datepicker-content.mat-accent [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(156, 39, 176, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n  background-color: #9c27b0;\n  color: white;\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(156, 39, 176, 0.4);\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n.darka .mat-datepicker-content.mat-accent .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.darka .mat-datepicker-content.mat-accent .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.darka .mat-datepicker-content.mat-accent .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(156, 39, 176, 0.3);\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-in-range::before {\n  background: rgba(255, 87, 34, 0.2);\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical,\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range::before {\n  background: rgba(249, 171, 0, 0.2);\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-start::before,\n.darka .mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-end::before {\n  background: linear-gradient(to right, rgba(255, 87, 34, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-comparison-bridge-end::before,\n.darka .mat-datepicker-content.mat-warn [dir=rtl] .mat-calendar-body-comparison-bridge-start::before {\n  background: linear-gradient(to left, rgba(255, 87, 34, 0.2) 50%, rgba(249, 171, 0, 0.2) 50%);\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {\n  background: #a8dab5;\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-comparison-identical.mat-calendar-body-selected,\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {\n  background: #46a35e;\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n  background-color: #ff5722;\n  color: white;\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(255, 87, 34, 0.4);\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white;\n}\n.darka .mat-datepicker-content.mat-warn .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.darka .mat-datepicker-content.mat-warn .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.darka .mat-datepicker-content.mat-warn .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: rgba(255, 87, 34, 0.3);\n}\n.darka .mat-datepicker-content-touch {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-datepicker-toggle-active {\n  color: #536dfe;\n}\n.darka .mat-datepicker-toggle-active.mat-accent {\n  color: #9c27b0;\n}\n.darka .mat-datepicker-toggle-active.mat-warn {\n  color: #ff5722;\n}\n.darka .mat-date-range-input-inner[disabled] {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: #424242;\n  color: white;\n}\n.darka .mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-divider-vertical {\n  border-right-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-expansion-panel {\n  background: #424242;\n  color: white;\n}\n.darka .mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-action-row {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-expansion-panel .mat-expansion-panel-header.cdk-keyboard-focused:not([aria-disabled=true]), .darka .mat-expansion-panel .mat-expansion-panel-header.cdk-program-focused:not([aria-disabled=true]), .darka .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {\n  background: rgba(255, 255, 255, 0.04);\n}\n@media (hover: none) {\n  .darka .mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover {\n    background: #424242;\n  }\n}\n.darka .mat-expansion-panel-header-title {\n  color: white;\n}\n.darka .mat-expansion-panel-header-description,\n.darka .mat-expansion-indicator::after {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-expansion-panel-header[aria-disabled=true] {\n  color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,\n.darka .mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {\n  color: inherit;\n}\n.darka .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-hint {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-form-field.mat-focused .mat-form-field-label {\n  color: #536dfe;\n}\n.darka .mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n  color: #9c27b0;\n}\n.darka .mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n  color: #ff5722;\n}\n.darka .mat-focused .mat-form-field-required-marker {\n  color: #9c27b0;\n}\n.darka .mat-form-field-ripple {\n  background-color: white;\n}\n.darka .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #536dfe;\n}\n.darka .mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n  background-color: #9c27b0;\n}\n.darka .mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n  background-color: #ff5722;\n}\n.darka .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {\n  color: #536dfe;\n}\n.darka .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {\n  color: #9c27b0;\n}\n.darka .mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after {\n  color: #ff5722;\n}\n.darka .mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #ff5722;\n}\n.darka .mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n.darka .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n  color: #ff5722;\n}\n.darka .mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.darka .mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #ff5722;\n}\n.darka .mat-error {\n  color: #ff5722;\n}\n.darka .mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.darka .mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.darka .mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.darka .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.darka .mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent;\n}\n.darka .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: white;\n}\n.darka .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #536dfe;\n}\n.darka .mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #9c27b0;\n}\n.darka .mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #ff5722;\n}\n.darka .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #ff5722;\n}\n.darka .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(255, 255, 255, 0.15);\n}\n.darka .mat-icon.mat-primary {\n  color: #536dfe;\n}\n.darka .mat-icon.mat-accent {\n  color: #9c27b0;\n}\n.darka .mat-icon.mat-warn {\n  color: #ff5722;\n}\n.darka .mat-form-field-type-mat-native-select .mat-form-field-infix::after {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-input-element:disabled,\n.darka .mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-input-element {\n  caret-color: #536dfe;\n}\n.darka .mat-input-element::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-input-element::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-input-element::-moz-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-input-element::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-input-element:-ms-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-input-element option {\n  color: rgba(0, 0, 0, 0.87);\n}\n.darka .mat-input-element option:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n.darka .mat-form-field.mat-accent .mat-input-element {\n  caret-color: #9c27b0;\n}\n.darka .mat-form-field.mat-warn .mat-input-element,\n.darka .mat-form-field-invalid .mat-input-element {\n  caret-color: #ff5722;\n}\n.darka .mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {\n  color: #ff5722;\n}\n.darka .mat-list-base .mat-list-item {\n  color: white;\n}\n.darka .mat-list-base .mat-list-option {\n  color: white;\n}\n.darka .mat-list-base .mat-subheader {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-list-item-disabled {\n  background-color: black;\n}\n.darka .mat-list-option:hover, .darka .mat-list-option:focus,\n.darka .mat-nav-list .mat-list-item:hover,\n.darka .mat-nav-list .mat-list-item:focus,\n.darka .mat-action-list .mat-list-item:hover,\n.darka .mat-action-list .mat-list-item:focus {\n  background: rgba(255, 255, 255, 0.04);\n}\n.darka .mat-list-single-selected-option, .darka .mat-list-single-selected-option:hover, .darka .mat-list-single-selected-option:focus {\n  background: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-menu-panel {\n  background: #424242;\n}\n.darka .mat-menu-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-menu-item {\n  background: transparent;\n  color: white;\n}\n.darka .mat-menu-item[disabled], .darka .mat-menu-item[disabled]::after,\n.darka .mat-menu-item[disabled] .mat-icon-no-color {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-menu-item .mat-icon-no-color,\n.darka .mat-menu-item-submenu-trigger::after {\n  color: white;\n}\n.darka .mat-menu-item:hover:not([disabled]),\n.darka .mat-menu-item.cdk-program-focused:not([disabled]),\n.darka .mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.darka .mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(255, 255, 255, 0.04);\n}\n.darka .mat-paginator {\n  background: #424242;\n}\n.darka .mat-paginator,\n.darka .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-paginator-decrement,\n.darka .mat-paginator-increment {\n  border-top: 2px solid white;\n  border-right: 2px solid white;\n}\n.darka .mat-paginator-first,\n.darka .mat-paginator-last {\n  border-top: 2px solid white;\n}\n.darka .mat-icon-button[disabled] .mat-paginator-decrement,\n.darka .mat-icon-button[disabled] .mat-paginator-increment,\n.darka .mat-icon-button[disabled] .mat-paginator-first,\n.darka .mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-progress-bar-background {\n  fill: #c5cae9;\n}\n.darka .mat-progress-bar-buffer {\n  background-color: #c5cae9;\n}\n.darka .mat-progress-bar-fill::after {\n  background-color: #536dfe;\n}\n.darka .mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #e1bee7;\n}\n.darka .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #e1bee7;\n}\n.darka .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #9c27b0;\n}\n.darka .mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #ffccbc;\n}\n.darka .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffccbc;\n}\n.darka .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #ff5722;\n}\n.darka .mat-progress-spinner circle, .darka .mat-spinner circle {\n  stroke: #536dfe;\n}\n.darka .mat-progress-spinner.mat-accent circle, .darka .mat-spinner.mat-accent circle {\n  stroke: #9c27b0;\n}\n.darka .mat-progress-spinner.mat-warn circle, .darka .mat-spinner.mat-warn circle {\n  stroke: #ff5722;\n}\n.darka .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #536dfe;\n}\n.darka .mat-radio-button.mat-primary .mat-radio-inner-circle,\n.darka .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .darka .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple, .darka .mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {\n  background-color: #536dfe;\n}\n.darka .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #9c27b0;\n}\n.darka .mat-radio-button.mat-accent .mat-radio-inner-circle,\n.darka .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .darka .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple, .darka .mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {\n  background-color: #9c27b0;\n}\n.darka .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff5722;\n}\n.darka .mat-radio-button.mat-warn .mat-radio-inner-circle,\n.darka .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple), .darka .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple, .darka .mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {\n  background-color: #ff5722;\n}\n.darka .mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.darka .mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.darka .mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-radio-button .mat-ripple-element {\n  background-color: white;\n}\n.darka .mat-select-value {\n  color: white;\n}\n.darka .mat-select-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-select-disabled .mat-select-value {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-select-panel {\n  background: #424242;\n}\n.darka .mat-select-panel:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #536dfe;\n}\n.darka .mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #9c27b0;\n}\n.darka .mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #ff5722;\n}\n.darka .mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #ff5722;\n}\n.darka .mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-drawer-container {\n  background-color: #303030;\n  color: white;\n}\n.darka .mat-drawer {\n  background-color: #424242;\n  color: white;\n}\n.darka .mat-drawer.mat-drawer-push {\n  background-color: #424242;\n}\n.darka .mat-drawer:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-drawer-side {\n  border-right: solid 1px rgba(255, 255, 255, 0.12);\n}\n.darka .mat-drawer-side.mat-drawer-end {\n  border-left: solid 1px rgba(255, 255, 255, 0.12);\n  border-right: none;\n}\n.darka [dir=rtl] .mat-drawer-side {\n  border-left: solid 1px rgba(255, 255, 255, 0.12);\n  border-right: none;\n}\n.darka [dir=rtl] .mat-drawer-side.mat-drawer-end {\n  border-left: none;\n  border-right: solid 1px rgba(255, 255, 255, 0.12);\n}\n.darka .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(189, 189, 189, 0.6);\n}\n.darka .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #9c27b0;\n}\n.darka .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(156, 39, 176, 0.54);\n}\n.darka .mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #9c27b0;\n}\n.darka .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #536dfe;\n}\n.darka .mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(83, 109, 254, 0.54);\n}\n.darka .mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {\n  background-color: #536dfe;\n}\n.darka .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ff5722;\n}\n.darka .mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(255, 87, 34, 0.54);\n}\n.darka .mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {\n  background-color: #ff5722;\n}\n.darka .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: white;\n}\n.darka .mat-slide-toggle-thumb {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #bdbdbd;\n}\n.darka .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-primary .mat-slider-track-fill,\n.darka .mat-primary .mat-slider-thumb,\n.darka .mat-primary .mat-slider-thumb-label {\n  background-color: #536dfe;\n}\n.darka .mat-primary .mat-slider-thumb-label-text {\n  color: white;\n}\n.darka .mat-primary .mat-slider-focus-ring {\n  background-color: rgba(83, 109, 254, 0.2);\n}\n.darka .mat-accent .mat-slider-track-fill,\n.darka .mat-accent .mat-slider-thumb,\n.darka .mat-accent .mat-slider-thumb-label {\n  background-color: #9c27b0;\n}\n.darka .mat-accent .mat-slider-thumb-label-text {\n  color: white;\n}\n.darka .mat-accent .mat-slider-focus-ring {\n  background-color: rgba(156, 39, 176, 0.2);\n}\n.darka .mat-warn .mat-slider-track-fill,\n.darka .mat-warn .mat-slider-thumb,\n.darka .mat-warn .mat-slider-thumb-label {\n  background-color: #ff5722;\n}\n.darka .mat-warn .mat-slider-thumb-label-text {\n  color: white;\n}\n.darka .mat-warn .mat-slider-focus-ring {\n  background-color: rgba(255, 87, 34, 0.2);\n}\n.darka .mat-slider:hover .mat-slider-track-background,\n.darka .cdk-focused .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-slider-disabled .mat-slider-track-background,\n.darka .mat-slider-disabled .mat-slider-track-fill,\n.darka .mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.darka .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: white;\n}\n.darka .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.darka .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n  background-color: transparent;\n}\n.darka .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .darka .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .darka .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.darka .mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n}\n.darka .mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7) 2px, transparent 0, transparent);\n}\n.darka .mat-step-header.cdk-keyboard-focused, .darka .mat-step-header.cdk-program-focused, .darka .mat-step-header:hover {\n  background-color: rgba(255, 255, 255, 0.04);\n}\n@media (hover: none) {\n  .darka .mat-step-header:hover {\n    background: none;\n  }\n}\n.darka .mat-step-header .mat-step-label,\n.darka .mat-step-header .mat-step-optional {\n  color: rgba(255, 255, 255, 0.7);\n}\n.darka .mat-step-header .mat-step-icon {\n  background-color: rgba(255, 255, 255, 0.7);\n  color: white;\n}\n.darka .mat-step-header .mat-step-icon-selected,\n.darka .mat-step-header .mat-step-icon-state-done,\n.darka .mat-step-header .mat-step-icon-state-edit {\n  background-color: #536dfe;\n  color: white;\n}\n.darka .mat-step-header.mat-accent .mat-step-icon {\n  color: white;\n}\n.darka .mat-step-header.mat-accent .mat-step-icon-selected,\n.darka .mat-step-header.mat-accent .mat-step-icon-state-done,\n.darka .mat-step-header.mat-accent .mat-step-icon-state-edit {\n  background-color: #9c27b0;\n  color: white;\n}\n.darka .mat-step-header.mat-warn .mat-step-icon {\n  color: white;\n}\n.darka .mat-step-header.mat-warn .mat-step-icon-selected,\n.darka .mat-step-header.mat-warn .mat-step-icon-state-done,\n.darka .mat-step-header.mat-warn .mat-step-icon-state-edit {\n  background-color: #ff5722;\n  color: white;\n}\n.darka .mat-step-header .mat-step-icon-state-error {\n  background-color: transparent;\n  color: #ff5722;\n}\n.darka .mat-step-header .mat-step-label.mat-step-label-active {\n  color: white;\n}\n.darka .mat-step-header .mat-step-label.mat-step-label-error {\n  color: #ff5722;\n}\n.darka .mat-stepper-horizontal, .darka .mat-stepper-vertical {\n  background-color: #424242;\n}\n.darka .mat-stepper-vertical-line::before {\n  border-left-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-horizontal-stepper-header::before,\n.darka .mat-horizontal-stepper-header::after,\n.darka .mat-stepper-horizontal-line {\n  border-top-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-sort-header-arrow {\n  color: #c6c6c6;\n}\n.darka .mat-tab-nav-bar,\n.darka .mat-tab-header {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.darka .mat-tab-group-inverted-header .mat-tab-nav-bar,\n.darka .mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  border-bottom: none;\n}\n.darka .mat-tab-label, .darka .mat-tab-link {\n  color: white;\n}\n.darka .mat-tab-label.mat-tab-disabled, .darka .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-tab-header-pagination-chevron {\n  border-color: white;\n}\n.darka .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.darka .mat-tab-group[class*=mat-background-] .mat-tab-header,\n.darka .mat-tab-nav-bar[class*=mat-background-] {\n  border-bottom: none;\n  border-top: none;\n}\n.darka .mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.darka .mat-tab-group.mat-primary .mat-ink-bar, .darka .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #536dfe;\n}\n.darka .mat-tab-group.mat-primary.mat-background-primary > .mat-tab-header .mat-ink-bar, .darka .mat-tab-group.mat-primary.mat-background-primary > .mat-tab-link-container .mat-ink-bar, .darka .mat-tab-nav-bar.mat-primary.mat-background-primary > .mat-tab-header .mat-ink-bar, .darka .mat-tab-nav-bar.mat-primary.mat-background-primary > .mat-tab-link-container .mat-ink-bar {\n  background-color: white;\n}\n.darka .mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(225, 190, 231, 0.3);\n}\n.darka .mat-tab-group.mat-accent .mat-ink-bar, .darka .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #9c27b0;\n}\n.darka .mat-tab-group.mat-accent.mat-background-accent > .mat-tab-header .mat-ink-bar, .darka .mat-tab-group.mat-accent.mat-background-accent > .mat-tab-link-container .mat-ink-bar, .darka .mat-tab-nav-bar.mat-accent.mat-background-accent > .mat-tab-header .mat-ink-bar, .darka .mat-tab-nav-bar.mat-accent.mat-background-accent > .mat-tab-link-container .mat-ink-bar {\n  background-color: white;\n}\n.darka .mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 204, 188, 0.3);\n}\n.darka .mat-tab-group.mat-warn .mat-ink-bar, .darka .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #ff5722;\n}\n.darka .mat-tab-group.mat-warn.mat-background-warn > .mat-tab-header .mat-ink-bar, .darka .mat-tab-group.mat-warn.mat-background-warn > .mat-tab-link-container .mat-ink-bar, .darka .mat-tab-nav-bar.mat-warn.mat-background-warn > .mat-tab-header .mat-ink-bar, .darka .mat-tab-nav-bar.mat-warn.mat-background-warn > .mat-tab-link-container .mat-ink-bar {\n  background-color: white;\n}\n.darka .mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3);\n}\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header, .darka .mat-tab-group.mat-background-primary > .mat-tab-link-container, .darka .mat-tab-group.mat-background-primary > .mat-tab-header-pagination, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header-pagination {\n  background-color: #536dfe;\n}\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header .mat-tab-label, .darka .mat-tab-group.mat-background-primary > .mat-tab-link-container .mat-tab-link, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-tab-label, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container .mat-tab-link {\n  color: white;\n}\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header .mat-tab-label.mat-tab-disabled, .darka .mat-tab-group.mat-background-primary > .mat-tab-link-container .mat-tab-link.mat-tab-disabled, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-tab-label.mat-tab-disabled, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.darka .mat-tab-group.mat-background-primary > .mat-tab-links .mat-focus-indicator::before,\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header .mat-focus-indicator::before, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-links .mat-focus-indicator::before,\n.darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-focus-indicator::before {\n  border-color: white;\n}\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.darka .mat-tab-group.mat-background-primary > .mat-tab-header .mat-ripple-element,\n.darka .mat-tab-group.mat-background-primary > .mat-tab-link-container .mat-ripple-element, .darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-header .mat-ripple-element,\n.darka .mat-tab-nav-bar.mat-background-primary > .mat-tab-link-container .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(225, 190, 231, 0.3);\n}\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header, .darka .mat-tab-group.mat-background-accent > .mat-tab-link-container, .darka .mat-tab-group.mat-background-accent > .mat-tab-header-pagination, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header-pagination {\n  background-color: #9c27b0;\n}\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header .mat-tab-label, .darka .mat-tab-group.mat-background-accent > .mat-tab-link-container .mat-tab-link, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-tab-label, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container .mat-tab-link {\n  color: white;\n}\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header .mat-tab-label.mat-tab-disabled, .darka .mat-tab-group.mat-background-accent > .mat-tab-link-container .mat-tab-link.mat-tab-disabled, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-tab-label.mat-tab-disabled, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.darka .mat-tab-group.mat-background-accent > .mat-tab-links .mat-focus-indicator::before,\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header .mat-focus-indicator::before, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-links .mat-focus-indicator::before,\n.darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-focus-indicator::before {\n  border-color: white;\n}\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.darka .mat-tab-group.mat-background-accent > .mat-tab-header .mat-ripple-element,\n.darka .mat-tab-group.mat-background-accent > .mat-tab-link-container .mat-ripple-element, .darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-header .mat-ripple-element,\n.darka .mat-tab-nav-bar.mat-background-accent > .mat-tab-link-container .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .darka .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.darka .mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 204, 188, 0.3);\n}\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header, .darka .mat-tab-group.mat-background-warn > .mat-tab-link-container, .darka .mat-tab-group.mat-background-warn > .mat-tab-header-pagination, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header-pagination {\n  background-color: #ff5722;\n}\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header .mat-tab-label, .darka .mat-tab-group.mat-background-warn > .mat-tab-link-container .mat-tab-link, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-tab-label, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container .mat-tab-link {\n  color: white;\n}\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header .mat-tab-label.mat-tab-disabled, .darka .mat-tab-group.mat-background-warn > .mat-tab-link-container .mat-tab-link.mat-tab-disabled, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-tab-label.mat-tab-disabled, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container .mat-tab-link.mat-tab-disabled {\n  color: rgba(255, 255, 255, 0.4);\n}\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.darka .mat-tab-group.mat-background-warn > .mat-tab-links .mat-focus-indicator::before,\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header .mat-focus-indicator::before, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header-pagination .mat-tab-header-pagination-chevron,\n.darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-links .mat-focus-indicator::before,\n.darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-focus-indicator::before {\n  border-color: white;\n}\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.darka .mat-tab-group.mat-background-warn > .mat-tab-header .mat-ripple-element,\n.darka .mat-tab-group.mat-background-warn > .mat-tab-link-container .mat-ripple-element, .darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-header .mat-ripple-element,\n.darka .mat-tab-nav-bar.mat-background-warn > .mat-tab-link-container .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.darka .mat-toolbar {\n  background: #212121;\n  color: white;\n}\n.darka .mat-toolbar.mat-primary {\n  background: #536dfe;\n  color: white;\n}\n.darka .mat-toolbar.mat-accent {\n  background: #9c27b0;\n  color: white;\n}\n.darka .mat-toolbar.mat-warn {\n  background: #ff5722;\n  color: white;\n}\n.darka .mat-toolbar .mat-form-field-underline,\n.darka .mat-toolbar .mat-form-field-ripple,\n.darka .mat-toolbar .mat-focused .mat-form-field-ripple {\n  background-color: currentColor;\n}\n.darka .mat-toolbar .mat-form-field-label,\n.darka .mat-toolbar .mat-focused .mat-form-field-label,\n.darka .mat-toolbar .mat-select-value,\n.darka .mat-toolbar .mat-select-arrow,\n.darka .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n  color: inherit;\n}\n.darka .mat-toolbar .mat-input-element {\n  caret-color: currentColor;\n}\n.darka .mat-tooltip {\n  background: rgba(97, 97, 97, 0.9);\n}\n.darka .mat-tree {\n  background: #424242;\n}\n.darka .mat-tree-node,\n.darka .mat-nested-tree-node {\n  color: white;\n}\n.darka .mat-snack-bar-container {\n  color: rgba(0, 0, 0, 0.87);\n  background: #fafafa;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.darka .mat-simple-snackbar-action {\n  color: inherit;\n}\n/*table 740px <= width <= 1024px */\n::ng-deep .false-style {\n  background-color: #f44336;\n  color: white;\n}\n::ng-deep .success-style {\n  background-color: #ffc107;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcY3NzXFx0aGVtZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcQGFuZ3VsYXJcXG1hdGVyaWFsXFxfdGhlbWluZy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxtYXQtc25hY2stYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFBO0FDdTBEQSxtQ0FBQTtBQStJQSx5REFBQTtBQW9iQSx5REFBQTtBQW13REEsMkNBQUE7QUE2Q0EscUJBQUE7QUF4K0NFO0VBQ0UsZ0JBdkxvQjtFQXdMcEIsZUF6TGtCO0VBMExsQixpREFBQTtBQzNzRko7QUQ4c0ZFO0VBRUUsY0FBQTtBQzVzRko7QUQrc0ZFO0VBQ0UsZUFBQTtBQzVzRko7QUQwM0VFO0VBL1ZFLHdEQUFBO0VBWUYsc0JBQUE7RUFxVkUsZ0JBQUE7QUN0M0VKO0FEeTNFRTtFQXBXRSx3REFBQTtFQVlGLHNCQUFBO0VBMFZFLGdCQUFBO0FDcjNFSjtBRHczRUU7RUF6V0Usd0RBQUE7RUFZRixzQkFBQTtFQStWRSxnQkFBQTtBQ3AzRUo7QUR1M0VFO0VBOVdFLHdEQUFBO0VBWUYsc0JBQUE7RUFvV0UsZ0JBQUE7QUNuM0VKO0FEeTNFRTtFQXRYRSxxRUFBQTtFQStYQSxnQkFBQTtBQzczRUo7QURnNEVFO0VBbFlFLHFFQUFBO0VBMllBLGdCQUFBO0FDcDRFSjtBRHU0RUU7RUE5WUUsd0RBQUE7RUFZRixzQkFBQTtBQ2hnRUY7QURzNEVFO0VBbFpFLHdEQUFBO0VBWUYsc0JBQUE7QUMzL0RGO0FEbzRFSTtFQUNFLGdCQUFBO0FDbDRFTjtBRHM0RUU7RUExWkUsd0RBQUE7RUFZRixzQkFBQTtBQ24vREY7QURxNEVFO0VBOVpFLDBEQUFBO0VBWUYsdUJBQUE7RUFvWkUsZ0JBQUE7QUNqNEVKO0FEbzRFRTtFQW5hRSx3REFB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LGNBQUE7QUNod0RKO0FEbXdERTtFQUNFLHlCQUFBO0FDandESjtBRHUyREU7RUFDRSxpQ0FBQTtBQ3IyREo7QUQ2dkZFO0VBQ0UsbUJBQUE7QUMzdkZKO0FEOHZGRTs7RUFFRSxZQUFBO0FDNXZGSjtBRGs1REU7RUFHRSwwQkFBQTtFQUNBLG1CQUFBO0VBMzVLRiwySEFBQTtBQzBnSEY7QURzNURFO0VBQ0UsY0FBQTtBQ3A1REo7QUZ2K0hBLGtDQUFBO0FFdENBO0VBQ0MseUJGeUJZO0VFeEJaLFlBQUE7QUFpaElEO0FBL2dJQTtFQUNDLHlCRm9CYztBRTgvSGYiLCJmaWxlIjoibWF0LXNuYWNrLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qQ3VzdG9tZXItaGVhZGVyKi9cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vcGVyc29uYWxibG9nZnJvbnRlbmQvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmdcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nXCI7XHJcbkBpbmNsdWRlIG1hdC1jb3JlKCk7XHJcblxyXG4kbXktcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1ncmV5LCA4MDApO1xyXG4kbXktYWNjZW50OiBtYXQtcGFsZXR0ZSgkbWF0LWFtYmVyKTtcclxuJG15LXdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKTtcclxuLy9jb2xvclxyXG4kcHJpbWFyeS1jb2xvcjogbWF0LWNvbG9yKCRteS1wcmltYXJ5KTtcclxuJGFjY2VudC1jb2xvcjogbWF0LWNvbG9yKCRteS1hY2NlbnQpO1xyXG4kd2Fybi1jb2xvcjogbWF0LWNvbG9yKCRteS13YXJuKTtcclxuXHJcbiRteS1wcmltYXJ5LXRleHQ6IG1hdC1wYWxldHRlKCRtYXQtZ3JleSk7XHJcbiRteS10aGVtZTogbWF0LWxpZ2h0LXRoZW1lKCRteS1wcmltYXJ5LCAkbXktYWNjZW50LCAkbXktd2Fybik7XHJcbiR0ZXh0LWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJG15LXdhcm4pO1xyXG4vLyAkaW5wdXQtdGhlbWUgOiBtYXQtcGFsZXR0ZSgkbGlnaHQtcHJpbWFyeS10ZXh0KTtcclxuLy8uZGVmYXVsdCB7XHJcblx0QGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkbXktdGhlbWUpO1xyXG4vL31cclxuLy8gRGVmaW5lIGFuIGFsdGVybmF0ZSBkYXJrIHRoZW1lLlxyXG4kZGFyay1wcmltYXJ5OiBtYXQtcGFsZXR0ZSgkbWF0LWluZGlnbywgQTIwMCk7XHJcbiRkYXJrLWFjY2VudDogbWF0LXBhbGV0dGUoJG1hdC1wdXJwbGUpO1xyXG4kZGFyay13YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LWRlZXAtb3JhbmdlKTtcclxuXHJcbi8vY29sb3JcclxuJHByaW1hcnktY29sb3I6IG1hdC1jb2xvcigkbXktcHJpbWFyeSk7XHJcbiRhY2NlbnQtY29sb3I6IG1hdC1jb2xvcigkbXktYWNjZW50KTtcclxuJHdhcm4tY29sb3I6IG1hdC1jb2xvcigkbXktd2Fybik7XHJcbiRteS1wcmltYXJ5LXRleHQ6IG1hdC1wYWxldHRlKCRtYXQtcmVkKTtcclxuLy8gJGlucHV0LXRoZW1lIDogbWF0LXBhbGV0dGUoJGRhcmstcHJpbWFyeS10ZXh0KTtcclxuJGRhcmstdGhlbWU6IG1hdC1kYXJrLXRoZW1lKCRkYXJrLXByaW1hcnksICRkYXJrLWFjY2VudCwgJGRhcmstd2Fybik7XHJcbi5kYXJrYSB7XHJcblx0QGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkZGFyay10aGVtZSk7XHJcbn1cclxuJGNvbnRhaW5lci13cmFwcGVyLWhlaWdodDogMzVweDtcclxuJGhlYWRlci13aXRoLXNlYXJjaC13cmFwcGVyLWhlaWdodDogODVweDtcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2LjE4NzVlbSkge1xyXG59XHJcbi8qdGFibGUgNzQwcHggPD0gd2lkdGggPD0gMTAyNHB4ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2LjI1ZW0pIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XHJcbn1cclxuIiwiLy8gRmlsZSBmb3Igd2hpY2ggYWxsIGltcG9ydHMgYXJlIHJlc29sdmVkIGFuZCBidW5kbGVkLiBUaGlzIGlzIHRoZSBlbnRyeS1wb2ludCBmb3Jcbi8vIHRoZSBgQGFuZ3VsYXIvbWF0ZXJpYWxgIHRoZW1pbmcgU2FzcyBidW5kbGUuIFNlZSBgLy9zcmMvbWF0ZXJpYWw6dGhlbWluZ19idW5kbGVgLlxuXG4vLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBjYW4ndCBpbXBvcnQgYW5kIHVzZSB0aGUgYGhpZ2gtY29udHJhc3RgIG1peGluIGZyb20gYF9hMTF5LnNjc3NgLCBiZWNhdXNlXG4gICAgICAvLyB0aGlzIGZpbGUgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIHRvcC1sZXZlbCBgY2RrYCBwYWNrYWdlIHdoZW4gcHV0dGluZyB0b2dldGhlciB0aGUgZmlsZXNcbiAgICAgIC8vIGZvciBucG0uIEFueSByZWxhdGl2ZSBpbXBvcnQgcGF0aHMgd2UgdXNlIGhlcmUgd2lsbCBiZWNvbWUgaW52YWxpZCBvbmNlIHRoZSBmaWxlIGlzIGNvcGllZC5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgJiB7XG4gICAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLlxuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBUaGlzIHdvcmtzIGFyb3VuZCBhIENocm9tZSBidWcgdGhhdCBjYW4gY2F1c2UgdGhlIHRhYiB0byBjcmFzaCB3aGVuIGxhcmdlIGFtb3VudHMgb2ZcbiAgICAvLyBub24tRW5nbGlzaCB0ZXh0IGdldCB3cmFwcGVkOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjAxNDQ0XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICBAaWYgKCRzZWxlY3Rvci1jb250ZXh0ID09ICcnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGVsc2Uge1xuICAgICN7JHNlbGVjdG9yLWNvbnRleHR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy8vXG4vLy8gQHBhcmFtIHRhcmdldCBXaGljaCBraW5kIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vLyAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSwgJGVuY2Fwc3VsYXRpb246ICdhbnknKSB7XG4gIEBpZiAoJHRhcmdldCAhPSAnYWN0aXZlJyBhbmQgJHRhcmdldCAhPSAnYmxhY2stb24td2hpdGUnIGFuZCAkdGFyZ2V0ICE9ICd3aGl0ZS1vbi1ibGFjaycpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgdmFsdWUgXCIjeyR0YXJnZXR9XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwiYWN0aXZlXCIsIFwiYmxhY2stb24td2hpdGVcIiwgYW5kIFwid2hpdGUtb24tYmxhY2tcIic7XG4gIH1cblxuICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdvZmYnIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnYW55Jykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCBlbmNhcHN1bGF0aW9uIFwiI3skZW5jYXBzdWxhdGlvbn1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJvblwiLCBcIm9mZlwiLCBhbmQgXCJhbnlcIic7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGV4dCBoYXMgbXVsdGlwbGUgcGFydHMsIHN1Y2ggYXMgYC5zZWN0aW9uLCAucmVnaW9uYCwganVzdCBkb2luZ1xuICAvLyBgLmNkay1oaWdoLWNvbnRyYXN0LXh4eCAjeyZ9YCB3aWxsIG9ubHkgYXBwbHkgdGhlIHBhcmVudCBzZWxlY3RvciB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGVcbiAgLy8gY29udGV4dC4gV2UgYWRkcmVzcyB0aGlzIGJ5IG5lc3RpbmcgdGhlIHNlbGVjdG9yIGNvbnRleHQgdW5kZXIgLmNkay1oaWdoLWNvbnRyYXN0LlxuICBAYXQtcm9vdCB7XG4gICAgJHNlbGVjdG9yLWNvbnRleHQ6ICN7Jn07XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicpIHtcbiAgICAgIC8vIE5vdGUgdGhhdCBpZiB0aGlzIHNlbGVjdG9yIGlzIHVwZGF0ZWQsIHRoZSBzYW1lIGNoYW5nZSBoYXMgdG8gYmUgbWFkZSBpbnNpZGVcbiAgICAgIC8vIGBfb3ZlcmxheS5zY3NzYCB3aGljaCBjYW4ndCBkZXBlbmQgb24gdGhpcyBtaXhpbiBkdWUgdG8gc29tZSBpbmZyYXN0cnVjdHVyZSBsaW1pdGF0aW9ucy5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIEBpbmNsdWRlIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1peGluIF9jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWJhc2Uge1xuICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kbWF0LWVsZXZhdGlvbi1wcmVmaXg6ICdtYXQtZWxldmF0aW9uLXonO1xuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyB0byBhbiBlbGVtZW50IHRvIGdpdmUgaXQgdGhlIGVsZXZhdGlvbiBzcGVjaWZpZWQgYnkgJHpWYWx1ZS5cbi8vIFRoZSAkelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNC5cbkBtaXhpbiBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJG1hdC1lbGV2YXRpb24tY29sb3IsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gIEBpZiB0eXBlLW9mKCR6VmFsdWUpICE9IG51bWJlciBvciBub3QgdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLWdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JG1hdC1lbGV2YXRpb24tcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3IsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuXG5cbkBtaXhpbiBtYXQtcHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbmZpZywgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuQG1peGluIG1hdC1wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkY29uZmlnLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBJZiB0aGUgbWF0LWFuaW1hdGlvbi1ub29wIGNsYXNzIGlzIHByZXNlbnQgb24gdGhlIGNvbXBvbmVudHMgcm9vdCBlbGVtZW50LFxuLy8gcHJldmVudCBub24gY3NzIGFuaW1hdGlvbnMgZnJvbSBydW5uaW5nLlxuLy8gTk9URTogQ3VycmVudGx5IHRoaXMgbWl4aW4gc2hvdWxkIG9ubHkgYmUgdXNlZCB3aXRoIGNvbXBvbmVudHMgdGhhdCBkbyBub3Rcbi8vIGhhdmUgYW55IHByb2plY3RlZCBjb250ZW50LlxuQG1peGluIG1hdC1wcml2YXRlLWFuaW1hdGlvbi1ub29wKCkge1xuICAvLyBAYXQtcm9vdCBpcyB1c2VkIHRvIHN0ZXBzIG91dHNpZGUgb2YgdGhlIGhpZXJhcmNoeSBvZiB0aGUgc2NzcyBydWxlcy4gVGhpcyBpc1xuICAvLyBkb25lIHRvIGFsbG93IGEgY2xhc3MgdG8gYmUgYWRkZWQgdG8gYmUgYWRkZWQgdG8gYmFzZSBvZiB0aGUgc2NzcyBuZXN0aW5nXG4gIC8vIGNvbnRleHQuXG4gIC8vIEZvciBleGFtcGxlOlxuICAvLyAubXktcm9vdCB7XG4gIC8vICAgLm15LXN1YmNsYXNzIHtcbiAgLy8gICAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1hbmltYXRpb24tbm9vcCgpO1xuICAvLyAgICB9XG4gIC8vIH1cbiAgLy8gcmVzdWx0cyBpbjpcbiAgLy8gLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlLm15LXJvb3QgLm15LXN1YmNsYXNzIHsgLi4uIH1cbiAgQGF0LXJvb3QgLl9tYXQtYW5pbWF0aW9uLW5vb3BhYmxlI3smfSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwLWdldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcC1nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcC1nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcC1nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwLWdldCgkbWF0LWdyZXksIDIwMCksXG4gIHRvb2x0aXA6IG1hcC1nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXAtZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwLWdldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbiAgdG9vbHRpcDogbWFwLWdldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG4vLyBOb3RlIHRoYXQgdGhpcyBmaWxlIGlzIGNhbGxlZCBgcHJpdmF0ZWAsIGJlY2F1c2UgdGhlIEFQSXMgaW4gaXQgYXJlbid0IHB1YmxpYyB5ZXQuXG4vLyBPbmNlIHRoZXkncmUgbWFkZSBhdmFpbGFibGUsIHRoZSBjb2RlIHNob3VsZCBiZSBtb3ZlZCBvdXQgaW50byBhbiBgaW5kZXguc2Nzc2AuXG5cbi8vIFRha2VuIGZyb20gbWF0LWRlbnNpdHkgd2l0aCBzbWFsbCBtb2RpZmljYXRpb25zIHRvIG5vdCByZWx5IG9uIHRoZSBuZXcgU2FzcyBtb2R1bGVcbi8vIHN5c3RlbSwgYW5kIHRvIHN1cHBvcnQgYXJiaXRyYXJ5IHByb3BlcnRpZXMgaW4gYSBkZW5zaXR5IGNvbmZpZ3VyYXRpb24uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9ibG9iL21hc3Rlci9wYWNrYWdlcy9tZGMtZGVuc2l0eVxuXG4kX21hdC1kZW5zaXR5LWludGVydmFsOiA0cHggIWRlZmF1bHQ7XG4kX21hdC1kZW5zaXR5LW1pbmltdW0tc2NhbGU6IG1pbmltdW0gIWRlZmF1bHQ7XG4kX21hdC1kZW5zaXR5LW1heGltdW0tc2NhbGU6IG1heGltdW0gIWRlZmF1bHQ7XG4kX21hdC1kZW5zaXR5LXN1cHBvcnRlZC1zY2FsZXM6IChkZWZhdWx0LCBtaW5pbXVtLCBtYXhpbXVtKSAhZGVmYXVsdDtcbiRfbWF0LWRlbnNpdHktZGVmYXVsdC1zY2FsZTogMCAhZGVmYXVsdDtcblxuLy8gV2hldGhlciBkZW5zaXR5IHNob3VsZCBiZSBnZW5lcmF0ZWQgYXQgcm9vdC4gVGhpcyB3aWxsIGJlIHRlbXBvcmFyaWx5IHNldCB0byBgdHJ1ZWBcbi8vIHdoZW5ldmVyIGRlbnNpdHkgc3R5bGVzIGZvciBsZWdhY3kgdGhlbWVzIGFyZSBnZW5lcmF0ZWQuXG4kbWF0LXByaXZhdGUtZGVuc2l0eS1nZW5lcmF0ZS1hdC1yb290OiBmYWxzZTtcbi8vIFdoZXRoZXIgZGVuc2l0eSBzdHlsZXMgc2hvdWxkIGJlIGdlbmVyYXRlZC4gVGhpcyB3aWxsIGJlIHRlbXBvcmFyaWx5IHNldCB0byBgZmFsc2VgIGlmXG4vLyBkdXBsaWNhdGUgZGVuc2l0eSBzdHlsZXMgZm9yIGEgbGVnYWN5IHRoZW1lIHdvdWxkIGJlIGdlbmVyYXRlZC4gRm9yIGxlZ2FjeSB0aGVtZXMsXG4vLyB3ZSBhbHdheXMgZ2VuZXJhdGUgdGhlIGRlZmF1bHQgZGVuc2l0eSAqKm9ubHkgb25jZSoqIGF0IHJvb3QuXG4kbWF0LXByaXZhdGUtZGVuc2l0eS1nZW5lcmF0ZS1zdHlsZXM6IHRydWU7XG5cbi8vIE1peGluIHRoYXQgY2FuIGJlIHVzZWQgdG8gd3JhcCBkZW5zaXR5IHN0eWxlcyBvZiBnaXZlbiBjb21wb25lbnRzLiBUaGUgbWl4aW4gd2lsbFxuLy8gbW92ZSB0aGUgZGVuc2l0eSBzdHlsZXMgdG8gcm9vdCBpZiB0aGUgYCRtYXQtcHJpdmF0ZS1kZW5zaXR5LWdlbmVyYXRlLWF0LXJvb3RgIGdsb2JhbCB2YXJpYWJsZVxuLy8gaXMgc2V0LiBJZiBgJG1hdC1wcml2YXRlLWRlbnNpdHktZ2VuZXJhdGUtc3R5bGVzYCBpcyBzZXQgdG8gYGZhbHNlYCwgZ2VuZXJhdGlvbiBvZiBkZW5zaXR5XG4vLyBzdHlsZXMgd3JhcHBlZCBpbiB0aGlzIG1peGluIGlzIHNraXBwZWQuIFRoaXMgbWl4aW4gZXhpc3RzIHRvIGltcHJvdmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbi8vIG9mIHRoZSBuZXcgdGhlbWluZyBBUEkgd2hlcmUgZGVuc2l0eSBzdHlsZXMgYXJlIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlbWVzLiBQcmV2aW91c2x5LFxuLy8gZGVuc2l0eSBzdHlsZXMgb2YgY29tcG9uZW50cyB3ZXJlIHBhcnQgb2YgdGhlaXIgYmFzZSBzdHlsZXMuIFdpdGggdGhlIG5ldyBBUEksIHRoZXkgYXJlXG4vLyBwYXJ0IG9mIHRoZSB0aGVtaW5nIHN5c3RlbS4gVGhlIGA8Li4+LXRoZW1lYCBtaXhpbnMgZ2VuZXJhdGUgZGVuc2l0eSBieSBkZWZhdWx0IHVubGVzc1xuLy8gdGhlIGRlbnNpdHkgY29uZmlndXJhdGlvbiBpcyBleHBsaWNpdGx5IHNwZWNpZmllZCBhcyBwZXIgbmV3IEFQSS4gVGhpcyBtZWFucywgdGhhdCBwcm9qZWN0c1xuLy8gdXNpbmcgYDwuLj4tdGhlbWVgIG1peGlucyBmb3Igc2VwYXJhdGUgdGhlbWVzIChsaWtlIGAuZGFyay10aGVtZWApIHdpbGwgY2F1c2UgZHVwbGljYXRlXG4vLyBkZW5zaXR5IHN0eWxlcy4gVGhpcyBpcyBicmVha2luZyBhcyBpdCBpbmNyZWFzZXMgc3BlY2lmaWNpdHkgb2YgZGVuc2l0eSBzdHlsZXMuIFRoaXMgbWl4aW5cbi8vIHByb3ZpZGVzIGFuIEFQSSB0byBjb250cm9sIGdlbmVyYXRpb24gb2YgZGVuc2l0eSBzdHlsZXMgc28gdGhhdCB3ZSBjYW4gZW5zdXJlIHRoZXkgYXJlIG9ubHlcbi8vIGNyZWF0ZWQgKm9uY2UqIGFuZCBhdCByb290LlxuQG1peGluIG1hdC1wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gIEBpZiAkbWF0LXByaXZhdGUtZGVuc2l0eS1nZW5lcmF0ZS1zdHlsZXMgYW5kICRtYXQtcHJpdmF0ZS1kZW5zaXR5LWdlbmVyYXRlLWF0LXJvb3Qge1xuICAgIEBhdC1yb290IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAkbWF0LXByaXZhdGUtZGVuc2l0eS1nZW5lcmF0ZS1zdHlsZXMge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBmdW5jdGlvbiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoJGRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgJHByb3BlcnR5LW5hbWUpIHtcbiAgQGlmICh0eXBlLW9mKCRkZW5zaXR5LXNjYWxlKSA9PSAnc3RyaW5nJyBhbmRcbiAgICAgIGluZGV4KCRsaXN0OiAkX21hdC1kZW5zaXR5LXN1cHBvcnRlZC1zY2FsZXMsICR2YWx1ZTogJGRlbnNpdHktc2NhbGUpID09IG51bGwpIHtcbiAgICBAZXJyb3IgJ21hdC1kZW5zaXR5OiBTdXBwb3J0ZWQgZGVuc2l0eSBzY2FsZXMgI3skX21hdC1kZW5zaXR5LXN1cHBvcnRlZC1zY2FsZXN9LCAnICArXG4gICAgICAnYnV0IHJlY2VpdmVkICN7JGRlbnNpdHktc2NhbGV9Lic7XG4gIH1cblxuICAkdmFsdWU6IG51bGw7XG4gICRwcm9wZXJ0eS1zY2FsZS1tYXA6IG1hcC1nZXQoJGRlbnNpdHktY29uZmlnLCAkcHJvcGVydHktbmFtZSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRwcm9wZXJ0eS1zY2FsZS1tYXAsICRkZW5zaXR5LXNjYWxlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRwcm9wZXJ0eS1zY2FsZS1tYXAsICRkZW5zaXR5LXNjYWxlKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRwcm9wZXJ0eS1zY2FsZS1tYXAsIGRlZmF1bHQpICsgJGRlbnNpdHktc2NhbGUgKiAkX21hdC1kZW5zaXR5LWludGVydmFsO1xuICB9XG5cbiAgJG1pbi12YWx1ZTogbWFwLWdldCgkcHJvcGVydHktc2NhbGUtbWFwLCAkX21hdC1kZW5zaXR5LW1pbmltdW0tc2NhbGUpO1xuICAkbWF4LXZhbHVlOiBtYXAtZ2V0KCRwcm9wZXJ0eS1zY2FsZS1tYXAsICRfbWF0LWRlbnNpdHktbWF4aW11bS1zY2FsZSk7XG5cbiAgQGlmICgkdmFsdWUgPCAkbWluLXZhbHVlIG9yICR2YWx1ZSA+ICRtYXgtdmFsdWUpIHtcbiAgICBAZXJyb3IgJ21hdC1kZW5zaXR5OiAjeyRwcm9wZXJ0eS1uYW1lfSBtdXN0IGJlIGJldHdlZW4gI3skbWluLXZhbHVlfSBhbmQgJyArXG4gICAgICAnI3skbWF4LXZhbHVlfSAoaW5jbHVzaXZlKSwgYnV0IHJlY2VpdmVkICN7JHZhbHVlfS4nO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8gV2hldGhlciBkdXBsaWNhdGlvbiB3YXJuaW5ncyBzaG91bGQgYmUgZGlzYWJsZWQuIFdhcm5pbmdzIGVuYWJsZWQgYnkgZGVmYXVsdC5cbiRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzOiBmYWxzZSAhZGVmYXVsdDtcblxuLy8gV2hldGhlciBkZW5zaXR5IHNob3VsZCBiZSBnZW5lcmF0ZWQgYnkgZGVmYXVsdC5cbiRfbWF0LXRoZW1lLWdlbmVyYXRlLWRlZmF1bHQtZGVuc2l0eTogdHJ1ZSAhZGVmYXVsdDtcblxuLy8gV2FybmluZyB0aGF0IHdpbGwgYmUgcHJpbnRlZCBpZiBkdXBsaWNhdGVkIHN0eWxlcyBhcmUgZ2VuZXJhdGVkIGJ5IGEgdGhlbWUuXG4kX21hdC10aGVtZS1kdXBsaWNhdGUtd2FybmluZzogJ1JlYWQgbW9yZSBhYm91dCBob3cgc3R5bGUgZHVwbGljYXRpb24gY2FuIGJlIGF2b2lkZWQgaW4gYSAnICtcbiAgJ2RlZGljYXRlZCBndWlkZS4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9ibG9iL21hc3Rlci9ndWlkZXMvZHVwbGljYXRlLXRoZW1pbmctc3R5bGVzLm1kJztcblxuLy8gVGhlc2UgdmFyaWFibGUgYXJlIG5vdCBpbnRlbmRlZCB0byBiZSBvdmVycmlkZGVuIGV4dGVybmFsbHkuIFRoZXkgdXNlIGAhZGVmYXVsdGAgdG9cbi8vIGF2b2lkIGJlaW5nIHJlc2V0IGV2ZXJ5IHRpbWUgdGhpcyBmaWxlIGlzIGltcG9ydGVkLlxuJF9tYXQtdGhlbWUtZW1pdHRlZC1jb2xvcjogKCkgIWRlZmF1bHQ7XG4kX21hdC10aGVtZS1lbWl0dGVkLXR5cG9ncmFwaHk6ICgpICFkZWZhdWx0O1xuJF9tYXQtdGhlbWUtZW1pdHRlZC1kZW5zaXR5OiAoKSAhZGVmYXVsdDtcblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJHBhbGV0dGVcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGJhc2UtcGFsZXR0ZVxuLy8gQHBhcmFtICRkZWZhdWx0XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbi8vIEBwYXJhbSAkZGFya2VyXG4vLyBAcGFyYW0gJHRleHRcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDAsICR0ZXh0OiAkZGVmYXVsdCkge1xuICAkcmVzdWx0OiBtYXAtbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcbiAgICB0ZXh0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICR0ZXh0KSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcC1tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJHBhbGV0dGUgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cbi8vIFZhbGlkYXRlcyB0aGUgc3BlY2lmaWVkIHRoZW1lIGJ5IGVuc3VyaW5nIHRoYXQgdGhlIG9wdGlvbmFsIGNvbG9yIGNvbmZpZyBkZWZpbmVzXG4vLyBhIHByaW1hcnksIGFjY2VudCBhbmQgd2FybiBwYWxldHRlLiBSZXR1cm5zIHRoZSB0aGVtZSBpZiBubyBmYWlsdXJlcyB3ZXJlIGZvdW5kLlxuQGZ1bmN0aW9uIF9tYXQtdmFsaWRhdGUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpZiBtYXAtZ2V0KCR0aGVtZSwgY29sb3IpIHtcbiAgICAkY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBjb2xvcik7XG4gICAgQGlmIG5vdCBtYXAtZ2V0KCRjb2xvciwgcHJpbWFyeSkge1xuICAgICAgQGVycm9yICdUaGVtZSBkb2VzIG5vdCBkZWZpbmUgYSB2YWxpZCBcInByaW1hcnlcIiBwYWxldHRlLic7XG4gICAgfVxuICAgIEBlbHNlIGlmIG5vdCBtYXAtZ2V0KCRjb2xvciwgYWNjZW50KSB7XG4gICAgICBAZXJyb3IgJ1RoZW1lIGRvZXMgbm90IGRlZmluZSBhIHZhbGlkIFwiYWNjZW50XCIgcGFsZXR0ZS4nO1xuICAgIH1cbiAgICBAZWxzZSBpZiBub3QgbWFwLWdldCgkY29sb3IsIHdhcm4pIHtcbiAgICAgIEBlcnJvciAnVGhlbWUgZG9lcyBub3QgZGVmaW5lIGEgdmFsaWQgXCJ3YXJuXCIgcGFsZXR0ZS4nO1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICR0aGVtZTtcbn1cblxuLy8gQ3JlYXRlcyBhIGxpZ2h0LXRoZW1lZCBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gdGhlIHNwZWNpZmllZFxuLy8gcHJpbWFyeSwgYWNjZW50IGFuZCB3YXJuIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIF9tYXQtY3JlYXRlLWxpZ2h0LWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG51bGwpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46IGlmKCR3YXJuICE9IG51bGwsICR3YXJuLCBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cbi8vIENyZWF0ZXMgYSBkYXJrLXRoZW1lZCBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gdGhlIHNwZWNpZmllZFxuLy8gcHJpbWFyeSwgYWNjZW50IGFuZCB3YXJuIHBhbGV0dGVzLlxuQGZ1bmN0aW9uIF9tYXQtY3JlYXRlLWRhcmstY29sb3ItY29uZmlnKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbnVsbCkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogaWYoJHdhcm4gIT0gbnVsbCwgJHdhcm4sIG1hdC1wYWxldHRlKCRtYXQtcmVkKSksXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuLy8gVE9ETzogUmVtb3ZlIGxlZ2FjeSBBUEkgYW5kIHJlbmFtZSBgJHByaW1hcnlgIHRvIGAkY29uZmlnYC4gQ3VycmVudGx5IGl0IGNhbm5vdCBiZSByZW5hbWVkXG4vLyBhcyBpdCB3b3VsZCBicmVhayBleGlzdGluZyBhcHBzIHRoYXQgc2V0IHRoZSBwYXJhbWV0ZXIgYnkgbmFtZS5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQ6IG51bGwsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgdGhlIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy4gQ29uc3VtZXJzXG4gIC8vIGNhbiBjb25zdHJ1Y3Qgc3VjaCBhbiBvYmplY3QgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBvciBieSBidWlsZGluZyB0aGUgb2JqZWN0IG1hbnVhbGx5LlxuICAvLyBUaGVyZSBhcmUgdHdvIHBvc3NpYmxlIHdheXMgdG8gaW52b2tlIHRoaXMgZnVuY3Rpb24gaW4gb3JkZXIgdG8gY3JlYXRlIHN1Y2ggYW4gb2JqZWN0OlxuICAvL1xuICAvLyAgICAoMSkgUGFzc2luZyBpbiBhIG1hcCB0aGF0IGhvbGRzIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zIGZvciBpbmRpdmlkdWFsIHBhcnRzIG9mIHRoZVxuICAvLyAgICAgICAgdGhlbWluZyBzeXN0ZW0uIEZvciBgY29sb3JgIGNvbmZpZ3VyYXRpb25zLCB0aGUgZnVuY3Rpb24gb25seSBleHBlY3RzIHRoZSBwYWxldHRlc1xuICAvLyAgICAgICAgZm9yIGBwcmltYXJ5YCBhbmQgYGFjY2VudGAgKGFuZCBvcHRpb25hbGx5IGB3YXJuYCkuIFRoZSBmdW5jdGlvbiB3aWxsIGV4cGFuZCB0aGVcbiAgLy8gICAgICAgIHNob3J0aGFuZCBpbnRvIGFuIGFjdHVhbCBjb25maWd1cmF0aW9uIHRoYXQgY2FuIGJlIGNvbnN1bWVkIGluIGAtY29sb3JgIG1peGlucy5cbiAgLy8gICAgKDIpIExlZ2FjeSBwYXR0ZXJuOiBQYXNzaW5nIGluIHRoZSBwYWxldHRlcyBhcyBwYXJhbWV0ZXJzLiBUaGlzIGlzIG5vdCBhcyBmbGV4aWJsZVxuICAvLyAgICAgICAgYXMgcGFzc2luZyBpbiBhIGNvbmZpZ3VyYXRpb24gbWFwIGJlY2F1c2Ugb25seSB0aGUgYGNvbG9yYCBzeXN0ZW0gY2FuIGJlIGNvbmZpZ3VyZWQuXG4gIC8vXG4gIC8vIElmIHRoZSBsZWdhY3kgcGF0dGVybiBpcyB1c2VkLCB3ZSBnZW5lcmF0ZSBhIGNvbnRhaW5lciBvYmplY3Qgb25seSB3aXRoIGEgbGlnaHQtdGhlbWVkXG4gIC8vIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBgY29sb3JgIHRoZW1pbmcgcGFydC5cbiAgQGlmICRhY2NlbnQgIT0gbnVsbCB7XG4gICAgQHJldHVybiBtYXQtcHJpdmF0ZS1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoX21hdC12YWxpZGF0ZS10aGVtZSgoXG4gICAgICBfaXMtbGVnYWN5LXRoZW1lOiB0cnVlLFxuICAgICAgY29sb3I6IF9tYXQtY3JlYXRlLWxpZ2h0LWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm4pLFxuICAgICkpKTtcbiAgfVxuICAvLyBJZiB0aGUgbWFwIHBhdHRlcm4gaXMgdXNlZCAoMSksIHdlIGp1c3QgcGFzcy10aHJvdWdoIHRoZSBjb25maWd1cmF0aW9ucyBmb3IgaW5kaXZpZHVhbFxuICAvLyBwYXJ0cyBvZiB0aGUgdGhlbWluZyBzeXN0ZW0sIGJ1dCB1cGRhdGUgdGhlIGBjb2xvcmAgY29uZmlndXJhdGlvbiBpZiBzZXQuIEFzIGV4cGxhaW5lZFxuICAvLyBhYm92ZSwgdGhlIGNvbG9yIHNob3J0aGFuZCB3aWxsIGJlIGV4cGFuZGVkIHRvIGFuIGFjdHVhbCBsaWdodC10aGVtZWQgY29sb3IgY29uZmlndXJhdGlvbi5cbiAgJHJlc3VsdDogJHByaW1hcnk7XG4gIEBpZiBtYXAtZ2V0KCRwcmltYXJ5LCBjb2xvcikge1xuICAgICRjb2xvci1zZXR0aW5nczogbWFwLWdldCgkcHJpbWFyeSwgY29sb3IpO1xuICAgICRwcmltYXJ5OiBtYXAtZ2V0KCRjb2xvci1zZXR0aW5ncywgcHJpbWFyeSk7XG4gICAgJGFjY2VudDogbWFwLWdldCgkY29sb3Itc2V0dGluZ3MsIGFjY2VudCk7XG4gICAgJHdhcm46IG1hcC1nZXQoJGNvbG9yLXNldHRpbmdzLCB3YXJuKTtcbiAgICAkcmVzdWx0OiBtYXAtbWVyZ2UoJHJlc3VsdCwgKGNvbG9yOiBfbWF0LWNyZWF0ZS1saWdodC1jb2xvci1jb25maWcoJHByaW1hcnksICRhY2NlbnQsICR3YXJuKSkpO1xuICB9XG4gIEByZXR1cm4gbWF0LXByaXZhdGUtY3JlYXRlLWJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LXRoZW1lKF9tYXQtdmFsaWRhdGUtdGhlbWUoJHJlc3VsdCkpO1xufVxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbi8vIFRPRE86IFJlbW92ZSBsZWdhY3kgQVBJIGFuZCByZW5hbWUgYCRwcmltYXJ5YCB0byBgJGNvbmZpZ2AuIEN1cnJlbnRseSBpdCBjYW5ub3QgYmUgcmVuYW1lZFxuLy8gYXMgaXQgd291bGQgYnJlYWsgZXhpc3RpbmcgYXBwcyB0aGF0IHNldCB0aGUgcGFyYW1ldGVyIGJ5IG5hbWUuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQ6IG51bGwsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgdGhlIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy4gQ29uc3VtZXJzXG4gIC8vIGNhbiBjb25zdHJ1Y3Qgc3VjaCBhbiBvYmplY3QgYnkgY2FsbGluZyB0aGlzIGZ1bmN0aW9uLCBvciBieSBidWlsZGluZyB0aGUgb2JqZWN0IG1hbnVhbGx5LlxuICAvLyBUaGVyZSBhcmUgdHdvIHBvc3NpYmxlIHdheXMgdG8gaW52b2tlIHRoaXMgZnVuY3Rpb24gaW4gb3JkZXIgdG8gY3JlYXRlIHN1Y2ggYW4gb2JqZWN0OlxuICAvL1xuICAvLyAgICAoMSkgUGFzc2luZyBpbiBhIG1hcCB0aGF0IGhvbGRzIG9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zIGZvciBpbmRpdmlkdWFsIHBhcnRzIG9mIHRoZVxuICAvLyAgICAgICAgdGhlbWluZyBzeXN0ZW0uIEZvciBgY29sb3JgIGNvbmZpZ3VyYXRpb25zLCB0aGUgZnVuY3Rpb24gb25seSBleHBlY3RzIHRoZSBwYWxldHRlc1xuICAvLyAgICAgICAgZm9yIGBwcmltYXJ5YCBhbmQgYGFjY2VudGAgKGFuZCBvcHRpb25hbGx5IGB3YXJuYCkuIFRoZSBmdW5jdGlvbiB3aWxsIGV4cGFuZCB0aGVcbiAgLy8gICAgICAgIHNob3J0aGFuZCBpbnRvIGFuIGFjdHVhbCBjb25maWd1cmF0aW9uIHRoYXQgY2FuIGJlIGNvbnN1bWVkIGluIGAtY29sb3JgIG1peGlucy5cbiAgLy8gICAgKDIpIExlZ2FjeSBwYXR0ZXJuOiBQYXNzaW5nIGluIHRoZSBwYWxldHRlcyBhcyBwYXJhbWV0ZXJzLiBUaGlzIGlzIG5vdCBhcyBmbGV4aWJsZVxuICAvLyAgICAgICAgYXMgcGFzc2luZyBpbiBhIGNvbmZpZ3VyYXRpb24gbWFwIGJlY2F1c2Ugb25seSB0aGUgYGNvbG9yYCBzeXN0ZW0gY2FuIGJlIGNvbmZpZ3VyZWQuXG4gIC8vXG4gIC8vIElmIHRoZSBsZWdhY3kgcGF0dGVybiBpcyB1c2VkLCB3ZSBnZW5lcmF0ZSBhIGNvbnRhaW5lciBvYmplY3Qgb25seSB3aXRoIGEgZGFyay10aGVtZWRcbiAgLy8gY29uZmlndXJhdGlvbiBmb3IgdGhlIGBjb2xvcmAgdGhlbWluZyBwYXJ0LlxuICBAaWYgJGFjY2VudCAhPSBudWxsIHtcbiAgICBAcmV0dXJuIG1hdC1wcml2YXRlLWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZShfbWF0LXZhbGlkYXRlLXRoZW1lKChcbiAgICAgIF9pcy1sZWdhY3ktdGhlbWU6IHRydWUsXG4gICAgICBjb2xvcjogX21hdC1jcmVhdGUtZGFyay1jb2xvci1jb25maWcoJHByaW1hcnksICRhY2NlbnQsICR3YXJuKSxcbiAgICApKSk7XG4gIH1cbiAgLy8gSWYgdGhlIG1hcCBwYXR0ZXJuIGlzIHVzZWQgKDEpLCB3ZSBqdXN0IHBhc3MtdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbnMgZm9yIGluZGl2aWR1YWxcbiAgLy8gcGFydHMgb2YgdGhlIHRoZW1pbmcgc3lzdGVtLCBidXQgdXBkYXRlIHRoZSBgY29sb3JgIGNvbmZpZ3VyYXRpb24gaWYgc2V0LiBBcyBleHBsYWluZWRcbiAgLy8gYWJvdmUsIHRoZSBjb2xvciBzaG9ydGhhbmQgd2lsbCBiZSBleHBhbmRlZCB0byBhbiBhY3R1YWwgZGFyay10aGVtZWQgY29sb3IgY29uZmlndXJhdGlvbi5cbiAgJHJlc3VsdDogJHByaW1hcnk7XG4gIEBpZiBtYXAtZ2V0KCRwcmltYXJ5LCBjb2xvcikge1xuICAgICRjb2xvci1zZXR0aW5nczogbWFwLWdldCgkcHJpbWFyeSwgY29sb3IpO1xuICAgICRwcmltYXJ5OiBtYXAtZ2V0KCRjb2xvci1zZXR0aW5ncywgcHJpbWFyeSk7XG4gICAgJGFjY2VudDogbWFwLWdldCgkY29sb3Itc2V0dGluZ3MsIGFjY2VudCk7XG4gICAgJHdhcm46IG1hcC1nZXQoJGNvbG9yLXNldHRpbmdzLCB3YXJuKTtcbiAgICAkcmVzdWx0OiBtYXAtbWVyZ2UoJHJlc3VsdCwgKGNvbG9yOiBfbWF0LWNyZWF0ZS1kYXJrLWNvbG9yLWNvbmZpZygkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm4pKSk7XG4gIH1cbiAgQHJldHVybiBtYXQtcHJpdmF0ZS1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoX21hdC12YWxpZGF0ZS10aGVtZSgkcmVzdWx0KSk7XG59XG5cbi8vLyBHZXRzIHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gdGhlIGdpdmVuIHRoZW1lIG9yIGNvbmZpZ3VyYXRpb24uXG5AZnVuY3Rpb24gbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lLCAkZGVmYXVsdDogbnVsbCkge1xuICAvLyBJZiBhIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gcGFzc2VkLCByZXR1cm4gdGhlIGNvbmZpZyBkaXJlY3RseS5cbiAgQGlmIG5vdCBtYXQtcHJpdmF0ZS1pcy10aGVtZS1vYmplY3QoJHRoZW1lKSB7XG4gICAgQHJldHVybiAkdGhlbWU7XG4gIH1cbiAgLy8gSWYgdGhlIHRoZW1lIGhhcyBiZWVuIGNvbnN0cnVjdGVkIHRocm91Z2ggdGhlIGxlZ2FjeSB0aGVtaW5nIEFQSSwgd2UgdXNlIHRoZSB0aGVtZSBvYmplY3RcbiAgLy8gYXMgY29sb3IgY29uZmlndXJhdGlvbiBpbnN0ZWFkIG9mIHRoZSBkZWRpY2F0ZWQgYGNvbG9yYCBwcm9wZXJ0eS4gV2UgZG8gdGhpcyBiZWNhdXNlIGZvclxuICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgd2UgY29waWVkIHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGZyb20gYCR0aGVtZS5jb2xvcmAgdG8gYCR0aGVtZWAuXG4gIC8vIEhlbmNlIGRldmVsb3BlcnMgY291bGQgY3VzdG9taXplIHRoZSBjb2xvcnMgYXQgdG9wLWxldmVsIGFuZCB3YW50IHRvIHJlc3BlY3QgdGhlc2UgY2hhbmdlc1xuICAvLyBUT0RPOiBSZW1vdmUgd2hlbiBsZWdhY3kgdGhlbWluZyBBUEkgaXMgcmVtb3ZlZC5cbiAgQGlmIG1hdC1wcml2YXRlLWlzLWxlZ2FjeS1jb25zdHJ1Y3RlZC10aGVtZSgkdGhlbWUpIHtcbiAgICBAcmV0dXJuICR0aGVtZTtcbiAgfVxuICBAaWYgbWFwLWhhcy1rZXkoJHRoZW1lLCBjb2xvcikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkdGhlbWUsIGNvbG9yKTtcbiAgfVxuICBAcmV0dXJuICRkZWZhdWx0O1xufVxuXG4vLy8gR2V0cyB0aGUgZGVuc2l0eSBjb25maWd1cmF0aW9uIGZyb20gdGhlIGdpdmVuIHRoZW1lIG9yIGNvbmZpZ3VyYXRpb24uXG5AZnVuY3Rpb24gbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUtb3ItY29uZmlnLCAkZGVmYXVsdDogMCkge1xuICAvLyBJZiBhIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gcGFzc2VkLCByZXR1cm4gdGhlIGNvbmZpZyBkaXJlY3RseS5cbiAgQGlmIG5vdCBtYXQtcHJpdmF0ZS1pcy10aGVtZS1vYmplY3QoJHRoZW1lLW9yLWNvbmZpZykge1xuICAgIEByZXR1cm4gJHRoZW1lLW9yLWNvbmZpZztcbiAgfVxuICAvLyBJbiBjYXNlIGEgdGhlbWUgaGFzIGJlZW4gcGFzc2VkLCBleHRyYWN0IHRoZSBjb25maWd1cmF0aW9uIGlmIHByZXNlbnQsXG4gIC8vIG9yIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBkZW5zaXR5IGNvbmZpZy5cbiAgQGlmIG1hcC1oYXMta2V5KCR0aGVtZS1vci1jb25maWcsIGRlbnNpdHkpIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJHRoZW1lLW9yLWNvbmZpZywgZGVuc2l0eSk7XG4gIH1cbiAgQHJldHVybiAkZGVmYXVsdDtcbn1cblxuLy8vIEdldHMgdGhlIHR5cG9ncmFwaHkgY29uZmlndXJhdGlvbiBmcm9tIHRoZSBnaXZlbiB0aGVtZSBvciBjb25maWd1cmF0aW9uLlxuLy8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdHlwb2dyYXBoeSBpcyBub3QgaW5jbHVkZWQgYnkgZGVmYXVsdC5cbkBmdW5jdGlvbiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZS1vci1jb25maWcsICRkZWZhdWx0OiBudWxsKSB7XG4gIC8vIElmIGEgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBwYXNzZWQsIHJldHVybiB0aGUgY29uZmlnIGRpcmVjdGx5LlxuICBAaWYgbm90IG1hdC1wcml2YXRlLWlzLXRoZW1lLW9iamVjdCgkdGhlbWUtb3ItY29uZmlnKSB7XG4gICAgQHJldHVybiAkdGhlbWUtb3ItY29uZmlnO1xuICB9XG4gIC8vIEluIGNhc2UgYSB0aGVtZSBoYXMgYmVlbiBwYXNzZWQsIGV4dHJhY3QgdGhlIGNvbmZpZ3VyYXRpb24gaWYgcHJlc2VudCxcbiAgLy8gb3IgZmFsbCBiYWNrIHRvIHRoZSBkZWZhdWx0IHR5cG9ncmFwaHkgY29uZmlnLlxuICBAaWYgKG1hcC1oYXMta2V5KCR0aGVtZS1vci1jb25maWcsIHR5cG9ncmFwaHkpKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCR0aGVtZS1vci1jb25maWcsIHR5cG9ncmFwaHkpO1xuICB9XG4gIEByZXR1cm4gJGRlZmF1bHQ7XG59XG5cblxuLy9cbi8vIFByaXZhdGUgQVBJc1xuLy9cblxuLy8gQ2hlY2tzIGlmIGNvbmZpZ3VyYXRpb25zIHRoYXQgaGF2ZSBiZWVuIGRlY2xhcmVkIGluIHRoZSBnaXZlbiB0aGVtZSBoYXZlIGJlZW4gZ2VuZXJhdGVkXG4vLyBiZWZvcmUuIElmIHNvLCB3YXJuaW5ncyB3aWxsIGJlIHJlcG9ydGVkLiBUaGlzIHNob3VsZCBub3RpZnkgZGV2ZWxvcGVycyBpbiBjYXNlIGR1cGxpY2F0ZVxuLy8gc3R5bGVzIGFyZSBhY2NpZGVudGFsbHkgZ2VuZXJhdGVkIGR1ZSB0byB3cm9uZyB1c2FnZSBvZiB0aGUgYWxsLXRoZW1lIG1peGlucy5cbi8vXG4vLyBBZGRpdGlvbmFsbHksIHRoaXMgbWl4aW4gY29udHJvbHMgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoZSBkZW5zaXR5IGNvbmZpZ3VyYXRpb24uIEJ5XG4vLyBkZWZhdWx0LCBkZW5zaXR5IHN0eWxlcyBhcmUgZ2VuZXJhdGVkIGF0IHNjYWxlIHplcm8uIElmIHRoZSBzYW1lIGRlbnNpdHkgc3R5bGVzIHdvdWxkIGJlXG4vLyBnZW5lcmF0ZWQgYSBzZWNvbmQgdGltZSB0aG91Z2gsIHRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgY2hhbmdlIHRvIGF2b2lkIGR1cGxpY2F0ZSBzdHlsZXMuXG4vL1xuLy8gVGhlIG1peGluIGtlZXBzIHRyYWNrIG9mIGFsbCBjb25maWd1cmF0aW9ucyBpbiBhIGxpc3QgdGhhdCBpcyBzY29wZWQgdG8gdGhlIHNwZWNpZmllZFxuLy8gaWQuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYSBnaXZlbiB0aGVtZSBjYW4gYmUgcGFzc2VkIHRvIG11bHRpcGxlIGRpc2pvaW50IHRoZW1lIG1peGluc1xuLy8gKGUuZy4gYGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWVgIGFuZCBgYW5ndWxhci1tYXRlcmlhbC1tZGMtdGhlbWVgKSB3aXRob3V0IGNhdXNpbmcgYW55XG4vLyBzdHlsZSBkdXBsaWNhdGlvbi5cbkBtaXhpbiBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvci1jb25maWcsICRpZCkge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICRjb2xvci1jb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICRkZW5zaXR5LWNvbmZpZzogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAkdHlwb2dyYXBoeS1jb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcbiAgLy8gTGlzdHMgb2YgcHJldmlvdXMgYGNvbG9yYCwgYGRlbnNpdHlgIGFuZCBgdHlwb2dyYXBoeWAgY29uZmlndXJhdGlvbnMuXG4gICRwcmV2aW91cy1jb2xvcjogbWFwLWdldCgkX21hdC10aGVtZS1lbWl0dGVkLWNvbG9yLCAkaWQpIG9yICgpO1xuICAkcHJldmlvdXMtdHlwb2dyYXBoeTogbWFwLWdldCgkX21hdC10aGVtZS1lbWl0dGVkLXR5cG9ncmFwaHksICRpZCkgb3IgKCk7XG4gICRwcmV2aW91cy1kZW5zaXR5OiBtYXAtZ2V0KCRfbWF0LXRoZW1lLWVtaXR0ZWQtZGVuc2l0eSwgJGlkKSBvciAoKTtcbiAgLy8gV2hldGhlciBkdXBsaWNhdGUgbGVnYWN5IGRlbnNpdHkgc3R5bGVzIHdvdWxkIGJlIGdlbmVyYXRlZC5cbiAgJGR1cGxpY2F0ZS1sZWdhY3ktZGVuc2l0eTogZmFsc2U7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gaGFzIGJlZW4gZ2VuZXJhdGVkIGJlZm9yZS5cbiAgQGlmICRjb2xvci1jb25maWcgIT0gbnVsbCB7XG4gICAgQGlmIGluZGV4KCRwcmV2aW91cy1jb2xvciwgJGNvbG9yLWNvbmZpZykgIT0gbnVsbCBhbmRcbiAgICAgICAgbm90ICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzIHtcbiAgICAgIEB3YXJuICdUaGUgc2FtZSBjb2xvciBzdHlsZXMgYXJlIGdlbmVyYXRlZCBtdWx0aXBsZSB0aW1lcy4gJyArXG4gICAgICAgICAgJF9tYXQtdGhlbWUtZHVwbGljYXRlLXdhcm5pbmc7XG4gICAgfVxuICAgICRwcmV2aW91cy1jb2xvcjogYXBwZW5kKCRwcmV2aW91cy1jb2xvciwgJGNvbG9yLWNvbmZpZyk7XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgdHlwb2dyYXBoeSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGdlbmVyYXRlZCBiZWZvcmUuXG4gIEBpZiAkdHlwb2dyYXBoeS1jb25maWcgIT0gbnVsbCB7XG4gICAgQGlmIGluZGV4KCRwcmV2aW91cy10eXBvZ3JhcGh5LCAkdHlwb2dyYXBoeS1jb25maWcpICE9IG51bGwgYW5kXG4gICAgICAgIG5vdCAkbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5ncyB7XG4gICAgICBAd2FybiAnVGhlIHNhbWUgdHlwb2dyYXBoeSBzdHlsZXMgYXJlIGdlbmVyYXRlZCBtdWx0aXBsZSB0aW1lcy4gJyArXG4gICAgICAgICAgJF9tYXQtdGhlbWUtZHVwbGljYXRlLXdhcm5pbmc7XG4gICAgfVxuICAgICRwcmV2aW91cy10eXBvZ3JhcGh5OiBhcHBlbmQoJHByZXZpb3VzLXR5cG9ncmFwaHksICR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIH1cblxuICAvLyBDaGVjayBpZiB0aGUgZGVuc2l0eSBjb25maWd1cmF0aW9uIGhhcyBiZWVuIGdlbmVyYXRlZCBiZWZvcmUuXG4gIEBpZiAkZGVuc2l0eS1jb25maWcgIT0gbnVsbCB7XG4gICAgQGlmIGluZGV4KCRwcmV2aW91cy1kZW5zaXR5LCAkZGVuc2l0eS1jb25maWcpICE9IG51bGwge1xuICAgICAgLy8gT25seSByZXBvcnQgYSB3YXJuaW5nIGlmIGRlbnNpdHkgc3R5bGVzIHdvdWxkIGJlIGR1cGxpY2F0ZWQgZm9yIG5vbi1sZWdhY3kgdGhlbWVcbiAgICAgIC8vIGRlZmluaXRpb25zLiBGb3IgbGVnYWN5IHRoZW1lcywgd2UgaGF2ZSBjb21wYXRpYmlsaXR5IGxvZ2ljIHRoYXQgYXZvaWRzIGR1cGxpY2F0aW9uXG4gICAgICAvLyBvZiBkZWZhdWx0IGRlbnNpdHkgc3R5bGVzLiBXZSBkb24ndCB3YW50IHRvIHJlcG9ydCBhIHdhcm5pbmcgaW4gdGhvc2UgY2FzZXMuXG4gICAgICBAaWYgbWF0LXByaXZhdGUtaXMtbGVnYWN5LWNvbnN0cnVjdGVkLXRoZW1lKCR0aGVtZSkge1xuICAgICAgICAkZHVwbGljYXRlLWxlZ2FjeS1kZW5zaXR5OiB0cnVlO1xuICAgICAgfVxuICAgICAgQGVsc2UgaWYgbm90ICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzIHtcbiAgICAgICAgQHdhcm4gJ1RoZSBzYW1lIGRlbnNpdHkgc3R5bGVzIGFyZSBnZW5lcmF0ZWQgbXVsdGlwbGUgdGltZXMuICcgK1xuICAgICAgICAgICAkX21hdC10aGVtZS1kdXBsaWNhdGUtd2FybmluZztcbiAgICAgIH1cbiAgICB9XG4gICAgJHByZXZpb3VzLWRlbnNpdHk6IGFwcGVuZCgkcHJldmlvdXMtZGVuc2l0eSwgJGRlbnNpdHktY29uZmlnKTtcbiAgfVxuXG4gICRfbWF0LXRoZW1lLWVtaXR0ZWQtY29sb3I6IG1hcC1tZXJnZShcbiAgICAgICRfbWF0LXRoZW1lLWVtaXR0ZWQtY29sb3IsICgkaWQ6ICRwcmV2aW91cy1jb2xvcikpICFnbG9iYWw7XG4gICRfbWF0LXRoZW1lLWVtaXR0ZWQtZGVuc2l0eTogbWFwLW1lcmdlKFxuICAgICAgJF9tYXQtdGhlbWUtZW1pdHRlZC1kZW5zaXR5LCAoJGlkOiAkcHJldmlvdXMtZGVuc2l0eSkpICFnbG9iYWw7XG4gICRfbWF0LXRoZW1lLWVtaXR0ZWQtdHlwb2dyYXBoeTogbWFwLW1lcmdlKFxuICAgICAgJF9tYXQtdGhlbWUtZW1pdHRlZC10eXBvZ3JhcGh5LCAoJGlkOiAkcHJldmlvdXMtdHlwb2dyYXBoeSkpICFnbG9iYWw7XG5cbiAgLy8gT3B0aW9uYWxseSwgY29uc3VtZXJzIG9mIHRoaXMgbWl4aW4gY2FuIHdyYXAgY29udGVudHMgaW5zaWRlIHNvIHRoYXQgbmVzdGVkXG4gIC8vIGR1cGxpY2F0ZSBzdHlsZSBjaGVja3MgZG8gbm90IHJlcG9ydCBhbm90aGVyIHdhcm5pbmcuIGUuZy4gaWYgZGV2ZWxvcGVycyBpbmNsdWRlXG4gIC8vIHRoZSBgYW5ndWxhci1tYXRlcmlhbC10aGVtZWAgbWl4aW4gdHdpY2UsIG9ubHkgdGhlIHRvcC1sZXZlbCBkdXBsaWNhdGUgc3R5bGVzIGNoZWNrXG4gIC8vIHNob3VsZCByZXBvcnQgYSB3YXJuaW5nLiBOb3QgYWxsIGluZGl2aWR1YWwgY29tcG9uZW50cyBzaG91bGQgcmVwb3J0IGEgd2FybmluZyB0b28uXG4gICRvcmlnLW1hdC10aGVtZS1pZ25vcmUtZHVwbGljYXRpb24td2FybmluZ3M6ICRtYXQtdGhlbWUtaWdub3JlLWR1cGxpY2F0aW9uLXdhcm5pbmdzO1xuICAkbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5nczogdHJ1ZSAhZ2xvYmFsO1xuXG4gIC8vIElmIGR1cGxpY2F0ZSBkZWZhdWx0IGRlbnNpdHkgc3R5bGVzIHdvdWxkIGJlIGdlbmVyYXRlZCBmb3IgYSBsZWdhY3kgY29uc3RydWN0ZWQgdGhlbWUsXG4gIC8vIHdlIGFkanVzdCB0aGUgZGVuc2l0eSBnZW5lcmF0aW9uIHNvIHRoYXQgbm8gZGVuc2l0eSBzdHlsZXMgYXJlIGdlbmVyYXRlZCBieSBkZWZhdWx0LlxuICAvLyBJZiBubyBkZWZhdWx0IGRlbnNpdHkgc3R5bGVzIGhhdmUgYmVlbiBnZW5lcmF0ZWQgeWV0LCB3ZSBlbnN1cmUgdGhhdCB0aGUgc3R5bGVzXG4gIC8vIGFyZSBnZW5lcmF0ZWQgYXQgcm9vdC4gRm9yIGxlZ2FjeSB0aGVtZXMgb3VyIGdvYWwgaXMgdG8gZ2VuZXJhdGUgZGVmYXVsdCBkZW5zaXR5XG4gIC8vIHN0eWxlcyAqKm9uY2UqKiBhbmQgYXQgcm9vdC4gVGhpcyBtYXRjaGVzIHRoZSBvbGQgYmVoYXZpb3Igd2hlcmUgZGVuc2l0eSBzdHlsZXMgd2VyZVxuICAvLyBwYXJ0IG9mIHRoZSBiYXNlIGNvbXBvbmVudCBzdHlsZXMgKHRoYXQgZGlkIG5vdCB1c2UgdmlldyBlbmNhcHN1bGF0aW9uKS5cbiAgLy8gVE9ETzogUmVtb3ZlIHRoaXMgY29tcGF0aWJpbGl0eSBsb2dpYyB3aGVuIHRoZSBsZWdhY3kgdGhlbWluZyBBUEkgaXMgcmVtb3ZlZC5cbiAgJG1hdC1wcml2YXRlLWRlbnNpdHktZ2VuZXJhdGUtYXQtcm9vdDogbWF0LXByaXZhdGUtaXMtbGVnYWN5LWNvbnN0cnVjdGVkLXRoZW1lKCR0aGVtZSkgIWdsb2JhbDtcbiAgJG1hdC1wcml2YXRlLWRlbnNpdHktZ2VuZXJhdGUtc3R5bGVzOiBub3QgJGR1cGxpY2F0ZS1sZWdhY3ktZGVuc2l0eSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuICAkbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5nczogJG9yaWctbWF0LXRoZW1lLWlnbm9yZS1kdXBsaWNhdGlvbi13YXJuaW5ncyAhZ2xvYmFsO1xuXG4gICRtYXQtcHJpdmF0ZS1kZW5zaXR5LWdlbmVyYXRlLWF0LXJvb3Q6IGZhbHNlICFnbG9iYWw7XG4gICRtYXQtcHJpdmF0ZS1kZW5zaXR5LWdlbmVyYXRlLXN0eWxlczogdHJ1ZSAhZ2xvYmFsO1xufVxuXG4vLyBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgcmVzb2x2ZXMgdG8gYSB0aGVtZSBvYmplY3QuIFRoZW1lIG9iamVjdHMgYXJlIGFsd2F5c1xuLy8gb2YgdHlwZSBgbWFwYCBhbmQgY2FuIG9wdGlvbmFsbHkgb25seSBzcGVjaWZ5IGBjb2xvcmAsIGBkZW5zaXR5YCBvciBgdHlwb2dyYXBoeWAuXG5AZnVuY3Rpb24gbWF0LXByaXZhdGUtaXMtdGhlbWUtb2JqZWN0KCR2YWx1ZSkge1xuICBAcmV0dXJuIHR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBhbmQgKFxuICAgIG1hcC1oYXMta2V5KCR2YWx1ZSwgY29sb3IpIG9yXG4gICAgbWFwLWhhcy1rZXkoJHZhbHVlLCBkZW5zaXR5KSBvclxuICAgIG1hcC1oYXMta2V5KCR2YWx1ZSwgdHlwb2dyYXBoeSkgb3JcbiAgICBsZW5ndGgoJHZhbHVlKSA9PSAwXG4gICk7XG59XG5cbi8vIENoZWNrcyB3aGV0aGVyIGEgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZHMgdG8gYSBsZWdhY3kgY29uc3RydWN0ZWQgdGhlbWUuXG5AZnVuY3Rpb24gbWF0LXByaXZhdGUtaXMtbGVnYWN5LWNvbnN0cnVjdGVkLXRoZW1lKCR2YWx1ZSkge1xuICBAcmV0dXJuIHR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBhbmQgbWFwLWdldCgkdmFsdWUsICdfaXMtbGVnYWN5LXRoZW1lJyk7XG59XG5cbi8vIENyZWF0ZXMgYSBiYWNrd2FyZHMgY29tcGF0aWJsZSB0aGVtZS4gUHJldmlvdXNseSBpbiBBbmd1bGFyIE1hdGVyaWFsLCB0aGVtZSBvYmplY3RzXG4vLyBjb250YWluZWQgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gZGlyZWN0bHkuIFdpdGggdGhlIHJlY2VudCByZWZhY3RvcmluZyBvZiB0aGUgdGhlbWluZ1xuLy8gc3lzdGVtIHRvIGFsbG93IGZvciBkZW5zaXR5IGFuZCB0eXBvZ3JhcGh5IGNvbmZpZ3VyYXRpb25zLCB0aGlzIGlzIG5vIGxvbmdlciB0aGUgY2FzZS5cbi8vIFRvIGVuc3VyZSB0aGF0IGNvbnN0cnVjdGVkIHRoZW1lcyB3aGljaCB3aWxsIGJlIHBhc3NlZCB0byBjdXN0b20gdGhlbWUgbWl4aW5zIGRvIG5vdCBicmVhayxcbi8vIHdlIGNvcHkgdGhlIGNvbG9yIGNvbmZpZ3VyYXRpb24gYW5kIHB1dCBpdHMgcHJvcGVydGllcyBhdCB0aGUgdG9wLWxldmVsIG9mIHRoZSB0aGVtZSBvYmplY3QuXG4vLyBIZXJlIGlzIGFuIGV4YW1wbGUgb2YgYSBwYXR0ZXJuIHRoYXQgc2hvdWxkIHN0aWxsIHdvcmsgdW50aWwgaXQncyBvZmZpY2lhbGx5IG1hcmtlZCBhcyBhXG4vLyBicmVha2luZyBjaGFuZ2U6XG4vL1xuLy8gICAgQG1peGluIG15LWN1c3RvbS1jb21wb25lbnQtdGhlbWUoJHRoZW1lKSB7XG4vLyAgICAgIC5teS1jb21wIHtcbi8vICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbi8vICAgICAgfVxuLy8gICAgfVxuLy9cbi8vIE5vdGUgdGhhdCB0aGUgYCR0aGVtZS5wcmltYXJ5YCBrZXkgZG9lcyB1c3VhbGx5IG5vdCBleGlzdCBzaW5jZSB0aGUgY29sb3IgY29uZmlndXJhdGlvblxuLy8gaXMgc3RvcmVkIGluIGAkdGhlbWUuY29sb3JgIHdoaWNoIGNvbnRhaW5zIGEgcHJvcGVydHkgZm9yIGBwcmltYXJ5YC4gVGhpcyBtZXRob2QgY29waWVzXG4vLyB0aGUgbWFwIGZyb20gYCR0aGVtZS5jb2xvcmAgdG8gYCR0aGVtZWAgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuQGZ1bmN0aW9uIG1hdC1wcml2YXRlLWNyZWF0ZS1iYWNrd2FyZHMtY29tcGF0aWJpbGl0eS10aGVtZSgkdGhlbWUpIHtcbiAgQGlmIG5vdCBtYXAtZ2V0KCR0aGVtZSwgY29sb3IpIHtcbiAgICBAcmV0dXJuICR0aGVtZTtcbiAgfVxuICAkY29sb3I6IG1hcC1nZXQoJHRoZW1lLCBjb2xvcik7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCR0aGVtZSwgJGNvbG9yKTtcbn1cblxuLy8gR2V0cyB0aGUgdGhlbWUgZnJvbSB0aGUgZ2l2ZW4gdmFsdWUgdGhhdCBpcyBlaXRoZXIgYWxyZWFkeSBhIHRoZW1lLCBvciBhIGNvbG9yIGNvbmZpZ3VyYXRpb24uXG4vLyBUaGlzIGhhbmRsZXMgdGhlIGxlZ2FjeSBjYXNlIHdoZXJlIGRldmVsb3BlcnMgcGFzcyBhIGNvbG9yIGNvbmZpZ3VyYXRpb24gZGlyZWN0bHkgdG8gdGhlXG4vLyB0aGVtZSBtaXhpbi4gQmVmb3JlIHdlIGludHJvZHVjZWQgdGhlIG5ldyBwYXR0ZXJuIGZvciBjb25zdHJ1Y3RpbmcgYSB0aGVtZSwgZGV2ZWxvcGVycyBwYXNzZWRcbi8vIHRoZSBjb2xvciBjb25maWd1cmF0aW9uIGRpcmVjdGx5IHRvIHRoZSB0aGVtZSBtaXhpbnMuIFRoaXMgY2FuIGJlIHN0aWxsIHRoZSBjYXNlIGlmIGRldmVsb3BlcnNcbi8vIGNvbnN0cnVjdCBhIHRoZW1lIG1hbnVhbGx5IGFuZCBwYXNzIGl0IHRvIGEgdGhlbWUuIFdlIHN1cHBvcnQgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBUT0RPKGRldnZlcnNpb24pOiByZW1vdmUgdGhpcyBpbiB0aGUgZnV0dXJlLiBDb25zdHJ1Y3RpbmcgdGhlbWVzIG1hbnVhbGx5IGlzIHJhcmUsXG4vLyBhbmQgdGhlIGNvZGUgY2FuIGJlIGVhc2lseSB1cGRhdGVkIHRvIHRoZSBuZXcgQVBJLlxuQGZ1bmN0aW9uIG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICBAaWYgbWF0LXByaXZhdGUtaXMtdGhlbWUtb2JqZWN0KCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgICBAcmV0dXJuICR0aGVtZS1vci1jb2xvci1jb25maWc7XG4gIH1cbiAgQHJldHVybiBtYXQtcHJpdmF0ZS1jcmVhdGUtYmFja3dhcmRzLWNvbXBhdGliaWxpdHktdGhlbWUoKFxuICAgIF9pcy1sZWdhY3ktdGhlbWU6IHRydWUsXG4gICAgY29sb3I6ICR0aGVtZS1vci1jb2xvci1jb25maWdcbiAgKSk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gUHJvbW90ZSBjb250YWluZXJzIHRoYXQgaGF2ZSByaXBwbGVzIHRvIGEgbmV3IGxheWVyLiBXZSB3YW50IHRvIHRhcmdldCBgOm5vdCg6ZW1wdHkpYCxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYWxsIHJpcHBsZSBjb250YWluZXJzIHRvIGhhdmUgdGhlaXIgb3duIGxheWVyIHNpbmNlIHRoZXkncmUgdXNlZCBpbiBhXG4gICAgLy8gbG90IG9mIHBsYWNlcyBhbmQgdGhlIGxheWVyIGlzIG9ubHkgcmVsZXZhbnQgd2hpbGUgYW5pbWF0aW5nLiBOb3RlIHRoYXQgaWRlYWxseSB3ZSdkIHVzZVxuICAgIC8vIHRoZSBgY29udGFpbmAgcHJvcGVydHkgaGVyZSAoc2VlICMxMzE3NSksIGJlY2F1c2UgYDplbXB0eWAgY2FuIGJlIGJyb2tlbiBieSBoYXZpbmcgZXh0cmFcbiAgICAvLyB0ZXh0IGluc2lkZSB0aGUgZWxlbWVudCwgYnV0IGl0IGlzbid0IHZlcnkgd2VsbCBzdXBwb3J0ZWQgeWV0LlxuICAgICY6bm90KDplbXB0eSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIENvbG9ycyBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuQG1peGluIG1hdC1yaXBwbGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRmb3JlZ3JvdW5kLWJhc2U6IG1hcC1nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIC8vIElmIHRoZSByaXBwbGUgY29sb3IgaXMgcmVzb2x2ZXMgdG8gYSBjb2xvciAqdHlwZSosIHdlIGNhbiB1c2UgaXQgZGlyZWN0bHksIG90aGVyd2lzZVxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSB3ZSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGNvbG9yIGFuZCBzZXR0aW5nIGFuIG9wYWNpdHkuXG4gICAgQGlmICh0eXBlLW9mKCRmb3JlZ3JvdW5kLWJhc2UpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRmb3JlZ3JvdW5kLWJhc2UsICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9yZWdyb3VuZC1iYXNlO1xuICAgICAgb3BhY2l0eTogJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXJpcHBsZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1yaXBwbGUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBUaGlzIG1peGluIGVuc3VyZXMgYW4gZWxlbWVudCBzcGFucyB0byBmaWxsIHRoZSBuZWFyZXN0IGFuY2VzdG9yIHdpdGggZGVmaW5lZCBwb3NpdGlvbmluZy5cbkBtaXhpbiBtYXQtZmlsbCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5cbi8vLyBNaXhpbiB0aGF0IHR1cm5zIG9uIHN0cm9uZyBmb2N1cyBpbmRpY2F0b3JzLlxuLy8vXG4vLy8gQGV4YW1wbGVcbi8vLyAgIC5teS1hcHAge1xuLy8vICAgICBAaW5jbHVkZSBtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZyk7XG4vLy8gICB9XG5AbWl4aW4gbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgICBib3JkZXItd2lkdGg6IDNweCxcbiAgICBib3JkZXItcmFkaXVzOiA0cHgsXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLW1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG4gICRib3JkZXItc3R5bGU6IG1hcC1nZXQoJGNvbmZpZywgYm9yZGVyLXN0eWxlKTtcbiAgJGJvcmRlci13aWR0aDogbWFwLWdldCgkY29uZmlnLCBib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXJhZGl1czogbWFwLWdldCgkY29uZmlnLCBib3JkZXItcmFkaXVzKTtcblxuICAvLyBCYXNlIHN0eWxlcyBmb3IgZm9jdXMgaW5kaWNhdG9ycy5cbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gICAgQGluY2x1ZGUgbWF0LWZpbGwoKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJvcmRlcjogJGJvcmRlci13aWR0aCAkYm9yZGVyLXN0eWxlIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgLy8gQnkgZGVmYXVsdCwgYWxsIGZvY3VzIGluZGljYXRvcnMgYXJlIGZsdXNoIHdpdGggdGhlIGJvdW5kaW5nIGJveCBvZiB0aGVpclxuICAvLyBob3N0IGVsZW1lbnQuIEZvciBwYXJ0aWN1bGFyIGVsZW1lbnRzIChsaXN0ZWQgYmVsb3cpLCBkZWZhdWx0IGluc2V0L29mZnNldFxuICAvLyB2YWx1ZXMgYXJlIG5lY2Vzc2FyeSB0byBlbnN1cmUgdGhhdCB0aGUgZm9jdXMgaW5kaWNhdG9yIGlzIHN1ZmZpY2llbnRseVxuICAvLyBjb250cmFzdGl2ZSBhbmQgcmVuZGVycyBhcHByb3ByaWF0ZWx5LlxuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1mbGF0LWJ1dHRvbjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtcmFpc2VkLWJ1dHRvbjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtZmFiOjpiZWZvcmUsXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1taW5pLWZhYjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtY2hpcDo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyOjpiZWZvcmUge1xuICAgIG1hcmdpbjogLSgkYm9yZGVyLXdpZHRoICsgMnB4KTtcbiAgfVxuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1zdHJva2VkLWJ1dHRvbjo6YmVmb3JlLFxuICAubWF0LWZvY3VzLWluZGljYXRvci5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiAtKCRib3JkZXItd2lkdGggKyAzcHgpO1xuICB9XG5cbiAgLm1hdC1mb2N1cy1pbmRpY2F0b3IubWF0LXRhYi1saW5rOjpiZWZvcmUsXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC10YWItbGFiZWw6OmJlZm9yZSB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cblxuICAvLyBSZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciBvbiBmb2N1cy4gRGVmaW5pbmcgYSBwc2V1ZG8gZWxlbWVudCdzXG4gIC8vIGNvbnRlbnQgd2lsbCBjYXVzZSBpdCB0byByZW5kZXIuXG5cbiAgLy8gQ2hlY2tib3hlcywgcmFkaW9zLCBhbmQgc2xpZGUgdG9nZ2xlcyByZW5kZXIgZm9jdXMgaW5kaWNhdG9ycyB3aGVuIHRoZVxuICAvLyBhc3NvY2lhdGVkIHZpc3VhbGx5LWhpZGRlbiBpbnB1dCBpcyBmb2N1c2VkLlxuICAubWF0LWNoZWNrYm94LWlucHV0OmZvY3VzIH4gLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbiAgLm1hdC1yYWRpby1pbnB1dDpmb2N1cyB+IC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWlucHV0OmZvY3VzIH4gLm1hdC1zbGlkZS10b2dnbGUtdGh1bWItY29udGFpbmVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG5cbiAgLy8gRm9yIG9wdGlvbnMsIHJlbmRlciB0aGUgZm9jdXMgaW5kaWNhdG9yIHdoZW4gdGhlIGNsYXNzIC5tYXQtYWN0aXZlXG4gIC8vIGlzIHByZXNlbnQuXG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yLm1hdC1vcHRpb24ubWF0LWFjdGl2ZTo6YmVmb3JlLFxuXG4gIC8vIEZvciBjYWxlbmRhciBjZWxscywgcmVuZGVyIHRoZSBmb2N1cyBpbmRpY2F0b3Igd2hlbiB0aGUgcGFyZW50IGNlbGwgaXNcbiAgLy8gZm9jdXNlZC5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6Zm9jdXMgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcblxuICAvLyBGb3IgYWxsIG90aGVyIGNvbXBvbmVudHMsIHJlbmRlciB0aGUgZm9jdXMgaW5kaWNhdG9yIG9uIGZvY3VzLlxuICAubWF0LWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IGFwcGxpZXMgdGhlIGJvcmRlciBjb2xvciBmb3IgdGhlIGZvY3VzIGluZGljYXRvcnMuXG5AbWl4aW4gX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1ib3JkZXItY29sb3IoJGNvbG9yKSB7XG4gIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgQGluY2x1ZGUgX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1ib3JkZXItY29sb3IobWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSkpKTtcbn1cblxuLy8vIE1peGluIHRoYXQgc2V0cyB0aGUgY29sb3Igb2YgdGhlIGZvY3VzIGluZGljYXRvcnMuXG4vLy9cbi8vLyBAcGFyYW0ge2NvbG9yfG1hcH0gJHRoZW1lLW9yLWNvbG9yXG4vLy8gICBJZiB0aGVtZSwgZm9jdXMgaW5kaWNhdG9ycyBhcmUgc2V0IHRvIHRoZSBwcmltYXJ5IGNvbG9yIG9mIHRoZSB0aGVtZS4gSWZcbi8vLyAgIGNvbG9yLCBmb2N1cyBpbmRpY2F0b3JzIGFyZSBzZXQgdG8gdGhhdCBjb2xvci5cbi8vL1xuLy8vIEBleGFtcGxlXG4vLy8gICAuZGVtby1kYXJrLXRoZW1lIHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCRkYXJrLXRoZW1lLW1hcCk7XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZVxuLy8vICAgLmRlbW8tcmVkLXRoZW1lIHtcbi8vLyAgICAgQGluY2x1ZGUgbWF0LXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCNmMDApO1xuLy8vICAgfVxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1hdGVyaWFsL3RoZW1lLW1peGluLWFwaSAqL1xuQG1peGluIG1hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIHR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSAhPSAnbWFwJyB7XG4gICAgQGluY2x1ZGUgX21hdC1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1ib3JkZXItY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvcik7XG4gICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMnKSB7XG4gICAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgICBAaW5jbHVkZSBtYXQtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTWl4aW4gdGhhdCBlbnN1cmVzIGZvY3VzIGluZGljYXRvciBob3N0IGVsZW1lbnRzIGFyZSBwb3NpdGlvbmVkIHNvIHRoYXQgdGhlIGZvY3VzIGluZGljYXRvclxuLy8gcHNldWRvIGVsZW1lbnQgd2l0aGluIGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGhvc3QuIFByaXZhdGUgbWl4aW4gaW5jbHVkZWQgd2l0aGluXG4vLyBgbWF0LWNvcmVgLlxuQG1peGluIG1hdC1wcml2YXRlLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXBvc2l0aW9uaW5nKCkge1xuICAubWF0LWZvY3VzLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1vcHRpb24tZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtb3B0aW9uJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW9wdGlvbi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LW9wdGlvbi1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1vcHRncm91cC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LW9wdGdyb3VwJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtb3B0Z3JvdXAtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSkpO1xuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuIEFsc28gbm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYmVsb3cgYC5tYXQtcHJpbWFyeWBcbiAgLy8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIHRoZSBjb2xvciB0byBiZSBvdmVyd3JpdHRlbiBpZiB0aGUgY2hlY2tib3ggaXMgaW5zaWRlIGEgcGFyZW50IHRoYXRcbiAgLy8gaGFzIGBtYXQtYWNjZW50YCBhbmQgaXMgcGxhY2VkIGluc2lkZSBhbm90aGVyIHBhcmVudCB0aGF0IGhhcyBgbWF0LXByaW1hcnlgLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkY29uZmlnLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgd2FybikpO1xuICB9XG5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgJi5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wc2V1ZG8tY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1wc2V1ZG8tY2hlY2tib3gtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHNldWRvLWNoZWNrYm94Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXBzZXVkby1jaGVja2JveC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFJlcHJlc2VudHMgYSB0eXBvZ3JhcGh5IGxldmVsIGZyb20gdGhlIE1hdGVyaWFsIGRlc2lnbiBzcGVjLlxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWxldmVsKFxuICAkZm9udC1zaXplLFxuICAkbGluZS1oZWlnaHQ6ICRmb250LXNpemUsXG4gICRmb250LXdlaWdodDogNDAwLFxuICAkZm9udC1mYW1pbHk6IG51bGwsXG4gICRsZXR0ZXItc3BhY2luZzogbm9ybWFsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWVzIGhlcmUgY29tZSBmcm9tXG4vLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW0pLFxuICAkZGlzcGxheS0zOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNTZweCwgNTZweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW0pLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwLCAkbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gV2hldGhlciBhIGNvbmZpZyBpcyBmb3IgdGhlIE1hdGVyaWFsIERlc2lnbiAyMDE4IHR5cG9ncmFwaHkgc3lzdGVtLlxuQGZ1bmN0aW9uIG1hdC1wcml2YXRlLXR5cG9ncmFwaHktaXMtMjAxOC1jb25maWcoJGNvbmZpZykge1xuICBAcmV0dXJuIG1hcC1nZXQoJGNvbmZpZywgaGVhZGxpbmUtMSkgIT0gbnVsbDtcbn1cblxuLy8gV2hldGhlciBhIGNvbmZpZyBpcyBmb3IgdGhlIE1hdGVyaWFsIERlc2lnbiAyMDE0IHR5cG9ncmFwaHkgc3lzdGVtLlxuQGZ1bmN0aW9uIG1hdC1wcml2YXRlLXR5cG9ncmFwaHktaXMtMjAxNC1jb25maWcoJGNvbmZpZykge1xuICBAcmV0dXJuIG1hcC1nZXQoJGNvbmZpZywgaGVhZGxpbmUpICE9IG51bGw7XG59XG5cbi8vIEdpdmVuIGEgY29uZmlnIGZvciBlaXRoZXIgdGhlIDIwMTQgb3IgMjAxOCBNYXRlcmlhbCBEZXNpZ24gdHlwb2dyYXBoeSBzeXN0ZW0sXG4vLyBwcm9kdWNlcyBhIG5vcm1hbGl6ZWQgdHlwb2dyYXBoeSBjb25maWcgZm9yIHRoZSAyMDE0IE1hdGVyaWFsIERlc2lnbiB0eXBvZ3JhcGh5IHN5c3RlbS5cbi8vIDIwMTQgLSBodHRwczovL21hdGVyaWFsLmlvL2FyY2hpdmUvZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWwjdHlwb2dyYXBoeS1zdHlsZXNcbi8vIDIwMTggLSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sI3R5cGUtc2NhbGVcbkBmdW5jdGlvbiBtYXQtcHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTQtY29uZmlnKCRjb25maWcpIHtcbiAgQGlmIG1hdC1wcml2YXRlLXR5cG9ncmFwaHktaXMtMjAxOC1jb25maWcoJGNvbmZpZykge1xuICAgIEByZXR1cm4gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAgICAgICAkZGlzcGxheS00OiBtYXAtZ2V0KCRjb25maWcsIGhlYWRsaW5lLTEpLFxuICAgICAgICAkZGlzcGxheS0zOiBtYXAtZ2V0KCRjb25maWcsIGhlYWRsaW5lLTIpLFxuICAgICAgICAkZGlzcGxheS0yOiBtYXAtZ2V0KCRjb25maWcsIGhlYWRsaW5lLTMpLFxuICAgICAgICAkZGlzcGxheS0xOiBtYXAtZ2V0KCRjb25maWcsIGhlYWRsaW5lLTQpLFxuICAgICAgICAkaGVhZGxpbmU6IG1hcC1nZXQoJGNvbmZpZywgaGVhZGxpbmUtNSksXG4gICAgICAgICR0aXRsZTogbWFwLWdldCgkY29uZmlnLCBoZWFkbGluZS02KSxcbiAgICAgICAgJHN1YmhlYWRpbmctMjogbWFwLWdldCgkY29uZmlnLCBzdWJ0aXRsZS0xKSxcbiAgICAgICAgJHN1YmhlYWRpbmctMTogbWFwLWdldCgkY29uZmlnLCBzdWJ0aXRsZS0yKSxcbiAgICAgICAgJGJvZHktMjogbWFwLWdldCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgICAkYm9keS0xOiBtYXAtZ2V0KCRjb25maWcsIGJvZHktMiksXG4gICAgICAgICRidXR0b246IG1hcC1nZXQoJGNvbmZpZywgYnV0dG9uKSxcbiAgICAgICAgJGNhcHRpb246IG1hcC1nZXQoJGNvbmZpZywgY2FwdGlvbiksXG4gICAgKTtcbiAgfVxuICBAcmV0dXJuICRjb25maWc7XG59XG5cbi8vIEdpdmVuIGEgY29uZmlnIGZvciBlaXRoZXIgdGhlIDIwMTQgb3IgMjAxOCBNYXRlcmlhbCBEZXNpZ24gdHlwb2dyYXBoeSBzeXN0ZW0sXG4vLyBwcm9kdWNlcyBhIG5vcm1hbGl6ZWQgdHlwb2dyYXBoeSBjb25maWcgZm9yIHRoZSAyMDE4IE1hdGVyaWFsIERlc2lnbiB0eXBvZ3JhcGh5IHN5c3RlbS5cbi8vIDIwMTQgLSBodHRwczovL21hdGVyaWFsLmlvL2FyY2hpdmUvZ3VpZGVsaW5lcy9zdHlsZS90eXBvZ3JhcGh5Lmh0bWwjdHlwb2dyYXBoeS1zdHlsZXNcbi8vIDIwMTggLSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi90eXBvZ3JhcGh5L3RoZS10eXBlLXN5c3RlbS5odG1sI3R5cGUtc2NhbGVcbkBmdW5jdGlvbiBtYXQtcHJpdmF0ZS10eXBvZ3JhcGh5LXRvLTIwMTgtY29uZmlnKCRjb25maWcpIHtcbiAgQGlmIG1hdC1wcml2YXRlLXR5cG9ncmFwaHktaXMtMjAxNC1jb25maWcoJGNvbmZpZykge1xuICAgIEByZXR1cm4gKFxuICAgICAgICBoZWFkbGluZS0xOiBtYXAtZ2V0KCRjb25maWcsIGRpc3BsYXktNCksXG4gICAgICAgIGhlYWRsaW5lLTI6IG1hcC1nZXQoJGNvbmZpZywgZGlzcGxheS0zKSxcbiAgICAgICAgaGVhZGxpbmUtMzogbWFwLWdldCgkY29uZmlnLCBkaXNwbGF5LTIpLFxuICAgICAgICBoZWFkbGluZS00OiBtYXAtZ2V0KCRjb25maWcsIGRpc3BsYXktMSksXG4gICAgICAgIGhlYWRsaW5lLTU6IG1hcC1nZXQoJGNvbmZpZywgaGVhZGxpbmUpLFxuICAgICAgICBoZWFkbGluZS02OiBtYXAtZ2V0KCRjb25maWcsIHRpdGxlKSxcbiAgICAgICAgc3VidGl0bGUtMTogbWFwLWdldCgkY29uZmlnLCBzdWJoZWFkaW5nLTIpLFxuICAgICAgICBzdWJ0aXRsZS0yOiBtYXAtZ2V0KCRjb25maWcsIHN1YmhlYWRpbmctMSksXG4gICAgICAgIGJvZHktMTogbWFwLWdldCgkY29uZmlnLCBib2R5LTIpLFxuICAgICAgICBib2R5LTI6IG1hcC1nZXQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgICAgYnV0dG9uOiBtYXAtZ2V0KCRjb25maWcsIGJ1dHRvbiksXG4gICAgICAgIGNhcHRpb246IG1hcC1nZXQoJGNvbmZpZywgY2FwdGlvbiksXG4gICAgKTtcbiAgfVxuICBAcmV0dXJuICRjb25maWc7XG59XG5cbi8vIEFkZHMgdGhlIGJhc2UgdHlwb2dyYXBoeSBzdHlsZXMsIGJhc2VkIG9uIGEgY29uZmlnLlxuLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIG1hdGVyaWFsL3RoZW1lLW1peGluLWFwaSAqL1xuQG1peGluIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZywgJHNlbGVjdG9yOiAnLm1hdC10eXBvZ3JhcGh5Jykge1xuICAubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAjeyRzZWxlY3Rvcn0gaDEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsIC5tYXQtdGl0bGUsICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsICN7JHNlbGVjdG9yfSBoMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAjeyRzZWxlY3Rvcn0gaDQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAvLyBOb3RlOiB0aGUgc3BlYyBkb2Vzbid0IGhhdmUgYW55dGhpbmcgdGhhdCB3b3VsZCBjb3JyZXNwb25kIHRvIGg1IGFuZCBoNiwgYnV0IHdlIGFkZCB0aGVzZSBmb3JcbiAgLy8gY29uc2lzdGVuY3kuIFRoZSBmb250IHNpemVzIGNvbWUgZnJvbSB0aGUgQ2hyb21lIHVzZXIgYWdlbnQgc3R5bGVzIHdoaWNoIGhhdmUgaDUgYXQgMC44M2VtXG4gIC8vIGFuZCBoNiBhdCAwLjY3ZW0uXG4gIC5tYXQtaDUsICN7JHNlbGVjdG9yfSBoNSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7bWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpfSAqIDAuODMpLFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWg2LCAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjY3KSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1ib2R5LCAubWF0LWJvZHktMSwgI3skc2VsZWN0b3J9IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcblxuICAgIHAge1xuICAgICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgICB9XG4gIH1cblxuICAubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBjYXB0aW9uKTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1hdXRvY29tcGxldGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYXV0b2NvbXBsZXRlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWF1dG9jb21wbGV0ZS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuICAubWF0LWJhZGdlLWNvbnRlbnQuX21hdC1hbmltYXRpb24tbm9vcGFibGUge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBUaGUgYWN0aXZlIGNsYXNzIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGlzIGFkZGVkXG4gIC8vIHNvIGl0IGNhbiBhbmltYXRlIHNjYWxlIHRvIGRlZmF1bHRcbiAgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICAgIC8vIFNjYWxlIHRvIGBub25lYCBpbnN0ZWFkIG9mIGAxYCB0byBhdm9pZCBibHVycnkgdGV4dCBpbiBzb21lIGJyb3dzZXJzLlxuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLXNtYWxsLXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbWVkaXVtIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUpO1xuICB9XG4gIC5tYXQtYmFkZ2UtbGFyZ2Uge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWxhcmdlLXNpemUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6ICRtYXQtYmFkZ2UtZm9udC13ZWlnaHQ7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZTtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIC8vIFNldCB0aGUgZm9udCBzaXplIHRvIDc1JSBvZiB0aGUgb3JpZ2luYWwuXG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDAuNzU7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYmFkZ2UtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWJhZGdlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1iYWRnZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1iYWRnZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMTYsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1ib3R0b20tc2hlZXQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYm90dG9tLXNoZWV0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWJvdHRvbS1zaGVldC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4kX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk6IDAuMTtcblxuLy8gQXBwbGllcyBhIGZvY3VzIHN0eWxlIHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXktY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICYubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBhIHJpcHBsZS4gSWYgdGhlIHZhbHVlIHByb3ZpZGVkIGlzIG5vdCBhIFNhc3MgY29sb3IsXG4vLyB3ZSBhc3N1bWUgdGhhdCB3ZSd2ZSBiZWVuIGdpdmVuIGEgQ1NTIHZhcmlhYmxlLiBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nXG4vLyBvbiBhIENTUyB2YXJpYWJsZSwgd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlLCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcHJpbWFyeSwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICAkcGFsZXR0ZTogaWYoJHByb3BlcnR5ID09ICdjb2xvcicsICRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCk7XG4gICAgICAjeyRwcm9wZXJ0eX06IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkY29uZmlnKTtcblxuICAgIC8vIFNldHVwIHRoZSByaXBwbGUgY29sb3IgdG8gYmUgYmFzZWQgb24gdGhlIHRleHQgY29sb3IuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSByaXBwbGVzXG4gICAgLy8gYXJlIG1hdGNoaW5nIHdpdGggdGhlIGN1cnJlbnQgdGhlbWUgcGFsZXR0ZSBhbmQgYXJlIGluIGNvbnRyYXN0IHRvIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgLy8gKGUuZyBpbiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IG1hcC1nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICB9XG5cbiAgLy8gTm90ZTogdGhpcyBuZWVkcyBhIGJpdCBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB3ZSdyZSBub3QgZ3VhcmFudGVlZCB0aGUgaW5jbHVzaW9uXG4gIC8vIG9yZGVyIG9mIHRoZSB0aGVtZSBzdHlsZXMgYW5kIHRoZSBidXR0b24gcmVzZXQgbWF5IGVuZCB1cCByZXNldHRpbmcgdGhpcyBhcyB3ZWxsLlxuICAubWF0LXN0cm9rZWQtYnV0dG9uOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJGNvbmZpZywgJ2JhY2tncm91bmQtY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJGNvbmZpZywgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkY29uZmlnKTtcblxuICAgICY6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICRjb25maWcpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig2LCAkY29uZmlnKTtcblxuICAgICY6bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEyLCAkY29uZmlnKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1idXR0b24tZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYnV0dG9uJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbi8vIE1pbmltdW0gaGVpZ2h0IGZvciBoaWdoZXN0IGRlbnNpdHkgY2FuIHZhcnkgYmFzZWQgb24gdGhlIGNvbnRlbnQgdGhhdCBkZXZlbG9wZXJzXG4vLyBwcm9qZWN0IGludG8gYnV0dG9uLXRvZ2dsZSdzLiBXZSB1c2UgYSBtaW5pbXVtIG9mIGAyNHB4YCB0aG91Z2ggYmVjYXVzZSBjb21tb25seVxuLy8gaWNvbnMgb3IgdGV4dCBhcmUgZGlzcGxheWVkLiBJY29ucyBieSBkZWZhdWx0IGhhdmUgYSBzaXplIG9mIGAyNHB4YC5cbiRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1taW5pbXVtLWhlaWdodDogMjRweCAhZGVmYXVsdDtcbiRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1tYXhpbXVtLWhlaWdodDogJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWhlaWdodCAhZGVmYXVsdDtcblxuJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLWRlbnNpdHktY29uZmlnOiAoXG4gIGhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYXJkLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFyZC1taW5pbXVtLWhlaWdodCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbiwgMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgW2Rpcj0ncnRsJ10gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIHtcbiAgICAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtYnV0dG9uKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZSk7XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG5cbiAgICAmLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10b2dnbGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkc3RhbmRhcmQtaGVpZ2h0OiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAkbWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhcmQtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgICAgbGluZS1oZWlnaHQ6ICRzdGFuZGFyZC1oZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtYnV0dG9uLXRvZ2dsZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxLCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHRpdGxlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHRpdGxlKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSxcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWNhcmQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWNhcmQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNhcmQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2FyZC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWNhcmQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSwgLm1hdC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgJi5tYXQtY2hlY2tib3gtY2hlY2tlZCxcbiAgICAmLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIHtcbiAgICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gIC5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldChtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpLCBiYXNlKTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCksXG4gIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LWNoZWNrYm94IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLy8gVE9ETyhrYXJhKTogUmVtb3ZlIHRoaXMgc3R5bGUgd2hlbiBmaXhpbmcgdmVydGljYWwgYmFzZWxpbmVcbiAgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWNoZWNrYm94LWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2hlY2tib3gnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGVja2JveC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBfbWF0LWNoaXAtZWxlbWVudC1jb2xvcigkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGNvbG9yOiAkZm9yZWdyb3VuZDtcblxuICAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogJGZvcmVncm91bmQ7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUgZWxlbWVudC5cbi8vIElmIHRoZSBjb2xvciB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS5cbi8vIFNpbmNlIHdlIGNhbid0IHBlcmZvcm0gYWxwaGEtYmxlbmRpbmcgb24gYSBDU1MgdmFyaWFibGUsXG4vLyB3ZSBpbnN0ZWFkIGFkZCB0aGUgb3BhY2l0eSBkaXJlY3RseSB0byB0aGUgcmlwcGxlIGVsZW1lbnQuXG5AbWl4aW4gX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGRlZmF1bHQtY29udHJhc3QsICRvcGFjaXR5KSB7XG4gICRiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xuICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQtY29sb3IpICE9IGNvbG9yKSB7XG4gICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtY2hpcC10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBfbWF0LWNoaXAtZWxlbWVudC1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWNoaXBzLXJpcHBsZS1iYWNrZ3JvdW5kKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgX21hdC1jaGlwLWVsZW1lbnQtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtdGhlbWUtZWxldmF0aW9uKDMsICRjb25maWcpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGlwLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtY2hpcC10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtY2hpcC10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWNoaXBzLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtY2hpcHMnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1jaGlwcy1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGl2aWRlci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LWRpdmlkZXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRpdmlkZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZGl2aWRlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRpdmlkZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFibGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10YWJsZScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10YWJsZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRhYmxlLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci1yYW5nZS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtZGF0ZS1yYW5nZS1jb2xvcnMoXG4gICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkbWF0LWRhdGVwaWNrZXItcmFuZ2UtZmFkZS1hbW91bnQpKTtcblxuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJhY2tncm91bmQsICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLXVuc2VsZWN0ZWQtY2VsbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXRpbGl0eSBtaXhpbiB0byB0YXJnZXQgY2VsbHMgdGhhdCBhcmVuJ3Qgc2VsZWN0ZWQuIFVzZWQgdG8gbWFrZSBzZWxlY3RvciBlYXNpZXIgdG8gZm9sbG93LlxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAmOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItdW5zZWxlY3RlZC1jZWxsIHtcbiAgICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICAgIGNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlldyB7XG4gICAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgICBAaWYgdHlwZS1vZigkZGl2aWRlci1jb2xvcikgPT0gY29sb3Ige1xuICAgICAgLy8gVGhlIGRpdmlkZXIgY29sb3IgaXMgc2V0IHVuZGVyIHRoZSBhc3N1bXB0aW9uIHRoYXQgaXQnbGwgYmUgdXNlZFxuICAgICAgLy8gZm9yIGEgc29saWQgYm9yZGVyLCBidXQgYmVjYXVzZSB3ZSdyZSB1c2luZyBhIGRhc2hlZCBib3JkZXIgZm9yIHRoZVxuICAgICAgLy8gcHJldmlldyByYW5nZSwgd2UgbmVlZCB0byBidW1wIGl0cyBvcGFjaXR5IHRvIGVuc3VyZSB0aGF0IGl0J3MgdmlzaWJsZS5cbiAgICAgIGNvbG9yOiByZ2JhKCRkaXZpZGVyLWNvbG9yLCBtaW4ob3BhY2l0eSgkZGl2aWRlci1jb2xvcikgKiAyLCAxKSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xuICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAgICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkge1xuICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci11bnNlbGVjdGVkLWNlbGwge1xuICAgICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLXRoZW1lLWVsZXZhdGlvbig0LCAkY29uZmlnKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCRjb25maWcsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMCwgJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJGNvbmZpZywgd2FybiksIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF0ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGUtcmFuZ2UtY29sb3JzKFxuICAkcmFuZ2UtY29sb3IsXG4gICRjb21wYXJpc29uLWNvbG9yOiByZ2JhKCNmOWFiMDAsICRtYXQtZGF0ZXBpY2tlci1yYW5nZS1mYWRlLWFtb3VudCksXG4gICRvdmVybGFwLWNvbG9yOiAjYThkYWI1LFxuICAkb3ZlcmxhcC1zZWxlY3RlZC1jb2xvcjogZGFya2VuKCRvdmVybGFwLWNvbG9yLCAzMCUpKSB7XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogJGNvbXBhcmlzb24tY29sb3I7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxcbiAgW2Rpcj0ncnRsJ10gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRyYW5nZS1jb2xvciA1MCUsICRjb21wYXJpc29uLWNvbG9yIDUwJSk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsXG4gIFtkaXI9J3J0bCddIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgJHJhbmdlLWNvbG9yIDUwJSwgJGNvbXBhcmlzb24tY29sb3IgNTAlKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAkb3ZlcmxhcC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGFwLXNlbGVjdGVkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRhdGVwaWNrZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMjQsICRjb25maWcpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtZGlhbG9nLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWRpYWxvZycpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kaWFsb2ctY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC1kaWFsb2ctZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4vLyBEZWZhdWx0IG1pbmltdW0gYW5kIG1heGltdW0gaGVpZ2h0IGZvciBjb2xsYXBzZWQgcGFuZWwgaGVhZGVycy5cbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtaGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbGxhcHNlZC1taW5pbXVtLWhlaWdodDogMzZweCAhZGVmYXVsdDtcbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtbWF4aW11bS1oZWlnaHQ6XG4gICAgJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWNvbGxhcHNlZC1oZWlnaHQgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgbWluaW11bSBhbmQgbWF4aW11bSBoZWlnaHQgZm9yIGV4cGFuZGVkIHBhbmVsIGhlYWRlcnMuXG4kbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZXhwYW5kZWQtaGVpZ2h0OiA2NHB4ICFkZWZhdWx0O1xuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLW1pbmltdW0taGVpZ2h0OiA0OHB4ICFkZWZhdWx0O1xuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLW1heGltdW0taGVpZ2h0OlxuICAgICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1oZWlnaHQgIWRlZmF1bHQ7XG5cbi8vIERlbnNpdHkgY29uZmlndXJhdGlvbiBmb3IgdGhlIGV4cGFuc2lvbiBwYW5lbC4gQ2FwdHVyZXMgdGhlXG4vLyBoZWlnaHQgZm9yIGJvdGggZXhwYW5kZWQgYW5kIGNvbGxhcHNlZCBwYW5lbCBoZWFkZXJzLlxuJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlbnNpdHktY29uZmlnOiAoXG4gIGNvbGxhcHNlZC1oZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLWhlaWdodCxcbiAgICBtYXhpbXVtOiAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItY29sbGFwc2VkLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1jb2xsYXBzZWQtbWluaW11bS1oZWlnaHQsXG4gICksXG4gIGV4cGFuZGVkLWhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWV4cGFuZGVkLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1leHBhbmRlZC1taW5pbXVtLWhlaWdodCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gTm90ZTogS2VlcCB0aGlzIGluIHN5bmMgd2l0aCB0aGUgYW5pbWF0aW9uIHRpbWluZyBmb3IgdGhlIHRvZ2dsZSBpbmRpY2F0b3Jcbi8vIGFuZCBib2R5IGV4cGFuc2lvbi4gVGhlc2UgYXJlIGFuaW1hdGVkIHVzaW5nIEFuZ3VsYXIgYW5pbWF0aW9ucy5cbiRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10cmFuc2l0aW9uOiAyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG5AbWl4aW4gbWF0LXByaXZhdGUtZXhwYW5zaW9uLWZvY3VzIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWV4cGFuc2lvbi1mb2N1cyB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZXhwYW5kZWQtaGVpZ2h0OiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAgICRtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGV4cGFuZGVkLWhlaWdodCk7XG4gICRjb2xsYXBzZWQtaGVpZ2h0OiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAkbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBjb2xsYXBzZWQtaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICBoZWlnaHQ6ICRjb2xsYXBzZWQtaGVpZ2h0O1xuXG4gICAgICAmLm1hdC1leHBhbmRlZCB7XG4gICAgICAgIGhlaWdodDogJGV4cGFuZGVkLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWV4cGFuc2lvbi1wYW5lbCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC8vIE11c3QgcmVtb3ZlIHdyYXBwZXIgd2hlbiBsaW5lcyBhcmUgZW1wdHkgb3IgaXQgdGFrZXMgdXAgaG9yaXpvbnRhbFxuICAvLyBzcGFjZSBhbmQgcHVzaGVzIG90aGVyIGVsZW1lbnRzIHRvIHRoZSByaWdodC5cbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1ncmlkLWxpc3QtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbiAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWdyaWQtbGlzdC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1ncmlkLWxpc3QnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZ3JpZC1saXN0LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuQG1peGluIG1hdC1pY29uLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1pY29uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LWljb24tZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWljb24nKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtaWNvbi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWljb24tZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1wcml2YXRlLWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIG1hdC1wcml2YXRlLWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJGNvbmZpZykge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIHBvc2l0aW9uLXN0aWNreSgkaW1wb3J0YW50OiBmYWxzZSkge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgI3tpZigkaW1wb3J0YW50LCAnIWltcG9ydGFudCcsICcnKX07XG4gIHBvc2l0aW9uOiBzdGlja3kgI3tpZigkaW1wb3J0YW50LCAnIWltcG9ydGFudCcsICcnKX07XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG5cblxuXG5AbWl4aW4gbWF0LWlucHV0LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcblxuICAgIEBpbmNsdWRlIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtcHJpdmF0ZS1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCRjb25maWcpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyaykpIHtcbiAgICAgIG9wdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1wcmltYXJ5LXRleHQ7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbjpkaXNhYmxlZCB7XG4gICAgICAgIGNvbG9yOiAkZGFyay1kaXNhYmxlZC10ZXh0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtd2FybiAubWF0LWlucHV0LWVsZW1lbnQsXG4gIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG5cbiAgLy8gPGlucHV0PiBlbGVtZW50cyBzZWVtIHRvIGhhdmUgdGhlaXIgaGVpZ2h0IHNldCBzbGlnaHRseSB0b28gbGFyZ2Ugb24gU2FmYXJpIGNhdXNpbmcgdGhlIHRleHQgdG9cbiAgLy8gYmUgbWlzYWxpZ25lZCB3LnIudC4gdGhlIHBsYWNlaG9sZGVyLiBBZGRpbmcgdGhpcyBtYXJnaW4gY29ycmVjdHMgaXQuXG4gIGlucHV0Lm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtJGxpbmUtc3BhY2luZyAqIDFlbTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbnB1dC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWlucHV0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWlucHV0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtaW5wdXQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSxcbiAgLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uIHtcbiAgICAmLCAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtbGlzdC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtbGlzdCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1saXN0LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtbGlzdC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbWVudS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICd0ZXh0Jyk7XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAmLFxuICAgICAgJjo6YWZ0ZXIsXG4gICAgICAubWF0LWljb24tbm8tY29sb3Ige1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtbWVudS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtbWVudS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtbWVudScpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1tZW51LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtbWVudS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4kbWF0LXBhZ2luYXRvci1oZWlnaHQ6IDU2cHggIWRlZmF1bHQ7XG4vLyBNaW5pbXVtIGhlaWdodCBmb3IgcGFnaW5hdG9yJ3MgaW4gdGhlIGhpZ2hlc3QgZGVuc2l0eSBpcyBkZXRlcm1pbmVkIGJhc2VkIG9uIGhvd1xuLy8gbXVjaCB0aGUgcGFnaW5hdG9yIGNhbiBzaHJpbmsgdW50aWwgdGhlIGNvbnRlbnQgZXhjZWVkcyAoaS5lLiBuYXZpZ2F0aW9uIGJ1dHRvbnMpLlxuJG1hdC1wYWdpbmF0b3ItbWluaW11bS1oZWlnaHQ6IDQwcHggIWRlZmF1bHQ7XG4kbWF0LXBhZ2luYXRvci1tYXhpbXVtLWhlaWdodDogJG1hdC1wYWdpbmF0b3ItaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbWF0LXBhZ2luYXRvci1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXBhZ2luYXRvci1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC1wYWdpbmF0b3ItbWF4aW11bS1oZWlnaHQsXG4gICAgbWluaW11bTogJG1hdC1wYWdpbmF0b3ItbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wYWdpbmF0b3ItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRkZW5zaXR5LXNjYWxlOiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaGVpZ2h0OiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoJG1hdC1wYWdpbmF0b3ItZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1wYWdpbmF0b3InKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3MtYmFyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gX21hdC1wcm9ncmVzcy1iYXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtcHJvZ3Jlc3MtYmFyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXByb2dyZXNzLWJhci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXByb2dyZXNzLXNwaW5uZXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXByb2dyZXNzLXNwaW5uZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXByb2dyZXNzLXNwaW5uZXItZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyBleHRyYSBzcGVjaWZpY2l0eSwgYmVjYXVzZSB0aGUgY2xhc3NlcyBhYm92ZSBhcmUgY29tYmluZWRcbiAgICAvLyAoZS5nLiBgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudGApIHdoaWNoIGluY3JlYXNlcyB0aGVpciBzcGVjaWZpY2l0eSBhIGxvdC5cbiAgICAvLyBUT0RPOiBjb25zaWRlciBtYWtpbmcgdGhlIHNlbGVjdG9ycyBpbnRvIGRlc2NlbmRhbnRzIChgLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tYnV0dG9uYCkuXG4gICAgJi5tYXQtcmFkaW8tZGlzYWJsZWQge1xuICAgICAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbiAgICAgIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbiAgICAgIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTd2l0Y2ggdGhpcyB0byBhIHNvbGlkIGNvbG9yIHNpbmNlIHdlJ3JlIHVzaW5nIGBvcGFjaXR5YFxuICAgIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1yYWRpby1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXJhZGlvJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXJhZGlvLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogbWF0LXByaXZhdGUtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJGNvbmZpZyk7XG5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyLCAwLjEyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgJi5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLm1hdC1zZWxlY3Qge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zZWxlY3QtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2VsZWN0Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNlbGVjdC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNlbGVjdC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjogIG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItc2lkZS1ib3JkZXI6IHNvbGlkIDFweCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1jb250YWluZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZHJhd2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1kcmF3ZXItcHVzaCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgICAvLyBUaGUgZWxldmF0aW9uIG9mIHotMTYgaXMgbm90ZWQgaW4gdGhlIGRlc2lnbiBzcGVjaWZpY2F0aW9ucy5cbiAgICAgIC8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL25hdmlnYXRpb24tZHJhd2VyLmh0bWxcbiAgICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLXRoZW1lLWVsZXZhdGlvbigxNiwgJGNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXNpZGVuYXYtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNpZGVuYXYnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc2lkZW5hdi1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNpZGVuYXYtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkaXMtZGFyazogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS10aGVtZS1lbGV2YXRpb24oMSwgJGNvbmZpZyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRtYXQtZ3JleSwgJHRodW1iLXVuY2hlY2tlZC1odWUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFyLXVuY2hlY2tlZC1jb2xvcjtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC1zbGlkZS10b2dnbGUtY29udGVudCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGUtdG9nZ2xlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwYWxldHRlKSB7XG4gIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gIC5tYXQtc2xpZGVyLXRodW1iLFxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgJG9wYWNpdHk6IDAuMjtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJG9wYWNpdHkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAkbWF0LXNsaWRlci1vZmYtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYtYWN0aXZlKTtcbiAgJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1taW4pO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5OiAwLjc7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG1hdC1zbGlkZXItdGljay1vcGFjaXR5KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgJG9wYWNpdHk6IDAuMTI7XG4gICAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgJG9wYWNpdHkpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgICAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuXG4gICAgLy8gYG1hdC1jb2xvcmAgdXNlcyBgcmdiYWAgZm9yIHRoZSBvcGFjaXR5IHdoaWNoIHdvbid0IHdvcmsgd2l0aFxuICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgQGlmICh0eXBlLW9mKCRtYXQtc2xpZGVyLXRpY2stY29sb3IpICE9IGNvbG9yKSB7XG4gICAgICBvcGFjaXR5OiAkbWF0LXNsaWRlci10aWNrLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zbGlkZXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGVyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXN0ZXBwZXItaGVhZGVyLWhlaWdodDogNzJweCAhZGVmYXVsdDtcbi8vIE1pbmltdW0gaGVpZ2h0IGZvciBoaWdoZXN0IGRlbnNpdHkgc3RlcHBlcidzIGlzIGRldGVybWluZWQgYmFzZWQgb24gaG93IG11Y2hcbi8vIHN0ZXBwZXIgaGVhZGVycyBjYW4gc2hyaW5rIHVudGlsIHRoZSBzdGVwIGljb24gb3Igc3RlcCBsYWJlbCBleGNlZWQuIFdlIGNhbid0IHVzZVxuLy8gYSB2YWx1ZSBiZWxvdyBgNDJweGAgYmVjYXVzZSB0aGUgb3B0aW9uYWwgbGFiZWwgZm9yIHN0ZXBzIHdvdWxkIG90aGVyd2lzZSBleGNlZWQuXG4kbWF0LXN0ZXBwZXItaGVhZGVyLW1pbmltdW0taGVpZ2h0OiA0MnB4ICFkZWZhdWx0O1xuJG1hdC1zdGVwcGVyLWhlYWRlci1tYXhpbXVtLWhlaWdodDogJG1hdC1zdGVwcGVyLWhlYWRlci1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtc3RlcHBlci1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXN0ZXBwZXItaGVhZGVyLWhlaWdodCxcbiAgICBtYXhpbXVtOiAkbWF0LXN0ZXBwZXItaGVhZGVyLW1heGltdW0taGVpZ2h0LFxuICAgIG1pbmltdW06ICRtYXQtc3RlcHBlci1oZWFkZXItbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cbi8vIE5vdGU6IFRoZXNlIHZhcmlhYmxlcyBhcmUgbm90IGRlbm90ZWQgd2l0aCBgIWRlZmF1bHRgIGJlY2F1c2UgdGhleSBhcmUgdXNlZCBpbiB0aGUgbm9uLXRoZW1lXG4vLyBjb21wb25lbnQgc3R5bGVzLiBNb2RpZnlpbmcgdGhlc2UgdmFyaWFibGVzIGRvZXMgbm90IGhhdmUgdGhlIGRlc2lyZWQgZWZmZWN0IGZvciBjb25zdW1lcnMuXG4kbWF0LXN0ZXBwZXItbGFiZWwtaGVhZGVyLWhlaWdodDogMjRweDtcbiRtYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tdG9wLWdhcDogMTZweDtcbiRtYXQtc3RlcHBlci1sYWJlbC1taW4td2lkdGg6IDUwcHg7XG5cbiRtYXQtdmVydGljYWwtc3RlcHBlci1jb250ZW50LW1hcmdpbjogMzZweDtcblxuJG1hdC1zdGVwcGVyLXNpZGUtZ2FwOiAyNHB4O1xuJG1hdC1zdGVwcGVyLWxpbmUtd2lkdGg6IDFweDtcbiRtYXQtc3RlcHBlci1saW5lLWdhcDogOHB4O1xuXG4kbWF0LXN0ZXAtc3ViLWxhYmVsLWZvbnQtc2l6ZTogMTJweDtcbiRtYXQtc3RlcC1oZWFkZXItaWNvbi1zaXplOiAxNnB4O1xuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IG1hdC1wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZSgkbWF0LXN0ZXBwZXItZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuICAkdmVydGljYWwtcGFkZGluZzogKCRoZWlnaHQgLSAkbWF0LXN0ZXBwZXItbGFiZWwtaGVhZGVyLWhlaWdodCkgLyAyO1xuXG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgIGhlaWdodDogJGhlaWdodDtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcixcbiAgICAubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6ICR2ZXJ0aWNhbC1wYWRkaW5nICRtYXQtc3RlcHBlci1zaWRlLWdhcDtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmVzIHRoYXQgdGhlIHZlcnRpY2FsIGxpbmVzIGZvciB0aGUgc3RlcCBjb250ZW50IGV4Y2VlZCBpbnRvIHRoZSBzdGVwXG4gICAgLy8gaGVhZGVycyB3aXRoIGEgZ2l2ZW4gZGlzdGFuY2UgKGAkbWF0LXN0ZXBwZXItbGluZS1nYXBgKSB0byB0aGUgc3RlcCBpY29uLlxuICAgIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgICAgdG9wOiAkbWF0LXN0ZXBwZXItbGluZS1nYXAgLSAkdmVydGljYWwtcGFkZGluZztcbiAgICAgIGJvdHRvbTogJG1hdC1zdGVwcGVyLWxpbmUtZ2FwIC0gJHZlcnRpY2FsLXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBob3Jpem9udGFsIGxpbmVzIGZvciB0aGUgc3RlcCBoZWFkZXIgYXJlIGNlbnRlcmVkIHZlcnRpY2FsbHkuXG4gICAgLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIge1xuICAgICAgJjo6YWZ0ZXIsICY6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogJHZlcnRpY2FsLXBhZGRpbmcgKyAkbWF0LXN0ZXBwZXItbGFiZWwtaGVhZGVyLWhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlcyB0aGF0IHRoZSBob3Jpem9udGFsIGxpbmUgZm9yIHRoZSBzdGVwIGNvbnRlbnQgaXMgYWxpZ25lZCBjZW50ZXJlZCB2ZXJ0aWNhbGx5LlxuICAgIC5tYXQtc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20gLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgICB0b3A6ICR2ZXJ0aWNhbC1wYWRkaW5nICsgJG1hdC1zdGVwcGVyLWxhYmVsLWhlYWRlci1oZWlnaHQgLyAyO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXN0ZXBwZXInKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc3RlcHBlci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc3RlcHBlci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXNvcnQtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFuc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBfbWF0LXNvcnQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LXNvcnQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtc29ydC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNvcnQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy1jb2xvcigkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtY29sb3ItY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkY29uZmlnLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkY29uZmlnLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkY29uZmlnLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgID4gLm1hdC10YWItaGVhZGVyLCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIE5vdGUgdGhhdCB0aGVzZSBzZWxlY3RvcnMgdGFyZ2V0IGRpcmVjdCBkZXNjZW5kYW50cyBzb1xuICAvLyB0aGF0IHRoZSBzdHlsZXMgZG9uJ3QgYXBwbHkgdG8gYW55IG5lc3RlZCB0YWIgZ3JvdXBzLlxuXG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gID4gLm1hdC10YWItaGVhZGVyLCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbiAgPiAubWF0LXRhYi1saW5rcyAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuICA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtdGFiLWdyb3VwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10YWJzJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRhYnMtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbi8vIE1pbmltdW0gaGVpZ2h0IGZvciB0b29sYmFyJ3MgaW4gdGhlIGhpZ2hlc3QgZGVuc2l0eSBpcyBkaWZmaWN1bHQgdG8gZGV0ZXJtaW5lIGJlY2F1c2Vcbi8vIGRldmVsb3BlcnMgY2FuIHByb2plY3QgYXJiaXRyYXJ5IGNvbnRlbnQuIFdlIHVzZSBhIG1pbmltdW0gdmFsdWUgdGhhdCBlbnN1cmVzIHRoYXQgbW9zdFxuLy8gY29tbW9uIGNvbnRlbnQgKGUuZy4gaWNvbiBidXR0b25zKSBkb2VzIG5vdCBleGNlZWQgdGhlIHJvdyBib3VuZGFyaWVzIGluIGhpZ2hlc3QgZGVuc2l0eS5cbiRtYXQtdG9vbGJhci1taW5pbXVtLWhlaWdodDogNDRweCAhZGVmYXVsdDtcblxuJG1hdC10b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xuJG1hdC10b29sYmFyLW1heGltdW0taGVpZ2h0LWRlc2t0b3A6ICRtYXQtdG9vbGJhci1oZWlnaHQtZGVza3RvcCAhZGVmYXVsdDtcbiRtYXQtdG9vbGJhci1taW5pbXVtLWhlaWdodC1kZXNrdG9wOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xuJG1hdC10b29sYmFyLW1heGltdW0taGVpZ2h0LW1vYmlsZTogJG1hdC10b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XG4kbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQtbW9iaWxlOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtdG9vbGJhci1kZXNrdG9wLWRlbnNpdHktY29uZmlnOiAoXG4gIGhlaWdodDogKFxuICAgIGRlZmF1bHQ6ICRtYXQtdG9vbGJhci1oZWlnaHQtZGVza3RvcCxcbiAgICBtYXhpbXVtOiAkbWF0LXRvb2xiYXItbWF4aW11bS1oZWlnaHQtZGVza3RvcCxcbiAgICBtaW5pbXVtOiAkbWF0LXRvb2xiYXItbWluaW11bS1oZWlnaHQtZGVza3RvcCxcbiAgKVxuKSAhZGVmYXVsdDtcblxuJG1hdC10b29sYmFyLW1vYmlsZS1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXRvb2xiYXItaGVpZ2h0LW1vYmlsZSxcbiAgICBtYXhpbXVtOiAkbWF0LXRvb2xiYXItbWF4aW11bS1oZWlnaHQtbW9iaWxlLFxuICAgIG1pbmltdW06ICRtYXQtdG9vbGJhci1taW5pbXVtLWhlaWdodC1tb2JpbGUsXG4gIClcbikgIWRlZmF1bHQ7XG5cblxuQG1peGluIF9tYXQtdG9vbGJhci1oZWlnaHQoJGhlaWdodCkge1xuICAubWF0LXRvb2xiYXItbXVsdGlwbGUtcm93cyB7XG4gICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgfVxuICAubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRjb25maWcsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCRjb25maWcsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkY29uZmlnLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLWRlbnNpdHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGhlaWdodC1kZXNrdG9wOiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAkbWF0LXRvb2xiYXItZGVza3RvcC1kZW5zaXR5LWNvbmZpZywgJGRlbnNpdHktc2NhbGUsIGhlaWdodCk7XG4gICRoZWlnaHQtbW9iaWxlOiBtYXQtcHJpdmF0ZS1kZW5zaXR5LXByb3AtdmFsdWUoXG4gICAgICAkbWF0LXRvb2xiYXItbW9iaWxlLWRlbnNpdHktY29uZmlnLCAkZGVuc2l0eS1zY2FsZSwgaGVpZ2h0KTtcblxuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1kZW5zaXR5LWxlZ2FjeS1jb21wYXRpYmlsaXR5KCkge1xuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBoZWlnaHQgZm9yIHRoZSB0b29sYmFyLlxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1oZWlnaHQoJGhlaWdodC1kZXNrdG9wKTtcblxuICAgIC8vIEFzIHBlciBzcGVjcywgdG9vbGJhcnMgc2hvdWxkIGhhdmUgYSBkaWZmZXJlbnQgaGVpZ2h0IGluIG1vYmlsZSBkZXZpY2VzLiBUaGlzIGhhcyBiZWVuXG4gICAgLy8gc3BlY2lmaWVkIGluIHRoZSBvbGQgZ3VpZGVsaW5lcyBhbmQgaXMgc3RpbGwgb2JzZXJ2YWJsZSBpbiB0aGUgbmV3IHNwZWNpZmljYXRpb25zIGJ5XG4gICAgLy8gbG9va2luZyBhdCB0aGUgc3BlYyBpbWFnZXMuIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9hcHAtYmFycy10b3AuaHRtbCNhbmF0b215XG4gICAgQG1lZGlhICgkbWF0LXhzbWFsbCkge1xuICAgICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWhlaWdodCgkaGVpZ2h0LW1vYmlsZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdG9vbGJhcicpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10b29sYmFyLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10b29sYmFyLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJGNvbmZpZywgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHRvb2x0aXAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdG9vbHRpcC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdG9vbHRpcCcpIHtcbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgJGRlbnNpdHk6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJHRoZW1lKTtcbiAgICAkdHlwb2dyYXBoeTogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkdGhlbWUpO1xuXG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10b29sdGlwLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbHRpcC1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCRjb25maWcsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRjb25maWcsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLXRoZW1lLWVsZXZhdGlvbig2LCAkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1zbmFjay1iYXItZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc25hY2stYmFyJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNuYWNrLWJhci1kZW5zaXR5KCRkZW5zaXR5KTtcbiAgICB9XG4gICAgQGlmICR0eXBvZ3JhcGh5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1maWxsJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnLW9yLXRoZW1lKSB7XG4gICRjb25maWc6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLWxlZ2FjeS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHt9XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtbGVnYWN5Jykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICAgIEBpZiAkZGVuc2l0eSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1wcml2YXRlLWZvcm0tZmllbGQtbGVnYWN5LWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKSB7XG4gICR0aGVtZTogbWF0LXByaXZhdGUtbGVnYWN5LWdldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtZm9ybS1maWVsZC1vdXRsaW5lJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLW91dGxpbmUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkY29uZmlnLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge31cblxuQG1peGluIG1hdC1wcml2YXRlLWZvcm0tZmllbGQtc3RhbmRhcmQtZGVuc2l0eSgkY29uZmlnLW9yLXRoZW1lKSB7fVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQnKSB7XG4gICAgJGNvbG9yOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkdGhlbWUpO1xuICAgICRkZW5zaXR5OiBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCR0aGVtZSk7XG4gICAgJHR5cG9ncmFwaHk6IG1hdC1nZXQtdHlwb2dyYXBoeS1jb25maWcoJHRoZW1lKTtcblxuICAgIEBpZiAkY29sb3IgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC1jb2xvcigkY29sb3IpO1xuICAgIH1cbiAgICBAaWYgJGRlbnNpdHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLXN0YW5kYXJkLWRlbnNpdHkoJGRlbnNpdHkpO1xuICAgIH1cbiAgICBAaWYgJHR5cG9ncmFwaHkgIT0gbnVsbCB7XG4gICAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5KTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBDb2xvciBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJGNvbmZpZywgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJGNvbmZpZywgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJGNvbmZpZywgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJGNvbmZpZywgaXMtZGFyayk7XG5cbiAgLy8gTGFiZWwgY29sb3JzLiBSZXF1aXJlZCBpcyB1c2VkIGZvciB0aGUgYCpgIHN0YXIgc2hvd24gaW4gdGhlIGxhYmVsLlxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktY29sb3IoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLWNvbG9yKCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLWNvbG9yKCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWNvbG9yKCRjb25maWcpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpO1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWZvcm0tZmllbGQtbGVnYWN5LWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLXN0YW5kYXJkLWRlbnNpdHkoJGRlbnNpdHktc2NhbGUpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1mb3JtLWZpZWxkLWZpbGwtZGVuc2l0eSgkZGVuc2l0eS1zY2FsZSk7XG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWZvcm0tZmllbGQtb3V0bGluZS1kZW5zaXR5KCRkZW5zaXR5LXNjYWxlKTtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1mb3JtLWZpZWxkJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdHJlZS1ub2RlLWhlaWdodDogNDhweCAhZGVmYXVsdDtcbi8vIE1pbmltdW0gaGVpZ2h0IGZvciB0cmVlIG5vZGVzIGluIGhpZ2hlc3QgZGVuc2l0eSBpcyBkaWZmaWN1bHQgdG8gZGV0ZXJtaW5lIGFzXG4vLyBkZXZlbG9wZXJzIGNhbiBkaXNwbGF5IGFyYml0cmFyeSBjb250ZW50LiBXZSB1c2UgYSBtaW5pbXVtIGhlaWdodCB3aGljaCBlbnN1cmVzXG4vLyB0aGF0IGNvbW1vbiBjb250ZW50IHBsYWNlZCBpbiB0cmVlIG5vZGVzIGRvZXMgbm90IGV4Y2VlZCAoZS5nLiBpY29ucywgY2hlY2tib3hlcykuXG4kbWF0LXRyZWUtbm9kZS1taW5pbXVtLWhlaWdodDogMjRweCAhZGVmYXVsdDtcbiRtYXQtdHJlZS1ub2RlLW1heGltdW0taGVpZ2h0OiAkbWF0LXRyZWUtbm9kZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRtYXQtdHJlZS1kZW5zaXR5LWNvbmZpZzogKFxuICBoZWlnaHQ6IChcbiAgICBkZWZhdWx0OiAkbWF0LXRyZWUtbm9kZS1oZWlnaHQsXG4gICAgbWF4aW11bTogJG1hdC10cmVlLW5vZGUtbWF4aW11bS1oZWlnaHQsXG4gICAgbWluaW11bTogJG1hdC10cmVlLW5vZGUtbWluaW11bS1oZWlnaHQsXG4gIClcbikgIWRlZmF1bHQ7XG5cblxuQG1peGluIG1hdC10cmVlLWNvbG9yKCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkY29uZmlnLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGNvbmZpZzogbWF0LWdldC10eXBvZ3JhcGh5LWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgJGRlbnNpdHktc2NhbGU6IG1hdC1nZXQtZGVuc2l0eS1jb25maWcoJGNvbmZpZy1vci10aGVtZSk7XG4gICRoZWlnaHQ6IG1hdC1wcml2YXRlLWRlbnNpdHktcHJvcC12YWx1ZSgkbWF0LXRyZWUtZGVuc2l0eS1jb25maWcsICRkZW5zaXR5LXNjYWxlLCBoZWlnaHQpO1xuXG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWRlbnNpdHktbGVnYWN5LWNvbXBhdGliaWxpdHkoKSB7XG4gICAgLm1hdC10cmVlLW5vZGUge1xuICAgICAgbWluLWhlaWdodDogJGhlaWdodDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpIHtcbiAgJHRoZW1lOiBtYXQtcHJpdmF0ZS1sZWdhY3ktZ2V0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC10cmVlJykge1xuICAgICRjb2xvcjogbWF0LWdldC1jb2xvci1jb25maWcoJHRoZW1lKTtcbiAgICAkZGVuc2l0eTogbWF0LWdldC1kZW5zaXR5LWNvbmZpZygkdGhlbWUpO1xuICAgICR0eXBvZ3JhcGh5OiBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCR0aGVtZSk7XG5cbiAgICBAaWYgJGNvbG9yICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRyZWUtY29sb3IoJGNvbG9yKTtcbiAgICB9XG4gICAgQGlmICRkZW5zaXR5ICE9IG51bGwge1xuICAgICAgQGluY2x1ZGUgbWF0LXRyZWUtZGVuc2l0eSgkZGVuc2l0eSk7XG4gICAgfVxuICAgIEBpZiAkdHlwb2dyYXBoeSAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHkpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZy1vci10aGVtZTogbnVsbCkge1xuICAkY29uZmlnOiBpZihtYXQtcHJpdmF0ZS1pcy10aGVtZS1vYmplY3QoJGNvbmZpZy1vci10aGVtZSksXG4gICAgICBtYXQtZ2V0LXR5cG9ncmFwaHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpLCAkY29uZmlnLW9yLXRoZW1lKTtcblxuICAvLyBJZiBubyBhY3R1YWwgY29sb3IgY29uZmlndXJhdGlvbiBoYXMgYmVlbiBzcGVjaWZpZWQsIGNyZWF0ZSBhIGRlZmF1bHQgb25lLlxuICBAaWYgbm90ICRjb25maWcge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgLy8gVE9ETzogQ09NUC0zMDk6IERvIG5vdCB1c2UgaW5kaXZpZHVhbCBtaXhpbnMuIEluc3RlYWQsIHVzZSB0aGUgYWxsLXRoZW1lIG1peGluIGFuZCBvbmx5XG4gIC8vIHNwZWNpZnkgYSBgdHlwb2dyYXBoeWAgY29uZmlnIHdoaWxlIHNldHRpbmcgYGNvbG9yYCBhbmQgYGRlbnNpdHlgIHRvIGBudWxsYC4gVGhpcyBpcyBjdXJyZW50bHlcbiAgLy8gbm90IHBvc3NpYmxlIGFzIGl0IHdvdWxkIGludHJvZHVjZSBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgZm9yIHR5cG9ncmFwaHkgYmVjYXVzZSB0aGUgYG1hdC1jb3JlYFxuICAvLyBtaXhpbiB0aGF0IGlzIHRyYW5zaXRpdmVseSBsb2FkZWQgYnkgdGhlIGBhbGwtdGhlbWVgIGZpbGUsIGltcG9ydHMgYGFsbC10eXBvZ3JhcGh5YCB3aGljaFxuICAvLyB3b3VsZCB0aGVuIGxvYWQgYGFsbC10aGVtZWAgYWdhaW4uIFRoaXMgdWx0aW1hdGVseSByZXN1bHRzIGEgY2lyY3VsYXIgZGVwZW5kZW5jeS5cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG5cbiAgQGluY2x1ZGUgbWF0LXByaXZhdGUtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtcG9zaXRpb25pbmcoKTtcbiAgQGluY2x1ZGUgX21hdC1tZGMtY29yZSgpO1xufVxuXG5AbWl4aW4gbWF0LWNvcmUtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAkY29uZmlnOiBtYXQtZ2V0LWNvbG9yLWNvbmZpZygkY29uZmlnLW9yLXRoZW1lKTtcbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCRjb25maWcsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JG1hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgbWF0LXByaXZhdGUtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICRjb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkdGhlbWU6IG1hdC1wcml2YXRlLWxlZ2FjeS1nZXQtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIC8vIFdyYXAgdGhlIHN1Yi10aGVtZSBpbmNsdWRlcyBpbiB0aGUgZHVwbGljYXRlIHRoZW1lIHN0eWxlcyBtaXhpbi4gVGhpcyBlbnN1cmVzIHRoYXRcbiAgLy8gdGhlcmUgd29uJ3QgYmUgbXVsdGlwbGUgd2FybmluZ3MuIGUuZy4gaWYgYG1hdC1jb3JlLXRoZW1lYCByZXBvcnRzIGEgd2FybmluZywgdGhlblxuICAvLyB0aGUgaW1wb3J0ZWQgdGhlbWVzIChzdWNoIGFzIGBtYXQtcmlwcGxlLXRoZW1lYCkgc2hvdWxkIG5vdCByZXBvcnQgYWdhaW4uXG4gIEBpbmNsdWRlIG1hdC1wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNvcmUnKSB7XG4gICAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICAgIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgICAkY29sb3I6IG1hdC1nZXQtY29sb3ItY29uZmlnKCR0aGVtZSk7XG4gICAgQGlmICRjb2xvciAhPSBudWxsIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb3JlLWNvbG9yKCRjb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgTURDIHN0eWxlcy4gUHJpdmF0ZSBtaXhpbiBpbmNsdWRlZCB3aXRoIGBtYXQtY29yZWAuXG5AbWl4aW4gX21hdC1tZGMtY29yZSgpIHtcbiAgQGluY2x1ZGUgX21hdC1tZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtcG9zaXRpb25pbmcoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCBlbnN1cmVzIGZvY3VzIGluZGljYXRvciBob3N0IGVsZW1lbnRzIGFyZSBwb3NpdGlvbmVkIHNvIHRoYXQgdGhlIGZvY3VzIGluZGljYXRvclxuLy8gcHNldWRvIGVsZW1lbnQgd2l0aGluIGlzIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGhvc3QuIFByaXZhdGUgbWl4aW4gaW5jbHVkZWQgd2l0aGluXG4vLyBgX21hdC1tZGMtY29yZWAuXG5AbWl4aW4gX21hdC1tZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtcG9zaXRpb25pbmcoKSB7XG4gIC5tYXQtbWRjLWZvY3VzLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZykge1xuICAkZGVkdXBlLWtleTogJ2FuZ3VsYXItbWF0ZXJpYWwtdGhlbWUnO1xuICBAaW5jbHVkZSBtYXQtcHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvci1jb25maWcsICRkZWR1cGUta2V5KSB7XG4gICAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gICAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUtb3ItY29sb3ItY29uZmlnKTtcbiAgICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZS1vci1jb2xvci1jb25maWcpO1xuICAgIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lLW9yLWNvbG9yLWNvbmZpZyk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgY29sb3Igc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtY29sb3IoJGNvbmZpZy1vci10aGVtZSkge1xuICAvLyBJbiBjYXNlIGEgdGhlbWUgb2JqZWN0IGhhcyBiZWVuIHBhc3NlZCBpbnN0ZWFkIG9mIGEgY29uZmlndXJhdGlvbiBmb3JcbiAgLy8gdGhlIGNvbG9yIHN5c3RlbSwgZXh0cmFjdCB0aGUgY29sb3IgY29uZmlnIGZyb20gdGhlIHRoZW1lIG9iamVjdC5cbiAgJGNvbmZpZzogaWYobWF0LXByaXZhdGUtaXMtdGhlbWUtb2JqZWN0KCRjb25maWctb3ItdGhlbWUpLFxuICAgICAgbWF0LWdldC1jb2xvci1jb25maWcoJGNvbmZpZy1vci10aGVtZSksICRjb25maWctb3ItdGhlbWUpO1xuXG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgIEBlcnJvciAnTm8gY29sb3IgY29uZmlndXJhdGlvbiBzcGVjaWZpZWQuJztcbiAgfVxuXG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoKFxuICAgIGNvbG9yOiAkY29uZmlnLFxuICAgIHR5cG9ncmFwaHk6IG51bGwsXG4gICAgZGVuc2l0eTogbnVsbCxcbiAgKSk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgZGVuc2l0eSBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC1kZW5zaXR5KCRjb25maWctb3ItdGhlbWUpIHtcbiAgLy8gSW4gY2FzZSBhIHRoZW1lIG9iamVjdCBoYXMgYmVlbiBwYXNzZWQgaW5zdGVhZCBvZiBhIGNvbmZpZ3VyYXRpb24gZm9yXG4gIC8vIHRoZSBkZW5zaXR5IHN5c3RlbSwgZXh0cmFjdCB0aGUgZGVuc2l0eSBjb25maWcgZnJvbSB0aGUgdGhlbWUgb2JqZWN0LlxuICAkY29uZmlnOiBpZihtYXQtcHJpdmF0ZS1pcy10aGVtZS1vYmplY3QoJGNvbmZpZy1vci10aGVtZSksXG4gICAgICBtYXQtZ2V0LWRlbnNpdHktY29uZmlnKCRjb25maWctb3ItdGhlbWUpLCAkY29uZmlnLW9yLXRoZW1lKTtcblxuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICBAZXJyb3IgJ05vIGRlbnNpdHkgY29uZmlndXJhdGlvbiBzcGVjaWZpZWQuJztcbiAgfVxuXG4gIC8vIFRPRE86IENPTVAtMzA5OiBEbyBub3QgdXNlIGluZGl2aWR1YWwgbWl4aW5zLiBJbnN0ZWFkLCB1c2UgdGhlIGFsbC10aGVtZSBtaXhpbiBhbmQgb25seVxuICAvLyBzcGVjaWZ5IGEgYGRlbnNpdHlgIGNvbmZpZyB3aGlsZSBzZXR0aW5nIGBjb2xvcmAgYW5kIGB0eXBvZ3JhcGh5YCB0byBgbnVsbGAuIFRoaXMgaXMgY3VycmVudGx5XG4gIC8vIG5vdCBwb3NzaWJsZSBhcyBpdCB3b3VsZCBpbnRyb2R1Y2UgYSBjaXJjdWxhciBkZXBlbmRlbmN5IGZvciBkZW5zaXR5IGJlY2F1c2UgdGhlIGBtYXQtY29yZWBcbiAgLy8gbWl4aW4gdGhhdCBpcyB0cmFuc2l0aXZlbHkgbG9hZGVkIGJ5IHRoZSBgYWxsLXRoZW1lYCBmaWxlLCBpbXBvcnRzIGBhbGwtZGVuc2l0eWAgd2hpY2hcbiAgLy8gd291bGQgdGhlbiBsb2FkIGBhbGwtdGhlbWVgIGFnYWluLiBUaGlzIHVsdGltYXRlbHkgcmVzdWx0cyBhIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG5cbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC1kZW5zaXR5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci1kZW5zaXR5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci1kZW5zaXR5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS1kZW5zaXR5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLWRlbnNpdHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWRlbnNpdHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLWRlbnNpdHkoJGNvbmZpZyk7XG59XG5cblxuXG4iLCIvKkN1c3RvbWVyLWhlYWRlciovXG4vKiBDb2xvcnMgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXRlcmlhbC90aGVtZS1taXhpbi1hcGkgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXRlcmlhbC90aGVtZS1taXhpbi1hcGkgKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsIC5tYXQtdHlwb2dyYXBoeSBoMSB7XG4gIGZvbnQ6IDQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDIsIC5tYXQtdGl0bGUsIC5tYXQtdHlwb2dyYXBoeSBoMiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAubWF0LXR5cG9ncmFwaHkgaDMge1xuICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgLm1hdC10eXBvZ3JhcGh5IGg0IHtcbiAgZm9udDogNDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cblxuLm1hdC1oNSwgLm1hdC10eXBvZ3JhcGh5IGg1IHtcbiAgZm9udDogNDAwIGNhbGMoMTRweCAqIDAuODMpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5tYXQtaDYsIC5tYXQtdHlwb2dyYXBoeSBoNiB7XG4gIGZvbnQ6IDQwMCBjYWxjKDE0cHggKiAwLjY3KS8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gIGZvbnQ6IDUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtYm9keSwgLm1hdC1ib2R5LTEsIC5tYXQtdHlwb2dyYXBoeSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG4ubWF0LWJvZHkgcCwgLm1hdC1ib2R5LTEgcCwgLm1hdC10eXBvZ3JhcGh5IHAge1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICBmb250OiA0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWRpc3BsYXktNCwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00IHtcbiAgZm9udDogMzAwIDExMnB4LzExMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgbWFyZ2luOiAwIDAgNTZweDtcbn1cblxuLm1hdC1kaXNwbGF5LTMsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMyB7XG4gIGZvbnQ6IDQwMCA1NnB4LzU2cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWRpc3BsYXktMiwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0yIHtcbiAgZm9udDogNDAwIDQ1cHgvNDhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWRpc3BsYXktMSwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xIHtcbiAgZm9udDogNDAwIDM0cHgvNDBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUsXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWNoaXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4ubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWNhbGVuZGFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHkge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbi5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbn1cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJvcmRlci10b3A6IDAuODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTAuODQzNzVlbTtcbiAgcGFkZGluZy10b3A6IDAuODQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIG1hcmdpbi10b3A6IDAuNjY2NjY2NjY2N2VtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjQzNzVlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNTMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMjgxMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjI1ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMC41NDE2NjY2NjY3ZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSk7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSk7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKDAuNzUpO1xuICB9XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuNzVlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMDkzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuODQzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSxcbi5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMC4wNjI1ZW07XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc3RlcC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC10b29sYmFyLFxuLm1hdC10b29sYmFyIGgxLFxuLm1hdC10b29sYmFyIGgyLFxuLm1hdC10b29sYmFyIGgzLFxuLm1hdC10b29sYmFyIGg0LFxuLm1hdC10b29sYmFyIGg1LFxuLm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LXRvb2x0aXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10cmVlLW5vZGUsXG4ubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1yaXBwbGU6bm90KDplbXB0eSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQge1xuICAvKiEqL1xufVxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQge1xuICAvKiEqL1xufVxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG59XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tYXQtb3B0aW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLCAubWF0LW9wdGlvbjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cblxuLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmYzEwNztcbn1cblxuLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG4ubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXIge1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICBjb2xvcjogI2IwYjBiMDtcbn1cblxuLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG59XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xufVxuXG4ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkLFxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2IwYjBiMDtcbn1cblxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXozIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejYge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo3IHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMCB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMSB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMiB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNCB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNiB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MTcge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE4IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxOSB7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjAge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyMSB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejIyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjMge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyNCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5tYXQtYmFkZ2UtYWNjZW50IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbi5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtOHB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtOHB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE2cHg7XG59XG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE2cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNnB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC04cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtOHB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC04cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC04cHg7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTExcHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtMTFweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTIycHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTIycHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0yMnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTIycHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xMXB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xMXB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTFweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xMXB4O1xufVxuXG4ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtMTRweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTE0cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTI4cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMjhweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjhweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTI4cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTE0cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTRweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTRweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE0cHg7XG59XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG4ubWF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbi5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmxhdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LW1pbmktZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sIC5tYXQtZmFiLm1hdC13YXJuLCAubWF0LW1pbmktZmFiLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LXJhaXNlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWZhYjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1taW5pLWZhYjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAubWF0LW1pbmktZmFiLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4ubWF0LWJ1dHRvbi10b2dnbGUgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuW2Rpcj1ydGxdIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG59XG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xufVxuXG4ubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWNhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gIGZpbGw6ICNmYWZhZmE7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICBzdHJva2U6ICNmYWZhZmEgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwO1xufVxuLm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiAjYjBiMGIwO1xufVxuLm1hdC1jaGVja2JveC1kaXNhYmxlZCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2hlY2tib3ggLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG59XG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xufVxuLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU0O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG5tYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG5bbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbm1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtY2FsZW5kYXItYXJyb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQsXG4ubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1zZXBhcmF0b3Ige1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWluLXByZXZpZXcge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2NiwgNjYsIDY2LCAwLjIpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4ubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDE3MSwgMCwgMC4yKTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUsXG5bZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDY2LCA2NiwgNjYsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSxcbltkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDY2LCA2NiwgNjYsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbi5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIDAuNCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NiwgNjYsIDAuMyk7XG59XG5cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjIpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDE5MywgNywgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNTUsIDE5MywgNywgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYThkYWI1O1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuNCk7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlciA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCksXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjMpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzEsIDAsIDAuMik7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjQ0LCA2NywgNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNDQsIDY3LCA1NCwgMC4yKSA1MCUsIHJnYmEoMjQ5LCAxNzEsIDAsIDAuMikgNTAlKTtcbn1cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM0NmEzNWU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjQpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjMpO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2ZmYzEwNztcbn1cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZGF0ZS1yYW5nZS1pbnB1dC1pbm5lcltkaXNhYmxlZF0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYWN0aW9uLXJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbn1cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCB7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1oaW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZXJyb3Ige1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmZmMxMDc7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLm1hdC1pY29uLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6ICM0MjQyNDI7XG59XG4ubWF0LWljb24ubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuLm1hdC1pY29uLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtYWNjZW50IC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjZmZjMTA3O1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uOmhvdmVyLCAubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLFxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpob3Zlcixcbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMsXG4ubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLFxuLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLCAubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LW1lbnUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtbWVudS1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcixcbi5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSAubWF0LWljb24tbm8tY29sb3Ige1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNmZmVjYjM7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjYjM7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNmZmNkZDI7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xufVxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjNDI0MjQyO1xufVxuLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUge1xuICBzdHJva2U6ICNmZmMxMDc7XG59XG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICM0MjQyNDI7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmZjMTA3O1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cblxuLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogI2ZmYzEwNztcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbltkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjU0KTtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAwLjU0KTtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDQsIDY3LCA1NCwgMC41NCk7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDY2LCA2NiwgMC4yKTtcbn1cblxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XG59XG5cbi5tYXQtd2FybiAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjIpO1xufVxuXG4ubWF0LXNsaWRlcjpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cbi5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG59XG5cbi5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuXG4ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIubWF0LWFjY2VudCAubWF0LXN0ZXAtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuLm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4ubWF0LXN0ZXAtaGVhZGVyLm1hdC1hY2NlbnQgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1zdGVwLWhlYWRlci5tYXQtd2FybiAubWF0LXN0ZXAtaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIubWF0LXdhcm4gLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4ubWF0LXN0ZXAtaGVhZGVyLm1hdC13YXJuIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4ubWF0LXN0ZXAtaGVhZGVyLm1hdC13YXJuIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XG4gIGhlaWdodDogNzJweDtcbn1cblxuLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXIsXG4ubWF0LXZlcnRpY2FsLXN0ZXBwZXItaGVhZGVyIHtcbiAgcGFkZGluZzogMjRweCAyNHB4O1xufVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgdG9wOiAtMTZweDtcbiAgYm90dG9tOiAtMTZweDtcbn1cblxuLm1hdC1zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLCAubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlIHtcbiAgdG9wOiAzNnB4O1xufVxuXG4ubWF0LXN0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICB0b3A6IDM2cHg7XG59XG5cbi5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLm1hdC10YWItbmF2LWJhcixcbi5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhcixcbi5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXRhYi1ncm91cFtjbGFzcyo9bWF0LWJhY2tncm91bmQtXSAubWF0LXRhYi1oZWFkZXIsXG4ubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzYsIDE3OSwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtaW5rLWJhciwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNSwgMjEwLCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtaW5rLWJhciwgLm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rcyAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGlua3MgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM2LCAxNzksIDAuMyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGlua3MgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmtzIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNSwgMjEwLCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGlua3MgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmtzIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10b29sYmFyLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtdG9vbGJhci5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4ubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWUsXG4ubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csXG4ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cblxuLm1hdC10b29sYmFyLW11bHRpcGxlLXJvd3Mge1xuICBtaW4taGVpZ2h0OiA2NHB4O1xufVxuXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XG4gIGhlaWdodDogNjRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5tYXQtdG9vbGJhci1tdWx0aXBsZS1yb3dzIHtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICB9XG5cbiAgLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAgIGhlaWdodDogNTZweDtcbiAgfVxufVxuLm1hdC10b29sdGlwIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5NywgOTcsIDk3LCAwLjkpO1xufVxuXG4ubWF0LXRyZWUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLm1hdC10cmVlLW5vZGUsXG4ubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC10cmVlLW5vZGUge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xufVxuXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGNvbG9yOiAjZmZjMTA3O1xufVxuXG4uZGFya2EgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5kYXJrYSAubWF0LW9wdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LW9wdGlvbjpob3Zlcjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpLCAuZGFya2EgLm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG59XG4uZGFya2EgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG59XG4uZGFya2EgLm1hdC1vcHRpb24ubWF0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogIzUzNmRmZTtcbn1cbi5kYXJrYSAubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtd2FybiAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlciB7XG4gIGNvbG9yOiAjMzAzMDMwO1xufVxuLmRhcmthIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgY29sb3I6ICM2ODY4Njg7XG59XG4uZGFya2EgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4uZGFya2EgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4uZGFya2EgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbi5kYXJrYSAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLmRhcmthIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLmRhcmthIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsXG4uZGFya2EgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzY4Njg2ODtcbn1cbi5kYXJrYSAubWF0LWFwcC1iYWNrZ3JvdW5kLCAuZGFya2EubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtZWxldmF0aW9uLXowIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZWxldmF0aW9uLXoxIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1lbGV2YXRpb24tejMge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZWxldmF0aW9uLXo0IHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1lbGV2YXRpb24tejUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16NiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16NyB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16OSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MTAge1xuICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZWxldmF0aW9uLXoxMSB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1lbGV2YXRpb24tejEyIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MTMge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZWxldmF0aW9uLXoxNCB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1lbGV2YXRpb24tejE1IHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MTYge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MTcge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MTgge1xuICBib3gtc2hhZG93OiAwcHggOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MTkge1xuICBib3gtc2hhZG93OiAwcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MjAge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1lbGV2YXRpb24tejIxIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZWxldmF0aW9uLXoyMiB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWVsZXZhdGlvbi16MjMge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1lbGV2YXRpb24tejI0IHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRhcmthIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAuZGFya2EgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgb3V0bGluZTogc29saWQgMXB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZGFya2EgLm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzljMjdiMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRhcmthIC5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzZlNmU2ZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZGFya2EgLm5nLWFuaW1hdGUtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50LFxuLmRhcmthIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG4uZGFya2EgLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG4uZGFya2EgLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC04cHg7XG59XG4uZGFya2EgLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtOHB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTZweDtcbn1cbltkaXI9cnRsXSAuZGFya2EgLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTZweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE2cHg7XG59XG5bZGlyPXJ0bF0gLmRhcmthIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTZweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLThweDtcbn1cbltkaXI9cnRsXSAuZGFya2EgLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtOHB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtOHB4O1xufVxuW2Rpcj1ydGxdIC5kYXJrYSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLThweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtMTFweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtMTFweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yMnB4O1xufVxuW2Rpcj1ydGxdIC5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMjJweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0yMnB4O1xufVxuW2Rpcj1ydGxdIC5kYXJrYSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yMnB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTExcHg7XG59XG5bZGlyPXJ0bF0gLmRhcmthIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xMXB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTExcHg7XG59XG5bZGlyPXJ0bF0gLmRhcmthIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTExcHg7XG59XG4uZGFya2EgLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC0xNHB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTE0cHg7XG59XG4uZGFya2EgLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yOHB4O1xufVxuW2Rpcj1ydGxdIC5kYXJrYSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0yOHB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjhweDtcbn1cbltkaXI9cnRsXSAuZGFya2EgLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yOHB4O1xufVxuLmRhcmthIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTRweDtcbn1cbltkaXI9cnRsXSAuZGFya2EgLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTRweDtcbn1cbi5kYXJrYSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE0cHg7XG59XG5bZGlyPXJ0bF0gLmRhcmthIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTRweDtcbn1cbi5kYXJrYSAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLCAuZGFya2EgLm1hdC1pY29uLWJ1dHRvbiwgLmRhcmthIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uZGFya2EgLm1hdC1idXR0b24ubWF0LXByaW1hcnksIC5kYXJrYSAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LCAuZGFya2EgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5kYXJrYSAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LWJ1dHRvbi5tYXQtd2FybiwgLmRhcmthIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtaWNvbi1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4uZGFya2EgLm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLmRhcmthIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLmRhcmthIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAuZGFya2EgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLmRhcmthIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLmRhcmthIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAuZGFya2EgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmthIC5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBvcGFjaXR5OiAwLjE7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cbi5kYXJrYSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZmxhdC1idXR0b24sIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24sIC5kYXJrYSAubWF0LWZhYiwgLmRhcmthIC5tYXQtbWluaS1mYWIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG59XG4uZGFya2EgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLmRhcmthIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLmRhcmthIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAuZGFya2EgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLmRhcmthIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLmRhcmthIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLmRhcmthIC5tYXQtZmFiLm1hdC13YXJuLCAuZGFya2EgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtZmxhdC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtZmFiLm1hdC13YXJuLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZC5tYXQtYnV0dG9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAuZGFya2EgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAuZGFya2EgLm1hdC1mYWIubWF0LXByaW1hcnksIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNmRmZTtcbn1cbi5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLmRhcmthIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sIC5kYXJrYSAubWF0LWZhYi5tYXQtd2FybiwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQsIC5kYXJrYSAubWF0LWZhYi5tYXQtcHJpbWFyeS5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1mYWIubWF0LXdhcm4ubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtZmFiLm1hdC1idXR0b24tZGlzYWJsZWQubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkubWF0LWJ1dHRvbi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudC5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1taW5pLWZhYi5tYXQtd2Fybi5tYXQtYnV0dG9uLWRpc2FibGVkLCAuZGFya2EgLm1hdC1taW5pLWZhYi5tYXQtYnV0dG9uLWRpc2FibGVkLm1hdC1idXR0b24tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLmRhcmthIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAuZGFya2EgLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLmRhcmthIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5kYXJrYSAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLmRhcmthIC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4uZGFya2EgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLmRhcmthIC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LXJhaXNlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1idXR0b24tZGlzYWJsZWQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5kYXJrYSAubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZmFiOm5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAuZGFya2EgLm1hdC1taW5pLWZhYjpub3QoLm1hdC1idXR0b24tZGlzYWJsZWQpOmFjdGl2ZTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLmRhcmthIC5tYXQtbWluaS1mYWIubWF0LWJ1dHRvbi1kaXNhYmxlZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbi5kYXJrYSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4uZGFya2EgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzQyNDI0Mjtcbn1cbi5kYXJrYSAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5kYXJrYSBbZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4uZGFya2EgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cbi5kYXJrYSAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLmRhcmthIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5kYXJrYSAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gIGZpbGw6ICMzMDMwMzA7XG59XG4uZGFya2EgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogIzMwMzAzMCAhaW1wb3J0YW50O1xufVxuLmRhcmthIC5tYXQtY2hlY2tib3gtbWl4ZWRtYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcbn1cbi5kYXJrYSAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAuZGFya2EgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAuZGFya2EgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAuZGFya2EgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtY2hlY2tlZCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5kYXJrYSAubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODY4Njg7XG59XG4uZGFya2EgLm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjg2ODY4O1xufVxuLmRhcmthIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uZGFya2EgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1jaGVja2JveC1jaGVja2VkOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LFxuLmRhcmthIC5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcbn1cbi5kYXJrYSAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5kYXJrYSAubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4uZGFya2EgLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41NDtcbn1cbi5kYXJrYSAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uZGFya2EgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmUge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5kYXJrYSAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmRhcmthIC5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtdGFibGUgdGhlYWQsIC5kYXJrYSAubWF0LXRhYmxlIHRib2R5LCAuZGFya2EgLm1hdC10YWJsZSB0Zm9vdCxcbi5kYXJrYSBtYXQtaGVhZGVyLXJvdywgLmRhcmthIG1hdC1yb3csIC5kYXJrYSBtYXQtZm9vdGVyLXJvdyxcbi5kYXJrYSBbbWF0LWhlYWRlci1yb3ddLCAuZGFya2EgW21hdC1yb3ddLCAuZGFya2EgW21hdC1mb290ZXItcm93XSxcbi5kYXJrYSAubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG4uZGFya2EgbWF0LXJvdywgLmRhcmthIG1hdC1oZWFkZXItcm93LCAuZGFya2EgbWF0LWZvb3Rlci1yb3csXG4uZGFya2EgdGgubWF0LWhlYWRlci1jZWxsLCAuZGFya2EgdGQubWF0LWNlbGwsIC5kYXJrYSB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtY2VsbCwgLmRhcmthIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCxcbi5kYXJrYSAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWRhdGUtcmFuZ2UtaW5wdXQtc2VwYXJhdG9yIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LWNhbGVuZGFyLWJvZHktaW4tcHJldmlldyB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg4MywgMTA5LCAyNTQsIDAuMik7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFxuLmRhcmthIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoODMsIDEwOSwgMjU0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1lbmQ6OmJlZm9yZSxcbi5kYXJrYSBbZGlyPXJ0bF0gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLXN0YXJ0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSg4MywgMTA5LCAyNTQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNhOGRhYjU7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkLFxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cbi5kYXJrYSAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2ZGZlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MywgMTA5LCAyNTQsIDAuNCk7XG59XG4uZGFya2EgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5kYXJrYSAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCksXG4uZGFya2EgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCAxMDksIDI1NCwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAxNzEsIDAsIDAuMik7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSxcbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgW2Rpcj1ydGxdIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWluLWNvbXBhcmlzb24tcmFuZ2UubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2E4ZGFiNTtcbn1cbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ2YTM1ZTtcbn1cbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjQpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1pZGVudGljYWwpLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tcmFuZ2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgMzQsIDAuMik7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1jb21wYXJpc29uLXJhbmdlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWJyaWRnZS1zdGFydDo6YmVmb3JlLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2UtZW5kOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCA4NywgMzQsIDAuMikgNTAlLCByZ2JhKDI0OSwgMTcxLCAwLCAwLjIpIDUwJSk7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24tYnJpZGdlLWVuZDo6YmVmb3JlLFxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIFtkaXI9cnRsXSAubWF0LWNhbGVuZGFyLWJvZHktY29tcGFyaXNvbi1icmlkZ2Utc3RhcnQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDI1NSwgODcsIDM0LCAwLjIpIDUwJSwgcmdiYSgyNDksIDE3MSwgMCwgMC4yKSA1MCUpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCxcbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZS5tYXQtY2FsZW5kYXItYm9keS1pbi1yYW5nZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYThkYWI1O1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCxcbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktaW4tY29tcGFyaXNvbi1yYW5nZSA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM0NmEzNWU7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4NywgMzQsIDAuNCk7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWNvbXBhcmlzb24taWRlbnRpY2FsKSxcbi5kYXJrYSAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCksXG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1jb21wYXJpc29uLWlkZW50aWNhbCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgODcsIDM0LCAwLjMpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1kYXRlLXJhbmdlLWlucHV0LWlubmVyW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtYWN0aW9uLXJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbYXJpYS1kaXNhYmxlZD10cnVlXSksIC5kYXJrYSAubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pLCAuZGFya2EgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbn1cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLmRhcmthIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgfVxufVxuLmRhcmthIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4uZGFya2EgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uZGFya2EgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLmRhcmthIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPXRydWVdIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5kYXJrYSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm4ge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQsXG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1lcnJvciB7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG59XG4uZGFya2EgLm1hdC1pY29uLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1pY29uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LWljb24ubWF0LXdhcm4ge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5kYXJrYSAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQsXG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1pbnB1dC1lbGVtZW50OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LWlucHV0LWVsZW1lbnQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtaW5wdXQtZWxlbWVudDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtaW5wdXQtZWxlbWVudCBvcHRpb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5kYXJrYSAubWF0LWlucHV0LWVsZW1lbnQgb3B0aW9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5kYXJrYSAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmRhcmthIC5tYXQtbGlzdC1vcHRpb246aG92ZXIsIC5kYXJrYSAubWF0LWxpc3Qtb3B0aW9uOmZvY3VzLFxuLmRhcmthIC5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsXG4uZGFya2EgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cyxcbi5kYXJrYSAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLFxuLmRhcmthIC5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xufVxuLmRhcmthIC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uLCAuZGFya2EgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246aG92ZXIsIC5kYXJrYSAubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1tZW51LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzQyNDI0Mjtcbn1cbi5kYXJrYSAubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LW1lbnUtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdLCAuZGFya2EgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlcixcbi5kYXJrYSAubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0gLm1hdC1pY29uLW5vLWNvbG9yIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5kYXJrYSAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4uZGFya2EgLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4uZGFya2EgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksXG4uZGFya2EgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLFxuLmRhcmthIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG59XG4uZGFya2EgLm1hdC1wYWdpbmF0b3Ige1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtcGFnaW5hdG9yLFxuLmRhcmthIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5kYXJrYSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4uZGFya2EgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXBhZ2luYXRvci1maXJzdCxcbi5kYXJrYSAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHdoaXRlO1xufVxuLmRhcmthIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbi5kYXJrYSAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4uZGFya2EgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4uZGFya2EgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjYzVjYWU5O1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWNhZTk7XG59XG4uZGFya2EgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNlMWJlZTc7XG59XG4uZGFya2EgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFiZWU3O1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjZmZjY2JjO1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjYmM7XG59XG4uZGFya2EgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsIC5kYXJrYSAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwgLmRhcmthIC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSB7XG4gIHN0cm9rZTogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLCAuZGFya2EgLm1hdC1zcGlubmVyLm1hdC13YXJuIGNpcmNsZSB7XG4gIHN0cm9rZTogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLCAuZGFya2EgLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNmRmZTtcbn1cbi5kYXJrYSAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4uZGFya2EgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSwgLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLCAuZGFya2EgLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4uZGFya2EgLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4uZGFya2EgLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5kYXJrYSAubWF0LXNlbGVjdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6ICM0MjQyNDI7XG59XG4uZGFya2EgLm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmQge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5kYXJrYSBbZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmRhcmthIFtkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODksIDE4OSwgMC42KTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDM5LCAxNzYsIDAuNTQpO1xufVxuLmRhcmthIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xufVxuLmRhcmthIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNmRmZTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCAxMDksIDI1NCwgMC41NCk7XG59XG4uZGFya2EgLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4NywgMzQsIDAuNTQpO1xufVxuLmRhcmthIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG59XG4uZGFya2EgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4uZGFya2EgLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4uZGFya2EgLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLFxuLmRhcmthIC5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG59XG4uZGFya2EgLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDgzLCAxMDksIDI1NCwgMC4yKTtcbn1cbi5kYXJrYSAubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLmRhcmthIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLFxuLmRhcmthIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbn1cbi5kYXJrYSAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKTtcbn1cbi5kYXJrYSAubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5kYXJrYSAubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsXG4uZGFya2EgLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbn1cbi5kYXJrYSAubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXdhcm4gLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA4NywgMzQsIDAuMik7XG59XG4uZGFya2EgLm1hdC1zbGlkZXI6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbi5kYXJrYSAuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLmRhcmthIC5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4uZGFya2EgLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4uZGFya2EgLm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uZGFya2EgLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYixcbi5kYXJrYSAubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYixcbi5kYXJrYSAubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuLmRhcmthIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uZGFya2EgLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3ZlciAubWF0LXNsaWRlci10aHVtYiwgLmRhcmthIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5kYXJrYSAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5kYXJrYSAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuLmRhcmthIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsIC5kYXJrYSAubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5kYXJrYSAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbn1cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLmRhcmthIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbn1cbi5kYXJrYSAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCxcbi5kYXJrYSAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG4uZGFya2EgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4uZGFya2EgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzZkZmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXN0ZXAtaGVhZGVyLm1hdC1hY2NlbnQgLm1hdC1zdGVwLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1zdGVwLWhlYWRlci5tYXQtYWNjZW50IC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIubWF0LWFjY2VudCAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIubWF0LWFjY2VudCAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIubWF0LXdhcm4gLm1hdC1zdGVwLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC1zdGVwLWhlYWRlci5tYXQtd2FybiAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbi5kYXJrYSAubWF0LXN0ZXAtaGVhZGVyLm1hdC13YXJuIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4uZGFya2EgLm1hdC1zdGVwLWhlYWRlci5tYXQtd2FybiAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgY29sb3I6ICNmZjU3MjI7XG59XG4uZGFya2EgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5kYXJrYSAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbi5kYXJrYSAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuLmRhcmthIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogI2M2YzZjNjtcbn1cbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLFxuLmRhcmthIC5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFyLFxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1sYWJlbCwgLmRhcmthIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uZGFya2EgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIC5tYXQtdGFiLWhlYWRlcixcbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMjAyLCAyMzMsIDAuMyk7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM2ZGZlO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtaW5rLWJhciwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWluay1iYXIsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4uZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDE5MCwgMjMxLCAwLjMpO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtaW5rLWJhciwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA0LCAxODgsIDAuMyk7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1pbmstYmFyLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtaW5rLWJhciwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWluay1iYXIsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4uZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDIwMiwgMjMzLCAwLjMpO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIsIC5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItbGluay1jb250YWluZXIsIC5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNmRmZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmssIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmtzIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rcyAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlciAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI1LCAxOTAsIDIzMSwgMC4zKTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIsIC5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluaywgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtdGFiLWxhYmVsLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmtzIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sXG4uZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rcyAubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50ID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciAubWF0LXJpcHBsZS1lbGVtZW50LCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4uZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA0LCAxODgsIDAuMyk7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciwgLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1saW5rLWNvbnRhaW5lciwgLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC10YWItbGFiZWwsIC5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluaywgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbCwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAuZGFya2EgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbixcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGlua3MgLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsIC5kYXJrYSAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmtzIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUsXG4uZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyIC5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAuZGFya2EgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLmRhcmthIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gPiAubWF0LXRhYi1oZWFkZXIgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5kYXJrYSAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuID4gLm1hdC10YWItbGluay1jb250YWluZXIgLm1hdC1yaXBwbGUtZWxlbWVudCwgLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWhlYWRlciAubWF0LXJpcHBsZS1lbGVtZW50LFxuLmRhcmthIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiA+IC5tYXQtdGFiLWxpbmstY29udGFpbmVyIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC10b29sYmFyLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kOiAjOWMyN2IwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZGFya2EgLm1hdC10b29sYmFyLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZDogI2ZmNTcyMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhcmthIC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuLmRhcmthIC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuLmRhcmthIC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cbi5kYXJrYSAubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLmRhcmthIC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLmRhcmthIC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC12YWx1ZSxcbi5kYXJrYSAubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csXG4uZGFya2EgLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmRhcmthIC5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuLmRhcmthIC5tYXQtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTcsIDk3LCA5NywgMC45KTtcbn1cbi5kYXJrYSAubWF0LXRyZWUge1xuICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xufVxuLmRhcmthIC5tYXQtdHJlZS1ub2RlLFxuLmRhcmthIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYXJrYSAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhcmthIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4vKnRhYmxlIDc0MHB4IDw9IHdpZHRoIDw9IDEwMjRweCAqL1xuOjpuZy1kZWVwIC5mYWxzZS1zdHlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5zdWNjZXNzLXN0eWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzEwNztcbn0iXX0= */";
      /***/
    },

    /***/
    "jRnb":
    /*!*********************************************************************!*\
      !*** ./src/app/core/store/customer/infor/customer-infor.actions.ts ***!
      \*********************************************************************/

    /*! exports provided: GET, GET_SUCCESS, GET_FAILED, EDIT, DELETE, customerGetInforAction, customerGetInforSuccessAction, customerGetInforFailedAction, customerEditInforAction, customerDeleteInforAction */

    /***/
    function jRnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET", function () {
        return GET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_SUCCESS", function () {
        return GET_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GET_FAILED", function () {
        return GET_FAILED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EDIT", function () {
        return EDIT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DELETE", function () {
        return DELETE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerGetInforAction", function () {
        return customerGetInforAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerGetInforSuccessAction", function () {
        return customerGetInforSuccessAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerGetInforFailedAction", function () {
        return customerGetInforFailedAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerEditInforAction", function () {
        return customerEditInforAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerDeleteInforAction", function () {
        return customerDeleteInforAction;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var GET = '@CustomerInfor/GetCustomerInfor';
      var GET_SUCCESS = '@CustomerInfor/GetCustomerInforSuccess';
      var GET_FAILED = '@CustomerInfor/GetCustomerInforFailed'; //

      var EDIT = '@CustomerInfor/EditCustomerInfor'; //

      var DELETE = '@CustomerInfor/DeleteCustomerInfor';
      var customerGetInforAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET);
      var customerGetInforSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerGetInforFailedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerEditInforAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(EDIT, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerDeleteInforAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "kH6Y":
    /*!***********************************************************************************!*\
      !*** ./src/app/core/services/comon-services/cookie-service/app-cookie.service.ts ***!
      \***********************************************************************************/

    /*! exports provided: AppCookieService */

    /***/
    function kH6Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCookieService", function () {
        return AppCookieService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AppCookieService = /*#__PURE__*/function () {
        function AppCookieService() {
          _classCallCheck(this, AppCookieService);

          this.cookieStore = {};
          this.parseCookies(document.cookie);
        } // static loadInitialState() {
        // 	return Object.keys(document.cookie).reduce((state: any, name) => {
        // 		console.log('trong cookie');
        // 		//console.log(document.cookie);
        // 		// console.log(state);
        // 		// console.log(name);
        // 		//console.log(document.cookie);
        // 	}, {});
        // }


        _createClass(AppCookieService, [{
          key: "parseCookies",
          value: function parseCookies() {
            var cookies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.cookie;
            this.cookieStore = {};

            if (!!cookies === false) {
              return;
            }

            var cookiesArr = cookies.split(';');

            var _iterator = _createForOfIteratorHelper(cookiesArr),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var cookie = _step.value;
                var cookieArr = cookie.split('=');
                this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "get",
          value: function get(key) {
            this.parseCookies();
            return !!this.cookieStore[key] ? this.cookieStore[key] : null;
          }
        }, {
          key: "remove",
          value: function remove(key) {
            document.cookie = "".concat(key, " =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
          } //old setting

        }, {
          key: "setCookieWthoutExpTime",
          value: function setCookieWthoutExpTime(key, value) {
            document.cookie = key + '=' + (value || '');
          }
        }, {
          key: "set",
          value: function set(name, value, expireDays) {
            var d = new Date();
            d.setTime(expireDays * 1000);
            var expires = "expires=".concat(d.toUTCString()); //const cpath: string = path ? `; path=${path}` : '';

            document.cookie = "".concat(name, "=").concat(value, "; ").concat(expires);
          }
        }]);

        return AppCookieService;
      }();

      AppCookieService.ctorParameters = function () {
        return [];
      };

      AppCookieService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AppCookieService);
      /***/
    },

    /***/
    "kbxs":
    /*!**********************************************!*\
      !*** ./src/app/core/utils/URL/URL_String.ts ***!
      \**********************************************/

    /*! exports provided: URL_String */

    /***/
    function kbxs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL_String", function () {
        return URL_String;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var URL_String = function URL_String() {
        _classCallCheck(this, URL_String);

        this.hostBase = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api");
      };
      /***/

    },

    /***/
    "kiQV":
    /*!**********************!*\
      !*** ./package.json ***!
      \**********************/

    /*! exports provided: name, version, _comment_, author, description, engines, publisher, homepage, bugs, repository, config, bin, scripts, private, dependencies, devDependencies, default */

    /***/
    function kiQV(module) {
      module.exports = JSON.parse("{\"name\":\"personalblogfrontend\",\"version\":\"0.0.1\",\"_comment_\":\"version instruction: https://medium.com/@tolvaly.zs/how-to-version-number-angular-6-applications-4436c03a3bd3\",\"author\":{\"name\":\"Hoàng Sơn\",\"email\":\"hoangson.hust@gmail.com\",\"url\":\"https://github.com/sonhoang23\"},\"description\":\"Bài Tập Làm Đồ Án Tốt Nghiệp\",\"engines\":{\"node\":\"^12.0.0\"},\"publisher\":\"Hoàng Sơn\",\"homepage\":\"https://github.com/sonhoang23/Final-Hust-Project-HoangSon\",\"bugs\":{\"url\":\"https://github.com/sonhoang23/Final-Hust-Project-HoangSon/issues\",\"email\":\"hoangson.hust@gmail.com\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/sonhoang23/Final-Hust-Project-HoangSon\"},\"config\":{},\"bin\":{},\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --open\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"format\":\"prettier\"},\"private\":true,\"dependencies\":{\"@angular-builders/custom-webpack\":\"^11.1.1\",\"@angular/animations\":\"^11.1.2\",\"@angular/cdk\":\"^11.2.3\",\"@angular/common\":\"^11.1.2\",\"@angular/compiler\":\"^11.1.2\",\"@angular/core\":\"^11.1.2\",\"@angular/fire\":\"^6.1.0-rc.4\",\"@angular/forms\":\"^11.1.2\",\"@angular/material\":\"^11.2.3\",\"@angular/platform-browser\":\"^11.1.2\",\"@angular/platform-browser-dynamic\":\"^11.1.2\",\"@angular/router\":\"^11.1.2\",\"@ant-design/icons-angular\":\"^11.0.1\",\"@aspnet/signalr\":\"^1.1.4\",\"@auth0/angular-jwt\":\"^5.0.2\",\"@ckeditor/ckeditor5-angular\":\"^2.0.1\",\"@ckeditor/ckeditor5-build-classic\":\"^25.0.0\",\"@microsoft/signalr\":\"^5.0.4\",\"@ngrx/effects\":\"^11.0.1\",\"@ngrx/store\":\"^11.0.1\",\"@ngrx/store-devtools\":\"^11.0.1\",\"@ngx-translate/core\":\"^13.0.0\",\"@ngx-translate/http-loader\":\"^6.0.0\",\"@swimlane/ngx-charts\":\"^18.0.1\",\"angular-responsive-carousel\":\"^2.0.2\",\"chart.js\":\"^2.9.4\",\"cors\":\"^2.8.5\",\"firebase\":\"^8.2.10\",\"hammerjs\":\"^2.0.8\",\"jwt-decode\":\"^3.1.2\",\"ng-zorro-antd\":\"^11.2.0\",\"ng2-charts\":\"^2.4.2\",\"ngx-infinite-scroll\":\"^10.0.1\",\"ngx-pagination\":\"^5.0.0\",\"ngx-spinner\":\"^0.0.2\",\"rxjs\":\"^6.6.6\",\"triple-beam\":\"^1.3.0\",\"tslib\":\"^2.1.0\",\"zone.js\":\"^0.11.4\"},\"devDependencies\":{\"@angular-devkit/architect\":\"^0.1102.3\",\"@angular-devkit/build-angular\":\"^0.1100.7\",\"@angular-eslint/builder\":\"1.2.0\",\"@angular-eslint/eslint-plugin\":\"1.2.0\",\"@angular-eslint/eslint-plugin-template\":\"1.2.0\",\"@angular-eslint/schematics\":\"1.2.0\",\"@angular-eslint/template-parser\":\"1.2.0\",\"@angular/cli\":\"^11.2.3\",\"@angular/compiler-cli\":\"^11.1.2\",\"@angular/language-service\":\"^11.1.2\",\"@types/jasmine\":\"^3.6.6\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^14.14.33\",\"@typescript-eslint/eslint-plugin\":\"4.3.0\",\"@typescript-eslint/parser\":\"4.3.0\",\"codelyzer\":\"^6.0.1\",\"eslint\":\"^7.6.0\",\"eslint-config-airbnb\":\"^18.2.1\",\"eslint-plugin-import\":\"2.22.1\",\"eslint-plugin-jsdoc\":\"30.7.6\",\"eslint-plugin-jsx-a11y\":\"^6.4.1\",\"eslint-plugin-prefer-arrow\":\"1.2.2\",\"eslint-plugin-react\":\"^7.21.5\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"firebase-tools\":\"^7.2.4\",\"fuzzy\":\"^0.1.3\",\"gh-pages\":\"^3.1.0\",\"inquirer\":\"^6.2.2\",\"inquirer-autocomplete-prompt\":\"^1.0.1\",\"jasmine-core\":\"~3.6.0\",\"jasmine-spec-reporter\":\"~6.0.0\",\"karma\":\"^6.0.4\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.3\",\"karma-jasmine\":\"~4.0.1\",\"karma-jasmine-html-reporter\":\"^1.5.4\",\"less\":\"^3.13.1\",\"less-loader\":\"^7.3.0\",\"open\":\"^7.4.2\",\"prettier\":\"^2.2.1\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~9.1.1\",\"tslint\":\"~5.20.1\",\"typescript\":\"^4.1.5\"}}");
      /***/
    },

    /***/
    "l9FX":
    /*!**********************************************!*\
      !*** ./src/app/core/store/app/core.state.ts ***!
      \**********************************************/

    /*! exports provided: reducers, metaReducers */

    /***/
    function l9FX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducers", function () {
        return reducers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
        return metaReducers;
      });
      /* harmony import */


      var src_app_core_store_customer_infor_customer_infor_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/store/customer/infor/customer-infor.reducer */
      "rQGp");
      /* harmony import */


      var src_app_core_store_customer_login_customer_login_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/store/customer/login/customer-login.reducer */
      "3nDU");
      /* harmony import */


      var _admin_setting_admin_setting_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../admin/setting/admin-setting.reducer */
      "zNHH");
      /* harmony import */


      var _customer_setting_customer_setting_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../customer/setting/customer-setting.reducer */
      "5ZKo");
      /* harmony import */


      var _seller_login_login_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../seller/login/login.reducer */
      "d3kp");
      /* harmony import */


      var _seller_setting_seller_setting_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../seller/setting/seller-setting.reducer */
      "pzU4");
      /* harmony import */


      var _init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./init-state-from-local-storage.reducer */
      "Vyv5"); //export const selectLoginState = createFeatureSelector<SellerAppState, LoginState>('sellerLogin');

      /**
       * Our state is composed of a map of action reducer functions.
       * These reducer functions are called with each dispatched action
       * and the current or initial state and return a new immutable state.
       */


      var reducers = {
        sellersettings: _seller_setting_seller_setting_reducer__WEBPACK_IMPORTED_MODULE_5__["sellerSettingReducer"],
        sellerLogin: _seller_login_login_reducer__WEBPACK_IMPORTED_MODULE_4__["loginReducer"],
        customersettings: _customer_setting_customer_setting_reducer__WEBPACK_IMPORTED_MODULE_3__["customerSettingReducer"],
        adminsettings: _admin_setting_admin_setting_reducer__WEBPACK_IMPORTED_MODULE_2__["adminSettingReducer"],
        customerlogin: src_app_core_store_customer_login_customer_login_reducer__WEBPACK_IMPORTED_MODULE_1__["customerLoginReducer"],
        customerinfor: src_app_core_store_customer_infor_customer_infor_reducer__WEBPACK_IMPORTED_MODULE_0__["customerInforReducer"]
      };
      /**
       * By default, @ngrx/store uses combineReducers with the reducer map to compose
       * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
       * that will be composed to form the root meta-reducer.
       */

      var metaReducers = [_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_6__["initStateFromLocalStorage"]];
      /*https://github.com/ngrx/platform/blob/127ccc99663442ea1a902e459ae9fb1041fd7f80/example-app/app/reducers/index.ts */
      // console.log all actions
      // export function logger(reducer: ActionReducer<SellerAppState>): ActionReducer<SellerAppState> {
      // 	console.log('reducer', reducer);
      // 	return function(state: SellerAppState, action: any): SellerAppState {
      // 	 // console.log('state', state);
      // 	 // console.log('action', action);
      // 	  return reducer(state, action);
      // 	};
      //   }

      /***/
    },

    /***/
    "px64":
    /*!********************************************************************************************!*\
      !*** ./src/app/core/services/comon-services/local-storage-service/localstorage.service.ts ***!
      \********************************************************************************************/

    /*! exports provided: LocalStorageService */

    /***/
    function px64(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
        return LocalStorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* eslint-disable @typescript-eslint/member-ordering */


      var APP_PREFIX = 'BOOKY-';

      var LocalStorageService = /*#__PURE__*/function () {
        function LocalStorageService() {
          _classCallCheck(this, LocalStorageService);
        }

        _createClass(LocalStorageService, [{
          key: "removeAllLocalStorage",
          value: function removeAllLocalStorage() {
            localStorage.clear();
          }
        }, {
          key: "setItem",
          value: function setItem(key, value) {
            localStorage.setItem("".concat(APP_PREFIX).concat(key), JSON.stringify(value));
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            return JSON.parse(localStorage.getItem("".concat(APP_PREFIX).concat(key)));
          }
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            console.log("".concat(APP_PREFIX).concat(key));
            localStorage.removeItem("".concat(APP_PREFIX).concat(key));
          }
          /** Tests that localStorage exists, can be written to, and read from. */

        }, {
          key: "testLocalStorage",
          value: function testLocalStorage() {
            var testValue = 'testValue';
            var testKey = 'testKey';
            var errorMessage = 'localStorage did not return expected value';
            this.setItem(testKey, testValue);
            var retrievedValue = this.getItem(testKey);
            this.removeItem(testKey);

            if (retrievedValue !== testValue) {
              throw new Error(errorMessage);
            }
          }
        }], [{
          key: "loadInitialState",
          value: function loadInitialState() {
            return Object.keys(localStorage).reduce(function (state, storageKey) {
              if (storageKey.includes(APP_PREFIX)) {
                //có chứa "BOOKY-"
                var stateKeys = storageKey.replace(APP_PREFIX, '') //xóa "BOOKY-"
                .toLowerCase() //"BOOKY-sellersettings" => "sellersettings"
                .split('.').map(function (key) {
                  return key.split('-').map(function (token, index) {
                    return index === 0 ? token : token.charAt(0).toUpperCase() + token.slice(1);
                  }).join('');
                });
                var currentStateRef = state;
                stateKeys.forEach(function (key, index) {
                  if (index === stateKeys.length - 1) {
                    currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
                    return;
                  }

                  currentStateRef[key] = currentStateRef[key] || {};
                  currentStateRef = currentStateRef[key];
                });
              } // console.log('loadInitialState state: ');
              // console.log(state);
              // console.log('loadInitialState storageKey: ' + storageKey);


              return state;
            }, {});
          }
        }]);

        return LocalStorageService;
      }();

      LocalStorageService.ctorParameters = function () {
        return [];
      };

      LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LocalStorageService);
      /***/
    },

    /***/
    "pzU4":
    /*!*********************************************************************!*\
      !*** ./src/app/core/store/seller/setting/seller-setting.reducer.ts ***!
      \*********************************************************************/

    /*! exports provided: initialState, sellerSettingReducer */

    /***/
    function pzU4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sellerSettingReducer", function () {
        return sellerSettingReducer;
      });
      /* harmony import */


      var _seller_setting_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./seller-setting.actions */
      "IS2O");

      var initialState = {
        language: 'seller-vn',
        theme: 'default'
      };

      function sellerSettingReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _seller_setting_actions__WEBPACK_IMPORTED_MODULE_0__["SETTING_CHANGE_LANGUAGE"]:
            return Object.assign(Object.assign({}, state), action);

          case _seller_setting_actions__WEBPACK_IMPORTED_MODULE_0__["SETTING_CHANGE_THEME"]:
            return Object.assign(Object.assign({}, state), action);

          default:
            return Object.assign({}, state);
        }
      }
      /***/

    },

    /***/
    "rQGp":
    /*!*********************************************************************!*\
      !*** ./src/app/core/store/customer/infor/customer-infor.reducer.ts ***!
      \*********************************************************************/

    /*! exports provided: customerInforReducer */

    /***/
    function rQGp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerInforReducer", function () {
        return customerInforReducer;
      });
      /* harmony import */


      var _customer_infor_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customer-infor.actions */
      "jRnb");
      /* eslint-disable prefer-arrow/prefer-arrow-functions */


      var initialState = {
        customer: null,
        status: 'loading',
        message: ''
      };

      function customerInforReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _customer_infor_actions__WEBPACK_IMPORTED_MODULE_0__["GET"]:
            return Object.assign({}, state);

          case _customer_infor_actions__WEBPACK_IMPORTED_MODULE_0__["GET_SUCCESS"]:
            return Object.assign(Object.assign({}, state), {
              customer: action.customer,
              status: 'sucessed',
              message: action.message
            });

          case _customer_infor_actions__WEBPACK_IMPORTED_MODULE_0__["GET_FAILED"]:
            return Object.assign(Object.assign({}, state), {
              message: action.message
            });

          case _customer_infor_actions__WEBPACK_IMPORTED_MODULE_0__["EDIT"]:
            return Object.assign(Object.assign({}, state), {
              customer: action.customer
            });

          case _customer_infor_actions__WEBPACK_IMPORTED_MODULE_0__["DELETE"]:
            return Object.assign({}, state);

          default:
            return Object.assign({}, state);
        }
      }
      /***/

    },

    /***/
    "rtm9":
    /*!******************************************************!*\
      !*** ./src/app/features/test/test-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: TestRoutingModule */

    /***/
    function rtm9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestRoutingModule", function () {
        return TestRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test.component */
      "zklV");

      var routes = [{
        path: '',
        component: _test_component__WEBPACK_IMPORTED_MODULE_3__["TestComponent"]
      }];

      var TestRoutingModule = function TestRoutingModule() {
        _classCallCheck(this, TestRoutingModule);
      };

      TestRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TestRoutingModule);
      /***/
    },

    /***/
    "sMhy":
    /*!*********************************************************************!*\
      !*** ./src/app/core/store/customer/login/customer-login.actions.ts ***!
      \*********************************************************************/

    /*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_RESET, LOGOUT_SUCCESS, LOGOUT_FAILED, customerLoginAction, customerLoginSuccessAction, customerLoginFailedAction, customerLoginResetAction, customerLogoutSuccessAction, customerLogoutFailedAction */

    /***/
    function sMhy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN", function () {
        return LOGIN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function () {
        return LOGIN_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN_FAILED", function () {
        return LOGIN_FAILED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGIN_RESET", function () {
        return LOGIN_RESET;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGOUT_SUCCESS", function () {
        return LOGOUT_SUCCESS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOGOUT_FAILED", function () {
        return LOGOUT_FAILED;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLoginAction", function () {
        return customerLoginAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLoginSuccessAction", function () {
        return customerLoginSuccessAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLoginFailedAction", function () {
        return customerLoginFailedAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLoginResetAction", function () {
        return customerLoginResetAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLogoutSuccessAction", function () {
        return customerLogoutSuccessAction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customerLogoutFailedAction", function () {
        return customerLogoutFailedAction;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "tqRt");

      var LOGIN = '@Authen/CustomerLogin';
      var LOGIN_SUCCESS = '@Authen/CustomerLoginSuccess';
      var LOGIN_FAILED = '@Authen/CustomerLoginFailed';
      var LOGIN_RESET = '@Authen/CustomerLoginReset';
      var LOGOUT_SUCCESS = '@Authen/CustomerLogoutSuccess';
      var LOGOUT_FAILED = '@Authen/CustomerLogutFailed';
      var customerLoginAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerLoginSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerLoginFailedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerLoginResetAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_RESET, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerLogoutSuccessAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var customerLogoutFailedAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT_FAILED, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: 'seller',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-seller-seller-module */
          [__webpack_require__.e("default~components-admin-body-Author-Author-module~components-admin-body-publisher-publisher-module~~0ae09f18"), __webpack_require__.e("default~components-admin-body-Author-Author-module~components-admin-body-publisher-publisher-module~~226f9d23"), __webpack_require__.e("default~features-admin-admin-module~features-customer-customer-module~features-seller-seller-module"), __webpack_require__.e("default~features-customer-customer-module~features-seller-seller-module"), __webpack_require__.e("common"), __webpack_require__.e("features-seller-seller-module")]).then(__webpack_require__.bind(null,
          /*! ./features/seller/seller.module */
          "0fuU")).then(function (m) {
            return m.SellerModule;
          });
        },
        data: {
          breadcrumb: 'Home'
        }
      }, {
        path: 'admin',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-admin-admin-module */
          [__webpack_require__.e("default~features-admin-admin-module~features-customer-customer-module~features-seller-seller-module"), __webpack_require__.e("common"), __webpack_require__.e("features-admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./features/admin/admin.module */
          "xDfr")).then(function (m) {
            return m.AdminModule;
          });
        }
      }, {
        path: 'shipper',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-shipper-shipper-module */
          "features-shipper-shipper-module").then(__webpack_require__.bind(null,
          /*! ./features/shipper/shipper.module */
          "s5kl")).then(function (m) {
            return m.ShipperModule;
          });
        },
        data: {
          breadcrumb: 'Home'
        }
      }, {
        path: '',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | features-customer-customer-module */
          [__webpack_require__.e("default~features-admin-admin-module~features-customer-customer-module~features-seller-seller-module"), __webpack_require__.e("default~components-admin-body-admin-order-admin-order-module~features-customer-customer-module~selle~e1b3973e"), __webpack_require__.e("default~features-customer-customer-module~features-seller-seller-module"), __webpack_require__.e("common"), __webpack_require__.e("features-customer-customer-module")]).then(__webpack_require__.bind(null,
          /*! ./features/customer/customer.module */
          "qqRV")).then(function (m) {
            return m.CustomerModule;
          });
        }
      }, {
        path: 'test',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./features/test/test.module */
          "FRRm")).then(function (m) {
            return m.TestModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "xZP7":
    /*!************************************************************!*\
      !*** ./src/app/core/utils/URL/admin-url/admin-url-base.ts ***!
      \************************************************************/

    /*! exports provided: AdminUrlBase */

    /***/
    function xZP7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUrlBase", function () {
        return AdminUrlBase;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/utils/URL/URL_String */
      "kbxs");

      var AdminUrlBase = /*#__PURE__*/function (_src_app_core_utils_U3) {
        _inherits(AdminUrlBase, _src_app_core_utils_U3);

        var _super5 = _createSuper(AdminUrlBase);

        function AdminUrlBase() {
          var _this8;

          _classCallCheck(this, AdminUrlBase);

          _this8 = _super5.call(this);
          _this8.adminUrl = _this8.hostBase + '/admin';
          return _this8;
        }

        return AdminUrlBase;
      }(src_app_core_utils_URL_URL_String__WEBPACK_IMPORTED_MODULE_2__["URL_String"]);

      AdminUrlBase.ctorParameters = function () {
        return [];
      };

      AdminUrlBase = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminUrlBase);
      /***/
    },

    /***/
    "zNHH":
    /*!*******************************************************************!*\
      !*** ./src/app/core/store/admin/setting/admin-setting.reducer.ts ***!
      \*******************************************************************/

    /*! exports provided: initialState, adminSettingReducer */

    /***/
    function zNHH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "adminSettingReducer", function () {
        return adminSettingReducer;
      });
      /* harmony import */


      var _admin_setting_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./admin-setting.actions */
      "8kNQ");

      var initialState = {
        language: 'admin-vn',
        theme: 'default'
      };

      var adminSettingReducer = function adminSettingReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
          case _admin_setting_actions__WEBPACK_IMPORTED_MODULE_0__["SETTING_CHANGE_LANGUAGE"]:
            return Object.assign(Object.assign({}, state), action);

          case _admin_setting_actions__WEBPACK_IMPORTED_MODULE_0__["SETTING_CHANGE_THEME"]:
            return Object.assign(Object.assign({}, state), action);

          default:
            return Object.assign({}, state);
        }
      };
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


      var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hammerjs */
      "yLV6");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zklV":
    /*!*************************************************!*\
      !*** ./src/app/features/test/test.component.ts ***!
      \*************************************************/

    /*! exports provided: TestComponent */

    /***/
    function zklV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestComponent", function () {
        return TestComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_test_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./test.component.html */
      "FsL/");
      /* harmony import */


      var _test_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test.component.less */
      "BcRE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TestComponent = /*#__PURE__*/function () {
        function TestComponent() {
          _classCallCheck(this, TestComponent);
        }

        _createClass(TestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TestComponent;
      }();

      TestComponent.ctorParameters = function () {
        return [];
      };

      TestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test',
        template: _raw_loader_test_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TestComponent);
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