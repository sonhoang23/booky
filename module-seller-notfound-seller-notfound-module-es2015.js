(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-seller-notfound-seller-notfound-module"],{

/***/ "Lz6E":
/*!**********************************************************************************!*\
  !*** ./src/app/features/seller/module/seller-notfound/seller-notfound.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SellerNotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerNotfoundModule", function() { return SellerNotfoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _seller_notfound_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-notfound-routing.module */ "rdQZ");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "igie");
/* harmony import */ var src_app_core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utils/ng-zorro-antd/ng-zorro-antd.module */ "WJMM");






let SellerNotfoundModule = class SellerNotfoundModule {
};
SellerNotfoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _seller_notfound_routing_module__WEBPACK_IMPORTED_MODULE_3__["SellerNotfoundRoutingModule"], src_app_core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]]
    })
], SellerNotfoundModule);



/***/ }),

/***/ "igie":
/*!***************************************************************************************!*\
  !*** ./src/app/features/seller/module/seller-notfound/notfound/notfound.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notfound.component.html */ "o+ls");
/* harmony import */ var _notfound_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notfound.component.less */ "ulUr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent.ctorParameters = () => [];
NotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notfound',
        template: _raw_loader_notfound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notfound_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotfoundComponent);



/***/ }),

/***/ "o+ls":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/module/seller-notfound/notfound/notfound.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-result nzStatus=\"404\" nzTitle=\"404\" nzSubTitle=\"Sorry, the page you visited does not exist.\">\n    <div nz-result-extra>\n      <button [routerLink]=\"['../']\" nz-button nzType=\"primary\">Back Home</button>\n    </div>\n  </nz-result>");

/***/ }),

/***/ "rdQZ":
/*!******************************************************************************************!*\
  !*** ./src/app/features/seller/module/seller-notfound/seller-notfound-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SellerNotfoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerNotfoundRoutingModule", function() { return SellerNotfoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notfound/notfound.component */ "igie");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [{ path: '', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_1__["NotfoundComponent"] }];
let SellerNotfoundRoutingModule = class SellerNotfoundRoutingModule {
};
SellerNotfoundRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SellerNotfoundRoutingModule);



/***/ }),

/***/ "ulUr":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/seller/module/seller-notfound/notfound/notfound.component.less ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rmb3VuZC5jb21wb25lbnQubGVzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=module-seller-notfound-seller-notfound-module-es2015.js.map