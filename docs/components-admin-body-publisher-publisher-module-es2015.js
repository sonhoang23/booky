(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-body-publisher-publisher-module"],{

/***/ "3ZZj":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-update/publisher-update.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PublisherUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherUpdateComponent", function() { return PublisherUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publisher_update_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publisher-update.component.html */ "Bhc+");
/* harmony import */ var _publisher_update_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-update.component.less */ "8Ejx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let PublisherUpdateComponent = class PublisherUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
PublisherUpdateComponent.ctorParameters = () => [];
PublisherUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher-update',
        template: _raw_loader_publisher_update_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_publisher_update_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PublisherUpdateComponent);



/***/ }),

/***/ "5gNy":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/publisher/publisher-create/publisher-create.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t<!-- <nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb> -->\n\t<!--title-->\n\t<nz-page-header-title>Tạo Nội Dung Nhà Xuất Bản</nz-page-header-title>\n\t<!--subtitle-->\n\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t<!--content-->\n\t<nz-page-header-content>\n\t\t<div class=\"product-create\">\n\t\t\t<form\n\t\t\t\tnz-form\n\t\t\t\t[formGroup]=\"publisherCreateForm\"\n\t\t\t\tclass=\"create-form\"\n\t\t\t\t(ngSubmit)=\"submitForm()\"\n\t\t\t\t#createForm=\"ngForm\"\n\t\t\t>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col l-10\">\n\t\t\t\t\t\t<nz-card style=\"margin-top: 16px\" [nzBordered]=\"true\" nzTitle=\"Tạo Mới\">\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"name\"\n\t\t\t\t\t\t\t\t\t>Tên Nhà Xuất Bản</nz-form-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập tên nhà xuất bản\"\n\t\t\t\t\t\t\t\t\t\tnzSize=\"large\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"description\">\n\t\t\t\t\t\t\t\t\tGiới thiệu\n\t\t\t\t\t\t\t\t</nz-form-label>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<ckeditor\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\t\t\t\t\ttagName=\"textarea\"\n\t\t\t\t\t\t\t\t\t\t[editor]=\"editor\"\n\t\t\t\t\t\t\t\t\t></ckeditor>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button nz-button type=\"submit\" [disabled]=\"!createForm.form.valid\" [nzType]=\"'primary'\">\n\t\t\t\t\tTải Lên\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t</nz-page-header-content>\n</nz-page-header>\n");

/***/ }),

/***/ "6cX7":
/*!********************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PublisherRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherRoutingModule", function() { return PublisherRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _publisher_create_publisher_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publisher-create/publisher-create.component */ "KK4E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _publisher_index_publisher_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publisher-index/publisher-index.component */ "QcSt");
/* harmony import */ var _publisher_edit_publisher_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publisher-edit/publisher-edit.component */ "z7tt");






const routes = [
    { path: 'create', component: _publisher_create_publisher_create_component__WEBPACK_IMPORTED_MODULE_1__["PublisherCreateComponent"] },
    { path: '', component: _publisher_index_publisher_index_component__WEBPACK_IMPORTED_MODULE_4__["PublisherIndexComponent"] },
    { path: 'edit/:publisherId', component: _publisher_edit_publisher_edit_component__WEBPACK_IMPORTED_MODULE_5__["PublisherEditComponent"] }
];
let PublisherRoutingModule = class PublisherRoutingModule {
};
PublisherRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PublisherRoutingModule);



/***/ }),

/***/ "8Ejx":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-update/publisher-update.component.less ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXItdXBkYXRlLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "Bhc+":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/publisher/publisher-update/publisher-update.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>publisher-update works!</p>\n");

/***/ }),

/***/ "Bhz8":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/publisher/publisher-edit/publisher-edit.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t<!-- <nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb> -->\n\t<!--title-->\n\t<nz-page-header-title>Tạo Nỗi Dung Nhà Xuất Bản</nz-page-header-title>\n\t<!--subtitle-->\n\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t<!--content-->\n\t<nz-page-header-content>\n\t\t<div class=\"product-create\">\n\t\t\t<form\n\t\t\t\tnz-form\n\t\t\t\t[formGroup]=\"publisherEditForm\"\n\t\t\t\tclass=\"create-form\"\n\t\t\t\t(ngSubmit)=\"submitForm()\"\n\t\t\t\t#createForm=\"ngForm\"\n\t\t\t>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col l-10\">\n\t\t\t\t\t\t<nz-card style=\"margin-top: 16px\" [nzBordered]=\"true\" nzTitle=\"Chỉnh Sửa\">\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"name\"\n\t\t\t\t\t\t\t\t\t>Tên Nhà Xuất Bản</nz-form-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập tên tác giả\"\n\t\t\t\t\t\t\t\t\t\tnzSize=\"default\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"description\">\n\t\t\t\t\t\t\t\t\tMiêu Tả\n\t\t\t\t\t\t\t\t</nz-form-label>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<ckeditor\n\t\t\t\t\t\t\t\t\t\t[config]=\"{ toolbar: [ 'heading', '|', 'bold', 'italic' ] }\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\t\t\t\t\ttagName=\"textarea\"\n\t\t\t\t\t\t\t\t\t\t[editor]=\"editor\"\n\t\t\t\t\t\t\t\t\t></ckeditor>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button nz-button type=\"submit\" [disabled]=\"!createForm.form.valid||!modified\" [nzType]=\"'primary'\">\n\t\t\t\t\tChỉnh Sửa\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t</nz-page-header-content>\n</nz-page-header>\n");

/***/ }),

/***/ "EJpj":
/*!*****************************************************************!*\
  !*** ./src/app/core/utils/URL/admin-url/admin-url-publisher.ts ***!
  \*****************************************************************/
/*! exports provided: AdminUrlPublisher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUrlPublisher", function() { return AdminUrlPublisher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _admin_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-url-base */ "xZP7");



let AdminUrlPublisher = class AdminUrlPublisher extends _admin_url_base__WEBPACK_IMPORTED_MODULE_2__["AdminUrlBase"] {
    create() {
        return this.adminUrl + '/publisher';
    }
    edit() {
        return this.adminUrl + '/publisher';
    }
    getPaging(pagingRequestBase) {
        return this.adminUrl + `/publisher/publisher?searchKeyWord=${pagingRequestBase.searchKeyWord}&pageIndex=${pagingRequestBase.pageIndex}&pageSize=${pagingRequestBase.pageSize}&languageCode=${pagingRequestBase.languageCode}`;
    }
    get(id) {
        return this.adminUrl + `/publisher/${id}`;
    }
    delete(id) {
        return this.adminUrl + `/publisher/${id}`;
    }
    changeStatus() {
        return this.adminUrl + `/publisher/status`;
    }
};
AdminUrlPublisher = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminUrlPublisher);



/***/ }),

/***/ "KK4E":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-create/publisher-create.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PublisherCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherCreateComponent", function() { return PublisherCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publisher_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publisher-create.component.html */ "5gNy");
/* harmony import */ var _publisher_create_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-create.component.less */ "mN5j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_admin_publisher_publisher_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/admin/publisher/publisher-admin.service */ "i73s");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");












let PublisherCreateComponent = class PublisherCreateComponent {
    constructor(formBuilder, destroy$, appErrorHandler, spinner, notificationService, publisherAdminService) {
        this.formBuilder = formBuilder;
        this.destroy$ = destroy$;
        this.appErrorHandler = appErrorHandler;
        this.spinner = spinner;
        this.notificationService = notificationService;
        this.publisherAdminService = publisherAdminService;
        this.uploading = false;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.publisherCreateForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
        });
    }
    getFormData() {
        const val = this.publisherCreateForm.value;
        const publisherAdminCreateViewModel = {
            publisherName: val.name,
            description: val.description
        };
        return publisherAdminCreateViewModel;
    }
    submitForm() {
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        try {
            this.publisherAdminService
                .create(this.getFormData())
                .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
                .subscribe((res) => {
                console.log(res);
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
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }, () => {
                this.notificationService.showErrorNotification('Có Lỗi Xảy Ra, Vui Lòng Thử Lại');
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
};
PublisherCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_10__["DestroyService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorHandler"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_11__["SpinnerService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_admin_publisher_publisher_admin_service__WEBPACK_IMPORTED_MODULE_9__["PublisherAdminService"] }
];
PublisherCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher-create',
        template: _raw_loader_publisher_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_10__["DestroyService"]],
        styles: [_publisher_create_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PublisherCreateComponent);



/***/ }),

/***/ "QcSt":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-index/publisher-index.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PublisherIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherIndexComponent", function() { return PublisherIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publisher_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publisher-index.component.html */ "hiEP");
/* harmony import */ var _publisher_index_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-index.component.less */ "u+gg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_admin_publisher_publisher_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/admin/publisher/publisher-admin.service */ "i73s");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");









let PublisherIndexComponent = class PublisherIndexComponent {
    constructor(destroy$, notificationService, publisherAdminService, formBuilder) {
        this.destroy$ = destroy$;
        this.notificationService = notificationService;
        this.publisherAdminService = publisherAdminService;
        this.formBuilder = formBuilder;
        this.pageIndex = 1;
        this.isLoading = true;
    }
    ngOnInit() {
        this.get();
        this.initSearchForm();
        this.checkSearchFormValueChange();
    }
    initSearchForm() {
        this.publisherSearchForm = this.formBuilder.group({
            search: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(1)]]
        });
    }
    get() {
        var _a;
        this.publisherAdminService
            .getPaging({
            pageIndex: this.pageIndex,
            pageSize: 10,
            searchKeyWord: (_a = this.searchKeyWord) !== null && _a !== void 0 ? _a : '',
            languageCode: 'vn'
        })
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            console.log(result);
            if (result) {
                if (result.resultObj) {
                    if (result.isSuccessed) {
                        this.pagingResult = result.resultObj;
                        console.log(this.pagingResult);
                        this.isLoading = false;
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
    pageChanged(page) {
        this.pageIndex = page; // receive the page number
        // display the sort button by previous sort
        this.get(); // navigated by sort and page
    }
    changeStatus(status, publisherId) {
        console.log(status);
        this.publisherAdminService
            .changeStatus({ publisherId: publisherId, status: status })
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            console.log(result);
            if (result) {
                if (result.resultObj) {
                    if (result.isSuccessed) {
                        this.notificationService.showSuccessNotification(result.message);
                    }
                    else {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
            }
        });
    }
    checkSearchFormValueChange() {
        this.publisherSearchForm.valueChanges.subscribe((result) => {
            console.log(result.search);
            this.searchKeyWord = result.search;
            this.pageIndex = 1;
            this.get();
        });
    }
    deletepublisher(publisherId) {
        console.log(publisherId);
        this.publisherAdminService
            .delete(publisherId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            console.log(result);
            if (result) {
                if (result.resultObj) {
                    if (result.isSuccessed) {
                        this.notificationService.showSuccessNotification('Xóa Thành Công');
                    }
                    else {
                    }
                }
                else {
                    this.notificationService.showSuccessNotification(result.message);
                }
            }
            else {
            }
        });
    }
    cancel() { }
};
PublisherIndexComponent.ctorParameters = () => [
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_admin_publisher_publisher_admin_service__WEBPACK_IMPORTED_MODULE_7__["PublisherAdminService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
PublisherIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher-index',
        template: _raw_loader_publisher_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"]],
        styles: [_publisher_index_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PublisherIndexComponent);



/***/ }),

/***/ "hiEP":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/publisher/publisher-index/publisher-index.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading;else loaded\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"> </nz-skeleton>\n<ng-template #loaded>\n\t<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t<!--title-->\n\t\t<nz-page-header-title>Danh Sách Nhà Xuất Bản Trong Hệ Thống</nz-page-header-title>\n\t\t<!--subtitle-->\n\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t<!--content-->\n\t\t<nz-page-header-content>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col l-3\">\n\t\t\t\t\t<form nz-form [formGroup]=\"publisherSearchForm\" #searchForm=\"ngForm\">\n\t\t\t\t\t\t<input nz-input formControlName=\"search\" placeholder=\"Tìm Kiếm\" nzSize=\"default\" />\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<nz-table\n\t\t\t\t#basicTable\n\t\t\t\t[nzPageIndex]=\"pagingResult?.pageIndex\"\n\t\t\t\t[nzTotal]=\"pagingResult?.totalRecords\"\n\t\t\t\t[nzPageSize]=\"pagingResult?.pageSize\"\n\t\t\t\t[nzShowTotal]=\"rangeTemplate\"\n\t\t\t\t[nzHideOnSinglePage]=\"true\"\n\t\t\t\t[nzData]=\"['']\"\n\t\t\t>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Nhà Xuất Bản</th>\n\t\t\t\t\t\t<!-- <th>Nội Dung</th> -->\n\t\t\t\t\t\t<th>Tinh Trạng</th>\n\t\t\t\t\t\t<th>Hành Động</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let data of pagingResult.items\">\n\t\t\t\t\t\t<td>{{data.publisherName}}</td>\n\t\t\t\t\t\t<!-- <td>{{data.description}}</td> -->\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<nz-switch\n\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t[ngModel]=\"data.status\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"changeStatus($event, data.publisherId)\"\n\t\t\t\t\t\t\t></nz-switch>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t[routerLink]=\"['edit',data.publisherId]\"\n\t\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 5px\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzDanger\n\t\t\t\t\t\t\t\t\tnzType=\"danger\"\n\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\tnzPopconfirmTitle=\"Có Chắc Bạn Muốn Xóa Thông Tin Tác Giả Này Khỏi Hệ Thống?\"\n\t\t\t\t\t\t\t\t\t(nzOnConfirm)=\"deletepublisher(data.publisherId)\"\n\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"cancel()\"\n\t\t\t\t\t\t\t\t\tnzPopconfirmPlacement=\"bottomRight\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</nz-table>\n\t\t\t<nz-pagination\n\t\t\t\tstyle=\"margin-top: 30px;\"\n\t\t\t\t[nzPageIndex]=\"pagingResult.pageIndex\"\n\t\t\t\t[nzTotal]=\"pagingResult.totalRecords\"\n\t\t\t\t[nzPageSize]=\"pagingResult.pageSize\"\n\t\t\t\t[nzShowTotal]=\"rangeTemplate\"\n\t\t\t\t(nzPageIndexChange)=\"pageChanged($event)\"\n\t\t\t></nz-pagination>\n\t\t\t<ng-template #rangeTemplate let-range=\"range\" let-total>\n\t\t\t\t{{ range[0] }}-{{ range[1] }} Trên {{ total }}\n\t\t\t</ng-template>\n\t\t</nz-page-header-content>\n\t</nz-page-header>\n</ng-template>\n");

/***/ }),

/***/ "i73s":
/*!**************************************************************************!*\
  !*** ./src/app/core/services/admin/publisher/publisher-admin.service.ts ***!
  \**************************************************************************/
/*! exports provided: PublisherAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherAdminService", function() { return PublisherAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_utils_URL_admin_url_admin_url_publisher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils/URL/admin-url/admin-url-publisher */ "EJpj");




let PublisherAdminService = class PublisherAdminService {
    constructor(adminUrlPublisher, http) {
        this.adminUrlPublisher = adminUrlPublisher;
        this.http = http;
    }
    create(publisherAdminCreateViewModel) {
        return this.http.post(this.adminUrlPublisher.create(), publisherAdminCreateViewModel);
    }
    getPaging(pagingRequestBase) {
        return this.http.get(this.adminUrlPublisher.getPaging(pagingRequestBase));
    }
    get(id) {
        return this.http.get(this.adminUrlPublisher.get(id));
    }
    delete(id) {
        return this.http.delete(this.adminUrlPublisher.delete(id));
    }
    edit(publisherAdminEditViewModel) {
        return this.http.put(this.adminUrlPublisher.edit(), publisherAdminEditViewModel);
    }
    changeStatus({ publisherId: number, status: boolean }) {
        return this.http.put(this.adminUrlPublisher.changeStatus(), { publisherId: number, status: boolean });
    }
};
PublisherAdminService.ctorParameters = () => [
    { type: src_app_core_utils_URL_admin_url_admin_url_publisher__WEBPACK_IMPORTED_MODULE_3__["AdminUrlPublisher"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PublisherAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PublisherAdminService);



/***/ }),

/***/ "jVRb":
/*!************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher.module.ts ***!
  \************************************************************************************/
/*! exports provided: PublisherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherModule", function() { return PublisherModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _publisher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher-routing.module */ "6cX7");
/* harmony import */ var _publisher_create_publisher_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publisher-create/publisher-create.component */ "KK4E");
/* harmony import */ var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/module/core.module */ "gfFi");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "PjcS");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _publisher_index_publisher_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publisher-index/publisher-index.component */ "QcSt");
/* harmony import */ var _publisher_update_publisher_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./publisher-update/publisher-update.component */ "3ZZj");
/* harmony import */ var _publisher_edit_publisher_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./publisher-edit/publisher-edit.component */ "z7tt");











let PublisherModule = class PublisherModule {
};
PublisherModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_publisher_create_publisher_create_component__WEBPACK_IMPORTED_MODULE_4__["PublisherCreateComponent"], _publisher_index_publisher_index_component__WEBPACK_IMPORTED_MODULE_8__["PublisherIndexComponent"], _publisher_update_publisher_update_component__WEBPACK_IMPORTED_MODULE_9__["PublisherUpdateComponent"], _publisher_edit_publisher_edit_component__WEBPACK_IMPORTED_MODULE_10__["PublisherEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _publisher_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublisherRoutingModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            //TranslateModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"]
        ]
    })
], PublisherModule);



/***/ }),

/***/ "mN5j":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-create/publisher-create.component.less ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXItY3JlYXRlLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "u+gg":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-index/publisher-index.component.less ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXItaW5kZXguY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "x9QO":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-edit/publisher-edit.component.less ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaXNoZXItZWRpdC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "z7tt":
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/admin/components/admin-body/publisher/publisher-edit/publisher-edit.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PublisherEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherEditComponent", function() { return PublisherEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_publisher_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./publisher-edit.component.html */ "Bhz8");
/* harmony import */ var _publisher_edit_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher-edit.component.less */ "x9QO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_admin_publisher_publisher_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/admin/publisher/publisher-admin.service */ "i73s");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");













let PublisherEditComponent = class PublisherEditComponent {
    constructor(route, destroy$, appErrorHandler, spinner, publisherAdminService, formBuilder, notificationService, spinnerService) {
        this.route = route;
        this.destroy$ = destroy$;
        this.appErrorHandler = appErrorHandler;
        this.spinner = spinner;
        this.publisherAdminService = publisherAdminService;
        this.formBuilder = formBuilder;
        this.notificationService = notificationService;
        this.spinnerService = spinnerService;
        this.isLoading = true; //skelton
        this.uploading = false;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        this.modified = false;
    }
    ngOnInit() {
        if (this.route.snapshot.paramMap.get('publisherId')) {
            this.publisherId = +this.route.snapshot.paramMap.get('publisherId');
            if (this.publisherId) {
                console.log(this.publisherId);
                this.get(this.publisherId);
                this.initForm();
                this.checkFormValueChange();
                //attach data from store into formGroup
            }
        }
    }
    get(productId) {
        this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.publisherAdminService
            .get(productId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            console.log(result);
            if (result) {
                if (result.isSuccessed) {
                    this.result = result.resultObj;
                    this.initFormDataFromStore();
                    console.log(this.result);
                    this.isLoading = false;
                }
                else {
                }
            }
            else {
            }
        });
    }
    initForm() {
        this.publisherEditForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
        });
    }
    initFormDataFromStore() {
        setTimeout(() => {
            this.publisherEditForm.setValue({
                name: this.result.publisherName != null ? this.result.publisherName : '',
                description: this.result.description != null ? this.result.description : ''
            });
            this.spinnerService.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, 5000);
    }
    checkFormValueChange() {
        this.publisherEditForm.valueChanges.subscribe((result) => {
            console.log('valueChanges');
            console.log(result);
            console.log(this.result);
            if (result.name === (this.result.publisherName != null ? this.result.publisherName : '') &&
                result.description === (this.result.description != null ? this.result.description : '')) {
                this.modified = false;
            }
            else {
                this.modified = true;
            }
            console.log(this.modified);
        });
    }
    getFormData() {
        const val = this.publisherEditForm.value;
        const publisherAdminEditViewModel = {
            publisherName: val.name,
            description: val.description,
            publisherId: this.result.publisherId
        };
        return publisherAdminEditViewModel;
    }
    submitForm() {
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        try {
            this.publisherAdminService
                .edit(this.getFormData())
                .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
                .subscribe((res) => {
                console.log(res);
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
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }, () => {
                this.notificationService.showErrorNotification('Có Lỗi Xảy Ra, Vui Lòng Thử Lại');
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
};
PublisherEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_11__["DestroyService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_8__["AppErrorHandler"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerService"] },
    { type: src_app_core_services_admin_publisher_publisher_admin_service__WEBPACK_IMPORTED_MODULE_10__["PublisherAdminService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_12__["SpinnerService"] }
];
PublisherEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publisher-edit',
        template: _raw_loader_publisher_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_11__["DestroyService"]],
        styles: [_publisher_edit_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PublisherEditComponent);



/***/ })

}]);
//# sourceMappingURL=components-admin-body-publisher-publisher-module-es2015.js.map