(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-customer-group-product-customer-group-product-module"], {
    /***/
    "0alx":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function alx(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var iterator_1 = __webpack_require__(
      /*! ../symbol/iterator */
      "VKeD");

      function isIterable(input) {
        return input && typeof input[iterator_1.iterator] === 'function';
      }

      exports.isIterable = isIterable; //# sourceMappingURL=isIterable.js.map

      /***/
    },

    /***/
    "2KeD":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/internal/scheduled/scheduleObservable.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function KeD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ../Observable */
      "Q1FS");

      var Subscription_1 = __webpack_require__(
      /*! ../Subscription */
      "zB/H");

      var observable_1 = __webpack_require__(
      /*! ../symbol/observable */
      "zfKp");

      function scheduleObservable(input, scheduler) {
        return new Observable_1.Observable(function (subscriber) {
          var sub = new Subscription_1.Subscription();
          sub.add(scheduler.schedule(function () {
            var observable = input[observable_1.observable]();
            sub.add(observable.subscribe({
              next: function next(value) {
                sub.add(scheduler.schedule(function () {
                  return subscriber.next(value);
                }));
              },
              error: function error(err) {
                sub.add(scheduler.schedule(function () {
                  return subscriber.error(err);
                }));
              },
              complete: function complete() {
                sub.add(scheduler.schedule(function () {
                  return subscriber.complete();
                }));
              }
            }));
          }));
          return sub;
        });
      }

      exports.scheduleObservable = scheduleObservable; //# sourceMappingURL=scheduleObservable.js.map

      /***/
    },

    /***/
    "EBtg":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/scheduled/scheduled.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function EBtg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var scheduleObservable_1 = __webpack_require__(
      /*! ./scheduleObservable */
      "2KeD");

      var schedulePromise_1 = __webpack_require__(
      /*! ./schedulePromise */
      "n73p");

      var scheduleArray_1 = __webpack_require__(
      /*! ./scheduleArray */
      "2qMH");

      var scheduleIterable_1 = __webpack_require__(
      /*! ./scheduleIterable */
      "LJ/p");

      var isInteropObservable_1 = __webpack_require__(
      /*! ../util/isInteropObservable */
      "HZF8");

      var isPromise_1 = __webpack_require__(
      /*! ../util/isPromise */
      "90cg");

      var isArrayLike_1 = __webpack_require__(
      /*! ../util/isArrayLike */
      "yRPT");

      var isIterable_1 = __webpack_require__(
      /*! ../util/isIterable */
      "0alx");

      function scheduled(input, scheduler) {
        if (input != null) {
          if (isInteropObservable_1.isInteropObservable(input)) {
            return scheduleObservable_1.scheduleObservable(input, scheduler);
          } else if (isPromise_1.isPromise(input)) {
            return schedulePromise_1.schedulePromise(input, scheduler);
          } else if (isArrayLike_1.isArrayLike(input)) {
            return scheduleArray_1.scheduleArray(input, scheduler);
          } else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return scheduleIterable_1.scheduleIterable(input, scheduler);
          }
        }

        throw new TypeError((input !== null && typeof input || input) + ' is not observable');
      }

      exports.scheduled = scheduled; //# sourceMappingURL=scheduled.js.map

      /***/
    },

    /***/
    "HZF8":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function HZF8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var observable_1 = __webpack_require__(
      /*! ../symbol/observable */
      "zfKp");

      function isInteropObservable(input) {
        return input && typeof input[observable_1.observable] === 'function';
      }

      exports.isInteropObservable = isInteropObservable; //# sourceMappingURL=isInteropObservable.js.map

      /***/
    },

    /***/
    "LJ/p":
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs/internal/scheduled/scheduleIterable.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function LJP(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ../Observable */
      "Q1FS");

      var Subscription_1 = __webpack_require__(
      /*! ../Subscription */
      "zB/H");

      var iterator_1 = __webpack_require__(
      /*! ../symbol/iterator */
      "VKeD");

      function scheduleIterable(input, scheduler) {
        if (!input) {
          throw new Error('Iterable cannot be null');
        }

        return new Observable_1.Observable(function (subscriber) {
          var sub = new Subscription_1.Subscription();
          var iterator;
          sub.add(function () {
            if (iterator && typeof iterator["return"] === 'function') {
              iterator["return"]();
            }
          });
          sub.add(scheduler.schedule(function () {
            iterator = input[iterator_1.iterator]();
            sub.add(scheduler.schedule(function () {
              if (subscriber.closed) {
                return;
              }

              var value;
              var done;

              try {
                var result = iterator.next();
                value = result.value;
                done = result.done;
              } catch (err) {
                subscriber.error(err);
                return;
              }

              if (done) {
                subscriber.complete();
              } else {
                subscriber.next(value);
                this.schedule();
              }
            }));
          }));
          return sub;
        });
      }

      exports.scheduleIterable = scheduleIterable; //# sourceMappingURL=scheduleIterable.js.map

      /***/
    },

    /***/
    "LMkA":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-group-product/customer-group-product.module.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: CustomerGroupProductModule */

    /***/
    function LMkA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerGroupProductModule", function () {
        return CustomerGroupProductModule;
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


      var _customer_group_product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-group-product-routing.module */
      "pQW9");
      /* harmony import */


      var _customer_group_product_customer_group_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./customer-group-product/customer-group-product.component */
      "i+1H");
      /* harmony import */


      var src_app_icons_provider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/icons-provider.module */
      "Hhmg");
      /* harmony import */


      var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/module/core.module */
      "gfFi");
      /* harmony import */


      var _components_customer_index_customer_index_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/customer-index/customer-index.module */
      "C2kW");

      var CustomerGroupProductModule = function CustomerGroupProductModule() {
        _classCallCheck(this, CustomerGroupProductModule);
      };

      CustomerGroupProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customer_group_product_customer_group_product_component__WEBPACK_IMPORTED_MODULE_4__["CustomerGroupProductComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _customer_group_product_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerGroupProductRoutingModule"], src_app_icons_provider_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["NzLayoutModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"], _components_customer_index_customer_index_module__WEBPACK_IMPORTED_MODULE_7__["CustomerIndexModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"]]
      })], CustomerGroupProductModule);
      /***/
    },

    /***/
    "UNqx":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/internal/operators/mergeMap.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function UNqx(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var map_1 = __webpack_require__(
      /*! ./map */
      "q3Kh");

      var from_1 = __webpack_require__(
      /*! ../observable/from */
      "gTqA");

      var innerSubscribe_1 = __webpack_require__(
      /*! ../innerSubscribe */
      "wjEo");

      function mergeMap(project, resultSelector, concurrent) {
        if (concurrent === void 0) {
          concurrent = Number.POSITIVE_INFINITY;
        }

        if (typeof resultSelector === 'function') {
          return function (source) {
            return source.pipe(mergeMap(function (a, i) {
              return from_1.from(project(a, i)).pipe(map_1.map(function (b, ii) {
                return resultSelector(a, b, i, ii);
              }));
            }, concurrent));
          };
        } else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
        }

        return function (source) {
          return source.lift(new MergeMapOperator(project, concurrent));
        };
      }

      exports.mergeMap = mergeMap;

      var MergeMapOperator = function () {
        function MergeMapOperator(project, concurrent) {
          if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
          }

          this.project = project;
          this.concurrent = concurrent;
        }

        MergeMapOperator.prototype.call = function (observer, source) {
          return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
        };

        return MergeMapOperator;
      }();

      exports.MergeMapOperator = MergeMapOperator;

      var MergeMapSubscriber = function (_super) {
        __extends(MergeMapSubscriber, _super);

        function MergeMapSubscriber(destination, project, concurrent) {
          if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
          }

          var _this = _super.call(this, destination) || this;

          _this.project = project;
          _this.concurrent = concurrent;
          _this.hasCompleted = false;
          _this.buffer = [];
          _this.active = 0;
          _this.index = 0;
          return _this;
        }

        MergeMapSubscriber.prototype._next = function (value) {
          if (this.active < this.concurrent) {
            this._tryNext(value);
          } else {
            this.buffer.push(value);
          }
        };

        MergeMapSubscriber.prototype._tryNext = function (value) {
          var result;
          var index = this.index++;

          try {
            result = this.project(value, index);
          } catch (err) {
            this.destination.error(err);
            return;
          }

          this.active++;

          this._innerSub(result);
        };

        MergeMapSubscriber.prototype._innerSub = function (ish) {
          var innerSubscriber = new innerSubscribe_1.SimpleInnerSubscriber(this);
          var destination = this.destination;
          destination.add(innerSubscriber);
          var innerSubscription = innerSubscribe_1.innerSubscribe(ish, innerSubscriber);

          if (innerSubscription !== innerSubscriber) {
            destination.add(innerSubscription);
          }
        };

        MergeMapSubscriber.prototype._complete = function () {
          this.hasCompleted = true;

          if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
          }

          this.unsubscribe();
        };

        MergeMapSubscriber.prototype.notifyNext = function (innerValue) {
          this.destination.next(innerValue);
        };

        MergeMapSubscriber.prototype.notifyComplete = function () {
          var buffer = this.buffer;
          this.active--;

          if (buffer.length > 0) {
            this._next(buffer.shift());
          } else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
          }
        };

        return MergeMapSubscriber;
      }(innerSubscribe_1.SimpleOuterSubscriber);

      exports.MergeMapSubscriber = MergeMapSubscriber;
      exports.flatMap = mergeMap; //# sourceMappingURL=mergeMap.js.map

      /***/
    },

    /***/
    "VVMA":
    /*!********************************************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-group-product/customer-group-product/customer-group-product.component.less ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VVMA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1ncm91cC1wcm9kdWN0LmNvbXBvbmVudC5sZXNzIn0= */";
      /***/
    },

    /***/
    "ZyGW":
    /*!**********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/customer-group-product/customer-group-product/customer-group-product.component.html ***!
      \**********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZyGW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\n<ng-template #completedLoading>\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\n\t\t<span> Không Tìm Thấy Nhóm Sản Phẩm </span>\n\t</nz-empty>\n\t<ng-template #haveData>\n\t\t<div class=\"grid wide\">\n\t\t\t<nz-page-header>\n\t\t\t\t<!--breadcrumb-->\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t\t\t<!--title-->\n\t\t\t\t<nz-page-header-title>{{groupProducts.groupProductName}}</nz-page-header-title>\n\t\t\t\t<!--subtitle-->\n\t\t\t\t<!-- <nz-page-header-subtitle>{{groupProducts.groupProductDescription}}</nz-page-header-subtitle> -->\n\t\t\t\t<!--content-->\n\t\t\t\t<nz-page-header-content>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col l-9\">\n\t\t\t\t\t\t\t<div innerHTML=\"{{groupProducts.groupProductDescription| nzEllipsis: 200:'...'}}\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col l-3\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t[nzLoading]=\"addCartLoading\"\n\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\tnzBlock=\"true\"\n\t\t\t\t\t\t\t\tnzType=\"nzDanger\"\n\t\t\t\t\t\t\t\tnzSize=\"large\"\n\t\t\t\t\t\t\t\t(click)=\"addGroupProductToCart(groupProducts.groupProductId,1)\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<i nz-icon nzType=\"shopping-cart\" nzTheme=\"outline\"></i\n\t\t\t\t\t\t\t\t>Thêm Vào Giỏ Hàng</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<app-index-group-product [pageResult]=\"pageResult\"></app-index-group-product>\n\t\t\t\t</nz-page-header-content>\n\t\t\t</nz-page-header>\n\t\t</div>\n\t</ng-template>\n</ng-template>\n";
      /***/
    },

    /***/
    "gTqA":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/observable/from.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function gTqA(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ../Observable */
      "Q1FS");

      var subscribeTo_1 = __webpack_require__(
      /*! ../util/subscribeTo */
      "6qA3");

      var scheduled_1 = __webpack_require__(
      /*! ../scheduled/scheduled */
      "EBtg");

      function from(input, scheduler) {
        if (!scheduler) {
          if (input instanceof Observable_1.Observable) {
            return input;
          }

          return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
        } else {
          return scheduled_1.scheduled(input, scheduler);
        }
      }

      exports.from = from; //# sourceMappingURL=from.js.map

      /***/
    },

    /***/
    "i+1H":
    /*!******************************************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-group-product/customer-group-product/customer-group-product.component.ts ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: CustomerGroupProductComponent */

    /***/
    function i1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerGroupProductComponent", function () {
        return CustomerGroupProductComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customer_group_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customer-group-product.component.html */
      "ZyGW");
      /* harmony import */


      var _customer_group_product_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customer-group-product.component.less */
      "VVMA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/internal/operators/concatMap */
      "zL8a");
      /* harmony import */


      var rxjs_internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/operators/takeUntil */
      "IW2O");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/error-handler/app-error-handler.service */
      "Bp2A");
      /* harmony import */


      var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/notification/notifications/customer/notification.service */
      "7IKN");
      /* harmony import */


      var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/auth/auth.service */
      "RL7/");
      /* harmony import */


      var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/services/comon-services/destroy-service/destroy.service */
      "ekmL");
      /* harmony import */


      var src_app_core_services_comon_services_sort_product_sort_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/core/services/comon-services/sort-product/sort-product.service */
      "XF8i");
      /* harmony import */


      var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/services/comon-services/spinner/spinner.service */
      "LXV+");
      /* harmony import */


      var src_app_core_services_customer_cart_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/core/services/customer/cart/cart.service */
      "DYn8");
      /* harmony import */


      var src_app_core_services_customer_product_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/core/services/customer/product/product.service */
      "QI6s");

      var CustomerGroupProductComponent = /*#__PURE__*/function () {
        function CustomerGroupProductComponent(productService, route, sortProductService, appErrorHandler, spinner, destroy$, authService, cartService, notificationService, router) {
          _classCallCheck(this, CustomerGroupProductComponent);

          this.productService = productService;
          this.route = route;
          this.sortProductService = sortProductService;
          this.appErrorHandler = appErrorHandler;
          this.spinner = spinner;
          this.destroy$ = destroy$;
          this.authService = authService;
          this.cartService = cartService;
          this.notificationService = notificationService;
          this.router = router;
          this.isLoading = true; //skelton

          this.isNotHaveData = false;
        }

        _createClass(CustomerGroupProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading = true;

            if (this.route.snapshot.paramMap.get('groupProductId')) {
              this.groupProductId = +this.route.snapshot.paramMap.get('groupProductId');
              console.log(this.groupProductId);

              if (this.groupProductId) {
                this.getGroupProduct();
              }
            }
          }
        }, {
          key: "addGroupProductToCart",
          value: function addGroupProductToCart(groupProductId, quantityNumber) {
            var _this2 = this;

            this.addCartLoading = true;

            if (this.authService.isAuthenticated('customer-token')) {
              this.cartService.addToCart(groupProductId, quantityNumber, 2).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (result) {
                if (result.isSuccessed) {
                  if (result.message) {
                    _this2.notificationService.showSuccessNotification(result.message);
                  }
                } else {
                  if (result.message) {
                    _this2.notificationService.showErrorNotification(result.message);
                  }
                }

                _this2.addCartLoading = false;
              }, function (error) {
                _this2.addCartLoading = false;

                _this2.appErrorHandler.handleErrorWithNoti(error);
              }, function () {
                _this2.addCartLoading = false;
              });
            } else {
              this.router.navigate(['/login'], {
                queryParams: {
                  returnUrl: this.router.routerState.snapshot.url
                }
              });
            }
          }
        }, {
          key: "getGroupProduct",
          value: function getGroupProduct() {
            var _this3 = this;

            console.log('this.groupProductId ');
            this.isLoading = true; //skelton

            this.sortProductService.getQuery(this.route).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$), Object(rxjs_internal_operators_concatMap__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (value) {
              _this3.isLoading = true;
              return _this3.productService.getGroupProduct({
                pageIndex: value.page == undefined ? 1 : value.page,
                pageSize: 10,
                sortby: value.sortBy,
                order: value.order,
                id: _this3.groupProductId
              });
            })).subscribe(function (result) {
              if (result.isSuccessed) {
                _this3.groupProducts = result.resultObj;
                _this3.pageResult = result.resultObj.productShowHomePageResponds;
                console.log(_this3.pageResult);

                _this3.spinner.subjectSubmitLoadingHaveData$.next({
                  isSubmitted: false
                });
              } else {
                _this3.isNotHaveData = true;
              }

              _this3.isLoading = false;
            }, function (error) {
              _this3.appErrorHandler.handleErrorWithNoti(error);

              _this3.spinner.subjectSubmitLoadingHaveData$.next({
                isSubmitted: false
              });
            }, function () {
              _this3.isLoading = false;
            });
          }
        }]);

        return CustomerGroupProductComponent;
      }();

      CustomerGroupProductComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_customer_product_product_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_core_services_comon_services_sort_product_sort_product_service__WEBPACK_IMPORTED_MODULE_11__["SortProductService"]
        }, {
          type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorHandler"]
        }, {
          type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerService"]
        }, {
          type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_10__["DestroyService"]
        }, {
          type: src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
        }, {
          type: src_app_core_services_customer_cart_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"]
        }, {
          type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      CustomerGroupProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-group-product',
        template: _raw_loader_customer_group_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_10__["DestroyService"]],
        styles: [_customer_group_product_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomerGroupProductComponent);
      /***/
    },

    /***/
    "n73p":
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/internal/scheduled/schedulePromise.js ***!
      \*****************************************************************/

    /*! no static exports found */

    /***/
    function n73p(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ../Observable */
      "Q1FS");

      var Subscription_1 = __webpack_require__(
      /*! ../Subscription */
      "zB/H");

      function schedulePromise(input, scheduler) {
        return new Observable_1.Observable(function (subscriber) {
          var sub = new Subscription_1.Subscription();
          sub.add(scheduler.schedule(function () {
            return input.then(function (value) {
              sub.add(scheduler.schedule(function () {
                subscriber.next(value);
                sub.add(scheduler.schedule(function () {
                  return subscriber.complete();
                }));
              }));
            }, function (err) {
              sub.add(scheduler.schedule(function () {
                return subscriber.error(err);
              }));
            });
          }));
          return sub;
        });
      }

      exports.schedulePromise = schedulePromise; //# sourceMappingURL=schedulePromise.js.map

      /***/
    },

    /***/
    "pQW9":
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/customer-group-product/customer-group-product-routing.module.ts ***!
      \************************************************************************************************************************************/

    /*! exports provided: CustomerGroupProductRoutingModule */

    /***/
    function pQW9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerGroupProductRoutingModule", function () {
        return CustomerGroupProductRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _customer_group_product_customer_group_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./customer-group-product/customer-group-product.component */
      "i+1H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: ':groupProductId',
        component: _customer_group_product_customer_group_product_component__WEBPACK_IMPORTED_MODULE_1__["CustomerGroupProductComponent"],
        data: {
          title: 'Customer-app.body.group-product.title',
          breadcrumb: 'Group Product'
        }
      }];

      var CustomerGroupProductRoutingModule = function CustomerGroupProductRoutingModule() {
        _classCallCheck(this, CustomerGroupProductRoutingModule);
      };

      CustomerGroupProductRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], CustomerGroupProductRoutingModule);
      /***/
    },

    /***/
    "zL8a":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/operators/concatMap.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function zL8a(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var mergeMap_1 = __webpack_require__(
      /*! ./mergeMap */
      "UNqx");

      function concatMap(project, resultSelector) {
        return mergeMap_1.mergeMap(project, resultSelector, 1);
      }

      exports.concatMap = concatMap; //# sourceMappingURL=concatMap.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=components-customer-body-modules-customer-group-product-customer-group-product-module-es5.js.map