webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Admin/Addquestions/addquestions.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-6 col-sm-3\">\r\n        <div class=\"col-lg-6 col-md-6 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        <div class=\"col-lg-6 col-md-6 col-sm-3\" *ngIf=\"cdata!=null\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Chapter\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Chapter</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"chapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n      </div>                           \r\n </div>\r\n <div class=\"col-ms-6\">\r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            \r\n\r\n<div class=\"col-md-12\">\r\n                \r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n                     \r\n                    </div>\r\n                    \r\n                    <div class=\"card-content\">\r\n                    <form [formGroup]=\"AddQuestionsform\" (ngSubmit)=\"AddQuestions()\">\r\n                       <div>\r\n                           <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">QuestionNo</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"no\"  name=\"questionid\"  id=\"questionid\" [formControl]=\"questionid\" class=\"form-control\">\r\n                                \r\n                                   \r\n                                </div>                         \r\n                            \r\n                        </div>\r\n                         </div>\r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Chapter</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"cno\"  name=\"chapterid\"  id=\"chapterid\" [formControl]=\"chapterid\" class=\"form-control\">\r\n                                \r\n                                   \r\n                                </div>                         \r\n                            \r\n                        </div>\r\n                         </div>\r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Question</label>\r\n                                    <input type=\"text\"   name=\"question\"  id=\"question\" [formControl]=\"question\" class=\"form-control\">\r\n                                    <div [hidden]=\"question.valid || question.untouched\">\r\n\r\n                                    <div [hidden]=\"!question.hasError('required')\" style=\"color:red;\">The question is required.</div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                         </div>\r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Answer1</label>\r\n                                    <input type=\"text\"  name=\"Answer1\" id=\"Answer1\" [formControl]=\"Answer1\" class=\"form-control\">\r\n                                    <div [hidden]=\"Answer1.valid || Answer1.untouched\">\r\n\r\n                                    <div [hidden]=\"!Answer1.hasError('required')\" style=\"color:red;\">The Answer1 is required.</div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            </div>\r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Answer2</label>\r\n                                    <input type=\"text\" name=\"Answer2\" id=\"Answer2\" [formControl]=\"Answer2\" class=\"form-control\">\r\n                                    <div [hidden]=\"Answer2.valid || Answer2.untouched\">\r\n\r\n                                    <div [hidden]=\"!Answer2.hasError('required')\" style=\"color:red;\">The Answer2 is required.</div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            </div>\r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Answer3</label>\r\n                                    <input type=\"text\"  name=\"Answer3\" id=\"Answer3\" [formControl]=\"Answer3\" class=\"form-control\">\r\n                                    <div [hidden]=\"Answer3.valid || Answer3.untouched\">\r\n\r\n                                    <div [hidden]=\"!Answer3.hasError('required')\" style=\"color:red;\">The Answer3 is required.</div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            </div>\r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Answer4</label>\r\n                                    <input type=\"text\"  name=\"Answer4\" id=\"Answer4\" [formControl]=\"Answer4\" class=\"form-control\">\r\n                                    <div [hidden]=\"Answer4.valid || Answer4.untouched\">\r\n\r\n                                    <div [hidden]=\"!Answer4.hasError('required')\" style=\"color:red;\">The Answer4 is required.</div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            </div>                           \r\n                         <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">CorrectAnswer</label>\r\n                                    <input type=\"text\"  name=\"CorrectAnswer\" id=\"CorrectAnswer\" [formControl]=\"CorrectAnswer\" class=\"form-control\">\r\n                                    <div [hidden]=\"CorrectAnswer.valid || CorrectAnswer.untouched\">\r\n\r\n                                    <div [hidden]=\"!CorrectAnswer.hasError('required')\" style=\"color:red;\">The CorrectAnswer is required.</div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            </div>\r\n                           \r\n                           \r\n                           \r\n\r\n                           \r\n                           \r\n             </div>\r\n                        <button type=\"submit\" class=\"btn btn-danger btn-round fileinput-exists\" [disabled]=\"!AddQuestionsform.valid\">Add Question</button>\r\n                        \r\n                        <div class=\"clearfix\">\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                    \r\n                  \r\n                </div>\r\n            </div>\r\n       </div>                \r\n   </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Admin/Addquestions/addquestions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddquestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//declare var require: any;
function hasPunctuation(punctuation, errorType) {
    return function (input) {
        return input.value.indexOf(punctuation) >= 0 ?
            null : (_a = {}, _a[errorType] = true, _a);
        var _a;
    };
}
var AddquestionsComponent = (function () {
    function AddquestionsComponent(services, builder) {
        this.services = services;
        this.Username = 'Prashant';
        this.allItems = [];
        this.chapterid = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.questionid = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.question = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Answer1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Answer2 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Answer3 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Answer4 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.CorrectAnswer = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.AddQuestionsform = builder.group({
            chapterid: this.chapterid,
            questionid: this.questionid,
            Question: this.question,
            Answer1: this.Answer1,
            Answer2: this.Answer2,
            Answer3: this.Answer3,
            Answer4: this.Answer4,
            CorrectAnswer: this.CorrectAnswer,
            image: null
        });
    }
    AddquestionsComponent.prototype.subject = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == sid; });
        });
    };
    AddquestionsComponent.prototype.chapter = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.cid = c;
        this.cno = this.cid;
        this.services.getallquestions().subscribe(function (data) {
            _this.itemdata = data, _this.allItems = _this.itemdata.filter(function (x) { return x.chapterid == _this.cid; });
        });
        //  this.xy = (this.itemdata.splice(this.itemdata.indexOf(this.itemdata), 1));
        //  this.no = ((this.xy[0].questionid) + 1);
        this.chaptername = this.cdata1.filter(function (x) { return x.ChapterID == _this.cid; });
        // this.lastitem = this.allItems.slice(0,10);
        // this.lastitem = this.itemdata.splice(this.itemdata.indexOf(this.itemdata), 1);
        //  alert(JSON.stringify(this.xy[0].questionid));
    };
    AddquestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getSumpList().subscribe(function (data) { return _this.xyz = data; });
        alert(JSON.stringify(this.xyz));
        this.services.getallquestions().subscribe(function (data) {
            _this.allq = data,
                _this.no = ((_this.allq.splice(_this.allq.indexOf(_this.allq), 1)[0].questionid) + 1);
        });
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
        this.services.getallquestions().subscribe(function (data) { return _this.xy = data; });
        // this.no = ((this.allq.splice(this.allq.indexOf(this.allq), 1)[0].questionid) + 1);
    };
    AddquestionsComponent.prototype.AddQuestions = function () {
        var questions = this.AddQuestionsform.value;
        alert(JSON.stringify(questions));
        var jsonfile = __webpack_require__("../../../../jsonfile/index.js");
        var file = 'assets/database/Temp.json';
        var obj = { "name": 'JP' };
        jsonfile.writeFile(file, obj, function (err) {
            console.error(err);
        });
        //  this.services.addquestion(questions).subscribe(data => this.allItems=data);
        alert(JSON.stringify(this.allItems));
        //var  jsonfile1 = require('jsonfile');
        //  var file = '/assets/database/Allquestions.json';
        //  var obj = JSON.stringify(questions);
        //  jsonfile1.writeFile(file, obj, function (err) {
        //      console.error(err)
        //  });
        // alert(JSON.stringify(questions));
        // this.allItems.push(questions);
        // alert(JSON.stringify(this.allItems));
        // this.services.addquestion(questions).subscribe(data => { this.allItems = data });
    };
    return AddquestionsComponent;
}());
AddquestionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/Admin/Addquestions/addquestions.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AddquestionsComponent);

var _a, _b;
//# sourceMappingURL=addquestions.js.map

/***/ }),

/***/ "../../../../../src/app/Services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return servicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var servicesComponent = (function () {
    function servicesComponent(http) {
        this.http = http;
    }
    servicesComponent.prototype.getSumpList = function () {
        var QueUrl = "http://localhost:8089/GWSSB_2018/admin/getSumpList";
        //let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: cpHeaders });
        //return this.http.get(QueUrl, questions, options)
        //  .map(success => success.status)
        //  .catch(this.handleError);
        // return this.http.post('assets/database/Allquestions.json', body, options).map((res: Response) => res.json());
        return this.http.get(QueUrl).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getcountry = function () {
        return this.http.get("/Home/Country").map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getstate = function (cid) {
        return this.http.get("/Home/State?cid=" + cid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getcity = function (sid) {
        return this.http.get("/Home/City?sid=" + sid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getgisstates = function () {
        return this.http.get('assets/database/states.json').map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getsubjects = function () {
        return this.http.get('assets/database/Subject.json').map(function (res) { return res.json(); });
        // var baseUrl = `http://localhost:49107/api/Subjects`;
        //  return this.http.get(baseUrl).map(res => res.json());
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        //return this.http.get(baseUrl,{ headers: headers }).map((res: Response) => {
        //    return res.json();
        //  })
        //  .catch(this.handleError);
    };
    servicesComponent.prototype.getexam = function () {
        return this.http.get('assets/database/Exam.json').map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getsylabous = function () {
        return this.http.get('assets/database/Sylabous.json').map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getallchapters = function () {
        return this.http.get('assets/database/Chapters.json').map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getallquestions = function () {
        return this.http.get('assets/database/Allquestions.json').map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getchapters = function (subid) {
        return this.http.get("/Home/Chapters?sid=" + subid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getquestions = function (cid) {
        return this.http.get("/Home/ChapterQue?cid=" + cid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getquestionsbystring = function () {
        return this.http.get("/Home/AllQuestions").map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getquiz = function (cid) {
        return this.http.get("/Home/Quiz?cid=" + cid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getsubquiz = function (sid) {
        return this.http.get("/Home/SubjectQuiz?sid=" + sid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getdownload = function (html) {
        var baseUrl = "/Home/doenload";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = { htmlstring: JSON.stringify(html) };
        this.http.post(baseUrl, body, options).subscribe(function () {
            alert("success");
            window.open(baseUrl + 'File.pdf', '_blank', '');
        }, function (err) { console.error(err); });
    };
    servicesComponent.prototype.createUser = function (user) {
        var baseUrl = "/Home/Registration";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(baseUrl, JSON.stringify(user), { headers: headers }).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    servicesComponent.prototype.addquestion = function (questions) {
        var QueUrl = "http://localhost:3000/Questions";
        var cpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: cpHeaders });
        return this.http.post(QueUrl, questions, options)
            .map(function (success) { return success.status; })
            .catch(this.handleError);
        //  return this.http.post('assets/database/Allquestions.json', body, options).map((res: Response) => res.json());
    };
    servicesComponent.prototype.Login = function (user) {
        var baseUrl = "/Home/Login";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(baseUrl, JSON.stringify(user), { headers: headers }).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    servicesComponent.prototype.Profiles = function (profile, file) {
        var baseUrl = "/Home/Profiles";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(baseUrl, JSON.stringify({ profile: profile, file: file }), { headers: headers }).map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    servicesComponent.prototype.getprofile = function () {
        return this.http.get("/Home/pro").map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getsubname = function (sid) {
        return this.http.get("/Home/Subname?sid=" + sid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getchapname = function (cid) {
        return this.http.get("/Home/Chapname?cid=" + cid).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getuserprofile = function (username) {
        return this.http.get("/Home/UserProfile?username=" + username).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.getyourtestque = function (x) {
        return this.http.get("/Home/YourTest?clist=" + x).map(function (res) { return res.json(); });
    };
    servicesComponent.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return servicesComponent;
}());
servicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], servicesComponent);

var _a;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n        <div class=\"sidebar\" data-active-color=\"orange\" data-background-color=\"black\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n             <sidebar-cmp [cusername]=\"pusername\"></sidebar-cmp>\r\n        \r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <navbar-cmp [cusername]=\"pusername\"></navbar-cmp>\r\n        <div class=\"content\">\r\n          <dashboard-cmp > </dashboard-cmp>\r\n            </div>\r\n            <footer-cmp></footer-cmp>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.pusername = 'Prashant';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_sidebar_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pagenotfound__ = __webpack_require__("../../../../../src/app/pagenotfound.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/dashboard/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_components_sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/dashboard/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_charts_charts_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_charts_sun_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/sun.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_charts_worldcharts_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/worldcharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_charts_indiacharts_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/indiacharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_tables_datatable_net_datatable_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/datatable.net/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dashboard_forms_extendedforms_extendedforms_component__ = __webpack_require__("../../../../../src/app/dashboard/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_components_panels_panels_component__ = __webpack_require__("../../../../../src/app/dashboard/components/panels/panels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__dashboard_components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/dashboard/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_widges_widges_component__ = __webpack_require__("../../../../../src/app/dashboard/widges/widges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/dashboard/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_tables_Materials_materials_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/Materials/materials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__dashboard_test_chaptertest_component__ = __webpack_require__("../../../../../src/app/dashboard/test/chaptertest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__login_registration_component__ = __webpack_require__("../../../../../src/app/login/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__user_editprofile_component__ = __webpack_require__("../../../../../src/app/user/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__user_userprofile_component__ = __webpack_require__("../../../../../src/app/user/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__models_data_filter_pipe__ = __webpack_require__("../../../../../src/app/models/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dashboard_test_yourtest_component__ = __webpack_require__("../../../../../src/app/dashboard/test/yourtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dashboard_test_subject_component__ = __webpack_require__("../../../../../src/app/dashboard/test/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dashboard_test_exam_component__ = __webpack_require__("../../../../../src/app/dashboard/test/exam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__Admin_Addquestions_addquestions__ = __webpack_require__("../../../../../src/app/Admin/Addquestions/addquestions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_app_dashboard_tables_Materials_materialfilter_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/Materials/materialfilter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_filter_pipe__ = __webpack_require__("../../../../ng2-filter-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_app_dashboard_tables_Materials_Filter_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/Materials/Filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_app_dashboard_calendar_demoutils_module__ = __webpack_require__("../../../../../src/app/dashboard/calendar/demoutils.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__app_sidebar_sidebar_routes_config__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_18__amcharts_amcharts3_angular__["a" /* AmChartsModule */], __WEBPACK_IMPORTED_MODULE_31_ng2_completer__["b" /* Ng2CompleterModule */],
            __WEBPACK_IMPORTED_MODULE_32_angular2_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_38_ngx_pipes__["a" /* NgPipesModule */], __WEBPACK_IMPORTED_MODULE_40_ng2_filter_pipe__["Ng2FilterPipeModule"], __WEBPACK_IMPORTED_MODULE_46_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
            __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_44__ng_bootstrap_ng_bootstrap__["c" /* NgbModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_42_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_45_app_dashboard_calendar_demoutils_module__["a" /* DemoUtilsModule */],
            __WEBPACK_IMPORTED_MODULE_43__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]],
        providers: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_41_app_dashboard_tables_Materials_Filter_component__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_20__dashboard_forms_extendedforms_extendedforms_component__["a" /* extendedformsComponent */], __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_11__pagenotfound__["a" /* PageNotFoundComponent */], __WEBPACK_IMPORTED_MODULE_12__dashboard_components_buttons_buttons_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_components_sweetalert_sweetalert_component__["a" /* sweetalertComponent */], __WEBPACK_IMPORTED_MODULE_14__dashboard_charts_charts_component__["a" /* ChartComponent */], __WEBPACK_IMPORTED_MODULE_19__dashboard_tables_datatable_net_datatable_component__["a" /* DatatablenetComponent */],
            __WEBPACK_IMPORTED_MODULE_22__dashboard_components_notifications_notifications_component__["a" /* NotificationComponent */], __WEBPACK_IMPORTED_MODULE_24__dashboard_calendar_calendar_component__["a" /* calendarComponent */], __WEBPACK_IMPORTED_MODULE_21__dashboard_components_panels_panels_component__["a" /* panelsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__dashboard_tables_Materials_materials_component__["a" /* materialsComponent */], __WEBPACK_IMPORTED_MODULE_23__dashboard_widges_widges_component__["a" /* widgesComponent */], __WEBPACK_IMPORTED_MODULE_26__dashboard_test_chaptertest_component__["a" /* chaptertestComponent */],
            __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_28__login_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_29__user_editprofile_component__["a" /* EditprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_30__user_userprofile_component__["a" /* UserprofileComponent */], __WEBPACK_IMPORTED_MODULE_33__models_data_filter_pipe__["a" /* DataFilterPipe */], __WEBPACK_IMPORTED_MODULE_34__dashboard_test_yourtest_component__["a" /* yourtestComponent */],
            __WEBPACK_IMPORTED_MODULE_35__dashboard_test_subject_component__["a" /* SubjectComponent */], __WEBPACK_IMPORTED_MODULE_37__Admin_Addquestions_addquestions__["a" /* AddquestionsComponent */], __WEBPACK_IMPORTED_MODULE_39_app_dashboard_tables_Materials_materialfilter_component__["a" /* MaterialfileterComponent */],
            __WEBPACK_IMPORTED_MODULE_36__dashboard_test_exam_component__["a" /* examComponent */], __WEBPACK_IMPORTED_MODULE_16__dashboard_charts_worldcharts_component__["a" /* WorldChartComponent */], __WEBPACK_IMPORTED_MODULE_17__dashboard_charts_indiacharts_component__["a" /* IndiaChartComponent */], __WEBPACK_IMPORTED_MODULE_15__dashboard_charts_sun_component__["a" /* SunComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10 col-md-offset-1\">\r\n                            <div class=\"card card-calendar\">\r\n                                <div class=\"card-content\">\r\n                                    <div  class=\"fc fc-unthemed fc-ltr\">\r\n                                        <div class=\"fc-toolbar\">\r\n                                            <div class=\"fc-left\">\r\n                                                <h2>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h2></div>\r\n                                            <div class=\"fc-right\">\r\n                                                <div class=\"fc-button-group\">\r\n                                                    <button type=\"button\" class=\"fc-prev-button fc-button fc-state-default fc-corner-left\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n                                                        <span class=\"fc-icon fc-icon-left-single-arrow\"></span></button>\r\n                                                      <button type=\"button\" class=\"fc-today-button fc-button fc-state-default fc-corner-right fc-state-disabled\"  mwlCalendarToday [(viewDate)]=\"viewDate\" >today</button>\r\n                                                    <button type=\"button\" class=\"fc-next-button fc-button fc-state-default\"  mwlCalendarNextView [view]=\"view\"[(viewDate)]=\"viewDate\"><span class=\"fc-icon fc-icon-right-single-arrow\"></span></button>\r\n                                                  \r\n\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"fc-center\">\r\n                                                <div class=\"fc-button-group\">\r\n                                                    <button type=\"button\" class=\"fc-month-button fc-button fc-state-default fc-corner-left fc-state-active\"(click)=\"view = 'month'\" [class.active]=\"view === 'month'\">\r\n                                                         Month\r\n                                                    </button>\r\n                                                     <button type=\"button\" class=\"fc-agendaWeek-button fc-button fc-state-default\"(click)=\"view = 'week'\" [class.active]=\"view === 'week'\">\r\n                                                         Week\r\n                                                    </button>\r\n                                                     <button type=\"button\" class=\"fc-agendaDay-button fc-button fc-state-default fc-corner-right\"(click)=\"view = 'day'\"[class.active]=\"view === 'day'\">\r\n                                                        Day\r\n                                                    </button>\r\n    </div>\r\n                                                \r\n\r\n                                            </div>\r\n                                            <div class=\"fc-clear\">\r\n\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <div class=\"fc-view-container\" style=\"\">\r\n                                            <div class=\"fc-view fc-month-view fc-basic-view\" style=\"\">\r\n                                                <div [ngSwitch]=\"view\">\r\n \r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"'week'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-week-view>\r\n \r\n                                                <table>\r\n                                                    <thead class=\"fc-head\">\r\n                                                    <tr>\r\n                                                        <td class=\"fc-head-container fc-widget-header\">\r\n                                                            <div class=\"fc-row fc-widget-header\" style=\"border-right-width: 1px; margin-right: -1.33337px;\">\r\n                                                                <table>\r\n                                                                    <thead>\r\n                                                                        <tr>\r\n                                                                             <th class=\"fc-day-header fc-widget-header fc-sun\"><span>\r\n                                                                             <mwl-calendar-month-view\r\n    *ngSwitchCase=\"'month'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-month-view>\r\n           </span></th>                                                                \r\n                                                                        </tr>\r\n\r\n                                                                    </thead>\r\n\r\n                                                                </table>\r\n\r\n                                                            </div>\r\n\r\n                                                        </td>\r\n\r\n                                                    </tr>\r\n\r\n                                                       </thead>\r\n                                                    <tbody class=\"fc-body\">\r\n                                                        <tr>\r\n                                                            <td class=\"fc-widget-content\">\r\n                                                                <div class=\"fc-scroller fc-day-grid-container\" style=\"overflow-x: hidden; overflow-y: scroll; height: 620px;\">\r\n                                                                    <div class=\"fc-day-grid fc-unselectable\">\r\n                                                                        \r\n                                                                        \r\n                                                                        <div class=\"fc-row fc-week fc-widget-content fc-rigid\" style=\"height: 103px;\">\r\n                                                                            <div class=\"fc-bg\">\r\n                                                                                <table>\r\n                                                                                    <tbody>\r\n                                                                                        <tr>\r\n                                                                                            <td>\r\n                                                                                                 <mwl-calendar-day-view\r\n    *ngSwitchCase=\"'day'\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-day-view>\r\n                                                                                            </td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-sun fc-future\" data-date=\"2017-06-18\"></td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-mon fc-future\" data-date=\"2017-06-19\"></td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-tue fc-future\" data-date=\"2017-06-20\"></td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-wed fc-future\" data-date=\"2017-06-21\"></td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-thu fc-future\" data-date=\"2017-06-22\"></td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-fri fc-future\" data-date=\"2017-06-23\"></td>\r\n                                                                                            <td class=\"fc-day fc-widget-content fc-sat fc-future\" data-date=\"2017-06-24\"></td>\r\n\r\n                                                                                        </tr>\r\n\r\n                                                                                    </tbody>\r\n\r\n                                                                                </table>\r\n\r\n                                                                            </div>\r\n                                                                            <div class=\"fc-content-skeleton\">\r\n                                                                                <table>\r\n                                                                                    <thead>\r\n                                                                                        <tr>\r\n                                                                                            <td class=\"fc-day-top fc-sun fc-future\" data-date=\"2017-06-18\"><span class=\"fc-day-number\">18</span></td>\r\n                                                                                            <td class=\"fc-day-top fc-mon fc-future\" data-date=\"2017-06-19\"><span class=\"fc-day-number\">19</span></td>\r\n                                                                                            <td class=\"fc-day-top fc-tue fc-future\" data-date=\"2017-06-20\"><span class=\"fc-day-number\">20</span></td>\r\n                                                                                            <td class=\"fc-day-top fc-wed fc-future\" data-date=\"2017-06-21\"><span class=\"fc-day-number\">21</span></td>\r\n                                                                                            <td class=\"fc-day-top fc-thu fc-future\" data-date=\"2017-06-22\"><span class=\"fc-day-number\">22</span></td>\r\n                                                                                            <td class=\"fc-day-top fc-fri fc-future\" data-date=\"2017-06-23\"><span class=\"fc-day-number\">23</span></td>\r\n                                                                                            <td class=\"fc-day-top fc-sat fc-future\" data-date=\"2017-06-24\"><span class=\"fc-day-number\">24</span></td>\r\n\r\n                                                                                        </tr>\r\n\r\n                                                                                    </thead>\r\n                                                                                    <tbody>\r\n                                                                                        <tr style=\"\">\r\n                                                                                            <td rowspan=\"2\"></td><td class=\"fc-event-container\" rowspan=\"2\"><a class=\"fc-day-grid-event fc-h-event fc-event fc-start fc-end event-red fc-draggable\">\r\n                                                                                                <div class=\"fc-content\"><span class=\"fc-time\">12p</span> <span class=\"fc-title\">Lunch</span>\r\n\r\n                                                                                                </div></a></td><td rowspan=\"2\"></td>\r\n                                                                                            <td class=\"fc-event-container\"><a class=\"fc-day-grid-event fc-h-event fc-event fc-start fc-end event-orange fc-draggable\" href=\"http://www.creative-tim.com/\">\r\n                                                                                                <div class=\"fc-content\"><span class=\"fc-time\">12a</span> <span class=\"fc-title\">Click for Creative Tim</span></div></a></td>\r\n                                                                                            <td rowspan=\"2\"></td><td rowspan=\"2\"></td>\r\n                                                                                            <td rowspan=\"2\"></td>\r\n\r\n                                                                                        </tr>\r\n                                                                                        <tr style=\"\">\r\n                                                                                            <td class=\"fc-event-container\"><a class=\"fc-day-grid-event fc-h-event fc-event fc-start fc-end event-orange fc-draggable\" href=\"http://www.creative-tim.com/\">\r\n                                                                                                <div class=\"fc-content\"><span class=\"fc-time\">12a</span> <span class=\"fc-title\">Click for Google</span></div></a></td></tr>\r\n\r\n                                                                                    </tbody>\r\n\r\n                                                                                </table>\r\n\r\n                                                                            </div>\r\n\r\n                                                                        </div>\r\n                                                                        \r\n\r\n                                                                    </div>\r\n\r\n                                                                </div>\r\n\r\n                                                            </td>\r\n\r\n                                                        </tr>\r\n\r\n                                                    </tbody>\r\n\r\n                                                </table>\r\n</div>\r\n\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n                               \r\n   <ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <div>\r\n      Action:\r\n      <pre>{{ modalData?.action }}</pre>\r\n    </div>\r\n    <div>\r\n      Event:\r\n      <pre>{{ modalData?.event | json }}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">OK</button>\r\n  </div>\r\n</ng-template>\r\n                                    <div class=\"row text-center\">\r\n  \r\n  \r\n  \r\n</div>\r\n<br>\r\n\r\n\r\n<br><br><br>\r\n\r\n<h3>\r\n  Edit events\r\n  <button\r\n    class=\"btn btn-primary pull-right\"\r\n    (click)=\"addEvent()\">\r\n    Add new\r\n  </button>\r\n  <div class=\"clearfix\">\r\n  </div>\r\n</h3>\r\n\r\n<table class=\"table table-bordered\">\r\n\r\n  <thead>\r\n    <tr>\r\n      <th>Title</th>\r\n      <th>Primary color</th>\r\n      <th>Secondary color</th>\r\n      <th>Starts at</th>\r\n      <th>Ends at</th>\r\n      <th>Remove</th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let event of events; let index = index\">\r\n      <td>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"event.title\"\r\n          (keyup)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <input\r\n          type=\"color\"\r\n          [(ngModel)]=\"event.color.primary\"\r\n          (change)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <input\r\n          type=\"color\"\r\n          [(ngModel)]=\"event.color.secondary\"\r\n          (change)=\"refresh.next()\">\r\n      </td>\r\n      <td>\r\n        <mwl-demo-utils-date-time-picker\r\n          [(ngModel)]=\"event.start\"\r\n          (ngModelChange)=\"refresh.next()\"\r\n          placeholder=\"Not set\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <mwl-demo-utils-date-time-picker\r\n          [(ngModel)]=\"event.end\"\r\n          (ngModelChange)=\"refresh.next()\"\r\n          placeholder=\"Not set\">\r\n        </mwl-demo-utils-date-time-picker>\r\n      </td>\r\n      <td>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          (click)=\"events.splice(index, 1); refresh.next()\">\r\n          Delete\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>-->\r\n\r\n\r\n\r\n\r\n\r\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'month'\"\n        [class.active]=\"view === 'month'\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'week'\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'day'\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n\n<h3>\n  Edit events\n  <button\n    class=\"btn btn-primary pull-right\"\n    (click)=\"addEvent()\">\n    Add new\n  </button>\n  <div class=\"clearfix\"></div>\n</h3>\n\n<table class=\"table table-bordered\">\n\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Primary color</th>\n      <th>Secondary color</th>\n      <th>Starts at</th>\n      <th>Ends at</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let event of events; let index = index\">\n      <td>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"event.title\"\n          (keyup)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.primary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          type=\"color\"\n          [(ngModel)]=\"event.color.secondary\"\n          (change)=\"refresh.next()\">\n      </td>\n      <td>\n        <mwl-demo-utils-date-time-picker\n          [(ngModel)]=\"event.start\"\n          (ngModelChange)=\"refresh.next()\"\n          placeholder=\"Not set\">\n        </mwl-demo-utils-date-time-picker>\n      </td>\n      <td>\n        <mwl-demo-utils-date-time-picker\n          [(ngModel)]=\"event.end\"\n          (ngModelChange)=\"refresh.next()\"\n          placeholder=\"Not set\">\n        </mwl-demo-utils-date-time-picker>\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"events.splice(index, 1); refresh.next()\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>"

/***/ }),

/***/ "../../../../../src/app/dashboard/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var calendarComponent = (function () {
    function calendarComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = [
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 1),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["subDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addDays"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["addHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    calendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    calendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    calendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    calendarComponent.prototype.addEvent = function () {
        this.events.push({
            title: 'New event',
            start: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["startOfDay"])(new Date()),
            end: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.refresh.next();
    };
    return calendarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalContent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) === "function" && _a || Object)
], calendarComponent.prototype, "modalContent", void 0);
calendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Panels',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__("../../../../../src/app/dashboard/calendar/calendar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], calendarComponent);

var _a, _b;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/calendar/calendarheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHeaderComponent = (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return CalendarHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "view", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalendarHeaderComponent.prototype, "viewDate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarHeaderComponent.prototype, "locale", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CalendarHeaderComponent.prototype, "viewChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
CalendarHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mwl-demo-utils-calendar-header',
        template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "
    })
], CalendarHeaderComponent);

var _a, _b;
//# sourceMappingURL=calendarheader.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/calendar/dattimepicker.component .ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("../../../../date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = (function () {
    function DateTimePickerComponent(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = function () { };
    }
    DateTimePickerComponent.prototype.writeValue = function (date) {
        this.date = date;
        this.dateStruct = {
            day: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getDate"])(date),
            month: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMonth"])(date) + 1,
            year: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getYear"])(date)
        };
        this.timeStruct = {
            second: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getSeconds"])(date),
            minute: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getMinutes"])(date),
            hour: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["getHours"])(date)
        };
        this.cdr.detectChanges();
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) { };
    DateTimePickerComponent.prototype.updateDate = function () {
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setYear"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMonth"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setDate"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    };
    DateTimePickerComponent.prototype.updateTime = function () {
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setHours"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setMinutes"])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["setSeconds"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    };
    return DateTimePickerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DateTimePickerComponent.prototype, "placeholder", void 0);
DateTimePickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mwl-demo-utils-date-time-picker',
        template: "\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\">\n            <div class=\"input-group-addon\" (click)=\"datePicker.toggle()\" >\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n        </div>\n      </div>\n    </form>\n    <ngb-timepicker\n      [(ngModel)]=\"timeStruct\"\n      (ngModelChange)=\"updateTime()\"\n      [meridian]=\"true\">\n    </ngb-timepicker>\n  ",
        styles: [
            "\n    .form-group {\n      width: 100%;\n    }\n  "
        ],
        providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _a || Object])
], DateTimePickerComponent);

var _a;
//# sourceMappingURL=dattimepicker.component .js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/calendar/demoutils.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoUtilsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendarheader_component__ = __webpack_require__("../../../../../src/app/dashboard/calendar/calendarheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dattimepicker_component___ = __webpack_require__("../../../../../src/app/dashboard/calendar/dattimepicker.component .ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DemoUtilsModule = (function () {
    function DemoUtilsModule() {
    }
    return DemoUtilsModule;
}());
DemoUtilsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbTimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular_calendar__["a" /* CalendarModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__calendarheader_component__["a" /* CalendarHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__dattimepicker_component___["a" /* DateTimePickerComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__calendarheader_component__["a" /* CalendarHeaderComponent */], __WEBPACK_IMPORTED_MODULE_6__dattimepicker_component___["a" /* DateTimePickerComponent */]]
    })
], DemoUtilsModule);

//# sourceMappingURL=demoutils.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/charts.component.html":
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n \r\n #mySidenav button {\r\n     /*position: absolute;\r\n    left: 0px;*/\r\n     position: absolute;\r\n     z-index:1000;\r\n     right:0px;\r\n    transition: 0.3s;\r\n    padding: 6px;\r\n    width: 30px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    color: white;\r\n   border-radius: 25px 0 0 25px;\r\n   \r\n}\r\n\r\n    </style>\r\n\r\n<div id=\"mySidenav\">\r\n   \r\n \r\n             <button (click)=\"toggle()\" class=\"btn btn-warning\" style=\"text-align: left\">\r\n               <i class=\"fa fa-cog fa-2x\"  style=\"margin-right: 20px;\"> </i> \r\n            </button>\r\n            \r\n        </div>\r\n   \r\n<div *ngIf=\"show\" style=\"width:150px;float:right;position:absolute;z-index:1000;right: 75px;top:80px;\"> \r\n  \r\n            \r\n           \r\n              <div class=\"card\">\r\n              <div class=\"card-header\" data-background-color=\"orange\">\r\n                                    <i class=\"material-icons\">language</i>\r\n                                </div>\r\n\r\n                <div class=\"card-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n\r\n                \r\n             \r\n                        <p></p>\r\n                        <div class=\"radio\">\r\n                          Capital\r\n                            <label>\r\n                                 <input type=\"radio\" (click)=\"start($event)\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        \r\n                        \r\n                    \r\n               \r\n                        <div class=\"radio\">\r\n                          Port\r\n                            <label>\r\n                                <input type=\"radio\" (click)=\"port($event)\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                       \r\n                \r\n                \r\n              \r\n              \r\n                        <div class=\"radio\">\r\n                          Abhiyaran\r\n                            <label>\r\n                                <input type=\"radio\" (click)=\"abhiyaran($event)\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        \r\n                        <div class=\"radio\">\r\n                          Hide\r\n                            <label>\r\n                                 <input type=\"radio\" (click)=\"hide($event)\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        \r\n               \r\n           </div>\r\n        </div>\r\n    </div>\r\n                </div>\r\n  </div>\r\n \r\n    \r\n <div class=\"container-fluid\">\r\n                  <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <!-- <div style=\"position: relative;top: 46px;float: right;z-index: 1000;\">\r\n                                         \r\n                                    </div>-->\r\n                            <!--<img src=\"../../../assets/images/water.gif\" />-->\r\n                            <div class=\"card\">\r\n                               <!-- <div class=\"card-header card-header\" data-background-color=\"blue\">\r\n                                    <i class=\"material-icons\">language</i>\r\n                                 \r\n\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <h4 class=\"card-title\">Coloured Bars Chart\r\n                                        <small> - Rounded</small>\r\n                                    </h4>\r\n                                </div>-->\r\n                                <!-- <div id=\"listdiv1\" style=\"width:600px; overflow:auto; height:500px; float:right; background-color:#EEEEEE;\"></div>-->\r\n                                 <div id=\"mapdiv1\" [style.width.%]=\"100\" [style.height.px]=\"500\" >\r\n                                    \r\n                                 </div>\r\n                           <!-- <input type=\"text\" id=\"info\" class=\"form-control\"  [value]=\"info\" [(ngModel)]=\"filterQueryQ\"/>-->\r\n                               \r\n                                 <div  id=\"info\" >\r\n                            \r\n                              </div>\r\n                                <div>\r\n                                   <p>{{a}}</p>\r\n                               </div>\r\n                                \r\n                        </div>\r\n                        \r\n                    </div>\r\n                    \r\n\r\n\r\n                </div>\r\n  <div class=\"row\">\r\n                      <div class=\"col-ms-6\">\r\n                                             \r\n  \r\n  \r\n         <div class=\"card\"> \r\n              <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\">{{queryString}}</h4>\r\n                     \r\n                 \r\n                      \r\n                        </div>    \t\r\n          \r\n\r\n              <!-- <input type=\"text\" class=\"form-control\"   [(ngModel)]=\"queryString\"/>-->\r\n             <div *ngIf=\"queryString!=''\">\r\n           <table class=\"table table-shopping\" [mfData]=\"Questions | FilterPipe : queryString : searchableList\" #mf=\"mfDataTable\"\r\n                  [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n               \r\n              <thead class=\"text-warning\">                    \r\n                       \r\n              \r\n                <tr>\r\n                   <th>\r\n\r\n                     \r\n                   </th>\r\n                    <th>\r\n                        <mfDefaultSorter by=\"question\">Question</mfDefaultSorter>\r\n                    </th>\r\n                    <th >\r\n                        <mfDefaultSorter by=\"correctanswer\">Answer</mfDefaultSorter>\r\n                    </th>\r\n                   \r\n                </tr>\r\n                \r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data;let i = index\">\r\n                 \r\n                    <td>\r\n                       {{ (i+1) }}\r\n                       <!-- {{Questions.indexOf(item)+1}}  -->                     \r\n                    </td>\r\n                    <td>{{item.question}}</td>\r\n                    <td class=\"text-success\">{{item.correctanswer}}</td>\r\n                  \r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator ></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n    </div>\r\n        </div>\r\n       \r\n    \r\n     \r\n\r\n    </div>\r\n\r\n                    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChartComponent = (function () {
    function ChartComponent(services, AmCharts, http) {
        this.services = services;
        this.AmCharts = AmCharts;
        this.http = http;
        this.filterQueryQ = '';
        this.queryString = 'ગુજરાત';
        this.rowsOnPage = 5;
        this.ActivePage = 1;
        this.sortBy = "question";
        this.sortOrder = "asc";
        this.searchableList = [];
        this.sid = [];
        // svg path for plane icon
        this.shipb = "M93.926,64.703L77.293,42.656c0.378-0.757,0.823-1.517,1.344-2.278h1.647c0.211,0,0.384-0.172,0.384-0.385   c0-0.212-0.173-0.384-0.384-0.384h-4.106c-0.404-0.063-0.854-0.131-1.337-0.204l-7.332-9.719c0.079-2.143,0.517-4.567,1.545-7.238   c1.235-3.212,3.758-4.475,3.758-4.475c0.154,0,0.279-0.172,0.279-0.385c0-0.212-0.125-0.384-0.279-0.384h-2.761   c-2.989-0.77-8.095-1.912-13.797-2.437l-2.054-2.722c0.39-0.078,0.813-0.053,1.247,0.164c1.682,0.841,3.046,0.63,3.434-2.28   c0.388-2.911,2.87-2.411,2.87-2.411c-3.687-0.905-3.558,1.941-5.886,1.229c-1.568-0.479-2.663-0.042-3.22,0.296   c-0.038-0.071-0.091-0.13-0.155-0.178c0.351-0.105,0.612-0.418,0.612-0.803c0-0.47-0.382-0.852-0.852-0.852   c-0.47,0-0.851,0.381-0.851,0.852c0,0.343,0.205,0.634,0.497,0.769c-0.163,0.095-0.277,0.264-0.277,0.466v0.836l-2.262,4.368   c-4.712,0.092-9.402,0.829-13.304,2.704h-2.331c-0.154,0-0.278,0.172-0.278,0.384c0,0.212,0.124,0.385,0.278,0.385h1.529   c-1.385,2.365-6.456,11.969-3.169,20.808c-0.806,0.243-1.552,0.52-2.246,0.827h-3.585c-0.213,0-0.385,0.172-0.385,0.384   c0,0.212,0.172,0.385,0.385,0.385h2.496c-1.474,1.902-6.841,9.85-3.748,21.158l-0.93,1.795h-0.472   c-0.233,0-0.422,0.173-0.422,0.384c0,0.212,0.189,0.384,0.422,0.384h0.074l-4.977,9.61h-1.927l0.147,0.326L5,73.544v0.714   l12.598,1.294l0.432,0.958l6.629,14.716c0,0,33.276,3.624,57.493-0.165l3.294-9.719l5.602-0.824l3.198-12.794L95,64.703H93.926z    M48.088,35.673c0.391,0.038,0.785,0.081,1.183,0.127l-0.045,0.546H48.01L48.088,35.673z M47.927,37.052h1.241l-0.004,0.052   c-0.415-0.006-0.828-0.011-1.241-0.013L47.927,37.052z M47.119,35.586c0.171,0.014,0.344,0.031,0.517,0.046l-0.086,0.713h-0.574   L47.119,35.586z M46.843,37.052h0.622l-0.005,0.039c-0.208,0-0.417,0-0.625,0.001L46.843,37.052z M46.09,35.513   c0.173,0.011,0.35,0.024,0.525,0.037l-0.155,0.796h-0.59L46.09,35.513z M45.683,37.052h0.639l-0.008,0.04   c-0.217,0.002-0.429,0.009-0.645,0.013L45.683,37.052z M44.615,35.449c0.338,0.009,0.682,0.022,1.031,0.04l-0.229,0.856h-1.089   L44.615,35.449z M44.102,37.052h1.127l-0.017,0.063c-0.381,0.008-0.762,0.015-1.139,0.028L44.102,37.052z M41.039,64.099   l-0.21,1.074h-2.587l0.284-1.074H41.039z M38.73,63.331l0.43-1.625c0.77-0.072,1.56-0.142,2.387-0.205l-0.358,1.83H38.73z    M38.204,63.331h-2.506l0.417-1.304c0.796-0.094,1.635-0.183,2.51-0.269L38.204,63.331z M37.999,64.099l-0.287,1.074h-2.603   l0.344-1.074H37.999z M37.522,65.881l-1.044,3.906h-2.846l1.249-3.906H37.522z M36.289,70.493l-1.044,3.906h-3.088l1.249-3.906   H36.289z M36.836,70.493h2.955l-0.763,3.906h-3.226L36.836,70.493z M37.023,69.786l1.033-3.906h2.636l-0.763,3.906H37.023z    M41.421,65.881h2.584l-0.469,3.906h-2.85L41.421,65.881z M41.553,65.174l0.202-1.074h2.463l-0.129,1.074H41.553z M41.9,63.331   l0.354-1.88c0.746-0.053,1.513-0.102,2.3-0.145l-0.243,2.024H41.9z M43.735,35.441l-0.561,1.741   c-1.835,0.081-3.608,0.221-5.284,0.432l0.86-1.718C40.105,35.613,41.743,35.438,43.735,35.441z M38.218,36.013l-0.867,1.673   c-1.368,0.187-2.67,0.421-3.875,0.714C34.277,37.587,35.72,36.617,38.218,36.013z M35.122,62.147l-0.382,1.184h-7.027   C29.315,63.01,31.831,62.561,35.122,62.147z M25.34,62.692c0.068,0.212,0.141,0.425,0.214,0.639H25.02L25.34,62.692z    M29.985,77.279c-0.407-1.049-0.97-2.468-1.408-3.569h-8.75l4.809-9.61h9.857l-4.355,13.503   C30.082,77.501,30.03,77.394,29.985,77.279z M33.28,79.035c0,0-1.377,0.117-2.408-0.617l1.059-3.312h3.125l-1.051,3.929H33.28z    M38.123,79.035h-3.547l1.039-3.929h3.274L38.123,79.035z M42.426,79.035h-3.48l0.739-3.929h3.213L42.426,79.035z M39.818,74.399   l0.735-3.906h2.898l-0.469,3.906H39.818z M45.415,77.224c0,0-0.174,1.509-2.381,1.773l0.454-3.89h2.444L45.415,77.224z    M46.079,74.399H43.57l0.456-3.906h2.377L46.079,74.399z M46.461,69.786h-2.352l0.455-3.906h2.219L46.461,69.786z M46.842,65.174   h-2.196l0.125-1.074h2.16L46.842,65.174z M46.995,63.331h-2.133l0.24-2.055c0.676-0.035,1.367-0.065,2.071-0.091L46.995,63.331z    M51.62,70.51c-1.931-0.015-3.498-0.03-4.183-0.037l0.484-6.374h3.699V70.51z M51.62,63.331h-3.64l0.165-2.177   c1.127-0.034,2.282-0.058,3.475-0.065V63.331z M51.62,37.164c-0.55-0.018-1.1-0.035-1.649-0.046l0.093-1.221   c0.516,0.065,1.035,0.136,1.556,0.212V37.164z M51.62,10.989l-1.129,3.5c-0.345,0-0.69,0.005-1.035,0.011l2.163-4.323V10.989z    M74.101,39.296c-1.324-0.193-2.884-0.409-4.61-0.627c-0.885-1.651-2.017-4.53-1.993-8.387L74.101,39.296z M78.121,63.331H63.997   l-0.594-1.841C68.042,61.832,72.973,62.417,78.121,63.331z M63.982,65.417h-1.683l-0.352-1.318h1.613L63.982,65.417z    M63.314,63.331h-1.573l-0.296-1.108h1.514L63.314,63.331z M61.924,65.417H60.32l-0.257-1.318h1.513L61.924,65.417z M62.71,61.442   l0.086,0.268h-1.488l-0.098-0.368C61.704,61.371,62.208,61.407,62.71,61.442z M61.372,63.331h-1.46l-0.216-1.108h1.383   L61.372,63.331z M59.222,62.223l0.208,1.108H58l-0.133-1.108H59.222z M57.805,61.71l-0.063-0.528   c0.43,0.015,0.857,0.028,1.293,0.048l0.09,0.48H57.805z M59.575,64.099l0.248,1.318H58.25l-0.158-1.318H59.575z M60.943,61.71   h-1.348l-0.089-0.456c0.442,0.021,0.886,0.044,1.334,0.069L60.943,61.71z M60.119,37.675c-1.471-0.124-2.976-0.233-4.5-0.324   l-0.199-0.617C57.03,37.028,58.616,37.349,60.119,37.675z M52.718,12.864c0.345-0.313,0.849-0.674,1.433-0.806l1.977,2.699   c-1.119-0.101-2.259-0.175-3.41-0.221V12.864z M54.993,37.314c-0.307-0.017-0.614-0.032-0.922-0.048l-0.065-0.78   c0.255,0.043,0.509,0.086,0.763,0.131L54.993,37.314z M52.718,36.274c0.26,0.041,0.519,0.082,0.779,0.125l0.064,0.843   c-0.281-0.013-0.562-0.028-0.843-0.04V36.274z M52.718,61.09c0.87,0.001,1.756,0.01,2.657,0.028l0.168,2.213h-2.825V61.09z    M52.718,70.518v-6.419h2.884l0.489,6.437C54.94,70.532,53.791,70.525,52.718,70.518z M56.044,61.13   c0.435,0.01,0.877,0.025,1.319,0.039l0.063,0.541h-1.334L56.044,61.13z M56.135,62.223h1.352l0.129,1.108h-1.389L56.135,62.223z    M56.29,64.099h1.416l0.154,1.318h-1.46L56.29,64.099z M56.441,65.93h1.477l0.4,3.434h-1.593L56.441,65.93z M56.823,70.539   l-0.055-0.663h1.612l0.078,0.666C57.92,70.542,57.374,70.541,56.823,70.539z M58.312,65.93h1.607l0.646,3.434h-1.841L58.312,65.93z    M58.866,70.543l-0.08-0.666h1.876l0.125,0.663C60.178,70.542,59.533,70.543,58.866,70.543z M60.419,65.93h1.64l0.909,3.434H61.09   L60.419,65.93z M61.319,70.537l-0.129-0.66h1.913l0.169,0.64C62.708,70.526,62.044,70.533,61.319,70.537z M62.436,65.93h1.709   l1.099,3.434h-1.89L62.436,65.93z M64.853,70.469c-0.282,0.017-0.692,0.03-1.193,0.04l-0.169-0.633h1.918l0.153,0.478   C65.343,70.41,65.112,70.454,64.853,70.469z M68.808,64.703l-0.824,2.8c0,0-0.217,1.843-1.794,2.627l-1.945-6.031h18.693   c0.232,0,0.421-0.172,0.421-0.384c0-0.212-0.189-0.384-0.421-0.384h-2.781c-1.521-2.004-7.409-10.695-3.155-20.075L92.71,64.703   H68.808z";
        this.shipa = "M87.734,78.844c-3.135,0.938-8.473,1.826-9.438,0.205c-1.646-2.76-9.594-0.475-10.494-0.205   c-3.137,0.938-8.475,1.826-9.439,0.205c-1.645-2.76-9.594-0.475-10.495-0.205c-3.137,0.938-8.472,1.824-9.438,0.205   c-1.646-2.762-9.594-0.477-10.494-0.205c-3.138,0.938-8.473,1.824-9.44,0.205C16.849,76.287,8.901,78.572,8,78.844l0.265,0.881   c3.136-0.939,8.472-1.824,9.439-0.205c0.607,1.018,2.069,1.35,3.72,1.35c2.827,0,6.205-0.975,6.774-1.145   c3.137-0.939,8.472-1.824,9.44-0.205c0.605,1.018,2.068,1.35,3.72,1.35c2.827,0,6.205-0.975,6.773-1.145   c3.136-0.939,8.476-1.824,9.438-0.205c0.607,1.018,2.07,1.35,3.723,1.35c2.826,0,6.205-0.975,6.773-1.145   c3.137-0.939,8.475-1.824,9.439-0.205c0.605,1.018,2.068,1.35,3.719,1.35c2.828,0,6.205-0.975,6.775-1.145L87.734,78.844z";
        this.targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        this.ship = "M13.785,65.84h57.16l15.069-15.033H8.673L13.785,65.84z M41.389,54.969c0.672,0,1.218,0.545,1.218,1.218   c0,0.674-0.546,1.218-1.218,1.218c-0.672,0-1.219-0.544-1.219-1.218C40.17,55.514,40.716,54.969,41.389,54.969z M34.892,54.969   c0.673,0,1.218,0.545,1.218,1.218c0,0.674-0.545,1.218-1.218,1.218s-1.218-0.544-1.218-1.218   C33.674,55.514,34.219,54.969,34.892,54.969z";
        this.planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
        this.bike = "M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";
        this.lhouse = "m 13.231022,272.41625 c -0.272402,0 -0.496095,0.22362 -0.496093,0.49609 -10e-7,0.0889 0.02567,0.17172 0.06718,0.24443 -0.412242,0.0582 -0.783362,0.19896 -1.076937,0.39998 -0.39243,0.26871 -0.650606,0.65503 -0.650606,1.09192 v 0.13281 c 1.437988,-1.9e-4 2.87496,-1.9e-4 4.312398,0 v -0.13281 c -3e-6,-0.43689 -0.257658,-0.82321 -0.650089,-1.09192 -0.293576,-0.20102 -0.664695,-0.34177 -1.076937,-0.39998 0.04152,-0.0727 0.06718,-0.15557 0.06718,-0.24443 10e-7,-0.27247 -0.223693,-0.49609 -0.496094,-0.49609 z m 7.595402,1.18701 a 0.19845734,0.19845734 0 0 0 -0.01912,5.3e-4 0.19845734,0.19845734 0 0 0 -0.0047,5.3e-4 0.19845734,0.19845734 0 0 0 -0.05271,0.0119 l -5.271513,1.84175 a 0.19858819,0.19858819 0 1 0 0.130741,0.37465 l 5.271513,-1.84175 a 0.19845734,0.19845734 0 0 0 -0.05426,-0.38757 z m -15.1933871,0.001 a 0.19845734,0.19845734 0 0 0 -0.05271,0.38654 l 5.2715121,1.84175 a 0.19858819,0.19858819 0 1 0 0.130742,-0.37466 l -5.2715127,-1.84174 a 0.19845734,0.19845734 0 0 0 -0.078031,-0.0119 z M 11.31486,275.045 v 2.13682 c 1.277595,-1.5e-4 2.555194,-1.6e-4 3.832324,0 V 275.045 c -1.277365,-1.5e-4 -2.554524,-1.5e-4 -3.832324,0 z m 1.916162,0.27233 c 0.16242,0 0.275239,0.12544 0.343649,0.26924 0.06841,0.1438 0.105419,0.32714 0.105419,0.52761 0,0.20047 -0.03701,0.38175 -0.105419,0.52555 -0.06841,0.1438 -0.18123,0.2713 -0.343649,0.2713 -0.16242,0 -0.275237,-0.1275 -0.343648,-0.2713 -0.06841,-0.1438 -0.105419,-0.32509 -0.10542,-0.52555 0,-0.20047 0.03701,-0.38381 0.10542,-0.52761 0.06841,-0.1438 0.181226,-0.26924 0.343648,-0.26924 z m 0,0.26355 c -0.01213,0 -0.05737,0.0227 -0.103352,0.11937 -0.04598,0.0967 -0.0801,0.24747 -0.0801,0.41393 0,0.16645 0.03412,0.3152 0.0801,0.41186 0.04598,0.0967 0.09122,0.11938 0.103352,0.11938 0.01213,0 0.05737,-0.0227 0.103353,-0.11938 0.04598,-0.0967 0.0801,-0.2454 0.0801,-0.41186 0,-0.16646 -0.03412,-0.31727 -0.0801,-0.41393 -0.04599,-0.0967 -0.09122,-0.11937 -0.103353,-0.11937 z m -2.302185,0.71365 a 0.19845734,0.19845734 0 0 0 -0.02015,5.3e-4 0.19845734,0.19845734 0 0 0 -0.0041,5.3e-4 0.19845734,0.19845734 0 0 0 -0.05271,0.0119 l -5.2715129,1.84174 a 0.19858825,0.19858825 0 1 0 0.1307414,0.37466 l 5.2715135,-1.84177 a 0.19845734,0.19845734 0 0 0 -0.05374,-0.38757 z m 4.602303,10e-4 a 0.19845734,0.19845734 0 0 0 -0.05271,0.38654 l 5.271513,1.84226 a 0.19864951,0.19864951 0 0 0 0.130741,-0.37517 l -5.271512,-1.84175 a 0.19845734,0.19845734 0 0 0 -0.07803,-0.0119 z m -4.422986,1.1498 c -0.05258,0.023 -0.09813,0.0634 -0.119372,0.10542 -0.03205,0.0635 -0.03573,0.12451 -0.03514,0.18551 0.0012,0.122 0.02741,0.23924 0.0801,0.33228 l 0.130742,0.23255 -0.800985,15.41766 h 1.912545 v -1.59473 c 9e-6,-0.4799 0.413085,-0.86558 0.910022,-0.86558 0.0026,5.8e-4 0.0052,10e-4 0.0078,0.002 0.483499,0.0243 0.864404,0.41755 0.837675,0.8847 v 1.57355 h 2.067057 l -0.800984,-15.41767 0.130741,-0.23254 c 0.05263,-0.0931 0.07889,-0.21025 0.0801,-0.33228 6.08e-4,-0.061 -0.0031,-0.122 -0.03514,-0.18552 -0.0213,-0.0421 -0.0668,-0.0824 -0.119372,-0.10542 -1.414814,-1.9e-4 -2.830347,-1.8e-4 -4.245736,0 z m 2.122868,1.36322 c 0.408368,0 0.749823,0.31646 0.749825,0.71314 -2e-6,0.39668 -0.341457,0.71261 -0.749825,0.71261 -0.408371,0 -0.749824,-0.31593 -0.749825,-0.71261 10e-7,-0.39668 0.341454,-0.71314 0.749825,-0.71314 z m 0,0.26407 c -0.274012,0 -0.486274,0.20457 -0.486275,0.44907 10e-7,0.2445 0.212263,0.447 0.486275,0.447 0.274009,0 0.486275,-0.2025 0.486276,-0.447 -10e-7,-0.2445 -0.212267,-0.44907 -0.486276,-0.44907 z m 0,2.87889 c 0.408368,0 0.749823,0.31594 0.749825,0.71262 -2e-6,0.39668 -0.341457,0.71313 -0.749825,0.71313 -0.408371,0 -0.749824,-0.31645 -0.749825,-0.71313 10e-7,-0.39668 0.341454,-0.71262 0.749825,-0.71262 z m 0,0.26355 c -0.274012,0 -0.486274,0.20457 -0.486275,0.44907 10e-7,0.2445 0.212263,0.44752 0.486275,0.44752 0.274009,0 0.486275,-0.20302 0.486276,-0.44752 -10e-7,-0.2445 -0.212267,-0.44907 -0.486276,-0.44907 z m 0,2.87889 c 0.408368,0 0.749823,0.31594 0.749825,0.71262 6e-6,0.39668 -0.341452,0.71107 -0.749825,0.71107 -0.408376,0 -0.749832,-0.31439 -0.749825,-0.71107 10e-7,-0.39669 0.341454,-0.71262 0.749825,-0.71262 z m 0,0.26355 c -0.274012,0 -0.486274,0.20456 -0.486275,0.44907 -3e-6,0.2445 0.212259,0.44752 0.486275,0.44752 0.274013,0 0.48628,-0.20302 0.486276,-0.44752 -10e-7,-0.24451 -0.212267,-0.44907 -0.486276,-0.44907 z m 0,2.8789 c 0.408373,0 0.749831,0.31645 0.749825,0.71313 -2e-6,0.39668 -0.341457,0.71055 -0.749825,0.71055 -0.408371,0 -0.749824,-0.31387 -0.749825,-0.71055 -7e-6,-0.39668 0.341449,-0.71313 0.749825,-0.71313 z m 0,0.26355 c -0.274016,0 -0.486278,0.20508 -0.486275,0.44958 10e-7,0.2445 0.212263,0.447 0.486275,0.447 0.274009,0 0.486275,-0.2025 0.486276,-0.447 4e-6,-0.2445 -0.212263,-0.44958 -0.486276,-0.44958 z m -0.04909,3.02617 c -0.360098,0.003 -0.640267,0.27173 -0.640271,0.5979 v 1.59473 h 1.226282 v -1.5813 c -8.1e-5,-0.003 -8.1e-5,-0.005 0,-0.008 0.01798,-0.31423 -0.238594,-0.58444 -0.586011,-0.60358 z m -5.0327675,2.45825 -0.6996991,0.92966 c -0.064991,0.0872 -0.00283,0.21122 0.1059368,0.21135 H 18.906645 c 0.108529,-5.5e-4 0.170271,-0.12433 0.10542,-0.21135 l -0.699182,-0.92966 z";
        this.lion = "M12.855,27.471c0,0-5.266-7.371,4.213-12.639c-1.054,3.16,0,5.268,0,5.268s4.211-9.479,21.062-5.268  c0,0-4.212,0-6.319,4.214c8.425,0,10.532,10.532,18.957,10.532c0,0-2.107,2.106-8.426,2.106c14.744,8.425,14.744,4.212,27.381,4.212  c14.851,0,23.167,12.849,23.167,25.017C93.945,62.056,95,63.638,95,65.384c0,3.49-4.213,6.319-4.213,6.319s-4.214-2.829-4.214-6.319  c0-1.715,1.018-3.269,2.054-4.408c-0.303-1.022-1.946-6.479-6.603-9.324c-1.188-0.723-2.575-0.97-3.348,1.519  c-0.772,2.487-1.397,14.649-0.812,17.19c0.636,2.755,2.245,2.794,2.543,5.084c0.263,2.033-1.648,5.405-2.611,9.311  c-0.202,0.818-0.995,1.492-1.837,1.492h-7.773c-0.553,0-1.016-0.45-0.912-0.993c0.546-2.878,3.465-2.711,3.465-2.711  c1.249-1.86,1.589-2.95,0.89-5.446c-0.699-2.495-4.361-15.205-10.62-16.641c-6.259-1.437-7.343,4.896-19.955,2.345  c1.446,4.768-1.638,7.853-2.403,21.13c-0.126,1.278-1.104,2.317-2.205,2.317h-8.664c-0.552,0-1.013-0.451-0.92-0.995  c0.591-3.485,4.28-3.311,4.28-3.311C32.1,74.849,29.5,64.636,28.659,53.85c-0.759-1.037-1.863-1.733-3.103-1.561  c-1.418,0.196-2.856,0.868-3.705,2.566c0,0-4.213-2.107-4.213-8.425h-4.212c-1.163,0-2.675-0.751-3.378-1.68l-1.405-4.642  C8.644,40.109-1.887,38.002,12.855,27.471z";
        this.gudkar = "M5.9,24l-1.8-2.4C2,18.8,1.9,15,3.8,12.1C3.9,12.1,4,12,4,12c0.3-0.1,0.6,0,0.7,0.2c0.2,0.3,0.2,0.6,0.1,0.9  C4.7,14,5,14.9,5.5,15.5l4,5.5c0.5-0.1,1-0.1,1.5,0.2l0.2-0.4c0.5-0.8,0.6-1.8,0.3-2.7c-0.7-1.8-0.4-3.8,0.6-5.5  c0.2-0.2,0.5-0.3,0.7-0.2c1,0.6,1.8,1.4,2.4,2.4c1.4,2.4,1,5.4-0.9,7.4c1.7,0.7,3.4,1.3,5.2,2l2.2,0.9c1.1,0.4,2.3,0.6,3.5,0.5  c5.2-0.5,10.4,0.4,15.2,2.5l6,1.3c6.1,1.3,12.3,1.1,18.3-0.7c4.7-1.4,9.5-2.4,14.3-2.9c0.7-0.1,1.4,0.1,2,0.5  c4,1.5,7.7,3.7,10.9,6.4c0.4,0.8,0.7,1.7,0.9,2.6l1.4,2.3c0.9,1.5,1.3,3.2,1.2,5l1.9,23.6c-0.1,3-1.9,5.6-4.6,6.9l-0.5-32.7  c-0.2,0.5-0.5,1.1-0.8,1.6c-1.4,1.9-2.4,4-3.1,6.2c0,5.3,0.7,10.6,2,15.8l1.3,5c-1,4.8-1.5,9.6-1.5,14.5V86c-0.7,0.4-1,1.3-0.7,2.1  h-4.8l2.3-2.4c1.1-5.5,0.8-11.2-0.8-16.6c-1.1-3.8-2.9-7.3-5.4-10.4l-5.2-6.3c-2.7,4-7.1,6.6-12,7.1c-7.1,0.7-14.3-0.2-20.9-2.8  c0,4.4-0.2,8.8-0.5,13.1c-0.7,2-1,4.1-0.8,6.2l1.1,9.9c-0.7,0.4-1,1.3-0.7,2.1h-4.8l1.6-2.3l0.3-7.9c-0.1-1.1-0.5-2.2-1-3.1  c-0.9-1.6-1.4-3.4-1.3-5.2c0.1-1.1,0-2.2-0.3-3.2l-1.7-6.7c-0.3-0.7-0.5-1.5-0.6-2.3c-3.2-0.7-5.6-3.4-6-6.7  c-0.3-2.3-1.5-4.3-3.4-5.6l-9.4-6.4c-0.4,1.2-1.3,2.3-2.4,2.9c-0.6,0.3-0.9,1-0.9,1.7c0.2,2.1-0.7,4.1-2.3,5.4  c-0.2,0-0.5,0.1-0.7,0.1c0,0,0,0-0.1,0c-1.7,0-3-1.4-3-3v-6.1C5.6,37.1,5,34.7,4,32.5c-1.1-2.3-0.8-5,0.8-7.1L5.9,24L5.9,24z";
        this.bear = "M97.2,67.449c-0.587-3.055-4.017-5.889-4.017-11.201c0-2.438,0.486-5.625,0.486-9.625c0-11.438-12.098-22-23.345-22  c-10.213,0-12.888,2-22.371,2c-4.013,0-4.803-3.188-10.639-3.188c-4.742,0-8.906,4.125-15.016,5.563  c-0.852,0.2-2.067,0.016-3.298,0.609c-1.385,0.668-1.785,1.323-3.268,1.995c-2.208,1-3.767,1.292-4.663,1.552  c-0.333,0.097-0.663,0.006-0.944-0.178c-0.638-0.418-1.479-1.364-2.813-1.197C5.868,31.96,5.9,33.419,6.539,35.013  c0.386,0.964,0.994,1.452,0.866,1.692c-1.778,3.323-2.328,5.288-2.522,6.901c-0.258,2.141,1.246,1.813,0.172,4.224  c-1.953,4.382-2.594,6.417-2.513,7.125C2.622,55.664,4.528,57.123,7,56.664c2.472-0.457,5.65-4.02,6.565-4.209  c2.077-0.426,4.852,0.113,7.396-0.52c3.769-0.938,5.873-3.126,5.856-1.021c-0.05,6.209,3.993,7.615,3.202,10.166  c-1.797,5.801-2.021,8.775-2.513,10.418c-0.253,0.844-2.752,1.037-5.147,1.75c-0.92,0.273-1.537,0.746-1.895,1.238  c-0.529,0.178-1.188,0.488-1.458,0.809c-0.304,0.359-0.031,0.5,0.228,0.406c0.103-0.037,0.302-0.061,0.506-0.072  c-0.04,0.033-0.095,0.07-0.125,0.104c-0.28,0.32,0.002,0.414,0.253,0.316c0.082-0.033,0.231-0.061,0.393-0.086  c0.089,0.123,0.202,0.227,0.365,0.285c1.054,0.375,3.304,0.217,5.258,0.291c2.047,0.078,3.526,0.041,4.863-1  c4.186-3.264,5.067-1.916,7.984-7.041c1.438-2.525,1.729-3.641,2.168-3.875c0.475-0.254,0.532,1.328,1.763,2.656  c1.45,1.564,3.516,1.432,5.066,2.594c2.793,2.092,3.586,2.336,4.964,2.293c0.162-0.004,0.285-0.051,0.382-0.125  c0.424,0.018,0.854-0.006,1.114-0.121c0.427-0.188,0.24-0.436-0.032-0.469c-0.108-0.012-0.297-0.082-0.487-0.162  c0.052-0.012,0.116-0.02,0.158-0.037c0.388-0.162,0.173-0.373-0.095-0.398c-0.102-0.008-0.279-0.061-0.463-0.121  c-0.184-0.957-0.725-2.199-1.185-3.109c-0.836-1.656-2.654-2.938-4.073-3.543c-0.405-0.172-1.187-0.17,1.054-1.582  c3.172-2,2.122-5.166,2.64-5.516c0.486-0.328,2.494,1.395,4.903,2.029c3.562,0.939,5.553-0.867,5.021,0.152  c-1.854,3.553,0.604,8.02,1.156,8.793c0.791,1.104,0.552,2.232-0.144,2.373c-2.896,0.59-5.352,1.592-6.082,2.557  c-0.303,0.098-0.607,0.242-0.907,0.484c-0.364,0.295-0.094,0.445,0.18,0.432c0.207-0.012,0.374-0.02,0.524-0.027  c-0.105,0.057-0.204,0.115-0.271,0.176c-0.315,0.285-0.045,0.412,0.216,0.346c0.114-0.031,0.348-0.041,0.574-0.043  c0.609,0.355,1.64,0.457,2.626,0.348c3.81-0.416,5.467,0.305,7.902-0.51c3.83-1.281,1.975-2.684,4.885-7.303  c2.836-4.5,3.077-10.572,3.525-9.25c0.77,2.275,1.378,4.334,4.569,7.99c2.302,2.637,6.431,4.223,7.082,5.563  c0.213,0.438-0.851,1.01-2.766,2.5c-0.819,0.637-1.388,0.975-1.627,1.359c-0.307,0.148-0.649,0.365-0.788,0.564  c-0.173,0.246,0.011,0.32,0.171,0.244c0.102-0.049,0.358-0.086,0.537-0.109c-0.173,0.133-0.325,0.271-0.396,0.391  c-0.141,0.234,0.048,0.262,0.195,0.17c0.104-0.064,0.399-0.154,0.569-0.203c0.007,0.004,0.018,0.008,0.026,0.012  c-0.041,0.045-0.085,0.09-0.109,0.131c-0.142,0.234,0.048,0.26,0.194,0.17c0.063-0.041,0.202-0.09,0.339-0.133  c0.764,0.219,2.046,0.252,3.959-0.064c3.692-0.613,5.289-1.063,8.376-3.762C97.81,70.908,97.562,69.33,97.2,67.449z";
        this.flamingo = "M67.7,71.5c-0.2-0.5-0.5-1.1-0.9-1.5c0,0-0.1,0-0.1,0c-0.4-0.4-0.8-0.7-1.3-0.9c-0.3-0.1-0.8-0.3-1.2-0.3c0,0,0,0,0,0  c-0.5-0.1-0.9-0.2-1.4-0.2c-1.7-0.1-3.3,0-5,0c-3.2,0-6.4,0-9.6,0c-0.4-1.8-0.4-3.5-0.4-5.4c0-3.3,0.1-6.6,0.1-9.9  c0.1,0,0.1,0,0.2-0.1c0.8-1.2,1.5-2.3,2.4-3.2c0.7,0.1,1.5,0.1,2.2,0c0.1,0,0.3,0,0.4,0c2.6-1,5.5-2.5,7.3-4.6  c1-1.1,1.6-2.4,2.1-3.8c0.4-1.3,0.5-2.6,0.8-3.9c0.3-3.5-0.2-7.1-2.2-10.2c-0.7-1.2-1.6-2.2-2.7-3c-3.2-2.9-7.7-2.8-11.8-3.1  c-1.7-0.1-3.9-0.5-5.6-1.4c-0.8-0.8-1.5-1.7-1.8-2.8c-0.7-2-0.2-4.5,1.4-6c0.8-0.7,1.7-1.2,2.8-1.3c0.9-0.1,1.8,0.1,2.8,0  c0.1,0,0.3,0,0.4-0.1c0,0,0.1,0,0.1,0.1c1.5,0.6,3.2,0.2,4.7,0.9c1.5,0.6,2.2,2.3,3.4,3.4c0.3,0.3,0.7,0,0.6-0.4  c-0.5-3.2-2.7-5.9-5.7-7c-0.2-1.1-1-2-2.1-2.3c-0.7-0.2-1.4-0.1-2.1,0c-0.5,0-0.9,0.1-1.4,0.2c-3,0.7-5.2,3-6.7,5.6  c-0.6,0.8-1,1.7-1.2,2.6c-1.5,4.1-0.2,8.1,3.8,10.1c0.5,0.3,1.1,0.5,1.7,0.6c1.2,0.5,2.4,0.9,3.7,1.1c3.8,0.6,7.9-0.6,11.1,2.3  c1.4,1.2,2.3,2.8,2.8,4.5c0.1,1,0,2-0.2,3.1c-1-1.2-2.3-2.1-3.6-2.8c-4.9-2.4-10.9-2-15.5,1c-2.3,1.5-4.2,3.5-5.6,5.8  c-1,1.6-2.1,3.7-2.1,5.7c-0.3,1.8-0.3,3.5,0,5.3c0.1,1.7,0.4,3.5,0.8,5.2c0,0.1,0.1,0.2,0.2,0.2c0-0.3,0-0.5,0-0.8  c0-0.1,0.1-0.1,0.1,0c0,0.2,0.1,0.7,0.2,0.9c0,0,0,0,0.1,0c0.1,0,0.1,0,0.1-0.1c0-0.3,0-0.6,0-1c0-0.1,0-0.2,0-0.3  c0-0.1,0.1-0.1,0.1,0c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0.1,0,0.3,0.1,0.5c0,0,0,0,0,0c0.6-1.6,1.4-2.9,2.5-4.2  c1.6-0.3,3.2-0.7,4.8-0.8c0.5,0,1-0.1,1.5-0.1c0,0,0.1,0.1,0.2,0.1c0.2,0,0.4,0.1,0.6,0.2c0,0,0.1,0,0.1,0c0.4,0,0.8-0.1,1.2-0.1  c0.4,0.7,0.5,1.3,0.5,2.1c0,0,0,0.1,0,0.1c-2.4,1.8-4.2,4.3-6,6.6c-2.5,3.2-5.1,6.3-7.6,9.5c-0.1,0.2-0.1,0.4,0.1,0.6  c1.3,0.9,2.8,1.2,4.2,0.8c3.8,0,7.6,0,11.4,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c-0.5,1.5-0.6,2.9-0.1,4.4c-0.2,7.2-0.8,21.4-0.6,21.8  c0.3,0.5,3.7,0.6,5.4,0.7c0.6,0,1.1-0.1,1.1-0.1L53,96.1c0,0-1-0.5-1.6-0.6c0.7-0.1,2.1-0.4,2.1-0.4l-0.3-0.2l-0.5-0.2l-1.6-0.3  c0,0,0.9-0.1,1.3-0.4c0.2-0.1,0.3-0.3,0.3-0.3s-4.4-0.2-4.8,0c-0.1-0.4,0.2-12.6,0.3-19.2c0.1,0,0.2-0.1,0.3-0.2  c1.2-1.4,0.6-3.1,0.1-4.6c0-0.1-0.1-0.2-0.1-0.4c1.4,0,2.8,0,4.2,0c2.6,0,5.3,0,7.9,0c1.3,0,3.3-0.4,4.1,0.8c0.7,1,0.2,1.9-0.5,2.7  c-0.1,0.4-0.3,0.7-0.6,1c-0.1,0.1-0.2,0.3-0.2,0.4c0,0,0.1,0,0.1,0.1c0.1,0,0.3,0,0.4,0c0.5-0.4,1.1-1,1.5-1.6c0,0,0,0,0,0.1  c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0.2,0.7-0.1,1.5-0.2,2.3c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1  c0.3-0.4,0.6-0.8,0.9-1.3c0-0.1,0.1-0.2,0.1-0.3c0.1-0.3,0.2-0.5,0.3-0.7c0-0.1,0.1,0,0.1,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2  c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0.3,0.5,0.6,1,0.7,1.5c0.1,0,0.2-0.1,0.2-0.3C68.3,73.4,68.2,72.4,67.7,71.5z M37.4,68.4  c0-0.1-0.1-0.2-0.2-0.2c-0.3-0.2-0.6-0.4-0.9-0.5c-0.7-0.5-1.5-0.8-2.4-0.7c2-2.5,3.9-5,5.9-7.4c2.1-2.6,4-5.5,6.7-7.5  c0.2-0.1,0.4-0.2,0.6-0.4C47,55.2,47,58.6,46.9,62c0,2-0.1,4,0.2,5.9c0,0.2,0.1,0.4,0.1,0.6C44,68.4,40.7,68.4,37.4,68.4z";
        this.deer = "M80.3,67c-3.4-3.1-5.6-7.5-5.6-12.5c0-3.1-1.5-18.6-12.8-18.9c-9.1,0-8.6,2.1-17.1,2.1   c-4.6,0-8.3-3.7-8.3-8.3c0-1.7,0.5-3.4,1.5-4.7c2.5-0.7,4.5-2.7,5.2-5.3c10.1-0.6,17.7,7.3,21.4,6.4c1.3-0.3,0.8-0.6,0.7-0.5   c-1.1,0.3-2.9-0.9-10.1-5.8c-2-1.4-4-2.3-5.9-2.8c9.1,0.7,16.5,6.1,20,4.8c1.4-0.6,0.9-0.8,0.8-0.7c-1.2,0.5-3.6-0.7-12.6-5.4   c-7.5-4-13.9-3-18.5-1.6c-0.1,0-0.1-0.1-0.2-0.1c-1.9-1.3-3.5-0.7-4.4-1.2c-0.8-0.4-3.9-2-5.3-2.9C28.6,9.3,28.1,9,27.5,9   c-1.2,0-2.3,1.2-2.3,2.4c0,0.2,0.5,1.5,0.5,1.5c0.7,2.3,1.7,4.3,2.9,5.9c-4.1,4.1-6.6,9.9-6.6,16.3c0,5.8,2.1,11.1,5.6,15.1   c-3.4,3.4-8.5,8.9-9.4,9.8c-1.3,1.3-1.6,4.2-0.8,5.1c0.6,0.6,11.5,10.3,12.7,11.5c0.4,0.4,0.7,0.1,1-0.1c0.3-0.2,0.5-0.8,0.5-0.8   c-0.5-0.3-9.2-8.6-10.4-9.8c-1.3-1.3-1.8-3.3,1.5-5.3c2.2-1.4,7.2-3.4,10.3-4.7c1.4,4.4,3.8,11.7,5.2,15c2.1,4.9,5.2,21.3,5.6,21.6   c0.4,0.3,1.1,0,1.4,0c0.3,0-3.4-18.7-4.1-19.3c-1.8-1.8-1.7-12.8-0.7-17.7c3,1.2,6.3,1.8,9.7,1.8c2.9,0,5.8-0.5,8.4-1.4   c2.5,4.9,5.7,11.2,6.2,12c0.7,1.3,1.4,3.6,0,7.3c-1.4,3.7-7.5,16.9-7.1,17.2c0.3,0.3,1.2,0,1.2,0s10.2-19.7,10.8-21.1   c0.8-1.6,1-2.1,0.4-3.1c-1.7-3.1-2.4-6.4-2.3-9.7C72,65.1,77.9,68,79,70.4c1.3,3.1,3.3,21.7,3.6,22c0.3,0.3,1.4,0,1.4,0   S81.8,68.3,80.3,67z";
        this.jelyfish = "M72.8,43.8c0.2,2.8,0.3,5.4,0.7,7.9c0.8,4.4,1.3,8.9,2,13.4c0.3,1.9,1,3.6,2.2,5.1c0.9,1.1,1.6,2.2,2.3,3.4  c1.1,1.8,1,1.9-1.4,2.5c1.3,2.5,3,4.8,5,6.8c2,2.2,3.5,4.7,4.9,7.3c0.3,0.7,0.8,1.3,0.6,2.1c-0.2,0.9-0.8,1.6-1.8,1.1  c-1.5-0.8-3.2-1.3-4.2-2.7c-1.2-1.6-2.6-3-4.1-4.3c-3.3-3-4.6-7-5.5-11.1c-0.8-3.4-2.2-6.5-3.9-10c-0.5,2.6,0,4.8,0.1,7  c0.3,6.8,2,13.4,3.8,20c0.4,1.4,0.3,2.9,0.5,4.4c0.1,0.8-0.2,1.5-1.1,1.7c-0.8,0.2-1.7,0.1-2.1-0.8c-0.5-1-1.1-2-1.4-3.2  c-0.7-2.4-1.2-4.9-2-7.2c-0.6-1.8-0.4-3.9-0.4-5.9c0.1-5.4-1-10.6-1.6-15.9c-0.2-1.8,0-3.8-1.4-5.5c-0.1,4.2-0.4,8.3-0.6,12.4  c-0.3,5.8-1.8,11.4-1.6,17.2c0,2.1-0.8,3.8-1,5.8c-0.1,0.9-0.6,1.3-1.4,1.4c-1.1,0.1-1.5-0.7-1.6-1.6c-0.1-0.7,0-1.5,0-2.2  c0.5-4.9,1.4-9.7,1.6-14.7c0-0.8,0.2-1.7,0.2-2.5c-0.3-5.9,0.7-11.7,1-17.6c0.1-1.6,0.2-3.2-0.2-5.3c-1,1.4-0.8,2.6-1,3.7  c-0.6,3.4-1.4,6.7-1.7,10.2c-0.5,4.4-1.3,8.9-2.8,13.2c-1.2,3.5-1.5,7.2-2.9,10.6c-0.3,0.8-0.5,1.6-1,2.3c-0.8,0.9-1.7,0.7-2.6,0.3  c-0.9-0.4-0.8-1.2-0.6-1.9c0.4-1.3,0.7-2.6,1.2-3.9c2.5-6.7,4-13.6,5-20.7c0.3-1.8,0.7-3.7,1-5.5c-0.6,0.1-0.9,0.4-1,0.8  c-1.4,4.5-3.6,8.7-4.2,13.5c-0.3,2.5-1.4,4.8-2.2,7.2c-0.3,0.9-0.7,1.8-1.9,1.5c-1.3-0.4-1.1-1.3-0.8-2.2c1.1-4.2,2.1-8.5,3.4-12.7  c1.2-3.9,2.6-7.7,3.9-11.6c0.7-2.2,1.3-4.4,1-7c-1.6,1.4-1.9,3.2-2.4,4.8c-1,3-1.8,6-2.7,9c-1.2,4.3-4,8-5.6,12.1  c-0.9,2.3-1.9,4.6-3.1,6.8c-1,1.9-2.5,3.4-3.2,5.3c-0.4,1.2-1.1,1.8-2.3,1.3c-1.2-0.5-1.9-2.6-1.2-3.5c3.8-4.3,6.1-9.5,8.4-14.6  c1.5-3.2,2.5-6.6,3.7-10c0.2-0.5,0.3-1-0.2-1.7C41.2,66,37.8,72.1,32,76.4c0.3-4.7,3.7-7.9,5.2-12.1c-0.7,0.8-1.3,1.5-2,2.3  c-0.8,0.8-1.5,1.7-2.3,2.5c-3.1,3.4-6.2,6.8-9.4,10.1c-0.7,0.7-1.2,2.6-2.9,1.6c-1.3-0.9-1-2,0.8-3.9c2-2.1,4-4.3,6.1-6.4  c4.3-4.2,7.7-9.1,11.4-13.8c2.8-3.6,4.8-7.6,6.5-11.8c-2.3,2.2-3.8,4.9-5.6,7.4c-1.8,2.6-3.4,5.3-5.5,7.6c-2.2,2.4-4.5,4.5-7.4,7.1  c0.6-3.2,2.2-5,4.1-7.1c-1.3-0.1-1.6,0.7-2,1.1c-1.1,1-2.1,2-3.5,2.7c-1.5,0.7-2.5,2.1-3.6,3.5c-0.9,1.2-1.9,2.3-2.7,3.5  c-1.2,1.9-3.1,2-5,1.9c-1.6-0.1-2.3-1.6-1.4-2.9c0.7-1,1.3-1.9,2.4-2.8c4.6-3.9,9.8-7.1,13.3-12.2c-2.3,1.7-4.7,3.2-6.9,5  c-1,0.8-2.1,1.1-3.1,1.3c-1.8,0.3-2.3-0.7-1.7-2.4c1-2.7,3.4-4.2,5.7-5.2c7.1-3.2,11.7-9,16.9-14.3c1.4-1.4,2.2-3.3,3.8-4.5  c0.9-0.7,0.6-1.4,0-2.1c-0.6-0.7-1.4-1.2-2.4-1.4c-2.1-0.3-3.9-1.3-5.8-2.2c-1.5-0.8-2.2-1.8-2.5-3.3c-0.9-3.8,1.3-8,4.8-9.5  c1.9-0.8,3.5-2,5-3.3c1.8-1.5,3.8-3,5.4-4.7c2.5-2.8,5.7-4.2,9.1-5.3c3.3-1,6.7-0.5,10-0.4c7,0.3,12.5,3.6,17.3,8.5  c1.6,1.6,2.2,3.3,2.6,5.5c1.2,6.9,0.8,14,1.7,20.9c0.5,4.3-3.1,9.5-8.6,7.9C77.5,44.5,75.4,44.3,72.8,43.8z M71.2,60.7  c0.1-2.4-0.9-4.5-1.4-6.7C69.5,56.3,69.7,58.6,71.2,60.7z M69.4,48.9c-0.1-0.2-0.2-0.5-0.2-0.8c-0.1,0.2-0.2,0.3-0.2,0.5  c0,0.3,0,0.8,0.1,0.8C69.5,49.6,69.3,49.2,69.4,48.9z";
        this.leopard = "M1.684,23.7c1.532,0.86,2.527-0.107,2.527-0.107s0.35,3.091,0.538,3.387s0.323,0.538,0.323,0.538s1.72,0.026,1.962-0.081  c0,0,0.538-0.537,0.188-0.833c-0.35-0.296-0.672-0.457-0.914-0.431c-0.242,0.027-0.538-1.773-0.43-1.988  c0.107-0.216,2.554-3.064,3.333-4.006c0.78-0.94,0.995-1.155,0.995-1.155s0.457,2.715-0.081,3.763  c-0.538,1.049-0.295,1.64,0.081,2.204c0.376,0.564,1.425,1.774,1.64,1.936c0.215,0.161,1.989,0,1.989,0s0.35-0.753,0.188-0.807  c-0.161-0.054-0.107-0.402-0.564-0.402c-0.457,0-0.833,0.134-1.075-0.242c-0.242-0.377-1.048-1.344-0.618-1.747s2.097-3.468,2.446-5  c0,0,2.204,1.425,4.435,1.183c2.231-0.242,4.166-0.537,4.166-0.537s0.457,0.887,0.753,2.392c0.296,1.506,0.672,2.607,0.672,2.984  c0,0.376-0.134,1.344,0.27,1.451c0.402,0.107,0.591,0.376,1.021,0.296c0.43-0.081,0.806,0.161,1.183-0.054  c0.376-0.215,0.726-0.511,0.564-0.699s-0.484-0.43-0.888-0.564s-0.859-0.135-0.752-1.129s-0.135-4.623,0.322-5.322  s1.908-2.903,2.204-3.629s0.296-1.264,0.618-1.936s0.538-1.156,0.699-1.209s0.618-0.134,0.86-0.591c0,0,0.672,0.403,0.752,1.156  c0,0-0.026-0.618-0.672-1.317c0,0,0.755,0.507,0.979,1.139c-0.098-0.37-0.329-0.949-0.872-1.247c0,0,1.021,0.349,1.29,1.102  c0,0-0.215-0.995-1.155-1.264c0,0,0.968,0.135,1.155,0.538c0,0-0.43-0.645-1.129-0.672c0,0,0.054-0.242,0.296-0.376  c0.242-0.134,0.403-1.048,0.403-1.505c0-0.457-0.026-0.833-0.026-0.833s1.021-0.807,0.483-1.72  c-0.538-0.914-1.586,0.322-1.586,0.322s-0.833-0.699-2.796-0.054c0,0-0.7-0.712-1.451-0.161c-0.403,0.295,0.135,1.129,0.135,1.129  s-0.78,0.86-1.103,0.86s-1.29,0.295-2.312,1.183s-1.613,0.779-2.635,0.914c-1.021,0.134-2.93,0.107-4.408-0.108  c-1.479-0.215-2.446-0.726-3.709-0.484c-1.264,0.242-3.36,0.242-4.946,2.608c-1.586,2.365-1.344,5.08-1.613,6.451  c-0.269,1.371-0.726,3.252-2.07,3.816c-1.344,0.564-1.613-0.914-1.559-1.397c0.054-0.483,0.108-0.887,0.108-0.887  s0.645,0.295,0.672-0.564c0.027-0.86-1.209-1.156-1.909-0.296C-0.036,20.556,0.152,22.84,1.684,23.7z M29.801,8.97  c0,0,0.027-0.108,0.135-0.35c0.107-0.242,0.726-0.188,0.726-0.188c-0.054,0.107-0.322,0.403-0.431,0.403  C30.123,8.835,29.801,8.97,29.801,8.97z M27.624,8.54c0,0,0.618-0.054,0.726,0.188c0.107,0.242,0.134,0.35,0.134,0.35  s-0.322-0.134-0.43-0.134S27.678,8.647,27.624,8.54z";
        this.anteater = "M6.4,51.4c6.6-8.9,20.7-5,30.5-10.7c4.5-2.6,9.1-4.5,13.7-5.5c3.4-1.1,7-1.4,10.6-0.7l2.3,0.5l0,0c2.2,0.5,4.3,1.3,6.3,2.4  l8.5,4.2v0l9.8,4.9c2.6,1.4,5.1,3.2,7.2,5.3v0.8l-0.6,0.4c0,0,0,0,0,0l-0.1,0.1c-0.4,0.3-1,0.3-1.4,0L92.9,53c0,0,0,0,0,0l0,0  c-2-1.4-4.3-2.4-6.8-3h-3.5c-0.8,0-1.5-0.2-2.1-0.6h-4.3c-2.5,0-4.6,1.5-5.6,3.6l0.5,0.4l-0.7,0.2c0,0.1-0.1,0.2-0.1,0.3l1.2,0.9  L70.5,55l0,0l1.5,1.1l-1.1,0.3l0,0l1.5,1.1l-1.1,0.3l0,0l1.5,1.1l-1.1,0.3l0,0l1.5,1.1L72,60.6l0,0l1.5,1.1L72.3,62l0,0l3.4,1.7  l0,1.3H68l-0.2-0.7l-1,0.6l0.2-1.8l0,0l-1,0.6l0.2-1.8l0,0l-1,0.6l0.2-1.8l0,0l-1,0.6l0.2-1.8l0,0l-1,0.6l0.2-1.8l0,0l-1,0.6  l0.2-1.8l0,0l-1,0.6l0.2-1.9l0,0l-0.5,0.3l-1.7,6.2l2.1,1.5v1.1h-7.4l0.2-3l-0.2-9l-1-0.7l-0.1,0l0.1,1.1l-1.4-1l-0.1,0l0.1,1.1  l-1-0.7l-0.3,0.4l-3.5,10.5l1.9,1v1.1h-6l-3.4-13.5l0,0L39.9,51c-0.2-1.1-0.3-2.2-0.2-3.2c-0.2,0.1-0.4,0.1-0.6,0.2L37,54.6v-5.1  l-2.1,6.8v-5L32.7,58v-5.2l-2.1,6.8v-5.1l-2.2,7.1v-6l-2,6.4v-6l-2,6.4v-6.5c0,0,0,0,0,0l-2.1,6.7v-6.6c0,0,0,0,0,0l-2.1,6.5v-6.3  l-2,6v-6.4l-2,6.1v-6.4c0,0,0,0,0,0l-1.9,6l0.1-6.3c0,0-0.1,0-0.1,0l-1.7,6.1L12,54.7c-0.1,0-0.1,0-0.2,0l-1.2,6.2l-0.8-6.5  l-1.4,5.7L8,53.7l-1.9,5.4l0.1-4.8L5,57.9C5,57.9,4.1,54.7,6.4,51.4z";
        this.ddeer = "M87.4,5.3c-0.5-1.1,0.2-5.7-1.1-3.8c-1.3,1.9,0.6,6.1,0,7.5c-0.6,1.3-2.7,2.7-2.7,2.7s-1.5-1.5-2.5-2.3   c-1-0.8-0.2-3.1-1.3-3.1c-1.1,0-1.2,3.1,0.4,4.6c1.3,1.2,2.2,3.2,2.2,3.2c0.3,5.5-6.7,6.6-6.7,6.6s0.7-3.2-0.4-5.3   c-1.1-2.1-2-1.5-1.3,1.9c0.5,2.8-1,6-1.6,7.1c-0.7-0.2-1.6-0.3-2.5-0.3c-0.8,0-1.6,0.1-2.2,0.2c-0.6-1.1-2.1-4.2-1.5-7   c0.7-3.4-0.3-4-1.3-1.9c-1.1,2.1-0.4,5.3-0.4,5.3s-7-1.1-6.7-6.6c0,0,1-1.9,2.2-3.2c1.6-1.6,1.5-4.6,0.4-4.6   c-1.1,0-0.4,2.3-1.3,3.1c-1,0.8-2.5,2.3-2.5,2.3s-2.1-1.3-2.7-2.7c-0.6-1.3,1.3-5.5,0-7.5c-1.3-1.9-0.7,2.7-1.1,3.8   c-0.6,1.5-1.6,3.3,1,6.8c0.9,1.2,1.6,2.5,2,3.9c0.7,2.5,2.9,6.4,9.1,7.3l0.3,1.8c-0.7,0.4-1.1,0.7-1.1,0.7s-5.2-3.6-7.9-3.9   c-2.7-0.3,0.1,6.6,3.9,6.9c3.8,0.3,3.2,0.8,3.2,0.8c-1.1,3.8-1.9,8.2-2.3,9.5c0,0.1-0.1,0.3-0.2,0.4c-0.9,1.5-2.8,2.1-4.5,1.5   c-1.3-0.5-7.2,0.2-9.5,0.3c-4.6,0.2-8.4-1.1-18.9-1.7c-8.4-0.5-11.7,5.5-11.7,5.5s-3.9,3-4.2,5.7c-0.5,4,2.3,9.4,2.3,9.4   c1-2.1,1.1-2.1,1-4.3C15,53.8,16,49.8,16,49.8c-0.2,4.5,4.4,11.9,5,15.1c0.4,2.4-0.8,8.7-3.2,12.8c-0.7,1.2-0.8,2.6-0.3,3.8   l3.3,8.8l0,0l1.2,6.3h1.1L24,99h5.2c0.2,0,0.4-0.3,0.3-0.5c-0.6-1-2.1-3.5-2.6-4.7c-0.6-1.5-3.8-8.4-3.8-10.7c0-0.2,0-0.3,0-0.5   c0.1-2.3,1.1-4.5,2.6-6.3c6-7.2,9.8-11.6,9.8-11.6s9.3,0.6,17.2,0.4c0.3,0.7,0.7,1.4,1.1,2.1c1.6,2.8,5,16.4,5,17.2   c0,0.8,1.2,11.4,1.7,12.2c0.6,0.8,1.5,2.5,3.2,2.3c1-0.1,2.2-0.1,3-0.1c0.3,0,0.5-0.4,0.2-0.6c-1.2-1.1-3.5-3.4-3.5-5.1   c0-2.3-1.1-6.9-1-11.6c0.2-3.9-1-13.4-0.7-18.3c2.8-1.1,4.4-2.4,4.4-2.4C74,57.4,75.9,47.6,76.4,43c-2.6,1-4.5-0.4-4.5-0.4   c4.4,0.1,4.6-1.8,4.6-2c0,0,0,0,0,0c1.1-1.4,1.3-2.7,1.3-2.7l-0.8-4.6c1.3-2.3,1-3.7,1-3.7c5.3-2.5,4.2-7.1,4.2-7.1L76,25.8   c0,0-0.3-0.3-1-0.6l0.3-1.9c6.2-0.9,8.3-4.8,9.1-7.3c0.4-1.4,1.1-2.7,2-3.9C89,8.6,88,6.7,87.4,5.3z M21.9,47.8   c-0.8,0.2-1.5-0.1-1.6-0.6c-0.1-0.5,0.4-1.1,1.2-1.2c0.8-0.2,1.5,0.1,1.6,0.6C23.2,47.1,22.6,47.6,21.9,47.8z M28.7,45   c-1.3-0.1-2.3-0.9-2.2-1.7c0.1-0.9,1.2-1.5,2.5-1.4c1.3,0.1,2.3,0.9,2.2,1.7C31.1,44.5,30,45.1,28.7,45z M31.2,50   c-0.8,0-1.4-0.4-1.4-0.9c0-0.5,0.6-0.9,1.4-0.9s1.4,0.4,1.4,0.9C32.6,49.6,32,50,31.2,50z M37,46.9c-0.8,0-1.4-0.4-1.4-0.9   c0-0.5,0.6-0.9,1.4-0.9c0.8,0,1.4,0.4,1.4,0.9C38.4,46.5,37.8,46.9,37,46.9z M42.8,45.7c-1.1,0-2-0.6-2-1.3c0-0.7,0.9-1.3,2-1.3   c1.1,0,2,0.6,2,1.3C44.9,45.1,43.9,45.7,42.8,45.7z M48.6,50c-0.8,0-1.4-0.4-1.4-0.9c0-0.5,0.6-0.9,1.4-0.9s1.4,0.4,1.4,0.9   C50,49.6,49.3,50,48.6,50z M53.3,44.1c0.8,0,1.4,0.4,1.4,0.9c0,0.5-0.6,0.9-1.4,0.9c-0.8,0-1.4-0.4-1.4-0.9   C51.8,44.5,52.5,44.1,53.3,44.1z M65.7,32.2c-0.8-0.4-0.8-1.7-0.8-1.7s1.6-1.1,2.6,0.9C67.5,31.4,66.7,32.6,65.7,32.2z M75.6,38.4   l-0.1-0.4c0.1-0.2,0.1-0.6-0.4-0.2c-0.5,0.4,0,1,0,1s-0.3,0.6-1.1,0.5c-0.8-0.1-1-0.4-1-0.4s0.4-0.4,0.3-0.6   c-0.2-0.2-0.8-0.8-0.9-0.5c-0.1,0.3,0.1,0.7,0.1,0.7l-0.1,0.3c0,0-0.7-0.7-0.5-1.1c0.2-0.4,2.1-1,3.3-0.5   C76.6,37.4,75.6,38.4,75.6,38.4z M76.2,30.6c0.8-0.2,1.3,0.4,1.3,0.4s-0.8,2-2.2,0.8C75.3,31.8,75.3,30.9,76.2,30.6z";
        this.tree = "M101 39c1,-23 31,-35 48,-17 0,-29 45,-30 44,1 21,-19 50,17 35,26 22,6 28,26 8,37 14,10 -1,32 -18,27 0,13 -17,20 -30,12 -3,4 -10,6 -18,7 -4,57 -74,89 -67,134 1,10 0,27 8,32 9,4 24,11 24,11l-38 -5 3 11c-8,-1 -25,-10 -30,-12l-38 2c11,-4 26,-12 24,-13 1,-3 6,-24 19,-48 11,-30 7,-41 -13,-66 -1,1 -2,1 -3,0 -2,9 -12,11 -17,5 -5,9 -21,4 -20,-6 -13,2 -19,-10 -13,-21 -10,0 -14,-28 2,-26 -14,-15 4,-31 17,-16 -1,-15 17,-20 27,-10 9,-10 29,2 27,16 14,-1 8,16 2,21 5,7 0,16 -7,19 2,4 -2,11 -7,15 10,11 20,26 23,44 22,-27 33,-61 33,-95 -9,-1 -18,-7 -18,-15 -15,0 -44,-12 -24,-26 -20,-14 -9,-47 17,-44zm60 93c-10,-1 -18,-4 -20,-10 -2,1 -4,2 -6,2 0,25 -2,51 -8,57 23,-15 33,-28 34,-49z";
        this.bustard = "M80.554,11.054c-2.542-0.753-4.99-1.412-4.99-1.412s-1.6-2.541-4.519-3.106c-2.919-0.564-4.048,0.377-5.273,1.978  c-1.224,1.601-2.448,5.367-2.73,9.039c-0.283,3.673,1.13,5.18,2.259,6.215c1.131,1.036,2.731,2.073,2.637,4.614  c-0.095,2.542-0.659,4.426-0.659,4.426s-3.107-3.578-8.382-1.506c0,0-3.577-0.095-7.437,2.824  c-3.861,2.92-9.323,7.815-14.783,13.465c-5.462,5.651-6.781,7.723-9.793,10.736c-3.014,3.013-4.355,4.703-7.343,6.494  c-0.472,0.283-3.108,1.036-3.108,1.036s3.296,0.094,7.251-2.448c0,0-0.754,1.695-3.108,2.636c0,0,3.295-0.472,5.179-2.072  c0,0-3.296,3.765-11.205,4.707c0,0,4.614,0.094,8.851-1.695c0,0-1.317,1.789-4.143,3.108c0,0,3.954-1.412,5.556-2.919  c1.6-1.506,4.519-3.39,4.519-3.39s-1.506,2.825-0.847,2.92c0.661,0.094,1.695-0.094,1.695-0.094s-0.094,1.883,0.472,2.07  c0.564,0.189,2.448-1.317,3.295-2.07c0.724-0.644,1.854-1.831,2.169-2.164c0.893,0.114,1.927,0.288,2.82,0.563  c3.671,1.13,6.025,2.448,8.473,3.39c0.272,0.105,0.523,0.214,0.763,0.323c0.041,0.637,0.155,1.215,0.274,1.653  c0.284,1.037,2.072,4.99,3.766,9.698c1.696,4.708,1.884,6.309,1.79,7.345l-2.072-0.378c0,0,2.166,0.847,2.919,1.789  c0.753,0.942,2.825,3.485,2.825,3.485l0.847,1.317c0,0-0.283-1.13-1.036-2.448c-0.753-1.317-0.848-1.412-0.753-1.977  c0.095-0.565,0.47-0.942-0.566-1.695c-1.036-0.753-1.411-1.601-1.411-1.601s-1.884-5.838-3.014-9.51  c-0.897-2.915-1.727-5.169-2.081-6.873c0.896,0.574,1.326,1.037,1.326,1.037c0.376,0.848,0.66,1.695,0.66,1.695l0.47-1.131  c0,0,1.6,1.131,2.542,1.6c0.942,0.47,2.166,0.565,2.166,0.565s-0.377-0.565-1.036-0.941c-0.659-0.377-2.73-1.789-2.73-1.789  s0.564-0.472,1.412-0.565c0.847-0.095,2.164,0.753,2.164,0.753l-0.941-1.13c-1.506-0.564-2.072,0-3.861-0.283  c-0.535-0.084-1.368-0.398-2.329-0.817c-0.006-0.072-0.02-0.151-0.024-0.22c-0.095-1.789,1.036-4.425,1.788-6.684  c0,0,1.696-0.753,3.579-1.223c1.882-0.472,2.542-0.659,4.048-2.542c1.508-1.884,3.014-4.05,3.767-6.026  c0.753-1.978,1.13-3.956,2.448-4.615c1.317-0.659,4.706-3.105,6.59-7.531c1.883-4.425,1.694-9.415,1.506-12.24  c-0.189-2.825-0.566-5.367-1.978-6.498c-1.411-1.13-2.542-1.317-3.107-2.919c-0.564-1.601-0.094-4.236,2.26-4.99  c2.354-0.754,3.859-0.565,5.367-0.376c1.507,0.188,2.072,0,2.072,0s2.825,0.376,4.519,0.376c1.696,0,3.109,0.094,3.109,0.094  S83.096,11.807,80.554,11.054z M48.636,65.948c-0.304,0.646-0.435,1.32-0.47,1.965c-1.985-0.929-4.181-2.049-5.465-2.53  c-1.566-0.588-3.473-1.482-4.509-1.982c0.563-0.289,1.199-0.632,1.874-1.031c2.07-1.225,6.403-3.578,7.062-4.049  c0,0-0.283,1.883-0.283,2.825s-0.188,1.978-0.188,1.978s2.072-0.848,2.919-1.13C49.577,61.994,49.388,64.347,48.636,65.948z";
        this.duck = "M31.492,9.599c-0.635,0.023-2.293-0.635-2.791-0.749c-0.5-0.113-2.369-0.082-3.096-0.235  c-0.727-0.15-2.178-0.332-2.604,1.333c-0.424,1.664,0.848,2.936,2.027,3.903c1.182,0.967,4.844,2.846,4.449,6.296  s-1.965,3.632-3.963,3.813s-15.467,0.545-18.04-0.182s-3.481-3.209-4.208-4.177c-0.726-0.968-1.543-1.847-1.543-1.847  C0.151,16.666,0,15.063,0,15.063c3.45,1.151,5.539,0.877,5.539,0.877c-0.454-0.242-0.514-0.847-0.514-0.847  c0.514,0.363,1.393,0.515,1.393,0.515c-0.877-0.514-0.636-1.423-0.636-1.423c1.786,0.817,2.784,0.756,2.784,0.756  C7.839,14.546,7.87,13.61,7.87,13.61c0.969,0.636,2.663,0.967,3.633,0.847c0.968-0.121,4.57-0.878,7.808,0.242  c3.236,1.121,5.084,4.055,5.084,4.055c0.453-1.302-0.908-2.692-2.361-4.418c-1.453-1.725-1.453-3.57-1.24-4.842  c0.213-1.271,1.785-3.331,3.48-4.238c1.695-0.908,3.883-0.197,4.602,0.484c0.357,0.338,0.574,0.772,0.756,1.316  c0.182,0.545,0.658,0.863,1.748,1.635C32.469,9.463,32.129,9.577,31.492,9.599z M5.895,23.93c5.471,6.996,15.171,0.939,15.171,0.939  C11.155,28.567,7.069,25.277,5.895,23.93z M5.895,23.93c-0.131-0.166-0.261-0.332-0.386-0.514  C5.509,23.416,5.627,23.623,5.895,23.93z M29.215,22.343c-0.016-0.23-0.037-0.379-0.037-0.379  C29.201,22.103,29.197,22.209,29.215,22.343z M20.521,25.897c0,0,9.76,4.483,8.693-3.555C29.295,23.716,28.979,28.335,20.521,25.897  z M1.272,23.476c0.484,3.995,5.387,2.665,5.387,2.665C1.938,26.081,1.272,23.476,1.272,23.476z M14.953,27.652  c3.573,3.753,9.02-0.182,9.02-0.182C17.979,29.952,14.953,27.652,14.953,27.652z";
        this.tocan = "M87.7,44.8c-8.5-5.3-18.2-6.2-18.2-6.2h-1c-1.3,0-2.5-0.8-2.9-2l-0.3-0.8v8.1c0,3.3-1.3,6.6-3.7,8.9l-2,1.9c0,0,0,0,0,0l0,0  l0,0c-1.6,1.6-3.5,2.8-5.6,3.7l-6.3,2.6l-4.4,7.2c-0.5,0.8-1.1,1.4-1.9,1.7l2.8,4.4h4l1.4,1.7H39l1.1-1.7h1.8l-2.6-4c0,0,0,0,0,0  c-1.8,0-3.5-1.1-4.2-2.7l-1.6-3.6l-3.2-0.9l-3,0.9c-0.6,0.2-1.2,0.2-1.8,0.1l-14.2,9.2c-2,1.3-4.7,0.7-6-1.4L22,59.5l-0.4-1.4  l26-19.8v-1.2c0-7.3,6-13.3,13.3-13.3h2.8l2.6,2H68c0.1,0,0.3,0,0.4,0l0,0c17,0,29,15.2,25.8,23.2c0,0,0,0,0,0  c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0,0,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1-0.1,0.1  c0,0,0,0,0,0c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.2,0.3-0.5,0.6-0.7,0.7  v-1C92.9,48.2,87.7,44.8,87.7,44.8z";
        this.cobra = "M56.89,56a77.2,77.2,0,0,1-11,.89l-2.38,7.75c-.6,8,10.72,5.06,13.11,5.06s10.13-3,10.13-3l-4.47,2.68c-4.47,2.68-9.53,3.28-16.09,3.28s-5.66-8.34-5.36-10.13,4.47-13.11,4.47-13.11C53,32.09,50.48,27.59,45,20.58c-3.28-4.17-11.32-7.75-13.4-8s-7.45-.6-7.45-.6a11.31,11.31,0,0,0-5.66,2.38c-3,2.38-4.17,2.18-4.17,6.55a1,1,0,0,0,.13.53,14.3,14.3,0,0,1-4.36,1.19H7.18l1.57,1L8,25s3.67-1,4.45-1.31c.51-.17,2.52-1,3.9-1.55.8.09,1.89.16,3.33.27l4.17.6,4.4.69c6.27-.32,8.72,3.13,9.56,4.91-.71,0-1.61,0-2.75.15a12.47,12.47,0,0,1-5.68-.78c-.17-1-.37-1.82-.55-2.47-1.83-.88-5-2.5-5-2.5C27.1,31.3,27.1,40.83,27.7,48.28h0c.29-1.27.58-2.5.88-3.68,0-.19.09-.38.13-.57,2.46,1.51,7.24,1.72,10.1,1.69-.31,1.26-.66,2.52-1,3.78-.7,0-1.53,0-2.51,0a16.92,16.92,0,0,1-7.5-1.34c1.45,2.07,6.12,2.59,9.57,2.68-.41,1.28-.85,2.55-1.29,3.8l-1.44,0a16.92,16.92,0,0,1-7.5-1.34c1.3,1.86,5.19,2.47,8.46,2.64-.46,1.31-.91,2.59-1.34,3.86l-.81,0a17.33,17.33,0,0,1-7.27-1.24l.51-3.44s-11.17-2.51-15.93-.42c-1.93.84-7.12,2.34-5.36,12,1.44,7.94,22.52,9.55,22.52,9.55a16.2,16.2,0,0,1-.79-2c1.15,1.37,3.77,2,6.4,2.3a34,34,0,0,0,1.69,4,16.46,16.46,0,0,1-6-1.34c1.06,1.51,3.84,2.2,6.61,2.5a42.52,42.52,0,0,0,2.5,4.09,11.33,11.33,0,0,1-3.62-1.14C35.44,85.9,37.12,86.57,39,87l0,0c5.35,1.74,11.41,1,17,.3,15.2-1.83,19.73-10,20.07-14.41s-4.13-10-4.13-10C69.56,60.49,62.25,55.13,56.89,56ZM23,18.93a1.44,1.44,0,1,1,1.44-1.44A1.44,1.44,0,0,1,23,18.93Zm2.74,45c1.18,1.41,3.93,2,6.63,2.32a17.17,17.17,0,0,0-.22,4,17.77,17.77,0,0,1-6.13-1A45,45,0,0,1,25.77,64Zm4.11-30.29c2.44,1.84,7.89,1.52,9.85,1.34a23.13,23.13,0,0,1,.11,4.19,38,38,0,0,0-4.42,0,18,18,0,0,1-5.76-.71A40.49,40.49,0,0,0,29.88,33.68Zm8.44-3.77a17.23,17.23,0,0,1,1.22,3.87,23.4,23.4,0,0,0-4.16.11,12.52,12.52,0,0,1-5.51-.71,36,36,0,0,0-.43-4.76C31.48,30.06,35.86,30.07,38.32,29.92ZM35.07,44.37a17.91,17.91,0,0,1-6.25-.86,44.33,44.33,0,0,0,.76-4.37c2.77,1.34,7.59,1.45,10.15,1.39a37.09,37.09,0,0,1-.62,3.84C38.19,44.32,36.89,44.29,35.07,44.37ZM25.91,60.55c0-.37,0-.58,0-.58l.17-1.13c1.37,1.56,4.69,2.15,7.67,2.35-.43,1.35-.82,2.66-1.14,3.93a17.24,17.24,0,0,1-6.88-1.27c0-.35,0-.7,0-1-2.65-.14-8.87-.77-12.09-3.53C13.7,59.3,21.41,61.55,25.91,60.55ZM27,74.2a26.46,26.46,0,0,1-.92-4.38c1.44,1,3.84,1.47,6.17,1.68a24,24,0,0,0,.83,4A16.9,16.9,0,0,1,27,74.2Z";
        this.tbird = "M81.699,37.625c-0.824-0.674-1.273-1.685-1.797-3.594c-0.524-1.984,0.075-3.894-1.31-5.916  c-1.648-2.359-5.954-2.846-8.463-2.397c-1.498,0.262-2.846,0.636-5.429,1.76c-1.535,0.636-3.033,1.31-4.231,1.759  c-2.022,0.749-2.921,0.524-4.868-0.636c-1.161-0.674-2.696-2.209-4.194-3.931c-5.729-6.515-6.59-10.334-9.361-16.512  c-1.423-3.145-1.498-4.793-2.059-0.824c-0.224,1.385-0.411,2.771-0.598,4.119c-1.124-0.412-2.846-2.733-4.232-4.643  c-1.685-2.321-1.46-2.509-1.647,0.337c-0.112,2.209-0.187,4.043,0.224,6.59c-0.936-0.45-1.759-0.898-2.62-1.273  c-3.519-1.572-1.947-0.112-1.161,2.733c0.187,0.711,0.337,1.46,0.412,2.172c-0.899-0.112-1.835-0.299-2.771-0.449  c-2.696-0.524-2.134,0.15-2.172,3.22c-0.15,9.248,3.669,17.598,13.404,20.518c-4.044,4.232-13.816-0.374-19.92-3.369  c-4.081-1.985-3.669-0.786-1.011,2.508c1.535,1.947,3.632,3.857,4.605,4.606c2.284,1.759,4.681,2.696,8.986,4.119  c4.381,1.46,8.051,1.872,15.127,2.022c1.759,16.549-1.91,23.214-11.158,36.17c-1.647,2.358-2.246,2.244,0.599,2.095  c0.524,0,1.048-0.036,1.61-0.075c0.187,1.236,0.375,2.471,0.562,3.707c1.498,10.221,7.938-13.33,8.499-15.389  c1.273-4.492,2.659-9.135,4.194-12.955c4.793-2.097,10.746-4.867,14.265-8.799c1.723-1.909,2.884-4.043,4.156-7.002  c1.385-3.145,1.648-8.574,4.98-9.885c2.059-0.786,4.905-0.449,6.889,0.412c0.974,0.449,1.835,1.198,2.733,0.786  C84.807,39.048,82.41,38.187,81.699,37.625z";
        this.icon = "M21.25,8.375V28h6.5V8.375H21.25zM12.25,28h6.5V4.125h-6.5V28zM3.25,28h6.5V12.625h-6.5V28z";
        this.d = [{ id: "IN-AN", "C": "પોર્ટ બ્લેયર", "CM": "એ.કે. સિંઘ ચંદ્રગઢ", "GV": "" }, { id: "IN-AP", "C": "અમરાવતી", "CM": "એન ચંદ્રબાબુ નાયડુ", "GV": "ઇ.એસ.એલ નરસિમ્ભાન" }, { id: "IN-AR", "C": "", "CM": "", "GV": "" }, { id: "IN-AS", "C": "", "CM": "", "GV": "" }, { id: "IN-BR", "C": "", "CM": "", "GV": "" }, { id: "IN-CH", "C": "", "CM": "", "GV": "" }, { id: "IN-CT", "C": "", "CM": "", "GV": "" }, { id: "IN-DD", "C": "", "CM": "", "GV": "" }, { id: "IN-DL", "C": "", "CM": "", "GV": "" }, { id: "IN-DN", "C": "", "CM": "", "GV": "" }, { id: "IN-GA", "C": "", "CM": "", "GV": "" }, { id: "IN-GJ", "C": "Gandhinagar", "CM": "", "GV": "" }, { id: "IN-HP", "C": "", "CM": "", "GV": "" }, { id: "IN-HR", "C": "", "CM": "", "GV": "" }, { id: "IN-JH", "C": "", "CM": "", "GV": "" }, { id: "IN-JK", "C": "", "CM": "", "GV": "" }, { id: "IN-KA", "C": "", "CM": "", "GV": "" }, { id: "IN-KL", "C": "", "CM": "", "GV": "" }, { id: "IN-LD", "C": "", "CM": "", "GV": "" }, { id: "IN-MH", "C": "", "CM": "", "GV": "" }, { id: "IN-ML", "C": "", "CM": "", "GV": "" }, { id: "IN-MN", "C": "", "CM": "", "GV": "" }, { id: "IN-MP", "C": "", "CM": "", "GV": "" }, { id: "IN-MZ", "C": "", "CM": "", "GV": "" }, { id: "IN-NL", "C": "", "CM": "", "GV": "" }, { id: "IN-OR", "C": "", "CM": "", "GV": "" }, { id: "IN-PB", "C": "", "CM": "", "GV": "" }, { id: "IN-PY", "C": "", "CM": "", "GV": "" }, { id: "IN-RJ", "C": "", "CM": "", "GV": "" }, { id: "IN-SK", "C": "", "CM": "", "GV": "" }, { id: "IN-TG", "C": "હૈદરાબાદ", "CM": "કે. ચંદ્રશેખર રાવ", "GV": "" }, { id: "IN-TN", "C": "", "CM": "", "GV": "" }, { id: "IN-TR", "C": "", "CM": "", "GV": "" }, { id: "IN-UP", "C": "", "CM": "", "GV": "" }, { id: "IN-UT", "C": "", "CM": "", "GV": "" }, { id: "IN-WB", "C": "", "CM": "", "GV": "" }];
        this.are = [{ "id": "1", "color": "#80aaff" }, { "id": "2", "color": "#bf80ff" }, { "id": "3", "color": "#ff9f80" }, { "id": "4", "color": "#ff8080" }, { "id": "5", "color": "#ff80ff" }, { "id": "6", "color": "#ff80aa" }, { "id": "7", "color": "#990000" }, { "id": "8", "color": "#9fdf9f" }, { "id": "9", "color": "#4d004d" }, { "id": "10", "color": "#996600" }, { "id": "11", "color": " #e69900" }, { "id": "12", "color": " #ffc34d" }, { "id": "13", "color": "#b3c6ff" }, { "id": "14", "color": " #80ffdf" }, { "id": "15", "color": "#806000" }, { "id": "16", "color": "#b3b300" }, { "id": "17", "color": "#80ffff" }, { "id": "18", "color": "#F0B67F" }, { "id": "19", "color": "#00b3b3" }, { "id": "20", "color": "#99ffff" }, { "id": "21", "color": " #336600" }, { "id": "22", "color": "#73e600" }, { "id": "23", "color": "#993366" }, { "id": "24", "color": "#df9fbf" }, { "id": "25", "color": "#3b00b3" }, { "id": "26", "color": "#aa80ff" }, { "id": "27", "color": "#990000" }, { "id": "28", "color": "#ff8080" }, { "id": "29", "color": "#ccccb3" }, { "id": "30", "color": "#b35900" }, { "id": "31", "color": "#cc9900" }, { "id": "32", "color": "#ffdf80" }, { "id": "33", "color": "#bfff80" }, { "id": "34", "color": " #ffb3ff" }];
        this.chid = [];
        this.i = [];
        this.c = [];
        this.s = [];
        this.a = [];
        this.allQue1 = [];
        this.allQue2 = [];
        this.allQue3 = [];
        this.show = false;
        this.sortByWordLength = function (a) {
            return a.question.length;
        };
        this.searchableList = ['question', 'correctanswer'];
    }
    // sid: any;
    ChartComponent.prototype.whatever = function (a) {
        //this.queryString = null;
        this.queryString = a;
    };
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getallquestions().subscribe(function (data) { return _this.Questions = data; });
        this.getmap();
        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        /**
         * SVG path for plane icon
         */
        var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
        /**
         * Create the map
         */
    };
    ChartComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    ChartComponent.prototype.getmap = function () {
        var _this = this;
        var that = this;
        this.chart = this.AmCharts.makeChart("mapdiv1", {
            "type": "map",
            "addClassNames": true,
            "fontSize": 15,
            "projection": "mercator",
            "backgroundAlpha": 5,
            // "backgroundColor":"#00bcd4",
            //"backgroundImage":"../../../assets/images/water.gif",
            "dataProvider": {
                "map": "Gujarat",
                "getAreasFromMap": true,
                "images": this.i,
                // "areas": this.are,
                "lines": this.c,
            },
            "balloon": {
                "horizontalPadding": 5,
                "borderAlpha": 3,
                "borderThickness": 1,
                "verticalPadding": 5,
                "textAlign": "left"
            },
            "areasSettings": {
                "autoZoom": true,
                "outlineColor": "#000000",
                "color": "#ffffff",
                "rollOverColor": "#99ccff",
            },
            "imagesSettings": {
                "balloonText": "[[customData]]",
                rollOverScale: 3,
                selectedScale: 3,
                color: "#585869",
                rollOverColor: "#585869",
                selectedColor: "#585869",
                pauseDuration: 0.6,
                animationDuration: 4.5,
                adjustAnimationSpeed: true,
            },
            "linesSettings": {
                // "arc": 0.2, // this makes lines curved. Use value from -1 to 1
                "color": "rgba(139,133,,33,1)",
                "alpha": 0.4,
            },
            "zoomControl": {
                "zoomControlEnabled": true,
                "homeButtonEnabled": true,
                "panControlEnabled": true,
                "left": 38,
                "minZoomLevel": 0.25,
                "gridHeight": 100,
                "gridAlpha": 0.1,
                "gridBackgroundAlpha": 0,
                "gridColor": "#FFFFFF",
                "draggerAlpha": 1,
                "buttonCornerRadius": 2
            },
            //"ValueLegend": { "enabled": true }
            "export": {
                "enabled": true,
                "menu": [{
                        "class": "export-main",
                        "menu": [{
                                "label": "Download",
                                "menu": ["PNG", "JPG", "CSV"]
                            }, {
                                "label": "Annotate",
                                "action": "draw",
                                "menu": [{
                                        "class": "export-drawing",
                                        "menu": ["PNG", "JPG"]
                                    }]
                            }]
                    }]
            }
        });
        this.AmCharts.updateChart(this.chart, function () {
            _this.chart.addListener("clickMapObject", function (event) {
                var a = event.mapObject.title;
                that.whatever(a);
            });
        });
    };
    ChartComponent.prototype.abhiyaran = function () {
        this.c = [];
        this.i = [
            {
                svgPath: this.bustard,
                "scale": 0.4,
                title: "Kutch Bustard Sanctuary",
                color: "#000000",
                latitude: 23.183306,
                longitude: 68.732907,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.duck,
                "scale": 1.3,
                title: "Bird Sanctuary Porbandar ",
                color: "#000000",
                latitude: 21.651200,
                longitude: 69.608588,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.tocan,
                "scale": 0.4,
                title: "Khijadiya Bird Sanctuary",
                color: "#000000",
                latitude: 22.514266,
                longitude: 70.154098,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.cobra,
                "scale": 0.4,
                title: "Hingolgadh Nature Education Sanctuary",
                color: "#000000",
                latitude: 22.153105,
                longitude: 71.317116,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.tbird,
                "scale": 0.4,
                title: "Thol Wildlife Sanctuary",
                color: "#000000",
                latitude: 23.137287,
                longitude: 72.406581,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.leopard,
                "scale": 0.4,
                title: "Rampara wildlife senctuary",
                color: "#000000",
                latitude: 22.530237,
                longitude: 70.955411,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.bear,
                "scale": 0.4,
                title: "Ratanmahal Sloth Bear Sanctuary",
                color: "#000000",
                latitude: 22.576425,
                longitude: 74.114001,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.flamingo,
                "scale": 0.4,
                title: "Nal Sarovar Bird Sanctuary",
                color: "#000000",
                latitude: 22.788881,
                longitude: 72.040891,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.leopard,
                "scale": 0.4,
                title: "Jambughoda Wildlife Sanctuary",
                color: "#000000",
                latitude: 22.360990,
                longitude: 73.665394,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.leopard,
                "scale": 0.4,
                title: "Vansda National Park",
                color: "#000000",
                latitude: 20.763832,
                longitude: 73.486094,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.lion,
                "scale": 0.3,
                title: "Gir Abhiyaran",
                color: "#000000",
                latitude: 21.124305,
                longitude: 70.824151,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.deer,
                "scale": 0.3,
                title: "Blackbuck National Park",
                color: "#000000",
                latitude: 22.044268,
                longitude: 72.020514,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.jelyfish,
                "scale": 0.3,
                title: "Marine National Park",
                color: "#000000",
                latitude: 22.744288,
                longitude: 69.955034,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.flamingo,
                "scale": 0.4,
                title: "Kutch Desert Wildlife Sanctuary",
                color: "#000000",
                latitude: 24.045429,
                longitude: 70.145581,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.gudkar,
                "scale": 0.3,
                title: "Wild Ass Sanctuary",
                color: "#000000",
                latitude: 23.461821,
                longitude: 71.287421,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.anteater,
                "scale": 0.4,
                title: "Shoolpaneshwar Wildlife Sanctuary",
                color: "#000000",
                latitude: 21.760622,
                longitude: 73.794852,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.bear,
                "scale": 0.3,
                title: "Balaram Ambaji Wildlife Sanctuary",
                color: "#000000",
                latitude: 24.271860,
                longitude: 72.505409,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.jelyfish,
                "scale": 0.3,
                title: " 	Marine Sanctuary Dwarka",
                color: "#000000",
                latitude: 22.388141,
                longitude: 69.197668,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.ddeer,
                "scale": 0.3,
                title: " Barda Wildlife Sanctuary ",
                color: "#000000",
                latitude: 21.813522,
                longitude: 69.711435,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.tree,
                "scale": 0.1,
                title: " Purna Wildlife Sanctuary",
                color: "#000000",
                latitude: 20.943377,
                longitude: 73.724259,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
        ];
        // this.chart.validateData();
        this.getmap();
    };
    ChartComponent.prototype.port = function () {
        this.queryString = 'વડોદરા';
        this.i = [];
        this.a = [0.80, 0.80, 0.80, -0.80];
        this.c = [
            {
                "id": "line1",
                "arc": 0.85,
                "alpha": 0.9,
                "color": "#000000",
                "latitudes": [23.2324, 22.8306, 23.2245, 23.1504,],
                "longitudes": [69.4171, 70.2312, 70.9416, 71.2346,]
            },
            {
                "id": "line2",
                "arc": -0.60,
                "alpha": 0.9,
                "color": "#000000",
                "latitudes": [23.1504, 22.5289, 22.3998, 22.4768],
                "longitudes": [71.2346, 70.6133, 70.3914, 69.7243]
            },
            {
                "id": "line3",
                "arc": 0.80,
                "alpha": 0.9,
                "color": "#000000",
                "latitudes": [22.4768, 21.5186, 20.979, 20.9217, 21.8568, 22.3819],
                "longitudes": [69.7243, 70.3542, 70.8441, 71.7521, 72.4668, 72.6219]
            },
            {
                "id": "line4",
                "arc": 0.45,
                "alpha": 0.9,
                "color": "#000000",
                "latitudes": [22.3819, 21.7176, 21.4838, 21.2765, 20.9722, 20.5502],
                "longitudes": [72.6219, 72.859, 72.8984, 72.8737, 72.9906, 73.0675]
            },
        ];
        this.i = [
            {
                "svgPath": this.lhouse,
                "title": " Marolli",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 20.5502,
                "longitude": 73.0675,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": " Vansi borsi",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 20.9722,
                "longitude": 72.9906,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Hazira",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 21.2765,
                "longitude": 72.8737,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Magdalla",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 21.4838,
                "longitude": 72.8984,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Dahej",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 21.7176,
                "longitude": 72.859,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Dholera",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 22.3819,
                "longitude": 72.6219,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Bhavnagar",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 21.8568,
                "longitude": 72.4668,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Jafrabad",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 20.9217,
                "longitude": 71.7521,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Veraval",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 20.979,
                "longitude": 70.8441,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Porbandar",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 21.5186,
                "longitude": 70.3542,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "okha",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 22.4768,
                "longitude": 69.7243,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "sikka",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 22.3998,
                "longitude": 70.3914,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Bedi",
                "zoomLevel": 5,
                "scale": 0.9,
                "latitude": 22.5289,
                "longitude": 70.6133,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "jakhau",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.2324,
                "longitude": 69.4171,
                "info": "This is Capital",
            },
            {
                "svgPath": this.targetSVG,
                "title": "Lakpath",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.829,
                "longitude": 69.5057,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Mandvi",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.8306,
                "longitude": 70.2312,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Kandla",
                "color": "red",
                "zoomLevel": 5,
                "scale": 1.3,
                "latitude": 23.2245,
                "longitude": 70.9416,
                "info": "This is Capital",
            },
            {
                "svgPath": this.lhouse,
                "title": "Navlakhi",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.1504,
                "longitude": 71.2346,
                "info": "This is Capital",
            },
            {
                "svgPath": this.shipb,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.3,
                "positionScale": 1.8,
                "animateAngle": false
            },
            {
                "svgPath": this.shipb,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line2",
                "flipDirection": true,
                "loop": true,
                "scale": 0.3,
                "positionScale": 1.8,
                "animateAngle": false
            },
            {
                "svgPath": this.shipb,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line3",
                "flipDirection": true,
                "loop": true,
                "scale": 0.3,
                "positionScale": 1.8,
                "animateAngle": false
            },
            {
                "svgPath": this.shipb,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line4",
                "flipDirection": true,
                "loop": true,
                "scale": 0.3,
                "positionScale": 1.8,
                "animateAngle": false
            },
        ];
        this.getmap();
    };
    ChartComponent.prototype.start = function () {
        this.queryString = 'ગુજરાત';
        this.c = [];
        this.i = [
            {
                id: "14",
                "svgPath": this.targetSVG,
                "title": "Gandhinagar",
                color: "#000000",
                "scale": 0.5,
                "latitude": 23.215635,
                "longitude": 72.636941,
                "info": "This is Capital",
            },
            {
                id: "5",
                type: "circle",
                "title": "પ્લાનપુર",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 24.170050,
                "longitude": 72.445401,
                "info": "This is Capital",
            },
            {
                id: "6",
                type: "circle",
                "title": "Bhuj",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.242000,
                "longitude": 69.666932,
                "info": "This is Capital",
            },
            {
                id: "6",
                type: "circle",
                "title": "Valsad",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 20.599235,
                "longitude": 72.934245,
                "info": "This is Capital",
            },
            {
                id: "6",
                type: "circle",
                "title": "Navsari",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 20.946702,
                "longitude": 72.952035,
                "info": "This is Capital",
            },
            {
                id: "6",
                type: "circle",
                "title": "Ahmedabad",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.022505,
                "longitude": 72.571362,
                "info": "This is Capital",
            },
            {
                id: "6",
                type: "circle",
                "title": "Amreli",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.603177,
                "longitude": 71.222083,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Anand",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.564518,
                "longitude": 72.928871,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Modasa",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.462869,
                "longitude": 73.299939,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Bharuch",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.705136,
                "longitude": 72.995875,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Bhavnagar",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.764473,
                "longitude": 72.151930,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Botad",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.170423,
                "longitude": 71.668427,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Chhota Udaipur",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.308494,
                "longitude": 74.011999,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Dahod",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.837931,
                "longitude": 74.253146,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Ahwa",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 20.758450,
                "longitude": 73.686418,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Khambhalia",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.205260,
                "longitude": 69.658776,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Veraval",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 20.915898,
                "longitude": 70.362852,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Jamnagar",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.470702,
                "longitude": 70.057730,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Junagadh",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.522184,
                "longitude": 70.457877,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Nadiad",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.691585,
                "longitude": 72.863363,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Lunavada",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.130011,
                "longitude": 73.610870,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Mehsana",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.587961,
                "longitude": 72.369325,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Morbi",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.811989,
                "longitude": 70.823619,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Godhra",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.778804,
                "longitude": 73.614280,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Patan",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.849325,
                "longitude": 72.126626,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Rajkot",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.303894,
                "longitude": 70.802160,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Surendranagar",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.769842,
                "longitude": 71.678828,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Ahwa",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 20.758450,
                "longitude": 73.686418,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Vyara",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.112562,
                "longitude": 73.388553,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Surat",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.170240,
                "longitude": 72.831061,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Vadodara",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 22.307159,
                "longitude": 73.181219,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Himmatnagar",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 23.603627,
                "longitude": 72.963946,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Porbandar",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.641707,
                "longitude": 69.629265,
                "info": "This is Capital",
            },
            {
                id: "",
                type: "circle",
                "title": "Narmada",
                "zoomLevel": 5,
                "scale": 0.5,
                "latitude": 21.875718,
                "longitude": 73.559413,
                "info": "This is Capital",
            },
        ];
        this.getmap();
    };
    ChartComponent.prototype.hide = function () {
        this.i = [];
        this.c = [];
        this.getmap();
    };
    ChartComponent.prototype.toInt = function (num) {
        return +num;
    };
    return ChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChartComponent.prototype, "mapEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ChartComponent.prototype, "cusername", void 0);
ChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Button',
        template: __webpack_require__("../../../../../src/app/dashboard/charts/charts.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], ChartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/indiacharts.component.html":
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\r\n \r\n #mySidenav button {\r\n     /*position: absolute;\r\n    left: 0px;*/\r\n     position: absolute;\r\n     z-index:1000;\r\n     right:0px;\r\n    transition: 0.3s;\r\n    padding: 6px;\r\n    width: 30px;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n    color: white;\r\n   border-radius: 25px 0 0 25px;\r\n   \r\n}\r\n\r\n    </style>\r\n \r\n\r\n  <div id=\"mySidenav\">\r\n   \r\n \r\n             <button (click)=\"toggle()\" class=\"btn btn-info\" style=\"text-align: left\">\r\n               <i class=\"fa fa-cog fa-2x\"  style=\"margin-right: 20px;\"> </i> \r\n            </button>\r\n            \r\n        </div>\r\n   \r\n \r\n    \r\n   \r\n    \r\n \r\n     \r\n   \r\n\r\n <div *ngIf=\"show\" style=\"width:150px;float:right;position:absolute;z-index:1000;right: 75px;top:80px;\"> \r\n  \r\n            \r\n           \r\n              <div class=\"card\">\r\n              <div class=\"card-header\" data-background-color=\"blue\">\r\n                                    <i class=\"material-icons\">language</i>\r\n                                </div>\r\n\r\n                <div class=\"card-content\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n\r\n\r\n                  \r\n                     <div class=\"radio\">\r\n                           Capitals\r\n                            <label>\r\n                                <input type=\"radio\" (click)=\"start($event)\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"radio\">\r\n                           Centuri \r\n                            <label>\r\n                              <input (click)=\"centuri($event)\" type=\"radio\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"radio\">\r\n                           Rivers\r\n                            <label>\r\n                               <input (click)=\"rivers($event)\" type=\"radio\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"radio\">\r\n                           Coast\r\n                            <label>\r\n                               <input type=\"radio\" name=\"optionsRadios\">\r\n                            </label>\r\n                       \r\n               \r\n                        <div class=\"radio\">\r\n                            Palace \r\n                            <label>\r\n                             <input (click)=\"place($event)\" type=\"radio\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        \r\n             \r\n                        <div class=\"radio\">\r\n                           Hide \r\n                            <label>\r\n                               <input (click)=\"hide($event)\" type=\"radio\" name=\"optionsRadios\">\r\n                            </label>\r\n                        </div>\r\n                        \r\n                </div>\r\n                      </div>\r\n                  </div>\r\n                       \r\n               </div>\r\n           </div>\r\n   </div>\r\n\r\n<div class=\"container-fluid\">\r\n  \r\n                  <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            \r\n                            <div class=\"card\">\r\n                                \r\n                                <div class=\"card-content\">\r\n                                    \r\n                                 \r\n\r\n                                </div>\r\n                                 <div id=\"mapdiv1\" [style.width.%]=\"100\" [style.height.px]=\"500\"></div>\r\n                           <!-- <input type=\"text\" id=\"info\" class=\"form-control\"  [value]=\"info\" [(ngModel)]=\"filterQueryQ\"/>-->\r\n                               \r\n                                 <div id=\"info\" >\r\n                              \r\n                              </div>\r\n                               \r\n                                \r\n                        </div>\r\n                        \r\n                    </div>\r\n                    \r\n                    \r\n                    \r\n                    \r\n\r\n  \r\n                </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/indiacharts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndiaChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndiaChartComponent = (function () {
    // dataProvider: any[]=[35,40,50];
    function IndiaChartComponent(services, AmCharts, http) {
        var _this = this;
        this.services = services;
        this.AmCharts = AmCharts;
        this.http = http;
        this.sid = [];
        this.filterQueryQ = '';
        this.rowsOnPage = 5;
        this.ActivePage = 1;
        this.d = [];
        this.cap = [];
        // public targetSVG :any= "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        // public targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        // svg path for plane icon
        this.targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        this.cloud = "";
        this.planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
        this.backIconSVG = "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM27.436,17.39c0.001,0.002,0.004,0.002,0.005,0.004c-0.022,0.187-0.054,0.37-0.085,0.554c-0.015-0.012-0.034-0.025-0.047-0.036c-0.103-0.09-0.254-0.128-0.318-0.115c-0.157,0.032,0.229,0.305,0.267,0.342c0.009,0.009,0.031,0.03,0.062,0.058c-1.029,5.312-5.709,9.338-11.319,9.338c-4.123,0-7.736-2.18-9.776-5.441c0.123-0.016,0.24-0.016,0.28-0.076c0.051-0.077,0.102-0.241,0.178-0.331c0.077-0.089,0.165-0.229,0.127-0.292c-0.039-0.064,0.101-0.344,0.088-0.419c-0.013-0.076-0.127-0.256,0.064-0.407s0.394-0.382,0.407-0.444c0.012-0.063,0.166-0.331,0.152-0.458c-0.012-0.127-0.152-0.28-0.24-0.318c-0.09-0.037-0.28-0.05-0.356-0.151c-0.077-0.103-0.292-0.203-0.368-0.178c-0.076,0.025-0.204,0.05-0.305-0.015c-0.102-0.062-0.267-0.139-0.33-0.189c-0.065-0.05-0.229-0.088-0.305-0.088c-0.077,0-0.065-0.052-0.178,0.101c-0.114,0.153,0,0.204-0.204,0.177c-0.204-0.023,0.025-0.036,0.141-0.189c0.113-0.152-0.013-0.242-0.141-0.203c-0.126,0.038-0.038,0.115-0.241,0.153c-0.203,0.036-0.203-0.09-0.076-0.115s0.355-0.139,0.355-0.19c0-0.051-0.025-0.191-0.127-0.191s-0.077-0.126-0.229-0.291c-0.092-0.101-0.196-0.164-0.299-0.204c-0.09-0.579-0.15-1.167-0.15-1.771c0-2.844,1.039-5.446,2.751-7.458c0.024-0.02,0.048-0.034,0.069-0.036c0.084-0.009,0.31-0.025,0.51-0.059c0.202-0.034,0.418-0.161,0.489-0.153c0.069,0.008,0.241,0.008,0.186-0.042C8.417,8.2,8.339,8.082,8.223,8.082S8.215,7.896,8.246,7.896c0.03,0,0.186,0.025,0.178,0.11C8.417,8.091,8.471,8.2,8.625,8.167c0.156-0.034,0.132-0.162,0.102-0.195C8.695,7.938,8.672,7.853,8.642,7.794c-0.031-0.06-0.023-0.136,0.14-0.153C8.944,7.625,9.168,7.708,9.16,7.573s0-0.28,0.046-0.356C9.253,7.142,9.354,7.09,9.299,7.065C9.246,7.04,9.176,7.099,9.121,6.972c-0.054-0.127,0.047-0.22,0.108-0.271c0.02-0.015,0.067-0.06,0.124-0.112C11.234,5.257,13.524,4.466,16,4.466c3.213,0,6.122,1.323,8.214,3.45c-0.008,0.022-0.01,0.052-0.031,0.056c-0.077,0.013-0.166,0.063-0.179-0.051c-0.013-0.114-0.013-0.331-0.102-0.203c-0.089,0.127-0.127,0.127-0.127,0.191c0,0.063,0.076,0.127,0.051,0.241C23.8,8.264,23.8,8.341,23.84,8.341c0.036,0,0.126-0.115,0.239-0.141c0.116-0.025,0.319-0.088,0.332,0.026c0.013,0.115,0.139,0.152,0.013,0.203c-0.128,0.051-0.267,0.026-0.293-0.051c-0.025-0.077-0.114-0.077-0.203-0.013c-0.088,0.063-0.279,0.292-0.279,0.292s-0.306,0.139-0.343,0.114c-0.04-0.025,0.101-0.165,0.203-0.228c0.102-0.064,0.178-0.204,0.14-0.242c-0.038-0.038-0.088-0.279-0.063-0.343c0.025-0.063,0.139-0.152,0.013-0.216c-0.127-0.063-0.217-0.14-0.318-0.178s-0.216,0.152-0.305,0.204c-0.089,0.051-0.076,0.114-0.191,0.127c-0.114,0.013-0.189,0.165,0,0.254c0.191,0.089,0.255,0.152,0.204,0.204c-0.051,0.051-0.267-0.025-0.267-0.025s-0.165-0.076-0.268-0.076c-0.101,0-0.229-0.063-0.33-0.076c-0.102-0.013-0.306-0.013-0.355,0.038c-0.051,0.051-0.179,0.203-0.28,0.152c-0.101-0.051-0.101-0.102-0.241-0.051c-0.14,0.051-0.279-0.038-0.355,0.038c-0.077,0.076-0.013,0.076-0.255,0c-0.241-0.076-0.189,0.051-0.419,0.089s-0.368-0.038-0.432,0.038c-0.064,0.077-0.153,0.217-0.19,0.127c-0.038-0.088,0.126-0.241,0.062-0.292c-0.062-0.051-0.33-0.025-0.367,0.013c-0.039,0.038-0.014,0.178,0.011,0.229c0.026,0.05,0.064,0.254-0.011,0.216c-0.077-0.038-0.064-0.166-0.141-0.152c-0.076,0.013-0.165,0.051-0.203,0.077c-0.038,0.025-0.191,0.025-0.229,0.076c-0.037,0.051,0.014,0.191-0.051,0.203c-0.063,0.013-0.114,0.064-0.254-0.025c-0.14-0.089-0.14-0.038-0.178-0.012c-0.038,0.025-0.216,0.127-0.229,0.012c-0.013-0.114,0.025-0.152-0.089-0.229c-0.115-0.076-0.026-0.076,0.127-0.025c0.152,0.05,0.343,0.075,0.622-0.013c0.28-0.089,0.395-0.127,0.28-0.178c-0.115-0.05-0.229-0.101-0.406-0.127c-0.179-0.025-0.42-0.025-0.7-0.127c-0.279-0.102-0.343-0.14-0.457-0.165c-0.115-0.026-0.813-0.14-1.132-0.089c-0.317,0.051-1.193,0.28-1.245,0.318s-0.128,0.19-0.292,0.318c-0.165,0.127-0.47,0.419-0.712,0.47c-0.241,0.051-0.521,0.254-0.521,0.305c0,0.051,0.101,0.242,0.076,0.28c-0.025,0.038,0.05,0.229,0.191,0.28c0.139,0.05,0.381,0.038,0.393-0.039c0.014-0.076,0.204-0.241,0.217-0.127c0.013,0.115,0.14,0.292,0.114,0.368c-0.025,0.077,0,0.153,0.09,0.14c0.088-0.012,0.559-0.114,0.559-0.114s0.153-0.064,0.127-0.166c-0.026-0.101,0.166-0.241,0.203-0.279c0.038-0.038,0.178-0.191,0.014-0.241c-0.167-0.051-0.293-0.064-0.115-0.216s0.292,0,0.521-0.229c0.229-0.229-0.051-0.292,0.191-0.305c0.241-0.013,0.496-0.025,0.444,0.051c-0.05,0.076-0.342,0.242-0.508,0.318c-0.166,0.077-0.14,0.216-0.076,0.292c0.063,0.076,0.09,0.254,0.204,0.229c0.113-0.025,0.254-0.114,0.38-0.101c0.128,0.012,0.383-0.013,0.42-0.013c0.039,0,0.216,0.178,0.114,0.203c-0.101,0.025-0.229,0.013-0.445,0.025c-0.215,0.013-0.456,0.013-0.456,0.051c0,0.039,0.292,0.127,0.19,0.191c-0.102,0.063-0.203-0.013-0.331-0.026c-0.127-0.012-0.203,0.166-0.241,0.267c-0.039,0.102,0.063,0.28-0.127,0.216c-0.191-0.063-0.331-0.063-0.381-0.038c-0.051,0.025-0.203,0.076-0.331,0.114c-0.126,0.038-0.076-0.063-0.242-0.063c-0.164,0-0.164,0-0.164,0l-0.103,0.013c0,0-0.101-0.063-0.114-0.165c-0.013-0.102,0.05-0.216-0.013-0.241c-0.064-0.026-0.292,0.012-0.33,0.088c-0.038,0.076-0.077,0.216-0.026,0.28c0.052,0.063,0.204,0.19,0.064,0.152c-0.14-0.038-0.317-0.051-0.419,0.026c-0.101,0.076-0.279,0.241-0.279,0.241s-0.318,0.025-0.318,0.102c0,0.077,0,0.178-0.114,0.191c-0.115,0.013-0.268,0.05-0.42,0.076c-0.153,0.025-0.139,0.088-0.317,0.102s-0.204,0.089-0.038,0.114c0.165,0.025,0.418,0.127,0.431,0.241c0.014,0.114-0.013,0.242-0.076,0.356c-0.043,0.079-0.305,0.026-0.458,0.026c-0.152,0-0.456-0.051-0.584,0c-0.127,0.051-0.102,0.305-0.064,0.419c0.039,0.114-0.012,0.178-0.063,0.216c-0.051,0.038-0.065,0.152,0,0.204c0.063,0.051,0.114,0.165,0.166,0.178c0.051,0.013,0.215-0.038,0.279,0.025c0.064,0.064,0.127,0.216,0.165,0.178c0.039-0.038,0.089-0.203,0.153-0.166c0.064,0.039,0.216-0.012,0.331-0.025s0.177-0.14,0.292-0.204c0.114-0.063,0.05-0.063,0.013-0.14c-0.038-0.076,0.114-0.165,0.204-0.254c0.088-0.089,0.253-0.013,0.292-0.115c0.038-0.102,0.051-0.279,0.151-0.267c0.103,0.013,0.243,0.076,0.331,0.076c0.089,0,0.279-0.14,0.332-0.165c0.05-0.025,0.241-0.013,0.267,0.102c0.025,0.114,0.241,0.254,0.292,0.279c0.051,0.025,0.381,0.127,0.433,0.165c0.05,0.038,0.126,0.153,0.152,0.254c0.025,0.102,0.114,0.102,0.128,0.013c0.012-0.089-0.065-0.254,0.025-0.242c0.088,0.013,0.191-0.026,0.191-0.026s-0.243-0.165-0.331-0.203c-0.088-0.038-0.255-0.114-0.331-0.241c-0.076-0.127-0.267-0.153-0.254-0.279c0.013-0.127,0.191-0.051,0.292,0.051c0.102,0.102,0.356,0.241,0.445,0.33c0.088,0.089,0.229,0.127,0.267,0.242c0.039,0.114,0.152,0.241,0.19,0.292c0.038,0.051,0.165,0.331,0.204,0.394c0.038,0.063,0.165-0.012,0.229-0.063c0.063-0.051,0.179-0.076,0.191-0.178c0.013-0.102-0.153-0.178-0.203-0.216c-0.051-0.038,0.127-0.076,0.191-0.127c0.063-0.05,0.177-0.14,0.228-0.063c0.051,0.077,0.026,0.381,0.051,0.432c0.025,0.051,0.279,0.127,0.331,0.191c0.05,0.063,0.267,0.089,0.304,0.051c0.039-0.038,0.242,0.026,0.294,0.038c0.049,0.013,0.202-0.025,0.304-0.05c0.103-0.025,0.204-0.102,0.191,0.063c-0.013,0.165-0.051,0.419-0.179,0.546c-0.127,0.127-0.076,0.191-0.202,0.191c-0.06,0-0.113,0-0.156,0.021c-0.041-0.065-0.098-0.117-0.175-0.097c-0.152,0.038-0.344,0.038-0.47,0.19c-0.128,0.153-0.178,0.165-0.204,0.114c-0.025-0.051,0.369-0.267,0.317-0.331c-0.05-0.063-0.355-0.038-0.521-0.038c-0.166,0-0.305-0.102-0.433-0.127c-0.126-0.025-0.292,0.127-0.418,0.254c-0.128,0.127-0.216,0.038-0.331,0.038c-0.115,0-0.331-0.165-0.331-0.165s-0.216-0.089-0.305-0.089c-0.088,0-0.267-0.165-0.318-0.165c-0.05,0-0.19-0.115-0.088-0.166c0.101-0.05,0.202,0.051,0.101-0.229c-0.101-0.279-0.33-0.216-0.419-0.178c-0.088,0.039-0.724,0.025-0.775,0.025c-0.051,0-0.419,0.127-0.533,0.178c-0.116,0.051-0.318,0.115-0.369,0.14c-0.051,0.025-0.318-0.051-0.433,0.013c-0.151,0.084-0.291,0.216-0.33,0.216c-0.038,0-0.153,0.089-0.229,0.28c-0.077,0.19,0.013,0.355-0.128,0.419c-0.139,0.063-0.394,0.204-0.495,0.305c-0.102,0.101-0.229,0.458-0.355,0.623c-0.127,0.165,0,0.317,0.025,0.419c0.025,0.101,0.114,0.292-0.025,0.471c-0.14,0.178-0.127,0.266-0.191,0.279c-0.063,0.013,0.063,0.063,0.088,0.19c0.025,0.128-0.114,0.255,0.128,0.369c0.241,0.113,0.355,0.217,0.418,0.367c0.064,0.153,0.382,0.407,0.382,0.407s0.229,0.205,0.344,0.293c0.114,0.089,0.152,0.038,0.177-0.05c0.025-0.09,0.178-0.104,0.355-0.104c0.178,0,0.305,0.04,0.483,0.014c0.178-0.025,0.356-0.141,0.42-0.166c0.063-0.025,0.279-0.164,0.443-0.063c0.166,0.103,0.141,0.241,0.23,0.332c0.088,0.088,0.24,0.037,0.355-0.051c0.114-0.09,0.064-0.052,0.203,0.025c0.14,0.075,0.204,0.151,0.077,0.267c-0.128,0.113-0.051,0.293-0.128,0.47c-0.076,0.178-0.063,0.203,0.077,0.278c0.14,0.076,0.394,0.548,0.47,0.638c0.077,0.088-0.025,0.342,0.064,0.495c0.089,0.151,0.178,0.254,0.077,0.331c-0.103,0.075-0.28,0.216-0.292,0.47s0.051,0.431,0.102,0.521s0.177,0.331,0.241,0.419c0.064,0.089,0.14,0.305,0.152,0.445c0.013,0.14-0.024,0.306,0.039,0.381c0.064,0.076,0.102,0.191,0.216,0.292c0.115,0.103,0.152,0.318,0.152,0.318s0.039,0.089,0.051,0.229c0.012,0.14,0.025,0.228,0.152,0.292c0.126,0.063,0.215,0.076,0.28,0.013c0.063-0.063,0.381-0.077,0.546-0.063c0.165,0.013,0.355-0.075,0.521-0.19s0.407-0.419,0.496-0.508c0.089-0.09,0.292-0.255,0.268-0.356c-0.025-0.101-0.077-0.203,0.024-0.254c0.102-0.052,0.344-0.152,0.356-0.229c0.013-0.077-0.09-0.395-0.115-0.457c-0.024-0.064,0.064-0.18,0.165-0.306c0.103-0.128,0.421-0.216,0.471-0.267c0.051-0.053,0.191-0.267,0.217-0.433c0.024-0.167-0.051-0.369,0-0.457c0.05-0.09,0.013-0.165-0.103-0.268c-0.114-0.102-0.089-0.407-0.127-0.457c-0.037-0.051-0.013-0.319,0.063-0.345c0.076-0.023,0.242-0.279,0.344-0.393c0.102-0.114,0.394-0.47,0.534-0.496c0.139-0.025,0.355-0.229,0.368-0.343c0.013-0.115,0.38-0.547,0.394-0.635c0.013-0.09,0.166-0.42,0.102-0.497c-0.062-0.076-0.559,0.115-0.622,0.141c-0.064,0.025-0.241,0.127-0.446,0.113c-0.202-0.013-0.114-0.177-0.127-0.254c-0.012-0.076-0.228-0.368-0.279-0.381c-0.051-0.012-0.203-0.166-0.267-0.317c-0.063-0.153-0.152-0.343-0.254-0.458c-0.102-0.114-0.165-0.38-0.268-0.559c-0.101-0.178-0.189-0.407-0.279-0.572c-0.021-0.041-0.045-0.079-0.067-0.117c0.118-0.029,0.289-0.082,0.31-0.009c0.024,0.088,0.165,0.279,0.19,0.419s0.165,0.089,0.178,0.216c0.014,0.128,0.14,0.433,0.19,0.47c0.052,0.038,0.28,0.242,0.318,0.318c0.038,0.076,0.089,0.178,0.127,0.369c0.038,0.19,0.076,0.444,0.179,0.482c0.102,0.038,0.444-0.064,0.508-0.102s0.482-0.242,0.635-0.255c0.153-0.012,0.179-0.115,0.368-0.152c0.191-0.038,0.331-0.177,0.458-0.28c0.127-0.101,0.28-0.355,0.33-0.444c0.052-0.088,0.179-0.152,0.115-0.253c-0.063-0.103-0.331-0.254-0.433-0.268c-0.102-0.012-0.089-0.178-0.152-0.178s-0.051,0.088-0.178,0.153c-0.127,0.063-0.255,0.19-0.344,0.165s0.026-0.089-0.113-0.203s-0.192-0.14-0.192-0.228c0-0.089-0.278-0.255-0.304-0.382c-0.026-0.127,0.19-0.305,0.254-0.19c0.063,0.114,0.115,0.292,0.279,0.368c0.165,0.076,0.318,0.204,0.395,0.229c0.076,0.025,0.267-0.14,0.33-0.114c0.063,0.024,0.191,0.253,0.306,0.292c0.113,0.038,0.495,0.051,0.559,0.051s0.33,0.013,0.381-0.063c0.051-0.076,0.089-0.076,0.153-0.076c0.062,0,0.177,0.229,0.267,0.254c0.089,0.025,0.254,0.013,0.241,0.179c-0.012,0.164,0.076,0.305,0.165,0.317c0.09,0.012,0.293-0.191,0.293-0.191s0,0.318-0.012,0.433c-0.014,0.113,0.139,0.534,0.139,0.534s0.19,0.393,0.241,0.482s0.267,0.355,0.267,0.47c0,0.115,0.025,0.293,0.103,0.293c0.076,0,0.152-0.203,0.24-0.331c0.091-0.126,0.116-0.305,0.153-0.432c0.038-0.127,0.038-0.356,0.038-0.444c0-0.09,0.075-0.166,0.255-0.242c0.178-0.076,0.304-0.292,0.456-0.407c0.153-0.115,0.141-0.305,0.446-0.305c0.305,0,0.278,0,0.355-0.077c0.076-0.076,0.151-0.127,0.19,0.013c0.038,0.14,0.254,0.343,0.292,0.394c0.038,0.052,0.114,0.191,0.103,0.344c-0.013,0.152,0.012,0.33,0.075,0.33s0.191-0.216,0.191-0.216s0.279-0.189,0.267,0.013c-0.014,0.203,0.025,0.419,0.025,0.545c0,0.053,0.042,0.135,0.088,0.21c-0.005,0.059-0.004,0.119-0.009,0.178C27.388,17.153,27.387,17.327,27.436,17.39zM20.382,12.064c0.076,0.05,0.102,0.127,0.152,0.203c0.052,0.076,0.14,0.05,0.203,0.114c0.063,0.064-0.178,0.14-0.075,0.216c0.101,0.077,0.151,0.381,0.165,0.458c0.013,0.076-0.279,0.114-0.369,0.102c-0.089-0.013-0.354-0.102-0.445-0.127c-0.089-0.026-0.139-0.343-0.025-0.331c0.116,0.013,0.141-0.025,0.267-0.139c0.128-0.115-0.189-0.166-0.278-0.191c-0.089-0.025-0.268-0.305-0.331-0.394c-0.062-0.089-0.014-0.228,0.141-0.331c0.076-0.051,0.279,0.063,0.381,0c0.101-0.063,0.203-0.14,0.241-0.165c0.039-0.025,0.293,0.038,0.33,0.114c0.039,0.076,0.191,0.191,0.141,0.229c-0.052,0.038-0.281,0.076-0.356,0c-0.075-0.077-0.255,0.012-0.268,0.152C20.242,12.115,20.307,12.013,20.382,12.064zM16.875,12.28c-0.077-0.025,0.025-0.178,0.102-0.229c0.075-0.051,0.164-0.178,0.241-0.305c0.076-0.127,0.178-0.14,0.241-0.127c0.063,0.013,0.203,0.241,0.241,0.318c0.038,0.076,0.165-0.026,0.217-0.051c0.05-0.025,0.127-0.102,0.14-0.165s0.127-0.102,0.254-0.102s0.013,0.102-0.076,0.127c-0.09,0.025-0.038,0.077,0.113,0.127c0.153,0.051,0.293,0.191,0.459,0.279c0.165,0.089,0.19,0.267,0.088,0.292c-0.101,0.025-0.406,0.051-0.521,0.038c-0.114-0.013-0.254-0.127-0.419-0.153c-0.165-0.025-0.369-0.013-0.433,0.077s-0.292,0.05-0.395,0.05c-0.102,0-0.228,0.127-0.253,0.077C16.875,12.534,16.951,12.306,16.875,12.28zM17.307,9.458c0.063-0.178,0.419,0.038,0.355,0.127C17.599,9.675,17.264,9.579,17.307,9.458zM17.802,18.584c0.063,0.102-0.14,0.431-0.254,0.407c-0.113-0.027-0.076-0.318-0.038-0.382C17.548,18.545,17.769,18.529,17.802,18.584zM13.189,12.674c0.025-0.051-0.039-0.153-0.127-0.013C13.032,12.71,13.164,12.725,13.189,12.674zM20.813,8.035c0.141,0.076,0.339,0.107,0.433,0.013c0.076-0.076,0.013-0.204-0.05-0.216c-0.064-0.013-0.104-0.115,0.062-0.203c0.165-0.089,0.343-0.204,0.534-0.229c0.19-0.025,0.622-0.038,0.774,0c0.152,0.039,0.382-0.166,0.445-0.254s-0.203-0.152-0.279-0.051c-0.077,0.102-0.444,0.076-0.521,0.051c-0.076-0.025-0.686,0.102-0.812,0.102c-0.128,0-0.179,0.152-0.356,0.229c-0.179,0.076-0.42,0.191-0.509,0.229c-0.088,0.038-0.177,0.19-0.101,0.216C20.509,7.947,20.674,7.959,20.813,8.035zM14.142,12.674c0.064-0.089-0.051-0.217-0.114-0.217c-0.12,0-0.178,0.191-0.103,0.254C14.002,12.776,14.078,12.763,14.142,12.674zM14.714,13.017c0.064,0.025,0.114,0.102,0.165,0.114c0.052,0.013,0.217,0,0.167-0.127s-0.167-0.127-0.204-0.127c-0.038,0-0.203-0.038-0.267,0C14.528,12.905,14.65,12.992,14.714,13.017zM11.308,10.958c0.101,0.013,0.217-0.063,0.305-0.101c0.088-0.038,0.216-0.114,0.216-0.229c0-0.114-0.025-0.216-0.077-0.267c-0.051-0.051-0.14-0.064-0.216-0.051c-0.115,0.02-0.127,0.14-0.203,0.14c-0.076,0-0.165,0.025-0.14,0.114s0.077,0.152,0,0.19C11.117,10.793,11.205,10.946,11.308,10.958zM11.931,10.412c0.127,0.051,0.394,0.102,0.292,0.153c-0.102,0.051-0.28,0.19-0.305,0.267s0.216,0.153,0.216,0.153s-0.077,0.089-0.013,0.114c0.063,0.025,0.102-0.089,0.203-0.089c0.101,0,0.304,0.063,0.406,0.063c0.103,0,0.267-0.14,0.254-0.229c-0.013-0.089-0.14-0.229-0.254-0.28c-0.113-0.051-0.241-0.28-0.317-0.331c-0.076-0.051,0.076-0.178-0.013-0.267c-0.09-0.089-0.153-0.076-0.255-0.14c-0.102-0.063-0.191,0.013-0.254,0.089c-0.063,0.076-0.14-0.013-0.217,0.012c-0.102,0.035-0.063,0.166-0.012,0.229C11.714,10.221,11.804,10.361,11.931,10.412zM24.729,17.198c-0.083,0.037-0.153,0.47,0,0.521c0.152,0.052,0.241-0.202,0.191-0.267C24.868,17.39,24.843,17.147,24.729,17.198zM20.114,20.464c-0.159-0.045-0.177,0.166-0.304,0.306c-0.128,0.141-0.267,0.254-0.317,0.241c-0.052-0.013-0.331,0.089-0.242,0.279c0.089,0.191,0.076,0.382-0.013,0.472c-0.089,0.088,0.076,0.342,0.052,0.482c-0.026,0.139,0.037,0.229,0.215,0.229s0.242-0.064,0.318-0.229c0.076-0.166,0.088-0.331,0.164-0.47c0.077-0.141,0.141-0.434,0.179-0.51c0.038-0.075,0.114-0.316,0.102-0.457C20.254,20.669,20.204,20.489,20.114,20.464zM10.391,8.802c-0.069-0.06-0.229-0.102-0.306-0.11c-0.076-0.008-0.152,0.06-0.321,0.06c-0.168,0-0.279,0.067-0.347,0C9.349,8.684,9.068,8.65,9.042,8.692C9.008,8.749,8.941,8.751,9.008,8.87c0.069,0.118,0.12,0.186,0.179,0.178s0.262-0.017,0.288,0.051C9.5,9.167,9.569,9.226,9.712,9.184c0.145-0.042,0.263-0.068,0.296-0.119c0.033-0.051,0.263-0.059,0.263-0.059S10.458,8.861,10.391,8.802z";
        this.toys = "M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z";
        this.ln = "M 347.5 280.1999969482422 Q 347.5 280.1999969482422 348 280.1999969482422 Q 348.5 280.1999969482422 348.75 280.1999969482422 Q 349 280.1999969482422 349.5 280.1999969482422 Q 350 280.1999969482422 350.5 280.1999969482422 Q 351 280.1999969482422 352.5 279.1999969482422 Q 354 278.1999969482422 355 277.6999969482422 Q 356 277.1999969482422 357.5 276.6999969482422 Q 359 276.1999969482422 360 276.1999969482422 Q 361 276.1999969482422 362 275.1999969482422 Q 363 274.1999969482422 363.5 273.6999969482422 Q 364 273.1999969482422 365 273.1999969482422 Q 366 273.1999969482422 366.5 272.6999969482422 Q 367 272.1999969482422 367.5 272.1999969482422 Q 368 272.1999969482422 368.5 271.6999969482422 Q 369 271.1999969482422 369.5 270.6999969482422 Q 370 270.1999969482422 370.5 270.1999969482422 Q 371 270.1999969482422 371.5 269.6999969482422 Q 372 269.1999969482422 372.5 268.6999969482422 Q 373 268.1999969482422 373.5 268.1999969482422 Q 374 268.1999969482422 374 267.6999969482422 Q 374 267.1999969482422 374.5 267.1999969482422 Q 375 267.1999969482422 375.5 267.1999969482422 Q 376 267.1999969482422 376.5 266.6999969482422 Q 377 266.1999969482422 377.5 265.6999969482422 Q 378 265.1999969482422 378.5 264.6999969482422 Q 379 264.1999969482422 379.5 264.1999969482422 Q 380 264.1999969482422 380.5 263.6999969482422 Q 381 263.1999969482422 381.5 263.1999969482422 Q 382 263.1999969482422 382.5 262.6999969482422 Q 383 262.1999969482422 383.5 261.6999969482422 Q 384 261.1999969482422 385 261.1999969482422 Q 386 261.1999969482422 386.5 260.6999969482422 Q 387 260.1999969482422 387.5 260.1999969482422 Q 388 260.1999969482422 389 259.6999969482422 Q 390 259.1999969482422 390.5 259.1999969482422 Q 391 259.1999969482422 391.5 258.6999969482422 Q 392 258.1999969482422 393 257.6999969482422 Q 394 257.1999969482422 394.5 257.1999969482422 Q 395 257.1999969482422 395.5 257.1999969482422 Q 396 257.1999969482422 396.5 257.1999969482422 Q 397 257.1999969482422 397.5 257.1999969482422 Q 398 257.1999969482422 398.5 257.1999969482422 Q 399 257.1999969482422 399.5 257.1999969482422 Q 400 257.1999969482422 400.5 257.1999969482422 Q 401 257.1999969482422 401.5 257.1999969482422 Q 402 257.1999969482422 402.5 257.1999969482422 Q 403 257.1999969482422 403.5 257.1999969482422 Q 404 257.1999969482422 404.5 257.1999969482422 Q 405 257.1999969482422 405.5 257.1999969482422 Q 406 257.1999969482422 406.5 257.1999969482422 Q 407 257.1999969482422 408 257.1999969482422 Q 409 257.1999969482422 409.5 257.1999969482422 Q 410 257.1999969482422 411 257.1999969482422 Q 412 257.1999969482422 412.5 257.1999969482422 Q 413 257.1999969482422 414 257.1999969482422 Q 415 257.1999969482422 415.5 257.1999969482422 Q 416 257.1999969482422 417 257.1999969482422 Q 418 257.1999969482422 418.5 257.1999969482422 Q 419 257.1999969482422 420 257.1999969482422 Q 421 257.1999969482422 421.5 257.1999969482422 Q 422 257.1999969482422 423 257.1999969482422 Q 424 257.1999969482422 424.5 257.1999969482422 Q 425 257.1999969482422 425.5 257.1999969482422 Q 426 257.1999969482422 426.5 257.6999969482422 Q 427 258.1999969482422 427.5 258.1999969482422 Q 428 258.1999969482422 428.5 258.1999969482422 Q 429 258.1999969482422 429.5 258.1999969482422 Q 430 258.1999969482422 430.5 258.6999969482422 Q 431 259.1999969482422 431.5 259.1999969482422 Q 432 259.1999969482422 432.5 259.1999969482422 Q 433 259.1999969482422 433.5 259.6999969482422 Q 434 260.1999969482422 434.5 260.6999969482422 Q 435 261.1999969482422 435.5 261.1999969482422 Q 436 261.1999969482422 436 261.6999969482422 Q 436 262.1999969482422 436.5 262.1999969482422 Q 437 262.1999969482422 437.5 262.6999969482422 Q 438 263.1999969482422 438.5 263.6999969482422 Q 439 264.1999969482422 439 264.6999969482422 Q 439 265.1999969482422 439.5 265.1999969482422 Q 440 265.1999969482422 440.5 265.6999969482422 Q 441 266.1999969482422 441.5 266.6999969482422 Q 442 267.1999969482422 442 267.6999969482422 Q 442 268.1999969482422 442.5 268.6999969482422 Q 443 269.1999969482422 443.5 269.6999969482422 Q 444 270.1999969482422 444 270.6999969482422 Q 444 271.1999969482422 444 271.6999969482422 Q 444 272.1999969482422 444 272.6999969482422 Q 444 273.1999969482422 444 274.1999969482422 Q 444 275.1999969482422 444 275.6999969482422 Q 444 276.1999969482422 444 277.1999969482422 Q 444 278.1999969482422 444 278.6999969482422 Q 444 279.1999969482422 444 280.1999969482422 Q 444 281.1999969482422 444 281.6999969482422 Q 444 282.1999969482422 444 282.6999969482422 Q 444 283.1999969482422 444 283.6999969482422 Q 444 284.1999969482422 444 284.6999969482422 Q 444 285.1999969482422 444 285.6999969482422 Q 444 286.1999969482422 444 287.1999969482422 Q 444 288.1999969482422 444 288.6999969482422 Q 444 289.1999969482422 444 289.6999969482422 Q 444 290.1999969482422 444 290.6999969482422 Q 444 291.1999969482422 444.5 291.6999969482422 Q 445 292.1999969482422 445 292.6999969482422 Q 445 293.1999969482422 445 293.6999969482422 Q 445 294.1999969482422 445 294.6999969482422 Q 445 295.1999969482422 445.5 295.6999969482422 Q 446 296.1999969482422 446 296.6999969482422 Q 446 297.1999969482422 446 297.6999969482422 Q 446 298.1999969482422 446.5 298.6999969482422 Q 447 299.1999969482422 447 299.6999969482422 Q 447 300.1999969482422 447.5 300.6999969482422 Q 448 301.1999969482422 448.5 301.6999969482422 Q 449 302.1999969482422 449.5 302.1999969482422 Q 450 302.1999969482422 450 302.6999969482422 Q 450 303.1999969482422 450.5 303.1999969482422 Q 451 303.1999969482422 451 303.6999969482422 Q 451 304.1999969482422 451 304.6999969482422 Q 451 305.1999969482422 451.5 305.1999969482422 Q 452 305.1999969482422 452 305.6999969482422 Q 452 306.1999969482422 453 307.6999969482422 Q 454 309.1999969482422 454.5 309.1999969482422 Q 455 309.1999969482422 455.5 309.6999969482422 Q 456 310.1999969482422 456 310.6999969482422 Q 456 311.1999969482422 456.5 311.6999969482422 Q 457 312.1999969482422 457.5 312.1999969482422 Q 458 312.1999969482422 458 312.6999969482422 Q 458 313.1999969482422 458.5 313.6999969482422 Q 459 314.1999969482422 459.5 314.6999969482422 Q 460 315.1999969482422 460.5 315.1999969482422 Q 461 315.1999969482422 462 315.6999969482422 Q 463 316.1999969482422 463.5 316.6999969482422 Q 464 317.1999969482422 464 317.6999969482422 Q 464 318.1999969482422 464.5 318.6999969482422 Q 465 319.1999969482422 465.5 320.1999969482422 Q 466 321.1999969482422 466.5 321.1999969482422 Q 467 321.1999969482422 467.5 321.6999969482422 Q 468 322.1999969482422 468 322.6999969482422 Q 468 323.1999969482422 468.5 323.1999969482422 Q 469 323.1999969482422 469 323.6999969482422 Q 469 324.1999969482422 469.5 324.6999969482422 Q 470 325.1999969482422 470 325.6999969482422 Q 470 326.1999969482422 470.5 326.6999969482422 Q 471 327.1999969482422 471 327.6999969482422 Q 471 328.1999969482422 471.5 328.1999969482422 Q 472 328.1999969482422 472 328.6999969482422 Q 472 329.1999969482422 472 329.6999969482422 Q 472 330.1999969482422 472.5 330.6999969482422 Q 473 331.1999969482422 473 331.6999969482422 Q 473 332.1999969482422 473 332.6999969482422 Q 473 333.1999969482422 473 333.6999969482422 Q 473 334.1999969482422 473 334.6999969482422 Q 473 335.1999969482422 473 335.6999969482422 Q 473 336.1999969482422 473 337.1999969482422 Q 473 338.1999969482422 473 338.6999969482422 Q 473 339.1999969482422 473.5 340.1999969482422 Q 474 341.1999969482422 474 341.6999969482422 Q 474 342.1999969482422 474 343.1999969482422 Q 474 344.1999969482422 474 344.6999969482422 Q 474 345.1999969482422 474 345.6999969482422 Q 474 346.1999969482422 474 346.6999969482422 Q 474 347.1999969482422 474 347.6999969482422 Q 474 348.1999969482422 474 348.6999969482422 Q 474 349.1999969482422 474 349.6999969482422 Q 474 350.1999969482422 474.5 350.6999969482422 L 475 351.1999969482422";
        this.prk = "M29.116,115.383h13.438v-11.996H29.116V115.383z M99.393,115.383h13.438v-11.996H99.393V115.383z M13.438,48.19h6.756   L4.481,70.695h13.168L0,97.465h29.115v2.213L46.64,71.531H31.84l17.662-26.774h-7.594l6.885-11.662L35.834,12.356L13.438,48.19z    M93.152,33.092l6.885,11.662h-7.594l17.662,26.774H95.303l17.524,28.146v-2.213h29.117l-17.65-26.771h13.171L121.752,48.19h6.756   l-22.396-35.834L93.152,33.092z M45.95,42.643h7.592L35.879,69.42h14.806l-19.836,31.854h32.725v21.323h15.104v-21.323h32.727   L91.561,69.42h14.803L88.701,42.643h7.592L71.122,0L45.95,42.643z";
        this.taj = "M97,71.5l-0.7-23.1l-0.4-8.1c0-0.3,0.1-0.7-0.1-1.3c-0.3-0.5-0.8-0.9-1.3-1.1c-0.1-1.6-0.2-2.7-0.4-2.7  c-0.2,0-0.3,1.1-0.4,2.7c-0.4,0.2-1,0.6-1.3,1.1c-0.2,0.5-0.1,1-0.1,1.3l-1.1,31.3h-5.8l-0.7-23.4c0,0,0-0.9-0.2-1.3  c-0.2-0.4-0.5-0.6-0.8-0.7c0-1.9-0.2-3.3-0.4-3.3c-0.2,0-0.3,1.4-0.4,3.2c-0.3,0.1-0.7,0.4-0.9,0.8C82,47.2,82,48.1,82,48.1  l-0.7,23.4h-5.1V54.7l-0.5,0v-3.2h-3.2v2.8l-3,0h-0.3v-4.9h-1c0-0.4-0.1-1.2-0.8-2.1c-0.7-0.9-1.8-1.5-2.5-1.8  c0-2.1-0.2-3.8-0.5-3.8c-0.3,0-0.5,1.7-0.5,3.8c-0.6,0.3-1.8,0.9-2.5,1.9c-0.2,0.2-0.3,0.4-0.4,0.6V47h-1.3c0.5-0.4,4.9-4.8,4.2-9.5  c-0.7-4.6-5.2-7.4-8.8-9.9c-2.5-1.7-3.8-2.9-4.5-3.9h-0.1c0-0.5,0.1-1.1,0.1-1.7c0-2.1-0.3-3.8-0.5-4.2v0c-0.1,0-0.1-0.1-0.1-0.1h0  c0,0-0.1,0.1-0.1,0.1v0c-0.3,0.4-0.5,2.1-0.5,4.2c0,0.6,0,1.1,0,1.7h-0.1c-0.7,1-2,2.2-4.5,3.9c-3.5,2.5-8,5.3-8.8,9.9  c-0.7,4.7,3.7,9,4.2,9.5h-1.4v0.8c-0.1-0.2-0.2-0.4-0.4-0.6c-0.7-0.9-1.9-1.6-2.5-1.9c0-2.1-0.2-3.8-0.5-3.8c-0.3,0-0.5,1.7-0.5,3.8  c-0.6,0.3-1.8,1-2.4,1.8c-0.7,0.9-0.8,1.7-0.9,2.1h-1v4.8l-3.3,0.1v-2.8h-3.2v3.2l-0.4,0v16.8h-5.1l-0.7-23.4c0,0,0-0.9-0.2-1.3  c-0.2-0.4-0.6-0.7-0.9-0.8c0-1.8-0.2-3.2-0.4-3.2c-0.2,0-0.3,1.4-0.4,3.3c-0.3,0.2-0.6,0.4-0.8,0.8c-0.2,0.3-0.2,1.3-0.2,1.3  l-0.7,23.4H8.5L7.4,40.2c0-0.3,0.1-0.8-0.1-1.3C7,38.5,6.4,38.1,6,37.9c-0.1-1.6-0.2-2.7-0.4-2.7c-0.2,0-0.3,1.1-0.4,2.7  c-0.4,0.2-1,0.6-1.3,1.1c-0.2,0.5-0.1,1-0.1,1.3l-0.4,8.1L2.8,71.5H1v7.1h97.8v-7.1H97z M53.9,71.4H46v-8.3c0,0,0-2.2,1.9-3.5  c0.8-0.6,1.4-0.8,2.1-0.8c0.6,0,1.3,0.3,2.1,0.8c1.9,1.3,1.9,3.5,1.9,3.5V71.4z M53.9,71.4";
        this.temp = "M76.9,50.6c0-0.1,0.1-0.4,0.4-0.7c0.1-0.1,0.2-0.2,0.5-0.5c0.2-0.2,0.3-0.3,0.5-0.4l0.2-0.1h4v-0.5h-0.8     v-0.8h-1.2V47h-1.1v-2.9l-0.2,0c0,0-0.1,0-0.1,0c-0.3,0.1-0.5,0.3-0.6,0.3c-0.2,0.2-0.3,0.4-0.4,0.7c-0.1,0.2-0.1,0.5-0.2,0.8     c-0.1,0.3-0.3,0-0.3,0l-1.9-0.9l0-0.3c0-1.6,0-3.8-0.2-6.4c-0.3-2.8-0.7-4.8-1.1-6.9c-0.6-3-0.9-4.5-1.7-6.5     c-0.8-2.3-1.6-3.9-3.3-7.1c-1.4-2.6-2.5-4.5-3.1-5.6c-0.5-0.9-1-1.6-1.3-2.1l-0.1,0H61V9.5l0.1,0c0.6,0,1.1,0,1.5-0.1     c1-0.1,1.4-0.2,1.6-0.4c0.3-0.2,0.7-0.4,0.8-0.7c0-0.3-0.2-0.6-0.3-0.7c-0.1-0.1-0.3-0.3-1-0.5C63.2,7,62.9,7,62.2,6.9     c-0.4,0-0.7-0.1-1.1-0.2H61V6.6v-1c0.4-0.3,0.6-0.5,0.8-0.6c0.4-0.3,0.5-0.4,0.6-0.6c0-0.3-0.3-0.6-0.4-0.7     c-0.3-0.3-0.7-0.4-1-0.5l-0.1-0.1l-0.5-1.7l-0.5,1.7l-0.1,0.1c-0.3,0.1-0.7,0.2-1,0.5c-0.2,0.2-0.5,0.4-0.4,0.7     c0,0.2,0.2,0.3,0.6,0.6c0.2,0.1,0.4,0.3,0.8,0.6v1v0.2h-0.1c-0.4,0.1-0.8,0.1-1.1,0.2c-0.7,0.1-1,0.1-1.5,0.2     c-0.7,0.2-0.9,0.4-1,0.5c-0.1,0.1-0.3,0.4-0.3,0.7c0.1,0.4,0.5,0.6,0.8,0.7c0.2,0.1,0.6,0.3,1.6,0.4c0.4,0,0.9,0.1,1.5,0.1l0.1,0     v0.8h-3.9l-0.1,0c-0.3,0.5-0.8,1.2-1.3,2.1c-0.7,1.1-1.7,2.9-3.1,5.6l-0.1,0.1c-0.7,1.4-1.5,3.2-2.3,5.3     c-0.2,0.5-0.8,2.4-1.5,4.9c-0.3,1-0.9,3.8-1.4,7.5c-0.2,1.3-0.3,2.7-0.5,5.3c-0.1,1.8-0.2,3.3-0.3,4.3c0,0-0.8,0-1-0.5v0v-1.5     l-1.1,0.8h-0.4l-0.1-0.3c0-0.4-0.1-1-0.3-1.7c-0.1-0.3-0.3-1-0.9-1.9c-0.3-0.5-0.6-0.9-1.2-1.5c-0.8-0.9-1.5-1.6-2.5-2.4     c-0.5-0.3-1.1-0.8-1.9-1.2v-1.8h-0.5c-0.3,0.7-0.7,0.8-0.7,0.8h-0.2V21.4l0-0.1c0.1-0.1,0.2-0.2,0.4-0.3c0.5-0.2,0.9-0.1,1.1-0.1     c0.1,0,0.5,0.1,1.4,0.6c0.9,0.6,1.4,0.8,1.6,1.3c0.2,0.4,0.1,0.8,0.1,1c-0.1,0.7-0.4,0.9-0.7,1.5c-0.3,0.6-0.2,1.2-0.1,2.1     c0.1,0.7,0.2,1.3,0.6,2c0.2,0.4,0.6,1.1,1.5,1.5c0.7,0.3,1.4,0.3,1.7,0.2c-0.8-0.4-1.1-1.3-1.1-1.3v-0.6v-0.2h2.2V29     c-0.8-0.1-1.4-0.4-1.7-0.6c-0.6-0.3-0.8-0.6-0.8-0.7c-0.2-0.3-0.2-0.6-0.3-0.8c0-0.3,0-0.4,0-1.1c0.1-0.7,0.1-1,0.1-1.3     c0-0.1,0-0.6-0.1-1.2c-0.1-0.5-0.1-0.8-0.3-1.1c-0.2-0.4-0.5-0.7-0.9-1.2c-0.1-0.1-0.4-0.4-0.9-0.8c-0.3-0.2-0.4-0.3-0.5-0.4     c0,0-0.1-0.1-0.1-0.1c-0.3-0.3-0.7-0.9-0.7-0.9c-0.2-0.3-0.3-0.4-0.4-0.6c-0.1-0.2-0.3-0.5-0.4-1c-0.1-0.5,0-0.5-0.1-1.1     c-0.1-0.3-0.1-0.6-0.3-0.9c-0.2-0.4-0.5-0.7-0.5-0.7c-0.2-0.2-0.3-0.2-0.4-0.4c-0.1-0.2,0-0.3-0.1-0.4c0-0.1-0.2-0.4-0.4-0.4     c-0.2,0-0.4,0.3-0.3,0.4c0.1,0.1,0.3,0.1,0.4,0.2c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3-0.1,0.3c0,0.1,0,0.1,0,0.2     c0,0.2,0,0.4,0.1,0.5c0.1,0.1,0.2,0.3,0.2,0.3c0.2,0.2,0.2,0.3,0.3,0.4c0,0.1,0,0.2,0.1,0.4c0,0.2,0,0.2,0,0.3     c0,0.1,0.1,0.3,0.4,0.5c0.1,0.2,0.3,0.4,0.4,0.6c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2-0.1-0.7-0.5C34.3,17,34.4,17,34,16.6     c0,0-0.2-0.2-0.3-0.3c-0.1-0.2-0.2-0.3-0.2-0.4c0-0.1,0-0.1,0-0.2c0-0.2,0-0.3,0-0.6c0-0.3,0-0.4-0.1-0.5c0,0-0.1-0.1-0.2-0.2     c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.1-0.1,0.2c-0.1,0.4,0,0.8,0,0.8c0.1,0.3,0.2,0.5,0.2,0.6c0.1,0.2,0.2,0.3,0.4,0.6     c0.2,0.2,0.3,0.4,0.4,0.5c0.2,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.4,0.3,0.6,0.5c-0.1,0-0.3,0.1-0.5,0.1c-0.1,0-0.4,0-0.7-0.1     c-0.4-0.1-0.7-0.3-0.9-0.5c-0.3-0.2-0.4-0.3-0.5-0.5c-0.1-0.2-0.2-0.4-0.2-0.4c-0.1,0-0.1,0.4-0.1,0.5c0,0.6,0.1,1,0.2,1.2     c0.2,0.7,0.6,1.2,0.7,1.3c0.3,0.4,0.6,0.7,0.9,0.9v14h-0.8v-1.9h-0.8h0v-0.8h-0.8v-1.5h-0.7v-0.8h-0.2c0,0,0.1-0.4-0.1-0.9     c-0.3,0.5-0.1,0.9-0.1,0.9h-0.2v0.8h-0.7v1.5h-0.8v0.8h0h-0.8v1.9h-1.7c0,0-0.4-0.1-0.7-0.8h-0.5v1.8c-0.8,0.4-1.4,0.9-1.9,1.2     c-0.8,0.6-1.7,1.3-2.5,2.4c-0.3,0.4-0.8,1-1.1,1.9c-0.3,0.7-0.3,1.3-0.4,1.8c-0.1,0.7-0.1,1.3-0.1,1.7L16.6,43l-1.7,1.6l-2.6-1.1     v1.9l-4.4,2.4h1.5V49c0.2,0,0.4,0.1,0.7,0.3c0.2,0.1,0.6,0.3,1,0.8c0.3,0.3,0.4,0.7,0.5,0.9c0.2,0.6,0.1,0.7,0.3,1.1     c0.2,0.4,0.6,0.7,1,0.8c0.4,0.1,0.8,0,0.8,0.1c0,0.1-0.3,0.2-0.5,0.6c-0.2,0.4-0.1,0.8,0,1c0.1,0.2,0.2,0.4,0.4,0.8     c0.1,0.2,0.2,0.4,0.3,0.5h0.8v3.1h-0.3v0.7l0,0c-0.1,0.1-0.2,0.3-0.3,0.4c-0.3,0.2-0.5,0.3-0.7,0.3c0.1,0,0.4,0.1,0.7,0.3     c0.2,0.2,0.3,0.3,0.3,0.4c0.1,0.2,0.3,0.6,0.3,0.6v4.5c0,0.9-1.1,1.3-1.1,1.3s1.1,0.4,1.1,1.3v1.8h-0.5v0.4h-0.4v0.3h-0.5v0.2     v0.2h0.5v0.3h0.4v0.4h0.5v2h-2.8v0.3h0.8v0.4h0.2v0.4h0.1v8.9H9.8V87H7.6v1.6h74.2V87h-1.6v-2.6h-2.4V79h-1.6v-1.5h-1.2V73h1.2     v-0.8h-1.2v-8.6h1.1v-1.4H75c-0.1-0.1-0.2-0.1-0.2-0.1c0-0.1-0.1-0.4,0-0.7c0.1-0.2,0.2-0.4,0.4-0.6c0.1-0.2,0.4-0.4,0.7-0.6     c0,0,0.3-0.2,0.9-0.2v-0.3H75c0,0-0.2,0,0-0.3c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.2-0.3,0.3-0.5l0.1-0.1     c-0.1-0.1-0.1-0.4-0.2-0.6c-0.1-0.3-0.2-0.7-0.1-1.1c0-0.4,0.2-0.7,0.2-0.9c0.1-0.3,0.3-0.6,0.4-0.8c0.1-0.2,0.3-0.5,0.6-0.8     c0.4-0.4,0.7-0.6,1-0.7v-0.6h-0.8l-0.1,0c0-0.2-0.1-0.4-0.1-0.6c0-0.2,0-0.3,0-0.5C76.8,51.1,76.8,50.9,76.9,50.6z M42.1,55.1     c-0.4,0.7-1.2,0.9-1.1,1.4c0,0,0.1,0.1,0.2,0.3c0.3,0.4,0.4,0.5,0.5,0.6c0.1,0.1,0.2,0.4,0.3,0.7V62L40.9,63l1.1,1v1.3     c-0.1,0-0.5,0.1-0.8,0.4c-0.1,0.1-0.3,0.3-0.3,0.6c0,0.4,0.4,0.8,1.1,1v1.4H31.3H20.5v-1.4c0.7-0.1,1.1-0.6,1.1-1     c0-0.3-0.2-0.5-0.3-0.6c-0.3-0.3-0.7-0.4-0.8-0.4V64l1.1-1L20.5,62v-3.9c0.1-0.3,0.2-0.6,0.3-0.7c0.1-0.2,0.2-0.3,0.5-0.6     c0.2-0.2,0.2-0.3,0.2-0.3c0.1-0.4-0.8-0.6-1.1-1.4c-0.4-0.7,0-1.6,0.1-1.8c0.4-0.9,1.1-1.2,1.4-1.4c0.3-0.1,1.1-0.5,1.9-0.2     c0.4,0.2,0.7,0.5,0.8,0.4c0.1-0.1-0.3-0.5-0.2-1.1c0.1-0.6,0.3-0.9,0.5-1c0.1-0.2,0.5-0.6,1.1-0.7c0.5-0.1,0.9,0,1.1,0.1     c0.3,0.1,0.6,0.3,0.9,0.5c0.7,0.5,0.8,0.9,0.9,0.7c0-0.2-0.4-2.3,1.3-2.9c0.4-0.1,0.8-0.3,1.1-0.3h0c0.4,0.1,0.8,0.2,1.1,0.3     c1.7,0.6,1.3,2.8,1.3,2.9c0,0.2,0.2-0.2,0.9-0.7c0.3-0.2,0.5-0.4,0.9-0.5c0.2-0.1,0.6-0.2,1.1-0.1c0.6,0.1,1,0.5,1.1,0.7     c0.1,0.1,0.4,0.5,0.5,1c0.1,0.6-0.3,1-0.2,1.1c0.1,0.1,0.3-0.2,0.8-0.4c0.8-0.3,1.6,0.1,1.9,0.2c0.3,0.1,1.1,0.5,1.4,1.4     C42.1,53.5,42.4,54.4,42.1,55.1z M69,77.4h-8.7h-8.7v-21c0,0,2.6-6.8,8.7-8.9c6.1,2.1,8.7,8.9,8.7,8.9V77.4z";
        this.sling = "M87.3061829,48.9927292c-0.3535156-1.3590698-1.1768799-2.2034302-1.5057373-2.5091553  c-0.2623291-0.2438965-0.9857788-0.866394-2.1166382-1.2000122c-0.5862427-0.1729736-1.0994873-0.2144775-1.4620361-0.2182007  h-0.5668335H61.4477844H44.0342712V20.9620285v-0.75c0.0298462-0.74823-0.0132446-2.2000122-0.7637329-3.7942505  c-0.7602539-1.6150513-1.8461914-2.526062-2.376709-2.9612427c-1.4002075-1.1486206-2.8261719-1.6279907-3.6896362-1.8388062  c-1.3098145-0.3198853-5.0184326-0.3198853-6.3282471,0c-0.8634644,0.2108154-2.2894287,0.6901855-3.6896362,1.8388062  c-0.5305176,0.4351807-1.6164551,1.3461914-2.376709,2.9612427c-0.7504883,1.5942383-0.7935791,3.0460205-0.7637329,3.7942505v0.75  V45.065361H6.6323547v0.8727417v3.076416c1.3624878,0.8411865,2.9607544,1.7785034,4.776062,2.753479  c0.9268188,0.4978027,2.4042969,1.2883301,4.395813,2.2108765c0.3747559,0.173645,4.8978271,2.2689819,6.8735962,2.9033203  c0.1384277,0.0444336,0.5645752,0.1781006,1.0949707,0.444397c0.3294067,0.1654053,0.8591309,0.4314575,1.3422852,0.8735352  c0.8850708,0.8098755,1.1774292,1.8113403,1.2577515,2.0997925c0.0981445,0.352356,0.3917236,1.5697632-0.1323242,2.8939819  c-0.4981689,1.2589722-1.4414063,1.8713379-2.6965332,2.6862793c-0.7694702,0.4995728-2.0235596,1.3137817-3.3496094,1.3291626  c-0.1387329,0.0015869-0.5921631-0.0018921-1.2110596,0.0672607c-0.7143555,0.0797729-1.0715332,0.1196899-1.4620361,0.3054199  c-0.2346802,0.1116333-0.914978,0.4351807-1.2546387,1.1125488c-0.0975342,0.1945801-3.2598877,2.0772095-6.1040039,3.9663086  c-2.1119385,1.402771-3.6489868,2.6014404-4.1870117,3.0261841c-1.3632813,1.0762329-2.5153198,2.0806885-3.4456787,2.9351196  c10.5033569,0,21.0067749,0,31.5101318,0s21.0067749,0,31.5101318,0c-0.9303589-0.8544312-2.0823975-1.8588867-3.4456787-2.9351196  c-0.5380249-0.4247437-2.0750732-1.6234131-4.1870117-3.0261841c-2.8441162-1.8890991-6.0064697-3.7717285-6.1040039-3.9663086  c-0.3396606-0.6773682-1.0199585-1.0009155-1.2546387-1.1125488c-0.3905029-0.18573-0.7476807-0.225647-1.4620361-0.3054199  c-0.6188965-0.0691528-1.0723267-0.0656738-1.2110596-0.0672607c-1.3260498-0.0153809-2.5801392-0.8295898-3.3496094-1.3291626  c-1.255127-0.8149414-2.1983643-1.4273071-2.6965332-2.6862793c-0.5240479-1.3242188-0.2304688-2.541626-0.1323242-2.8939819  c0.0803223-0.2884521,0.3726807-1.289917,1.2577515-2.0997925c0.4831543-0.4420776,1.0128784-0.7081299,1.3422852-0.8735352  c0.5303955-0.2662964,0.956543-0.3999634,1.0949707-0.444397c1.975769-0.6343384,6.4988403-2.7296753,6.8735962-2.9033203  c1.9915161-0.9225464,3.4689941-1.7130737,4.395813-2.2108765c0.8037109-0.4316406,1.5648804-0.855957,2.2819214-1.2677612  l0.5137939-0.111145c0,0,20.3125,0,21.4375,0s1.0331421,0.947937,1.0331421,0.947937v5.1176147h5.5319824v-6.2454834  C87.4658508,49.910881,87.4342346,49.4849167,87.3061829,48.9927292z M33.504425,26.2328415h-4.9330444  c-0.3552246,0-0.645874-0.2905884-0.645874-0.645813s0.2906494-0.645813,0.645874-0.645813h4.9893799  C33.5057678,25.3458176,33.4792175,25.7856979,33.504425,26.2328415z M39.5088806,28.0662155h-5.480896  c-0.0033569,0.0057373-0.0055542,0.0119629-0.0089722,0.0177002c-0.003418-0.0057373-0.0056152-0.0119629-0.0089722-0.0177002  h-5.4386597c-0.3552246,0-0.645874-0.2906494-0.645874-0.645874c0-0.3551636,0.2906494-0.645813,0.645874-0.645813h4.9915771  c0.0740356,0.4486694,0.211853,0.8898315,0.4470825,1.291687h0.0179443c0.2352295-0.4018555,0.3730469-0.8430176,0.4470825-1.291687  h5.0338135c0.3551636,0,0.645813,0.2906494,0.645813,0.645813C40.1546936,27.7755661,39.8640442,28.0662155,39.5088806,28.0662155z   M39.5088806,26.2328415h-4.9752808c0.0252075-0.4471436-0.0013428-0.8870239-0.0563354-1.291626h5.0316162  c0.3551636,0,0.645813,0.2905884,0.645813,0.645813S39.8640442,26.2328415,39.5088806,26.2328415z M39.5088806,24.3995285  h-5.1223755c-0.1434326-0.7112427-0.3320923-1.2174683-0.3607178-1.291687h-0.0135498  c-0.0286255,0.0742188-0.2172852,0.5804443-0.3607178,1.291687h-5.0801392c-0.3552246,0-0.645874-0.2906494-0.645874-0.645813  c0-0.3552246,0.2906494-0.645874,0.645874-0.645874h5.4408569c0.0023804-0.0061646,0.0067749-0.0177002,0.0067749-0.0177002  s0.0043945,0.0115356,0.0067749,0.0177002h5.4830933c0.3551636,0,0.645813,0.2906494,0.645813,0.645874  C40.1546936,24.1088791,39.8640442,24.3995285,39.5088806,24.3995285z";
        this.buddha = "M70.4,82.445c-0.398-0.338,7.071-5.562,4.844-11.844c0.199-1.439,1.048-2.617-1.242-6.215  c-0.966-3.182-1.699-9.488-1.767-9.816c-0.065-0.328-0.457-5.884-4.713-8.24c-0.048-0.021-0.116-0.053-0.194-0.089  c5.232-4.734,8.526-11.574,8.526-19.17c0-14.255-11.598-25.853-25.853-25.853c-14.257,0-25.855,11.598-25.855,25.853  c0,7.596,3.294,14.436,8.527,19.17c-0.079,0.036-0.148,0.068-0.196,0.089c-4.252,2.356-4.645,7.912-4.709,8.24  c-0.065,0.328-0.801,6.635-1.766,9.816c-2.292,3.598-1.442,4.775-1.246,6.215c-2.226,6.281,5.246,11.506,4.842,11.844  c-2.485,0.066-8.766,1.57-9.096,6.936c0,7.59,21.071,8.625,21.071,8.625c2.861,0.186,5.692,0.273,8.654,0.277  c0.062,0,0.123,0,0.184,0c2.431,0,4.913-0.043,8.015-0.277c0,0,21.071-1.035,21.071-8.625C79.17,84.016,72.89,82.512,70.4,82.445z   M28.339,27.071c0-11.944,9.718-21.661,21.663-21.661c11.943,0,21.659,9.717,21.659,21.661c0,7.053-3.39,13.329-8.625,17.286  c-0.636-0.252-1.289-0.497-1.925-0.708c0,0-2.519-3.266-3.854-3.266c-0.024,0-0.05,0.002-0.076,0.005c0,0-2.16-2.749-0.521-4.975  c0,0,0.114,1.662,0.934,1.662c0.057,0,0.116-0.008,0.18-0.025c0.984-0.262,0.984-1.178,0.72-2.16  c-0.261-0.981,0.461-1.832,0.591-2.224c0.131-0.393,2.356-4.319,0.194-5.236c0,0,1.176-6.543-4.45-8.505c0,0,1.231-2.47-0.629-4.487  c-0.51-0.833-1.542-1.481-2.821-1.756c0.076-0.18,0.119-0.378,0.119-0.586c0-0.825-1.496-1.966-1.496-1.966  s-1.497,1.141-1.497,1.966c0,0.208,0.043,0.406,0.121,0.586c-1.278,0.275-2.312,0.921-2.821,1.755  c-1.862,2.017-0.628,4.488-0.628,4.488c-5.63,1.962-4.452,8.505-4.452,8.505c-2.16,0.917,0.065,4.843,0.199,5.236  c0.127,0.392,0.849,1.243,0.587,2.224c-0.261,0.982-0.261,1.898,0.719,2.16c0.062,0.017,0.125,0.025,0.18,0.025  c0.819,0,0.932-1.662,0.932-1.662c1.639,2.226-0.523,4.975-0.523,4.975c-0.024-0.003-0.05-0.005-0.077-0.005  c-1.331,0-3.851,3.266-3.851,3.266c-0.636,0.212-1.288,0.456-1.924,0.708C31.729,40.399,28.339,34.124,28.339,27.071z";
        this.pagoda = "M81.5,84h-2.502L66.5,69h-0.001  C63.36,64.821,61.5,59.629,61.5,54l-1-1l-5-10v-5h-1v-4.998l-0.443-0.889c0.285-0.819,0.443-1.697,0.443-2.613  c0-0.821-0.127-1.611-0.356-2.356L52,20l1-5v-1l-3-9l-3,9v1l1,5l-2.098,6.993h0.005c-0.261,0.789-0.407,1.63-0.407,2.507  c0,0.917,0.159,1.795,0.443,2.614L45.5,33.002V38h-1v5l-5,10l-1,1c0,5.629-1.86,10.821-4.999,15h0L21.001,84H18.5l-6,11h75L81.5,84z  ";
        this.mahavir = "M20.829,0c-2.947,0-5.385,2.212-5.742,5.062c-0.562-0.182-1.16-0.279-1.78-0.279c-2.825,0-5.185,2.036-5.688,4.718   C7.043,9.308,6.426,9.203,5.785,9.203C2.596,9.203,0,11.797,0,14.988v30.774C0,57.246,9.344,66.59,20.829,66.59   c11.482,0,20.826-9.344,20.826-20.827V27.691c0-0.978,1.027-3.078,1.72-4.188c0.313-0.503,0.393-1.116,0.214-1.683   c-0.179-0.564-0.593-1.023-1.14-1.254c-0.192-0.083-1.943-0.801-4.106-0.801c-1.045,0-2.673,0.188-4.209,1.145v-8.886   c0-3.189-2.594-5.783-5.783-5.783c-0.605,0-1.188,0.093-1.736,0.265V5.784C26.614,2.595,24.018,0,20.829,0z M28.351,10.29   c0.957,0,1.736,0.778,1.736,1.734v18.694v8.851c0,1.118,0.904,2.024,2.022,2.024c1.119,0,2.024-0.906,2.024-2.024v-8.851   c0-6.904,3.169-6.904,4.209-6.904c0.098,0,0.192,0.002,0.289,0.007c-0.536,1.197-1.023,2.628-1.023,3.87v18.071   c0,9.251-7.528,16.78-16.779,16.78c-9.254,0-16.78-7.529-16.78-16.78V14.988c0-0.957,0.778-1.736,1.736-1.736   s1.736,0.779,1.736,1.736v15.539c0,1.117,0.905,2.022,2.024,2.022c1.117,0,2.024-0.905,2.024-2.022V14.988v-4.42   c0-0.958,0.779-1.736,1.736-1.736c0.958,0,1.736,0.778,1.736,1.736v19.959c0,1.117,0.905,2.022,2.024,2.022   c1.118,0,2.025-0.905,2.025-2.022V10.568V5.784c0-0.958,0.778-1.736,1.736-1.736c0.957,0,1.735,0.778,1.735,1.736v6.24v18.705   c0,1.118,0.905,2.024,2.023,2.024c1.119,0,2.026-0.906,2.026-2.024V12.024C26.614,11.068,27.393,10.29,28.351,10.29z";
        this.factory = "M94.405,96L94.396,8.882h-1.979H76.55v40.531h-6.723l-0.071-20.405L49.684,46.973l-0.079-17.958L29.676,46.863   l-0.08-17.721L5.742,50.502L5.567,96h64.275V80.648h6.714V96H94.405z M45.588,78.217H20.859V64.2h24.729V78.217z";
        this.muth = "M68.5836945,48.7178726h4.9635239C79.9240952,48.816021,90,46.341568,90,46.341568  s-13.5875549-0.7746353-22.2750168-3.7074127v-1.1685905h0.8587112v-0.6874542H68.137146v-0.6839981h-0.851265v-0.6469765  H56.1491547V27.6139507c5.2214241,0.6894836,16.291954-3.1301594,16.291954-3.1301594S57.1055374,22.162384,50.4816589,16.202673  v-0.7843161l-0.7213669-0.1437044v-0.5499763l-0.5495682-0.1030903c0,0,0.7045784-3.5931549-2.3357582-6.9202232  c-3.0402679,3.3270683-2.3356895,6.9202232-2.3356895,6.9202232l-0.5495682,0.1030903v0.5499763l-0.7213669,0.1437044v0.7843161  c-6.6238785,5.9597111-21.9594479,8.2811184-21.9594479,8.2811184s11.070528,3.819643,16.2919521,3.1301594v11.8331852H26.4641171  v0.6469765h-0.851263v0.6839981h-0.4465466v0.6874542h0.8587074v1.1685905C17.3375587,45.5669327,3.75,46.341568,3.75,46.341568  s10.075901,2.474453,16.4527817,2.3763046h4.9635258v13.4048653H8.2577057v0.9280205h1.3400469v0.9623413h1.9662409v0.9624023  h3.2785349v0.7905502h0.6372948v1.8456802h-0.8683863v0.938385h0.8683863v10.5520248H9.5031223v3.1964951h37.3719101h37.3718452  v-3.1964951h-5.9766998V68.5501175h0.8683853v-0.938385h-0.8683853v-1.8456802h0.637291V64.975502h3.2785339v-0.9624023h1.9662399  v-0.9623413h1.3400497v-0.9280205H68.5836945V48.7178726z M20.9041119,76.6225433h-2.6567402  c0.1095886-0.4805908,0.1691551-0.8854446,0.2036095-1.1802292c0.0669441-0.5725861,0.0786552-1.0652313,0.0829868-1.2682953  c0.0125904-0.5866623,0.0188847-0.8799667,0.0174637-0.9260559c0,0-0.0073776-0.2373199,0.0303249-0.597702  c0.0206451-0.1971817,0.0364838-0.2440186,0.0572643-0.2865295c0.0908394-0.1858749,0.2478123-0.1925049,0.329649-0.3812943  c0.0611897-0.1411285,0.0386505-0.2048264,0.0687714-0.3093414c0.0907707-0.3145523,0.5036087-0.4613647,1.0647545-0.6530609  c0.1953506-0.0667419,1.4084797-0.0667419,1.603899,0c0.5610771,0.1916962,0.9739819,0.3385086,1.0647545,0.6530609  c0.0301208,0.1045151,0.0075798,0.1682129,0.0687714,0.3093414c0.0818367,0.1887894,0.2388077,0.1954193,0.3296471,0.3812943  c0.0207806,0.042511,0.0366211,0.0893478,0.0572662,0.2865295c0.0377026,0.3603821,0.0303249,0.5975647,0.0303249,0.5975647  c-0.0014896,0.0462265,0.0048046,0.3395309,0.017395,0.9261932c0.0044003,0.203064,0.0160427,0.6957092,0.0830555,1.2682953  c0.0344543,0.2947845,0.0940208,0.6996384,0.2036095,1.1802292H20.9041119z M31.093256,76.6225433h-2.6567383  c0.1095886-0.4805908,0.1691551-0.8854446,0.2036095-1.1802292c0.0669441-0.5725861,0.0786533-1.0652313,0.0829868-1.2682953  c0.0125904-0.5866623,0.0188847-0.8799667,0.0174637-0.9260559c0,0-0.0073776-0.2373199,0.0303249-0.597702  c0.0206451-0.1971817,0.0364838-0.2440186,0.0572643-0.2865295c0.0908394-0.1858749,0.2478104-0.1925049,0.3296471-0.3812943  c0.0611916-0.1411285,0.0386505-0.2048264,0.0687733-0.3093414c0.0907707-0.3145523,0.5036087-0.4613647,1.0647545-0.6530609  c0.1953506-0.0667419,1.4084797-0.0667419,1.603899,0c0.5610771,0.1916962,0.9739838,0.3385086,1.0647545,0.6530609  c0.0301208,0.1045151,0.0075798,0.1682129,0.0687714,0.3093414c0.0818367,0.1887894,0.2388077,0.1954193,0.3296471,0.3812943  c0.0207825,0.042511,0.0366211,0.0893478,0.0572662,0.2865295c0.0377007,0.3603821,0.030323,0.5975647,0.030323,0.5975647  c-0.0014877,0.0462265,0.0048065,0.3395309,0.0173988,0.9261932c0.0043983,0.203064,0.0160408,0.6957092,0.0830536,1.2682953  c0.0344543,0.2947845,0.0940208,0.6996384,0.2036095,1.1802292H31.093256z M35.4023628,62.1227379h-8.5529594V48.7178726h8.5529594  V62.1227379z M39.2494888,36.9285507c0.1095886-0.4805946,0.1691551-0.8854446,0.2036095-1.180233  c0.0669441-0.5725822,0.0786552-1.0652275,0.0829849-1.2682953c0.0125923-0.5866623,0.0188866-0.8799629,0.0174637-0.9260597  c0,0-0.0073776-0.2373161,0.0303268-0.5976944c0.0206451-0.1971817,0.0364838-0.2440224,0.0572662-0.2865295  c0.0908394-0.1858749,0.2478104-0.1925087,0.3296471-0.3812943c0.0611916-0.1411324,0.0386505-0.2048302,0.0687714-0.3093414  c0.0907707-0.3145523,0.5036087-0.4613705,1.0647545-0.6530666c0.1953506-0.0667419,1.4084778-0.0667419,1.6038971,0  c0.5610771,0.1916962,0.9739838,0.3385143,1.0647545,0.6530666c0.0301208,0.1045113,0.0075836,0.1682091,0.0687714,0.3093414  c0.0818367,0.1887856,0.2388115,0.1954193,0.3296509,0.3812943c0.0207787,0.0425072,0.0366173,0.0893478,0.0572624,0.2865295  c0.0377045,0.3603783,0.0303268,0.5975609,0.0303268,0.5975609c-0.0014915,0.0462303,0.0048065,0.3395309,0.017395,0.9261932  c0.0043983,0.2030678,0.0160408,0.695713,0.0830536,1.2682953c0.0344543,0.2947884,0.0940208,0.6996384,0.2036095,1.180233  h-2.6568069H39.2494888z M51.3060493,79.1021423h-4.431015h-4.4310837v-6.977356  c0.6845436-4.8789825,4.4310837-5.9462357,4.4310837-5.9462357s3.7464714,1.0672531,4.431015,5.9462357V79.1021423z   M51.8437729,36.9285507h-2.6568069c0.1095886-0.4805946,0.1691551-0.8854446,0.2036095-1.180233  c0.0670128-0.5725822,0.0786552-1.0652275,0.0830536-1.2682953c0.0125885-0.5866623,0.0188866-0.8799629,0.017395-0.9260597  c0,0-0.0073776-0.2373161,0.0303268-0.5976944c0.0206451-0.1971817,0.0364838-0.2440224,0.0572624-0.2865295  c0.0908394-0.1858749,0.2478142-0.1925087,0.3296509-0.3812943c0.0611877-0.1411324,0.0386505-0.2048302,0.0687714-0.3093414  c0.0907707-0.3145523,0.5036774-0.4613705,1.0647545-0.6530666c0.1954193-0.0667419,1.4085464-0.0667419,1.6038971,0  c0.5611458,0.1916962,0.9740524,0.3385143,1.0647545,0.6530666c0.0301895,0.1045113,0.0075798,0.1682091,0.0687714,0.3093414  c0.0818367,0.1887856,0.2388077,0.1954193,0.3296471,0.3812943c0.0207825,0.0425072,0.0366211,0.0893478,0.0572662,0.2865295  c0.0377045,0.3603783,0.0303268,0.5975609,0.0303268,0.5975609c-0.0014229,0.0462303,0.0048714,0.3395309,0.0174637,0.9261932  c0.0043297,0.2030678,0.0160408,0.695713,0.0829849,1.2682953c0.0344543,0.2947884,0.0940208,0.6996384,0.2036095,1.180233  H51.8437729z M62.6567421,76.6225433h-2.6568069c0.1095886-0.4805908,0.1691551-0.8854446,0.2036095-1.1802292  c0.0670128-0.5725861,0.0786552-1.0652313,0.0830536-1.2682953c0.0125923-0.5866623,0.0188866-0.8799667,0.0173988-0.9260559  c0,0-0.0073776-0.2373199,0.030323-0.597702c0.0206451-0.1971817,0.0364838-0.2440186,0.0572662-0.2865295  c0.0908394-0.1858749,0.2478104-0.1925049,0.3296471-0.3812943c0.0611916-0.1411285,0.0386505-0.2048264,0.0687714-0.3093414  c0.0907707-0.3145523,0.5036774-0.4613647,1.0647545-0.6530609c0.1954193-0.0667419,1.4085464-0.0667419,1.6039009,0  c0.5611458,0.1916962,0.9740486,0.3385086,1.0647545,0.6530609c0.0301895,0.1045151,0.007576,0.1682129,0.0687714,0.3093414  c0.0818329,0.1887894,0.2388077,0.1954193,0.3296432,0.3812943c0.0207825,0.042511,0.0366211,0.0893478,0.0572662,0.2865295  c0.0377045,0.3603821,0.0303268,0.5975647,0.0303268,0.5975647c-0.0014191,0.0462265,0.0048752,0.3395309,0.0174637,0.9261932  c0.0043335,0.203064,0.0160446,0.6957092,0.0829849,1.2682953c0.0344543,0.2947845,0.0940247,0.6996384,0.2036133,1.1802292  H62.6567421z M66.9005966,62.1227379h-8.5529594V48.7178726h8.5529594V62.1227379z M70.3926926,75.4423141  c0.067009-0.5725861,0.0786514-1.0652313,0.0830536-1.2682953c0.0125885-0.5866623,0.0188828-0.8799667,0.017395-0.9260559  c0,0-0.0073776-0.2373199,0.0303268-0.597702c0.0206451-0.1971817,0.0364838-0.2440186,0.0572662-0.2865295  c0.0908356-0.1858749,0.2478104-0.1925049,0.3296432-0.3812943c0.0611954-0.1411285,0.0386505-0.2048264,0.0687714-0.3093414  c0.0907745-0.3145523,0.5036774-0.4613647,1.0647583-0.6530609c0.1954193-0.0667419,1.4085464-0.0667419,1.6038971,0  c0.561142,0.1916962,0.9740524,0.3385086,1.0647507,0.6530609c0.0301895,0.1045151,0.0075836,0.1682129,0.068779,0.3093414  c0.0818329,0.1887894,0.2388077,0.1954193,0.3296432,0.3812943c0.0207825,0.042511,0.0366211,0.0893478,0.0572662,0.2865295  c0.0377045,0.3603821,0.0303268,0.5975647,0.0303268,0.5975647c-0.0014267,0.0462265,0.0048752,0.3395309,0.0174637,0.9261932  c0.0043335,0.203064,0.016037,0.6957092,0.0829849,1.2682953c0.0344543,0.2947845,0.0940247,0.6996384,0.2036133,1.1802292  h-2.6567459h-2.6568069C70.2986679,76.1419525,70.3582382,75.7370987,70.3926926,75.4423141z";
        this.devi = "M60.714,32.747c-0.63-2.243-2.551-6.219-7.37-6.219h-0.632c-0.404-0.657-0.64-1.708,0.521-2.963     c1.123-1.06,1.838-2.648,1.838-4.426c0-0.217-0.013-0.431-0.034-0.643h0.045c0,0,0.516-0.806,0.781-1.935     c1.499-1.511,2.427-3.588,2.427-5.88c0-4.606-3.747-8.353-8.353-8.353c-4.606,0-8.354,3.747-8.354,8.353     c0,2.299,0.934,4.384,2.442,5.896c0.266,1.121,0.778,1.918,0.778,1.918h0.034c-0.021,0.211-0.034,0.425-0.034,0.643     c0,1.701,0.658,3.225,1.697,4.282c0,0-0.001,0-0.001,0s0.009,0.008,0.019,0.018c0.033,0.033,0.065,0.068,0.098,0.101     c0.334,0.357,1.235,1.511,0.626,2.988h-0.727c-4.819,0-6.742,3.976-7.369,6.219l-3.965,18.925     c0.436,0.28,1.015,0.582,1.655,0.711c0.329,0.084,0.669,0.104,0.991,0.119c0.321-0.011,0.629-0.007,0.89-0.061     c0.08-0.009,0.148-0.021,0.219-0.032l4.214-13.507c0.272,0.295,0.578,0.553,0.919,0.768c0.332,1.348,0.335,3.776-1.399,7.823     c-0.793,1.852-1.485,4.836-1.485,9.797c-0.054,2.969,1.561,9.724,2.173,16.627c0.644,7.265,0.297,14.704,0.691,18.458     c0.06,0.019,0.113,0.036,0.177,0.055c0.321,0.098,0.695,0.181,1.088,0.253c0.396,0.056,0.813,0.111,1.231,0.093     c0.419,0.013,0.832-0.056,1.23-0.11c0.198-0.043,0.39-0.085,0.571-0.125c0.147-0.03,0.278-0.076,0.41-0.115l1.103,0.354     l1.247-0.386c0.042,0.013,0.077,0.025,0.121,0.037c0.321,0.098,0.695,0.181,1.088,0.253c0.396,0.056,0.813,0.111,1.231,0.093     c0.419,0.013,0.832-0.056,1.23-0.11c0.198-0.043,0.39-0.085,0.571-0.125c0.164-0.033,0.312-0.089,0.46-0.129     c0.386-3.683-0.254-11.313,0.386-18.494c0.626-7.025,2.537-13.609,2.482-16.627c0-4.961-1.207-7.982-2.12-9.797     c-1.753-4.35-1.365-6.661-0.797-7.806c0.323-0.2,0.621-0.433,0.884-0.705l4.178,13.777c0.539,0.033,1.265,0.013,1.949-0.226     c0.326-0.096,0.628-0.252,0.913-0.404c0.27-0.174,0.537-0.327,0.734-0.506c0.081-0.06,0.148-0.118,0.215-0.174L60.714,32.747z      M44.256,13.508c-0.426-0.853-0.672-1.81-0.672-2.827c0-3.503,2.85-6.353,6.354-6.353c3.503,0,6.353,2.85,6.353,6.353     c0,1.011-0.244,1.964-0.665,2.813c-0.282-0.609-0.732-1.208-1.44-1.75c-3.512-2.689-4.247-3.677-4.247-3.677     s-0.724,0.988-4.236,3.677C44.988,12.291,44.537,12.894,44.256,13.508z M51.24,12.166c0,0.76-0.619,1.379-1.379,1.379     s-1.379-0.619-1.379-1.379c0-0.76,0.619-1.378,1.379-1.378S51.24,11.407,51.24,12.166z M49.861,47.7     c-0.379,0-0.686-0.313-0.686-0.7c0-0.387,0.307-0.7,0.686-0.7s0.686,0.313,0.686,0.7C50.546,47.386,50.239,47.7,49.861,47.7z      M51.785,14.772c-0.293,0.003-0.592,0.03-0.888,0.089c-0.291,0.052-0.604,0.137-0.857,0.229l-0.157,0.057l-0.178-0.049     l-0.872-0.242c-0.288-0.024-0.585-0.098-0.866-0.09l-0.424,0.006c-0.137,0.018-0.266,0.058-0.402,0.084     c-0.142,0.013-0.251,0.094-0.379,0.142c-0.132,0.042-0.245,0.117-0.352,0.203c-0.118,0.073-0.225,0.161-0.315,0.272     c-0.1,0.1-0.197,0.205-0.276,0.33c-0.179,0.231-0.316,0.506-0.433,0.79c-0.254,0.568-0.387,1.198-0.477,1.844     c-0.132-0.646-0.1-1.315,0.014-1.986c0.067-0.333,0.174-0.667,0.339-0.982c0.068-0.165,0.17-0.314,0.284-0.458     c0.101-0.154,0.226-0.288,0.37-0.408c0.134-0.132,0.278-0.251,0.447-0.336c0.164-0.091,0.326-0.2,0.507-0.24     c0.178-0.051,0.357-0.115,0.538-0.151l0.544-0.051c0.365-0.037,0.707,0.05,1.062,0.073l0.836,0.21     c0.297-0.095,0.58-0.161,0.878-0.211c0.349-0.058,0.706-0.091,1.069-0.076c0.361,0.014,0.728,0.069,1.085,0.186     c0.355,0.11,0.705,0.285,0.991,0.538c0.158,0.108,0.277,0.256,0.394,0.403c0.125,0.142,0.235,0.29,0.302,0.463     c0.071,0.168,0.175,0.323,0.213,0.497l0.128,0.512c0.05,0.168,0.029,0.345,0.046,0.514l0.02,0.507     c-0.027,0.336-0.066,0.669-0.114,0.995c-0.061-0.33-0.113-0.653-0.152-0.973L54.581,17c-0.052-0.15-0.067-0.312-0.147-0.448     l-0.185-0.421c-0.054-0.143-0.165-0.249-0.241-0.373c-0.075-0.127-0.171-0.232-0.28-0.324c-0.1-0.1-0.197-0.2-0.325-0.261     c-0.12-0.07-0.228-0.154-0.366-0.19c-0.131-0.047-0.251-0.113-0.396-0.131C52.369,14.786,52.078,14.762,51.785,14.772z";
        this.gendo = "M92.429,51.914c0,0,0.032-0.482-0.48-0.482c0,0-2.706-3.733-1.68-10.575c0,0,0.214-3.507-3.292-4.875  c0,0-2.438-6.244-8.254-7.056c0,0-8.49-0.308-9.966-1.206c0,0-3.785-1.54-7.249,0c0,0-10.522,2.822-15.974,0.77  c0,0-3.721-2.117-8.533-0.578c0,0-7.89,0.257-11.483,7.377c0,0-1.733,3.016-3.08,2.438c0,0-6.094-2.438-8.146-2.438  c0,0-1.284,0,0,1.412c0,0,2.822,3.335,5.388,3.528c0,0-0.064,6.607-3.271,9.108c0,0-2.683-0.536-2.233,2.384  c0,0-0.619,0.993-0.454,1.442c0,0-4.709,0.962-5.672-3.495c0,0-0.321-1.219-0.706,0c0,0-0.464,5.983,4.882,9.704  c0,0,0.983,0.983,0.727,1.71c0,0-0.727,2.48,0.685,3.165c0,0-0.428,0.983,2.266,0.299c0,0,8.767-2.309,10.905-7.868  c0,0,2.737-2.181,2.865-4.875c0,0,1.753,0.983,2.694,0.77c0,0-0.042,2.139,0.556,3.507c0,0,0.856,3.678,0,5.602  c0,0-0.556,2.139-0.128,3.25c0,0-0.043,3.079-3.165,4.319c0,0-1.667,0.514-1.54,2.438c0,0,3.592,1.283,8.682-0.171  c0,0,1.197-1.197-0.813-2.908c0,0,2.224-2.181,1.753-4.147c0,0,1.411-1.155,1.155-1.668c0,0-0.342-2.908,1.497-3.806  c0,0-0.385,2.779,0.428,3.635c0,0,1.54,2.736-0.043,4.875c0,0-1.967,0.599-1.796,2.138c0,0,1.326,2.737,6.03,1.839  c0,0,2.01-0.128,1.112-1.924c0,0-1.112-1.369-0.941-2.096c0,0,1.24-2.608,1.026-4.875c0,0-1.038-4.576,0.358-6.5  c0,0,0.668-0.685,1.909-0.171c0,0,9.835,2.48,14.197,0.94c0,0,5.047-1.71,6.372-2.993c0,0,4.404-5.26,4.575-3.122  c0,0,0.984,3.807,3.208,4.961c0,0,2.138,2.096,2.095,4.918c0,0,0.449,3.907-0.563,6.328c-3.947-0.117-4.955,1.9-4.955,1.9  c-0.076,0.981,0.694,1.475,1.34,1.714c-0.406,0.53-0.678,1.114-0.611,1.688c0,0,5.56,1.968,8.596-0.599c0,0,0.468-1.324-0.234-1.928  c2.921-1.927,3.984-8.56,3.984-8.56l0,0c0.859-0.307,2.019-0.951,1.339-2.085c0,0-0.514-3.079-2.224-4.618  c0,0,3.167-6.672,3.221-10.743c0.306,2.688,1.133,8.399,2.723,9.503c0,0,0.889,0.56,0.535-0.403  C92.044,52.812,93.134,52.363,92.429,51.914z";
        this.c = [];
        this.ch = [];
        this.l = [];
        this.state = [];
        this.show = false;
        this.buttonName = 'Show';
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
        this.services.getgisstates().subscribe(function (data) { return _this.state = data; });
    }
    IndiaChartComponent.prototype.ngOnInit = function () {
        // this.services.getallquestions().subscribe(data => this.Questions = data);
        // this.getmap(); 
        // this.start();         
    };
    IndiaChartComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    IndiaChartComponent.prototype.getmap = function () {
        var _this = this;
        this.chart = this.AmCharts.makeChart("mapdiv1", {
            "type": "map",
            "addClassNames": true,
            "fontSize": 15,
            "projection": "mercator",
            "backgroundAlpha": 1,
            "export": {
                "enabled": true
            },
            "balloon": {
                "textAlign": "left"
            },
            "dataProvider": {
                // "map": "indiaLow",
                "mapURL": "assets/js/amp/ammap/maps/svg/indiaLow.svg",
                // "mapURL": "assets/js/amp/ammap/maps/js/indiaLow.js",
                "areas": this.d,
                "images": this.c,
                "lines": this.l,
                "getAreasFromMap": true
            },
            "areasSettings": {
                "autoZoom": true,
                "selectedColor": "#CC0000",
            },
            "imagesSettings": {
                "balloonText": "[[customData]]",
                rollOverScale: 3,
                selectedScale: 3,
                color: "#585869",
                rollOverColor: "#585869",
                selectedColor: "#585869",
            },
            "linesSettings": {
                // "arc": 0.2, // this makes lines curved. Use value from -1 to 1
                "color": "rgba(139,133,,33,1)",
                "alpha": 0.4,
            },
        });
        this.AmCharts.updateChart(this.chart, function () {
            _this.chart.addListener("clickMapObject", function (event) {
                document.getElementById("info").innerHTML = '<table  class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%"><thead style="background-color: #a50334; color: white;"><tr><th style="font-size: 12px">રાજ્ય</th><th style="font-size: 12px">રાજધાની</th><th style="font-size: 12px">મુખ્ય મંત્રી</th><th style="font-size: 12px">રાજ્યપાલ</th></tr></thead><tbody><tr><td>' + event.mapObject.title + '</td><td>' + event.mapObject.C + '</td><td nowrap="nowrap">' + event.mapObject.CM + '</td><td nowrap="nowrap">' + event.mapObject.GV + '</td></tr></tbody></Table>';
            });
        });
    };
    IndiaChartComponent.prototype.start = function () {
        // alert(JSON.stringify(this.state));
        this.l = [];
        this.c = [
            {
                "svgPath": this.targetSVG,
                "title": "નવી દિલ્હી",
                "customData": "<img src='../../../assets/capitals/newdelhi.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>નવી દિલ્હી</b>નવી દિલ્હી ભારતની રાજધાની છે અને દિલ્હી શહેરના 11 જિલ્લાઓ પૈકી એક છે. રાષ્ટ્રીય કેપિટલ ટેરિટરી દિલ્હીનો ઉલ્લેખ કરવા માટે બોલચાલની ભાષામાં દિલ્હી અને નવી દિલ્હી એકબીજાથી વાપરવામાં આવે છે</p>",
                color: "#4caf50",
                "scale": 0.5,
                latitude: 28.608629,
                longitude: 77.208973
            },
            {
                "id": "IN-GJ",
                "type": "circle",
                "scale": 0.5,
                title: "ગાંધીનગર",
                "customData": "<img src='../../../assets/capitals/gandhinagar.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગાંધીનગર</b>ગાંધીનગર પશ્ચિમ ભારતમાં ગુજરાત રાજ્યની રાજધાની છે. ગાંધીનગર અમદાવાદની ઉત્તરે 23 કિ.મી. ઉત્તરથી દિલ્હી વચ્ચેના ઔદ્યોગિક કોરીડોરના પશ્ચિમ કેન્દ્રીય બિંદુ પર સ્થિત છે</p>",
                latitude: 23.214699,
                longitude: 72.643828
            },
            {
                id: "IN-TG",
                type: "circle",
                "scale": 0.5,
                "customData": "<img src='../../../assets/capitals/haidrabad.jgp' style='width: 100px; float: left; margin-right: 10px;' /><p>હૈદરાબાદ<b>હૈદરાબાદ દક્ષિણ ભારતના તેલંગણા રાજ્યની રાજધાની છે. ટેક્નોલોજી ઉદ્યોગ માટેનું એક મુખ્ય કેન્દ્ર, તે ઘણાં અપસ્કેલ રેસ્ટોરન્ટ્સ અને દુકાનોનું ઘર છે. તેની ઐતિહાસિક સ્થળોમાં ગોલકોન્ડા કિલ્લોનો સમાવેશ થાય છે, જે અગાઉના હીરા-આકડાના કેન્દ્ર છે, જે એક વખત કુતુબ શાહી વંશની રાજધાની હતું. ચર્મિનર, 16 મી સદીની મસ્જિદ, જેનો 4 કમાનો ઉંચા મિનારાઓને ટેકો આપે છે, લાંબા સમયથી લાડ બજાર નજીક એક જૂનું શહેર સીમાચિહ્ન છે.</p>",
                title: "હૈદરાબાદ",
                latitude: 17.400359,
                longitude: 78.462922
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "પોર્ટ બ્લેયર",
                "customData": "<img src='../../../assets/capitals/portblair.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>પોર્ટ બ્લેયર-</b>દક્ષિણ આંદામાન ટાપુ પર પોર્ટ બ્લેયર, અંદામાન અને નિકોબાર ટાપુઓની રાજધાની છે, બંગાળની ખાડીમાં ભારતીય પ્રદેશ. તેના દરિયાઈ સેલ્યુલર જેલ, 1906 માં પૂર્ણ થઈ, તેના ભૂતકાળમાં બ્રિટીશ શિક્ષાત્મક વસાહત તરીકે સંકેત આપ્યો હતો અને તે હવે ભારતીય સ્વતંત્રતા કાર્યકર્તાઓ માટે એક સ્મારક છે. અંતર્દેશીય, સમુદ્રીકા મરીન મ્યુઝિયમ સ્થાનિક દરિયાઇ જીવન દર્શાવે છે. એન્થ્રોપૉલોજિકલ મ્યુઝિયમ એ ટાપુઓ 'સ્વદેશી જાતિઓ પર ધ્યાન કેન્દ્રિત કરે છે.</p>",
                color: "#4caf50",
                latitude: 11.623377,
                longitude: 92.726483
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "અમરાવતી",
                "customData": "<img src='../../../assets/capitals/amravati.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>અમરાવતી:</b>અમરાવતી એ ભારતના આંધ્રપ્રદેશ રાજ્યનું વાસ્તવિક રાજધાની છે. આયોજિત શહેર, આંધ્રપ્રદેશ કેપિટલ રિજનની અંદર, ગુંટુર જીલ્લામાં કૃષ્ણા નદીના દક્ષિણી કિનારે સ્થિત છે</p>",
                latitude: 16.572983,
                longitude: 80.357513
            },
            {
                id: "IN-AR",
                type: "circle",
                "scale": 0.5,
                title: "ઇટાનગર",
                "customData": "<img src='../../../assets/capitals/itanagar.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ઇટાનગર</b>ઇટાનગર ઉત્તરપૂર્વીય ભારતીય રાજ્ય અરુણાચલ પ્રદેશની રાજધાની છે. હિમાલયની તળેટીમાં સેટ કરો, શહેર મધ્યયુગીન ઈટા ફોર્ટ અને જવાહરલાલ નહેરુ સ્ટેટ મ્યૂઝિયમનું ઘર છે, જે કાપડ અને હસ્તકલાનું પ્રદર્શન કરે છે. નજીકના ગોમ્પા, પીળા-છાપરાવાળા બૌદ્ધ મંદિર, દલાઈ લામા દ્વારા પવિત્ર કરવામાં આવ્યા હતા. નગરનો પશ્ચિમ ગિકર સીનીંગ છે, જેને ગંગા તળાવ તરીકે પણ ઓળખવામાં આવે છે, જંગલો, ઓર્કિડ અને ફર્ન દ્વારા ઘેરાયેલા છે.</p>",
                latitude: 27.084368,
                longitude: 93.605316
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "દિસપુર",
                "customData": "<img src='../../../assets/capitals/dishpur.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>દિસપુર</b>ડિસ્પુર ભારતમાં આસામ રાજ્યની રાજધાની છે. ડિસ્પુર, ગુવાહાટીનું સ્થળ, 1973 માં આસામની રાજધાની બન્યું. આ પછીની રાજધાની શિલ્ંગ, મેઘાલય રાજ્યની રાજધાની બન્યું, જે આસામથી રચવામાં આવ્યું હતું.</p>",
                latitude: 26.143346,
                longitude: 91.789795
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "પટણા",
                "customData": "<img src='../../../assets/capitals/patna.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>પટણા</b>પટણા એક પ્રાચીન શહેર છે જે બિહારમાં ગંગા નદીના દક્ષિણ કિનારે ઉત્તરે છે, ઉત્તરપૂર્વ ભારત. રાજયની રાજધાની, તે બિહાર મ્યુઝિયમનું ઘર છે, જે એક સમકાલીન સીમાચિહ્ન પ્રદર્શન કરે છે જેમાં કાંસાની શિલ્પો અને જૂના સિક્કાઓનો પ્રદેશ છે. નજીકમાં, ઇન્ડો-સાર્સેનિક-શૈલી પટણા મ્યુઝિયમમાં કાસ્કેટનું પ્રદર્શન છે જે બુદ્ધના રાખને માનતા હતા. નદીની નજીક, ગોળघर એક ગુંબજ ધરાવતો વસાહતી અનાજના દાણા છે જે શહેરની નજીક છે.</p>",
                latitude: 25.594095,
                longitude: 85.137565
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "ચંદીગઢ",
                "customData": "<img src='../../../assets/capitals/chandigarth.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ચંદીગઢ</b>ચંદીગઢ, પંજાબ અને હરિયાણાના ઉત્તરીય ભારતીય રાજ્યોની રાજધાની, સ્વિસ-ફ્રેંચના આધુનિકતાવાદી આર્કિટેક્ટ, લે કોર્બિઝિયર દ્વારા ડિઝાઇન કરવામાં આવી હતી. તેમની ઇમારતોમાં તેના હાઇકોર્ટ, સચિવાલય અને વિધાનસભા, તેમજ વિશાળ ઓપન હેન્ડ સ્મારક સાથે કેપિટલ કૉમ્પલેક્સનો સમાવેશ થાય છે. નજીકના રૉક ગાર્ડન એ પથ્થરો, રિસાયકલ કરેલ સિરામિક્સ અને ઔદ્યોગિક અવશેષોના શિલ્પો દર્શાવતા એક પાર્ક છે.</p>",
                color: "#4caf50",
                latitude: 30.733315,
                longitude: 76.779418
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "સિલ્વાસા",
                "customData": "<img src='../../../assets/capitals/silvassa.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>સિલ્વાસા</b>સિલ્વાસા; ભારતીય કેન્દ્રશાસિત પ્રદેશ દાદરા અને નગર હવેલીની રાજધાની છે. પોર્ટુગીઝ શાસન દરમિયાન, સિલ્વેસ્સાને વિલા દે પાકો ડી'આર્કસ તરીકે પણ ઓળખવામાં આવતો હતો, લિસ્બન પાસે એક જ નામના નગર પછી</p>",
                color: "#4caf50",
                latitude: 20.276266,
                longitude: 73.008306
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "દમણ",
                "customData": "<img src='../../../assets/capitals/daman.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>દમણ:</b>દમણ જિલ્લા ભારતના પશ્ચિમ કિનારે દમણ અને દીવના કેન્દ્રશાસિત પ્રદેશના બે જિલ્લાઓમાંનું એક છે, જે ઉત્તર, પૂર્વ અને દક્ષિણમાં વલસાડ જિલ્લા અને પશ્ચિમ તરફ ફારસી ગલ્ફથી ઘેરાયેલું છે.</p>",
                color: "#4caf50",
                latitude: 20.797373,
                longitude: 70.767380
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "પણજી",
                "customData": "<img src='../../../assets/capitals/panji.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>પણજી</b>પણજી, જેને પંજીમ તરીકે પણ ઓળખવામાં આવે છે, તે દક્ષિણપશ્ચિમ ભારતની ગોવા રાજ્યની રાજધાની છે. માન્દોવી નદીના કિનારે આવેલું, શહેરમાં રંગબેરંગી વિલાસની સાથે પોર્ટુગીઝ વસાહતી યુગની ઇમારતોની લાઇનવાળી સીબ્લેસ્ટોન શેરીઓ છે. પામ-ફ્રિંજ્ડ મીરામાર બીચ નદી અને અરબી સમુદ્રના સંગમ પર આવેલો છે. શહેરની નજીકના ટેકરી પર સેટ કરો, 161 9 માં બિલ્ટ ઇન ઇમમક્યુલેટ કન્સેપ્શન ચર્ચની અવર લેડી છે.</p>",
                latitude: 15.490930,
                longitude: 73.827850
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "શિમલા",
                "customData": "<img src='../../../assets/capitals/shimla.JPG' style='width: 100px; float: left; margin-right: 10px;' /><p><b>શિમલા</b>શિમલા હિમાચલ પ્રદેશની ઉત્તરીય ભારતીય રાજ્યની રાજધાની છે, હિમાલયન તળેટીમાં. બ્રિટિશ ભારતની ઉનાળુ રાજધાની એકવાર, તે કોલકા-શિમલા રેલવેની ટર્મિનસ છે, જે 1903 માં પૂર્ણ થયેલ છે. તે હાથવણાટની દુકાનો માટે પણ જાણીતી છે, જે ધ મોલ, એક રાહદારી એવન્યુ, તેમજ લક્કર બઝાર લાકડાના રમકડાં અને હસ્તકળામાં વિશેષતાવાળી બજાર</p>",
                latitude: 31.104814,
                longitude: 77.173403
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "શ્રીનગર",
                "customData": "<img src='../../../assets/capitals/shrinagar.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>શ્રીનગર</b>શ્રીનગર જમ્મુ અને કાશ્મીરનું ભારતનું સૌથી મોટું શહેર અને ઉનાળુ રાજધાની છે. તે કાશ્મીર ખીણમાં જેલમ નદીના કાંઠે આવેલું છે, જે સિંધુની એક સહાયકારી નદી છે, અને દાલ અને અછર તળાવો છે.</p>",
                latitude: 34.083671,
                longitude: 74.797282
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "રાંચી",
                "customData": "<img src='../../../assets/capitals/ranchi.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>રાંચી</b>રાંચી ઉત્તર-પૂર્વ ભારતમાં ઝારખંડની રાજધાની છે. કેન્દ્રીય રાંચી હિલની ટોચ પર, પહારી મંડિ એ શિવને સમર્પિત એક હિન્દુ મંદિર છે, જે વિશાળ શહેરની દૃશ્યો છે. નજીકના, પાંદડાવાળા નક્ષત્ર વેન રાશિનાં તારાઓનું પ્રતિનિધિત્વ કરવા માટે વૃક્ષો ઉભા કરે છે. આ પ્રદેશ તેના આદિજાતિ વારસા માટે જાણીતું છે, અને આદિજાતિ સંગ્રહાલયમાં પ્રદર્શનો રાજ્યના અનેક જાતિઓમાંથી સંગીતવાદ્યો વગાડવા અને જ્વેલરીનો સમાવેશ કરે છે.</p>",
                latitude: 23.344100,
                longitude: 85.309562
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "બેંગલુરુ",
                "customData": "<img src='../../../assets/capitals/benglur.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>બેંગલુરુ</b>બેંગલુરુ (જેને બેંગલોર પણ કહેવાય છે) ભારતના દક્ષિણ કર્ણાટક રાજ્યની રાજધાની છે. ભારતના હાઇ-ટેક ઉદ્યોગનું કેન્દ્ર, શહેર તેના પાર્ક્સ અને નાઇટલાઇફ માટે પણ જાણીતું છે. ક્યુબન પાર્ક દ્વારા, વિધાન સોધ્ધ નિયો-દ્રવિડિયન વિધાનસભા મકાન છે. ભૂતપૂર્વ શાહી નિવાસસ્થાનમાં 19 મી સદીના બેંગલોર પેલેસનો સમાવેશ થાય છે, જે ઇંગ્લેન્ડના વિન્ડસર કૅસલ અને 18 મી સદીના સાગના માળખામાં ટીપુ સુલ્તાનના સમર પેલેસનો સમાવેશ થાય છે.</p>",
                latitude: 12.971599,
                longitude: 77.594563
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "તિરુવનંતપુરમ",
                "customData": "<img src='../../../assets/capitals/truvanthanpuram.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>તિરુવનંતપુરમ</b>તિરુવનંતપુરમ (અથવા ત્રિવેન્દ્રમ) દક્ષિણ ભારતીય રાજ્ય કેરળની રાજધાની છે. તે તેના બ્રિટીશ વસાહતી સ્થાપત્ય અને અનેક આર્ટ ગેલેરી દ્વારા અલગ છે. તે કોથુરા મલિકા (અથવા પુટન મલિકા) પેલેસનું પણ ઘર છે, જે કોતરેલા ઘોડાઓથી સજ્જ છે અને ત્રાવણકોર શાહી પરિવાર સાથે સંકળાયેલ સંગ્રહ પ્રદર્શિત કરે છે, જેની પ્રાદેશિક મૂડી 18 મી -20 મી સદીથી અહીં હતી.</p>",
                latitude: 8.524139,
                longitude: 76.936638
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "ભોપાલ",
                "customData": "<img src='../../../assets/capitals/bhopal.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ભોપાલ</b>ભોપાલ મધ્ય ભારતના મધ્ય પ્રદેશમાં એક શહેર છે. તે ભારતના સૌથી હરિયાળા શહેરોમાંનું એક છે. બે મુખ્ય તળાવો, ઉચ્ચ તળાવ અને લોઅર લેક છે. ઉચ્ચ તળાવના કાંઠે વન્ય વિહાર રાષ્ટ્રીય ઉદ્યાન, વાઘ, સિંહ અને ચિત્તોનું ઘર છે. રાજ્ય મ્યુઝિયમમાં અવશેષો, પેઇન્ટિંગ અને દુર્લભ જૈન શિલ્પો છે. તાજ-ઉલ-મસ્જિદ એશિયાના સૌથી મોટા મસ્જિદમાંનું એક છે, જેમાં સફેદ ડોમ, માઇનરેટ્સ અને એક વિશાળ કોર્ટયાર્ડ છે.</p>",
                latitude: 23.259933,
                longitude: 77.412615
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "મુંબઈ",
                "customData": "<img src='../../../assets/capitals/mumbai.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>મુંબઈ</b>મુંબઈ (અગાઉનું બોમ્બે કહેવાય છે) એ ભારતના પશ્ચિમ કિનારા પર ગીચ વસ્તી ધરાવતું શહેર છે. એક નાણાકીય કેન્દ્ર, તે ભારતનું સૌથી મોટું શહેર છે. મુંબઇ હાર્બર વોટરફ્રન્ટ પર આઇકોનિક ગેટવે ઓફ ઇન્ડિયા પથ્થર કમાન છે, જે બ્રિટિશ રાજ દ્વારા 1 9 24 માં બાંધવામાં આવ્યું હતું. ઓફશોર, નજીકના એલિફન્ટા આઇસલેન્ડ, હિન્દૂ દેવ શિવને સમર્પિત પ્રાચીન ગુફા મંદિર ધરાવે છે. આ શહેર બૉલીવુડ ફિલ્મ ઉદ્યોગના હૃદય તરીકે પણ જાણીતું છે.</p>",
                latitude: 19.075984,
                longitude: 72.877656
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "ઈમ્ફાલ",
                "customData": "<img src='../../../assets/capitals/imphla.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ઈમ્ફાલ</b>ઈમ્ફાલ ભારતના મણિપુર રાજધાની શહેર છે. કંગલાના મહેલ, મણિપુરના ભૂતપૂર્વ કિંગડમની શાહી સીટ, શહેરના કેન્દ્રમાં છે, જે એક ખીણથી ઘેરાયેલું છે.</p>",
                latitude: 24.817011,
                longitude: 93.936844
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "શિલોંગ",
                "customData": "<img src='../../../assets/capitals/shilong.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>શિલોંગ</b>શિલોંગ એ ઉત્તરપૂર્વીય ભારતનું એક હિલ સ્ટેશન છે અને મેઘાલય રાજ્યની રાજધાની છે. તે લેડી હાયડરી પાર્કમાં બાયર્ડ બગીચાઓ માટે જાણીતું છે. નજીકમાં, વોર્ડની સરહદ વૉલીંગ ટ્રેઈલ્સથી ઘેરાયેલા છે. નોર્થ, ડોન બોસ્કો સેંટર ફોર ઇનડિજિનસ કલ્ચર્સ એ પ્રદેશના મૂળ લોકો પર પ્રદર્શિત કરે છે. ઝરણાંમાં દક્ષિણપશ્ચિમમાં હાથીફળનો સમાવેશ થાય છે. અહીંથી પૂર્વ, જંગલોમાં શિલૉંગ પીક શહેરની દૃશ્યો પ્રસ્તુત કરે છે.</p>",
                latitude: 25.578773,
                longitude: 91.893254
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "આઈઝોલ",
                "customData": "<img src='../../../assets/capitals/aizawl.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>આઈઝોલ</b>આઈઝોલ ભારતની મિઝોરમ રાજ્યની રાજધાની છે. 293,416 ની વસ્તી સાથે, તે રાજ્યમાં સૌથી મોટું શહેર છે</p>",
                latitude: 23.727107,
                longitude: 92.717639
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "કોહિમા",
                "customData": "<img src='../../../assets/capitals/kohima.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>કોહિમા</b>કોહિમા ભારતની ઉત્તર પૂર્વીય સરહદી રાજ્ય નાગાલેન્ડની પર્વતીય રાજધાની છે જે મ્યાનમાર સાથે તેની સરહદો ધરાવે છે. 99,039 ની વસતી ધરાવતી વસ્તી સાથે તે રાજ્યનો બીજો સૌથી મોટો શહેર છે</p>",
                latitude: 25.658596,
                longitude: 94.105331
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "ભુવનેશ્વર",
                "customData": "<img src='../../../assets/capitals/bhuvneshwar.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ભુવનેશ્વર</b>ભુવનેશ્વર ભારતના પૂર્વી રાજ્ય ઓડિશામાં એક પ્રાચીન શહેર છે, જે અગાઉ ઓરિસ્સામાં હતું. સેંડસ્ટોનથી બનેલા અનેક મંદિરો જૂના શહેરમાં બિંદુ સાગર તળાવની આસપાસ પથરાયેલાં છે, જેમાં 11 મી સદીના હિન્દુ લિંગરાજા મંદિરનો પણ સમાવેશ થાય છે. રાજરાની મંદિરની બહાર 8 કાર્ડિનલ અને ક્રમિક દિશામાં વાલીઓના મૂર્તિકળાના આંકડા છે. જૈન પ્રાચીન ચીજવસ્તુઓ, હથિયારો અને સ્વદેશી પટ્ટાત્રાત્રા ચિત્રો ઓડિશા રાજ્ય મ્યુઝિયમ ભરે છે.</p>",
                latitude: 20.296059,
                longitude: 85.824540
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "પુડુચેરી",
                "customData": "<img src='../../../assets/capitals/punducherry.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>પુડુચેરી</b>પુડુચેરી; શાબ્દિક નવી ટાઉન તમિલમાં, અગાઉ પોંડિચેરી તરીકે જાણીતું, માહે અને યાનન (યાનમ). તેનું સૌથી મોટું જિલ્લા પુંડુચેરી પછી નામ આપવામાં આવ્યું છે</p>",
                color: "#4caf50",
                latitude: 11.913860,
                longitude: 79.814472
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "રાયપુર",
                "customData": "<img src='../../../assets/capitals/raipur.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>રાયપુર</b>રાયપુર મધ્ય ભારતના છત્તીસગઢ રાજ્યની રાજધાની છે. કેન્દ્રમાં, પ્રાચીન દુધધારી મઠ મંદિર એ ભગવાન રામને સમર્પિત પવિત્ર સ્મારક છે, જે મહાકાવ્ય કવિતા 'રામાયણ' માંથી દ્રશ્યોથી શણગારવામાં આવે છે. નજીકના, વિવેકાનંદ સરોવર તળાવની ઉપર આવેલા હિન્દુ સાધુ સ્વામી વિવેકાનંદના ટાવરની પ્રતિમા. દક્ષિણપૂર્વીય પુરુખોતી મુક્તાંગાન મૂર્તિઓ અને આદિવાસી શિલ્પકૃતિઓ સાથે લેન્ડસ્કેપ મેદાનો સાથે ખુલ્લી જગ્યા સંગ્રહાલય છે.</p>",
                latitude: 21.251384,
                longitude: 81.629641
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "જયપુર",
                "customData": "<img src='../../../assets/capitals/jaipur.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>જયપુર</b>જયપુર ભારતના રાજસ્થાન રાજ્યની રાજધાની છે. તે શાહી પરિવારને રજૂ કરે છે કે જેણે આ પ્રદેશ પર એક વખત શાસન કર્યું હતું અને તે, 1727 માં સ્થાપના કરી જેને હવે ઓલ્ડ સિટી કહેવામાં આવે છે, અથવા તેના ટ્રેડમાર્ક બિલ્ડિંગ રંગ માટે 'પિંક સિટી' કહેવાય છે. તેની અદભૂત શેરી ગ્રિડ (ભારતમાં નોંધપાત્ર) ના કેન્દ્રમાં ભવ્ય, કોલોનડેટેડ સિટી પેલેસ સંકુલ છે. બગીચાઓ, ચોગાનો અને સંગ્રહાલયો સાથે, તેનો એક ભાગ હજુ શાહી નિવાસસ્થાન છે.</p>",
                latitude: 26.912434,
                longitude: 75.787271
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "ગંગટોક",
                "customData": "<img src='../../../assets/capitals/gangotak.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગંગટોક</b>ગંગટોક પર્વતીય ઉત્તર ભારતીય રાજ્ય સિક્કિમની રાજધાની છે. 1840 ના દાયકામાં બૌદ્ધ યાત્રાધામ તરીકેની સ્થાપના, બ્રિટીશ શાસન પછી શહેર સ્વતંત્ર રાજધાનીની રાજધાની બની ગયું હતું, પરંતુ 1975 માં ભારત જોડાયા. આજે તે તિબેટીયન બૌદ્ધ કેન્દ્ર અને સિક્કિમ્સના પર્વતારોહણ દ્વારા પર્વતારોહણ માટે પરમિટો અને પરિવહન માટેના હિકર્સનો આધાર છે. હિમાલયન પર્વતમાળાઓ</p>",
                latitude: 27.338936,
                longitude: 88.606504
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "ચેન્નાઇ",
                "customData": "<img src='../../../assets/capitals/chennai.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ચેન્નાઇ</b>પૂર્વીય ભારતમાં બંગાળની ખાડી પર, ચેન્નઈ, તામિલનાડુ રાજ્યની રાજધાની છે. આ શહેર ફોર્ટ સેંટ. જ્યોર્જનું ઘર છે, જે 1644 માં બંધાયું હતું અને હવે એક મ્યુઝિયમ જે બ્રિટીશ લશ્કરી લશ્કર અને ઇસ્ટ ઈન્ડિયા કંપની ટ્રેડિંગ ચોકી તરીકે શહેરની મૂળતાનું પ્રદર્શન કરે છે, જ્યારે તે મદ્રાસ તરીકે ઓળખાતું હતું. ધાર્મિક સ્થળોમાં કપલેશ્વરમાર મંદિરનો સમાવેશ થાય છે, જે કોતરેલા અને દોરવામાં દેવતાઓથી શણગારવામાં આવે છે, અને 17 મી સદીના એંગ્લિકન ચર્ચના સેન્ટ મેરીઝ છે.</p>",
                latitude: 13.082680,
                longitude: 80.270718
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "અગરતલા",
                "customData": "<img src='../../../assets/capitals/agartala.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>અગરતલા</b>અગરતલા ભારતના ત્રિપુરા રાજ્યની રાજધાની છે અને ગુવાહાટી પછી ઉત્તર-પૂર્વ ભારતનો બીજો સૌથી મોટો શહેર છે, જે મ્યુનિસિપલ વિસ્તાર અને વસતી એમ બંનેમાં છે. આ શહેર ત્રિપુરા સરકારની બેઠક છે</p>",
                latitude: 23.831457,
                longitude: 91.286778
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "લખનૌ",
                "customData": "<img src='../../../assets/capitals/lucknow.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>લખનૌ</b>લખનૌ, ઉત્તર ભારતનો મોટો શહેર ઉત્તર પ્રદેશ રાજ્યની રાજધાની છે. તેના કેન્દ્ર તરફ મુઘલ ગેટવે રૂમી દરવાજા છે. નજીકમાં, 18 મી સદીના બાર ઇમામબા તીર્થમાં વિશાળ કમાનવાળા ખંડ છે. ઉપર, ભુલ્લ ભુલેયા એ સાંકડી ટનલના રસ્તા છે, જે તેના ઉપલા બાલ્કનીથી શહેરના દૃશ્યો ધરાવે છે. બંધ, ગ્રાન્ડ વિક્ટોરિયન હુસેનાબાદ ઘડિયાળ ટાવરની રચના 1881 માં વિજયના સ્તંભ તરીકે કરવામાં આવી હતી.</p>",
                latitude: 26.846694,
                longitude: 80.946166
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "દેહરાદૂન",
                "customData": "<img src='../../../assets/capitals/dehradun.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>દેહરાદૂન</b>દેહરાદૂન હિમાલયની તળેટીઓની નજીક, ભારતના ઉત્તરાખંડ રાજ્યની રાજધાની છે. તેના કોર પર ઘનઘર ઘડિયાળ ટાવર 6 બાજુ છે. દક્ષિણપશ્ચિમમાં પલ્ટાન બઝાર, એક વ્યસ્ત શોપિંગ એરિયા છે. પૂર્વમાં શીખ મંદિર ગુરુદ્વારા નાનક્ષર છે, જે સફેદ અને સોનેરી ગોળાઓ સાથે ટોચ પર છે. ક્લેમેન્ટ ટાઉનમાં શહેરના દક્ષિણપશ્ચિમમાં, માઇન્ડ્રોલીંગ મઠ, તિબેટીયન બૌદ્ધ કેન્દ્ર છે, જે તેના મહાન સ્તૂપમાં તીર્થધામ સાથે છે.</p>",
                latitude: 30.316495,
                longitude: 78.032192
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "કોલકાતા",
                "customData": "<img src='../../../assets/capitals/kolkata.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>કોલકાતા</b>કોલકાતા (અગાઉ કલકત્તા) ભારતની પશ્ચિમ બંગાળ રાજ્યની રાજધાની છે. ઇસ્ટ ઇન્ડિયા કંપની ટ્રેડિંગ પોસ્ટ તરીકે સ્થાપના, 1773-19 11 થી બ્રિટિશ રાજ હેઠળ તે ભારતની રાજધાની હતી. આજે તે તેના ભવ્ય વસાહતી સ્થાપત્ય, આર્ટ ગેલેરી અને સાંસ્કૃતિક ઉત્સવો માટે જાણીતું છે. મધર ટેરેસા દ્વારા સ્થાપવામાં આવેલી મિશનરી ઓફ ચૅરિટિનું મુખ્ય મથક મધર હાઉસનું પણ ઘર છે, જેની કબર સાઇટ પર છે.</p>",
                latitude: 22.572646,
                longitude: 88.363895
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "કવરાટી",
                "customData": "<img src='../../../assets/capitals/kavaratti.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>કવરાટી</b>કાવારતી ભારતના કેન્દ્રશાસિત પ્રદેશ લક્ષદ્દીપની રાજધાની છે. કવરાત્તી એક વસતિ ગણતરી નગર છે અને એટોલનું નામ છે કે જેના પર નગર ઊભું છે</p>",
                color: "#4caf50",
                latitude: 10.559320,
                longitude: 72.635813
            }
        ];
        if (this.c["id"] == "IN - G") {
            alert("True");
        }
        this.d = this.state;
        this.getmap();
    };
    IndiaChartComponent.prototype.hide = function () {
        this.l = [];
        this.c = [];
        this.getmap();
    };
    IndiaChartComponent.prototype.coast = function () {
        this.c = [];
        this.l = [
            {
                "arc": 0.11,
                "selectable": true,
                "color": "rgba(75,216,181,0.8)",
                "thickness": 3.3,
                "dashLength": 0,
                "longitudes": [
                    67.9467,
                    70.1313
                ],
                "latitudes": [
                    23.1681,
                    20.2077
                ],
                "arrow": "none",
                "arrowSize": 19.799999999999997,
                "title": "Kutch and Kathiyavad"
            },
            {
                "arc": 0.07,
                "selectable": true,
                "color": "rgba(216,161,75,0.8)",
                "thickness": 3.3,
                "titles": [
                    {
                        "text": "Chart Title",
                        "size": 15
                    }
                ],
                "dashLength": 0,
                "longitudes": [
                    71.9336,
                    73.0805
                ],
                "latitudes": [
                    19.8464,
                    15.2382
                ],
                "arrow": "none",
                "arrowSize": 19.799999999999997,
                "title": "Table 2"
            },
            {
                "arc": 0,
                "selectable": true,
                "color": "rgba(184,216,75,0.8)",
                "thickness": 3.7,
                "dashLength": 0,
                "longitudes": [
                    73.299,
                    74.2821
                ],
                "latitudes": [
                    14.7075,
                    12.4111
                ],
                "arrow": "none",
                "arrowSize": 22.200000000000003
            },
            {
                "arc": 0,
                "selectable": true,
                "color": "rgba(75,184,216,0.8)",
                "thickness": 3.3,
                "dashLength": 0,
                "longitudes": [
                    74.4459,
                    76.4667
                ],
                "latitudes": [
                    12.089,
                    8.0329
                ],
                "arrow": "none",
                "arrowSize": 19.799999999999997
            },
            {
                "arc": 0.66,
                "selectable": true,
                "color": "rgba(184,75,216,0.8)",
                "thickness": 3.7,
                "dashLength": 0,
                "longitudes": [
                    78.4328,
                    80.9997
                ],
                "latitudes": [
                    7.8697,
                    13.1612
                ],
                "arrow": "none",
                "arrowSize": 22.200000000000003
            },
            {
                "arc": -0.63,
                "selectable": true,
                "color": "rgba(216,75,98,0.8)",
                "thickness": 3.9,
                "dashLength": 0,
                "longitudes": [
                    80.9997,
                    85.0412
                ],
                "latitudes": [
                    13.6955,
                    18.4973
                ],
                "arrow": "none",
                "arrowSize": 23.4
            },
            {
                "arc": 0.01,
                "selectable": true,
                "color": "rgba(75,216,75,0.8)",
                "thickness": 3.7,
                "dashLength": 0,
                "longitudes": [
                    85.5328,
                    88.8097
                ],
                "latitudes": [
                    18.8096,
                    21.7976
                ],
                "arrow": "none",
                "arrowSize": 22.200000000000003
            }
        ];
        this.getmap();
    };
    IndiaChartComponent.prototype.rivers = function () {
        this.c = [
            {
                // "svgPath": this.shipb,
                "positionOnLine": 0,
                "color": "#585869",
                "animateAlongLine": true,
                "lineId": "line1",
                "flipDirection": true,
                "loop": true,
                "scale": 0.3,
                "positionScale": 1.8,
                "animateAngle": false
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Gangotri",
                latitude: 30.9946,
                longitude: 78.9398,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Devprayag",
                latitude: 30.145947,
                longitude: 78.599293,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "hardvar",
                latitude: 29.945691,
                longitude: 78.164248,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Mujjafarnagar",
                latitude: 29.472682,
                longitude: 77.708509,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Aligadh",
                latitude: 27.897394,
                longitude: 78.088013,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "kanpur",
                latitude: 26.449923,
                longitude: 80.331874,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "alhabad",
                latitude: 25.435801,
                longitude: 81.846311,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "varansi",
                latitude: 25.317645,
                longitude: 82.973914,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "patna",
                latitude: 25.594095,
                longitude: 85.137565,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "bhagalpur",
                latitude: 25.347800,
                longitude: 86.982429,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Imrajbazar",
                latitude: 25.010841,
                longitude: 88.141097,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Baharampur",
                latitude: 24.098827,
                longitude: 88.267926,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "kolkatta",
                latitude: 22.572646,
                longitude: 88.363895,
            },
            {
                type: "circle",
                "scale": 0.5,
                title: "Haldia",
                latitude: 22.066674,
                longitude: 88.069812,
            },
        ];
        this.l = [
            {
                "id": "line1",
                //"arc": -0.20,
                "alpha": 0.9,
                "color": "#26c6da",
                "thickness": 2.5,
                "latitudes": [
                    30.9946, 30.145947, 29.945691, 29.472682,
                    27.897394, 26.449923, 25.435801, 25.317645,
                    25.594095, 25.010841, 25.347800, 24.098827,
                    22.572646, 22.066674,
                ],
                "longitudes": [
                    78.9398, 78.599293, 78.164248, 77.708509, 78.088013,
                    80.331874, 81.846311, 82.973914, 85.137565, 86.982429,
                    88.267926, 88.141097, 88.363895, 88.069812,
                ]
            }
        ];
        this.getmap();
    };
    IndiaChartComponent.prototype.Centuri = function () {
        this.l = [];
        this.c = [
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "ગીર ફોરેસ્ટ નેશનલ પાર્ક",
                color: "#4caf50",
                latitude: 21.124305,
                longitude: 70.824151,
                "customData": "<img src='../../../assets/parks/girlion.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "જિમ કોર્બેટ નેશનલ પાર્ક",
                color: "#4caf50",
                latitude: 29.530014,
                longitude: 78.774660,
                "customData": "<img src='../../../assets/parks/jimcarbot.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>જિમ કોર્બેટ નેશનલ પાર્ક:</b>જિમ કોર્બેટ રાષ્ટ્રીય ઉદ્યાન ઉત્તરીય ભારતના ઉત્તરાખંડ રાજ્યમાં જંગલોની વન્યજીવન અભયારણ્ય છે. વનસ્પતિ અને પ્રાણીસૃષ્ટિમાં સમૃદ્ધ, તે તેના બંગાળ વાઘ માટે જાણીતું છે. વાઘ, ચિત્તો અને જંગલી હાથીઓ સહિત પ્રાણીઓ, ધિકલા ઝોન ભટકતા. રામગંગા રિસર્વોઇરની કિનારે, સોનદાદી ઝોન હાથીઓ અને ચિત્તોનું ઘર છે, પક્ષીઓની સેંકડો પ્રજાતિઓ સાથે.</br>સ્થાપના: 1935</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "કૈમુર વન્યજીવ અભયારણ્ય",
                color: "#4caf50",
                latitude: 26.745990,
                longitude: 91.020324,
                "customData": "<img src='../../../assets/parks/Kaimur.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>કૈમુર વન્યજીવ અભયારણ્ય:</b>તે બિહારના કેમુર જિલ્લામાં ભબુઆ નજીક આવેલું છે. કૈમુર વન્યજીવન અભયારણ્ય અત્યંત ગરમ ઉનાળો દ્વારા વર્ગીકૃત થયેલ છે. તે કરટક અને તેલધર જેવા અનેક ધોધ અને અનુપમ તળાવ જેવા અનેક તળાવોનું ઘર છે. કૈમુર વન્યજીવન અભયારણ્ય બિહારમાં સૌથી મોટું વન્યજીવન અભયારણ્ય છે.</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "માનસ રાષ્ટ્રીય ઉદ્યાન",
                color: "#4caf50",
                latitude: 26.745990,
                longitude: 91.020324,
                "customData": "<img src='../../../assets/parks/manas.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>માનસ રાષ્ટ્રીય ઉદ્યાન:</b>માનસ રાષ્ટ્રીય ઉદ્યાન અથવા માનસ વન્યજીવન અભયારણ્ય એક રાષ્ટ્રીય ઉદ્યાન, યુનેસ્કો નેચરલ વર્લ્ડ હેરિટેજ સાઇટ, એક પ્રોજેક્ટ ટાઇગર અનામત, એક હાથી અનામત અને આસામ, એક બાયોસ્ફિયર અનામત છે.</br>સરનામું: માનસ નેશનલ પાર્ક, ફતેનાબાદ - મથાંગ્યુરી રોડ, જ્યોતિ ગાઓન, આસામ 781315</br>વિસ્તાર: 950 કિમી²</br> નાશપ્રાયઃ 1992- 2011</br>સ્થાપના: 1990</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "કાઝીરંગા નેશનલ પાર્ક",
                color: "#4caf50",
                latitude: 26.577531,
                longitude: 93.171122,
                "customData": "<img src='../../../assets/parks/kajiranga.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>કાઝીરંગા નેશનલ પાર્ક:</b>કાઝીરંગા રાષ્ટ્રીય ઉદ્યાન ઉત્તરપૂર્વીય ભારતીય રાજ્ય આસામનું સંરક્ષિત વિસ્તાર છે. બ્રહ્મપુત્ર નદીના પલળભૂમિમાં ફેલાવો, તેના જંગલો, ભીની ભૂમિ અને ઘાસનાં મેદાનો વાઘ, હાથીઓ અને ભારતીય એક-શિંગડાવાળી ગેંડાસની વિશ્વની સૌથી મોટી વસ્તીનું ઘર છે.</br>સરનામું: કાંચનજુરી, આસામ 784177</br>વિસ્તાર: 430 ચોરસ કિ.મી.</br>કલાક: ઓપન આજે · ઓપન 24 કલાક</br>સ્થાપના: 1908</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "હઝારીબાગ રાષ્ટ્રીય ઉદ્યાન",
                color: "#4caf50",
                latitude: 24.016432,
                longitude: 85.413187,
                "customData": "<img src='../../../assets/parks/Hazaribagh.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>હઝારીબાગ રાષ્ટ્રીય ઉદ્યાન:</b>હજારીબાગ નેશનલ પાર્ક, હઝારીબાગથી 19 કિમી, ઝારખંડ, ભારત અને રાંચીથી લગભગ 135 કિ.મી. દૂર આવેલું છે, તે રાષ્ટ્રીય ઉદ્યાન છે અને વન્યજીવન અભયારણ્ય પણ છે. આ પાર્કમાં વાઘ, પેન્થર્સ, સંધર્સ, સ્પોટેડ હરણ, બિસ્મસ અને સંખ્યાબંધ સસ્તન પ્રાણીઓ છે.</br>વિસ્તાર: 186.2 કિમી²</br> સ્થાન: ઝારખંડ, ભારત</br>સ્થાપના: 1976</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "દાલમા રાષ્ટ્રીય ઉદ્યાન",
                color: "#4caf50",
                latitude: 22.896529,
                longitude: 86.205684,
                "customData": "<img src='../../../assets/parks/dalma.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>દાલમા રાષ્ટ્રીય ઉદ્યાન:</b>દાલમા વન્યજીવન અભયારણ્ય ઝારખંડના ભારતીય રાજ્યમાં જમશેદ શહેરથી 10 કિમી દૂર સ્થિત છે. 1 9 75 માં સંજય ગાંધીએ તેનું ઉદ્ઘાટન કર્યું હતું</br>સરનામું: નેશનલ હાઇવે 33, જમશેદપુર, ઝારખંડ 832401</br>વિસ્તાર: 195 કિમી²</br> સ્થાપના: 1976</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "બેતા રાષ્ટ્રીય ઉદ્યાન",
                color: "#4caf50",
                latitude: 23.885649,
                longitude: 84.192398,
                "customData": "<img src='../../../assets/parks/betla.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>બેતા રાષ્ટ્રીય ઉદ્યાન:</b>બેતા નેશનલ પાર્ક એ ભારતના ઝારખંડ રાજ્યના લાતેર જિલ્લાના નાના નાગપુર પટ્ટાઉમાં સ્થિત એક રાષ્ટ્રીય ઉદ્યાન છે. આ પાર્ક જંગલી જીવનની વિવિધતા ધરાવે છે</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "કાળિયાર રાષ્ટ્રીય ઉદ્યાન",
                color: "#4caf50",
                latitude: 22.044268,
                longitude: 72.020514,
                "customData": "<img src='../../../assets/parks/girlion.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>કાળિયાર રાષ્ટ્રીય ઉદ્યાન:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "નાગાર્જુન નેશનલ પાર્ક",
                color: "#4caf50",
                latitude: 13.724579,
                longitude: 80.124476,
                "customData": "<img src='../../../assets/parks/girlion.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>નાગાર્જુન નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "મરીન નેશનલ પાર્ક, કચ્છના અખાત",
                color: "#4caf50",
                latitude: 22.744288,
                longitude: 69.955034,
                "customData": "<img src='../../../assets/parks/girlion.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>મરીન નેશનલ પાર્ક, કચ્છના અખાત:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "વાંસદા રાષ્ટ્રીય ઉદ્યાન",
                color: "#4caf50",
                latitude: 20.763832,
                longitude: 73.486094,
                "customData": "<img src='../../../assets/parks/girlion.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>વાંસદા રાષ્ટ્રીય ઉદ્યાન:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "નાલ સરોવર પક્ષી અભયારણ્ય",
                color: "#4caf50",
                latitude: 22.788881,
                longitude: 72.040891,
                "customData": "<img src='../../../assets/parks/flamingo.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>નાલ સરોવર પક્ષી અભયારણ્ય:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.prk,
                "scale": 0.1,
                title: "અનામુડી શોલા નેશનલ પાર્ક",
                color: "#4caf50",
                latitude: 10.190311,
                longitude: 77.177274,
                "customData": "<img src='../../../assets/parks/girlion.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>અનામુડી શોલા નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
        ];
        this.getmap();
    };
    IndiaChartComponent.prototype.palace = function () {
        this.l = [];
        this.c = [
            {
                svgPath: this.taj,
                "scale": 0.2,
                title: "ગીર ફોરેસ્ટ નેશનલ પાર્ક",
                color: "#000000",
                latitude: 27.175015,
                longitude: 78.042155,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.temp,
                "scale": 0.2,
                title: "ગીર ફોરેસ્ટ નેશનલ પાર્ક",
                color: "#000000",
                latitude: 24.831845,
                longitude: 79.919855,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.sling,
                "scale": 0.2,
                title: "ગીર ફોરેસ્ટ નેશનલ પાર્ક",
                color: "#000000",
                latitude: 23.182718,
                longitude: 75.768218,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.buddha,
                "scale": 0.2,
                title: "Sachi Stup",
                color: "#000000",
                latitude: 23.479374,
                longitude: 77.739668,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.pagoda,
                "scale": 0.2,
                title: "gaya bihar",
                color: "#000000",
                latitude: 24.795452,
                longitude: 84.999431,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.mahavir,
                "scale": 0.2,
                title: "pavapuri bihar",
                color: "#000000",
                latitude: 25.087860,
                longitude: 85.534185,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.factory,
                "scale": 0.2,
                title: "Jamsedpur Jarkhand",
                color: "#000000",
                latitude: 22.804566,
                longitude: 86.202875,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.muth,
                "scale": 0.2,
                title: "Twang Math ",
                color: "#000000",
                latitude: 27.586726,
                longitude: 91.857719,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.devi,
                "scale": 0.2,
                title: "Kamakhya Devi",
                color: "#000000",
                latitude: 26.166424,
                longitude: 91.704995,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
            {
                svgPath: this.gendo,
                "scale": 0.2,
                title: "Kajiranga national park",
                color: "#000000",
                latitude: 26.577531,
                longitude: 93.171122,
                "customData": "<img src='../../../assets/palace/taj.jpg' style='width: 100px; float: left; margin-right: 10px;' /><p><b>ગીર ફોરેસ્ટ નેશનલ પાર્ક:</b>એશિયાટિક સિંહ, ચિત્તો, ચૌશિંગા, સ્પોટેડ હરણ, હાઈના, સાંબર હરણ, ચિંકારા</p>"
            },
        ];
        this.getmap();
    };
    return IndiaChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IndiaChartComponent.prototype, "mapEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], IndiaChartComponent.prototype, "cusername", void 0);
IndiaChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Button',
        template: __webpack_require__("../../../../../src/app/dashboard/charts/indiacharts.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], IndiaChartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=indiacharts.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/son.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n body {\n  background-image: url(data:image/png;base64,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); \n        \n        }\n/* --------------------------------------------------------------------------- images */\n\n\n#universe {\n  background-image: url(data:image/png;base64,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nTqFYp06deoUinXq1KlTKNapU6dOoVinTp06hWKdOnXqFIp16tSpUyjWqVOnTp1CsU6dOnUKxTp16tQpFOvUqVOnUKxTp06dQrFOnTp1CsU6derUKRTr1KlTp1CsU6dOnUKxTp06dQrFOnXq1CkU69SpU6dQrFOnTp1CsU6dOnUKxTp16tQpFOvUqVOnUKxTp06dQrFOnTp1CsU6derUKRTr1KlTp1CsU6dOnUKxTp06dQrFOnXq1CkU69SpU6dQrL8FderUqVMo1qlTp06hWKdOnTqFYp06deoUinXq1KlTKNapU6dOoVinTp06hWKdOnXqFIp16tSpUyjWqVOnTqFYp06dOoVinTp16hSKderUqVMo1qlTp06hWKdOnTqFYp06deoUinXq1KlTKNapU6dOoVinTp06hWKdOnXqFIp16tSpUyjWqVOnTqFYp06dOoVinTp16tQpFOvUqVOnUKxTp06dQrFOnTp1CsU6derUKRTr1KlTp1CsU6dOnUKxTp06dQrFOnXq1CkU69SpU6dQrFOnTp1CsU6dOnUKxTp16tQpFOvUqVOnUKxTp06dQrFOnTp1CsU6derUKRTr1KlTp1CsU6dOnUKxTp06dQrFOnXq1CkU69SpU6dQrFOnTp1CsU6dOnXqFIp16tSpUyjWqVOnTqFYp06dOoVinTp16hSKderUqVMo1qlTp06hWKdOnTqFYp06deoUinXq1KlTKNapU6dOoVinTp06hWKdOnXqFIp16tSpUyjWqVOnTqFYp06dOoVinTp16hSKderUqVMo1qlTp06hWKdOnTqFYp06deoUinXq1KlTKNapU6dOoVinTp06hWKdOnXq1CkU69SpU6dQrFOnTp1CsU6dOnUKxTp16tTpP/8/BI4DQbewen8AAAAASUVORK5CYII=); }\n\n#sun {\n  background-image: url(data:image/png;base64,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); }\n\n#mercury .planet {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPBAMAAADJ+Ih5AAAABGdBTUEAALGPC/xhBQAAADBQTFRFqqWjubWzoZyZjoiFqqWiu7e1nZaToZyarqmnAAAAq6Wi2tXSurSxy8bCxL670czJ3zIDEAAAAAp0Uk5TclBQUOvj+xCAAOCI6hkAAACSSURBVAjXAYcAeP8AmZeEbeWHmZAAmTSq7M2kKZAAk2rN7O7M4ZAAdKzf7f/s/nAAjt2+u7/f/YAAXf/7u/3vzlAA6uv/u97d/aAAasv+/93+3GAAz+//3t3+ymAAWr3f/93+7lAAjOzrv73f3oAAdKzLv/3t5XAAk6rM/87qopAAmTbOzOzGKZAAmZeErsWHmZDnbFcFNI0NnwAAAABJRU5ErkJggg==); }\n\n#venus .planet {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAGBQTFRFnHlVuYpjfWdJpX5aqoFcu4xkm3lWjnFQj3JQdmNFhGxMk3RSmXhUqoFcq4JdgGlKr4VelHVSim9OvIxkon1ZvIxkvIxkvIxkvIxkvIxkvIxkvIxkvIxkvIxkAAAAvIxkls4uvQAAACB0Uk5Tm/1srVqO0Ycro9cNHcDU6ezowbzpv8Lgx8zq5dLbAOwHjDEIAAAB2UlEQVQoz12TiZbqMAiG49Zq16TZIAF5/7e8pLXOzMVjPfEr8EPAvE+b7g9fBGO63afvn+aEjxg51ZovJLz0z7/4AQk5FmYWNfLz9RceE2LKQkBCIlkwpWDGE49JsBR1IqkgtfkLhNv4wamdSymZcgIPO5YlbAd+6AFzjoBECSKwZA0lwfUNP/eXiQCIqQoCE2gCssE9FT+OYFoPqru0H9Aima17vc10UInY3HPBijH6iAJLcJO5f3CJCUBDFwCtC6RUDNvd+BNLSlgoJaoAiUplO2+90XYcwXPOFRGlUkvSLGyb4fSRBj5mxlqYmGvV0mpwqzm63Iw5A9TMKaZWt2jw1cgvQypau5TjlGYNjuUHq3Qp55kuLbePtdlFsj5V74E1I83d8DI6BtH7jJK91zuve4PJs6Z2iu+FPO36kteaFTPo61mvzK1XM3HxdGTLgE0W7wnssq3rZN63E2thfOhCjWFV2KtdqG09azMkPn+agErdsLYLffdWSJVXbeW3RBu6Ybgew3Rb2NfK+ily9ER9t2E7R9HMMxChDqo06XbpNk08fgfZdMuiHBVbq65uXV/jrzXouy4swS52CTtc+79L9Ow351yn3wZf/y1R27LrNqxDY9efFfwHiRFWry5LGJMAAAAASUVORK5CYII=); }\n\n#earth .planet {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAABGdBTUEAALGPC/xhBQAAAGBQTFRFGDRdAyFNIDxkQld5CCZTIztsJD1lAAAArsblO230dJfgP2vUnLbbbovAOF2vN1GERnb0Un/yW3asWH3PeY+uhKfyYXaVjafNT2WNeJ3zv9f0nrzzX4rzkLHzrcjzbZX0L9IPbAAAAAh0Uk5TfSC49Uv+4wC/XoCAAAACEUlEQVQoz12T2WKrMAxECWDC4n1fZOv//7IiaXp760cOtkaj0fT8nHXe1LLEmJd5/fk4feDGGFPeR0U/5G39H290zXohhJUi+czY9gs/lhytsM4JvvPEebJZsccH3zSldDrX6uhw8jMl/+Y33nKWibdQChhTsDRzXdbm5Y1nla1LYxAwGjsChvPmcb7xGrMVrtemQdPB0ltt6C6Z80p4y164CxpqMMcBZdRWey9O2rg9p5VlIS5ttMGCiGFUgn20xoXP6zQrJd2JAKW83q11tF5Cb9zZPE9btPIcI5AmLKXXEfoIASGchLeJ5eTCKNA7GMReu8HR26AGLqnUxFRyF3U7aqFrpQVjXrXBOJGXKUexl5fgPsgzqjpIV2sAztk4ZZ/2gVBqfb8NJH/QwcC5j1P0KTU0UOttKrUHh8Y2qL/9jcUZAsCrJTwOHYyG3so3XrJNJ7U1Xn4UfWiAW1nrPPllmqk4v1lrRQMarQ2QPKonBNmyLlScGg1Ik6C6QG8XbA3P5NlKI6EonGHoA2gY5BwZVqAAReIeyXNlyvJ9DJpWozcPU8hzJFNsvAf6pIySOooDUBA6tRBCP5OUav4OE1NSXHu9nQ+kn9LiklXbTxSJS7fvt1kAx+Wc9H57/Aty9FImms3Or+uSBOPy+LUGc/RkT6KgO0lVY57/LpHKlEnrvacV+LtE7xVkSuW8bL9W8AvOdz8ZXmQqKAAAAABJRU5ErkJggg==); }\n\n#earth .moon {\n  background-color: white; }\n\n#mars .planet {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAGBQTFRFsW89lWA2jVwzsm8+qGo72oVJrW08h1gxlWA15IpMrW09jlw0l2E2nGM3v3ZC3YdK3odKyHtE75BP8JFQ8JFQ8JFQ8JFQ8JFQw3hD8JFQ8JFQ8JFQ8JFQ8JFQ8JFQAAAAe3ooYQAAACB0Uk5Tk0+hrcTz6g7P5tkiYurz49bk79XR3vvm2PH26ezi2QCQ4vSgAAABm0lEQVQoz1VSWXaEMAzLLAw7ZHMSx0vvf8uaTtvX+icQYSRbch/vGrf7ftV0v43fV+59bNP+Oo6jtXAs0/YHWg1o4TxnqyG05bn+QOt0AUIRKWVV39qyvqF1f4VTFSqiZgWuerarz6D7KwyoqkI19k5UFYfjeUHbdJzEkLQS9cLCSELDsX24cVoCVYYMHXsphQk0Aw2v0W17OCv2CPwFIWnSBDAfmzOmSt0KmZhj1ZwERLU5N72GwsyIREwCKZtIsAe/uL3NpapW42ciMTWitXI8g9uDj/aCAEZoaqRHtf8ZmduPFAtW1kz2BWntXQRUo0FhTrVcKxLTZmNbi7Fd0NR8Vhsz5x6jZMHIrJrS3Nx98WAQ5lyJsXdGGxs0eeduS5Brs1+y2dZRe0EBajc3LuaHEKRks8qFIYrC0EZb79KM31qUbCO9l44mJWyXKY9mbMnkJzAeo0Ni/3hb+WynqDGkDJHNa/Okrd8BWJpPag1gHpdO5vL6G5tnC15rRBaI6sNj/Ru25Wjez3E+LTTbvxxaRB/PdtVj+4noJ91nOp3NTB6wAAAAAElFTkSuQmCC); }\n\n#jupiter .planet {\n  background-image: url(data:image/png;base64,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); }\n\n#saturn .planet {\n  background-image: url(data:image/png;base64,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); }\n\n#uranus .planet {\n  background-image: url(data:image/png;base64,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); }\n\n#neptune .planet {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAMAAACfBSJ0AAAABGdBTUEAALGPC/xhBQAAAGBQTFRFZoGyU2ybWHKiU2yZV3CgVm+eVm+dV3GhVG2bAAAAmLjslbbqk7ToZIO3aovBZ4e7cJTMkLHmbI/FYX+yXnusWnWlja7kiavhc5fRg6bdhqjfeZ3WgKTbdprUfqHZe5/XTjN33QAAAAp0Uk5T82DQILiggOhMAI3C2HIAAAPgSURBVEjHjZaLVqNAEEQxkoAmIAYIb/j/v9yuqp4BNetum8R4Dtfq6elX8vbE8kt6apsWdkov+bNHkp/QOWvbpqlhTQM6O+f/5F4Mag0qPmSFwUBffuXyLEBleaeVpaNZ/lfuNTWoMMSYqur7pTerqjtQI9PX51yekSICW2DTsvTV/U7yKLlzFxP7gJIAMZPZAlSal5/cuW0oFigA9t62jSi9bdrzdw4YKTw6TfrcgNkX+wpvywOYRCcd29YNLzy+8su6umRvYB1cFZfjbMD4FF6rPmR0lr6aYr5zrxmxBWpusz7nnQNYlUWbvUYubS2ScjJgMxD/2MH+/lG3aeByHs6xmTaY2R/DwL94UESnj56Co5cW/wM2DuMo3N5z8NWyB4KZuJe2LuglqIEUbNhtlq/IuwqCL+SypvDDyb9h6Dqj8BpHvgdydoc6YZOBy1t5KTnY2BkI6/gDZXELr988zY07Q245yAE7GhQRG+QPU7VozsbRzckxONZ1j91cGorh9o3L3hK6aVm5Omfe2eOfZvglshsV1G0Ld5gnF7qJpJoVC8p93m4gRUNS14iaWsBdkvToJgQld7uRjCDzgLVojtZNmpwQTXDrzn2Cu15vDhvIE+p8POAp0S2Qm3l1D9e7wggqOkrThQdsWnJL5HAH0rte39/fAUZuVmB6BibohXtwvZu4d+eMHDzXvnKLH5B3/l3vU5hu8AvXRy44+lWvG0NuH7gi6s2Bo6PCwHVDyG1dfCHO7h2NyxMmCN5iOJVpIWFUSsmpcS4mWoioru/xCAmq3BZ3snypwcWL8JuHIl4Pcp37OakgrMckFwsMywh+oikMI2/iEbIsFgTzs1dYLlYPTShbNbChe8RCwuEcw/mm2Clyrz8JsuMOLNZDAVLMK16cdSbVu2W2WrvVYaz3HTMvvFH47Z3VX4qyNykLjY2gNQR1bxPhCryK2EHZzyyi08YjTmjP86HJhCYhrj/0M+ufjIwlG2OqQhyjDfHqvPhq75+MjA0jVu+ssA7sGV/a7jSFbpbF+aCxogGxBXBW9/agqH169wzzyMeY0m3dfEqEoUQnUOmSS4/zT9OWU5qp6hMmjsItrAfNYf5xkn0I3CaN5n1qhoLlblA3+ff57iCig55+mNUcfhzTdXP5sU94cBZ2rYnbhLQnbjEVl5/zk/0Faw9Kaln21Wfa1KQxh57tL9qXdI991UdQ/4ar1vN9Ke5nZRkWNC5pKPAKa6GlV/7LPlhD1Ha7SssgpAyCj3/bB+P+GdfP0n7ugGzx/WX/9H0XO3Khfdd+FVhbm3/su0/2a9uw/2e/3vf59td9/g/87+wnzrJ1rQAAAABJRU5ErkJggg==); }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/sun.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n \r\n     \r\n <body class=\"opening hide-UI view-2D zoom-large data-close controls-close\" >\r\n  <!-- <button (click)=\"start($event)\">capital</button>-->\r\n    <div id=\"navbar\">\r\n      <a id=\"toggle-data\" href=\"#data\"><i class=\"icon-data\"></i>Data</a>\r\n      <h1>3D સૌર મંડળ<br>\r\n        </h1>\r\n      <a id=\"toggle-controls\" href=\"#controls\"><i class=\"icon-controls\"></i>Controls</a>\r\n    </div>\r\n    <div id=\"data\">\r\n      <a class=\"sun\" title=\"sun\" href=\"#sunspeed\">સૂર્ય</a>\r\n      <a class=\"mercury\" title=\"mercury\" href=\"#mercuryspeed\">બુધ</a>\r\n      <a class=\"venus\" title=\"venus\" href=\"#venusspeed\">શુક્ર</a>\r\n      <a class=\"earth active\" title=\"earth\" href=\"#earthspeed\">પૃથ્વી</a>\r\n      <a class=\"mars\" title=\"mars\" href=\"#marsspeed\">મંગળ</a>\r\n      <a class=\"jupiter\" title=\"jupiter\" href=\"#jupiterspeed\">બૃહસ્પતિ</a>\r\n      <a class=\"saturn\" title=\"saturn\" href=\"#saturnspeed\">શનિ</a>\r\n      <a class=\"uranus\" title=\"uranus\" href=\"#uranusspeed\">યુરેનસ</a>\r\n      <a class=\"neptune\" title=\"neptune\" href=\"#neptunespeed\">નેપ્ચ્યુન</a>\r\n    </div>\r\n    <div id=\"controls\">\r\n      <label class=\"set-view\">\r\n        <input type=\"checkbox\">\r\n      </label>\r\n      <label class=\"set-zoom\">\r\n        <input type=\"checkbox\">\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" class=\"set-speed\" name=\"scale\" checked>\r\n       \r\n          <span>ઝડપ</span>\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" class=\"set-size\" name=\"scale\">\r\n        \r\n          <span>કદ</span>\r\n      </label>\r\n      <label>\r\n        <input type=\"radio\" class=\"set-distance\" name=\"scale\">\r\n       <!-- <span>Distance</span>-->\r\n          <span>અંતર</span>\r\n      </label>\r\n    </div>\r\n    <div id=\"universe\" class=\"scale-stretched\">\r\n      <div id=\"galaxy\">\r\n        <div id=\"solar-system\" class=\"earth\">\r\n          <div id=\"mercury\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                  <!--<dt>Mercury</dt>-->\r\n                    <dt>બુધ</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"venus\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                 <!-- <dt>Venus</dt>-->\r\n                    <dt>શુક્ર</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"earth\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"orbit\">\r\n                <div class=\"pos\">\r\n                  <div class=\"moon\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                 <!-- <dt>Earth</dt>-->\r\n                    <dt>પૃથ્વી</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"mars\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                 <!-- <dt>Mars</dt>-->\r\n                    <dt>મંગળ</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"jupiter\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                 <!-- <dt>Jupiter</dt>-->\r\n                    <dt>બૃહસ્પતિ</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"saturn\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <div class=\"ring\"></div>\r\n                <dl class=\"infos\">\r\n                 <!-- <dt>Saturn</dt>-->\r\n                    <dt>શનિ</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"uranus\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                  <!--<dt>Uranus</dt>-->\r\n                    <dt>યુરેનસ</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"neptune\" class=\"orbit\">\r\n            <div class=\"pos\">\r\n              <div class=\"planet\">\r\n                <dl class=\"infos\">\r\n                  <!--<dt>Neptune</dt>-->\r\n                    <dt>નેપ્ચ્યુન</dt>\r\n                  <dd><span></span></dd>\r\n                </dl>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div id=\"sun\">\r\n            <dl class=\"infos\">\r\n              <!--<dt>Sun</dt>-->\r\n                <dt>સૂર્ય</dt>\r\n              <dd><span></span></dd>\r\n            </dl>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js\"></script>\r\n    <script type=\"text/javascript\">\r\n    if (typeof jQuery == 'undefined') { \r\n      document.write(unescape(\"%3Cscript src='js/jquery.min.js' type='text/javascript'%3E%3C/script%3E\"));\r\n    }\r\n    </script>\r\n    <script src=\"js/prefixfree.min.js\"></script>\r\n    <script src=\"js/scripts.min.js\"></script>\r\n \r\n </body>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/sun.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SunComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SunComponent = (function () {
    function SunComponent(services, AmCharts, http) {
        this.services = services;
        this.AmCharts = AmCharts;
        this.http = http;
    }
    SunComponent.prototype.start = function () {
        this.ngOnInit();
    };
    SunComponent.prototype.ngOnInit = function () {
    };
    return SunComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SunComponent.prototype, "mapEl", void 0);
SunComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Button',
        template: __webpack_require__("../../../../../src/app/dashboard/charts/sun.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/charts/son.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], SunComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sun.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/worldcharts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n                  <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <button (click)=\"contents($event)\">contents</button>\r\n                             <button (click)=\"capital($event)\">capital</button>\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header card-header-icon\" data-background-color=\"blue\">\r\n                                    <i class=\"material-icons\">language</i>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <h4 class=\"card-title\">Coloured Bars Chart\r\n                                        <small> - Rounded</small>\r\n                                    </h4>\r\n                                                              </div>\r\n                               <!-- <div id=\"maps\">\r\n  <div id=\"gmap\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n                                    </div>-->\r\n                                 <div id=\"mapdiv1\" [style.width.%]=\"100\" [style.height.px]=\"400\"></div>\r\n                           <!-- <input type=\"text\" id=\"info\" class=\"form-control\"  [value]=\"info\" [(ngModel)]=\"filterQueryQ\"/>-->\r\n                               \r\n                                 <div id=\"info\" >\r\n                              \r\n                              </div>\r\n                               \r\n                                \r\n                        </div>\r\n                        \r\n                    </div>\r\n                    \r\n                    \r\n                    \r\n                    \r\n\r\n  \r\n                </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/charts/worldcharts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorldChartComponent = (function () {
    // dataProvider: any[]=[35,40,50];
    function WorldChartComponent(services, AmCharts, http) {
        var _this = this;
        this.services = services;
        this.AmCharts = AmCharts;
        this.http = http;
        this.sid = [];
        this.filterQueryQ = '';
        this.rowsOnPage = 5;
        this.ActivePage = 1;
        this.d = [];
        // public targetSVG :any= "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        this.targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        // svg path for plane icon
        this.planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
        this.backIconSVG = "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM27.436,17.39c0.001,0.002,0.004,0.002,0.005,0.004c-0.022,0.187-0.054,0.37-0.085,0.554c-0.015-0.012-0.034-0.025-0.047-0.036c-0.103-0.09-0.254-0.128-0.318-0.115c-0.157,0.032,0.229,0.305,0.267,0.342c0.009,0.009,0.031,0.03,0.062,0.058c-1.029,5.312-5.709,9.338-11.319,9.338c-4.123,0-7.736-2.18-9.776-5.441c0.123-0.016,0.24-0.016,0.28-0.076c0.051-0.077,0.102-0.241,0.178-0.331c0.077-0.089,0.165-0.229,0.127-0.292c-0.039-0.064,0.101-0.344,0.088-0.419c-0.013-0.076-0.127-0.256,0.064-0.407s0.394-0.382,0.407-0.444c0.012-0.063,0.166-0.331,0.152-0.458c-0.012-0.127-0.152-0.28-0.24-0.318c-0.09-0.037-0.28-0.05-0.356-0.151c-0.077-0.103-0.292-0.203-0.368-0.178c-0.076,0.025-0.204,0.05-0.305-0.015c-0.102-0.062-0.267-0.139-0.33-0.189c-0.065-0.05-0.229-0.088-0.305-0.088c-0.077,0-0.065-0.052-0.178,0.101c-0.114,0.153,0,0.204-0.204,0.177c-0.204-0.023,0.025-0.036,0.141-0.189c0.113-0.152-0.013-0.242-0.141-0.203c-0.126,0.038-0.038,0.115-0.241,0.153c-0.203,0.036-0.203-0.09-0.076-0.115s0.355-0.139,0.355-0.19c0-0.051-0.025-0.191-0.127-0.191s-0.077-0.126-0.229-0.291c-0.092-0.101-0.196-0.164-0.299-0.204c-0.09-0.579-0.15-1.167-0.15-1.771c0-2.844,1.039-5.446,2.751-7.458c0.024-0.02,0.048-0.034,0.069-0.036c0.084-0.009,0.31-0.025,0.51-0.059c0.202-0.034,0.418-0.161,0.489-0.153c0.069,0.008,0.241,0.008,0.186-0.042C8.417,8.2,8.339,8.082,8.223,8.082S8.215,7.896,8.246,7.896c0.03,0,0.186,0.025,0.178,0.11C8.417,8.091,8.471,8.2,8.625,8.167c0.156-0.034,0.132-0.162,0.102-0.195C8.695,7.938,8.672,7.853,8.642,7.794c-0.031-0.06-0.023-0.136,0.14-0.153C8.944,7.625,9.168,7.708,9.16,7.573s0-0.28,0.046-0.356C9.253,7.142,9.354,7.09,9.299,7.065C9.246,7.04,9.176,7.099,9.121,6.972c-0.054-0.127,0.047-0.22,0.108-0.271c0.02-0.015,0.067-0.06,0.124-0.112C11.234,5.257,13.524,4.466,16,4.466c3.213,0,6.122,1.323,8.214,3.45c-0.008,0.022-0.01,0.052-0.031,0.056c-0.077,0.013-0.166,0.063-0.179-0.051c-0.013-0.114-0.013-0.331-0.102-0.203c-0.089,0.127-0.127,0.127-0.127,0.191c0,0.063,0.076,0.127,0.051,0.241C23.8,8.264,23.8,8.341,23.84,8.341c0.036,0,0.126-0.115,0.239-0.141c0.116-0.025,0.319-0.088,0.332,0.026c0.013,0.115,0.139,0.152,0.013,0.203c-0.128,0.051-0.267,0.026-0.293-0.051c-0.025-0.077-0.114-0.077-0.203-0.013c-0.088,0.063-0.279,0.292-0.279,0.292s-0.306,0.139-0.343,0.114c-0.04-0.025,0.101-0.165,0.203-0.228c0.102-0.064,0.178-0.204,0.14-0.242c-0.038-0.038-0.088-0.279-0.063-0.343c0.025-0.063,0.139-0.152,0.013-0.216c-0.127-0.063-0.217-0.14-0.318-0.178s-0.216,0.152-0.305,0.204c-0.089,0.051-0.076,0.114-0.191,0.127c-0.114,0.013-0.189,0.165,0,0.254c0.191,0.089,0.255,0.152,0.204,0.204c-0.051,0.051-0.267-0.025-0.267-0.025s-0.165-0.076-0.268-0.076c-0.101,0-0.229-0.063-0.33-0.076c-0.102-0.013-0.306-0.013-0.355,0.038c-0.051,0.051-0.179,0.203-0.28,0.152c-0.101-0.051-0.101-0.102-0.241-0.051c-0.14,0.051-0.279-0.038-0.355,0.038c-0.077,0.076-0.013,0.076-0.255,0c-0.241-0.076-0.189,0.051-0.419,0.089s-0.368-0.038-0.432,0.038c-0.064,0.077-0.153,0.217-0.19,0.127c-0.038-0.088,0.126-0.241,0.062-0.292c-0.062-0.051-0.33-0.025-0.367,0.013c-0.039,0.038-0.014,0.178,0.011,0.229c0.026,0.05,0.064,0.254-0.011,0.216c-0.077-0.038-0.064-0.166-0.141-0.152c-0.076,0.013-0.165,0.051-0.203,0.077c-0.038,0.025-0.191,0.025-0.229,0.076c-0.037,0.051,0.014,0.191-0.051,0.203c-0.063,0.013-0.114,0.064-0.254-0.025c-0.14-0.089-0.14-0.038-0.178-0.012c-0.038,0.025-0.216,0.127-0.229,0.012c-0.013-0.114,0.025-0.152-0.089-0.229c-0.115-0.076-0.026-0.076,0.127-0.025c0.152,0.05,0.343,0.075,0.622-0.013c0.28-0.089,0.395-0.127,0.28-0.178c-0.115-0.05-0.229-0.101-0.406-0.127c-0.179-0.025-0.42-0.025-0.7-0.127c-0.279-0.102-0.343-0.14-0.457-0.165c-0.115-0.026-0.813-0.14-1.132-0.089c-0.317,0.051-1.193,0.28-1.245,0.318s-0.128,0.19-0.292,0.318c-0.165,0.127-0.47,0.419-0.712,0.47c-0.241,0.051-0.521,0.254-0.521,0.305c0,0.051,0.101,0.242,0.076,0.28c-0.025,0.038,0.05,0.229,0.191,0.28c0.139,0.05,0.381,0.038,0.393-0.039c0.014-0.076,0.204-0.241,0.217-0.127c0.013,0.115,0.14,0.292,0.114,0.368c-0.025,0.077,0,0.153,0.09,0.14c0.088-0.012,0.559-0.114,0.559-0.114s0.153-0.064,0.127-0.166c-0.026-0.101,0.166-0.241,0.203-0.279c0.038-0.038,0.178-0.191,0.014-0.241c-0.167-0.051-0.293-0.064-0.115-0.216s0.292,0,0.521-0.229c0.229-0.229-0.051-0.292,0.191-0.305c0.241-0.013,0.496-0.025,0.444,0.051c-0.05,0.076-0.342,0.242-0.508,0.318c-0.166,0.077-0.14,0.216-0.076,0.292c0.063,0.076,0.09,0.254,0.204,0.229c0.113-0.025,0.254-0.114,0.38-0.101c0.128,0.012,0.383-0.013,0.42-0.013c0.039,0,0.216,0.178,0.114,0.203c-0.101,0.025-0.229,0.013-0.445,0.025c-0.215,0.013-0.456,0.013-0.456,0.051c0,0.039,0.292,0.127,0.19,0.191c-0.102,0.063-0.203-0.013-0.331-0.026c-0.127-0.012-0.203,0.166-0.241,0.267c-0.039,0.102,0.063,0.28-0.127,0.216c-0.191-0.063-0.331-0.063-0.381-0.038c-0.051,0.025-0.203,0.076-0.331,0.114c-0.126,0.038-0.076-0.063-0.242-0.063c-0.164,0-0.164,0-0.164,0l-0.103,0.013c0,0-0.101-0.063-0.114-0.165c-0.013-0.102,0.05-0.216-0.013-0.241c-0.064-0.026-0.292,0.012-0.33,0.088c-0.038,0.076-0.077,0.216-0.026,0.28c0.052,0.063,0.204,0.19,0.064,0.152c-0.14-0.038-0.317-0.051-0.419,0.026c-0.101,0.076-0.279,0.241-0.279,0.241s-0.318,0.025-0.318,0.102c0,0.077,0,0.178-0.114,0.191c-0.115,0.013-0.268,0.05-0.42,0.076c-0.153,0.025-0.139,0.088-0.317,0.102s-0.204,0.089-0.038,0.114c0.165,0.025,0.418,0.127,0.431,0.241c0.014,0.114-0.013,0.242-0.076,0.356c-0.043,0.079-0.305,0.026-0.458,0.026c-0.152,0-0.456-0.051-0.584,0c-0.127,0.051-0.102,0.305-0.064,0.419c0.039,0.114-0.012,0.178-0.063,0.216c-0.051,0.038-0.065,0.152,0,0.204c0.063,0.051,0.114,0.165,0.166,0.178c0.051,0.013,0.215-0.038,0.279,0.025c0.064,0.064,0.127,0.216,0.165,0.178c0.039-0.038,0.089-0.203,0.153-0.166c0.064,0.039,0.216-0.012,0.331-0.025s0.177-0.14,0.292-0.204c0.114-0.063,0.05-0.063,0.013-0.14c-0.038-0.076,0.114-0.165,0.204-0.254c0.088-0.089,0.253-0.013,0.292-0.115c0.038-0.102,0.051-0.279,0.151-0.267c0.103,0.013,0.243,0.076,0.331,0.076c0.089,0,0.279-0.14,0.332-0.165c0.05-0.025,0.241-0.013,0.267,0.102c0.025,0.114,0.241,0.254,0.292,0.279c0.051,0.025,0.381,0.127,0.433,0.165c0.05,0.038,0.126,0.153,0.152,0.254c0.025,0.102,0.114,0.102,0.128,0.013c0.012-0.089-0.065-0.254,0.025-0.242c0.088,0.013,0.191-0.026,0.191-0.026s-0.243-0.165-0.331-0.203c-0.088-0.038-0.255-0.114-0.331-0.241c-0.076-0.127-0.267-0.153-0.254-0.279c0.013-0.127,0.191-0.051,0.292,0.051c0.102,0.102,0.356,0.241,0.445,0.33c0.088,0.089,0.229,0.127,0.267,0.242c0.039,0.114,0.152,0.241,0.19,0.292c0.038,0.051,0.165,0.331,0.204,0.394c0.038,0.063,0.165-0.012,0.229-0.063c0.063-0.051,0.179-0.076,0.191-0.178c0.013-0.102-0.153-0.178-0.203-0.216c-0.051-0.038,0.127-0.076,0.191-0.127c0.063-0.05,0.177-0.14,0.228-0.063c0.051,0.077,0.026,0.381,0.051,0.432c0.025,0.051,0.279,0.127,0.331,0.191c0.05,0.063,0.267,0.089,0.304,0.051c0.039-0.038,0.242,0.026,0.294,0.038c0.049,0.013,0.202-0.025,0.304-0.05c0.103-0.025,0.204-0.102,0.191,0.063c-0.013,0.165-0.051,0.419-0.179,0.546c-0.127,0.127-0.076,0.191-0.202,0.191c-0.06,0-0.113,0-0.156,0.021c-0.041-0.065-0.098-0.117-0.175-0.097c-0.152,0.038-0.344,0.038-0.47,0.19c-0.128,0.153-0.178,0.165-0.204,0.114c-0.025-0.051,0.369-0.267,0.317-0.331c-0.05-0.063-0.355-0.038-0.521-0.038c-0.166,0-0.305-0.102-0.433-0.127c-0.126-0.025-0.292,0.127-0.418,0.254c-0.128,0.127-0.216,0.038-0.331,0.038c-0.115,0-0.331-0.165-0.331-0.165s-0.216-0.089-0.305-0.089c-0.088,0-0.267-0.165-0.318-0.165c-0.05,0-0.19-0.115-0.088-0.166c0.101-0.05,0.202,0.051,0.101-0.229c-0.101-0.279-0.33-0.216-0.419-0.178c-0.088,0.039-0.724,0.025-0.775,0.025c-0.051,0-0.419,0.127-0.533,0.178c-0.116,0.051-0.318,0.115-0.369,0.14c-0.051,0.025-0.318-0.051-0.433,0.013c-0.151,0.084-0.291,0.216-0.33,0.216c-0.038,0-0.153,0.089-0.229,0.28c-0.077,0.19,0.013,0.355-0.128,0.419c-0.139,0.063-0.394,0.204-0.495,0.305c-0.102,0.101-0.229,0.458-0.355,0.623c-0.127,0.165,0,0.317,0.025,0.419c0.025,0.101,0.114,0.292-0.025,0.471c-0.14,0.178-0.127,0.266-0.191,0.279c-0.063,0.013,0.063,0.063,0.088,0.19c0.025,0.128-0.114,0.255,0.128,0.369c0.241,0.113,0.355,0.217,0.418,0.367c0.064,0.153,0.382,0.407,0.382,0.407s0.229,0.205,0.344,0.293c0.114,0.089,0.152,0.038,0.177-0.05c0.025-0.09,0.178-0.104,0.355-0.104c0.178,0,0.305,0.04,0.483,0.014c0.178-0.025,0.356-0.141,0.42-0.166c0.063-0.025,0.279-0.164,0.443-0.063c0.166,0.103,0.141,0.241,0.23,0.332c0.088,0.088,0.24,0.037,0.355-0.051c0.114-0.09,0.064-0.052,0.203,0.025c0.14,0.075,0.204,0.151,0.077,0.267c-0.128,0.113-0.051,0.293-0.128,0.47c-0.076,0.178-0.063,0.203,0.077,0.278c0.14,0.076,0.394,0.548,0.47,0.638c0.077,0.088-0.025,0.342,0.064,0.495c0.089,0.151,0.178,0.254,0.077,0.331c-0.103,0.075-0.28,0.216-0.292,0.47s0.051,0.431,0.102,0.521s0.177,0.331,0.241,0.419c0.064,0.089,0.14,0.305,0.152,0.445c0.013,0.14-0.024,0.306,0.039,0.381c0.064,0.076,0.102,0.191,0.216,0.292c0.115,0.103,0.152,0.318,0.152,0.318s0.039,0.089,0.051,0.229c0.012,0.14,0.025,0.228,0.152,0.292c0.126,0.063,0.215,0.076,0.28,0.013c0.063-0.063,0.381-0.077,0.546-0.063c0.165,0.013,0.355-0.075,0.521-0.19s0.407-0.419,0.496-0.508c0.089-0.09,0.292-0.255,0.268-0.356c-0.025-0.101-0.077-0.203,0.024-0.254c0.102-0.052,0.344-0.152,0.356-0.229c0.013-0.077-0.09-0.395-0.115-0.457c-0.024-0.064,0.064-0.18,0.165-0.306c0.103-0.128,0.421-0.216,0.471-0.267c0.051-0.053,0.191-0.267,0.217-0.433c0.024-0.167-0.051-0.369,0-0.457c0.05-0.09,0.013-0.165-0.103-0.268c-0.114-0.102-0.089-0.407-0.127-0.457c-0.037-0.051-0.013-0.319,0.063-0.345c0.076-0.023,0.242-0.279,0.344-0.393c0.102-0.114,0.394-0.47,0.534-0.496c0.139-0.025,0.355-0.229,0.368-0.343c0.013-0.115,0.38-0.547,0.394-0.635c0.013-0.09,0.166-0.42,0.102-0.497c-0.062-0.076-0.559,0.115-0.622,0.141c-0.064,0.025-0.241,0.127-0.446,0.113c-0.202-0.013-0.114-0.177-0.127-0.254c-0.012-0.076-0.228-0.368-0.279-0.381c-0.051-0.012-0.203-0.166-0.267-0.317c-0.063-0.153-0.152-0.343-0.254-0.458c-0.102-0.114-0.165-0.38-0.268-0.559c-0.101-0.178-0.189-0.407-0.279-0.572c-0.021-0.041-0.045-0.079-0.067-0.117c0.118-0.029,0.289-0.082,0.31-0.009c0.024,0.088,0.165,0.279,0.19,0.419s0.165,0.089,0.178,0.216c0.014,0.128,0.14,0.433,0.19,0.47c0.052,0.038,0.28,0.242,0.318,0.318c0.038,0.076,0.089,0.178,0.127,0.369c0.038,0.19,0.076,0.444,0.179,0.482c0.102,0.038,0.444-0.064,0.508-0.102s0.482-0.242,0.635-0.255c0.153-0.012,0.179-0.115,0.368-0.152c0.191-0.038,0.331-0.177,0.458-0.28c0.127-0.101,0.28-0.355,0.33-0.444c0.052-0.088,0.179-0.152,0.115-0.253c-0.063-0.103-0.331-0.254-0.433-0.268c-0.102-0.012-0.089-0.178-0.152-0.178s-0.051,0.088-0.178,0.153c-0.127,0.063-0.255,0.19-0.344,0.165s0.026-0.089-0.113-0.203s-0.192-0.14-0.192-0.228c0-0.089-0.278-0.255-0.304-0.382c-0.026-0.127,0.19-0.305,0.254-0.19c0.063,0.114,0.115,0.292,0.279,0.368c0.165,0.076,0.318,0.204,0.395,0.229c0.076,0.025,0.267-0.14,0.33-0.114c0.063,0.024,0.191,0.253,0.306,0.292c0.113,0.038,0.495,0.051,0.559,0.051s0.33,0.013,0.381-0.063c0.051-0.076,0.089-0.076,0.153-0.076c0.062,0,0.177,0.229,0.267,0.254c0.089,0.025,0.254,0.013,0.241,0.179c-0.012,0.164,0.076,0.305,0.165,0.317c0.09,0.012,0.293-0.191,0.293-0.191s0,0.318-0.012,0.433c-0.014,0.113,0.139,0.534,0.139,0.534s0.19,0.393,0.241,0.482s0.267,0.355,0.267,0.47c0,0.115,0.025,0.293,0.103,0.293c0.076,0,0.152-0.203,0.24-0.331c0.091-0.126,0.116-0.305,0.153-0.432c0.038-0.127,0.038-0.356,0.038-0.444c0-0.09,0.075-0.166,0.255-0.242c0.178-0.076,0.304-0.292,0.456-0.407c0.153-0.115,0.141-0.305,0.446-0.305c0.305,0,0.278,0,0.355-0.077c0.076-0.076,0.151-0.127,0.19,0.013c0.038,0.14,0.254,0.343,0.292,0.394c0.038,0.052,0.114,0.191,0.103,0.344c-0.013,0.152,0.012,0.33,0.075,0.33s0.191-0.216,0.191-0.216s0.279-0.189,0.267,0.013c-0.014,0.203,0.025,0.419,0.025,0.545c0,0.053,0.042,0.135,0.088,0.21c-0.005,0.059-0.004,0.119-0.009,0.178C27.388,17.153,27.387,17.327,27.436,17.39zM20.382,12.064c0.076,0.05,0.102,0.127,0.152,0.203c0.052,0.076,0.14,0.05,0.203,0.114c0.063,0.064-0.178,0.14-0.075,0.216c0.101,0.077,0.151,0.381,0.165,0.458c0.013,0.076-0.279,0.114-0.369,0.102c-0.089-0.013-0.354-0.102-0.445-0.127c-0.089-0.026-0.139-0.343-0.025-0.331c0.116,0.013,0.141-0.025,0.267-0.139c0.128-0.115-0.189-0.166-0.278-0.191c-0.089-0.025-0.268-0.305-0.331-0.394c-0.062-0.089-0.014-0.228,0.141-0.331c0.076-0.051,0.279,0.063,0.381,0c0.101-0.063,0.203-0.14,0.241-0.165c0.039-0.025,0.293,0.038,0.33,0.114c0.039,0.076,0.191,0.191,0.141,0.229c-0.052,0.038-0.281,0.076-0.356,0c-0.075-0.077-0.255,0.012-0.268,0.152C20.242,12.115,20.307,12.013,20.382,12.064zM16.875,12.28c-0.077-0.025,0.025-0.178,0.102-0.229c0.075-0.051,0.164-0.178,0.241-0.305c0.076-0.127,0.178-0.14,0.241-0.127c0.063,0.013,0.203,0.241,0.241,0.318c0.038,0.076,0.165-0.026,0.217-0.051c0.05-0.025,0.127-0.102,0.14-0.165s0.127-0.102,0.254-0.102s0.013,0.102-0.076,0.127c-0.09,0.025-0.038,0.077,0.113,0.127c0.153,0.051,0.293,0.191,0.459,0.279c0.165,0.089,0.19,0.267,0.088,0.292c-0.101,0.025-0.406,0.051-0.521,0.038c-0.114-0.013-0.254-0.127-0.419-0.153c-0.165-0.025-0.369-0.013-0.433,0.077s-0.292,0.05-0.395,0.05c-0.102,0-0.228,0.127-0.253,0.077C16.875,12.534,16.951,12.306,16.875,12.28zM17.307,9.458c0.063-0.178,0.419,0.038,0.355,0.127C17.599,9.675,17.264,9.579,17.307,9.458zM17.802,18.584c0.063,0.102-0.14,0.431-0.254,0.407c-0.113-0.027-0.076-0.318-0.038-0.382C17.548,18.545,17.769,18.529,17.802,18.584zM13.189,12.674c0.025-0.051-0.039-0.153-0.127-0.013C13.032,12.71,13.164,12.725,13.189,12.674zM20.813,8.035c0.141,0.076,0.339,0.107,0.433,0.013c0.076-0.076,0.013-0.204-0.05-0.216c-0.064-0.013-0.104-0.115,0.062-0.203c0.165-0.089,0.343-0.204,0.534-0.229c0.19-0.025,0.622-0.038,0.774,0c0.152,0.039,0.382-0.166,0.445-0.254s-0.203-0.152-0.279-0.051c-0.077,0.102-0.444,0.076-0.521,0.051c-0.076-0.025-0.686,0.102-0.812,0.102c-0.128,0-0.179,0.152-0.356,0.229c-0.179,0.076-0.42,0.191-0.509,0.229c-0.088,0.038-0.177,0.19-0.101,0.216C20.509,7.947,20.674,7.959,20.813,8.035zM14.142,12.674c0.064-0.089-0.051-0.217-0.114-0.217c-0.12,0-0.178,0.191-0.103,0.254C14.002,12.776,14.078,12.763,14.142,12.674zM14.714,13.017c0.064,0.025,0.114,0.102,0.165,0.114c0.052,0.013,0.217,0,0.167-0.127s-0.167-0.127-0.204-0.127c-0.038,0-0.203-0.038-0.267,0C14.528,12.905,14.65,12.992,14.714,13.017zM11.308,10.958c0.101,0.013,0.217-0.063,0.305-0.101c0.088-0.038,0.216-0.114,0.216-0.229c0-0.114-0.025-0.216-0.077-0.267c-0.051-0.051-0.14-0.064-0.216-0.051c-0.115,0.02-0.127,0.14-0.203,0.14c-0.076,0-0.165,0.025-0.14,0.114s0.077,0.152,0,0.19C11.117,10.793,11.205,10.946,11.308,10.958zM11.931,10.412c0.127,0.051,0.394,0.102,0.292,0.153c-0.102,0.051-0.28,0.19-0.305,0.267s0.216,0.153,0.216,0.153s-0.077,0.089-0.013,0.114c0.063,0.025,0.102-0.089,0.203-0.089c0.101,0,0.304,0.063,0.406,0.063c0.103,0,0.267-0.14,0.254-0.229c-0.013-0.089-0.14-0.229-0.254-0.28c-0.113-0.051-0.241-0.28-0.317-0.331c-0.076-0.051,0.076-0.178-0.013-0.267c-0.09-0.089-0.153-0.076-0.255-0.14c-0.102-0.063-0.191,0.013-0.254,0.089c-0.063,0.076-0.14-0.013-0.217,0.012c-0.102,0.035-0.063,0.166-0.012,0.229C11.714,10.221,11.804,10.361,11.931,10.412zM24.729,17.198c-0.083,0.037-0.153,0.47,0,0.521c0.152,0.052,0.241-0.202,0.191-0.267C24.868,17.39,24.843,17.147,24.729,17.198zM20.114,20.464c-0.159-0.045-0.177,0.166-0.304,0.306c-0.128,0.141-0.267,0.254-0.317,0.241c-0.052-0.013-0.331,0.089-0.242,0.279c0.089,0.191,0.076,0.382-0.013,0.472c-0.089,0.088,0.076,0.342,0.052,0.482c-0.026,0.139,0.037,0.229,0.215,0.229s0.242-0.064,0.318-0.229c0.076-0.166,0.088-0.331,0.164-0.47c0.077-0.141,0.141-0.434,0.179-0.51c0.038-0.075,0.114-0.316,0.102-0.457C20.254,20.669,20.204,20.489,20.114,20.464zM10.391,8.802c-0.069-0.06-0.229-0.102-0.306-0.11c-0.076-0.008-0.152,0.06-0.321,0.06c-0.168,0-0.279,0.067-0.347,0C9.349,8.684,9.068,8.65,9.042,8.692C9.008,8.749,8.941,8.751,9.008,8.87c0.069,0.118,0.12,0.186,0.179,0.178s0.262-0.017,0.288,0.051C9.5,9.167,9.569,9.226,9.712,9.184c0.145-0.042,0.263-0.068,0.296-0.119c0.033-0.051,0.263-0.059,0.263-0.059S10.458,8.861,10.391,8.802z";
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
    }
    WorldChartComponent.prototype.ngOnInit = function () {
        // this.services.getallquestions().subscribe(data => this.Questions = data);
        this.getmap();
    };
    WorldChartComponent.prototype.getmap = function () {
        //var gmap;
        //function initGoogleMap() {
        //    gmap = new this.google.maps.Map(document.getElementById('gmap'), {
        //        scrollwheel: true
        //    });
        //}
        ///**
        // * Create the amCharts Map
        // */
        //this.chart = this.AmCharts.makeChart("mapdiv1", {
        //    "type": "map",
        //    "theme": "light",
        //    "zoomDuration": 0,
        //    "dataProvider": {
        //        "map": "worldLow",
        //        "mapURL": "assets/js/amp/ammap/maps/svg/worldLow.svg",
        //        "getAreasFromMap": true
        //    },
        //    //"images": this.d,
        //    "areasSettings": {
        //        "autoZoom": false
        //    },
        //    "zoomControl": {
        //        "zoomFactor": 2,
        //        "maxZoomLevel": 1048576,
        //        "panControlEnabled": true,
        //        "top": 50
        //    },
        //    "listeners": [{
        //        "event": "positionChanged",
        //        "method": function (e) {
        //            /**
        //             * GMap inited?
        //             */
        //            if (typeof gmap === "undefined")
        //                return;
        //            // set google map zoom level:
        //            gmap.setZoom(Math.log2(this.chart.zoomLevel()) + 1);
        //            // sync position
        //            gmap.setCenter({
        //                // a small adjustment needed for this div size:
        //                lat: this.chart.zoomLatitude() + 0.06,
        //                lng: this.chart.zoomLongitude()
        //            });
        //        }
        //    }]
        //});
        //var worldDataProvider = {
        //    map: "worldLow",
        //    getAreasFromMap: true,
        //    images: this.d,
        //images: [{
        //    svgPath: this.backIconSVG,
        //    id: "backButton",
        //    label: "Back to continents map",
        //    rollOverColor: "#CC0000",
        //    labelRollOverColor: "#CC0000",
        //    useTargetsZoomValues: true,
        //    left: 30,
        //    bottom: 30,
        //    labelFontSize: 15,
        //    selectable: true
        //}]
        // };
        this.chart = this.AmCharts.makeChart("mapdiv1", {
            "type": "map",
            "export": {
                "enabled": true
            },
            "dataProvider": {
                "mapURL": this.w,
                // "map": "indiaLow",
                // "mapURL": "assets/js/amp/ammap/maps/svg/continentsLow.svg",
                // "mapURL": "assets/js/amp/ammap/maps/svg/worldLow.svg",
                // "mapURL": "assets/js/amp/ammap/maps/svg/GujaratDst.svg",
                "images": this.d,
                "areas": [
                    { "id": "south_america", "color": "#CC0000" }, { "id": "north_america", "color": "red" }, { "id": "asia", }, { "id": "europe", "color": "#1BBED3" }, { "id": "australia", "color": "green" }, { "id": "africa", "color": "black" }
                ],
                "getAreasFromMap": true
            },
            "imagesSettings": {
                rollOverScale: 3,
                selectedScale: 3,
                color: "#585869",
                rollOverColor: "#585869",
                selectedColor: "#585869",
                pauseDuration: 0.6,
                animationDuration: 4.5,
                adjustAnimationSpeed: true
            },
            "areasSettings": {
                "autoZoom": true,
                "selectedColor": "#CC0000",
                "selectable": true,
                "outlineThickness": 0.1,
            },
            "linesSettings": {
                "color": "#585869",
                "alpha": 0.4
            },
            "smallMap": {}
        });
    };
    WorldChartComponent.prototype.contents = function () {
        this.d = [];
        this.w = "assets/js/amp/ammap/maps/svg/continentsLow.svg";
        var mapURL = this.w;
        this.getmap();
    };
    WorldChartComponent.prototype.capital = function () {
        this.w = "assets/js/amp/ammap/maps/svg/worldLow.svg";
        var mapURL = this.w;
        this.d = [
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Sarajevo", latitude: 43.8608, longitude: 18.4214 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Sofia", latitude: 42.7105, longitude: 23.3238 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Zagreb", latitude: 45.8150, longitude: 15.9785 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Pristina", latitude: 42.666667, longitude: 21.166667 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Prague", latitude: 50.0878, longitude: 14.4205 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Copenhagen", latitude: 55.6763, longitude: 12.5681 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Tallinn", latitude: 59.4389, longitude: 24.7545 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Helsinki", latitude: 60.1699, longitude: 24.9384 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Paris", latitude: 48.8567, longitude: 2.3510 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Berlin", latitude: 52.5235, longitude: 13.4115 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Athens", latitude: 37.9792, longitude: 23.7166 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Budapest", latitude: 47.4984, longitude: 19.0408 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Reykjavik", latitude: 64.1353, longitude: -21.8952 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Dublin", latitude: 53.3441, longitude: -6.2675 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Rome", latitude: 41.8955, longitude: 12.4823 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Riga", latitude: 56.9465, longitude: 24.1049 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Vaduz", latitude: 47.1411, longitude: 9.5215 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Vilnius", latitude: 54.6896, longitude: 25.2799 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Luxembourg", latitude: 49.6100, longitude: 6.1296 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Skopje", latitude: 42.0024, longitude: 21.4361 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Valletta", latitude: 35.9042, longitude: 14.5189 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Chisinau", latitude: 47.0167, longitude: 28.8497 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Monaco", latitude: 43.7325, longitude: 7.4189 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Podgorica", latitude: 42.4602, longitude: 19.2595 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Amsterdam", latitude: 52.3738, longitude: 4.8910 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Oslo", latitude: 59.9138, longitude: 10.7387 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Warsaw", latitude: 52.2297, longitude: 21.0122 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Lisbon", latitude: 38.7072, longitude: -9.1355 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bucharest", latitude: 44.4479, longitude: 26.0979 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Moscow", latitude: 55.7558, longitude: 37.6176 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "San Marino", latitude: 43.9424, longitude: 12.4578 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Belgrade", latitude: 44.8048, longitude: 20.4781 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bratislava", latitude: 48.2116, longitude: 17.1547 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ljubljana", latitude: 46.0514, longitude: 14.5060 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Madrid", latitude: 40.4167, longitude: -3.7033 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Stockholm", latitude: 59.3328, longitude: 18.0645 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bern", latitude: 46.9480, longitude: 7.4481 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kiev", latitude: 50.4422, longitude: 30.5367 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "London", latitude: 51.5002, longitude: -0.1262 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Gibraltar", latitude: 36.1377, longitude: -5.3453 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Saint Peter Port", latitude: 49.4660, longitude: -2.5522 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Douglas", latitude: 54.1670, longitude: -4.4821 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Saint Helier", latitude: 49.1919, longitude: -2.1071 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Longyearbyen", latitude: 78.2186, longitude: 15.6488 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kabul", latitude: 34.5155, longitude: 69.1952 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Yerevan", latitude: 40.1596, longitude: 44.5090 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Baku", latitude: 40.3834, longitude: 49.8932 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Manama", latitude: 26.1921, longitude: 50.5354 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Dhaka", latitude: 23.7106, longitude: 90.3978 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Thimphu", latitude: 27.4405, longitude: 89.6730 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bandar Seri Begawan", latitude: 4.9431, longitude: 114.9425 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Phnom Penh", latitude: 11.5434, longitude: 104.8984 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Peking", latitude: 39.9056, longitude: 116.3958 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Nicosia", latitude: 35.1676, longitude: 33.3736 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "T'bilisi", latitude: 41.7010, longitude: 44.7930 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "New Delhi", latitude: 28.6353, longitude: 77.2250 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Jakarta", latitude: -6.1862, longitude: 106.8063 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Teheran", latitude: 35.7061, longitude: 51.4358 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Baghdad", latitude: 33.3157, longitude: 44.3922 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Jerusalem", latitude: 31.76, longitude: 35.17 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Tokyo", latitude: 35.6785, longitude: 139.6823 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Amman", latitude: 31.9394, longitude: 35.9349 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Astana", latitude: 51.1796, longitude: 71.4475 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kuwait", latitude: 29.3721, longitude: 47.9824 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bishkek", latitude: 42.8679, longitude: 74.5984 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Vientiane", latitude: 17.9689, longitude: 102.6137 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Beyrouth / Beirut", latitude: 33.8872, longitude: 35.5134 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kuala Lumpur", latitude: 3.1502, longitude: 101.7077 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ulan Bator", latitude: 47.9138, longitude: 106.9220 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Pyinmana", latitude: 19.7378, longitude: 96.2083 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kathmandu", latitude: 27.7058, longitude: 85.3157 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Muscat", latitude: 23.6086, longitude: 58.5922 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Islamabad", latitude: 33.6751, longitude: 73.0946 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Manila", latitude: 14.5790, longitude: 120.9726 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Doha", latitude: 25.2948, longitude: 51.5082 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Riyadh", latitude: 24.6748, longitude: 46.6977 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Singapore", latitude: 1.2894, longitude: 103.8500 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Seoul", latitude: 37.5139, longitude: 126.9828 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Colombo", latitude: 6.9155, longitude: 79.8572 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Damascus", latitude: 33.5158, longitude: 36.2939 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Taipei", latitude: 25.0338, longitude: 121.5645 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Dushanbe", latitude: 38.5737, longitude: 68.7738 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bangkok", latitude: 13.7573, longitude: 100.5020 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Dili", latitude: -8.5662, longitude: 125.5880 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ankara", latitude: 39.9439, longitude: 32.8560 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ashgabat", latitude: 37.9509, longitude: 58.3794 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Abu Dhabi", latitude: 24.4764, longitude: 54.3705 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Tashkent", latitude: 41.3193, longitude: 69.2481 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Hanoi", latitude: 21.0341, longitude: 105.8372 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Sanaa", latitude: 15.3556, longitude: 44.2081 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Buenos Aires", latitude: -34.6118, longitude: -58.4173 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bridgetown", latitude: 13.0935, longitude: -59.6105 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Belmopan", latitude: 17.2534, longitude: -88.7713 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Sucre", latitude: -19.0421, longitude: -65.2559 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Brasilia", latitude: -15.7801, longitude: -47.9292 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ottawa", latitude: 45.4235, longitude: -75.6979 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Santiago", latitude: -33.4691, longitude: -70.6420 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bogota", latitude: 4.6473, longitude: -74.0962 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "San Jose", latitude: 9.9402, longitude: -84.1002 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Havana", latitude: 23.1333, longitude: -82.3667 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Roseau", latitude: 15.2976, longitude: -61.3900 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Santo Domingo", latitude: 18.4790, longitude: -69.8908 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Quito", latitude: -0.2295, longitude: -78.5243 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "San Salvador", latitude: 13.7034, longitude: -89.2073 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Guatemala", latitude: 14.6248, longitude: -90.5328 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ciudad de Mexico", latitude: 19.4271, longitude: -99.1276 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Managua", latitude: 12.1475, longitude: -86.2734 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Panama", latitude: 8.9943, longitude: -79.5188 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Asuncion", latitude: -25.3005, longitude: -57.6362 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Lima", latitude: -12.0931, longitude: -77.0465 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Castries", latitude: 13.9972, longitude: -60.0018 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Paramaribo", latitude: 5.8232, longitude: -55.1679 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Washington", latitude: 38.8921, longitude: -77.0241 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Montevideo", latitude: -34.8941, longitude: -56.0675 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Caracas", latitude: 10.4961, longitude: -66.8983 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Oranjestad", latitude: 12.5246, longitude: -70.0265 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Cayenne", latitude: 4.9346, longitude: -52.3303 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Plymouth", latitude: 16.6802, longitude: -62.2014 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "San Juan", latitude: 18.4500, longitude: -66.0667 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Algiers", latitude: 36.7755, longitude: 3.0597 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Luanda", latitude: -8.8159, longitude: 13.2306 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Porto-Novo", latitude: 6.4779, longitude: 2.6323 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Gaborone", latitude: -24.6570, longitude: 25.9089 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Ouagadougou", latitude: 12.3569, longitude: -1.5352 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bujumbura", latitude: -3.3818, longitude: 29.3622 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Yaounde", latitude: 3.8612, longitude: 11.5217 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bangui", latitude: 4.3621, longitude: 18.5873 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Brazzaville", latitude: -4.2767, longitude: 15.2662 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kinshasa", latitude: -4.3369, longitude: 15.3271 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Yamoussoukro", latitude: 6.8067, longitude: -5.2728 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Djibouti", latitude: 11.5806, longitude: 43.1425 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Cairo", latitude: 30.0571, longitude: 31.2272 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Asmara", latitude: 15.3315, longitude: 38.9183 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Addis Abeba", latitude: 9.0084, longitude: 38.7575 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Libreville", latitude: 0.3858, longitude: 9.4496 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Banjul", latitude: 13.4399, longitude: -16.6775 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Accra", latitude: 5.5401, longitude: -0.2074 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Conakry", latitude: 9.5370, longitude: -13.6785 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bissau", latitude: 11.8598, longitude: -15.5875 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Nairobi", latitude: -1.2762, longitude: 36.7965 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Maseru", latitude: -29.2976, longitude: 27.4854 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Monrovia", latitude: 6.3106, longitude: -10.8047 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Tripoli", latitude: 32.8830, longitude: 13.1897 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Antananarivo", latitude: -18.9201, longitude: 47.5237 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Lilongwe", latitude: -13.9899, longitude: 33.7703 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Bamako", latitude: 12.6530, longitude: -7.9864 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Nouakchott", latitude: 18.0669, longitude: -15.9900 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Port Louis", latitude: -20.1654, longitude: 57.4896 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Rabat", latitude: 33.9905, longitude: -6.8704 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Maputo", latitude: -25.9686, longitude: 32.5804 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Windhoek", latitude: -22.5749, longitude: 17.0805 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Niamey", latitude: 13.5164, longitude: 2.1157 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Abuja", latitude: 9.0580, longitude: 7.4891 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Kigali", latitude: -1.9441, longitude: 30.0619 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Dakar", latitude: 14.6953, longitude: -17.4439 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Freetown", latitude: 8.4697, longitude: -13.2659 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Mogadishu", latitude: 2.0411, longitude: 45.3426 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Pretoria", latitude: -25.7463, longitude: 28.1876 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Mbabane", latitude: -26.3186, longitude: 31.1410 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Dodoma", latitude: -6.1670, longitude: 35.7497 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Lome", latitude: 6.1228, longitude: 1.2255 },
            { svgPath: this.targetSVG, zoomLevel: 5, scale: 0.5, title: "Tunis", latitude: 36.8117, longitude: 10.1761 }
        ];
        var images = this.d;
        this.getmap();
    };
    return WorldChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], WorldChartComponent.prototype, "mapEl", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WorldChartComponent.prototype, "cusername", void 0);
WorldChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Button',
        template: __webpack_require__("../../../../../src/app/dashboard/charts/worldcharts.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object])
], WorldChartComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=worldcharts.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n                    <div class=\"card\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Pick your Color</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <button class=\"btn\">Default</button>\n                                    <button class=\"btn btn-primary\">Primary</button>\n                                    <button class=\"btn btn-info\">Info</button>\n                                    <button class=\"btn btn-success\">Success</button>\n                                    <button class=\"btn btn-warning\">Warning</button>\n                                    <button class=\"btn btn-danger\">Danger</button>\n                                    <button class=\"btn btn-rose\">Rose</button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Buttons with Label</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <button class=\"btn\">\n                                        <span class=\"btn-label\">\n                                            <i class=\"material-icons\">keyboard_arrow_left</i>\n                                        </span>\n                                        Left\n                                    </button>\n                                    <button class=\"btn\">\n                                        Right\n                                        <span class=\"btn-label btn-label-right\">\n                                            <i class=\"material-icons\">keyboard_arrow_right</i>\n                                        </span>\n                                    </button>\n                                    <button class=\"btn btn-info\">\n                                        <span class=\"btn-label\">\n                                            <i class=\"material-icons\">priority_high</i>\n                                        </span>\n                                        Info\n                                    </button>\n                                    <button class=\"btn btn-success\">\n                                        <span class=\"btn-label\">\n                                            <i class=\"material-icons\">check</i>\n                                        </span>\n                                        Success\n                                    </button>\n                                    <button class=\"btn btn-warning\">\n                                        <i class=\"material-icons\">warning</i> Warning\n                                    </button>\n                                    <button class=\"btn btn-danger\">\n                                        <i class=\"material-icons\">close</i> Danger\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Pick your Size</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <button class=\"btn btn-primary btn-xs\">x-Small</button>\n                                    <button class=\"btn btn-primary btn-sm\">Small</button>\n                                    <button class=\"btn btn-primary\">Regular</button>\n                                    <button class=\"btn btn-primary btn-lg\">Large</button>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Pick your Style</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <button class=\"btn btn-primary\">Default</button>\n                                    <button class=\"btn btn-primary btn-round\">round</button>\n                                    <button class=\"btn btn-primary btn-round\">\n                                        <i class=\"material-icons\">favorite</i> with icon\n                                    </button>\n                                    <button class=\"btn btn-primary btn-round btn-fab btn-fab-mini\">\n                                        <i class=\"material-icons\">favorite</i>\n                                    </button>\n                                    <button class=\"btn btn-primary btn-simple\">\n                                        simple\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Pagination</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <ul class=\"pagination pagination-primary\">\n                                        <!--\n\t\t\t\t\tcolor-classes: \"pagination-primary\", \"pagination-info\", \"pagination-success\", \"pagination-warning\", \"pagination-danger\"\n\t            -->\n                                        <li>\n                                            <a href=\"javascript:void(0);\">1</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">...</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">5</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">6</a>\n                                        </li>\n                                        <li class=\"active\">\n                                            <a href=\"javascript:void(0);\">7</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">8</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">9</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">...</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">12</a>\n                                        </li>\n                                    </ul>\n                                    <ul class=\"pagination pagination-info\">\n                                        <li>\n                                            <a href=\"javascript:void(0);\"> prev</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">1</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">2</a>\n                                        </li>\n                                        <li class=\"active\">\n                                            <a href=\"javascript:void(0);\">3</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">4</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">5</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"javascript:void(0);\">next </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Button Group</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-info\">Left</button>\n                                        <button type=\"button\" class=\"btn btn-info\">Middle</button>\n                                        <button type=\"button\" class=\"btn btn-info\">Right</button>\n                                    </div>\n                                    <br>\n                                    <br>\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">1</button>\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">2</button>\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">3</button>\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">4</button>\n                                    </div>\n                                    <div class=\"btn-group\">\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">5</button>\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">6</button>\n                                        <button type=\"button\" class=\"btn btn-round btn-info\">7</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Social buttons</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-twitter\">\n                                                <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-twitter\">\n                                                <i class=\"fa fa-twitter\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-twitter\">\n                                                <i class=\"fa fa-twitter\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-twitter\">\n                                                <i class=\"fa fa-twitter\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-twitter\">\n                                                <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-facebook\">\n                                                <i class=\"fa fa-facebook-square\"></i> Share &middot; 2.2k\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-facebook\">\n                                                <i class=\"fa fa-facebook\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-facebook\">\n                                                <i class=\"fa fa-facebook\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-facebook\">\n                                                <i class=\"fa fa-facebook-square\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-facebook\">\n                                                <i class=\"fa fa-facebook-square\"></i> Share &middot; 2.2k\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-google\">\n                                                <i class=\"fa fa-google-square\"></i> Share on Google+\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-google\">\n                                                <i class=\"fa fa-google\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-google\">\n                                                <i class=\"fa fa-google\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-google\">\n                                                <i class=\"fa fa-google\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-google\">\n                                                <i class=\"fa fa-google-square\"></i> Share on Google+\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-linkedin\">\n                                                <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-linkedin\">\n                                                <i class=\"fa fa-linkedin\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-linkedin\">\n                                                <i class=\"fa fa-linkedin\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-linkedin\">\n                                                <i class=\"fa fa-linkedin-square\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-linkedin\">\n                                                <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-pinterest\">\n                                                <i class=\"fa fa-pinterest\"></i> Pint it &middot; 212\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-pinterest\">\n                                                <i class=\"fa fa-pinterest\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-pinterest\">\n                                                <i class=\"fa fa-pinterest\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-pinterest\">\n                                                <i class=\"fa fa-pinterest\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-pinterest\">\n                                                <i class=\"fa fa-pinterest\"></i> Pint it &middot; 212\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-youtube\">\n                                                <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-youtube\">\n                                                <i class=\"fa fa-youtube\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-youtube\">\n                                                <i class=\"fa fa-youtube\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-youtube\">\n                                                <i class=\"fa fa-youtube\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-youtube\">\n                                                <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-tumblr\">\n                                                <i class=\"fa fa-tumblr-square\"></i> Repost\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-tumblr\">\n                                                <i class=\"fa fa-tumblr\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-tumblr\">\n                                                <i class=\"fa fa-tumblr\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-tumblr\">\n                                                <i class=\"fa fa-tumblr-square\"> </i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-tumblr\">\n                                                <i class=\"fa fa-tumblr-square\"></i> Repost\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-github\">\n                                                <i class=\"fa fa-github\"></i> Connect with Github\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-github\">\n                                                <i class=\"fa fa-github\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-github\">\n                                                <i class=\"fa fa-github\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-github\">\n                                                <i class=\"fa fa-github\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-github\">\n                                                <i class=\"fa fa-github\"></i> Connect with Github\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-behance\">\n                                                <i class=\"fa fa-behance-square\"></i> Follow us\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-behance\">\n                                                <i class=\"fa fa-behance\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-behance\">\n                                                <i class=\"fa fa-behance\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-behance\">\n                                                <i class=\"fa fa-behance\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-behance\">\n                                                <i class=\"fa fa-behance-square\"></i> Follow us\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-dribbble\">\n                                                <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-dribbble\">\n                                                <i class=\"fa fa-dribbble\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                                                <i class=\"fa fa-dribbble\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-dribbble\">\n                                                <i class=\"fa fa-dribbble\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-dribbble\">\n                                                <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                                            </button>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <button class=\"btn btn-social btn-fill btn-reddit\">\n                                                <i class=\"fa fa-reddit\"></i> Repost &middot; 232\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon  btn-reddit\">\n                                                <i class=\"fa fa-reddit\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-round btn-reddit\">\n                                                <i class=\"fa fa-reddit\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-1 col-sm-1\">\n                                            <button class=\"btn btn-just-icon btn-simple btn-reddit\">\n                                                <i class=\"fa fa-reddit\"></i>\n                                            </button>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <button class=\"btn btn-simple btn-reddit\">\n                                                <i class=\"fa fa-reddit\"></i> Repost &middot; 232\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    return ButtonComponent;
}());
ButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Button',
        template: __webpack_require__("../../../../../src/app/dashboard/components/buttons/buttons.component.html"),
    })
], ButtonComponent);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n                    <div class=\"header text-center\">\n                        <h3 class=\"title\">Notifications</h3>\n                        <p class=\"category\">Handcrafted by our friend\n                            <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                            <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n                        </p>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Notifications Style</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"alert alert-info\">\n                                        <span>This is a plain notification</span>\n                                    </div>\n                                    <div class=\"alert alert-info\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>This is a notification with close button.</span>\n                                    </div>\n                                    <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                                        <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                                    </div>\n                                    <div class=\"alert alert-rose alert-with-icon\" data-notify=\"container\">\n                                        <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span data-notify=\"message\">This is a notification with close button and icon and is made with \".alert-rose\". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Notification states</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"alert alert-info\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>\n                                            <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                                    </div>\n                                    <div class=\"alert alert-success\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>\n                                            <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                                    </div>\n                                    <div class=\"alert alert-warning\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>\n                                            <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                                    </div>\n                                    <div class=\"alert alert-danger\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>\n                                            <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                                    </div>\n                                    <div class=\"alert alert-primary\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>\n                                            <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                                    </div>\n                                    <div class=\"alert alert-rose\">\n                                        <button type=\"button\" aria-hidden=\"true\" class=\"close\">\n                                            <i class=\"material-icons\">close</i>\n                                        </button>\n                                        <span>\n                                            <b> Rose - </b> This is a regular notification made with \".alert-rose\"</span>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-content\">\n                                    <div class=\"places-buttons\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6 col-md-offset-3 text-center\">\n                                                <h4 class=\"card-title\">\n                                                    Notifications Places\n                                                    <p class=\"category\">Click to view notifications</p>\n                                                </h4>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                                                <div class=\"col-md-4\">\n                                                    <button class=\"btn btn-primary btn-block\" onclick=\"demo.showNotification('top','left')\">Top Left</button>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <button class=\"btn btn-primary btn-block\" onclick=\"demo.showNotification('top','center')\">Top Center<div class=\"ripple-container\"></div></button>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <button class=\"btn btn-primary btn-block\" onclick=\"demo.showNotification('top','right')\">Top Right</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n                                                <div class=\"col-md-4\">\n                                                    <button class=\"btn btn-primary btn-block\" onclick=\"demo.showNotification('bottom','left')\">Bottom Left</button>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <button class=\"btn btn-primary btn-block\" onclick=\"demo.showNotification('bottom','center')\">Bottom Center<div class=\"ripple-container\"></div></button>\n                                                </div>\n                                                <div class=\"col-md-4\">\n                                                    <button class=\"btn btn-primary btn-block\" onclick=\"demo.showNotification('bottom','right')\">Bottom Right</button>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12 text-center\">\n                                            <div class=\"card-header\">\n                                                <h4 class=\"card-title\">Modal</h4>\n                                            </div>\n                                            <button class=\"btn btn-primary btn-raised btn-round\" data-toggle=\"modal\" data-target=\"#myModal\">\n                                                Classic modal\n                                            </button>\n                                            <button class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                                Notice modal\n                                            <div class=\"ripple-container\"></div></button>\n                                            <button class=\"btn btn-raised btn-round btn-rose\" data-toggle=\"modal\" data-target=\"#smallAlertModal\">\n                                                Small alert modal\n                                            </button>\n                                            <!-- Classic Modal -->\n                                            <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                                <div class=\"modal-dialog\">\n                                                    <div class=\"modal-content\">\n                                                        <div class=\"modal-header\">\n                                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                                                <i class=\"material-icons\">clear</i>\n                                                            </button>\n                                                            <h4 class=\"modal-title\">Modal title</h4>\n                                                        </div>\n                                                        <div class=\"modal-body\">\n                                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n                                                            </p>\n                                                        </div>\n                                                        <div class=\"modal-footer\">\n                                                            <button type=\"button\" class=\"btn btn-simple\">Nice Button</button>\n                                                            <button type=\"button\" class=\"btn btn-danger btn-simple\" data-dismiss=\"modal\">Close</button>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <!--  End Modal -->\n                                            <!-- notice modal -->\n                                            \n                                            <!-- end notice modal -->\n                                            <!-- small modal -->\n                                            \n                                            <!--    end small modal -->\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Notification',
        template: __webpack_require__("../../../../../src/app/dashboard/components/notifications/notifications.component.html"),
    })
], NotificationComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/panels/panels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Navigation Pills -\n                                        <small>Horizontal Tabs</small>\n                                    </h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <ul class=\"nav nav-pills nav-pills-warning\">\n                                        <li class=\"\">\n                                            <a href=\"#pill1\" data-toggle=\"tab\" aria-expanded=\"false\">Profile</a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#pill2\" data-toggle=\"tab\" aria-expanded=\"false\">Settings</a>\n                                        </li>\n                                        <li class=\"active\">\n                                            <a href=\"#pill3\" data-toggle=\"tab\" aria-expanded=\"true\">Options</a>\n                                        </li>\n                                    </ul>\n                                    <div class=\"tab-content\">\n                                        <div class=\"tab-pane\" id=\"pill1\">\n                                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                            <br>\n                                            <br> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                            <br>\n                                            <br> This is very nice.\n                                        </div>\n                                        <div class=\"tab-pane\" id=\"pill2\">\n                                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                            <br>\n                                            <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                        </div>\n                                        <div class=\"tab-pane active\" id=\"pill3\">\n                                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                            <br>\n                                            <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Navigation Pills -\n                                        <small class=\"category\">Vertical Tabs</small>\n                                    </h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <ul class=\"nav nav-pills nav-pills-rose nav-stacked\">\n                                                <li class=\"active\">\n                                                    <a href=\"#tab1\" data-toggle=\"tab\">Profile</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#tab2\" data-toggle=\"tab\">Settings</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#tab3\" data-toggle=\"tab\">Options</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                            <div class=\"tab-content\">\n                                                <div class=\"tab-pane active\" id=\"tab1\">\n                                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                                    <br>\n                                                    <br> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. This is very nice.\n                                                </div>\n                                                <div class=\"tab-pane\" id=\"tab2\">\n                                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                                    <br>\n                                                    <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                                </div>\n                                                <div class=\"tab-pane\" id=\"tab3\">\n                                                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                                    <br>\n                                                    <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Collapsible Accordion</h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                                                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\" class=\"collapsed\">\n                                                    <h4 class=\"panel-title\">\n                                                        Collapsible Group Item #1\n                                                        <i class=\"material-icons\">keyboard_arrow_down</i>\n                                                    </h4>\n                                                </a>\n                                            </div>\n                                            <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" aria-expanded=\"false\" style=\"height: 0px;\">\n                                                <div class=\"panel-body\">\n                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                                    <h4 class=\"panel-title\">\n                                                        Collapsible Group Item #2\n                                                        <i class=\"material-icons\">keyboard_arrow_down</i>\n                                                    </h4>\n                                                </a>\n                                            </div>\n                                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" aria-expanded=\"false\">\n                                                <div class=\"panel-body\">\n                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"panel panel-default\">\n                                            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                                                <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                                    <h4 class=\"panel-title\">\n                                                        Collapsible Group Item #3\n                                                        <i class=\"material-icons\">keyboard_arrow_down</i>\n                                                    </h4>\n                                                </a>\n                                            </div>\n                                            <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" aria-expanded=\"false\">\n                                                <div class=\"panel-body\">\n                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"card\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Navigation Pills Icons -\n                                        <small class=\"category\">Vertical Tabs</small>\n                                    </h4>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                            <ul class=\"nav nav-pills nav-pills-icons nav-pills-rose nav-stacked\" role=\"tablist\">\n                                                <!--\n                                    color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n                                -->\n                                                <li class=\"active\">\n                                                    <a href=\"#dashboard-2\" role=\"tab\" data-toggle=\"tab\">\n                                                        <i class=\"material-icons\">dashboard</i> Dashboard\n                                                    </a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#schedule-2\" role=\"tab\" data-toggle=\"tab\">\n                                                        <i class=\"material-icons\">schedule</i> Schedule\n                                                    </a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                            <div class=\"tab-content\">\n                                                <div class=\"tab-pane active\" id=\"dashboard-2\">\n                                                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                                    <br>\n                                                    <br> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                                    <br>\n                                                    <br> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                                </div>\n                                                <div class=\"tab-pane\" id=\"schedule-2\">\n                                                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                                    <br>\n                                                    <br> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <h3 class=\"title text-center\">Page Subcategories</h3>\n                            <br>\n                            <div class=\"nav-center\">\n                                <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons\" role=\"tablist\">\n                                    <!--\n                        color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n                    -->\n                                    <li>\n                                        <a href=\"#description-1\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">info</i> Description\n                                        </a>\n                                    </li>\n                                    <li class=\"active\">\n                                        <a href=\"#schedule-1\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">location_on</i> Location\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#tasks-1\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">gavel</i> Legal Info\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#tasks-2\" role=\"tab\" data-toggle=\"tab\">\n                                            <i class=\"material-icons\">help_outline</i> Help Center\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane\" id=\"description-1\">\n                                    <div class=\"card\">\n                                        <div class=\"card-header\">\n                                            <h4 class=\"card-title\">Description about product</h4>\n                                            <p class=\"category\">\n                                                More information here\n                                            </p>\n                                        </div>\n                                        <div class=\"card-content\">\n                                            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                                            <br>\n                                            <br> Dramatically visualize customer directed convergence without revolutionary ROI.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane active\" id=\"schedule-1\">\n                                    <div class=\"card\">\n                                        <div class=\"card-header\">\n                                            <h4 class=\"card-title\">Location of the product</h4>\n                                            <p class=\"category\">\n                                                More information here\n                                            </p>\n                                        </div>\n                                        <div class=\"card-content\">\n                                            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                                            <br>\n                                            <br> Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane\" id=\"tasks-1\">\n                                    <div class=\"card\">\n                                        <div class=\"card-header\">\n                                            <h4 class=\"card-title\">Legal info of the product</h4>\n                                            <p class=\"category\">\n                                                More information here\n                                            </p>\n                                        </div>\n                                        <div class=\"card-content\">\n                                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                                            <br>\n                                            <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"tab-pane\" id=\"tasks-2\">\n                                    <div class=\"card\">\n                                        <div class=\"card-header\">\n                                            <h4 class=\"card-title\">Help center</h4>\n                                            <p class=\"category\">\n                                                More information here\n                                            </p>\n                                        </div>\n                                        <div class=\"card-content\">\n                                            From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.\n                                            <br>\n                                            <br> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/panels/panels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return panelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var panelsComponent = (function () {
    function panelsComponent() {
    }
    return panelsComponent;
}());
panelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Panels',
        template: __webpack_require__("../../../../../src/app/dashboard/components/panels/panels.component.html"),
    })
], panelsComponent);

//# sourceMappingURL=panels.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/components/sweetalert/sweetalert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n                    <div class=\"header text-center\">\n                        <h3 class=\"title\">Sweet Alert 2</h3>\n                        <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend\n                            <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the\n                            <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation.</a>\n                        </p>\n                    </div>\n                    <div class=\"places-sweet-alerts\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>Basic example</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('basic')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>A title with a text under</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('title-and-text')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>A success message</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('success-message')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>Custom HTML description</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('custom-html')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('warning-message-and-confirmation')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('warning-message-and-cancel')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>A message with auto close timer set to 2 seconds</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('auto-close')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"card\">\n                                    <div class=\"card-content text-center\">\n                                        <h5>Modal window with input field</h5>\n                                        <button class=\"btn btn-rose btn-fill\" onclick=\"demo.showSwal('input-field')\">Try me!</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/sweetalert/sweetalert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sweetalertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sweetalertComponent = (function () {
    function sweetalertComponent() {
    }
    return sweetalertComponent;
}());
sweetalertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Button',
        template: __webpack_require__("../../../../../src/app/dashboard/components/sweetalert/sweetalert.component.html"),
    })
], sweetalertComponent);

//# sourceMappingURL=sweetalert.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n <router-outlet ></router-outlet>\r\n "

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-cmp',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/forms/extendedforms/extendedforms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                                    <i class=\"material-icons\">today</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Datetime Picker</h4>\n                                    <div class=\"form-group\">\n                                        <label class=\"label-control\">Datetime Picker</label>\n                                        <input class=\"form-control datetimepicker\" value=\"10/05/2016\" type=\"text\">\n                                    <span class=\"material-input\"></span></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                                    <i class=\"material-icons\">library_books</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Datetime Picker</h4>\n                                    <div class=\"form-group\">\n                                        <label class=\"label-control\">Date Picker</label>\n                                        <input class=\"form-control datepicker\" value=\"10/10/2016\" style=\"\" type=\"text\">\n                                    <span class=\"material-input\"></span></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                                    <i class=\"material-icons\">av_timer</i>\n                                </div>\n                                <div class=\"card-content\">\n                                    <h4 class=\"card-title\">Datetime Picker</h4>\n                                    <div class=\"form-group\">\n                                        <label class=\"label-control\">Time Picker</label>\n                                        <input class=\"form-control timepicker\" value=\"14:00\" type=\"text\">\n                                    <span class=\"material-input\"></span></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-content\">\n                                    <br>\n                                    <br>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <legend>Switches</legend>\n                                            <div class=\"togglebutton\">\n                                                <label>\n                                                    <input checked=\"\" type=\"checkbox\"><span class=\"toggle\"></span> Toggle is on\n                                                </label>\n                                            </div>\n                                            <div class=\"togglebutton\">\n                                                <label>\n                                                    <input type=\"checkbox\"><span class=\"toggle\"></span> Toggle is off\n                                                </label>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <legend>Customisable Select</legend>\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-5 col-md-6 col-sm-3\">\n                                                    <div class=\"btn-group bootstrap-select\">\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose city\"><span class=\"filter-option pull-left\">Choose city</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span></button><div class=\"dropdown-menu open\" role=\"combobox\"><ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\"><li data-original-index=\"1\" class=\"disabled selected\"><a tabindex=\"-1\" class=\"\" data-tokens=\"null\" role=\"option\" href=\"#\" aria-disabled=\"true\" aria-selected=\"true\"><span class=\"text\">Choose city</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"2\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Foobar</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"3\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Is great</span><span class=\"material-icons  check-mark\"> done </span></a></li></ul></div><select class=\"selectpicker\" data-style=\"btn btn-primary btn-round\" title=\"Single Select\" data-size=\"7\" tabindex=\"-98\"><option class=\"bs-title-option\" value=\"\">Single Select</option>\n                                                        <option disabled=\"\" selected=\"\">Choose city</option>\n                                                        <option value=\"2\">Foobar</option>\n                                                        <option value=\"3\">Is great</option>\n                                                    </select></div>\n                                                </div>\n                                                <div class=\"col-lg-5 col-md-6 col-sm-3\">\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\n                                                        <button type=\"button\" class=\"btn dropdown-toggle bs-placeholder select-with-transition\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\"><span class=\"filter-option pull-left\">Choose City</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span></button><div class=\"dropdown-menu open\" role=\"combobox\"><ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\"><li data-original-index=\"0\" class=\"disabled\"><a tabindex=\"-1\" class=\"\" data-tokens=\"null\" role=\"option\" href=\"#\" aria-disabled=\"true\" aria-selected=\"false\"><span class=\"text\"> Choose city</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"1\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Paris </span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"2\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Bucharest</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"3\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Rome</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"4\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">New York</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"5\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Miami </span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"6\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Piatra Neamt</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"7\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Paris </span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"8\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Bucharest</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"9\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Rome</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"10\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">New York</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"11\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Miami </span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"12\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Piatra Neamt</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"13\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Paris </span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"14\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Bucharest</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"15\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Rome</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"16\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">New York</span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"17\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Miami </span><span class=\"material-icons  check-mark\"> done </span></a></li><li data-original-index=\"18\"><a tabindex=\"0\" class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\"><span class=\"text\">Piatra Neamt</span><span class=\"material-icons  check-mark\"> done </span></a></li></ul></div><select class=\"selectpicker\" data-style=\"select-with-transition\" multiple=\"\" title=\"Choose City\" data-size=\"7\" tabindex=\"-98\">\n                                                        <option disabled=\"\"> Choose city</option>\n                                                        <option value=\"2\">Paris </option>\n                                                        <option value=\"3\">Bucharest</option>\n                                                        <option value=\"4\">Rome</option>\n                                                        <option value=\"5\">New York</option>\n                                                        <option value=\"6\">Miami </option>\n                                                        <option value=\"7\">Piatra Neamt</option>\n                                                        <option value=\"8\">Paris </option>\n                                                        <option value=\"9\">Bucharest</option>\n                                                        <option value=\"10\">Rome</option>\n                                                        <option value=\"11\">New York</option>\n                                                        <option value=\"12\">Miami </option>\n                                                        <option value=\"13\">Piatra Neamt</option>\n                                                        <option value=\"14\">Paris </option>\n                                                        <option value=\"15\">Bucharest</option>\n                                                        <option value=\"16\">Rome</option>\n                                                        <option value=\"17\">New York</option>\n                                                        <option value=\"18\">Miami </option>\n                                                        <option value=\"19\">Piatra Neamt</option>\n                                                    </select></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <br>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <legend>Tags</legend>\n                                            <div class=\"bootstrap-tagsinput\"><span class=\"tag label label-info\">Amsterdam<span data-role=\"remove\"></span></span> <span class=\"tag label label-info\">Washington<span data-role=\"remove\"></span></span> <span class=\"tag label label-info\">Sydney<span data-role=\"remove\"></span></span> <span class=\"tag label label-info\">Beijing<span data-role=\"remove\"></span></span> <input placeholder=\"\" type=\"text\"></div><input value=\"Amsterdam,Washington,Sydney,Beijing\" class=\"tagsinput\" data-role=\"tagsinput\" data-color=\"rose\" style=\"display: none;\" type=\"text\">\n                                            <!-- You can change data-color=\"rose\" with one of our colors primary | warning | info | danger | success -->\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <legend>Dropdown &amp; Dropup</legend>\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                                    <div class=\"dropdown\">\n                                                        <button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropdown\n                                                            <b class=\"caret\"></b>\n                                                        </button>\n                                                        <ul class=\"dropdown-menu dropdown-menu-left\">\n                                                            <li class=\"dropdown-header\">Dropdown header</li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Action</a>\n                                                            </li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Another action</a>\n                                                            </li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Something else here</a>\n                                                            </li>\n                                                            <li class=\"divider\"></li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Separated link</a>\n                                                            </li>\n                                                            <li class=\"divider\"></li>\n                                                            <li>\n                                                                <a href=\"#pablo\">One more separated link</a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                                    <div class=\"dropup\">\n                                                        <button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropup\n                                                            <b class=\"caret\"></b>\n                                                        </button>\n                                                        <ul class=\"dropdown-menu dropdown-menu-left\">\n                                                            <li class=\"dropdown-header\">Dropdown header</li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Action</a>\n                                                            </li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Another action</a>\n                                                            </li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Something else here</a>\n                                                            </li>\n                                                            <li class=\"divider\"></li>\n                                                            <li>\n                                                                <a href=\"#pablo\">Separated link</a>\n                                                            </li>\n                                                            <li class=\"divider\"></li>\n                                                            <li>\n                                                                <a href=\"#pablo\">One more separated link</a>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <br>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <legend>Progress Bars</legend>\n                                            <div class=\"progress progress-line-primary\">\n                                                <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                                                    <span class=\"sr-only\">60% Complete</span>\n                                                </div>\n                                            </div>\n                                            <div class=\"progress progress-line-info\">\n                                                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                                                    <span class=\"sr-only\">60% Complete</span>\n                                                </div>\n                                            </div>\n                                            <div class=\"progress progress-line-danger\">\n                                                <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                                                    <span class=\"sr-only\">35% Complete (success)</span>\n                                                </div>\n                                                <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                                                    <span class=\"sr-only\">20% Complete (warning)</span>\n                                                </div>\n                                                <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                                                    <span class=\"sr-only\">10% Complete (danger)</span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <legend>Sliders</legend>\n                                            <div id=\"sliderRegular\" class=\"slider noUi-target noUi-ltr noUi-horizontal noUi-connect\"><div class=\"noUi-base\"><div class=\"noUi-origin noUi-background\" style=\"left: 40%;\"><div class=\"noUi-handle noUi-handle-lower\"></div></div></div></div>\n                                            <div id=\"sliderDouble\" class=\"slider slider-info noUi-target noUi-ltr noUi-horizontal noUi-background\"><div class=\"noUi-base\"><div class=\"noUi-origin noUi-connect\" style=\"left: 20%;\"><div class=\"noUi-handle noUi-handle-lower\"></div></div><div class=\"noUi-origin noUi-background\" style=\"left: 60%;\"><div class=\"noUi-handle noUi-handle-upper\"></div></div></div></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4 col-sm-4\">\n                                            <legend>Regular Image</legend>\n                                            <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                                <div class=\"fileinput-new thumbnail\">\n                                                    <img src=\"../../assets/img/image_placeholder.jpg\" alt=\"...\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                                                <div>\n                                                    <span class=\"btn btn-rose btn-round btn-file\">\n                                                        <span class=\"fileinput-new\">Select image</span>\n                                                        <span class=\"fileinput-exists\">Change</span>\n                                                        <input name=\"...\" type=\"file\">\n                                                    </span>\n                                                    <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-3 col-sm-4\">\n                                            <legend>Avatar</legend>\n                                            <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                                                <div class=\"fileinput-new thumbnail img-circle\">\n                                                    <img src=\"../../assets/img/placeholder.jpg\" alt=\"...\">\n                                                </div>\n                                                <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\n                                                <div>\n                                                    <span class=\"btn btn-round btn-rose btn-file\">\n                                                        <span class=\"fileinput-new\">Add Photo</span>\n                                                        <span class=\"fileinput-exists\">Change</span>\n                                                        <input name=\"...\" type=\"file\">\n                                                    </span>\n                                                    <br>\n                                                    <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- end card -->\n                        </div>\n                    </div>\n                </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/forms/extendedforms/extendedforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedformsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var extendedformsComponent = (function () {
    function extendedformsComponent() {
    }
    return extendedformsComponent;
}());
extendedformsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ExtendedForms',
        template: __webpack_require__("../../../../../src/app/dashboard/forms/extendedforms/extendedforms.component.html"),
    })
], extendedformsComponent);

//# sourceMappingURL=extendedforms.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\r\n        <div class=\"dropdown show-dropdown\">\r\n            <a href=\"#\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-cog fa-2x\"> </i>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n                <li class=\"header-title\"> Sidebar Filters</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                        <div class=\"badge-colors text-center\">\r\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                            <span class=\"badge filter badge-blue\" data-color=\"blue\"></span>\r\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                            <span class=\"badge filter badge-red\" data-color=\"red\"></span>\r\n                            <span class=\"badge filter badge-rose active\" data-color=\"rose\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"header-title\">Sidebar Background</li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                        <div class=\"text-center\">\r\n                            <span class=\"badge filter badge-white\" data-color=\"white\"></span>\r\n                            <span class=\"badge filter badge-black active\" data-color=\"black\"></span>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                        <p>Sidebar Mini</p>\r\n                        <div class=\"togglebutton switch-sidebar-mini\">\r\n                            <label>\r\n                                <input type=\"checkbox\" unchecked=\"\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"adjustments-line\">\r\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                        <p>Sidebar Image</p>\r\n                        <div class=\"togglebutton switch-sidebar-image\">\r\n                            <label>\r\n                                <input type=\"checkbox\" checked=\"\">\r\n                            </label>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                    </a>\r\n                </li>\r\n                <li class=\"header-title\">Images</li>\r\n                <li class=\"active\">\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"assets/img/sidebar-1.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"assets/img/sidebar-2.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"assets/img/sidebar-3.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                        <img src=\"assets/img/sidebar-4.jpg\" alt=\"\" />\r\n                    </a>\r\n                </li>\r\n                <li class=\"button-container\">\r\n                    <div class=\"\">\r\n                        <a href=\"http://www.creative-tim.com/product/material-dashboard-pro\" target=\"_blank\" class=\"btn btn-rose btn-block\">Buy Now</a>\r\n                    </div>\r\n                    <div class=\"\">\r\n                        <a href=\"http://www.creative-tim.com/product/material-dashboard\" target=\"_blank\" class=\"btn btn-info btn-block\">Get Free Demo</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"header-title\">Thank you for 95 shares!</li>\r\n                <li class=\"button-container\">\r\n                    <button id=\"twitter\" class=\"btn btn-social btn-twitter btn-round\"><i class=\"fa fa-twitter\"></i> &middot; 45</button>\r\n                    <button id=\"facebook\" class=\"btn btn-social btn-facebook btn-round\"><i class=\"fa fa-facebook-square\"> &middot;</i>50</button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"card\">\r\n                                <div class=\"card-header card-header-icon\" data-background-color=\"green\">\r\n                                    <i class=\"material-icons\">language</i>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <h4 class=\"card-title\">Global Sales by Top Locations</h4>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-5\">\r\n                                            <div class=\"table-responsive table-sales\">\r\n\r\n\r\n                                                <table class=\"table\">\r\n                                                    <tbody>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                <div class=\"flag\">\r\n                                                                    <img src=\"../assets/img/flags/US.png\">\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td>USA</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                2.920\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                53.23%\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                <div class=\"flag\">\r\n                                                                    <img src=\"../assets/img/flags/DE.png\">\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td>Germany</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                1.300\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                20.43%\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                <div class=\"flag\">\r\n                                                                    <img src=\"../assets/img/flags/AU.png\">\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td>Australia</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                760\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                10.35%\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                <div class=\"flag\">\r\n                                                                    <img src=\"../assets/img/flags/GB.png\">\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td>United Kingdom</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                690\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                7.87%\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                <div class=\"flag\">\r\n                                                                    <img src=\"../assets/img/flags/RO.png\">\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td>Romania</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                600\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                5.94%\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                        <tr>\r\n                                                            <td>\r\n                                                                <div class=\"flag\">\r\n                                                                    <img src=\"../assets/img/flags/BR.png\">\r\n                                                                </div>\r\n                                                            </td>\r\n                                                            <td>Brasil</td>\r\n                                                            <td class=\"text-right\">\r\n                                                                550\r\n                                                            </td>\r\n                                                            <td class=\"text-right\">\r\n                                                                4.34%\r\n                                                            </td>\r\n                                                        </tr>\r\n                                                    </tbody>\r\n                                                </table>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-md-offset-1\">\r\n                                            <div id=\"worldMap\" class=\"map\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"card card-chart\">\r\n                                <div class=\"card-header\" data-background-color=\"rose\" data-header-animation=\"true\">\r\n                                    <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"card-actions\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\r\n                                            <i class=\"material-icons\">build</i> Fix Header!\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-info btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Refresh\">\r\n                                            <i class=\"material-icons\">refresh</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Change Date\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <h4 class=\"card-title\">Website Views</h4>\r\n                                    <p class=\"category\">Last Campaign Performance</p>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"card card-chart\">\r\n                                <div class=\"card-header\" data-background-color=\"green\" data-header-animation=\"true\">\r\n                                    <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"card-actions\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\r\n                                            <i class=\"material-icons\">build</i> Fix Header!\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-info btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Refresh\">\r\n                                            <i class=\"material-icons\">refresh</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Change Date\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <h4 class=\"card-title\">Daily Sales</h4>\r\n                                    <p class=\"category\">\r\n                                        <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"card card-chart\">\r\n                                <div class=\"card-header\" data-background-color=\"blue\" data-header-animation=\"true\">\r\n                                    <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"card-actions\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\r\n                                            <i class=\"material-icons\">build</i> Fix Header!\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-info btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Refresh\">\r\n                                            <i class=\"material-icons\">refresh</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Change Date\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <h4 class=\"card-title\">Completed Tasks</h4>\r\n                                    <p class=\"category\">Last Campaign Performance</p>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                            <div class=\"card card-stats\">\r\n                                <div class=\"card-header\" data-background-color=\"orange\">\r\n                                    <i class=\"material-icons\">weekend</i>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <p class=\"category\">Bookings</p>\r\n                                    <h3 class=\"card-title\">184</h3>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons text-danger\">warning</i>\r\n                                        <a href=\"#pablo\">Get More Space...</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                            <div class=\"card card-stats\">\r\n                                <div class=\"card-header\" data-background-color=\"rose\">\r\n                                    <i class=\"material-icons\">equalizer</i>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <p class=\"category\">Website Visits</p>\r\n                                    <h3 class=\"card-title\">75.521</h3>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons\">local_offer</i> Tracked from Google Analytics\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                            <div class=\"card card-stats\">\r\n                                <div class=\"card-header\" data-background-color=\"green\">\r\n                                    <i class=\"material-icons\">store</i>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <p class=\"category\">Revenue</p>\r\n                                    <h3 class=\"card-title\">$34,245</h3>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                            <div class=\"card card-stats\">\r\n                                <div class=\"card-header\" data-background-color=\"blue\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <p class=\"category\">Followers</p>\r\n                                    <h3 class=\"card-title\">+245</h3>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"stats\">\r\n                                        <i class=\"material-icons\">update</i> Just Updated\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <h3>Manage Listings</h3>\r\n                    <br>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"card card-product\">\r\n                                <div class=\"card-image\" data-header-animation=\"true\">\r\n                                    <a href=\"#pablo\">\r\n                                        <img class=\"img\" src=\"http://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpeg\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"card-actions\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\r\n                                            <i class=\"material-icons\">build</i> Fix Header!\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"View\">\r\n                                            <i class=\"material-icons\">art_track</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Edit\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <h4 class=\"card-title\">\r\n                                        <a href=\"#pablo\">Cozy 5 Stars Apartment</a>\r\n                                    </h4>\r\n                                    <div class=\"card-description\">\r\n                                        The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"price\">\r\n                                        <h4>$899/night</h4>\r\n                                    </div>\r\n                                    <div class=\"stats pull-right\">\r\n                                        <p class=\"category\"><i class=\"material-icons\">place</i> Barcelona, Spain</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"card card-product\">\r\n                                <div class=\"card-image\" data-header-animation=\"true\">\r\n                                    <a href=\"#pablo\">\r\n                                        <img class=\"img\" src=\"http://demos.creative-tim.com/material-dashboard-pro/assets/img/card-3.jpeg\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"card-actions\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\r\n                                            <i class=\"material-icons\">build</i> Fix Header!\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"View\">\r\n                                            <i class=\"material-icons\">art_track</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Edit\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <h4 class=\"card-title\">\r\n                                        <a href=\"#pablo\">Office Studio</a>\r\n                                    </h4>\r\n                                    <div class=\"card-description\">\r\n                                        The place is close to Metro Station and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the night life in London, UK.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"price\">\r\n                                        <h4>$1.119/night</h4>\r\n                                    </div>\r\n                                    <div class=\"stats pull-right\">\r\n                                        <p class=\"category\"><i class=\"material-icons\">place</i> London, UK</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"card card-product\">\r\n                                <div class=\"card-image\" data-header-animation=\"true\">\r\n                                    <a href=\"#pablo\">\r\n                                        <img class=\"img\" src=\"http://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpeg\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <div class=\"card-actions\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple fix-broken-card\">\r\n                                            <i class=\"material-icons\">build</i> Fix Header!\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-default btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"View\">\r\n                                            <i class=\"material-icons\">art_track</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-success btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Edit\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-simple\" rel=\"tooltip\" data-placement=\"bottom\" title=\"Remove\">\r\n                                            <i class=\"material-icons\">close</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <h4 class=\"card-title\">\r\n                                        <a href=\"#pablo\">Beautiful Castle</a>\r\n                                    </h4>\r\n                                    <div class=\"card-description\">\r\n                                        The place is close to Metro Station and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Milan.\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <div class=\"price\">\r\n                                        <h4>$459/night</h4>\r\n                                    </div>\r\n                                    <div class=\"stats pull-right\">\r\n                                        <p class=\"category\"><i class=\"material-icons\">place</i> Milan, Italy</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Home',
        template: __webpack_require__("../../../../../src/app/dashboard/home/home.component.html"),
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/Materials/Filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input, searchableList) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                var isTrue = false;
                for (var k in searchableList) {
                    if (el[searchableList[k]].toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return el;
                    }
                }
            });
        }
        return value;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'FilterPipe',
    })
], FilterPipe);

//# sourceMappingURL=Filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/Materials/materialfilter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  \r\n\r\n\r\n     <div class=\"col-lg-5 col-md-6 col-sm-3\">\r\n                                                    \r\n\r\n               <div class=\"col-lg-6 col-md-6 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        <div class=\"col-lg-6 col-md-6 col-sm-3\" *ngIf=\"cdata!=null\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Chapter\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Chapter</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"chapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n      \r\n  \r\n       \r\n          </div>\r\n    \r\n                                              \r\n </div>\r\n<div class=\"col-ms-6\">\r\n    <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" *ngIf=\"allItems!=null\">\r\n                \r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n                     <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                                        <i class=\"material-icons\">file_download</i>\r\n                                    </button>\r\n                 \r\n                      \r\n                        </div>\r\n                    \r\n                    <div class=\"form-inline pull-xs-left m-r-1\">\r\n                  \r\n</div>\r\n    <div class=\"card-content table-responsive\">\r\n                        <div class=\"pvtTable\">\r\n                          <input  type=\"text\" class=\"form-control\" placeholder=\"search question\" name=\"search question\" style=\"color:black;\" id=\"str\" [(ngModel)]=\"userFilter.question\"/>\r\n                     \r\n                            \r\n                        <table class=\"table table-shopping\">\r\n                            <thead class=\"text-warning\">\r\n                                <tr>\r\n                                  <th>Sr.No</th>\r\n                                   \r\n                                  <th>Question</th>\r\n                                   \r\n                                  <th>Answer</th> \r\n                                  \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let s of allItems | filterBy: userFilter; let i = index\">\r\n                                  <td>\r\n                                      {{ (i+1) }}\r\n                                  </td>\r\n                                     <td>{{s.question}}</td>\r\n                                  <span *ngIf=\"s.image!=null\" class=\"que\" ><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                                     <td class=\"text-success\">{{s.correctanswer}}</td>\r\n                                    \r\n                                   </tr> \r\n                            </tbody>\r\n\r\n                            \r\n            <tfoot>\r\n    <tr>\r\n        <td colspan=\"4\">\r\n            \r\n        </td>\r\n    </tr>\r\n    </tfoot>\r\n     \r\n\r\n                        </table >\r\n                        \r\n                          </div>\r\n                        \r\n                        \r\n\r\n                    </div>\r\n</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/Materials/materialfilter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialfileterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialfileterComponent = (function () {
    function MaterialfileterComponent(router, completerService, services) {
        this.router = router;
        this.completerService = completerService;
        this.services = services;
        this.itemsCopy = [];
        this.userFilter = [];
    }
    ;
    MaterialfileterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
    };
    MaterialfileterComponent.prototype.subject = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.sid = sid;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == _this.sid; });
        });
    };
    MaterialfileterComponent.prototype.chapter = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.cid = c;
        this.services.getallquestions().subscribe(function (data) {
            _this.itemdata = data, _this.allItems = _this.itemdata.filter(function (x) { return x.chapterid == _this.cid; });
        });
        this.chaptername = this.cdata1.filter(function (x) { return x.ChapterID == _this.cid; });
        // this.allItems = this.Random[Math.floor(Math.random() * this.Random.length)];
    };
    return MaterialfileterComponent;
}());
MaterialfileterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'materialfilter',
        template: __webpack_require__("../../../../../src/app/dashboard/tables/Materials/materialfilter.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_completer__["a" /* CompleterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_completer__["a" /* CompleterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_services_component__["a" /* servicesComponent */]) === "function" && _c || Object])
], MaterialfileterComponent);

var _a, _b, _c;
//# sourceMappingURL=materialfilter.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/Materials/materials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  \r\n\r\n\r\n     <div class=\"col-lg-5 col-md-6 col-sm-3\">\r\n                                                    \r\n\r\n               <div class=\"col-lg-6 col-md-6 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-warning btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        <div class=\"col-lg-6 col-md-6 col-sm-3\" *ngIf=\"cdata!=null\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-warning btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Chapter\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Chapter</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"chapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n      \r\n  \r\n       \r\n          </div>\r\n    \r\n                                              \r\n </div>\r\n                                      \r\n                                      \r\n     \r\n                      \r\n\r\n <div class=\"col-ms-6\">\r\n                                             \r\n  \r\n  <div class=\"main-content\" >\r\n    <div class=\"container-fluid\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\" *ngIf=\"allItems!=null\">\r\n\r\n          <div class=\"card\">\r\n            <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n              <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n              <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                <i class=\"material-icons\">file_download</i>\r\n              </button>\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"form-inline pull-xs-left m-r-1\">\r\n\r\n            </div>\r\n            <div class=\"card-content table-responsive\">\r\n              <div class=\"pvtTable\">\r\n\r\n\r\n                <table class=\"table table-shopping\" width=\"100%\">\r\n                  <thead class=\"text-warning\" style=\"text-align: left;\">\r\n                    <tr>\r\n                      <th>Sr.No</th>\r\n\r\n                      <th>Question</th>\r\n\r\n                      <th>Answer</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let s of pagedItems; let i = index\">\r\n                      <td>\r\n                        {{ ((pager.currentPage - 1) * pager.pageSize +1)+(i) }}\r\n                      </td>\r\n                      <td>{{s.question}}</td>\r\n                      <span *ngIf=\"s.image!=null\" class=\"que\"><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                      <td class=\"text-success\">{{s.correctanswer}}</td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n\r\n\r\n                  <tfoot>\r\n                    <tr>\r\n                      <td colspan=\"4\"></td>\r\n                    </tr>\r\n                  </tfoot>\r\n\r\n\r\n                </table>\r\n\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-4\">\r\n                  <div class=\"dataTables_info\" id=\"datatables_info\" role=\"status\" aria-live=\"polite\">\r\n                    Showing {{ (pager.currentPage - 1) * pager.pageSize +1 }} to {{ (pager.currentPage - 1) * pager.pageSize + pager.pageSize }} of {{pager.totalItems}} entries\r\n                  </div>\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"col-sm-8\">\r\n                  <div class=\"dataTables_paginate paging_full_numbers\">\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button first disabled\">\r\n                        <a (click)=\"setPage(1)\" aria-controls=\"datatables\">First</a>\r\n\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button previous disabled\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\" aria-controls=\"datatables\">Previous</a>\r\n\r\n                      </li>\r\n                      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"paginate_button active\">\r\n                        <a (click)=\"setPage(page)\" aria-controls=\"datatables\">{{page}}</a>\r\n\r\n                      </li>\r\n\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button next\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\" aria-controls=\"datatables\">Next</a>\r\n\r\n                      </li>\r\n                      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button last\">\r\n                        <a (click)=\"setPage(pager.totalPages)\" aria-controls=\"datatables\">Last</a>\r\n\r\n                      </li>\r\n\r\n                    </ul>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngIf=\"allItems!=null\"  >\r\n\r\n          <div class=\"card\" id=\"foo\" [class.hidden]=\"true\" >\r\n            <div class=\"card-header\" data-background-color=\"orange\" style=\"background: linear-gradient(60deg, #ffa726, #fb8c00);box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\">\r\n\r\n              <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n             \r\n\r\n\r\n            </div>\r\n\r\n           \r\n            <div class=\"card-content table-responsive\">\r\n             \r\n\r\n\r\n                <table class=\"table table-shopping\">\r\n                  <thead class=\"text-warning\" style=\"text-align: left;\">\r\n                    <tr>\r\n                      <th>Sr.No</th>\r\n\r\n                      <th>Question</th>\r\n\r\n                      <th>Answer</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let s of allItems; let i = index\">\r\n                      <td>\r\n                        {{ (i+1) }}\r\n                      </td>\r\n                      <td>{{s.question}}</td>\r\n                      <span *ngIf=\"s.image!=null\" class=\"que\"><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                      <td class=\"text-success\">{{s.correctanswer}}</td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n\r\n\r\n                  <tfoot>\r\n                    <tr>\r\n                      <td colspan=\"4\"></td>\r\n                    </tr>\r\n                  </tfoot>\r\n\r\n\r\n                </table>\r\n\r\n             \r\n\r\n              \r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n                                           \r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n    \r\n     \r\n\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/Materials/materials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return materialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { MaterialfileterComponent } from 'app/dashboard/tables/Materials/materialfilter.component';



//declare var jsPDF: any;
//import * as html2canvas from "html2canvas";
var materialsComponent = (function () {
    function materialsComponent(http, services, router, builder) {
        this.http = http;
        this.services = services;
        this.router = router;
        this.itemsCopy = [];
        this.title = 'app works!';
        // pager object
        this.pager = {};
        this.userFilter = { question: null, correctanswer: null };
    }
    materialsComponent.prototype.download = function () {
        var popupWinindow;
        var innerContents = document.getElementById('foo').innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link href="assets/css/bootstrap.min.css" media="screen" rel="stylesheet" /><link rel="stylesheet" type="text/css"  href="assets/css/material-dashboard.css" /><link rel="stylesheet" type="text/css" href="assets/css/demo.css" /><link href="assets/css/Icons.css" rel="stylesheet" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    materialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
    };
    // paged items
    materialsComponent.prototype.subject = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.sid = sid;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == _this.sid; });
        });
    };
    materialsComponent.prototype.chapter = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.cid = c;
        this.services.getallquestions().subscribe(function (data) {
            _this.itemdata = data, _this.allItems = _this.itemdata.filter(function (x) { return x.chapterid == _this.cid; }), _this.setPage(1);
        });
        this.chaptername = this.cdata1.filter(function (x) { return x.ChapterID == _this.cid; });
        // this.allItems = this.Random[Math.floor(Math.random() * this.Random.length)];
    };
    materialsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // a= this.allItems[Math.floor(Math.random() * this.allItems.length)];
        // get pager object from service
        this.pager = this.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    materialsComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_6_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return materialsComponent;
}());
materialsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Home',
        template: __webpack_require__("../../../../../src/app/dashboard/tables/Materials/materials.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], materialsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=materials.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/datatable.net/datatable.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"row\">\r\n                         <div class=\"col-lg-5 col-md-6 col-sm-3\">\r\n                                <!--<div>\r\n  <h3> {{title}}</h3>\r\n  \r\n<input type=\"text\" [(ngModel)]=\"queryString\" id=\"search\" placeholder=\"Search to type\">\r\n  <ul>\r\n    <li *ngFor=\"let n of Questions | FilterPipe: queryString : searchableList \">\r\n      {{n.question}} ({{n.correctanswer}})\r\n    </li>\r\n  </ul>\r\n\r\n\r\n</div>-->\r\n                    \r\n\r\n               <div class=\"col-lg-6 col-md-6 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n         <div class=\"col-lg-6 col-md-6 col-sm-3\" *ngIf=\"cdata!=null\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Chapter\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Chapter</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"chapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n                             </div>\r\n     </div>\r\n      \r\n                      \r\n                                             \r\n  \r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n\r\n      <div class=\"row\">\r\n            <div class=\"col-md-12\" *ngIf=\"allItems!=null\">\r\n                \r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n                     <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                                        <i class=\"material-icons\">file_download</i>\r\n                                    </button>\r\n                 \r\n                      \r\n                        </div>\r\n                    \r\n                    <div class=\"form-inline pull-xs-left m-r-1\">\r\n                  \r\n</div>\r\n                    <div class=\"card-content table-responsive\">\r\n                        <div class=\"pvtTable\">\r\n                        \r\n                          <input type=\"text\" [(ngModel)]=\"queryString\" id=\"search\" placeholder=\"Search to type\">  \r\n\r\n                          <div *ngIf=\"queryString!=''\">\r\n                          <table class=\"table table-shopping\">\r\n                            <thead class=\"text-warning\">\r\n                                <tr>\r\n                                  <th>Sr.No</th>\r\n                                   \r\n                                  <th>Question</th>\r\n                                   \r\n                                  <th>Answer</th> \r\n                                  \r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                              <tr *ngFor=\"let s of Questions | FilterPipe: queryString : searchableList ; let i = index\">\r\n                                  <td>\r\n                                      {{ ((pager.currentPage - 1) * pager.pageSize +1)+(i) }}\r\n                                  </td>\r\n                                     <td>{{s.question}}</td>\r\n                                  <span *ngIf=\"s.image!=null\" class=\"que\" ><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                                     <td class=\"text-success\">{{s.correctanswer}}</td>\r\n                                    \r\n                                   </tr> \r\n                            </tbody>\r\n\r\n                            \r\n            <tfoot>\r\n    <tr>\r\n        <td colspan=\"4\">\r\n            \r\n        </td>\r\n    </tr>\r\n    </tfoot>\r\n     \r\n\r\n                        </table >\r\n                        </div>\r\n                          </div>\r\n                        \r\n                        <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                                        <div class=\"dataTables_info\" id=\"datatables_info\" role=\"status\" aria-live=\"polite\">\r\n                                            Showing {{ (pager.currentPage - 1) * pager.pageSize +1 }} to {{ (pager.currentPage - 1) * pager.pageSize + pager.pageSize }} of {{pager.totalItems}} entries</div>\r\n\r\n                                    </div>\r\n                        \r\n\r\n                        <div class=\"col-sm-8\">\r\n                            <div  class=\"dataTables_paginate paging_full_numbers\">\r\n                                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button first disabled\">\r\n                                        <a (click)=\"setPage(1)\" aria-controls=\"datatables\" >First</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button previous disabled\">\r\n                                        <a (click)=\"setPage(pager.currentPage - 1)\" aria-controls=\"datatables\" >Previous</a>\r\n\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"paginate_button active\">\r\n                                        <a (click)=\"setPage(page)\" aria-controls=\"datatables\" >{{page}}</a>\r\n\r\n                                    </li>\r\n                                                           \r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button next\">\r\n                                        <a (click)=\"setPage(pager.currentPage + 1)\" aria-controls=\"datatables\" >Next</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button last\">\r\n                                        <a (click)=\"setPage(pager.totalPages)\" aria-controls=\"datatables\" >Last</a>\r\n\r\n                                    </li>\r\n\r\n                                </ul>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                            </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n  </div>\r\n\r\n\r\n\r\n        <!--<div class=\"row\">\r\n            <div class=\"col-md-12\" *ngIf=\"Questions!=null\">\r\n                            <div class=\"card\">\r\n                               <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n                     <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                                        <i class=\"material-icons\">file_download</i>\r\n                                    </button>\r\n                 \r\n                      \r\n                        </div>\r\n                                <div class=\"form-inline pull-xs-left m-r-1\">\r\n              \r\n</div>\r\n                                  <div class=\"card-content table-responsive\">\r\n                        <div class=\"pvtTable\">\r\n           <div class=\"col-xs-12\">\r\n               <div class=\"row\">\r\n                     <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9\">\r\n              <div class=\"form-group form-black label-floating\">\r\n                     <label class=\"control-label\">Search by Question</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQueryQ\"/>\r\n           </div>\r\n              </div>\r\n                <div class=\"col-xs-3\">\r\n                 <div class=\"form-group form-black label-floating\">\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select>\r\n                     </div>\r\n            </div>\r\n                   </div>\r\n                              \r\n\r\n                              \r\n                        \r\n       \r\n                        \r\n         \r\n<div *ngIf=\"filterQueryQ!=''\">\r\n\r\n\r\n            <table class=\"table table-shopping\" [mfData]=\"Questions | dataFilter : filterQueryQ\" #mf=\"mfDataTable\"\r\n                   [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n              <thead class=\"text-warning\">                    \r\n                       \r\n              \r\n                <tr>\r\n                   <th>\r\n                       Sr.No\r\n                   </th>\r\n                    <th>\r\n                        <mfDefaultSorter by=\"question\">Question</mfDefaultSorter>\r\n                    </th>\r\n                    <th >\r\n                        <mfDefaultSorter by=\"correctanswer\">Answer</mfDefaultSorter>\r\n                    </th>\r\n                   \r\n                </tr>\r\n                \r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data;let i=index\">\r\n                  \r\n                    <td>\r\n                        {{(i+1)}}\r\n                       \r\n                    </td>\r\n                    <td>{{item.question}}</td>\r\n                    <td class=\"text-success\">{{item.correctanswer}}</td>\r\n                  \r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator ></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n    </div>\r\n        </div>\r\n    </div>\r\n                                </div>\r\n                </div>\r\n            \r\n\r\n                                                     </div>\r\n                                </div>-->\r\n                                <!-- end content-->\r\n                            </div>\r\n                            <!--  end card  -->\r\n                        </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/tables/datatable.net/datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatablenetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatatablenetComponent = (function () {
    function DatatablenetComponent(http, services, router) {
        this.http = http;
        this.services = services;
        this.router = router;
        this.filterQueryQ = '';
        this.queryString = '';
        this.rowsOnPage = 10;
        this.sortBy = "question";
        this.sortOrder = "asc";
        this.allItems = [];
        this.searchableList = [];
        this.pager = {};
        this.sortByWordLength = function (a) {
            return a.question.length;
        };
        this.title = "Angular 2 simple search";
        // this.services.getallquestions().subscribe(data => this.allItems = data);
        this.searchableList = ['question', 'correctanswer'];
    }
    DatatablenetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
        this.services.getallquestions().subscribe(function (data) { return _this.Questions = data; });
    };
    // public data = this.Questions;
    DatatablenetComponent.prototype.subject = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.sid = sid;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == _this.sid; });
        });
    };
    DatatablenetComponent.prototype.chapter = function (event) {
        var _this = this;
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        //alert(c);
        //this.id = 20;
        this.cid = c;
        this.services.getallquestions().subscribe(function (data) {
            _this.itemdata = data, _this.Questions = _this.itemdata.filter(function (x) { return x.chapterid == _this.cid; });
        });
        this.correctanswer = this.Questions;
        this.chaptername = this.cdata1.filter(function (x) { return x.ChapterID == _this.cid; });
        return false;
    };
    DatatablenetComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // a= this.allItems[Math.floor(Math.random() * this.allItems.length)];
        // get pager object from service
        this.pager = this.getPager(this.Questions.length, page);
        // get current page of items
        this.pagedItems = this.Questions.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    DatatablenetComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_4_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    DatatablenetComponent.prototype.toInt = function (num) {
        return +num;
    };
    return DatatablenetComponent;
}());
DatatablenetComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tablenet',
        template: __webpack_require__("../../../../../src/app/dashboard/tables/datatable.net/datatable.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DatatablenetComponent);

var _a, _b, _c;
//# sourceMappingURL=datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/test/chaptertest.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">                                           \r\n                                             \r\n\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"cdata!=null\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Chapter\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Chapter</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"chapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"chaptername!= null\">\r\n                                                   <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Questions\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Questions</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"10\">\r\n                                                                       10\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"25\">\r\n                                                                     25\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"50\">\r\n                                                                      50\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"100\">\r\n                                                                     100\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                           \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"qno!= null\" >\r\n                                                    <button (click)=\"start($event)\" class=\"btn btn-primary btn-round\">Start</button>\r\n                                                </div>\r\n   \r\n       \r\n    \r\n                                              \r\n </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" data-background-color=\"orange\" *ngIf=\"table=='show'\">\r\n\r\n                <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n                <div *ngIf=\"timer=='show'\" style=\"float:right;margin-top:10px;\">\r\n                  <i class=\"material-icons\">alarm</i>\r\n                  <span>{{time.getHours()}}</span>:<span>{{time.getMinutes()}}</span>:<span>{{time.getSeconds()}}</span>\r\n                </div>\r\n                <div *ngIf=\"tfres=='show'\" style=\"float:right;margin-top: 10px;\">\r\n                  True:{{t}} False:{{f}}\r\n                  <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                    <i class=\"material-icons\">file_download</i>\r\n                  </button>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"form-inline pull-xs-left m-r-1\">\r\n\r\n                <div *ngIf=\"showhide=='show'\">\r\n\r\n\r\n\r\n                  <div class=\"col-lg-8\">\r\n                    <br />\r\n                    <br />\r\n                    {{i+1}}:{{Test[i].question}}\r\n                    <!--  Ans:{{Test[i].correctanswer}}--><br />\r\n                    <br />\r\n\r\n                    <form [formGroup]=\"radioTest\">\r\n                      <div class=\"radio\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                          A.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans1\" (change)=\"selected(Test[i].ans1)\" formControlName=\"Answer\" [checked]=\"Test[i].ans1 == Answer\"> :{{Test[i].ans1}}<br /></label>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n\r\n                          B.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans2\" (change)=\"selected(Test[i].ans2)\" formControlName=\"Answer\" [checked]=\"Test[i].ans2 == Answer\"> :{{Test[i].ans2}}<br /></label>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                          C.<label>\r\n                            <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans3\" (change)=\"selected(Test[i].ans3)\" formControlName=\"Answer\" [checked]=\"Test[i].ans3 == Answer\"> :{{Test[i].ans3}} <br />\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                          D.<label>\r\n                            <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans4\" (change)=\"selected(Test[i].ans4)\" formControlName=\"Answer\" [checked]=\"Test[i].ans4 == Answer\"> :{{Test[i].ans4}}<br />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Answer\" (change)=\"selected('જવાબ આપેલ નથી')\" formControlName=\"Answer\"> :જવાબ નથી આપવો-->\r\n\r\n\r\n                      <div class=\"col-lg-12\">\r\n                        <button (click)=\"Prevoius($event)\" [disabled]=\"Test[i]==0\" class=\"btn btn-primary btn-sm\">Previous</button>\r\n                        <button type=\"button\" [disabled]=\"radioTest.controls['Answer'].invalid\" (click)=\"Next($event)\" class=\"btn btn-primary btn-sm\">Save Next</button>\r\n                        <button type=\"button\" (click)=\"Skip($event)\" class=\"btn btn-primary btn-sm\">Skip Next</button>\r\n                        <button type=\"button\" (click)=\"Complate($event)\" class=\"btn btn-primary btn-sm\">Save Complate</button>\r\n                      </div>\r\n\r\n                    </form>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-4\">\r\n                    <div *ngFor=\"let s of Test;let i=index\" style=\"display:inline-block;\">\r\n                      <div *ngIf=\"s.ans=='skip'; else others\">\r\n                        <button class=\"btn btn-danger btn-xs\" (click)=\"Page(i)\">{{i+1}}</button>\r\n                      </div>\r\n                      <ng-template #others>\r\n                        <button class=\"btn btn-success btn-xs\" (click)=\"Page(i)\">{{i+1}}</button>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\" *ngIf=\"resdata=='show'\">\r\n\r\n\r\n                  <div class=\"card-content\">\r\n                    <div class=\"col-md-12\" *ngIf=\"pagedItems!=null\">\r\n\r\n                      <table class=\"table\">\r\n                        <thead class=\"text-warning\">\r\n                          <tr>\r\n                            <td>sr.No</td>\r\n                            <td>Question</td>\r\n                            <td>Your Answer</td>\r\n                            <td>Correct Answer</td>\r\n                            <td>Result</td>\r\n                          </tr>\r\n                        </thead>\r\n\r\n                        <tbody *ngFor=\"let r of pagedItems;let i=index\">\r\n                          <tr>\r\n                            <td>  {{ ((pager.currentPage - 1) * pager.pageSize +1)+(i) }}</td>\r\n                            <td>   {{r.question}}</td>\r\n                            <td> {{r.ans}}</td>\r\n                            <td class=\"text-success\">  {{r.correctanswer}}</td>\r\n                            <td>\r\n\r\n                              <div *ngIf=\"r.res==true\">\r\n                                <i class=\"material-icons\" style=\"color:green;\">done</i>\r\n                              </div>\r\n                              <div *ngIf=\"r.res==false\">\r\n                                <i class=\"material-icons\" style=\"color:red;\">close</i>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                          <div class=\"dataTables_info\" id=\"datatables_info\" role=\"status\" aria-live=\"polite\">\r\n                            Showing {{ (pager.currentPage - 1) * pager.pageSize +1 }} to {{ (pager.currentPage - 1) * pager.pageSize + pager.pageSize }} of {{pager.totalItems}} entries\r\n                          </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col-sm-8\">\r\n                          <div class=\"dataTables_paginate paging_full_numbers\">\r\n                            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                              <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button first disabled\">\r\n                                <a (click)=\"setPage(1)\" aria-controls=\"datatables\">First</a>\r\n\r\n                              </li>\r\n                              <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button previous disabled\">\r\n                                <a (click)=\"setPage(pager.currentPage - 1)\" aria-controls=\"datatables\">Previous</a>\r\n\r\n                              </li>\r\n                              <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"paginate_button active\">\r\n                                <a (click)=\"setPage(page)\" aria-controls=\"datatables\">{{page}}</a>\r\n\r\n                              </li>\r\n\r\n                              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button next\">\r\n                                <a (click)=\"setPage(pager.currentPage + 1)\" aria-controls=\"datatables\">Next</a>\r\n\r\n                              </li>\r\n                              <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button last\">\r\n                                <a (click)=\"setPage(pager.totalPages)\" aria-controls=\"datatables\">Last</a>\r\n\r\n                              </li>\r\n\r\n                            </ul>\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    \r\n                  </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\" *ngIf=\"Result!=null\">\r\n\r\n            <div class=\"card\" id=\"test\" [class.hidden]=\"true\">\r\n              <div class=\"card-header\" data-background-color=\"orange\" style=\"background: linear-gradient(60deg, #ffa726, #fb8c00);box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\">\r\n\r\n                <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">{{c.ChapterName}}</h4>\r\n                \r\n\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"card-content table-responsive\">\r\n\r\n\r\n\r\n                <table class=\"table table-shopping\">\r\n                  <thead class=\"text-warning\" style=\"text-align: left;\">\r\n                    <tr>\r\n                      <th>Sr.No</th>\r\n\r\n                      <th>Question</th>\r\n\r\n                      <th>Answer</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let s of Result; let i = index\">\r\n                      <td>\r\n                        {{ (i+1) }}\r\n                      </td>\r\n                      <td>{{s.question}}</td>\r\n                      <span *ngIf=\"s.image!=null\" class=\"que\"><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                      <td class=\"text-success\">{{s.correctanswer}}</td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n\r\n\r\n                  <tfoot>\r\n                    <tr>\r\n                      <td colspan=\"4\"></td>\r\n                    </tr>\r\n                  </tfoot>\r\n\r\n\r\n                </table>\r\n\r\n\r\n\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div> \r\n                      \r\n    </div>\r\n      </div>\r\n\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/test/chaptertest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chaptertestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Quiz__ = __webpack_require__("../../../../../src/app/models/Quiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { default as swal } from 'sweetalert2';
var chaptertestComponent = (function () {
    function chaptertestComponent(http, AmCharts, services, fb) {
        this.http = http;
        this.AmCharts = AmCharts;
        this.services = services;
        this.t = 0;
        this.f = 0;
        this.na = 0;
        this.total = 0;
        this.ans = '';
        this.Answer = null;
        // pager object
        this.pager = {};
        this.started = false;
        this.radioTest = fb.group({
            Answer: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
        if (this.Quiz == null) {
            this.Quiz = new Array();
        }
        this._timerTick();
    }
    chaptertestComponent.prototype.download = function () {
        var popupWinindow;
        var innerContents = document.getElementById('test').innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link href="assets/css/bootstrap.min.css" media="screen" rel="stylesheet" /><link rel="stylesheet" type="text/css"  href="assets/css/material-dashboard.css" /><link rel="stylesheet" type="text/css" href="assets/css/demo.css" /><link href="assets/css/Icons.css" rel="stylesheet" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    chaptertestComponent.prototype._timerTick = function () {
        var _this = this;
        if (this.started) {
            this.time.setSeconds(this.time.getSeconds(), -1);
            if (this.time.getHours() === 0 && this.time.getSeconds() === 0 && this.time.getMinutes() === 0) {
                this.Complate();
                alert('Time out,Test Complated.');
            }
        }
        setTimeout(function () { return _this._timerTick(); }, 1000);
    };
    chaptertestComponent.prototype.Time = function () {
        this.time = new Date(2000, 1, 1, this.h, this.m, 0);
    };
    chaptertestComponent.prototype.Next = function () {
        if (this.Test[this.i].correctanswer == this.ans) {
            this.Test[this.i].res = true;
            this.t += 1;
        }
        else {
            this.Test[this.i].res = false;
        }
        if (this.Test[this.i].ans != null) {
            this.Test[this.i].ans = this.ans;
            this.Answer = this.Test[this.i].ans;
            this.ans = '';
        }
        else {
            this.Test[this.i].ans = this.ans;
            this.Answer = '';
        }
        this.total = (this.t + this.f);
        this.i += 1;
        return false;
    };
    chaptertestComponent.prototype.Prevoius = function (anything) {
        if (this.i > 0) {
            this.i -= 1;
        }
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        return false;
    };
    chaptertestComponent.prototype.Skip = function () {
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        this.i += 1;
        return false;
    };
    chaptertestComponent.prototype.Page = function (anything) {
        this.i = anything;
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        return false;
    };
    chaptertestComponent.prototype.subject = function (event) {
        var _this = this;
        this.showhide = 'hide';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.table = 'hide';
        this.Quiz = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.sid = sid;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == _this.sid; });
        });
    };
    chaptertestComponent.prototype.chapter = function (event) {
        var _this = this;
        this.showhide = 'hide';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.table = 'hide';
        this.Quiz = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.cid = c;
        this.services.getallquestions().subscribe(function (data) { _this.itemdata = data, _this.Questions = _this.itemdata.filter(function (x) { return x.chapterid == _this.cid; }); });
        this.chaptername = this.cdata1.filter(function (x) { return x.ChapterID == _this.cid; });
        // this.services.getchapname(this.id).subscribe(data => this.chaptername = data);
        // this.services.getquiz(this.id).subscribe(data => this.Questions = data);
    };
    chaptertestComponent.prototype.selected = function (val) {
        this.ans = val;
    };
    chaptertestComponent.prototype.Questionno = function (event) {
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.table = 'hide';
        //  this.Temp = this.Questions[Math.floor(Math.random() * this.Questions.length)];
        this.Quiz = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.qno = c;
        if (this.qno == 100) {
            this.h = 1;
            this.m = 0;
        }
        else if (this.qno == 50) {
            this.h = 0;
            this.m = 30;
        }
        else if (this.qno == 25) {
            this.h = 0;
            this.qno = 25;
        }
        else {
            this.h = 0;
            this.m = 6;
        }
    };
    chaptertestComponent.prototype.start = function () {
        var _this = this;
        this.Time();
        this.timer = 'show';
        this.tfres = 'hide';
        this.table = 'show';
        this.resdata = 'hide';
        this.started = true;
        this.Test = [];
        this.Result = [];
        this.rslt = null;
        this.Quiz = new Array();
        this.ans = 'skip';
        this.res = false;
        this.i = 0;
        this.t = 0;
        this.f = 0;
        this.shuffleArray(this.Questions);
        this.Questions.forEach(function (k) {
            _this.Quiz.push(new __WEBPACK_IMPORTED_MODULE_2__models_Quiz__["a" /* Quiz */](k.chapterid, k.questionid, k.question, k.ans1, k.ans2, k.ans3, k.ans4, k.correctanswer, k.image, _this.ans, _this.res));
        });
        this.Test = this.Quiz.slice(0, this.qno);
        this.showhide = 'show';
        this.rslt = null;
    };
    chaptertestComponent.prototype.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    chaptertestComponent.prototype.Complate = function () {
        this.showhide = 'hide';
        this.resdata = 'show';
        this.timer = 'hide';
        this.cht = 'show';
        this.tfres = 'show';
        this.Result = this.Test;
        this.f = (this.Result.length) - this.t;
        this.setPage(1);
        this.chart = this.AmCharts.makeChart("dountchartdiv", {
            "type": "pie",
            "theme": "light",
            "dataProvider": [{
                    "title": "False",
                    "value": this.f,
                    "colorField": "#f44336;"
                }, {
                    "title": "True",
                    "value": this.t,
                    "cocolorFieldlor": "#4caf50"
                }],
            "titleField": "title",
            "valueField": "value",
            "colors": ["#f44336", "#4caf50"],
            "colorField": "#4caf50",
            "labelRadius": 5,
            "radius": "42%",
            "innerRadius": "60%",
            "labelText": "[[title]]",
            "export": {
                "enabled": true
            }
        });
        return false;
    };
    chaptertestComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return false;
        }
        // get pager object from service
        this.pager = this.getPager(this.Result.length, page);
        // get current page of items
        this.pagedItems = this.Result.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    chaptertestComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_6_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    chaptertestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
    };
    chaptertestComponent.prototype.ngAfterViewInit = function () { };
    return chaptertestComponent;
}());
chaptertestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/dashboard/test/chaptertest.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
], chaptertestComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chaptertest.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/test/exam.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">                                           \r\n                                             \r\n\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Exam\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Exam</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Exam;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.Eid}}\">\r\n                                                                       {{s.Ename}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        \r\n        \r\n        \r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"no=='show'\">\r\n                                                    <button (click)=\"start($event)\" class=\"btn btn-primary btn-round\">Start</button>\r\n                                                </div>\r\n   \r\n       \r\n    \r\n                                              \r\n </div>\r\n        <div class=\"row\" >\r\n            <div class=\"col-md-12\">                \r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\" *ngIf=\"Test!=null\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\" >Your seleted Chapters Test</h4>\r\n                        <div *ngIf=\"timer=='show'\" style=\"float:right;\">\r\n                               <i class=\"material-icons\">alarm</i><span>{{ time.getHours() }}</span>:\r\n      <span>{{ time.getMinutes() }}</span>:\r\n      <span>{{ time.getSeconds() }}</span>\r\n                        </div>\r\n                      <div *ngIf=\"tfres=='show'\" style=\"float:right;margin-top: 10px;\">\r\n                          True:{{t}} False:{{f}}\r\n                      </div> \r\n                    </div>\r\n                    \r\n                    <div class=\"form-inline pull-xs-left m-r-1\">\r\n                  <div *ngIf=\"clisttbl=='show'\">\r\n                      <table class=\"table\">\r\n                                                         <thead class=\"text-warning\">\r\n                                                             <tr>\r\n                                                                 <td>sr.No</td>\r\n                                                                 \r\n                                                                 <td>Name</td>\r\n                                                                 <td>Action</td>\r\n                                                             </tr>\r\n                                                         </thead>\r\n                                                           \r\n                                                         <tbody *ngFor=\"let r of  chapters;let i=index\">\r\n                                                             <tr>\r\n                                                                 <td>{{i+1}}</td>\r\n                                                               \r\n                                                                 <td>{{r.ChapterName}}</td>                                                                                                                          \r\n                                                                 <td><button  (click)=\"remove(i)\">remove</button></td>                                                             \r\n                                                             </tr>\r\n                                                         </tbody>\r\n                                                     </table>\r\n                  </div>                    \r\n       <div *ngIf=\"showhide=='show'\">\r\n\r\n     \r\n         \r\n                <div class=\"col-lg-8\">\r\n                    <br />\r\n                    <br />\r\n                  {{i+1}}:{{Test[i].question}}\r\n                 <!--  Ans:{{Test[i].correctanswer}}--><br />\r\n                    <br />\r\n                  \r\n        <form [formGroup]=\"radioTest\">\r\n          <div class=\"radio\">\r\n       <div class=\"col-lg-12\">\r\n       \r\n             A.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans1\" (change)=\"selected(Test[i].ans1)\"  formControlName=\"Answer\" [checked] =\"Test[i].ans1 == Answer\"> :{{Test[i].ans1}}<br /></label>\r\n         \r\n           </div>\r\n       <div class=\"col-lg-12\">\r\n                                                  \r\n          B.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans2\" (change)=\"selected(Test[i].ans2)\"  formControlName=\"Answer\" [checked] =\"Test[i].ans2 == Answer\"> :{{Test[i].ans2}}<br /></label>\r\n               </div>\r\n       <div class=\"col-lg-12\">  \r\n           C.<label>\r\n                  <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans3\" (change)=\"selected(Test[i].ans3)\" formControlName=\"Answer\" [checked] =\"Test[i].ans3 == Answer\"> :{{Test[i].ans3}} <br />\r\n           </label>\r\n                   </div>\r\n       <div class=\"col-lg-12\">\r\n            D.<label>\r\n                 <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans4\" (change)=\"selected(Test[i].ans4)\" formControlName=\"Answer\" [checked] =\"Test[i].ans4 == Answer\"> :{{Test[i].ans4}}<br />\r\n            </label>\r\n             </div>\r\n              </div>\r\n                  <!-- <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Answer\" (change)=\"selected('જવાબ આપેલ નથી')\" formControlName=\"Answer\"> :જવાબ નથી આપવો-->\r\n   \r\n     \r\n            <div class=\"col-lg-12\">\r\n                 <button (click)=\"Prevoius($event)\" [disabled]=\"Test[i]==0\" class=\"btn btn-primary btn-sm\">Previous</button>\r\n <button type=\"button\" [disabled]=\"radioTest.controls['Answer'].invalid\" (click)=\"Next($event)\" class=\"btn btn-primary btn-sm\">Save Next</button> \r\n                                                      <button type=\"button\"  (click)=\"Skip($event)\" class=\"btn btn-primary btn-sm\">Skip Next</button> \r\n                 <button type=\"button\"  (click)=\"Complate($event)\" class=\"btn btn-primary btn-sm\">Save Complate</button> \r\n            </div>\r\n        \r\n    </form>\r\n    \r\n                </div>  \r\n\r\n                <div class=\"col-lg-4\">\r\n           <div *ngFor=\"let s of Test;let i=index\" style=\"display:inline-block;\">\r\n  <div *ngIf=\"s.ans=='skip'; else others\">\r\n                                 <button class=\"btn btn-danger btn-xs\" (click)=\"Page(i)\">{{i+1}}</button> \r\n                         </div>\r\n                         <ng-template #others>\r\n                                 <button class=\"btn btn-success btn-xs\" (click)=\"Page(i)\">{{i+1}}</button> \r\n                         </ng-template>\r\n       </div>\r\n   </div>             \r\n                  </div>  \r\n                                    \r\n        \r\n      \r\n            <div class=\"col-md-12\" *ngIf=\"resdata=='show'\">\r\n                            <div class=\"card\">\r\n                                \r\n                                <div class=\"card-content\">\r\n                                    <ul class=\"nav nav-pills nav-pills-warning\">\r\n                                        <li class=\"active\">\r\n                                            <a href=\"#\" data-toggle=\"tab\" aria-expanded=\"false\">Result</a>\r\n                                        </li>\r\n                                       \r\n                                        \r\n                                    </ul>\r\n                                   \r\n                                            <div class=\"col-md-12\" >                                              \r\n           \r\n        <table class=\"table\">\r\n                                                         <thead class=\"text-warning\">\r\n                                                             <tr>\r\n                                                                 <td>sr.No</td>\r\n                                                                 <td>Question</td>\r\n                                                                 <td>Your Answer</td>\r\n                                                                 <td>Correct Answer</td>\r\n                                                                 <td>Result</td>\r\n                                                             </tr>\r\n                                                         </thead>\r\n                                                           \r\n                                                         <tbody *ngFor=\"let r of pagedItems;let i=index\">\r\n                                                             <tr >\r\n                                                                <td>  {{ ((pager.currentPage - 1) * pager.pageSize +1)+(i) }}</td>\r\n                                                                 <td>   {{r.question}}</td>\r\n                                                                 <td> {{r.ans}}</td>\r\n                                                                 <td class=\"text-success\">  {{r.correctanswer}}</td>\r\n                                                                 <td>  \r\n                                                                     \r\n                                                                     <div *ngIf=\"r.res==true\" ><i class=\"material-icons\" style=\"color:green;\">done</i>\r\n                                                     </div>\r\n                                                     <div *ngIf=\"r.res==false\" > <i class=\"material-icons\" style=\"color:red;\">close</i>\r\n                                                     </div></td>\r\n                                                             </tr>\r\n                                                         </tbody>\r\n                                                     </table>                                              \r\n        <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                                        <div class=\"dataTables_info\" id=\"datatables_info\" role=\"status\" aria-live=\"polite\">\r\n                                            Showing {{ (pager.currentPage - 1) * pager.pageSize +1 }} to {{ (pager.currentPage - 1) * pager.pageSize + pager.pageSize }} of {{pager.totalItems}} entries</div>\r\n\r\n                                    </div>\r\n                        \r\n\r\n                        <div class=\"col-sm-8\">\r\n                            <div  class=\"dataTables_paginate paging_full_numbers\">\r\n                                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button first disabled\">\r\n                                        <a (click)=\"setPage(1)\" aria-controls=\"datatables\" >First</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button previous disabled\">\r\n                                        <a (click)=\"setPage(pager.currentPage - 1)\" aria-controls=\"datatables\" >Previous</a>\r\n\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"paginate_button active\">\r\n                                        <a (click)=\"setPage(page)\" aria-controls=\"datatables\" >{{page}}</a>\r\n\r\n                                    </li>\r\n                                                           \r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button next\">\r\n                                        <a (click)=\"setPage(pager.currentPage + 1)\" aria-controls=\"datatables\" >Next</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button last\">\r\n                                        <a (click)=\"setPage(pager.totalPages)\" aria-controls=\"datatables\" >Last</a>\r\n\r\n                                    </li>\r\n\r\n                                </ul>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                            </div>\r\n     </div>\r\n                                       \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n      \r\n                         \r\n            \r\n  </div>                                                  \r\n                                                \r\n                                    \r\n                                                    \r\n                </div>\r\n           </div>\r\n             </div> \r\n                      \r\n    </div>\r\n      </div>\r\n\r\n    \r\n        "

/***/ }),

/***/ "../../../../../src/app/dashboard/test/exam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return examComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Quiz__ = __webpack_require__("../../../../../src/app/models/Quiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { default as swal } from 'sweetalert2';
var examComponent = (function () {
    function examComponent(_elementRef, http, AmCharts, services, fb) {
        this._elementRef = _elementRef;
        this.http = http;
        this.AmCharts = AmCharts;
        this.services = services;
        this.t = 0;
        this.f = 0;
        this.na = 0;
        this.total = 0;
        this.ans = '';
        this.Answer = null;
        this.clist = [];
        this.chapters = [];
        // pager object
        this.pager = {};
        this.chaptername = [];
        this.allQue1 = [];
        this.allQue3 = [];
        this.allQue4 = [];
        this.allQue2 = [];
        this.chid = [];
        this.subj = [];
        this.chpdata = [];
        this.pchapters = [];
        this.temp = [];
        this.temp1 = [];
        this.pdata = [];
        this.tq = [];
        this.temp2 = [];
        this.chapterid = [];
        this.started = false;
        this.chapData = [];
        this._timerTick();
        this.radioTest = fb.group({
            Answer: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
        if (this.Quiz == null) {
            this.Quiz = new Array();
        }
    }
    examComponent.prototype._timerTick = function () {
        var _this = this;
        if (this.started) {
            this.time.setSeconds(this.time.getSeconds(), -1);
            if (this.time.getHours() === 0 && this.time.getMinutes() === 0 && this.time.getSeconds() === 0) {
                alert('Time out. Test Complated');
                this.Complate();
            }
        }
        setTimeout(function () { return _this._timerTick(); }, 1000);
    };
    examComponent.prototype.Time = function () {
        this.time = new Date(2000, 1, 1, this.h, this.m, 0);
    };
    examComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getexam().subscribe(function (data) { return _this.Exam = data; });
    };
    examComponent.prototype.Next = function () {
        if (this.Test[this.i].correctanswer == this.ans) {
            this.Test[this.i].res = true;
            this.t += 1;
        }
        else {
            this.Test[this.i].res = false;
        }
        if (this.Test[this.i].ans != null) {
            this.Test[this.i].ans = this.ans;
            this.Answer = this.Test[this.i].ans;
            this.ans = '';
        }
        else {
            this.Test[this.i].ans = this.ans;
            this.Answer = '';
        }
        this.total = (this.t + this.f);
        this.i += 1;
        return false;
    };
    examComponent.prototype.Prevoius = function (anything) {
        if (this.i > 0) {
            this.i -= 1;
        }
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        return false;
    };
    examComponent.prototype.Skip = function () {
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        this.i += 1;
        return false;
    };
    examComponent.prototype.selected = function (val) {
        this.ans = val;
    };
    examComponent.prototype.Page = function (anything) {
        this.i = anything;
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        return false;
    };
    examComponent.prototype.subject = function (event) {
        var _this = this;
        this.showhide = 'hide';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.Quiz = [];
        this.chpdata = [];
        this.temp = [];
        this.temp2 = [];
        this.temp1 = [];
        this.allQue1 = [];
        this.allQue2 = [];
        this.allQue3 = [];
        this.allQue4 = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.id = sid;
        this.tq = this.Exam.filter(function (Y) { return Y.Eid == _this.id; });
        this.eno = this.tq[0].Tq;
        this.services.getsylabous().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.Eid == _this.id; }),
                _this.getchapters(_this.cdata);
        });
    };
    examComponent.prototype.getchapters = function (s) {
        var _this = this;
        var _loop_1 = function () {
            var sid = s[i].SubjectID;
            qnn = s[i].Qno;
            this_1.services.getallchapters().subscribe(function (data) {
                _this.pchapters = data, _this.chpdata = _this.pchapters.filter(function (x) { return x.SubjectID == sid; }),
                    _this.allchap(_this.chpdata, qnn);
            });
        };
        var this_1 = this, qnn;
        for (var i = 0; i < s.length; i++) {
            _loop_1();
        }
    };
    examComponent.prototype.allchap = function (chpdata, q) {
        this.no = 'show';
        this.chid = [];
        for (var i = 0; i < chpdata.length; i++) {
            this.chid.push(chpdata[i].ChapterID);
        }
        this.loadchid(this.chid, q);
    };
    examComponent.prototype.loadchid = function (ch, qno) {
        var _this = this;
        this.allQue1 = [];
        var a = ch.length;
        var t = Math.ceil((qno / a));
        this.allQue1 = [];
        var _loop_2 = function (l) {
            var id1 = ch[l];
            this_2.services.getallquestions().subscribe(function (data) {
                _this.itemdata = data, _this.allQue2 = _this.itemdata.filter(function (x) { return x.chapterid == id1; });
                _this.shuffleArray(_this.allQue2);
                _this.allQue3 = _this.allQue2.slice(0, t);
                for (var _i = 0, _a = _this.allQue3; _i < _a.length; _i++) {
                    var k = _a[_i];
                    _this.allQue1.push(k);
                }
                var que = _this.allQue1.slice(0, qno);
                alert(_this.allQue1.length);
            });
            //  alert(JSON.stringify(this.allQue1));
        };
        var this_2 = this;
        for (var l in ch) {
            _loop_2(l);
        }
    };
    examComponent.prototype.start = function () {
        var _this = this;
        this.Time();
        this.started = true;
        this.Test = [];
        this.Result = [];
        this.allQue3 = [];
        this.pagedItems = [];
        this.result = 'hide';
        this.clisttbl = 'hide';
        this.timer = 'show';
        this.tfres = 'hide';
        this.rslt = null;
        this.Quiz = new Array();
        this.ans = 'skip';
        this.res = false;
        this.i = 0;
        this.t = 0;
        this.f = 0;
        this.shuffleArray(this.allQue1);
        this.allQue1.forEach(function (k) {
            _this.Quiz.push(new __WEBPACK_IMPORTED_MODULE_2__models_Quiz__["a" /* Quiz */](k.chapterid, k.questionid, k.question, k.ans1, k.ans2, k.ans3, k.ans4, k.correctanswer, k.image, _this.ans, _this.res));
        });
        this.Test = this.Quiz.slice(0, 100);
        this.showhide = 'show';
        this.rslt = null;
    };
    examComponent.prototype.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    examComponent.prototype.Complate = function () {
        this.showhide = 'hide';
        this.resdata = 'show';
        this.timer = 'hide';
        this.cht = 'show';
        this.tfres = 'show';
        this.Result = this.Test;
        this.f = (this.Result.length) - this.t;
        this.setPage(1);
        return false;
    };
    examComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return false;
        }
        // get pager object from service
        this.pager = this.getPager(this.Result.length, page);
        // get current page of items
        this.pagedItems = this.Result.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    examComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_6_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    examComponent.prototype.ngAfterViewInit = function () {
    };
    return examComponent;
}());
examComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/dashboard/test/exam.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], examComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=exam.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/test/subject.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">                                           \r\n                                             \r\n\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        \r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"sub=='show'\">\r\n                                                   <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Questions\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Questions</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"10\">\r\n                                                                       10\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"25\">\r\n                                                                     25\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"50\">\r\n                                                                      50\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"100\">\r\n                                                                     100\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                           \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"qno!= null\" >\r\n                                                    <button (click)=\"start($event)\" class=\"btn btn-primary btn-round\">Start</button>\r\n                                                </div>\r\n   \r\n       \r\n    \r\n                                              \r\n </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n              <div class=\"card-header\" data-background-color=\"orange\" *ngIf=\"table=='show'\">\r\n\r\n                <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let s of subjectname\">{{s.SubjectName}}</h4>\r\n                <div *ngIf=\"timer=='show'\" style=\"float:right;\">\r\n                  <i class=\"material-icons\">alarm</i><span>{{ time.getHours() }}</span>:\r\n                  <span>{{ time.getMinutes() }}</span>:\r\n                  <span>{{ time.getSeconds() }}</span>\r\n                </div>\r\n                <div *ngIf=\"tfres=='show'\" style=\"float:right;margin-top: 10px;\">\r\n                  True:{{t}} False:{{f}}\r\n                  <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                    <i class=\"material-icons\">file_download</i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-inline pull-xs-left m-r-1\">\r\n\r\n                <div *ngIf=\"showhide=='show'\">\r\n\r\n\r\n\r\n                  <div class=\"col-lg-8\">\r\n                    <br />\r\n                    <br />\r\n                    {{i+1}}:{{Test[i].question}}\r\n                    <!--  Ans:{{Test[i].correctanswer}}--><br />\r\n                    <br />\r\n\r\n                    <form [formGroup]=\"radioTest\">\r\n                      <div class=\"radio\">\r\n                        <div class=\"col-lg-12\">\r\n\r\n                          A.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans1\" (change)=\"selected(Test[i].ans1)\" formControlName=\"Answer\" [checked]=\"Test[i].ans1 == Answer\"> :{{Test[i].ans1}}<br /></label>\r\n\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n\r\n                          B.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans2\" (change)=\"selected(Test[i].ans2)\" formControlName=\"Answer\" [checked]=\"Test[i].ans2 == Answer\"> :{{Test[i].ans2}}<br /></label>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                          C.<label>\r\n                            <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans3\" (change)=\"selected(Test[i].ans3)\" formControlName=\"Answer\" [checked]=\"Test[i].ans3 == Answer\"> :{{Test[i].ans3}} <br />\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-12\">\r\n                          D.<label>\r\n                            <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans4\" (change)=\"selected(Test[i].ans4)\" formControlName=\"Answer\" [checked]=\"Test[i].ans4 == Answer\"> :{{Test[i].ans4}}<br />\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Answer\" (change)=\"selected('જવાબ આપેલ નથી')\" formControlName=\"Answer\"> :જવાબ નથી આપવો-->\r\n\r\n\r\n                      <div class=\"col-lg-12\">\r\n                        <button (click)=\"Prevoius($event)\" [disabled]=\"Test[i]==0\" class=\"btn btn-primary btn-sm\">Previous</button>\r\n                        <button type=\"button\" [disabled]=\"radioTest.controls['Answer'].invalid\" (click)=\"Next($event)\" class=\"btn btn-primary btn-sm\">Save Next</button>\r\n                        <button type=\"button\" (click)=\"Skip($event)\" class=\"btn btn-primary btn-sm\">Skip Next</button>\r\n                        <button type=\"button\" (click)=\"Complate($event)\" class=\"btn btn-primary btn-sm\">Save Complate</button>\r\n                      </div>\r\n\r\n                    </form>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-4\">\r\n                    <div *ngFor=\"let s of Test;let i=index\" style=\"display:inline-block;\">\r\n                      <div *ngIf=\"s.ans=='skip'; else others\">\r\n                        <button class=\"btn btn-danger btn-xs\" (click)=\"Page(i)\">{{i+1}}</button>\r\n                      </div>\r\n                      <ng-template #others>\r\n                        <button class=\"btn btn-success btn-xs\" (click)=\"Page(i)\">{{i+1}}</button>\r\n                      </ng-template>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"col-md-12\" *ngIf=\"resdata=='show'\">\r\n                  \r\n                      \r\n                      \r\n                          <div class=\"col-md-12\" *ngIf=\"pagedItems!=null\">\r\n\r\n                            <table class=\"table\">\r\n                              <thead class=\"text-warning\">\r\n                                <tr>\r\n                                  <td>sr.No</td>\r\n                                  <td>Question</td>\r\n                                  <td>Your Answer</td>\r\n                                  <td>Correct Answer</td>\r\n                                  <td>Result</td>\r\n                                </tr>\r\n                              </thead>\r\n\r\n                              <tbody *ngFor=\"let r of pagedItems;let i=index\">\r\n                                <tr>\r\n                                  <td>  {{ ((pager.currentPage - 1) * pager.pageSize +1)+(i) }}</td>\r\n                                  <td>   {{r.question}}</td>\r\n                                  <td> {{r.ans}}</td>\r\n                                  <td class=\"text-success\">  {{r.correctanswer}}</td>\r\n                                  <td>\r\n\r\n                                    <div *ngIf=\"r.res==true\">\r\n                                      <i class=\"material-icons\" style=\"color:green;\">done</i>\r\n                                    </div>\r\n                                    <div *ngIf=\"r.res==false\">\r\n                                      <i class=\"material-icons\" style=\"color:red;\">close</i>\r\n                                    </div>\r\n                                  </td>\r\n                                </tr>\r\n                              </tbody>\r\n                            </table>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-4\">\r\n                                <div class=\"dataTables_info\" id=\"datatables_info\" role=\"status\" aria-live=\"polite\">\r\n                                  Showing {{ (pager.currentPage - 1) * pager.pageSize +1 }} to {{ (pager.currentPage - 1) * pager.pageSize + pager.pageSize }} of {{pager.totalItems}} entries\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n\r\n                              <div class=\"col-sm-8\">\r\n                                <div class=\"dataTables_paginate paging_full_numbers\">\r\n                                  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button first disabled\">\r\n                                      <a (click)=\"setPage(1)\" aria-controls=\"datatables\">First</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button previous disabled\">\r\n                                      <a (click)=\"setPage(pager.currentPage - 1)\" aria-controls=\"datatables\">Previous</a>\r\n\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"paginate_button active\">\r\n                                      <a (click)=\"setPage(page)\" aria-controls=\"datatables\">{{page}}</a>\r\n\r\n                                    </li>\r\n\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button next\">\r\n                                      <a (click)=\"setPage(pager.currentPage + 1)\" aria-controls=\"datatables\">Next</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button last\">\r\n                                      <a (click)=\"setPage(pager.totalPages)\" aria-controls=\"datatables\">Last</a>\r\n\r\n                                    </li>\r\n\r\n                                  </ul>\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                       \r\n\r\n                     \r\n                   \r\n                </div>\r\n\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-12\" *ngIf=\"Result!=null\">\r\n           \r\n            <div class=\"card\" id=\"download\" [class.hidden]=\"true\">\r\n              <div class=\"card-header\" data-background-color=\"orange\" style=\"background: linear-gradient(60deg, #ffa726, #fb8c00);box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\">\r\n\r\n                <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let s of subjectname\">{{s.SubjectName}}</h4>\r\n\r\n\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"card-content table-responsive\">\r\n\r\n\r\n\r\n                <table class=\"table table-shopping\">\r\n                  <thead class=\"text-warning\" style=\"text-align: left;\">\r\n                    <tr>\r\n                      <th>Sr.No</th>\r\n\r\n                      <th>Question</th>\r\n\r\n                      <th>Answer</th>\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let s of Result; let i = index\">\r\n                      <td>\r\n                        {{ (i+1) }}\r\n                      </td>\r\n                      <td>{{s.question}}</td>\r\n                      <span *ngIf=\"s.image!=null\" class=\"que\"><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                      <td class=\"text-success\">{{s.correctanswer}}</td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n\r\n\r\n                  <tfoot>\r\n                    <tr>\r\n                      <td colspan=\"4\"></td>\r\n                    </tr>\r\n                  </tfoot>\r\n\r\n\r\n                </table>\r\n\r\n\r\n\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> \r\n                      \r\n    </div>\r\n      </div>\r\n\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/test/subject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Quiz__ = __webpack_require__("../../../../../src/app/models/Quiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { jqxDataTableComponent } from 'jqwidgets-ts/angular_jqxdatatable';
//import { default as swal } from 'sweetalert2';
var SubjectComponent = (function () {
    function SubjectComponent(_elementRef, http, AmCharts, services, fb) {
        this._elementRef = _elementRef;
        this.http = http;
        this.AmCharts = AmCharts;
        this.services = services;
        this.t = 0;
        this.f = 0;
        this.na = 0;
        this.total = 0;
        this.ans = '';
        this.Answer = null;
        // pager object
        this.pager = {};
        this.started = false;
        this.allQue = [];
        this.allQue1 = [];
        this.allQue2 = [];
        this.allQue3 = [];
        this.allQue4 = [];
        this.chid = [];
        this._timerTick();
        this.radioTest = fb.group({
            Answer: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
        if (this.Quiz == null) {
            this.Quiz = new Array();
        }
    }
    SubjectComponent.prototype.download = function () {
        var popupWinindow;
        var innerContents = document.getElementById('download').innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link href="assets/css/bootstrap.min.css" media="screen" rel="stylesheet" /><link rel="stylesheet" type="text/css"  href="assets/css/material-dashboard.css" /><link rel="stylesheet" type="text/css" href="assets/css/demo.css" /><link href="assets/css/Icons.css" rel="stylesheet" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    SubjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
    };
    SubjectComponent.prototype._timerTick = function () {
        var _this = this;
        if (this.started) {
            this.time.setSeconds(this.time.getSeconds(), -1);
            if (this.time.getHours() === 0 && this.time.getMinutes() === 0 && this.time.getSeconds() === 0) {
                alert('Time out. Test Complated');
                this.Complate();
            }
        }
        setTimeout(function () { return _this._timerTick(); }, 1000);
    };
    SubjectComponent.prototype.Time = function () {
        this.time = new Date(2000, 1, 1, this.h, this.m, 0);
    };
    SubjectComponent.prototype.subject = function (event) {
        var _this = this;
        this.sub = 'show';
        this.showhide = 'hide';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.table = 'hide';
        this.allQue1 = [];
        this.Quiz = [];
        this.Test = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.sid = sid;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == _this.sid; });
        });
        this.subjectname = this.Subjects.filter(function (x) { return x.SubjectID == _this.sid; });
    };
    SubjectComponent.prototype.Questionno = function (event) {
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.table = 'hide';
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.qno = c;
        this.Quiz = [];
        this.chid = [];
        for (var i = 0; i < this.cdata.length; i++) {
            this.cid = this.cdata[i].ChapterID;
            this.chid.push(this.cid);
        }
        this.loadid(this.chid, this.qno);
        if (this.qno == 100) {
            this.h = 1;
            this.m = 0;
        }
        else if (this.qno == 50) {
            this.h = 0;
            this.m = 30;
        }
        else if (this.qno == 25) {
            this.h = 0;
            this.m = 15;
        }
        else {
            this.h = 0;
            this.m = 6;
        }
    };
    SubjectComponent.prototype.loadid = function (chid, qn) {
        var _this = this;
        var q = chid.length;
        var quesno = Math.ceil((qn / q));
        //alert(quesno);
        chid.forEach(function (k) {
            _this.allQue1 = [];
            _this.allQue2 = [];
            _this.allQue3 = [];
            _this.services.getallquestions().subscribe(function (data) {
                _this.itemdata = data, _this.allQue3 = _this.itemdata.filter(function (x) { return x.chapterid == k; });
                _this.shuffleArray(_this.allQue3);
                _this.allQue2 = _this.allQue3.slice(0, quesno);
                for (var j = 0; j < _this.allQue2.length; j++) {
                    _this.allQue1.push({ 'chapterid': _this.allQue2[j].chapterid, 'questionid': _this.allQue2[j].questionid, 'question': _this.allQue2[j].question, 'ans1': _this.allQue2[j].ans1, 'ans2': _this.allQue2[j].ans2, 'ans3': _this.allQue2[j].ans3, 'ans4': _this.allQue2[j].ans4, 'correctanswer': _this.allQue2[j].correctanswer, 'image': _this.allQue2[j].image, 'ans': _this.ans, 'res': _this.res });
                }
                // alert(this.allQue1.length);
                _this.allQue4 = _this.allQue1.slice(0, 2);
                _this.loadq(_this.allQue3);
            });
        });
    };
    SubjectComponent.prototype.loadq = function (q3) {
        //alert(JSON.stringify(q3.length));
    };
    SubjectComponent.prototype.Page = function (anything) {
        this.i = anything;
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        return false;
    };
    SubjectComponent.prototype.start = function () {
        var _this = this;
        this.Time();
        this.timer = 'show';
        this.tfres = 'hide';
        this.table = 'show';
        this.resdata = 'hide';
        this.started = true;
        this.Test = [];
        this.Result = [];
        this.rslt = null;
        this.Quiz = new Array();
        this.ans = 'skip';
        this.res = false;
        this.i = 0;
        this.t = 0;
        this.f = 0;
        this.shuffleArray(this.allQue1);
        this.allQue1.forEach(function (k) {
            _this.Quiz.push(new __WEBPACK_IMPORTED_MODULE_2__models_Quiz__["a" /* Quiz */](k.chapterid, k.questionid, k.question, k.ans1, k.ans2, k.ans3, k.ans4, k.correctanswer, k.image, _this.ans, _this.res));
        });
        this.Test = this.Quiz.slice(0, this.qno);
        this.showhide = 'show';
        this.rslt = null;
    };
    SubjectComponent.prototype.Next = function () {
        if (this.Test[this.i].correctanswer == this.ans) {
            this.Test[this.i].res = true;
            this.t += 1;
        }
        else {
            this.Test[this.i].res = false;
        }
        if (this.Test[this.i].ans != null) {
            this.Test[this.i].ans = this.ans;
            this.Answer = this.Test[this.i].ans;
            this.ans = '';
        }
        else {
            this.Test[this.i].ans = this.ans;
            this.Answer = '';
        }
        this.total = (this.t + this.f);
        this.i += 1;
        return false;
    };
    SubjectComponent.prototype.Prevoius = function (anything) {
        if (this.i > 0) {
            this.i -= 1;
        }
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        return false;
    };
    SubjectComponent.prototype.Skip = function () {
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        this.i += 1;
        return false;
    };
    SubjectComponent.prototype.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    SubjectComponent.prototype.selected = function (val) {
        this.ans = val;
    };
    SubjectComponent.prototype.Complate = function () {
        this.showhide = 'hide';
        this.resdata = 'show';
        this.timer = 'hide';
        this.cht = 'show';
        this.tfres = 'show';
        this.Result = this.Test;
        if (this.Test[this.i].correctanswer == this.ans) {
            this.Test[this.i].res = true;
            this.t += 1;
        }
        else {
            this.Test[this.i].res = false;
        }
        if (this.Test[this.i].ans != null) {
            this.Test[this.i].ans = this.ans;
            this.Answer = this.Test[this.i].ans;
            this.ans = '';
        }
        else {
            this.Test[this.i].ans = this.ans;
            this.Answer = '';
        }
        this.total = (this.t + this.f);
        this.i += 1;
        this.f = (this.Result.length) - this.t;
        this.setPage(1);
        return false;
    };
    SubjectComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return false;
        }
        // get pager object from service
        this.pager = this.getPager(this.Result.length, page);
        // get current page of items
        this.pagedItems = this.Result.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    SubjectComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_6_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    SubjectComponent.prototype.ngAfterViewInit = function () {
    };
    return SubjectComponent;
}());
SubjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/dashboard/test/subject.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], SubjectComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=subject.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/test/yourtest.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">                                           \r\n                                             \r\n\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose City\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Subject</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let s of Subjects;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"subject($event)\" id=\"{{s.SubjectID}}\">\r\n                                                                       {{s.SubjectName}}\r\n                                                                      \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>                     \r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"cdata!=null\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Chapter\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Chapter</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"chapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"add=='show'\">\r\n                                                    <div class=\"btn-group bootstrap-select show-tick\" >\r\n                                                        <button type=\"button\"  (click)=\"addchapter($event)\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\">Add Chapter</button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                <li *ngFor=\"let c of cdata;\">\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"addchapter($event)\" id=\"{{c.ChapterID}}\">\r\n                                                                       {{c.ChapterName}}\r\n                                                                       \r\n\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                     \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"btn=='show'\">\r\n                                                   <div class=\"btn-group bootstrap-select show-tick\">\r\n                                                        <button type=\"button\" class=\"dropdown-toggle bs-placeholder btn btn-primary btn-round\" data-toggle=\"dropdown\" role=\"button\" title=\"Choose Questions\">\r\n                                                            <span class=\"filter-option pull-left\">Choose Questions</span>&nbsp;<span class=\"bs-caret\"><span class=\"caret\"></span></span>\r\n\r\n                                                        </button>\r\n                                                        <div class=\"dropdown-menu open\" role=\"combobox\">\r\n                                                            <ul class=\"dropdown-menu inner\" role=\"listbox\" aria-expanded=\"false\">\r\n                                                               \r\n                                                                \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"25\">\r\n                                                                     25\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"50\">\r\n                                                                      50\r\n                                                                    </a>\r\n\r\n                                                                </li> \r\n                                                                <li>\r\n                                                                    <a class=\"\" data-tokens=\"null\" role=\"option\" aria-disabled=\"false\" aria-selected=\"false\" (click)=\"Questionno($event)\" id=\"100\">\r\n                                                                     100\r\n                                                                    </a>\r\n\r\n                                                                </li>                                                           \r\n                                                                \r\n                 \r\n\r\n                                                            </ul>\r\n\r\n                                                        </div>\r\n                                                       </div>\r\n                                                </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3\" *ngIf=\"no=='show'\">\r\n                                                    <button (click)=\"start($event)\" class=\"btn btn-primary btn-round\">Start</button>\r\n                                                </div>\r\n   \r\n       \r\n    \r\n                                              \r\n </div>\r\n        <div class=\"row\" >\r\n            <div class=\"col-md-12\">                \r\n                <div class=\"card\">\r\n                    <div class=\"card-header\" data-background-color=\"orange\" *ngIf=\"Test!=null\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\" >Your seleted Chapters Test</h4>\r\n                        <div *ngIf=\"timer=='show'\" style=\"float:right;\">\r\n                               <i class=\"material-icons\">alarm</i><span>{{ time.getHours() }}</span>:\r\n      <span>{{ time.getMinutes() }}</span>:\r\n      <span>{{ time.getSeconds() }}</span>\r\n                        </div>\r\n                        <div *ngIf=\"tfres=='show'\" style=\"float:right;margin-top: 10px;\">\r\n                          True:{{t}} False:{{f}}\r\n                          <button style=\"float:right;\" class=\"btn btn-danger btn-round btn-fab btn-fab-mini\" (click)=\"download()\">\r\n                            <i class=\"material-icons\">file_download</i>\r\n                          </button>\r\n                        </div> \r\n                    </div>\r\n                    \r\n                    <div class=\"form-inline pull-xs-left m-r-1\">\r\n                  <div *ngIf=\"clisttbl=='show'\">\r\n                      <table class=\"table\">\r\n                                                         <thead class=\"text-warning\">\r\n                                                             <tr>\r\n                                                                 <td>sr.No</td>\r\n                                                                 \r\n                                                                 <td>Name</td>\r\n                                                                 <td>Action</td>\r\n                                                             </tr>\r\n                                                         </thead>\r\n                                                           \r\n                                                         <tbody *ngFor=\"let r of  chapters;let i=index\">\r\n                                                             <tr>\r\n                                                                 <td>{{i+1}}</td>\r\n                                                               \r\n                                                                 <td>{{r.ChapterName}}</td>                                                                                                                          \r\n                                                                 <td><button  (click)=\"remove(i)\">remove</button></td>                                                             \r\n                                                             </tr>\r\n                                                         </tbody>\r\n                                                     </table>\r\n                  </div>                    \r\n       <div *ngIf=\"showhide=='show'\">\r\n\r\n     \r\n         \r\n                <div class=\"col-lg-8\">\r\n                    <br />\r\n                    <br />\r\n                  {{i+1}}:{{Test[i].question}}\r\n                 <!--  Ans:{{Test[i].correctanswer}}--><br />\r\n                    <br />\r\n                  \r\n        <form [formGroup]=\"radioTest\">\r\n          <div class=\"radio\">\r\n       <div class=\"col-lg-12\">\r\n       \r\n             A.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans1\" (change)=\"selected(Test[i].ans1)\"  formControlName=\"Answer\" [checked] =\"Test[i].ans1 == Answer\"> :{{Test[i].ans1}}<br /></label>\r\n         \r\n           </div>\r\n       <div class=\"col-lg-12\">\r\n                                                  \r\n          B.<label> <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans2\" (change)=\"selected(Test[i].ans2)\"  formControlName=\"Answer\" [checked] =\"Test[i].ans2 == Answer\"> :{{Test[i].ans2}}<br /></label>\r\n               </div>\r\n       <div class=\"col-lg-12\">  \r\n           C.<label>\r\n                  <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans3\" (change)=\"selected(Test[i].ans3)\" formControlName=\"Answer\" [checked] =\"Test[i].ans3 == Answer\"> :{{Test[i].ans3}} <br />\r\n           </label>\r\n                   </div>\r\n       <div class=\"col-lg-12\">\r\n            D.<label>\r\n                 <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Test[i].ans4\" (change)=\"selected(Test[i].ans4)\" formControlName=\"Answer\" [checked] =\"Test[i].ans4 == Answer\"> :{{Test[i].ans4}}<br />\r\n            </label>\r\n             </div>\r\n              </div>\r\n                  <!-- <input type=\"radio\" name=\"Answer\" [(ngModel)]=\"Answer\" [value]=\"Answer\" (change)=\"selected('જવાબ આપેલ નથી')\" formControlName=\"Answer\"> :જવાબ નથી આપવો-->\r\n   \r\n     \r\n            <div class=\"col-lg-12\">\r\n                 <button (click)=\"Prevoius($event)\" [disabled]=\"Test[i]==0\" class=\"btn btn-primary btn-sm\">Previous</button>\r\n <button type=\"button\" [disabled]=\"radioTest.controls['Answer'].invalid\" (click)=\"Next($event)\" class=\"btn btn-primary btn-sm\">Save Next</button> \r\n                                                      <button type=\"button\"  (click)=\"Skip($event)\" class=\"btn btn-primary btn-sm\">Skip Next</button> \r\n                 <button type=\"button\"  (click)=\"Complate($event)\" class=\"btn btn-primary btn-sm\">Save Complate</button> \r\n            </div>\r\n        \r\n    </form>\r\n    \r\n                </div>  \r\n\r\n                <div class=\"col-lg-4\">\r\n           <div *ngFor=\"let s of Test;let i=index\" style=\"display:inline-block;\">\r\n  <div *ngIf=\"s.ans=='skip'; else others\">\r\n                                 <button class=\"btn btn-danger btn-xs\" (click)=\"Page(i)\">{{i+1}}</button> \r\n                         </div>\r\n                         <ng-template #others>\r\n                                 <button class=\"btn btn-success btn-xs\" (click)=\"Page(i)\">{{i+1}}</button> \r\n                         </ng-template>\r\n       </div>\r\n   </div>             \r\n                  </div>  \r\n                                    \r\n        \r\n      \r\n            <div class=\"col-md-12\" *ngIf=\"resdata=='show'\">\r\n                            \r\n                                    \r\n                                            <div class=\"col-md-12\" >                                              \r\n           \r\n        <table class=\"table\">\r\n                                                         <thead class=\"text-warning\">\r\n                                                             <tr>\r\n                                                                 <td>sr.No</td>\r\n                                                                 <td>Question</td>\r\n                                                                 <td>Your Answer</td>\r\n                                                                 <td>Correct Answer</td>\r\n                                                                 <td>Result</td>\r\n                                                             </tr>\r\n                                                         </thead>\r\n                                                           \r\n                                                         <tbody *ngFor=\"let r of pagedItems;let i=index\">\r\n                                                             <tr >\r\n                                                                <td>  {{ ((pager.currentPage - 1) * pager.pageSize +1)+(i) }}</td>\r\n                                                                 <td>   {{r.question}}</td>\r\n                                                                 <td> {{r.ans}}</td>\r\n                                                                 <td class=\"text-success\">  {{r.correctanswer}}</td>\r\n                                                                 <td>  \r\n                                                                     \r\n                                                                     <div *ngIf=\"r.res==true\" ><i class=\"material-icons\" style=\"color:green;\">done</i>\r\n                                                     </div>\r\n                                                     <div *ngIf=\"r.res==false\" > <i class=\"material-icons\" style=\"color:red;\">close</i>\r\n                                                     </div></td>\r\n                                                             </tr>\r\n                                                         </tbody>\r\n                                                     </table>                                              \r\n        <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                                        <div class=\"dataTables_info\" id=\"datatables_info\" role=\"status\" aria-live=\"polite\">\r\n                                            Showing {{ (pager.currentPage - 1) * pager.pageSize +1 }} to {{ (pager.currentPage - 1) * pager.pageSize + pager.pageSize }} of {{pager.totalItems}} entries</div>\r\n\r\n                                    </div>\r\n                        \r\n\r\n                        <div class=\"col-sm-8\">\r\n                            <div  class=\"dataTables_paginate paging_full_numbers\">\r\n                                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button first disabled\">\r\n                                        <a (click)=\"setPage(1)\" aria-controls=\"datatables\" >First</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"paginate_button previous disabled\">\r\n                                        <a (click)=\"setPage(pager.currentPage - 1)\" aria-controls=\"datatables\" >Previous</a>\r\n\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"paginate_button active\">\r\n                                        <a (click)=\"setPage(page)\" aria-controls=\"datatables\" >{{page}}</a>\r\n\r\n                                    </li>\r\n                                                           \r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button next\">\r\n                                        <a (click)=\"setPage(pager.currentPage + 1)\" aria-controls=\"datatables\" >Next</a>\r\n\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"paginate_button last\">\r\n                                        <a (click)=\"setPage(pager.totalPages)\" aria-controls=\"datatables\" >Last</a>\r\n\r\n                                    </li>\r\n\r\n                                </ul>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                            </div>\r\n     </div>\r\n                                       \r\n                               \r\n                        </div>\r\n      \r\n            <div class=\"col-md-12\" *ngIf=\"Result!=null\">\r\n             \r\n              <div class=\"card\" id=\"download\" [class.hidden]=\"true\">\r\n                <div class=\"card-header\" data-background-color=\"orange\" style=\"background: linear-gradient(60deg, #ffa726, #fb8c00);box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);\">\r\n\r\n                  <h4 class=\"title\" style=\"display:inline-block;\" *ngFor=\"let c of chaptername\">Seleted chapters Test</h4>\r\n\r\n\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"card-content table-responsive\">\r\n\r\n\r\n\r\n                  <table class=\"table table-shopping\">\r\n                    <thead class=\"text-warning\" style=\"text-align: left;\">\r\n                      <tr>\r\n                        <th>Sr.No</th>\r\n\r\n                        <th>Question</th>\r\n\r\n                        <th>Answer</th>\r\n\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let s of Result; let i = index\">\r\n                        <td>\r\n                          {{ (i+1) }}\r\n                        </td>\r\n                        <td>{{s.question}}</td>\r\n                        <span *ngIf=\"s.image!=null\" class=\"que\"><img class=\"img-container\" src=\"http://localhost:4200/assets/Std/{{s.image}}\" height=\"100px\" width=\"100px\" /></span>\r\n                        <td class=\"text-success\">{{s.correctanswer}}</td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n\r\n\r\n                    <tfoot>\r\n                      <tr>\r\n                        <td colspan=\"4\"></td>\r\n                      </tr>\r\n                    </tfoot>\r\n\r\n\r\n                  </table>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n              </div>\r\n            </div>          \r\n            \r\n  </div>                                                  \r\n                                                \r\n                                    \r\n                                                    \r\n                </div>\r\n           </div>\r\n             </div> \r\n                      \r\n    </div>\r\n      </div>\r\n\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/test/yourtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return yourtestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Quiz__ = __webpack_require__("../../../../../src/app/models/Quiz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__ = __webpack_require__("../../../../@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { default as swal } from 'sweetalert2';
var yourtestComponent = (function () {
    function yourtestComponent(_elementRef, http, AmCharts, services, fb) {
        this._elementRef = _elementRef;
        this.http = http;
        this.AmCharts = AmCharts;
        this.services = services;
        this.t = 0;
        this.f = 0;
        this.na = 0;
        this.total = 0;
        this.ans = '';
        this.Answer = null;
        this.clist = [];
        this.chapters = [];
        // pager object
        this.pager = {};
        this.chaptername = [];
        this.allQue1 = [];
        this.allQue2 = [];
        this.chid = [];
        this.chapterid = [];
        this.started = false;
        this._timerTick();
        this.radioTest = fb.group({
            Answer: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]
        });
        if (this.Quiz == null) {
            this.Quiz = new Array();
        }
    }
    yourtestComponent.prototype.download = function () {
        var popupWinindow;
        var innerContents = document.getElementById('download').innerHTML;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link href="assets/css/bootstrap.min.css" media="screen" rel="stylesheet" /><link rel="stylesheet" type="text/css"  href="assets/css/material-dashboard.css" /><link rel="stylesheet" type="text/css" href="assets/css/demo.css" /><link href="assets/css/Icons.css" rel="stylesheet" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    };
    yourtestComponent.prototype._timerTick = function () {
        var _this = this;
        if (this.started) {
            this.time.setSeconds(this.time.getSeconds(), -1);
            if (this.time.getHours() === 0 && this.time.getMinutes() === 0 && this.time.getSeconds() === 0) {
                alert('Time out. Test Complated');
                this.Complate();
            }
        }
        setTimeout(function () { return _this._timerTick(); }, 1000);
    };
    yourtestComponent.prototype.Time = function () {
        this.time = new Date(2000, 1, 1, this.h, this.m, 0);
    };
    yourtestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getsubjects().subscribe(function (data) { return _this.Subjects = data; });
    };
    yourtestComponent.prototype.Next = function () {
        if (this.Test[this.i].correctanswer == this.ans) {
            this.Test[this.i].res = true;
            this.t += 1;
        }
        else {
            this.Test[this.i].res = false;
        }
        if (this.Test[this.i].ans != null) {
            this.Test[this.i].ans = this.ans;
            this.Answer = this.Test[this.i].ans;
            this.ans = '';
        }
        else {
            this.Test[this.i].ans = this.ans;
            this.Answer = '';
        }
        this.total = (this.t + this.f);
        this.i += 1;
        return false;
    };
    yourtestComponent.prototype.Prevoius = function (anything) {
        if (this.i > 0) {
            this.i -= 1;
        }
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        return false;
    };
    yourtestComponent.prototype.Skip = function () {
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        this.i += 1;
        return false;
    };
    yourtestComponent.prototype.selected = function (val) {
        this.ans = val;
    };
    yourtestComponent.prototype.Page = function (anything) {
        this.i = anything;
        if (this.Test[this.i].ans != null) {
            this.Answer = this.Test[this.i].ans;
        }
        else {
            this.Answer = '';
        }
        return false;
    };
    yourtestComponent.prototype.subject = function (event) {
        var _this = this;
        this.showhide = 'hide';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.Quiz = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var sid = value;
        this.id = sid;
        this.services.getallchapters().subscribe(function (data) {
            _this.cdata1 = data, _this.cdata = _this.cdata1.filter(function (x) { return x.SubjectID == _this.id; });
        });
    };
    yourtestComponent.prototype.chapter = function (event) {
        var _this = this;
        this.showhide = 'hide';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        this.Quiz = [];
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.cid = c;
        this.chaptername = this.cdata1.filter(function (x) { return x.ChapterID == _this.cid; });
        this.clist.push(this.cid);
        this.chapters.push({ 'ChapterID': this.chaptername[0].ChapterID, 'ChapterName': this.chaptername[0].ChapterName });
        //  this.chapterid.push({ 'ChapterID': this.chaptername[0].ChapterID });
        this.clisttbl = 'show';
        this.btn = 'show';
        this.result = 'hide';
        var x = this.cid;
        this.no = 'hide';
    };
    yourtestComponent.prototype.remove = function (event) {
        this.chapters.splice(event, 1);
        this.clist.splice(event, 1);
    };
    yourtestComponent.prototype.Questionno = function (event) {
        this.Quiz = [];
        this.no = 'show';
        this.tfres = 'hide';
        this.timer = 'hide';
        this.resdata = 'hide';
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var c = value;
        this.qno = c;
        if (this.qno == 100) {
            this.h = 1;
            this.m = 0;
        }
        else if (this.qno == 50) {
            this.h = 0;
            this.m = 30;
        }
        else {
            this.h = 0;
            this.m = 15;
        }
        this.chid = [];
        for (var i = 0; i < this.chapters.length; i++) {
            this.cid = this.chapters[i].ChapterID;
            this.chid.push(this.cid);
        }
        this.loadid(this.chid);
    };
    yourtestComponent.prototype.loadid = function (chid) {
        var _this = this;
        this.chid.forEach(function (k) {
            _this.services.getallquestions().subscribe(function (data) {
                _this.itemdata = data, _this.allQue2 = _this.itemdata.filter(function (x) { return x.chapterid == k; });
                for (var j = 0; j < _this.allQue2.length; j++) {
                    _this.allQue1.push({ 'chapterid': _this.allQue2[j].chapterid, 'questionid': _this.allQue2[j].questionid, 'question': _this.allQue2[j].question, 'ans1': _this.allQue2[j].ans1, 'ans2': _this.allQue2[j].ans2, 'ans3': _this.allQue2[j].ans3, 'ans4': _this.allQue2[j].ans4, 'correctanswer': _this.allQue2[j].correctanswer, 'image': _this.allQue2[j].image, 'ans': _this.ans, 'res': _this.res });
                }
            });
        });
    };
    yourtestComponent.prototype.start = function () {
        var _this = this;
        this.Time();
        this.started = true;
        this.Test = [];
        this.Result = [];
        this.pagedItems = [];
        this.result = 'hide';
        this.clisttbl = 'hide';
        this.timer = 'show';
        this.tfres = 'hide';
        this.rslt = null;
        this.Quiz = new Array();
        this.ans = 'skip';
        this.res = false;
        this.i = 0;
        this.t = 0;
        this.f = 0;
        this.shuffleArray(this.allQue1);
        this.allQue1.forEach(function (k) {
            _this.Quiz.push(new __WEBPACK_IMPORTED_MODULE_2__models_Quiz__["a" /* Quiz */](k.chapterid, k.questionid, k.question, k.ans1, k.ans2, k.ans3, k.ans4, k.correctanswer, k.image, _this.ans, _this.res));
        });
        this.Test = this.Quiz.slice(0, this.qno);
        this.showhide = 'show';
        this.rslt = null;
    };
    yourtestComponent.prototype.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    yourtestComponent.prototype.Complate = function () {
        this.showhide = 'hide';
        this.resdata = 'show';
        this.timer = 'hide';
        this.cht = 'show';
        this.tfres = 'show';
        this.Result = this.Test;
        this.f = (this.Result.length) - this.t;
        this.setPage(1);
        return false;
    };
    yourtestComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return false;
        }
        // get pager object from service
        this.pager = this.getPager(this.Result.length, page);
        // get current page of items
        this.pagedItems = this.Result.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    yourtestComponent.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage;
        var endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_6_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    yourtestComponent.prototype.ngAfterViewInit = function () {
    };
    return yourtestComponent;
}());
yourtestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/dashboard/test/yourtest.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__amcharts_amcharts3_angular__["b" /* AmChartsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
], yourtestComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=yourtest.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/widges/widges.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n                    <div class=\"col-sm-8 col-sm-offset-2\">\n                        <!--      Wizard container        -->\n                        <div class=\"wizard-container\">\n                            <div class=\"card wizard-card\" data-color=\"rose\" id=\"wizardProfile\">\n                                <form action=\"#\" method=\"\" novalidate=\"novalidate\">\n                                    <!--        You can switch \" data-color=\"purple\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\n                                    <div class=\"wizard-header\">\n                                        <h3 class=\"wizard-title\">\n                                            Build Your Profile\n                                        </h3>\n                                        <h5>This information will let us know more about you.</h5>\n                                    </div>\n                                    <div class=\"wizard-navigation\">\n                                        <ul class=\"nav nav-pills\">\n                                            <li style=\"width: 33.3333%;\" class=\"active\">\n                                                <a href=\"#about\" data-toggle=\"tab\" aria-expanded=\"true\">About</a>\n                                            </li>\n                                            <li style=\"width: 33.3333%;\">\n                                                <a href=\"#account\" data-toggle=\"tab\">Account</a>\n                                            </li>\n                                            <li style=\"width: 33.3333%;\">\n                                                <a href=\"#address\" data-toggle=\"tab\">Address</a>\n                                            </li>\n                                        </ul>\n                                    <div class=\"moving-tab\" style=\"width: 222.444px; transform: translate3d(-8px, 0px, 0px); transition: transform 0s ease 0s;\">About</div></div>\n                                    <div class=\"tab-content\">\n                                        <div class=\"tab-pane active\" id=\"about\">\n                                            <div class=\"row\">\n                                                <h4 class=\"info-text\"> Let's start with the basic information (with validation)</h4>\n                                                <div class=\"col-sm-4 col-sm-offset-1\">\n                                                    <div class=\"picture-container\">\n                                                        <div class=\"picture\">\n                                                            <img src=\"../../assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\">\n                                                            <input id=\"wizard-picture\" type=\"file\">\n                                                        </div>\n                                                        <h6>Choose Picture</h6>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-sm-6\">\n                                                    <div class=\"input-group\">\n                                                        <span class=\"input-group-addon\">\n                                                            <i class=\"material-icons\">face</i>\n                                                        </span>\n                                                        <div class=\"form-group label-floating is-empty has-error\">\n                                                            <label class=\"control-label\">First Name\n                                                                <small>(required)</small>\n                                                            </label>\n                                                            <input name=\"firstname\" class=\"form-control error\" aria-required=\"true\" type=\"text\">\n                                                        <span class=\"material-input\"></span></div>\n                                                    </div>\n                                                    <div class=\"input-group\">\n                                                        <span class=\"input-group-addon\">\n                                                            <i class=\"material-icons\">record_voice_over</i>\n                                                        </span>\n                                                        <div class=\"form-group label-floating is-empty has-error\">\n                                                            <label class=\"control-label\">Last Name\n                                                                <small>(required)</small>\n                                                            </label>\n                                                            <input name=\"lastname\" class=\"form-control error\" aria-required=\"true\" type=\"text\">\n                                                        <span class=\"material-input\"></span></div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"col-lg-10 col-lg-offset-1\">\n                                                    <div class=\"input-group\">\n                                                        <span class=\"input-group-addon\">\n                                                            <i class=\"material-icons\">email</i>\n                                                        </span>\n                                                        <div class=\"form-group label-floating is-empty has-error\">\n                                                            <label class=\"control-label\">Email\n                                                                <small>(required)</small>\n                                                            </label>\n                                                            <input name=\"email\" class=\"form-control error\" aria-required=\"true\" type=\"email\">\n                                                        <span class=\"material-input\"></span></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"tab-pane\" id=\"account\">\n                                            <h4 class=\"info-text\"> What are you doing? (checkboxes) </h4>\n                                            <div class=\"row\">\n                                                <div class=\"col-lg-10 col-lg-offset-1\">\n                                                    <div class=\"col-sm-4\">\n                                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                                            <input name=\"jobb\" value=\"Design\" type=\"checkbox\">\n                                                            <div class=\"icon\">\n                                                                <i class=\"fa fa-pencil\"></i>\n                                                            </div>\n                                                            <h6>Design</h6>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-sm-4\">\n                                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                                            <input name=\"jobb\" value=\"Code\" type=\"checkbox\">\n                                                            <div class=\"icon\">\n                                                                <i class=\"fa fa-terminal\"></i>\n                                                            </div>\n                                                            <h6>Code</h6>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-sm-4\">\n                                                        <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                                                            <input name=\"jobb\" value=\"Develop\" type=\"checkbox\">\n                                                            <div class=\"icon\">\n                                                                <i class=\"fa fa-laptop\"></i>\n                                                            </div>\n                                                            <h6>Develop</h6>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"tab-pane\" id=\"address\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-12\">\n                                                    <h4 class=\"info-text\"> Are you living in a nice area? </h4>\n                                                </div>\n                                                <div class=\"col-sm-7 col-sm-offset-1\">\n                                                    <div class=\"form-group label-floating is-empty\">\n                                                        <label class=\"control-label\">Street Name</label>\n                                                        <input class=\"form-control\" type=\"text\">\n                                                    <span class=\"material-input\"></span></div>\n                                                </div>\n                                                <div class=\"col-sm-3\">\n                                                    <div class=\"form-group label-floating is-empty\">\n                                                        <label class=\"control-label\">Street No.</label>\n                                                        <input class=\"form-control\" type=\"text\">\n                                                    <span class=\"material-input\"></span></div>\n                                                </div>\n                                                <div class=\"col-sm-5 col-sm-offset-1\">\n                                                    <div class=\"form-group label-floating is-empty\">\n                                                        <label class=\"control-label\">City</label>\n                                                        <input class=\"form-control\" type=\"text\">\n                                                    <span class=\"material-input\"></span></div>\n                                                </div>\n                                                <div class=\"col-sm-5\">\n                                                    <div class=\"form-group label-floating is-empty\">\n                                                        <label class=\"control-label\">Country</label>\n                                                        <select name=\"country\" class=\"form-control\">\n                                                            <option disabled=\"\" selected=\"\"></option>\n                                                            <option value=\"Afghanistan\"> Afghanistan </option>\n                                                            <option value=\"Albania\"> Albania </option>\n                                                            <option value=\"Algeria\"> Algeria </option>\n                                                            <option value=\"American Samoa\"> American Samoa </option>\n                                                            <option value=\"Andorra\"> Andorra </option>\n                                                            <option value=\"Angola\"> Angola </option>\n                                                            <option value=\"Anguilla\"> Anguilla </option>\n                                                            <option value=\"Antarctica\"> Antarctica </option>\n                                                            <option value=\"...\">...</option>\n                                                        </select>\n                                                    <span class=\"material-input\"></span></div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"wizard-footer\">\n                                        <div class=\"pull-right\">\n                                            <input class=\"btn btn-next btn-fill btn-rose btn-wd\" name=\"next\" value=\"Next\" type=\"button\">\n                                            <input class=\"btn btn-finish btn-fill btn-rose btn-wd\" name=\"finish\" value=\"Finish\" style=\"display: none;\" type=\"button\">\n                                        </div>\n                                        <div class=\"pull-left\">\n                                            <input class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\" value=\"Previous\" type=\"button\">\n                                        </div>\n                                        <div class=\"clearfix\"></div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                        <!-- wizard container -->\n                    </div>\n                </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/widges/widges.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return widgesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var widgesComponent = (function () {
    function widgesComponent() {
    }
    return widgesComponent;
}());
widgesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-Panels',
        template: __webpack_require__("../../../../../src/app/dashboard/widges/widges.component.html"),
    })
], widgesComponent);

//# sourceMappingURL=widges.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">\r\n                                                                                     \r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n                        <div class=\"card-header card-header-icon\" data-background-color=\"orange\" style=\"float:left;\">\r\n                            <i class=\"material-icons\">contacts</i>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <h4 class=\"card-title\">Login Form</h4>\r\n                          \r\n\t\r\n\r\n\r\n                           <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">face</i>\r\n                                 </span>\r\n                             <div class=\"form-group label-floating is-empty\">\r\n                                 <label class=\"control-label\">Username</label>\r\n                                 \r\n                               <input type=\"text\" aria-required=\"true\" name=\"Username\" id=\"Username\" text=\"true\" required=\"true\" [formControl]=\"Username\" class=\"form-control\" />\r\n                                 <span class=\"material-icons form-control-feedback\">clear</span>\r\n                              \r\n                               <div [hidden]=\"Username.valid || Username.untouched\">\r\n\r\n                                    <div [hidden]=\"!Username.hasError('minlength')\" style=\"color:red;\">Username can not be shorter than 5 characters.\r\n                                         \r\n                                    </div>\r\n                                    <div [hidden]=\"!Username.hasError('required')\" style=\"color:red;\">Username is required.\r\n                                         <span class=\"material-icons form-control-feedback\">clear</span>\r\n                                    </div>\r\n                                   </div>\r\n                                \r\n                             \r\n\r\n                            </div>\r\n                         </div>\r\n                             <div class=\"input-group\">\r\n                                  <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">lock_outline</i>\r\n                                 </span>\r\n                            <div class=\"form-group label-floating is-empty\">\r\n                                <label class=\"control-label\">Password</label>\r\n                                <input type=\"Password\" aria-required=\"true\" name=\"Password\" id=\"Password\" text=\"true\" required=\"true\" [formControl]=\"Password\" class=\"form-control\">\r\n                                 <span class=\"form-control-feedback material-icons\">clear</span>    \r\n                                <div [hidden]=\"Username.valid || Username.untouched\">\r\n                                       \r\n                                       \r\n\r\n                                  <div [hidden]=\"!Password.hasError('required')\" style=\"color:red;\">The password is required.</div>\r\n\r\n                                  </div>\r\n                            </div>\r\n                                 </div>\r\n                           \r\n                            <div class=\"text-center\">\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-round\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n                                 <button type=\"submit\" class=\"btn btn-primary btn-round\" routerLink=\"/Registration\">Registration</button>\r\n<div class=\"alert alert-danger\" *ngIf=\"result==false\">\r\n    <strong>Username or Password Invalid.</strong>\r\n</div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    \r\n                </div>\r\n            </div>\r\n                                            </div>\r\n                                                      </div>-->\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\r\n                           \r\n                                <div class=\"card card-login card-hidden\">\r\n                                    <div class=\"card-header text-center\" data-background-color=\"rose\">\r\n                                        <h4 class=\"card-title\">Login</h4>\r\n                                        <div class=\"social-line\">\r\n                                            <a href=\"#btn\" class=\"btn btn-just-icon btn-simple\">\r\n                                                <i class=\"fa fa-facebook-square\"></i>\r\n                                            </a>\r\n                                            <a href=\"#pablo\" class=\"btn btn-just-icon btn-simple\">\r\n                                                <i class=\"fa fa-twitter\"></i>\r\n                                            </a>\r\n                                            <a href=\"#eugen\" class=\"btn btn-just-icon btn-simple\">\r\n                                                <i class=\"fa fa-google-plus\"></i>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <p class=\"category text-center\">\r\n                                       \r\n                                    </p>\r\n                                    <div class=\"card-content\">\r\n                                       \r\n                                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n                        \r\n                       \r\n\t\r\n\r\n\r\n                           <div class=\"input-group\">\r\n                                <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">face</i>\r\n                                 </span>\r\n                             <div class=\"form-group label-floating is-empty\">\r\n                                 <label class=\"control-label\">Username</label>\r\n                                 \r\n                               <input type=\"text\" aria-required=\"true\" name=\"Username\" id=\"Username\" text=\"true\" required=\"true\" [formControl]=\"Username\" class=\"form-control\" />\r\n                                 <span class=\"material-icons form-control-feedback\">clear</span>\r\n                              \r\n                               <div [hidden]=\"Username.valid || Username.untouched\">\r\n\r\n                                    <div [hidden]=\"!Username.hasError('minlength')\" style=\"color:red;\">Username can not be shorter than 5 characters.\r\n                                         \r\n                                    </div>\r\n                                    <div [hidden]=\"!Username.hasError('required')\" style=\"color:red;\">Username is required.\r\n                                         <span class=\"material-icons form-control-feedback\">clear</span>\r\n                                    </div>\r\n                                   </div>\r\n                                \r\n                             \r\n\r\n                            </div>\r\n                         </div>\r\n                             <div class=\"input-group\">\r\n                                  <span class=\"input-group-addon\">\r\n                                                <i class=\"material-icons\">lock_outline</i>\r\n                                 </span>\r\n                            <div class=\"form-group label-floating is-empty\">\r\n                                <label class=\"control-label\">Password</label>\r\n                                <input type=\"Password\" aria-required=\"true\" name=\"Password\" id=\"Password\" text=\"true\" required=\"true\" [formControl]=\"Password\" class=\"form-control\">\r\n                                 <span class=\"form-control-feedback material-icons\">clear</span>    \r\n                                <div [hidden]=\"Username.valid || Username.untouched\">\r\n                                       \r\n                                       \r\n\r\n                                  <div [hidden]=\"!Password.hasError('required')\" style=\"color:red;\">The password is required.</div>\r\n\r\n                                  </div>\r\n                            </div>\r\n                                 </div>\r\n                           \r\n                            <div class=\"text-center\">\r\n                                <div class=\"footer text-center\">\r\n                                       \r\n                                  \r\n                                <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n                                 <button type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\" routerLink=\"/registration\">Registration</button>\r\n<div class=\"alert alert-danger\" *ngIf=\"result==false\">\r\n    <strong>Username or Password Invalid.</strong>\r\n</div>\r\n                                      </div>\r\n                            </div>\r\n                      \r\n                    </form>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                          \r\n                        </div>\r\n                    </div>\r\n               "

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function hasPunctuation(punctuation, errorType) {
    return function (input) {
        return input.value.indexOf(punctuation) >= 0 ?
            null : (_a = {}, _a[errorType] = true, _a);
        var _a;
    };
}
var LoginComponent = (function () {
    function LoginComponent(builder, router, services) {
        this.router = router;
        this.services = services;
        this.Username = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(5)]);
        this.Password = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.loginForm = builder.group({
            Username: this.Username,
            Password: this.Password
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = this.loginForm.value;
        this.services.Login(user).subscribe(function (data) { return _this.result = data; });
        if (this.result == true) {
            alert(this.result);
            this.router.navigate(['/Home', this.loginForm.value]);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <!--<div class=\"row\">\r\n        <div class=\"col-md-8\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"orange\">\r\n                    <h4 class=\"title\">Registration</h4>\r\n                   \r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"Registration()\">\r\n                      \r\n                          \r\n\r\n                        \r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label for=\"Username\" class=\"control-label\">Username</label>\r\n                                    <input type=\"text\" name=\"Username\" id=\"Username\" [formControl]=\"Username\" class=\"form-control\">\r\n                                     <div [hidden]=\"Username.valid || Username.untouched\">\r\n\r\n                                    <div [hidden]=\"!Username.hasError('minlength')\" class=\"alert alert-danger\">Username can not be shorter than 5 characters.</div>\r\n                                    <div [hidden]=\"!Username.hasError('required')\" class=\"alert alert-danger\">Username is required.</div>\r\n                                   </div>\r\n                                </div>\r\n                          \r\n                       \r\n                               <div class=\"form-group form-black label-floating is-empty\">\r\n                                     <label for=\"Password\" class=\"control-label\">Password</label>\r\n                                     <input type=\"Password\" name=\"Password\" id=\"Password\" [formControl]=\"Password\" class=\"form-control\">\r\n                                     <div [hidden]=\"Password.valid || Password.untouched\">\r\n                                     <div [hidden]=\"!Password.hasError('required')\" class=\"alert alert-danger\">The password is required.</div>\r\n\r\n                                     </div>\r\n\r\n                               </div>\r\n                     \r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label for=\"Question\" class=\"control-label\">Question</label>\r\n         <select [formControl]=\"Question\" class=\"form-control\">\r\n             <option>What is your Pet name ?</option>\r\n              <option>What is your First teacher name ?</option>\r\n              <option>What is your First School name ?</option>\r\n         </select>\r\n\r\n<div [hidden]=\"Question.valid || Question.untouched\">\r\n\r\n<div [hidden]=\"!Question.hasError('required')\" class=\"alert alert-danger\">The password is required.</div>\r\n</div>\r\n                                </div>\r\n                           \r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                  <label for=\"Answer\" class=\"control-label\">Answer</label>\r\n<input type=\"text\" name=\"Answer\" id=\"Answer\" [formControl]=\"Answer\" class=\"form-control\">\r\n<div [hidden]=\"Answer.valid || Answer.untouched\">\r\n\r\n<div [hidden]=\"!Answer.hasError('required')\" class=\"alert alert-danger\">The password is required.</div>\r\n\r\n</div>\r\n                                </div>\r\n                          \r\n                     \r\n                                \r\n                          \r\n                          \r\n                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label for=\"Email\" class=\"control-label\">Email</label>\r\n                                  <input type=\"text\"  name=\"Email\" id=\"Email\" [formControl]=\"Email\" class=\"form-control\">\r\n                                  <div [hidden]=\"Email.valid || Email.untouched\">\r\n\r\n                                 <div [hidden]=\"!Email.hasError('required')\" class=\"alert alert-danger\">The Phone is required.</div>\r\n\r\n</div>\r\n                            </div>\r\n                            \r\n                                                 \r\n                            \r\n                     \r\n\r\n                           \r\n                \r\n                           <div>\r\n         <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registrationForm.valid\">Submit</button>\r\n     </div>\r\n     <div>\r\n             Already Member <button routerLink=\"/Login\" class=\"btn btn-primary\">Login</button>\r\n     </div>\r\n\r\n<br />\r\n<div class=\"alert alert-success\" *ngIf=\"result==true\">\r\n    <strong>Registration Successfully</strong>\r\n</div> \r\n<div class=\"alert alert-danger\" *ngIf=\"result==false\">\r\n    <strong>Username already Registrade</strong>\r\n</div>\r\n                        <div class=\"clearfix\">\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>-->\r\n\r\n    <div class=\"row\">\r\n                    <div class=\"col-md-10 col-md-offset-1\">\r\n                        <div class=\"card card-signup\">\r\n                            <h2 class=\"card-title text-center\">Register</h2>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-5 col-md-offset-1\">\r\n                                    <div class=\"card-content\">\r\n                                        <div class=\"info info-horizontal\">\r\n                                            <div class=\"icon icon-rose\">\r\n                                                <i class=\"material-icons\">timeline</i>\r\n                                            </div>\r\n                                            <div class=\"description\">\r\n                                                <h4 class=\"info-title\">Marketing</h4>\r\n                                                <p class=\"description\">\r\n                                                    We've created the marketing campaign of the website. It was a very interesting collaboration.\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"info info-horizontal\">\r\n                                            <div class=\"icon icon-primary\">\r\n                                                <i class=\"material-icons\">code</i>\r\n                                            </div>\r\n                                            <div class=\"description\">\r\n                                                <h4 class=\"info-title\">Fully Coded in HTML5</h4>\r\n                                                <p class=\"description\">\r\n                                                    We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"info info-horizontal\">\r\n                                            <div class=\"icon icon-info\">\r\n                                                <i class=\"material-icons\">group</i>\r\n                                            </div>\r\n                                            <div class=\"description\">\r\n                                                <h4 class=\"info-title\">Built Audience</h4>\r\n                                                <p class=\"description\">\r\n                                                    There is also a Fully Customizable CMS Admin Dashboard for this product.\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"social text-center\">\r\n                                        <button class=\"btn btn-just-icon btn-round btn-twitter\">\r\n                                            <i class=\"fa fa-twitter\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-just-icon btn-round btn-dribbble\">\r\n                                            <i class=\"fa fa-dribbble\"></i>\r\n                                        </button>\r\n                                        <button class=\"btn btn-just-icon btn-round btn-facebook\">\r\n                                            <i class=\"fa fa-facebook\"> </i>\r\n                                        </button>\r\n                                        <h4> or be classical </h4>\r\n                                    </div>\r\n                                                       <form [formGroup]=\"registrationForm\" (ngSubmit)=\"Registration()\">\r\n                                        <div class=\"card-content\">\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"material-icons\">face</i>\r\n                                                </span>\r\n\r\n                                               <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label for=\"Username\" class=\"control-label\">Username</label>\r\n                                    <input type=\"text\" name=\"Username\" id=\"Username\" [formControl]=\"Username\" class=\"form-control\">\r\n                                     <div [hidden]=\"Username.valid || Username.untouched\">\r\n\r\n                                    <div [hidden]=\"!Username.hasError('minlength')\" style=\"color:red;\">Username can not be shorter than 5 characters.</div>\r\n                                    <div [hidden]=\"!Username.hasError('required')\" style=\"color:red;\">Username is required.</div>\r\n                                   </div>\r\n                                </div>\r\n                                            </div>\r\n                                            \r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"material-icons\">lock_outline</i>\r\n                                                </span>\r\n                                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                     <label for=\"Password\" class=\"control-label\">Password</label>\r\n                                     <input type=\"Password\" name=\"Password\" id=\"Password\" [formControl]=\"Password\" class=\"form-control\">\r\n                                     <div [hidden]=\"Password.valid || Password.untouched\">\r\n                                     <div [hidden]=\"!Password.hasError('required')\" style=\"color:red;\">The password is required.</div>\r\n\r\n                                     </div>\r\n\r\n                               </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"material-icons\">email</i>\r\n                                                </span>\r\n                                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label for=\"Question\" class=\"control-label\">Question</label>\r\n         <select [formControl]=\"Question\" class=\"form-control\">\r\n             <option>What is your Pet name ?</option>\r\n              <option>What is your First teacher name ?</option>\r\n              <option>What is your First School name ?</option>\r\n         </select>\r\n\r\n<div [hidden]=\"Question.valid || Question.untouched\">\r\n\r\n<div [hidden]=\"!Question.hasError('required')\" style=\"color:red;\">The Question is required.</div>\r\n</div>\r\n                                </div>\r\n                                            </div>\r\n                                           \r\n                                             <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"material-icons\">email</i>\r\n                                                </span>\r\n                                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                  <label for=\"Answer\" class=\"control-label\">Answer</label>\r\n<input type=\"text\" name=\"Answer\" id=\"Answer\" [formControl]=\"Answer\" class=\"form-control\">\r\n<div [hidden]=\"Answer.valid || Answer.untouched\">\r\n\r\n<div [hidden]=\"!Answer.hasError('required')\" style=\"color:red;\">The password is required.</div>\r\n\r\n</div>\r\n                                </div>\r\n                                            </div>\r\n                                            <div class=\"input-group\">\r\n                                                <span class=\"input-group-addon\">\r\n                                                    <i class=\"material-icons\">email</i>\r\n                                                </span>\r\n                                                <div class=\"form-group form-black label-floating is-empty\">\r\n                                    <label for=\"Email\" class=\"control-label\">Email</label>\r\n                                  <input type=\"text\"  name=\"Email\" id=\"Email\" [formControl]=\"Email\" class=\"form-control\">\r\n                                  <div [hidden]=\"Email.valid || Email.untouched\">\r\n\r\n                                 <div [hidden]=\"!Email.hasError('required')\" style=\"color:red;\">The Email is required.</div>\r\n\r\n</div>\r\n                            </div>\r\n                                            </div>\r\n\r\n\r\n                                            \r\n\r\n                                            <!-- If you want to add a checkbox to this form, uncomment this code -->\r\n                                            <div class=\"checkbox\">\r\n                                                <label>\r\n                                                    <input name=\"optionsCheckboxes\" checked=\"\" type=\"checkbox\"><span class=\"checkbox-material\"><span class=\"check\"></span></span> I agree to the\r\n                                                    <a href=\"#something\">terms and conditions</a>.\r\n                                                </label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"footer text-center\">\r\n                                            \r\n                                             <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!registrationForm.valid\">Submit</button>\r\n                                              Already Member <button routerLink=\"/login\" class=\"btn btn-primary\">Login</button>\r\n\r\n                                            <div class=\"alert alert-success\" *ngIf=\"result==true\">\r\n    <strong>Registration Successfully</strong>\r\n</div> \r\n<div class=\"alert alert-danger\" *ngIf=\"result==false\">\r\n    <strong>Username already Registrade</strong>\r\n</div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AlertService } from './AlertService';
function hasPunctuation(punctuation, errorType) {
    return function (input) {
        return input.value.indexOf(punctuation) >= 0 ?
            null : (_a = {}, _a[errorType] = true, _a);
        var _a;
    };
}
var RegistrationComponent = (function () {
    function RegistrationComponent(services, builder, router) {
        this.services = services;
        this.router = router;
        this.Role = 'Member';
        this.Username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(5)]);
        this.Password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Question = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Answer = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.Email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, hasPunctuation('@', 'emailRequired')]);
        this.registrationForm = builder.group({
            Username: this.Username,
            Password: this.Password,
            Question: this.Question,
            Answer: this.Answer,
            Email: this.Email,
            Role: this.Role
        });
    }
    RegistrationComponent.prototype.Registration = function () {
        var _this = this;
        var user = this.registrationForm.value;
        this.services.createUser(user).subscribe(function (data) { return _this.result = data; });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/login/registration.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_services_component__["a" /* servicesComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/Quiz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });
var Quiz = (function () {
    function Quiz(chapterid, questionid, question, ans1, ans2, ans3, ans4, correctanswer, image, ans, res) {
        this.chapterid = chapterid;
        this.question = question;
        this.questionid = questionid;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.correctanswer = correctanswer;
        this.ans = ans;
        this.res = res;
        this.image = image;
    }
    return Quiz;
}());

//# sourceMappingURL=Quiz.js.map

/***/ }),

/***/ "../../../../../src/app/models/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.question.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pagenotfound.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=pagenotfound.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n                <div class=\"container-fluid\">\r\n                    <nav class=\"pull-left\">\r\n                        <ul>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                    Home\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                    Company\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                    Portfolio\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#\">\r\n                                    Blog\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </nav>\r\n                    <p class=\"copyright pull-right\">\r\n                        &copy;\r\n                        <script>\r\n                            document.write(new Date().getFullYear())\r\n                        </script>\r\n                        <a href=\"http://www.creative-tim.com/\">Creative Tim</a>, made with love for a better web\r\n                    </p>\r\n                </div>\r\n            </footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"navbar-minimize\">\r\n                        <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\r\n                            <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\r\n                            <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"navbar-header\">\r\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\r\n                            <span class=\"sr-only\">Toggle navigation</span>\r\n                            <span class=\"icon-bar\"></span>\r\n                            <span class=\"icon-bar\"></span>\r\n                            <span class=\"icon-bar\"></span>\r\n                        </button>\r\n                        <a class=\"navbar-brand\" href=\"#\"> Dashboard </a>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\">\r\n                        <ul class=\"nav navbar-nav navbar-right\">\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                    <i class=\"material-icons\">dashboard</i>\r\n                                    <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"dropdown\">\r\n                                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                    <i class=\"material-icons\">notifications</i>\r\n                                    <span class=\"notification\">5</span>\r\n                                    <p class=\"hidden-lg hidden-md\">\r\n                                        Notifications\r\n                                        <b class=\"caret\"></b>\r\n                                    </p>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li>\r\n                                        <a href=\"#\">Mike John responded to your email</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">You have 5 new tasks</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">You're now friend with Andrew</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">Another Notification</a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">Another One</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                    <i class=\"material-icons\">person</i>\r\n                                    <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                                </a>\r\n                                <ul class=\"dropdown-menu\">\r\n                                    <li>\r\n                                        <a href=\"#\">{{cusername}}</a>\r\n                                    </li> \r\n                                    <li>\r\n                                        <a href=\"#\" (click)=\"logout($event)\">Logout</a>\r\n\r\n                                    </li>         \r\n                                    \r\n                                    \r\n                                    \r\n                                </ul>\r\n                            </li>\r\n                            <li class=\"separator hidden-lg hidden-md\"></li>\r\n                        </ul>\r\n                        <div class=\"navbar-form navbar-right\" role=\"search\">\r\n                            <div class=\"form-group form-search is-empty\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                     <label class=\"control-label\">Search Question</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"queryString\"/>\r\n           </div>\r\n                               <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\r\n                              <!-- <ng2-completer [(ngModel)]=\"searchStr\" [dataService]=\"dataService\" [minSearchLength]=\"0\"></ng2-completer>-->\r\n                                <span class=\"material-input\"></span>\r\n                            </div>\r\n                            <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                                <i class=\"material-icons\">search</i>\r\n                                <div class=\"ripple-container\"></div>\r\n                            </button>\r\n                        </div>\r\n\r\n                    </div>\r\n                 <div class=\"main-content\" *ngIf=\"queryString!=''\">\r\n    <div class=\"container-fluid\">  \r\n         <div class=\"card\"> \r\n              <div class=\"card-header\" data-background-color=\"orange\">\r\n\r\n                        <h4 class=\"title\" style=\"display:inline-block;\">{{queryString}}</h4>\r\n                     \r\n                 \r\n                      \r\n                        </div>    \t\r\n            <div >\r\n\r\n\r\n            <table class=\"table table-shopping\" [mfData]=\"Questions | FilterPipe : queryString : searchableList\" #mf=\"mfDataTable\"\r\n                  [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n               \r\n              <thead class=\"text-warning\">                    \r\n                       \r\n              \r\n                <tr>\r\n                   <th>\r\n\r\n                     \r\n                   </th>\r\n                    <th>\r\n                        <mfDefaultSorter by=\"question\">Question</mfDefaultSorter>\r\n                    </th>\r\n                    <th >\r\n                        <mfDefaultSorter by=\"correctanswer\">Answer</mfDefaultSorter>\r\n                    </th>\r\n                   \r\n                </tr>\r\n                \r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of mf.data;let i = index\">\r\n                 \r\n                    <td>\r\n                       {{ (i+1) }}\r\n                       <!-- {{Questions.indexOf(item)+1}}  -->                     \r\n                    </td>\r\n                    <td>{{item.question}}</td>\r\n                    <td class=\"text-success\">{{item.correctanswer}}</td>\r\n                  \r\n                </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                <tr>\r\n                    <td colspan=\"5\">\r\n                        <mfBootstrapPaginator ></mfBootstrapPaginator>\r\n                    </td>\r\n                </tr>\r\n                </tfoot>\r\n            </table>\r\n    </div>\r\n        </div>\r\n        </div>\r\n                     </div>\r\n                </div>\r\n            </nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, completerService, services) {
        this.router = router;
        this.completerService = completerService;
        this.services = services;
        this.filterQueryQ = '';
        this.queryString = '';
        this.rowsOnPage = 5;
        this.ActivePage = 1;
        this.sortBy = "question";
        this.sortOrder = "asc";
        this.searchableList = [];
        this.sortByWordLength = function (a) {
            return a.question.length;
        };
        this.searchableList = ['question', 'correctanswer'];
    }
    ;
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getallquestions().subscribe(function (data) { return _this.Questions = data; });
    };
    NavbarComponent.prototype.logout = function () {
        this.router.navigate(['login']);
        return false;
    };
    NavbarComponent.prototype.toInt = function (num) {
        return +num;
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "cusername", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_services_component__["a" /* servicesComponent */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_home_home_component__ = __webpack_require__("../../../../../src/app/dashboard/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagenotfound__ = __webpack_require__("../../../../../src/app/pagenotfound.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/dashboard/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_components_sweetalert_sweetalert_component__ = __webpack_require__("../../../../../src/app/dashboard/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_charts_charts_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_charts_worldcharts_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/worldcharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_charts_indiacharts_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/indiacharts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_charts_sun_component__ = __webpack_require__("../../../../../src/app/dashboard/charts/sun.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_tables_datatable_net_datatable_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/datatable.net/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_components_notifications_notifications_component__ = __webpack_require__("../../../../../src/app/dashboard/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_forms_extendedforms_extendedforms_component__ = __webpack_require__("../../../../../src/app/dashboard/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_components_panels_panels_component__ = __webpack_require__("../../../../../src/app/dashboard/components/panels/panels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_widges_widges_component__ = __webpack_require__("../../../../../src/app/dashboard/widges/widges.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/dashboard/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_tables_Materials_materials_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/Materials/materials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_tables_Materials_materialfilter_component__ = __webpack_require__("../../../../../src/app/dashboard/tables/Materials/materialfilter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_test_chaptertest_component__ = __webpack_require__("../../../../../src/app/dashboard/test/chaptertest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_registration_component__ = __webpack_require__("../../../../../src/app/login/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_editprofile_component__ = __webpack_require__("../../../../../src/app/user/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_userprofile_component__ = __webpack_require__("../../../../../src/app/user/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__dashboard_test_yourtest_component__ = __webpack_require__("../../../../../src/app/dashboard/test/yourtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dashboard_test_exam_component__ = __webpack_require__("../../../../../src/app/dashboard/test/exam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_test_subject_component__ = __webpack_require__("../../../../../src/app/dashboard/test/subject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Admin_Addquestions_addquestions__ = __webpack_require__("../../../../../src/app/Admin/Addquestions/addquestions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_20__login_registration_component__["a" /* RegistrationComponent */] },
    { path: 'addquestions', component: __WEBPACK_IMPORTED_MODULE_26__Admin_Addquestions_addquestions__["a" /* AddquestionsComponent */] },
    { path: 'userprofile/:Username', component: __WEBPACK_IMPORTED_MODULE_22__user_userprofile_component__["a" /* UserprofileComponent */] },
    { path: 'editprofile/:Username', component: __WEBPACK_IMPORTED_MODULE_21__user_editprofile_component__["a" /* EditprofileComponent */] },
    { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_components_buttons_buttons_component__["a" /* ButtonComponent */] },
    { path: 'sweetalert', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_components_sweetalert_sweetalert_component__["a" /* sweetalertComponent */] },
    { path: 'charts', component: __WEBPACK_IMPORTED_MODULE_6__dashboard_charts_charts_component__["a" /* ChartComponent */] },
    { path: 'worldcharts', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_charts_worldcharts_component__["a" /* WorldChartComponent */] },
    { path: 'indiacharts', component: __WEBPACK_IMPORTED_MODULE_8__dashboard_charts_indiacharts_component__["a" /* IndiaChartComponent */] },
    { path: 'solar', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_charts_sun_component__["a" /* SunComponent */] },
    { path: 'ytest', component: __WEBPACK_IMPORTED_MODULE_23__dashboard_test_yourtest_component__["a" /* yourtestComponent */] },
    { path: 'examtest', component: __WEBPACK_IMPORTED_MODULE_24__dashboard_test_exam_component__["a" /* examComponent */] },
    { path: 'chaptertest', component: __WEBPACK_IMPORTED_MODULE_18__dashboard_test_chaptertest_component__["a" /* chaptertestComponent */] },
    { path: 'subjecttest', component: __WEBPACK_IMPORTED_MODULE_25__dashboard_test_subject_component__["a" /* SubjectComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_11__dashboard_components_notifications_notifications_component__["a" /* NotificationComponent */] },
    { path: 'extendedforms', component: __WEBPACK_IMPORTED_MODULE_12__dashboard_forms_extendedforms_extendedforms_component__["a" /* extendedformsComponent */] },
    { path: 'tablenet', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_tables_datatable_net_datatable_component__["a" /* DatatablenetComponent */] },
    { path: 'materials', component: __WEBPACK_IMPORTED_MODULE_16__dashboard_tables_Materials_materials_component__["a" /* materialsComponent */] },
    { path: 'materialsfilter', component: __WEBPACK_IMPORTED_MODULE_17__dashboard_tables_Materials_materialfilter_component__["a" /* MaterialfileterComponent */] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_15__dashboard_calendar_calendar_component__["a" /* calendarComponent */] },
    { path: 'panels', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_components_panels_panels_component__["a" /* panelsComponent */] },
    { path: 'widges', component: __WEBPACK_IMPORTED_MODULE_14__dashboard_widges_widges_component__["a" /* widgesComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__pagenotfound__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"logo\">\r\n                <a href=\"http://www.creative-tim.com/\" class=\"simple-text\">\r\n                    Dashboard\r\n                </a>\r\n            </div>\r\n            <div class=\"logo logo-mini\">\r\n                <a href=\"http://www.creative-tim.com/\" class=\"simple-text\">\r\n                    Ct\r\n                </a>\r\n            </div>\r\n            <div class=\"sidebar-wrapper\">\r\n                \r\n              <div class=\"user\">\r\n                <!--<a>  25% Profile Complated</a>-->\r\n                <!--  <div class=\"c100 p25 orange\">\r\n\r\n                <!-- <div class=\"slice\">\r\n\r\n    <div class=\"bar\"></div>\r\n\r\n    <div class=\"fill\">\r\n\r\n\r\n    </div>\r\n  </div>-->\r\n                <!--<div *ngFor=\"let u of user\">\r\n\r\n         <div *ngIf=\"u.Photo!=null\">\r\n                          <img src=\"http://localhost:8979/Content/images/{{u.Photo}}\"  style=\"position: absolute;border-radius: 50%;padding: 9px;\r\n  z-index: 999;\r\n  height: 102px;\r\n  width: 101px;\"/>\r\n\r\n\r\n                      </div>\r\n\r\n                          </div>-->\r\n                <!-- <div>\r\n                    <img src=\"../../assets/img/placeholder.jpg\" style=\"position: absolute;border-radius: 50%;padding: 9px;\r\n  z-index: 999;\r\n  height: 102px;\r\n  width: 101px;\" />-->\r\n                <!--<img src=\"../../Content/images/placeholder.jpg\" style=\"position: absolute;border-radius: 50%;padding: 9px;\r\n  z-index: 999;\r\n  height: 102px;\r\n  width: 101px;\"/>            -->\r\n                <!-- </div>\r\n\r\n\r\n\r\n\r\n   </div> -->\r\n\r\n                <div class=\"info\">\r\n                  <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                    {{cusername}}\r\n                    <b class=\"caret\"></b>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"collapseExample\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a [routerLink]=\"['/userprofile',Username]\">My Profile</a>\r\n                      </li>\r\n                      <li>\r\n                        <a [routerLink]=\"['/editprofile',Username]\">Edit Profile</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"changepassword\">change Password</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <ul class=\"nav\">\r\n                <li class=\"active\">\r\n                  <a href=\"#/dashboard\">\r\n                    <i class=\"material-icons\">dashboard</i>\r\n                    <p>Dashboard</p>\r\n                  </a>\r\n                </li>\r\n\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#MaterialExamples\">\r\n                    <i class=\"material-icons\">image</i>\r\n                    <p>\r\n                      Materials\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"MaterialExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a routerLink=\"materials\">Materials</a>\r\n                      </li>\r\n                      <!--<li>\r\n            <a routerLink=\"materialsfilter\">Search Question</a>\r\n        </li>-->\r\n\r\n                      <li>\r\n                        <a href=\"pages/login.html\">Login Page</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/register.html\">Register Page</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/lock.html\">Lock Screen Page</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/user.html\">User Profile</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#TestExamples\">\r\n                    <i class=\"material-icons\">image</i>\r\n                    <p>\r\n                      Test\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"TestExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a routerLink=\"chaptertest\">chapterTest</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"ytest\">YourTest</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"subjecttest\">subjectTest</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"examtest\">ExamTest</a>\r\n                      </li>\r\n\r\n\r\n                      <li>\r\n                        <a href=\"pages/timeline.html\">Timeline</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/login.html\">Login Page</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/register.html\">Register Page</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/lock.html\">Lock Screen Page</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"pages/user.html\">User Profile</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#ChartExamples\">\r\n                    <i class=\"material-icons\">place</i>\r\n                    <p>\r\n                      Charts\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"ChartExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a routerLink=\"charts\">Gujarat</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"indiacharts\">India</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"worldcharts\">World</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#solarExample\">\r\n                    <i class=\"material-icons\">wb_sunny</i>\r\n                    <p>\r\n                      Splar\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"solarExample\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a routerLink=\"solar\">Solar system</a>\r\n                      </li>\r\n\r\n\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#componentsExamples\">\r\n                    <i class=\"material-icons\">apps</i>\r\n                    <p>\r\n                      Admin\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"componentsExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a routerLink=\"addquestions\">Addquestions</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"buttons\">Buttons</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"components/grid.html\">Grid System</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"/panels\">Panels</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"/sweetalert\">Sweet Alert</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"/notifications\">Notifications</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"components/icons.html\">Icons</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"components/typography.html\">Typography</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#formsExamples\">\r\n                    <i class=\"material-icons\">content_paste</i>\r\n                    <p>\r\n                      Forms\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"formsExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a href=\"forms/regular.html\">Regular Forms</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"/extendedforms\">Extended Forms</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"forms/validation.html\">Validation Forms</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"forms/wizard.html\">Wizard</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#tablesExamples\">\r\n                    <i class=\"material-icons\">grid_on</i>\r\n                    <p>\r\n                      Tables\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"tablesExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a href=\"tables/regular.html\">Regular Tables</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"tablenet1\">Extended Tables</a>\r\n                      </li>\r\n                      <li>\r\n                        <a routerLink=\"tablenet\">DataTables.net</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a data-toggle=\"collapse\" href=\"#mapsExamples\">\r\n                    <i class=\"material-icons\">place</i>\r\n                    <p>\r\n                      Maps\r\n                      <b class=\"caret\"></b>\r\n                    </p>\r\n                  </a>\r\n                  <div class=\"collapse\" id=\"mapsExamples\">\r\n                    <ul class=\"nav\">\r\n                      <li>\r\n                        <a href=\"maps/google.html\">Google Maps</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"maps/fullscreen.html\">Full Screen Map</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"maps/vector.html\">Vector Map</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <a routerLink=\"widges\">\r\n                    <i class=\"material-icons\">widgets</i>\r\n                    <p>Widgets</p>\r\n                  </a>\r\n                </li>\r\n\r\n                <li>\r\n                  <a routerLink=\"calendar\">\r\n                    <i class=\"material-icons\">date_range</i>\r\n                    <p>Calendar</p>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(services, router, route) {
        //this.sub = this.route.params.subscribe(params => {
        //    this.Username = params['Username']; // (+) converts string 'id' to a number
        //    this.services.getuserprofile(this.Username).subscribe(data => this.user = data);
        //});
        this.services = services;
        this.router = router;
        this.route = route;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Username = this.cusername;
        this.services.getuserprofile(this.cusername).subscribe(function (data) { return _this.user = data; });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return SidebarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SidebarComponent.prototype, "cusername", void 0);
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        \r\n        \r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"orange\">\r\n                    <h4 class=\"title\">Edit Profile</h4>\r\n                   \r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <form [formGroup]=\"ProfileForm\" (ngSubmit)=\"EditProfile()\">\r\n                       <div *ngFor=\"let u of user\">\r\n                           <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div >\r\n                                    <h3 class=\"card-title\">Username:{{Username}}</h3>\r\n                                   \r\n                                </div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating\">\r\n                                    <label class=\"control-label\">Full Name</label>\r\n                                    <input type=\"text\"  [(ngModel)]=\"u.FullName\"  name=\"FullName\"  id=\"FullName\" [formControl]=\"FullName\" class=\"form-control\">\r\n                                    <div [hidden]=\"FullName.valid || FullName.untouched\">\r\n\r\n                                    <div [hidden]=\"!FullName.hasError('required')\" class=\"alert alert-danger\">The Fullname is required.</div>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                         </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Adress</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"u.Address\" name=\"Address\" id=\"Address\" [formControl]=\"Address\" class=\"form-control\">\r\n                                    <div [hidden]=\"Address.valid || Address.untouched\">\r\n\r\n                                    <div [hidden]=\"!Address.hasError('required')\" class=\"alert alert-danger\">The Address is required.</div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            </div>\r\n                           <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Country</label>\r\n                                     <select [formControl]=\"CountryName\" [(ngModel)]=\"u.CountryName\" class=\"form-control\" (ngModelChange)=\"countryEvent($event)\">\r\n                                            <option *ngFor=\"let c of country\" [ngValue]=\"c.CountryID\" >{{c.CountryName}}</option>\r\n                                    </select>\r\n\r\n                                <div [hidden]=\"CountryName.valid || CountryName.untouched\">\r\n\r\n                                <div [hidden]=\"!CountryName.hasError('required')\" class=\"alert alert-danger\">The StateName is required.</div>\r\n</div>\r\n                                </div>\r\n                            </div>                            \r\n                            \r\n                        </div>\r\n                           <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">State</label>\r\n                                     <select [formControl]=\"StateName\" (ngModelChange)=\"StateEvent($event)\" class=\"form-control\">\r\n                                     <option *ngFor=\"let s of state\"  [ngValue]=\"s.StateID\" >{{s.StateName}}</option>\r\n                                    </select>\r\n\r\n                                 <div [hidden]=\"StateName.valid || StateName.untouched\">\r\n\r\n                                 <div [hidden]=\"!StateName.hasError('required')\" class=\"alert alert-danger\">The StateName is required.</div>\r\n                                </div>\r\n                                </div>\r\n                            </div>                            \r\n                            \r\n                        </div>\r\n                           <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">City</label>\r\n                                     <select [formControl]=\"CityName\" (ngModelChange)=\"CityEvent($event)\" class=\"form-control\">\r\n                                       <option *ngFor=\"let c of city\"  [ngValue]=\"c.CityID\" >{{c.CityName}}</option>\r\n                                    </select>\r\n\r\n                           <div [hidden]=\"CityName.valid || CityName.untouched\">\r\n\r\n                         <div [hidden]=\"!CityName.hasError('required')\" class=\"alert alert-danger\">The CityName is required.</div>\r\n                           </div>\r\n\r\n                                </div>\r\n                            </div>                            \r\n                            \r\n                        </div>\r\n                           <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group form-black label-floating \">\r\n                                    <label class=\"control-label\">Phone</label>\r\n                                  <input type=\"text\" [(ngModel)]=\"u.Phone\" name=\"Phone\" id=\"Phone\" [formControl]=\"Phone\" class=\"form-control\">\r\n                                  <div [hidden]=\"Phone.valid || Phone.untouched\">\r\n\r\n                                 <div [hidden]=\"!Phone.hasError('required')\" class=\"alert alert-danger\">The Phone is required.</div>\r\n\r\n</div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                         </div>\r\n                           \r\n\r\n                           <div class=\"row\">\r\n\r\n                               <div class=\"col-md-3 col-sm-4\">\r\n                                     <div class=\"form-group form-black label-floating \">\r\n                                \r\n                                    <div class=\"fileinput-new thumbnail img-circle\">\r\n                                        <img src=\"http://localhost:8979/Content/images/{{u.Photo}}\" height=\"100px\" width=\"100px\" />\r\n                                    </div>\r\n                                   \r\n                                         \r\n                                             <input type=\"file\" name=\"Photo\" id=\"Photo\" [formControl]=\"Photo\" (change)=\"getFiles($event)\" class=\"form-control\">\r\n                                        <div [hidden]=\"Photo.valid || Photo.untouched\">\r\n\r\n                                <div [hidden]=\"!Photo.hasError('required')\" class=\"alert alert-danger\">The Photo is required.</div>\r\n\r\n                               </div>\r\n                                            <div class=\"ripple-container\"></div>\r\n\r\n                                       \r\n                                        <br>\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                                        \r\n                           \r\n\r\n                           </div>\r\n                           \r\n             </div>\r\n                        <button type=\"submit\" class=\"btn btn-danger btn-round fileinput-exists\">Update Profile</button>\r\n                         <button type=\"submit\" class=\"btn btn-danger btn-round fileinput-exists\" [routerLink]=\"['/userprofile',Username]\" >Cancle</button>\r\n                        <div class=\"clearfix\">\r\n\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function hasPunctuation(punctuation, errorType) {
    return function (input) {
        return input.value.indexOf(punctuation) >= 0 ?
            null : (_a = {}, _a[errorType] = true, _a);
        var _a;
    };
}
var EditprofileComponent = (function () {
    function EditprofileComponent(services, builder, router, route) {
        var _this = this;
        this.services = services;
        this.router = router;
        this.route = route;
        this.Username = 'Prashant';
        this.sub = this.route.params.subscribe(function (params) {
            _this.Username = params['Username']; // (+) converts string 'id' to a number
        });
        this.services.getcountry().subscribe(function (data) { return _this.country = data; });
        this.FullName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.Address = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.CountryName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.StateName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.CityName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.Phone = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.Photo = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.ProfileForm = builder.group({
            Username: this.Username,
            FullName: this.FullName,
            Address: this.Address,
            CityID: this.CityName,
            Phone: this.Phone,
            photo: this.Photo
        });
    }
    EditprofileComponent.prototype.countryEvent = function (cid) {
        var _this = this;
        this.services.getstate(cid).subscribe(function (data) { return _this.state = data; });
    };
    EditprofileComponent.prototype.StateEvent = function (sid) {
        var _this = this;
        this.services.getcity(sid).subscribe(function (data) { return _this.city = data; });
    };
    EditprofileComponent.prototype.CityEvent = function (id) {
        this.cid = id;
    };
    EditprofileComponent.prototype.getFiles = function (event) {
        this.files = event.target.files;
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(this.files[0]);
    };
    EditprofileComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data. 
    };
    EditprofileComponent.prototype.EditProfile = function () {
        var _this = this;
        var user = this.ProfileForm.value;
        this.services.Profiles(user, this.filestring).subscribe(function (data) { return _this.result = data; });
    };
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.services.getuserprofile(this.Username).subscribe(function (data) { return _this.user = data; });
    };
    EditprofileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/user/editprofile.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], EditprofileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=editprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<div class=\"row\">\r\n                                                \r\n                                                <div class=\"col-md-4\">\r\n                            <div class=\"card card-profile\" *ngFor=\"let u of user\">\r\n                                <div class=\"card-avatar\" >\r\n                                    <a href=\"#\">\r\n                                        <img class=\"img\" src=\"http://localhost:8979/Content/images/{{u.Photo}}\" style=\"width:125%;\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"card-content\">\r\n                                    <h2 class=\"category text-gray\">\r\n                                        \r\n                                    {{Username}}\r\n                              \r\n                                        </h2>\r\n                                    <h4 class=\"card-title\">Social Contact</h4>\r\n                                    <div class=\"input-group\">\r\n                                        \r\n                               \r\n                           <h4 class=\"info-title\"><i class=\"material-icons\">face</i>\r\n                                    {{Username}}</h4>\r\n                                 \r\n                                        </div>\r\n                                    <div class=\"input-group\">\r\n                                        \r\n                               \r\n                           <h4 class=\"info-title\"><i class=\"material-icons\">email</i>\r\n                                    {{u.FullName}}</h4>\r\n                                 \r\n                                        </div>\r\n                                        <div class=\"input-group\">\r\n                                        \r\n                               \r\n                          <h4 class=\"info-title\"><i class=\"material-icons\">face</i>\r\n                                    {{u.Address}}</h4>\r\n                                 \r\n                                        </div>\r\n                                        <div class=\"input-group\">\r\n                                        \r\n                               \r\n                           <h4 class=\"info-title\"><i class=\"material-icons\">face</i>\r\n                                    {{u.CityName}}</h4>\r\n                                 \r\n                                        </div>\r\n                                    <div class=\"input-group\">\r\n                                        \r\n                               \r\n                           <h4 class=\"info-title\"><i class=\"material-icons\">phone</i>\r\n                                    {{u.Phone}}</h4>\r\n                                 \r\n                                        </div>\r\n                                  \r\n                                    <button type=\"submit\" class=\"btn btn-rose btn-round\" [routerLink]=\"['/editprofile',Username]\">Edit</button>\r\n                                   \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                                            </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/user/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_services_component__ = __webpack_require__("../../../../../src/app/Services/services.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = (function () {
    function UserprofileComponent(services, router, route) {
        var _this = this;
        this.services = services;
        this.router = router;
        this.route = route;
        this.sub = this.route.params.subscribe(function (params) {
            _this.Username = params['Username']; // (+) converts string 'id' to a number
            _this.services.getuserprofile(_this.Username).subscribe(function (data) { return _this.user = data; });
        });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    UserprofileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'from-group',
        template: __webpack_require__("../../../../../src/app/user/userprofile.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_services_component__["a" /* servicesComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], UserprofileComponent);

var _a, _b, _c;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map