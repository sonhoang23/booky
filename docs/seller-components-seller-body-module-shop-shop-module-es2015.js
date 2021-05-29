(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-components-seller-body-module-shop-shop-module"],{

/***/ "RENV":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/components/seller-body/module/shop/shop-edit/shop-edit.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-spin [nzSpinning]=\"submitted\">\n\t<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t<!--title-->\n\t\t<nz-page-header-title> </nz-page-header-title>\n\t\t<!--subtitle-->\n\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t<!--content-->\n\t\t<nz-page-header-content>\n\t\t\t<div class=\"grid wide\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col l-12\">\n\t\t\t\t\t\t<form nz-form [formGroup]=\"shopInforForm\" (ngSubmit)=\"submitForm()\" #registerForm=\"ngForm\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col l-8\">\n\t\t\t\t\t\t\t\t\t<nz-card [nzBordered]=\"true\" nzTitle=\"Thông Tin Cửa Hàng\">\n\t\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\t>Tên Cửa Hàng</nz-form-label\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t\t<nz-input-group nzPrefixIcon=\"user\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Tên Cửa Hàng\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t\t</nz-input-group>\n\t\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col l-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-12\">\n\t\t\t\t\t\t\t\t\t\t\t<nz-card [nzBordered]=\"true\" nzTitle=\"Ảnh Đại Diện\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row col \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-upload\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzBeforeUpload]=\"beforeUpload\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzShowButton]=\"thumbshandlePreview.length<1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" nz-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"upload\"></i>Tải Lên\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-upload>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzPopoverPlacement=\"top\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnz-popover\n\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzPopoverTitle=\"Trợ Giúp\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzPopoverContent=\"Ảnh Đại Diện Của Bạn, Chỉ Tải Một Ảnh Duy Nhất\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"question\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row col\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"position: relative;\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"{{host}}/{{thumbshandlePreview}}\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\talt=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"max-width:100px ;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"example-box\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcdkDrag\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t/>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: absolute; top:0; right: 0;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzDanger\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzPopconfirmTitle=\"Bạn Có Chắc Muốn Xóa Ảnh?\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(nzOnConfirm)=\"confirmDeleteImage()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"cancelDeleteImage()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tnzPopconfirmPlacement=\"right\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\" style=\"box-sizing: border-box;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-12\">\n\t\t\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"max-width:100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-height:100%;\"\n\t\t\t\t\t\t\t\t\t\t\t\tnz-image\n\t\t\t\t\t\t\t\t\t\t\t\tnzSrc=\"../../../../../assets/img/registerpage.png\"\n\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\t\tnzPopconfirmTitle=\"Bạn Có Chắc Muốn Cập Nhật Thông Tin Này?\"\n\t\t\t\t\t\t\t\t\t\t(nzOnConfirm)=\"confirmUpdate()\"\n\t\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"confirmDeleteImage()\"\n\t\t\t\t\t\t\t\t\t\tnzPopconfirmPlacement=\"bottomRight\"\n\t\t\t\t\t\t\t\t\t\ttype=\"button\"\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"!registerForm.form.valid ||!modified \"\n\t\t\t\t\t\t\t\t\t\t[nzType]=\"'primary'\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\tCập Nhật Thông Tin\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nz-page-header-content>\n\t</nz-page-header>\n</nz-spin>\n<!-- [disabled]=\"!registerForm.form.valid\" -->\n");

/***/ }),

/***/ "dYtZ":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/shop/shop-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-edit/shop-edit.component */ "unuu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [
    { path: 'edit', component: _shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_1__["ShopEditComponent"], data: { title: 'Seller-app.content.body.shop.title' } }
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ShopRoutingModule);



/***/ }),

/***/ "gpgm":
/*!*************************************************************************!*\
  !*** ./src/app/core/services/seller/seller-shop/seller-shop.service.ts ***!
  \*************************************************************************/
/*! exports provided: SellerShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerShopService", function() { return SellerShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_utils_URL_seller_url_seller_shop_seller_url_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils/URL/seller-url/seller-shop/seller-url-shop */ "j724");




let SellerShopService = class SellerShopService {
    constructor(http, sellerUrlShop) {
        this.http = http;
        this.sellerUrlShop = sellerUrlShop;
    }
    getShopInfor() {
        return this.http.get(this.sellerUrlShop.sellerGetShopInfor());
    }
    putShopInfor(request) {
        return this.http.put(this.sellerUrlShop.sellerPutShopInfor(), request);
    }
    postAvatarImagePreview(newProductImage) {
        return this.http.post(this.sellerUrlShop.sellerPostAvatarImagePreviewAPI(), newProductImage);
    }
};
SellerShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_core_utils_URL_seller_url_seller_shop_seller_url_shop__WEBPACK_IMPORTED_MODULE_3__["SellerUrlShop"] }
];
SellerShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SellerShopService);



/***/ }),

/***/ "j724":
/*!**************************************************************************!*\
  !*** ./src/app/core/utils/URL/seller-url/seller-shop/seller-url-shop.ts ***!
  \**************************************************************************/
/*! exports provided: SellerUrlShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerUrlShop", function() { return SellerUrlShop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _seller_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../seller-url-base */ "KfMq");



let SellerUrlShop = class SellerUrlShop extends _seller_url_base__WEBPACK_IMPORTED_MODULE_2__["SellerUrlBase"] {
    sellerGetShopInfor() {
        return this.sellerUrl + '/seller/shop';
    }
    sellerPutShopInfor() {
        return this.sellerUrl + '/seller/shop';
    }
    sellerPostAvatarImagePreviewAPI() {
        return this.sellerUrl + '/seller/shop/image-preview';
    }
};
SellerUrlShop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SellerUrlShop);



/***/ }),

/***/ "mgIP":
/*!***********************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/shop/shop.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-routing.module */ "dYtZ");
/* harmony import */ var _shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop-edit/shop-edit.component */ "unuu");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/module/core.module */ "gfFi");








let ShopModule = class ShopModule {
};
ShopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shop_edit_shop_edit_component__WEBPACK_IMPORTED_MODULE_4__["ShopEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShopRoutingModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"]
        ]
    })
], ShopModule);



/***/ }),

/***/ "qcOB":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/shop/shop-edit/shop-edit.component.less ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLWVkaXQuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "unuu":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/shop/shop-edit/shop-edit.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ShopEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopEditComponent", function() { return ShopEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shop_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shop-edit.component.html */ "RENV");
/* harmony import */ var _shop_edit_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-edit.component.less */ "qcOB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");
/* harmony import */ var src_app_core_services_seller_seller_shop_seller_shop_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/seller/seller-shop/seller-shop.service */ "gpgm");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");












let ShopEditComponent = class ShopEditComponent {
    constructor(formBuilder, destroy$, appErrorHandler, sellerShopService, notificationService, spinnerService) {
        this.formBuilder = formBuilder;
        this.destroy$ = destroy$;
        this.appErrorHandler = appErrorHandler;
        this.sellerShopService = sellerShopService;
        this.notificationService = notificationService;
        this.spinnerService = spinnerService;
        this.isLoading = false; //return true: something is loading and false if something is completed
        this.submitted = false; //return true if submitted
        this.returnUrl = '';
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiUrl; //host of server
        /**is modified any personal infor in formGroup, return true: any fields changed, return false: fields is similar with init data */
        this.modified = false;
        this.beforeUpload = (file) => {
            const formData = new FormData();
            formData.append('productImage', file, file.name);
            this.sellerShopService
                .postAvatarImagePreview(formData)
                .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((result) => {
                console.log(result);
                if (result.resultObj != null) {
                    if (result.resultObj.imagePath != null) {
                        this.thumbshandlePreview = result.resultObj.imagePath;
                        this.isThumbshandlePreview = true;
                        this.modified = true;
                        //this.checkFormValueChange();
                    }
                    console.log(this.thumbshandlePreview);
                }
            }, (error) => {
                this.appErrorHandler.handleErrorWithNoti(error);
            });
            return false;
        };
        this.isModalVisible = false;
        this.thumbshandlePreview = '';
        this.shopInforResponse = {};
        this.isThumbshandlePreview = false;
        //init form
        this.shopInforForm = this.formBuilder.group({
            name: [{ value: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]]
        });
    }
    ngOnInit() {
        this.getShopInfor(); //get personal infor from store
        this.initFormDataFromStore(); //attach data from store into formGroup
        this.checkFormValueChange(); //check any fields changed
    }
    getShopInfor() {
        this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.sellerShopService
            .getShopInfor()
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                console.log(result);
                if (result.isSuccessed) {
                    if (result.resultObj) {
                        this.shopInforResponse = result.resultObj;
                        this.thumbshandlePreview = result.resultObj.imagePath;
                        console.log(result.resultObj.imagePath);
                        console.log(this.thumbshandlePreview);
                        this.isLoading = false;
                        //this.spinnerService.subjectSubmitLoadingHaveData$.next({isSubmitted: false});
                    }
                }
                else {
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
            }
        }, (error) => {
            this.isLoading = false;
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
    initFormDataFromStore() {
        this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        setTimeout(() => {
            this.shopInforForm.setValue({
                name: this.shopInforResponse.shopName != null ? this.shopInforResponse.shopName : ''
            });
            console.log(this.thumbshandlePreview);
            this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, 5000);
    }
    checkFormValueChange() {
        this.shopInforForm.valueChanges.subscribe((result) => {
            console.log('valueChanges');
            console.log(this.shopInforResponse.shopName);
            console.log(result.name);
            console.log(this.shopInforResponse.imagePath);
            console.log(this.thumbshandlePreview);
            if (result.name === (this.shopInforResponse.shopName != null ? this.shopInforResponse.shopName : '') &&
                this.thumbshandlePreview ===
                    (this.shopInforResponse.imagePath != null ? this.shopInforResponse.imagePath : '')) {
                this.modified = false;
            }
            else {
                this.modified = true;
            }
            console.log(this.modified);
        });
    }
    confirmUpdate() {
        this.submitForm();
    }
    submitForm() {
        try {
            this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
            const val = this.shopInforForm.value;
            const profileUpdate = {
                shopName: val.name,
                imagePath: this.thumbshandlePreview
            };
            this.sellerShopService
                .putShopInfor(profileUpdate)
                .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((res) => {
                if (res) {
                    if (res.isSuccessed) {
                        if (res.message) {
                            this.notificationService.showSuccessNotification(res.message);
                        }
                    }
                    else {
                        if (res.message) {
                            this.notificationService.showErrorNotification(res.message);
                        }
                    }
                }
                this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }, (error) => {
                this.appErrorHandler.handleErrorWithNoti(error);
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
    removeImageFile() {
        this.thumbshandlePreview = '';
        // if (this.shopInforResponse.imagePath) {
        // 	if (
        // 		this.thumbshandlePreview ===
        // 		(this.shopInforResponse.imagePath != null ? this.shopInforResponse.imagePath : '')
        // 	) {
        // 		//this.modified = false;
        // 	} else {
        // 		//this.modified = true;
        // 	}
        // 	//this.isThumbshandlePreview = false;
        // } else {
        // }
        this.modified = false;
        this.checkFormValueChange();
    }
    cancelDeleteImage() {
        this.isModalVisible = false;
        return;
    }
    confirmDeleteImage() {
        this.removeImageFile();
        this.checkFormValueChange();
        this.notificationService.showSuccessNotification('Đã Xóa Thành Công');
    }
};
ShopEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandler"] },
    { type: src_app_core_services_seller_seller_shop_seller_shop_service__WEBPACK_IMPORTED_MODULE_10__["SellerShopService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"] }
];
ShopEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shop-edit',
        template: _raw_loader_shop_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shop_edit_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopEditComponent);



/***/ })

}]);
//# sourceMappingURL=seller-components-seller-body-module-shop-shop-module-es2015.js.map