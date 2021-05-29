(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-publisher-publisher-module"], {
    /***/
    "BB3/":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/publisher/components/publisher/publisher.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BB3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\r\n<ng-template #completedLoading>\r\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\r\n\t\t<span> Không Tìm Thấy Tác Gỉa </span>\r\n\t</nz-empty>\r\n\t<ng-template #haveData>\r\n\t\t<div class=\"grid wide\">\r\n\t\t\t<nz-page-header>\r\n\t\t\t\t<!--breadcrumb-->\r\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\r\n\t\t\t\t<!--title-->\r\n\t\t\t\t<nz-page-header-title>{{publisherResponseVM.publisherName}}</nz-page-header-title>\r\n\t\t\t\t<!--subtitle-->\r\n\t\t\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\r\n\t\t\t\t<!--content-->\r\n\t\t\t\t<nz-page-header-content>\r\n\t\t\t\t\t<!-- <ckeditor data=\"<p>Hello, world!</p>\"></ckeditor> -->\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col l-12\"><div innerHTML=\"{{publisherResponseVM.description}}\"></div></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</nz-page-header-content>\r\n\t\t\t</nz-page-header>\r\n\t\t</div>\r\n\t</ng-template>\r\n</ng-template>\r\n";
      /***/
    },

    /***/
    "CX42":
    /*!**********************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/publisher/components/publisher-product/publisher-product.component.html ***!
      \**********************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CX42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>publisher-product works!</p>\r\n";
      /***/
    },

    /***/
    "E4+Y":
    /*!***********************************************************************!*\
      !*** ./src/app/core/services/customer/publisher/publisher.service.ts ***!
      \***********************************************************************/

    /*! exports provided: PublisherService */

    /***/
    function E4Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherService", function () {
        return PublisherService;
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


      var src_app_core_utils_URL_customer_url_customer_publisher_customer_url_publisher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/utils/URL/customer-url/customer-publisher/customer-url-publisher */
      "iuYA");

      var PublisherService = /*#__PURE__*/function () {
        function PublisherService(http, customerUrlPublisher) {
          _classCallCheck(this, PublisherService);

          this.http = http;
          this.customerUrlPublisher = customerUrlPublisher;
        }

        _createClass(PublisherService, [{
          key: "getPublisher",
          value: function getPublisher(publisherId) {
            return this.http.get(this.customerUrlPublisher.getPublisher(publisherId));
          }
        }]);

        return PublisherService;
      }();

      PublisherService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_core_utils_URL_customer_url_customer_publisher_customer_url_publisher__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlPublisher"]
        }];
      };

      PublisherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], PublisherService);
      /***/
    },

    /***/
    "JkvO":
    /*!******************************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/publisher/components/publisher-product/publisher-product.component.ts ***!
      \******************************************************************************************************************************************/

    /*! exports provided: PublisherProductComponent */

    /***/
    function JkvO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherProductComponent", function () {
        return PublisherProductComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_publisher_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./publisher-product.component.html */
      "CX42");
      /* harmony import */


      var _publisher_product_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./publisher-product.component.less */
      "W+e6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var PublisherProductComponent = /*#__PURE__*/function () {
        function PublisherProductComponent() {
          _classCallCheck(this, PublisherProductComponent);
        }

        _createClass(PublisherProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PublisherProductComponent;
      }();

      PublisherProductComponent.ctorParameters = function () {
        return [];
      };

      PublisherProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher-product',
        template: _raw_loader_publisher_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publisher_product_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PublisherProductComponent);
      /***/
    },

    /***/
    "TuL5":
    /*!**************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/publisher/publisher.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: PublisherModule */

    /***/
    function TuL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherModule", function () {
        return PublisherModule;
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


      var _publisher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./publisher-routing.module */
      "xXha");
      /* harmony import */


      var _components_publisher_product_publisher_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/publisher-product/publisher-product.component */
      "JkvO");
      /* harmony import */


      var _components_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/publisher/publisher.component */
      "j9aV");
      /* harmony import */


      var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/module/core.module */
      "gfFi");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "MNke");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "PjcS");

      var PublisherModule = function PublisherModule() {
        _classCallCheck(this, PublisherModule);
      };

      PublisherModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_5__["PublisherComponent"], _components_publisher_product_publisher_product_component__WEBPACK_IMPORTED_MODULE_4__["PublisherProductComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _publisher_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherRoutingModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]]
      })], PublisherModule);
      /***/
    },

    /***/
    "W+e6":
    /*!********************************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/publisher/components/publisher-product/publisher-product.component.less ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WE6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXItcHJvZHVjdC5jb21wb25lbnQubGVzcyJ9 */";
      /***/
    },

    /***/
    "Yozy":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/publisher/components/publisher/publisher.component.less ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Yozy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXIuY29tcG9uZW50Lmxlc3MifQ== */";
      /***/
    },

    /***/
    "iuYA":
    /*!******************************************************************************************!*\
      !*** ./src/app/core/utils/URL/customer-url/customer-publisher/customer-url-publisher.ts ***!
      \******************************************************************************************/

    /*! exports provided: CustomerUrlPublisher */

    /***/
    function iuYA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerUrlPublisher", function () {
        return CustomerUrlPublisher;
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

      var CustomerUrlPublisher = /*#__PURE__*/function (_customer_url_base__W) {
        _inherits(CustomerUrlPublisher, _customer_url_base__W);

        var _super = _createSuper(CustomerUrlPublisher);

        function CustomerUrlPublisher() {
          _classCallCheck(this, CustomerUrlPublisher);

          return _super.apply(this, arguments);
        }

        _createClass(CustomerUrlPublisher, [{
          key: "getPublisher",
          value: function getPublisher(publisherId) {
            return this.customerUrl + '/publisher/' + publisherId;
          }
        }]);

        return CustomerUrlPublisher;
      }(_customer_url_base__WEBPACK_IMPORTED_MODULE_2__["CustomerUrlBase"]);

      CustomerUrlPublisher = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CustomerUrlPublisher);
      /***/
    },

    /***/
    "j9aV":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/publisher/components/publisher/publisher.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: PublisherComponent */

    /***/
    function j9aV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherComponent", function () {
        return PublisherComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_publisher_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./publisher.component.html */
      "BB3/");
      /* harmony import */


      var _publisher_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./publisher.component.less */
      "Yozy");
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


      var src_app_core_services_customer_publisher_publisher_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/customer/publisher/publisher.service */
      "E4+Y");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "PjcS");

      var PublisherComponent = /*#__PURE__*/function () {
        function PublisherComponent(publisherService, route, notificationService, destroy$, appErrorHandler) {
          _classCallCheck(this, PublisherComponent);

          this.publisherService = publisherService;
          this.route = route;
          this.notificationService = notificationService;
          this.destroy$ = destroy$;
          this.appErrorHandler = appErrorHandler;
          this.Editor = _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_10__;
          this.isLoading = true; //skelton

          this.isNotHaveData = false;
          this.publisherId = 1;
          this.publisherResponseVM = {};
        }

        _createClass(PublisherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading = true;

            if (this.route.snapshot.paramMap.get('publisherId')) {
              this.publisherId = +this.route.snapshot.paramMap.get('publisherId');
              console.log(this.publisherId);
              this.getPublisher(this.publisherId);
            }
          }
        }, {
          key: "getPublisher",
          value: function getPublisher(authorId) {
            var _this = this;

            this.publisherService.getPublisher(authorId).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (result) {
              console.log(result);

              if (result.isSuccessed) {
                if (result.resultObj) {
                  console.log(result);
                  _this.publisherResponseVM = result.resultObj;
                  _this.isLoading = false;
                }
              } else {
                _this.isNotHaveData = true;

                if (result.message) {
                  _this.notificationService.showErrorNotification(result.message);
                }
              }
            }, function (error) {
              _this.isNotHaveData = true;

              _this.appErrorHandler.handleErrorWithNoti(error);
            }, function () {});
          }
        }]);

        return PublisherComponent;
      }();

      PublisherComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_customer_publisher_publisher_service__WEBPACK_IMPORTED_MODULE_9__["PublisherService"]
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

      PublisherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher',
        template: _raw_loader_publisher_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publisher_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PublisherComponent);
      /***/
    },

    /***/
    "xXha":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/publisher/publisher-routing.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: PublisherRoutingModule */

    /***/
    function xXha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublisherRoutingModule", function () {
        return PublisherRoutingModule;
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


      var _components_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/publisher/publisher.component */
      "j9aV");

      var routes = [{
        path: ':publisherId',
        component: _components_publisher_publisher_component__WEBPACK_IMPORTED_MODULE_3__["PublisherComponent"],
        data: {
          title: 'Customer-app.body.publisher.title',
          breadcrumb: 'Publisher'
        }
      }];

      var PublisherRoutingModule = function PublisherRoutingModule() {
        _classCallCheck(this, PublisherRoutingModule);
      };

      PublisherRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PublisherRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-customer-body-modules-publisher-publisher-module-es5.js.map