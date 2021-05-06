(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-body-admin-order-admin-order-module"],{

/***/ "/Cjv":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/admin-order/order-comfirmed/order-comfirmed.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading;else loaded\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"> </nz-skeleton>\n<ng-template #loaded>\n\t<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t<!--title-->\n\t\t<nz-page-header-title>Đơn Hàng Cần Duyệt</nz-page-header-title>\n\t\t<!--subtitle-->\n\t\t<nz-page-header-subtitle\n\t\t\t>Đơn hàng đã được duyệt bởi nhà cung cấp và đang cần đến thu gom</nz-page-header-subtitle\n\t\t>\n\t\t<!--content-->\n\t\t<nz-page-header-content>\n\t\t\t<nz-table\n\t\t\t\t#basicTable\n\t\t\t\t[nzPageIndex]=\"pageResult?.pageIndex\"\n\t\t\t\t[nzTotal]=\"pageResult?.totalRecords\"\n\t\t\t\t[nzPageSize]=\"pageResult?.pageSize\"\n\t\t\t\t[nzShowTotal]=\"rangeTemplate\"\n\t\t\t\t[nzHideOnSinglePage]=\"true\"\n\t\t\t\t[nzData]=\"['']\"\n\t\t\t>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Tên Khách Hàng</th>\n\t\t\t\t\t\t<th>Địa Chỉ</th>\n\t\t\t\t\t\t<th>SDT</th>\n\t\t\t\t\t\t<th>Tổng Số Lượng</th>\n\t\t\t\t\t\t<th>Tổng Tiền</th>\n\t\t\t\t\t\t<th>Tình Trạng</th>\n\t\t\t\t\t\t<th>Hành Động</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let data of orderResponses\">\n\t\t\t\t\t\t<td>{{data.customerName}}</td>\n\t\t\t\t\t\t<td>{{data.address}}</td>\n\t\t\t\t\t\t<td>{{data.phoneNumber}}</td>\n\t\t\t\t\t\t<td>{{data.totalQuantity}}</td>\n\t\t\t\t\t\t<td>{{data.totalPrice|currency:'VND'}}</td>\n\t\t\t\t\t\t<td>{{data.status}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"row col\">\n\t\t\t\t\t\t\t\t<button nz-button [nzType]=\"'primary'\" (click)=\"showModal(data)\">\n\t\t\t\t\t\t\t\t\t<span>Chi Tiết</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<nz-modal\n\t\t\t\t\t\t\t\t\t[(nzVisible)]=\"data.isOrderDetailVisible\"\n\t\t\t\t\t\t\t\t\tnzTitle=\"Chi Tiết Đơn Hàng\"\n\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"handleCancel(data)\"\n\t\t\t\t\t\t\t\t\t(nzOnOk)=\"handleOk(data)\"\n\t\t\t\t\t\t\t\t\tnzWidth=\"1200px\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<ng-container *nzModalContent>\n\t\t\t\t\t\t\t\t\t\t<div class=\"grid wide row\">\n\t\t\t\t\t\t\t\t\t\t\t<app-order-detail-select-modal\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 100%;\"\n\t\t\t\t\t\t\t\t\t\t\t\t[orderDetails$]=\"orderDetails$\"\n\t\t\t\t\t\t\t\t\t\t\t></app-order-detail-select-modal>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</nz-modal>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row col\">\n\t\t\t\t\t\t\t\t<button (click)=\"confirmOrder(data.orderId)\" nz-button nzType=\"primary\">\n\t\t\t\t\t\t\t\t\tXác Nhận\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row col\" style=\"margin-top: 25px;\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\tnzPopconfirmTitle=\"Có Chắc Bạn Muốn Hủy Đơn Này?\"\n\t\t\t\t\t\t\t\t\t(nzOnConfirm)=\"deleteOrder(data.orderId)\"\n\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"cancel()\"\n\t\t\t\t\t\t\t\t\tnzPopconfirmPlacement=\"bottomRight\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzDanger\n\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\tHủy Đơn Hàng\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t<ng-template #rangeTemplate let-range=\"range\" let-total>\n\t\t\t\t\t{{ range[0] }}-{{ range[1] }} Trên {{ total }} Đơn\n\t\t\t\t</ng-template>\n\t\t\t</nz-table>\n\t\t\t<div\n\t\t\t\tclass=\"search-results\"\n\t\t\t\tinfiniteScroll\n\t\t\t\t[infiniteScrollDistance]=\"2\"\n\t\t\t\t[infiniteScrollThrottle]=\"50\"\n\t\t\t\t(scrolled)=\"onScroll()\"\n\t\t\t></div>\n\t\t</nz-page-header-content>\n\t</nz-page-header>\n</ng-template>\n");

/***/ }),

/***/ "522r":
/*!************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/admin-order/admin-order-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: AdminOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderRoutingModule", function() { return AdminOrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _order_comfirmed_order_comfirmed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-comfirmed/order-comfirmed.component */ "sxUZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [{ path: 'need-comfirm', component: _order_comfirmed_order_comfirmed_component__WEBPACK_IMPORTED_MODULE_1__["OrderComfirmedComponent"] }];
let AdminOrderRoutingModule = class AdminOrderRoutingModule {
};
AdminOrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AdminOrderRoutingModule);



/***/ }),

/***/ "IrkM":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/admin-order/order-comfirmed/order-comfirmed.component.less ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1jb21maXJtZWQuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "Q+kz":
/*!******************************************************************!*\
  !*** ./src/app/core/services/admin/order/admin-order.service.ts ***!
  \******************************************************************/
/*! exports provided: AdminOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderService", function() { return AdminOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _utils_URL_admin_url_admin_order_seller_url_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../utils/URL/admin-url/admin-order/seller-url-order */ "iYVr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let AdminOrderService = class AdminOrderService {
    constructor(urlString, http) {
        this.urlString = urlString;
        this.http = http;
        this.languageCode = 'vn';
        this.categoryId = 1;
    }
    getOrders(request) {
        request.languageCode = this.languageCode;
        return this.http.get(this.urlString.getOrderByOrderStatus(request));
    }
    postConfirmOrder(orderId) {
        return this.http.post(this.urlString.postConfirmOrder(), orderId);
    }
    postDeleteOrder(orderId) {
        return this.http.post(this.urlString.postCanceledOrder(), orderId);
    }
    getOrderDetail(orderId) {
        return this.http.get(this.urlString.getOrderDetails(orderId));
    }
};
AdminOrderService.ctorParameters = () => [
    { type: _utils_URL_admin_url_admin_order_seller_url_order__WEBPACK_IMPORTED_MODULE_1__["AdminUrlOrder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminOrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AdminOrderService);



/***/ }),

/***/ "iYVr":
/*!**************************************************************************!*\
  !*** ./src/app/core/utils/URL/admin-url/admin-order/seller-url-order.ts ***!
  \**************************************************************************/
/*! exports provided: AdminUrlOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUrlOrder", function() { return AdminUrlOrder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _admin_url_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-url-base */ "xZP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let AdminUrlOrder = class AdminUrlOrder extends _admin_url_base__WEBPACK_IMPORTED_MODULE_1__["AdminUrlBase"] {
    constructor() {
        super();
    }
    getOrderByOrderStatus(orderPagingRequest) {
        return (this.adminUrl +
            `/order/order-status?orderRequestType=${orderPagingRequest.orderRequestType}&pageIndex=${orderPagingRequest.pageIndex}&pageSize=${orderPagingRequest.pageSize}&languageCode=${orderPagingRequest.languageCode}`);
    }
    postConfirmOrder() {
        return this.adminUrl + `/order/confirm`;
    }
    postCanceledOrder() {
        return this.adminUrl + `/order/delete`;
    }
    getOrderDetails(orderId) {
        return this.adminUrl + `/order/order-detail/` + orderId;
    }
};
AdminUrlOrder.ctorParameters = () => [];
AdminUrlOrder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AdminUrlOrder);



/***/ }),

/***/ "sxUZ":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/admin-order/order-comfirmed/order-comfirmed.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: OrderComfirmedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComfirmedComponent", function() { return OrderComfirmedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_comfirmed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-comfirmed.component.html */ "/Cjv");
/* harmony import */ var _order_comfirmed_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-comfirmed.component.less */ "IrkM");
/* harmony import */ var _core_services_admin_order_admin_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../core/services/admin/order/admin-order.service */ "Q+kz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");
/* harmony import */ var src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/enums/OrderStatus.enum */ "EvTH");











let OrderComfirmedComponent = class OrderComfirmedComponent {
    constructor(adminOrderService, destroy$, notificationService, sellerSpinnerService) {
        this.adminOrderService = adminOrderService;
        this.destroy$ = destroy$;
        this.notificationService = notificationService;
        this.sellerSpinnerService = sellerSpinnerService;
        this.orderResponses = [];
        this.pageIndex = 1;
        this.isLoading = true;
        this.pageResult = {};
    }
    ngOnInit() {
        this.isLoading = true;
        //this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({isSubmitted: true});
        this.getData(1);
    }
    getData(pageIndex) {
        //this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({isSubmitted: true});
        this.adminOrderService
            .getOrders({
            orderRequestType: src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_10__["OrderStatus"].confirmed,
            pageIndex: pageIndex,
            pageSize: 10
        })
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$), Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_5__["map"])((value) => {
            if (value.resultObj) {
                value.resultObj.items.map((order) => {
                    order.status = 'Cần Duyệt';
                    return order;
                });
                return value;
            }
            else {
                return value;
            }
        }))
            .subscribe((result) => {
            console.log(result);
            if (result) {
                if (result.resultObj) {
                    if (result.isSuccessed) {
                        this.pageResult = result.resultObj;
                        Array.prototype.push.apply(this.orderResponses, result.resultObj.items);
                        this.isLoading = false;
                        this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
                    }
                    else {
                    }
                }
                else {
                }
            }
            else {
            }
            this.isLoading = false;
        });
    }
    deleteOrder(orderId) {
        this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.adminOrderService
            .postDeleteOrder(orderId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
                    this.deleteProductFromView();
                    if (result.message) {
                        this.notificationService.showSuccessNotification(result.message);
                    }
                }
                else {
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
            }
            this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, () => {
            this.notificationService.showErrorNotification('error');
            this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        });
        console.log(orderId);
    }
    confirmOrder(orderId) {
        this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.adminOrderService
            .postConfirmOrder(orderId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
                    this.deleteProductFromView();
                    if (result.message) {
                        this.notificationService.showSuccessNotification(result.message);
                    }
                    else {
                    }
                }
                else {
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                    else {
                    }
                }
            }
            else {
            }
            this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        });
        console.log(orderId);
    }
    deleteProductFromView() {
        this.orderResponses = [];
        this.pageIndex = 1;
        this.getData(this.pageIndex);
    }
    cancel() {
        return;
    }
    showModal(order) {
        order.isOrderDetailVisible = true;
        //console.log(order);
        this.orderDetails$ = this.adminOrderService.getOrderDetail(order.orderId);
    }
    handleCancel(order) {
        order.isOrderDetailVisible = false;
    }
    handleOk(order) {
        order.isOrderDetailVisible = false;
    }
    onScroll() {
        this.pageIndex = this.pageIndex + 1;
        console.log(this.pageIndex);
        this.getData(this.pageIndex);
    }
};
OrderComfirmedComponent.ctorParameters = () => [
    { type: _core_services_admin_order_admin_order_service__WEBPACK_IMPORTED_MODULE_3__["AdminOrderService"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"] }
];
OrderComfirmedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-order-comfirmed',
        template: _raw_loader_order_comfirmed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_comfirmed_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderComfirmedComponent);



/***/ }),

/***/ "zHAb":
/*!****************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/admin-order/admin-order.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AdminOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderModule", function() { return AdminOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _admin_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-order-routing.module */ "522r");
/* harmony import */ var _order_comfirmed_order_comfirmed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-comfirmed/order-comfirmed.component */ "sxUZ");
/* harmony import */ var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/module/core.module */ "gfFi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var src_app_features_modules_order_order_detail_select_modal_order_detail_select_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/features/modules/order/order-detail-select-modal/order-detail-select-modal.module */ "N4lr");









let AdminOrderModule = class AdminOrderModule {
};
AdminOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_comfirmed_order_comfirmed_component__WEBPACK_IMPORTED_MODULE_4__["OrderComfirmedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_order_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminOrderRoutingModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
            src_app_features_modules_order_order_detail_select_modal_order_detail_select_modal_module__WEBPACK_IMPORTED_MODULE_8__["OrderDetailSelectModalModule"]
        ]
    })
], AdminOrderModule);



/***/ })

}]);
//# sourceMappingURL=components-admin-body-admin-order-admin-order-module-es2015.js.map