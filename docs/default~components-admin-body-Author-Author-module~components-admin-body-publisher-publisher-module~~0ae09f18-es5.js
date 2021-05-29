(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-admin-body-Author-Author-module~components-admin-body-publisher-publisher-module~~0ae09f18"], {
    /***/
    "PjcS":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js ***!
      \*****************************************************************************************/

    /*! exports provided: CKEditorComponent, CKEditorModule */

    /***/
    function PjcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CKEditorComponent", function () {
        return CKEditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CKEditorModule", function () {
        return CKEditorModule;
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


      var _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-watchdog/src/editorwatchdog */
      "q09h");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md.
       */

      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
       */


      var ɵ0 = function ɵ0(val, index) {
        return ('0' + index.toString(16)).slice(-2);
      }; // A copy of @ckeditor/ckeditor5-utils/src/uid.js
      // A hash table of hex numbers to avoid using toString() in uid() which is costly.
      // [ '00', '01', '02', ..., 'fe', 'ff' ]


      var HEX_NUMBERS = new Array(256).fill(0).map(ɵ0);
      /**
       * Returns a unique id. The id starts with an "e" character and a randomly generated string of
       * 32 alphanumeric characters.
       *
       * **Note**: The characters the unique id is built from correspond to the hex number notation
       * (from "0" to "9", from "a" to "f"). In other words, each id corresponds to an "e" followed
       * by 16 8-bit numbers next to each other.
       *
       * @returns An unique id string.
       */

      function uid() {
        // Let's create some positive random 32bit integers first.
        //
        // 1. Math.random() is a float between 0 and 1.
        // 2. 0x100000000 is 2^32 = 4294967296.
        // 3. >>> 0 enforces integer (in JS all numbers are floating point).
        //
        // For instance:
        //		Math.random() * 0x100000000 = 3366450031.853859
        // but
        //		Math.random() * 0x100000000 >>> 0 = 3366450031.
        var r1 = Math.random() * 0x100000000 >>> 0;
        var r2 = Math.random() * 0x100000000 >>> 0;
        var r3 = Math.random() * 0x100000000 >>> 0;
        var r4 = Math.random() * 0x100000000 >>> 0; // Make sure that id does not start with number.

        return 'e' + HEX_NUMBERS[r1 >> 0 & 0xFF] + HEX_NUMBERS[r1 >> 8 & 0xFF] + HEX_NUMBERS[r1 >> 16 & 0xFF] + HEX_NUMBERS[r1 >> 24 & 0xFF] + HEX_NUMBERS[r2 >> 0 & 0xFF] + HEX_NUMBERS[r2 >> 8 & 0xFF] + HEX_NUMBERS[r2 >> 16 & 0xFF] + HEX_NUMBERS[r2 >> 24 & 0xFF] + HEX_NUMBERS[r3 >> 0 & 0xFF] + HEX_NUMBERS[r3 >> 8 & 0xFF] + HEX_NUMBERS[r3 >> 16 & 0xFF] + HEX_NUMBERS[r3 >> 24 & 0xFF] + HEX_NUMBERS[r4 >> 0 & 0xFF] + HEX_NUMBERS[r4 >> 8 & 0xFF] + HEX_NUMBERS[r4 >> 16 & 0xFF] + HEX_NUMBERS[r4 >> 24 & 0xFF];
      }
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md.
       */


      var CKEditorComponent = /*#__PURE__*/function () {
        function CKEditorComponent(elementRef, ngZone) {
          _classCallCheck(this, CKEditorComponent);

          /**
           * The configuration of the editor.
           * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editorconfig-EditorConfig.html
           * to learn more.
           */
          this.config = {};
          /**
           * The initial data of the editor. Useful when not using the ngModel.
           * See https://angular.io/api/forms/NgModel to learn more.
           */

          this.data = '';
          /**
           * Tag name of the editor component.
           *
           * The default tag is 'div'.
           */

          this.tagName = 'div';
          /**
           * Fires when the editor is ready. It corresponds with the `editor#ready`
           * https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#event-ready
           * event.
           */

          this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Fires when the content of the editor has changed. It corresponds with the `editor.model.document#change`
           * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_model_document-Document.html#event-change
           * event.
           */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Fires when the editing view of the editor is blurred. It corresponds with the `editor.editing.view.document#blur`
           * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:blur
           * event.
           */

          this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Fires when the editing view of the editor is focused. It corresponds with the `editor.editing.view.document#focus`
           * https://ckeditor.com/docs/ckeditor5/latest/api/module_engine_view_document-Document.html#event-event:focus
           * event.
           */

          this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * Fires when the editor component crashes.
           */

          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * If the component is read–only before the editor instance is created, it remembers that state,
           * so the editor can become read–only once it is ready.
           */

          this.initiallyDisabled = false;
          /**
           * A lock flag preventing from calling the `cvaOnChange()` during setting editor data.
           */

          this.isEditorSettingData = false;
          this.id = uid();
          this.ngZone = ngZone;
          this.elementRef = elementRef;
        }
        /**
         * When set `true`, the editor becomes read-only.
         * See https://ckeditor.com/docs/ckeditor5/latest/api/module_core_editor_editor-Editor.html#member-isReadOnly
         * to learn more.
         */


        _createClass(CKEditorComponent, [{
          key: "ngAfterViewInit",
          // Implementing the AfterViewInit interface.
          value: function ngAfterViewInit() {
            this.attachToWatchdog();
          } // Implementing the OnDestroy interface.

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.watchdog) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 3;
                      return this.watchdog.remove(this.id);

                    case 3:
                      _context.next = 9;
                      break;

                    case 5:
                      if (!(this.editorWatchdog && this.editorWatchdog.editor)) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 8;
                      return this.editorWatchdog.destroy();

                    case 8:
                      this.editorWatchdog = undefined;

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Implementing the ControlValueAccessor interface (only when binding to ngModel).

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            // This method is called with the `null` value when the form resets.
            // A component's responsibility is to restore to the initial state.
            if (value === null) {
              value = '';
            } // If already initialized.


            if (this.editorInstance) {
              // The lock mechanism prevents from calling `cvaOnChange()` during changing
              // the editor state. See #139
              this.isEditorSettingData = true;
              this.editorInstance.setData(value);
              this.isEditorSettingData = false;
            } // If not, wait for it to be ready; store the data.
            else {
                this.data = value; // If the editor element is already available, then update its content.
                // If the ngModel is used then the editor element should be updated directly here.

                if (this.editorElement) {
                  this.editorElement.innerHTML = this.data;
                }
              }
          } // Implementing the ControlValueAccessor interface (only when binding to ngModel).

        }, {
          key: "registerOnChange",
          value: function registerOnChange(callback) {
            this.cvaOnChange = callback;
          } // Implementing the ControlValueAccessor interface (only when binding to ngModel).

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(callback) {
            this.cvaOnTouched = callback;
          } // Implementing the ControlValueAccessor interface (only when binding to ngModel).

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            // If already initialized.
            if (this.editorInstance) {
              this.editorInstance.isReadOnly = isDisabled;
            } // Store the state anyway to use it once the editor is created.


            this.initiallyDisabled = isDisabled;
          }
          /**
           * Creates the editor instance, sets initial editor data, then integrates
           * the editor with the Angular component. This method does not use the `editor.setData()`
           * because of the issue in the collaboration mode (#6).
           */

        }, {
          key: "attachToWatchdog",
          value: function attachToWatchdog() {
            var _this = this;

            var creator = function creator(element, config) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        return _context3.abrupt("return", this.ngZone.runOutsideAngular(function () {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this3 = this;

                            var editor;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    this.elementRef.nativeElement.appendChild(element);
                                    _context2.next = 3;
                                    return this.editor.create(element, config);

                                  case 3:
                                    editor = _context2.sent;

                                    if (this.initiallyDisabled) {
                                      editor.isReadOnly = this.initiallyDisabled;
                                    }

                                    this.ngZone.run(function () {
                                      _this3.ready.emit(editor);
                                    });
                                    this.setUpEditorEvents(editor);
                                    return _context2.abrupt("return", editor);

                                  case 8:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2, this);
                          }));
                        }));

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            };

            var destructor = function destructor(editor) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return editor.destroy();

                      case 2:
                        this.elementRef.nativeElement.removeChild(this.editorElement);

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            };

            var emitError = function emitError() {
              _this.ngZone.run(function () {
                _this.error.emit();
              });
            };

            var element = document.createElement(this.tagName);
            var config = this.getConfig();
            this.editorElement = element; // Based on the presence of the watchdog decide how to initialize the editor.

            if (this.watchdog) {
              // When the context watchdog is passed add the new item to it based on the passed configuration.
              this.watchdog.add({
                id: this.id,
                type: 'editor',
                creator: creator,
                destructor: destructor,
                sourceElementOrData: element,
                config: config
              });
              this.watchdog.on('itemError', function (_, _ref) {
                var itemId = _ref.itemId;

                if (itemId === _this.id) {
                  emitError();
                }
              });
            } else {
              // In the other case create the watchdog by hand to keep the editor running.
              var editorWatchdog = new _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_2__["default"](this.editor);
              editorWatchdog.setCreator(creator);
              editorWatchdog.setDestructor(destructor);
              editorWatchdog.on('error', emitError);
              this.editorWatchdog = editorWatchdog;
              this.editorWatchdog.create(element, config);
            }
          }
        }, {
          key: "getConfig",
          value: function getConfig() {
            if (this.data && this.config.initialData) {
              throw new Error('Editor data should be provided either using `config.initialData` or `data` properties.');
            } // Merge two possible ways of providing data into the `config.initialData` field.


            return Object.assign(Object.assign({}, this.config), {
              initialData: this.config.initialData || this.data || ''
            });
          }
          /**
           * Integrates the editor with the component by attaching related event listeners.
           */

        }, {
          key: "setUpEditorEvents",
          value: function setUpEditorEvents(editor) {
            var _this4 = this;

            var modelDocument = editor.model.document;
            var viewDocument = editor.editing.view.document;
            modelDocument.on('change:data', function (evt) {
              _this4.ngZone.run(function () {
                if (_this4.cvaOnChange && !_this4.isEditorSettingData) {
                  var data = editor.getData();

                  _this4.cvaOnChange(data);
                }

                _this4.change.emit({
                  event: evt,
                  editor: editor
                });
              });
            });
            viewDocument.on('focus', function (evt) {
              _this4.ngZone.run(function () {
                _this4.focus.emit({
                  event: evt,
                  editor: editor
                });
              });
            });
            viewDocument.on('blur', function (evt) {
              _this4.ngZone.run(function () {
                if (_this4.cvaOnTouched) {
                  _this4.cvaOnTouched();
                }

                _this4.blur.emit({
                  event: evt,
                  editor: editor
                });
              });
            });
          }
        }, {
          key: "disabled",
          set: function set(isDisabled) {
            this.setDisabledState(isDisabled);
          },
          get: function get() {
            if (this.editorInstance) {
              return this.editorInstance.isReadOnly;
            }

            return this.initiallyDisabled;
          }
          /**
           * The instance of the editor created by this component.
           */

        }, {
          key: "editorInstance",
          get: function get() {
            var editorWatchdog = this.editorWatchdog;

            if (this.watchdog) {
              // Temporarily use the `_watchdogs` internal map as the `getItem()` method throws
              // an error when the item is not registered yet.
              // See https://github.com/ckeditor/ckeditor5-angular/issues/177.
              editorWatchdog = this.watchdog._watchdogs.get(this.id);
            }

            if (editorWatchdog) {
              return editorWatchdog.editor;
            }

            return null;
          }
        }]);

        return CKEditorComponent;
      }();

      CKEditorComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'ckeditor',
          template: '<ng-template></ng-template>',
          // Integration with @angular/forms.
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return CKEditorComponent;
            }),
            multi: true
          }]
        }]
      }];

      CKEditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CKEditorComponent.propDecorators = {
        editor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        watchdog: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ready: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        blur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        focus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md.
       */

      var CKEditorModule = function CKEditorModule() {
        _classCallCheck(this, CKEditorModule);
      };

      CKEditorModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          declarations: [CKEditorComponent],
          exports: [CKEditorComponent]
        }]
      }];
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md.
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ckeditor-ckeditor5-angular.js.map

      /***/
    },

    /***/
    "RQe4":
    /*!****************************************************************************!*\
      !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function RQe4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return getSubNodes;
      });
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
       */

      /**
       * @module watchdog/utils/getsubnodes
       */

      /* globals EventTarget, Event */


      function getSubNodes(head) {
        var excludedProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
        var nodes = [head]; // @if CK_DEBUG_WATCHDOG // const prevNodeMap = new Map();
        // Nodes are stored to prevent infinite looping.

        var subNodes = new Set();

        while (nodes.length > 0) {
          var node = nodes.shift();

          if (subNodes.has(node) || shouldNodeBeSkipped(node) || excludedProperties.has(node)) {
            continue;
          }

          subNodes.add(node); // Handle arrays, maps, sets, custom collections that implements `[ Symbol.iterator ]()`, etc.

          if (node[Symbol.iterator]) {
            // The custom editor iterators might cause some problems if the editor is crashed.
            try {
              var _iterator = _createForOfIteratorHelper(node),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var n = _step.value;
                  nodes.push(n); // @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( n ) ) {
                  // @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( n, node );
                  // @if CK_DEBUG_WATCHDOG // }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } catch (err) {// Do not log errors for broken structures
              // since we are in the error handling process already.
              // eslint-disable-line no-empty
            }
          } else {
            for (var key in node) {
              // We share a reference via the protobuf library within the editors,
              // hence the shared value should be skipped. Although, it's not a perfect
              // solution since new places like that might occur in the future.
              if (key === 'defaultValue') {
                continue;
              }

              nodes.push(node[key]); // @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( node[ key ] ) ) {
              // @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( node[ key ], node );
              // @if CK_DEBUG_WATCHDOG // }
            }
          }
        } // @if CK_DEBUG_WATCHDOG // return { subNodes, prevNodeMap };


        return subNodes;
      }

      function shouldNodeBeSkipped(node) {
        var type = Object.prototype.toString.call(node);
        var typeOfNode = typeof node;
        return typeOfNode === 'number' || typeOfNode === 'boolean' || typeOfNode === 'string' || typeOfNode === 'symbol' || typeOfNode === 'function' || type === '[object Date]' || type === '[object RegExp]' || type === '[object Module]' || node === undefined || node === null || // Skip native DOM objects, e.g. Window, nodes, events, etc.
        node instanceof EventTarget || node instanceof Event;
      }
      /***/

    },

    /***/
    "cktb":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function cktb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return areConnectedThroughProperties;
      });
      /* harmony import */


      var _getsubnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./getsubnodes */
      "RQe4");
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
       */

      /**
       * @module watchdog/utils/areconnectedthroughproperties
       */

      /* globals console */

      /**
       * Traverses both structures to find out whether there is a reference that is shared between both structures.
       *
       * @param {Object|Array} target1
       * @param {Object|Array} target2
       */


      function areConnectedThroughProperties(target1, target2) {
        var excludedNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Set();

        if (target1 === target2 && isObject(target1)) {
          return true;
        } // @if CK_DEBUG_WATCHDOG // return checkConnectionBetweenProps( target1, target2, excludedNodes );


        var subNodes1 = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])(target1, excludedNodes);
        var subNodes2 = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])(target2, excludedNodes);

        var _iterator2 = _createForOfIteratorHelper(subNodes1),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var node = _step2.value;

            if (subNodes2.has(node)) {
              return true;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return false;
      }
      /* istanbul ignore next */
      // eslint-disable-next-line


      function checkConnectionBetweenProps(target1, target2, excludedNodes) {
        var _Object = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])(target1, excludedNodes.subNodes),
            subNodes1 = _Object.subNodes,
            prevNodeMap1 = _Object.prevNodeMap;

        var _Object2 = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])(target2, excludedNodes.subNodes),
            subNodes2 = _Object2.subNodes,
            prevNodeMap2 = _Object2.prevNodeMap;

        var _iterator3 = _createForOfIteratorHelper(subNodes1),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var sharedNode = _step3.value;

            if (subNodes2.has(sharedNode)) {
              var connection = [];
              connection.push(sharedNode);
              var node = prevNodeMap1.get(sharedNode);

              while (node && node !== target1) {
                connection.push(node);
                node = prevNodeMap1.get(node);
              }

              node = prevNodeMap2.get(sharedNode);

              while (node && node !== target2) {
                connection.unshift(node);
                node = prevNodeMap2.get(node);
              }

              console.log('--------');
              console.log({
                target1: target1
              });
              console.log({
                sharedNode: sharedNode
              });
              console.log({
                target2: target2
              });
              console.log({
                connection: connection
              });
              return true;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return false;
      }

      function isObject(structure) {
        return typeof structure === 'object' && structure !== null;
      }
      /***/

    },

    /***/
    "pyrN":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/watchdog.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function pyrN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return Watchdog;
      });
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
       */

      /**
       * @module watchdog/watchdog
       */

      /* globals window */

      /**
       * An abstract watchdog class that handles most of the error handling process and the state of the underlying component.
       *
       * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and how to use it.
       *
       * @private
       * @abstract
       */


      var Watchdog = /*#__PURE__*/function () {
        /**
         * @param {module:watchdog/watchdog~WatchdogConfig} config The watchdog plugin configuration.
         */
        function Watchdog(config) {
          var _this5 = this;

          _classCallCheck(this, Watchdog);

          /**
           * An array of crashes saved as an object with the following properties:
           *
           * * `message`: `String`,
           * * `stack`: `String`,
           * * `date`: `Number`,
           * * `filename`: `String | undefined`,
           * * `lineno`: `Number | undefined`,
           * * `colno`: `Number | undefined`,
           *
           * @public
           * @readonly
           * @type {Array.<Object>}
           */
          this.crashes = [];
          /**
           * Specifies the state of the item watched by the watchdog. The state can be one of the following values:
           *
           * * `initializing` &ndash; Before the first initialization, and after crashes, before the item is ready.
           * * `ready` &ndash; A state when the user can interact with the item.
           * * `crashed` &ndash; A state when an error occurs. It quickly changes to `initializing` or `crashedPermanently`
           * depending on how many and how frequent errors have been caught recently.
           * * `crashedPermanently` &ndash; A state when the watchdog stops reacting to errors and keeps the item it is watching crashed,
           * * `destroyed` &ndash; A state when the item is manually destroyed by the user after calling `watchdog.destroy()`.
           *
           * @public
           * @type {'initializing'|'ready'|'crashed'|'crashedPermanently'|'destroyed'}
           */

          this.state = 'initializing';
          /**
           * @protected
           * @type {Number}
           * @see module:watchdog/watchdog~WatchdogConfig
           */

          this._crashNumberLimit = typeof config.crashNumberLimit === 'number' ? config.crashNumberLimit : 3;
          /**
           * Returns the result of the `Date.now()` call. It can be overridden in tests to mock time as some popular
           * approaches like `sinon.useFakeTimers()` do not work well with error handling.
           *
           * @protected
           */

          this._now = Date.now;
          /**
           * @protected
           * @type {Number}
           * @see module:watchdog/watchdog~WatchdogConfig
           */

          this._minimumNonErrorTimePeriod = typeof config.minimumNonErrorTimePeriod === 'number' ? config.minimumNonErrorTimePeriod : 5000;
          /**
           * Checks if the event error comes from the underlying item and restarts the item.
           *
           * @private
           * @type {Function}
           */

          this._boundErrorHandler = function (evt) {
            // `evt.error` is exposed by EventError while `evt.reason` is available in PromiseRejectionEvent.
            var error = evt.error || evt.reason; // Note that `evt.reason` might be everything that is in the promise rejection.
            // Similarly everything that is thrown lands in `evt.error`.

            if (error instanceof Error) {
              _this5._handleError(error, evt);
            }
          };
          /**
           * The creation method.
           *
           * @protected
           * @member {Function} #_creator
           * @see #setCreator
           */

          /**
           * The destruction method.
           *
           * @protected
           * @member {Function} #_destructor
           * @see #setDestructor
           */

          /**
           * The watched item.
           *
           * @abstract
           * @protected
           * @member {Object|undefined} #_item
           */

          /**
           * The method responsible for restarting the watched item.
           *
           * @abstract
           * @protected
           * @method #_restart
           */

          /**
           * Traverses the error context and the watched item to find out whether the error should
           * be handled by the given item.
           *
           * @abstract
           * @protected
           * @method #_isErrorComingFromThisItem
           * @param {module:utils/ckeditorerror~CKEditorError} error
           */

          /**
           * A dictionary of event emitter listeners.
           *
           * @private
           * @type {Object.<String,Array.<Function>>}
           */


          this._listeners = {};

          if (!this._restart) {
            throw new Error('The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. ' + 'Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.');
          }
        }
        /**
         * Sets the function that is responsible for creating watched items.
         *
         * @param {Function} creator A callback responsible for creating an item. Returns a promise
         * that is resolved when the item is created.
         */


        _createClass(Watchdog, [{
          key: "setCreator",
          value: function setCreator(creator) {
            this._creator = creator;
          }
          /**
           * Sets the function that is responsible for destroying watched items.
           *
           * @param {Function} destructor A callback that takes the item and returns the promise
           * to the destroying process.
           */

        }, {
          key: "setDestructor",
          value: function setDestructor(destructor) {
            this._destructor = destructor;
          }
          /**
           * Destroys the watchdog and releases the resources.
           */

        }, {
          key: "destroy",
          value: function destroy() {
            this._stopErrorHandling();

            this._listeners = {};
          }
          /**
           * Starts listening to a specific event name by registering a callback that will be executed
           * whenever an event with a given name fires.
           *
           * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
           *
           * @param {String} eventName The event name.
           * @param {Function} callback A callback which will be added to event listeners.
           */

        }, {
          key: "on",
          value: function on(eventName, callback) {
            if (!this._listeners[eventName]) {
              this._listeners[eventName] = [];
            }

            this._listeners[eventName].push(callback);
          }
          /**
           * Stops listening to the specified event name by removing the callback from event listeners.
           *
           * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
           *
           * @param {String} eventName The event name.
           * @param {Function} callback A callback which will be removed from event listeners.
           */

        }, {
          key: "off",
          value: function off(eventName, callback) {
            this._listeners[eventName] = this._listeners[eventName].filter(function (cb) {
              return cb !== callback;
            });
          }
          /**
           * Fires an event with a given event name and arguments.
           *
           * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
           *
           * @protected
           * @param {String} eventName The event name.
           * @param  {...*} args Event arguments.
           */

        }, {
          key: "_fire",
          value: function _fire(eventName) {
            var callbacks = this._listeners[eventName] || [];

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            var _iterator4 = _createForOfIteratorHelper(callbacks),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var callback = _step4.value;
                callback.apply(this, [null].concat(args));
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
          /**
           * Starts error handling by attaching global error handlers.
           *
           * @protected
           */

        }, {
          key: "_startErrorHandling",
          value: function _startErrorHandling() {
            window.addEventListener('error', this._boundErrorHandler);
            window.addEventListener('unhandledrejection', this._boundErrorHandler);
          }
          /**
           * Stops error handling by detaching global error handlers.
           *
           * @protected
           */

        }, {
          key: "_stopErrorHandling",
          value: function _stopErrorHandling() {
            window.removeEventListener('error', this._boundErrorHandler);
            window.removeEventListener('unhandledrejection', this._boundErrorHandler);
          }
          /**
           * Checks if an error comes from the watched item and restarts it.
           * It reacts to {@link module:utils/ckeditorerror~CKEditorError `CKEditorError` errors} only.
           *
           * @private
           * @fires error
           * @param {Error} error Error.
           * @param {ErrorEvent|PromiseRejectionEvent} evt An error event.
           */

        }, {
          key: "_handleError",
          value: function _handleError(error, evt) {
            // @if CK_DEBUG // if ( error.is && error.is( 'CKEditorError' ) && error.context === undefined ) {
            // @if CK_DEBUG // console.warn( 'The error is missing its context and Watchdog cannot restart the proper item.' );
            // @if CK_DEBUG // }
            if (this._shouldReactToError(error)) {
              this.crashes.push({
                message: error.message,
                stack: error.stack,
                // `evt.filename`, `evt.lineno` and `evt.colno` are available only in ErrorEvent events
                filename: evt.filename,
                lineno: evt.lineno,
                colno: evt.colno,
                date: this._now()
              });

              var causesRestart = this._shouldRestart();

              this.state = 'crashed';

              this._fire('stateChange');

              this._fire('error', {
                error: error,
                causesRestart: causesRestart
              });

              if (causesRestart) {
                this._restart();
              } else {
                this.state = 'crashedPermanently';

                this._fire('stateChange');
              }
            }
          }
          /**
           * Checks whether an error should be handled by the watchdog.
           *
           * @private
           * @param {Error} error An error that was caught by the error handling process.
           */

        }, {
          key: "_shouldReactToError",
          value: function _shouldReactToError(error) {
            return error.is && error.is('CKEditorError') && error.context !== undefined && // In some cases the watched item should not be restarted - e.g. during the item initialization.
            // That's why the `null` was introduced as a correct error context which does cause restarting.
            error.context !== null && // Do not react to errors if the watchdog is in states other than `ready`.
            this.state === 'ready' && this._isErrorComingFromThisItem(error);
          }
          /**
           * Checks if the watchdog should restart the underlying item.
           *
           * @private
           */

        }, {
          key: "_shouldRestart",
          value: function _shouldRestart() {
            if (this.crashes.length <= this._crashNumberLimit) {
              return true;
            }

            var lastErrorTime = this.crashes[this.crashes.length - 1].date;
            var firstMeaningfulErrorTime = this.crashes[this.crashes.length - 1 - this._crashNumberLimit].date;
            var averageNonErrorTimePeriod = (lastErrorTime - firstMeaningfulErrorTime) / this._crashNumberLimit;
            return averageNonErrorTimePeriod > this._minimumNonErrorTimePeriod;
          }
          /**
           * Fired when a new {@link module:utils/ckeditorerror~CKEditorError `CKEditorError`} error connected to the watchdog instance occurs
           * and the watchdog will react to it.
           *
           * 	watchdog.on( 'error', ( evt, { error, causesRestart } ) => {
           * 		console.log( 'An error occurred.' );
           * 	} );
           *
           * @event error
           */

        }]);

        return Watchdog;
      }();
      /**
       * The watchdog plugin configuration.
       *
       * @typedef {Object} WatchdogConfig
       *
       * @property {Number} [crashNumberLimit=3] A threshold specifying the number of watched item crashes
       * when the watchdog stops restarting the item in case of errors.
       * After this limit is reached and the time between the last errors is shorter than `minimumNonErrorTimePeriod`,
       * the watchdog changes its state to `crashedPermanently` and it stops restarting the item. This prevents an infinite restart loop.
       *
       * @property {Number} [minimumNonErrorTimePeriod=5000] An average number of milliseconds between the last watched item errors
       * (defaults to 5000). When the period of time between errors is lower than that and the `crashNumberLimit` is also reached,
       * the watchdog changes its state to `crashedPermanently` and it stops restarting the item. This prevents an infinite restart loop.
       *
       * @property {Number} [saveInterval=5000] A minimum number of milliseconds between saving the editor data internally (defaults to 5000).
       * Note that for large documents this might impact the editor performance.
       */

      /***/

    },

    /***/
    "q09h":
    /*!*************************************************************************!*\
      !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function q09h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return EditorWatchdog;
      });
      /* harmony import */


      var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! lodash-es */
      "T89o");
      /* harmony import */


      var _utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils/areconnectedthroughproperties */
      "cktb");
      /* harmony import */


      var _watchdog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./watchdog */
      "pyrN");
      /**
       * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
       * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
       */

      /**
       * @module watchdog/editorwatchdog
       */

      /* globals console */

      /**
       * A watchdog for CKEditor 5 editors.
       *
       * See the {@glink features/watchdog Watchdog feature guide} to learn the rationale behind it and
       * how to use it.
       *
       * @extends {module:watchdog/watchdog~Watchdog}
       */


      var EditorWatchdog = /*#__PURE__*/function (_watchdog__WEBPACK_IM) {
        _inherits(EditorWatchdog, _watchdog__WEBPACK_IM);

        var _super = _createSuper(EditorWatchdog);

        /**
         * @param {*} Editor The editor class.
         * @param {module:watchdog/watchdog~WatchdogConfig} [watchdogConfig] The watchdog plugin configuration.
         */
        function EditorWatchdog(Editor) {
          var _this6;

          var watchdogConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, EditorWatchdog);

          _this6 = _super.call(this, watchdogConfig);
          /**
           * The current editor instance.
           *
           * @private
           * @type {module:core/editor/editor~Editor}
           */

          _this6._editor = null;
          /**
           * Throttled save method. The `save()` method is called the specified `saveInterval` after `throttledSave()` is called,
           * unless a new action happens in the meantime.
           *
           * @private
           * @type {Function}
           */

          _this6._throttledSave = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["throttle"])(_this6._save.bind(_assertThisInitialized(_this6)), typeof watchdogConfig.saveInterval === 'number' ? watchdogConfig.saveInterval : 5000);
          /**
           * The latest saved editor data represented as a root name -> root data object.
           *
           * @private
           * @member {Object.<String,String>} #_data
           */

          /**
           * The last document version.
           *
           * @private
           * @member {Number} #_lastDocumentVersion
           */

          /**
           * The editor source element or data.
           *
           * @private
           * @member {HTMLElement|String|Object.<String|String>} #_elementOrData
           */

          /**
           * The editor configuration.
           *
           * @private
           * @member {Object|undefined} #_config
           */
          // Set default creator and destructor functions:

          _this6._creator = function (elementOrData, config) {
            return Editor.create(elementOrData, config);
          };

          _this6._destructor = function (editor) {
            return editor.destroy();
          };

          return _this6;
        }
        /**
         * The current editor instance.
         *
         * @readonly
         * @type {module:core/editor/editor~Editor}
         */


        _createClass(EditorWatchdog, [{
          key: "_restart",

          /**
           * Sets the function that is responsible for the editor creation.
           * It expects a function that should return a promise.
           *
           *		watchdog.setCreator( ( element, config ) => ClassicEditor.create( element, config ) );
           *
           * @method #setCreator
           * @param {Function} creator
           */

          /**
           * Sets the function that is responsible for the editor destruction.
           * Overrides the default destruction function, which destroys only the editor instance.
           * It expects a function that should return a promise or `undefined`.
           *
           *		watchdog.setDestructor( editor => {
           *			// Do something before the editor is destroyed.
           *
           *			return editor
           *				.destroy()
           *				.then( () => {
           *					// Do something after the editor is destroyed.
           *				} );
           *		} );
           *
           * @method #setDestructor
           * @param {Function} destructor
           */

          /**
           * Restarts the editor instance. This method is called whenever an editor error occurs. It fires the `restart` event and changes
           * the state to `initializing`.
           *
           * @protected
           * @fires restart
           * @returns {Promise}
           */
          value: function _restart() {
            var _this7 = this;

            return Promise.resolve().then(function () {
              _this7.state = 'initializing';

              _this7._fire('stateChange');

              return _this7._destroy();
            })["catch"](function (err) {
              console.error('An error happened during the editor destroying.', err);
            }).then(function () {
              if (typeof _this7._elementOrData === 'string') {
                return _this7.create(_this7._data, _this7._config, _this7._config.context);
              } else {
                var updatedConfig = Object.assign({}, _this7._config, {
                  initialData: _this7._data
                });
                return _this7.create(_this7._elementOrData, updatedConfig, updatedConfig.context);
              }
            }).then(function () {
              _this7._fire('restart');
            });
          }
          /**
           * Creates the editor instance and keeps it running, using the defined creator and destructor.
           *
           * @param {HTMLElement|String|Object.<String|String>} [elementOrData] The editor source element or the editor data.
           * @param {module:core/editor/editorconfig~EditorConfig} [config] The editor configuration.
           * @param {Object} [context] A context for the editor.
           *
           * @returns {Promise}
           */

        }, {
          key: "create",
          value: function create() {
            var _this8 = this;

            var elementOrData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._elementOrData;
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._config;
            var context = arguments.length > 2 ? arguments[2] : undefined;
            return Promise.resolve().then(function () {
              _get(_getPrototypeOf(EditorWatchdog.prototype), "_startErrorHandling", _this8).call(_this8);

              _this8._elementOrData = elementOrData; // Clone configuration because it might be shared within multiple watchdog instances. Otherwise,
              // when an error occurs in one of these editors, the watchdog will restart all of them.

              _this8._config = _this8._cloneEditorConfiguration(config) || {};
              _this8._config.context = context;
              return _this8._creator(elementOrData, _this8._config);
            }).then(function (editor) {
              _this8._editor = editor;
              editor.model.document.on('change:data', _this8._throttledSave);
              _this8._lastDocumentVersion = editor.model.document.version;
              _this8._data = _this8._getData();
              _this8.state = 'ready';

              _this8._fire('stateChange');
            });
          }
          /**
           * Destroys the watchdog and the current editor instance. It fires the callback
           * registered in {@link #setDestructor `setDestructor()`} and uses it to destroy the editor instance.
           * It also sets the state to `destroyed`.
           *
           * @returns {Promise}
           */

        }, {
          key: "destroy",
          value: function destroy() {
            var _this9 = this;

            return Promise.resolve().then(function () {
              _this9.state = 'destroyed';

              _this9._fire('stateChange');

              _get(_getPrototypeOf(EditorWatchdog.prototype), "destroy", _this9).call(_this9);

              return _this9._destroy();
            });
          }
          /**
           * @private
           * @returns {Promise}
           */

        }, {
          key: "_destroy",
          value: function _destroy() {
            var _this10 = this;

            return Promise.resolve().then(function () {
              _this10._stopErrorHandling(); // Save data if there is a remaining editor data change.


              _this10._throttledSave.flush();

              var editor = _this10._editor;
              _this10._editor = null;
              return _this10._destructor(editor);
            });
          }
          /**
           * Saves the editor data, so it can be restored after the crash even if the data cannot be fetched at
           * the moment of the crash.
           *
           * @private
           */

        }, {
          key: "_save",
          value: function _save() {
            var version = this._editor.model.document.version; // Operation may not result in a model change, so the document's version can be the same.

            if (version === this._lastDocumentVersion) {
              return;
            }

            try {
              this._data = this._getData();
              this._lastDocumentVersion = version;
            } catch (err) {
              console.error(err, 'An error happened during restoring editor data. ' + 'Editor will be restored from the previously saved data.');
            }
          }
          /**
           * @protected
           * @param {Set} props
           */

        }, {
          key: "_setExcludedProperties",
          value: function _setExcludedProperties(props) {
            this._excludedProps = props;
          }
          /**
           * Returns the editor data.
           *
           * @private
           * @returns {Object<String,String>}
           */

        }, {
          key: "_getData",
          value: function _getData() {
            var data = {};

            var _iterator5 = _createForOfIteratorHelper(this._editor.model.document.getRootNames()),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var rootName = _step5.value;
                data[rootName] = this._editor.data.get({
                  rootName: rootName
                });
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            return data;
          }
          /**
           * Traverses the error context and the current editor to find out whether these structures are connected
           * to each other via properties.
           *
           * @protected
           * @param {module:utils/ckeditorerror~CKEditorError} error
           */

        }, {
          key: "_isErrorComingFromThisItem",
          value: function _isErrorComingFromThisItem(error) {
            return Object(_utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_1__["default"])(this._editor, error.context, this._excludedProps);
          }
          /**
           * Clones the editor configuration.
           *
           * @private
           * @param {Object} config
           */

        }, {
          key: "_cloneEditorConfiguration",
          value: function _cloneEditorConfiguration(config) {
            return Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeepWith"])(config, function (value, key) {
              // Leave DOM references.
              if (Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["isElement"])(value)) {
                return value;
              }

              if (key === 'context') {
                return value;
              }
            });
          }
          /**
           * Fired after the watchdog restarts the error in case of a crash.
           *
           * @event restart
           */

        }, {
          key: "editor",
          get: function get() {
            return this._editor;
          }
          /**
           * @inheritDoc
           */

        }, {
          key: "_item",
          get: function get() {
            return this._editor;
          }
        }]);

        return EditorWatchdog;
      }(_watchdog__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~components-admin-body-Author-Author-module~components-admin-body-publisher-publisher-module~~0ae09f18-es5.js.map