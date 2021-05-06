(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-shipper-shipper-module"], {
    /***/
    "5t/w":
    /*!*********************************************************!*\
      !*** ./src/app/features/shipper/shipper.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function tW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlwcGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "8wG5":
    /*!*******************************************************!*\
      !*** ./src/app/features/shipper/shipper.component.ts ***!
      \*******************************************************/

    /*! exports provided: ShipperComponent */

    /***/
    function wG5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShipperComponent", function () {
        return ShipperComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_shipper_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./shipper.component.html */
      "F/hZ");
      /* harmony import */


      var _shipper_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shipper.component.scss */
      "5t/w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ShipperComponent = /*#__PURE__*/function () {
        function ShipperComponent() {
          _classCallCheck(this, ShipperComponent);
        }

        _createClass(ShipperComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ShipperComponent;
      }();

      ShipperComponent.ctorParameters = function () {
        return [];
      };

      ShipperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shipper',
        template: _raw_loader_shipper_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shipper_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShipperComponent);
      /***/
    },

    /***/
    "F/hZ":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/shipper/shipper.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function FHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-layout>\n    <nz-header>Header</nz-header>\n    <nz-content>Content</nz-content>\n    <nz-footer>Footer</nz-footer>\n  </nz-layout>";
      /***/
    },

    /***/
    "s5kl":
    /*!****************************************************!*\
      !*** ./src/app/features/shipper/shipper.module.ts ***!
      \****************************************************/

    /*! exports provided: ShipperModule */

    /***/
    function s5kl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShipperModule", function () {
        return ShipperModule;
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


      var _shipper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shipper.component */
      "8wG5");
      /* harmony import */


      var src_app_core_utils_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/utils/material.module */
      "1Y/V");
      /* harmony import */


      var src_app_core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/utils/ng-zorro-antd/ng-zorro-antd.module */
      "WJMM");

      var ShipperModule = function ShipperModule() {
        _classCallCheck(this, ShipperModule);
      };

      ShipperModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shipper_component__WEBPACK_IMPORTED_MODULE_3__["ShipperComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_core_utils_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], src_app_core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]]
      })], ShipperModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-shipper-shipper-module-es5.js.map