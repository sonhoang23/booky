(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-customer-author-customer-author-module"], {
    /***/
    "ARRg":
    /*!***********************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-author/customer-author/customer-author.component.less ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ARRg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1hdXRob3IuY29tcG9uZW50Lmxlc3MifQ== */";
      /***/
    },

    /***/
    "IRZT":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-author/customer-author.module.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: CustomerAuthorModule */

    /***/
    function IRZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerAuthorModule", function () {
        return CustomerAuthorModule;
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


      var _customer_author_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-author-routing.module */
      "eyHd");
      /* harmony import */


      var _customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customer-author/customer-author.component */
      "QLjM");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "MNke");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/module/core.module */
      "gfFi");

      var CustomerAuthorModule = function CustomerAuthorModule() {
        _classCallCheck(this, CustomerAuthorModule);
      };

      CustomerAuthorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_4__["CustomerAuthorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _customer_author_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerAuthorRoutingModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"]]
      })], CustomerAuthorModule);
      /***/
    },

    /***/
    "QKqP":
    /*!************************************************************************************!*\
      !*** ./src/app/core/utils/URL/customer-url/customer-author/customer-url-author.ts ***!
      \************************************************************************************/

    /*! exports provided: CustomerUrlAuthor */

    /***/
    function QKqP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerUrlAuthor", function () {
        return CustomerUrlAuthor;
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


      var _customer_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../customer-url-base */
      "1zjI");

      var CustomerUrlAuthor = /*#__PURE__*/function (_customer_url_base__W) {
        _inherits(CustomerUrlAuthor, _customer_url_base__W);

        var _super = _createSuper(CustomerUrlAuthor);

        function CustomerUrlAuthor() {
          _classCallCheck(this, CustomerUrlAuthor);

          return _super.apply(this, arguments);
        }

        _createClass(CustomerUrlAuthor, [{
          key: "getAuthor",
          value: function getAuthor(authorId) {
            return this.customerUrl + '/author/' + authorId;
          }
        }]);

        return CustomerUrlAuthor;
      }(_customer_url_base__WEBPACK_IMPORTED_MODULE_2__["CustomerUrlBase"]);

      CustomerUrlAuthor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CustomerUrlAuthor);
      /***/
    },

    /***/
    "QLjM":
    /*!*********************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-author/customer-author/customer-author.component.ts ***!
      \*********************************************************************************************************************************/

    /*! exports provided: CustomerAuthorComponent */

    /***/
    function QLjM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerAuthorComponent", function () {
        return CustomerAuthorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customer_author_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customer-author.component.html */
      "brWK");
      /* harmony import */


      var _customer_author_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customer-author.component.less */
      "ARRg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/internal/operators/takeUntil */
      "IW2O");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/error-handler/app-error-handler.service */
      "Bp2A");
      /* harmony import */


      var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/notification/notifications/customer/notification.service */
      "7IKN");
      /* harmony import */


      var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/comon-services/destroy-service/destroy.service */
      "ekmL");
      /* harmony import */


      var src_app_core_services_customer_author_author_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/customer/author/author.service */
      "vD09");

      var CustomerAuthorComponent = /*#__PURE__*/function () {
        function CustomerAuthorComponent(authorService, route, notificationService, destroy$, appErrorHandler) {
          _classCallCheck(this, CustomerAuthorComponent);

          this.authorService = authorService;
          this.route = route;
          this.notificationService = notificationService;
          this.destroy$ = destroy$;
          this.appErrorHandler = appErrorHandler;
          this.isLoading = true; //skelton

          this.isNotHaveData = false;
          this.authorId = 1;
          this.authorResponse = {};
        }

        _createClass(CustomerAuthorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading = true;

            if (this.route.snapshot.paramMap.get('authorId')) {
              this.authorId = +this.route.snapshot.paramMap.get('authorId');
              console.log(this.authorId);
              this.getAuthor(this.authorId);
            }
          }
        }, {
          key: "getAuthor",
          value: function getAuthor(authorId) {
            var _this = this;

            this.authorService.getAuthor(authorId).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (result) {
              console.log(result);

              if (result.isSuccessed) {
                if (result.resultObj) {
                  console.log(result);
                  _this.authorResponse = result.resultObj;
                  _this.isLoading = false;
                }
              } else {
                if (result.message) {
                  _this.notificationService.showErrorNotification(result.message);
                }
              }
            }, function (error) {
              _this.appErrorHandler.handleErrorWithNoti(error);
            }, function () {});
          }
        }]);

        return CustomerAuthorComponent;
      }();

      CustomerAuthorComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_customer_author_author_service__WEBPACK_IMPORTED_MODULE_9__["AuthorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
        }, {
          type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"]
        }, {
          type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandler"]
        }];
      };

      CustomerAuthorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-author',
        template: _raw_loader_customer_author_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"]],
        styles: [_customer_author_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomerAuthorComponent);
      /***/
    },

    /***/
    "brWK":
    /*!*************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/customer-author/customer-author/customer-author.component.html ***!
      \*************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function brWK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\n<ng-template #completedLoading>\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\n\t\t<span> Không Tìm Thấy Tác Gỉa </span>\n\t</nz-empty>\n\t<ng-template #haveData>\n\t\t<div class=\"grid wide\">\n\t\t\t<nz-page-header>\n\t\t\t\t<!--breadcrumb-->\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t\t\t<!--title-->\n\t\t\t\t<nz-page-header-title></nz-page-header-title>\n\t\t\t\t<!--subtitle-->\n\t\t\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t\t\t<!--content-->\n\t\t\t\t<nz-page-header-content>\n\t\t\t\t\n\t\t\t\t</nz-page-header-content>\n\t\t\t</nz-page-header>\n\t\t</div>\n\t</ng-template>\n</ng-template>\n";
      /***/
    },

    /***/
    "eyHd":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-author/customer-author-routing.module.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: CustomerAuthorRoutingModule */

    /***/
    function eyHd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerAuthorRoutingModule", function () {
        return CustomerAuthorRoutingModule;
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


      var _customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-author/customer-author.component */
      "QLjM");

      var routes = [{
        path: '',
        component: _customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_3__["CustomerAuthorComponent"]
      }];

      var CustomerAuthorRoutingModule = function CustomerAuthorRoutingModule() {
        _classCallCheck(this, CustomerAuthorRoutingModule);
      };

      CustomerAuthorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CustomerAuthorRoutingModule);
      /***/
    },

    /***/
    "vD09":
    /*!*****************************************************************!*\
      !*** ./src/app/core/services/customer/author/author.service.ts ***!
      \*****************************************************************/

    /*! exports provided: AuthorService */

    /***/
    function vD09(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorService", function () {
        return AuthorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_utils_URL_customer_url_customer_author_customer_url_author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/utils/URL/customer-url/customer-author/customer-url-author */
      "QKqP");

      var AuthorService = /*#__PURE__*/function () {
        function AuthorService(http, customerUrlAuthor) {
          _classCallCheck(this, AuthorService);

          this.http = http;
          this.customerUrlAuthor = customerUrlAuthor;
        }

        _createClass(AuthorService, [{
          key: "getAuthor",
          value: function getAuthor(authorId) {
            return this.http.get(this.customerUrlAuthor.getAuthor(authorId));
          }
        }]);

        return AuthorService;
      }();

      AuthorService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_core_utils_URL_customer_url_customer_author_customer_url_author__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlAuthor"]
        }];
      };

      AuthorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthorService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-customer-body-modules-customer-author-customer-author-module-es5.js.map