(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seller-components-seller-body-module-seller-order-seller-order-module"],{

/***/ "/X4M":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/order-tab-all/order-tab-all.component.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci10YWItYWxsLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "4fKi":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-order.component.less ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItb3JkZXIuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "5NHW":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-order-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SellerOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerOrderRoutingModule", function() { return SellerOrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _seller_all_order_seller_order_inprogress_seller_order_inprogress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller-all-order/seller-order-inprogress/seller-order-inprogress.component */ "Ltjo");
/* harmony import */ var _seller_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-order.component */ "ituK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _seller_all_order_order_tab_all_order_tab_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-all-order/order-tab-all/order-tab-all.component */ "l83m");






const routes = [
    {
        path: '',
        component: _seller_order_component__WEBPACK_IMPORTED_MODULE_2__["SellerOrderComponent"],
        children: [
            { path: 'orders', component: _seller_all_order_order_tab_all_order_tab_all_component__WEBPACK_IMPORTED_MODULE_5__["OrderTabAllComponent"] },
            { path: 'inprogress', component: _seller_all_order_seller_order_inprogress_seller_order_inprogress_component__WEBPACK_IMPORTED_MODULE_1__["SellerOrderInprogressComponent"] }
        ]
    }
];
let SellerOrderRoutingModule = class SellerOrderRoutingModule {
};
SellerOrderRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], SellerOrderRoutingModule);



/***/ }),

/***/ "D0fp":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/seller-all-order.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: SellerAllOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAllOrderComponent", function() { return SellerAllOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_all_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-all-order.component.html */ "pqiT");
/* harmony import */ var _seller_all_order_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-all-order.component.less */ "ttC6");
/* harmony import */ var _core_services_seller_seller_order_seller_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../../core/services/seller/seller-order/seller-order.service */ "sc59");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/enums/OrderStatus.enum */ "EvTH");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");










let SellerAllOrderComponent = class SellerAllOrderComponent {
    constructor(sellerOrderService, destroy$, notificationService, sellerSpinnerService) {
        this.sellerOrderService = sellerOrderService;
        this.destroy$ = destroy$;
        this.notificationService = notificationService;
        this.sellerSpinnerService = sellerSpinnerService;
        this.isLoading = true;
        this.isSubmited = false;
        this.isModalVisible = false;
        this.pageResult = {};
    }
    ngOnInit() {
        console.log('on init ' + src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_7__["OrderStatus"].inProgress.toString());
        this.getData(1);
    }
    getData(pageIndex) {
        this.sellerOrderService
            .getOrders({
            orderRequestType: src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_7__["OrderStatus"].inProgress,
            pageIndex: pageIndex,
            pageSize: 10
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((value) => {
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
                        console.log(this.pageResult);
                        this.isLoading = false;
                        this.isSubmited = true;
                    }
                    else {
                    }
                }
                else {
                }
            }
            else {
            }
        });
    }
    onScroll() { }
};
SellerAllOrderComponent.ctorParameters = () => [
    { type: _core_services_seller_seller_order_seller_order_service__WEBPACK_IMPORTED_MODULE_3__["SellerOrderService"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__["DestroyService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_8__["SpinnerService"] }
];
SellerAllOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-seller-all-order',
        template: _raw_loader_seller_all_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_all_order_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerAllOrderComponent);



/***/ }),

/***/ "KYyI":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/components/seller-body/module/seller-order/seller-order.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "KhUI":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/components/seller-body/module/seller-order/components/order-show-table/order-show-table.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th>Tên Khách Hàng</th>\n\t\t\t<th>Địa Chỉ</th>\n\t\t\t<th>SDT</th>\n\t\t\t<th>Tổng Số Lượng</th>\n\t\t\t<th>Tổng Tiền</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr *ngFor=\"let data of listOfData\">\n\t\t\t<td>{{data.customerName}}</td>\n\t\t\t<td>{{data.address}}</td>\n\t\t\t<td>{{data.phoneNumber}}</td>\n\t\t\t<td>{{data.totalQuantity}}</td>\n\t\t\t<td>{{data.totalPrice|currency:'VND'}}</td>\n\t\t</tr>\n\t</tbody>\n\t<ng-template #rangeTemplate let-range=\"range\" let-total>\n\t\t{{ range[0] }}-{{ range[1] }} Trên {{ total }} Đơn\n\t</ng-template>\n\t\n</nz-table>\n");

/***/ }),

/***/ "KwBz":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/components/order-show-table/order-show-table.component.less ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1zaG93LXRhYmxlLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "Ltjo":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/seller-order-inprogress/seller-order-inprogress.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: SellerOrderInprogressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerOrderInprogressComponent", function() { return SellerOrderInprogressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_order_inprogress_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-order-inprogress.component.html */ "V7tE");
/* harmony import */ var _seller_order_inprogress_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-order-inprogress.component.less */ "sPq0");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/enums/OrderStatus.enum */ "EvTH");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_seller_seller_order_seller_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/seller/seller-order/seller-order.service */ "sc59");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");










let SellerOrderInprogressComponent = class SellerOrderInprogressComponent {
    constructor(sellerOrderService, destroy$, notificationService, sellerSpinnerService) {
        this.sellerOrderService = sellerOrderService;
        this.destroy$ = destroy$;
        this.notificationService = notificationService;
        this.sellerSpinnerService = sellerSpinnerService;
        this.isLoading = true;
        this.pageIndex = 1;
        this.orderResponses = [];
        this.pageResult = {};
    }
    ngOnInit() {
        this.getData(1);
    }
    getData(pageIndex) {
        this.isLoading = true;
        //this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({isSubmitted: true});
        this.sellerOrderService
            .getOrders({
            orderRequestType: src_app_core_enums_OrderStatus_enum__WEBPACK_IMPORTED_MODULE_5__["OrderStatus"].inProgress,
            pageIndex: pageIndex,
            pageSize: 10
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => {
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
                        console.log(result.resultObj);
                        console.log(this.orderResponses);
                        Array.prototype.push.apply(this.orderResponses, result.resultObj.items);
                        console.log(this.orderResponses);
                        this.isLoading = false;
                        //this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({isSubmitted: false});
                    }
                    else {
                    }
                }
                else {
                }
            }
            else {
            }
        });
    }
    deleteOrder(orderId) {
        this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.sellerOrderService
            .postDeleteOrder(orderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
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
        }, () => {
            this.notificationService.showErrorNotification('error');
            this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        });
        console.log(orderId);
    }
    confirmOrder(orderId) {
        this.sellerSpinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.sellerOrderService
            .postConfirmOrder(orderId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
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
        // console.log(orderId);
        // this.orderResponses.splice(
        // 	this.orderResponses.findIndex((value) => value.orderId == orderId),
        // 	1
        // );
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
        this.orderDetails$ = this.sellerOrderService.getOrderDetail(order.orderId);
    }
    handleCancel(order) {
        order.isOrderDetailVisible = false;
    }
    handleOk(order) {
        order.isOrderDetailVisible = false;
    }
    onScroll() {
        this.pageIndex = this.pageIndex + 1;
        this.getData(this.pageIndex);
    }
};
SellerOrderInprogressComponent.ctorParameters = () => [
    { type: src_app_core_services_seller_seller_order_seller_order_service__WEBPACK_IMPORTED_MODULE_8__["SellerOrderService"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_7__["DestroyService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"] }
];
SellerOrderInprogressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-seller-order-inprogress',
        template: _raw_loader_seller_order_inprogress_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_7__["DestroyService"]],
        styles: [_seller_order_inprogress_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerOrderInprogressComponent);



/***/ }),

/***/ "MVxQ":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-order.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: SellerOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerOrderModule", function() { return SellerOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _core_utils_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../core/utils/material.module */ "1Y/V");
/* harmony import */ var _core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../../../core/utils/ng-zorro-antd/ng-zorro-antd.module */ "WJMM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _seller_order_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seller-order-routing.module */ "5NHW");
/* harmony import */ var _seller_all_order_seller_all_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seller-all-order/seller-all-order.component */ "D0fp");
/* harmony import */ var _seller_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seller-order.component */ "ituK");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _seller_all_order_order_tab_all_order_tab_all_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seller-all-order/order-tab-all/order-tab-all.component */ "l83m");
/* harmony import */ var _seller_all_order_seller_order_inprogress_seller_order_inprogress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./seller-all-order/seller-order-inprogress/seller-order-inprogress.component */ "Ltjo");
/* harmony import */ var src_app_features_modules_order_order_detail_select_modal_order_detail_select_modal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/features/modules/order/order-detail-select-modal/order-detail-select-modal.module */ "N4lr");
/* harmony import */ var _components_order_show_table_order_show_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/order-show-table/order-show-table.component */ "RSOq");















let SellerOrderModule = class SellerOrderModule {
};
SellerOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [_seller_order_component__WEBPACK_IMPORTED_MODULE_9__["SellerOrderComponent"], _seller_all_order_seller_all_order_component__WEBPACK_IMPORTED_MODULE_8__["SellerAllOrderComponent"], _seller_all_order_order_tab_all_order_tab_all_component__WEBPACK_IMPORTED_MODULE_11__["OrderTabAllComponent"], _seller_all_order_seller_order_inprogress_seller_order_inprogress_component__WEBPACK_IMPORTED_MODULE_12__["SellerOrderInprogressComponent"], _components_order_show_table_order_show_table_component__WEBPACK_IMPORTED_MODULE_14__["OrderShowTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _seller_order_routing_module__WEBPACK_IMPORTED_MODULE_7__["SellerOrderRoutingModule"],
            _core_utils_ng_zorro_antd_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
            _core_utils_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollModule"],
            src_app_features_modules_order_order_detail_select_modal_order_detail_select_modal_module__WEBPACK_IMPORTED_MODULE_13__["OrderDetailSelectModalModule"]
        ]
    })
], SellerOrderModule);



/***/ }),

/***/ "RSOq":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/components/order-show-table/order-show-table.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: OrderShowTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderShowTableComponent", function() { return OrderShowTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_show_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-show-table.component.html */ "KhUI");
/* harmony import */ var _order_show_table_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-show-table.component.less */ "KwBz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let OrderShowTableComponent = class OrderShowTableComponent {
    //host: string = environment.apiUrl;
    constructor() {
        this.pageResult = {};
        this.listOfData = [];
        this.isLock = false;
        this.pageIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.pageCurrentIndex = 1;
        this.pageIndex.emit(1);
    }
    ngOnInit() { }
    onScroll() {
        this.pageCurrentIndex = this.pageCurrentIndex + 1;
        this.pageIndex.emit(this.pageCurrentIndex);
    }
};
OrderShowTableComponent.ctorParameters = () => [];
OrderShowTableComponent.propDecorators = {
    pageResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    listOfData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isLock: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    pageIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    orderId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
OrderShowTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-show-table',
        template: _raw_loader_order_show_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_show_table_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderShowTableComponent);



/***/ }),

/***/ "T2M7":
/*!****************************************************************************!*\
  !*** ./src/app/core/utils/URL/seller-url/seller-order/seller-url-order.ts ***!
  \****************************************************************************/
/*! exports provided: SellerUrlOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerUrlOrder", function() { return SellerUrlOrder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _seller_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../seller-url-base */ "KfMq");



let SellerUrlOrder = class SellerUrlOrder extends _seller_url_base__WEBPACK_IMPORTED_MODULE_2__["SellerUrlBase"] {
    constructor() {
        super();
    }
    getOrderByOrderStatus(orderPagingRequest) {
        return (this.sellerUrl +
            `/order/order-status?orderRequestType=${orderPagingRequest.orderRequestType}&pageIndex=${orderPagingRequest.pageIndex}&pageSize=${orderPagingRequest.pageSize}&languageCode=${orderPagingRequest.languageCode}`);
    }
    postConfirmOrder() {
        return this.sellerUrl + `/order/confirm`;
    }
    postCanceledOrder() {
        return this.sellerUrl + `/order/delete`;
    }
    getOrderDetails(orderId) {
        return this.sellerUrl + `/order/order-detail/` + orderId;
    }
};
SellerUrlOrder.ctorParameters = () => [];
SellerUrlOrder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SellerUrlOrder);



/***/ }),

/***/ "V7tE":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/seller-order-inprogress/seller-order-inprogress.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading;else loaded\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"> </nz-skeleton>\n<ng-template #loaded>\n\t<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t<!--title-->\n\t\t<nz-page-header-title>Đơn Hàng Cần Duyệt</nz-page-header-title>\n\t\t<!--subtitle-->\n\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t<!--content-->\n\t\t<nz-page-header-content>\n\t\t\t<nz-table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Tên Khách Hàng</th>\n\t\t\t\t\t\t<th>Địa Chỉ</th>\n\t\t\t\t\t\t<th>SDT</th>\n\t\t\t\t\t\t<th>Tổng Số Lượng</th>\n\t\t\t\t\t\t<th>Tổng Tiền</th>\n\t\t\t\t\t\t<th>Tình Trạng</th>\n\t\t\t\t\t\t<th>Hành Động</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let data of orderResponses\">\n\t\t\t\t\t\t<td>{{data.customerName}}</td>\n\t\t\t\t\t\t<td>{{data.address}}</td>\n\t\t\t\t\t\t<td>{{data.phoneNumber}}</td>\n\t\t\t\t\t\t<td>{{data.totalQuantity}}</td>\n\t\t\t\t\t\t<td>{{data.totalPrice|currency:'VND'}}</td>\n\t\t\t\t\t\t<td>{{data.status}}</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"row col\">\n\t\t\t\t\t\t\t\t<button title=\"Chi Tiết\" nz-button [nzType]=\"'primary'\" (click)=\"showModal(data)\">\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"fullscreen\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<nz-modal\n\t\t\t\t\t\t\t\t\t[(nzVisible)]=\"data.isOrderDetailVisible\"\n\t\t\t\t\t\t\t\t\tnzTitle=\"Chi Tiết Đơn Hàng\"\n\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"handleCancel(data)\"\n\t\t\t\t\t\t\t\t\t(nzOnOk)=\"handleOk(data)\"\n\t\t\t\t\t\t\t\t\tnzWidth=\"1200px\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<ng-container *nzModalContent>\n\t\t\t\t\t\t\t\t\t\t<div class=\"grid wide row\">\n\t\t\t\t\t\t\t\t\t\t\t<app-order-detail-select-modal\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 100%;\"\n\t\t\t\t\t\t\t\t\t\t\t\t[orderDetails$]=\"orderDetails$\"\n\t\t\t\t\t\t\t\t\t\t\t></app-order-detail-select-modal>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</nz-modal>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row col\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttitle=\"Xác Nhận\"\n\t\t\t\t\t\t\t\t\t(click)=\"confirmOrder(data.orderId)\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"check\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row col\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\ttitle=\"Hủy Đơn\"\n\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\tnzPopconfirmTitle=\"Có Chắc Bạn Muốn Hủy Đơn Này?\"\n\t\t\t\t\t\t\t\t\t(nzOnConfirm)=\"deleteOrder(data.orderId)\"\n\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"cancel()\"\n\t\t\t\t\t\t\t\t\tnzPopconfirmPlacement=\"bottomRight\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzDanger\n\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t<ng-template #rangeTemplate let-range=\"range\" let-total>\n\t\t\t\t\t{{ range[0] }}-{{ range[1] }} Trên {{ total }} Đơn\n\t\t\t\t</ng-template>\n\t\t\t</nz-table>\n\t\t\t<div\n\t\t\t\tclass=\"search-results\"\n\t\t\t\tinfiniteScroll\n\t\t\t\t[infiniteScrollDistance]=\"2\"\n\t\t\t\t[infiniteScrollThrottle]=\"50\"\n\t\t\t\t(scrolled)=\"onScroll()\"\n\t\t\t></div>\n\t\t</nz-page-header-content>\n\t</nz-page-header>\n</ng-template>\n");

/***/ }),

/***/ "iL9F":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/order-tab-all/order-tab-all.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\r\n\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\r\n\t<!--title-->\r\n\t<nz-page-header-title>Tất Cả Đơn Hàng</nz-page-header-title>\r\n\t<!--subtitle-->\r\n\t<nz-page-header-subtitle>Đơn Hàng Của Cửa Hàng</nz-page-header-subtitle>\r\n\t<!--content-->\r\n\t<nz-page-header-content>\r\n\t\t<nz-tabset (nzSelectedIndexChange)=\"changeTab($event)\">\r\n\t\t\t<!-- <nz-tab nzTitle=\"Tất Cả\">\r\n\t\t\t\t\t<app-product-show-table></app-product-show-table>\r\n\t\t\t\t</nz-tab> -->\r\n\r\n\t\t\t<nz-tab nzTitle=\"Đơn Chưa Xác Nhận\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Đã Xác Nhận\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Đã Được Lấy Đi\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Đang Vận Chuyển\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Giao Thành Công\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Hủy Bởi Shop\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Hủy Bởi Khách Hàng\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Hủy Bởi Booky\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Đang Hoàn Trả\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t\t<nz-tab nzTitle=\"Đơn Đã Hoàn Trả\">\r\n\t\t\t\t<nz-skeleton *ngIf=\"loading;else loaded\" [nzLoading]=\"loading\" [nzActive]=\"true\"> </nz-skeleton>\r\n\t\t\t\t<ng-template #loaded>\r\n\t\t\t\t\t<app-order-show-table [pageResult]=\"pageResult\" [listOfData]=\"listOfData\"></app-order-show-table>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</nz-tab>\r\n\t\t</nz-tabset>\r\n\t\t<div\r\n\t\t\tclass=\"search-results\"\r\n\t\t\tinfiniteScroll\r\n\t\t\t[infiniteScrollDistance]=\"2\"\r\n\t\t\t[infiniteScrollThrottle]=\"50\"\r\n\t\t\t(scrolled)=\"onScroll()\"\r\n\t\t></div>\r\n\t</nz-page-header-content>\r\n</nz-page-header>\r\n");

/***/ }),

/***/ "ituK":
/*!******************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-order.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SellerOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerOrderComponent", function() { return SellerOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seller_order_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seller-order.component.html */ "KYyI");
/* harmony import */ var _seller_order_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller-order.component.less */ "4fKi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let SellerOrderComponent = class SellerOrderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SellerOrderComponent.ctorParameters = () => [];
SellerOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seller-order',
        template: _raw_loader_seller_order_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seller_order_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SellerOrderComponent);



/***/ }),

/***/ "l83m":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/order-tab-all/order-tab-all.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: OrderTabAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTabAllComponent", function() { return OrderTabAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_order_tab_all_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./order-tab-all.component.html */ "iL9F");
/* harmony import */ var _order_tab_all_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-tab-all.component.less */ "/X4M");
/* harmony import */ var _core_services_seller_seller_order_seller_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../../../core/services/seller/seller-order/seller-order.service */ "sc59");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let OrderTabAllComponent = class OrderTabAllComponent {
    constructor(destroy$, sellerOrderService, notificationService) {
        this.destroy$ = destroy$;
        this.sellerOrderService = sellerOrderService;
        this.notificationService = notificationService;
        this.loading = false;
        this.startOfIndex = 1;
        this.tabIndex = 0;
        this.pageResult = {};
        this.listOfData = [];
    }
    getOrders(pageIndex, typeOrder) {
        this.loading = true;
        this.sellerOrderService
            .getAllProductPaging(pageIndex, typeOrder)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            console.log(result);
            if (result.resultObj) {
                this.pageResult = result.resultObj;
                console.log(this.listOfData);
                Array.prototype.push.apply(this.listOfData, result.resultObj.items);
                this.loading = false;
                console.log(this.listOfData);
            }
            this.loading = false;
        }, (error) => {
            this.loading = false;
            this.notificationService.showErrorNotification(error.message);
        });
    }
    onScroll() {
        this.startOfIndex = this.startOfIndex + 1;
        console.log(this.startOfIndex);
        this.getOrders(this.startOfIndex, this.tabIndex);
    }
    changeTab(tabIndex) {
        this.tabIndex = tabIndex;
        this.startOfIndex = 1;
        this.loading = true;
        this.pageResult = {};
        this.listOfData = [];
        this.getOrders(this.startOfIndex, this.tabIndex);
    }
    ngOnInit() {
        this.getOrders(this.startOfIndex, this.tabIndex);
    }
};
OrderTabAllComponent.ctorParameters = () => [
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__["DestroyService"] },
    { type: _core_services_seller_seller_order_seller_order_service__WEBPACK_IMPORTED_MODULE_3__["SellerOrderService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] }
];
OrderTabAllComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-order-tab-all',
        template: _raw_loader_order_tab_all_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_5__["DestroyService"]],
        styles: [_order_tab_all_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OrderTabAllComponent);



/***/ }),

/***/ "pqiT":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/seller-all-order.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading;else loaded\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"> </nz-skeleton>\r\n<ng-template #loaded>\r\n\t<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\r\n\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\r\n\t\t<!--title-->\r\n\t\t<nz-page-header-title\r\n\t\t\t>{{ 'Seller-app.content.body.product.product-all.main-title' | translate }}</nz-page-header-title\r\n\t\t>\r\n\t\t<!--subtitle-->\r\n\t\t<nz-page-header-subtitle\r\n\t\t\t>{{ 'Seller-app.content.body.product.product-all.sub-title' | translate }}</nz-page-header-subtitle\r\n\t\t>\r\n\t\t<!--content-->\r\n\t\t<nz-page-header-content>\r\n\t\t\r\n\t\t</nz-page-header-content>\r\n\t</nz-page-header>\r\n</ng-template>\r\n");

/***/ }),

/***/ "sPq0":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/seller-order-inprogress/seller-order-inprogress.component.less ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItb3JkZXItaW5wcm9ncmVzcy5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "sc59":
/*!***************************************************************************!*\
  !*** ./src/app/core/services/seller/seller-order/seller-order.service.ts ***!
  \***************************************************************************/
/*! exports provided: SellerOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerOrderService", function() { return SellerOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _utils_URL_seller_url_seller_order_seller_url_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../utils/URL/seller-url/seller-order/seller-url-order */ "T2M7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let SellerOrderService = class SellerOrderService {
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
    getAllProductPaging(pageIndex, typeOrder) {
        return this.http.get(this.urlString.getOrderByOrderStatus({
            orderRequestType: typeOrder,
            languageCode: this.languageCode,
            pageIndex: pageIndex,
            pageSize: 10
        }));
    }
};
SellerOrderService.ctorParameters = () => [
    { type: _utils_URL_seller_url_seller_order_seller_url_order__WEBPACK_IMPORTED_MODULE_2__["SellerUrlOrder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
SellerOrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], SellerOrderService);



/***/ }),

/***/ "ttC6":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/features/seller/components/seller-body/module/seller-order/seller-all-order/seller-all-order.component.less ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsZXItYWxsLW9yZGVyLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ })

}]);
//# sourceMappingURL=seller-components-seller-body-module-seller-order-seller-order-module-es2015.js.map