(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-admin-body-Author-Author-module~components-admin-body-publisher-publisher-module~~0ae09f18"],{

/***/ "PjcS":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js ***!
  \*****************************************************************************************/
/*! exports provided: CKEditorComponent, CKEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorComponent", function() { return CKEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CKEditorModule", function() { return CKEditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-watchdog/src/editorwatchdog */ "q09h");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
const ɵ0 = (val, index) => ('0' + (index).toString(16)).slice(-2);
// A copy of @ckeditor/ckeditor5-utils/src/uid.js
// A hash table of hex numbers to avoid using toString() in uid() which is costly.
// [ '00', '01', '02', ..., 'fe', 'ff' ]
const HEX_NUMBERS = new Array(256).fill(0)
    .map(ɵ0);
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
    const r1 = Math.random() * 0x100000000 >>> 0;
    const r2 = Math.random() * 0x100000000 >>> 0;
    const r3 = Math.random() * 0x100000000 >>> 0;
    const r4 = Math.random() * 0x100000000 >>> 0;
    // Make sure that id does not start with number.
    return 'e' +
        HEX_NUMBERS[r1 >> 0 & 0xFF] +
        HEX_NUMBERS[r1 >> 8 & 0xFF] +
        HEX_NUMBERS[r1 >> 16 & 0xFF] +
        HEX_NUMBERS[r1 >> 24 & 0xFF] +
        HEX_NUMBERS[r2 >> 0 & 0xFF] +
        HEX_NUMBERS[r2 >> 8 & 0xFF] +
        HEX_NUMBERS[r2 >> 16 & 0xFF] +
        HEX_NUMBERS[r2 >> 24 & 0xFF] +
        HEX_NUMBERS[r3 >> 0 & 0xFF] +
        HEX_NUMBERS[r3 >> 8 & 0xFF] +
        HEX_NUMBERS[r3 >> 16 & 0xFF] +
        HEX_NUMBERS[r3 >> 24 & 0xFF] +
        HEX_NUMBERS[r4 >> 0 & 0xFF] +
        HEX_NUMBERS[r4 >> 8 & 0xFF] +
        HEX_NUMBERS[r4 >> 16 & 0xFF] +
        HEX_NUMBERS[r4 >> 24 & 0xFF];
}

/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorComponent {
    constructor(elementRef, ngZone) {
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
    set disabled(isDisabled) {
        this.setDisabledState(isDisabled);
    }
    get disabled() {
        if (this.editorInstance) {
            return this.editorInstance.isReadOnly;
        }
        return this.initiallyDisabled;
    }
    /**
     * The instance of the editor created by this component.
     */
    get editorInstance() {
        let editorWatchdog = this.editorWatchdog;
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
    // Implementing the AfterViewInit interface.
    ngAfterViewInit() {
        this.attachToWatchdog();
    }
    // Implementing the OnDestroy interface.
    ngOnDestroy() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.watchdog) {
                yield this.watchdog.remove(this.id);
            }
            else if (this.editorWatchdog && this.editorWatchdog.editor) {
                yield this.editorWatchdog.destroy();
                this.editorWatchdog = undefined;
            }
        });
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    writeValue(value) {
        // This method is called with the `null` value when the form resets.
        // A component's responsibility is to restore to the initial state.
        if (value === null) {
            value = '';
        }
        // If already initialized.
        if (this.editorInstance) {
            // The lock mechanism prevents from calling `cvaOnChange()` during changing
            // the editor state. See #139
            this.isEditorSettingData = true;
            this.editorInstance.setData(value);
            this.isEditorSettingData = false;
        }
        // If not, wait for it to be ready; store the data.
        else {
            this.data = value;
            // If the editor element is already available, then update its content.
            // If the ngModel is used then the editor element should be updated directly here.
            if (this.editorElement) {
                this.editorElement.innerHTML = this.data;
            }
        }
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    registerOnChange(callback) {
        this.cvaOnChange = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    registerOnTouched(callback) {
        this.cvaOnTouched = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    setDisabledState(isDisabled) {
        // If already initialized.
        if (this.editorInstance) {
            this.editorInstance.isReadOnly = isDisabled;
        }
        // Store the state anyway to use it once the editor is created.
        this.initiallyDisabled = isDisabled;
    }
    /**
     * Creates the editor instance, sets initial editor data, then integrates
     * the editor with the Angular component. This method does not use the `editor.setData()`
     * because of the issue in the collaboration mode (#6).
     */
    attachToWatchdog() {
        const creator = (element, config) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.ngZone.runOutsideAngular(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.elementRef.nativeElement.appendChild(element);
                const editor = yield this.editor.create(element, config);
                if (this.initiallyDisabled) {
                    editor.isReadOnly = this.initiallyDisabled;
                }
                this.ngZone.run(() => {
                    this.ready.emit(editor);
                });
                this.setUpEditorEvents(editor);
                return editor;
            }));
        });
        const destructor = (editor) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield editor.destroy();
            this.elementRef.nativeElement.removeChild(this.editorElement);
        });
        const emitError = () => {
            this.ngZone.run(() => {
                this.error.emit();
            });
        };
        const element = document.createElement(this.tagName);
        const config = this.getConfig();
        this.editorElement = element;
        // Based on the presence of the watchdog decide how to initialize the editor.
        if (this.watchdog) {
            // When the context watchdog is passed add the new item to it based on the passed configuration.
            this.watchdog.add({
                id: this.id,
                type: 'editor',
                creator,
                destructor,
                sourceElementOrData: element,
                config
            });
            this.watchdog.on('itemError', (_, { itemId }) => {
                if (itemId === this.id) {
                    emitError();
                }
            });
        }
        else {
            // In the other case create the watchdog by hand to keep the editor running.
            const editorWatchdog = new _ckeditor_ckeditor5_watchdog_src_editorwatchdog__WEBPACK_IMPORTED_MODULE_2__["default"](this.editor);
            editorWatchdog.setCreator(creator);
            editorWatchdog.setDestructor(destructor);
            editorWatchdog.on('error', emitError);
            this.editorWatchdog = editorWatchdog;
            this.editorWatchdog.create(element, config);
        }
    }
    getConfig() {
        if (this.data && this.config.initialData) {
            throw new Error('Editor data should be provided either using `config.initialData` or `data` properties.');
        }
        // Merge two possible ways of providing data into the `config.initialData` field.
        return Object.assign(Object.assign({}, this.config), { initialData: this.config.initialData || this.data || '' });
    }
    /**
     * Integrates the editor with the component by attaching related event listeners.
     */
    setUpEditorEvents(editor) {
        const modelDocument = editor.model.document;
        const viewDocument = editor.editing.view.document;
        modelDocument.on('change:data', (evt) => {
            this.ngZone.run(() => {
                if (this.cvaOnChange && !this.isEditorSettingData) {
                    const data = editor.getData();
                    this.cvaOnChange(data);
                }
                this.change.emit({ event: evt, editor });
            });
        });
        viewDocument.on('focus', (evt) => {
            this.ngZone.run(() => {
                this.focus.emit({ event: evt, editor });
            });
        });
        viewDocument.on('blur', (evt) => {
            this.ngZone.run(() => {
                if (this.cvaOnTouched) {
                    this.cvaOnTouched();
                }
                this.blur.emit({ event: evt, editor });
            });
        });
    }
}
CKEditorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ckeditor',
                template: '<ng-template></ng-template>',
                // Integration with @angular/forms.
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CKEditorComponent),
                        multi: true
                    }
                ]
            },] }
];
CKEditorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CKEditorComponent.propDecorators = {
    editor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tagName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    watchdog: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};

/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
class CKEditorModule {
}
CKEditorModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [CKEditorComponent],
                exports: [CKEditorComponent]
            },] }
];

/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ckeditor-ckeditor5-angular.js.map


/***/ }),

/***/ "RQe4":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/getsubnodes.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSubNodes; });
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module watchdog/utils/getsubnodes
 */

/* globals EventTarget, Event */

function getSubNodes( head, excludedProperties = new Set() ) {
	const nodes = [ head ];

	// @if CK_DEBUG_WATCHDOG // const prevNodeMap = new Map();

	// Nodes are stored to prevent infinite looping.
	const subNodes = new Set();

	while ( nodes.length > 0 ) {
		const node = nodes.shift();

		if ( subNodes.has( node ) || shouldNodeBeSkipped( node ) || excludedProperties.has( node ) ) {
			continue;
		}

		subNodes.add( node );

		// Handle arrays, maps, sets, custom collections that implements `[ Symbol.iterator ]()`, etc.
		if ( node[ Symbol.iterator ] ) {
			// The custom editor iterators might cause some problems if the editor is crashed.
			try {
				for ( const n of node ) {
					nodes.push( n );

					// @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( n ) ) {
					// @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( n, node );
					// @if CK_DEBUG_WATCHDOG // }
				}
			} catch ( err ) {
				// Do not log errors for broken structures
				// since we are in the error handling process already.
				// eslint-disable-line no-empty
			}
		} else {
			for ( const key in node ) {
				// We share a reference via the protobuf library within the editors,
				// hence the shared value should be skipped. Although, it's not a perfect
				// solution since new places like that might occur in the future.
				if ( key === 'defaultValue' ) {
					continue;
				}

				nodes.push( node[ key ] );

				// @if CK_DEBUG_WATCHDOG // if ( !prevNodeMap.has( node[ key ] ) ) {
				// @if CK_DEBUG_WATCHDOG // 	prevNodeMap.set( node[ key ], node );
				// @if CK_DEBUG_WATCHDOG // }
			}
		}
	}

	// @if CK_DEBUG_WATCHDOG // return { subNodes, prevNodeMap };

	return subNodes;
}

function shouldNodeBeSkipped( node ) {
	const type = Object.prototype.toString.call( node );
	const typeOfNode = typeof node;

	return (
		typeOfNode === 'number' ||
		typeOfNode === 'boolean' ||
		typeOfNode === 'string' ||
		typeOfNode === 'symbol' ||
		typeOfNode === 'function' ||
		type === '[object Date]' ||
		type === '[object RegExp]' ||
		type === '[object Module]' ||

		node === undefined ||
		node === null ||

		// Skip native DOM objects, e.g. Window, nodes, events, etc.
		node instanceof EventTarget ||
		node instanceof Event
	);
}


/***/ }),

/***/ "cktb":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/utils/areconnectedthroughproperties.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return areConnectedThroughProperties; });
/* harmony import */ var _getsubnodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getsubnodes */ "RQe4");
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
function areConnectedThroughProperties( target1, target2, excludedNodes = new Set() ) {
	if ( target1 === target2 && isObject( target1 ) ) {
		return true;
	}

	// @if CK_DEBUG_WATCHDOG // return checkConnectionBetweenProps( target1, target2, excludedNodes );

	const subNodes1 = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target1, excludedNodes );
	const subNodes2 = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target2, excludedNodes );

	for ( const node of subNodes1 ) {
		if ( subNodes2.has( node ) ) {
			return true;
		}
	}

	return false;
}

/* istanbul ignore next */
// eslint-disable-next-line
function checkConnectionBetweenProps( target1, target2, excludedNodes ) {
	const { subNodes: subNodes1, prevNodeMap: prevNodeMap1 } = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target1, excludedNodes.subNodes );
	const { subNodes: subNodes2, prevNodeMap: prevNodeMap2 } = Object(_getsubnodes__WEBPACK_IMPORTED_MODULE_0__["default"])( target2, excludedNodes.subNodes );

	for ( const sharedNode of subNodes1 ) {
		if ( subNodes2.has( sharedNode ) ) {
			const connection = [];

			connection.push( sharedNode );

			let node = prevNodeMap1.get( sharedNode );

			while ( node && node !== target1 ) {
				connection.push( node );
				node = prevNodeMap1.get( node );
			}

			node = prevNodeMap2.get( sharedNode );

			while ( node && node !== target2 ) {
				connection.unshift( node );
				node = prevNodeMap2.get( node );
			}

			console.log( '--------' );
			console.log( { target1 } );
			console.log( { sharedNode } );
			console.log( { target2 } );
			console.log( { connection } );

			return true;
		}
	}

	return false;
}

function isObject( structure ) {
	return typeof structure === 'object' && structure !== null;
}


/***/ }),

/***/ "pyrN":
/*!*******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/watchdog.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Watchdog; });
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
class Watchdog {
	/**
	 * @param {module:watchdog/watchdog~WatchdogConfig} config The watchdog plugin configuration.
	 */
	constructor( config ) {
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
		this._boundErrorHandler = evt => {
			// `evt.error` is exposed by EventError while `evt.reason` is available in PromiseRejectionEvent.
			const error = evt.error || evt.reason;

			// Note that `evt.reason` might be everything that is in the promise rejection.
			// Similarly everything that is thrown lands in `evt.error`.
			if ( error instanceof Error ) {
				this._handleError( error, evt );
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

		if ( !this._restart ) {
			throw new Error(
				'The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. ' +
				'Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.'
			);
		}
	}

	/**
	 * Sets the function that is responsible for creating watched items.
	 *
	 * @param {Function} creator A callback responsible for creating an item. Returns a promise
	 * that is resolved when the item is created.
	 */
	setCreator( creator ) {
		this._creator = creator;
	}

	/**
	 * Sets the function that is responsible for destroying watched items.
	 *
	 * @param {Function} destructor A callback that takes the item and returns the promise
	 * to the destroying process.
	 */
	setDestructor( destructor ) {
		this._destructor = destructor;
	}

	/**
	 * Destroys the watchdog and releases the resources.
	 */
	destroy() {
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
	on( eventName, callback ) {
		if ( !this._listeners[ eventName ] ) {
			this._listeners[ eventName ] = [];
		}

		this._listeners[ eventName ].push( callback );
	}

	/**
	 * Stops listening to the specified event name by removing the callback from event listeners.
	 *
	 * Note that this method differs from the CKEditor 5's default `EventEmitterMixin` implementation.
	 *
	 * @param {String} eventName The event name.
	 * @param {Function} callback A callback which will be removed from event listeners.
	 */
	off( eventName, callback ) {
		this._listeners[ eventName ] = this._listeners[ eventName ]
			.filter( cb => cb !== callback );
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
	_fire( eventName, ...args ) {
		const callbacks = this._listeners[ eventName ] || [];

		for ( const callback of callbacks ) {
			callback.apply( this, [ null, ...args ] );
		}
	}

	/**
	 * Starts error handling by attaching global error handlers.
	 *
	 * @protected
	 */
	_startErrorHandling() {
		window.addEventListener( 'error', this._boundErrorHandler );
		window.addEventListener( 'unhandledrejection', this._boundErrorHandler );
	}

	/**
	 * Stops error handling by detaching global error handlers.
	 *
	 * @protected
	 */
	_stopErrorHandling() {
		window.removeEventListener( 'error', this._boundErrorHandler );
		window.removeEventListener( 'unhandledrejection', this._boundErrorHandler );
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
	_handleError( error, evt ) {
		// @if CK_DEBUG // if ( error.is && error.is( 'CKEditorError' ) && error.context === undefined ) {
		// @if CK_DEBUG // console.warn( 'The error is missing its context and Watchdog cannot restart the proper item.' );
		// @if CK_DEBUG // }

		if ( this._shouldReactToError( error ) ) {
			this.crashes.push( {
				message: error.message,
				stack: error.stack,

				// `evt.filename`, `evt.lineno` and `evt.colno` are available only in ErrorEvent events
				filename: evt.filename,
				lineno: evt.lineno,
				colno: evt.colno,
				date: this._now()
			} );

			const causesRestart = this._shouldRestart();

			this.state = 'crashed';
			this._fire( 'stateChange' );
			this._fire( 'error', { error, causesRestart } );

			if ( causesRestart ) {
				this._restart();
			} else {
				this.state = 'crashedPermanently';
				this._fire( 'stateChange' );
			}
		}
	}

	/**
	 * Checks whether an error should be handled by the watchdog.
	 *
	 * @private
	 * @param {Error} error An error that was caught by the error handling process.
	 */
	_shouldReactToError( error ) {
		return (
			error.is &&
			error.is( 'CKEditorError' ) &&
			error.context !== undefined &&

			// In some cases the watched item should not be restarted - e.g. during the item initialization.
			// That's why the `null` was introduced as a correct error context which does cause restarting.
			error.context !== null &&

			// Do not react to errors if the watchdog is in states other than `ready`.
			this.state === 'ready' &&

			this._isErrorComingFromThisItem( error )
		);
	}

	/**
	 * Checks if the watchdog should restart the underlying item.
	 *
	 * @private
	 */
	_shouldRestart() {
		if ( this.crashes.length <= this._crashNumberLimit ) {
			return true;
		}

		const lastErrorTime = this.crashes[ this.crashes.length - 1 ].date;
		const firstMeaningfulErrorTime = this.crashes[ this.crashes.length - 1 - this._crashNumberLimit ].date;

		const averageNonErrorTimePeriod = ( lastErrorTime - firstMeaningfulErrorTime ) / this._crashNumberLimit;

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
}

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


/***/ }),

/***/ "q09h":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditorWatchdog; });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash-es */ "T89o");
/* harmony import */ var _utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/areconnectedthroughproperties */ "cktb");
/* harmony import */ var _watchdog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watchdog */ "pyrN");
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
class EditorWatchdog extends _watchdog__WEBPACK_IMPORTED_MODULE_2__["default"] {
	/**
	 * @param {*} Editor The editor class.
	 * @param {module:watchdog/watchdog~WatchdogConfig} [watchdogConfig] The watchdog plugin configuration.
	 */
	constructor( Editor, watchdogConfig = {} ) {
		super( watchdogConfig );

		/**
		 * The current editor instance.
		 *
		 * @private
		 * @type {module:core/editor/editor~Editor}
		 */
		this._editor = null;

		/**
		 * Throttled save method. The `save()` method is called the specified `saveInterval` after `throttledSave()` is called,
		 * unless a new action happens in the meantime.
		 *
		 * @private
		 * @type {Function}
		 */
		this._throttledSave = Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["throttle"])(
			this._save.bind( this ),
			typeof watchdogConfig.saveInterval === 'number' ? watchdogConfig.saveInterval : 5000
		);

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
		this._creator = ( ( elementOrData, config ) => Editor.create( elementOrData, config ) );
		this._destructor = editor => editor.destroy();
	}

	/**
	 * The current editor instance.
	 *
	 * @readonly
	 * @type {module:core/editor/editor~Editor}
	 */
	get editor() {
		return this._editor;
	}

	/**
	 * @inheritDoc
	 */
	get _item() {
		return this._editor;
	}

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
	_restart() {
		return Promise.resolve()
			.then( () => {
				this.state = 'initializing';
				this._fire( 'stateChange' );

				return this._destroy();
			} )
			.catch( err => {
				console.error( 'An error happened during the editor destroying.', err );
			} )
			.then( () => {
				if ( typeof this._elementOrData === 'string' ) {
					return this.create( this._data, this._config, this._config.context );
				} else {
					const updatedConfig = Object.assign( {}, this._config, {
						initialData: this._data
					} );

					return this.create( this._elementOrData, updatedConfig, updatedConfig.context );
				}
			} )
			.then( () => {
				this._fire( 'restart' );
			} );
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
	create( elementOrData = this._elementOrData, config = this._config, context ) {
		return Promise.resolve()
			.then( () => {
				super._startErrorHandling();

				this._elementOrData = elementOrData;

				// Clone configuration because it might be shared within multiple watchdog instances. Otherwise,
				// when an error occurs in one of these editors, the watchdog will restart all of them.
				this._config = this._cloneEditorConfiguration( config ) || {};

				this._config.context = context;

				return this._creator( elementOrData, this._config );
			} )
			.then( editor => {
				this._editor = editor;

				editor.model.document.on( 'change:data', this._throttledSave );

				this._lastDocumentVersion = editor.model.document.version;
				this._data = this._getData();

				this.state = 'ready';
				this._fire( 'stateChange' );
			} );
	}

	/**
	 * Destroys the watchdog and the current editor instance. It fires the callback
	 * registered in {@link #setDestructor `setDestructor()`} and uses it to destroy the editor instance.
	 * It also sets the state to `destroyed`.
	 *
	 * @returns {Promise}
	 */
	destroy() {
		return Promise.resolve()
			.then( () => {
				this.state = 'destroyed';
				this._fire( 'stateChange' );

				super.destroy();

				return this._destroy();
			} );
	}

	/**
	 * @private
	 * @returns {Promise}
	 */
	_destroy() {
		return Promise.resolve()
			.then( () => {
				this._stopErrorHandling();

				// Save data if there is a remaining editor data change.
				this._throttledSave.flush();

				const editor = this._editor;

				this._editor = null;

				return this._destructor( editor );
			} );
	}

	/**
	 * Saves the editor data, so it can be restored after the crash even if the data cannot be fetched at
	 * the moment of the crash.
	 *
	 * @private
	 */
	_save() {
		const version = this._editor.model.document.version;

		// Operation may not result in a model change, so the document's version can be the same.
		if ( version === this._lastDocumentVersion ) {
			return;
		}

		try {
			this._data = this._getData();
			this._lastDocumentVersion = version;
		} catch ( err ) {
			console.error(
				err,
				'An error happened during restoring editor data. ' +
				'Editor will be restored from the previously saved data.'
			);
		}
	}

	/**
	 * @protected
	 * @param {Set} props
	 */
	_setExcludedProperties( props ) {
		this._excludedProps = props;
	}

	/**
	 * Returns the editor data.
	 *
	 * @private
	 * @returns {Object<String,String>}
	 */
	_getData() {
		const data = {};

		for ( const rootName of this._editor.model.document.getRootNames() ) {
			data[ rootName ] = this._editor.data.get( { rootName } );
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
	_isErrorComingFromThisItem( error ) {
		return Object(_utils_areconnectedthroughproperties__WEBPACK_IMPORTED_MODULE_1__["default"])( this._editor, error.context, this._excludedProps );
	}

	/**
	 * Clones the editor configuration.
	 *
	 * @private
	 * @param {Object} config
	 */
	_cloneEditorConfiguration( config ) {
		return Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["cloneDeepWith"])( config, ( value, key ) => {
			// Leave DOM references.
			if ( Object(lodash_es__WEBPACK_IMPORTED_MODULE_0__["isElement"])( value ) ) {
				return value;
			}

			if ( key === 'context' ) {
				return value;
			}
		} );
	}

	/**
	 * Fired after the watchdog restarts the error in case of a crash.
	 *
	 * @event restart
	 */
}


/***/ })

}]);
//# sourceMappingURL=default~components-admin-body-Author-Author-module~components-admin-body-publisher-publisher-module~~0ae09f18-es2015.js.map