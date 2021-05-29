(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-customer-reading-progress-customer-reading-progress-module"],{

/***/ "+aFW":
/*!*************************************************************!*\
  !*** ./src/app/core/services/customer/book/book.service.ts ***!
  \*************************************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_utils_URL_customer_url_customer_book_customer_url_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils/URL/customer-url/customer-book/customer-url-book */ "N7OY");




let BookService = class BookService {
    constructor(customerUrlBook, http) {
        this.customerUrlBook = customerUrlBook;
        this.http = http;
        this.languageCode = 'vn';
    }
    getBookBought(request) {
        request.languageCode = this.languageCode;
        return this.http.get(this.customerUrlBook.getBookBought(request));
    }
    getBookInReadList(request) {
        request.languageCode = this.languageCode;
        return this.http.get(this.customerUrlBook.getBookInReadList(request));
    }
    getBookInReadListDetail(readListId) {
        return this.http.get(this.customerUrlBook.getBookInReadListDetail(readListId));
    }
    postBookToReadList(productId) {
        return this.http.post(this.customerUrlBook.postBookToReadList(), productId);
    }
    postReadProgress(request) {
        return this.http.post(this.customerUrlBook.postReadProgress(), request);
    }
    putReadProgress(request) {
        return this.http.put(this.customerUrlBook.putReadProgress(), request);
    }
    deleteBookFromReadList(productId) {
        return this.http.delete(this.customerUrlBook.deleteBookFromReadList(productId));
    }
    getCommentProgresses(readListId) {
        return this.http.get(this.customerUrlBook.getCommentProgress(readListId));
    }
    postCommentProgress(commentProgress) {
        return this.http.post(this.customerUrlBook.postCommentProgress(), commentProgress);
    }
    putCommentProgress(commentProgress) {
        return this.http.put(this.customerUrlBook.putCommentProgress(), commentProgress);
    }
    deleteCommentProgress(commentProgressId) {
        return this.http.delete(this.customerUrlBook.deleteCommentProgress(commentProgressId));
    }
    postIsShareCommentProgress(commentProgressId) {
        return this.http.get(this.customerUrlBook.postIsShareCommentProgress(commentProgressId));
    }
};
BookService.ctorParameters = () => [
    { type: src_app_core_utils_URL_customer_url_customer_book_customer_url_book__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlBook"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BookService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], BookService);



/***/ }),

/***/ "/L7e":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-read-list-detail/customer-book-read-list-detail.component.ts ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: CustomerBookReadListDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerBookReadListDetailComponent", function() { return CustomerBookReadListDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_book_read_list_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-book-read-list-detail.component.html */ "ncb4");
/* harmony import */ var _customer_book_read_list_detail_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-book-read-list-detail.component.less */ "wUXq");
/* harmony import */ var _core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../../../../../../../core/services/comon-services/spinner/spinner.service */ "LXV+");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/customer/book/book.service */ "+aFW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");












let CustomerBookReadListDetailComponent = class CustomerBookReadListDetailComponent {
    constructor(route, destroy$, appErrorHandler, notificationService, bookService, formBuilder, spinner) {
        this.route = route;
        this.destroy$ = destroy$;
        this.appErrorHandler = appErrorHandler;
        this.notificationService = notificationService;
        this.bookService = bookService;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.isLoading = true; //skelton
        this.isNotHaveData = false;
        this.readListId = 1;
        this.languageCode = 'vn';
        this.remaningDays = '0';
        this.totalDays = '0';
        this.readDays = 0;
        this.readProgressIdEdit = 0;
        this.commentProgressIdEdit = 0;
        this.bookInReadListDetail = {};
        this.commentprogresses = [];
        this.readPageCountPercent = 0;
        this.isAddReadProgressModalVisible = false;
        this.isEditReadProgressModalVisible = false;
        this.isAddCommentProgressModalVisible = false;
        this.isEditCommentProgressModalVisible = false;
    }
    ngOnInit() {
        this.isLoading = true;
        if (this.route.snapshot.paramMap.get('readListId')) {
            this.readListId = +this.route.snapshot.paramMap.get('readListId');
            this.getBookInReadListDetail(this.readListId);
            this.getCommentProgresses(this.readListId);
        }
    }
    getBookInReadListDetail(readListId) {
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.bookService
            .getBookInReadListDetail(readListId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                console.log(result);
                if (result.isSuccessed) {
                    if (result.resultObj) {
                        this.bookInReadListDetail = result.resultObj;
                        this.caculateRemainingDays(result.resultObj.endDate);
                        this.caculateTotalDays(result.resultObj.startDate, result.resultObj.endDate);
                        this.readPageCountPercent = Math.floor((result.resultObj.readPageCount / result.resultObj.pageCount) * 100);
                        this.readDays = result.resultObj.readProgresses.length;
                    }
                    else {
                        this.isNotHaveData = true;
                    }
                }
                else {
                    this.isNotHaveData = true;
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
                this.isLoading = false;
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }
        }, (error) => {
            this.isLoading = false;
            this.isNotHaveData = true;
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
    caculateRemainingDays(endDate) {
        let count = Math.floor((new Date(endDate).getTime() - new Date(Date.now()).getTime()) / (1000 * 60 * 60 * 24));
        if (count > 0) {
            this.remaningDays = count.toString() + ' ngày';
        }
        else {
            this.remaningDays = 'Đã Hết Thời Gian';
        }
    }
    caculateTotalDays(startDate, endDate) {
        let count = Math.floor((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
        if (count > 0) {
            this.totalDays = count.toString();
        }
        else {
            this.totalDays = '0';
        }
    }
    initAddReadProgressForm() {
        try {
            this.customerAddReadProgressModalForm = this.formBuilder.group({
                readPageToday: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]],
                readPageComment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]]
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
    showAddReadProgressModal() {
        this.isAddReadProgressModalVisible = !this.isAddReadProgressModalVisible;
        this.initAddReadProgressForm();
    }
    handleAddReadProgressModalCancel() {
        this.isAddReadProgressModalVisible = false;
    }
    handleAddReadProgressModalOk() {
        this.handleAddReadProgressModalCancel();
        const val = this.customerAddReadProgressModalForm.value;
        console.log(val.readPageToday);
        if (val.readPageToday && val.readPageToday > 0) {
            if (this.readListId) {
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
                this.bookService
                    .postReadProgress({ readListId: this.readListId, readPageCount: val.readPageToday })
                    .subscribe((result) => {
                    if (result) {
                        //console.log(result);
                        if (result.isSuccessed) {
                            if (result.resultObj) {
                                this.getBookInReadListDetail(this.readListId);
                                if (result.message) {
                                    this.notificationService.showSuccessNotification(result.message);
                                }
                            }
                        }
                        else {
                            if (result.message) {
                                this.notificationService.showErrorNotification(result.message);
                            }
                        }
                    }
                    this.handleAddReadProgressModalCancel();
                    this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
                }, (error) => {
                    this.appErrorHandler.handleErrorWithNoti(error);
                });
            }
        }
        else {
        }
    }
    initEditReadProgressForm() {
        try {
            this.customerEditReadProgressModalForm = this.formBuilder.group({
                readPageEdit: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]]
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
    showEditReadProgressModal(readProgressId) {
        this.readProgressIdEdit = readProgressId;
        this.initEditReadProgressForm();
        this.isEditReadProgressModalVisible = !this.isEditReadProgressModalVisible;
    }
    handleEditReadProgressModalCancel() {
        this.isEditReadProgressModalVisible = false;
    }
    handleEditReadProgressModalOk() {
        this.handleEditReadProgressModalCancel();
        const val = this.customerEditReadProgressModalForm.value;
        console.log(this.readProgressIdEdit);
        console.log(val.readPageEdit);
        if (val.readPageEdit > 0) {
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
            this.bookService
                .putReadProgress({ readProgressId: this.readProgressIdEdit, readPageCount: val.readPageEdit })
                .subscribe((result) => {
                if (result) {
                    //console.log(result);
                    if (result.isSuccessed) {
                        if (result.resultObj) {
                            this.getBookInReadListDetail(this.readListId);
                            if (result.message) {
                                this.notificationService.showSuccessNotification(result.message);
                            }
                        }
                    }
                    else {
                        if (result.message) {
                            this.notificationService.showErrorNotification(result.message);
                        }
                    }
                }
                this.handleEditReadProgressModalCancel();
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }, (error) => {
                this.appErrorHandler.handleErrorWithNoti(error);
            });
        }
    }
    initAddCommentProgressForm() {
        try {
            this.customerAddCommentProgressModalForm = this.formBuilder.group({
                quote: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]],
                pageNumber: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]],
                comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]]
            });
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
    showAddCommentProgressModal() {
        this.isAddCommentProgressModalVisible = !this.isAddCommentProgressModalVisible;
        this.initAddCommentProgressForm();
    }
    handleAddCommentProgressModalCancel() {
        this.isAddCommentProgressModalVisible = false;
    }
    handleAddCommentProgressModalOk() {
        this.handleAddCommentProgressModalCancel();
        const val = this.customerAddCommentProgressModalForm.value;
        if (this.readListId) {
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
            this.bookService
                .postCommentProgress({
                readListId: this.readListId,
                quote: val.quote,
                pageNumber: val.pageNumber,
                comment: val.comment
            })
                .subscribe((result) => {
                if (result) {
                    console.log(result);
                    if (result.isSuccessed) {
                        this.getCommentProgresses(this.readListId);
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
                this.handleAddReadProgressModalCancel();
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }, (error) => {
                this.appErrorHandler.handleErrorWithNoti(error);
            });
        }
    }
    getCommentProgresses(readListId) {
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.bookService
            .getCommentProgresses(readListId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                console.log(result);
                if (result.isSuccessed) {
                    if (result.resultObj) {
                        this.commentprogresses = result.resultObj;
                    }
                    else {
                    }
                }
                else {
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
                this.isLoading = false;
                this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            }
        }, (error) => {
            this.isLoading = false;
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
    initEditCommentProgressForm(commentProgressId) {
        try {
            this.customerEditCommentProgressModalForm = this.formBuilder.group({
                quote: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]],
                pageNumber: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]],
                comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].minLength(1)]]
            });
            this.initEditCommentProgressFromData(commentProgressId);
        }
        catch (error) {
            this.appErrorHandler.handleError(error);
        }
    }
    showEditCommentProgressModal(commentProgressIdEdit) {
        this.commentProgressIdEdit = commentProgressIdEdit;
        this.isEditCommentProgressModalVisible = !this.isEditCommentProgressModalVisible;
        this.initEditCommentProgressForm(commentProgressIdEdit);
    }
    handleEditCommentProgressModalCancel() {
        this.isEditCommentProgressModalVisible = false;
    }
    handleEditCommentProgressModalOk() {
        this.handleEditCommentProgressModalCancel();
        const val = this.customerEditCommentProgressModalForm.value;
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.bookService
            .putCommentProgress({
            readListId: this.readListId,
            commentProgressId: this.commentProgressIdEdit,
            quote: val.quote,
            pageNumber: val.pageNumber,
            comment: val.comment
        })
            .subscribe((result) => {
            if (result) {
                //console.log(result);
                if (result.isSuccessed) {
                    this.getCommentProgresses(this.readListId);
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
            this.handleAddReadProgressModalCancel();
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, (error) => {
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
    initEditCommentProgressFromData(commentProgressId) {
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        let commentProgress = this.commentprogresses.find((c) => c.commentProgressId == commentProgressId);
        setTimeout(() => {
            this.customerEditCommentProgressModalForm.setValue({
                quote: (commentProgress === null || commentProgress === void 0 ? void 0 : commentProgress.quote) != null ? commentProgress === null || commentProgress === void 0 ? void 0 : commentProgress.quote : '',
                pageNumber: (commentProgress === null || commentProgress === void 0 ? void 0 : commentProgress.pageNumber) != null ? commentProgress === null || commentProgress === void 0 ? void 0 : commentProgress.pageNumber : 0,
                comment: (commentProgress === null || commentProgress === void 0 ? void 0 : commentProgress.comment) != null ? commentProgress === null || commentProgress === void 0 ? void 0 : commentProgress.comment : ''
            });
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, 5000);
    }
    changeIsShare(commentProgressId) {
        this.bookService.postIsShareCommentProgress(commentProgressId).subscribe((result) => {
            if (result) {
                //console.log(result);
                if (result.isSuccessed) {
                    this.getCommentProgresses(this.readListId);
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
            this.handleAddReadProgressModalCancel();
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, (error) => {
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
};
CustomerBookReadListDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorHandler"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_10__["BookService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }
];
CustomerBookReadListDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-customer-book-read-list-detail',
        template: _raw_loader_customer_book_read_list_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"]],
        styles: [_customer_book_read_list_detail_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerBookReadListDetailComponent);



/***/ }),

/***/ "00G5":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-bought/customer-book-bought.component.html ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\n<ng-template #completedLoading>\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\n\t\t<span> Không Có Cuốn Sách Nào</span>\n\t</nz-empty>\n\t<ng-template #haveData>\n\t\t<div class=\"grid wide\">\n\t\t\t<nz-page-header>\n\t\t\t\t<!--breadcrumb-->\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t\t\t<!--title-->\n\t\t\t\t<nz-page-header-title>Các Cuốn Sách Bạn Đã Mua</nz-page-header-title>\n\n\t\t\t\t<!--subtitle-->\n\t\t\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t\t\t<!--content-->\n\t\t\t\t<nz-page-header-content>\n\t\t\t\t\t<!-- <nz-card nzTitle=\"Card Title\"> -->\n\t\t\t\t\t<nz-table #basicTable [nzData]=\"pageResult.items\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Ảnh</th>\n\t\t\t\t\t\t\t\t<th>Tên Sách</th>\n\t\t\t\t\t\t\t\t<th>Ngày Mua</th>\n\t\t\t\t\t\t\t\t<th>Đánh Giá</th>\n\t\t\t\t\t\t\t\t<th>Tình Trạng</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let data of basicTable.data\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tnz-image\n\t\t\t\t\t\t\t\t\t\tmax-width=\"100%\"\n\t\t\t\t\t\t\t\t\t\theight=\"50px\"\n\t\t\t\t\t\t\t\t\t\tnzSrc=\"{{host}}/{{data.imagePath}}\"\n\t\t\t\t\t\t\t\t\t\talt=\"\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 2.2rem; font-weight: 300;\"\n\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/products',data.productId]\"\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"{{data.productName}}\"\n\t\t\t\t\t\t\t\t\t\t\t>{{ data.productName }}</a\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/author',data.authorId]\" title=\"{{data.authorName}}\"\n\t\t\t\t\t\t\t\t\t\t\t>Tác Giả: {{ data.authorName }}</a\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>{{ data.dateBuy | date:'dd-MM-yyyy'}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<nz-rate [nzDisabled]=\"true\" [nzCount]=\"5\" [ngModel]=\"data.ratingPoint\"></nz-rate>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"data.isReadList; else notReadList\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin: auto;\">Trong Danh Sách Đọc</p>\n\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"margin: auto;\"\n\t\t\t\t\t\t\t\t\t\t\t\tnz-icon\n\t\t\t\t\t\t\t\t\t\t\t\t[nzType]=\"'check-circle'\"\n\t\t\t\t\t\t\t\t\t\t\t\t[nzTheme]=\"'twotone'\"\n\t\t\t\t\t\t\t\t\t\t\t\t[nzTwotoneColor]=\"'#52c41a'\"\n\t\t\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ng-template #notReadList>\n\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"addToReadList(data.productId)\"\n\t\t\t\t\t\t\t\t\t\t\tnz-popover\n\t\t\t\t\t\t\t\t\t\t\tnzPopoverTitle=\"Thêm Vào Danh Sách Đọc\"\n\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"plus\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</nz-table>\n\t\t\t\t</nz-page-header-content>\n\t\t\t</nz-page-header>\n\t\t</div>\n\t</ng-template>\n</ng-template>\n");

/***/ }),

/***/ "85au":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress.module.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: CustomerReadingProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReadingProgressModule", function() { return CustomerReadingProgressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _customer_reading_progress_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-reading-progress-routing.module */ "Z61A");
/* harmony import */ var _customer_reading_progress_customer_reading_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-reading-progress/customer-reading-progress.component */ "FNQq");
/* harmony import */ var _customer_reading_progress_customer_book_bought_customer_book_bought_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-reading-progress/customer-book-bought/customer-book-bought.component */ "X9eI");
/* harmony import */ var _customer_reading_progress_customer_book_read_list_customer_book_read_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-reading-progress/customer-book-read-list/customer-book-read-list.component */ "hqqZ");
/* harmony import */ var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/module/core.module */ "gfFi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _customer_reading_progress_customer_book_read_list_detail_customer_book_read_list_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-reading-progress/customer-book-read-list-detail/customer-book-read-list-detail.component */ "/L7e");











let CustomerReadingProgressModule = class CustomerReadingProgressModule {
};
CustomerReadingProgressModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _customer_reading_progress_customer_reading_progress_component__WEBPACK_IMPORTED_MODULE_4__["CustomerReadingProgressComponent"],
            _customer_reading_progress_customer_book_bought_customer_book_bought_component__WEBPACK_IMPORTED_MODULE_5__["CustomerBookBoughtComponent"],
            _customer_reading_progress_customer_book_read_list_customer_book_read_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomerBookReadListComponent"],
            _customer_reading_progress_customer_book_read_list_detail_customer_book_read_list_detail_component__WEBPACK_IMPORTED_MODULE_10__["CustomerBookReadListDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _customer_reading_progress_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerReadingProgressRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"]
        ]
    })
], CustomerReadingProgressModule);



/***/ }),

/***/ "BRI7":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-reading-progress.component.html ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "ChuC":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-bought/customer-book-bought.component.less ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1ib29rLWJvdWdodC5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "FNQq":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-reading-progress.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: CustomerReadingProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReadingProgressComponent", function() { return CustomerReadingProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_reading_progress_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-reading-progress.component.html */ "BRI7");
/* harmony import */ var _customer_reading_progress_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-reading-progress.component.less */ "OLCj");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/customer/book/book.service */ "+aFW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");










let CustomerReadingProgressComponent = class CustomerReadingProgressComponent {
    constructor(bookService, 
    // private route: ActivatedRoute,
    notificationService, appErrorHandler, destroy$ // private authService: AuthService, // private suggestService: SuggestService, // private appErrorHandler: AppErrorHandler, // private ratingService: RatingService
    ) {
        this.bookService = bookService;
        this.notificationService = notificationService;
        this.appErrorHandler = appErrorHandler;
        this.destroy$ = destroy$;
        this.isLoading = true; //skelton
        this.isNotHaveData = false;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.pageResult = {};
    }
    ngOnInit() {
        this.getBookBought(1);
    }
    getBookBought(pageIndex) {
        this.bookService
            .getBookBought({ pageIndex: pageIndex, pageSize: 10 })
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
                    if (result.resultObj) {
                        this.pageResult = result.resultObj;
                    }
                    else {
                        this.isNotHaveData = true;
                    }
                }
                else {
                    this.isNotHaveData = true;
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
                this.isLoading = false;
            }
        }, (error) => {
            this.isLoading = false;
            this.isNotHaveData = true;
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
};
CustomerReadingProgressComponent.ctorParameters = () => [
    { type: src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["AppErrorHandler"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_6__["DestroyService"] }
];
CustomerReadingProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-customer-reading-progress',
        template: _raw_loader_customer_reading_progress_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_6__["DestroyService"]],
        styles: [_customer_reading_progress_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerReadingProgressComponent);



/***/ }),

/***/ "N7OY":
/*!********************************************************************************!*\
  !*** ./src/app/core/utils/URL/customer-url/customer-book/customer-url-book.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerUrlBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUrlBook", function() { return CustomerUrlBook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _customer_url_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../customer-url-base */ "1zjI");




let CustomerUrlBook = class CustomerUrlBook extends _customer_url_base__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlBase"] {
    getBookBought(request) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageindex', request.pageIndex == undefined ? '1' : request.pageIndex.toString())
            .set('pagesize', request.pageSize == undefined ? '10' : request.pageSize.toString());
        return this.customerUrl + '/book/bought?' + params;
    }
    getBookInReadList(request) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('pageindex', request.pageIndex == undefined ? '1' : request.pageIndex.toString())
            .set('pagesize', request.pageSize == undefined ? '10' : request.pageSize.toString());
        return this.customerUrl + '/book/read-list?' + params;
    }
    getBookInReadListDetail(readListId) {
        return this.customerUrl + '/book/read-list/' + readListId;
    }
    postBookToReadList() {
        return this.customerUrl + '/book/read-list';
    }
    postReadProgress() {
        return this.customerUrl + '/book/read-progress';
    }
    putReadProgress() {
        return this.customerUrl + '/book/read-progress';
    }
    deleteBookFromReadList(productId) {
        return this.customerUrl + '/book/read-list/' + productId;
    }
    //Comment progress
    postCommentProgress() {
        return this.customerUrl + '/book/comment-progress';
    }
    putCommentProgress() {
        return this.customerUrl + '/book/comment-progress';
    }
    getCommentProgress(readListId) {
        console.log(readListId);
        return this.customerUrl + '/book/comment-progress/' + readListId;
    }
    deleteCommentProgress(commentProgressId) {
        return this.customerUrl + '/book/comment-progress/' + commentProgressId;
    }
    postIsShareCommentProgress(commentProgressId) {
        return this.customerUrl + '/book/comment-progress/isshare/' + commentProgressId;
    }
};
CustomerUrlBook = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CustomerUrlBook);



/***/ }),

/***/ "OLCj":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-reading-progress.component.less ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1yZWFkaW5nLXByb2dyZXNzLmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "X9eI":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-bought/customer-book-bought.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: CustomerBookBoughtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerBookBoughtComponent", function() { return CustomerBookBoughtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_book_bought_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-book-bought.component.html */ "00G5");
/* harmony import */ var _customer_book_bought_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-book-bought.component.less */ "ChuC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/customer/book/book.service */ "+aFW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");










let CustomerBookBoughtComponent = class CustomerBookBoughtComponent {
    constructor(bookService, 
    // private route: ActivatedRoute,
    notificationService, appErrorHandler, destroy$ // private authService: AuthService, // private suggestService: SuggestService, // private appErrorHandler: AppErrorHandler, // private ratingService: RatingService
    ) {
        this.bookService = bookService;
        this.notificationService = notificationService;
        this.appErrorHandler = appErrorHandler;
        this.destroy$ = destroy$;
        this.isLoading = true; //skelton
        this.isNotHaveData = false;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.pageResult = {};
    }
    ngOnInit() {
        this.getBookBought(1);
    }
    getBookBought(pageIndex) {
        this.bookService
            .getBookBought({ pageIndex: pageIndex, pageSize: 10 })
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
                    if (result.resultObj) {
                        this.pageResult = result.resultObj;
                        console.log(this.pageResult);
                    }
                    else {
                        this.isNotHaveData = true;
                    }
                }
                else {
                    this.isNotHaveData = true;
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
                this.isLoading = false;
            }
        }, (error) => {
            this.isLoading = false;
            this.isNotHaveData = true;
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
    addToReadList(productId) {
        console.log(productId);
        this.bookService
            .postBookToReadList(productId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
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
        }, (error) => {
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
};
CustomerBookBoughtComponent.ctorParameters = () => [
    { type: src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_8__["BookService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_5__["AppErrorHandler"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_7__["DestroyService"] }
];
CustomerBookBoughtComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-book-bought',
        template: _raw_loader_customer_book_bought_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_7__["DestroyService"]],
        styles: [_customer_book_bought_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerBookBoughtComponent);



/***/ }),

/***/ "Z61A":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress-routing.module.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: CustomerReadingProgressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerReadingProgressRoutingModule", function() { return CustomerReadingProgressRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _customer_reading_progress_customer_book_bought_customer_book_bought_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-reading-progress/customer-book-bought/customer-book-bought.component */ "X9eI");
/* harmony import */ var _customer_reading_progress_customer_book_read_list_detail_customer_book_read_list_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-reading-progress/customer-book-read-list-detail/customer-book-read-list-detail.component */ "/L7e");
/* harmony import */ var _customer_reading_progress_customer_book_read_list_customer_book_read_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-reading-progress/customer-book-read-list/customer-book-read-list.component */ "hqqZ");
/* harmony import */ var _customer_reading_progress_customer_reading_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-reading-progress/customer-reading-progress.component */ "FNQq");







const routes = [
    {
        path: '',
        component: _customer_reading_progress_customer_reading_progress_component__WEBPACK_IMPORTED_MODULE_6__["CustomerReadingProgressComponent"],
        children: [
            {
                path: 'bought',
                component: _customer_reading_progress_customer_book_bought_customer_book_bought_component__WEBPACK_IMPORTED_MODULE_3__["CustomerBookBoughtComponent"],
                data: {
                    title: 'Customer-app.body.user.book.bought'
                    //breadcrumb: 'Cart'
                }
            },
            {
                path: 'read-list',
                component: _customer_reading_progress_customer_book_read_list_customer_book_read_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerBookReadListComponent"],
                data: {
                    title: 'Customer-app.body.user.book.read-list'
                    //breadcrumb: 'Cart'
                }
            },
            {
                path: 'read-list/:readListId',
                component: _customer_reading_progress_customer_book_read_list_detail_customer_book_read_list_detail_component__WEBPACK_IMPORTED_MODULE_4__["CustomerBookReadListDetailComponent"],
                data: {
                    title: 'Customer-app.body.user.book.read-list-detail'
                    //breadcrumb: 'Cart'
                }
            }
        ]
    }
];
let CustomerReadingProgressRoutingModule = class CustomerReadingProgressRoutingModule {
};
CustomerReadingProgressRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomerReadingProgressRoutingModule);



/***/ }),

/***/ "ZEPb":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-read-list/customer-book-read-list.component.html ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\n<ng-template #completedLoading>\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\n\t\t<span> Không Có Cuốn Sách Nào</span>\n\t</nz-empty>\n\t<ng-template #haveData>\n\t\t<div class=\"grid wide\">\n\t\t\t<nz-page-header>\n\t\t\t\t<!--breadcrumb-->\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t\t\t<!--title-->\n\t\t\t\t<nz-page-header-title>Các Cuốn Sách Trong Danh Sách Đọc</nz-page-header-title>\n\t\t\t\t<!--subtitle-->\n\t\t\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t\t\t<!--content-->\n\t\t\t\t<nz-page-header-content>\n\t\t\t\t\t<!-- <nz-card nzTitle=\"Card Title\"> -->\n\t\t\t\t\t<nz-table #basicTable [nzData]=\"pageResult.items\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Ảnh</th>\n\t\t\t\t\t\t\t\t<th>Tên Sách</th>\n\t\t\t\t\t\t\t\t<th>Ngày Bắt Đầu</th>\n\t\t\t\t\t\t\t\t<th>Ngày Kết Thúc</th>\n\t\t\t\t\t\t\t\t<th>Số Trang</th>\n\t\t\t\t\t\t\t\t<th>Hành Động</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let data of basicTable.data\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\t\tnz-image\n\t\t\t\t\t\t\t\t\t\tmax-width=\"100%\"\n\t\t\t\t\t\t\t\t\t\theight=\"50px\"\n\t\t\t\t\t\t\t\t\t\tnzSrc=\"{{host}}/{{data.imagePath}}\"\n\t\t\t\t\t\t\t\t\t\talt=\"\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 2.4rem; font-weight: 400;\"\n\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/products',data.productId]\"\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"{{data.productName}}\"\n\t\t\t\t\t\t\t\t\t\t\t>{{ data.productName }}</a\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/author',data.authorId]\" title=\"{{data.authorName}}\"\n\t\t\t\t\t\t\t\t\t\t\t>Tác Giả: {{ data.authorName }}</a\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>{{ data.startDate | date:'dd-MM-yyyy'}}</td>\n\t\t\t\t\t\t\t\t<td>{{ data.endDate | date:'dd-MM-yyyy'}}</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{{ data.pageCountTotal }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-6\">\n\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t[routerLink]=\"['/user/book/read-list',data.readListId]\"\n\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Chi Tiết\"\n\t\t\t\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"fund\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-6\">\n\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"deleteBookFromReadList(data.readListId)\"\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Xóa Khỏi Ds Đọc\"\n\t\t\t\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\tnzDanger\n\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"close\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</nz-table>\n\t\t\t\t</nz-page-header-content>\n\t\t\t</nz-page-header>\n\t\t</div>\n\t</ng-template>\n</ng-template>\n");

/***/ }),

/***/ "hqqZ":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-read-list/customer-book-read-list.component.ts ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: CustomerBookReadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerBookReadListComponent", function() { return CustomerBookReadListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_book_read_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-book-read-list.component.html */ "ZEPb");
/* harmony import */ var _customer_book_read_list_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-book-read-list.component.less */ "ypvY");
/* harmony import */ var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/comon-services/spinner/spinner.service */ "LXV+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/customer/book/book.service */ "+aFW");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "AytR");











let CustomerBookReadListComponent = class CustomerBookReadListComponent {
    constructor(bookService, notificationService, appErrorHandler, destroy$, // private authService: AuthService, // private suggestService: SuggestService, // private appErrorHandler: AppErrorHandler, // private ratingService: RatingService
    spinner) {
        this.bookService = bookService;
        this.notificationService = notificationService;
        this.appErrorHandler = appErrorHandler;
        this.destroy$ = destroy$;
        this.spinner = spinner;
        this.isLoading = true; //skelton
        this.isNotHaveData = false;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl;
        this.pageResult = {};
    }
    ngOnInit() {
        this.getBookInReadList(1);
    }
    getBookInReadList(pageIndex) {
        this.bookService
            .getBookInReadList({ pageIndex: pageIndex, pageSize: 10 })
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
                    if (result.resultObj) {
                        this.pageResult = result.resultObj;
                        console.log(this.pageResult);
                    }
                    else {
                        this.isNotHaveData = true;
                    }
                }
                else {
                    this.isNotHaveData = true;
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
                this.isLoading = false;
            }
        }, (error) => {
            this.isLoading = false;
            this.isNotHaveData = true;
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
    deleteBookFromReadList(productId) {
        this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: true });
        this.bookService
            .deleteBookFromReadList(productId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            if (result) {
                if (result.isSuccessed) {
                    if (result.message) {
                        this.getBookInReadList(1);
                        this.notificationService.showSuccessNotification(result.message);
                    }
                }
                else {
                    if (result.message) {
                        this.notificationService.showErrorNotification(result.message);
                    }
                }
            }
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
        }, (error) => {
            this.spinner.subjectSubmitLoadingHaveData$.next({ isSubmitted: false });
            this.appErrorHandler.handleErrorWithNoti(error);
        });
    }
};
CustomerBookReadListComponent.ctorParameters = () => [
    { type: src_app_core_services_customer_book_book_service__WEBPACK_IMPORTED_MODULE_9__["BookService"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandler"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"] },
    { type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"] }
];
CustomerBookReadListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-customer-book-read-list',
        template: _raw_loader_customer_book_read_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"]],
        styles: [_customer_book_read_list_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerBookReadListComponent);



/***/ }),

/***/ "ncb4":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-read-list-detail/customer-book-read-list-detail.component.html ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\n<ng-template #completedLoading>\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\n\t\t<span> Không Có Cuốn Sách Nào</span>\n\t</nz-empty>\n\t<ng-template #haveData>\n\t\t<div class=\"grid wide\">\n\t\t\t<nz-page-header>\n\t\t\t\t<!--breadcrumb-->\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t\t\t<!--title-->\n\t\t\t\t<nz-page-header-title>{{bookInReadListDetail.productName}}</nz-page-header-title>\n\t\t\t\t<!--subtitle-->\n\t\t\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t\t\t<!--content-->\n\t\t\t\t<nz-page-header-content>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col l-12\">\n\t\t\t\t\t\t\t<a [routerLink]=\"['/author',bookInReadListDetail.authorId]\"\n\t\t\t\t\t\t\t\t>Tác Giả: {{bookInReadListDetail.authorName}}</a\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col l-12\">Số Trang: {{bookInReadListDetail.pageCount}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col l-4\">Ngày Bắt Đầu: {{bookInReadListDetail.startDate | date:'dd-MM-yyyy'}}</div>\n\t\t\t\t\t\t<div class=\"col l-4\">Ngày Kết Thúc: {{bookInReadListDetail.endDate| date:'dd-MM-yyyy'}}</div>\n\t\t\t\t\t\t<div class=\"col l-4\">\n\t\t\t\t\t\t\tCòn Lại:\n\t\t\t\t\t\t\t{{remaningDays}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\"><div class=\"col l-12\">Quá Trình Đọc Sách:</div></div>\n\t\t\t\t\t<nz-progress [nzPercent]=\"readPageCountPercent\"></nz-progress>\n\t\t\t\t\t<nz-divider nzType=\"horizontal\"></nz-divider>\n\t\t\t\t\t<nz-card nzTitle=\"Bình Luận-Nơi Lưu Trữ Cảm Xúc Của Bạn\" [nzExtra]=\"extraTemplateComment\">\n\t\t\t\t\t\t<nz-steps [nzCurrent]=\"commentprogresses.length\" nzDirection=\"vertical\">\n\t\t\t\t\t\t\t<nz-step\n\t\t\t\t\t\t\t\t*ngFor=\"let item of commentprogresses\"\n\t\t\t\t\t\t\t\tnzTitle=\"Ngày: {{item.dateRead | date:'dd-MM-yyyy'}}\"\n\t\t\t\t\t\t\t\t[nzDescription]=\"extraEditStepDescriptionTemplate\"\n\t\t\t\t\t\t\t\tnzIcon=\"user\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template #extraEditStepDescriptionTemplate>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-9\">{{item.comment}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-1\">\n\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 1.4rem;\"\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Sửa Bình Luận\"\n\t\t\t\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t\t[nzType]=\"'primary'\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"showEditCommentProgressModal(item.commentProgressId)\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"edit\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t<nz-modal\n\t\t\t\t\t\t\t\t\t\t\t\t[(nzVisible)]=\"isEditCommentProgressModalVisible\"\n\t\t\t\t\t\t\t\t\t\t\t\tnzTitle=\"Bình Luận\"\n\t\t\t\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"handleEditCommentProgressModalCancel()\"\n\t\t\t\t\t\t\t\t\t\t\t\t(nzOnOk)=\"handleEditCommentProgressModalOk()\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *nzModalContent>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div [formGroup]=\"customerEditCommentProgressModalForm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSpan]=\"6\" nzFor=\"pageNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>Số Trang</nz-form-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-control [nzSpan]=\"14\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-input-number\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pageNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzStep]=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzMin]=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t></nz-input-number>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSpan]=\"6\" nzFor=\"quote\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>Câu Trích Dẫn</nz-form-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-control [nzSpan]=\"14\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input nz-input formControlName=\"quote\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSpan]=\"6\" nzFor=\"comment\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>Bình luận</nz-form-label\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-form-control [nzSpan]=\"14\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input nz-input formControlName=\"comment\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t</nz-modal>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-1\">\n\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"!item.isShare; else sharing\"\n\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Chia Sẻ Dòng Cảm Xúc Này Với Mọi Người\"\n\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"changeIsShare(item.commentProgressId)\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"share-alt\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #sharing>\n\t\t\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Đã Chia Sẻ Dòng Trạng Thái\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t\t\tnzType=\"default\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"changeIsShare(item.commentProgressId)\"\n\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tnz-icon\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzType]=\"'check-circle'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzTheme]=\"'twotone'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzTwotoneColor]=\"'#52c41a'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</nz-step>\n\t\t\t\t\t\t</nz-steps>\n\t\t\t\t\t</nz-card>\n\t\t\t\t\t<nz-divider nzType=\"horizontal\"></nz-divider>\n\t\t\t\t\t<nz-card\n\t\t\t\t\t\tnzTitle=\"Quá Trình Đọc: {{readDays}}/{{totalDays}} Ngày \"\n\t\t\t\t\t\t[nzExtra]=\"extraTemplateReadProgress\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<nz-steps [nzCurrent]=\"readDays\" nzDirection=\"vertical\">\n\t\t\t\t\t\t\t<nz-step\n\t\t\t\t\t\t\t\t*ngFor=\"let item of bookInReadListDetail.readProgresses\"\n\t\t\t\t\t\t\t\tnzTitle=\"Ngày: {{item.dateRead | date:'dd-MM-yyyy'}}\"\n\t\t\t\t\t\t\t\t[nzDescription]=\"extraEditStepDescriptionTemplate\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<ng-template #extraEditStepDescriptionTemplate>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col l-4\">\n\t\t\t\t\t\t\t\t\t\t\t<p>Bạn Đã Hoàn Thành Thêm {{item.pageReadCount}} Trang Sách</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"font-size: 1.4rem;\"\n\t\t\t\t\t\t\t\t\t\t\ttitle=\"Sửa Số Trang\"\n\t\t\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\t\t\t[nzType]=\"'primary'\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"showEditReadProgressModal(item.readProgressId)\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"edit\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<nz-modal\n\t\t\t\t\t\t\t\t\t\t\t[(nzVisible)]=\"isEditReadProgressModalVisible\"\n\t\t\t\t\t\t\t\t\t\t\tnzTitle=\"Số Trang Bạn Muốn Sửa\"\n\t\t\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"handleEditReadProgressModalCancel()\"\n\t\t\t\t\t\t\t\t\t\t\t(nzOnOk)=\"handleEditReadProgressModalOk()\"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<ng-container *nzModalContent>\n\t\t\t\t\t\t\t\t\t\t\t\t<div [formGroup]=\"customerEditReadProgressModalForm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<nz-input-number\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"readPageEdit\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzStep]=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t[nzMin]=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t></nz-input-number>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t</nz-modal>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</nz-step>\n\t\t\t\t\t\t</nz-steps>\n\t\t\t\t\t</nz-card>\n\t\t\t\t\t<ng-template #extraTemplateComment>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle=\"Thêm Bình Luận\"\n\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t[nzType]=\"'primary'\"\n\t\t\t\t\t\t\t(click)=\"showAddCommentProgressModal()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<i nz-icon nzType=\"plus\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<nz-modal\n\t\t\t\t\t\t\t[(nzVisible)]=\"isAddCommentProgressModalVisible\"\n\t\t\t\t\t\t\tnzTitle=\"Hôm Nay Bạn Cảm Thấy Thế Nào?\"\n\t\t\t\t\t\t\t(nzOnCancel)=\"handleAddCommentProgressModalCancel()\"\n\t\t\t\t\t\t\t(nzOnOk)=\"handleAddCommentProgressModalOk()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ng-container *nzModalContent>\n\t\t\t\t\t\t\t\t<div [formGroup]=\"customerAddCommentProgressModalForm\">\n\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSpan]=\"6\" nzFor=\"pageNumber\">Số Trang</nz-form-label>\n\t\t\t\t\t\t\t\t\t\t<nz-form-control [nzSpan]=\"14\">\n\t\t\t\t\t\t\t\t\t\t\t<nz-input-number\n\t\t\t\t\t\t\t\t\t\t\t\tformControlName=\"pageNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t[nzStep]=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t\t[nzMin]=\"1\"\n\t\t\t\t\t\t\t\t\t\t\t></nz-input-number>\n\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSpan]=\"6\" nzFor=\"quote\">Câu Trích Dẫn</nz-form-label>\n\t\t\t\t\t\t\t\t\t\t<nz-form-control [nzSpan]=\"14\">\n\t\t\t\t\t\t\t\t\t\t\t<input nz-input formControlName=\"quote\" />\n\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t\t\t<nz-form-label [nzSpan]=\"6\" nzFor=\"comment\">Bình luận</nz-form-label>\n\t\t\t\t\t\t\t\t\t\t<nz-form-control [nzSpan]=\"14\">\n\t\t\t\t\t\t\t\t\t\t\t<input nz-input formControlName=\"comment\" />\n\t\t\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</nz-modal>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template #extraTemplateReadProgress>\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\ttitle=\"Thêm Tiến Trình\"\n\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t[nzType]=\"'primary'\"\n\t\t\t\t\t\t\t(click)=\"showAddReadProgressModal()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<i nz-icon nzType=\"plus\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<nz-modal\n\t\t\t\t\t\t\t[(nzVisible)]=\"isAddReadProgressModalVisible\"\n\t\t\t\t\t\t\tnzTitle=\"Hôm Nay Bạn Đọc Thêm Bao Nhiêu Trang Sách\"\n\t\t\t\t\t\t\t(nzOnCancel)=\"handleAddReadProgressModalCancel()\"\n\t\t\t\t\t\t\t(nzOnOk)=\"handleAddReadProgressModalOk()\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<ng-container *nzModalContent>\n\t\t\t\t\t\t\t\t<div [formGroup]=\"customerAddReadProgressModalForm\">\n\t\t\t\t\t\t\t\t\t<nz-input-number\n\t\t\t\t\t\t\t\t\t\tformControlName=\"readPageToday\"\n\t\t\t\t\t\t\t\t\t\t[nzStep]=\"1\"\n\t\t\t\t\t\t\t\t\t\t[nzMin]=\"1\"\n\t\t\t\t\t\t\t\t\t></nz-input-number>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</nz-modal>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</nz-page-header-content>\n\t\t\t</nz-page-header>\n\t\t</div>\n\t</ng-template>\n</ng-template>\n");

/***/ }),

/***/ "wUXq":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-read-list-detail/customer-book-read-list-detail.component.less ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1ib29rLXJlYWQtbGlzdC1kZXRhaWwuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "ypvY":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/user/modules/customer-reading-progress/customer-reading-progress/customer-book-read-list/customer-book-read-list.component.less ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1ib29rLXJlYWQtbGlzdC5jb21wb25lbnQubGVzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=modules-customer-reading-progress-customer-reading-progress-module-es2015.js.map