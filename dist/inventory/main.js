(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar ie-nav\" [containerInside]=\"false\">\n  <logo>\n      <a class=\"logo navbar-brand\" href=\"#\"><strong>Inventory Management</strong></a>\n  </logo>\n  <links>\n      <ul class=\"navbar-nav mr-auto color bg-faded\">\n        <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"  mdbWavesEffect>\n            <a class=\"nav-link\" routerLink=\"product\" >Product</a>\n        </li>\n        <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\n            <a class=\"nav-link\"routerLink=\"updateproduct\">Update Product</a>\n        </li>\n        <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\n            <a class=\"nav-link\"routerLink=\"viewcustomerorder\" >View Customer</a>\n        </li>\n        <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\n            <a class=\"nav-link\"routerLink=\"stockproduct\">Stock Products</a>\n        </li>\n        <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\" mdbWavesEffect>\n            <a class=\"nav-link\"routerLink=\"transferowner\" >Transfer Ownership</a>\n        </li>\n        <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"mdbWavesEffect>\n            <a class=\"nav-link\"routerLink=\"withdraw\" >Withdraw</a>\n        </li>\n      </ul>\n      <ul style=\"float:right;list-style:none; \" class=\"navbar-nav\">\n          <li style=\"color:aliceblue\">Balance:<span>{{balance}}</span></li>\n      </ul>\n     \n  </links>\n</mdb-navbar>  \n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.wcs.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.wcs.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            alert('Address Change Detected Please Refresh Page');
                            window.location.reload();
                            // meta.router.navigate(['admin']);
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.wcs.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.wcs.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
        if (this.id2) {
            clearInterval(this.id2);
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../updateproduct/updateproduct.component */ "./src/app/updateproduct/updateproduct.component.ts");
/* harmony import */ var _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stockproduct/stockproduct.component */ "./src/app/stockproduct/stockproduct.component.ts");
/* harmony import */ var _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../viewcus-order/viewcus-order.component */ "./src/app/viewcus-order/viewcus-order.component.ts");
/* harmony import */ var _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transferownership/transferownership.component */ "./src/app/transferownership/transferownership.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customerpurchase/customerpurchase.component */ "./src/app/customerpurchase/customerpurchase.component.ts");
/* harmony import */ var _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cancelorder/cancelorder.component */ "./src/app/cancelorder/cancelorder.component.ts");
/* harmony import */ var _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../metamask/metamask.component */ "./src/app/metamask/metamask.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cutomer-guard/customer.guard */ "./src/app/cutomer-guard/customer.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]],
        children: [
            {
                path: 'product',
                component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]
            },
            {
                path: 'updateproduct',
                component: _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_5__["UpdateproductComponent"]
            },
            {
                path: 'viewcustomerorder',
                component: _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_7__["ViewcusOrderComponent"]
            },
            {
                path: 'stockproduct',
                component: _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_6__["StockproductComponent"]
            },
            {
                path: 'transferowner',
                component: _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_8__["TransferownershipComponent"]
            },
            {
                path: 'withdraw',
                component: _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_9__["WithdrawComponent"]
            },
        ]
    },
    {
        path: 'customer',
        component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"],
        canActivate: [_cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_14__["CustomerGuard"]],
        children: [
            {
                path: 'customerpurchase',
                component: _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_10__["CustomerpurchaseComponent"]
            },
            {
                path: 'cancelorder',
                component: _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_11__["CancelorderComponent"]
            },
        ]
    },
    {
        path: "metamask",
        component: _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_12__["MetamaskComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin></app-admin>\n<app-customer></app-customer>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./updateproduct/updateproduct.component */ "./src/app/updateproduct/updateproduct.component.ts");
/* harmony import */ var _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stockproduct/stockproduct.component */ "./src/app/stockproduct/stockproduct.component.ts");
/* harmony import */ var _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewcus-order/viewcus-order.component */ "./src/app/viewcus-order/viewcus-order.component.ts");
/* harmony import */ var _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transferownership/transferownership.component */ "./src/app/transferownership/transferownership.component.ts");
/* harmony import */ var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./withdraw/withdraw.component */ "./src/app/withdraw/withdraw.component.ts");
/* harmony import */ var _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customerpurchase/customerpurchase.component */ "./src/app/customerpurchase/customerpurchase.component.ts");
/* harmony import */ var _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cancelorder/cancelorder.component */ "./src/app/cancelorder/cancelorder.component.ts");
/* harmony import */ var _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./metamask/metamask.component */ "./src/app/metamask/metamask.component.ts");
/* harmony import */ var _authguard_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authguard.guard */ "./src/app/authguard.guard.ts");
/* harmony import */ var _cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cutomer-guard/customer.guard */ "./src/app/cutomer-guard/customer.guard.ts");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/web3services.service */ "./src/app/services/web3services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _updateproduct_updateproduct_component__WEBPACK_IMPORTED_MODULE_10__["UpdateproductComponent"],
                _stockproduct_stockproduct_component__WEBPACK_IMPORTED_MODULE_11__["StockproductComponent"],
                _viewcus_order_viewcus_order_component__WEBPACK_IMPORTED_MODULE_12__["ViewcusOrderComponent"],
                _transferownership_transferownership_component__WEBPACK_IMPORTED_MODULE_13__["TransferownershipComponent"],
                _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"],
                _customerpurchase_customerpurchase_component__WEBPACK_IMPORTED_MODULE_15__["CustomerpurchaseComponent"],
                _cancelorder_cancelorder_component__WEBPACK_IMPORTED_MODULE_16__["CancelorderComponent"],
                _metamask_metamask_component__WEBPACK_IMPORTED_MODULE_17__["MetamaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot()
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_authguard_guard__WEBPACK_IMPORTED_MODULE_18__["AuthguardGuard"], _cutomer_guard_customer_guard__WEBPACK_IMPORTED_MODULE_19__["CustomerGuard"], _services_web3services_service__WEBPACK_IMPORTED_MODULE_20__["Web3servicesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authguard.guard.ts":
/*!************************************!*\
  !*** ./src/app/authguard.guard.ts ***!
  \************************************/
/*! exports provided: AuthguardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function() { return AuthguardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/web3services.service */ "./src/app/services/web3services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthguardGuard = /** @class */ (function () {
    function AuthguardGuard(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    AuthguardGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.wcs.check_admin().then(function (admin) {
            console.log(admin);
            if (admin != true) {
                // console.log("if part");
                _this.router.navigate(['customer']);
                return false;
            }
            else {
                return true;
            }
        });
    };
    AuthguardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_2__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthguardGuard);
    return AuthguardGuard;
}());



/***/ }),

/***/ "./src/app/cancelorder/cancelorder.component.html":
/*!********************************************************!*\
  !*** ./src/app/cancelorder/cancelorder.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n      <div class=\"row col text-center\">\n\n\n          <div class=\"col-sm-12\" >\n              <div>\n                  <h5>ORDER DETAILS</h5>\n                  <h5 style=\"color:blue;\">(Cancel Within One Hour)</h5>\n                  <br>\n              </div>\n\n\n\n<div class=\"ScrollStyle\">\n    <!--Table-->\n<table class=\"table\">\n\n    <!--Table head-->\n    <thead class=\"mdb-color darken-3\">\n        <tr class=\"text-white\">\n            \n          <tr class=\"text-white\">\n              <th>Order Id</th>\n              <th>Product Id</th>\n              <th>Customer Id</th>\n              <th>ProductName</th>\n              <th> Quantity</th>\n              <th>Price</th>\n              <th>Date</th>\n              <th>Action</th>\n          </tr>\n      </thead>\n      <!--Table head-->\n  \n      <!--Table body-->\n      <tbody>\n          <tr *ngFor=\"let order of list;\" >\n              <td >{{order.oid}}</td>\n              <td >{{order.pid}}</td>\n              <td >{{order.cusid}} </td>\n              <td >{{order.pname}} </td>\n              <td>{{order.quantity}}</td>\n              <td>{{order.price}}</td>\n              <td>{{order.dateVal | date:'d/M/y'}}</td>\n             <td><button type=\"submit\" id=\"cancel\" (click)=\"cancel(order.oid,order.pid);\" class=\"btn btn-default\">cancel</button></td>\n          </tr>   \n      </tbody>\n    <!--Table body-->\n  </table>\n  </div>\n\n<!--Table-->\n\n          </div>\n        </div>\n      </div>\n\n</main>\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  loadingText=\"Loading...\"\n  type=\"ball-scale-multiple\"></ngx-spinner>\n "

/***/ }),

/***/ "./src/app/cancelorder/cancelorder.component.scss":
/*!********************************************************!*\
  !*** ./src/app/cancelorder/cancelorder.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cancelorder/cancelorder.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cancelorder/cancelorder.component.ts ***!
  \******************************************************/
/*! exports provided: CancelorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelorderComponent", function() { return CancelorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CancelorderComponent = /** @class */ (function () {
    function CancelorderComponent(pro, router, spinner) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.list = [];
    }
    CancelorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getCustomerCount().then(function (order) {
            order.forEach(function (element) {
                _this.pro.ViewCustomer(element).then(function (obj) {
                    var t = (parseInt((Date.now() / 1000).toString()));
                    var x = obj[9] + (3600);
                    if (obj[3] != "" && obj[8] == 1 && obj[2] == _this.pro.account && (t - obj[9].toNumber() <= 3600)) {
                        _this.list.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "quantity": obj[5], "price": obj[6], "dateVal": obj[7] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            /// alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    CancelorderComponent.prototype.cancel = function (a, b) {
        var _this = this;
        var meta = this;
        this.spinner.show();
        this.pro.cancel(a, b).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("operation rejected");
                window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(result);
                    window.location.reload();
                });
            }
        });
    };
    CancelorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancelorder',
            template: __webpack_require__(/*! ./cancelorder.component.html */ "./src/app/cancelorder/cancelorder.component.html"),
            styles: [__webpack_require__(/*! ./cancelorder.component.scss */ "./src/app/cancelorder/cancelorder.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], CancelorderComponent);
    return CancelorderComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar ie-nav\" [containerInside]=\"false\">\n  <logo>\n      <a class=\"logo navbar-brand\" href=\"#\"><strong>Inventory Management</strong></a>\n  </logo>\n  <links>\n      <ul class=\"navbar-nav mr-auto\">\n          \n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"  mdbWavesEffect>\n              <a class=\"nav-link\" routerLink=\"customerpurchase\">Customer Purchase</a>\n          </li>\n          <li class=\"nav-item waves-light\" [routerLinkActive]=\"['active']\"  mdbWavesEffect>\n              <a class=\"nav-link\"routerLink=\"cancelorder\">Cancel Order</a>\n          </li>\n          \n      </ul>\n      <ul class=\"navbar-nav\">\n        <li>Customer</li>\n      </ul>\n  </links>\n</mdb-navbar>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/customer/customer.component.scss":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(pro, router) {
        this.pro = pro;
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.scss */ "./src/app/customer/customer.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customerpurchase/customerpurchase.component.html":
/*!******************************************************************!*\
  !*** ./src/app/customerpurchase/customerpurchase.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n      <div class=\"row\">\n          <div class=\"col-sm-4\" >\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\n                <div>\n                 <h5>Customer Purchase Form</h5>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" for=\"productid\">ProductID<font color=\"red\">*</font></label>\n                  <div class=\"col-sm-4\">\n                    <input type=\"number\" class=\"form-control\" name=\"productid\" [(ngModel)]=\"productid\" formControlName=\"productid\"  (mouseout)=\"check()\" >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"quantity\">Quantity<font color=\"red\">*</font></label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"quantity\" [(ngModel)]=\"quantity\" formControlName=\"quantity\" (mouseout)=\"quantitycheckOut()\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"price\">Price<font color=\"red\">*</font></label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"price\" [(ngModel)]=\"price\"  [value]=\"price\"formControlName=\"price\" (mouseenter)=\"onKey($event);\" readonly >\n                    </div>\n                  </div>\n\n\n                <div class=\"form-group\">\n                  <div class=\"col-sm-offset-2 col-sm-10\">\n                      <div *ngIf=\"angForm.controls['productid'].valid \">\n                        <div *ngIf=\"angForm.controls['quantity'].valid \">\n                          <div *ngIf=\"angForm.controls['price'].valid \">\n                              <button type=\"submit\" (click)=\"order();\" class=\"btn btn-default\">ORDER</button>\n                          </div>\n                        </div>\n\n                      </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n          <div class=\"col-sm-8\" >\n              <div>\n                  <h5> Product Details</h5>\n              </div>\n\n\n\n              <div class=\"ScrollStyle\">\n<!--Table-->\n<table class=\"table\">\n\n  <!--Table head-->\n  <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n         \n        <th>Product Id</th>\n        <th>Product Name</th>\n        <th>Product Brand</th>\n        <th>Product Quantity</th>\n        <th>Product Price</th>\n        <th>Date</th>\n\n      </tr>\n  </thead>\n  <!--Table head-->\n\n  <!--Table body-->\n  <tbody>\n    <tr *ngFor=\"let product of details;\">\n        <td >{{product.pid}}</td>\n        <td >{{product.pname}} </td>\n        <td>{{product.brand}}</td>\n        <td>{{product.quantity}}</td>\n        <td>{{product.price}}</td>\n        <td>{{product.dateVal | date:'d/M/y'}}</td>\n    </tr>\n  </tbody>\n  <!--Table body-->\n</table>\n<!--Table-->\n</div><br><br><br><br>\n\n\n    <div>\n        <h5>Order Details</h5>\n    </div>\n    <div class=\"ScrollStyle\">\n<table class=\"table\">\n\n  <!--Table head-->\n  <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n          \n        <tr class=\"text-white\">\n            <th>Order Id</th>\n            <th>Customer Id</th>\n            <th>Product Id</th>\n            <th>ProductName</th>\n            <th> Quantity</th>\n            <th>Price</th>\n            <th>Date</th>\n        </tr>\n    </thead>\n    <!--Table head-->\n\n    <!--Table body-->\n    <tbody>\n        <tr *ngFor=\"let order of list;\">\n            <td >{{order.oid}}</td>\n            <td >{{order.cusid}}</td>\n            <td >{{order.pid}} </td>\n            <td >{{order.pname}} </td>\n            <td>{{order.quantity}}</td>\n            <td>{{order.price}}</td>\n            <td>{{order.dateVal | date:'d/M/y'}}</td>\n        </tr>   \n    </tbody>\n  <!--Table body-->\n</table>\n</div>\n       </div>\n        </div>\n      </div>\n\n</main>\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  loadingText=\"Loading...\"\n  type=\"ball-scale-multiple\"></ngx-spinner>"

/***/ }),

/***/ "./src/app/customerpurchase/customerpurchase.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/customerpurchase/customerpurchase.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ScrollStyle {\n  max-height: 260px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/customerpurchase/customerpurchase.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customerpurchase/customerpurchase.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerpurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerpurchaseComponent", function() { return CustomerpurchaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomerpurchaseComponent = /** @class */ (function () {
    function CustomerpurchaseComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.details = [];
        this.list = [];
        this.createForm();
    }
    CustomerpurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getproductCount().then(function (product) {
            product.forEach(function (element) {
                console.log(element);
                _this.pro.ViewProduct(element).then(function (obj) {
                    console.log(obj);
                    if (obj[1] != "") {
                        obj[4] = obj[4] / 100;
                        _this.details.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": obj[4], "dateVal": obj[5] });
                    }
                });
            });
        });
        this.pro.getCustomerCount().then(function (order) {
            order.forEach(function (element) {
                _this.pro.ViewCustomer(element).then(function (obj) {
                    if (obj[3] != "" && obj[2] == _this.pro.account && obj[8] == 1) {
                        // obj[6]=obj[6]/100;
                        _this.list.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "quantity": obj[5], "price": obj[6], "dateVal": obj[7] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_6__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    CustomerpurchaseComponent.prototype.onKey = function (e) {
        var _this = this;
        this.pro.ViewProduct1(this.productid).then(function (res) {
            _this.price = (res[4] / 100) * _this.quantity;
            console.log(_this.price);
        });
    };
    CustomerpurchaseComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            productid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    CustomerpurchaseComponent.prototype.check = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Invalid Product id");
            }
        });
    };
    CustomerpurchaseComponent.prototype.check1 = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
            }
        });
    };
    //  checkOut(){
    //    this.pro.ViewProduct(this.productid).then(res=>{
    //          if(res[0]== this.productid && res[4]!=0){
    //            //swal("valid");
    //          }
    //          else{
    //             swal("Invalid Product Id");
    //          }
    //    })
    // }
    CustomerpurchaseComponent.prototype.quantitycheckOut = function () {
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[3] != 0) {
                //s swal("valid");
            }
            else {
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Out Of Stock");
            }
        });
    };
    CustomerpurchaseComponent.prototype.order = function () {
        var _this = this;
        var meta = this;
        meta.spinner.show();
        meta.pro.order(this.productid, this.quantity, this.price).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("operation rejected");
                _this.productid = "";
                _this.quantity = "";
                _this.price = "";
                window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()(result);
                    _this.productid = "";
                    _this.quantity = "";
                    _this.price = "";
                    window.location.reload();
                });
            }
        });
    };
    CustomerpurchaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerpurchase',
            template: __webpack_require__(/*! ./customerpurchase.component.html */ "./src/app/customerpurchase/customerpurchase.component.html"),
            styles: [__webpack_require__(/*! ./customerpurchase.component.scss */ "./src/app/customerpurchase/customerpurchase.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_2__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomerpurchaseComponent);
    return CustomerpurchaseComponent;
}());



/***/ }),

/***/ "./src/app/cutomer-guard/customer.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/cutomer-guard/customer.guard.ts ***!
  \*************************************************/
/*! exports provided: CustomerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerGuard", function() { return CustomerGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerGuard = /** @class */ (function () {
    function CustomerGuard(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    CustomerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.wcs.check_admin().then(function (admin) {
            console.log(admin);
            if (admin != false) {
                console.log("if part");
                _this.router.navigate(['admin']);
                return false;
            }
            else {
                console.log("else part");
                //this.router.navigate(['admin']);
                return true;
            }
        });
    };
    CustomerGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_2__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerGuard);
    return CustomerGuard;
}());



/***/ }),

/***/ "./src/app/inventory.json":
/*!********************************!*\
  !*** ./src/app/inventory.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ORDER","outputs":[{"name":"id2","type":"uint256"},{"name":"id1","type":"uint256"},{"name":"cid","type":"address"},{"name":"name","type":"string"},{"name":"brand","type":"string"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"},{"name":"time","type":"uint256"},{"name":"status","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"brand","type":"string"},{"name":"quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"p_details","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"oid","type":"uint256"},{"name":"id","type":"uint256"}],"name":"ordercancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"PROD","outputs":[{"name":"pid","type":"uint256"},{"name":"pname","type":"string"},{"name":"pbrand","type":"string"},{"name":"pquantity","type":"uint256"},{"name":"pprice","type":"uint256"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"pquantity","type":"uint256"}],"name":"order","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getbalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ordercount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"},{"name":"_quantity","type":"uint256"},{"name":"price","type":"uint256"}],"name":"update_product","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"viewproduct","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"UPDATE","outputs":[{"name":"ipid","type":"uint256"},{"name":"iquantity","type":"uint256"},{"name":"iprice","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"view1","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"productCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newowner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor"}];

/***/ }),

/***/ "./src/app/metamask/metamask.component.html":
/*!**************************************************!*\
  !*** ./src/app/metamask/metamask.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\t<head>\n\t\t<title>Ethereum Account Connectivity Error Page</title>\n\t</head>\n\t<body>\n\t\t <img src=\"./assets/metamask_logo.png\"/> \n\t\t<!-- <center> -->\n\t\t\t<p>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<br>There was an error while fetching your account.\n\t\t\t\t<br>Make sure your Ethereum client is configured correctly\n\n\t\t\t\t<br>Tips:\n\t\t\t\t<br>Ensure you unlocked your MetaMask plugin.\n\t\t\t\t<br>If you don't have MetaMask plugin install here: \n\t\t\t\t<br><a href =\"https://metamask.io/ \">https://metamask.io/</a>\n\t\t\t</p>\n\t\t<!-- </center> -->\n\t</body>\n</html>"

/***/ }),

/***/ "./src/app/metamask/metamask.component.scss":
/*!**************************************************!*\
  !*** ./src/app/metamask/metamask.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/metamask/metamask.component.ts":
/*!************************************************!*\
  !*** ./src/app/metamask/metamask.component.ts ***!
  \************************************************/
/*! exports provided: MetamaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetamaskComponent", function() { return MetamaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetamaskComponent = /** @class */ (function () {
    function MetamaskComponent(wcs, router) {
        this.wcs = wcs;
        this.router = router;
    }
    MetamaskComponent.prototype.ngOnInit = function () {
        var meta = this;
        this.id1 = setInterval(function () {
            if (typeof window.web3 !== 'undefined') {
                meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                if (meta._web3.eth.accounts[0] !== undefined) {
                    meta.router.navigate(['metamask']);
                }
                if (meta._web3.eth.accounts != meta._web3.eth.accounts[0]) {
                    meta.router.navigate(['']);
                }
            }
        }, 200);
    };
    MetamaskComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    MetamaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metamask',
            template: __webpack_require__(/*! ./metamask.component.html */ "./src/app/metamask/metamask.component.html"),
            styles: [__webpack_require__(/*! ./metamask.component.scss */ "./src/app/metamask/metamask.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MetamaskComponent);
    return MetamaskComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n          <div class>\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\n                <div>\n                 <h3>Add Product Form</h3>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" for=\"productname\">Name<font color=\"red\">*</font></label>\n                  <div class=\"col-sm-4\">\n                    <input  class=\"form-control\" onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))' name=\"productname\" [(ngModel)]=\"productname\" formControlName=\"productname\" placeholder=\"Enter Product Name\" >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" for=\"brand\">Brand<font color=\"red\">*</font></label>\n                  <div class=\"col-sm-4\">\n                    <input class=\"form-control\" name=\"brand\" [(ngModel)]=\"brand\"  formControlName=\"brand\" placeholder=\"Enter Brand Name\" >\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"quantity\">Quantity<font color=\"red\">*</font></label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"quantity\" [(ngModel)]=\"quantity\" [value]=\"quantity\" formControlName=\"quantity\" placeholder=\"Enter Quantity\" required>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"amount\">Amount<font color=\"red\">*</font></label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"number\" class=\"form-control\" min=\"1\" name=\"amount\"  [(ngModel)]=\"amount\" [value]=\"amount\" formControlName=\"amount\" placeholder=\"Enter  Amount\" required>\n                    </div>\n                  </div>\n\n                \n                <div class=\"form-group\">\n                  <div class=\"col-sm-offset-2 col-sm-10\">\n                      <div *ngIf=\"angForm.controls['productname'].valid \">\n                        <div *ngIf=\"angForm.controls['brand'].valid\"> \n                          <div *ngIf=\"angForm.controls['quantity'].valid\"> \n                            <div *ngIf=\"angForm.controls['amount'].valid\">\n                              <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-default\">ADD</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n      </div>\n\n</main>\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\nloadingText=\"Loading ...\"\ntype=\"ball-scale-multiple\"></ngx-spinner>\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(web3Service, router, spinner, fb) {
        this.web3Service = web3Service;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.createForm();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.web3Service.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.web3Service.getAccount().then(function (acc) {
            _this.account = acc;
            console.log(_this.account);
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.web3Service.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.web3Service.getAccount().then(function (account) { return _this.balance = account; });
        }, 20000);
    };
    ProductComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            productname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductComponent.prototype.submit = function () {
        var _this = this;
        var meta = this;
        meta.spinner.show();
        this.amount = this.amount * 100;
        meta.web3Service.Product(this.productname, this.brand, this.quantity, this.amount).then(function (res) {
            // console.log(res);
            if (res == 0) {
                _this.spinner.hide();
                swal("operation rejected");
                _this.productname = "";
                _this.quantity = "";
                _this.brand = "";
                _this.amount = "";
            }
            else {
                meta.web3Service.hash(res).then(function (result) {
                    _this.spinner.hide();
                    swal(result);
                    _this.productname = "";
                    _this.quantity = "";
                    _this.brand = "";
                    _this.amount = "";
                });
            }
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/services/web3services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/web3services.service.ts ***!
  \**************************************************/
/*! exports provided: Web3servicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3servicesService", function() { return Web3servicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var inventoryabi = __webpack_require__(/*! ../inventory.json */ "./src/app/inventory.json");
var Web3servicesService = /** @class */ (function () {
    function Web3servicesService() {
        this._account = null;
        this._tokenContractAddress = "0x3f2089cd5b7518768e84cc198bcdc8aa162b8cab";
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
        }
        else {
            console.warn("Please use a dapp browser like mist or MetaMask plugin for chrome");
        }
        this._web3.version.getNetwork(function (err, netId) {
            switch (netId) {
                case "1":
                    console.log('This is mainnet');
                    break;
                case "2":
                    console.log('This is deprecated Morden test network');
                    break;
                case "3":
                    console.log('This is ropsten test network');
                    break;
                case "4":
                    console.log('This is the Rinkeby test network');
                case "42":
                    console.log('This is the kovan test network');
                    break;
                default:
                    console.log('This is an unknown network.');
            }
        });
        this._tokenContract = this._web3.eth.contract(inventoryabi).at(this._tokenContractAddress);
    }
    //getAccount details
    Web3servicesService.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._account == null)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this._web3.eth.getAccounts(function (err, accs) {
                                    if (err != null) {
                                        alert('There was an error fetching your accounts.');
                                        return;
                                    }
                                    if (accs.length === 0) {
                                        alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                                        return;
                                    }
                                    resolve(accs[0]);
                                    _this.account = accs[0];
                                });
                            })];
                    case 1:
                        _a._account = (_b.sent());
                        this._web3.eth.defaultAccount = this._account;
                        _b.label = 2;
                    case 2: return [2 /*return*/, Promise.resolve(this._account)];
                }
            });
        });
    };
    //getBalance
    Web3servicesService.prototype.getUserBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.getbalance.call(function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                        resolve(0);
                                    }
                                    resolve(_web3.fromWei(result));
                                });
                            })];
                }
            });
        });
    };
    //Add Product
    Web3servicesService.prototype.Product = function (a, b, c, d) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.p_details(a, b, c, d, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve((result));
                                });
                            })];
                }
            });
        });
    };
    //getProductCount
    Web3servicesService.prototype.getproductCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.productCount({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    var arr = [];
                                    for (var i = 0; i <= result.toNumber(); i++) {
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    //Viewproduct
    Web3servicesService.prototype.ViewProduct = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.viewproduct.call(pid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    //  result[0] = result[0].toNumber();
                                    var t = new Date(result[5] * 1000);
                                    result[5] = t;
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    Web3servicesService.prototype.ViewProduct1 = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.viewproduct.call(pid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    result[4] = result[4].toNumber();
                                    var t = new Date(result[5] * 1000);
                                    result[5] = t;
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //updateproduct
    Web3servicesService.prototype.update_product = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.update_product(a, b, c, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    else
                                        resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //getCustomerCount
    Web3servicesService.prototype.getCustomerCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ordercount({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    var arr = [];
                                    for (var i = 0; i <= result.toNumber(); i++) {
                                        arr.push(i);
                                    }
                                    resolve(arr);
                                });
                            })];
                }
            });
        });
    };
    //viewcustomer
    Web3servicesService.prototype.ViewCustomer = function (oid) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ORDER.call(oid, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    result[9] = result[7];
                                    result[6] = _web3.fromWei(result[6], "ether");
                                    var t = new Date(result[7] * 1000);
                                    result[7] = t;
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //transferOwnership
    Web3servicesService.prototype.TransferownerShip = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.transferOwnership(address, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //Withdraw
    Web3servicesService.prototype.WithDraw = function (amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.withdraw(_web3.toWei(amount), { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //order
    Web3servicesService.prototype.order = function (a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.order(a, b, { from: account, value: _web3.toWei(c, "ether"), gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log(err);
                                        resolve(0);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //cancelorder
    Web3servicesService.prototype.cancel = function (a, b) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccount()];
                    case 1:
                        account = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var _web3 = _this._web3;
                                _this._tokenContract.ordercancel(a, b, { from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        reject(err);
                                    }
                                    resolve(result);
                                });
                            })];
                }
            });
        });
    };
    //checking admin
    Web3servicesService.prototype.check_admin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var account, accounts, meta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        account = '';
                        return [4 /*yield*/, this.getAccount()];
                    case 1:
                        accounts = _a.sent();
                        meta = this;
                        //let key_admin:boolean =false;
                        return [4 /*yield*/, this.getAccount().then(function (address) { return _this.account = address; })];
                    case 2:
                        //let key_admin:boolean =false;
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this._tokenContract.owner({ from: account, gas: 600000 }, function (err, result) {
                                    if (err != null) {
                                        console.log("error");
                                        reject(err);
                                    }
                                    else {
                                        if (result === accounts) {
                                            //key_admin = true;
                                            console.log("if works");
                                        }
                                    }
                                    //console.log(key_admin);
                                    //console.log(this.address);
                                    console.log("testing", result == accounts);
                                    console.log(accounts);
                                    //console.log(this.account);
                                    resolve(result == accounts);
                                });
                            })];
                }
            });
        });
    };
    //hash function
    Web3servicesService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    reject(err);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        resolve("Success");
                                    }
                                    else {
                                        resolve("Transaction Failed");
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    Web3servicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Web3servicesService);
    return Web3servicesService;
}());



/***/ }),

/***/ "./src/app/stockproduct/stockproduct.component.html":
/*!**********************************************************!*\
  !*** ./src/app/stockproduct/stockproduct.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n      <div class=\"row col text-center\">\n\n\n          <div class=\"col-sm-12\" >\n              <div>\n                  <h5>Stock Details</h5>\n                  <br>\n              </div>\n\n\n\n<div class=\"ScrollStyle\">\n<!--Table-->\n<table class=\"table\">\n\n  <!--Table head-->\n  <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n\n\n          <th >Product Id</th>\n          <th>Product Name</th>\n          <th>Product Brand</th>\n          <th>Product Quantity</th>\n          <th>Product Price</th>\n          <th>Date</th>\n\n      </tr>\n  </thead>\n  <!--Table head-->\n\n  <!--Table body-->\n  <tbody>\n      <tr *ngFor=\"let product of details;\">\n          <td >{{product.pid}}</td>\n          <td >{{product.pname}} </td>\n          <td>{{product.brand}}</td>\n          <td>{{product.quantity}}</td>\n          <td>{{product.price}}</td>\n          <td>{{product.dateVal | date: 'd/M/y' }}</td>\n      </tr>\n  </tbody>\n  <!--Table body-->\n</table>\n</div>\n<!--Table-->\n\n          </div>\n        </div>\n      </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/stockproduct/stockproduct.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/stockproduct/stockproduct.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ScrollStyle {\n  max-height: 700px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/stockproduct/stockproduct.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stockproduct/stockproduct.component.ts ***!
  \********************************************************/
/*! exports provided: StockproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockproductComponent", function() { return StockproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockproductComponent = /** @class */ (function () {
    function StockproductComponent(pro, router) {
        this.pro = pro;
        this.router = router;
        this.details = [];
    }
    StockproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getproductCount().then(function (product) {
            product.forEach(function (element) {
                console.log(element);
                _this.pro.ViewProduct(element).then(function (obj) {
                    console.log(obj);
                    if (obj[1] != "") {
                        obj[4] = obj[4] / 100;
                        _this.details.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": obj[4], "dateVal": obj[5] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    StockproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stockproduct',
            template: __webpack_require__(/*! ./stockproduct.component.html */ "./src/app/stockproduct/stockproduct.component.html"),
            styles: [__webpack_require__(/*! ./stockproduct.component.scss */ "./src/app/stockproduct/stockproduct.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockproductComponent);
    return StockproductComponent;
}());



/***/ }),

/***/ "./src/app/transferownership/transferownership.component.html":
/*!********************************************************************!*\
  !*** ./src/app/transferownership/transferownership.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n          <div class>\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\n                <div>\n                 <h4>Transfer Ownership</h4>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" for=\"address\">Address<font color=\"red\">*</font></label>\n                  <div class=\"col-sm-4\">\n                    <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"address\" formControlName=\"address\" placeholder=\"Enter Address\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <div class=\"col-sm-offset-2 col-sm-10\">\n                    <div *ngIf=\"angForm.controls['address'].valid \">\n                      <button type=\"submit\" (click)=\"transfer();\" class=\"btn btn-default\">Submit</button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n      </div>\n\n</main>\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\nloadingText=\"Loading...\"\ntype=\"ball-scale-multiple\"></ngx-spinner>"

/***/ }),

/***/ "./src/app/transferownership/transferownership.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/transferownership/transferownership.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transferownership/transferownership.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/transferownership/transferownership.component.ts ***!
  \******************************************************************/
/*! exports provided: TransferownershipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferownershipComponent", function() { return TransferownershipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransferownershipComponent = /** @class */ (function () {
    function TransferownershipComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.createForm();
    }
    TransferownershipComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_6__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    TransferownershipComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    TransferownershipComponent.prototype.transfer = function () {
        var _this = this;
        var meta = this;
        console.log(this.address);
        meta.spinner.show();
        meta.pro.TransferownerShip(this.address).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("operation rejected");
                _this.address = "";
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_4___default()(result);
                    _this.address = "";
                    window.location.reload();
                });
            }
        });
    };
    TransferownershipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transferownership',
            template: __webpack_require__(/*! ./transferownership.component.html */ "./src/app/transferownership/transferownership.component.html"),
            styles: [__webpack_require__(/*! ./transferownership.component.scss */ "./src/app/transferownership/transferownership.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], TransferownershipComponent);
    return TransferownershipComponent;
}());



/***/ }),

/***/ "./src/app/updateproduct/updateproduct.component.html":
/*!************************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n      <div class=\"row\">\n          <div class=\"col-sm-4\" >\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate >\n                <div>\n                 <h5>Update Product Form</h5>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" for=\"productid\">ProductId<font color=\"red\">*</font></label>\n                  <div class=\"col-sm-4\">\n                    <input type=\"number\" class=\"form-control\" min=\"0\" name=\"productid\" [(ngModel)]=\"productid\"  formControlName=\"productid\" [value]=\"productid\"  (focus)=\"check()\" (focusout)=\"checkOut()\" placeholder=\"Enter Product Id\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"quantity\">Quantity<font color=\"red\">*</font></label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"quantity\" [(ngModel)]=\"quantity\" formControlName=\"quantity\" [value]=\"quantity\"  placeholder=\"Enter Quantity\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2\" for=\"price\">Price<font color=\"red\">*</font></label>\n                    <div class=\"col-sm-4\">\n                      <input type=\"number\" class=\"form-control\" min=\"0\" name=\"price\" [(ngModel)]=\"price\" formControlName=\"price\" [value]=\"price\" placeholder=\"Enter  Price\">\n                    </div>\n                  </div>\n\n\n                <div class=\"form-group\">\n                  <div class=\"col-sm-offset-2 col-sm-10\">\n                     <div *ngIf=\"angForm.controls['productid'].valid\" >\n                          <div *ngIf=\"angForm.controls['quantity'].valid\"> \n                              <div *ngIf=\"angForm.controls['price'].valid\">\n                                  <button type=\"submit\" (click)=\"Product();\" class=\"btn btn-default\">Update</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n          <div class=\"col-sm-6\" >\n              <div>\n                  <h5>Out Of Stock Product Details</h5>\n              </div>\n\n\n<div class=\"ScrollStyle\">\n<!--Table-->\n<table class=\"table\">\n\n  <!--Table head-->\n  <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n         \n          <th>Product Id</th>\n          <th>ProductName</th>\n          <th>Brand </th>\n          <th>Quantity</th>\n          <th>Price</th>\n      </tr>\n  </thead>\n  <!--Table head-->\n\n  <!--Table body-->\n  <tbody>\n      <tr *ngFor=\"let update of details;\">\n          <td >{{update.pid}}</td>\n          <td >{{update.pname}}</td>\n          <td >{{update.brand}}</td>\n          <td>{{update.quantity}}</td>\n          <td>{{update.price}}</td>\n      </tr>\n  </tbody>\n  <!--Table body-->\n</table>\n<!--Table-->\n</div>\n          </div>\n        </div>\n      </div>\n\n</main>\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\nloadingText=\"Loading...\"\ntype=\"ball-scale-multiple\"></ngx-spinner>\n"

/***/ }),

/***/ "./src/app/updateproduct/updateproduct.component.scss":
/*!************************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ScrollStyle {\n  max-height: 250px;\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/updateproduct/updateproduct.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/updateproduct/updateproduct.component.ts ***!
  \**********************************************************/
/*! exports provided: UpdateproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateproductComponent", function() { return UpdateproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateproductComponent = /** @class */ (function () {
    function UpdateproductComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.details = [];
        this.id = [];
        this.createForm();
    }
    UpdateproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pro.getproductCount().then(function (product) {
            product.forEach(function (element) {
                // console.log(element);
                _this.pro.ViewProduct(element).then(function (obj) {
                    // console.log(obj);
                    if (obj[3] == 0 && obj[1] != "") {
                        obj[4] = obj[4] / 100;
                        _this.details.push({ "pid": obj[0], "pname": obj[1], "brand": obj[2], "quantity": obj[3], "price": obj[4] });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_5__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    UpdateproductComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            productid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    UpdateproductComponent.prototype.check = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
            }
        });
    };
    UpdateproductComponent.prototype.checkOut = function () {
        var _this = this;
        this.pro.ViewProduct(this.productid).then(function (res) {
            if (res[0] == _this.productid) {
                //swal("valid");
            }
            else {
                swal("Invalid Product Id ");
            }
        });
    };
    UpdateproductComponent.prototype.Product = function () {
        var _this = this;
        var meta = this;
        this.price = this.price * 100;
        meta.spinner.show();
        meta.pro.update_product(this.productid, this.quantity, this.price).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                swal("operation rejected");
                _this.productid = "";
                _this.quantity = "";
                _this.price = "";
                // window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    swal(result);
                    _this.productid = "";
                    _this.quantity = "";
                    _this.price = "";
                    // window.location.reload();           
                });
            }
        });
    };
    UpdateproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updateproduct',
            template: __webpack_require__(/*! ./updateproduct.component.html */ "./src/app/updateproduct/updateproduct.component.html"),
            styles: [__webpack_require__(/*! ./updateproduct.component.scss */ "./src/app/updateproduct/updateproduct.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UpdateproductComponent);
    return UpdateproductComponent;
}());



/***/ }),

/***/ "./src/app/viewcus-order/viewcus-order.component.html":
/*!************************************************************!*\
  !*** ./src/app/viewcus-order/viewcus-order.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n      <div class=\"row col text-center\">\n\n\n          <div class=\"col-sm-12\" >\n              <div>\n                  <h5>View Customer  Order Details</h5>\n                  <br>\n              </div>\n\n\n\n\n<!--Table-->\n<table class=\"table  \">\n\n  <!--Table head-->\n  <thead class=\"mdb-color darken-3\">\n      <tr class=\"text-white\">\n          <th>Order Id</th>\n          <th>Customer Id</th>\n          <th>Product Id</th>\n          <th>ProductName</th>\n          <th> Quantity</th>\n          <th>Price</th>\n          <th>Date</th>\n          <th>Status</th>\n      </tr>\n  </thead>\n  <!--Table head-->\n\n  <!--Table body-->\n  <tbody>\n      <tr *ngFor=\"let order of details;\">\n          <td >{{order.oid}}</td>\n          <td >{{order.cusid}}</td>\n          <td >{{order.pid}} </td>\n          <td >{{order.pname}} </td>\n          <td>{{order.quantity}}</td>\n          <td>{{order.price}}</td>\n          <td>{{order.dateVal | date:'d/M/y'}}</td>\n          <td>{{order.status}}</td>\n      </tr>   \n  </tbody>\n  <!--Table body-->\n</table>\n<!--Table-->\n\n\n          </div>\n        </div>\n      </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/viewcus-order/viewcus-order.component.scss":
/*!************************************************************!*\
  !*** ./src/app/viewcus-order/viewcus-order.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewcus-order/viewcus-order.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/viewcus-order/viewcus-order.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewcusOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcusOrderComponent", function() { return ViewcusOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewcusOrderComponent = /** @class */ (function () {
    function ViewcusOrderComponent(web3Service, router) {
        this.web3Service = web3Service;
        this.router = router;
        this.details = [];
    }
    ViewcusOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.web3Service.getCustomerCount().then(function (order) {
            order.forEach(function (element) {
                _this.web3Service.ViewCustomer(element).then(function (obj) {
                    if (obj[8] == 1) {
                        var a = "ORDERED";
                    }
                    else {
                        var a = "CANCELLED";
                    }
                    if (obj[3] != "") {
                        _this.details.push({ "oid": obj[0], "pid": obj[1], "cusid": obj[2], "pname": obj[3], "quantity": obj[5], "price": obj[6], "dateVal": obj[7], "status": a });
                    }
                });
            });
        });
        var meta = this;
        //  meta.alltablework();
        meta.web3Service.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.web3Service.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_3__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            // alert('Address Change Detected Please Refresh Page');
                            // window.location.reload();
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.web3Service.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.web3Service.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    ViewcusOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewcus-order',
            template: __webpack_require__(/*! ./viewcus-order.component.html */ "./src/app/viewcus-order/viewcus-order.component.html"),
            styles: [__webpack_require__(/*! ./viewcus-order.component.scss */ "./src/app/viewcus-order/viewcus-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewcusOrderComponent);
    return ViewcusOrderComponent;
}());



/***/ }),

/***/ "./src/app/withdraw/withdraw.component.html":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container-fluid\" style=\"margin-top: 70px; \">\n\n          <div class>\n              <form class=\"form-horizontal\" [formGroup]=\"angForm\" novalidate>\n                <div>\n                 <h5><b>Withdraw Ether In Your Account</b></h5>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"control-label col-sm-2\" for=\"amount\">Amount<font color=\"red\">*</font></label>\n                  <div class=\"col-sm-4\">\n                    <input type=\"number\" class=\"form-control\"  min=\"0\" name=\"amount\"  [(ngModel)]=\"amount\" formControlName=\"amount\"  placeholder=\"Enter Amount\">\n                  </div>\n                </div>\n\n\n                <div class=\"form-group\">\n                  <div class=\"col-sm-offset-2 col-sm-10\">\n                    <div *ngIf=\"angForm.controls['amount'].valid \">\n                      <button type=\"submit\" (click)=\"Withdraw()\" class=\"btn btn-default\">WithDraw</button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n          </div>\n      </div>\n\n</main>\n<ngx-spinner  bdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\nloadingText=\"Loading...\"\ntype=\"ball-scale-multiple\"></ngx-spinner>"

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.scss":
/*!**************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/withdraw/withdraw.component.ts":
/*!************************************************!*\
  !*** ./src/app/withdraw/withdraw.component.ts ***!
  \************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_web3services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/web3services.service */ "./src/app/services/web3services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(pro, router, spinner, fb) {
        this.pro = pro;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.createForm();
    }
    WithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        var meta = this;
        //  meta.alltablework();
        meta.pro.getUserBalance().then(function (balance) { return meta.balance = balance; });
        meta.pro.getAccount().then(function (acc) {
            _this.account = acc;
            meta.id1 = setInterval(function () {
                if (typeof window.web3 !== 'undefined') {
                    meta._web3 = new web3__WEBPACK_IMPORTED_MODULE_4__(window.web3.currentProvider);
                    if (meta._web3.eth.accounts[0] !== meta.account) {
                        meta.account = meta._web3.eth.accounts[0];
                        if (meta._web3.eth.accounts[0] === undefined) {
                            meta.router.navigate(['metamask']);
                            clearInterval(this.interval);
                        }
                        else {
                            //  alert('Address Change Detected Please Refresh Page');
                        }
                    }
                }
                else {
                    meta.router.navigate(['metamask']);
                }
            }, 200);
        });
        meta.id2 = setInterval(function () {
            var _this = this;
            meta.pro.getUserBalance().then(function (balance) { return _this.balance = balance; });
            meta.pro.getAccount().then(function (account) { return _this.balance = account; });
            //  meta.alltablework();
        }, 20000);
    };
    WithdrawComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    WithdrawComponent.prototype.Withdraw = function () {
        var _this = this;
        var meta = this;
        meta.spinner.show();
        console.log(this.balance);
        meta.pro.WithDraw(this.amount).then(function (res) {
            if (res == 0) {
                _this.spinner.hide();
                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("operation rejected");
                _this.amount = "";
                window.location.reload();
            }
            else {
                meta.pro.hash(res).then(function (result) {
                    _this.spinner.hide();
                    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()(result);
                    _this.amount = "";
                    // window.location.reload();           
                });
            }
        });
    };
    WithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.scss */ "./src/app/withdraw/withdraw.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_web3services_service__WEBPACK_IMPORTED_MODULE_1__["Web3servicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chainflux/Desktop/inventory/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map