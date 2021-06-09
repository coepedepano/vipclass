(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"], {
    /***/
    "10O5":
    /*!****************************************************!*\
      !*** ./src/app/pages/product/product.component.ts ***!
      \****************************************************/

    /*! exports provided: ProductComponent */

    /***/
    function O5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
        return ProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProductComponent = /*#__PURE__*/function () {
        function ProductComponent() {
          _classCallCheck(this, ProductComponent);
        }

        _createClass(ProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductComponent;
      }();

      ProductComponent.ɵfac = function ProductComponent_Factory(t) {
        return new (t || ProductComponent)();
      };

      ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductComponent,
        selectors: [["app-product"]],
        decls: 1,
        vars: 0,
        template: function ProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "5eHb":
    /*!*********************************************************************!*\
      !*** ./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js ***!
      \*********************************************************************/

    /*! exports provided: BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, Toast, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastNoAnimation, ToastNoAnimationModule, ToastPackage, ToastRef, ToastrComponentlessModule, ToastrModule, ToastrService */

    /***/
    function eHb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
        return BasePortalHost;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
        return ComponentPortal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function () {
        return DefaultGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultNoAnimationsGlobalConfig", function () {
        return DefaultNoAnimationsGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultNoComponentGlobalConfig", function () {
        return DefaultNoComponentGlobalConfig;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Overlay", function () {
        return Overlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
        return OverlayContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
        return OverlayRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function () {
        return TOAST_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Toast", function () {
        return Toast;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function () {
        return ToastContainerDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function () {
        return ToastContainerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastInjector", function () {
        return ToastInjector;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function () {
        return ToastNoAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function () {
        return ToastNoAnimationModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastPackage", function () {
        return ToastPackage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastRef", function () {
        return ToastRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrComponentlessModule", function () {
        return ToastrComponentlessModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrModule", function () {
        return ToastrModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrService", function () {
        return ToastrService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["toast-component", ""];

      function Toast_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function Toast_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
        }
      }

      function Toast_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
        }
      }

      function Toast_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function Toast_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function Toast_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
        }
      }

      function ToastNoAnimation_button_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
        }
      }

      function ToastNoAnimation_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
        }
      }

      function ToastNoAnimation_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ToastNoAnimation_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function ToastNoAnimation_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
        }
      }

      var ToastContainerDirective = /*#__PURE__*/function () {
        function ToastContainerDirective(el) {
          _classCallCheck(this, ToastContainerDirective);

          this.el = el;
        }

        _createClass(ToastContainerDirective, [{
          key: "getContainerElement",
          value: function getContainerElement() {
            return this.el.nativeElement;
          }
        }]);

        return ToastContainerDirective;
      }();

      ToastContainerDirective.ɵfac = function ToastContainerDirective_Factory(t) {
        return new (t || ToastContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ToastContainerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ToastContainerDirective,
        selectors: [["", "toastContainer", ""]],
        exportAs: ["toastContainer"]
      });

      ToastContainerDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[toastContainer]',
            exportAs: 'toastContainer'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();

      var ToastContainerModule = function ToastContainerModule() {
        _classCallCheck(this, ToastContainerModule);
      };

      ToastContainerModule.ɵfac = function ToastContainerModule_Factory(t) {
        return new (t || ToastContainerModule)();
      };

      ToastContainerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastContainerModule
      });
      ToastContainerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastContainerModule, {
          declarations: [ToastContainerDirective],
          exports: [ToastContainerDirective]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [ToastContainerDirective],
            exports: [ToastContainerDirective]
          }]
        }], null, null);
      })();
      /**
       * Everything a toast needs to launch
       */


      var ToastPackage = /*#__PURE__*/function () {
        function ToastPackage(toastId, config, message, title, toastType, toastRef) {
          var _this = this;

          _classCallCheck(this, ToastPackage);

          this.toastId = toastId;
          this.config = config;
          this.message = message;
          this.title = title;
          this.toastType = toastType;
          this.toastRef = toastRef;
          this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();

            _this._onTap.complete();
          });
        }
        /** Fired on click */


        _createClass(ToastPackage, [{
          key: "triggerTap",
          value: function triggerTap() {
            this._onTap.next();

            if (this.config.tapToDismiss) {
              this._onTap.complete();
            }
          }
        }, {
          key: "onTap",
          value: function onTap() {
            return this._onTap.asObservable();
          }
          /** available for use in custom toast */

        }, {
          key: "triggerAction",
          value: function triggerAction(action) {
            this._onAction.next(action);
          }
        }, {
          key: "onAction",
          value: function onAction() {
            return this._onAction.asObservable();
          }
        }]);

        return ToastPackage;
      }();

      var DefaultNoComponentGlobalConfig = {
        maxOpened: 0,
        autoDismiss: false,
        newestOnTop: true,
        preventDuplicates: false,
        countDuplicates: false,
        resetTimeoutOnDuplicate: false,
        includeTitleDuplicates: false,
        iconClasses: {
          error: 'toast-error',
          info: 'toast-info',
          success: 'toast-success',
          warning: 'toast-warning'
        },
        // Individual
        closeButton: false,
        disableTimeOut: false,
        timeOut: 5000,
        extendedTimeOut: 1000,
        enableHtml: false,
        progressBar: false,
        toastClass: 'ngx-toastr',
        positionClass: 'toast-top-right',
        titleClass: 'toast-title',
        messageClass: 'toast-message',
        easing: 'ease-in',
        easeTime: 300,
        tapToDismiss: true,
        onActivateTick: false,
        progressAnimation: 'decreasing'
      };
      var TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ToastConfig');
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */

      var ComponentPortal = /*#__PURE__*/function () {
        function ComponentPortal(component, injector) {
          _classCallCheck(this, ComponentPortal);

          this.component = component;
          this.injector = injector;
        }
        /** Attach this portal to a host. */


        _createClass(ComponentPortal, [{
          key: "attach",
          value: function attach(host, newestOnTop) {
            this._attachedHost = host;
            return host.attach(this, newestOnTop);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host) {
              this._attachedHost = undefined;
              return host.detach();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
          /**
           * Sets the PortalHost reference without performing `attach()`. This is used directly by
           * the PortalHost when it is performing an `attach()` or `detach()`.
           */

        }, {
          key: "setAttachedHost",
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }]);

        return ComponentPortal;
      }();
      /**
       * Partial implementation of PortalHost that only deals with attaching a
       * ComponentPortal
       */


      var BasePortalHost = /*#__PURE__*/function () {
        function BasePortalHost() {
          _classCallCheck(this, BasePortalHost);
        }

        _createClass(BasePortalHost, [{
          key: "attach",
          value: function attach(portal, newestOnTop) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal, newestOnTop);
          }
        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost();
            }

            this._attachedPortal = undefined;

            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = undefined;
            }
          }
        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }]);

        return BasePortalHost;
      }();
      /**
       * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       *
       * This is the only part of the portal core that directly touches the DOM.
       */


      var DomPortalHost = /*#__PURE__*/function (_BasePortalHost) {
        _inherits(DomPortalHost, _BasePortalHost);

        var _super = _createSuper(DomPortalHost);

        function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
          var _this2;

          _classCallCheck(this, DomPortalHost);

          _this2 = _super.call(this);
          _this2._hostDomElement = _hostDomElement;
          _this2._componentFactoryResolver = _componentFactoryResolver;
          _this2._appRef = _appRef;
          return _this2;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         */


        _createClass(DomPortalHost, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal, newestOnTop) {
            var _this3 = this;

            var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);

            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the ChangeDetector for that component to the application (which
            // happens automatically when using a ViewContainer).

            componentRef = componentFactory.create(portal.injector); // When creating a component outside of a ViewContainer, we need to manually register
            // its ChangeDetector with the application. This API is unfortunately not yet published
            // in Angular core. The change detector must also be deregistered when the component
            // is destroyed to prevent memory leaks.

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(function () {
              _this3._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            }); // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.

            if (newestOnTop) {
              this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
            } else {
              this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
            }

            return componentRef;
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return DomPortalHost;
      }(BasePortalHost);
      /** Container inside which all toasts will render. */


      var OverlayContainer = /*#__PURE__*/function () {
        function OverlayContainer(_document) {
          _classCallCheck(this, OverlayContainer);

          this._document = _document;
        }

        _createClass(OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._containerElement && this._containerElement.parentNode) {
              this._containerElement.parentNode.removeChild(this._containerElement);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var container = this._document.createElement('div');

            container.classList.add('overlay-container');

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return OverlayContainer;
      }();

      OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      OverlayContainer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function OverlayContainer_Factory() {
          return new OverlayContainer(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: OverlayContainer,
        providedIn: "root"
      });

      OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */


      var OverlayRef = /*#__PURE__*/function () {
        function OverlayRef(_portalHost) {
          _classCallCheck(this, OverlayRef);

          this._portalHost = _portalHost;
        }

        _createClass(OverlayRef, [{
          key: "attach",
          value: function attach(portal) {
            var newestOnTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this._portalHost.attach(portal, newestOnTop);
          }
          /**
           * Detaches an overlay from a portal.
           * @returns Resolves when the overlay has been detached.
           */

        }, {
          key: "detach",
          value: function detach() {
            return this._portalHost.detach();
          }
        }]);

        return OverlayRef;
      }();
      /* eslint-disable @typescript-eslint/no-non-null-assertion */

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
       */


      var Overlay = /*#__PURE__*/function () {
        function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
          _classCallCheck(this, Overlay);

          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._appRef = _appRef;
          this._document = _document; // Namespace panes by overlay container

          this._paneElements = new Map();
        }
        /**
         * Creates an overlay.
         * @returns A reference to the created overlay.
         */


        _createClass(Overlay, [{
          key: "create",
          value: function create(positionClass, overlayContainer) {
            // get existing pane if possible
            return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
          }
        }, {
          key: "getPaneElement",
          value: function getPaneElement() {
            var positionClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var overlayContainer = arguments.length > 1 ? arguments[1] : undefined;

            if (!this._paneElements.get(overlayContainer)) {
              this._paneElements.set(overlayContainer, {});
            }

            if (!this._paneElements.get(overlayContainer)[positionClass]) {
              this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
            }

            return this._paneElements.get(overlayContainer)[positionClass];
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(positionClass, overlayContainer) {
            var pane = this._document.createElement('div');

            pane.id = 'toast-container';
            pane.classList.add(positionClass);
            pane.classList.add('toast-container');

            if (!overlayContainer) {
              this._overlayContainer.getContainerElement().appendChild(pane);
            } else {
              overlayContainer.getContainerElement().appendChild(pane);
            }

            return pane;
          }
          /**
           * Create a DomPortalHost into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal host.
           * @returns A portal host for the given DOM element.
           */

        }, {
          key: "_createPortalHost",
          value: function _createPortalHost(pane) {
            return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
          }
          /**
           * Creates an OverlayRef for an overlay in the given DOM element.
           * @param pane DOM element for the overlay
           */

        }, {
          key: "_createOverlayRef",
          value: function _createOverlayRef(pane) {
            return new OverlayRef(this._createPortalHost(pane));
          }
        }]);

        return Overlay;
      }();

      Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      };

      Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function Overlay_Factory() {
          return new Overlay(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
        },
        token: Overlay,
        providedIn: "root"
      });

      Overlay.ctorParameters = function () {
        return [{
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Reference to a toast opened via the Toastr service.
       */


      var ToastRef = /*#__PURE__*/function () {
        function ToastRef(_overlayRef) {
          _classCallCheck(this, ToastRef);

          this._overlayRef = _overlayRef;
          /** Count of duplicates of this toast */

          this.duplicatesCount = 0;
          /** Subject for notifying the user that the toast has finished closing. */

          this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** triggered when toast is activated */

          this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** notifies the toast that it should close before the timeout */

          this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** notifies the toast that it should reset the timeouts */

          this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          /** notifies the toast that it should count a duplicate toast */

          this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(ToastRef, [{
          key: "manualClose",
          value: function manualClose() {
            this._manualClose.next();

            this._manualClose.complete();
          }
        }, {
          key: "manualClosed",
          value: function manualClosed() {
            return this._manualClose.asObservable();
          }
        }, {
          key: "timeoutReset",
          value: function timeoutReset() {
            return this._resetTimeout.asObservable();
          }
        }, {
          key: "countDuplicate",
          value: function countDuplicate() {
            return this._countDuplicate.asObservable();
          }
          /**
           * Close the toast.
           */

        }, {
          key: "close",
          value: function close() {
            this._overlayRef.detach();

            this._afterClosed.next();

            this._manualClose.next();

            this._afterClosed.complete();

            this._manualClose.complete();

            this._activate.complete();

            this._resetTimeout.complete();

            this._countDuplicate.complete();
          }
          /** Gets an observable that is notified when the toast is finished closing. */

        }, {
          key: "afterClosed",
          value: function afterClosed() {
            return this._afterClosed.asObservable();
          }
        }, {
          key: "isInactive",
          value: function isInactive() {
            return this._activate.isStopped;
          }
        }, {
          key: "activate",
          value: function activate() {
            this._activate.next();

            this._activate.complete();
          }
          /** Gets an observable that is notified when the toast has started opening. */

        }, {
          key: "afterActivate",
          value: function afterActivate() {
            return this._activate.asObservable();
          }
          /** Reset the toast timouts and count duplicates */

        }, {
          key: "onDuplicate",
          value: function onDuplicate(resetTimeout, countDuplicate) {
            if (resetTimeout) {
              this._resetTimeout.next();
            }

            if (countDuplicate) {
              this._countDuplicate.next(++this.duplicatesCount);
            }
          }
        }]);

        return ToastRef;
      }();
      /** Custom injector type specifically for instantiating components with a toast. */


      var ToastInjector = /*#__PURE__*/function () {
        function ToastInjector(_toastPackage, _parentInjector) {
          _classCallCheck(this, ToastInjector);

          this._toastPackage = _toastPackage;
          this._parentInjector = _parentInjector;
        }

        _createClass(ToastInjector, [{
          key: "get",
          value: function get(token, notFoundValue, flags) {
            if (token === ToastPackage) {
              return this._toastPackage;
            }

            return this._parentInjector.get(token, notFoundValue, flags);
          }
        }]);

        return ToastInjector;
      }();

      var ToastrService = /*#__PURE__*/function () {
        function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
          _classCallCheck(this, ToastrService);

          this.overlay = overlay;
          this._injector = _injector;
          this.sanitizer = sanitizer;
          this.ngZone = ngZone;
          this.currentlyActive = 0;
          this.toasts = [];
          this.index = 0;
          this.toastrConfig = Object.assign(Object.assign({}, token["default"]), token.config);

          if (token.config.iconClasses) {
            this.toastrConfig.iconClasses = Object.assign(Object.assign({}, token["default"].iconClasses), token.config.iconClasses);
          }
        }
        /** show toast */


        _createClass(ToastrService, [{
          key: "show",
          value: function show(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show successful toast */

        }, {
          key: "success",
          value: function success(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.success || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show error toast */

        }, {
          key: "error",
          value: function error(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.error || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show info toast */

        }, {
          key: "info",
          value: function info(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.info || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /** show warning toast */

        }, {
          key: "warning",
          value: function warning(message, title) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var type = this.toastrConfig.iconClasses.warning || '';
            return this._preBuildNotification(type, message, title, this.applyConfig(override));
          }
          /**
           * Remove all or a single toast by id
           */

        }, {
          key: "clear",
          value: function clear(toastId) {
            // Call every toastRef manualClose function
            var _iterator = _createForOfIteratorHelper(this.toasts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var toast = _step.value;

                if (toastId !== undefined) {
                  if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                  }
                } else {
                  toast.toastRef.manualClose();
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          /**
           * Remove and destroy a single toast by id
           */

        }, {
          key: "remove",
          value: function remove(toastId) {
            var found = this._findToast(toastId);

            if (!found) {
              return false;
            }

            found.activeToast.toastRef.close();
            this.toasts.splice(found.index, 1);
            this.currentlyActive = this.currentlyActive - 1;

            if (!this.toastrConfig.maxOpened || !this.toasts.length) {
              return false;
            }

            if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
              var p = this.toasts[this.currentlyActive].toastRef;

              if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
              }
            }

            return true;
          }
          /**
           * Determines if toast message is already shown
           */

        }, {
          key: "findDuplicate",
          value: function findDuplicate() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var resetOnDuplicate = arguments.length > 2 ? arguments[2] : undefined;
            var countDuplicates = arguments.length > 3 ? arguments[3] : undefined;
            var includeTitleDuplicates = this.toastrConfig.includeTitleDuplicates;

            var _iterator2 = _createForOfIteratorHelper(this.toasts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var toast = _step2.value;
                var hasDuplicateTitle = includeTitleDuplicates && toast.title === title;

                if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
                  toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
                  return toast;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return null;
          }
          /** create a clone of global config and apply individual settings */

        }, {
          key: "applyConfig",
          value: function applyConfig() {
            var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object.assign(Object.assign({}, this.toastrConfig), override);
          }
          /**
           * Find toast object by id
           */

        }, {
          key: "_findToast",
          value: function _findToast(toastId) {
            for (var i = 0; i < this.toasts.length; i++) {
              if (this.toasts[i].toastId === toastId) {
                return {
                  index: i,
                  activeToast: this.toasts[i]
                };
              }
            }

            return null;
          }
          /**
           * Determines the need to run inside angular's zone then builds the toast
           */

        }, {
          key: "_preBuildNotification",
          value: function _preBuildNotification(toastType, message, title, config) {
            var _this4 = this;

            if (config.onActivateTick) {
              return this.ngZone.run(function () {
                return _this4._buildNotification(toastType, message, title, config);
              });
            }

            return this._buildNotification(toastType, message, title, config);
          }
          /**
           * Creates and attaches toast data to component
           * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
           */

        }, {
          key: "_buildNotification",
          value: function _buildNotification(toastType, message, title, config) {
            if (!config.toastComponent) {
              throw new Error('toastComponent required');
            } // max opened and auto dismiss = true
            // if timeout = 0 resetting it would result in setting this.hideTime = Date.now(). Hence, we only want to reset timeout if there is
            // a timeout at all


            var duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);

            if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
              return duplicate;
            }

            this.previousToastMessage = message;
            var keepInactive = false;

            if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
              keepInactive = true;

              if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
              }
            }

            var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
            this.index = this.index + 1;
            var sanitizedMessage = message;

            if (message && config.enableHtml) {
              sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, message);
            }

            var toastRef = new ToastRef(overlayRef);
            var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
            var toastInjector = new ToastInjector(toastPackage, this._injector);
            var component = new ComponentPortal(config.toastComponent, toastInjector);
            var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
            toastRef.componentInstance = portal.instance;
            var ins = {
              toastId: this.index,
              title: title || '',
              message: message || '',
              toastRef: toastRef,
              onShown: toastRef.afterActivate(),
              onHidden: toastRef.afterClosed(),
              onTap: toastPackage.onTap(),
              onAction: toastPackage.onAction(),
              portal: portal
            };

            if (!keepInactive) {
              this.currentlyActive = this.currentlyActive + 1;
              setTimeout(function () {
                ins.toastRef.activate();
              });
            }

            this.toasts.push(ins);
            return ins;
          }
        }]);

        return ToastrService;
      }();

      ToastrService.ɵfac = function ToastrService_Factory(t) {
        return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ToastrService_Factory() {
          return new ToastrService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
        },
        token: ToastrService,
        providedIn: "root"
      });

      ToastrService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [TOAST_CONFIG]
          }]
        }, {
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [TOAST_CONFIG]
            }]
          }, {
            type: Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, null);
      })();

      var Toast = /*#__PURE__*/function () {
        function Toast(toastrService, toastPackage, ngZone) {
          var _this5 = this;

          _classCallCheck(this, Toast);

          this.toastrService = toastrService;
          this.toastPackage = toastPackage;
          this.ngZone = ngZone;
          /** width of progress bar */

          this.width = -1;
          /** a combination of toast type and options.toastClass */

          this.toastClasses = '';
          /** controls animation */

          this.state = {
            value: 'inactive',
            params: {
              easeTime: this.toastPackage.config.easeTime,
              easing: 'ease-in'
            }
          };
          this.message = toastPackage.message;
          this.title = toastPackage.title;
          this.options = toastPackage.config;
          this.originalTimeout = toastPackage.config.timeOut;
          this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
          this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this5.activateToast();
          });
          this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this5.remove();
          });
          this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this5.resetTimeout();
          });
          this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this5.duplicatesCount = count;
          });
        }
        /** hides component when waiting to be displayed */


        _createClass(Toast, [{
          key: "displayStyle",
          get: function get() {
            if (this.state.value === 'inactive') {
              return 'none';
            }

            return;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
            this.sub1.unsubscribe();
            this.sub2.unsubscribe();
            this.sub3.unsubscribe();
            clearInterval(this.intervalId);
            clearTimeout(this.timeout);
          }
          /**
           * activates toast and sets timeout
           */

        }, {
          key: "activateToast",
          value: function activateToast() {
            var _this6 = this;

            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'active'
            });

            if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
              this.outsideTimeout(function () {
                return _this6.remove();
              }, this.options.timeOut);
              this.hideTime = new Date().getTime() + this.options.timeOut;

              if (this.options.progressBar) {
                this.outsideInterval(function () {
                  return _this6.updateProgress();
                }, 10);
              }
            }
          }
          /**
           * updates progress bar width
           */

        }, {
          key: "updateProgress",
          value: function updateProgress() {
            if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
              return;
            }

            var now = new Date().getTime();
            var remaining = this.hideTime - now;
            this.width = remaining / this.options.timeOut * 100;

            if (this.options.progressAnimation === 'increasing') {
              this.width = 100 - this.width;
            }

            if (this.width <= 0) {
              this.width = 0;
            }

            if (this.width >= 100) {
              this.width = 100;
            }
          }
        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this7 = this;

            clearTimeout(this.timeout);
            clearInterval(this.intervalId);
            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'active'
            });
            this.outsideTimeout(function () {
              return _this7.remove();
            }, this.originalTimeout);
            this.options.timeOut = this.originalTimeout;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this7.updateProgress();
              }, 10);
            }
          }
          /**
           * tells toastrService to remove this toast after animation time
           */

        }, {
          key: "remove",
          value: function remove() {
            var _this8 = this;

            if (this.state.value === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.state = Object.assign(Object.assign({}, this.state), {
              value: 'removed'
            });
            this.outsideTimeout(function () {
              return _this8.toastrService.remove(_this8.toastPackage.toastId);
            }, +this.toastPackage.config.easeTime);
          }
        }, {
          key: "tapToast",
          value: function tapToast() {
            if (this.state.value === 'removed') {
              return;
            }

            this.toastPackage.triggerTap();

            if (this.options.tapToDismiss) {
              this.remove();
            }
          }
        }, {
          key: "stickAround",
          value: function stickAround() {
            if (this.state.value === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.options.timeOut = 0;
            this.hideTime = 0; // disable progressBar

            clearInterval(this.intervalId);
            this.width = 0;
          }
        }, {
          key: "delayedHideToast",
          value: function delayedHideToast() {
            var _this9 = this;

            if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state.value === 'removed') {
              return;
            }

            this.outsideTimeout(function () {
              return _this9.remove();
            }, this.options.extendedTimeOut);
            this.options.timeOut = this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.outsideInterval(function () {
                return _this9.updateProgress();
              }, 10);
            }
          }
        }, {
          key: "outsideTimeout",
          value: function outsideTimeout(func, timeout) {
            var _this10 = this;

            if (this.ngZone) {
              this.ngZone.runOutsideAngular(function () {
                return _this10.timeout = setTimeout(function () {
                  return _this10.runInsideAngular(func);
                }, timeout);
              });
            } else {
              this.timeout = setTimeout(function () {
                return func();
              }, timeout);
            }
          }
        }, {
          key: "outsideInterval",
          value: function outsideInterval(func, timeout) {
            var _this11 = this;

            if (this.ngZone) {
              this.ngZone.runOutsideAngular(function () {
                return _this11.intervalId = setInterval(function () {
                  return _this11.runInsideAngular(func);
                }, timeout);
              });
            } else {
              this.intervalId = setInterval(function () {
                return func();
              }, timeout);
            }
          }
        }, {
          key: "runInsideAngular",
          value: function runInsideAngular(func) {
            if (this.ngZone) {
              this.ngZone.run(function () {
                return func();
              });
            } else {
              func();
            }
          }
        }]);

        return Toast;
      }();

      Toast.ɵfac = function Toast_Factory(t) {
        return new (t || Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      Toast.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Toast,
        selectors: [["", "toast-component", ""]],
        hostVars: 5,
        hostBindings: function Toast_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_click_HostBindingHandler() {
              return ctx.tapToast();
            })("mouseenter", function Toast_mouseenter_HostBindingHandler() {
              return ctx.stickAround();
            })("mouseleave", function Toast_mouseleave_HostBindingHandler() {
              return ctx.delayedHideToast();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@flyInOut", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
          }
        },
        attrs: _c0,
        decls: 5,
        vars: 5,
        consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alertdialog", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alertdialog", "aria-live", "polite", 3, "innerHTML"], ["role", "alertdialog", "aria-live", "polite"], [1, "toast-progress"]],
        template: function Toast_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Toast_button_0_Template, 3, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Toast_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Toast_div_3_Template, 2, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Toast_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))])]
        }
      });

      Toast.ctorParameters = function () {
        return [{
          type: ToastrService
        }, {
          type: ToastPackage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      Toast.propDecorators = {
        toastClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@flyInOut']
        }],
        displayStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.display']
        }],
        tapToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        stickAround: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        delayedHideToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Toast, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{ easeTime }}ms {{ easing }}'))])],
            preserveWhitespaces: false
          }]
        }], function () {
          return [{
            type: ToastrService
          }, {
            type: ToastPackage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }],
          state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@flyInOut']
          }],
          displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
          }],
          tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
          }],
          delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
          }]
        });
      })();

      var DefaultGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), {
        toastComponent: Toast
      });

      var ToastrModule = /*#__PURE__*/function () {
        function ToastrModule() {
          _classCallCheck(this, ToastrModule);
        }

        _createClass(ToastrModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: ToastrModule,
              providers: [{
                provide: TOAST_CONFIG,
                useValue: {
                  "default": DefaultGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return ToastrModule;
      }();

      ToastrModule.ɵfac = function ToastrModule_Factory(t) {
        return new (t || ToastrModule)();
      };

      ToastrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastrModule
      });
      ToastrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastrModule, {
          declarations: function declarations() {
            return [Toast];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [Toast];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [Toast],
            exports: [Toast],
            entryComponents: [Toast]
          }]
        }], null, null);
      })();

      var ToastrComponentlessModule = /*#__PURE__*/function () {
        function ToastrComponentlessModule() {
          _classCallCheck(this, ToastrComponentlessModule);
        }

        _createClass(ToastrComponentlessModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: ToastrModule,
              providers: [{
                provide: TOAST_CONFIG,
                useValue: {
                  "default": DefaultNoComponentGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return ToastrComponentlessModule;
      }();

      ToastrComponentlessModule.ɵfac = function ToastrComponentlessModule_Factory(t) {
        return new (t || ToastrComponentlessModule)();
      };

      ToastrComponentlessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastrComponentlessModule
      });
      ToastrComponentlessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastrComponentlessModule, {
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrComponentlessModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
          }]
        }], null, null);
      })();

      var ToastNoAnimation = /*#__PURE__*/function () {
        function ToastNoAnimation(toastrService, toastPackage, appRef) {
          var _this12 = this;

          _classCallCheck(this, ToastNoAnimation);

          this.toastrService = toastrService;
          this.toastPackage = toastPackage;
          this.appRef = appRef;
          /** width of progress bar */

          this.width = -1;
          /** a combination of toast type and options.toastClass */

          this.toastClasses = '';
          /** controls animation */

          this.state = 'inactive';
          this.message = toastPackage.message;
          this.title = toastPackage.title;
          this.options = toastPackage.config;
          this.originalTimeout = toastPackage.config.timeOut;
          this.toastClasses = "".concat(toastPackage.toastType, " ").concat(toastPackage.config.toastClass);
          this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this12.activateToast();
          });
          this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this12.remove();
          });
          this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this12.resetTimeout();
          });
          this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this12.duplicatesCount = count;
          });
        }
        /** hides component when waiting to be displayed */


        _createClass(ToastNoAnimation, [{
          key: "displayStyle",
          get: function get() {
            if (this.state === 'inactive') {
              return 'none';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
            this.sub1.unsubscribe();
            this.sub2.unsubscribe();
            this.sub3.unsubscribe();
            clearInterval(this.intervalId);
            clearTimeout(this.timeout);
          }
          /**
           * activates toast and sets timeout
           */

        }, {
          key: "activateToast",
          value: function activateToast() {
            var _this13 = this;

            this.state = 'active';

            if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
              this.timeout = setTimeout(function () {
                _this13.remove();
              }, this.options.timeOut);
              this.hideTime = new Date().getTime() + this.options.timeOut;

              if (this.options.progressBar) {
                this.intervalId = setInterval(function () {
                  return _this13.updateProgress();
                }, 10);
              }
            }

            if (this.options.onActivateTick) {
              this.appRef.tick();
            }
          }
          /**
           * updates progress bar width
           */

        }, {
          key: "updateProgress",
          value: function updateProgress() {
            if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
              return;
            }

            var now = new Date().getTime();
            var remaining = this.hideTime - now;
            this.width = remaining / this.options.timeOut * 100;

            if (this.options.progressAnimation === 'increasing') {
              this.width = 100 - this.width;
            }

            if (this.width <= 0) {
              this.width = 0;
            }

            if (this.width >= 100) {
              this.width = 100;
            }
          }
        }, {
          key: "resetTimeout",
          value: function resetTimeout() {
            var _this14 = this;

            clearTimeout(this.timeout);
            clearInterval(this.intervalId);
            this.state = 'active';
            this.options.timeOut = this.originalTimeout;
            this.timeout = setTimeout(function () {
              return _this14.remove();
            }, this.originalTimeout);
            this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this14.updateProgress();
              }, 10);
            }
          }
          /**
           * tells toastrService to remove this toast after animation time
           */

        }, {
          key: "remove",
          value: function remove() {
            var _this15 = this;

            if (this.state === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.state = 'removed';
            this.timeout = setTimeout(function () {
              return _this15.toastrService.remove(_this15.toastPackage.toastId);
            });
          }
        }, {
          key: "tapToast",
          value: function tapToast() {
            if (this.state === 'removed') {
              return;
            }

            this.toastPackage.triggerTap();

            if (this.options.tapToDismiss) {
              this.remove();
            }
          }
        }, {
          key: "stickAround",
          value: function stickAround() {
            if (this.state === 'removed') {
              return;
            }

            clearTimeout(this.timeout);
            this.options.timeOut = 0;
            this.hideTime = 0; // disable progressBar

            clearInterval(this.intervalId);
            this.width = 0;
          }
        }, {
          key: "delayedHideToast",
          value: function delayedHideToast() {
            var _this16 = this;

            if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state === 'removed') {
              return;
            }

            this.timeout = setTimeout(function () {
              return _this16.remove();
            }, this.options.extendedTimeOut);
            this.options.timeOut = this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
            this.width = -1;

            if (this.options.progressBar) {
              this.intervalId = setInterval(function () {
                return _this16.updateProgress();
              }, 10);
            }
          }
        }]);

        return ToastNoAnimation;
      }();

      ToastNoAnimation.ɵfac = function ToastNoAnimation_Factory(t) {
        return new (t || ToastNoAnimation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]));
      };

      ToastNoAnimation.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToastNoAnimation,
        selectors: [["", "toast-component", ""]],
        hostVars: 4,
        hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_click_HostBindingHandler() {
              return ctx.tapToast();
            })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() {
              return ctx.stickAround();
            })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() {
              return ctx.delayedHideToast();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
          }
        },
        attrs: _c0,
        decls: 5,
        vars: 5,
        consts: [["class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", "aria-live", "polite", 3, "class", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", "aria-live", "polite", 3, "innerHTML"], ["role", "alert", "aria-live", "polite"], [1, "toast-progress"]],
        template: function ToastNoAnimation_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        encapsulation: 2
      });

      ToastNoAnimation.ctorParameters = function () {
        return [{
          type: ToastrService
        }, {
          type: ToastPackage
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
        }];
      };

      ToastNoAnimation.propDecorators = {
        toastClasses: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }],
        displayStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.display']
        }],
        tapToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        stickAround: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseenter']
        }],
        delayedHideToast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mouseleave']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNoAnimation, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
          }]
        }], function () {
          return [{
            type: ToastrService
          }, {
            type: ToastPackage
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
          }];
        }, {
          toastClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
          }],
          displayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
          }],
          tapToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }],
          stickAround: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
          }],
          delayedHideToast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
          }]
        });
      })();

      var DefaultNoAnimationsGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), {
        toastComponent: ToastNoAnimation
      });

      var ToastNoAnimationModule = /*#__PURE__*/function () {
        function ToastNoAnimationModule() {
          _classCallCheck(this, ToastNoAnimationModule);
        }

        _createClass(ToastNoAnimationModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: ToastNoAnimationModule,
              providers: [{
                provide: TOAST_CONFIG,
                useValue: {
                  "default": DefaultNoAnimationsGlobalConfig,
                  config: config
                }
              }]
            };
          }
        }]);

        return ToastNoAnimationModule;
      }();

      ToastNoAnimationModule.ɵfac = function ToastNoAnimationModule_Factory(t) {
        return new (t || ToastNoAnimationModule)();
      };

      ToastNoAnimationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToastNoAnimationModule
      });
      ToastNoAnimationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToastNoAnimationModule, {
          declarations: function declarations() {
            return [ToastNoAnimation];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [ToastNoAnimation];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNoAnimationModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [ToastNoAnimation],
            exports: [ToastNoAnimation],
            entryComponents: [ToastNoAnimation]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-toastr.js.map

      /***/

    },

    /***/
    "DR9K":
    /*!**************************************************************!*\
      !*** ./src/app/pages/product/list-all/list-all.component.ts ***!
      \**************************************************************/

    /*! exports provided: ListAllComponent */

    /***/
    function DR9K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListAllComponent", function () {
        return ListAllComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ListAllComponent = /*#__PURE__*/function () {
        function ListAllComponent() {
          _classCallCheck(this, ListAllComponent);
        }

        _createClass(ListAllComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListAllComponent;
      }();

      ListAllComponent.ɵfac = function ListAllComponent_Factory(t) {
        return new (t || ListAllComponent)();
      };

      ListAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListAllComponent,
        selectors: [["app-list-all"]],
        decls: 6,
        vars: 0,
        template: function ListAllComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list-all works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "list-all works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "list-all works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWFsbC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "JCV4":
    /*!************************************************!*\
      !*** ./src/app/pages/product/produto.route.ts ***!
      \************************************************/

    /*! exports provided: ProductRoutingModule */

    /***/
    function JCV4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function () {
        return ProductRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-new/add-new.component */
      "hbLF");
      /* harmony import */


      var _list_all_list_all_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-all/list-all.component */
      "DR9K");
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./product.component */
      "10O5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var productRouterConfig = [{
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"],
        children: [{
          path: 'list',
          component: _list_all_list_all_component__WEBPACK_IMPORTED_MODULE_2__["ListAllComponent"]
        }, {
          path: 'add-new',
          component: _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_1__["AddNewComponent"]
        }]
      }];

      var ProductRoutingModule = function ProductRoutingModule() {
        _classCallCheck(this, ProductRoutingModule);
      };

      ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) {
        return new (t || ProductRoutingModule)();
      };

      ProductRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: ProductRoutingModule
      });
      ProductRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(productRouterConfig)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "R0Ic":
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js ***!
      \******************************************************************************/

    /*! exports provided: AUTO_STYLE, AnimationBuilder, AnimationFactory, NoopAnimationPlayer, animate, animateChild, animation, group, keyframes, query, sequence, stagger, state, style, transition, trigger, useAnimation, ɵAnimationGroupPlayer, ɵPRE_STYLE */

    /***/
    function R0Ic(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AUTO_STYLE", function () {
        return AUTO_STYLE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationBuilder", function () {
        return AnimationBuilder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationFactory", function () {
        return AnimationFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoopAnimationPlayer", function () {
        return NoopAnimationPlayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "animate", function () {
        return animate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "animateChild", function () {
        return animateChild;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "animation", function () {
        return animation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "group", function () {
        return group;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "keyframes", function () {
        return keyframes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "query", function () {
        return query;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sequence", function () {
        return sequence;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stagger", function () {
        return stagger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "state", function () {
        return state;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "style", function () {
        return style;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transition", function () {
        return transition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "trigger", function () {
        return trigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "useAnimation", function () {
        return useAnimation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵAnimationGroupPlayer", function () {
        return AnimationGroupPlayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵPRE_STYLE", function () {
        return ɵPRE_STYLE;
      });
      /**
       * @license Angular v11.2.14
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * An injectable service that produces an animation sequence programmatically within an
       * Angular component or directive.
       * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
       *
       * @usageNotes
       *
       * To use this service, add it to your component or directive as a dependency.
       * The service is instantiated along with your component.
       *
       * Apps do not typically need to create their own animation players, but if you
       * do need to, follow these steps:
       *
       * 1. Use the `build()` method to create a programmatic animation using the
       * `animate()` function. The method returns an `AnimationFactory` instance.
       *
       * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
       *
       * 3. Use the player object to control the animation programmatically.
       *
       * For example:
       *
       * ```ts
       * // import the service from BrowserAnimationsModule
       * import {AnimationBuilder} from '@angular/animations';
       * // require the service as a dependency
       * class MyCmp {
       *   constructor(private _builder: AnimationBuilder) {}
       *
       *   makeAnimation(element: any) {
       *     // first define a reusable animation
       *     const myAnimation = this._builder.build([
       *       style({ width: 0 }),
       *       animate(1000, style({ width: '100px' }))
       *     ]);
       *
       *     // use the returned factory object to create a player
       *     const player = myAnimation.create(element);
       *
       *     player.play();
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      var AnimationBuilder = function AnimationBuilder() {
        _classCallCheck(this, AnimationBuilder);
      };
      /**
       * A factory object returned from the `AnimationBuilder`.`build()` method.
       *
       * @publicApi
       */


      var AnimationFactory = function AnimationFactory() {
        _classCallCheck(this, AnimationFactory);
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Specifies automatic styling.
       *
       * @publicApi
       */


      var AUTO_STYLE = '*';
      /**
       * Creates a named animation trigger, containing a  list of `state()`
       * and `transition()` entries to be evaluated when the expression
       * bound to the trigger changes.
       *
       * @param name An identifying string.
       * @param definitions  An animation definition object, containing an array of `state()`
       * and `transition()` declarations.
       *
       * @return An object that encapsulates the trigger data.
       *
       * @usageNotes
       * Define an animation trigger in the `animations` section of `@Component` metadata.
       * In the template, reference the trigger by name and bind it to a trigger expression that
       * evaluates to a defined animation state, using the following format:
       *
       * `[@triggerName]="expression"`
       *
       * Animation trigger bindings convert all values to strings, and then match the
       * previous and current values against any linked transitions.
       * Booleans can be specified as `1` or `true` and `0` or `false`.
       *
       * ### Usage Example
       *
       * The following example creates an animation trigger reference based on the provided
       * name value.
       * The provided animation value is expected to be an array consisting of state and
       * transition declarations.
       *
       * ```typescript
       * @Component({
       *   selector: "my-component",
       *   templateUrl: "my-component-tpl.html",
       *   animations: [
       *     trigger("myAnimationTrigger", [
       *       state(...),
       *       state(...),
       *       transition(...),
       *       transition(...)
       *     ])
       *   ]
       * })
       * class MyComponent {
       *   myStatusExp = "something";
       * }
       * ```
       *
       * The template associated with this component makes use of the defined trigger
       * by binding to an element within its template code.
       *
       * ```html
       * <!-- somewhere inside of my-component-tpl.html -->
       * <div [@myAnimationTrigger]="myStatusExp">...</div>
       * ```
       *
       * ### Using an inline function
       * The `transition` animation method also supports reading an inline function which can decide
       * if its associated animation should be run.
       *
       * ```typescript
       * // this method is run each time the `myAnimationTrigger` trigger value changes.
       * function myInlineMatcherFn(fromState: string, toState: string, element: any, params: {[key:
       string]: any}): boolean {
       *   // notice that `element` and `params` are also available here
       *   return toState == 'yes-please-animate';
       * }
       *
       * @Component({
       *   selector: 'my-component',
       *   templateUrl: 'my-component-tpl.html',
       *   animations: [
       *     trigger('myAnimationTrigger', [
       *       transition(myInlineMatcherFn, [
       *         // the animation sequence code
       *       ]),
       *     ])
       *   ]
       * })
       * class MyComponent {
       *   myStatusExp = "yes-please-animate";
       * }
       * ```
       *
       * ### Disabling Animations
       * When true, the special animation control binding `@.disabled` binding prevents
       * all animations from rendering.
       * Place the  `@.disabled` binding on an element to disable
       * animations on the element itself, as well as any inner animation triggers
       * within the element.
       *
       * The following example shows how to use this feature:
       *
       * ```typescript
       * @Component({
       *   selector: 'my-component',
       *   template: `
       *     <div [@.disabled]="isDisabled">
       *       <div [@childAnimation]="exp"></div>
       *     </div>
       *   `,
       *   animations: [
       *     trigger("childAnimation", [
       *       // ...
       *     ])
       *   ]
       * })
       * class MyComponent {
       *   isDisabled = true;
       *   exp = '...';
       * }
       * ```
       *
       * When `@.disabled` is true, it prevents the `@childAnimation` trigger from animating,
       * along with any inner animations.
       *
       * ### Disable animations application-wide
       * When an area of the template is set to have animations disabled,
       * **all** inner components have their animations disabled as well.
       * This means that you can disable all animations for an app
       * by placing a host binding set on `@.disabled` on the topmost Angular component.
       *
       * ```typescript
       * import {Component, HostBinding} from '@angular/core';
       *
       * @Component({
       *   selector: 'app-component',
       *   templateUrl: 'app.component.html',
       * })
       * class AppComponent {
       *   @HostBinding('@.disabled')
       *   public animationsDisabled = true;
       * }
       * ```
       *
       * ### Overriding disablement of inner animations
       * Despite inner animations being disabled, a parent animation can `query()`
       * for inner elements located in disabled areas of the template and still animate
       * them if needed. This is also the case for when a sub animation is
       * queried by a parent and then later animated using `animateChild()`.
       *
       * ### Detecting when an animation is disabled
       * If a region of the DOM (or the entire application) has its animations disabled, the animation
       * trigger callbacks still fire, but for zero seconds. When the callback fires, it provides
       * an instance of an `AnimationEvent`. If animations are disabled,
       * the `.disabled` flag on the event is true.
       *
       * @publicApi
       */

      function trigger(name, definitions) {
        return {
          type: 7
          /* Trigger */
          ,
          name: name,
          definitions: definitions,
          options: {}
        };
      }
      /**
       * Defines an animation step that combines styling information with timing information.
       *
       * @param timings Sets `AnimateTimings` for the parent animation.
       * A string in the format "duration [delay] [easing]".
       *  - Duration and delay are expressed as a number and optional time unit,
       * such as "1s" or "10ms" for one second and 10 milliseconds, respectively.
       * The default unit is milliseconds.
       *  - The easing value controls how the animation accelerates and decelerates
       * during its runtime. Value is one of  `ease`, `ease-in`, `ease-out`,
       * `ease-in-out`, or a `cubic-bezier()` function call.
       * If not supplied, no easing is applied.
       *
       * For example, the string "1s 100ms ease-out" specifies a duration of
       * 1000 milliseconds, and delay of 100 ms, and the "ease-out" easing style,
       * which decelerates near the end of the duration.
       * @param styles Sets AnimationStyles for the parent animation.
       * A function call to either `style()` or `keyframes()`
       * that returns a collection of CSS style entries to be applied to the parent animation.
       * When null, uses the styles from the destination state.
       * This is useful when describing an animation step that will complete an animation;
       * see "Animating to the final state" in `transitions()`.
       * @returns An object that encapsulates the animation step.
       *
       * @usageNotes
       * Call within an animation `sequence()`, `{@link animations/group group()}`, or
       * `transition()` call to specify an animation step
       * that applies given style data to the parent animation for a given amount of time.
       *
       * ### Syntax Examples
       * **Timing examples**
       *
       * The following examples show various `timings` specifications.
       * - `animate(500)` : Duration is 500 milliseconds.
       * - `animate("1s")` : Duration is 1000 milliseconds.
       * - `animate("100ms 0.5s")` : Duration is 100 milliseconds, delay is 500 milliseconds.
       * - `animate("5s ease-in")` : Duration is 5000 milliseconds, easing in.
       * - `animate("5s 10ms cubic-bezier(.17,.67,.88,.1)")` : Duration is 5000 milliseconds, delay is 10
       * milliseconds, easing according to a bezier curve.
       *
       * **Style examples**
       *
       * The following example calls `style()` to set a single CSS style.
       * ```typescript
       * animate(500, style({ background: "red" }))
       * ```
       * The following example calls `keyframes()` to set a CSS style
       * to different values for successive keyframes.
       * ```typescript
       * animate(500, keyframes(
       *  [
       *   style({ background: "blue" }),
       *   style({ background: "red" })
       *  ])
       * ```
       *
       * @publicApi
       */


      function animate(timings) {
        var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return {
          type: 4
          /* Animate */
          ,
          styles: styles,
          timings: timings
        };
      }
      /**
       * @description Defines a list of animation steps to be run in parallel.
       *
       * @param steps An array of animation step objects.
       * - When steps are defined by `style()` or `animate()`
       * function calls, each call within the group is executed instantly.
       * - To specify offset styles to be applied at a later time, define steps with
       * `keyframes()`, or use `animate()` calls with a delay value.
       * For example:
       *
       * ```typescript
       * group([
       *   animate("1s", style({ background: "black" })),
       *   animate("2s", style({ color: "white" }))
       * ])
       * ```
       *
       * @param options An options object containing a delay and
       * developer-defined parameters that provide styling defaults and
       * can be overridden on invocation.
       *
       * @return An object that encapsulates the group data.
       *
       * @usageNotes
       * Grouped animations are useful when a series of styles must be
       * animated at different starting times and closed off at different ending times.
       *
       * When called within a `sequence()` or a
       * `transition()` call, does not continue to the next
       * instruction until all of the inner animation steps have completed.
       *
       * @publicApi
       */


      function group(steps) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return {
          type: 3
          /* Group */
          ,
          steps: steps,
          options: options
        };
      }
      /**
       * Defines a list of animation steps to be run sequentially, one by one.
       *
       * @param steps An array of animation step objects.
       * - Steps defined by `style()` calls apply the styling data immediately.
       * - Steps defined by `animate()` calls apply the styling data over time
       *   as specified by the timing data.
       *
       * ```typescript
       * sequence([
       *   style({ opacity: 0 }),
       *   animate("1s", style({ opacity: 1 }))
       * ])
       * ```
       *
       * @param options An options object containing a delay and
       * developer-defined parameters that provide styling defaults and
       * can be overridden on invocation.
       *
       * @return An object that encapsulates the sequence data.
       *
       * @usageNotes
       * When you pass an array of steps to a
       * `transition()` call, the steps run sequentially by default.
       * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
       *parallel.
       *
       * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
       * execution continues to the next instruction only after each of the inner animation
       * steps have completed.
       *
       * @publicApi
       **/


      function sequence(steps) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return {
          type: 2
          /* Sequence */
          ,
          steps: steps,
          options: options
        };
      }
      /**
       * Declares a key/value object containing CSS properties/styles that
       * can then be used for an animation `state`, within an animation `sequence`,
       * or as styling data for calls to `animate()` and `keyframes()`.
       *
       * @param tokens A set of CSS styles or HTML styles associated with an animation state.
       * The value can be any of the following:
       * - A key-value style pair associating a CSS property with a value.
       * - An array of key-value style pairs.
       * - An asterisk (*), to use auto-styling, where styles are derived from the element
       * being animated and applied to the animation when it starts.
       *
       * Auto-styling can be used to define a state that depends on layout or other
       * environmental factors.
       *
       * @return An object that encapsulates the style data.
       *
       * @usageNotes
       * The following examples create animation styles that collect a set of
       * CSS property values:
       *
       * ```typescript
       * // string values for CSS properties
       * style({ background: "red", color: "blue" })
       *
       * // numerical pixel values
       * style({ width: 100, height: 0 })
       * ```
       *
       * The following example uses auto-styling to allow a component to animate from
       * a height of 0 up to the height of the parent element:
       *
       * ```
       * style({ height: 0 }),
       * animate("1s", style({ height: "*" }))
       * ```
       *
       * @publicApi
       **/


      function style(tokens) {
        return {
          type: 6
          /* Style */
          ,
          styles: tokens,
          offset: null
        };
      }
      /**
       * Declares an animation state within a trigger attached to an element.
       *
       * @param name One or more names for the defined state in a comma-separated string.
       * The following reserved state names can be supplied to define a style for specific use
       * cases:
       *
       * - `void` You can associate styles with this name to be used when
       * the element is detached from the application. For example, when an `ngIf` evaluates
       * to false, the state of the associated element is void.
       *  - `*` (asterisk) Indicates the default state. You can associate styles with this name
       * to be used as the fallback when the state that is being animated is not declared
       * within the trigger.
       *
       * @param styles A set of CSS styles associated with this state, created using the
       * `style()` function.
       * This set of styles persists on the element once the state has been reached.
       * @param options Parameters that can be passed to the state when it is invoked.
       * 0 or more key-value pairs.
       * @return An object that encapsulates the new state data.
       *
       * @usageNotes
       * Use the `trigger()` function to register states to an animation trigger.
       * Use the `transition()` function to animate between states.
       * When a state is active within a component, its associated styles persist on the element,
       * even when the animation ends.
       *
       * @publicApi
       **/


      function state(name, styles, options) {
        return {
          type: 0
          /* State */
          ,
          name: name,
          styles: styles,
          options: options
        };
      }
      /**
       * Defines a set of animation styles, associating each style with an optional `offset` value.
       *
       * @param steps A set of animation styles with optional offset data.
       * The optional `offset` value for a style specifies a percentage of the total animation
       * time at which that style is applied.
       * @returns An object that encapsulates the keyframes data.
       *
       * @usageNotes
       * Use with the `animate()` call. Instead of applying animations
       * from the current state
       * to the destination state, keyframes describe how each style entry is applied and at what point
       * within the animation arc.
       * Compare [CSS Keyframe Animations](https://www.w3schools.com/css/css3_animations.asp).
       *
       * ### Usage
       *
       * In the following example, the offset values describe
       * when each `backgroundColor` value is applied. The color is red at the start, and changes to
       * blue when 20% of the total time has elapsed.
       *
       * ```typescript
       * // the provided offset values
       * animate("5s", keyframes([
       *   style({ backgroundColor: "red", offset: 0 }),
       *   style({ backgroundColor: "blue", offset: 0.2 }),
       *   style({ backgroundColor: "orange", offset: 0.3 }),
       *   style({ backgroundColor: "black", offset: 1 })
       * ]))
       * ```
       *
       * If there are no `offset` values specified in the style entries, the offsets
       * are calculated automatically.
       *
       * ```typescript
       * animate("5s", keyframes([
       *   style({ backgroundColor: "red" }) // offset = 0
       *   style({ backgroundColor: "blue" }) // offset = 0.33
       *   style({ backgroundColor: "orange" }) // offset = 0.66
       *   style({ backgroundColor: "black" }) // offset = 1
       * ]))
       *```
      
       * @publicApi
       */


      function keyframes(steps) {
        return {
          type: 5
          /* Keyframes */
          ,
          steps: steps
        };
      }
      /**
       * Declares an animation transition as a sequence of animation steps to run when a given
       * condition is satisfied. The condition is a Boolean expression or function that compares
       * the previous and current animation states, and returns true if this transition should occur.
       * When the state criteria of a defined transition are met, the associated animation is
       * triggered.
       *
       * @param stateChangeExpr A Boolean expression or function that compares the previous and current
       * animation states, and returns true if this transition should occur. Note that  "true" and "false"
       * match 1 and 0, respectively. An expression is evaluated each time a state change occurs in the
       * animation trigger element.
       * The animation steps run when the expression evaluates to true.
       *
       * - A state-change string takes the form "state1 => state2", where each side is a defined animation
       * state, or an asterix (*) to refer to a dynamic start or end state.
       *   - The expression string can contain multiple comma-separated statements;
       * for example "state1 => state2, state3 => state4".
       *   - Special values `:enter` and `:leave` initiate a transition on the entry and exit states,
       * equivalent to  "void => *"  and "* => void".
       *   - Special values `:increment` and `:decrement` initiate a transition when a numeric value has
       * increased or decreased in value.
       * - A function is executed each time a state change occurs in the animation trigger element.
       * The animation steps run when the function returns true.
       *
       * @param steps One or more animation objects, as returned by the `animate()` or
       * `sequence()` function, that form a transformation from one state to another.
       * A sequence is used by default when you pass an array.
       * @param options An options object that can contain a delay value for the start of the animation,
       * and additional developer-defined parameters. Provided values for additional parameters are used
       * as defaults, and override values can be passed to the caller on invocation.
       * @returns An object that encapsulates the transition data.
       *
       * @usageNotes
       * The template associated with a component binds an animation trigger to an element.
       *
       * ```HTML
       * <!-- somewhere inside of my-component-tpl.html -->
       * <div [@myAnimationTrigger]="myStatusExp">...</div>
       * ```
       *
       * All transitions are defined within an animation trigger,
       * along with named states that the transitions change to and from.
       *
       * ```typescript
       * trigger("myAnimationTrigger", [
       *  // define states
       *  state("on", style({ background: "green" })),
       *  state("off", style({ background: "grey" })),
       *  ...]
       * ```
       *
       * Note that when you call the `sequence()` function within a `{@link animations/group group()}`
       * or a `transition()` call, execution does not continue to the next instruction
       * until each of the inner animation steps have completed.
       *
       * ### Syntax examples
       *
       * The following examples define transitions between the two defined states (and default states),
       * using various options:
       *
       * ```typescript
       * // Transition occurs when the state value
       * // bound to "myAnimationTrigger" changes from "on" to "off"
       * transition("on => off", animate(500))
       * // Run the same animation for both directions
       * transition("on <=> off", animate(500))
       * // Define multiple state-change pairs separated by commas
       * transition("on => off, off => void", animate(500))
       * ```
       *
       * ### Special values for state-change expressions
       *
       * - Catch-all state change for when an element is inserted into the page and the
       * destination state is unknown:
       *
       * ```typescript
       * transition("void => *", [
       *  style({ opacity: 0 }),
       *  animate(500)
       *  ])
       * ```
       *
       * - Capture a state change between any states:
       *
       *  `transition("* => *", animate("1s 0s"))`
       *
       * - Entry and exit transitions:
       *
       * ```typescript
       * transition(":enter", [
       *   style({ opacity: 0 }),
       *   animate(500, style({ opacity: 1 }))
       *   ]),
       * transition(":leave", [
       *   animate(500, style({ opacity: 0 }))
       *   ])
       * ```
       *
       * - Use `:increment` and `:decrement` to initiate transitions:
       *
       * ```typescript
       * transition(":increment", group([
       *  query(':enter', [
       *     style({ left: '100%' }),
       *     animate('0.5s ease-out', style('*'))
       *   ]),
       *  query(':leave', [
       *     animate('0.5s ease-out', style({ left: '-100%' }))
       *  ])
       * ]))
       *
       * transition(":decrement", group([
       *  query(':enter', [
       *     style({ left: '100%' }),
       *     animate('0.5s ease-out', style('*'))
       *   ]),
       *  query(':leave', [
       *     animate('0.5s ease-out', style({ left: '-100%' }))
       *  ])
       * ]))
       * ```
       *
       * ### State-change functions
       *
       * Here is an example of a `fromState` specified as a state-change function that invokes an
       * animation when true:
       *
       * ```typescript
       * transition((fromState, toState) =>
       *  {
       *   return fromState == "off" && toState == "on";
       *  },
       *  animate("1s 0s"))
       * ```
       *
       * ### Animating to the final state
       *
       * If the final step in a transition is a call to `animate()` that uses a timing value
       * with no style data, that step is automatically considered the final animation arc,
       * for the element to reach the final state. Angular automatically adds or removes
       * CSS styles to ensure that the element is in the correct final state.
       *
       * The following example defines a transition that starts by hiding the element,
       * then makes sure that it animates properly to whatever state is currently active for trigger:
       *
       * ```typescript
       * transition("void => *", [
       *   style({ opacity: 0 }),
       *   animate(500)
       *  ])
       * ```
       * ### Boolean value matching
       * If a trigger binding value is a Boolean, it can be matched using a transition expression
       * that compares true and false or 1 and 0. For example:
       *
       * ```
       * // in the template
       * <div [@openClose]="open ? true : false">...</div>
       * // in the component metadata
       * trigger('openClose', [
       *   state('true', style({ height: '*' })),
       *   state('false', style({ height: '0px' })),
       *   transition('false <=> true', animate(500))
       * ])
       * ```
       *
       * @publicApi
       **/


      function transition(stateChangeExpr, steps) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return {
          type: 1
          /* Transition */
          ,
          expr: stateChangeExpr,
          animation: steps,
          options: options
        };
      }
      /**
       * Produces a reusable animation that can be invoked in another animation or sequence,
       * by calling the `useAnimation()` function.
       *
       * @param steps One or more animation objects, as returned by the `animate()`
       * or `sequence()` function, that form a transformation from one state to another.
       * A sequence is used by default when you pass an array.
       * @param options An options object that can contain a delay value for the start of the
       * animation, and additional developer-defined parameters.
       * Provided values for additional parameters are used as defaults,
       * and override values can be passed to the caller on invocation.
       * @returns An object that encapsulates the animation data.
       *
       * @usageNotes
       * The following example defines a reusable animation, providing some default parameter
       * values.
       *
       * ```typescript
       * var fadeAnimation = animation([
       *   style({ opacity: '{{ start }}' }),
       *   animate('{{ time }}',
       *   style({ opacity: '{{ end }}'}))
       *   ],
       *   { params: { time: '1000ms', start: 0, end: 1 }});
       * ```
       *
       * The following invokes the defined animation with a call to `useAnimation()`,
       * passing in override parameter values.
       *
       * ```js
       * useAnimation(fadeAnimation, {
       *   params: {
       *     time: '2s',
       *     start: 1,
       *     end: 0
       *   }
       * })
       * ```
       *
       * If any of the passed-in parameter values are missing from this call,
       * the default values are used. If one or more parameter values are missing before a step is
       * animated, `useAnimation()` throws an error.
       *
       * @publicApi
       */


      function animation(steps) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return {
          type: 8
          /* Reference */
          ,
          animation: steps,
          options: options
        };
      }
      /**
       * Executes a queried inner animation element within an animation sequence.
       *
       * @param options An options object that can contain a delay value for the start of the
       * animation, and additional override values for developer-defined parameters.
       * @return An object that encapsulates the child animation data.
       *
       * @usageNotes
       * Each time an animation is triggered in Angular, the parent animation
       * has priority and any child animations are blocked. In order
       * for a child animation to run, the parent animation must query each of the elements
       * containing child animations, and run them using this function.
       *
       * Note that this feature is designed to be used with `query()` and it will only work
       * with animations that are assigned using the Angular animation library. CSS keyframes
       * and transitions are not handled by this API.
       *
       * @publicApi
       */


      function animateChild() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        return {
          type: 9
          /* AnimateChild */
          ,
          options: options
        };
      }
      /**
       * Starts a reusable animation that is created using the `animation()` function.
       *
       * @param animation The reusable animation to start.
       * @param options An options object that can contain a delay value for the start of
       * the animation, and additional override values for developer-defined parameters.
       * @return An object that contains the animation parameters.
       *
       * @publicApi
       */


      function useAnimation(animation) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return {
          type: 10
          /* AnimateRef */
          ,
          animation: animation,
          options: options
        };
      }
      /**
       * Finds one or more inner elements within the current element that is
       * being animated within a sequence. Use with `animate()`.
       *
       * @param selector The element to query, or a set of elements that contain Angular-specific
       * characteristics, specified with one or more of the following tokens.
       *  - `query(":enter")` or `query(":leave")` : Query for newly inserted/removed elements.
       *  - `query(":animating")` : Query all currently animating elements.
       *  - `query("@triggerName")` : Query elements that contain an animation trigger.
       *  - `query("@*")` : Query all elements that contain an animation triggers.
       *  - `query(":self")` : Include the current element into the animation sequence.
       *
       * @param animation One or more animation steps to apply to the queried element or elements.
       * An array is treated as an animation sequence.
       * @param options An options object. Use the 'limit' field to limit the total number of
       * items to collect.
       * @return An object that encapsulates the query data.
       *
       * @usageNotes
       * Tokens can be merged into a combined query selector string. For example:
       *
       * ```typescript
       *  query(':self, .record:enter, .record:leave, @subTrigger', [...])
       * ```
       *
       * The `query()` function collects multiple elements and works internally by using
       * `element.querySelectorAll`. Use the `limit` field of an options object to limit
       * the total number of items to be collected. For example:
       *
       * ```js
       * query('div', [
       *   animate(...),
       *   animate(...)
       * ], { limit: 1 })
       * ```
       *
       * By default, throws an error when zero items are found. Set the
       * `optional` flag to ignore this error. For example:
       *
       * ```js
       * query('.some-element-that-may-not-be-there', [
       *   animate(...),
       *   animate(...)
       * ], { optional: true })
       * ```
       *
       * ### Usage Example
       *
       * The following example queries for inner elements and animates them
       * individually using `animate()`.
       *
       * ```typescript
       * @Component({
       *   selector: 'inner',
       *   template: `
       *     <div [@queryAnimation]="exp">
       *       <h1>Title</h1>
       *       <div class="content">
       *         Blah blah blah
       *       </div>
       *     </div>
       *   `,
       *   animations: [
       *    trigger('queryAnimation', [
       *      transition('* => goAnimate', [
       *        // hide the inner elements
       *        query('h1', style({ opacity: 0 })),
       *        query('.content', style({ opacity: 0 })),
       *
       *        // animate the inner elements in, one by one
       *        query('h1', animate(1000, style({ opacity: 1 }))),
       *        query('.content', animate(1000, style({ opacity: 1 }))),
       *      ])
       *    ])
       *  ]
       * })
       * class Cmp {
       *   exp = '';
       *
       *   goAnimate() {
       *     this.exp = 'goAnimate';
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      function query(selector, animation) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return {
          type: 11
          /* Query */
          ,
          selector: selector,
          animation: animation,
          options: options
        };
      }
      /**
       * Use within an animation `query()` call to issue a timing gap after
       * each queried item is animated.
       *
       * @param timings A delay value.
       * @param animation One ore more animation steps.
       * @returns An object that encapsulates the stagger data.
       *
       * @usageNotes
       * In the following example, a container element wraps a list of items stamped out
       * by an `ngFor`. The container element contains an animation trigger that will later be set
       * to query for each of the inner items.
       *
       * Each time items are added, the opacity fade-in animation runs,
       * and each removed item is faded out.
       * When either of these animations occur, the stagger effect is
       * applied after each item's animation is started.
       *
       * ```html
       * <!-- list.component.html -->
       * <button (click)="toggle()">Show / Hide Items</button>
       * <hr />
       * <div [@listAnimation]="items.length">
       *   <div *ngFor="let item of items">
       *     {{ item }}
       *   </div>
       * </div>
       * ```
       *
       * Here is the component code:
       *
       * ```typescript
       * import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
       * @Component({
       *   templateUrl: 'list.component.html',
       *   animations: [
       *     trigger('listAnimation', [
       *     ...
       *     ])
       *   ]
       * })
       * class ListComponent {
       *   items = [];
       *
       *   showItems() {
       *     this.items = [0,1,2,3,4];
       *   }
       *
       *   hideItems() {
       *     this.items = [];
       *   }
       *
       *   toggle() {
       *     this.items.length ? this.hideItems() : this.showItems();
       *    }
       *  }
       * ```
       *
       * Here is the animation trigger code:
       *
       * ```typescript
       * trigger('listAnimation', [
       *   transition('* => *', [ // each time the binding value changes
       *     query(':leave', [
       *       stagger(100, [
       *         animate('0.5s', style({ opacity: 0 }))
       *       ])
       *     ]),
       *     query(':enter', [
       *       style({ opacity: 0 }),
       *       stagger(100, [
       *         animate('0.5s', style({ opacity: 1 }))
       *       ])
       *     ])
       *   ])
       * ])
       * ```
       *
       * @publicApi
       */


      function stagger(timings, animation) {
        return {
          type: 12
          /* Stagger */
          ,
          timings: timings,
          animation: animation
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function scheduleMicroTask(cb) {
        Promise.resolve(null).then(cb);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An empty programmatic controller for reusable animations.
       * Used internally when animations are disabled, to avoid
       * checking for the null case when an animation player is expected.
       *
       * @see `animate()`
       * @see `AnimationPlayer`
       * @see `GroupPlayer`
       *
       * @publicApi
       */


      var NoopAnimationPlayer = /*#__PURE__*/function () {
        function NoopAnimationPlayer() {
          var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, NoopAnimationPlayer);

          this._onDoneFns = [];
          this._onStartFns = [];
          this._onDestroyFns = [];
          this._started = false;
          this._destroyed = false;
          this._finished = false;
          this._position = 0;
          this.parentPlayer = null;
          this.totalTime = duration + delay;
        }

        _createClass(NoopAnimationPlayer, [{
          key: "_onFinish",
          value: function _onFinish() {
            if (!this._finished) {
              this._finished = true;

              this._onDoneFns.forEach(function (fn) {
                return fn();
              });

              this._onDoneFns = [];
            }
          }
        }, {
          key: "onStart",
          value: function onStart(fn) {
            this._onStartFns.push(fn);
          }
        }, {
          key: "onDone",
          value: function onDone(fn) {
            this._onDoneFns.push(fn);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy(fn) {
            this._onDestroyFns.push(fn);
          }
        }, {
          key: "hasStarted",
          value: function hasStarted() {
            return this._started;
          }
        }, {
          key: "init",
          value: function init() {}
        }, {
          key: "play",
          value: function play() {
            if (!this.hasStarted()) {
              this._onStart();

              this.triggerMicrotask();
            }

            this._started = true;
          }
          /** @internal */

        }, {
          key: "triggerMicrotask",
          value: function triggerMicrotask() {
            var _this17 = this;

            scheduleMicroTask(function () {
              return _this17._onFinish();
            });
          }
        }, {
          key: "_onStart",
          value: function _onStart() {
            this._onStartFns.forEach(function (fn) {
              return fn();
            });

            this._onStartFns = [];
          }
        }, {
          key: "pause",
          value: function pause() {}
        }, {
          key: "restart",
          value: function restart() {}
        }, {
          key: "finish",
          value: function finish() {
            this._onFinish();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            if (!this._destroyed) {
              this._destroyed = true;

              if (!this.hasStarted()) {
                this._onStart();
              }

              this.finish();

              this._onDestroyFns.forEach(function (fn) {
                return fn();
              });

              this._onDestroyFns = [];
            }
          }
        }, {
          key: "reset",
          value: function reset() {}
        }, {
          key: "setPosition",
          value: function setPosition(position) {
            this._position = this.totalTime ? position * this.totalTime : 1;
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.totalTime ? this._position / this.totalTime : 1;
          }
          /** @internal */

        }, {
          key: "triggerCallback",
          value: function triggerCallback(phaseName) {
            var methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
            methods.forEach(function (fn) {
              return fn();
            });
            methods.length = 0;
          }
        }]);

        return NoopAnimationPlayer;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A programmatic controller for a group of reusable animations.
       * Used internally to control animations.
       *
       * @see `AnimationPlayer`
       * @see `{@link animations/group group()}`
       *
       */


      var AnimationGroupPlayer = /*#__PURE__*/function () {
        function AnimationGroupPlayer(_players) {
          var _this18 = this;

          _classCallCheck(this, AnimationGroupPlayer);

          this._onDoneFns = [];
          this._onStartFns = [];
          this._finished = false;
          this._started = false;
          this._destroyed = false;
          this._onDestroyFns = [];
          this.parentPlayer = null;
          this.totalTime = 0;
          this.players = _players;
          var doneCount = 0;
          var destroyCount = 0;
          var startCount = 0;
          var total = this.players.length;

          if (total == 0) {
            scheduleMicroTask(function () {
              return _this18._onFinish();
            });
          } else {
            this.players.forEach(function (player) {
              player.onDone(function () {
                if (++doneCount == total) {
                  _this18._onFinish();
                }
              });
              player.onDestroy(function () {
                if (++destroyCount == total) {
                  _this18._onDestroy();
                }
              });
              player.onStart(function () {
                if (++startCount == total) {
                  _this18._onStart();
                }
              });
            });
          }

          this.totalTime = this.players.reduce(function (time, player) {
            return Math.max(time, player.totalTime);
          }, 0);
        }

        _createClass(AnimationGroupPlayer, [{
          key: "_onFinish",
          value: function _onFinish() {
            if (!this._finished) {
              this._finished = true;

              this._onDoneFns.forEach(function (fn) {
                return fn();
              });

              this._onDoneFns = [];
            }
          }
        }, {
          key: "init",
          value: function init() {
            this.players.forEach(function (player) {
              return player.init();
            });
          }
        }, {
          key: "onStart",
          value: function onStart(fn) {
            this._onStartFns.push(fn);
          }
        }, {
          key: "_onStart",
          value: function _onStart() {
            if (!this.hasStarted()) {
              this._started = true;

              this._onStartFns.forEach(function (fn) {
                return fn();
              });

              this._onStartFns = [];
            }
          }
        }, {
          key: "onDone",
          value: function onDone(fn) {
            this._onDoneFns.push(fn);
          }
        }, {
          key: "onDestroy",
          value: function onDestroy(fn) {
            this._onDestroyFns.push(fn);
          }
        }, {
          key: "hasStarted",
          value: function hasStarted() {
            return this._started;
          }
        }, {
          key: "play",
          value: function play() {
            if (!this.parentPlayer) {
              this.init();
            }

            this._onStart();

            this.players.forEach(function (player) {
              return player.play();
            });
          }
        }, {
          key: "pause",
          value: function pause() {
            this.players.forEach(function (player) {
              return player.pause();
            });
          }
        }, {
          key: "restart",
          value: function restart() {
            this.players.forEach(function (player) {
              return player.restart();
            });
          }
        }, {
          key: "finish",
          value: function finish() {
            this._onFinish();

            this.players.forEach(function (player) {
              return player.finish();
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._onDestroy();
          }
        }, {
          key: "_onDestroy",
          value: function _onDestroy() {
            if (!this._destroyed) {
              this._destroyed = true;

              this._onFinish();

              this.players.forEach(function (player) {
                return player.destroy();
              });

              this._onDestroyFns.forEach(function (fn) {
                return fn();
              });

              this._onDestroyFns = [];
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.players.forEach(function (player) {
              return player.reset();
            });
            this._destroyed = false;
            this._finished = false;
            this._started = false;
          }
        }, {
          key: "setPosition",
          value: function setPosition(p) {
            var timeAtPosition = p * this.totalTime;
            this.players.forEach(function (player) {
              var position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
              player.setPosition(position);
            });
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            var longestPlayer = this.players.reduce(function (longestSoFar, player) {
              var newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
              return newPlayerIsLongest ? player : longestSoFar;
            }, null);
            return longestPlayer != null ? longestPlayer.getPosition() : 0;
          }
        }, {
          key: "beforeDestroy",
          value: function beforeDestroy() {
            this.players.forEach(function (player) {
              if (player.beforeDestroy) {
                player.beforeDestroy();
              }
            });
          }
          /** @internal */

        }, {
          key: "triggerCallback",
          value: function triggerCallback(phaseName) {
            var methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
            methods.forEach(function (fn) {
              return fn();
            });
            methods.length = 0;
          }
        }]);

        return AnimationGroupPlayer;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var ɵPRE_STYLE = '!';
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=animations.js.map

      /***/
    },

    /***/
    "dFHt":
    /*!*************************************************!*\
      !*** ./src/app/pages/product/product.module.ts ***!
      \*************************************************/

    /*! exports provided: ProductModule */

    /***/
    function dFHt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
        return ProductModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product.component */
      "10O5");
      /* harmony import */


      var _produto_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./produto.route */
      "JCV4");
      /* harmony import */


      var _list_all_list_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-all/list-all.component */
      "DR9K");
      /* harmony import */


      var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-new/add-new.component */
      "hbLF");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductModule = function ProductModule() {
        _classCallCheck(this, ProductModule);
      };

      ProductModule.ɵfac = function ProductModule_Factory(t) {
        return new (t || ProductModule)();
      };

      ProductModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: ProductModule
      });
      ProductModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _produto_route__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductModule, {
          declarations: [_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"], _list_all_list_all_component__WEBPACK_IMPORTED_MODULE_3__["ListAllComponent"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_4__["AddNewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _produto_route__WEBPACK_IMPORTED_MODULE_2__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "hbLF":
    /*!************************************************************!*\
      !*** ./src/app/pages/product/add-new/add-new.component.ts ***!
      \************************************************************/

    /*! exports provided: AddNewComponent */

    /***/
    function hbLF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewComponent", function () {
        return AddNewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var AddNewComponent = /*#__PURE__*/function () {
        // transform: ImageTransform = {};
        // imageURL: string;
        // imagemNome: string;
        function AddNewComponent(fb, router, toastr) {
          _classCallCheck(this, AddNewComponent);

          this.fb = fb;
          this.router = router;
          this.toastr = toastr;
          this.imageChangedEvent = '';
          this.croppedImage = '';
          this.canvasRotation = 0;
          this.rotation = 0;
          this.scale = 1;
          this.showCropper = false;
          this.containWithinAspectRatio = false;
        }

        _createClass(AddNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createForm();
          }
        }, {
          key: "createForm",
          value: function createForm() {
            this.productForm = this.fb.group({
              categorieId: '',
              name: '',
              description: '',
              quantitie: ''
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {//super.configurarValidacaoFormulario(this.formInputElements);
          }
        }, {
          key: "addProduct",
          value: function addProduct() {// if (this.produtoForm.dirty && this.produtoForm.valid) {
            //   this.produto = Object.assign({}, this.produto, this.produtoForm.value);
            //   this.produto.imagemUpload = this.croppedImage.split(',')[1];
            //   this.produto.imagem = this.imagemNome;
            //   this.produto.valor = CurrencyUtils.StringParaDecimal(this.produto.valor);
            //   this.produtoService.novoProduto(this.produto)
            //     .subscribe(
            //       sucesso => { this.processarSucesso(sucesso) },
            //       falha => { this.processarFalha(falha) }
            //     );
            //   this.mudancasNaoSalvas = false;
            // }
          }
        }, {
          key: "processSuccess",
          value: function processSuccess(response) {// this.produtoForm.reset();
            // this.errors = [];
            // let toast = this.toastr.success('Produto cadastrado com sucesso!', 'Sucesso!');
            // if (toast) {
            //   toast.onHidden.subscribe(() => {
            //     this.router.navigate(['/produtos/listar-todos']);
            //   });
            // }
          }
        }, {
          key: "processError",
          value: function processError(fail) {// this.errors = fail.error.errors;
            // this.toastr.error('Ocorreu um erro!', 'Opa :(');
          }
        }, {
          key: "fileChangeEvent",
          value: function fileChangeEvent(event) {// this.imageChangedEvent = event;
            // this.imagemNome = event.currentTarget.files[0].name;
          } // imageCropped(event: ImageCroppedEvent) {
          //   this.croppedImage = event.base64;
          // }

        }, {
          key: "imageLoaded",
          value: function imageLoaded() {
            this.showCropper = true;
          } // cropperReady(sourceImageDimensions: Dimensions) {
          //   console.log('Cropper ready', sourceImageDimensions);
          // }

        }, {
          key: "loadImageFailed",
          value: function loadImageFailed() {// this.errors.push('O formato do arquivo ' + this.imagemNome + ' não é aceito.');
          }
        }]);

        return AddNewComponent;
      }();

      AddNewComponent.ɵfac = function AddNewComponent_Factory(t) {
        return new (t || AddNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
      };

      AddNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewComponent,
        selectors: [["app-add-new"]],
        decls: 26,
        vars: 1,
        consts: [[1, "container", "main-container"], [1, "row"], [1, "col-md-10"], [3, "formGroup"], [1, "form-group"], [1, "control-label"], ["id", "fornecedorId", "formControlName", "categorieId", 1, "form-control"], ["id", "name", "type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["id", "description", "type", "text", "placeholder", "Description", "formControlName", "description", 1, "form-control"], ["id", "quantitie", "type", "text", "placeholder", "Quantitie", "formControlName", "quantitie", 1, "form-control"]],
        template: function AddNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Product ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Categorie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Quantitie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productForm);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-product-product-module-es5.js.map