webpackJsonp(["tournaments.module"],{

/***/ "./node_modules/rxjs/_esm5/add/operator/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/merge.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._operator_merge PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["a" /* Observable */].prototype.merge = __WEBPACK_IMPORTED_MODULE_1__operator_merge__["a" /* merge */];
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/operator/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = merge;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* unused harmony reexport mergeStatic */
/** PURE_IMPORTS_START .._operators_merge PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which concurrently emits all values from every
 * given input Observable.
 *
 * <span class="informal">Flattens multiple Observables together by blending
 * their values into one Observable.</span>
 *
 * <img src="./img/merge.png" width="100%">
 *
 * `merge` subscribes to each given input Observable (either the source or an
 * Observable given as argument), and simply forwards (without doing any
 * transformation) all the values from all the input Observables to the output
 * Observable. The output Observable only completes once all input Observables
 * have completed. Any error delivered by an input Observable will be immediately
 * emitted on the output Observable.
 *
 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var clicksOrTimer = clicks.merge(timer);
 * clicksOrTimer.subscribe(x => console.log(x));
 *
 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var concurrent = 2; // the argument
 * var merged = timer1.merge(timer2, timer3, concurrent);
 * merged.subscribe(x => console.log(x));
 *
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 *
 * @param {ObservableInput} other An input Observable to merge with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for managing
 * concurrency of input Observables.
 * @return {Observable} An Observable that emits items that are the result of
 * every input Observable.
 * @method merge
 * @owner Observable
 */
function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_0__operators_merge__["a" /* merge */].apply(void 0, observables)(this);
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Create Tournament</h2>\n<form (ngSubmit)=\"save()\" *ngIf=\"leagues$ | async as leagues\">\n    <mat-dialog-content [formGroup]=\"form\">\n\n        <mat-form-field>\n            <input [(ngModel)]=\"name\" pattern=\"[a-zA-Z1-9 ]*\" formControlName=\"name\" matInput placeholder=\"Name\" required>\n            <mat-error>\n                <span *ngIf=\"name.length == 0\">\n                    Field is required\n                </span>\n                <span *ngIf=\"name.length > 0\">\n                    Only letters and numbers\n                </span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-select [(ngModel)]=\"league\" formControlName=\"league\" placeholder=\"League\" required>\n                <mat-option *ngFor=\"let league of leagues\" [value]=\"league.id+'_'+league.caption\">{{league.caption}}</mat-option>\n            </mat-select>\n            <mat-error>\n                <span *ngIf=\"league.length == 0\">\n                    Field is required\n                </span>\n            </mat-error>\n        </mat-form-field>\n        <mat-slide-toggle [(ngModel)]=\"private\" formControlName=\"private\">Private</mat-slide-toggle>\n        <mat-slide-toggle [(ngModel)]=\"adminJoin\" formControlName=\"adminJoin\" [checked]=\"true\">Admin participating</mat-slide-toggle>\n        <label>Players</label>\n        <mat-slider [(ngModel)]=\"players\" formControlName=\"players\" [thumbLabel]=\"true\" min=\"2\" max=\"30\" step=\"1\" value=\"1\"></mat-slider>\n\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-button mat-dialog-close color=\"warn\">Cancel</button>\n        <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n        <button mat-raised-button color=\"primary\" type=\"submit\">Create</button>\n    </mat-dialog-actions>\n\n</form>\n"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentCreateDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_football_data_service__ = __webpack_require__("./src/app/shared/football-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TournamentCreateDialogComponent = /** @class */ (function () {
    function TournamentCreateDialogComponent(footballDataService, fb, dialogRef, data) {
        this.footballDataService = footballDataService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.name = data.name;
        this.league = data.league;
        this.private = data.private;
        this.adminJoin = data.adminJoin;
        this.players = data.players;
    }
    TournamentCreateDialogComponent.prototype.ngOnInit = function () {
        this.leagues$ = this.footballDataService.getCompetitions();
        this.form = this.fb.group({
            name: [this.name, []],
            league: [this.league, []],
            private: [this.private, []],
            adminJoin: [this.adminJoin, []],
            players: [this.players, []]
        });
    };
    TournamentCreateDialogComponent.prototype.save = function () {
        if (this.form.valid) {
            this.dialogRef.close(this.form.value);
        }
    };
    TournamentCreateDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-create-dialog',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_football_data_service__["a" /* FootballDataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */], Object])
    ], TournamentCreateDialogComponent);
    return TournamentCreateDialogComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-create/tournament-create.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n    <span>Create</span>\n</button>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-create/tournament-create.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-slider-horizontal {\n  height: 48px;\n  min-width: 100%; }\n  .mat-slider-horizontal > div {\n    left: 0; }\n  mat-form-field {\n  width: 100%; }\n  label {\n  margin-top: 10px;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-create/tournament-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tournament_create_dialog_tournament_create_dialog_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TournamentCreateComponent = /** @class */ (function () {
    function TournamentCreateComponent(dialog, tournamentService, authService, route, router) {
        this.dialog = dialog;
        this.tournamentService = tournamentService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.name = '';
        this.league = '';
        this.private = false;
        this.adminJoin = true;
        this.players = 10;
    }
    TournamentCreateComponent.prototype.ngOnInit = function () {
    };
    TournamentCreateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params.create) {
                setTimeout(function () { return _this.openDialog(); });
                _this.router.navigate(['member/tournaments']);
            }
        });
    };
    TournamentCreateComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__tournament_create_dialog_tournament_create_dialog_component__["a" /* TournamentCreateDialogComponent */], {
            width: '250px',
            disableClose: true,
            autoFocus: true,
            data: {
                name: this.name,
                league: this.league,
                private: this.private,
                adminJoin: this.adminJoin,
                players: this.players,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var league = result.league.split('_');
                result.league = {
                    id: Number(league[0]),
                    caption: league[1]
                };
                _this.tournamentService.createTournament(result);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TournamentCreateComponent.prototype, "params", void 0);
    TournamentCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-create',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], TournamentCreateComponent);
    return TournamentCreateComponent;
}());

function calc(a, b) {
    return a * b;
}


/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mat-elevation-z1\">\n    <span *ngIf=\"tournament$ | async as tournament; else Loading\">\n        <span *ngIf=\"auth.user | async as authUser\">\n            <h1 class=\"mat-headline\">{{tournament.name}}</h1>\n            <mat-divider></mat-divider>\n            <mat-tab-group color=\"accent\">\n                <mat-tab label=\"Matches\">\n                    <app-tournament-matches [tournamentID]=\"tournamentID\" [leagueID]=\"tournament.league.id\"></app-tournament-matches>\n                </mat-tab>\n                <mat-tab label=\"Results\">\n                    Not yet implemented\n                </mat-tab>\n                <mat-tab label=\"Scoreboard\">\n                    <app-users-table [data]=\"value\" [tournamentID]=\"tournamentID\" userDataType=\"scoreboard\"></app-users-table>\n                </mat-tab>\n                <mat-tab label=\"settings\" *ngIf=\"tournament.admin == authUser.uid\">\n                    <ng-template mat-tab-label>\n                        <mat-icon>settings</mat-icon>\n                    </ng-template>\n                    <div class=\"content\">\n                        <h2 class=\"title\">Admin Settings</h2>\n                        <mat-divider></mat-divider>\n                        <section class=\"mat-typography\">\n                            <h2 class=\"mat-h2\">Users</h2>\n                            <mat-form-field class=\"example-form-field\">\n                                <input matInput type=\"text\" placeholder=\"Search user\" [(ngModel)]=\"value\" (ngModelChange)=\"getUsersByName()\" />\n                                <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n                                    <mat-icon>close</mat-icon>\n                                </button>\n                            </mat-form-field>\n                            <app-users-table [data]=\"value\" [tournamentID]=\"tournamentID\" userDataType=\"search\"></app-users-table>\n                        </section>\n                        <section class=\"mat-typography\">\n                            <h2>Invited Users</h2>\n                            <app-users-table [data]=\"value\" [tournamentID]=\"tournamentID\" userDataType=\"invited\"></app-users-table>\n                        </section>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </span>\n    </span>\n    <ng-template #Loading>\n        <mat-spinner></mat-spinner>\n    </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  background: #fff; }\n  mat-tab-group .content {\n    padding: 20px; }\n  h1 {\n  padding: 20px 10px;\n  text-transform: capitalize; }\n  h2 {\n  margin-top: 0; }\n  .container {\n  background: #fff;\n  border-radius: 3px; }\n  mat-list {\n  padding: 0; }\n  mat-list mat-list-item {\n    padding: 4px 0; }\n  mat-list mat-list-item .item-container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  mat-list mat-list-item .item-container > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n  mat-list mat-list-item .item-container .photo {\n        margin-right: 10px; }\n  mat-list mat-list-item .item-container .photo img {\n          border-radius: 50%;\n          border: 1px solid rgba(0, 0, 0, 0.12); }\n  mat-list mat-list-item .item-container .name {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1; }\n  section {\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_football_data_service__ = __webpack_require__("./src/app/shared/football-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TournamentDetailComponent = /** @class */ (function () {
    function TournamentDetailComponent(route, router, tournamentService, auth, snackBar, fooballDataService, afAuth) {
        this.route = route;
        this.router = router;
        this.tournamentService = tournamentService;
        this.auth = auth;
        this.snackBar = snackBar;
        this.fooballDataService = fooballDataService;
        this.afAuth = afAuth;
        this.value = "";
        this.users$ = this.tournamentService.getUsersByName(this.value);
    }
    TournamentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tournamentID = params.id;
            _this.tournament$ = _this.tournamentService.getTournament(_this.tournamentID);
            _this.tournamentService.getTournament(_this.tournamentID).subscribe(function (data) {
                _this.fixtures$ = _this.fooballDataService.getCompetitionFixtures(data.league.id);
            });
        });
    };
    TournamentDetailComponent.prototype.getUsersByName = function () {
        this.users$ = this.tournamentService.getUsersByName(this.value);
    };
    TournamentDetailComponent.prototype.openMessage = function (message) {
        this.snackBar.open(message, 'test', {
            duration: 3000,
        });
    };
    TournamentDetailComponent.prototype.filterArray = function (filterArr, fixtureID) {
        //this.tournamentService.getPrediction(tournamentID, userID, fixtureID);
        //{{predictions.filter(obj => {return obj.fixtureID == match.fixtureID})}}
        //console.log(filterArr.filter(obj => obj["fixtureID"] == fixtureID)[0])
        return filterArr.filter(function (obj) { return obj["fixtureID"] == fixtureID; })[0];
    };
    TournamentDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-detail',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-detail.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_tournament_service__["a" /* TournamentService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__shared_football_data_service__["a" /* FootballDataService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], TournamentDetailComponent);
    return TournamentDetailComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-matches/match-prediction-form/match-prediction-form.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [expanded]=\"activePanel === panelNumber\" (opened)=\"setActivePanel(panelNumber)\">\n    <mat-expansion-panel-header style=\"display: flex\">\n        <mat-panel-title style=\"flex: 2;\">\n            <div class=\"home\">\n                <span class=\"image\" *ngIf=\"match.homeTeam.crestUrl !== null; else noImage\" [ngStyle]=\"{'background-image': 'url('+match.homeTeam.crestUrl+')'}\"></span>\n                <span>{{match.homeTeam.name}}</span>\n            </div>\n            <div>VS</div>\n            <div class=\"away\">\n                <span>{{match.awayTeam.name}}</span>\n                <span class=\"image\" *ngIf=\"match.awayTeam.crestUrl !== null; else noImage\" [ngStyle]=\"{'background-image': 'url('+match.awayTeam.crestUrl+')'}\"></span>\n            </div>\n        </mat-panel-title>\n        <mat-panel-description style=\"flex: 3;\">\n            <span *ngIf=\"prediction != null\" class=\"prediction\">\n                {{prediction.scores.home}} - {{prediction.scores.away}}\n            </span>\n            <span class=\"kickoff-date\">\n                {{match.date | date:'MMM d, y, h:mm a'}}\n            </span>\n        </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"homeScore\" type=\"number\" placeholder=\"Home Score\">\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput [(ngModel)]=\"awayScore\" type=\"number\" placeholder=\"Away Score\">\n    </mat-form-field>\n\n    <mat-action-row>\n        <button mat-raised-button color=\"primary\" (click)=\"lockPrediction()\">Lock Prediction</button>\n    </mat-action-row>\n</mat-expansion-panel>\n\n<ng-template #noImage>\n    <span class=\"image not-found\">\n        <span>\n            ?\n        </span>\n    </span>\n</ng-template>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-matches/match-prediction-form/match-prediction-form.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-panel-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  mat-panel-title div {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  mat-panel-title div:nth-child(2) {\n      text-align: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  mat-panel-title div:nth-child(3) {\n      text-align: right;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n  mat-panel-description {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .home .image, .away .image {\n  width: 32px;\n  height: 32px;\n  display: inline-block;\n  background-size: cover;\n  border-radius: 50%;\n  background-position: 50% 50%;\n  margin: 5px;\n  border: 1px solid #aaa; }\n  .home .image.not-found, .away .image.not-found {\n    border: 1px solid #aaa;\n    position: relative; }\n  .home .image.not-found span, .away .image.not-found span {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translateX(-50%) translateY(-50%);\n              transform: translateX(-50%) translateY(-50%); }\n  .prediction {\n  background: limegreen;\n  padding: 5px 10px;\n  color: #fff;\n  width: 50px;\n  border-radius: 25px;\n  text-align: center;\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-matches/match-prediction-form/match-prediction-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPredictionFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchPredictionFormComponent = /** @class */ (function () {
    function MatchPredictionFormComponent(tournamentService, afAuth) {
        this.tournamentService = tournamentService;
        this.afAuth = afAuth;
        this.getPanel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.userID = this.afAuth.auth.currentUser.uid;
    }
    MatchPredictionFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournamentService.getPrediction(this.tournamentID, this.fixtureID, this.userID).subscribe(function (data) {
            if (data != undefined) {
                //console.log(data)
                _this.prediction = data;
                _this.homeScore = data.scores.home;
                _this.awayScore = data.scores.away;
            }
            else {
                _this.prediction = null;
            }
        });
    };
    MatchPredictionFormComponent.prototype.lockPrediction = function () {
        var scores = {
            home: this.homeScore,
            away: this.awayScore
        };
        this.tournamentService.lockPrediction(this.tournamentID, this.userID, this.fixtureID, scores);
        this.setActivePanel(this.panelNumber + 1);
    };
    MatchPredictionFormComponent.prototype.setActivePanel = function (number) {
        this.getPanel.emit(number);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MatchPredictionFormComponent.prototype, "fixtureID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MatchPredictionFormComponent.prototype, "tournamentID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MatchPredictionFormComponent.prototype, "match", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MatchPredictionFormComponent.prototype, "panelNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MatchPredictionFormComponent.prototype, "activePanel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], MatchPredictionFormComponent.prototype, "getPanel", void 0);
    MatchPredictionFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-match-prediction-form',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-matches/match-prediction-form/match-prediction-form.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-matches/match-prediction-form/match-prediction-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MatchPredictionFormComponent);
    return MatchPredictionFormComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-matches/tournament-matches.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"fixtures$ | async as fixtures; else loading\">\n    <mat-accordion>\n        <span *ngFor=\"let match of fixtures; let i = index; trackBy: trackArray\">\n            <app-match-prediction-form (getPanel)=\"getPanel($event)\" [activePanel]=\"activePanel\" [panelNumber]=\"i\" [match]=\"match\" [fixtureID]=\"match.fixtureID\" [tournamentID]=\"tournamentID\"></app-match-prediction-form>\n        </span>\n    </mat-accordion>\n</span>\n\n<ng-template #loading>\n    <mat-spinner></mat-spinner>\n</ng-template>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-matches/tournament-matches.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-detail/tournament-matches/tournament-matches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentMatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_football_data_service__ = __webpack_require__("./src/app/shared/football-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TournamentMatchesComponent = /** @class */ (function () {
    function TournamentMatchesComponent(tournamentService, footballService, afAuth) {
        this.tournamentService = tournamentService;
        this.footballService = footballService;
        this.afAuth = afAuth;
        this.activePanel = 0;
    }
    TournamentMatchesComponent.prototype.ngOnInit = function () {
        this.fixtures$ = this.footballService.getCompetitionFixtures(this.leagueID);
    };
    TournamentMatchesComponent.prototype.getPrediction = function (fixtureID) {
    };
    TournamentMatchesComponent.prototype.lockPrediction = function (fixtureID) {
        var data = {};
        this.tournamentService.lockPrediction(this.tournamentID, this.afAuth.auth.currentUser.uid, fixtureID, data);
    };
    TournamentMatchesComponent.prototype.trackArray = function (index, item) {
        return index;
    };
    TournamentMatchesComponent.prototype.getPanel = function ($event) {
        this.activePanel = $event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TournamentMatchesComponent.prototype, "leagueID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TournamentMatchesComponent.prototype, "tournamentID", void 0);
    TournamentMatchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-matches',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-matches/tournament-matches.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-matches/tournament-matches.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_2__shared_football_data_service__["a" /* FootballDataService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], TournamentMatchesComponent);
    return TournamentMatchesComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-finder/tournament-finder.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\t<mat-card-title>Tournament Finder</mat-card-title>\n\t<mat-card-subtitle>Filters</mat-card-subtitle>\n\n\t<div class=\"filters\" *ngIf=\"leagues$ | async as leagues\">\n\t\t<div class=\"filter private\">\n\t\t\t<mat-checkbox [(ngModel)]=\"privacy\">Private</mat-checkbox>\n\t\t</div>\n\t\t<div class=\"filter leagues\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]=\"league\" placeholder=\"League\" required>\n\t\t\t\t\t<mat-option *ngFor=\"let league of leagues\" [value]=\"league.id\">\n\t\t\t\t\t\t{{league.caption}}\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"filter players\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select [(ngModel)]=\"players\" placeholder=\"Players\" required>\n\t\t\t\t\t<mat-option value=\"2-10\">\n\t\t\t\t\t\t2-10\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t<mat-option value=\"11-20\">\n\t\t\t\t\t\t11-20\n\t\t\t\t\t</mat-option>\n\t\t\t\t\t<mat-option value=\"21-30\">\n\t\t\t\t\t\t21-30\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t\t<div class=\"filter stakes\">\n\t\t\t<mat-form-field>\n\t\t\t\t<mat-select placeholder=\"Stakes\" disabled>\n\t\t\t\t\t<mat-option>\n\t\t\t\t\t\ttest\n\t\t\t\t\t</mat-option>\n\t\t\t\t</mat-select>\n\t\t\t</mat-form-field>\n\t\t</div>\n\t</div>\n\t<mat-divider></mat-divider>\n\t<app-tournament-filter-list [players]=\"players\" [league]=\"league\" [privacy]=\"privacy\"></app-tournament-filter-list>\n</mat-card>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-finder/tournament-finder.component.scss":
/***/ (function(module, exports) {

module.exports = ".filters {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .filters .filter {\n    margin-right: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .filters .filter.players span {\n      margin-right: 10px; }\n  .filters .filter.players mat-slider {\n      min-width: 200px; }\n"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-finder/tournament-finder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentFinderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_football_data_service__ = __webpack_require__("./src/app/shared/football-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TournamentFinderComponent = /** @class */ (function () {
    function TournamentFinderComponent(tournamentService, footballService) {
        this.tournamentService = tournamentService;
        this.footballService = footballService;
        this.privacy = false;
    }
    TournamentFinderComponent.prototype.ngOnInit = function () {
        this.leagues$ = this.footballService.getCompetitions();
    };
    TournamentFinderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-finder',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-finder/tournament-finder.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-finder/tournament-finder.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_2__shared_football_data_service__["a" /* FootballDataService */]])
    ], TournamentFinderComponent);
    return TournamentFinderComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-list/tournament-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card>\n        <mat-card-title>My Tournaments</mat-card-title>\n        <mat-card-content>\n            <div *ngIf=\"myTournaments$ | async as tournaments; else loading\">\n                <mat-list>\n                    <mat-divider></mat-divider>\n                    <span *ngFor=\"let tournament of tournaments\">\n                        <mat-list-item>\n                            <mat-icon class=\"private-indicator\">{{tournament.private ? 'lock': 'lock_open'}}</mat-icon>\n                            <span class=\"tournament-name\">{{tournament.name}}</span>\n                            <div class=\"tournament-meta\">\n                                <small class=\"mat-caption\">\n                                    Players: {{tournament.players}}\n                                </small>\n                                <small class=\"mat-caption\">\n                                    {{tournament.league.caption}}\n                                </small>\n                                <a mat-icon-button routerLink=\"{{tournament.id}}\">\n                                    <mat-icon>exit_to_app</mat-icon>\n                                </a>\n                            </div>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n                    </span>\n                </mat-list>\n                <span *ngIf=\"tournaments.length == 0\">You do not participate in any tournaments</span>\n            </div>\n            <ng-template #loading>\n                <mat-spinner></mat-spinner>\n            </ng-template>\n        </mat-card-content>\n        <mat-card-actions>\n            <app-tournament-create></app-tournament-create>\n            <button mat-raised-button color=\"accent\" routerLink=\"finder\">\n                <span>Find</span>\n            </button>\n        </mat-card-actions>\n    </mat-card>\n    <mat-card>\n        <mat-card-title>Tournament Invites</mat-card-title>\n        <mat-card-content>\n            <div *ngIf=\"pendingInvites$ | async as invites; else loading\">\n                <mat-list>\n                    <mat-divider></mat-divider>\n                    <span *ngFor=\"let invite of invites\">\n                        <mat-list-item>\n                            <mat-icon class=\"private-indicator\">{{invite.private ? 'lock': 'lock_open'}}</mat-icon>\n                            <span class=\"tournament-name\">{{invite.name}}</span>\n                            <div class=\"tournament-meta\">\n                                <!-- <mat-chip-list selectable=\"false\">\n                                        <mat-chip selected=\"true\" color=\"primary\">Players: {{tournament.players}}</mat-chip>\n                                        <mat-chip selected=\"true\" color=\"accent\">League: {{tournament.league}}</mat-chip>\n                                    </mat-chip-list> -->\n                                <small class=\"mat-caption\">\n                                    Players: {{invite.players}}\n                                </small>\n                                <small class=\"mat-caption\">\n                                    {{invite.league.caption}}\n                                </small>\n                                <button mat-icon-button color=\"warn\" (click)=\"removeInvite(invite.id)\">\n                                    <mat-icon>delete_forever</mat-icon>\n                                </button>\n                                <button mat-icon-button color=\"primary\" (click)=\"acceptInvite(invite.id)\">\n                                    <mat-icon>check_circle</mat-icon>\n                                </button>\n                            </div>\n                        </mat-list-item>\n                        <mat-divider></mat-divider>\n                    </span>\n                </mat-list>\n                <span *ngIf=\"invites.length == 0\">You do not have any invites</span>\n            </div>\n            <ng-template #loading>\n                <mat-spinner></mat-spinner>\n            </ng-template>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-list/tournament-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .container mat-card {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 550px;\n            flex: 0 1 550px; }\n  .container mat-card:first-child {\n      margin-right: 10px; }\n  .tournament-meta {\n  position: absolute;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  mat-list span {\n  text-transform: capitalize; }\n  mat-list .tournament-name {\n  margin-left: 10px; }\n  .private-indicator {\n  position: absolute;\n  left: 0; }\n  small {\n  background: #444;\n  color: #fafafa;\n  padding: 2px 4px;\n  margin-left: 4px;\n  border-radius: 2px; }\n"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournament-list/tournament-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TournamentListComponent = /** @class */ (function () {
    function TournamentListComponent(tournamentService, auth, route) {
        this.tournamentService = tournamentService;
        this.auth = auth;
        this.route = route;
        this.params = null;
    }
    TournamentListComponent.prototype.ngOnInit = function () {
        this.myTournaments$ = this.tournamentService.myTournaments();
        this.pendingInvites$ = this.tournamentService.invitesPending();
    };
    TournamentListComponent.prototype.ngAfterViewInit = function () {
    };
    TournamentListComponent.prototype.acceptInvite = function (tournamentID) {
        this.tournamentService.acceptInvite(tournamentID);
    };
    TournamentListComponent.prototype.removeInvite = function (tournamentID) {
        this.tournamentService.removeInvite(tournamentID);
    };
    TournamentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournament-list',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournament-list/tournament-list.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournament-list/tournament-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], TournamentListComponent);
    return TournamentListComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournaments.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournaments.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/member/tournaments/tournaments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TournamentsComponent = /** @class */ (function () {
    function TournamentsComponent() {
    }
    TournamentsComponent.prototype.ngOnInit = function () {
    };
    TournamentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournaments',
            template: __webpack_require__("./src/app/routes/member/tournaments/tournaments.component.html"),
            styles: [__webpack_require__("./src/app/routes/member/tournaments/tournaments.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TournamentsComponent);
    return TournamentsComponent;
}());



/***/ }),

/***/ "./src/app/routes/member/tournaments/tournaments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentsModule", function() { return TournamentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_tournament_service__ = __webpack_require__("./src/app/shared/tournament.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tournaments_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournaments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tournament_detail_tournament_detail_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tournament_create_tournament_create_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tournament_create_tournament_create_dialog_tournament_create_dialog_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-create/tournament-create-dialog/tournament-create-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_components_shared_components_module__ = __webpack_require__("./src/app/routes/member/shared-components/shared-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tournament_list_tournament_list_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-list/tournament-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_football_data_service__ = __webpack_require__("./src/app/shared/football-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tournament_detail_tournament_matches_tournament_matches_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-matches/tournament-matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tournament_finder_tournament_finder_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-finder/tournament-finder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tournament_detail_tournament_matches_match_prediction_form_match_prediction_form_component__ = __webpack_require__("./src/app/routes/member/tournaments/tournament-detail/tournament-matches/match-prediction-form/match-prediction-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules





//Services

//Components










var tournamentsRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_6__tournaments_component__["a" /* TournamentsComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__tournament_list_tournament_list_component__["a" /* TournamentListComponent */] },
            { path: 'finder', component: __WEBPACK_IMPORTED_MODULE_14__tournament_finder_tournament_finder_component__["a" /* TournamentFinderComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_7__tournament_detail_tournament_detail_component__["a" /* TournamentDetailComponent */] },
        ]
    }
];
var TournamentsModule = /** @class */ (function () {
    function TournamentsModule() {
    }
    TournamentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(tournamentsRoutes),
                __WEBPACK_IMPORTED_MODULE_3__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_components_shared_components_module__["a" /* SharedComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__tournaments_component__["a" /* TournamentsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tournament_detail_tournament_detail_component__["a" /* TournamentDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tournament_create_tournament_create_component__["a" /* TournamentCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tournament_create_tournament_create_dialog_tournament_create_dialog_component__["a" /* TournamentCreateDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tournament_list_tournament_list_component__["a" /* TournamentListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__tournament_detail_tournament_matches_tournament_matches_component__["a" /* TournamentMatchesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tournament_finder_tournament_finder_component__["a" /* TournamentFinderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tournament_detail_tournament_matches_match_prediction_form_match_prediction_form_component__["a" /* MatchPredictionFormComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__tournament_create_tournament_create_dialog_tournament_create_dialog_component__["a" /* TournamentCreateDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_tournament_service__["a" /* TournamentService */], __WEBPACK_IMPORTED_MODULE_12__shared_football_data_service__["a" /* FootballDataService */]]
        })
    ], TournamentsModule);
    return TournamentsModule;
}());



/***/ }),

/***/ "./src/app/shared/football-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootballDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("./src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firestore_service__ = __webpack_require__("./src/app/shared/firestore.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FootballDataService = /** @class */ (function () {
    function FootballDataService(db, authService, afAuth) {
        this.db = db;
        this.authService = authService;
        this.afAuth = afAuth;
    }
    FootballDataService.prototype.getCompetitions = function () {
        return this.db.col$('footballData/competitions/data');
    };
    FootballDataService.prototype.getCompetitionFixtures = function (leagueID) {
        return this.db.col$("footballData/fixtures/data", function (ref) { return (ref.where('competitionID', '==', leagueID).where('status', '==', 'TIMED').orderBy('date')); });
    };
    FootballDataService.prototype.getCompetitionTeams = function (leagueID) {
        return this.db.col$("footballData/teams/" + leagueID);
    };
    FootballDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__firestore_service__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], FootballDataService);
    return FootballDataService;
}());



/***/ })

});
//# sourceMappingURL=tournaments.module.chunk.js.map