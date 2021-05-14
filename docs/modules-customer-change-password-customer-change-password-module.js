(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-customer-change-password-customer-change-password-module"],{

/***/ "C6H8":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-change-password/customer-change-password/customer-change-password.component.less ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "ZAa5":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-change-password/customer-change-password.module.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CustomerChangePasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerChangePasswordModule", function() { return CustomerChangePasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _customer_change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-change-password-routing.module */ "r0bg");
/* harmony import */ var _customer_change_password_customer_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-change-password/customer-change-password.component */ "sua1");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/module/core.module */ "gfFi");








let CustomerChangePasswordModule = class CustomerChangePasswordModule {
};
CustomerChangePasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_customer_change_password_customer_change_password_component__WEBPACK_IMPORTED_MODULE_4__["CustomerChangePasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _customer_change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerChangePasswordRoutingModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"]
        ]
    })
], CustomerChangePasswordModule);



/***/ }),

/***/ "omOg":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/user/modules/customer-change-password/customer-change-password/customer-change-password.component.html ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t<!--title-->\n\t<nz-page-header-title> </nz-page-header-title>\n\t<!--subtitle-->\n\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t<!--content-->\n\t<nz-page-header-content>\n\t\t<div class=\"grid wide\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col l-12\" style=\"margin-top: 50px;\">\n\t\t\t\t\t<nz-card style=\"max-width: 500px; margin: auto;\" nzTitle=\"Đổi Mật Khẩu\">\n\t\t\t\t\t\t<form\n\t\t\t\t\t\t\tnz-form\n\t\t\t\t\t\t\t[formGroup]=\"customerChangePasswordForm\"\n\t\t\t\t\t\t\t(ngSubmit)=\"submitForm()\"\n\t\t\t\t\t\t\t#registerForm=\"ngForm\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col l-12\">\n\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"oldPassword\"\n\t\t\t\t\t\t\t\t\t\t\t>Mật Khẩu Cũ</nz-form-label\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t<nz-input-group nzPrefixIcon=\"user\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"oldPassword\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập Mật Khẩu Cũ Của Bạn\"\n\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t</nz-input-group>\n\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"newPassword\"\n\t\t\t\t\t\t\t\t\t\t\t>Mật Khẩu Mới</nz-form-label\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t<nz-input-group nzPrefixIcon=\"user\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"newPassword\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập Mật Khẩu Mới Của Bạn\"\n\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t</nz-input-group>\n\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"8\" [nzXs]=\"24\" nzRequired nzFor=\"newPasswordComfirm\"\n\t\t\t\t\t\t\t\t\t\t\t>Mật Khẩu Xác Nhận</nz-form-label\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t<nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t<nz-input-group nzPrefixIcon=\"user\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"password\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"newPasswordComfirm\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập Mật Khẩu Mới Của Bạn\"\n\t\t\t\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t\t\t\t</nz-input-group>\n\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"!registerForm.form.valid\"\n\t\t\t\t\t\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\t\t\t\t\t\t[nzType]=\"'primary'\"\n\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\tĐổi Mật Khẩu\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</nz-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</nz-page-header-content>\n</nz-page-header>\n<!-- [disabled]=\"!registerForm.form.valid\" -->\n");

/***/ }),

/***/ "r0bg":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-change-password/customer-change-password-routing.module.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: CustomerChangePasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerChangePasswordRoutingModule", function() { return CustomerChangePasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _customer_change_password_customer_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-change-password/customer-change-password.component */ "sua1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [{ path: '', component: _customer_change_password_customer_change_password_component__WEBPACK_IMPORTED_MODULE_1__["CustomerChangePasswordComponent"] }];
let CustomerChangePasswordRoutingModule = class CustomerChangePasswordRoutingModule {
};
CustomerChangePasswordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CustomerChangePasswordRoutingModule);



/***/ }),

/***/ "sua1":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-change-password/customer-change-password/customer-change-password.component.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: CustomerChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerChangePasswordComponent", function() { return CustomerChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-change-password.component.html */ "omOg");
/* harmony import */ var _customer_change_password_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-change-password.component.less */ "C6H8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_auth_customer_customer_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth/customer/customer-account.service */ "GE5u");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");











let CustomerChangePasswordComponent = class CustomerChangePasswordComponent {
    //host: string = environment.apiUrl; //host of server
    constructor(formBuilder, destroy$, appErrorHandler, accountService, notificationService, spinnerService) {
        this.formBuilder = formBuilder;
        this.destroy$ = destroy$;
        this.appErrorHandler = appErrorHandler;
        this.accountService = accountService;
        this.notificationService = notificationService;
        this.spinnerService = spinnerService;
        this.submitted = false; //return true if submitted
        this.returnUrl = ''; //the url that is used when submit and change password successfully and redirect to login page
        //init form
        this.customerChangePasswordForm = this.formBuilder.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            newPasswordComfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
        });
    }
    ngOnInit() { }
    submitForm() {
        try {
            this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
            const val = this.customerChangePasswordForm.value;
            const changePasswordRequest = {
                oldPassword: val.oldPassword,
                newPassword: val.newPassword,
                newPasswordComfirm: val.newPasswordComfirm
            };
            this.accountService
                .customerChangePassword(changePasswordRequest)
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
                this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
};
CustomerChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandler"] },
    { type: src_app_core_services_auth_customer_customer_account_service__WEBPACK_IMPORTED_MODULE_8__["CustomerAccountService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"] }
];
CustomerChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-change-password',
        template: _raw_loader_customer_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"]],
        styles: [_customer_change_password_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerChangePasswordComponent);



/***/ })

}]);
//# sourceMappingURL=modules-customer-change-password-customer-change-password-module.js.map