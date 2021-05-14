(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-customer-author-customer-author-module"],{

/***/ "+QeF":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/customer-author/components/customer-author/customer-author.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton *ngIf=\"isLoading; else completedLoading\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"></nz-skeleton>\r\n<ng-template #completedLoading>\r\n\t<nz-empty style=\"margin-top: 50px;\" *ngIf=\"isNotHaveData; else haveData\">\r\n\t\t<span> Không Tìm Thấy Tác Gỉa </span>\r\n\t</nz-empty>\r\n\t<ng-template #haveData>\r\n\t\t<div class=\"grid wide\">\r\n\t\t\t<nz-page-header>\r\n\t\t\t\t<!--breadcrumb-->\r\n\t\t\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\r\n\t\t\t\t<!--title-->\r\n\t\t\t\t<nz-page-header-title>{{authorResponse.authorName}}</nz-page-header-title>\r\n\t\t\t\t<!--subtitle-->\r\n\t\t\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\r\n\t\t\t\t<!--content-->\r\n\t\t\t\t<nz-page-header-content>\r\n\t\t\t\t\t{{authorResponse.description}}\r\n\t\t\t\t</nz-page-header-content>\r\n\t\t\t</nz-page-header>\r\n\t\t</div>\r\n\t</ng-template>\r\n</ng-template>\r\n");

/***/ }),

/***/ "IRZT":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/customer-author/customer-author.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CustomerAuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAuthorModule", function() { return CustomerAuthorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _customer_author_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-author-routing.module */ "eyHd");
/* harmony import */ var _components_customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customer-author/customer-author.component */ "jJcE");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "MNke");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/module/core.module */ "gfFi");








let CustomerAuthorModule = class CustomerAuthorModule {
};
CustomerAuthorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_4__["CustomerAuthorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _customer_author_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomerAuthorRoutingModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"],
        ]
    })
], CustomerAuthorModule);



/***/ }),

/***/ "QKqP":
/*!************************************************************************************!*\
  !*** ./src/app/core/utils/URL/customer-url/customer-author/customer-url-author.ts ***!
  \************************************************************************************/
/*! exports provided: CustomerUrlAuthor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUrlAuthor", function() { return CustomerUrlAuthor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _customer_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../customer-url-base */ "1zjI");



let CustomerUrlAuthor = class CustomerUrlAuthor extends _customer_url_base__WEBPACK_IMPORTED_MODULE_2__["CustomerUrlBase"] {
    getAuthor(authorId) {
        return this.customerUrl + '/author/' + authorId;
    }
};
CustomerUrlAuthor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerUrlAuthor);



/***/ }),

/***/ "eyHd":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/customer-author/customer-author-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CustomerAuthorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAuthorRoutingModule", function() { return CustomerAuthorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _components_customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/customer-author/customer-author.component */ "jJcE");




const routes = [{ path: ':authorId', component: _components_customer_author_customer_author_component__WEBPACK_IMPORTED_MODULE_3__["CustomerAuthorComponent"] }];
let CustomerAuthorRoutingModule = class CustomerAuthorRoutingModule {
};
CustomerAuthorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CustomerAuthorRoutingModule);



/***/ }),

/***/ "jJcE":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/customer-author/components/customer-author/customer-author.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: CustomerAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAuthorComponent", function() { return CustomerAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_customer_author_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./customer-author.component.html */ "+QeF");
/* harmony import */ var _customer_author_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-author.component.less */ "r+0l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ "IW2O");
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error-handler/app-error-handler.service */ "Bp2A");
/* harmony import */ var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/notification/notifications/customer/notification.service */ "7IKN");
/* harmony import */ var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/comon-services/destroy-service/destroy.service */ "ekmL");
/* harmony import */ var src_app_core_services_customer_author_author_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/customer/author/author.service */ "vD09");










let CustomerAuthorComponent = class CustomerAuthorComponent {
    constructor(authorService, route, notificationService, destroy$, appErrorHandler) {
        this.authorService = authorService;
        this.route = route;
        this.notificationService = notificationService;
        this.destroy$ = destroy$;
        this.appErrorHandler = appErrorHandler;
        this.isLoading = true; //skelton
        this.isNotHaveData = false;
        this.authorId = 1;
        this.authorResponse = {};
    }
    ngOnInit() {
        this.isLoading = true;
        if (this.route.snapshot.paramMap.get('authorId')) {
            this.authorId = +this.route.snapshot.paramMap.get('authorId');
            console.log(this.authorId);
            this.getAuthor(this.authorId);
        }
    }
    getAuthor(authorId) {
        this.authorService
            .getAuthor(authorId)
            .pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((result) => {
            console.log(result);
            if (result.isSuccessed) {
                if (result.resultObj) {
                    console.log(result);
                    this.authorResponse = result.resultObj;
                    this.isLoading = false;
                }
            }
            else {
                this.isNotHaveData = true;
                if (result.message) {
                    this.notificationService.showErrorNotification(result.message);
                }
            }
        }, (error) => {
            this.isNotHaveData = true;
            this.appErrorHandler.handleErrorWithNoti(error);
        }, () => { });
    }
};
CustomerAuthorComponent.ctorParameters = () => [
    { type: src_app_core_services_customer_author_author_service__WEBPACK_IMPORTED_MODULE_9__["AuthorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"] },
    { type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandler"] }
];
CustomerAuthorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-customer-author',
        template: _raw_loader_customer_author_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_8__["DestroyService"]],
        styles: [_customer_author_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomerAuthorComponent);



/***/ }),

/***/ "r+0l":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/customer-author/components/customer-author/customer-author.component.less ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1hdXRob3IuY29tcG9uZW50Lmxlc3MifQ== */");

/***/ }),

/***/ "vD09":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/customer/author/author.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_core_utils_URL_customer_url_customer_author_customer_url_author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utils/URL/customer-url/customer-author/customer-url-author */ "QKqP");




let AuthorService = class AuthorService {
    constructor(http, customerUrlAuthor) {
        this.http = http;
        this.customerUrlAuthor = customerUrlAuthor;
    }
    getAuthor(authorId) {
        return this.http.get(this.customerUrlAuthor.getAuthor(authorId));
    }
};
AuthorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: src_app_core_utils_URL_customer_url_customer_author_customer_url_author__WEBPACK_IMPORTED_MODULE_3__["CustomerUrlAuthor"] }
];
AuthorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthorService);



/***/ })

}]);
//# sourceMappingURL=components-customer-body-modules-customer-author-customer-author-module.js.map