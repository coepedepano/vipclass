(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\angular\vipclass\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "6b2W":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/navigation/not-found/not-found.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function b2W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.??fac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 6,
        vars: 0,
        consts: [[1, "container", "main-container"], [1, "col-lg-12", "text-center"], [1, "text-danger"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "404 - OOOPS! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "N\xE3o tem nada aqui :(");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "7K5l":
    /*!*********************************************************!*\
      !*** ./src/app/pages/navigation/menu/menu.component.ts ***!
      \*********************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function K5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../menu-action/menu-action.component */
      "8Aiv");

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent() {
          _classCallCheck(this, MenuComponent);

          this.isCollapsed = true;
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuComponent;
      }();

      MenuComponent.??fac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        decls: 9,
        vars: 1,
        consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "fixed-top", "border-bottom", "navBar", "border-warning"], [1, "container"], ["href", "/", 1, "navbar-brand"], ["src", "assets/img/logo_d.png", 2, "width", "80px", "height", "60px"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngbCollapse"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function MenuComponent_Template_button_click_5_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-menu-action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngbCollapse", ctx.isCollapsed);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_2__["MenuActionComponent"]],
        styles: [".navBar[_ngcontent-%COMP%] {\r\n   \r\n    background: linear-gradient(120deg,#2E1A2C,#2E1A2C);\r\n    color: #FFDE59;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtREFBbUQ7SUFDbkQsY0FBYztBQUNsQjs7QUFFQTs7Ozs7Ozs7Ozs7OztNQWFNIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZCYXIge1xyXG4gICBcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIzJFMUEyQywjMkUxQTJDKTtcclxuICAgIGNvbG9yOiAjRkZERTU5O1xyXG59IFxyXG5cclxuLyogLm5hdkJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCMyRTFBMkMsIzJFMUEyQyk7XHJcbiAgICBwYWRkaW5nLXRvcDogLjcxMjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogLjcxMjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAtMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiKDAgMCAwIC8gMjAlKTtcclxuICAgIGNvbG9yOiAjRkZERTU5O1xyXG4gIH0gICovIl19 */"]
      });
      /***/
    },

    /***/
    "7psr":
    /*!*******************************************************!*\
      !*** ./src/app/components/button/button.component.ts ***!
      \*******************************************************/

    /*! exports provided: ButtonComponent */

    /***/
    function psr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
        return ButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);

          this.disabled = false;
        }

        _createClass(ButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.??fac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ButtonComponent,
        selectors: [["app-button"]],
        inputs: {
          disabled: "disabled"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "8Aiv":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/navigation/menu-action/menu-action.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MenuActionComponent */

    /***/
    function Aiv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuActionComponent", function () {
        return MenuActionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var _c0 = function _c0() {
        return ["/product/create-item"];
      };

      var _c1 = function _c1() {
        return ["/connect"];
      };

      var _c2 = function _c2() {
        return ["/profile"];
      };

      var MenuActionComponent = /*#__PURE__*/function () {
        function MenuActionComponent() {
          _classCallCheck(this, MenuActionComponent);
        }

        _createClass(MenuActionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuActionComponent;
      }();

      MenuActionComponent.??fac = function MenuActionComponent_Factory(t) {
        return new (t || MenuActionComponent)();
      };

      MenuActionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: MenuActionComponent,
        selectors: [["app-menu-action"]],
        decls: 24,
        vars: 7,
        consts: [[1, "navbar-nav"], [1, "nav-item"], [1, "btn", "btn-outline-warning", "btn", "mr-2", 3, "routerLink"], [1, "btn", "btn-outline-secondary", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "icon-button with a menu", 3, "matMenuTriggerFor"], [1, "mat-menu-content"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", ""]],
        template: function MenuActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Add Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Connect Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-menu", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "manage_accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "view_list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "My itens");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](5, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: [".button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 60px;\r\n  }\r\n\r\n  .mat-menu-content[_ngcontent-%COMP%] {\r\n    padding-top: 30px;\r\n    padding-bottom: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibWVudS1hY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1tZW51LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "9Kf5":
    /*!*************************************************************!*\
      !*** ./src/app/pages/navigation/footer/footer.component.ts ***!
      \*************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function Kf5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.??fac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 5,
        vars: 0,
        consts: [[1, "border-top", "footer", "text-muted"], [1, "container", "text-center", 2, "color", "#FFDE59"], ["href", "https://coepedepano.io"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Copyright \xA9 2021 VIPclass - Develop by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "coepedepano.io");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrlv1: 'https://localhost:44374/api/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "IDqH":
    /*!*************************************************************!*\
      !*** ./src/app/components/user-card/user-card.component.ts ***!
      \*************************************************************/

    /*! exports provided: UserCardComponent */

    /***/
    function IDqH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCardComponent", function () {
        return UserCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserCardComponent = /*#__PURE__*/function () {
        function UserCardComponent() {
          _classCallCheck(this, UserCardComponent);
        }

        _createClass(UserCardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserCardComponent;
      }();

      UserCardComponent.??fac = function UserCardComponent_Factory(t) {
        return new (t || UserCardComponent)();
      };

      UserCardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserCardComponent,
        selectors: [["app-user-card"]],
        decls: 2,
        vars: 0,
        consts: [[1, "user-card"]],
        template: function UserCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".user-card[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    color: #fff;\r\n    font-size: 1.5em;\r\n    line-height: 1em;\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    border-radius: 80px;\r\n    border: 8px solid rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.user-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 0.8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InVzZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxufVxyXG5cclxuLnVzZXItY2FyZCBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXI6IDhweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbi51c2VyLWNhcmQgYSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "LMDr":
    /*!****************************************************!*\
      !*** ./src/app/pages/connect/connect.component.ts ***!
      \****************************************************/

    /*! exports provided: ConnectComponent */

    /***/
    function LMDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectComponent", function () {
        return ConnectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ConnectComponent = /*#__PURE__*/function () {
        function ConnectComponent() {
          _classCallCheck(this, ConnectComponent);
        }

        _createClass(ConnectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConnectComponent;
      }();

      ConnectComponent.??fac = function ConnectComponent_Factory(t) {
        return new (t || ConnectComponent)();
      };

      ConnectComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ConnectComponent,
        selectors: [["app-connect"]],
        decls: 63,
        vars: 0,
        consts: [[1, "py-5", "mb-4"], [1, "container"], [1, "text-muted"], [1, "container", "main-container", "container-fluid"], [1, "container-fluid"], [1, "row", "justify-content-around"], [1, "col-4", "col-sm-4"], [1, "figure"], ["href", "#"], ["src", "./assets/img/metamask-alternative.webp", 1, "figure-img", "img-fluid", "rounded", 2, "width", "60px", "height", "60px"], [1, "figure-caption", "wallet", 2, "font-weight", "700"], [1, "figure-caption", "wallet"], [1, "col-4"], ["src", "./assets/img/touros.svg", 1, "figure-img", "img-fluid", "rounded", 2, "width", "50px", "height", "50px"], ["src", "./assets/img/portis.svg", 1, "figure-img", "img-fluid", "rounded", 2, "width", "50px", "height", "50px"], [1, "w-100", "d-none", "d-md-block"], ["src", "./assets/img/coinbase.svg", 1, "figure-img", "img-fluid", "rounded", 2, "width", "50px", "height", "50px"], ["src", "./assets/img/fortmatic.svg", 1, "figure-img", "img-fluid", "rounded", 2, "width", "50px", "height", "50px"], ["src", "./assets/img/mywattervallet.svg", 1, "figure-img", "img-fluid", "rounded", 2, "width", "50px", "height", "50px"], [1, "container", "conteudo"], [1, "row"], [1, "col", "wallet"]],
        template: function ConnectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "You need an Ethereum wallet to use VIP class");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "figcaption", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " Metamask");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "figcaption", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " A browser extension with great flexibility. The web's most popular wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "figcaption", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Torus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "figcaption", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Log in with Google, Facebook, or other OAuth providers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "figcaption", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Portis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "figcaption", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " A cloud-hosted wallet accessible from any device with built-in fiat support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "figcaption", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Coinbase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "figcaption", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " A simple-to-use wallet that works on both mobile and through a browser extension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "figcaption", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Fortmatic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "figcaption", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " A user-friendly wallet that allows you to sign up with your phone number on any device");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "figure", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "figcaption", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " MyEtherWallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "figcaption", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Pair with Trust, Argent, MetaMask & more. Works from any browser, without an extension");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " We do not own your private keys and cannot access your funds without your confirmation. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".wallet[_ngcontent-%COMP%]{\r\n    color:#222;\r\n\r\n}\r\n\r\n.conteudo[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n    padding-bottom: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImNvbm5lY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YWxsZXR7XHJcbiAgICBjb2xvcjojMjIyO1xyXG5cclxufVxyXG5cclxuLmNvbnRldWRve1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pages_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/navigation/menu/menu.component */
      "7K5l");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_navigation_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/navigation/footer/footer.component */
      "9Kf5");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'front-end';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
          }
        },
        directives: [_pages_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _pages_navigation_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.??fac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 11,
        vars: 0,
        consts: [[1, "py-5", "mb-4"], [1, "container"], [1, "text-muted"], [1, "container", "main-container", "container-fluid"], [1, "row"], [1, "text-left"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "text-white"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Edit Profile ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/card/card.component */
      "lXt9");
      /* harmony import */


      var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/button/button.component */
      "7psr");
      /* harmony import */


      var _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/user-card/user-card.component */
      "IDqH");
      /* harmony import */


      var _pages_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/navigation/navigation.module */
      "bNLE");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _pages_connect_connect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/connect/connect.component */
      "LMDr");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??fac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pages_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _components_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_7__["UserCardComponent"], _pages_connect_connect_component__WEBPACK_IMPORTED_MODULE_10__["ConnectComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _pages_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "bNLE":
    /*!*******************************************************!*\
      !*** ./src/app/pages/navigation/navigation.module.ts ***!
      \*******************************************************/

    /*! exports provided: NavigationModule */

    /***/
    function bNLE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
        return NavigationModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu/menu.component */
      "7K5l");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "9Kf5");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "6b2W");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home/home.component */
      "c2zt");
      /* harmony import */


      var _menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./menu-action/menu-action.component */
      "8Aiv");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavigationModule = function NavigationModule() {
        _classCallCheck(this, NavigationModule);
      };

      NavigationModule.??fac = function NavigationModule_Factory(t) {
        return new (t || NavigationModule)();
      };

      NavigationModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({
        type: NavigationModule
      });
      NavigationModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](NavigationModule, {
          declarations: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_7__["MenuActionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"]],
          exports: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], _menu_action_menu_action_component__WEBPACK_IMPORTED_MODULE_7__["MenuActionComponent"]]
        });
      })();
      /***/

    },

    /***/
    "c2zt":
    /*!*********************************************************!*\
      !*** ./src/app/pages/navigation/home/home.component.ts ***!
      \*********************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function c2zt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.??fac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 45,
        vars: 0,
        consts: [[1, "bgHeader", "py-5", "mb-5"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-lg-2"], [1, "col-lg-10"], [1, "display-6", "mt-5", "mb-1"], [1, "container", "main-container"], [1, "row", "text-center"], [1, "col-lg-3", "col-md-6", "mb-4"], [1, "card", "h-60", "cardbg"], ["src", "/assets/img/videos/python.jpg", "alt", "", 1, "img-fluid"], [1, "card-body"], [1, "card-title"], [1, "card-footer"], ["href", "#", 1, "btn", "btn-warning"], ["src", "/assets/img/videos/redes.jpg", "alt", "", 1, "img-fluid"], ["src", "/assets/img/videos/hacker.jpg", "alt", "", 1, "img-fluid"], ["src", "/assets/img/videos/scrum.jpg", "alt", "", 1, "img-fluid"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "In just a few steps make your unique content available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Develop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "See");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Crypto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "See");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Security");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "See");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h4", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Productivity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "See");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".bgHeader[_ngcontent-%COMP%]{\r\n    \r\n    background: linear-gradient(120deg,#2E1A2C,#333530);\r\n    color: #FFDE59;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxtREFBbUQ7SUFDbkQsY0FBYzs7QUFFbEIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnSGVhZGVye1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCMyRTFBMkMsIzMzMzUzMCk7XHJcbiAgICBjb2xvcjogI0ZGREU1OTtcclxuICAgXHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "lXt9":
    /*!***************************************************!*\
      !*** ./src/app/components/card/card.component.ts ***!
      \***************************************************/

    /*! exports provided: CardComponent */

    /***/
    function lXt9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
        return CardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["*"];

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);
        }

        _createClass(CardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CardComponent;
      }();

      CardComponent.??fac = function CardComponent_Factory(t) {
        return new (t || CardComponent)();
      };

      CardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: CardComponent,
        selectors: [["app-card"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "card"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????projection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: [".card[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px;\r\n    min-width: 350px;\r\n    min-height: 200px;\r\n    padding: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWluLXdpZHRoOiAzNTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_connect_connect_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/connect/connect.component */
      "LMDr");
      /* harmony import */


      var _pages_navigation_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/navigation/home/home.component */
      "c2zt");
      /* harmony import */


      var _pages_navigation_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/navigation/not-found/not-found.component */
      "6b2W");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // const routes: Routes = [
      //   { path: 'login', component: LoginComponent },
      //   {
      //     path: '', component: HomeComponent, children: [
      //       { path: '', component: DefaultComponent },
      //       { path: 'add-product', component: AddProductComponent },
      //       { path: 'connect', component: ConnectComponent },
      //     ],
      //   },
      // ];


      var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _pages_navigation_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'connect',
        component: _pages_connect_connect_component__WEBPACK_IMPORTED_MODULE_1__["ConnectComponent"]
      }, {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
      }, {
        path: 'product',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-product-product-module */
          "pages-product-product-module").then(__webpack_require__.bind(null,
          /*! ./pages/product/product.module */
          "dFHt")).then(function (m) {
            return m.ProductModule;
          });
        }
      }, {
        path: 'not-found',
        component: _pages_navigation_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }, {
        path: '**',
        component: _pages_navigation_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??fac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map