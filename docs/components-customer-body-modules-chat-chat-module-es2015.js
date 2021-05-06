(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customer-body-modules-chat-chat-module"],{

/***/ "G/zs":
/*!************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/chat/chat-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "v+h0");




const routes = [
    {
        path: '',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
    }
];
let ChatRoutingModule = class ChatRoutingModule {
};
ChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChatRoutingModule);



/***/ }),

/***/ "VeRM":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/chat/chat/chat.component.less ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5sZXNzIn0= */");

/***/ }),

/***/ "ilxe":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/customer/components/customer-body/modules/chat/chat/chat.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>chat works!</p>\n");

/***/ }),

/***/ "v+h0":
/*!************************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/chat/chat/chat.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.component.html */ "ilxe");
/* harmony import */ var _chat_component_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component.less */ "VeRM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_core_services_customer_notification_hubs_signal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/customer/notification/hubs/signal.service */ "jY/3");






let ChatComponent = class ChatComponent {
    constructor(signalService, route) {
        this.signalService = signalService;
        this.route = route;
        this.signalList = [];
    }
    ngOnInit() {
        this.signalService.signalReceived.subscribe((signal) => {
            this.signalList.push(signal);
            console.log(signal);
        });
    }
};
ChatComponent.ctorParameters = () => [
    { type: src_app_core_services_customer_notification_hubs_signal_service__WEBPACK_IMPORTED_MODULE_5__["SignalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_less__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatComponent);



/***/ }),

/***/ "xCwG":
/*!****************************************************************************************!*\
  !*** ./src/app/features/customer/components/customer-body/modules/chat/chat.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-routing.module */ "G/zs");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "v+h0");





let ChatModule = class ChatModule {
};
ChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChatRoutingModule"]
        ]
    })
], ChatModule);



/***/ })

}]);
//# sourceMappingURL=components-customer-body-modules-chat-chat-module-es2015.js.map