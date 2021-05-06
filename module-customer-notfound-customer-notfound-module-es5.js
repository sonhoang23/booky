(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-customer-notfound-customer-notfound-module"], {
    /***/
    "A0pC":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/module/customer-notfound/notfound/notfound.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A0pC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-result nzStatus=\"404\" nzTitle=\"404\" nzSubTitle=\"Sorry, the page you visited does not exist.\">\n    <div nz-result-extra>\n      <button [routerLink]=\"['../']\" nz-button nzType=\"primary\">Back Home</button>\n    </div>\n  </nz-result>";
      /***/
    },

    /***/
    "Bsrv":
    /*!****************************************************************************************!*\
      !*** ./src/app/features/customer/module/customer-notfound/customer-notfound.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: CustomerNotfoundModule */

    /***/
    function Bsrv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerNotfoundModule", function () {
        return CustomerNotfoundModule;
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


      var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notfound/notfound.component */
      "IrLU");
      /* harmony import */


      var src_app_core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils/ng-zorro-antd/ng-zorro-antd.module */
      "WJMM");
      /* harmony import */


      var _customer_notfound_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./customer-notfound-routing.module */
      "M7qj");

      var CustomerNotfoundModule = function CustomerNotfoundModule() {
        _classCallCheck(this, CustomerNotfoundModule);
      };

      CustomerNotfoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _customer_notfound_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerNotfoundRoutingModule"], src_app_core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"]]
      })], CustomerNotfoundModule);
      /***/
    },

    /***/
    "IrLU":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/customer/module/customer-notfound/notfound/notfound.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: NotfoundComponent */

    /***/
    function IrLU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
        return NotfoundComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notfound.component.html */
      "A0pC");
      /* harmony import */


      var _notfound_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./notfound.component.less */
      "q2Gd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var NotfoundComponent = /*#__PURE__*/function () {
        function NotfoundComponent() {
          _classCallCheck(this, NotfoundComponent);
        }

        _createClass(NotfoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotfoundComponent;
      }();

      NotfoundComponent.ctorParameters = function () {
        return [];
      };

      NotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notfound',
        template: _raw_loader_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notfound_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NotfoundComponent);
      /***/
    },

    /***/
    "M7qj":
    /*!************************************************************************************************!*\
      !*** ./src/app/features/customer/module/customer-notfound/customer-notfound-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: CustomerNotfoundRoutingModule */

    /***/
    function M7qj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerNotfoundRoutingModule", function () {
        return CustomerNotfoundRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notfound/notfound.component */
      "IrLU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var routes = [{
        path: '',
        component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_1__["NotfoundComponent"]
      }];

      var CustomerNotfoundRoutingModule = function CustomerNotfoundRoutingModule() {
        _classCallCheck(this, CustomerNotfoundRoutingModule);
      };

      CustomerNotfoundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], CustomerNotfoundRoutingModule);
      /***/
    },

    /***/
    "q2Gd":
    /*!*********************************************************************************************!*\
      !*** ./src/app/features/customer/module/customer-notfound/notfound/notfound.component.less ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function q2Gd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQubGVzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=module-customer-notfound-customer-notfound-module-es5.js.map