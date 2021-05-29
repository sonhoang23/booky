(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-chat-Customer-chat-module"], {
    /***/
    "/Lk4":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/chat/customer-chat/customer-chat.component.ts ***!
      \******************************************************************************************************************/

    /*! exports provided: CustomerChatComponent */

    /***/
    function Lk4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerChatComponent", function () {
        return CustomerChatComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_customer_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./customer-chat.component.html */
      "CbVj");
      /* harmony import */


      var _customer_chat_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./customer-chat.component.less */
      "o/wd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var CustomerChatComponent = /*#__PURE__*/function () {
        function CustomerChatComponent() {
          _classCallCheck(this, CustomerChatComponent);
        }

        _createClass(CustomerChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CustomerChatComponent;
      }();

      CustomerChatComponent.ctorParameters = function () {
        return [];
      };

      CustomerChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-chat',
        template: _raw_loader_customer_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_customer_chat_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CustomerChatComponent);
      /***/
    },

    /***/
    "CbVj":
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/chat/customer-chat/customer-chat.component.html ***!
      \**********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CbVj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-chat></app-chat>\n";
      /***/
    },

    /***/
    "G/zs":
    /*!************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/chat/chat-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: ChatRoutingModule */

    /***/
    function GZs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function () {
        return ChatRoutingModule;
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


      var _customer_chat_customer_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./customer-chat/customer-chat.component */
      "/Lk4");

      var routes = [{
        path: '',
        component: _customer_chat_customer_chat_component__WEBPACK_IMPORTED_MODULE_3__["CustomerChatComponent"]
      }];

      var ChatRoutingModule = function ChatRoutingModule() {
        _classCallCheck(this, ChatRoutingModule);
      };

      ChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatRoutingModule);
      /***/
    },

    /***/
    "eodd":
    /*!*************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/chat/Customer-chat.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: CustomerChatModule */

    /***/
    function eodd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerChatModule", function () {
        return CustomerChatModule;
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


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat-routing.module */
      "G/zs");
      /* harmony import */


      var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/module/core.module */
      "gfFi");
      /* harmony import */


      var _customer_chat_customer_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-chat/customer-chat.component */
      "/Lk4");
      /* harmony import */


      var src_app_features_modules_chat_chat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/features/modules/chat/chat.module */
      "vElg");

      var CustomerChatModule = function CustomerChatModule() {
        _classCallCheck(this, CustomerChatModule);
      };

      CustomerChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customer_chat_customer_chat_component__WEBPACK_IMPORTED_MODULE_5__["CustomerChatComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_features_modules_chat_chat_module__WEBPACK_IMPORTED_MODULE_6__["ChatModule"]]
      })], CustomerChatModule);
      /***/
    },

    /***/
    "o/wd":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/features/customer/components/customer-body/modules/chat/customer-chat/customer-chat.component.less ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oWd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1jaGF0LmNvbXBvbmVudC5sZXNzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-customer-body-modules-chat-Customer-chat-module-es5.js.map