webpackJsonp(["common"],{

/***/ "./node_modules/@angular/cdk/esm5/stepper.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StepperSelectionEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CdkStepperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var CdkStepLabel = /** @class */ (function () {
    function CdkStepLabel(template) {
        this.template = template;
    }
    CdkStepLabel.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[cdkStepLabel]',
                },] },
    ];
    /** @nocollapse */
    CdkStepLabel.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */], },
    ]; };
    return CdkStepLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Used to generate unique ID for each stepper component.
 */
var nextId = 0;
/**
 * Change event emitted on selection changes.
 */
var StepperSelectionEvent = /** @class */ (function () {
    function StepperSelectionEvent() {
    }
    return StepperSelectionEvent;
}());
var CdkStep = /** @class */ (function () {
    function CdkStep(_stepper) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._customCompleted = null;
    }
    Object.defineProperty(CdkStep.prototype, "editable", {
        get: /**
         * Whether the user can return to this step once it has been marked as complted.
         * @return {?}
         */
        function () { return this._editable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._editable = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "optional", {
        get: /**
         * Whether the completion of step is optional.
         * @return {?}
         */
        function () { return this._optional; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optional = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "completed", {
        get: /**
         * Whether step is marked as completed.
         * @return {?}
         */
        function () {
            return this._customCompleted == null ? this._defaultCompleted : this._customCompleted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customCompleted = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "_defaultCompleted", {
        get: /**
         * @return {?}
         */
        function () {
            return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
        },
        enumerable: true,
        configurable: true
    });
    /** Selects this step component. */
    /**
     * Selects this step component.
     * @return {?}
     */
    CdkStep.prototype.select = /**
     * Selects this step component.
     * @return {?}
     */
    function () {
        this._stepper.selected = this;
    };
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    CdkStep.prototype.reset = /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    function () {
        this.interacted = false;
        if (this._customCompleted != null) {
            this._customCompleted = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    /**
     * @return {?}
     */
    CdkStep.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    };
    CdkStep.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{selector: 'cdk-step',
                    exportAs: 'cdkStep',
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    CdkStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* forwardRef */])(function () { return CdkStepper; }),] },] },
    ]; };
    CdkStep.propDecorators = {
        "stepLabel": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */], args: [CdkStepLabel,] },],
        "content": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* TemplateRef */],] },],
        "stepControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "label": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "optional": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "completed": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return CdkStep;
}());
var CdkStepper = /** @class */ (function () {
    function CdkStepper(_dir, _changeDetectorRef) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /**
         * The index of the step that the focus can be set.
         */
        this._focusIndex = 0;
        this._orientation = 'horizontal';
        this._groupId = nextId++;
    }
    Object.defineProperty(CdkStepper.prototype, "linear", {
        get: /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */
        function () { return this._linear; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._linear = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
        get: /**
         * The index of the selected step.
         * @return {?}
         */
        function () { return this._selectedIndex; },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            if (this._steps) {
                // Ensure that the index can't be out of bounds.
                if (index < 0 || index > this._steps.length - 1) {
                    throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                }
                if (this._anyControlsInvalidOrPending(index) || index < this._selectedIndex &&
                    !this._steps.toArray()[index].editable) {
                    // remove focus from clicked step header if the step is not able to be selected
                    this._stepHeader.toArray()[index].nativeElement.blur();
                }
                else if (this._selectedIndex != index) {
                    this._emitStepperSelectionEvent(index);
                    this._focusIndex = this._selectedIndex;
                }
            }
            else {
                this._selectedIndex = this._focusIndex = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selected", {
        get: /**
         * The step that is selected.
         * @return {?}
         */
        function () { return this._steps.toArray()[this.selectedIndex]; },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this.selectedIndex = this._steps.toArray().indexOf(step);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Selects and focuses the next step in list. */
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    CdkStepper.prototype.next = /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this._steps.length - 1);
    };
    /** Selects and focuses the previous step in list. */
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    CdkStepper.prototype.previous = /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    };
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    CdkStepper.prototype.reset = /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    function () {
        this.selectedIndex = 0;
        this._steps.forEach(function (step) { return step.reset(); });
        this._stateChanged();
    };
    /** Returns a unique id for each step label element. */
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepLabelId = /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-label-" + this._groupId + "-" + i;
    };
    /** Returns unique id for each step content element. */
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepContentId = /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-content-" + this._groupId + "-" + i;
    };
    /** Marks the component to be change detected. */
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    CdkStepper.prototype._stateChanged = /**
     * Marks the component to be change detected.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    /** Returns position state of the step with the given index. */
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getAnimationDirection = /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    };
    /** Returns the type of icon to be displayed. */
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getIndicatorType = /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ step = this._steps.toArray()[index];
        if (!step.completed || this._selectedIndex == index) {
            return 'number';
        }
        else {
            return step.editable ? 'edit' : 'done';
        }
    };
    /**
     * @param {?} newIndex
     * @return {?}
     */
    CdkStepper.prototype._emitStepperSelectionEvent = /**
     * @param {?} newIndex
     * @return {?}
     */
    function (newIndex) {
        var /** @type {?} */ stepsArray = this._steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        this._selectedIndex = newIndex;
        this._stateChanged();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CdkStepper.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        // Note that the left/right arrows work both in vertical and horizontal mode.
        if (keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["m" /* RIGHT_ARROW */]) {
            this._layoutDirection() === 'rtl' ? this._focusPreviousStep() : this._focusNextStep();
            event.preventDefault();
        }
        if (keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["i" /* LEFT_ARROW */]) {
            this._layoutDirection() === 'rtl' ? this._focusNextStep() : this._focusPreviousStep();
            event.preventDefault();
        }
        // Note that the up/down arrows only work in vertical mode.
        // See: https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
        if (this._orientation === 'vertical' && (keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["p" /* UP_ARROW */] || keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["d" /* DOWN_ARROW */])) {
            keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["p" /* UP_ARROW */] ? this._focusPreviousStep() : this._focusNextStep();
            event.preventDefault();
        }
        if (keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["n" /* SPACE */] || keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["f" /* ENTER */]) {
            this.selectedIndex = this._focusIndex;
            event.preventDefault();
        }
        if (keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["h" /* HOME */]) {
            this._focusStep(0);
            event.preventDefault();
        }
        if (keyCode === __WEBPACK_IMPORTED_MODULE_1__angular_cdk_keycodes__["e" /* END */]) {
            this._focusStep(this._steps.length - 1);
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype._focusNextStep = /**
     * @return {?}
     */
    function () {
        this._focusStep((this._focusIndex + 1) % this._steps.length);
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype._focusPreviousStep = /**
     * @return {?}
     */
    function () {
        this._focusStep((this._focusIndex + this._steps.length - 1) % this._steps.length);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._focusStep = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this._focusIndex = index;
        this._stepHeader.toArray()[this._focusIndex].nativeElement.focus();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._anyControlsInvalidOrPending = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ steps = this._steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some(function (step) {
                var /** @type {?} */ control = step.stepControl;
                var /** @type {?} */ isIncomplete = control ?
                    (control.invalid || control.pending || !step.interacted) :
                    !step.completed;
                return isIncomplete && !step.optional;
            });
        }
        return false;
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype._layoutDirection = /**
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    CdkStepper.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: '[cdkStepper]',
                    exportAs: 'cdkStepper',
                },] },
    ];
    /** @nocollapse */
    CdkStepper.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["b" /* Directionality */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    CdkStepper.propDecorators = {
        "_steps": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */], args: [CdkStep,] },],
        "linear": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "selectedIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "selectionChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */] },],
    };
    return CdkStepper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Button that moves to the next step in a stepper workflow.
 */
var CdkStepperNext = /** @class */ (function () {
    function CdkStepperNext(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    CdkStepperNext.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: 'button[cdkStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperNext.ctorParameters = function () { return [
        { type: CdkStepper, },
    ]; };
    CdkStepperNext.propDecorators = {
        "type": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return CdkStepperNext;
}());
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var CdkStepperPrevious = /** @class */ (function () {
    function CdkStepperPrevious(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    CdkStepperPrevious.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                    selector: 'button[cdkStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperPrevious.ctorParameters = function () { return [
        { type: CdkStepper, },
    ]; };
    CdkStepperPrevious.propDecorators = {
        "type": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return CdkStepperPrevious;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var CdkStepperModule = /** @class */ (function () {
    function CdkStepperModule() {
    }
    CdkStepperModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["a" /* BidiModule */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */]],
                    exports: [CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious],
                    declarations: [CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious]
                },] },
    ];
    /** @nocollapse */
    CdkStepperModule.ctorParameters = function () { return []; };
    return CdkStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/core.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeStyles */
/* unused harmony export BROWSER_PROVIDER */
/* unused harmony export CLASS_NAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CoreModule; });
/* unused harmony export MediaQueriesModule */
/* unused harmony export MediaChange */
/* unused harmony export StylesheetMap */
/* unused harmony export STYLESHEET_MAP_PROVIDER_FACTORY */
/* unused harmony export STYLESHEET_MAP_PROVIDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_FLEX_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SERVER_TOKEN; });
/* unused harmony export DISABLE_DEFAULT_BREAKPOINTS */
/* unused harmony export ADD_ORIENTATION_BREAKPOINTS */
/* unused harmony export BREAKPOINT */
/* unused harmony export DISABLE_VENDOR_PREFIXES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseFxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BaseFxDirectiveAdapter; });
/* unused harmony export RESPONSIVE_ALIASES */
/* unused harmony export DEFAULT_BREAKPOINTS */
/* unused harmony export ScreenTypes */
/* unused harmony export ORIENTATION_BREAKPOINTS */
/* unused harmony export BreakPointRegistry */
/* unused harmony export buildMergedBreakPoints */
/* unused harmony export DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony export DEFAULT_BREAKPOINTS_PROVIDER */
/* unused harmony export BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony export BREAKPOINTS_PROVIDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CUSTOM_BREAKPOINTS_PROVIDER_FACTORY; });
/* unused harmony export BREAKPOINTS */
/* unused harmony export MatchMedia */
/* unused harmony export MockMatchMedia */
/* unused harmony export MockMediaQueryList */
/* unused harmony export MockMatchMediaProvider */
/* unused harmony export ServerMediaQueryList */
/* unused harmony export ServerMatchMedia */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MediaMonitor; });
/* unused harmony export MEDIA_MONITOR_PROVIDER_FACTORY */
/* unused harmony export MEDIA_MONITOR_PROVIDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ObservableMedia; });
/* unused harmony export MediaService */
/* unused harmony export OBSERVABLE_MEDIA_PROVIDER_FACTORY */
/* unused harmony export OBSERVABLE_MEDIA_PROVIDER */
/* unused harmony export KeyOptions */
/* unused harmony export ResponsiveActivation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return StyleUtils; });
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* unused harmony export ɵe */
/* unused harmony export ɵd */
/* unused harmony export ɵc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(platformId)) {
            var /** @type {?} */ elements = Array.from(_document.querySelectorAll("[class*=" + CLASS_NAME + "]"));
            // RegExp constructor should only be used if passing a variable to the constructor.
            // When using static regular expression it is more performant to use reg exp literal.
            // This is also needed to provide Safari 9 compatibility, please see
            // https://stackoverflow.com/questions/37919802 for more discussion.
            var /** @type {?} */ classRegex_1 = /\bflex-layout-.+?\b/g;
            elements.forEach(function (el) {
                el.classList.contains(CLASS_NAME + "ssr") && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex_1, '');
            });
        }
    };
}
/**
 *  Provider to remove SSR styles on the browser
 */
var /** @type {?} */ BROWSER_PROVIDER = {
    provide: /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* APP_BOOTSTRAP_LISTENER */]),
    useFactory: removeStyles,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */]],
    multi: true
};
var /** @type {?} */ CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
 */
var /** @type {?} */ BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Token (@angular/flex-layout) Breakpoints');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = /** @class */ (function () {
    function BreakPointRegistry(_registry) {
        this._registry = _registry;
    }
    Object.defineProperty(BreakPointRegistry.prototype, "items", {
        /**
         * Accessor to raw list
         */
        get: /**
         * Accessor to raw list
         * @return {?}
         */
        function () {
            return this._registry.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "sortedItems", {
        /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         */
        get: /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         * @return {?}
         */
        function () {
            var /** @type {?} */ overlaps = this._registry.filter(function (it) { return it.overlapping === true; });
            var /** @type {?} */ nonOverlaps = this._registry.filter(function (it) { return it.overlapping !== true; });
            return overlaps.concat(nonOverlaps);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    BreakPointRegistry.prototype.findByAlias = /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._registry.find(function (bp) { return bp.alias == alias; }) || null;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    BreakPointRegistry.prototype.findByQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this._registry.find(function (bp) { return bp.mediaQuery == query; }) || null;
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */
        function () {
            return this._registry.filter(function (it) { return it.overlapping == true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return it.alias; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return !!it.suffix ? it.suffix : ''; });
        },
        enumerable: true,
        configurable: true
    });
    BreakPointRegistry.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    BreakPointRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [BREAKPOINTS,] },] },
    ]; };
    return BreakPointRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
var  /**
 * Class instances emitted [to observers] for each mql notification
 */
MediaChange = /** @class */ (function () {
    function MediaChange(matches, mediaQuery, mqAlias, suffix // e.g.   GtSM, Md, GtLg
    ) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; }
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
    }
    /**
     * @return {?}
     */
    MediaChange.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = /** @class */ (function () {
    function MatchMedia(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     */
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.isActive = /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var /** @type {?} */ mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(function (change) {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.registerQuery = /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var _this = this;
        var /** @type {?} */ list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(function (query) {
                var /** @type {?} */ mql = _this._registry.get(query);
                var /** @type {?} */ onMQLEvent = function (e) {
                    _this._zone.run(function () {
                        var /** @type {?} */ change = new MediaChange(e.matches, query);
                        _this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = _this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    _this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(mql); // Announce activate range for initial subscribers
                }
            });
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var /** @type {?} */ canListen = Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ ({
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            }
        });
    };
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param query string The mediaQuery used to create a faux CSS selector
     *
     */
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    MatchMedia.prototype._prepareQueryCSS = /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    function (mediaQueries, _document) {
        var /** @type {?} */ list = mediaQueries.filter(function (it) { return !ALL_STYLES[it]; });
        if (list.length > 0) {
            var /** @type {?} */ query = list.join(', ');
            try {
                var /** @type {?} */ styleEl_1 = _document.createElement('style');
                styleEl_1.setAttribute('type', 'text/css');
                if (!styleEl_1['styleSheet']) {
                    var /** @type {?} */ cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media " + query + " {.fx-query-test{ }}\n";
                    styleEl_1.appendChild(_document.createTextNode(cssText));
                }
                _document.head.appendChild(styleEl_1);
                // Store in private global registry
                list.forEach(function (mq) { return ALL_STYLES[mq] = styleEl_1; });
            }
            catch (/** @type {?} */ e) {
                console.error(e);
            }
        }
    };
    MatchMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MatchMedia.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    return MatchMedia;
}());
/**
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
 */
var /** @type {?} */ ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    var /** @type {?} */ seen = {};
    return list.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
var MediaMonitor = /** @class */ (function () {
    function MediaMonitor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    Object.defineProperty(MediaMonitor.prototype, "breakpoints", {
        /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         */
        get: /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         * @return {?}
         */
        function () {
            return this._breakpoints.items.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "activeOverlaps", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ items = this._breakpoints.overlappings.reverse();
            return items.filter(function (bp) {
                return _this._matchMedia.isActive(bp.mediaQuery);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            var /** @type {?} */ found = null, /** @type {?} */ items = this.breakpoints.reverse();
            items.forEach(function (bp) {
                if (bp.alias !== '') {
                    if (!found && _this._matchMedia.isActive(bp.mediaQuery)) {
                        found = bp;
                    }
                }
            });
            var /** @type {?} */ first = this.breakpoints[0];
            return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     */
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    MediaMonitor.prototype.isActive = /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        var /** @type {?} */ bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    MediaMonitor.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    function (alias) {
        var /** @type {?} */ bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        var /** @type {?} */ hasAlias = function (change) { return (bp ? change.mqAlias !== '' : true); };
        // Note: the raw MediaChange events [from MatchMedia] do not contain important alias information
        var /** @type {?} */ media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (change) { return mergeAlias(change, bp); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(hasAlias));
    };
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    MediaMonitor.prototype._registerBreakpoints = /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    function () {
        var /** @type {?} */ queries = this._breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this._matchMedia.registerQuery(queries);
    };
    MediaMonitor.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MediaMonitor.ctorParameters = function () { return [
        { type: BreakPointRegistry, },
        { type: MatchMedia, },
    ]; };
    return MediaMonitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentRegistry
 * @param {?} breakpoints
 * @return {?}
 */
function BREAKPOINT_REGISTRY_PROVIDER_FACTORY(parentRegistry, breakpoints) {
    return parentRegistry || new BreakPointRegistry(breakpoints);
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ BREAKPOINT_REGISTRY_PROVIDER = {
    provide: BreakPointRegistry,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), BreakPointRegistry],
        /** @type {?} */ (BREAKPOINTS),
    ],
    useFactory: BREAKPOINT_REGISTRY_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
var  /**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
ObservableMedia = /** @class */ (function () {
    function ObservableMedia() {
    }
    return ObservableMedia;
}());
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 *  \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 *  \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
var MediaService = /** @class */ (function () {
    function MediaService(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     */
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype.isActive = /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        var /** @type {?} */ query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    };
    /**
     * Proxy to the Observable subscribe method
     */
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    MediaService.prototype.subscribe = /**
     * Proxy to the Observable subscribe method
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (next, error, complete) {
        return this.observable$.subscribe(next, error, complete);
    };
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     */
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    MediaService.prototype.asObservable = /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    function () {
        return this.observable$;
    };
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    MediaService.prototype._registerBreakPoints = /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    function () {
        var /** @type {?} */ queries = this.breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this.mediaWatcher.registerQuery(queries);
    };
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    MediaService.prototype._buildObservable = /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ self = this;
        var /** @type {?} */ media$ = this.mediaWatcher.observe();
        var /** @type {?} */ activationsOnly = function (change) {
            return change.matches === true;
        };
        var /** @type {?} */ addAliasInformation = function (change) {
            return mergeAlias(change, _this._findByQuery(change.mediaQuery));
        };
        var /** @type {?} */ excludeOverlaps = function (change) {
            var /** @type {?} */ bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(activationsOnly), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_filter__["a" /* filter */])(excludeOverlaps), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(addAliasInformation));
    };
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype._findByAlias = /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this.breakpoints.findByAlias(alias);
    };
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._findByQuery = /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.breakpoints.findByQuery(query);
    };
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._toMediaQuery = /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    function (query) {
        var /** @type {?} */ bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    };
    MediaService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: BreakPointRegistry, },
        { type: MatchMedia, },
    ]; };
    return MediaService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global ObservableMedia service provider
 * @param {?} parentService
 * @param {?} matchMedia
 * @param {?} breakpoints
 * @return {?}
 */
function OBSERVABLE_MEDIA_PROVIDER_FACTORY(parentService, matchMedia, breakpoints) {
    return parentService || new MediaService(breakpoints, matchMedia);
}
/**
 *  Provider to return global service for observable service for all MediaQuery activations
 */
var /** @type {?} */ OBSERVABLE_MEDIA_PROVIDER = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), ObservableMedia],
        MatchMedia,
        BreakPointRegistry
    ],
    useFactory: OBSERVABLE_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
var /** @type {?} */ DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1920px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/* tslint:disable */
var /** @type {?} */ HANDSET_PORTRAIT = '(orientations: portrait) and (max-width: 599px)';
var /** @type {?} */ HANDSET_LANDSCAPE = '(orientations: landscape) and (max-width: 959px)';
var /** @type {?} */ TABLET_LANDSCAPE = '(orientations: landscape) and (min-width: 960px) and (max-width: 1279px)';
var /** @type {?} */ TABLET_PORTRAIT = '(orientations: portrait) and (min-width: 600px) and (max-width: 839px)';
var /** @type {?} */ WEB_PORTRAIT = '(orientations: portrait) and (min-width: 840px)';
var /** @type {?} */ WEB_LANDSCAPE = '(orientations: landscape) and (min-width: 1280px)';
var /** @type {?} */ ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/**
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
 */
var /** @type {?} */ ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    var /** @type {?} */ first = part.length > 0 ? part.charAt(0) : '';
    var /** @type {?} */ remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach(function (bp) {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    var /** @type {?} */ dict = {};
    defaults.forEach(function (bp) {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach(function (bp) {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(function (k) { return dict[k]; }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DISABLE_DEFAULT_BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, disable the default breakpoints');
var /** @type {?} */ ADD_ORIENTATION_BREAKPOINTS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, add the orientation breakpoints');
var /** @type {?} */ BREAKPOINT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, collect all breakpoints into one provider');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Add new custom items to the default list or override existing default with custom overrides
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 * @param {?=} _custom
 * @param {?=} options
 * @return {?}
 */
function buildMergedBreakPoints(_custom, options) {
    options = extendObject({}, {
        defaults: true,
        // exclude pre-configured, internal default breakpoints
        orientation: false // exclude pre-configured, internal orientations breakpoints
    }, options || {});
    return function () {
        // Order so the defaults are loaded last; so ObservableMedia will report these last!
        var /** @type {?} */ defaults = (options && options.orientations) ?
            ORIENTATION_BREAKPOINTS.concat(DEFAULT_BREAKPOINTS) : DEFAULT_BREAKPOINTS;
        return (options && options.defaults) ?
            mergeByAlias(defaults, _custom || []) : mergeByAlias(_custom || []);
    };
}
/**
 *  Ensure that only a single global BreakPoint list is instantiated...
 *  \@deprecated
 *  \@deletion-target v6.0.0-beta.15
 * @return {?}
 */
function DEFAULT_BREAKPOINTS_PROVIDER_FACTORY() {
    return validateSuffixes(DEFAULT_BREAKPOINTS);
}
/**
 * Default Provider that does not support external customization nor provide
 * the extra extended breakpoints:   "handset", "tablet", and "web"
 *
 *  NOTE: !! breakpoints are considered to have unique 'alias' properties,
 *        custom breakpoints matching existing breakpoints will override the properties
 *        of the existing (and not be added as an extra breakpoint entry).
 *        [xs, gt-xs, sm, gt-sm, md, gt-md, lg, gt-lg, xl]
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 */
var /** @type {?} */ DEFAULT_BREAKPOINTS_PROVIDER = {
    provide: BREAKPOINTS,
    useFactory: DEFAULT_BREAKPOINTS_PROVIDER_FACTORY
};
/**
 * Factory that combines the configured breakpoints into one array and then merges
 * them using a utility function
 * @param {?} parentBreakpoints
 * @param {?} breakpoints
 * @param {?} disableDefaults
 * @param {?} addOrientation
 * @return {?}
 */
function BREAKPOINTS_PROVIDER_FACTORY(parentBreakpoints, breakpoints, disableDefaults, addOrientation) {
    var /** @type {?} */ bpFlattenArray = [].concat.apply([], (breakpoints || [])
        .map(function (v) { return Array.isArray(v) ? v : [v]; }));
    var /** @type {?} */ builtIns = DEFAULT_BREAKPOINTS.concat(addOrientation ? ORIENTATION_BREAKPOINTS : []);
    return parentBreakpoints || disableDefaults ?
        mergeByAlias(bpFlattenArray) : mergeByAlias(builtIns, bpFlattenArray);
}
/**
 * Provider that combines the provided extra breakpoints with the default and
 * orientation breakpoints based on configuration
 */
var /** @type {?} */ BREAKPOINTS_PROVIDER = {
    provide: BREAKPOINTS,
    useFactory: BREAKPOINTS_PROVIDER_FACTORY,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), BREAKPOINTS],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), BREAKPOINT],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), DISABLE_DEFAULT_BREAKPOINTS],
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), ADD_ORIENTATION_BREAKPOINTS],
    ]
};
/**
 * Use with FlexLayoutModule.CUSTOM_BREAKPOINTS_PROVIDER_FACTORY!
 * @deprecated
 * \@deletion-target v6.0.0-beta.15
 * @param {?=} custom
 * @param {?=} options
 * @return {?}
 */
function CUSTOM_BREAKPOINTS_PROVIDER_FACTORY(custom, options) {
    return {
        provide: /** @type {?} */ (BREAKPOINTS),
        useFactory: buildMergedBreakPoints(custom, options)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentMedia
 * @param {?} ngZone
 * @param {?} platformId
 * @param {?} _document
 * @return {?}
 */
function MATCH_MEDIA_PROVIDER_FACTORY(parentMedia, ngZone, platformId, _document) {
    return parentMedia || new MatchMedia(ngZone, platformId, _document);
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ MATCH_MEDIA_PROVIDER = {
    provide: MatchMedia,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), MatchMedia],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */]),
        /** @type {?} */ (__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */]),
    ],
    useFactory: MATCH_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (var /** @type {?} */ key in target) {
        var /** @type {?} */ value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
var StylesheetMap = /** @class */ (function () {
    function StylesheetMap() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     */
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    StylesheetMap.prototype.addStyleToElement = /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (element, style, value) {
        var /** @type {?} */ stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    };
    /**
     * Clear the virtual stylesheet
     */
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    StylesheetMap.prototype.clearStyles = /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    function () {
        this.stylesheet.clear();
    };
    /**
     * Retrieve a given style for an HTML element
     */
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    StylesheetMap.prototype.getStyleForElement = /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    function (el, styleName) {
        var /** @type {?} */ styles = this.stylesheet.get(el);
        var /** @type {?} */ value = '';
        if (styles) {
            var /** @type {?} */ style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    };
    StylesheetMap.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    StylesheetMap.ctorParameters = function () { return []; };
    return StylesheetMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
 */
var /** @type {?} */ SERVER_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('FlexLayoutServerLoaded');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ DISABLE_VENDOR_PREFIXES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, whether to add vendor prefix styles inline for elements');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, noVendorPrefixes) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.noVendorPrefixes = noVendorPrefixes;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    function (element, style, value) {
        var /** @type {?} */ styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.noVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element
     */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    function (style, elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        var /** @type {?} */ styles = this.noVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(function (el) {
            _this._applyMultiValueStyleToElement(styles, el);
        });
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    StyleUtils.prototype.getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    function (target) {
        var /** @type {?} */ query = 'flex-direction';
        var /** @type {?} */ value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        var /** @type {?} */ hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* isPlatformServer */])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    };
    /**
     * Find the DOM element's raw attribute value (if any)
     */
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    StyleUtils.prototype.lookupAttributeValue = /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute) || '';
    };
    /**
     * Find the DOM element's inline style value (if any)
     */
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype.lookupInlineStyle = /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        return element.style[styleName] || element.style.getPropertyValue(styleName) || '';
    };
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     */
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    StyleUtils.prototype.lookupStyle = /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    function (element, styleName, inlineOnly) {
        if (inlineOnly === void 0) { inlineOnly = false; }
        var /** @type {?} */ value = '';
        if (element) {
            var /** @type {?} */ immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    };
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._applyMultiValueStyleToElement = /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    function (styles, element) {
        var _this = this;
        Object.keys(styles).sort().forEach(function (key) {
            var /** @type {?} */ values = Array.isArray(styles[key]) ? styles[key] : [styles[key]];
            values.sort();
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["l" /* isPlatformBrowser */])(_this._platformId) || !_this._serverModuleLoaded) {
                    element.style.setProperty(key, value);
                }
                else {
                    _this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    };
    StyleUtils.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    StyleUtils.ctorParameters = function () { return [
        { type: StylesheetMap, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [SERVER_TOKEN,] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [DISABLE_VENDOR_PREFIXES,] },] },
    ]; };
    return StyleUtils;
}());
var /** @type {?} */ FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentSheet
 * @return {?}
 */
function STYLESHEET_MAP_PROVIDER_FACTORY(parentSheet) {
    return parentSheet || new StylesheetMap();
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ STYLESHEET_MAP_PROVIDER = {
    provide: StylesheetMap,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), StylesheetMap],
    ],
    useFactory: STYLESHEET_MAP_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    providers: [
                        BREAKPOINTS_PROVIDER,
                        BREAKPOINT_REGISTRY_PROVIDER,
                        MATCH_MEDIA_PROVIDER,
                        MediaMonitor,
                        OBSERVABLE_MEDIA_PROVIDER,
                        STYLESHEET_MAP_PROVIDER,
                        StyleUtils,
                        BROWSER_PROVIDER,
                    ]
                },] },
    ];
    /** @nocollapse */
    CoreModule.ctorParameters = function () { return []; };
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @deprecated use Core Module instead
 * \@deletion-target 5.0.0-beta.15
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var MediaQueriesModule = /** @class */ (function () {
    function MediaQueriesModule() {
    }
    MediaQueriesModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [CoreModule],
                    exports: [CoreModule],
                },] },
    ];
    /** @nocollapse */
    MediaQueriesModule.ctorParameters = function () { return []; };
    return MediaQueriesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ADD_FLEX_STYLES = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* InjectionToken */]('Flex Layout token, should flex stylings be applied to parents automatically');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ INLINE = 'inline';
var /** @type {?} */ LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var KeyOptions = /** @class */ (function () {
    function KeyOptions(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
    return KeyOptions;
}());
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
var  /**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
ResponsiveActivation = /** @class */ (function () {
    /**
     * Constructor
     */
    function ResponsiveActivation(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    Object.defineProperty(ResponsiveActivation.prototype, "registryFromLargest", {
        /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         */
        get: /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         * @return {?}
         */
        function () {
            return this._registryMap.slice().reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "mediaMonitor", {
        /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         */
        get: /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         * @return {?}
         */
        function () {
            return this._mediaMonitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInputKey", {
        /**
         * Determine which directive @Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         */
        get: /**
         * Determine which directive \@Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         * @return {?}
         */
        function () {
            return this._activatedInputKey || this._options.baseKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInput", {
        /**
         * Get the currently activated @Input value or the fallback default @Input value
         */
        get: /**
         * Get the currently activated \@Input value or the fallback default \@Input value
         * @return {?}
         */
        function () {
            var /** @type {?} */ key = this.activatedInputKey;
            return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    };
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    ResponsiveActivation.prototype.destroy = /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    function () {
        this._subscribers.forEach(function (link) {
            link.unsubscribe();
        });
        this._subscribers = [];
    };
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    ResponsiveActivation.prototype._configureChangeObservers = /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ subscriptions = [];
        this._registryMap.forEach(function (bp) {
            if (_this._keyInUse(bp.key)) {
                // Inject directive default property key name: to let onMediaChange() calls
                // know which property is being triggered...
                var /** @type {?} */ buildChanges = function (change) {
                    change = change.clone();
                    change.property = _this._options.baseKey;
                    return change;
                };
                subscriptions.push(_this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(buildChanges))
                    .subscribe(function (change) {
                    _this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    };
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    ResponsiveActivation.prototype._buildRegistryMap = /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    function () {
        var _this = this;
        return this.mediaMonitor.breakpoints
            .map(function (bp) {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: _this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: _this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(function (bp) { return _this._keyInUse(bp.key); });
    };
    /**
     * Synchronizes change notifications with the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    ResponsiveActivation.prototype._onMonitorEvents = /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    };
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._keyInUse = /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._lookupKeyValue(key) !== undefined;
    };
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    ResponsiveActivation.prototype._calculateActivatedValue = /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    function (current) {
        var /** @type {?} */ currentKey = this._options.baseKey + current.suffix; // e.g. suffix == 'GtSm',
        var /** @type {?} */ newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    };
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    ResponsiveActivation.prototype._validateInputKey = /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    function (inputKey) {
        var _this = this;
        var /** @type {?} */ isMissingKey = function (key) { return !_this._keyInUse(key); };
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(function (bp) {
                var /** @type {?} */ key = _this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    };
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._lookupKeyValue = /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._options.inputKeys[key];
    };
    return ResponsiveActivation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseFxDirective = /** @class */ (function () {
    /**
     * Constructor
     */
    function BaseFxDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         *  Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseFxDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ key = 'baseKey', /** @type {?} */ previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            var /** @type {?} */ change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* SimpleChange */](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "parentElement", {
        // *********************************************
        // Accessor Methods
        // *********************************************
        /**
         * Access to host element's parent DOM node
         */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Access the current value (if any) of the @Input property.
     */
    /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._display = this._getDisplayStyle();
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseFxDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    // *********************************************
    // Protected Methods
    // *********************************************
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseFxDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        var /** @type {?} */ val = this._queryInput(key);
        var /** @type {?} */ hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        var /** @type {?} */ query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /**
     * Quick accessor to raw attribute value on the target DOM element
     */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseFxDirective.prototype._getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var /** @type {?} */ value = 'row';
        var /** @type {?} */ hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                var /** @type {?} */ style = buildLayoutCSS(value);
                var /** @type {?} */ elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
        var _a;
    };
    /**
     * Applies styles given via string pair or object map to the directive element.
     */
    /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element.
     */
    /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var /** @type {?} */ prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseFxDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            var /** @type {?} */ keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseFxDirective.prototype, "childrenNodes", {
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         * @return {?}
         */
        function () {
            var /** @type {?} */ obj = this.nativeElement.children;
            var /** @type {?} */ buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var /** @type {?} */ i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseFxDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        var /** @type {?} */ totalKeys = Object.keys(this._inputMap).length;
        var /** @type {?} */ baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    Object.defineProperty(BaseFxDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseFxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Adapter to the BaseFxDirective abstract class so it can be used via composition.
 * @see BaseFxDirective
 */
var  /**
 * Adapter to the BaseFxDirective abstract class so it can be used via composition.
 * @see BaseFxDirective
 */
BaseFxDirectiveAdapter = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["__extends"])(BaseFxDirectiveAdapter, _super);
    /**
     * BaseFxDirectiveAdapter constructor
     */
    function BaseFxDirectiveAdapter(_baseKey, // non-responsive @Input property name
        // non-responsive @Input property name
        _mediaMonitor, _elementRef, _styler) {
        var _this = _super.call(this, _mediaMonitor, _elementRef, _styler) || this;
        _this._baseKey = _baseKey;
        _this._mediaMonitor = _mediaMonitor;
        _this._elementRef = _elementRef;
        _this._styler = _styler;
        return _this;
    }
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "activeKey", {
        /**
         * Accessor to determine which @Input property is "active"
         * e.g. which property value will be used.
         */
        get: /**
         * Accessor to determine which \@Input property is "active"
         * e.g. which property value will be used.
         * @return {?}
         */
        function () {
            var /** @type {?} */ mqa = this._mqActivation;
            var /** @type {?} */ key = mqa ? mqa.activatedInputKey : this._baseKey;
            // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
            return (key === 'class') ? 'klazz' : key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "inputMap", {
        /** Hash map of all @Input keys/values defined/used */
        get: /**
         * Hash map of all \@Input keys/values defined/used
         * @return {?}
         */
        function () {
            return this._inputMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirectiveAdapter.prototype, "mqActivation", {
        /**
         * @see BaseFxDirective._mqActivation
         */
        get: /**
         * @see BaseFxDirective._mqActivation
         * @return {?}
         */
        function () {
            return this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    /**
      * Does this directive have 1 or more responsive keys defined
      * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
      */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    function () {
        return _super.prototype.hasResponsiveAPI.call(this, this._baseKey);
    };
    /**
     * @see BaseFxDirective._queryInput
     */
    /**
     * @see BaseFxDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.queryInput = /**
     * @see BaseFxDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key ? this._queryInput(key) : undefined;
    };
    /**
     *  Save the property value.
     */
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.cacheInput = /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    function (key, source, cacheRaw) {
        if (cacheRaw === void 0) { cacheRaw = false; }
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error("Invalid class value '" + key + "' provided. Did you want to cache the raw value?");
        }
    };
    /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     */
    /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype.listenForMediaQueryChanges = /**
     * @see BaseFxDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    };
    // ************************************************************
    // Protected Methods
    // ************************************************************
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     */
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputRaw = /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    };
    /**
     *  Save the property value for Array values.
     */
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputArray = /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source ? source.join(' ') : '';
    };
    /**
     *  Save the property value for key/value pair values.
     */
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputObject = /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        var /** @type {?} */ classes = [];
        if (source) {
            for (var /** @type {?} */ prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    };
    /**
     *  Save the property value for string values.
     */
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirectiveAdapter.prototype._cacheInputString = /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source;
    };
    return BaseFxDirectiveAdapter;
}(BaseFxDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
var MockMatchMedia = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["__extends"])(MockMatchMedia, _super);
    function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        _this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        _this.useOverlaps = false;
        _this._actives = [];
        _this._actives = [];
        return _this;
    }
    /** Easy method to clear all listeners for all mediaQueries */
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    MockMatchMedia.prototype.clearAll = /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    function () {
        this._registry.forEach(function (mql, _) {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    };
    /** Feature to support manual, simulated activation of a mediaQuery. */
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype.activate = /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps === void 0) { useOverlaps = false; }
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    };
    /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    MockMatchMedia.prototype._validateQuery = /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    function (queryOrAlias) {
        var /** @type {?} */ bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    };
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype._activateWithOverlaps = /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps) {
            var /** @type {?} */ bp = this._breakpoints.findByQuery(mediaQuery);
            var /** @type {?} */ alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    };
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    MockMatchMedia.prototype._activateByAlias = /**
     *
     * @param {?} aliases
     * @return {?}
     */
    function (aliases) {
        var _this = this;
        var /** @type {?} */ activate = function (alias) {
            var /** @type {?} */ bp = _this._breakpoints.findByAlias(alias);
            _this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(function (alias) { return activate(alias.trim()); });
    };
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._activateByQuery = /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var /** @type {?} */ mql = /** @type {?} */ (this._registry.get(mediaQuery));
        var /** @type {?} */ alreadyAdded = this._actives.reduce(function (found, it) {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    };
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    MockMatchMedia.prototype._deactivateAll = /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    function () {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var it = _a[_i];
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    };
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._registerMediaQuery = /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MockMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new MockMediaQueryList(query);
    };
    Object.defineProperty(MockMatchMedia.prototype, "hasActivated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._actives.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    MockMatchMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MockMatchMedia.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
        { type: BreakPointRegistry, },
    ]; };
    return MockMatchMedia;
}(MatchMedia));
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
MockMediaQueryList = /** @class */ (function () {
    function MockMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(MockMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    MockMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    MockMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    MockMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    MockMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the testing environment */
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return MockMediaQueryList;
}());
/**
 * Pre-configured provider for MockMatchMedia
 */
var /** @type {?} */ MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
ServerMediaQueryList = /** @class */ (function () {
    function ServerMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(ServerMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    ServerMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    ServerMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    ServerMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    ServerMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the server environment */
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    ServerMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return ServerMediaQueryList;
}());
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
var ServerMatchMedia = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["__extends"])(ServerMatchMedia, _super);
    function ServerMatchMedia(_zone, _platformId, _document) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._zone = _zone;
        _this._platformId = _platformId;
        _this._document = _document;
        _this._registry = new Map();
        _this._source = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new MediaChange(true));
        _this._observable$ = _this._source.asObservable();
        return _this;
    }
    /** Activate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.activateBreakpoint = /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        var /** @type {?} */ lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    };
    /** Deactivate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.deactivateBreakpoint = /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        var /** @type {?} */ lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    ServerMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new ServerMediaQueryList(query);
    };
    ServerMatchMedia.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    ServerMatchMedia.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    return ServerMatchMedia;
}(MatchMedia));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @param {?} parentMonitor
 * @param {?} breakpoints
 * @param {?} matchMedia
 * @return {?}
 */
function MEDIA_MONITOR_PROVIDER_FACTORY(parentMonitor, breakpoints, matchMedia) {
    return parentMonitor || new MediaMonitor(breakpoints, matchMedia);
}
/**
 * Export provider that uses a global service factory (above)
 */
var /** @type {?} */ MEDIA_MONITOR_PROVIDER = {
    provide: MediaMonitor,
    deps: [
        [new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */](), new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */](), MediaMonitor],
        BreakPointRegistry,
        MatchMedia,
    ],
    useFactory: MEDIA_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/extended.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedModule; });
/* unused harmony export ClassDirective */
/* unused harmony export ImgSrcDirective */
/* unused harmony export negativeOf */
/* unused harmony export ShowHideDirective */
/* unused harmony export StyleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
var ImgSrcDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(ImgSrcDirective, _super);
    /* tslint:enable */
    function ImgSrcDirective(_elRef, _monitor, _styler, _platformId, _serverModuleLoaded) {
        var _this = _super.call(this, _monitor, _elRef, _styler) || this;
        _this._elRef = _elRef;
        _this._monitor = _monitor;
        _this._styler = _styler;
        _this._platformId = _platformId;
        _this._serverModuleLoaded = _serverModuleLoaded;
        _this._cacheInput('src', _elRef.nativeElement.getAttribute('src') || '');
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* isPlatformServer */])(_this._platformId) && _this._serverModuleLoaded) {
            _this.nativeElement.setAttribute('src', '');
        }
        return _this;
    }
    Object.defineProperty(ImgSrcDirective.prototype, "srcBase", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this.cacheDefaultSrc(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtLg', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Listen for responsive changes to update the img.src attribute
     */
    /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnInit = /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasResponsiveKeys) {
            // Listen for responsive changes
            this._listenForMediaQueryChanges('src', this.defaultSrc, function () {
                _this._updateSrcFor();
            });
        }
        this._updateSrcFor();
    };
    /**
     * Update the 'src' property of the host <img> element
     */
    /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnChanges = /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    function () {
        if (this.hasInitialized) {
            this._updateSrcFor();
        }
    };
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     */
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    ImgSrcDirective.prototype._updateSrcFor = /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    function () {
        if (this.hasResponsiveKeys) {
            var /** @type {?} */ url = this.activatedValue || this.defaultSrc;
            if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* isPlatformServer */])(this._platformId) && this._serverModuleLoaded) {
                this._styler.applyStyleToElement(this.nativeElement, { 'content': url ? "url(" + url + ")" : '' });
            }
            else {
                this.nativeElement.setAttribute('src', String(url));
            }
        }
    };
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using @Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     */
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    ImgSrcDirective.prototype.cacheDefaultSrc = /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this._cacheInput('src', value || '');
    };
    Object.defineProperty(ImgSrcDirective.prototype, "defaultSrc", {
        /**
         * Empty values are maintained, undefined values are exposed as ''
         */
        get: /**
         * Empty values are maintained, undefined values are exposed as ''
         * @return {?}
         */
        function () {
            return this._queryInput('src') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "hasResponsiveKeys", {
        /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         */
        get: /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         * @return {?}
         */
        function () {
            return Object.keys(this._inputMap).length > 1;
        },
        enumerable: true,
        configurable: true
    });
    ImgSrcDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ImgSrcDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["i" /* StyleUtils */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["h" /* SERVER_TOKEN */],] },] },
    ]; };
    ImgSrcDirective.propDecorators = {
        "srcBase": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src',] },],
        "srcXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.xs',] },],
        "srcSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.sm',] },],
        "srcMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.md',] },],
        "srcLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lg',] },],
        "srcXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.xl',] },],
        "srcLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-sm',] },],
        "srcLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-md',] },],
        "srcLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-lg',] },],
        "srcLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.lt-xl',] },],
        "srcGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-xs',] },],
        "srcGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-sm',] },],
        "srcGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-md',] },],
        "srcGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['src.gt-lg',] },],
    };
    return ImgSrcDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
var ClassDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(ClassDirective, _super);
    /* tslint:enable */
    function ClassDirective(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer, _ngClassInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._iterableDiffers = _iterableDiffers;
        _this._keyValueDiffers = _keyValueDiffers;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._ngClassInstance = _ngClassInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "ngClassBase", {
        set: /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ key = 'ngClass';
            this._base.cacheInput(key, val, true);
            this._ngClassInstance.ngClass = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "klazz", {
        set: /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ key = 'class';
            this._base.cacheInput(key, val);
            this._ngClassInstance.klass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ClassDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngClassInstance.ngClass = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ClassDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngClassInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngClassInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    ClassDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["c" /* BaseFxDirectiveAdapter */]('ngClass', this.monitor, this._ngEl, this._styler);
        if (!this._ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            this._ngClassInstance = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */](this._iterableDiffers, this._keyValueDiffers, this._ngEl, this._renderer);
        }
    };
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     */
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    ClassDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngClass'; }
        var /** @type {?} */ fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngClassInstance.ngClass = changes.value || '';
            _this._ngClassInstance.ngDoCheck();
        });
    };
    ClassDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n    [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    ClassDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* IterableDiffers */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* KeyValueDiffers */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgClass */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    ClassDirective.propDecorators = {
        "ngClassBase": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass',] },],
        "klazz": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['class',] },],
        "ngClassXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.xs',] },],
        "ngClassSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.sm',] },],
        "ngClassMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.md',] },],
        "ngClassLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lg',] },],
        "ngClassXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.xl',] },],
        "ngClassLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-sm',] },],
        "ngClassLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-md',] },],
        "ngClassLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-lg',] },],
        "ngClassLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.lt-xl',] },],
        "ngClassGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-xs',] },],
        "ngClassGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-sm',] },],
        "ngClassGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-md',] },],
        "ngClassGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngClass.gt-lg',] },],
    };
    return ClassDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 * @param {?} hide
 * @return {?}
 */
function negativeOf(hide) {
    return (hide === '') ? false :
        ((hide === 'false') || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
var ShowHideDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(ShowHideDirective, _super);
    /* tslint:enable */
    /**
     *
     */
    function ShowHideDirective(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.layout = layout;
        _this.elRef = elRef;
        _this.styleUtils = styleUtils;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        if (layout) {
            /**
                   * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
                   * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
                   */
            /**
             * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
             * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
             */
            _this._layoutWatcher = layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
        return _this;
    }
    Object.defineProperty(ShowHideDirective.prototype, "show", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hide", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     */
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    ShowHideDirective.prototype._getDisplayStyle = /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    function () {
        return this.layout ? 'flex' : _super.prototype._getDisplayStyle.call(this);
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.hasInitialized && (changes['show'] != null || this._mqActivation)) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        var /** @type {?} */ value = this._getDefaultVal('show', true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    ShowHideDirective.prototype._updateWithValue = /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._getDefaultVal('show', true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        var /** @type {?} */ shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
        if (Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* isPlatformServer */])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
    };
    /** Build the CSS that should be assigned to the element instance */
    /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._buildCSS = /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._validateTruthy = /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return (FALSY.indexOf(show) == -1);
    };
    ShowHideDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  [fxShow],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ShowHideDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__["b" /* LayoutDirective */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["i" /* StyleUtils */], },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* PLATFORM_ID */],] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["h" /* SERVER_TOKEN */],] },] },
    ]; };
    ShowHideDirective.propDecorators = {
        "show": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow',] },],
        "showXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.xs',] },],
        "showSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.sm',] },],
        "showMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.md',] },],
        "showLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lg',] },],
        "showXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.xl',] },],
        "showLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-sm',] },],
        "showLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-md',] },],
        "showLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-lg',] },],
        "showLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.lt-xl',] },],
        "showGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-xs',] },],
        "showGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-sm',] },],
        "showGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-md',] },],
        "showGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShow.gt-lg',] },],
        "hide": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide',] },],
        "hideXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.xs',] },],
        "hideSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.sm',] },],
        "hideMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.md',] },],
        "hideLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lg',] },],
        "hideXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.xl',] },],
        "hideLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-sm',] },],
        "hideLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-md',] },],
        "hideLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-lg',] },],
        "hideLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.lt-xl',] },],
        "hideGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-xs',] },],
        "hideGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-sm',] },],
        "hideGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-md',] },],
        "hideGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxHide.gt-lg',] },],
    };
    return ShowHideDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * NgStyle allowed inputs
 */
var /**
 * NgStyle allowed inputs
 */
NgStyleKeyValue = /** @class */ (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
    return NgStyleKeyValue;
}());
/**
 * Transform Operators for \@angular/flex-layout NgStyle Directive
 */
var /** @type {?} */ ngStyleUtils = {
    getType: getType,
    buildRawList: buildRawList,
    buildMapFromList: buildMapFromList,
    buildMapFromSet: buildMapFromSet
};
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    var /** @type {?} */ what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ';'; }
    return String(source)
        .trim()
        .split(delimiter)
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val !== ''; });
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    var /** @type {?} */ sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, {});
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    var /** @type {?} */ list = new Array();
    if (getType(source) == 'set') {
        source.forEach(function (entry) { return list.push(entry); });
    }
    else {
        // simple hashmap
        Object.keys(source).forEach(function (key) {
            list.push(key + ":" + source[key]);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    var _a = it.split(':'), key = _a[0], val = _a[1];
    return val ? new NgStyleKeyValue(key, val) : null;
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _sanitizer, _ngEl, _renderer, _differs, _ngStyleInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._sanitizer = _sanitizer;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this._ngStyleInstance = _ngStyleInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "ngStyleBase", {
        set: /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var /** @type {?} */ key = 'ngStyle';
            this._base.cacheInput(key, val, true); // convert val to hashmap
            this._ngStyleInstance.ngStyle = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    StyleDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngStyleInstance.ngStyle = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    StyleDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngStyleInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngStyleInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
       * Configure adapters (that delegate to an internal ngClass instance) if responsive
       * keys have been defined.
       */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    StyleDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["c" /* BaseFxDirectiveAdapter */]('ngStyle', this.monitor, this._ngEl, this._styler);
        if (!this._ngStyleInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            this._ngStyleInstance = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgStyle */](this._differs, this._ngEl, this._renderer);
        }
        this._buildCacheInterceptor();
        this._fallbackToStyle();
    };
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    StyleDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngStyle'; }
        var /** @type {?} */ fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngStyleInstance.ngStyle = changes.value || '';
            _this._ngStyleInstance.ngDoCheck();
        });
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /**
     * Build intercept to convert raw strings to ngStyleMap
     */
    /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    StyleDirective.prototype._buildCacheInterceptor = /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            var /** @type {?} */ styles = _this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, _this._base.inputMap['ngStyle'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    StyleDirective.prototype._buildStyleMap = /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        var /** @type {?} */ sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* SecurityContext */].STYLE, val) || '';
        };
        if (styles) {
            switch (ngStyleUtils.getType(styles)) {
                case 'string': return ngStyleUtils.buildMapFromList(ngStyleUtils.buildRawList(styles), sanitizer);
                case 'array': return ngStyleUtils.buildMapFromList(/** @type {?} */ (styles), sanitizer);
                case 'set': return ngStyleUtils.buildMapFromSet(styles, sanitizer);
                default: return ngStyleUtils.buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    /**
     * Initial lookup of raw 'class' value (if any)
     */
    /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    StyleDirective.prototype._fallbackToStyle = /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    function () {
        if (!this._base.queryInput('ngStyle')) {
            this.ngStyleBase = this._getAttributeValue('style') || '';
        }
    };
    StyleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n    [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    StyleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* Renderer2 */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* KeyValueDiffers */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* NgStyle */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    StyleDirective.propDecorators = {
        "ngStyleBase": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle',] },],
        "ngStyleXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.xs',] },],
        "ngStyleSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.sm',] },],
        "ngStyleMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.md',] },],
        "ngStyleLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lg',] },],
        "ngStyleXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.xl',] },],
        "ngStyleLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-sm',] },],
        "ngStyleLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-md',] },],
        "ngStyleLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-lg',] },],
        "ngStyleLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.lt-xl',] },],
        "ngStyleGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-xs',] },],
        "ngStyleGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-sm',] },],
        "ngStyleGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-md',] },],
        "ngStyleGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['ngStyle.gt-lg',] },],
    };
    return StyleDirective;
}(__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_DIRECTIVES = [
    ShowHideDirective,
    ClassDirective,
    StyleDirective,
    ImgSrcDirective
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
var ExtendedModule = /** @class */ (function () {
    function ExtendedModule() {
    }
    ExtendedModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_core__["e" /* CoreModule */]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    /** @nocollapse */
    ExtendedModule.ctorParameters = function () { return []; };
    return ExtendedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=extended.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VERSION */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* unused harmony reexport ɵb */
/* unused harmony reexport ɵa */
/* unused harmony reexport ɵe */
/* unused harmony reexport ɵd */
/* unused harmony reexport ɵc */
/* unused harmony reexport removeStyles */
/* unused harmony reexport BROWSER_PROVIDER */
/* unused harmony reexport CLASS_NAME */
/* unused harmony reexport CoreModule */
/* unused harmony reexport MediaQueriesModule */
/* unused harmony reexport MediaChange */
/* unused harmony reexport StylesheetMap */
/* unused harmony reexport STYLESHEET_MAP_PROVIDER_FACTORY */
/* unused harmony reexport STYLESHEET_MAP_PROVIDER */
/* unused harmony reexport ADD_FLEX_STYLES */
/* unused harmony reexport SERVER_TOKEN */
/* unused harmony reexport DISABLE_DEFAULT_BREAKPOINTS */
/* unused harmony reexport ADD_ORIENTATION_BREAKPOINTS */
/* unused harmony reexport BREAKPOINT */
/* unused harmony reexport DISABLE_VENDOR_PREFIXES */
/* unused harmony reexport BaseFxDirective */
/* unused harmony reexport BaseFxDirectiveAdapter */
/* unused harmony reexport RESPONSIVE_ALIASES */
/* unused harmony reexport DEFAULT_BREAKPOINTS */
/* unused harmony reexport ScreenTypes */
/* unused harmony reexport ORIENTATION_BREAKPOINTS */
/* unused harmony reexport BreakPointRegistry */
/* unused harmony reexport buildMergedBreakPoints */
/* unused harmony reexport DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony reexport DEFAULT_BREAKPOINTS_PROVIDER */
/* unused harmony reexport BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony reexport BREAKPOINTS_PROVIDER */
/* unused harmony reexport CUSTOM_BREAKPOINTS_PROVIDER_FACTORY */
/* unused harmony reexport BREAKPOINTS */
/* unused harmony reexport MatchMedia */
/* unused harmony reexport MockMatchMedia */
/* unused harmony reexport MockMediaQueryList */
/* unused harmony reexport MockMatchMediaProvider */
/* unused harmony reexport ServerMediaQueryList */
/* unused harmony reexport ServerMatchMedia */
/* unused harmony reexport MediaMonitor */
/* unused harmony reexport MEDIA_MONITOR_PROVIDER_FACTORY */
/* unused harmony reexport MEDIA_MONITOR_PROVIDER */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["g"]; });
/* unused harmony reexport MediaService */
/* unused harmony reexport OBSERVABLE_MEDIA_PROVIDER_FACTORY */
/* unused harmony reexport OBSERVABLE_MEDIA_PROVIDER */
/* unused harmony reexport KeyOptions */
/* unused harmony reexport ResponsiveActivation */
/* unused harmony reexport StyleUtils */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_extended__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* unused harmony reexport ExtendedModule */
/* unused harmony reexport ClassDirective */
/* unused harmony reexport ImgSrcDirective */
/* unused harmony reexport negativeOf */
/* unused harmony reexport ShowHideDirective */
/* unused harmony reexport StyleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* unused harmony reexport FlexModule */
/* unused harmony reexport FlexDirective */
/* unused harmony reexport FlexAlignDirective */
/* unused harmony reexport FlexFillDirective */
/* unused harmony reexport FlexOffsetDirective */
/* unused harmony reexport FlexOrderDirective */
/* unused harmony reexport LayoutDirective */
/* unused harmony reexport LayoutAlignDirective */
/* unused harmony reexport LayoutGapDirective */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 */
var /** @type {?} */ VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Version */]('5.0.0-beta.13-3e5820d');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["m" /* isPlatformServer */])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * @deletion-target v6.0.0-beta.15
     */
    /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * \@deletion-target v6.0.0-beta.15
     * @param {?} breakpoints
     * @param {?=} options
     * @return {?}
     */
    FlexLayoutModule.provideBreakPoints = /**
     * External uses can easily add custom breakpoints AND include internal orientations
     * breakpoints; which are not available by default.
     *
     * !! Selector aliases are not auto-configured. Developers must subclass
     * the API directives to support extra selectors for the orientations breakpoints !!
     * @deprecated use BREAKPOINT multi-provider instead
     * \@deletion-target v6.0.0-beta.15
     * @param {?} breakpoints
     * @param {?=} options
     * @return {?}
     */
    function (breakpoints, options) {
        return {
            ngModule: FlexLayoutModule,
            providers: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["d" /* CUSTOM_BREAKPOINTS_PROVIDER_FACTORY */])(breakpoints, options || { orientations: false })
            ]
        };
    };
    FlexLayoutModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__["a" /* FlexModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_extended__["a" /* ExtendedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["e" /* CoreModule */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_4__angular_flex_layout_flex__["a" /* FlexModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout_extended__["a" /* ExtendedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["e" /* CoreModule */]]
                },] },
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["h" /* SERVER_TOKEN */],] },] },
        { type: Object, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* PLATFORM_ID */],] },] },
    ]; };
    return FlexLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=flex-layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexModule; });
/* unused harmony export FlexDirective */
/* unused harmony export FlexAlignDirective */
/* unused harmony export FlexFillDirective */
/* unused harmony export FlexOffsetDirective */
/* unused harmony export FlexOrderDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutDirective; });
/* unused harmony export LayoutAlignDirective */
/* unused harmony export LayoutGapDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ INLINE = 'inline';
var /** @type {?} */ LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    var flow = validateValue(value)[0];
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(LayoutDirective, _super);
    /* tslint:enable */
    /**
     *
     */
    function LayoutDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._announcer = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        _this.layout$ = _this._announcer.asObservable();
        return _this;
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layout', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    LayoutDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
        this._updateWithDirection();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     */
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    LayoutDirective.prototype._updateWithDirection = /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('layout') || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        // Update styles and announce to subscribers the *new* direction
        var /** @type {?} */ css = buildLayoutCSS(!!value ? value : '');
        this._applyStyleToElement(css);
        this._announcer.next({
            direction: css['flex-direction'],
            wrap: !!css['flex-wrap'] && css['flex-wrap'] !== 'nowrap'
        });
    };
    LayoutDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxLayout],\n  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],\n  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],\n  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    LayoutDirective.propDecorators = {
        "layout": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout',] },],
        "layoutXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.xs',] },],
        "layoutSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.sm',] },],
        "layoutMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.md',] },],
        "layoutLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lg',] },],
        "layoutXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.xl',] },],
        "layoutGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-xs',] },],
        "layoutGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-sm',] },],
        "layoutGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-md',] },],
        "layoutGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.gt-lg',] },],
        "layoutLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-sm',] },],
        "layoutLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-md',] },],
        "layoutLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-lg',] },],
        "layoutLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayout.lt-xl',] },],
    };
    return LayoutDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, container, _zone, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._zone = _zone;
        _this._directionality = _directionality;
        _this._layout = 'row';
        if (container) {
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutGapDirective.prototype.ngAfterContentInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    LayoutGapDirective.prototype._watchContentChanges = /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            if (typeof MutationObserver !== 'undefined') {
                _this._observer = new MutationObserver(function (mutations) {
                    var /** @type {?} */ validatedChanges = function (it) {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    };
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        _this._updateWithValue();
                    }
                });
                _this._observer.observe(_this.nativeElement, { childList: true });
            }
        });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutGapDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        var /** @type {?} */ gapValue = value || this._queryInput('gap') || '0';
        if (this._mqActivation) {
            gapValue = this._mqActivation.activatedInput;
        }
        // Gather all non-hidden Element nodes
        var /** @type {?} */ items = this.childrenNodes
            .filter(function (el) { return el.nodeType === 1 && _this._getDisplayStyle(el) != 'none'; })
            .sort(function (a, b) {
            var /** @type {?} */ orderA = +_this._styler.lookupStyle(a, 'order');
            var /** @type {?} */ orderB = +_this._styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        });
        if (items.length > 0) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.substring(0, gapValue.indexOf(GRID_SPECIFIER));
                // For each `element` children, set the padding
                this._applyStyleToElements(this._buildGridPadding(gapValue), items);
                // Add the margin to the host element
                this._applyStyleToElement(this._buildGridMargin(gapValue));
            }
            else {
                var /** @type {?} */ lastItem = items.pop();
                // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...
                this._applyStyleToElements(this._buildCSS(gapValue), items);
                // Clear all gaps for all visible elements
                this._applyStyleToElements(this._buildCSS(), [lastItem]);
            }
        }
    };
    /**
     *
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridPadding = /**
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ paddingTop = '0px', /** @type {?} */ paddingRight = '0px', /** @type {?} */ paddingBottom = value, /** @type {?} */ paddingLeft = '0px';
        if (this._directionality.value === 'rtl') {
            paddingLeft = value;
        }
        else {
            paddingRight = value;
        }
        return { 'padding': paddingTop + " " + paddingRight + " " + paddingBottom + " " + paddingLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridMargin = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ marginTop = '0px', /** @type {?} */ marginRight = '0px', /** @type {?} */ marginBottom = '-' + value, /** @type {?} */ marginLeft = '0px';
        if (this._directionality.value === 'rtl') {
            marginLeft = '-' + value;
        }
        else {
            marginRight = '-' + value;
        }
        return { 'margin': marginTop + " " + marginRight + " " + marginBottom + " " + marginLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildCSS = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = null; }
        var /** @type {?} */ key, /** @type {?} */ margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
                key = 'margin-bottom';
                break;
            case 'column-reverse':
                key = 'margin-top';
                break;
            case 'row':
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
            case 'row-reverse':
                key = this._directionality.value === 'rtl' ? 'margin-right' : 'margin-left';
                break;
            default:
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    LayoutGapDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  [fxLayoutGap],\n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    LayoutGapDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["b" /* Directionality */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    LayoutGapDirective.propDecorators = {
        "gap": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap',] },],
        "gapXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.xs',] },],
        "gapSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.sm',] },],
        "gapMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.md',] },],
        "gapLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lg',] },],
        "gapXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.xl',] },],
        "gapGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-xs',] },],
        "gapGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-sm',] },],
        "gapGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-md',] },],
        "gapGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.gt-lg',] },],
        "gapLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-sm',] },],
        "gapLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-md',] },],
        "gapLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-lg',] },],
        "gapLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutGap.lt-xl',] },],
    };
    return LayoutGapDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));
var /** @type {?} */ GRID_SPECIFIER = ' grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var /** @type {?} */ key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = '1'; }
    if (shrink === void 0) { shrink = '1'; }
    var /** @type {?} */ parts = [grow, shrink, basis];
    var /** @type {?} */ j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        var /** @type {?} */ matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        var /** @type {?} */ matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(FlexDirective, _super);
    /* tslint:enable */
    // Note: Explicitly @SkipSelf on LayoutDirective because we are looking
    //       for the parent flex container for this flex item.
    function FlexDirective(monitor, elRef, _container, styleUtils, addFlexStyles) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this.styleUtils = styleUtils;
        _this.addFlexStyles = addFlexStyles;
        _this._cacheInput('flex', '');
        _this._cacheInput('shrink', 1);
        _this._cacheInput('grow', 1);
        if (_container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            _this._layoutWatcher = _container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('shrink', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('grow', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flex', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtXl', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        this._updateStyle();
    };
    /**
     * @return {?}
     */
    FlexDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateStyle();
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexDirective.prototype._updateStyle = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ flexBasis = value || this._queryInput('flex') || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        var /** @type {?} */ basis = String(flexBasis).replace(';', '');
        var /** @type {?} */ parts = validateBasis(basis, this._queryInput('grow'), this._queryInput('shrink'));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     */
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    FlexDirective.prototype._validateValue = /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    function (grow, shrink, basis) {
        // The flex-direction of this element's flex container. Defaults to 'row'.
        var /** @type {?} */ layout = this._getFlowDirection(this.parentElement, !!this.addFlexStyles);
        var /** @type {?} */ direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        var /** @type {?} */ max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        var /** @type {?} */ min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        var /** @type {?} */ hasCalc = String(basis).indexOf('calc') > -1;
        var /** @type {?} */ usingCalc = hasCalc || (basis == 'auto');
        var /** @type {?} */ isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        var /** @type {?} */ hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('em') > -1 ||
            String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
        var /** @type {?} */ isPx = String(basis).indexOf('px') > -1 || usingCalc;
        var /** @type {?} */ isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        // make box inflexible when shrink and grow are both zero
        // should not set a min when the grow is zero
        // should not set a max when the shrink is zero
        var /** @type {?} */ isFixed = !grow && !shrink;
        var /** @type {?} */ css = {};
        // flex-basis allows you to specify the initial/starting main-axis size of the element,
        // before anything else is computed. It can either be a percentage or an absolute value.
        // It is, however, not the breaking point for flex-grow/shrink properties
        //
        // flex-grow can be seen as this:
        //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
        //   1: (Default value). Stretch; will be the same size to all other flex items on
        //       the same row since they have a default value of 1.
        //   ≥2 (integer n): Stretch. Will be n times the size of other elements
        //      with 'flex-grow: 1' on the same row.
        // Use `null` to clear existing styles.
        var /** @type {?} */ clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                basis = direction === 'row' ? '0%' : 'auto';
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(/** @type {?} */ (basis))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': grow + " " + shrink + " " + (isValue ? basis : '100%')
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        // Fix for issues 277 and 534
        if (basis !== '0%') {
            css[min] = isFixed || (isPx && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        else {
            // Fix for issue 660
            if (this._layout && this._layout.wrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : grow + " " + shrink + " " + css[max]) :
                    (hasCalc ? css[min] : grow + " " + shrink + " " + css[min]);
            }
        }
        return extendObject(css, { 'box-sizing': 'border-box' });
    };
    FlexDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFlex],\n  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],\n  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],\n  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],\n"
                },] },
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* SkipSelf */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["a" /* ADD_FLEX_STYLES */],] },] },
    ]; };
    FlexDirective.propDecorators = {
        "shrink": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxShrink',] },],
        "grow": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxGrow',] },],
        "flex": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex',] },],
        "flexXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.xs',] },],
        "flexSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.sm',] },],
        "flexMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.md',] },],
        "flexLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lg',] },],
        "flexXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.xl',] },],
        "flexGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-xs',] },],
        "flexGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-sm',] },],
        "flexGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-md',] },],
        "flexGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.gt-lg',] },],
        "flexLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-sm',] },],
        "flexLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-md',] },],
        "flexLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-lg',] },],
        "flexLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlex.lt-xl',] },],
    };
    return FlexDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(FlexOrderDirective, _super);
    /* tslint:enable */
    function FlexOrderDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('order', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexOrderDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('order') || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FlexOrderDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value, 10);
        return { order: isNaN(value) ? 0 : value };
    };
    FlexOrderDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFlexOrder],\n  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],\n  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],\n  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOrderDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    FlexOrderDirective.propDecorators = {
        "order": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder',] },],
        "orderXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.xs',] },],
        "orderSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.sm',] },],
        "orderMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.md',] },],
        "orderLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lg',] },],
        "orderXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.xl',] },],
        "orderGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-xs',] },],
        "orderGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-sm',] },],
        "orderGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-md',] },],
        "orderGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.gt-lg',] },],
        "orderLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-sm',] },],
        "orderLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-md',] },],
        "orderLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-lg',] },],
        "orderLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOrder.lt-xl',] },],
    };
    return FlexOrderDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(FlexOffsetDirective, _super);
    /* tslint:enable */
    function FlexOffsetDirective(monitor, elRef, _container, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this._directionality = _directionality;
        /**
         * The flex-direction of this element's host container. Defaults to 'row'.
         */
        _this._layout = { direction: 'row', wrap: false };
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        _this.watchParentFlow();
        return _this;
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * Cleanup
     */
    /**
     * Cleanup
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnDestroy = /**
     * Cleanup
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     */
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    FlexOffsetDirective.prototype.watchParentFlow = /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._container) {
            // Subscribe to layout immediate parent direction changes (if any)
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexOffsetDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateWithValue();
    };
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     */
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    FlexOffsetDirective.prototype._updateWithValue = /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('offset') || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    FlexOffsetDirective.prototype._buildCSS = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var /** @type {?} */ isPercent = String(offset).indexOf('%') > -1;
        var /** @type {?} */ isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(offset)) {
            offset = offset + '%';
        }
        // The flex-direction of this element's flex container. Defaults to 'row'.
        var /** @type {?} */ isRtl = this._directionality.value === 'rtl';
        var /** @type {?} */ layout = this._getFlowDirection(this.parentElement, true);
        var /** @type {?} */ horizontalLayoutKey = isRtl ? 'margin-right' : 'margin-left';
        return isFlowHorizontal(layout) ? (_a = {}, _a[horizontalLayoutKey] = "" + offset, _a) :
            { 'margin-top': "" + offset };
        var _a;
    };
    FlexOffsetDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFlexOffset],\n  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],\n  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],\n  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOffsetDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* SkipSelf */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["b" /* Directionality */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    FlexOffsetDirective.propDecorators = {
        "offset": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset',] },],
        "offsetXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.xs',] },],
        "offsetSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.sm',] },],
        "offsetMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.md',] },],
        "offsetLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lg',] },],
        "offsetXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.xl',] },],
        "offsetLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-sm',] },],
        "offsetLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-md',] },],
        "offsetLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-lg',] },],
        "offsetLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.lt-xl',] },],
        "offsetGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-xs',] },],
        "offsetGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-sm',] },],
        "offsetGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-md',] },],
        "offsetGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexOffset.gt-lg',] },],
    };
    return FlexOffsetDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(FlexAlignDirective, _super);
    /* tslint:enable */
    function FlexAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexAlignDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    FlexAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        var /** @type {?} */ css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    FlexAlignDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "\n  [fxFlexAlign],\n  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],\n  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],\n  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    FlexAlignDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    FlexAlignDirective.propDecorators = {
        "align": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign',] },],
        "alignXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.xs',] },],
        "alignSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.sm',] },],
        "alignMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.md',] },],
        "alignLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lg',] },],
        "alignXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.xl',] },],
        "alignLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-sm',] },],
        "alignLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-md',] },],
        "alignLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-lg',] },],
        "alignLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.lt-xl',] },],
        "alignGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-xs',] },],
        "alignGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-sm',] },],
        "alignGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-md',] },],
        "alignGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxFlexAlign.gt-lg',] },],
    };
    return FlexAlignDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.elRef = elRef;
        _this._applyStyleToElement(FLEX_FILL_CSS);
        return _this;
    }
    FlexFillDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxFill],\n  [fxFlexFill]\n" },] },
    ];
    /** @nocollapse */
    FlexFillDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    return FlexFillDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 *  \@see https://css-tricks.com/almanac/properties/j/justify-content/
 *  \@see https://css-tricks.com/almanac/properties/a/align-items/
 *  \@see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(LayoutAlignDirective, _super);
    /* tslint:enable */
    function LayoutAlignDirective(monitor, elRef, container, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._layout = 'row';
        if (container) {
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? 'row' : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        var /** @type {?} */ value = this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || 'row');
    };
    /**
     * @param {?} align
     * @return {?}
     */
    LayoutAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        var /** @type {?} */ css = {}, _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1]; // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default:
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || 'row',
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._allowStretching = /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    function (align, layout) {
        var _a = align.split(' '), cross_axis = _a[1]; // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': !isFlowHorizontal(layout) ? '100%' : null,
                'max-height': isFlowHorizontal(layout) ? '100%' : null
            });
        }
    };
    LayoutAlignDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{ selector: "\n  [fxLayoutAlign],\n  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],\n  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],\n  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutAlignDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["f" /* MediaMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: LayoutDirective, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Self */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["i" /* StyleUtils */], },
    ]; };
    LayoutAlignDirective.propDecorators = {
        "align": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign',] },],
        "alignXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.xs',] },],
        "alignSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.sm',] },],
        "alignMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.md',] },],
        "alignLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lg',] },],
        "alignXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.xl',] },],
        "alignGtXs": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-xs',] },],
        "alignGtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-sm',] },],
        "alignGtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-md',] },],
        "alignGtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.gt-lg',] },],
        "alignLtSm": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-sm',] },],
        "alignLtMd": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-md',] },],
        "alignLtLg": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-lg',] },],
        "alignLtXl": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['fxLayoutAlign.lt-xl',] },],
    };
    return LayoutAlignDirective;
}(__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["b" /* BaseFxDirective */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
var FlexModule = /** @class */ (function () {
    function FlexModule() {
    }
    FlexModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_flex_layout_core__["e" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_4__angular_cdk_bidi__["a" /* BidiModule */]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    /** @nocollapse */
    FlexModule.ctorParameters = function () { return []; };
    return FlexModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=flex.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/autocomplete.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatAutocompleteSelectedEvent */
/* unused harmony export MatAutocompleteBase */
/* unused harmony export _MatAutocompleteMixinBase */
/* unused harmony export MAT_AUTOCOMPLETE_DEFAULT_OPTIONS */
/* unused harmony export MatAutocomplete */
/* unused harmony export MatAutocompleteModule */
/* unused harmony export AUTOCOMPLETE_OPTION_HEIGHT */
/* unused harmony export AUTOCOMPLETE_PANEL_HEIGHT */
/* unused harmony export MAT_AUTOCOMPLETE_SCROLL_STRATEGY */
/* unused harmony export MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony export MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER */
/* unused harmony export MAT_AUTOCOMPLETE_VALUE_ACCESSOR */
/* unused harmony export getMatAutocompleteMissingPanelError */
/* unused harmony export MatAutocompleteTrigger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_operators_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_observable_defer__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/defer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
























/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var _uniqueAutocompleteIdCounter = 0;
/**
 * Event object that is emitted when an autocomplete option is selected.
 */
var MatAutocompleteSelectedEvent = /** @class */ (function () {
    function MatAutocompleteSelectedEvent(source, option) {
        this.source = source;
        this.option = option;
    }
    return MatAutocompleteSelectedEvent;
}());
/**
 * \@docs-private
 */
var MatAutocompleteBase = /** @class */ (function () {
    function MatAutocompleteBase() {
    }
    return MatAutocompleteBase;
}());
var _MatAutocompleteMixinBase = Object(__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["x" /* mixinDisableRipple */])(MatAutocompleteBase);
/**
 * Default `mat-autocomplete` options that can be overridden.
 * @record
 */

/**
 * Injection token to be used to override the default options for `mat-autocomplete`.
 */
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* InjectionToken */]('mat-autocomplete-default-options');
var MatAutocomplete = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(MatAutocomplete, _super);
    function MatAutocomplete(_changeDetectorRef, _elementRef, 
        // @deletion-target Turn into required param in 6.0.0
        defaults) {
        var _this = _super.call(this) || this;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._elementRef = _elementRef;
        /**
         * Whether the autocomplete panel should be visible, depending on option length.
         */
        _this.showPanel = false;
        _this._isOpen = false;
        /**
         * Function that maps an option's control value to its display value in the trigger.
         */
        _this.displayWith = null;
        /**
         * Event that is emitted whenever an option from the list is selected.
         */
        _this.optionSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        _this._classList = {};
        /**
         * Unique ID to be used by autocomplete trigger's "aria-owns" property.
         */
        _this.id = "mat-autocomplete-" + _uniqueAutocompleteIdCounter++;
        _this._autoActiveFirstOption = defaults &&
            typeof defaults.autoActiveFirstOption !== 'undefined' ?
            defaults.autoActiveFirstOption :
            false;
        return _this;
    }
    Object.defineProperty(MatAutocomplete.prototype, "isOpen", {
        /** Whether the autocomplete panel is open. */
        get: /**
         * Whether the autocomplete panel is open.
         * @return {?}
         */
        function () { return this._isOpen && this.showPanel; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "autoActiveFirstOption", {
        get: /**
         * Whether the first option should be highlighted when the autocomplete panel is opened.
         * Can be configured globally through the `MAT_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
         * @return {?}
         */
        function () { return this._autoActiveFirstOption; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoActiveFirstOption = Object(__WEBPACK_IMPORTED_MODULE_4__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocomplete.prototype, "classList", {
        set: /**
         * Takes classes set on the host mat-autocomplete element and applies them to the panel
         * inside the overlay container to allow for easy styling.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value && value.length) {
                value.split(' ').forEach(function (className) { return _this._classList[className.trim()] = true; });
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatAutocomplete.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._keyManager = new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_a11y__["c" /* ActiveDescendantKeyManager */](this.options).withWrap();
        // Set the initial visibiity state.
        this._setVisibility();
    };
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     */
    /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     * @param {?} scrollTop
     * @return {?}
     */
    MatAutocomplete.prototype._setScrollTop = /**
     * Sets the panel scrollTop. This allows us to manually scroll to display options
     * above or below the fold, as they are not actually being focused when active.
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        if (this.panel) {
            this.panel.nativeElement.scrollTop = scrollTop;
        }
    };
    /** Returns the panel's scrollTop. */
    /**
     * Returns the panel's scrollTop.
     * @return {?}
     */
    MatAutocomplete.prototype._getScrollTop = /**
     * Returns the panel's scrollTop.
     * @return {?}
     */
    function () {
        return this.panel ? this.panel.nativeElement.scrollTop : 0;
    };
    /** Panel should hide itself when the option list is empty. */
    /**
     * Panel should hide itself when the option list is empty.
     * @return {?}
     */
    MatAutocomplete.prototype._setVisibility = /**
     * Panel should hide itself when the option list is empty.
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this._classList['mat-autocomplete-visible'] = this.showPanel;
        this._classList['mat-autocomplete-hidden'] = !this.showPanel;
        this._changeDetectorRef.markForCheck();
    };
    /** Emits the `select` event. */
    /**
     * Emits the `select` event.
     * @param {?} option
     * @return {?}
     */
    MatAutocomplete.prototype._emitSelectEvent = /**
     * Emits the `select` event.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var /** @type {?} */ event = new MatAutocompleteSelectedEvent(this, option);
        this.optionSelected.emit(event);
    };
    MatAutocomplete.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */], args: [{selector: 'mat-autocomplete',
                    template: "<ng-template><div class=\"mat-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"_classList\" #panel><ng-content></ng-content></div></ng-template>",
                    styles: [".mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative}.mat-autocomplete-panel:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}"],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    exportAs: 'matAutocomplete',
                    inputs: ['disableRipple'],
                    host: {
                        'class': 'mat-autocomplete'
                    },
                    providers: [
                        { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["h" /* MAT_OPTION_PARENT_COMPONENT */], useExisting: MatAutocomplete }
                    ]
                },] },
    ];
    /** @nocollapse */
    MatAutocomplete.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [MAT_AUTOCOMPLETE_DEFAULT_OPTIONS,] },] },
    ]; };
    MatAutocomplete.propDecorators = {
        "template": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* TemplateRef */],] },],
        "panel": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */], args: ['panel',] },],
        "options": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["o" /* MatOption */], { descendants: true },] },],
        "optionGroups": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* ContentChildren */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["n" /* MatOptgroup */],] },],
        "displayWith": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
        "autoActiveFirstOption": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */] },],
        "optionSelected": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */] },],
        "classList": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['class',] },],
    };
    return MatAutocomplete;
}(_MatAutocompleteMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The height of each autocomplete option.
 */
var AUTOCOMPLETE_OPTION_HEIGHT = 48;
/**
 * The total height of the autocomplete panel.
 */
var AUTOCOMPLETE_PANEL_HEIGHT = 256;
/**
 * Injection token that determines the scroll handling while the autocomplete panel is open.
 */
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* InjectionToken */]('mat-autocomplete-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__["b" /* Overlay */]],
    useFactory: MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * \@docs-private
 */
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_15__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* forwardRef */])(function () { return MatAutocompleteTrigger; }),
    multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @return {?}
 */
function getMatAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `mat-autocomplete`. ' +
        'Make sure that the id passed to the `matAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
var MatAutocompleteTrigger = /** @class */ (function () {
    function MatAutocompleteTrigger(_element, _overlay, _viewContainerRef, _zone, _changeDetectorRef, _scrollStrategy, _dir, _formField, _document) {
        var _this = this;
        this._element = _element;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._formField = _formField;
        this._document = _document;
        this._componentDestroyed = false;
        /**
         * Whether or not the label state is being overridden.
         */
        this._manuallyFloatingLabel = false;
        /**
         * Stream of keyboard events that can close the panel.
         */
        this._closeKeyEventStream = new __WEBPACK_IMPORTED_MODULE_17_rxjs_Subject__["a" /* Subject */]();
        /**
         * `View -> model callback called when value changes`
         */
        this._onChange = function () { };
        /**
         * `View -> model callback called when autocomplete has been touched`
         */
        this._onTouched = function () { };
        this._panelOpen = false;
        /**
         * Stream of autocomplete option selections.
         */
        this.optionSelections = Object(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_defer__["a" /* defer */])(function () {
            if (_this.autocomplete && _this.autocomplete.options) {
                return __WEBPACK_IMPORTED_MODULE_20_rxjs_observable_merge__["a" /* merge */].apply(void 0, _this.autocomplete.options.map(function (option) { return option.onSelectionChange; }));
            }
            // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.
            return _this._zone.onStable
                .asObservable()
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_take__["a" /* take */])(1), Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_switchMap__["a" /* switchMap */])(function () { return _this.optionSelections; }));
        });
    }
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._componentDestroyed = true;
        this._destroyPanel();
        this._closeKeyEventStream.complete();
    };
    Object.defineProperty(MatAutocompleteTrigger.prototype, "panelOpen", {
        /** Whether or not the autocomplete panel is open. */
        get: /**
         * Whether or not the autocomplete panel is open.
         * @return {?}
         */
        function () { return this._panelOpen && this.autocomplete.showPanel; },
        enumerable: true,
        configurable: true
    });
    /** Opens the autocomplete suggestion panel. */
    /**
     * Opens the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.openPanel = /**
     * Opens the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        this._attachOverlay();
        this._floatLabel();
    };
    /** Closes the autocomplete suggestion panel. */
    /**
     * Closes the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.closePanel = /**
     * Closes the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        this._resetLabel();
        if (this._panelOpen) {
            this.autocomplete._isOpen = this._panelOpen = false;
            if (this._overlayRef && this._overlayRef.hasAttached()) {
                this._overlayRef.detach();
                this._closingActionsSubscription.unsubscribe();
            }
            // Note that in some cases this can end up being called after the component is destroyed.
            // Add a check to ensure that we don't try to run change detection on a destroyed view.
            if (!this._componentDestroyed) {
                // We need to trigger change detection manually, because
                // `fromEvent` doesn't seem to do it at the proper time.
                // This ensures that the label is reset when the
                // user clicks outside.
                this._changeDetectorRef.detectChanges();
            }
        }
    };
    Object.defineProperty(MatAutocompleteTrigger.prototype, "panelClosingActions", {
        /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         */
        get: /**
         * A stream of actions that should close the autocomplete panel, including
         * when an option is selected, on blur, and when TAB is pressed.
         * @return {?}
         */
        function () {
            var _this = this;
            return Object(__WEBPACK_IMPORTED_MODULE_20_rxjs_observable_merge__["a" /* merge */])(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function () { return _this._panelOpen; })), this._closeKeyEventStream, this._outsideClickStream, this._overlayRef ?
                this._overlayRef.detachments().pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function () { return _this._panelOpen; })) :
                Object(__WEBPACK_IMPORTED_MODULE_21_rxjs_observable_of__["a" /* of */])());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocompleteTrigger.prototype, "activeOption", {
        /** The currently active option, coerced to MatOption type. */
        get: /**
         * The currently active option, coerced to MatOption type.
         * @return {?}
         */
        function () {
            if (this.autocomplete && this.autocomplete._keyManager) {
                return this.autocomplete._keyManager.activeItem;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatAutocompleteTrigger.prototype, "_outsideClickStream", {
        get: /**
         * Stream of clicks outside of the autocomplete panel.
         * @return {?}
         */
        function () {
            var _this = this;
            if (!this._document) {
                return Object(__WEBPACK_IMPORTED_MODULE_21_rxjs_observable_of__["a" /* of */])(null);
            }
            return Object(__WEBPACK_IMPORTED_MODULE_20_rxjs_observable_merge__["a" /* merge */])(Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_fromEvent__["a" /* fromEvent */])(this._document, 'click'), Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_fromEvent__["a" /* fromEvent */])(this._document, 'touchend'))
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_operators_filter__["a" /* filter */])(function (event) {
                var /** @type {?} */ clickTarget = /** @type {?} */ (event.target);
                var /** @type {?} */ formField = _this._formField ?
                    _this._formField._elementRef.nativeElement : null;
                return _this._panelOpen &&
                    clickTarget !== _this._element.nativeElement &&
                    (!formField || !formField.contains(clickTarget)) &&
                    (!!_this._overlayRef && !_this._overlayRef.overlayElement.contains(clickTarget));
            }));
        },
        enumerable: true,
        configurable: true
    });
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        Promise.resolve(null).then(function () { return _this._setTriggerValue(value); });
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatAutocompleteTrigger.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._element.nativeElement.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        // Prevent the default action on all escape key presses. This is here primarily to bring IE
        // in line with other browsers. By default, pressing escape on IE will cause it to revert
        // the input value to the one that it had on focus, however it won't dispatch any events
        // which means that the model value will be out of sync with the view.
        if (keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["g" /* ESCAPE */]) {
            event.preventDefault();
        }
        // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
        // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
        if (this.panelOpen && (keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["g" /* ESCAPE */] || (keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["p" /* UP_ARROW */] && event.altKey))) {
            this._resetActiveItem();
            this._closeKeyEventStream.next();
            event.stopPropagation();
        }
        else if (this.activeOption && keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["f" /* ENTER */] && this.panelOpen) {
            this.activeOption._selectViaInteraction();
            this._resetActiveItem();
            event.preventDefault();
        }
        else {
            var /** @type {?} */ prevActiveItem = this.autocomplete._keyManager.activeItem;
            var /** @type {?} */ isArrowKey = keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["p" /* UP_ARROW */] || keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["d" /* DOWN_ARROW */];
            if (this.panelOpen || keyCode === __WEBPACK_IMPORTED_MODULE_8__angular_cdk_keycodes__["o" /* TAB */]) {
                this.autocomplete._keyManager.onKeydown(event);
            }
            else if (isArrowKey && this._canOpen()) {
                this.openPanel();
            }
            if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
                this._scrollToOption();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ target = /** @type {?} */ (event.target);
        var /** @type {?} */ value = target.value;
        // Based on `NumberValueAccessor` from forms.
        if (target.type === 'number') {
            value = value == '' ? null : parseFloat(value);
        }
        // If the input has a placeholder, IE will fire the `input` event on page load,
        // focus and blur, in addition to when the user actually changed the value. To
        // filter out all of the extra events, we save the value on focus and between
        // `input` events, and we check whether it changed.
        // See: https://connect.microsoft.com/IE/feedback/details/885747/
        if (this._canOpen() && this._previousValue !== value &&
            document.activeElement === event.target) {
            this._previousValue = value;
            this._onChange(value);
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._handleFocus = /**
     * @return {?}
     */
    function () {
        if (this._canOpen()) {
            this._previousValue = this._element.nativeElement.value;
            this._attachOverlay();
            this._floatLabel(true);
        }
    };
    /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._floatLabel = /**
     * In "auto" mode, the label will animate down as soon as focus is lost.
     * This causes the value to jump when selecting an option with the mouse.
     * This method manually floats the label until the panel can be closed.
     * @param {?=} shouldAnimate Whether the label should be animated when it is floated.
     * @return {?}
     */
    function (shouldAnimate) {
        if (shouldAnimate === void 0) { shouldAnimate = false; }
        if (this._formField && this._formField.floatLabel === 'auto') {
            if (shouldAnimate) {
                this._formField._animateAndLockLabel();
            }
            else {
                this._formField.floatLabel = 'always';
            }
            this._manuallyFloatingLabel = true;
        }
    };
    /**
     * If the label has been manually elevated, return it to its normal state.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._resetLabel = /**
     * If the label has been manually elevated, return it to its normal state.
     * @return {?}
     */
    function () {
        if (this._manuallyFloatingLabel) {
            this._formField.floatLabel = 'auto';
            this._manuallyFloatingLabel = false;
        }
    };
    /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._scrollToOption = /**
     * Given that we are not actually focusing active options, we must manually adjust scroll
     * to reveal options below the fold. First, we find the offset of the option from the top
     * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
     * the panel height + the option height, so the active option will be just visible at the
     * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
     * will become the offset. If that offset is visible within the panel already, the scrollTop is
     * not adjusted.
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this.autocomplete._keyManager.activeItemIndex || 0;
        var /** @type {?} */ labelCount = Object(__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["u" /* _countGroupLabelsBeforeOption */])(index, this.autocomplete.options, this.autocomplete.optionGroups);
        var /** @type {?} */ newScrollPosition = Object(__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["v" /* _getOptionScrollPosition */])(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete._getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
        this.autocomplete._setScrollTop(newScrollPosition);
    };
    /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._subscribeToClosingActions = /**
     * This method listens to a stream of panel closing actions and resets the
     * stream every time the option list changes.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ firstStable = this._zone.onStable.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_take__["a" /* take */])(1));
        var /** @type {?} */ optionChanges = this.autocomplete.options.changes.pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators_tap__["a" /* tap */])(function () { return _this._positionStrategy.recalculateLastPosition(); }), 
        // Defer emitting to the stream until the next tick, because changing
        // bindings in here will cause "changed after checked" errors.
        Object(__WEBPACK_IMPORTED_MODULE_14_rxjs_operators_delay__["a" /* delay */])(0));
        // When the zone is stable initially, and when the option list changes...
        return Object(__WEBPACK_IMPORTED_MODULE_20_rxjs_observable_merge__["a" /* merge */])(firstStable, optionChanges)
            .pipe(
        // create a new stream of panelClosingActions, replacing any previous streams
        // that were created, and flatten it so our stream only emits closing events...
        Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_switchMap__["a" /* switchMap */])(function () {
            _this._resetActiveItem();
            _this.autocomplete._setVisibility();
            return _this.panelClosingActions;
        }), 
        // when the first closing event occurs...
        Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_take__["a" /* take */])(1))
            .subscribe(function (event) { return _this._setValueAndClose(event); });
    };
    /**
     * Destroys the autocomplete suggestion panel.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._destroyPanel = /**
     * Destroys the autocomplete suggestion panel.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this.closePanel();
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._setTriggerValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ toDisplay = this.autocomplete && this.autocomplete.displayWith ?
            this.autocomplete.displayWith(value) :
            value;
        // Simply falling back to an empty string if the display value is falsy does not work properly.
        // The display value can also be the number zero and shouldn't fall back to an empty string.
        var /** @type {?} */ inputValue = toDisplay != null ? toDisplay : '';
        // If it's used within a `MatFormField`, we should set it through the property so it can go
        // through change detection.
        if (this._formField) {
            this._formField._control.value = inputValue;
        }
        else {
            this._element.nativeElement.value = inputValue;
        }
    };
    /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._setValueAndClose = /**
     * This method closes the panel, and if a value is specified, also sets the associated
     * control to that value. It will also mark the control as dirty if this interaction
     * stemmed from the user.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event && event.source) {
            this._clearPreviousSelectedOption(event.source);
            this._setTriggerValue(event.source.value);
            this._onChange(event.source.value);
            this._element.nativeElement.focus();
            this.autocomplete._emitSelectEvent(event.source);
        }
        this.closePanel();
    };
    /**
     * Clear any previous selected option and emit a selection change event for this option
     * @param {?} skip
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._clearPreviousSelectedOption = /**
     * Clear any previous selected option and emit a selection change event for this option
     * @param {?} skip
     * @return {?}
     */
    function (skip) {
        this.autocomplete.options.forEach(function (option) {
            if (option != skip && option.selected) {
                option.deselect();
            }
        });
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._attachOverlay = /**
     * @return {?}
     */
    function () {
        if (!this.autocomplete) {
            throw getMatAutocompleteMissingPanelError();
        }
        if (!this._overlayRef) {
            this._portal = new __WEBPACK_IMPORTED_MODULE_9__angular_cdk_portal__["h" /* TemplatePortal */](this.autocomplete.template, this._viewContainerRef);
            this._overlayRef = this._overlay.create(this._getOverlayConfig());
        }
        else {
            /** Update the panel width, in case the host width has changed */
            this._overlayRef.updateSize({ width: this._getHostWidth() });
        }
        if (this._overlayRef && !this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._portal);
            this._closingActionsSubscription = this._subscribeToClosingActions();
        }
        this.autocomplete._setVisibility();
        this.autocomplete._isOpen = this._panelOpen = true;
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__["c" /* OverlayConfig */]({
            positionStrategy: this._getOverlayPosition(),
            scrollStrategy: this._scrollStrategy(),
            width: this._getHostWidth(),
            direction: this._dir ? this._dir.value : 'ltr'
        });
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getOverlayPosition = /**
     * @return {?}
     */
    function () {
        this._positionStrategy = this._overlay.position().connectedTo(this._getConnectedElement(), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' });
        return this._positionStrategy;
    };
    /**
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getConnectedElement = /**
     * @return {?}
     */
    function () {
        return this._formField ? this._formField._connectionContainerRef : this._element;
    };
    /**
     * Returns the width of the input element, so the panel width can match it.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._getHostWidth = /**
     * Returns the width of the input element, so the panel width can match it.
     * @return {?}
     */
    function () {
        return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._resetActiveItem = /**
     * Resets the active item to -1 so arrow events will activate the
     * correct options, or to 0 if the consumer opted into it.
     * @return {?}
     */
    function () {
        this.autocomplete._keyManager.setActiveItem(this.autocomplete.autoActiveFirstOption ? 0 : -1);
    };
    /**
     * Determines whether the panel can be opened.
     * @return {?}
     */
    MatAutocompleteTrigger.prototype._canOpen = /**
     * Determines whether the panel can be opened.
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this._element.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    MatAutocompleteTrigger.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Directive */], args: [{
                    selector: "input[matAutocomplete], textarea[matAutocomplete]",
                    host: {
                        'role': 'combobox',
                        'autocomplete': 'off',
                        'aria-autocomplete': 'list',
                        '[attr.aria-activedescendant]': 'activeOption?.id',
                        '[attr.aria-expanded]': 'panelOpen.toString()',
                        '[attr.aria-owns]': 'autocomplete?.id',
                        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
                        // a little earlier. This avoids issues where IE delays the focusing of the input.
                        '(focusin)': '_handleFocus()',
                        '(blur)': '_onTouched()',
                        '(input)': '_handleInput($event)',
                        '(keydown)': '_handleKeydown($event)',
                    },
                    exportAs: 'matAutocompleteTrigger',
                    providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    MatAutocompleteTrigger.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__["b" /* Overlay */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewContainerRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["k" /* ChangeDetectorRef */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_cdk_bidi__["b" /* Directionality */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_16__angular_material_form_field__["a" /* MatFormField */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Host */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    MatAutocompleteTrigger.propDecorators = {
        "autocomplete": [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */], args: ['matAutocomplete',] },],
    };
    return MatAutocompleteTrigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatAutocompleteModule = /** @class */ (function () {
    function MatAutocompleteModule() {
    }
    MatAutocompleteModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["p" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_6__angular_cdk_overlay__["e" /* OverlayModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["j" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */]],
                    exports: [MatAutocomplete, __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["p" /* MatOptionModule */], MatAutocompleteTrigger, __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["j" /* MatCommonModule */]],
                    declarations: [MatAutocomplete, MatAutocompleteTrigger],
                    providers: [MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER],
                },] },
    ];
    /** @nocollapse */
    MatAutocompleteModule.ctorParameters = function () { return []; };
    return MatAutocompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=autocomplete.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/button-toggle.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatButtonToggleGroupBase */
/* unused harmony export _MatButtonToggleGroupMixinBase */
/* unused harmony export MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR */
/* unused harmony export MatButtonToggleChange */
/* unused harmony export MatButtonToggleGroup */
/* unused harmony export MatButtonToggleGroupMultiple */
/* unused harmony export MatButtonToggle */
/* unused harmony export MatButtonToggleModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * \@docs-private
 */
var MatButtonToggleGroupBase = /** @class */ (function () {
    function MatButtonToggleGroupBase() {
    }
    return MatButtonToggleGroupBase;
}());
var _MatButtonToggleGroupMixinBase = Object(__WEBPACK_IMPORTED_MODULE_6__angular_material_core__["y" /* mixinDisabled */])(MatButtonToggleGroupBase);
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * \@docs-private
 */
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_19" /* forwardRef */])(function () { return MatButtonToggleGroup; }),
    multi: true
};
var _uniqueIdCounter = 0;
/**
 * Change event object emitted by MatButtonToggle.
 */
var MatButtonToggleChange = /** @class */ (function () {
    function MatButtonToggleChange() {
    }
    return MatButtonToggleChange;
}());
/**
 * Exclusive selection button toggle group that behaves like a radio-button group.
 */
var MatButtonToggleGroup = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(MatButtonToggleGroup, _super);
    function MatButtonToggleGroup(_changeDetector) {
        var _this = _super.call(this) || this;
        _this._changeDetector = _changeDetector;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        _this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */
        _this._onTouched = function () { };
        _this._name = "mat-button-toggle-group-" + _uniqueIdCounter++;
        _this._vertical = false;
        _this._value = null;
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * \@docs-private
         */
        _this.valueChange = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["x" /* EventEmitter */]();
        _this._selected = null;
        /**
         * Event emitted when the group's value changes.
         */
        _this.change = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["x" /* EventEmitter */]();
        return _this;
    }
    Object.defineProperty(MatButtonToggleGroup.prototype, "name", {
        get: /**
         * `name` attribute for the underlying `input` element.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateButtonToggleNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "vertical", {
        get: /**
         * Whether the toggle group is vertical.
         * @return {?}
         */
        function () { return this._vertical; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._vertical = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "value", {
        get: /**
         * Value of the toggle group.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value != value) {
                this._value = value;
                this.valueChange.emit(value);
                this._updateSelectedButtonToggleFromValue();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggleGroup.prototype, "selected", {
        get: /**
         * The currently selected button toggle, should match the value.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            if (selected && !selected.checked) {
                selected.checked = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype._updateButtonToggleNames = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._buttonToggles) {
            this._buttonToggles.forEach(function (toggle) {
                toggle.name = _this._name;
            });
        }
    };
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype._updateSelectedButtonToggleFromValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._buttonToggles != null && !isAlreadySelected) {
            var /** @type {?} */ matchingButtonToggle = this._buttonToggles.filter(function (buttonToggle) { return buttonToggle.value == _this._value; })[0];
            if (matchingButtonToggle) {
                this.selected = matchingButtonToggle;
            }
            else if (this.value == null) {
                this.selected = null;
                this._buttonToggles.forEach(function (buttonToggle) {
                    buttonToggle.checked = false;
                });
            }
        }
    };
    /** Dispatch change event with current selection and group value. */
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    MatButtonToggleGroup.prototype._emitChangeEvent = /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    function () {
        var /** @type {?} */ event = new MatButtonToggleChange();
        event.source = this._selected;
        event.value = this._value;
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatButtonToggleGroup.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatButtonToggleGroup.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatButtonToggleGroup.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatButtonToggleGroup.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._markButtonTogglesForCheck();
    };
    /**
     * @return {?}
     */
    MatButtonToggleGroup.prototype._markButtonTogglesForCheck = /**
     * @return {?}
     */
    function () {
        if (this._buttonToggles) {
            this._buttonToggles.forEach(function (toggle) { return toggle._markForCheck(); });
        }
    };
    MatButtonToggleGroup.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: 'mat-button-toggle-group:not([multiple])',
                    providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
                    inputs: ['disabled'],
                    host: {
                        'role': 'radiogroup',
                        'class': 'mat-button-toggle-group',
                        '[class.mat-button-toggle-vertical]': 'vertical'
                    },
                    exportAs: 'matButtonToggleGroup',
                },] },
    ];
    /** @nocollapse */
    MatButtonToggleGroup.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatButtonToggleGroup.propDecorators = {
        "_buttonToggles": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["s" /* ContentChildren */], args: [Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_19" /* forwardRef */])(function () { return MatButtonToggle; }),] },],
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "vertical": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "valueChange": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["R" /* Output */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "change": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["R" /* Output */] },],
    };
    return MatButtonToggleGroup;
}(_MatButtonToggleGroupMixinBase));
/**
 * Multiple selection button-toggle group. `ngModel` is not supported in this mode.
 */
var MatButtonToggleGroupMultiple = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(MatButtonToggleGroupMultiple, _super);
    function MatButtonToggleGroupMultiple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._vertical = false;
        return _this;
    }
    Object.defineProperty(MatButtonToggleGroupMultiple.prototype, "vertical", {
        get: /**
         * Whether the toggle group is vertical.
         * @return {?}
         */
        function () { return this._vertical; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._vertical = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    MatButtonToggleGroupMultiple.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: 'mat-button-toggle-group[multiple]',
                    exportAs: 'matButtonToggleGroup',
                    inputs: ['disabled'],
                    host: {
                        'class': 'mat-button-toggle-group',
                        '[class.mat-button-toggle-vertical]': 'vertical',
                        'role': 'group'
                    }
                },] },
    ];
    /** @nocollapse */
    MatButtonToggleGroupMultiple.ctorParameters = function () { return []; };
    MatButtonToggleGroupMultiple.propDecorators = {
        "vertical": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
    };
    return MatButtonToggleGroupMultiple;
}(_MatButtonToggleGroupMixinBase));
/**
 * Single button inside of a toggle group.
 */
var MatButtonToggle = /** @class */ (function () {
    function MatButtonToggle(toggleGroup, toggleGroupMultiple, _changeDetectorRef, _buttonToggleDispatcher, _elementRef, _focusMonitor) {
        var _this = this;
        this._changeDetectorRef = _changeDetectorRef;
        this._buttonToggleDispatcher = _buttonToggleDispatcher;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        /**
         * Whether or not the button toggle is a single selection.
         */
        this._isSingleSelector = false;
        /**
         * Unregister function for _buttonToggleDispatcher
         */
        this._removeUniqueSelectionListener = function () { };
        this._checked = false;
        this._value = null;
        this._disabled = false;
        /**
         * Event emitted when the group value changes.
         */
        this.change = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["x" /* EventEmitter */]();
        this.buttonToggleGroup = toggleGroup;
        this.buttonToggleGroupMultiple = toggleGroupMultiple;
        if (this.buttonToggleGroup) {
            this._removeUniqueSelectionListener =
                _buttonToggleDispatcher.listen(function (id, name) {
                    if (id != _this.id && name == _this.name) {
                        _this.checked = false;
                        _this._changeDetectorRef.markForCheck();
                    }
                });
            this._type = 'radio';
            this.name = this.buttonToggleGroup.name;
            this._isSingleSelector = true;
        }
        else {
            // Even if there is no group at all, treat the button toggle as a checkbox so it can be
            // toggled on or off.
            this._type = 'checkbox';
            this._isSingleSelector = false;
        }
    }
    Object.defineProperty(MatButtonToggle.prototype, "inputId", {
        /** Unique ID for the underlying `input` element. */
        get: /**
         * Unique ID for the underlying `input` element.
         * @return {?}
         */
        function () { return this.id + "-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "checked", {
        get: /**
         * Whether the button is checked.
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._isSingleSelector && value) {
                // Notify all button toggles with the same name (in the same group) to un-check.
                this._buttonToggleDispatcher.notify(this.id, this.name);
                this._changeDetectorRef.markForCheck();
            }
            this._checked = value;
            if (value && this._isSingleSelector && this.buttonToggleGroup.value != this.value) {
                this.buttonToggleGroup.selected = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "value", {
        get: /**
         * MatButtonToggleGroup reads this to assign its own value.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value != value) {
                if (this.buttonToggleGroup != null && this.checked) {
                    this.buttonToggleGroup.value = value;
                }
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatButtonToggle.prototype, "disabled", {
        get: /**
         * Whether the button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.buttonToggleGroup != null && this.buttonToggleGroup.disabled) ||
                (this.buttonToggleGroupMultiple != null && this.buttonToggleGroupMultiple.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = Object(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatButtonToggle.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.id == null) {
            this.id = "mat-button-toggle-" + _uniqueIdCounter++;
        }
        if (this.buttonToggleGroup && this._value == this.buttonToggleGroup.value) {
            this._checked = true;
        }
        this._focusMonitor.monitor(this._elementRef.nativeElement, true);
    };
    /** Focuses the button. */
    /**
     * Focuses the button.
     * @return {?}
     */
    MatButtonToggle.prototype.focus = /**
     * Focuses the button.
     * @return {?}
     */
    function () {
        this._inputElement.nativeElement.focus();
    };
    /**
     * Toggle the state of the current button toggle.
     * @return {?}
     */
    MatButtonToggle.prototype._toggle = /**
     * Toggle the state of the current button toggle.
     * @return {?}
     */
    function () {
        this.checked = !this.checked;
    };
    /** Checks the button toggle due to an interaction with the underlying native input. */
    /**
     * Checks the button toggle due to an interaction with the underlying native input.
     * @param {?} event
     * @return {?}
     */
    MatButtonToggle.prototype._onInputChange = /**
     * Checks the button toggle due to an interaction with the underlying native input.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this._isSingleSelector) {
            // Propagate the change one-way via the group, which will in turn mark this
            // button toggle as checked.
            var /** @type {?} */ groupValueChanged = this.buttonToggleGroup.selected != this;
            this.checked = true;
            this.buttonToggleGroup.selected = this;
            this.buttonToggleGroup._onTouched();
            if (groupValueChanged) {
                this.buttonToggleGroup._emitChangeEvent();
            }
        }
        else {
            this._toggle();
        }
        // Emit a change event when the native input does.
        this._emitChangeEvent();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatButtonToggle.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /**
     * Dispatch change event with current value.
     * @return {?}
     */
    MatButtonToggle.prototype._emitChangeEvent = /**
     * Dispatch change event with current value.
     * @return {?}
     */
    function () {
        var /** @type {?} */ event = new MatButtonToggleChange();
        event.source = this;
        event.value = this._value;
        this.change.emit(event);
    };
    // Unregister buttonToggleDispatcherListener on destroy
    /**
     * @return {?}
     */
    MatButtonToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeUniqueSelectionListener();
    };
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    MatButtonToggle.prototype._markForCheck = /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    function () {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update button toggle's status
        this._changeDetectorRef.markForCheck();
    };
    MatButtonToggle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */], args: [{selector: 'mat-button-toggle',
                    template: "<label [attr.for]=\"inputId\" class=\"mat-button-toggle-label\"><input #input class=\"mat-button-toggle-input cdk-visually-hidden\" [type]=\"_type\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled || null\" [attr.name]=\"name\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></label><div class=\"mat-button-toggle-focus-overlay\"></div>",
                    styles: [".mat-button-toggle-group,.mat-button-toggle-standalone{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);position:relative;display:inline-flex;flex-direction:row;border-radius:2px;cursor:pointer;white-space:nowrap;overflow:hidden}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle-disabled .mat-button-toggle-label-content{cursor:default}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay,.mat-button-toggle.cdk-program-focused .mat-button-toggle-focus-overlay{opacity:1}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;cursor:pointer}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}"],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    exportAs: 'matButtonToggle',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    host: {
                        '[class.mat-button-toggle-standalone]': '!buttonToggleGroup && !buttonToggleGroupMultiple',
                        '[class.mat-button-toggle-checked]': 'checked',
                        '[class.mat-button-toggle-disabled]': 'disabled',
                        'class': 'mat-button-toggle',
                        '[attr.id]': 'id',
                    }
                },] },
    ];
    /** @nocollapse */
    MatButtonToggle.ctorParameters = function () { return [
        { type: MatButtonToggleGroup, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["Q" /* Optional */] },] },
        { type: MatButtonToggleGroupMultiple, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_a11y__["f" /* FocusMonitor */], },
    ]; };
    MatButtonToggle.propDecorators = {
        "ariaLabel": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */], args: ['aria-label',] },],
        "ariaLabelledby": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */], args: ['aria-labelledby',] },],
        "_inputElement": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_12" /* ViewChild */], args: ['input',] },],
        "id": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "checked": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "change": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["R" /* Output */] },],
    };
    return MatButtonToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatButtonToggleModule = /** @class */ (function () {
    function MatButtonToggleModule() {
    }
    MatButtonToggleModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_6__angular_material_core__["j" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_a11y__["a" /* A11yModule */]],
                    exports: [
                        MatButtonToggleGroup,
                        MatButtonToggleGroupMultiple,
                        MatButtonToggle,
                        __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["j" /* MatCommonModule */],
                    ],
                    declarations: [MatButtonToggleGroup, MatButtonToggleGroupMultiple, MatButtonToggle],
                    providers: [__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["c" /* UNIQUE_SELECTION_DISPATCHER_PROVIDER */]]
                },] },
    ];
    /** @nocollapse */
    MatButtonToggleModule.ctorParameters = function () { return []; };
    return MatButtonToggleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=button-toggle.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/datepicker.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatDatepickerModule */
/* unused harmony export MatCalendar */
/* unused harmony export MatCalendarCell */
/* unused harmony export MatCalendarBody */
/* unused harmony export MAT_DATEPICKER_SCROLL_STRATEGY */
/* unused harmony export MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony export MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER */
/* unused harmony export MatDatepickerContent */
/* unused harmony export MatDatepicker */
/* unused harmony export MAT_DATEPICKER_VALUE_ACCESSOR */
/* unused harmony export MAT_DATEPICKER_VALIDATORS */
/* unused harmony export MatDatepickerInputEvent */
/* unused harmony export MatDatepickerInput */
/* unused harmony export MatDatepickerIntl */
/* unused harmony export MatDatepickerToggleIcon */
/* unused harmony export MatDatepickerToggle */
/* unused harmony export MatMonthView */
/* unused harmony export MatYearView */
/* unused harmony export ɵa31 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__ = __webpack_require__("./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * \@docs-private
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error("MatDatepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " +
        "custom implementation.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Datepicker data that requires internationalization.
 */
var MatDatepickerIntl = /** @class */ (function () {
    function MatDatepickerIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["a" /* Subject */]();
        /**
         * A label for the calendar popup (used by screen readers).
         */
        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */
        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */
        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */
        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */
        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */
        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */
        this.prevMultiYearLabel = 'Previous 20 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */
        this.nextMultiYearLabel = 'Next 20 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */
        this.switchToMonthViewLabel = 'Choose date';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    MatDatepickerIntl.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MatDatepickerIntl.ctorParameters = function () { return []; };
    return MatDatepickerIntl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
var MatCalendarCell = /** @class */ (function () {
    function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return MatCalendarCell;
}());
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
var MatCalendarBody = /** @class */ (function () {
    function MatCalendarBody() {
        /**
         * The number of columns in the table.
         */
        this.numCols = 7;
        /**
         * Whether to allow selection of disabled cells.
         */
        this.allowDisabledSelection = false;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */
        this.selectedValueChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    MatCalendarBody.prototype._cellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(MatCalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: /**
         * The number of blank cells to put at the beginning for the first row.
         * @return {?}
         */
        function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    MatCalendarBody.prototype._isActiveCell = /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    function (rowIndex, colIndex) {
        var /** @type {?} */ cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    };
    MatCalendarBody.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: '[mat-calendar-body]',
                    template: "<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\"><td class=\"mat-calendar-body-label\" [attr.colspan]=\"numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{label}}</td></tr><tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\"><td *ngIf=\"rowIndex === 0 && _firstRowOffset\" aria-hidden=\"true\" class=\"mat-calendar-body-label\" [attr.colspan]=\"_firstRowOffset\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\">{{_firstRowOffset >= labelMinRequiredCells ? label : ''}}</td><td *ngFor=\"let item of row; let colIndex = index\" role=\"gridcell\" class=\"mat-calendar-body-cell\" [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\" [class.mat-calendar-body-disabled]=\"!item.enabled\" [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\" [attr.aria-label]=\"item.ariaLabel\" [attr.aria-disabled]=\"!item.enabled || null\" (click)=\"_cellClicked(item)\" [style.width.%]=\"100 / numCols\" [style.paddingTop.%]=\"50 * cellAspectRatio / numCols\" [style.paddingBottom.%]=\"50 * cellAspectRatio / numCols\"><div class=\"mat-calendar-body-cell-content\" [class.mat-calendar-body-selected]=\"selectedValue === item.value\" [class.mat-calendar-body-today]=\"todayValue === item.value\">{{item.displayValue}}</div></td></tr>",
                    styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.71429%;padding-right:4.71429%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}[dir=rtl] .mat-calendar-body-label{text-align:right}"],
                    host: {
                        'class': 'mat-calendar-body',
                        'role': 'grid',
                        'attr.aria-readonly': 'true'
                    },
                    exportAs: 'matCalendarBody',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendarBody.ctorParameters = function () { return []; };
    MatCalendarBody.propDecorators = {
        "label": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "rows": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "todayValue": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedValue": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "labelMinRequiredCells": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "numCols": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "allowDisabledSelection": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "activeCell": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "cellAspectRatio": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedValueChange": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
    };
    return MatCalendarBody;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * \@docs-private
 */
var MatMonthView = /** @class */ (function () {
    function MatMonthView(_dateAdapter, _dateFormats, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        var /** @type {?} */ firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        var /** @type {?} */ narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        var /** @type {?} */ longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        var /** @type {?} */ weekdays = longWeekdays.map(function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatMonthView.prototype, "activeDate", {
        get: /**
         * The date to display in this month view (everything other than the month and year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            this._activeDate =
                this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedDate = this._getDateInCurrentMonth(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMonthView.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMonthView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new date is selected. */
    /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._dateSelected = /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this._selectedDate != date) {
            var /** @type {?} */ selectedYear = this._dateAdapter.getYear(this.activeDate);
            var /** @type {?} */ selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            var /** @type {?} */ selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit();
    };
    /** Initializes this month view. */
    /**
     * Initializes this month view.
     * @return {?}
     */
    MatMonthView.prototype._init = /**
     * Initializes this month view.
     * @return {?}
     */
    function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
        this._monthLabel =
            this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        var /** @type {?} */ firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Creates MatCalendarCells for the dates in this month.
     * @return {?}
     */
    MatMonthView.prototype._createWeekCells = /**
     * Creates MatCalendarCells for the dates in this month.
     * @return {?}
     */
    function () {
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        var /** @type {?} */ dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (var /** @type {?} */ i = 0, /** @type {?} */ cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            var /** @type {?} */ date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            var /** @type {?} */ enabled = this._shouldEnableDate(date);
            var /** @type {?} */ ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
        }
    };
    /**
     * Date filter for the month
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._shouldEnableDate = /**
     * Date filter for the month
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0);
    };
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    MatMonthView.prototype._getDateInCurrentMonth = /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    };
    /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    MatMonthView.prototype._hasSameMonthAndYear = /**
     * Checks whether the 2 dates are non-null and fall within the same month of the same year.
     * @param {?} d1
     * @param {?} d2
     * @return {?}
     */
    function (d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatMonthView.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatMonthView.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-month-view',
                    template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr></thead><tbody mat-calendar-body [label]=\"_monthLabel\" [rows]=\"_weeks\" [todayValue]=\"_todayDate\" [selectedValue]=\"_selectedDate\" [labelMinRequiredCells]=\"3\" [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\" (selectedValueChange)=\"_dateSelected($event)\"></tbody></table>",
                    exportAs: 'matMonthView',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatMonthView.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */],] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatMonthView.propDecorators = {
        "activeDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "minDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "maxDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "dateFilter": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedChange": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "_userSelection": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
    };
    return MatMonthView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var yearsPerPage = 24;
var yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * \@docs-private
 */
var MatMultiYearView = /** @class */ (function () {
    function MatMultiYearView(_dateAdapter, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatMultiYearView.prototype, "activeDate", {
        get: /**
         * The date to display in this multi-year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            this._activeDate =
                this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            if (Math.floor(this._dateAdapter.getYear(oldActiveDate) / yearsPerPage) !=
                Math.floor(this._dateAdapter.getYear(this._activeDate) / yearsPerPage)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMultiYearView.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMultiYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Initializes this multi-year view. */
    /**
     * Initializes this multi-year view.
     * @return {?}
     */
    MatMultiYearView.prototype._init = /**
     * Initializes this multi-year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        var /** @type {?} */ activeYear = this._dateAdapter.getYear(this._activeDate);
        var /** @type {?} */ activeOffset = activeYear % yearsPerPage;
        this._years = [];
        for (var /** @type {?} */ i = 0, /** @type {?} */ row = []; i < yearsPerPage; i++) {
            row.push(activeYear - activeOffset + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map(function (year) { return _this._createCellForYear(year); }));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /** Handles when a new year is selected. */
    /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._yearSelected = /**
     * Handles when a new year is selected.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        var /** @type {?} */ month = this._dateAdapter.getMonth(this.activeDate);
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /**
     * @return {?}
     */
    MatMultiYearView.prototype._getActiveCell = /**
     * @return {?}
     */
    function () {
        return this._dateAdapter.getYear(this.activeDate) % yearsPerPage;
    };
    /**
     * Creates an MatCalendarCell for the given year.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._createCellForYear = /**
     * Creates an MatCalendarCell for the given year.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        var /** @type {?} */ yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
    };
    /**
     * Whether the given year is enabled.
     * @param {?} year
     * @return {?}
     */
    MatMultiYearView.prototype._shouldEnableYear = /**
     * Whether the given year is enabled.
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        var /** @type {?} */ firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (var /** @type {?} */ date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatMultiYearView.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatMultiYearView.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-multi-year-view',
                    template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body allowDisabledSelection=\"true\" [rows]=\"_years\" [todayValue]=\"_todayYear\" [selectedValue]=\"_selectedYear\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_getActiveCell()\" (selectedValueChange)=\"_yearSelected($event)\"></tbody></table>",
                    exportAs: 'matMultiYearView',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatMultiYearView.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatMultiYearView.propDecorators = {
        "activeDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "minDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "maxDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "dateFilter": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedChange": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
    };
    return MatMultiYearView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * An internal component used to display a single year in the datepicker.
 * \@docs-private
 */
var MatYearView = /** @class */ (function () {
    function MatYearView(_dateAdapter, _dateFormats, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._activeDate = this._dateAdapter.today();
    }
    Object.defineProperty(MatYearView.prototype, "activeDate", {
        get: /**
         * The date to display in this year view (everything other than the year is ignored).
         * @return {?}
         */
        function () { return this._activeDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ oldActiveDate = this._activeDate;
            this._activeDate =
                this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
            if (this._dateAdapter.getYear(oldActiveDate) != this._dateAdapter.getYear(this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatYearView.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._monthSelected = /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        var /** @type {?} */ daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    };
    /** Initializes this year view. */
    /**
     * Initializes this year view.
     * @return {?}
     */
    MatYearView.prototype._init = /**
     * Initializes this year view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        var /** @type {?} */ monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
            return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); });
        });
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    MatYearView.prototype._getMonthInCurrentYear = /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    };
    /**
     * Creates an MatCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    MatYearView.prototype._createCellForMonth = /**
     * Creates an MatCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    function (month, monthName) {
        var /** @type {?} */ ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);
        return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
    };
    /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._shouldEnableMonth = /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        var /** @type {?} */ activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        var /** @type {?} */ firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (var /** @type {?} */ date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._isYearAndMonthAfterMaxDate = /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (this.maxDate) {
            var /** @type {?} */ maxYear = this._dateAdapter.getYear(this.maxDate);
            var /** @type {?} */ maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    };
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    MatYearView.prototype._isYearAndMonthBeforeMinDate = /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        if (this.minDate) {
            var /** @type {?} */ minYear = this._dateAdapter.getYear(this.minDate);
            var /** @type {?} */ minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatYearView.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatYearView.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-year-view',
                    template: "<table class=\"mat-calendar-table\"><thead class=\"mat-calendar-table-header\"><tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr></thead><tbody mat-calendar-body allowDisabledSelection=\"true\" [label]=\"_yearLabel\" [rows]=\"_months\" [todayValue]=\"_todayMonth\" [selectedValue]=\"_selectedMonth\" [labelMinRequiredCells]=\"2\" [numCols]=\"4\" [cellAspectRatio]=\"4 / 7\" [activeCell]=\"_dateAdapter.getMonth(activeDate)\" (selectedValueChange)=\"_monthSelected($event)\"></tbody></table>",
                    exportAs: 'matYearView',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatYearView.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */],] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatYearView.propDecorators = {
        "activeDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "minDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "maxDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "dateFilter": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedChange": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
    };
    return MatYearView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A calendar that is used as part of the datepicker.
 * \@docs-private
 */
var MatCalendar = /** @class */ (function () {
    function MatCalendar(_elementRef, _intl, _ngZone, _dateAdapter, _dateFormats, changeDetectorRef, _dir) {
        this._elementRef = _elementRef;
        this._intl = _intl;
        this._ngZone = _ngZone;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._dir = _dir;
        /**
         * Whether the calendar should be started in month or year view.
         */
        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when any date is selected.
         */
        this._userSelection = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        this._intlChanges = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatCalendar.prototype, "startAt", {
        get: /**
         * A date representing the period (month or year) to start the calendar in.
         * @return {?}
         */
        function () { return this._startAt; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "selected", {
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "minDate", {
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () { return this._minDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "maxDate", {
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () { return this._maxDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "_activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         */
        get: /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */
        function () { return this._clampedActiveDate; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "_periodButtonText", {
        /** The label for the current calendar view. */
        get: /**
         * The label for the current calendar view.
         * @return {?}
         */
        function () {
            if (this._currentView == 'month') {
                return this._dateAdapter.format(this._activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase();
            }
            if (this._currentView == 'year') {
                return this._dateAdapter.getYearName(this._activeDate);
            }
            var /** @type {?} */ activeYear = this._dateAdapter.getYear(this._activeDate);
            var /** @type {?} */ firstYearInView = this._dateAdapter.getYearName(this._dateAdapter.createDate(activeYear - activeYear % 24, 0, 1));
            var /** @type {?} */ lastYearInView = this._dateAdapter.getYearName(this._dateAdapter.createDate(activeYear + yearsPerPage - 1 - activeYear % 24, 0, 1));
            return firstYearInView + " \u2013 " + lastYearInView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "_periodButtonLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentView == 'month' ?
                this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "_prevButtonLabel", {
        /** The label for the the previous button. */
        get: /**
         * The label for the the previous button.
         * @return {?}
         */
        function () {
            return {
                'month': this._intl.prevMonthLabel,
                'year': this._intl.prevYearLabel,
                'multi-year': this._intl.prevMultiYearLabel
            }[this._currentView];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatCalendar.prototype, "_nextButtonLabel", {
        /** The label for the the next button. */
        get: /**
         * The label for the the next button.
         * @return {?}
         */
        function () {
            return {
                'month': this._intl.nextMonthLabel,
                'year': this._intl.nextYearLabel,
                'multi-year': this._intl.nextMultiYearLabel
            }[this._currentView];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._activeDate = this.startAt || this._dateAdapter.today();
        this._focusActiveCell();
        this._currentView = this.startView;
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatCalendar.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ change = changes["minDate"] || changes["maxDate"] || changes["dateFilter"];
        if (change && !change.firstChange) {
            var /** @type {?} */ view = this.monthView || this.yearView || this.multiYearView;
            if (view) {
                view._init();
            }
        }
    };
    /** Handles date selection in the month view. */
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    MatCalendar.prototype._dateSelected = /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (!this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    };
    /**
     * @return {?}
     */
    MatCalendar.prototype._userSelected = /**
     * @return {?}
     */
    function () {
        this._userSelection.emit();
    };
    /** Handles month selection in the multi-year view. */
    /**
     * Handles month selection in the multi-year view.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    MatCalendar.prototype._goToDateInView = /**
     * Handles month selection in the multi-year view.
     * @param {?} date
     * @param {?} view
     * @return {?}
     */
    function (date, view) {
        this._activeDate = date;
        this._currentView = view;
    };
    /** Handles user clicks on the period label. */
    /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    MatCalendar.prototype._currentPeriodClicked = /**
     * Handles user clicks on the period label.
     * @return {?}
     */
    function () {
        this._currentView = this._currentView == 'month' ? 'multi-year' : 'month';
    };
    /** Handles user clicks on the previous button. */
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    MatCalendar.prototype._previousClicked = /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    function () {
        this._activeDate = this._currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this._activeDate, -1) :
            this._dateAdapter.addCalendarYears(this._activeDate, this._currentView == 'year' ? -1 : -yearsPerPage);
    };
    /** Handles user clicks on the next button. */
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    MatCalendar.prototype._nextClicked = /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    function () {
        this._activeDate = this._currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this._activeDate, 1) :
            this._dateAdapter.addCalendarYears(this._activeDate, this._currentView == 'year' ? 1 : yearsPerPage);
    };
    /** Whether the previous period button is enabled. */
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    MatCalendar.prototype._previousEnabled = /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    };
    /** Whether the next period button is enabled. */
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    MatCalendar.prototype._nextEnabled = /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    function () {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    };
    /** Handles keydown events on the calendar body. */
    /**
     * Handles keydown events on the calendar body.
     * @param {?} event
     * @return {?}
     */
    MatCalendar.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        if (this._currentView == 'month') {
            this._handleCalendarBodyKeydownInMonthView(event);
        }
        else if (this._currentView == 'year') {
            this._handleCalendarBodyKeydownInYearView(event);
        }
        else {
            this._handleCalendarBodyKeydownInMultiYearView(event);
        }
    };
    /** Focuses the active cell after the microtask queue is empty. */
    /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    MatCalendar.prototype._focusActiveCell = /**
     * Focuses the active cell after the microtask queue is empty.
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_take__["a" /* take */])(1)).subscribe(function () {
                _this._elementRef.nativeElement.querySelector('.mat-calendar-body-active').focus();
            });
        });
    };
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    MatCalendar.prototype._isSameView = /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (this._currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this._currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return Math.floor(this._dateAdapter.getYear(date1) / yearsPerPage) ==
            Math.floor(this._dateAdapter.getYear(date2) / yearsPerPage);
    };
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    MatCalendar.prototype._handleCalendarBodyKeydownInMonthView = /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ isRtl = this._isRtl();
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["i" /* LEFT_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["m" /* RIGHT_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["p" /* UP_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["d" /* DOWN_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["h" /* HOME */]:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["e" /* END */]:
                this._activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["l" /* PAGE_UP */]:
                this._activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["k" /* PAGE_DOWN */]:
                this._activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["f" /* ENTER */]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected(this._activeDate);
                    this._userSelected();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    MatCalendar.prototype._handleCalendarBodyKeydownInYearView = /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ isRtl = this._isRtl();
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["i" /* LEFT_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["m" /* RIGHT_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["p" /* UP_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["d" /* DOWN_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["h" /* HOME */]:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["e" /* END */]:
                this._activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["l" /* PAGE_UP */]:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["k" /* PAGE_DOWN */]:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["f" /* ENTER */]:
                this._goToDateInView(this._activeDate, 'month');
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    MatCalendar.prototype._handleCalendarBodyKeydownInMultiYearView = /**
     * Handles keydown events on the calendar body when calendar is in multi-year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["i" /* LEFT_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["m" /* RIGHT_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["p" /* UP_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["d" /* DOWN_ARROW */]:
                this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["h" /* HOME */]:
                this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -this._dateAdapter.getYear(this._activeDate) % yearsPerPage);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["e" /* END */]:
                this._activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - this._dateAdapter.getYear(this._activeDate) % yearsPerPage - 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["l" /* PAGE_UP */]:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["k" /* PAGE_DOWN */]:
                this._activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["f" /* ENTER */]:
                this._goToDateInView(this._activeDate, 'year');
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatCalendar.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    MatCalendar.prototype._isRtl = /**
     * Determines whether the user has the RTL layout direction.
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl';
    };
    MatCalendar.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-calendar',
                    template: "<div class=\"mat-calendar-header\"><div class=\"mat-calendar-controls\"><button mat-button class=\"mat-calendar-period-button\" (click)=\"_currentPeriodClicked()\" [attr.aria-label]=\"_periodButtonLabel\">{{_periodButtonText}}<div class=\"mat-calendar-arrow\" [class.mat-calendar-invert]=\"_currentView != 'month'\"></div></button><div class=\"mat-calendar-spacer\"></div><button mat-icon-button class=\"mat-calendar-previous-button\" [disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\" [attr.aria-label]=\"_prevButtonLabel\"></button> <button mat-icon-button class=\"mat-calendar-next-button\" [disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\" [attr.aria-label]=\"_nextButtonLabel\"></button></div></div><div class=\"mat-calendar-content\" (keydown)=\"_handleCalendarBodyKeydown($event)\" [ngSwitch]=\"_currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\"><mat-month-view *ngSwitchCase=\"'month'\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (selectedChange)=\"_dateSelected($event)\" (_userSelection)=\"_userSelected()\"></mat-month-view><mat-year-view *ngSwitchCase=\"'year'\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (selectedChange)=\"_goToDateInView($event, 'month')\"></mat-year-view><mat-multi-year-view *ngSwitchCase=\"'multi-year'\" [activeDate]=\"_activeDate\" [selected]=\"selected\" [dateFilter]=\"dateFilter\" [maxDate]=\"maxDate\" [minDate]=\"minDate\" (selectedChange)=\"_goToDateInView($event, 'year')\"></mat-multi-year-view></div>",
                    styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:0}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-next-button,.mat-calendar-previous-button{position:relative}.mat-calendar-next-button::after,.mat-calendar-previous-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:'';margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-next-button,[dir=rtl] .mat-calendar-previous-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:'';position:absolute;top:0;left:-8px;right:-8px;height:1px}"],
                    host: {
                        'class': 'mat-calendar',
                    },
                    exportAs: 'matCalendar',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatCalendar.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ElementRef */], },
        { type: MatDatepickerIntl, },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */],] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_10__angular_cdk_bidi__["b" /* Directionality */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
    ]; };
    MatCalendar.propDecorators = {
        "startAt": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "startView": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "minDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "maxDate": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "dateFilter": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedChange": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "_userSelection": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "monthView": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */], args: [MatMonthView,] },],
        "yearView": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */], args: [MatYearView,] },],
        "multiYearView": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */], args: [MatMultiYearView,] },],
    };
    return MatCalendar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Used to generate a unique ID for each datepicker instance.
 */
var datepickerUid = 0;
/**
 * Injection token that determines the scroll handling while the calendar is open.
 */
var MAT_DATEPICKER_SCROLL_STRATEGY = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* InjectionToken */]('mat-datepicker-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["b" /* Overlay */]],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 */
var MatDatepickerContent = /** @class */ (function () {
    function MatDatepickerContent() {
    }
    /**
     * @return {?}
     */
    MatDatepickerContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._calendar._focusActiveCell();
    };
    MatDatepickerContent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-datepicker-content',
                    template: "<mat-calendar cdkTrapFocus [id]=\"datepicker.id\" [ngClass]=\"datepicker.panelClass\" [startAt]=\"datepicker.startAt\" [startView]=\"datepicker.startView\" [minDate]=\"datepicker._minDate\" [maxDate]=\"datepicker._maxDate\" [dateFilter]=\"datepicker._dateFilter\" [selected]=\"datepicker._selected\" (selectedChange)=\"datepicker._select($event)\" (_userSelection)=\"datepicker.close()\"></mat-calendar>",
                    styles: [".mat-datepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;border-radius:2px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation:landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation:portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}"],
                    host: {
                        'class': 'mat-datepicker-content',
                        '[class.mat-datepicker-content-touch]': 'datepicker.touchUi',
                    },
                    exportAs: 'matDatepickerContent',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatDatepickerContent.ctorParameters = function () { return []; };
    MatDatepickerContent.propDecorators = {
        "_calendar": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */], args: [MatCalendar,] },],
    };
    return MatDatepickerContent;
}());
/**
 * Component responsible for managing the datepicker popup/dialog.
 */
var MatDatepicker = /** @class */ (function () {
    function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits new selected date when selected date changes.
         * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
         * \@deletion-target 6.0.0
         */
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        this._opened = false;
        /**
         * The id for the datepicker calendar.
         */
        this.id = "mat-datepicker-" + datepickerUid++;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        this._inputSubscription = __WEBPACK_IMPORTED_MODULE_14_rxjs_Subscription__["a" /* Subscription */].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["a" /* Subject */]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
    }
    Object.defineProperty(MatDatepicker.prototype, "startAt", {
        get: /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "touchUi", {
        get: /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */
        function () { return this._touchUi; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._touchUi = Object(__WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "disabled", {
        get: /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newValue = Object(__WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "opened", {
        get: /**
         * Whether the calendar is open.
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { value ? this.open() : this.close(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () { return this._validSelected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._validSelected = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepicker.prototype, "_dateFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
    };
    /** Selects the given date */
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    MatDatepicker.prototype._select = /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this.selectedChanged.emit(date);
        }
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    MatDatepicker.prototype._registerInput = /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /** Open the calendar. */
    /**
     * Open the calendar.
     * @return {?}
     */
    MatDatepicker.prototype.open = /**
     * Open the calendar.
     * @return {?}
     */
    function () {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    };
    /** Close the calendar. */
    /**
     * Close the calendar.
     * @return {?}
     */
    MatDatepicker.prototype.close = /**
     * Close the calendar.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        var /** @type {?} */ completeClose = function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this._opened) {
                _this._opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    MatDatepicker.prototype._openAsDialog = /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    function () {
        var _this = this;
        this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
        });
        this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
        this._dialogRef.componentInstance.datepicker = this;
    };
    /**
     * Open the calendar as a popup.
     * @return {?}
     */
    MatDatepicker.prototype._openAsPopup = /**
     * Open the calendar as a popup.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new __WEBPACK_IMPORTED_MODULE_12__angular_cdk_portal__["d" /* ComponentPortal */](MatDatepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            var /** @type {?} */ componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datepicker = this;
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_take__["a" /* take */])(1)).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        }
    };
    /**
     * Create the popup.
     * @return {?}
     */
    MatDatepicker.prototype._createPopup = /**
     * Create the popup.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ overlayConfig = new __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["c" /* OverlayConfig */]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir ? this._dir.value : 'ltr',
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        Object(__WEBPACK_IMPORTED_MODULE_15_rxjs_observable_merge__["a" /* merge */])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(__WEBPACK_IMPORTED_MODULE_13_rxjs_operators_filter__["a" /* filter */])(function (event) { return event.keyCode === __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["g" /* ESCAPE */]; }))).subscribe(function () { return _this.close(); });
    };
    /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    MatDatepicker.prototype._createPopupPositionStrategy = /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    function () {
        var /** @type {?} */ fallbackOffset = this._datepickerInput._getPopupFallbackOffset();
        return this._overlay.position()
            .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }, undefined, fallbackOffset)
            .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }, undefined, fallbackOffset);
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepicker.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatDatepicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-datepicker',
                    template: '',
                    exportAs: 'matDatepicker',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    MatDatepicker.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["b" /* MatDialog */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["b" /* Overlay */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["P" /* NgZone */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewContainerRef */], },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Inject */], args: [MAT_DATEPICKER_SCROLL_STRATEGY,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_10__angular_cdk_bidi__["b" /* Directionality */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DOCUMENT */],] },] },
    ]; };
    MatDatepicker.propDecorators = {
        "startAt": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "startView": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "touchUi": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selectedChanged": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "panelClass": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "openedStream": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */], args: ['opened',] },],
        "closedStream": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */], args: ['closed',] },],
        "opened": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
    };
    return MatDatepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_16__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_19" /* forwardRef */])(function () { return MatDatepickerInput; }),
    multi: true
};
var MAT_DATEPICKER_VALIDATORS = {
    provide: __WEBPACK_IMPORTED_MODULE_16__angular_forms__["e" /* NG_VALIDATORS */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_19" /* forwardRef */])(function () { return MatDatepickerInput; }),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
var MatDatepickerInputEvent = /** @class */ (function () {
    function MatDatepickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MatDatepickerInputEvent;
}());
/**
 * Directive used to connect an input to a MatDatepicker.
 */
var MatDatepickerInput = /** @class */ (function () {
    function MatDatepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        this._onTouched = function () { };
        this._cvaOnChange = function () { };
        this._validatorOnChange = function () { };
        this._datepickerSubscription = __WEBPACK_IMPORTED_MODULE_14_rxjs_Subscription__["a" /* Subscription */].EMPTY;
        this._localeSubscription = __WEBPACK_IMPORTED_MODULE_14_rxjs_Subscription__["a" /* Subscription */].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = function () {
            return _this._lastValueValid ?
                null : { 'matDatepickerParse': { 'text': _this._elementRef.nativeElement.value } };
        };
        /**
         * The form control validator for the min date.
         */
        this._minValidator = function (control) {
            var /** @type {?} */ controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDate(_this.min, controlValue) <= 0) ?
                null : { 'matDatepickerMin': { 'min': _this.min, 'actual': controlValue } };
        };
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = function (control) {
            var /** @type {?} */ controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDate(_this.max, controlValue) >= 0) ?
                null : { 'matDatepickerMax': { 'max': _this.max, 'actual': controlValue } };
        };
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = function (control) {
            var /** @type {?} */ controlValue = _this._getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue) ?
                null : { 'matDatepickerFilter': true };
        };
        /**
         * The combined form control validator for this input.
         */
        this._validator = __WEBPACK_IMPORTED_MODULE_16__angular_forms__["j" /* Validators */].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this.value = _this.value;
        });
    }
    Object.defineProperty(MatDatepickerInput.prototype, "matDatepicker", {
        set: /**
         * The datepicker that this input is associated with.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.registerDatepicker(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype.registerDatepicker = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this._datepicker = value;
            this._datepicker._registerInput(this);
        }
    };
    Object.defineProperty(MatDatepickerInput.prototype, "matDatepickerFilter", {
        set: /**
         * Function that can be used to filter out dates within the datepicker.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dateFilter = value;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "value", {
        get: /**
         * The value of the input.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._getValidDateOrNull(value);
            var /** @type {?} */ oldDate = this.value;
            this._value = value;
            this._elementRef.nativeElement.value =
                value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
            if (!this._dateAdapter.sameDate(oldDate, value)) {
                this._valueChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "min", {
        get: /**
         * The minimum valid date.
         * @return {?}
         */
        function () { return this._min; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "max", {
        get: /**
         * The maximum valid date.
         * @return {?}
         */
        function () { return this._max; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatepickerInput.prototype, "disabled", {
        get: /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */
        function () { return !!this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newValue = Object(__WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
            if (newValue) {
                // Normally, native input elements automatically blur if they turn disabled. This behavior
                // is problematic, because it would mean that it triggers another change detection cycle,
                // which then causes a changed after checked error if the input element was focused before.
                this._elementRef.nativeElement.blur();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker) {
            this._datepickerSubscription =
                this._datepicker.selectedChanged.subscribe(function (selected) {
                    _this.value = selected;
                    _this._cvaOnChange(selected);
                    _this._onTouched();
                    _this.dateInput.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                    _this.dateChange.emit(new MatDatepickerInputEvent(_this, _this._elementRef.nativeElement));
                });
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnValidatorChange = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorOnChange = fn;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    MatDatepickerInput.prototype.validate = /**
     * \@docs-private
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    MatDatepickerInput.prototype.getPopupConnectionElementRef = /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    function () {
        return this._formField ? this._formField.underlineRef : this._elementRef;
    };
    /**
     * Determines the offset to be used when the calendar goes into a fallback position.
     * Primarily used to prevent the calendar from overlapping the input.
     */
    /**
     * Determines the offset to be used when the calendar goes into a fallback position.
     * Primarily used to prevent the calendar from overlapping the input.
     * @return {?}
     */
    MatDatepickerInput.prototype._getPopupFallbackOffset = /**
     * Determines the offset to be used when the calendar goes into a fallback position.
     * Primarily used to prevent the calendar from overlapping the input.
     * @return {?}
     */
    function () {
        return this._formField ? -this._formField._inputContainerRef.nativeElement.clientHeight : 0;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._cvaOnChange = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatepickerInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor.
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MatDatepickerInput.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatepickerInput.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.altKey && event.keyCode === __WEBPACK_IMPORTED_MODULE_6__angular_cdk_keycodes__["d" /* DOWN_ARROW */]) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatepickerInput.prototype._onInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._getValidDateOrNull(date);
        this._value = date;
        this._cvaOnChange(date);
        this._valueChange.emit(date);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /**
     * @return {?}
     */
    MatDatepickerInput.prototype._onChange = /**
     * @return {?}
     */
    function () {
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    MatDatepickerInput.prototype._getValidDateOrNull = /**
     * @param {?} obj The object to check.
     * @return {?} The given object if it is both a date instance and valid, otherwise null.
     */
    function (obj) {
        return (this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj)) ? obj : null;
    };
    MatDatepickerInput.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["t" /* Directive */], args: [{
                    selector: 'input[matDatepicker]',
                    providers: [
                        MAT_DATEPICKER_VALUE_ACCESSOR,
                        MAT_DATEPICKER_VALIDATORS,
                        { provide: __WEBPACK_IMPORTED_MODULE_18__angular_material_input__["a" /* MAT_INPUT_VALUE_ACCESSOR */], useExisting: MatDatepickerInput },
                    ],
                    host: {
                        '[attr.aria-haspopup]': 'true',
                        '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                        '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                        '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                        '[disabled]': 'disabled',
                        '(input)': '_onInput($event.target.value)',
                        '(change)': '_onChange()',
                        '(blur)': '_onTouched()',
                        '(keydown)': '_onKeydown($event)',
                    },
                    exportAs: 'matDatepickerInput',
                },] },
    ];
    /** @nocollapse */
    MatDatepickerInput.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */],] },] },
        { type: __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__["a" /* MatFormField */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
    ]; };
    MatDatepickerInput.propDecorators = {
        "matDatepicker": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "matDatepickerFilter": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "min": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "max": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "dateChange": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "dateInput": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
    };
    return MatDatepickerInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Can be used to override the icon of a `matDatepickerToggle`.
 */
var MatDatepickerToggleIcon = /** @class */ (function () {
    function MatDatepickerToggleIcon() {
    }
    MatDatepickerToggleIcon.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["t" /* Directive */], args: [{
                    selector: '[matDatepickerToggleIcon]'
                },] },
    ];
    /** @nocollapse */
    MatDatepickerToggleIcon.ctorParameters = function () { return []; };
    return MatDatepickerToggleIcon;
}());
var MatDatepickerToggle = /** @class */ (function () {
    function MatDatepickerToggle(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = __WEBPACK_IMPORTED_MODULE_14_rxjs_Subscription__["a" /* Subscription */].EMPTY;
    }
    Object.defineProperty(MatDatepickerToggle.prototype, "disabled", {
        get: /**
         * Whether the toggle button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined ? this.datepicker.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_11__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["datepicker"]) {
            this._watchStateChanges();
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.unsubscribe();
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._watchStateChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatepickerToggle.prototype._open = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    MatDatepickerToggle.prototype._watchStateChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_of__["a" /* of */])();
        var /** @type {?} */ inputDisabled = this.datepicker && this.datepicker._datepickerInput ?
            this.datepicker._datepickerInput._disabledChange : Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_of__["a" /* of */])();
        var /** @type {?} */ datepickerToggled = this.datepicker ?
            Object(__WEBPACK_IMPORTED_MODULE_15_rxjs_observable_merge__["a" /* merge */])(this.datepicker.openedStream, this.datepicker.closedStream) :
            Object(__WEBPACK_IMPORTED_MODULE_19_rxjs_observable_of__["a" /* of */])();
        this._stateChanges.unsubscribe();
        this._stateChanges = Object(__WEBPACK_IMPORTED_MODULE_15_rxjs_observable_merge__["a" /* merge */])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    };
    MatDatepickerToggle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-datepicker-toggle',
                    template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\" [disabled]=\"disabled\" (click)=\"_open($event)\"><svg *ngIf=\"!_customIcon\" class=\"mat-datepicker-toggle-default-icon\" viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" fill=\"currentColor\" focusable=\"false\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/></svg><ng-content select=\"[matDatepickerToggleIcon]\"></ng-content></button>",
                    styles: [".mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}"],
                    host: {
                        'class': 'mat-datepicker-toggle',
                        '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                    },
                    exportAs: 'matDatepickerToggle',
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatDatepickerToggle.ctorParameters = function () { return [
        { type: MatDatepickerIntl, },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatDatepickerToggle.propDecorators = {
        "datepicker": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */], args: ['for',] },],
        "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "_customIcon": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["r" /* ContentChild */], args: [MatDatepickerToggleIcon,] },],
    };
    return MatDatepickerToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatDatepickerModule = /** @class */ (function () {
    function MatDatepickerModule() {
    }
    MatDatepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                        __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["c" /* MatDialogModule */],
                        __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["e" /* OverlayModule */],
                        __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["a" /* A11yModule */],
                    ],
                    exports: [
                        MatCalendar,
                        MatCalendarBody,
                        MatDatepicker,
                        MatDatepickerContent,
                        MatDatepickerInput,
                        MatDatepickerToggle,
                        MatDatepickerToggleIcon,
                        MatMonthView,
                        MatYearView,
                        MatMultiYearView,
                    ],
                    declarations: [
                        MatCalendar,
                        MatCalendarBody,
                        MatDatepicker,
                        MatDatepickerContent,
                        MatDatepickerInput,
                        MatDatepickerToggle,
                        MatDatepickerToggleIcon,
                        MatMonthView,
                        MatYearView,
                        MatMultiYearView,
                    ],
                    providers: [
                        MatDatepickerIntl,
                        MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER,
                    ],
                    entryComponents: [
                        MatDatepickerContent,
                    ]
                },] },
    ];
    /** @nocollapse */
    MatDatepickerModule.ctorParameters = function () { return []; };
    return MatDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=datepicker.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/material.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VERSION */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_grid_list__ = __webpack_require__("./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_slider__ = __webpack_require__("./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_stepper__ = __webpack_require__("./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* unused harmony reexport MatAutocompleteSelectedEvent */
/* unused harmony reexport MatAutocompleteBase */
/* unused harmony reexport _MatAutocompleteMixinBase */
/* unused harmony reexport MAT_AUTOCOMPLETE_DEFAULT_OPTIONS */
/* unused harmony reexport MatAutocomplete */
/* unused harmony reexport MatAutocompleteModule */
/* unused harmony reexport AUTOCOMPLETE_OPTION_HEIGHT */
/* unused harmony reexport AUTOCOMPLETE_PANEL_HEIGHT */
/* unused harmony reexport MAT_AUTOCOMPLETE_SCROLL_STRATEGY */
/* unused harmony reexport MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony reexport MAT_AUTOCOMPLETE_SCROLL_STRATEGY_PROVIDER */
/* unused harmony reexport MAT_AUTOCOMPLETE_VALUE_ACCESSOR */
/* unused harmony reexport getMatAutocompleteMissingPanelError */
/* unused harmony reexport MatAutocompleteTrigger */
/* unused harmony reexport MatButtonModule */
/* unused harmony reexport MatButtonBase */
/* unused harmony reexport _MatButtonMixinBase */
/* unused harmony reexport MatButton */
/* unused harmony reexport MatAnchor */
/* unused harmony reexport MatButtonToggleGroupBase */
/* unused harmony reexport _MatButtonToggleGroupMixinBase */
/* unused harmony reexport MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR */
/* unused harmony reexport MatButtonToggleChange */
/* unused harmony reexport MatButtonToggleGroup */
/* unused harmony reexport MatButtonToggleGroupMultiple */
/* unused harmony reexport MatButtonToggle */
/* unused harmony reexport MatButtonToggleModule */
/* unused harmony reexport MatCardContent */
/* unused harmony reexport MatCardTitle */
/* unused harmony reexport MatCardSubtitle */
/* unused harmony reexport MatCardActions */
/* unused harmony reexport MatCardFooter */
/* unused harmony reexport MatCardImage */
/* unused harmony reexport MatCardSmImage */
/* unused harmony reexport MatCardMdImage */
/* unused harmony reexport MatCardLgImage */
/* unused harmony reexport MatCardXlImage */
/* unused harmony reexport MatCardAvatar */
/* unused harmony reexport MatCard */
/* unused harmony reexport MatCardHeader */
/* unused harmony reexport MatCardTitleGroup */
/* unused harmony reexport MatCardModule */
/* unused harmony reexport MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR */
/* unused harmony reexport TransitionCheckState */
/* unused harmony reexport MatCheckboxChange */
/* unused harmony reexport MatCheckboxBase */
/* unused harmony reexport _MatCheckboxMixinBase */
/* unused harmony reexport MatCheckbox */
/* unused harmony reexport MAT_CHECKBOX_CLICK_ACTION */
/* unused harmony reexport MatCheckboxModule */
/* unused harmony reexport MAT_CHECKBOX_REQUIRED_VALIDATOR */
/* unused harmony reexport MatCheckboxRequiredValidator */
/* unused harmony reexport MatChipsModule */
/* unused harmony reexport MatChipListBase */
/* unused harmony reexport _MatChipListMixinBase */
/* unused harmony reexport MatChipListChange */
/* unused harmony reexport MatChipList */
/* unused harmony reexport MatChipSelectionChange */
/* unused harmony reexport MatChipBase */
/* unused harmony reexport _MatChipMixinBase */
/* unused harmony reexport MatBasicChip */
/* unused harmony reexport MatChip */
/* unused harmony reexport MatChipRemove */
/* unused harmony reexport MatChipInput */
/* unused harmony reexport MAT_PLACEHOLDER_GLOBAL_OPTIONS */
/* unused harmony reexport AnimationCurves */
/* unused harmony reexport AnimationDurations */
/* unused harmony reexport MatCommonModule */
/* unused harmony reexport MATERIAL_SANITY_CHECKS */
/* unused harmony reexport mixinDisabled */
/* unused harmony reexport mixinColor */
/* unused harmony reexport mixinDisableRipple */
/* unused harmony reexport mixinTabIndex */
/* unused harmony reexport mixinErrorState */
/* unused harmony reexport mixinInitialized */
/* unused harmony reexport NativeDateModule */
/* unused harmony reexport MatNativeDateModule */
/* unused harmony reexport MAT_DATE_LOCALE */
/* unused harmony reexport MAT_DATE_LOCALE_PROVIDER */
/* unused harmony reexport DateAdapter */
/* unused harmony reexport MAT_DATE_FORMATS */
/* unused harmony reexport NativeDateAdapter */
/* unused harmony reexport MAT_NATIVE_DATE_FORMATS */
/* unused harmony reexport ShowOnDirtyErrorStateMatcher */
/* unused harmony reexport ErrorStateMatcher */
/* unused harmony reexport MAT_HAMMER_OPTIONS */
/* unused harmony reexport GestureConfig */
/* unused harmony reexport MatLine */
/* unused harmony reexport MatLineSetter */
/* unused harmony reexport MatLineModule */
/* unused harmony reexport MatOptionModule */
/* unused harmony reexport MatOptionSelectionChange */
/* unused harmony reexport MAT_OPTION_PARENT_COMPONENT */
/* unused harmony reexport MatOption */
/* unused harmony reexport _countGroupLabelsBeforeOption */
/* unused harmony reexport _getOptionScrollPosition */
/* unused harmony reexport MatOptgroupBase */
/* unused harmony reexport _MatOptgroupMixinBase */
/* unused harmony reexport MatOptgroup */
/* unused harmony reexport MAT_LABEL_GLOBAL_OPTIONS */
/* unused harmony reexport MatRippleModule */
/* unused harmony reexport MAT_RIPPLE_GLOBAL_OPTIONS */
/* unused harmony reexport MatRipple */
/* unused harmony reexport RippleState */
/* unused harmony reexport RippleRef */
/* unused harmony reexport defaultRippleAnimationConfig */
/* unused harmony reexport RippleRenderer */
/* unused harmony reexport MatPseudoCheckboxModule */
/* unused harmony reexport MatPseudoCheckbox */
/* unused harmony reexport JAN */
/* unused harmony reexport FEB */
/* unused harmony reexport MAR */
/* unused harmony reexport APR */
/* unused harmony reexport MAY */
/* unused harmony reexport JUN */
/* unused harmony reexport JUL */
/* unused harmony reexport AUG */
/* unused harmony reexport SEP */
/* unused harmony reexport OCT */
/* unused harmony reexport NOV */
/* unused harmony reexport DEC */
/* unused harmony reexport ɵa31 */
/* unused harmony reexport MatDatepickerModule */
/* unused harmony reexport MatCalendar */
/* unused harmony reexport MatCalendarCell */
/* unused harmony reexport MatCalendarBody */
/* unused harmony reexport MAT_DATEPICKER_SCROLL_STRATEGY */
/* unused harmony reexport MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony reexport MAT_DATEPICKER_SCROLL_STRATEGY_PROVIDER */
/* unused harmony reexport MatDatepickerContent */
/* unused harmony reexport MatDatepicker */
/* unused harmony reexport MAT_DATEPICKER_VALUE_ACCESSOR */
/* unused harmony reexport MAT_DATEPICKER_VALIDATORS */
/* unused harmony reexport MatDatepickerInputEvent */
/* unused harmony reexport MatDatepickerInput */
/* unused harmony reexport MatDatepickerIntl */
/* unused harmony reexport MatDatepickerToggleIcon */
/* unused harmony reexport MatDatepickerToggle */
/* unused harmony reexport MatMonthView */
/* unused harmony reexport MatYearView */
/* unused harmony reexport MatDialogModule */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["a"]; });
/* unused harmony reexport MAT_DIALOG_DEFAULT_OPTIONS */
/* unused harmony reexport MAT_DIALOG_SCROLL_STRATEGY */
/* unused harmony reexport MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony reexport MAT_DIALOG_SCROLL_STRATEGY_PROVIDER */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["b"]; });
/* unused harmony reexport throwMatDialogContentAlreadyAttachedError */
/* unused harmony reexport MatDialogContainer */
/* unused harmony reexport MatDialogClose */
/* unused harmony reexport MatDialogTitle */
/* unused harmony reexport MatDialogContent */
/* unused harmony reexport MatDialogActions */
/* unused harmony reexport MatDialogConfig */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__angular_material_dialog__["d"]; });
/* unused harmony reexport matDialogAnimations */
/* unused harmony reexport MatDivider */
/* unused harmony reexport MatDividerModule */
/* unused harmony reexport MatExpansionModule */
/* unused harmony reexport MatAccordion */
/* unused harmony reexport MatExpansionPanel */
/* unused harmony reexport MatExpansionPanelActionRow */
/* unused harmony reexport MatExpansionPanelHeader */
/* unused harmony reexport MatExpansionPanelDescription */
/* unused harmony reexport MatExpansionPanelTitle */
/* unused harmony reexport MatExpansionPanelContent */
/* unused harmony reexport EXPANSION_PANEL_ANIMATION_TIMING */
/* unused harmony reexport matExpansionAnimations */
/* unused harmony reexport MatFormFieldModule */
/* unused harmony reexport MatError */
/* unused harmony reexport MatFormFieldBase */
/* unused harmony reexport _MatFormFieldMixinBase */
/* unused harmony reexport MatFormField */
/* unused harmony reexport MatFormFieldControl */
/* unused harmony reexport getMatFormFieldPlaceholderConflictError */
/* unused harmony reexport getMatFormFieldDuplicatedHintError */
/* unused harmony reexport getMatFormFieldMissingControlError */
/* unused harmony reexport MatHint */
/* unused harmony reexport MatPlaceholder */
/* unused harmony reexport MatPrefix */
/* unused harmony reexport MatSuffix */
/* unused harmony reexport MatLabel */
/* unused harmony reexport matFormFieldAnimations */
/* unused harmony reexport MatGridListModule */
/* unused harmony reexport MatGridList */
/* unused harmony reexport MatGridTile */
/* unused harmony reexport MatGridTileText */
/* unused harmony reexport MatGridAvatarCssMatStyler */
/* unused harmony reexport MatGridTileHeaderCssMatStyler */
/* unused harmony reexport MatGridTileFooterCssMatStyler */
/* unused harmony reexport MatIconModule */
/* unused harmony reexport MatIconBase */
/* unused harmony reexport _MatIconMixinBase */
/* unused harmony reexport MatIcon */
/* unused harmony reexport getMatIconNameNotFoundError */
/* unused harmony reexport getMatIconNoHttpProviderError */
/* unused harmony reexport getMatIconFailedToSanitizeError */
/* unused harmony reexport MatIconRegistry */
/* unused harmony reexport ICON_REGISTRY_PROVIDER_FACTORY */
/* unused harmony reexport ICON_REGISTRY_PROVIDER */
/* unused harmony reexport MatInputModule */
/* unused harmony reexport MatTextareaAutosize */
/* unused harmony reexport MatInputBase */
/* unused harmony reexport _MatInputMixinBase */
/* unused harmony reexport MatInput */
/* unused harmony reexport getMatInputUnsupportedTypeError */
/* unused harmony reexport MAT_INPUT_VALUE_ACCESSOR */
/* unused harmony reexport MatListModule */
/* unused harmony reexport MatListBase */
/* unused harmony reexport _MatListMixinBase */
/* unused harmony reexport MatListItemBase */
/* unused harmony reexport _MatListItemMixinBase */
/* unused harmony reexport MatNavList */
/* unused harmony reexport MatList */
/* unused harmony reexport MatListAvatarCssMatStyler */
/* unused harmony reexport MatListIconCssMatStyler */
/* unused harmony reexport MatListSubheaderCssMatStyler */
/* unused harmony reexport MatListItem */
/* unused harmony reexport MatSelectionListBase */
/* unused harmony reexport _MatSelectionListMixinBase */
/* unused harmony reexport MatListOptionBase */
/* unused harmony reexport _MatListOptionMixinBase */
/* unused harmony reexport MAT_SELECTION_LIST_VALUE_ACCESSOR */
/* unused harmony reexport MatListOptionChange */
/* unused harmony reexport MatSelectionListChange */
/* unused harmony reexport MatListOption */
/* unused harmony reexport MatSelectionList */
/* unused harmony reexport ɵa20 */
/* unused harmony reexport ɵb20 */
/* unused harmony reexport ɵd20 */
/* unused harmony reexport ɵc20 */
/* unused harmony reexport MAT_MENU_SCROLL_STRATEGY */
/* unused harmony reexport MatMenuModule */
/* unused harmony reexport MatMenu */
/* unused harmony reexport MAT_MENU_DEFAULT_OPTIONS */
/* unused harmony reexport MatMenuItem */
/* unused harmony reexport MatMenuTrigger */
/* unused harmony reexport matMenuAnimations */
/* unused harmony reexport fadeInItems */
/* unused harmony reexport transformMenu */
/* unused harmony reexport MatMenuContent */
/* unused harmony reexport MatPaginatorModule */
/* unused harmony reexport PageEvent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_18__angular_material_paginator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_18__angular_material_paginator__["b"]; });
/* unused harmony reexport MAT_PAGINATOR_INTL_PROVIDER_FACTORY */
/* unused harmony reexport MAT_PAGINATOR_INTL_PROVIDER */
/* unused harmony reexport MatProgressBarModule */
/* unused harmony reexport MatProgressBarBase */
/* unused harmony reexport _MatProgressBarMixinBase */
/* unused harmony reexport MatProgressBar */
/* unused harmony reexport MatProgressSpinnerModule */
/* unused harmony reexport MatProgressSpinnerBase */
/* unused harmony reexport _MatProgressSpinnerMixinBase */
/* unused harmony reexport MatProgressSpinner */
/* unused harmony reexport MatSpinner */
/* unused harmony reexport MatRadioModule */
/* unused harmony reexport MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR */
/* unused harmony reexport MatRadioChange */
/* unused harmony reexport MatRadioGroupBase */
/* unused harmony reexport _MatRadioGroupMixinBase */
/* unused harmony reexport MatRadioGroup */
/* unused harmony reexport MatRadioButtonBase */
/* unused harmony reexport _MatRadioButtonMixinBase */
/* unused harmony reexport MatRadioButton */
/* unused harmony reexport MatSelectModule */
/* unused harmony reexport SELECT_PANEL_MAX_HEIGHT */
/* unused harmony reexport SELECT_PANEL_PADDING_X */
/* unused harmony reexport SELECT_PANEL_INDENT_PADDING_X */
/* unused harmony reexport SELECT_ITEM_HEIGHT_EM */
/* unused harmony reexport SELECT_MULTIPLE_PANEL_PADDING_X */
/* unused harmony reexport SELECT_PANEL_VIEWPORT_PADDING */
/* unused harmony reexport MAT_SELECT_SCROLL_STRATEGY */
/* unused harmony reexport MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony reexport MAT_SELECT_SCROLL_STRATEGY_PROVIDER */
/* unused harmony reexport MatSelectChange */
/* unused harmony reexport MatSelectBase */
/* unused harmony reexport _MatSelectMixinBase */
/* unused harmony reexport MatSelectTrigger */
/* unused harmony reexport MatSelect */
/* unused harmony reexport matSelectAnimations */
/* unused harmony reexport transformPanel */
/* unused harmony reexport fadeInContent */
/* unused harmony reexport MatSidenavModule */
/* unused harmony reexport throwMatDuplicatedDrawerError */
/* unused harmony reexport MatDrawerToggleResult */
/* unused harmony reexport MAT_DRAWER_DEFAULT_AUTOSIZE */
/* unused harmony reexport MatDrawerContent */
/* unused harmony reexport MatDrawer */
/* unused harmony reexport MatDrawerContainer */
/* unused harmony reexport MatSidenavContent */
/* unused harmony reexport MatSidenav */
/* unused harmony reexport MatSidenavContainer */
/* unused harmony reexport matDrawerAnimations */
/* unused harmony reexport MatSlideToggleModule */
/* unused harmony reexport MAT_SLIDE_TOGGLE_VALUE_ACCESSOR */
/* unused harmony reexport MatSlideToggleChange */
/* unused harmony reexport MatSlideToggleBase */
/* unused harmony reexport _MatSlideToggleMixinBase */
/* unused harmony reexport MatSlideToggle */
/* unused harmony reexport MatSliderModule */
/* unused harmony reexport MAT_SLIDER_VALUE_ACCESSOR */
/* unused harmony reexport MatSliderChange */
/* unused harmony reexport MatSliderBase */
/* unused harmony reexport _MatSliderMixinBase */
/* unused harmony reexport MatSlider */
/* unused harmony reexport MatSnackBarModule */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_26__angular_material_snack_bar__["a"]; });
/* unused harmony reexport MatSnackBarContainer */
/* unused harmony reexport MAT_SNACK_BAR_DATA */
/* unused harmony reexport MatSnackBarConfig */
/* unused harmony reexport MatSnackBarRef */
/* unused harmony reexport SimpleSnackBar */
/* unused harmony reexport SHOW_ANIMATION */
/* unused harmony reexport HIDE_ANIMATION */
/* unused harmony reexport matSnackBarAnimations */
/* unused harmony reexport MatSortModule */
/* unused harmony reexport MatSortHeaderBase */
/* unused harmony reexport _MatSortHeaderMixinBase */
/* unused harmony reexport MatSortHeader */
/* unused harmony reexport MatSortHeaderIntl */
/* unused harmony reexport MAT_SORT_HEADER_INTL_PROVIDER_FACTORY */
/* unused harmony reexport MAT_SORT_HEADER_INTL_PROVIDER */
/* unused harmony reexport MatSortBase */
/* unused harmony reexport _MatSortMixinBase */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_27__angular_material_sort__["a"]; });
/* unused harmony reexport matSortAnimations */
/* unused harmony reexport MatStepperModule */
/* unused harmony reexport MatStepLabel */
/* unused harmony reexport _MatStep */
/* unused harmony reexport _MatStepper */
/* unused harmony reexport MatStep */
/* unused harmony reexport MatStepper */
/* unused harmony reexport MatHorizontalStepper */
/* unused harmony reexport MatVerticalStepper */
/* unused harmony reexport MatStepperNext */
/* unused harmony reexport MatStepperPrevious */
/* unused harmony reexport MatStepHeader */
/* unused harmony reexport MatStepperIntl */
/* unused harmony reexport matStepperAnimations */
/* unused harmony reexport MatStepperIcon */
/* unused harmony reexport MatTableModule */
/* unused harmony reexport MatCellDef */
/* unused harmony reexport MatHeaderCellDef */
/* unused harmony reexport MatColumnDef */
/* unused harmony reexport MatHeaderCell */
/* unused harmony reexport MatCell */
/* unused harmony reexport MatTable */
/* unused harmony reexport MatHeaderRowDef */
/* unused harmony reexport MatRowDef */
/* unused harmony reexport MatHeaderRow */
/* unused harmony reexport MatRow */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_29__angular_material_table__["a"]; });
/* unused harmony reexport ɵe22 */
/* unused harmony reexport ɵf22 */
/* unused harmony reexport ɵa22 */
/* unused harmony reexport ɵb22 */
/* unused harmony reexport ɵc22 */
/* unused harmony reexport ɵd22 */
/* unused harmony reexport ɵi22 */
/* unused harmony reexport ɵg22 */
/* unused harmony reexport ɵj22 */
/* unused harmony reexport ɵh22 */
/* unused harmony reexport MatInkBar */
/* unused harmony reexport MatTabBody */
/* unused harmony reexport MatTabBodyPortal */
/* unused harmony reexport MatTabHeader */
/* unused harmony reexport MatTabLabelWrapper */
/* unused harmony reexport MatTab */
/* unused harmony reexport MatTabLabel */
/* unused harmony reexport MatTabNav */
/* unused harmony reexport MatTabLink */
/* unused harmony reexport MatTabsModule */
/* unused harmony reexport MatTabChangeEvent */
/* unused harmony reexport MatTabGroupBase */
/* unused harmony reexport _MatTabGroupMixinBase */
/* unused harmony reexport MatTabGroup */
/* unused harmony reexport matTabsAnimations */
/* unused harmony reexport MatToolbarModule */
/* unused harmony reexport MatToolbarBase */
/* unused harmony reexport _MatToolbarMixinBase */
/* unused harmony reexport MatToolbarRow */
/* unused harmony reexport MatToolbar */
/* unused harmony reexport throwToolbarMixedModesError */
/* unused harmony reexport MatTooltipModule */
/* unused harmony reexport SCROLL_THROTTLE_MS */
/* unused harmony reexport TOOLTIP_PANEL_CLASS */
/* unused harmony reexport getMatTooltipInvalidPositionError */
/* unused harmony reexport MAT_TOOLTIP_SCROLL_STRATEGY */
/* unused harmony reexport MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER_FACTORY */
/* unused harmony reexport MAT_TOOLTIP_SCROLL_STRATEGY_PROVIDER */
/* unused harmony reexport MAT_TOOLTIP_DEFAULT_OPTIONS */
/* unused harmony reexport MatTooltip */
/* unused harmony reexport TooltipComponent */
/* unused harmony reexport matTooltipAnimations */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


































/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Current version of Angular Material.
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Version */]('5.2.5');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=material.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/progress-bar.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatProgressBarModule */
/* unused harmony export MatProgressBarBase */
/* unused harmony export _MatProgressBarMixinBase */
/* unused harmony export MatProgressBar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@docs-private
 */
var MatProgressBarBase = /** @class */ (function () {
    function MatProgressBarBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatProgressBarBase;
}());
var _MatProgressBarMixinBase = Object(__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["w" /* mixinColor */])(MatProgressBarBase, 'primary');
/**
 * Counter used to generate unique IDs for progress bars.
 */
var progressbarId = 0;
/**
 * `<mat-progress-bar>` component.
 */
var MatProgressBar = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_3_tslib__["__extends"])(MatProgressBar, _super);
    function MatProgressBar(_elementRef) {
        var _this = _super.call(this, _elementRef) || this;
        _this._elementRef = _elementRef;
        _this._value = 0;
        _this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        _this.mode = 'determinate';
        /**
         * The id of the progress bar.
         */
        _this.progressbarId = "mat-progress-bar-" + progressbarId++;
        return _this;
    }
    Object.defineProperty(MatProgressBar.prototype, "value", {
        get: /**
         * Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._value = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatProgressBar.prototype, "bufferValue", {
        get: /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */
        function () { return this._bufferValue; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    MatProgressBar.prototype._primaryTransform = /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    function () {
        var /** @type {?} */ scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    MatProgressBar.prototype._bufferTransform = /**
     * Gets the current transform value for the progress bar's buffer indicator. Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    function () {
        if (this.mode === 'buffer') {
            var /** @type {?} */ scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    MatProgressBar.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */], args: [{selector: 'mat-progress-bar',
                    exportAs: 'matProgressBar',
                    host: {
                        'role': 'progressbar',
                        'aria-valuemin': '0',
                        'aria-valuemax': '100',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.mode]': 'mode',
                        'class': 'mat-progress-bar',
                    },
                    inputs: ['color'],
                    template: "<svg width=\"100%\" height=\"5\" focusable=\"false\" class=\"mat-progress-bar-background mat-progress-bar-element\"><defs><pattern [id]=\"progressbarId\" x=\"5\" y=\"0\" width=\"10\" height=\"5\" patternUnits=\"userSpaceOnUse\"><circle cx=\"2.5\" cy=\"2.5\" r=\"2.5\"/></pattern></defs><rect [attr.fill]=\"'url(#' + progressbarId + ')'\" width=\"100%\" height=\"100%\"/></svg><div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div><div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div><div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>",
                    styles: [".mat-progress-bar{display:block;height:5px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-10px)}}"],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    MatProgressBar.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
    ]; };
    MatProgressBar.propDecorators = {
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "bufferValue": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
        "mode": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */] },],
    };
    return MatProgressBar;
}(_MatProgressBarMixinBase));
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatProgressBarModule = /** @class */ (function () {
    function MatProgressBarModule() {
    }
    MatProgressBarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["j" /* MatCommonModule */]],
                    exports: [MatProgressBar, __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["j" /* MatCommonModule */]],
                    declarations: [MatProgressBar],
                },] },
    ];
    /** @nocollapse */
    MatProgressBarModule.ctorParameters = function () { return []; };
    return MatProgressBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=progress-bar.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/radio.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatRadioModule */
/* unused harmony export MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR */
/* unused harmony export MatRadioChange */
/* unused harmony export MatRadioGroupBase */
/* unused harmony export _MatRadioGroupMixinBase */
/* unused harmony export MatRadioGroup */
/* unused harmony export MatRadioButtonBase */
/* unused harmony export _MatRadioButtonMixinBase */
/* unused harmony export MatRadioButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// Increasing integer for generating unique ids for radio components.
var nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * \@docs-private
 */
var MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_19" /* forwardRef */])(function () { return MatRadioGroup; }),
    multi: true
};
/**
 * Change event object emitted by MatRadio and MatRadioGroup.
 */
var MatRadioChange = /** @class */ (function () {
    function MatRadioChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatRadioChange;
}());
/**
 * \@docs-private
 */
var MatRadioGroupBase = /** @class */ (function () {
    function MatRadioGroupBase() {
    }
    return MatRadioGroupBase;
}());
var _MatRadioGroupMixinBase = Object(__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["y" /* mixinDisabled */])(MatRadioGroupBase);
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
var MatRadioGroup = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["__extends"])(MatRadioGroup, _super);
    function MatRadioGroup(_changeDetector) {
        var _this = _super.call(this) || this;
        _this._changeDetector = _changeDetector;
        /**
         * Selected value for group. Should equal the value of the selected radio button if there *is*
         * a corresponding radio button with a matching value. If there is *not* such a corresponding
         * radio button, this value persists to be applied in case a new radio button is added with a
         * matching value.
         */
        _this._value = null;
        /**
         * The HTML name attribute applied to radio buttons in this group.
         */
        _this._name = "mat-radio-group-" + nextUniqueId++;
        /**
         * The currently selected radio button. Should match value.
         */
        _this._selected = null;
        /**
         * Whether the `value` has been set to its initial value.
         */
        _this._isInitialized = false;
        /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         */
        _this._labelPosition = 'after';
        /**
         * Whether the radio group is disabled.
         */
        _this._disabled = false;
        /**
         * Whether the radio group is required.
         */
        _this._required = false;
        /**
         * The method to be called in order to update ngModel
         */
        _this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        _this.onTouched = function () { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        _this.change = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        return _this;
    }
    Object.defineProperty(MatRadioGroup.prototype, "name", {
        get: /**
         * Name of the radio button group. All radio buttons inside this group will use this name.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "align", {
        get: /**
         * Alignment of the radio-buttons relative to their labels. Can be 'before' or 'after'.
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () {
            // align refers to the checkbox relative to the label, while labelPosition refers to the
            // label relative to the checkbox. As such, they are inverted.
            return this.labelPosition == 'after' ? 'start' : 'end';
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.labelPosition = (v == 'start') ? 'after' : 'before';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "labelPosition", {
        get: /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         * @return {?}
         */
        function () {
            return this._labelPosition;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._labelPosition = (v == 'before') ? 'before' : 'after';
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "value", {
        get: /**
         * Value of the radio button.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value != newValue) {
                // Set this before proceeding to ensure no circular loop occurs with selection.
                this._value = newValue;
                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._checkSelectedRadioButton = /**
     * @return {?}
     */
    function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    Object.defineProperty(MatRadioGroup.prototype, "selected", {
        get: /**
         * Whether the radio button is selected.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "disabled", {
        get: /**
         * Whether the radio group is disabled
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "required", {
        get: /**
         * Whether the radio group is required
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    MatRadioGroup.prototype.ngAfterContentInit = /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    function () {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    };
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    MatRadioGroup.prototype._touch = /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._updateRadioButtonNames = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach(function (radio) {
                radio.name = _this.name;
            });
        }
    };
    /**
     * Updates the `selected` radio button from the internal _value state.
     * @return {?}
     */
    MatRadioGroup.prototype._updateSelectedRadioFromValue = /**
     * Updates the `selected` radio button from the internal _value state.
     * @return {?}
     */
    function () {
        var _this = this;
        // If the value already matches the selected radio, do nothing.
        var /** @type {?} */ isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._radios != null && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(function (radio) {
                radio.checked = _this.value == radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    /** Dispatch change event with current selection and group value. */
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    MatRadioGroup.prototype._emitChangeEvent = /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    function () {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange(/** @type {?} */ ((this._selected)), this._value));
        }
    };
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._markRadiosForCheck = /**
     * @return {?}
     */
    function () {
        if (this._radios) {
            this._radios.forEach(function (radio) { return radio._markForCheck(); });
        }
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatRadioGroup.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatRadioGroup.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatRadioGroup.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    MatRadioGroup.prototype.setDisabledState = /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    };
    MatRadioGroup.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["t" /* Directive */], args: [{
                    selector: 'mat-radio-group',
                    exportAs: 'matRadioGroup',
                    providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                    host: {
                        'role': 'radiogroup',
                        'class': 'mat-radio-group',
                    },
                    inputs: ['disabled'],
                },] },
    ];
    /** @nocollapse */
    MatRadioGroup.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatRadioGroup.propDecorators = {
        "change": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "_radios": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["s" /* ContentChildren */], args: [Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_19" /* forwardRef */])(function () { return MatRadioButton; }), { descendants: true },] },],
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "align": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "labelPosition": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "required": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
    };
    return MatRadioGroup;
}(_MatRadioGroupMixinBase));
/**
 * \@docs-private
 */
var MatRadioButtonBase = /** @class */ (function () {
    function MatRadioButtonBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatRadioButtonBase;
}());
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
var _MatRadioButtonMixinBase = Object(__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["w" /* mixinColor */])(Object(__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["x" /* mixinDisableRipple */])(Object(__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["A" /* mixinTabIndex */])(MatRadioButtonBase)), 'accent');
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
var MatRadioButton = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_5_tslib__["__extends"])(MatRadioButton, _super);
    function MatRadioButton(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetector = _changeDetector;
        _this._focusMonitor = _focusMonitor;
        _this._radioDispatcher = _radioDispatcher;
        _this._uniqueId = "mat-radio-" + ++nextUniqueId;
        /**
         * The unique ID for the radio button.
         */
        _this.id = _this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        _this.change = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        /**
         * Whether this radio is checked.
         */
        _this._checked = false;
        /**
         * Value assigned to this radio.
         */
        _this._value = null;
        /**
         * Unregister function for _radioDispatcher
         */
        _this._removeUniqueSelectionListener = function () { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        _this.radioGroup = radioGroup;
        _this._removeUniqueSelectionListener =
            _radioDispatcher.listen(function (id, name) {
                if (id != _this.id && name == _this.name) {
                    _this.checked = false;
                }
            });
        return _this;
    }
    Object.defineProperty(MatRadioButton.prototype, "checked", {
        get: /**
         * Whether this radio button is checked.
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newCheckedState = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
            if (this._checked != newCheckedState) {
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value != this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value == this.value) {
                    // When unchecking the selected radio button, update the selected radio
                    // property on the group.
                    this.radioGroup.selected = null;
                }
                if (newCheckedState) {
                    // Notify all radio buttons with the same name to un-check.
                    this._radioDispatcher.notify(this.id, this.name);
                }
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "value", {
        get: /**
         * The value of this radio button.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value != value) {
                this._value = value;
                if (this.radioGroup != null) {
                    if (!this.checked) {
                        // Update checked when the value changed to match the radio group's value
                        this.checked = this.radioGroup.value == value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "align", {
        get: /**
         * Whether or not the radio-button should appear before or after the label.
         * @deprecated
         * \@deletion-target 6.0.0
         * @return {?}
         */
        function () {
            // align refers to the checkbox relative to the label, while labelPosition refers to the
            // label relative to the checkbox. As such, they are inverted.
            return this.labelPosition == 'after' ? 'start' : 'end';
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.labelPosition = (v == 'start') ? 'after' : 'before';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "labelPosition", {
        get: /**
         * Whether the label should appear after or before the radio button. Defaults to 'after'
         * @return {?}
         */
        function () {
            return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._labelPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "disabled", {
        get: /**
         * Whether the radio button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "required", {
        get: /**
         * Whether the radio button is required.
         * @return {?}
         */
        function () {
            return this._required || (this.radioGroup && this.radioGroup.required);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "inputId", {
        /** ID of the native input element inside `<mat-radio-button>` */
        get: /**
         * ID of the native input element inside `<mat-radio-button>`
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    /** Focuses the radio button. */
    /**
     * Focuses the radio button.
     * @return {?}
     */
    MatRadioButton.prototype.focus = /**
     * Focuses the radio button.
     * @return {?}
     */
    function () {
        this._focusMonitor.focusVia(this._inputElement.nativeElement, 'keyboard');
    };
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    MatRadioButton.prototype._markForCheck = /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    function () {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusMonitor
            .monitor(this._inputElement.nativeElement)
            .subscribe(function (focusOrigin) { return _this._onInputFocusChange(focusOrigin); });
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._inputElement.nativeElement);
        this._removeUniqueSelectionListener();
    };
    /**
     * Dispatch change event with current value.
     * @return {?}
     */
    MatRadioButton.prototype._emitChangeEvent = /**
     * Dispatch change event with current value.
     * @return {?}
     */
    function () {
        this.change.emit(new MatRadioChange(this, this._value));
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype._isRippleDisabled = /**
     * @return {?}
     */
    function () {
        return this.disableRipple || this.disabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatRadioButton.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    MatRadioButton.prototype._onInputChange = /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        var /** @type {?} */ groupValueChanged = this.radioGroup && this.value != this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    };
    /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    MatRadioButton.prototype._onInputFocusChange = /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    function (focusOrigin) {
        if (!this._focusRipple && focusOrigin === 'keyboard') {
            this._focusRipple = this._ripple.launch(0, 0, { persistent: true });
        }
        else if (!focusOrigin) {
            if (this.radioGroup) {
                this.radioGroup._touch();
            }
            if (this._focusRipple) {
                this._focusRipple.fadeOut();
                this._focusRipple = null;
            }
        }
    };
    MatRadioButton.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */], args: [{selector: 'mat-radio-button',
                    template: "<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label><div class=\"mat-radio-container\"><div class=\"mat-radio-outer-circle\"></div><div class=\"mat-radio-inner-circle\"></div><div mat-ripple class=\"mat-radio-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"true\" [matRippleRadius]=\"23\" [matRippleAnimation]=\"{enterDuration: 150}\"></div></div><input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [tabIndex]=\"tabIndex\" [attr.name]=\"name\" [required]=\"required\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-describedby]=\"ariaDescribedby\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></div></label>",
                    styles: [".mat-radio-button{display:inline-block}.mat-radio-label{cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(.001)}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}.mat-radio-label-content{display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-ripple{position:absolute;left:calc(50% - 25px);top:calc(50% - 25px);height:50px;width:50px;z-index:1;pointer-events:none}"],
                    inputs: ['color', 'disableRipple', 'tabIndex'],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    exportAs: 'matRadioButton',
                    host: {
                        'class': 'mat-radio-button',
                        '[class.mat-radio-checked]': 'checked',
                        '[class.mat-radio-disabled]': 'disabled',
                        '[attr.id]': 'id',
                        // Note: under normal conditions focus shouldn't land on this element, however it may be
                        // programmatically set, for example inside of a focus trap, in this case we want to forward
                        // the focus to the native element.
                        '(focus)': '_inputElement.nativeElement.focus()',
                    },
                    changeDetection: __WEBPACK_IMPORTED_MODULE_3__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatRadioButton.ctorParameters = function () { return [
        { type: MatRadioGroup, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["k" /* ChangeDetectorRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["f" /* FocusMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["d" /* UniqueSelectionDispatcher */], },
    ]; };
    MatRadioButton.propDecorators = {
        "id": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "ariaLabel": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */], args: ['aria-label',] },],
        "ariaLabelledby": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */], args: ['aria-labelledby',] },],
        "ariaDescribedby": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */], args: ['aria-describedby',] },],
        "checked": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "value": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "align": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "labelPosition": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "disabled": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "required": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Input */] },],
        "change": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */] },],
        "_ripple": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */], args: [__WEBPACK_IMPORTED_MODULE_4__angular_material_core__["r" /* MatRipple */],] },],
        "_inputElement": [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */], args: ['input',] },],
    };
    return MatRadioButton;
}(_MatRadioButtonMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatRadioModule = /** @class */ (function () {
    function MatRadioModule() {
    }
    MatRadioModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["s" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MatCommonModule */], __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["a" /* A11yModule */]],
                    exports: [MatRadioGroup, MatRadioButton, __WEBPACK_IMPORTED_MODULE_4__angular_material_core__["j" /* MatCommonModule */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["c" /* UNIQUE_SELECTION_DISPATCHER_PROVIDER */]],
                    declarations: [MatRadioGroup, MatRadioButton],
                },] },
    ];
    /** @nocollapse */
    MatRadioModule.ctorParameters = function () { return []; };
    return MatRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=radio.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/stepper.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MatStepperModule */
/* unused harmony export MatStepLabel */
/* unused harmony export _MatStep */
/* unused harmony export _MatStepper */
/* unused harmony export MatStep */
/* unused harmony export MatStepper */
/* unused harmony export MatHorizontalStepper */
/* unused harmony export MatVerticalStepper */
/* unused harmony export MatStepperNext */
/* unused harmony export MatStepperPrevious */
/* unused harmony export MatStepHeader */
/* unused harmony export MatStepperIntl */
/* unused harmony export matStepperAnimations */
/* unused harmony export MatStepperIcon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__ = __webpack_require__("./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__ = __webpack_require__("./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__ = __webpack_require__("./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__ = __webpack_require__("./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_tslib__ = __webpack_require__("./node_modules/tslib/tslib.es6.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_cdk_bidi__ = __webpack_require__("./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatStepLabel = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatStepLabel, _super);
    function MatStepLabel(template) {
        return _super.call(this, template) || this;
    }
    MatStepLabel.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: '[matStepLabel]',
                },] },
    ];
    /** @nocollapse */
    MatStepLabel.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* TemplateRef */], },
    ]; };
    return MatStepLabel;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["b" /* CdkStepLabel */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Stepper data that is required for internationalization.
 */
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new __WEBPACK_IMPORTED_MODULE_10_rxjs_Subject__["a" /* Subject */]();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
    MatStepperIntl.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */] },
    ];
    /** @nocollapse */
    MatStepperIntl.ctorParameters = function () { return []; };
    return MatStepperIntl;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatStepHeader = /** @class */ (function () {
    function MatStepHeader(_intl, _focusMonitor, _element, changeDetectorRef) {
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._element = _element;
        _focusMonitor.monitor(_element.nativeElement, true);
        this._intlSubscription = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatStepHeader.prototype, "index", {
        get: /**
         * Index of the given step.
         * @return {?}
         */
        function () { return this._index; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._index = Object(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["d" /* coerceNumberProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "selected", {
        get: /**
         * Whether the given step is selected.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._selected = Object(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "active", {
        get: /**
         * Whether the given step label is active.
         * @return {?}
         */
        function () { return this._active; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._active = Object(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatStepHeader.prototype, "optional", {
        get: /**
         * Whether the given step is optional.
         * @return {?}
         */
        function () { return this._optional; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._optional = Object(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["c" /* coerceBooleanProperty */])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatStepHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._element.nativeElement);
    };
    /** Returns string label of given step if it is a text label. */
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    MatStepHeader.prototype._stringLabel = /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    MatStepHeader.prototype._templateLabel = /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    MatStepHeader.prototype._getHostElement = /**
     * Returns the host HTML element.
     * @return {?}
     */
    function () {
        return this._element.nativeElement;
    };
    MatStepHeader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */], args: [{selector: 'mat-step-header',
                    template: "<div class=\"mat-step-header-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\"></div><div [class.mat-step-icon]=\"state !== 'number' || selected\" [class.mat-step-icon-not-touched]=\"state == 'number' && !selected\" [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{index + 1}}</span><ng-container *ngSwitchCase=\"'edit'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.edit)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.edit\"></ng-container><mat-icon *ngSwitchDefault>create</mat-icon></ng-container><ng-container *ngSwitchCase=\"'done'\" [ngSwitch]=\"!!(iconOverrides && iconOverrides.done)\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides.done\"></ng-container><mat-icon *ngSwitchDefault>done</mat-icon></ng-container></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional\">{{_intl.optionalLabel}}</div></div>",
                    styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box}.mat-step-optional{font-size:12px}.mat-step-icon,.mat-step-icon-not-touched{border-radius:50%;height:24px;width:24px;align-items:center;justify-content:center;display:flex}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    host: {
                        'class': 'mat-step-header',
                        'role': 'tab',
                    },
                    encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStepHeader.ctorParameters = function () { return [
        { type: MatStepperIntl, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["f" /* FocusMonitor */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ElementRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    MatStepHeader.propDecorators = {
        "state": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "label": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "iconOverrides": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "index": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "selected": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "active": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
        "optional": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */] },],
    };
    return MatStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 */
var matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["m" /* trigger */])('stepTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["j" /* state */])('previous', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["k" /* style */])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["j" /* state */])('current', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["k" /* style */])({ transform: 'none', visibility: 'visible' })),
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["j" /* state */])('next', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["k" /* style */])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["l" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["e" /* animate */])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["m" /* trigger */])('stepTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["j" /* state */])('previous', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["k" /* style */])({ height: '0px', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["j" /* state */])('next', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["k" /* style */])({ height: '0px', visibility: 'hidden' })),
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["j" /* state */])('current', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["k" /* style */])({ height: '*', visibility: 'visible' })),
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["l" /* transition */])('* <=> current', Object(__WEBPACK_IMPORTED_MODULE_13__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Template to be used to override the icons inside the step header.
 */
var MatStepperIcon = /** @class */ (function () {
    function MatStepperIcon(templateRef) {
        this.templateRef = templateRef;
    }
    MatStepperIcon.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: 'ng-template[matStepperIcon]',
                },] },
    ];
    /** @nocollapse */
    MatStepperIcon.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_9" /* TemplateRef */], },
    ]; };
    MatStepperIcon.propDecorators = {
        "name": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Input */], args: ['matStepperIcon',] },],
    };
    return MatStepperIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Workaround for https://github.com/angular/angular/issues/17849
 */
var _MatStep = __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["a" /* CdkStep */];
var _MatStepper = __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["c" /* CdkStepper */];
var MatStep = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatStep, _super);
    function MatStep(stepper, _errorStateMatcher) {
        var _this = _super.call(this, stepper) || this;
        _this._errorStateMatcher = _errorStateMatcher;
        return _this;
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MatStep.prototype.isErrorState = /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        var /** @type {?} */ originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        var /** @type {?} */ customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    };
    MatStep.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */], args: [{selector: 'mat-step',
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["d" /* ErrorStateMatcher */], useExisting: MatStep }],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* ViewEncapsulation */].None,
                    exportAs: 'matStep',
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStep.ctorParameters = function () { return [
        { type: MatStepper, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Inject */], args: [Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_19" /* forwardRef */])(function () { return MatStepper; }),] },] },
        { type: __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["d" /* ErrorStateMatcher */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_5" /* SkipSelf */] },] },
    ]; };
    MatStep.propDecorators = {
        "stepLabel": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["r" /* ContentChild */], args: [MatStepLabel,] },],
    };
    return MatStep;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["a" /* CdkStep */]));
var MatStepper = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatStepper, _super);
    function MatStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        _this._iconOverrides = {};
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepper.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ icons = this._icons.toArray();
        var /** @type {?} */ editOverride = icons.find(function (icon) { return icon.name === 'edit'; });
        var /** @type {?} */ doneOverride = icons.find(function (icon) { return icon.name === 'done'; });
        if (editOverride) {
            this._iconOverrides["edit"] = editOverride.templateRef;
        }
        if (doneOverride) {
            this._iconOverrides["done"] = doneOverride.templateRef;
        }
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(Object(__WEBPACK_IMPORTED_MODULE_12_rxjs_operators_takeUntil__["a" /* takeUntil */])(this._destroyed)).subscribe(function () { return _this._stateChanged(); });
    };
    MatStepper.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: '[matStepper]'
                },] },
    ];
    /** @nocollapse */
    MatStepper.ctorParameters = function () { return []; };
    MatStepper.propDecorators = {
        "_stepHeader": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_13" /* ViewChildren */], args: [MatStepHeader, { read: __WEBPACK_IMPORTED_MODULE_4__angular_core__["u" /* ElementRef */] },] },],
        "_steps": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["s" /* ContentChildren */], args: [MatStep,] },],
        "_icons": [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["s" /* ContentChildren */], args: [MatStepperIcon,] },],
    };
    return MatStepper;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["c" /* CdkStepper */]));
var MatHorizontalStepper = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatHorizontalStepper, _super);
    function MatHorizontalStepper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatHorizontalStepper.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */], args: [{selector: 'mat-horizontal-stepper',
                    exportAs: 'matHorizontalStepper',
                    template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_focusIndex === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of _steps; let i = index\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{overflow:hidden}.mat-horizontal-stepper-content[aria-expanded=false]{height:0}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-horizontal',
                        'aria-orientation': 'horizontal',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.horizontalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatHorizontalStepper }],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatHorizontalStepper.ctorParameters = function () { return []; };
    return MatHorizontalStepper;
}(MatStepper));
var MatVerticalStepper = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatVerticalStepper, _super);
    function MatVerticalStepper(dir, changeDetectorRef) {
        var _this = _super.call(this, dir, changeDetectorRef) || this;
        _this._orientation = 'vertical';
        return _this;
    }
    MatVerticalStepper.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */], args: [{selector: 'mat-vertical-stepper',
                    exportAs: 'matVerticalStepper',
                    template: "<div class=\"mat-step\" *ngFor=\"let step of _steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_focusIndex == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [index]=\"i\" [state]=\"_getIndicatorType(i)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon,.mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon,[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:8px}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;max-height:24px}.mat-vertical-stepper-header .mat-step-icon,.mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon,[dir=rtl] .mat-vertical-stepper-header .mat-step-icon-not-touched{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{overflow:hidden}.mat-horizontal-stepper-content[aria-expanded=false]{height:0}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-vertical',
                        'aria-orientation': 'vertical',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.verticalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatVerticalStepper }],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_15" /* ViewEncapsulation */].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatVerticalStepper.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_11__angular_cdk_bidi__["b" /* Directionality */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["Q" /* Optional */] },] },
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["k" /* ChangeDetectorRef */], },
    ]; };
    return MatVerticalStepper;
}(MatStepper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Button that moves to the next step in a stepper workflow.
 */
var MatStepperNext = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatStepperNext, _super);
    function MatStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperNext.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: 'button[matStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["c" /* CdkStepper */], useExisting: MatStepper }]
                },] },
    ];
    /** @nocollapse */
    MatStepperNext.ctorParameters = function () { return []; };
    return MatStepperNext;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["e" /* CdkStepperNext */]));
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var MatStepperPrevious = /** @class */ (function (_super) {
    Object(__WEBPACK_IMPORTED_MODULE_9_tslib__["__extends"])(MatStepperPrevious, _super);
    function MatStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperPrevious.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["t" /* Directive */], args: [{
                    selector: 'button[matStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["c" /* CdkStepper */], useExisting: MatStepper }]
                },] },
    ];
    /** @nocollapse */
    MatStepperPrevious.ctorParameters = function () { return []; };
    return MatStepperPrevious;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["f" /* CdkStepperPrevious */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
    MatStepperModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_4__angular_core__["K" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["j" /* MatCommonModule */],
                        __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_1__angular_cdk_portal__["g" /* PortalModule */],
                        __WEBPACK_IMPORTED_MODULE_5__angular_material_button__["a" /* MatButtonModule */],
                        __WEBPACK_IMPORTED_MODULE_2__angular_cdk_stepper__["d" /* CdkStepperModule */],
                        __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                        __WEBPACK_IMPORTED_MODULE_0__angular_cdk_a11y__["a" /* A11yModule */],
                        __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["s" /* MatRippleModule */],
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["j" /* MatCommonModule */],
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    declarations: [
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    providers: [MatStepperIntl, __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["d" /* ErrorStateMatcher */]],
                },] },
    ];
    /** @nocollapse */
    MatStepperModule.ctorParameters = function () { return []; };
    return MatStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/add/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/combineLatest.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_combineLatest PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].combineLatest = __WEBPACK_IMPORTED_MODULE_1__observable_combineLatest__["a" /* combineLatest */];
//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./src/app/routes/member/shared-components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/routes/member/shared-components/messages/messages.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/member/shared-components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_member_service__ = __webpack_require__("./src/app/shared/member.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(ms, snackBar) {
        this.ms = ms;
        this.snackBar = snackBar;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getMessage().subscribe(function (message) {
            if (message) {
                _this.snackBar.open(message, 'Hide', {
                    duration: 3000,
                });
            }
        });
        /* this.snackBar.open("test", "dsad", {
            duration: 3000
        }) */
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/routes/member/shared-components/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/shared-components/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_member_service__["a" /* MemberService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSnackBar */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/shared-components/shared-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_table_users_table_component__ = __webpack_require__("./src/app/routes/member/shared-components/users-table/users-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tournament_filter_list_tournament_filter_list_component__ = __webpack_require__("./src/app/routes/member/shared-components/tournament-filter-list/tournament-filter-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_title_view_title_component__ = __webpack_require__("./src/app/routes/member/shared-components/view-title/view-title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__ = __webpack_require__("./src/app/routes/member/shared-components/messages/messages.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedComponentsModule = /** @class */ (function () {
    function SharedComponentsModule() {
    }
    SharedComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__users_table_users_table_component__["a" /* UsersTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tournament_filter_list_tournament_filter_list_component__["a" /* TournamentFilterListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__view_title_view_title_component__["a" /* ViewTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__["a" /* MessagesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__users_table_users_table_component__["a" /* UsersTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__tournament_filter_list_tournament_filter_list_component__["a" /* TournamentFilterListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__view_title_view_title_component__["a" /* ViewTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__messages_messages_component__["a" /* MessagesComponent */]
            ]
        })
    ], SharedComponentsModule);
    return SharedComponentsModule;
}());



/***/ }),

/***/ "./src/app/routes/member/shared-components/tournament-filter-list/tournament-filter-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\" matPaginator>\n\n    <ng-container matColumnDef=\"privacy\">\n        <mat-header-cell *matHeaderCellDef> Privacy </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n            <mat-icon>{{row.private ? 'lock': 'lock_open'}}</mat-icon>\n        </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{ row.name }} </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"league\">\n        <mat-header-cell *matHeaderCellDef> League </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{ row.league.caption }} </mat-cell>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"players\">\n        <mat-header-cell *matHeaderCellDef> Players </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{ row.players }} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"join\">\n        <mat-header-cell *matHeaderCellDef>Joinable</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n            <span *ngIf=\"row.private\">\n                <button mat-icon-button disabled>\n                    <mat-icon>send</mat-icon>\n                </button>\n            </span>\n            <span *ngIf=\"!row.private\">\n                <button mat-icon-button (click)=\"joinTournament(row.id)\">\n                    <mat-icon>add_circle</mat-icon>\n                </button>\n            </span>\n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"animate\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>"

/***/ }),

/***/ "./src/app/routes/member/shared-components/tournament-filter-list/tournament-filter-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/member/shared-components/tournament-filter-list/tournament-filter-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentFilterListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TournamentFilterListComponent = /** @class */ (function () {
    function TournamentFilterListComponent(tournamentService, afAuth) {
        this.tournamentService = tournamentService;
        this.afAuth = afAuth;
        this.displayedColumns = ['privacy', 'name', 'league', 'players', 'join'];
    }
    TournamentFilterListComponent.prototype.ngOnInit = function () {
        //console.log(this.players.split('-').map(str => Number(str)))
    };
    TournamentFilterListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        //console.log(this.leagues)
        if (this.league && this.players) {
            this.tournamentService.findTournaments(this.privacy, Number(this.league), this.players.split('-').map(function (str) { return Number(str); })).subscribe(function (tournaments) {
                //exclude joined our owned tournaments
                var filterTournaments = tournaments.filter(function (tournament) { return tournament.admin != _this.afAuth.auth.currentUser.uid; }).filter(function (tournament) { return !tournament.contestants[_this.afAuth.auth.currentUser.uid]; });
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatTableDataSource */](filterTournaments);
                _this.dataSource.paginator = _this.paginator;
            });
        }
    };
    TournamentFilterListComponent.prototype.joinTournament = function (tournamentID) {
        this.tournamentService.acceptInvite(tournamentID);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TournamentFilterListComponent.prototype, "privacy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TournamentFilterListComponent.prototype, "league", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TournamentFilterListComponent.prototype, "players", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSort */])
    ], TournamentFilterListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatPaginator */])
    ], TournamentFilterListComponent.prototype, "paginator", void 0);
    TournamentFilterListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-filter-list',
            template: __webpack_require__("./src/app/routes/member/shared-components/tournament-filter-list/tournament-filter-list.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/shared-components/tournament-filter-list/tournament-filter-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], TournamentFilterListComponent);
    return TournamentFilterListComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/shared-components/users-table/users-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z1\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n        <ng-container *ngFor=\"let def of columnDefs\" [matColumnDef]=\"def.columnDef\">\n            <mat-header-cell *matHeaderCellDef>{{def.headName}}</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n\n                <span *ngIf=\"def.columnDef == 'photo'\">\n                    <img [src]=\"def.cell(row)\" width=\"32\" height=\"32\" alt=\"\">\n                </span>\n                <span *ngIf=\"def.columnDef == 'action'\">\n                    <ng-container *ngIf=\"userDataType === 'search'\">\n                        <button *ngIf=\"alreadyJoined(row.uid); else joined\" mat-icon-button color=\"primary\" (click)=\"inviteUser(row)\">\n                            <mat-icon>add_circle</mat-icon>\n                        </button>\n                    </ng-container>\n                    <ng-container *ngIf=\"userDataType === 'invited'\">\n                        <button mat-icon-button color=\"warn\" (click)=\"removedInvitedUser(row)\">\n                            <mat-icon>remove_circle</mat-icon>\n                        </button>\n                    </ng-container>\n                </span>\n                <span *ngIf=\"def.columnDef != 'photo' && def.columnDef != 'action'\">\n                    {{def.cell(row)}}\n                </span>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\n    <!-- <div *ngIf=\"invites$ | async as invites\">\n        <div *ngFor=\"let invite of invites\">\n            {{(invite.user | doc | async)?}}\n        </div>\n    </div> -->\n</div>\n\n<ng-template #joined>\n    <span>Joined</span>\n</ng-template>"

/***/ }),

/***/ "./src/app/routes/member/shared-components/users-table/users-table.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-header-cell:not(.mat-column-name) {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  padding: 0 10px; }\n\nmat-cell:not(.mat-column-name) {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  padding: 0 10px; }\n\nmat-cell:not(.mat-column-name) img {\n    border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/routes/member/shared-components/users-table/users-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_doc_pipe__ = __webpack_require__("./src/app/shared/doc.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersTableComponent = /** @class */ (function () {
    function UsersTableComponent(tournamentService, auth, afAuth, matPag, doc) {
        this.tournamentService = tournamentService;
        this.auth = auth;
        this.afAuth = afAuth;
        this.matPag = matPag;
        this.doc = doc;
        this.users$ = [];
    }
    UsersTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.matPag.itemsPerPageLabel = 'Users per page: ';
        if (this.userDataType === 'invited' || this.userDataType === 'search') {
            this.columnDefs = [
                { columnDef: 'photo', headName: 'Photo', cell: function (row) { return "" + row.photoURL; } },
                { columnDef: 'name', headName: 'Name', cell: function (row) { return "" + row.displayName; } },
                { columnDef: 'action', headName: '', cell: function (row) { return "" + row; } },
            ];
            this.displayedColumns = ['photo', 'name', 'action'];
        }
        else if (this.userDataType === 'scoreboard') {
            this.columnDefs = [
                { columnDef: 'photo', headName: 'Photo', cell: function (row) { return "" + row.photoURL; } },
                { columnDef: 'name', headName: 'Name', cell: function (row) { return "" + row.displayName; } },
                { columnDef: 'score', headName: 'Score', cell: function (row) { return "" + row.score; } },
            ];
            this.displayedColumns = ['photo', 'name', 'score'];
        }
        this.tournamentService.getPlayers(this.tournamentID).subscribe(function (players) {
            _this.players = players;
        });
    };
    UsersTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.userDataType === 'invited') {
            this.tournamentService.getInvitedUsers(this.tournamentID).subscribe(function (users) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableDataSource */](users);
                _this.dataSource.paginator = _this.paginator;
            });
        }
        else if (this.userDataType === 'scoreboard') {
            this.tournamentService.getPlayers(this.tournamentID).subscribe(function (users) {
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableDataSource */](users);
                _this.dataSource.paginator = _this.paginator;
            });
        }
    };
    UsersTableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        //this.getUsersByName(changes.data.currentValue);
        if (this.userDataType === 'search') {
            /* var players = this.tournamentService.getPlayers(this.tournamentID);
            var search = this.tournamentService.getUsersByName(this.data.toLowerCase());

            var list = combineLatest<any[]>(players, search).pipe(
                map(arr => arr.reduce((acc, cur) => acc.concat(cur))),
            )
            list.subscribe(data => {
                data
            }) */
            this.tournamentService.getUsersByName(this.data.toLowerCase()).subscribe(function (users) {
                //exclude logged in user;
                users.forEach(function (item, index) {
                    if (item.uid == _this.afAuth.auth.currentUser.uid) {
                        users.splice(index, 1);
                    }
                });
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableDataSource */](users);
                _this.dataSource.paginator = _this.paginator;
            });
        }
    };
    UsersTableComponent.prototype.alreadyJoined = function (userID) {
        var player = this.players.filter(function (player) { return player.uid === userID; })[0];
        return player ? false : true;
    };
    UsersTableComponent.prototype.getUsersByName = function (data) {
        this.tournamentService.getUsersByName(data);
    };
    UsersTableComponent.prototype.inviteUser = function (user) {
        this.tournamentService.inviteUser(this.tournamentID, user);
    };
    UsersTableComponent.prototype.removedInvitedUser = function (user) {
        this.tournamentService.removeInvitedUser(this.tournamentID, user);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UsersTableComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UsersTableComponent.prototype, "tournamentID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], UsersTableComponent.prototype, "userDataType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatPaginator */])
    ], UsersTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSort */])
    ], UsersTableComponent.prototype, "sort", void 0);
    UsersTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users-table',
            template: __webpack_require__("./src/app/routes/member/shared-components/users-table/users-table.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/shared-components/users-table/users-table.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_doc_pipe__["a" /* DocPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_tournament_service__["a" /* TournamentService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginatorIntl */],
            __WEBPACK_IMPORTED_MODULE_5__shared_doc_pipe__["a" /* DocPipe */]])
    ], UsersTableComponent);
    return UsersTableComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/shared-components/view-title/view-title.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span *ngIf=\"viewTitle$\">\n        {{viewTitle$}}\n    </span>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/routes/member/shared-components/view-title/view-title.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  -webkit-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  -webkit-box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  -webkit-box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  -webkit-box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  -webkit-box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  -webkit-box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  -webkit-box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  -webkit-box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  -webkit-box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  -webkit-box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button,\n.mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #37474f; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #536dfe; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #f50057; }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #536dfe; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #37474f; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #f50057; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  background: transparent; }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(55, 71, 79, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(83, 109, 254, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(245, 0, 87, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #37474f; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #536dfe; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #f50057; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #37474f; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #536dfe; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f50057; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(55, 71, 79, 0.1); }\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(83, 109, 254, 0.1); }\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(245, 0, 87, 0.1); }\n.mat-flat-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary {\n    background-color: #37474f; }\n.mat-flat-button.mat-accent {\n    background-color: #536dfe; }\n.mat-flat-button.mat-warn {\n    background-color: #f50057; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-flat-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-flat-button.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(55, 71, 79, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(83, 109, 254, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(245, 0, 87, 0.2); }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #37474f; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #536dfe; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f50057; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(55, 71, 79, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(83, 109, 254, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(245, 0, 87, 0.26); }\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #37474f;\n  color: white; }\n.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #f50057;\n  color: white; }\n.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #536dfe;\n  color: white; }\n.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-table {\n  background: white; }\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-selected {\n  background-color: #37474f;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(55, 71, 79, 0.4); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  -webkit-box-shadow: inset 0 0 0 1px white;\n          box-shadow: inset 0 0 0 1px white; }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-datepicker-toggle-active {\n  color: #37474f; }\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-focused .mat-form-field-label {\n  color: #37474f; }\n.mat-focused .mat-form-field-label.mat-accent {\n    color: #536dfe; }\n.mat-focused .mat-form-field-label.mat-warn {\n    color: #f50057; }\n.mat-focused .mat-form-field-required-marker {\n  color: #536dfe; }\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.42)), color-stop(33%, rgba(0, 0, 0, 0.42)), color-stop(0%, transparent));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n.mat-form-field-ripple {\n  background-color: #37474f; }\n.mat-form-field-ripple.mat-accent {\n    background-color: #536dfe; }\n.mat-form-field-ripple.mat-warn {\n    background-color: #f50057; }\n.mat-form-field-invalid .mat-form-field-label {\n  color: #f50057; }\n.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #f50057; }\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #f50057; }\n.mat-error {\n  color: #f50057; }\n.mat-icon.mat-primary {\n  color: #37474f; }\n.mat-icon.mat-accent {\n  color: #536dfe; }\n.mat-icon.mat-warn {\n  color: #f50057; }\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #37474f; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #536dfe; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f50057; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option.mat-list-item-focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item.mat-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #455a64; }\n.mat-progress-bar-buffer {\n  background-color: #455a64; }\n.mat-progress-bar-fill::after {\n  background-color: #37474f; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #8c9eff; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #8c9eff; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #536dfe; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #f8bbd0; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #f8bbd0; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #f50057; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #37474f; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #536dfe; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #f50057; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #37474f; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #37474f; }\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(55, 71, 79, 0.26); }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #536dfe; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #536dfe; }\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(83, 109, 254, 0.26); }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #f50057; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #f50057; }\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(245, 0, 87, 0.26); }\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #37474f; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #536dfe; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #f50057; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #f50057; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(63, 81, 181, 0.12); }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #607d8b; }\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(96, 125, 139, 0.5); }\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(96, 125, 139, 0.12); }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #e91e63; }\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(233, 30, 99, 0.12); }\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #37474f; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #536dfe; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #f50057; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(83, 109, 254, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-step-header .mat-step-icon {\n  background-color: #37474f;\n  color: white; }\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(69, 90, 100, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #37474f; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(140, 158, 255, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #536dfe; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(248, 187, 208, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #f50057; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(69, 90, 100, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #37474f; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(140, 158, 255, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #536dfe; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(248, 187, 208, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #f50057; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #37474f;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #536dfe;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #f50057;\n    color: white; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n.mat-simple-snackbar-action {\n  color: #536dfe; }\nmat-toolbar {\n  background: #455a64 !important; }\n"

/***/ }),

/***/ "./src/app/routes/member/shared-components/view-title/view-title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_member_service__ = __webpack_require__("./src/app/shared/member.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTitleComponent = /** @class */ (function () {
    function ViewTitleComponent(ms) {
        this.ms = ms;
    }
    ViewTitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ms.getViewTitle().subscribe(function (title) {
            _this.viewTitle$ = title;
        });
    };
    ViewTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-title',
            template: __webpack_require__("./src/app/routes/member/shared-components/view-title/view-title.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/shared-components/view-title/view-title.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_member_service__["a" /* MemberService */]])
    ], ViewTitleComponent);
    return ViewTitleComponent;
}());



/***/ }),

/***/ "./src/app/shared/doc.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firestore_service__ = __webpack_require__("./src/app/shared/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocPipe = /** @class */ (function () {
    function DocPipe(db) {
        this.db = db;
    }
    DocPipe.prototype.transform = function (value) {
        return this.db.doc$(value.path);
    };
    DocPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'doc'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__firestore_service__["a" /* FirestoreService */]])
    ], DocPipe);
    return DocPipe;
}());



/***/ }),

/***/ "./src/app/shared/firestore.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreService = /** @class */ (function () {
    function FirestoreService(afs) {
        this.afs = afs;
    }
    FirestoreService.prototype.col = function (ref, queryFn) {
        return typeof ref === 'string' ? this.afs.collection(ref, queryFn) : ref;
    };
    FirestoreService.prototype.doc = function (ref) {
        return typeof ref === 'string' ? this.afs.doc(ref) : ref;
    };
    FirestoreService.prototype.col$ = function (ref, queryFn) {
        return this.col(ref, queryFn).snapshotChanges().map(function (docs) {
            return docs.map(function (a) { return a.payload.doc.data(); });
        });
    };
    FirestoreService.prototype.doc$ = function (ref) {
        return this.doc(ref).snapshotChanges().map(function (doc) {
            return doc.payload.data();
        });
    };
    Object.defineProperty(FirestoreService.prototype, "timestamp", {
        /// Firebase Server Timestamp
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].FieldValue.serverTimestamp();
        },
        enumerable: true,
        configurable: true
    });
    FirestoreService.prototype.set = function (ref, data) {
        var timestamp = this.timestamp;
        return this.doc(ref).set(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    FirestoreService.prototype.update = function (ref, data) {
        return this.doc(ref).update(__assign({}, data, { updatedAt: this.timestamp }));
    };
    FirestoreService.prototype.delete = function (ref) {
        return this.doc(ref).delete();
    };
    FirestoreService.prototype.add = function (ref, data) {
        var timestamp = this.timestamp;
        return this.col(ref).add(__assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    };
    FirestoreService.prototype.geopoint = function (lat, lng) {
        return new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].GeoPoint(lat, lng);
    };
    /// If doc exists update, otherwise set
    FirestoreService.prototype.upsert = function (ref, data) {
        var _this = this;
        var doc = this.doc(ref).snapshotChanges().take(1).toPromise();
        return doc.then(function (snap) {
            return snap.payload.exists ? _this.update(ref, data) : _this.set(ref, data);
        });
    };
    /// with Ids
    FirestoreService.prototype.colWithIds$ = function (ref, queryFn) {
        return this.col(ref, queryFn).snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        });
    };
    FirestoreService.prototype.docWithRefs$ = function (ref) {
        var _this = this;
        return this.doc$(ref).map(function (doc) {
            for (var _i = 0, _a = Object.keys(doc); _i < _a.length; _i++) {
                var k = _a[_i];
                if (doc[k] instanceof __WEBPACK_IMPORTED_MODULE_2_firebase_app__["firestore"].DocumentReference) {
                    doc[k] = _this.doc(doc[k].path);
                }
            }
            console.log(doc);
            return doc;
        });
    };
    FirestoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/shared/member.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberService = /** @class */ (function () {
    function MemberService() {
        this.viewTitle = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.message = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.menuActive = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MemberService.prototype.setMenuActive = function (isActive) {
        this.menuActive.next(isActive);
    };
    MemberService.prototype.getMenuActive = function () {
        return this.menuActive.asObservable();
    };
    MemberService.prototype.setViewTitle = function (title) {
        this.viewTitle.next(title);
    };
    MemberService.prototype.getViewTitle = function () {
        return this.viewTitle.asObservable();
    };
    MemberService.prototype.setMessage = function (message) {
        this.message.next(message);
    };
    MemberService.prototype.getMessage = function () {
        return this.message.asObservable();
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MemberService);
    return MemberService;
}());



/***/ }),

/***/ "./src/app/shared/tournament.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firestore_service__ = __webpack_require__("./src/app/shared/firestore.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TournamentService = /** @class */ (function () {
    function TournamentService(db, authService, afAuth) {
        var _this = this;
        this.db = db;
        this.authService = authService;
        this.afAuth = afAuth;
        this.currentUser = this.afAuth.auth.currentUser;
        this.user = {
            uid: this.afAuth.auth.currentUser.uid
        };
        this.authService.user.subscribe(function (user) {
            //console.log(user);
            _this.user = user;
        });
    }
    TournamentService.prototype.createTournament = function (tournament) {
        var _this = this;
        tournament.admin = this.currentUser.uid;
        tournament.contestants = {};
        tournament.invites = {};
        if (tournament.adminJoin) {
            tournament.contestants[tournament.admin] = true;
        }
        this.db.add('tournaments', tournament).then(function (doc) {
            if (tournament.adminJoin) {
                _this.db.set(doc.path + "/users/" + tournament.admin, {
                    uid: _this.user.uid,
                    photoURL: _this.user.photoURL,
                    displayName: _this.user.displayName,
                    score: 0
                });
            }
        });
    };
    TournamentService.prototype.myTournaments = function () {
        var _this = this;
        return this.db.colWithIds$('tournaments', function (ref) { return ref.where("contestants." + _this.currentUser.uid, '==', true); });
    };
    TournamentService.prototype.getTournament = function (id) {
        return this.db.doc$("tournaments/" + id);
    };
    TournamentService.prototype.findTournaments = function (privacy, league, players) {
        return this.db.colWithIds$('tournaments', function (ref) { return ref.where('private', '==', privacy).where('league.id', '==', league).where('players', '>=', players[0]).where('players', '<=', players[1]); });
    };
    TournamentService.prototype.getUsersByName = function (name) {
        var strSearch = name.toLowerCase();
        var strLength = strSearch.length;
        var strFrontCode = strSearch.slice(0, strLength - 1);
        var strEndCode = strSearch.slice(strLength - 1, strSearch.length);
        var startcode = strSearch;
        var endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
        return this.db.col$('users', function (ref) { return ref.where('queryName', '>=', startcode).where('queryName', '<', endcode); });
    };
    TournamentService.prototype.inviteUser = function (tournamentID, user) {
        var userKey = {};
        userKey["invites." + user.uid] = true;
        this.db.update("tournaments/" + tournamentID, userKey);
        this.db.set("tournaments/" + tournamentID + "/invites/" + user.uid, user);
    };
    TournamentService.prototype.removeInvitedUser = function (tournamentID, user) {
        var userKeys = {};
        userKeys["invites." + user.uid] = false;
        this.db.update("tournaments/" + tournamentID, userKeys);
        this.db.delete("tournaments/" + tournamentID + "/invites/" + user.uid);
    };
    TournamentService.prototype.getInvitedUsers = function (tournamentID) {
        return this.db.col$("tournaments/" + tournamentID + "/invites");
    };
    TournamentService.prototype.invitesPending = function () {
        var _this = this;
        return this.db.colWithIds$('tournaments', function (ref) { return ref.where("invites." + _this.currentUser.uid, '==', true); });
    };
    TournamentService.prototype.acceptInvite = function (tournamentID) {
        var userKeys = {};
        userKeys["invites." + this.user.uid] = false;
        userKeys["contestants." + this.user.uid] = true;
        this.db.update("tournaments/" + tournamentID, userKeys);
        this.db.delete("tournaments/" + tournamentID + "/invites/" + this.user.uid);
        this.db.set("tournaments/" + tournamentID + "/users/" + this.user.uid, __assign({}, this.user, { score: 0 }));
    };
    TournamentService.prototype.removeInvite = function (tournamentID) {
        var userKeys = {};
        userKeys["invites." + this.user.uid] = false;
        this.db.update("tournaments/" + tournamentID, userKeys);
        this.db.delete("tournaments/" + tournamentID + "/invites/" + this.user.uid);
    };
    /* alreadyInvited(tournamentID: string, userID: string): Observable<any> {
        this.docRef = this.afs.collection('users').doc(userID).collection('tournamentInvites').doc(tournamentID);
        return this.docRef.valueChanges();
    } */
    /* joinTournament(tournamentID: string) {

    } */
    TournamentService.prototype.getPlayers = function (tournamentID) {
        return this.db.col$("tournaments/" + tournamentID + "/users");
    };
    TournamentService.prototype.lockPrediction = function (tournamentID, userID, fixtureID, data) {
        this.db.upsert("tournaments/" + tournamentID + "/users/" + userID + "/predictions/" + fixtureID, {
            scores: data,
            fixtureID: fixtureID
        });
    };
    TournamentService.prototype.getPrediction = function (tournamentID, fixtureID, userID) {
        return this.db.doc$("tournaments/" + tournamentID + "/users/" + userID + "/predictions/" + fixtureID);
    };
    TournamentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__firestore_service__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], TournamentService);
    return TournamentService;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map