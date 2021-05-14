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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~features-admin-admin-module~features-customer-customer-module~features-seller-seller-module"], {
    /***/
    "6qA3":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function qA3(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var subscribeToArray_1 = __webpack_require__(
      /*! ./subscribeToArray */
      "OAkW");

      var subscribeToPromise_1 = __webpack_require__(
      /*! ./subscribeToPromise */
      "Z5tI");

      var subscribeToIterable_1 = __webpack_require__(
      /*! ./subscribeToIterable */
      "poJ0");

      var subscribeToObservable_1 = __webpack_require__(
      /*! ./subscribeToObservable */
      "ozli");

      var isArrayLike_1 = __webpack_require__(
      /*! ./isArrayLike */
      "yRPT");

      var isPromise_1 = __webpack_require__(
      /*! ./isPromise */
      "90cg");

      var isObject_1 = __webpack_require__(
      /*! ./isObject */
      "GMZp");

      var iterator_1 = __webpack_require__(
      /*! ../symbol/iterator */
      "VKeD");

      var observable_1 = __webpack_require__(
      /*! ../symbol/observable */
      "zfKp");

      exports.subscribeTo = function (result) {
        if (!!result && typeof result[observable_1.observable] === 'function') {
          return subscribeToObservable_1.subscribeToObservable(result);
        } else if (isArrayLike_1.isArrayLike(result)) {
          return subscribeToArray_1.subscribeToArray(result);
        } else if (isPromise_1.isPromise(result)) {
          return subscribeToPromise_1.subscribeToPromise(result);
        } else if (!!result && typeof result[iterator_1.iterator] === 'function') {
          return subscribeToIterable_1.subscribeToIterable(result);
        } else {
          var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
          var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
          throw new TypeError(msg);
        }
      }; //# sourceMappingURL=subscribeTo.js.map

      /***/

    },

    /***/
    "7IKN":
    /*!**********************************************************************************!*\
      !*** ./src/app/core/notification/notifications/customer/notification.service.ts ***!
      \**********************************************************************************/

    /*! exports provided: NotificationService */

    /***/
    function IKN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
        return NotificationService;
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


      var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-zorro-antd/message */
      "JXeA");
      /* harmony import */


      var src_app_core_configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/configs/app.config */
      "AEuP");

      var NotificationService = /*#__PURE__*/function () {
        function NotificationService(message) {
          _classCallCheck(this, NotificationService);

          this.message = message;
        }

        _createClass(NotificationService, [{
          key: "showSuccessNotification",
          value: function showSuccessNotification(message) {
            this.message.success(message, {
              nzDuration: src_app_core_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].snackBarDuration,
              nzPauseOnHover: true,
              nzAnimate: true
            });
          }
        }, {
          key: "showErrorNotification",
          value: function showErrorNotification(message) {
            this.message.error(message, {
              nzDuration: src_app_core_configs_app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].snackBarDuration,
              nzPauseOnHover: true,
              nzAnimate: true
            });
          }
        }]);

        return NotificationService;
      }();

      NotificationService.ctorParameters = function () {
        return [{
          type: ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]
        }];
      };

      NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NotificationService);
      /***/
    },

    /***/
    "90cg":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function cg(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isPromise(value) {
        return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
      }

      exports.isPromise = isPromise; //# sourceMappingURL=isPromise.js.map

      /***/
    },

    /***/
    "9AGB":
    /*!*************************************************!*\
      !*** ./node_modules/rxjs/internal/util/pipe.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function AGB(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var identity_1 = __webpack_require__(
      /*! ./identity */
      "yoF8");

      function pipe() {
        var fns = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i] = arguments[_i];
        }

        return pipeFromArray(fns);
      }

      exports.pipe = pipe;

      function pipeFromArray(fns) {
        if (fns.length === 0) {
          return identity_1.identity;
        }

        if (fns.length === 1) {
          return fns[0];
        }

        return function piped(input) {
          return fns.reduce(function (prev, fn) {
            return fn(prev);
          }, input);
        };
      }

      exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

      /***/
    },

    /***/
    "FWf1":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscriber.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function FWf1(module, exports, __webpack_require__) {
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

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var Observer_1 = __webpack_require__(
      /*! ./Observer */
      "GiSu");

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "p//D");

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var hostReportError_1 = __webpack_require__(
      /*! ./util/hostReportError */
      "MkmW");

      var Subscriber = function (_super) {
        __extends(Subscriber, _super);

        function Subscriber(destinationOrNext, error, complete) {
          var _this = _super.call(this) || this;

          _this.syncErrorValue = null;
          _this.syncErrorThrown = false;
          _this.syncErrorThrowable = false;
          _this.isStopped = false;

          switch (arguments.length) {
            case 0:
              _this.destination = Observer_1.empty;
              break;

            case 1:
              if (!destinationOrNext) {
                _this.destination = Observer_1.empty;
                break;
              }

              if (typeof destinationOrNext === 'object') {
                if (destinationOrNext instanceof Subscriber) {
                  _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                  _this.destination = destinationOrNext;
                  destinationOrNext.add(_this);
                } else {
                  _this.syncErrorThrowable = true;
                  _this.destination = new SafeSubscriber(_this, destinationOrNext);
                }

                break;
              }

            default:
              _this.syncErrorThrowable = true;
              _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
              break;
          }

          return _this;
        }

        Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
          return this;
        };

        Subscriber.create = function (next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        };

        Subscriber.prototype.next = function (value) {
          if (!this.isStopped) {
            this._next(value);
          }
        };

        Subscriber.prototype.error = function (err) {
          if (!this.isStopped) {
            this.isStopped = true;

            this._error(err);
          }
        };

        Subscriber.prototype.complete = function () {
          if (!this.isStopped) {
            this.isStopped = true;

            this._complete();
          }
        };

        Subscriber.prototype.unsubscribe = function () {
          if (this.closed) {
            return;
          }

          this.isStopped = true;

          _super.prototype.unsubscribe.call(this);
        };

        Subscriber.prototype._next = function (value) {
          this.destination.next(value);
        };

        Subscriber.prototype._error = function (err) {
          this.destination.error(err);
          this.unsubscribe();
        };

        Subscriber.prototype._complete = function () {
          this.destination.complete();
          this.unsubscribe();
        };

        Subscriber.prototype._unsubscribeAndRecycle = function () {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        };

        return Subscriber;
      }(Subscription_1.Subscription);

      exports.Subscriber = Subscriber;

      var SafeSubscriber = function (_super) {
        __extends(SafeSubscriber, _super);

        function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
          var _this = _super.call(this) || this;

          _this._parentSubscriber = _parentSubscriber;
          var next;
          var context = _this;

          if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
          } else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;

            if (observerOrNext !== Observer_1.empty) {
              context = Object.create(observerOrNext);

              if (isFunction_1.isFunction(context.unsubscribe)) {
                _this.add(context.unsubscribe.bind(context));
              }

              context.unsubscribe = _this.unsubscribe.bind(_this);
            }
          }

          _this._context = context;
          _this._next = next;
          _this._error = error;
          _this._complete = complete;
          return _this;
        }

        SafeSubscriber.prototype.next = function (value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.error = function (err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);

                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();

              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }

              hostReportError_1.hostReportError(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                hostReportError_1.hostReportError(err);
              }

              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.complete = function () {
          var _this = this;

          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;

            if (this._complete) {
              var wrappedComplete = function wrappedComplete() {
                return _this._complete.call(_this._context);
              };

              if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        };

        SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();

            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              hostReportError_1.hostReportError(err);
            }
          }
        };

        SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
          if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }

          try {
            fn.call(this._context, value);
          } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              hostReportError_1.hostReportError(err);
              return true;
            }
          }

          return false;
        };

        SafeSubscriber.prototype._unsubscribe = function () {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;

          _parentSubscriber.unsubscribe();
        };

        return SafeSubscriber;
      }(Subscriber);

      exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

      /***/
    },

    /***/
    "FiyT":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function FiyT(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics2 = function extendStatics(d, b) {
          _extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics2(d, b);
        };

        return function (d, b) {
          _extendStatics2(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var SubjectSubscription = function (_super) {
        __extends(SubjectSubscription, _super);

        function SubjectSubscription(subject, subscriber) {
          var _this = _super.call(this) || this;

          _this.subject = subject;
          _this.subscriber = subscriber;
          _this.closed = false;
          return _this;
        }

        SubjectSubscription.prototype.unsubscribe = function () {
          if (this.closed) {
            return;
          }

          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;

          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }

          var subscriberIndex = observers.indexOf(this.subscriber);

          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        };

        return SubjectSubscription;
      }(Subscription_1.Subscription);

      exports.SubjectSubscription = SubjectSubscription; //# sourceMappingURL=SubjectSubscription.js.map

      /***/
    },

    /***/
    "GMZp":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isObject.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function GMZp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isObject(x) {
        return x !== null && typeof x === 'object';
      }

      exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

      /***/
    },

    /***/
    "GiSu":
    /*!************************************************!*\
      !*** ./node_modules/rxjs/internal/Observer.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function GiSu(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var hostReportError_1 = __webpack_require__(
      /*! ./util/hostReportError */
      "MkmW");

      exports.empty = {
        closed: true,
        next: function next(value) {},
        error: function error(err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        },
        complete: function complete() {}
      }; //# sourceMappingURL=Observer.js.map

      /***/
    },

    /***/
    "IW2O":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/operators/takeUntil.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function IW2O(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics3 = function extendStatics(d, b) {
          _extendStatics3 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics3(d, b);
        };

        return function (d, b) {
          _extendStatics3(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var innerSubscribe_1 = __webpack_require__(
      /*! ../innerSubscribe */
      "wjEo");

      function takeUntil(notifier) {
        return function (source) {
          return source.lift(new TakeUntilOperator(notifier));
        };
      }

      exports.takeUntil = takeUntil;

      var TakeUntilOperator = function () {
        function TakeUntilOperator(notifier) {
          this.notifier = notifier;
        }

        TakeUntilOperator.prototype.call = function (subscriber, source) {
          var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
          var notifierSubscription = innerSubscribe_1.innerSubscribe(this.notifier, new innerSubscribe_1.SimpleInnerSubscriber(takeUntilSubscriber));

          if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
          }

          return takeUntilSubscriber;
        };

        return TakeUntilOperator;
      }();

      var TakeUntilSubscriber = function (_super) {
        __extends(TakeUntilSubscriber, _super);

        function TakeUntilSubscriber(destination) {
          var _this = _super.call(this, destination) || this;

          _this.seenValue = false;
          return _this;
        }

        TakeUntilSubscriber.prototype.notifyNext = function () {
          this.seenValue = true;
          this.complete();
        };

        TakeUntilSubscriber.prototype.notifyComplete = function () {};

        return TakeUntilSubscriber;
      }(innerSubscribe_1.SimpleOuterSubscriber); //# sourceMappingURL=takeUntil.js.map

      /***/

    },

    /***/
    "JyV9":
    /*!*****************************************************************************!*\
      !*** ./src/app/core/services/comon-services/theme-service/theme.service.ts ***!
      \*****************************************************************************/

    /*! exports provided: ThemeService */

    /***/
    function JyV9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J"); // enum ThemeType {
      // 	dark = 'dark',
      // 	default = 'default'
      // }


      var ThemeService = /*#__PURE__*/function () {
        function ThemeService() {
          _classCallCheck(this, ThemeService);

          this.currentTheme = 'default';
        }

        _createClass(ThemeService, [{
          key: "loadTheme",
          value: function loadTheme() {
            var _this2 = this;

            var firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var effectiveTheme = arguments.length > 1 ? arguments[1] : undefined;
            var theme = effectiveTheme; //this.currentTheme;
            //console.log(theme);

            if (firstLoad) {
              document.documentElement.classList.add(theme);
            }

            return new Promise(function (resolve, reject) {
              _this2.loadCss("".concat(theme, ".css"), theme).then(function (e) {
                if (!firstLoad) {
                  document.documentElement.classList.add(theme);
                }

                _this2.removeUnusedTheme(_this2.reverseTheme(theme));

                resolve(e);
              }, function (e) {
                return reject(e);
              });
            });
          }
        }, {
          key: "loadThemeOLD",
          value: function loadThemeOLD() {
            var _this3 = this;

            var firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var theme = this.currentTheme;
            console.log(theme);

            if (firstLoad) {
              document.documentElement.classList.add(theme);
              console.log(theme);
            }

            return new Promise(function (resolve, reject) {
              _this3.loadCss("".concat(theme, ".css"), theme).then(function (e) {
                if (!firstLoad) {
                  document.documentElement.classList.add(theme);
                  console.log(theme);
                }

                _this3.removeUnusedTheme(_this3.reverseTheme(theme));

                resolve(e);
              }, function (e) {
                return reject(e);
              });
            });
          }
        }, {
          key: "toggleTheme",
          value: function toggleTheme() {
            this.currentTheme = this.reverseTheme(this.currentTheme);
            return this.loadThemeOLD(false);
          }
        }, {
          key: "reverseTheme",
          value: function reverseTheme(theme) {
            return theme === 'dark' ? 'default' : 'dark';
          }
        }, {
          key: "removeUnusedTheme",
          value: function removeUnusedTheme(theme) {
            document.documentElement.classList.remove(theme);
            var removedThemeStyle = document.getElementById(theme);

            if (removedThemeStyle) {
              document.head.removeChild(removedThemeStyle);
            }
          } //tạo element và gắn vào head

        }, {
          key: "loadCss",
          value: function loadCss(href, id) {
            return new Promise(function (resolve, reject) {
              var style = document.createElement('link');
              style.rel = 'stylesheet';
              style.href = href;
              style.id = id;
              style.onload = resolve;
              style.onerror = reject;
              document.head.append(style); //console.log(style);
            });
          }
        }]);

        return ThemeService;
      }();

      ThemeService.ctorParameters = function () {
        return [];
      };

      ThemeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ThemeService);
      /***/
    },

    /***/
    "LBXl":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function LBXl(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var UnsubscriptionErrorImpl = function () {
        function UnsubscriptionErrorImpl(errors) {
          Error.call(this);
          this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
            return i + 1 + ") " + err.toString();
          }).join('\n  ') : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
          return this;
        }

        UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
        return UnsubscriptionErrorImpl;
      }();

      exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

      /***/
    },

    /***/
    "LXV+":
    /*!*************************************************************************!*\
      !*** ./src/app/core/services/comon-services/spinner/spinner.service.ts ***!
      \*************************************************************************/

    /*! exports provided: SpinnerService */

    /***/
    function LXV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
        return SpinnerService;
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


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/internal/Subject */
      "ds6q");
      /* harmony import */


      var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);

      var SpinnerService = function SpinnerService() {
        _classCallCheck(this, SpinnerService);

        this.subjectSubmitLoadingHaveData$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      };

      SpinnerService.ctorParameters = function () {
        return [];
      };

      SpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SpinnerService);
      /***/
    },

    /***/
    "MNke":
    /*!*************************************************************************!*\
      !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js ***!
      \*************************************************************************/

    /*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */

    /***/
    function MNke(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function () {
        return InfiniteScrollDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function () {
        return InfiniteScrollModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/ngx-ins-utils.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} selector
       * @param {?} scrollWindow
       * @param {?} defaultElement
       * @param {?} fromRoot
       * @return {?}
       */


      function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
        /** @type {?} */
        var hasWindow = window && !!window.document && window.document.documentElement;
        /** @type {?} */

        var container = hasWindow && scrollWindow ? window : defaultElement;

        if (selector) {
          /** @type {?} */
          var containerIsString = selector && hasWindow && typeof selector === 'string';
          container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;

          if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
          }
        }

        return container;
      }
      /**
       * @param {?} selector
       * @param {?} customRoot
       * @param {?} fromRoot
       * @return {?}
       */


      function findElement(selector, customRoot, fromRoot) {
        /** @type {?} */
        var rootEl = fromRoot ? window.document : customRoot;
        return rootEl.querySelector(selector);
      }
      /**
       * @param {?} prop
       * @return {?}
       */


      function inputPropChanged(prop) {
        return prop && !prop.firstChange;
      }
      /**
       * @return {?}
       */


      function hasWindowDefined() {
        return typeof window !== 'undefined';
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/axis-resolver.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /** @type {?} */


      var VerticalProps = {
        clientHeight: "clientHeight",
        offsetHeight: "offsetHeight",
        scrollHeight: "scrollHeight",
        pageYOffset: "pageYOffset",
        offsetTop: "offsetTop",
        scrollTop: "scrollTop",
        top: "top"
      };
      /** @type {?} */

      var HorizontalProps = {
        clientHeight: "clientWidth",
        offsetHeight: "offsetWidth",
        scrollHeight: "scrollWidth",
        pageYOffset: "pageXOffset",
        offsetTop: "offsetLeft",
        scrollTop: "scrollLeft",
        top: "left"
      };

      var AxisResolver = /*#__PURE__*/function () {
        /**
         * @param {?=} vertical
         */
        function AxisResolver() {
          var vertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          _classCallCheck(this, AxisResolver);

          this.vertical = vertical;
          this.propsMap = vertical ? VerticalProps : HorizontalProps;
        }
        /**
         * @return {?}
         */


        _createClass(AxisResolver, [{
          key: "clientHeightKey",
          value: function clientHeightKey() {
            return this.propsMap.clientHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "offsetHeightKey",
          value: function offsetHeightKey() {
            return this.propsMap.offsetHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollHeightKey",
          value: function scrollHeightKey() {
            return this.propsMap.scrollHeight;
          }
          /**
           * @return {?}
           */

        }, {
          key: "pageYOffsetKey",
          value: function pageYOffsetKey() {
            return this.propsMap.pageYOffset;
          }
          /**
           * @return {?}
           */

        }, {
          key: "offsetTopKey",
          value: function offsetTopKey() {
            return this.propsMap.offsetTop;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollTopKey",
          value: function scrollTopKey() {
            return this.propsMap.scrollTop;
          }
          /**
           * @return {?}
           */

        }, {
          key: "topKey",
          value: function topKey() {
            return this.propsMap.top;
          }
        }]);

        return AxisResolver;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/event-trigger.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @record
       */

      /**
       * @record
       */

      /**
       * @record
       */

      /**
       * @record
       */

      /**
       * @param {?} alwaysCallback
       * @param {?} shouldFireScrollEvent
       * @param {?} isTriggeredCurrentTotal
       * @return {?}
       */


      function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
        if (alwaysCallback && shouldFireScrollEvent) {
          return true;
        }

        if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
          return true;
        }

        return false;
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/position-resolver.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} __0
       * @return {?}
       */


      function createResolver(_ref) {
        var windowElement = _ref.windowElement,
            axis = _ref.axis;
        return createResolverWithContainer({
          axis: axis,
          isWindow: isElementWindow(windowElement)
        }, windowElement);
      }
      /**
       * @param {?} resolver
       * @param {?} windowElement
       * @return {?}
       */


      function createResolverWithContainer(resolver, windowElement) {
        /** @type {?} */
        var container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
        return Object.assign(Object.assign({}, resolver), {
          container: container
        });
      }
      /**
       * @param {?} windowElement
       * @return {?}
       */


      function isElementWindow(windowElement) {
        /** @type {?} */
        var isWindow = ['Window', 'global'].some(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          return Object.prototype.toString.call(windowElement).includes(obj);
        });
        return isWindow;
      }
      /**
       * @param {?} isContainerWindow
       * @param {?} windowElement
       * @return {?}
       */


      function getDocumentElement(isContainerWindow, windowElement) {
        return isContainerWindow ? windowElement.document.documentElement : null;
      }
      /**
       * @param {?} element
       * @param {?} resolver
       * @return {?}
       */


      function calculatePoints(element, resolver) {
        /** @type {?} */
        var height = extractHeightForElement(resolver);
        return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
      }
      /**
       * @param {?} height
       * @param {?} element
       * @param {?} resolver
       * @return {?}
       */


      function calculatePointsForWindow(height, element, resolver) {
        var axis = resolver.axis,
            container = resolver.container,
            isWindow = resolver.isWindow;

        var _extractHeightPropKey = extractHeightPropKeys(axis),
            offsetHeightKey = _extractHeightPropKey.offsetHeightKey,
            clientHeightKey = _extractHeightPropKey.clientHeightKey; // scrolled until now / current y point

        /** @type {?} */


        var scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow); // total height / most bottom y point

        /** @type {?} */

        var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
        /** @type {?} */

        var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
        return {
          height: height,
          scrolled: scrolled,
          totalToScroll: totalToScroll,
          isWindow: isWindow
        };
      }
      /**
       * @param {?} height
       * @param {?} element
       * @param {?} resolver
       * @return {?}
       */


      function calculatePointsForElement(height, element, resolver) {
        var axis = resolver.axis,
            container = resolver.container; // perhaps use container.offsetTop instead of 'scrollTop'

        /** @type {?} */

        var scrolled = container[axis.scrollTopKey()];
        /** @type {?} */

        var totalToScroll = container[axis.scrollHeightKey()];
        return {
          height: height,
          scrolled: scrolled,
          totalToScroll: totalToScroll,
          isWindow: false
        };
      }
      /**
       * @param {?} axis
       * @return {?}
       */


      function extractHeightPropKeys(axis) {
        return {
          offsetHeightKey: axis.offsetHeightKey(),
          clientHeightKey: axis.clientHeightKey()
        };
      }
      /**
       * @param {?} __0
       * @return {?}
       */


      function extractHeightForElement(_ref2) {
        var container = _ref2.container,
            isWindow = _ref2.isWindow,
            axis = _ref2.axis;

        var _extractHeightPropKey2 = extractHeightPropKeys(axis),
            offsetHeightKey = _extractHeightPropKey2.offsetHeightKey,
            clientHeightKey = _extractHeightPropKey2.clientHeightKey;

        return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
      }
      /**
       * @param {?} elem
       * @param {?} isWindow
       * @param {?} offsetHeightKey
       * @param {?} clientHeightKey
       * @return {?}
       */


      function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
        if (isNaN(elem[offsetHeightKey])) {
          /** @type {?} */
          var docElem = getDocumentElement(isWindow, elem);
          return docElem ? docElem[clientHeightKey] : 0;
        } else {
          return elem[offsetHeightKey];
        }
      }
      /**
       * @param {?} elem
       * @param {?} axis
       * @param {?} isWindow
       * @return {?}
       */


      function getElementOffsetTop(elem, axis, isWindow) {
        /** @type {?} */
        var topKey = axis.topKey(); // elem = elem.nativeElement;

        if (!elem.getBoundingClientRect) {
          // || elem.css('none')) {
          return;
        }

        return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
      }
      /**
       * @param {?} elem
       * @param {?} axis
       * @param {?} isWindow
       * @return {?}
       */


      function getElementPageYOffset(elem, axis, isWindow) {
        /** @type {?} */
        var pageYOffset = axis.pageYOffsetKey();
        /** @type {?} */

        var scrollTop = axis.scrollTopKey();
        /** @type {?} */

        var offsetTop = axis.offsetTopKey();

        if (isNaN(window.pageYOffset)) {
          return getDocumentElement(isWindow, elem)[scrollTop];
        } else if (elem.ownerDocument) {
          return elem.ownerDocument.defaultView[pageYOffset];
        } else {
          return elem[offsetTop];
        }
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/scroll-resolver.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} container
       * @param {?} distance
       * @param {?} scrollingDown
       * @return {?}
       */


      function shouldFireScrollEvent(container, distance, scrollingDown) {
        /** @type {?} */
        var remaining;
        /** @type {?} */

        var containerBreakpoint;

        if (container.totalToScroll <= 0) {
          return false;
        }
        /** @type {?} */


        var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;

        if (scrollingDown) {
          remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
          containerBreakpoint = distance.down / 10;
        } else {
          /** @type {?} */
          var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
          remaining = container.scrolled / totalHiddenContentHeight;
          containerBreakpoint = distance.up / 10;
        }
        /** @type {?} */


        var shouldFireEvent = remaining <= containerBreakpoint;
        return shouldFireEvent;
      }
      /**
       * @param {?} lastScrollPosition
       * @param {?} container
       * @return {?}
       */


      function isScrollingDownwards(lastScrollPosition, container) {
        return lastScrollPosition < container.scrolled;
      }
      /**
       * @param {?} lastScrollPosition
       * @param {?} container
       * @param {?} distance
       * @return {?}
       */


      function getScrollStats(lastScrollPosition, container, distance) {
        /** @type {?} */
        var scrollDown = isScrollingDownwards(lastScrollPosition, container);
        return {
          fire: shouldFireScrollEvent(container, distance, scrollDown),
          scrollDown: scrollDown
        };
      }
      /**
       * @param {?} position
       * @param {?} scrollState
       * @return {?}
       */

      /**
       * @param {?} totalToScroll
       * @param {?} scrollState
       * @return {?}
       */

      /**
       * @param {?} scrollState
       * @return {?}
       */

      /**
       * @param {?} scroll
       * @param {?} scrollState
       * @param {?} triggered
       * @param {?} isScrollingDown
       * @return {?}
       */

      /**
       * @param {?} totalToScroll
       * @param {?} scrollState
       * @param {?} isScrollingDown
       * @return {?}
       */

      /**
       * @param {?} scrollState
       * @param {?} scrolledUntilNow
       * @param {?} totalToScroll
       * @return {?}
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/scroll-state.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ScrollState = /*#__PURE__*/function () {
        /**
         * @param {?} __0
         */
        function ScrollState(_ref3) {
          var totalToScroll = _ref3.totalToScroll;

          _classCallCheck(this, ScrollState);

          this.lastScrollPosition = 0;
          this.lastTotalToScroll = 0;
          this.totalToScroll = 0;
          this.triggered = {
            down: 0,
            up: 0
          };
          this.totalToScroll = totalToScroll;
        }
        /**
         * @param {?} position
         * @return {?}
         */


        _createClass(ScrollState, [{
          key: "updateScrollPosition",
          value: function updateScrollPosition(position) {
            return this.lastScrollPosition = position;
          }
          /**
           * @param {?} totalToScroll
           * @return {?}
           */

        }, {
          key: "updateTotalToScroll",
          value: function updateTotalToScroll(totalToScroll) {
            if (this.lastTotalToScroll !== totalToScroll) {
              this.lastTotalToScroll = this.totalToScroll;
              this.totalToScroll = totalToScroll;
            }
          }
          /**
           * @param {?} scrolledUntilNow
           * @param {?} totalToScroll
           * @return {?}
           */

        }, {
          key: "updateScroll",
          value: function updateScroll(scrolledUntilNow, totalToScroll) {
            this.updateScrollPosition(scrolledUntilNow);
            this.updateTotalToScroll(totalToScroll);
          }
          /**
           * @param {?} scroll
           * @param {?} isScrollingDown
           * @return {?}
           */

        }, {
          key: "updateTriggeredFlag",
          value: function updateTriggeredFlag(scroll, isScrollingDown) {
            if (isScrollingDown) {
              this.triggered.down = scroll;
            } else {
              this.triggered.up = scroll;
            }
          }
          /**
           * @param {?} totalToScroll
           * @param {?} isScrollingDown
           * @return {?}
           */

        }, {
          key: "isTriggeredScroll",
          value: function isTriggeredScroll(totalToScroll, isScrollingDown) {
            return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
          }
        }]);

        return ScrollState;
      }();
      /**
       * @fileoverview added by tsickle
       * Generated from: src/services/scroll-register.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @param {?} config
       * @return {?}
       */


      function createScroller(config) {
        var scrollContainer = config.scrollContainer,
            scrollWindow = config.scrollWindow,
            element = config.element,
            fromRoot = config.fromRoot;
        /** @type {?} */

        var resolver = createResolver({
          axis: new AxisResolver(!config.horizontal),
          windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
        });
        /** @type {?} */

        var scrollState = new ScrollState({
          totalToScroll: calculatePoints(element, resolver)
        });
        /** @type {?} */

        var options = {
          container: resolver.container,
          throttle: config.throttle
        };
        /** @type {?} */

        var distance = {
          up: config.upDistance,
          down: config.downDistance
        };
        return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(
        /**
        * @return {?}
        */
        function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
        /**
        * @param {?} positionStats
        * @return {?}
        */
        function (positionStats) {
          return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref4) {
          var stats = _ref4.stats;
          return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref5) {
          var fire = _ref5.fire,
              scrollDown = _ref5.scrollDown,
              totalToScroll = _ref5.stats.totalToScroll;
          return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref6) {
          var scrollDown = _ref6.scrollDown,
              totalToScroll = _ref6.stats.totalToScroll;
          scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
      }
      /**
       * @param {?} options
       * @return {?}
       */


      function attachScrollEvent(options) {
        /** @type {?} */
        var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll'); // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
        // Let's avoid calling the function unless needed.
        // Replacing with throttleTime seems to solve the problem
        // See https://github.com/orizens/ngx-infinite-scroll/issues/198

        if (options.throttle) {
          obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(options.throttle));
        }

        return obs;
      }
      /**
       * @param {?} lastScrollPosition
       * @param {?} stats
       * @param {?} distance
       * @return {?}
       */


      function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
        var _getScrollStats = getScrollStats(lastScrollPosition, stats, distance),
            scrollDown = _getScrollStats.scrollDown,
            fire = _getScrollStats.fire;

        return {
          scrollDown: scrollDown,
          fire: fire,
          stats: stats
        };
      }
      /** @type {?} */


      var InfiniteScrollActions = {
        DOWN: '[NGX_ISE] DOWN',
        UP: '[NGX_ISE] UP'
      };
      /**
       * @param {?} response
       * @return {?}
       */

      function toInfiniteScrollAction(response) {
        var scrollDown = response.scrollDown,
            currentScrollPosition = response.stats.scrolled;
        return {
          type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
          payload: {
            currentScrollPosition: currentScrollPosition
          }
        };
      }
      /**
       * @fileoverview added by tsickle
       * Generated from: src/modules/infinite-scroll.directive.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var InfiniteScrollDirective = /*#__PURE__*/function () {
        /**
         * @param {?} element
         * @param {?} zone
         */
        function InfiniteScrollDirective(element, zone) {
          _classCallCheck(this, InfiniteScrollDirective);

          this.element = element;
          this.zone = zone;
          this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.infiniteScrollDistance = 2;
          this.infiniteScrollUpDistance = 1.5;
          this.infiniteScrollThrottle = 150;
          this.infiniteScrollDisabled = false;
          this.infiniteScrollContainer = null;
          this.scrollWindow = true;
          this.immediateCheck = false;
          this.horizontal = false;
          this.alwaysCallback = false;
          this.fromRoot = false;
        }
        /**
         * @return {?}
         */


        _createClass(InfiniteScrollDirective, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (!this.infiniteScrollDisabled) {
              this.setup();
            }
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(_ref7) {
            var infiniteScrollContainer = _ref7.infiniteScrollContainer,
                infiniteScrollDisabled = _ref7.infiniteScrollDisabled,
                infiniteScrollDistance = _ref7.infiniteScrollDistance;

            /** @type {?} */
            var containerChanged = inputPropChanged(infiniteScrollContainer);
            /** @type {?} */

            var disabledChanged = inputPropChanged(infiniteScrollDisabled);
            /** @type {?} */

            var distanceChanged = inputPropChanged(infiniteScrollDistance);
            /** @type {?} */

            var shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;

            if (containerChanged || disabledChanged || distanceChanged) {
              this.destroyScroller();

              if (shouldSetup) {
                this.setup();
              }
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "setup",
          value: function setup() {
            var _this4 = this;

            if (hasWindowDefined()) {
              this.zone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                _this4.disposeScroller = createScroller({
                  fromRoot: _this4.fromRoot,
                  alwaysCallback: _this4.alwaysCallback,
                  disable: _this4.infiniteScrollDisabled,
                  downDistance: _this4.infiniteScrollDistance,
                  element: _this4.element,
                  horizontal: _this4.horizontal,
                  scrollContainer: _this4.infiniteScrollContainer,
                  scrollWindow: _this4.scrollWindow,
                  throttle: _this4.infiniteScrollThrottle,
                  upDistance: _this4.infiniteScrollUpDistance
                }).subscribe(
                /**
                * @param {?} payload
                * @return {?}
                */
                function (payload) {
                  return _this4.zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this4.handleOnScroll(payload);
                  });
                });
              });
            }
          }
          /**
           * @param {?} __0
           * @return {?}
           */

        }, {
          key: "handleOnScroll",
          value: function handleOnScroll(_ref8) {
            var type = _ref8.type,
                payload = _ref8.payload;

            switch (type) {
              case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);

              case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);

              default:
                return;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyScroller();
          }
          /**
           * @return {?}
           */

        }, {
          key: "destroyScroller",
          value: function destroyScroller() {
            if (this.disposeScroller) {
              this.disposeScroller.unsubscribe();
            }
          }
        }]);

        return InfiniteScrollDirective;
      }();

      InfiniteScrollDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
        }]
      }];
      /** @nocollapse */

      InfiniteScrollDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      InfiniteScrollDirective.propDecorators = {
        scrolled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrolledUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        infiniteScrollDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollUpDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollThrottle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        immediateCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alwaysCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fromRoot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: src/modules/ngx-infinite-scroll.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      var InfiniteScrollModule = function InfiniteScrollModule() {
        _classCallCheck(this, InfiniteScrollModule);
      };

      InfiniteScrollModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [InfiniteScrollDirective],
          exports: [InfiniteScrollDirective],
          imports: [],
          providers: []
        }]
      }];
      /**
       * @fileoverview added by tsickle
       * Generated from: src/ngx-infinite-scroll.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: public-api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Angular library starter.
       * Build an Angular library compatible with AoT compilation & Tree shaking.
       * Written by Roberto Simonetti.
       * MIT license.
       * https://github.com/robisim74/angular-library-starter
       */

      /**
       * Entry point for all public APIs of the package.
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: ngx-infinite-scroll.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-infinite-scroll.js.map

      /***/
    },

    /***/
    "MkmW":
    /*!************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function MkmW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function hostReportError(err) {
        setTimeout(function () {
          throw err;
        }, 0);
      }

      exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

      /***/
    },

    /***/
    "Mxlh":
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
      \********************************************************************/

    /*! no static exports found */

    /***/
    function Mxlh(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ObjectUnsubscribedErrorImpl = function () {
        function ObjectUnsubscribedErrorImpl() {
          Error.call(this);
          this.message = 'object unsubscribed';
          this.name = 'ObjectUnsubscribedError';
          return this;
        }

        ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
        return ObjectUnsubscribedErrorImpl;
      }();

      exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

      /***/
    },

    /***/
    "OAkW":
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function OAkW(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.subscribeToArray = function (array) {
        return function (subscriber) {
          for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
          }

          subscriber.complete();
        };
      }; //# sourceMappingURL=subscribeToArray.js.map

      /***/

    },

    /***/
    "Q1FS":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/internal/Observable.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function Q1FS(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var canReportError_1 = __webpack_require__(
      /*! ./util/canReportError */
      "yx2s");

      var toSubscriber_1 = __webpack_require__(
      /*! ./util/toSubscriber */
      "Xwq/");

      var observable_1 = __webpack_require__(
      /*! ./symbol/observable */
      "zfKp");

      var pipe_1 = __webpack_require__(
      /*! ./util/pipe */
      "9AGB");

      var config_1 = __webpack_require__(
      /*! ./config */
      "n3uD");

      var Observable = function () {
        function Observable(subscribe) {
          this._isScalar = false;

          if (subscribe) {
            this._subscribe = subscribe;
          }
        }

        Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
        };

        Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

          if (operator) {
            sink.add(operator.call(sink, this.source));
          } else {
            sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
              sink.syncErrorThrowable = false;

              if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
              }
            }
          }

          return sink;
        };

        Observable.prototype._trySubscribe = function (sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
              sink.syncErrorThrown = true;
              sink.syncErrorValue = err;
            }

            if (canReportError_1.canReportError(sink)) {
              sink.error(err);
            } else {
              console.warn(err);
            }
          }
        };

        Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
              try {
                next(value);
              } catch (err) {
                reject(err);

                if (subscription) {
                  subscription.unsubscribe();
                }
              }
            }, reject, resolve);
          });
        };

        Observable.prototype._subscribe = function (subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
        };

        Observable.prototype[observable_1.observable] = function () {
          return this;
        };

        Observable.prototype.pipe = function () {
          var operations = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
          }

          if (operations.length === 0) {
            return this;
          }

          return pipe_1.pipeFromArray(operations)(this);
        };

        Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var value;

            _this.subscribe(function (x) {
              return value = x;
            }, function (err) {
              return reject(err);
            }, function () {
              return resolve(value);
            });
          });
        };

        Observable.create = function (subscribe) {
          return new Observable(subscribe);
        };

        return Observable;
      }();

      exports.Observable = Observable;

      function getPromiseCtor(promiseCtor) {
        if (!promiseCtor) {
          promiseCtor = config_1.config.Promise || Promise;
        }

        if (!promiseCtor) {
          throw new Error('no Promise impl found');
        }

        return promiseCtor;
      } //# sourceMappingURL=Observable.js.map

      /***/

    },

    /***/
    "VKeD":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function VKeD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function getSymbolIterator() {
        if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
        }

        return Symbol.iterator;
      }

      exports.getSymbolIterator = getSymbolIterator;
      exports.iterator = getSymbolIterator();
      exports.$$iterator = exports.iterator; //# sourceMappingURL=iterator.js.map

      /***/
    },

    /***/
    "Xwq/":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function Xwq(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscriber_1 = __webpack_require__(
      /*! ../Subscriber */
      "FWf1");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../symbol/rxSubscriber */
      "p//D");

      var Observer_1 = __webpack_require__(
      /*! ../Observer */
      "GiSu");

      function toSubscriber(nextOrObserver, error, complete) {
        if (nextOrObserver) {
          if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
          }

          if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
          }
        }

        if (!nextOrObserver && !error && !complete) {
          return new Subscriber_1.Subscriber(Observer_1.empty);
        }

        return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
      }

      exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

      /***/
    },

    /***/
    "Z5tI":
    /*!***************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function Z5tI(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var hostReportError_1 = __webpack_require__(
      /*! ./hostReportError */
      "MkmW");

      exports.subscribeToPromise = function (promise) {
        return function (subscriber) {
          promise.then(function (value) {
            if (!subscriber.closed) {
              subscriber.next(value);
              subscriber.complete();
            }
          }, function (err) {
            return subscriber.error(err);
          }).then(null, hostReportError_1.hostReportError);
          return subscriber;
        };
      }; //# sourceMappingURL=subscribeToPromise.js.map

      /***/

    },

    /***/
    "ds6q":
    /*!***********************************************!*\
      !*** ./node_modules/rxjs/internal/Subject.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function ds6q(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics4 = function extendStatics(d, b) {
          _extendStatics4 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics4(d, b);
        };

        return function (d, b) {
          _extendStatics4(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Observable_1 = __webpack_require__(
      /*! ./Observable */
      "Q1FS");

      var Subscriber_1 = __webpack_require__(
      /*! ./Subscriber */
      "FWf1");

      var Subscription_1 = __webpack_require__(
      /*! ./Subscription */
      "zB/H");

      var ObjectUnsubscribedError_1 = __webpack_require__(
      /*! ./util/ObjectUnsubscribedError */
      "Mxlh");

      var SubjectSubscription_1 = __webpack_require__(
      /*! ./SubjectSubscription */
      "FiyT");

      var rxSubscriber_1 = __webpack_require__(
      /*! ../internal/symbol/rxSubscriber */
      "p//D");

      var SubjectSubscriber = function (_super) {
        __extends(SubjectSubscriber, _super);

        function SubjectSubscriber(destination) {
          var _this = _super.call(this, destination) || this;

          _this.destination = destination;
          return _this;
        }

        return SubjectSubscriber;
      }(Subscriber_1.Subscriber);

      exports.SubjectSubscriber = SubjectSubscriber;

      var Subject = function (_super) {
        __extends(Subject, _super);

        function Subject() {
          var _this = _super.call(this) || this;

          _this.observers = [];
          _this.closed = false;
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
        }

        Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
          return new SubjectSubscriber(this);
        };

        Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        };

        Subject.prototype.next = function (value) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }

          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].next(value);
            }
          }
        };

        Subject.prototype.error = function (err) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }

          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].error(err);
          }

          this.observers.length = 0;
        };

        Subject.prototype.complete = function () {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          }

          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].complete();
          }

          this.observers.length = 0;
        };

        Subject.prototype.unsubscribe = function () {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        };

        Subject.prototype._trySubscribe = function (subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else {
            return _super.prototype._trySubscribe.call(this, subscriber);
          }
        };

        Subject.prototype._subscribe = function (subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
          } else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
          }
        };

        Subject.prototype.asObservable = function () {
          var observable = new Observable_1.Observable();
          observable.source = this;
          return observable;
        };

        Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
        };

        return Subject;
      }(Observable_1.Observable);

      exports.Subject = Subject;

      var AnonymousSubject = function (_super) {
        __extends(AnonymousSubject, _super);

        function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;

          _this.destination = destination;
          _this.source = source;
          return _this;
        }

        AnonymousSubject.prototype.next = function (value) {
          var destination = this.destination;

          if (destination && destination.next) {
            destination.next(value);
          }
        };

        AnonymousSubject.prototype.error = function (err) {
          var destination = this.destination;

          if (destination && destination.error) {
            this.destination.error(err);
          }
        };

        AnonymousSubject.prototype.complete = function () {
          var destination = this.destination;

          if (destination && destination.complete) {
            this.destination.complete();
          }
        };

        AnonymousSubject.prototype._subscribe = function (subscriber) {
          var source = this.source;

          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return Subscription_1.Subscription.EMPTY;
          }
        };

        return AnonymousSubject;
      }(Subject);

      exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map

      /***/
    },

    /***/
    "ekmL":
    /*!*********************************************************************************!*\
      !*** ./src/app/core/services/comon-services/destroy-service/destroy.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: DestroyService */

    /***/
    function ekmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DestroyService", function () {
        return DestroyService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DestroyService = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
        _inherits(DestroyService, _rxjs__WEBPACK_IMPORT);

        var _super2 = _createSuper(DestroyService);

        function DestroyService() {
          _classCallCheck(this, DestroyService);

          return _super2.apply(this, arguments);
        }

        _createClass(DestroyService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.next();
            this.complete();
          }
        }]);

        return DestroyService;
      }(rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]);

      DestroyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DestroyService);
      /***/
    },

    /***/
    "gfFi":
    /*!********************************************!*\
      !*** ./src/app/core/module/core.module.ts ***!
      \********************************************/

    /*! exports provided: TitleService, FormsModule, ReactiveFormsModule, IconsProviderModule, NzLayoutModule, NzMenuModule, HttpClientModule, MaterialModule, NgZorroAntdModule, CoreModule */

    /***/
    function gfFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
        return _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"];
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"];
      });
      /* harmony import */


      var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-zorro-antd/layout */
      "nHXS");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NzLayoutModule", function () {
        return ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"];
      });
      /* harmony import */


      var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-zorro-antd/menu */
      "/L1H");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NzMenuModule", function () {
        return ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"];
      });
      /* harmony import */


      var src_app_icons_provider_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/icons-provider.module */
      "Hhmg");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function () {
        return src_app_icons_provider_module__WEBPACK_IMPORTED_MODULE_6__["IconsProviderModule"];
      });
      /* harmony import */


      var _services_comon_services_title_service_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/comon-services/title-service/title.service */
      "2o9x");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TitleService", function () {
        return _services_comon_services_title_service_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"];
      });
      /* harmony import */


      var _utils_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../utils/material.module */
      "1Y/V");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return _utils_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"];
      });
      /* harmony import */


      var _utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../utils/ng-zorro-antd/ng-zorro-antd.module */
      "WJMM");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NgZorroAntdModule", function () {
        return _utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"];
      }); //import {StoreDevtoolsModule} from "@ngrx/store-devtools";


      var CoreModule = function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        if (parentModule) {
          throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
      };

      CoreModule.ctorParameters = function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
          }]
        }];
      };

      CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [// environment.production
          // 	? []
          // 	: StoreDevtoolsModule.instrument({
          // 			name: "Angular NgRx Material Starter"
          // 	  }),
        ],
        declarations: []
      })], CoreModule);
      /***/
    },

    /***/
    "mbIT":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isArray.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function mbIT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.isArray = function () {
        return Array.isArray || function (x) {
          return x && typeof x.length === 'number';
        };
      }(); //# sourceMappingURL=isArray.js.map

      /***/

    },

    /***/
    "n3uD":
    /*!**********************************************!*\
      !*** ./node_modules/rxjs/internal/config.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function n3uD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _enable_super_gross_mode_that_will_cause_bad_things = false;
      exports.config = {
        Promise: undefined,

        set useDeprecatedSynchronousErrorHandling(value) {
          if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
          } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
          }

          _enable_super_gross_mode_that_will_cause_bad_things = value;
        },

        get useDeprecatedSynchronousErrorHandling() {
          return _enable_super_gross_mode_that_will_cause_bad_things;
        }

      }; //# sourceMappingURL=config.js.map

      /***/
    },

    /***/
    "ozli":
    /*!******************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
      \******************************************************************/

    /*! no static exports found */

    /***/
    function ozli(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var observable_1 = __webpack_require__(
      /*! ../symbol/observable */
      "zfKp");

      exports.subscribeToObservable = function (obj) {
        return function (subscriber) {
          var obs = obj[observable_1.observable]();

          if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
          } else {
            return obs.subscribe(subscriber);
          }
        };
      }; //# sourceMappingURL=subscribeToObservable.js.map

      /***/

    },

    /***/
    "p//D":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function pD(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.rxSubscriber = function () {
        return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
      }();

      exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

      /***/
    },

    /***/
    "poJ0":
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function poJ0(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var iterator_1 = __webpack_require__(
      /*! ../symbol/iterator */
      "VKeD");

      exports.subscribeToIterable = function (iterable) {
        return function (subscriber) {
          var iterator = iterable[iterator_1.iterator]();

          do {
            var item = void 0;

            try {
              item = iterator.next();
            } catch (err) {
              subscriber.error(err);
              return subscriber;
            }

            if (item.done) {
              subscriber.complete();
              break;
            }

            subscriber.next(item.value);

            if (subscriber.closed) {
              break;
            }
          } while (true);

          if (typeof iterator["return"] === 'function') {
            subscriber.add(function () {
              if (iterator["return"]) {
                iterator["return"]();
              }
            });
          }

          return subscriber;
        };
      }; //# sourceMappingURL=subscribeToIterable.js.map

      /***/

    },

    /***/
    "pshJ":
    /*!*******************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function pshJ(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function isFunction(x) {
        return typeof x === 'function';
      }

      exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

      /***/
    },

    /***/
    "wjEo":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs/internal/innerSubscribe.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function wjEo(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics5 = function extendStatics(d, b) {
          _extendStatics5 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics5(d, b);
        };

        return function (d, b) {
          _extendStatics5(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscriber_1 = __webpack_require__(
      /*! ./Subscriber */
      "FWf1");

      var Observable_1 = __webpack_require__(
      /*! ./Observable */
      "Q1FS");

      var subscribeTo_1 = __webpack_require__(
      /*! ./util/subscribeTo */
      "6qA3");

      var SimpleInnerSubscriber = function (_super) {
        __extends(SimpleInnerSubscriber, _super);

        function SimpleInnerSubscriber(parent) {
          var _this = _super.call(this) || this;

          _this.parent = parent;
          return _this;
        }

        SimpleInnerSubscriber.prototype._next = function (value) {
          this.parent.notifyNext(value);
        };

        SimpleInnerSubscriber.prototype._error = function (error) {
          this.parent.notifyError(error);
          this.unsubscribe();
        };

        SimpleInnerSubscriber.prototype._complete = function () {
          this.parent.notifyComplete();
          this.unsubscribe();
        };

        return SimpleInnerSubscriber;
      }(Subscriber_1.Subscriber);

      exports.SimpleInnerSubscriber = SimpleInnerSubscriber;

      var ComplexInnerSubscriber = function (_super) {
        __extends(ComplexInnerSubscriber, _super);

        function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
          var _this = _super.call(this) || this;

          _this.parent = parent;
          _this.outerValue = outerValue;
          _this.outerIndex = outerIndex;
          return _this;
        }

        ComplexInnerSubscriber.prototype._next = function (value) {
          this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
        };

        ComplexInnerSubscriber.prototype._error = function (error) {
          this.parent.notifyError(error);
          this.unsubscribe();
        };

        ComplexInnerSubscriber.prototype._complete = function () {
          this.parent.notifyComplete(this);
          this.unsubscribe();
        };

        return ComplexInnerSubscriber;
      }(Subscriber_1.Subscriber);

      exports.ComplexInnerSubscriber = ComplexInnerSubscriber;

      var SimpleOuterSubscriber = function (_super) {
        __extends(SimpleOuterSubscriber, _super);

        function SimpleOuterSubscriber() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        SimpleOuterSubscriber.prototype.notifyNext = function (innerValue) {
          this.destination.next(innerValue);
        };

        SimpleOuterSubscriber.prototype.notifyError = function (err) {
          this.destination.error(err);
        };

        SimpleOuterSubscriber.prototype.notifyComplete = function () {
          this.destination.complete();
        };

        return SimpleOuterSubscriber;
      }(Subscriber_1.Subscriber);

      exports.SimpleOuterSubscriber = SimpleOuterSubscriber;

      var ComplexOuterSubscriber = function (_super) {
        __extends(ComplexOuterSubscriber, _super);

        function ComplexOuterSubscriber() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        ComplexOuterSubscriber.prototype.notifyNext = function (_outerValue, innerValue, _outerIndex, _innerSub) {
          this.destination.next(innerValue);
        };

        ComplexOuterSubscriber.prototype.notifyError = function (error) {
          this.destination.error(error);
        };

        ComplexOuterSubscriber.prototype.notifyComplete = function (_innerSub) {
          this.destination.complete();
        };

        return ComplexOuterSubscriber;
      }(Subscriber_1.Subscriber);

      exports.ComplexOuterSubscriber = ComplexOuterSubscriber;

      function innerSubscribe(result, innerSubscriber) {
        if (innerSubscriber.closed) {
          return undefined;
        }

        if (result instanceof Observable_1.Observable) {
          return result.subscribe(innerSubscriber);
        }

        return subscribeTo_1.subscribeTo(result)(innerSubscriber);
      }

      exports.innerSubscribe = innerSubscribe; //# sourceMappingURL=innerSubscribe.js.map

      /***/
    },

    /***/
    "yRPT":
    /*!********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function yRPT(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.isArrayLike = function (x) {
        return x && typeof x.length === 'number' && typeof x !== 'function';
      }; //# sourceMappingURL=isArrayLike.js.map

      /***/

    },

    /***/
    "yoF8":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs/internal/util/identity.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function yoF8(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function identity(x) {
        return x;
      }

      exports.identity = identity; //# sourceMappingURL=identity.js.map

      /***/
    },

    /***/
    "yx2s":
    /*!***********************************************************!*\
      !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function yx2s(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Subscriber_1 = __webpack_require__(
      /*! ../Subscriber */
      "FWf1");

      function canReportError(observer) {
        while (observer) {
          var _a = observer,
              closed_1 = _a.closed,
              destination = _a.destination,
              isStopped = _a.isStopped;

          if (closed_1 || isStopped) {
            return false;
          } else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
          } else {
            observer = null;
          }
        }

        return true;
      }

      exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

      /***/
    },

    /***/
    "zB/H":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs/internal/Subscription.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function zBH(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var isArray_1 = __webpack_require__(
      /*! ./util/isArray */
      "mbIT");

      var isObject_1 = __webpack_require__(
      /*! ./util/isObject */
      "GMZp");

      var isFunction_1 = __webpack_require__(
      /*! ./util/isFunction */
      "pshJ");

      var UnsubscriptionError_1 = __webpack_require__(
      /*! ./util/UnsubscriptionError */
      "LBXl");

      var Subscription = function () {
        function Subscription(unsubscribe) {
          this.closed = false;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
          }
        }

        Subscription.prototype.unsubscribe = function () {
          var errors;

          if (this.closed) {
            return;
          }

          var _a = this,
              _parentOrParents = _a._parentOrParents,
              _ctorUnsubscribe = _a._ctorUnsubscribe,
              _unsubscribe = _a._unsubscribe,
              _subscriptions = _a._subscriptions;

          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent_1 = _parentOrParents[index];
              parent_1.remove(this);
            }
          }

          if (isFunction_1.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
              this._unsubscribe = undefined;
            }

            try {
              _unsubscribe.call(this);
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
          }

          if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;

            while (++index < len) {
              var sub = _subscriptions[index];

              if (isObject_1.isObject(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
                    errors.push(e);
                  }
                }
              }
            }
          }

          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        };

        Subscription.prototype.add = function (teardown) {
          var subscription = teardown;

          if (!teardown) {
            return Subscription.EMPTY;
          }

          switch (typeof teardown) {
            case 'function':
              subscription = new Subscription(teardown);

            case 'object':
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _parentOrParents = subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }

          return subscription;
        };

        Subscription.prototype.remove = function (subscription) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);

            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        };

        Subscription.EMPTY = function (empty) {
          empty.closed = true;
          return empty;
        }(new Subscription());

        return Subscription;
      }();

      exports.Subscription = Subscription;

      function flattenUnsubscriptionErrors(errors) {
        return errors.reduce(function (errs, err) {
          return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
        }, []);
      } //# sourceMappingURL=Subscription.js.map

      /***/

    },

    /***/
    "zfKp":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function zfKp(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      exports.observable = function () {
        return typeof Symbol === 'function' && Symbol.observable || '@@observable';
      }(); //# sourceMappingURL=observable.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~features-admin-admin-module~features-customer-customer-module~features-seller-seller-module-es5.js.map