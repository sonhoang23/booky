(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-shop-shop-module"],{

/***/ "5Pn3":
/*!************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/shop/component/shop-detail/shop-detail.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ShopDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopDetailComponent", function() { return ShopDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shop_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shop-detail.component.html */ "6k8C");
/* harmony import */ var _shop_detail_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-detail.component.less */ "XIRF");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_services_customer_shop_shop_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/customer/shop/shop.service */ "Oqyb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "tqRt");
/* harmony import */ var src_app_core_store_customer_login_customer_login_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/store/customer/login/customer-login.selector */ "/gWb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_sort_product_sort_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/comon-services/sort-product/sort-product.service */ "XF8i");
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
















//3 trạng thái: chưa login => hiển thị nút xanh, cho phép follow => click => login
// đã login => nếu trả về đã follow => hiển thị nút xám và cho unfollow
// đã login => nếu trả về chưa follow => hiển thị nút xanh, cho phép follow
let ShopDetailComponent = class ShopDetailComponent {
    constructor(destroy$, shopService, router, route, store, appTranslateService, notificationService, sortProductService, appErrorHandler, spinner) {
        this.destroy$ = destroy$;
        this.shopService = shopService;
        this.router = router;
        this.route = route;
        this.store = store;
        this.appTranslateService = appTranslateService;
        this.notificationService = notificationService;
        this.sortProductService = sortProductService;
        this.appErrorHandler = appErrorHandler;
        this.spinner = spinner;
        this.isLoading = true; //skelton
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.updateFollowShopLoading = false;
        this.shopResponse = {};
        this.isfollower = false;
        this.apiResult = {};
    }
    ngOnInit() {
        this.isLoading = true; //skelton
        this.route.paramMap.subscribe((param) => {
            if (param.get('shopId')) {
                this.shopId = +param.get('shopId');
                this.getShop();
                this.checkFollowShop(this.shopId);
            }
        });
    }
    changeFollow() {
        this.updateFollowShopLoading = true;
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_10__["select"])(src_app_core_store_customer_login_customer_login_selector__WEBPACK_IMPORTED_MODULE_11__["customerIsAuthenticatedLoginStateSelector"])).subscribe((result) => {
            if (result) {
                this.shopService.updateFollow({ id: this.shopId }).subscribe((resultApi) => {
                    if (resultApi.isSuccessed) {
                        //console.log(result);
                        if (resultApi.message) {
                            this.notificationService.showSuccessNotification(this.appTranslateService.instant(resultApi.message));
                        }
                        if (resultApi.resultObj) {
                            this.isfollower = resultApi.resultObj.status;
                            this.shopResponse.follower = resultApi.resultObj.followerCount;
                        }
                    }
                    else {
                        if (resultApi.message) {
                            this.notificationService.showErrorNotification(this.appTranslateService.instant(resultApi.message));
                        }
                    }
                    this.updateFollowShopLoading = false;
                }, (error) => {
                    this.appErrorHandler.handleErrorWithNoti(error);
                });
            }
            else {
                this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
            }
        }, (error) => {
            this.appErrorHandler.handleErrorWithNoti(error);
        }, () => { });
        //this.isfollower = true;
    }
    checkFollowShop(shopId) {
        this.shopService.checkFollowShop({ id: shopId }).subscribe((result) => {
            if (result.resultObj != null) {
                this.isfollower = result.resultObj;
                console.log(result.resultObj);
            }
            else {
                this.isfollower = false;
            }
        }, (error) => {
            this.appErrorHandler.handleErrorWithNoti(error);
            this.isfollower = false;
        });
    }
    getShop() {
        this.sortProductService
            .getQuery(this.route)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((value) => {
            this.isLoading = true;
            return this.shopService.getShop({
                pageIndex: value.page == undefined ? 1 : value.page,
                pageSize: 10,
                sortby: value.sortBy,
                order: value.order,
                id: this.shopId
            });
        }))
            .subscribe((result) => {
            console.log(result);
            if (result.isSuccessed) {
                if (result.resultObj) {
                    this.apiResult = {
                        statusCode: result.statusCode,
                        message: result.message,
                        isSuccessed: result.isSuccessed,
                        resultObj: result.resultObj.pagedResult
                    };
                    this.shopResponse = result.resultObj;
                    this.isLoading = false;
                }
                else {
                    this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
                }
            }
            else {
                if (result.message) {
                    this.notificationService.showErrorNotification(result.message);
                }
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }
        }, (error) => {
            this.appErrorHandler.handleErrorWithNoti(error);
            this.isfollower = false;
        });
    }
};
ShopDetailComponent.ctorParameters = () => [
    { type: _core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__["DestroyService"] },
    { type: src_app_core_services_customer_shop_shop_service__WEBPACK_IMPORTED_MODULE_7__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] },
    { type: src_app_core_services_comon_services_sort_product_sort_product_service__WEBPACK_IMPORTED_MODULE_14__["SortProductService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_15__["AppErrorHandler"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }
];
ShopDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-shop-detail',
        template: _raw_loader_shop_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shop_detail_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopDetailComponent);



/***/ }),

/***/ "6k8C":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/shop/component/shop-detail/shop-detail.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\n<ng-template #completedLoading>\n\t<nz-card nzTitle=\"Gian Hàng\">\n\t\t<div class=\"grid wide\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col l-4\">\n\t\t\t\t\t<nz-card>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col l-4\">\n\t\t\t\t\t\t\t\t<nz-avatar\n\t\t\t\t\t\t\t\t\tnzSrc=\"{{host}}/{{shopResponse.avatarImagePath}}\"\n\t\t\t\t\t\t\t\t\t[nzSize]=\"96\"\n\t\t\t\t\t\t\t\t\tnzIcon=\"user\"\n\t\t\t\t\t\t\t\t></nz-avatar>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col l-8\">\n\t\t\t\t\t\t\t\t<h3 nz-typography>{{shopResponse.shopName}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div *ngIf=\"isfollower; else elseBlock\" class=\"row\" style=\"margin-top: 25px;\">\n\t\t\t\t\t\t\t<button [nzLoading]=\"updateFollowShopLoading\" (click)=\"changeFollow()\" nz-button nzType=\"default\">\n\t\t\t\t\t\t\t\t<i nz-icon nzType=\"check\" nzTheme=\"outline\"></i>Đã Theo dõi\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ng-template #elseBlock\n\t\t\t\t\t\t\t><div class=\"row\" style=\"margin-top: 25px;\">\n\t\t\t\t\t\t\t\t<button [nzLoading]=\"updateFollowShopLoading\" (click)=\"changeFollow()\" nz-button nzType=\"primary\">\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Theo dõi\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div></ng-template\n\t\t\t\t\t\t>\n\t\t\t\t\t</nz-card>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col l-o-1 l-7\">\n\t\t\t\t\t<div class=\"row\" style=\"margin-top: 25px;\">\n\t\t\t\t\t\t<div class=\"col l-6\">\n\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-bottom: 1.6rem;\">\n\t\t\t\t\t\t\t\t<div class=\"col l-1\" style=\"font-size: 1.6rem;\">\n\t\t\t\t\t\t\t\t\t<h4 nz-icon [nzTheme]=\"'twotone'\" nzType=\"shop\" nzTheme=\"outline\"></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col l-11\" style=\"display: flex;\">\n\t\t\t\t\t\t\t\t\t<div class=\"row no-gutters\">\n\t\t\t\t\t\t\t\t\t\t<h5 nz-typography>Sản Phẩm: {{shopResponse.productCount}}</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\" style=\"margin-bottom: 1.6rem;\">\n\t\t\t\t\t\t\t\t<div class=\"col l-1\" style=\"font-size: 1.6rem;\">\n\t\t\t\t\t\t\t\t\t<h4 nz-icon nzType=\"usergroup-add\" nzTheme=\"outline\"></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col l-11\" style=\"display: flex;\">\n\t\t\t\t\t\t\t\t\t<div class=\"row no-gutters\">\n\t\t\t\t\t\t\t\t\t\t<h5 nz-typography>Người Theo Dõi: {{shopResponse.follower}}</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col l-6\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</nz-card>\n\t<app-customer-index [apiResult]=\"apiResult\"></app-customer-index>\n</ng-template>\n");

/***/ }),

/***/ "BN4s":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/shop/component/shop/shop.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>shop works!</p>\náa");

/***/ }),

/***/ "Eb6R":
/*!************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/shop/shop-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _component_shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/shop-detail/shop-detail.component */ "5Pn3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [
    {
        path: ':shopId',
        component: _component_shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_1__["ShopDetailComponent"]
    }
];
// const routes: Routes = [
// 	{
// 		path: '',
// 		component: ShopDetailComponent,
// 		children: [{path: ':shopId', component: ShopDetailComponent}]
// 	}
// ];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ShopRoutingModule);



/***/ }),

/***/ "Hh9y":
/*!****************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/shop/shop.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../../core/utils/ng-zorro-antd/ng-zorro-antd.module */ "WJMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop-routing.module */ "Eb6R");
/* harmony import */ var _component_shop_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/shop/shop.component */ "lJz6");
/* harmony import */ var _component_shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/shop-detail/shop-detail.component */ "5Pn3");
/* harmony import */ var _components_customer_index_customer_index_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/customer-index/customer-index.module */ "C2kW");








let ShopModule = class ShopModule {
};
ShopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_component_shop_shop_component__WEBPACK_IMPORTED_MODULE_5__["ShopComponent"], _component_shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_6__["ShopDetailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShopRoutingModule"], _core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_1__["NgZorroAntdModule"], _components_customer_index_customer_index_module__WEBPACK_IMPORTED_MODULE_7__["CustomerIndexModule"]]
    })
], ShopModule);



/***/ }),

/***/ "Oqyb":
/*!*************************************************************!*\
  !*** ./src/app/core/services/customer/shop/shop.service.ts ***!
  \*************************************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_utils_URL_customer_url_customer_shop_customer_url_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils/URL/customer-url/customer-shop/customer-url-shop */ "RXp7");




let ShopService = class ShopService {
    constructor(http, customerUrlShopString) {
        this.http = http;
        this.customerUrlShopString = customerUrlShopString;
        this.languageCode = 'vn';
    }
    getShop(request) {
        console.log(request);
        request.languageCode = this.languageCode;
        return this.http.get(this.customerUrlShopString.getShop(request));
    }
    checkFollowShop(request) {
        request.languageCode = this.languageCode;
        return this.http.get(this.customerUrlShopString.getCheckFollowShop(request));
    }
    updateFollow(request) {
        request.languageCode = this.languageCode;
        return this.http.post(this.customerUrlShopString.postUpdateFollow(), request);
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_core_utils_URL_customer_url_customer_shop_customer_url_shop__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlShop"] }
];
ShopService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ShopService);



/***/ }),

/***/ "RXp7":
/*!********************************************************************************!*\
  !*** ./src/app/core/utils/URL/customer-url/customer-shop/customer-url-shop.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerUrlShop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUrlShop", function() { return CustomerUrlShop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _customer_url_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../customer-url-base */ "1zjI");




let CustomerUrlShop = class CustomerUrlShop extends _customer_url_base__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlBase"] {
    getShop(request) {
        //console.log('trong url');
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageindex', request.pageIndex == undefined ? '1' : request.pageIndex.toString())
            .set('pagesize', request.pageSize == undefined ? '10' : request.pageSize.toString())
            .set('sortby', request.sortby == undefined ? '' : request.sortby)
            .set('id', request.id == undefined ? '' : request.id.toString())
            .set('languageCode', request.languageCode == undefined ? '' : request.languageCode);
        return this.customerUrl + `/Shop?` + params;
    }
    getCheckFollowShop(request) {
        return this.customerUrl + `/shop/isfollow/${request.id}`;
    }
    postUpdateFollow() {
        return this.customerUrl + `/shop/update-follow`;
    }
};
CustomerUrlShop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CustomerUrlShop);



/***/ }),

/***/ "XIRF":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/shop/component/shop-detail/shop-detail.component.less ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLWRldGFpbC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "lJz6":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/shop/component/shop/shop.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shop_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shop.component.html */ "BN4s");
/* harmony import */ var _shop_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.component.less */ "rVhO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let ShopComponent = class ShopComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShopComponent.ctorParameters = () => [];
ShopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shop',
        template: _raw_loader_shop_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shop_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShopComponent);



/***/ }),

/***/ "rVhO":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/shop/component/shop/shop.component.less ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ })

}]);
//# sourceMappingURL=components-customer-body-modules-shop-shop-module-es2015.js.map