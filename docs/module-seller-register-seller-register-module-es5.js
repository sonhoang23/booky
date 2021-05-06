(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-seller-register-seller-register-module"], {
    /***/
    "/mTt":
    /*!*************************************************************************************!*\
      !*** ./src/app/features/seller/module/seller-register/seller-register.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: SellerRegisterComponent */

    /***/
    function mTt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerRegisterComponent", function () {
        return SellerRegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_seller_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./seller-register.component.html */
      "wi/G");
      /* harmony import */


      var _seller_register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./seller-register.component.scss */
      "W8Ag");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var SellerRegisterComponent = /*#__PURE__*/function () {
        function SellerRegisterComponent() {
          _classCallCheck(this, SellerRegisterComponent);
        }

        _createClass(SellerRegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SellerRegisterComponent;
      }();

      SellerRegisterComponent.ctorParameters = function () {
        return [];
      };

      SellerRegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-register',
        template: _raw_loader_seller_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SellerRegisterComponent);
      /***/
    },

    /***/
    "U3YO":
    /*!**********************************************************************************!*\
      !*** ./src/app/features/seller/module/seller-register/seller-register.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: SellerRegisterModule */

    /***/
    function U3YO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerRegisterModule", function () {
        return SellerRegisterModule;
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


      var _seller_register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./seller-register-routing.module */
      "crtK");
      /* harmony import */


      var _seller_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./seller-register.component */
      "/mTt");

      var SellerRegisterModule = function SellerRegisterModule() {
        _classCallCheck(this, SellerRegisterModule);
      };

      SellerRegisterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_seller_register_component__WEBPACK_IMPORTED_MODULE_4__["SellerRegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _seller_register_routing_module__WEBPACK_IMPORTED_MODULE_3__["SellerRegisterRoutingModule"]]
      })], SellerRegisterModule);
      /***/
    },

    /***/
    "W8Ag":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/seller/module/seller-register/seller-register.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function W8Ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "crtK":
    /*!******************************************************************************************!*\
      !*** ./src/app/features/seller/module/seller-register/seller-register-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: SellerRegisterRoutingModule */

    /***/
    function crtK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerRegisterRoutingModule", function () {
        return SellerRegisterRoutingModule;
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

      var routes = [];

      var SellerRegisterRoutingModule = function SellerRegisterRoutingModule() {
        _classCallCheck(this, SellerRegisterRoutingModule);
      };

      SellerRegisterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SellerRegisterRoutingModule);
      /***/
    },

    /***/
    "wi/G":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/module/seller-register/seller-register.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>seller-register works!</p>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=module-seller-register-seller-register-module-es5.js.map