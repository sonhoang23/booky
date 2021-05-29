(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-body-Author-Author-module"], {
    /***/
    "4uBQ":
    /*!********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/Author/author-index/author-index.component.html ***!
      \********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uBQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-skeleton *ngIf=\"isLoading;else loaded\" [nzLoading]=\"isLoading\" [nzActive]=\"true\"> </nz-skeleton>\n<ng-template #loaded>\n\t<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t\t<nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb>\n\t\t<!--title-->\n\t\t<nz-page-header-title>Danh Sách Tác Giả Trong Hệ Thống</nz-page-header-title>\n\t\t<!--subtitle-->\n\t\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t\t<!--content-->\n\t\t<nz-page-header-content>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col l-3\">\n\t\t\t\t\t<form nz-form [formGroup]=\"authorSearchForm\" #searchForm=\"ngForm\">\n\t\t\t\t\t\t<input nz-input formControlName=\"search\" placeholder=\"Tìm Kiếm\" nzSize=\"default\" />\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<nz-table\n\t\t\t\t#basicTable\n\t\t\t\t[nzPageIndex]=\"pagingResult?.pageIndex\"\n\t\t\t\t[nzTotal]=\"pagingResult?.totalRecords\"\n\t\t\t\t[nzPageSize]=\"pagingResult?.pageSize\"\n\t\t\t\t[nzShowTotal]=\"rangeTemplate\"\n\t\t\t\t[nzHideOnSinglePage]=\"true\"\n\t\t\t\t[nzData]=\"['']\"\n\t\t\t>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Tác Giả</th>\n\t\t\t\t\t\t<!-- <th>Nội Dung</th> -->\n\t\t\t\t\t\t<th>Tinh Trạng</th>\n\t\t\t\t\t\t<th>Hành Động</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let data of pagingResult.items\">\n\t\t\t\t\t\t<td>{{data.authorName}}</td>\n\t\t\t\t\t\t<!-- <td>{{data.description}}</td> -->\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<nz-switch\n\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t[ngModel]=\"data.status\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"changeStatus($event, data.authorId)\"\n\t\t\t\t\t\t\t></nz-switch>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t[routerLink]=\"['edit',data.authorId]\"\n\t\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzType=\"primary\"\n\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\tnzSize=\"small\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin-left: 5px\"\n\t\t\t\t\t\t\t\t\tnz-button\n\t\t\t\t\t\t\t\t\tnzDanger\n\t\t\t\t\t\t\t\t\tnzType=\"danger\"\n\t\t\t\t\t\t\t\t\tnzShape=\"circle\"\n\t\t\t\t\t\t\t\t\tnz-popconfirm\n\t\t\t\t\t\t\t\t\tnzPopconfirmTitle=\"Có Chắc Bạn Muốn Xóa Thông Tin Tác Giả Này Khỏi Hệ Thống?\"\n\t\t\t\t\t\t\t\t\t(nzOnConfirm)=\"deleteAuthor(data.authorId)\"\n\t\t\t\t\t\t\t\t\t(nzOnCancel)=\"cancel()\"\n\t\t\t\t\t\t\t\t\tnzPopconfirmPlacement=\"bottomRight\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<i nz-icon nzType=\"delete\" nzTheme=\"outline\"></i>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</nz-table>\n\t\t\t<nz-pagination\n\t\t\t\tstyle=\"margin-top: 30px;\"\n\t\t\t\t[nzPageIndex]=\"pagingResult.pageIndex\"\n\t\t\t\t[nzTotal]=\"pagingResult.totalRecords\"\n\t\t\t\t[nzPageSize]=\"pagingResult.pageSize\"\n\t\t\t\t[nzShowTotal]=\"rangeTemplate\"\n\t\t\t\t(nzPageIndexChange)=\"pageChanged($event)\"\n\t\t\t></nz-pagination>\n\t\t\t<ng-template #rangeTemplate let-range=\"range\" let-total>\n\t\t\t\t{{ range[0] }}-{{ range[1] }} Trên {{ total }}\n\t\t\t</ng-template>\n\t\t</nz-page-header-content>\n\t</nz-page-header>\n</ng-template>\n";
      /***/
    },

    /***/
    "67Aw":
    /*!**************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-edit/author-edit.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AuthorEditComponent */

    /***/
    function Aw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorEditComponent", function () {
        return AuthorEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_author_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./author-edit.component.html */
      "s7dF");
      /* harmony import */


      var _author_edit_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-edit.component.less */
      "6wML");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/internal/operators/takeUntil */
      "IW2O");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/error-handler/app-error-handler.service */
      "Bp2A");
      /* harmony import */


      var src_app_core_services_admin_author_author_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/services/admin/author/author-admin.service */
      "VdgA");
      /* harmony import */


      var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/comon-services/destroy-service/destroy.service */
      "ekmL");
      /* harmony import */


      var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/services/comon-services/spinner/spinner.service */
      "LXV+");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      "+z1p");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/core/notification/notifications/customer/notification.service */
      "7IKN");

      var AuthorEditComponent = /*#__PURE__*/function () {
        function AuthorEditComponent(route, destroy$, appErrorHandler, spinner, authorAdminService, formBuilder, notificationService, spinnerService) {
          _classCallCheck(this, AuthorEditComponent);

          this.route = route;
          this.destroy$ = destroy$;
          this.appErrorHandler = appErrorHandler;
          this.spinner = spinner;
          this.authorAdminService = authorAdminService;
          this.formBuilder = formBuilder;
          this.notificationService = notificationService;
          this.spinnerService = spinnerService;
          this.isLoading = true; //skelton

          this.uploading = false;
          this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__;
          this.modified = false;
        }

        _createClass(AuthorEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.route.snapshot.paramMap.get('authorId')) {
              this.authorId = +this.route.snapshot.paramMap.get('authorId');

              if (this.authorId) {
                console.log(this.authorId);
                this.get(this.authorId);
                this.initForm();
                this.checkFormValueChange(); //attach data from store into formGroup
              }
            }
          }
        }, {
          key: "get",
          value: function get(productId) {
            var _this = this;

            this.spinnerService.subjectSubmitLoadingHaveData$.next({
              isSubmitted: true
            });
            this.authorAdminService.get(productId).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (result) {
              console.log(result);

              if (result) {
                if (result.isSuccessed) {
                  _this.result = result.resultObj;

                  _this.initFormDataFromStore();

                  console.log(_this.result);
                  _this.isLoading = false;
                } else {}
              } else {}
            });
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.authorEditForm = this.formBuilder.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]]
            });
          }
        }, {
          key: "initFormDataFromStore",
          value: function initFormDataFromStore() {
            var _this2 = this;

            setTimeout(function () {
              _this2.authorEditForm.setValue({
                name: _this2.result.authorName != null ? _this2.result.authorName : '',
                description: _this2.result.description != null ? _this2.result.description : ''
              });

              _this2.spinnerService.subjectSubmitLoadingHaveData$.next({
                isSubmitted: false
              });
            }, 5000);
          }
        }, {
          key: "checkFormValueChange",
          value: function checkFormValueChange() {
            var _this3 = this;

            this.authorEditForm.valueChanges.subscribe(function (result) {
              console.log('valueChanges');
              console.log(result);
              console.log(_this3.result);

              if (result.name === (_this3.result.authorName != null ? _this3.result.authorName : '') && result.description === (_this3.result.description != null ? _this3.result.description : '')) {
                _this3.modified = false;
              } else {
                _this3.modified = true;
              }

              console.log(_this3.modified);
            });
          }
        }, {
          key: "getFormData",
          value: function getFormData() {
            var val = this.authorEditForm.value;
            var authorAdminEditViewModel = {
              authorName: val.name,
              description: val.description,
              authorId: this.result.authorId
            };
            return authorAdminEditViewModel;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this4 = this;

            this.spinner.subjectSubmitLoadingHaveData$.next({
              isSubmitted: true
            });

            try {
              this.authorAdminService.edit(this.getFormData()).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (res) {
                console.log(res);

                if (res.isSuccessed) {
                  if (res.message) {
                    _this4.notificationService.showSuccessNotification(res.message);
                  }
                } else {
                  if (res.message) {
                    _this4.notificationService.showErrorNotification(res.message);
                  }
                }

                _this4.spinner.subjectSubmitLoadingHaveData$.next({
                  isSubmitted: false
                });
              }, function () {
                _this4.notificationService.showErrorNotification('Có Lỗi Xảy Ra, Vui Lòng Thử Lại');

                _this4.spinner.subjectSubmitLoadingHaveData$.next({
                  isSubmitted: false
                });
              });
            } catch (error) {
              this.appErrorHandler.handleError(error);
            }
          }
        }]);

        return AuthorEditComponent;
      }();

      AuthorEditComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"]
        }, {
          type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorHandler"]
        }, {
          type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"]
        }, {
          type: src_app_core_services_admin_author_author_admin_service__WEBPACK_IMPORTED_MODULE_8__["AuthorAdminService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"]
        }, {
          type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"]
        }];
      };

      AuthorEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-author-edit',
        template: _raw_loader_author_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"]],
        styles: [_author_edit_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthorEditComponent);
      /***/
    },

    /***/
    "6wML":
    /*!****************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-edit/author-edit.component.less ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItZWRpdC5jb21wb25lbnQubGVzcyJ9 */";
      /***/
    },

    /***/
    "BNkv":
    /*!******************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-index/author-index.component.less ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BNkv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItaW5kZXguY29tcG9uZW50Lmxlc3MifQ== */";
      /***/
    },

    /***/
    "Snc5":
    /*!******************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-create/author-create.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AuthorCreateComponent */

    /***/
    function Snc5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorCreateComponent", function () {
        return AuthorCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_author_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./author-create.component.html */
      "cREj");
      /* harmony import */


      var _author_create_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-create.component.less */
      "kNIM");
      /* harmony import */


      var _core_services_admin_author_author_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../../../core/services/admin/author/author-admin.service */
      "VdgA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-build-classic */
      "+z1p");
      /* harmony import */


      var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/error-handler/app-error-handler.service */
      "Bp2A");
      /* harmony import */


      var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/notification/notifications/customer/notification.service */
      "7IKN");
      /* harmony import */


      var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/core/services/comon-services/destroy-service/destroy.service */
      "ekmL");
      /* harmony import */


      var src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/core/services/comon-services/spinner/spinner.service */
      "LXV+");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/internal/operators/takeUntil */
      "IW2O");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_11__);

      var AuthorCreateComponent = /*#__PURE__*/function () {
        function AuthorCreateComponent(formBuilder, destroy$, appErrorHandler, spinner, notificationService, authorAdminService) {
          _classCallCheck(this, AuthorCreateComponent);

          this.formBuilder = formBuilder;
          this.destroy$ = destroy$;
          this.appErrorHandler = appErrorHandler;
          this.spinner = spinner;
          this.notificationService = notificationService;
          this.authorAdminService = authorAdminService;
          this.uploading = false;
          this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
        }

        _createClass(AuthorCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initForm();
          }
        }, {
          key: "initForm",
          value: function initForm() {
            this.authorCreateForm = this.formBuilder.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]]
            });
          }
        }, {
          key: "getFormData",
          value: function getFormData() {
            var val = this.authorCreateForm.value;
            var authorAdminCreateViewModel = {
              authorName: val.name,
              description: val.description
            };
            return authorAdminCreateViewModel;
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this5 = this;

            this.spinner.subjectSubmitLoadingHaveData$.next({
              isSubmitted: true
            });

            try {
              this.authorAdminService.create(this.getFormData()).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe(function (res) {
                console.log(res);

                if (res.isSuccessed) {
                  if (res.message) {
                    _this5.notificationService.showSuccessNotification(res.message);
                  }
                } else {
                  if (res.message) {
                    _this5.notificationService.showErrorNotification(res.message);
                  }
                }

                _this5.spinner.subjectSubmitLoadingHaveData$.next({
                  isSubmitted: false
                });
              }, function () {
                _this5.notificationService.showErrorNotification('Có Lỗi Xảy Ra, Vui Lòng Thử Lại');

                _this5.spinner.subjectSubmitLoadingHaveData$.next({
                  isSubmitted: false
                });
              });
            } catch (error) {
              this.appErrorHandler.handleError(error);
            }
          }
        }]);

        return AuthorCreateComponent;
      }();

      AuthorCreateComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"]
        }, {
          type: src_app_core_error_handler_app_error_handler_service__WEBPACK_IMPORTED_MODULE_7__["AppErrorHandler"]
        }, {
          type: src_app_core_services_comon_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_10__["SpinnerService"]
        }, {
          type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]
        }, {
          type: _core_services_admin_author_author_admin_service__WEBPACK_IMPORTED_MODULE_3__["AuthorAdminService"]
        }];
      };

      AuthorCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-author-create',
        template: _raw_loader_author_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_9__["DestroyService"]],
        styles: [_author_create_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthorCreateComponent);
      /***/
    },

    /***/
    "VIU9":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: AuthorRoutingModule */

    /***/
    function VIU9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorRoutingModule", function () {
        return AuthorRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./author-edit/author-edit.component */
      "67Aw");
      /* harmony import */


      var _author_index_author_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-index/author-index.component */
      "f7Hn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _author_create_author_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./author-create/author-create.component */
      "Snc5");

      var routes = [{
        path: 'create',
        component: _author_create_author_create_component__WEBPACK_IMPORTED_MODULE_5__["AuthorCreateComponent"]
      }, {
        path: '',
        component: _author_index_author_index_component__WEBPACK_IMPORTED_MODULE_2__["AuthorIndexComponent"]
      }, {
        path: 'edit/:authorId',
        component: _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_1__["AuthorEditComponent"]
      }];

      var AuthorRoutingModule = function AuthorRoutingModule() {
        _classCallCheck(this, AuthorRoutingModule);
      };

      AuthorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      })], AuthorRoutingModule);
      /***/
    },

    /***/
    "VdgA":
    /*!********************************************************************!*\
      !*** ./src/app/core/services/admin/author/author-admin.service.ts ***!
      \********************************************************************/

    /*! exports provided: AuthorAdminService */

    /***/
    function VdgA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorAdminService", function () {
        return AuthorAdminService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _utils_URL_admin_url_admin_url_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../utils/URL/admin-url/admin-url-author */
      "dNdE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AuthorAdminService = /*#__PURE__*/function () {
        function AuthorAdminService(adminUrlAuthor, http) {
          _classCallCheck(this, AuthorAdminService);

          this.adminUrlAuthor = adminUrlAuthor;
          this.http = http;
        }

        _createClass(AuthorAdminService, [{
          key: "create",
          value: function create(authorAdminCreateViewModel) {
            return this.http.post(this.adminUrlAuthor.create(), authorAdminCreateViewModel);
          }
        }, {
          key: "getPaging",
          value: function getPaging(pagingRequestBase) {
            return this.http.get(this.adminUrlAuthor.getPaging(pagingRequestBase));
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.http.get(this.adminUrlAuthor.get(id));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"](this.adminUrlAuthor["delete"](id));
          }
        }, {
          key: "edit",
          value: function edit(authorAdminEditViewModel) {
            return this.http.put(this.adminUrlAuthor.edit(), authorAdminEditViewModel);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(_ref) {
            var number = _ref.authorId,
                _boolean = _ref.status;
            return this.http.put(this.adminUrlAuthor.changeStatus(), {
              authorId: number,
              status: _boolean
            });
          }
        }]);

        return AuthorAdminService;
      }();

      AuthorAdminService.ctorParameters = function () {
        return [{
          type: _utils_URL_admin_url_admin_url_author__WEBPACK_IMPORTED_MODULE_2__["AdminUrlAuthor"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AuthorAdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
      })], AuthorAdminService);
      /***/
    },

    /***/
    "cREj":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/Author/author-create/author-create.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cREj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t<!-- <nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb> -->\n\t<!--title-->\n\t<nz-page-header-title>Tạo Nỗi Dung Tác Giả</nz-page-header-title>\n\t<!--subtitle-->\n\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t<!--content-->\n\t<nz-page-header-content>\n\t\t<div class=\"product-create\">\n\t\t\t<form\n\t\t\t\tnz-form\n\t\t\t\t[formGroup]=\"authorCreateForm\"\n\t\t\t\tclass=\"create-form\"\n\t\t\t\t(ngSubmit)=\"submitForm()\"\n\t\t\t\t#createForm=\"ngForm\"\n\t\t\t>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col l-10\">\n\t\t\t\t\t\t<nz-card style=\"margin-top: 16px\" [nzBordered]=\"true\" nzTitle=\"Tạo Mới\">\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"name\"\n\t\t\t\t\t\t\t\t\t>Tên Tác Giả</nz-form-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập tên tác giả\"\n\t\t\t\t\t\t\t\t\t\tnzSize=\"large\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"description\">\n\t\t\t\t\t\t\t\t\tMiêu Tả Cho Tác Giả\n\t\t\t\t\t\t\t\t</nz-form-label>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<ckeditor\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\t\t\t\t\ttagName=\"textarea\"\n\t\t\t\t\t\t\t\t\t\t[editor]=\"editor\"\n\t\t\t\t\t\t\t\t\t></ckeditor>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button nz-button type=\"submit\" [disabled]=\"!createForm.form.valid\" [nzType]=\"'primary'\">\n\t\t\t\t\tTải Lên\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t</nz-page-header-content>\n</nz-page-header>\n";
      /***/
    },

    /***/
    "dNdE":
    /*!**************************************************************!*\
      !*** ./src/app/core/utils/URL/admin-url/admin-url-author.ts ***!
      \**************************************************************/

    /*! exports provided: AdminUrlAuthor */

    /***/
    function dNdE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminUrlAuthor", function () {
        return AdminUrlAuthor;
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


      var _admin_url_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-url-base */
      "xZP7");

      var AdminUrlAuthor = /*#__PURE__*/function (_admin_url_base__WEBP) {
        _inherits(AdminUrlAuthor, _admin_url_base__WEBP);

        var _super = _createSuper(AdminUrlAuthor);

        function AdminUrlAuthor() {
          _classCallCheck(this, AdminUrlAuthor);

          return _super.apply(this, arguments);
        }

        _createClass(AdminUrlAuthor, [{
          key: "create",
          value: function create() {
            return this.adminUrl + '/author';
          }
        }, {
          key: "edit",
          value: function edit() {
            return this.adminUrl + '/author';
          }
        }, {
          key: "getPaging",
          value: function getPaging(pagingRequestBase) {
            return this.adminUrl + "/author/authors?searchKeyWord=".concat(pagingRequestBase.searchKeyWord, "&pageIndex=").concat(pagingRequestBase.pageIndex, "&pageSize=").concat(pagingRequestBase.pageSize, "&languageCode=").concat(pagingRequestBase.languageCode);
          }
        }, {
          key: "get",
          value: function get(id) {
            return this.adminUrl + "/author/".concat(id);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.adminUrl + "/author/".concat(id);
          }
        }, {
          key: "changeStatus",
          value: function changeStatus() {
            return this.adminUrl + "/author/status";
          }
        }]);

        return AdminUrlAuthor;
      }(_admin_url_base__WEBPACK_IMPORTED_MODULE_2__["AdminUrlBase"]);

      AdminUrlAuthor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminUrlAuthor);
      /***/
    },

    /***/
    "f5CR":
    /*!******************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/Author.module.ts ***!
      \******************************************************************************/

    /*! exports provided: AuthorModule */

    /***/
    function f5CR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorModule", function () {
        return AuthorModule;
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


      var _author_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./author-routing.module */
      "VIU9");
      /* harmony import */


      var _author_create_author_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./author-create/author-create.component */
      "Snc5");
      /* harmony import */


      var src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/module/core.module */
      "gfFi");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "MNke");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "PjcS");
      /* harmony import */


      var _author_index_author_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./author-index/author-index.component */
      "f7Hn");
      /* harmony import */


      var _author_update_author_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./author-update/author-update.component */
      "xF2u");
      /* harmony import */


      var _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./author-edit/author-edit.component */
      "67Aw");

      var AuthorModule = function AuthorModule() {
        _classCallCheck(this, AuthorModule);
      };

      AuthorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_author_create_author_create_component__WEBPACK_IMPORTED_MODULE_4__["AuthorCreateComponent"], _author_index_author_index_component__WEBPACK_IMPORTED_MODULE_8__["AuthorIndexComponent"], _author_update_author_update_component__WEBPACK_IMPORTED_MODULE_9__["AuthorUpdateComponent"], _author_edit_author_edit_component__WEBPACK_IMPORTED_MODULE_10__["AuthorEditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _author_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthorRoutingModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], //TranslateModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_6__["InfiniteScrollModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["IconsProviderModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"], src_app_core_module_core_module__WEBPACK_IMPORTED_MODULE_5__["NzMenuModule"]]
      })], AuthorModule);
      /***/
    },

    /***/
    "f7Hn":
    /*!****************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-index/author-index.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AuthorIndexComponent */

    /***/
    function f7Hn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorIndexComponent", function () {
        return AuthorIndexComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_author_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./author-index.component.html */
      "4uBQ");
      /* harmony import */


      var _author_index_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-index.component.less */
      "BNkv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/comon-services/destroy-service/destroy.service */
      "ekmL");
      /* harmony import */


      var src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/notification/notifications/customer/notification.service */
      "7IKN");
      /* harmony import */


      var src_app_core_services_admin_author_author_admin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/services/admin/author/author-admin.service */
      "VdgA");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/internal/operators/takeUntil */
      "IW2O");
      /* harmony import */


      var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var AuthorIndexComponent = /*#__PURE__*/function () {
        function AuthorIndexComponent(destroy$, notificationService, authorAdminService, formBuilder) {
          _classCallCheck(this, AuthorIndexComponent);

          this.destroy$ = destroy$;
          this.notificationService = notificationService;
          this.authorAdminService = authorAdminService;
          this.formBuilder = formBuilder;
          this.pageIndex = 1;
          this.isLoading = true;
        }

        _createClass(AuthorIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.get();
            this.initSearchForm();
            this.checkSearchFormValueChange();
          }
        }, {
          key: "initSearchForm",
          value: function initSearchForm() {
            this.authorSearchForm = this.formBuilder.group({
              search: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1)]]
            });
          }
        }, {
          key: "get",
          value: function get() {
            var _this6 = this;

            var _a;

            this.authorAdminService.getPaging({
              pageIndex: this.pageIndex,
              pageSize: 10,
              searchKeyWord: (_a = this.searchKeyWord) !== null && _a !== void 0 ? _a : '',
              languageCode: 'vn'
            }).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (result) {
              console.log(result);

              if (result) {
                if (result.resultObj) {
                  if (result.isSuccessed) {
                    _this6.pagingResult = result.resultObj;
                    console.log(_this6.pagingResult);
                    _this6.isLoading = false;
                  } else {}
                } else {}
              } else {}
            });
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(page) {
            this.pageIndex = page; // receive the page number
            // display the sort button by previous sort

            this.get(); // navigated by sort and page
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(status, authorId) {
            var _this7 = this;

            console.log(status);
            this.authorAdminService.changeStatus({
              authorId: authorId,
              status: status
            }).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (result) {
              console.log(result);

              if (result) {
                if (result.resultObj) {
                  if (result.isSuccessed) {
                    _this7.notificationService.showSuccessNotification(result.message);
                  } else {
                    _this7.notificationService.showErrorNotification(result.message);
                  }
                }
              }
            });
          }
        }, {
          key: "checkSearchFormValueChange",
          value: function checkSearchFormValueChange() {
            var _this8 = this;

            this.authorSearchForm.valueChanges.subscribe(function (result) {
              console.log(result.search);
              _this8.searchKeyWord = result.search;
              _this8.pageIndex = 1;

              _this8.get();
            });
          }
        }, {
          key: "deleteAuthor",
          value: function deleteAuthor(authorId) {
            var _this9 = this;

            console.log(authorId);
            this.authorAdminService["delete"](authorId).pipe(Object(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (result) {
              console.log(result);

              if (result) {
                if (result.resultObj) {
                  if (result.isSuccessed) {
                    _this9.notificationService.showSuccessNotification('Xóa Thành Công');
                  } else {}
                } else {
                  _this9.notificationService.showSuccessNotification(result.message);
                }
              } else {}
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {}
        }]);

        return AuthorIndexComponent;
      }();

      AuthorIndexComponent.ctorParameters = function () {
        return [{
          type: src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_4__["DestroyService"]
        }, {
          type: src_app_core_notification_notifications_customer_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]
        }, {
          type: src_app_core_services_admin_author_author_admin_service__WEBPACK_IMPORTED_MODULE_6__["AuthorAdminService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      AuthorIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-author-index',
        template: _raw_loader_author_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [src_app_core_services_comon_services_destroy_service_destroy_service__WEBPACK_IMPORTED_MODULE_4__["DestroyService"]],
        styles: [_author_index_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthorIndexComponent);
      /***/
    },

    /***/
    "jYpO":
    /*!********************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-update/author-update.component.less ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jYpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItdXBkYXRlLmNvbXBvbmVudC5sZXNzIn0= */";
      /***/
    },

    /***/
    "kNIM":
    /*!********************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-create/author-create.component.less ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kNIM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3ItY3JlYXRlLmNvbXBvbmVudC5sZXNzIn0= */";
      /***/
    },

    /***/
    "s7dF":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/Author/author-edit/author-edit.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function s7dF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nz-page-header style=\"padding-left: 0; padding-right: 0;\">\n\t<!-- <nz-breadcrumb nz-page-header-breadcrumb [nzAutoGenerate]=\"true\"></nz-breadcrumb> -->\n\t<!--title-->\n\t<nz-page-header-title>Tạo Nỗi Dung Tác Giả</nz-page-header-title>\n\t<!--subtitle-->\n\t<nz-page-header-subtitle></nz-page-header-subtitle>\n\t<!--content-->\n\t<nz-page-header-content>\n\t\t<div class=\"product-create\">\n\t\t\t<form\n\t\t\t\tnz-form\n\t\t\t\t[formGroup]=\"authorEditForm\"\n\t\t\t\tclass=\"create-form\"\n\t\t\t\t(ngSubmit)=\"submitForm()\"\n\t\t\t\t#createForm=\"ngForm\"\n\t\t\t>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col l-10\">\n\t\t\t\t\t\t<nz-card style=\"margin-top: 16px\" [nzBordered]=\"true\" nzTitle=\"Chỉnh Sửa\">\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"name\"\n\t\t\t\t\t\t\t\t\t>Tên Tác Giả</nz-form-label\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<input\n\t\t\t\t\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\t\t\t\t\tnz-input\n\t\t\t\t\t\t\t\t\t\tformControlName=\"name\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Nhập tên tác giả\"\n\t\t\t\t\t\t\t\t\t\tnzSize=\"default\"\n\t\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t\t<nz-form-item>\n\t\t\t\t\t\t\t\t<nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"description\">\n\t\t\t\t\t\t\t\t\tMiêu Tả\n\t\t\t\t\t\t\t\t</nz-form-label>\n\t\t\t\t\t\t\t\t<nz-form-control nzErrorTip=\"Có Lỗi\">\n\t\t\t\t\t\t\t\t\t<ckeditor\n\t\t\t\t\t\t\t\t\t\tformControlName=\"description\"\n\t\t\t\t\t\t\t\t\t\ttagName=\"textarea\"\n\t\t\t\t\t\t\t\t\t\t[editor]=\"editor\"\n\t\t\t\t\t\t\t\t\t></ckeditor>\n\t\t\t\t\t\t\t\t</nz-form-control>\n\t\t\t\t\t\t\t</nz-form-item>\n\t\t\t\t\t\t</nz-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button nz-button type=\"submit\" [disabled]=\"!createForm.form.valid||!modified\" [nzType]=\"'primary'\">\n\t\t\t\t\tChỉnh Sửa\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</div>\n\t</nz-page-header-content>\n</nz-page-header>\n";
      /***/
    },

    /***/
    "v/V8":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/admin/components/admin-body/Author/author-update/author-update.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vV8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>author-update works!</p>\n";
      /***/
    },

    /***/
    "xF2u":
    /*!******************************************************************************************************!*\
      !*** ./src/app/features/admin/components/admin-body/Author/author-update/author-update.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AuthorUpdateComponent */

    /***/
    function xF2u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorUpdateComponent", function () {
        return AuthorUpdateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_author_update_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./author-update.component.html */
      "v/V8");
      /* harmony import */


      var _author_update_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-update.component.less */
      "jYpO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var AuthorUpdateComponent = /*#__PURE__*/function () {
        function AuthorUpdateComponent() {
          _classCallCheck(this, AuthorUpdateComponent);
        }

        _createClass(AuthorUpdateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthorUpdateComponent;
      }();

      AuthorUpdateComponent.ctorParameters = function () {
        return [];
      };

      AuthorUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-author-update',
        template: _raw_loader_author_update_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_author_update_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AuthorUpdateComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-admin-body-Author-Author-module-es5.js.map