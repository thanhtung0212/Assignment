var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <router-outlet></router-outlet>\n</main>\n<nz-back-top [nzTemplate]=\"tpl\" [nzVisibilityHeight]=\"100\" (nzOnClick)=\"notify()\">\n  <ng-template #tpl>\n    <div class=\"ant-back-top-inner\">^</div>\n  </ng-template>\n</nz-back-top>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"text-center mb-5\">\n        <h1>CHANGE PASSWORD</h1>\n    </div>\n    <div class=\" d-flex justify-content-between row \">\n        <div class=\"col-md-7\">\n            <div class=\"text-center img\">\n                <h5 class=\"mb-3\">MANAGE YOUR GADGETS ACCOUNT</h5>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Lorem ipsum\n                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege</p>\n            </div>\n            <img src=\"https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png\"\n                alt=\"\" style=\"max-width: 100%\">\n        </div>\n        <div class=\"col-md-5\">\n            <div class=\"card text-center shadow \">\n                <div class=\"m-3\">\n                    <h3>Change Password</h3>\n                </div>\n                <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm(validateForm.value)\">\n                    <nz-form-item>\n                        <nz-form-label [nzSpan]=\"7\" nzRequired>Username</nz-form-label>\n                        <nz-form-control [nzSpan]=\"12\" nzHasFeedback nzValidatingTip=\"Validating...\"\n                            [nzErrorTip]=\"userErrorTpl\">\n                            <input nz-input formControlName=\"userName\" placeholder=\"username\" />\n                            <ng-template #userErrorTpl let-control>\n                                <ng-container *ngIf=\"control.hasError('required')\">\n                                    Please input your username!\n                                </ng-container>\n                                <ng-container *ngIf=\"control.hasError('duplicated')\">\n                                    The username is redundant!\n                                </ng-container>\n                            </ng-template>\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-label [nzSpan]=\"7\" nzRequired>E-mail</nz-form-label>\n                        <nz-form-control [nzSpan]=\"12\" nzHasFeedback [nzErrorTip]=\"emailErrorTpl\">\n                            <input nz-input formControlName=\"email\" placeholder=\"email\" type=\"email\" />\n                            <ng-template #emailErrorTpl let-control>\n                                <ng-container *ngIf=\"control.hasError('email')\">\n                                    The input is not valid E-mail!\n                                </ng-container>\n                                <ng-container *ngIf=\"control.hasError('required')\">\n                                    Please input your E-mail!\n                                </ng-container>\n                            </ng-template>\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-label [nzSpan]=\"7\" nzRequired>Password</nz-form-label>\n                        <div>\n                            <nz-form-control [nzSpan]=\"12\" nzHasFeedback nzErrorTip=\"Please input your password!\">\n                                <input nz-input type=\"password\" formControlName=\"password\"\n                                    (ngModelChange)=\"validateConfirmPassword()\" />\n                            </nz-form-control>\n                        </div>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-label [nzSpan]=\"7\" nzRequired>Confirm Password</nz-form-label>\n                        <nz-form-control [nzSpan]=\"12\" nzHasFeedback [nzErrorTip]=\"passwordErrorTpl\">\n                            <input nz-input type=\"password\" formControlName=\"confirm\"\n                                placeholder=\"confirm your password\" />\n                            <ng-template #passwordErrorTpl let-control>\n                                <ng-container *ngIf=\"control.hasError('required')\">\n                                    Please confirm your password!\n                                </ng-container>\n                                <ng-container *ngIf=\"control.hasError('confirm')\">\n                                    Password is inconsistent!\n                                </ng-container>\n                            </ng-template>\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-label [nzSpan]=\"7\" nzRequired>Comment</nz-form-label>\n                        <nz-form-control [nzSpan]=\"12\" nzErrorTip=\"Please write something here!\">\n                            <textarea formControlName=\"comment\" nz-input rows=\"2\"\n                                placeholder=\"write any thing\"></textarea>\n                        </nz-form-control>\n                    </nz-form-item>\n                    <nz-form-item>\n                        <nz-form-control [nzSpan]=\"12\" style=\"max-width: 100%; text-align: right;\">\n                            <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\">Submit</button>\n                            <button nz-button (click)=\"resetForm($event)\">Reset</button>\n                        </nz-form-control>\n                    </nz-form-item>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg mt-5\"\n    style=\"background-image: url('https://demo.w3layouts.com/demos_new/19-01-2017/sublime_contact_form-demo_Free/1317874809/web/images/banner.jpg');max-width: 100%\">\n    <div class=\"text-center pt-5 pb-3\">\n        <h2 style=\"color: #fff\">SUBLIME CONTACT FORM</h2>\n    </div>\n    <div class=\"container pb-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card m-auto\">\n                    <div class=\"text-center mt-5\">\n                        <form action=\"\">\n                            <h4 style=\"color: #fff\">CONTACT US</h4>\n                            <input type=\"text\" placeholder=\"USENAME\">\n                            <input type=\"email\" name=\"\" id=\"\" placeholder=\"MAIL@EXAMPLE.COM\"><br>\n                            <textarea placeholder=\"YOUR EMAIL\" style=\"height: 100px\">\n                                                    </textarea>\n                            <div class=\"\">\n                                <input type=\"submit\">\n                            </div>\n                        </form>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/exam/exam.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/exam/exam.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n\n<div class=\"container ex mt-5 pt-5\">\n    <div class=\"text-center\">\n        <h1 style=\"color: #b40606\">EXAM ONLINE 2019</h1>\n    </div>\n    <div class=\"card mb-3\" style=\"border: 2px solid #b40606;\">\n        <div class=\"card-header d-flex justify-content-between\">\n            <p class=\"m-0\" style=\"font-weight: bold;\">Funny Exam</p>\n            <div class=\"d-flex\" style='margin:0px 5px '>\n                <i class=\"fa fa-clock-o mr-2\" style=\"font-size:36px\"></i>\n                <span class=\"\" id=\"h\" style=\"color: #b40606;\">h</span> :\n                <span class=\"\" id=\"m\" style=\"color: #b40606;\">m</span> :\n                <span class=\"\" id=\"s\" style=\"color: #b40606;\">s</span>\n            </div>\n        </div>\n    </div>\n\n    <!-- <button class=\"btn btn-success\" (click)=\"result()\">Start</button> -->\n    <div *ngIf=\"isEdit\">\n\n        <div class=\"card mb-5\" *ngFor=\"let list of list\">\n            <div class=\"card-header d-flex justify-content-between\">\n                <p>{{list.Text }}</p>\n\n            </div>\n            <div class=\"card-body\" *ngFor=\"let item of list.Answers\">\n                <label class=\"container\">{{item.Text}}\n                    <input type=\"checkbox\" name=\"radio\">\n                    <span class=\"checkmark\"></span>\n                </label>\n                <!-- <label class=\"container\">Two\n                <input type=\"radio\" name=\"radio\">\n                <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"container\">Three\n                <input type=\"radio\" name=\"radio\">\n                <span class=\"checkmark\"></span>\n            </label>\n            <label class=\"container\">Four\n                <input type=\"radio\" name=\"radio\">\n                <span class=\"checkmark\"></span>\n            </label> -->\n            </div>\n        </div>\n    </div>\n    <button class=\"btn m-3 {{isEdit? 'btn-danger': 'btn-success'}}\" (click)=\"isEdit? stop() :\n    start()\"> {{isEdit? 'Ket thuc va xem ket qua' : 'Bat Dau'}}\n    </button>\n    <!-- <div class=\"row mt-3\">\n        <div class=\"col-md-4\">\n            Showing {{config.currentPage}} of {{list.length/config.itemsPerPage | number:\"1.0-0\" }}\n        </div>\n        <div class=\"col-md-8\">\n            <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n        </div>\n    </div> -->\n</div>\n\n<tp-footer>\n\n</tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n<div class=\"bg mt-5\" style=\"background-image: url(https://demo.w3layouts.com/demos_new/22-02-2017/elegant_feedback_form-demo_Free/1761240909/web/images/bg2.jpg);\n    max-width: 100%;\">\n    <div class=\"text-center pt-5\">\n        <h1 style=\"color: #fff\">FEEDBACK FORM</h1>\n    </div>\n    <div class=\"container pb-5\">\n        <div class=\"row\">\n            <div class=\"card col-md-6 \" style=\"background-color:rgba(1, 14, 21, 0.62);\">\n                <div class=\"container \">\n                    <form action=\"\">\n                        <div class=\"ans mt-3\">\n                            <p> Please help us to serve you better by taking a couple of minutes.</p>\n                        </div>\n                        <div>\n                            <div class=\"ques\">\n                                <h2>How satisfied were you with our Product/Service?</h2>\n                            </div>\n                            <ul class=\"chose mt-3\">\n                                <li><input type=\"radio\" name=\"view\" id=\"excellent\">\n                                    <label for=\"excellent\">Excellent</label>\n                                    <div class=\"check w3\"></div>\n                                </li>\n                                <li><input type=\"radio\" name=\"view\" id=\"good\" checked=\"checked\">\n                                    <label for=\"good\"> Good</label>\n                                    <div class=\"check w3ls\"></div>\n                                </li>\n                                <li><input type=\"radio\" name=\"view\" id=\"neutral\">\n                                    <label for=\"neutral\">Neutral</label>\n                                    <div class=\"check wthree\"></div>\n                                </li>\n                                <li><input type=\"radio\" name=\"view\" id=\"poor\">\n                                    <label for=\"poor\">Poor</label>\n                                    <div class=\"check w3_agileits\"></div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"ques m-2\">\n                            <h2>If you have specific feedback, please write to us...</h2>\n                        </div>\n                        <div class=\"add\">\n                            <textarea nz-input placeholder=\"Additional comments\" [(ngModel)]=\"value\"\n                                [nzAutosize]=\"{ minRows: 5, maxRows: 5 }\"\n                                [ngModelOptions]=\"{standalone: true}\"></textarea>\n                            <div class=\"add mt-2 mb-2\">\n                                <input class=\"name\" type=\"text\" name=\"\" id=\"\" placeholder=\"Your Name\">\n                                <input class=\"email\" type=\"text\" name=\"\" id=\"\" placeholder=\"Your Email\"><br>\n                            </div>\n                            <input class=\"submit\" type=\"submit\" name=\"\" id=\"\" value=\"Send\">\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer>\n\n</tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"bg-dark\">\n    <div class=\"container\">\n        <div class=\" justify-content-between  row \">\n            <div class=\"info text-center\">\n                <div>\n                    <i class=\"fa fa-map-marker mr-1\"></i>\n                    <span>12 Trịnh Đình Thảo, Phường Hòa Thạnh, Quận Tân Phú</span><br>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"mr-2\">\n                        <i class=\"fa fa-envelope mr-1 \"></i>\n                        <span>info@example.com</span>\n                    </div>\n                    <div>\n                        <i class=\"fa fa-phone mr-1\"></i>\n                        <span>0898-398-112</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"info text-center \">\n                <span>Follow me on social media</span>\n                <div class=\"ml-3\">\n                    <a class=\" nav-link-icon \" href=\"#\">\n                        <i class=\"fa fa-facebook-square\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n                    </a>\n                    <a class=\" nav-link-icon\" href=\"#\">\n                        <i class=\"fa fa-twitter\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n                    </a>\n                    <a class=\" nav-link-icon\" href=\"#\">\n                        <i class=\"fa fa-instagram\"></i>\n                        <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <hr style=\"max-width: 100%;background-color:#fff !important\">\n    <div class=\"text-center pb-1 \">\n        <span class=\"m-1\" href=\"#\" style=\"color: wheat\">Copyright © 2019 Tung ITC. All rights reserved.</span>\n\n    </div>\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n<!-- Header -->\n<div class=\"font mt-5 \">\n    <div class=\"bg\"\n        style=\"background: url('https://demo.w3layouts.com/demos_new/template_demo/26-03-2019/aegis_demo_Free/1054937215/web/images/banner1.jpg') no-repeat center;max-width: 100%;\">\n        <div class=\"container\">\n            <div class=\"row tex-center img-responsive\">\n                <div class=\"col-md-7\">\n                    <div class=\"caption\">\n                        <h1 class=\"lg\">FIND THE BEST COURSE FOR YOU</h1>\n                        <div class=\"input-group mb-3\">\n                            <input type=\"text\" class=\"ipsearch\" placeholder=\"   Course search . . .\"\n                                aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                            <div class=\"input-group-append\">\n                                <button type=\"button\" class=\"btn btnsearch\">Search</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-3\"></div>\n            </div>\n        </div>\n    </div>\n    <!-- Body -->\n    <div class=\"container mt-5\">\n        <h3 class=\" mb-5\" style=\"color: #cb2036;\">WELCOM TO MY WEBSITE</h3>\n        <p>Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In\n            Sed Ligula. Nulla Uter Sollicitudin Velit. Sed porttitor orci vel fermentum elit maximus. Curabitur\n            ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter\n            sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.</p>\n\n\n        <div class=\"row\">\n            <div class=\"card m-3\" style=\"width: 18rem;\" *ngFor=\"let item of list\">\n                <img src=\"\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">\n                        <a href=\"\" [routerLink]=\"['/exam']\" routerLinkActive=\"router-link-active\">{{item.Name}}</a>\n                    </h5>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n\n\n    <!-- Detail -->\n    <div class=\"text-center\" style=\"background-image: url('https://test365.vn/templates/as002057/images/bg.row5.png');\">\n        <div class=\" container text-center\">\n            <div class=\"pt-5\">\n                <h5 style=\"color: white\">NHỮNG LỢI ÍCH BẠN CÓ KHI SỬ DỤNG HỆ THỐNG CỦA CHÚNG TÔI</h5>\n            </div>\n            <div>\n                <p style=\"color: #cb2036\">==================================</p>\n            </div>\n            <div class=\"row \">\n                <div class=\"col-md-4 pb-3\">\n                    <div class=\"card\">\n                        <p class=\"text-center\">\n                            <img src=\"https://test365.vn/images/sampledata/asimages/ico.monitoring.png\"\n                                class=\"card-img-top\" alt=\"...\" style=\"max-width: 100%\">\n                        </p>\n\n                        <div class=\"card-body\">\n                            <h5>Hiệu quả</h5>\n                            <ul>\n                                <li>Kho câu hỏi phủ kín các kiến thức cần trang bị được tích luỹ và tái sử dụng nhiều\n                                    lần trở thành kho kiến thức chuyên môn nghiệp vụ của doanh nghiệp</li>\n                                <li>Sơ loại ứng viên trước khi vào vòng phỏng vấn, tiết kiệm chi phí tuyển dụng</li>\n                                <li>Đào tạo nhân viên thông qua các bài test, tạo ra văn hoá bồi dưỡng kiến thức và sát\n                                    hạch liên tục</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 pb-3\">\n                    <div class=\"card\">\n                        <p class=\"\">\n                            <img src=\"https://test365.vn/images/sampledata/asimages/ico.optimization.png\"\n                                class=\"card-img-top\" alt=\"...\">\n                        </p>\n                        <div class=\"card-body\">\n                            <h5>NHANH CHÓNG</h5>\n                            <ul>\n                                <li>Mọi thứ đều thực hiện online, không cần giấy bút</li>\n                                <li>Công cụ trộn đề, sinh đề, giao đề thi cho thí sinh hoàn toàn tự động, 5 phút để tạo\n                                    xong một đợt thi cho hàng nghìn người</li>\n                                <li>Chấm thi tự động, chính xác tuyệt đối, biết kết quả ngay sau khi hoàn thành bài thi\n                                </li>\n                                <li>Giao diện đơn giản trực quan</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-4 pb-3\">\n                    <div class=\"card\">\n                        <p>\n                            <img src=\"https://test365.vn/images/sampledata/asimages/ico.copywriting.png\"\n                                class=\"card-img-top\" alt=\"...\">\n                        </p>\n                        <div class=\"card-body\">\n                            <h5>TIẾT KIỆM CHI PHÍ</h5>\n                            <ul>\n                                <li>Không cần đầu tư phần cứng, phần mềm, hệ thống mạng</li>\n                                <li>Không cần nhân sự vận hành</li>\n                                <li>Không cần nhân sự ra đề, chấm thi</li>\n                                <li>Không cần giấy bút, in ấn, lưu trữ</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<tp-footer>\n</tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduce/introduce.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/introduce/introduce.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<navigation>\n</navigation>\n<div>\n    <div class=\"bg\" style=\"max-width: 100%;\">\n        <div class=\"bg2\">\n            <div class=\"container pd\">\n                <div class=\"row add \">\n                    <div class=\"col-md-6\">\n                        <div class=\"card1 m-auto\">\n                            <div class=\"m-auto avt\">\n                                <img src=\"https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/66389802_844593089242719_7949268730070958080_n.jpg?_nc_cat=101&_nc_oc=AQmStYPiXIBq3JMawOerSKAGUKlK5rJOM6R5y2Zo65M7sbQ7n4cY7qUXH1BTH1hyxA4&_nc_ht=scontent.fhan2-1.fna&oh=e2c8b34b9cd44a984e04fd57baf76d58&oe=5E2FAB1D\"\n                                    alt=\"\">\n                            </div>\n                            <h3>Nguyen Thanh Tung</h3>\n                            <p>WEBSITE PROGRAMING</p>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"info3\">\n                            <H3 style=\"color: #fff\">Career Goal</H3>\n                            <p style=\"color: #c5c2c2\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus\n                                dignissim velit sed nibh\n                                placerat, non aliquam purus pretium. Donec at justo dignissim, maximus elit et,\n                                vestibulum\n                                mi.\n                            </p>\n                            <div>\n                                <ul class=\"unline\" style=\"list-style: none\">\n                                    <li class=\"info3\">\n                                        <ul class=\"info\">\n                                            <li class=\"info2\">D.O.B</li>\n                                            <li><span>:xxx-xxx-xxx</span></li>\n                                        </ul>\n                                        <ul class=\"info\">\n                                            <li class=\"info2\"><span>PHONE</span></li>\n                                            <li><span>:xxx-xxx-xxx</span></li>\n                                        </ul>\n                                        <ul class=\"info\">\n                                            <li class=\"info2\"><span>ADDRESS </span></li>\n                                            <li><span>:California</span></li>\n                                        </ul>\n                                        <ul class=\"info\">\n                                            <li class=\"info2\"><span>E-MAIL</span></li>\n                                            <li><span>:info@example.com</span></li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"font2 m-5\">\n        <div class=\"text-center \">\n            <h1 style=\"font-family: 'Poppins', sans-serif;color: #00bcd4\">ABOUT ME</h1>\n        </div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/ab5.jpg\"\n                        alt=\"\" style=\"max-width: 100%\">\n                </div>\n                <div class=\"col-md-6 lg1\">\n                    <h3> Aliquam Euismod At Turpis Eu Egestas</h3>\n                    <p>Nullam pulvinar nunc eget tortor elementum, sed vehicula massa vestibulum. Aenean gravida arcu\n                        viverra nisl euismod laoreet. Fusce accumsan vel arcu at tincidunt. Nulla non nulla ultrices,\n                        pharetra orci in, varius nunc</p>\n                    <h3 style=\"color:#00bcd4; font-size:1em\">Lorem Ipsum Dolor Sit Amet, Consectetur\n                        Adipisci Ask</h3>\n                    <div class=\"about \">\n                        <div class=\"about1\">\n                            <h3>20</h3>\n                            <h5>Web Projects</h5>\n                        </div>\n                        <div class=\"about1\">\n                            <h3>20</h3>\n                            <h5>Web Projects</h5>\n                        </div>\n                        <div class=\"about1\">\n                            <h3>20</h3>\n                            <h5>Web Projects</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 lg1\">\n                    <h3> Pellentesque sit amet ex at nisl posuere</h3>\n                    <p>Nullam pulvinar nunc eget tortor elementum, sed vehicula massa vestibulum. Aenean gravida arcu\n                        viverra nisl euismod laoreet. Fusce accumsan vel arcu at tincidunt. Nulla non nulla ultrices,\n                        pharetra orci in, varius nunc.</p>\n                    <h3 style=\"color:#00bcd4; font-size:1em\">Lorem Ipsum Dolor Sit Amet, Consectetur\n                        Adipisci Ask</h3>\n                    <button class=\"btn\">REDMORE</button>\n                </div>\n                <div class=\"col-md-6\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/ab7.jpg\"\n                        alt=\"\" style=\"max-width: 100%\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"text-center\">\n        <h1 style=\"    font-family: 'Poppins', sans-serif;\n        color: #00bcd4;\">MY PROJECTS</h1>\n    </div>\n    <div class=\"container  \">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"container1 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g1.jpg\"\n                        alt=\"Avatar\" class=\"image1\" style=\"max-width: 100%\">\n                    <div class=\"overlay1\">\n                        <div class=\"text1\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container2 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g2.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay2\">\n                        <div class=\"text2\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container3 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g31.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay3\">\n                        <div class=\"text3\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"container4 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g4.jpg\"\n                        alt=\"Avatar\" class=\"image4\" style=\"max-width: 100%\">\n                    <div class=\"overlay4\">\n                        <div class=\"text4\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container1 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g5.jpg\"\n                        alt=\"Avatar\" class=\"image1\" style=\"max-width: 100%\">\n                    <div class=\"overlay1\">\n                        <div class=\"text1\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container2 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g6.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay2\">\n                        <div class=\"text2\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"container1 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g7.jpg\"\n                        alt=\"Avatar\" class=\"image1\" style=\"max-width: 100%\">\n                    <div class=\"overlay1\">\n                        <div class=\"text1\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container4 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g8.jpg\"\n                        alt=\"Avatar\" class=\"image4\" style=\"max-width: 100%\">\n                    <div class=\"overlay4\">\n                        <div class=\"text4\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"container3 dt\" style=\"height: 340px;width: 300px\">\n                    <img src=\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/g9.jpg\"\n                        alt=\"Avatar\" class=\"image2\" style=\"max-width: 100%\">\n                    <div class=\"overlay3\">\n                        <div class=\"text3\">\n                            <button style=\"background: orange\"> View Details</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer>\n</tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5 pt-5  \">\n    <div class=\"text-center lg mb-5\">\n        <h1> LOG IN FORM</h1>\n    </div>\n    <div class=\"d-flex justify-content-between row mb-2\">\n        <div class=\"col-md-8\">\n            <div class=\"text-center\">\n                <h5 class=\"mb-3\">MANAGE YOUR GADGETS ACCOUNT</h5>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Lorem ipsum\n                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege</p>\n            </div>\n            <img src=\"https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png\"\n                alt=\"\" style=\"max-width: 100%\">\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card mt-auto shadow\">\n                <div class=\"card-body \">\n                    <div class=\"text-center mb-3\">\n                        <h3 style=\"font-weight: bold\">Login here</h3>\n                        <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD29vbr6+vJycnPz8/j4+PFxcWzs7Ovr6/a2tpzc3Px8fGhoaGFhYX5+fmQkJBVVVVoaGgMDAyBgYG+vr7d3d0TExNNTU05OTkqKip5eXmNjY3U1NRDQ0MlJSWZmZkxMTFPT08dHR1AQEBeXl4pKSlcXFyenp4RERE1NTW8f+7JAAANKUlEQVR4nNVd52KjMAxuILOZTUJGm7bQcR3v/4B3NI0lGxtsSYbc96slibGwrS1xcxMdya4/mS+m68P3837T6/U2++fvw3q6mE/6t7P4t4+KYZavj716HNd5Nux6ohSk2eKpgTaMt0WWdj3lAKTj6SaAOoXp+L+gcnC6p1D3i/vFoGsC6jGaMqhTSznqmgwXBg8C5P0SeYUrmeZ7MfpKbFbXdSb7d6LknfFyNbt1OW9avs3xY3v6HGej/uDx8XHQH2Xjz9P249jEcffzZdfE/UOyqpvj23Q+2rmnuRyO5g9vdQOckhZpsWG2dc7tuB376irD8eLbOc62S80uWbioW/VDn/1ysHIt5razdXTsz2lGnVGSre1DrkTn7YuJdS4PfeawfbtUnYjMOQSPhWUaaxn+PrKtZPEoMrYvlpY5vM7ljksyf7Y8vxZFx7h6+3dpPWvwXr3JWPgeLsxeKrfexlCx0qokOrQiOaocZhWLm1u0ifgcJ6looKuYx2NZofEusnDsmzdcxJbGVa2CK49qYd7tvQ0TJzV5ziLarRLDt3Tflp06MBwjT5EYzqPxKOdxbmPF3Lh3FPFv8NC7dlX+mcHhIvBUQzi1JXwBhpqxlR5ff4QvXdhshqZxJzp4UnR2AjH001gICqpUc6i8dhdmGL7iiWzEZNVQe3RrqWFJ0I0aoWd9exU79AJ9p95KDKkT2L0zeqDNR0AwagS+XoMjOtUOI3sVNQIPEhMUwEGQRI3JdMtjMDR+w2I3KR5JXItgQNOwGEcnwXKwG5+lC9gy3tBFf4GGydmTWg4H2Xgyn4yzwZCvjuRobgV1EKyLfrKmMxudPno6PlYjHpmfaDCijor3es6Yym7lyjg55jvGuHgVSTwC24P0Mzj7tPh2Ef580lcSn0WCvYgtejIXvXVEWjSsyQuJd1mwcjPDUyBO4NY39v1OpRE/wNC9gJxORE1m5rN+F0yJexVN8ynsl8ht+Eq7t+k7agLR8YJ01CAnI3b8kjSGtClhrwqaixBrXQGu4gT9jGQuWYJTHsgot8LGlP9WRxyCZPC60xfqQXJmo+PgLfiRJCSxUXr60Dvldsjp73mYkaCgcJllQSbwn5ZDuCHmNn5nGdmXBNMrqddhmnBPiNXt4OcvPt9HXIJwCJd/WAT2et/h98RH0cMXvwx8IAbcuU2+eCPcFW275j2ANBGCgDJtJAoI3G0W8GukcBOCL7VZfN7Iw2+MjlaTCl6obxKsypEIgSQtAyRUg8GPRGH4Hk0sk6UhnKGifVovFOF7BD4qlyhMOIrIqVH3NThH9+H3yMQI7PUICXIQ66/xSKBtRjgKggT2NuG3Ryq4WwMHjZmgIJ4kKezl4RMA/dSpwaPTGm4UzizT5CCc2SBT0cUlYQkJZoxcOQl5CjB/h+sMncJwr4n0ElIWsZEAOEgE96iMNoNB8LLDJE62j5HKTbBgxAnsfYVPooEEMEEISygpCy8g5CDCItoUFijtIfguJWwKE9PwacBJ3Fc/BK2Z4MNf2mbIRvg8EDutakWgVBIcpDE2KWmbgkysmEbwEcXfJVE6WgUlIASKjblQEIyjuIBlqysv+EOYCWinufHJ1+UDigMxtU6QD4qfX7kWDWkDpFOc3HGOIS1nHYSevhlBq6SEueQVmjMoyQMgMB606+oyyY1vKeARAUEiYmchvgrCkFR9Fh5K8wMpNmunBbg9ZcwISqnIbKa2iw/O3/0/FD5Yfg6clFRxE0tY0NgeCmADN4WoPWVEI0taErScPPVzsBKVI47EvHB0Sxi0xErFTZVLFHYZKZJ+dRRCECOtXKFltVwbheAzugSXlKyghO5uYp5DYmmOks+XU6cGJCboyUVkTNDmA1rkr+scjiG11ODaKAR5cT6IYBlQK3p5yQluUAzEErCpzqxTSUNSqkeJGP13SpDL01Q2wdlz/qT/S4BsUAZAnpBySJ0TFtWA5KpJWhpbM8iFojCh8j/g9eTSjFjiglzUpNMEjIY6XjRmSu9loIYoWY3yshHlfYmQdGB/MCak2hXleHY02/AHcQ4io0pHqWmlV0apOIzaSfnoYQlGbaHyuJUSUA3IaRB0sE6RCcZ8RmgQkP+cKrcY25RxapC5k6C/WV1YIlDIKYCFYNgOtFRCCgsCNbXbDWIVxC/UMH3IZCNrpT+Q90bxisYV/5wA1/lgjSgvEnmti1RQeg6WBbMIVlpzs2ZT+EM5TRcgG5lDSi8is8pUmTtTmBivSlRa6nOrjlUy5hpkNbvjTG6fKw3cySgBfQBzmOYrxeAWIiCwJ6MspiP4WPhdHeX8pvzuOkpte4YkA4E2aGKxYH4LI6XI7G9UUwGJriVCCjj/wEA4bQPqjUSDMBnfsER7CggYylIochQDC3rtgMoYoFCmtw6/qISncV+A1lD0HN4IWIoyjdLQOZTkpT+wd1D2hlAXI8RLlTwUYGBncFZxL9XqTkn8Z0md5oJKk1NvHMW6vSKdRk4vBQxJL2GhphFYgfRSMdsCY0mKRkn2s0S2hZh9qCO0aUSv9ybaKQ3Zh8rG5zjvLEgDNTjhhqTIxlcPW7Zb5j9kX3ZabDhJN5RWx2QO4otSJt4AX9EY4TUdSkRMEGsXv8s/ZM1WcSEnphDU8H3N/y2NwcIn8/S4EulgqQGMnB36W/g+Ia9/epV+9xG0e0yMcKkUZvmrjZIaHEQ3qxbYVhspFxvfq8VXBXvB5q/K71fGKtRspFpbDui+jFxoCjpRilxCgboFjzxfjdA6Khae38jkYihUuvwH40vkPKrhytEgpMJnpiLJUQc+XwVW+hPYVv9xVcN+gJpWi5xLIShTP/+qvDameSZYolcwG3WrqZz9dsq6sFSW+uPWPlcqeBxHOZ/OuX/AahgHQDTwVIITkjZT87mp+iUiZJhu6Du1smbqf6oRnIaqaH4gP3ClEV/yS9S5JLqbzdeziCEnUqiO4YV3goOTtDFiVZD2qJsKJPzFfwgHkcLBmD7uepB0ZfCCKdap6p4IJY3hTrUgULxHSsCDpg3KVrCdH3UFaSSCTQ8OUghFhSpusXLYEYI7IMBDR+E0dS2wVSI9QhGAUGUSXimELoJKGRT7iVe0piHMGw98Ez8aiNyGcNN4FV0GgoJGwPq0/Bl1NcQvzO/k6YuQHINC/Uq7DJ4/fzNYurtXHfx5PNg4urowcFyvQQtsFOCfnwHP3UhMAPPcc6R4JepW+OYqQoK3ae2CfefJa2rfiB4BnkcR+ExufAJL4mdgRFbWLPCjEOy4ijkPNqyPWdbyHi3hxSDAzqlqe6Ce+BRUVV96HB8++xTOjiU9CHo9NWdHSTUMDoKHTx5Egs2rBier2YaScoyGoZkHPtV+F3WVa1rE9tnMGU3BftSG1vo5WIlN8rUD4n7QVPkMS2hX1pEiXZ/FJ+4b9Ua95YO4g0PLg+qs+kPdAWm/qJcY0PjAlWWMakLq7JWuTmGJukX06baO3hBUM1KcFoJ+qDGGEad0n9fE50udyEIFN4WoArLG1kIFE07ncIxmrP5wuspQ7VytHQJfcxVcxinb9obTB4EcDnUE4tPqeFqf1bu2CocPArG/Bo9oAd+0M6Si1y3sDALZOk0vtERxJKvvNF5PKF9Yp41SXBpNEJTOZNNeu96kdqUZ7dHmWA5u62yJekdpnhAEi0jEG8sjFRf50KrKW2tOYDcsXhbUp8rLeYzs94oe2K24P6Oys1Cai1/cBUs885HE6ggVAnNO2HHrGXbBMUFDtWnbh2iDEYvCh9A7OIhyR/b6yW2dHAv0Lm5LVJ/jH03F/ERz2rQUTmuAplg/uT6oB458Ym7TaqzCCSwRcTJdUH0hshR7OVyO1bg7DBP7hAL71+HFB+YVp6dXKMBHgXliaPmwJtrV8hetUuKCYiiadA5OI9FSuS7abLuUuHDRavCLciml6FqmzNkqi/MqknBY1oCU36y1fvohsYOIkxVJhUBikwItabTcBd0bh2eUmqm2RcmVhQUeZRAxzTIQQ4PJNJn1biRaxXLWTgqUB2511WPDqLrTD95E2xkdYqe73Vn1GfrJ697AP0OfB7NyQbjIIALYlT7XTqJAXeh1kyhS+HrNJApV9l6LoK+CyWQAKbGTR2RsBMujk6JraiwoZMvrY7XOp0O8y4V8k1keJFqeGYheWREE4VYoZ1yT1BBpLldF8tR861bwJN/C44JF891bAPm1Fz64BgtRqrGcA0nXYuMu3g69oFueGoWHmph1kQJ9xkGqJV8TugrQCDbNa8IyziuO67GW7gdWj8eiZfqKSEK+Bu1u1VY4TAXtRRO5HdrJSNrRcbbxRaAbs/hG1bYtCeFCEnevRmg4SMAkTuOPsr9ZuwKiBv0Y2uodv9O/JNJcNoX/KxfuMyiBkEaJDXgQai4uj76ENje9rt1ZweB030yEE/enq109jHT8QCpQnI6v8Ow5kWaLEL/V2yL7n6hTGGb5uqkL7XGdZ2IBlo6Q7PqT+WK6Phyf92WIZ7N/Ph7W08V80r9tQSP7CxY8rVd8/vWFAAAAAElFTkSuQmCC\"\n                            alt=\"\" style=\"height: 100px\">\n                    </div>\n                    <form nz-form [formGroup]=\" validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n                        <nz-form-item>\n                            <nz-form-control nzErrorTip=\"Please input your email!\">\n                                <nz-input-group nzPrefixIcon=\"user\">\n                                    <input type=\"email\" nz-input formControlName=\"email\" placeholder=\"Email\" />\n                                </nz-input-group>\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-control nzErrorTip=\"Please input your Password!\">\n                                <nz-input-group nzPrefixIcon=\"lock\">\n                                    <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"Password\" />\n                                </nz-input-group>\n                            </nz-form-control>\n                            <label class=\"error mt-2\" style=\"color: red;\">{{errorMessage}}</label>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-control>\n                                <label nz-checkbox formControlName=\"remember\">\n                                    <span>Remember me</span>\n                                </label>\n                                <a class=\"login-form-forgot\" class=\"login-form-forgot\">Forgot password</a>\n                                <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\"\n                                    (click)=\"tryLogin(validateForm.value)\">Log in</button>\n                                Or\n                                <a [routerLink]=\"['/signin']\" routerLinkActive=\"router-link-active\"\n                                    style=\"color: rgb(232, 0, 0);\">register now!</a>\n                            </nz-form-control>\n                        </nz-form-item>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer></tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<header class=\"container \">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top \" id=\"navbar\">\n        <div class=\"container\">\n            <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n                aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n\n            <a class=\"navbar-brand \" routerLink=\"/index\">\n                <img src=\"https://test365.vn/templates/as002057/images/logo.png\" alt=\"\"\n                    style=\"width:100px;margin-right: 100px;\"></a>\n\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav m-auto\">\n                    <li class=\"nav-item \">\n                        <a class=\"nav-link\" routerLink='/index'>Home <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/intro']\" routerLinkActive=\"router-link-active\">About</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"exam\" [routerLink]=\"['/exam']\"\n                            routerLinkActive=\"router-link-active\">Exam</a>\n                    </li>\n\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/feedback']\" routerLinkActive=\"router-link-active\">Feed\n                            Back</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" [routerLink]=\"['/contact']\" routerLinkActive=\"router-link-active\">\n                            Contact</a>\n                    </li>\n\n                    <li class=\"nav-item dropdown\">\n                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            Account\n                        </a>\n                        <div class=\"dropdown-menu bg-light lg\" aria-labelledby=\"navbarDropdown\">\n                            <a class=\"dropdown-item\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\">Log\n                                In</a>\n                            <a class=\"dropdown-item\" [routerLink]=\"['/signin']\"\n                                routerLinkActive=\"router-link-active\">Sign In</a>\n                            <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"\n                                routerLinkActive=\"router-link-active\">\n                                Change\n                                Password</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/user']\"\n                                routerLinkActive=\"router-link-active\">Update\n                                Infomation</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"#\">Log out</a>\n                        </div>\n                    </li>\n\n                </ul>\n            </div>\n        </div>\n    </nav>\n</header>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mb-5 pt-5 mt-5\">\n    <div class=\"text-center\">\n        <h1>REGISTER FORM</h1>\n    </div>\n    <div class=\"row d-flex justify-content-between pt-3\">\n        <div class=\"col-md-7\">\n            <div class=\"text-center\">\n                <h5 class=\"mb-3\">MANAGE YOUR GADGETS ACCOUNT</h5>\n                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget Lorem ipsum\n                    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege</p>\n            </div>\n            <img src=\"https://demo.w3layouts.com/demos_new/template_demo/18-05-2019/gadget_signup_form-demo_Free/1576182126/web/images/b11.png\"\n                alt=\"\" style=\"max-width: 100%\">\n        </div>\n        <div class=\"col-md-5 \">\n            <div class=\"card shadow\">\n                <div class=\"card-body \">\n                    <div class=\"text-center\">\n                        <h1>Register</h1>\n                    </div>\n                    <form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm()\">\n                        <nz-form-item>\n                            <nz-form-label [nzSm]=\"9\" [nzXs]=\"24\" nzRequired nzFor=\"email\">E-mail</nz-form-label>\n                            <nz-form-control [nzSm]=\"11\" [nzXs]=\"24\" nzErrorTip=\"The input is not valid E-mail!\">\n                                <input nz-input formControlName=\"email\" type=\"email\" id=\"email\" />\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-label [nzSm]=\"9\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>Password</nz-form-label>\n                            <nz-form-control [nzSm]=\"11\" [nzXs]=\"24\" nzErrorTip=\"Please input your password!\">\n                                <input nz-input type=\"password\" id=\"password\" formControlName=\"password\"\n                                    (ngModelChange)=\"updateConfirmValidator()\" />\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item>\n                            <nz-form-label [nzSm]=\"9\" [nzXs]=\"24\" nzFor=\"checkPassword\" nzRequired>Confirm Password\n                            </nz-form-label>\n                            <nz-form-control [nzSm]=\"11\" [nzXs]=\"24\" [nzErrorTip]=\"errorTpl\">\n                                <input nz-input type=\"password\" formControlName=\"checkPassword\" id=\"checkPassword\" />\n                                <ng-template #errorTpl let-control>\n                                    <ng-container *ngIf=\"control.hasError('required')\">\n                                        Please confirm your password!\n                                    </ng-container>\n                                    <ng-container *ngIf=\"control.hasError('confirm')\">\n                                        Two passwords that you enter is inconsistent!\n                                    </ng-container>\n                                    <label class=\"error\">{{errorMessage}}</label>\n                                    <label class=\"success\">{{successMessage}}</label>\n                                </ng-template>\n                            </nz-form-control>\n                        </nz-form-item>\n\n                        <nz-form-item nz-row class=\"register-area\">\n                            <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\n                                <label nz-checkbox formControlName=\"agree\">\n                                    <span>I have read the <a>agreement</a></span>\n                                </label>\n                            </nz-form-control>\n                        </nz-form-item>\n                        <nz-form-item nz-row class=\"register-area\">\n                            <nz-form-control [nzSpan]=\"20\" [nzOffset]=\"6\">\n                                <button nz-button nzType=\"primary\" class=\"w-50\"\n                                    (click)=\"tryRegister(validateForm.value)\">Register</button>\n                            </nz-form-control>\n                        </nz-form-item>\n                        <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\"\n                            style=\"color: rgb(232, 0, 0);\"> Or Login now!</a>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<tp-footer></tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<navigation></navigation>\n<div class=\"container mt-5 pt-5\">\n\n    <h1 class=\"header\">Logged User Page</h1>\n    <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4\">\n            <div class=\"card\" style=\"width: 20rem;\">\n                <img class=\"card-img-top image\" [src]=\"user.photoURL\" *ngIf=\"user.photoURL\" alt=\"User image\" />\n                <img class=\"card-img-top image\" src=\"https://via.placeholder.com/400x300\" *ngIf=\"!user.photoURL\"\n                    alt=\"User image\" />\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{ user.studentId }}</h4>\n                </div>\n                <!-- <div *ngIf=\"!user.studentId\" class=\"card-body\"> -->\n                <div class=\"card-body\">\n                    <form [formGroup]=\"profileForm\">\n                        <div class=\"form-group\">\n                            <label>Your student ID</label>\n                            <input type=\"text\" formControlName=\"studentId\" class=\"form-control\" required />\n                        </div>\n                    </form>\n                    <div class=\"d-flex justify-content-between\">\n                        <button type=\"submit\" (click)=\"save(profileForm.value)\" class=\"btn btn-primary\">\n                            Save\n                        </button>\n                        <button type=\"submit\" [routerLink]=\"['/index']\" routerLinkActive=\"router-link-active\"\n                            class=\"btn btn-primary\">\n                            Chon mon thi\n                        </button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default navbar-static-top navbar-inverse\">\n        <div class=\"container\">\n            <button (click)=\"logout()\" class=\"navbar-text navbar-right navbar-link\">Logout</button>\n        </div>\n    </nav>\n</div>\n<tp-footer></tp-footer>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-item {\n  margin: 0px 15px; }\n\n.lg > a {\n  color: #b40606 !important; }\n\n.nav-link-icon {\n  color: gray;\n  font-size: 18px;\n  margin-right: 10px; }\n\n.nav-link-icon > i {\n  margin-right: 6px; }\n\n.nav-link-inner--text {\n  font-size: 15px; }\n\n.bg-dark {\n  font-family: 'Open Sans', Arial, serif; }\n\n.nav-link {\n  font-size: 18px;\n  color: #b40606 !important; }\n\n.fa {\n  padding: 10px; }\n\n.nav-link-icon :hover {\n  color: #ffffff; }\n\n:host ::ng-deep .ant-back-top {\n  bottom: 100px; }\n\n:host ::ng-deep .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 50%;\n  background-color: gray;\n  color: #ffffff;\n  text-align: center;\n  font-size: 20px; }\n\n:host ::ng-deep strong {\n  color: #1088e9; }\n\n.info {\n  color: gray;\n  margin: 30px  0px 16px; }\n\n.wrapper {\n  width: 240px; }\n\nbutton {\n  margin-bottom: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxnQkFBaUIsRUFBQTs7QUFHakI7RUFFRSx5QkFBZ0MsRUFBQTs7QUFHakM7RUFDRSxXQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUNGLEVBQUE7O0FBQ0E7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUNGLEVBQUE7O0FBSUE7RUFDSSxzQ0FBc0MsRUFBQTs7QUFFMUM7RUFDSSxlQUFlO0VBQ2xCLHlCQUFnQyxFQUFBOztBQUVqQztFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRyxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWl0ZW17XG5tYXJnaW46IDBweCAxNXB4IDtcbn1cblxuLmxnID4gYXtcbiAgICAvLyAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiByZ2IoMTgwLCA2LCA2KSAhaW1wb3J0YW50XG5cbn1cbiAubmF2LWxpbmstaWNvbntcbiAgIGNvbG9yOmdyYXk7XG4gICBmb250LXNpemU6IDE4cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiB9XG4gLm5hdi1saW5rLWljb24+IGl7XG4gICBtYXJnaW4tcmlnaHQ6IDZweDtcbiB9XG4gLm5hdi1saW5rLWlubmVyLS10ZXh0IHtcbiAgIGZvbnQtc2l6ZTogMTVweFxuIH1cbi8vICAubmF2YmFyLW5hdntcbi8vICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4vLyAgfVxuIC5iZy1kYXJre1xuICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBzZXJpZjtcbiB9XG4gLm5hdi1saW5re1xuICAgICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZ2IoMTgwLCA2LCA2KSAhaW1wb3J0YW50XG4gfVxuIC5mYXtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gfVxuIC5uYXYtbGluay1pY29uIDpob3ZlcntcbiAgIGNvbG9yOiAjZmZmZmZmO1xuIH1cbiA6aG9zdCA6Om5nLWRlZXAgLmFudC1iYWNrLXRvcCB7XG4gICAgYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCAuYW50LWJhY2stdG9wLWlubmVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIDpob3N0IDo6bmctZGVlcCBzdHJvbmcge1xuICAgIGNvbG9yOiAjMTA4OGU5O1xuICB9XG4gIC5pbmZve1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbjogMzBweCAgMHB4IDE2cHg7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.isCollapsed = false;
                }
                AppComponent.prototype.notify = function () {
                    console.log('notify');
                };
                AppComponent.prototype.toggleCollapsed = function () {
                    this.isCollapsed = !this.isCollapsed;
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/vi */ "./node_modules/@angular/common/locales/vi.js");
            /* harmony import */ var _angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
            /* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
            /* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./introduce/introduce.component */ "./src/app/introduce/introduce.component.ts");
            /* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/exam/exam.component.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
            /* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
            /* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
            /* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/user.service */ "./src/app/core/user.service.ts");
            /* harmony import */ var _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./user/user.resolver */ "./src/app/user/user.resolver.ts");
            /* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
            /* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
            /* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_vi__WEBPACK_IMPORTED_MODULE_11___default.a);
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"], _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_18__["IntroduceComponent"], _exam_exam_component__WEBPACK_IMPORTED_MODULE_19__["ExamComponent"],
                        _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"],
                        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_30__["NavigationComponent"],
                        _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_22__["AngularFireAuthModule"],
                        ngx_pagination__WEBPACK_IMPORTED_MODULE_24__["NgxPaginationModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                            { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"] },
                            { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
                            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
                            { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"] },
                            { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"] },
                            { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_16__["FeedbackComponent"] },
                            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"] },
                            { path: 'intro', component: _introduce_introduce_component__WEBPACK_IMPORTED_MODULE_18__["IntroduceComponent"] },
                            { path: 'exam', component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_19__["ExamComponent"] },
                            { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_29__["UserComponent"], resolve: { data: _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"] } },
                        ], { enableTracing: true }),
                    ],
                    providers: [_core_auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], _core_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"], _user_user_resolver__WEBPACK_IMPORTED_MODULE_28__["UserResolver"], _core_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["vi_VN"], }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/changepassword/changepassword.component.scss": 
        /*!**************************************************************!*\
          !*** ./src/app/changepassword/changepassword.component.scss ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\n  max-width: 100%; }\n\nbutton {\n  margin-left: 8px; }\n\n.img {\n  max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbmd1eWVudGhhbmh0dW5nL0RvY3VtZW50cy9hc3NpZ25tZW50L3NyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUNDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlcGFzc3dvcmQvY2hhbmdlcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotZm9ybV0ge1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDsgfVxuXG4uaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XG4iLCJbbnotZm9ybV0ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbiAuaW1ne1xuICAgbWF4LXdpZHRoOiAxMDAlO1xuIH1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/changepassword/changepassword.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/changepassword/changepassword.component.ts ***!
          \************************************************************/
        /*! exports provided: ChangepasswordComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function () { return ChangepasswordComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            // import { Observable, Observer } from 'rxjs';
            var ChangepasswordComponent = /** @class */ (function () {
                // import { Observable, Observer } from 'rxjs';
                function ChangepasswordComponent() {
                    var _this = this;
                    // userNameAsyncValidator = (control: FormControl) =>
                    //   new Observable((observer: Observer<ValidationErrors | null>) => {
                    //     setTimeout(() => {
                    //       if (control.value === 'JasonWood') {
                    //         // you have to return `{error: true}` to mark it as an error event
                    //         observer.next({ error: true, duplicated: true });
                    //       } else {
                    //         observer.next(null);
                    //       }
                    //       observer.complete();
                    //     }, 1000);
                    //   });
                    this.confirmValidator = function (control) {
                        if (!control.value) {
                            return { error: true, required: true };
                        }
                        else if (control.value !== _this.validateForm.controls.password.value) {
                            return { confirm: true, error: true };
                        }
                        return {};
                    };
                }
                ChangepasswordComponent.prototype.submitForm = function (value) {
                    for (var key in this.validateForm.controls) {
                        this.validateForm.controls[key].markAsDirty();
                        this.validateForm.controls[key].updateValueAndValidity();
                    }
                    console.log(value);
                };
                ChangepasswordComponent.prototype.resetForm = function (e) {
                    e.preventDefault();
                    this.validateForm.reset();
                    for (var key in this.validateForm.controls) {
                        this.validateForm.controls[key].markAsPristine();
                        this.validateForm.controls[key].updateValueAndValidity();
                    }
                };
                ChangepasswordComponent.prototype.validateConfirmPassword = function () {
                    var _this = this;
                    setTimeout(function () { return _this.validateForm.controls.confirm.updateValueAndValidity(); });
                };
                // constructor(private fb: FormBuilder) {
                //   this.validateForm = this.fb.group({
                //     userName: ['', [Validators.required], [this.userNameAsyncValidator]],
                //     email: ['', [Validators.email, Validators.required]],
                //     password: ['', [Validators.required]],
                //     confirm: ['', [this.confirmValidator]],
                //     comment: ['', [Validators.required]]
                //   });
                // }
                ChangepasswordComponent.prototype.ngOnInit = function () {
                };
                return ChangepasswordComponent;
            }());
            ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-changepassword',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./changepassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/changepassword/changepassword.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./changepassword.component.scss */ "./src/app/changepassword/changepassword.component.scss")).default]
                })
            ], ChangepasswordComponent);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/contact/contact.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".card {\n  background-color: rgba(0, 0, 0, 0.5);\n  margin: auto; }\n\n.bg {\n  background-position: center;\n  background-attachment: fixed; }\n\ninput[type=\"text\"], input[type=\"email\"], textarea {\n  width: 70%;\n  padding: 10px;\n  font-size: 16px;\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0);\n  font-weight: normal;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom: 5px solid #ffffff;\n  font-family: 'Muli', sans-serif;\n  margin-bottom: 30px;\n  outline: none;\n  letter-spacing: 1px; }\n\ninput[type=\"submit\"] {\n  width: 100%;\n  background-color: #171515;\n  font-size: 16px;\n  color: #fff;\n  border: none;\n  height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBaUM7RUFFakMsWUFBWSxFQUFBOztBQUVoQjtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgLy8gd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG4uYmd7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSAsaW5wdXRbdHlwZT1cImVtYWlsXCJdLCB0ZXh0YXJlYXtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmZmZmZjtcbiAgICBmb250LWZhbWlseTogJ011bGknLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNTE1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/core/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/core/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(afAuth, userService, router) {
                    this.afAuth = afAuth;
                    this.userService = userService;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.userService.getCurrentUser()
                            .then(function (user) {
                            _this.router.navigate(['/user']);
                            return resolve(false);
                        }, function (err) {
                            return resolve(true);
                        });
                    });
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _core_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/core/auth.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/core/auth.service.ts ***!
          \**************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
            /* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var AuthService = /** @class */ (function () {
                function AuthService(afAuth, afs) {
                    this.afAuth = afAuth;
                    this.afs = afs;
                }
                AuthService.prototype.doRegister = function (value) {
                    return new Promise(function (resolve, reject) {
                        firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                            .then(function (res) {
                            resolve(res);
                        }, function (err) { return reject(err); });
                    });
                };
                AuthService.prototype.doLogin = function (value) {
                    return new Promise(function (resolve, reject) {
                        firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                            .then(function (res) {
                            resolve(res);
                        }, function (err) { return reject(err); });
                    });
                };
                AuthService.prototype.doLogout = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser) {
                            _this.afAuth.auth.signOut();
                            resolve();
                        }
                        else {
                            reject();
                        }
                    });
                };
                AuthService.prototype.updateUserData = function (user) {
                    var userRef = this.afs.doc("users/" + user.uid);
                    var data = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    };
                    return userRef.set(data, { merge: true });
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/core/user.model.ts": 
        /*!************************************!*\
          !*** ./src/app/core/user.model.ts ***!
          \************************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                    this.uid = '';
                    this.email = '';
                    this.photoURL = '';
                    this.displayName = '';
                    this.provider = '';
                }
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/core/user.service.ts": 
        /*!**************************************!*\
          !*** ./src/app/core/user.service.ts ***!
          \**************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
            /* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
            var UserService = /** @class */ (function () {
                function UserService(db, afAuth, afs) {
                    this.db = db;
                    this.afAuth = afAuth;
                    this.afs = afs;
                }
                UserService.prototype.getCurrentUser = function () {
                    return new Promise(function (resolve, reject) {
                        var user = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().onAuthStateChanged(function (user) {
                            if (user) {
                                resolve(user);
                            }
                            else {
                                reject('No user logged in');
                            }
                        });
                    });
                };
                UserService.prototype.updateCurrentUser = function (user, value) {
                    console.log('---- update', value);
                    var userRef = this.afs.doc("users/" + user.uid);
                    var data = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        studentId: value.studentId,
                    };
                    return userRef.set(data, { merge: true });
                };
                UserService.prototype.getUserProfile = function (uid) {
                    return this.afs
                        .collection('users')
                        .doc(uid)
                        .ref.get()
                        .then(function (user) {
                        console.log('0--===', user);
                        if (user.exists) {
                            console.log('=--- user', user.data());
                            return user.data();
                        }
                        return null;
                    })
                        .catch(function (error) {
                        console.log('Error getting document:', error);
                        return null;
                    });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/exam/exam.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/exam/exam.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/* Hide the browser's default radio button */\n\n.container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer; }\n\n/* Create a custom radio button */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n  border-radius: 50%; }\n\n/* On mouse-over, add a grey background color */\n\n.container:hover input ~ .checkmark {\n  background-color: #ccc; }\n\n/* When the radio button is checked, add a blue background */\n\n.container input:checked ~ .checkmark {\n  background-color: #2196F3; }\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none; }\n\n/* Show the indicator (dot/circle) when checked */\n\n.container input:checked ~ .checkmark:after {\n  display: block; }\n\n/* Style the indicator (dot/circle) */\n\n.container .checkmark:after {\n  top: 9px;\n  left: 9px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: white; }\n\n.ex {\n  min-height: 80vh; }\n\n.card-body {\n  padding: 1px 0px 0px 0px;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFHbkIsNENBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakIsaUNBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEIsK0NBQUE7O0FBQ0E7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEIsNERBQUE7O0FBQ0E7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0Isb0VBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZixpREFBQTs7QUFDQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEIscUNBQUE7O0FBQ0E7RUFDSyxRQUFRO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNFLHdCQUF3QjtFQUN4QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9leGFtL2V4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cbiAgLmNvbnRhaW5lciBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4gIC5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuICBcbiAgLyogV2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbiAgLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLyogU2hvdyB0aGUgaW5kaWNhdG9yIChkb3QvY2lyY2xlKSB3aGVuIGNoZWNrZWQgKi9cbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgdG9wOiA5cHg7XG4gICAgICBsZWZ0OiA5cHg7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAuZXh7XG4gICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICB9XG4gIC5jYXJkLWJvZHl7XG4gICAgcGFkZGluZzogMXB4IDBweCAwcHggMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/exam/exam.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/exam/exam.component.ts ***!
          \****************************************/
        /*! exports provided: ExamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function () { return ExamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var ExamComponent = /** @class */ (function () {
                function ExamComponent(http) {
                    this.http = http;
                    this.h = 1;
                    this.m = 30;
                    this.s = 60;
                    this.timeout = null;
                    this.config = {
                        itemsPerPage: 3,
                        currentPage: 1,
                    };
                }
                ExamComponent.prototype.start = function () {
                    var _this = this;
                    if (this.s === -1) {
                        this.m -= 1;
                        this.s = 59;
                    }
                    if (this.m === -1) {
                        this.h -= 1;
                        this.m = 59;
                    }
                    if (this.h == -1) {
                        clearTimeout(this.timeout);
                        alert('Het gio');
                        return false;
                    }
                    document.getElementById('h').innerText = this.h.toString();
                    document.getElementById('m').innerText = this.m.toString();
                    document.getElementById('s').innerText = this.s.toString();
                    this.timeout = setTimeout(function () {
                        _this.s--;
                        _this.start();
                    }, 1000);
                    this.isEdit = true;
                    console.log('start');
                };
                ExamComponent.prototype.stop = function () {
                    clearTimeout(this.timeout);
                    this.isEdit = false;
                    console.log('Stop');
                };
                ExamComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.isEdit = false;
                    this.getData().subscribe(function (data) {
                        _this.list = data;
                        console.log(data);
                    });
                };
                ExamComponent.prototype.getData = function () {
                    return this.http.get('../../assets/ADAV.js');
                };
                ExamComponent.prototype.pageChanged = function (event) {
                    this.config.currentPage = event;
                };
                return ExamComponent;
            }());
            ExamComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-exam',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/exam/exam.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exam.component.scss */ "./src/app/exam/exam.component.scss")).default]
                })
            ], ExamComponent);
            /***/ 
        }),
        /***/ "./src/app/feedback/feedback.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/feedback/feedback.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".ans {\n  color: #e6cfcf;\n  font-size: 1.2em; }\n\n.ques > h2 {\n  font-size: 1.1em;\n  color: #1ec8e9; }\n\n.chose {\n  list-style: none; }\n\n.chose > li > label {\n  display: inline-block;\n  margin-left: 20px;\n  color: #e6cfcf;\n  font-size: 1em; }\n\n.card {\n  margin: auto; }\n\ntextarea {\n  background-color: rgba(16, 16, 16, 0.47);\n  height: 7em;\n  border: 1px solid  #696867;\n  color: #fff; }\n\n.add > input {\n  background-color: rgba(16, 16, 16, 0.47);\n  border: 1px solid  #696867;\n  border-radius: 5px; }\n\n.name {\n  width: 42%;\n  margin-right: 10px;\n  height: 40px; }\n\n.email {\n  width: 43%;\n  height: 40px; }\n\n.submit {\n  background-color: rgba(16, 16, 16, 0.47);\n  border: 1px solid  #696867;\n  width: 30%;\n  border-radius: 5px;\n  color: #fff;\n  height: 40px;\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxnQkFDSixFQUFBOztBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUNKLEVBQUE7O0FBQ0E7RUFFSSxZQUNKLEVBQUE7O0FBQ0E7RUFDQSx3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixXQUVBLEVBQUE7O0FBQ0E7RUFDQSx3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLGtCQUFrQixFQUFBOztBQUVsQjtFQUNBLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUVaO0VBQ0ksVUFBVTtFQUNkLFlBQVksRUFBQTs7QUFFWjtFQUNJLHdDQUF3QztFQUM1QywwQkFBMEI7RUFDMUIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQ0EsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuc3tcbiAgICBjb2xvcjogI2U2Y2ZjZjtcbiAgICBmb250LXNpemU6IDEuMmVtXG59XG4ucXVlcyA+aDJ7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogIzFlYzhlOTtcbn1cbi5jaG9zZXtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG59XG4uY2hvc2UgPiBsaSA+bGFiZWx7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjZTZjZmNmO1xuICAgIGZvbnQtc2l6ZTogMWVtXG59XG4uY2FyZHtcbiAgICAvLyBtYXgtd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IGF1dG9cbn1cbnRleHRhcmVhe1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjQ3KTtcbmhlaWdodDogN2VtO1xuYm9yZGVyOiAxcHggc29saWQgICM2OTY4Njc7XG5jb2xvcjogI2ZmZlxuXG59XG4uYWRkID5pbnB1dHtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDE2LCAxNiwgMC40Nyk7XG5ib3JkZXI6IDFweCBzb2xpZCAgIzY5Njg2NztcbmJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5uYW1le1xud2lkdGg6IDQyJTtcbm1hcmdpbi1yaWdodDogMTBweDtcbmhlaWdodDogNDBweDtcbn1cbi5lbWFpbHtcbiAgICB3aWR0aDogNDMlO1xuaGVpZ2h0OiA0MHB4O1xufVxuLnN1Ym1pdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCAxNiwgMTYsIDAuNDcpO1xuYm9yZGVyOiAxcHggc29saWQgICM2OTY4Njc7XG53aWR0aDogMzAlO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuY29sb3I6ICNmZmY7XG5oZWlnaHQ6IDQwcHg7XG5tYXJnaW46IDEwcHhcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/feedback/feedback.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/feedback/feedback.component.ts ***!
          \************************************************/
        /*! exports provided: FeedbackComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () { return FeedbackComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FeedbackComponent = /** @class */ (function () {
                function FeedbackComponent() {
                }
                FeedbackComponent.prototype.ngOnInit = function () {
                };
                return FeedbackComponent;
            }());
            FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feedback',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/feedback/feedback.component.scss")).default]
                })
            ], FeedbackComponent);
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/footer/footer.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".info {\n  color: gray;\n  margin: 30px  0px 16px; }\n\n.wrapper {\n  width: 240px; }\n\nbutton {\n  margin-bottom: 12px; }\n\n.fa {\n  padding: 10px; }\n\n.nav-link-icon :hover {\n  color: #ffffff; }\n\n.nav-link-icon {\n  color: gray;\n  font-size: 18px;\n  margin-right: 10px; }\n\n.nav-link-icon > i {\n  margin-right: 6px; }\n\n.nav-link-inner--text {\n  font-size: 15px; }\n\n.bg-dark {\n  font-family: 'Open Sans', Arial, serif; }\n\n.nav-link {\n  font-size: 18px;\n  color: #b40606 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxXQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUNGLEVBQUE7O0FBQ0E7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUNGLEVBQUE7O0FBSUE7RUFDSSxzQ0FBc0MsRUFBQTs7QUFFMUM7RUFDSSxlQUFlO0VBQ2xCLHlCQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZve1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbjogMzBweCAgMHB4IDE2cHg7XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuICAuZmF7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubmF2LWxpbmstaWNvbiA6aG92ZXJ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLm5hdi1saW5rLWljb257XG4gICAgY29sb3I6Z3JheTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4XG4gIH1cbiAgLm5hdi1saW5rLWljb24+IGl7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgLm5hdi1saW5rLWlubmVyLS10ZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHhcbiAgfVxuIC8vICAubmF2YmFyLW5hdntcbiAvLyAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuIC8vICB9XG4gIC5iZy1kYXJre1xuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBBcmlhbCwgc2VyaWY7XG4gIH1cbiAgLm5hdi1saW5re1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgY29sb3I6IHJnYigxODAsIDYsIDYpICFpbXBvcnRhbnRcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/footer/footer.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/footer/footer.component.ts ***!
          \********************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'tp-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/index/index.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/index/index.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".font {\n  font-family: 'Open Sans', Arial, serif; }\n\n.bg {\n  height: 100vh; }\n\n.lg {\n  font-weight: bold;\n  color: #b40606;\n  background-attachment: fixed; }\n\n.carousel-item > img {\n  height: 70vh; }\n\n.card > p > img {\n  width: 62px;\n  height: 62px; }\n\n.card > p {\n  margin-top: 12px; }\n\n.card-body > ul > li {\n  text-align: justify; }\n\n.card {\n  height: 422px; }\n\n.roll {\n  background-color: yellow;\n  height: 50px;\n  width: 50px;\n  float: right; }\n\n.caption {\n  padding-top: 200px; }\n\n.ipsearch {\n  width: 50%;\n  border-radius: 5px;\n  border: 1px solid #c7c5c5;\n  height: 50px; }\n\n.btnsearch {\n  background-color: #b40606;\n  color: #ffffff; }\n\n.btnselect > span {\n  float: left; }\n\n.btnselect {\n  height: 40px; }\n\n.title {\n  color: #b40606;\n  margin-top: 10px; }\n\n.card {\n  border: 2px solid #b40606;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUNKLEVBQUE7O0FBQ0E7RUFFSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVztFQUNmLFlBQVksRUFBQTs7QUFHWjtFQUNJLGdCQUNKLEVBQUE7O0FBQ0E7RUFDSSxtQkFDSixFQUFBOztBQUNBO0VBQ0ksYUFBYSxFQUFBOztBQUVqQjtFQUNJLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQ0osRUFBQTs7QUFDQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNBLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJBQW9DO0VBQ3BDLFlBQVksRUFBQTs7QUFFWjtFQUNJLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0EsWUFBWSxFQUFBOztBQUVaO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250e1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIHNlcmlmXG59XG4uYmd7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKCcgJyluby1yZXBlYXQgY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4ubGd7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNiNDA2MDY7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5jYXJvdXNlbC1pdGVtID4gaW1ne1xuICAgIGhlaWdodDogNzB2aDtcbn1cbi5jYXJkID5wPmltZ3tcbiAgICB3aWR0aDogNjJweDtcbmhlaWdodDogNjJweDtcblxufVxuLmNhcmQgPnB7XG4gICAgbWFyZ2luLXRvcDogMTJweFxufVxuLmNhcmQtYm9keSA+IHVsID5saSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeVxufVxuLmNhcmR7XG4gICAgaGVpZ2h0OiA0MjJweDtcbn1cbi5yb2xse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0XG59XG4uY2FwdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG4uaXBzZWFyY2h7XG53aWR0aDogNTAlO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuYm9yZGVyOiAxcHggc29saWQgcmdiKDE5OSwgMTk3LCAxOTcpIDtcbmhlaWdodDogNTBweDtcbn1cbi5idG5zZWFyY2h7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0MDYwNjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bnNlbGVjdCA+IHNwYW57XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4uYnRuc2VsZWN0e1xuaGVpZ2h0OiA0MHB4O1xufVxuLnRpdGxle1xuICAgIGNvbG9yOiAjYjQwNjA2O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjQwNjA2O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/index/index.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/index/index.component.ts ***!
          \******************************************/
        /*! exports provided: IndexComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function () { return IndexComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var IndexComponent = /** @class */ (function () {
                function IndexComponent(http) {
                    this.http = http;
                }
                IndexComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    function back() {
                        window.scrollTo(500, 0);
                    }
                    this.getData().subscribe(function (data) {
                        _this.list = data;
                        console.log(_this.list);
                    });
                };
                IndexComponent.prototype.getData = function () {
                    return this.http.get('../../assets/Subjects.js');
                };
                return IndexComponent;
            }());
            IndexComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-index',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")).default]
                })
            ], IndexComponent);
            /***/ 
        }),
        /***/ "./src/app/introduce/introduce.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/introduce/introduce.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bg {\n  background: url(\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/ban6666.jpg\") no-repeat -194px 0px;\n  background-position: center;\n  background-attachment: fixed;\n  background-size: cover; }\n\n.bg2 {\n  background: url(\"https://demo.w3layouts.com/demos_new/template_demo/20-10-2017/c_resume-demo_Free/760142481/web/images/dott.png\"); }\n\n.add {\n  padding-bottom: 100px; }\n\n.pd {\n  padding-top: 9em; }\n\n.info {\n  display: -webkit-box;\n  display: flex;\n  list-style: none;\n  padding: 0; }\n\n.info > li {\n  width: 30%; }\n\n.info > li > span {\n  color: #d9edf7; }\n\n.info2 {\n  margin-right: 15px;\n  list-style: none;\n  color: #ffffff; }\n\n.info3 > ul {\n  margin-bottom: 10px; }\n\n.unline {\n  border-top: 2px dotted #00bcd4; }\n\n.unline > li {\n  margin-top: 20px; }\n\n.card1 {\n  border: 5px solid rgba(238, 238, 238, 0.53);\n  width: 300px;\n  height: 300px;\n  margin: 0 auto; }\n\n.avt > img {\n  width: 133px;\n  height: 133px;\n  border-radius: 50%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 16px; }\n\n.card1 > h3 {\n  text-align: center;\n  color: #ffffff; }\n\n.card1 > p {\n  text-align: center;\n  color: #ffc53e; }\n\n.about {\n  border: 2px solid #ffb900;\n  display: -webkit-box;\n  display: flex; }\n\n.about1 {\n  margin: auto;\n  width: 30,333%; }\n\n.about1 > h3 {\n  color: #fdac14;\n  font-family: 'Yanone Kaffeesatz', sans-serif;\n  letter-spacing: 2px;\n  font-size: 2em;\n  margin-top: 6px; }\n\n.about1 > h5 {\n  color: #00bcd4;\n  text-transform: capitalize;\n  letter-spacing: 2px;\n  font-family: 'Yanone Kaffeesatz', sans-serif;\n  font-size: 1.3em; }\n\nh3 {\n  font-family: 'Yanone Kaffeesatz', sans-serif;\n  letter-spacing: 2px; }\n\n.lg1 > h3 {\n  color: #fdac14;\n  font-size: 1.3em;\n  text-transform: uppercase;\n  margin: 20px 0px; }\n\n.lg1 > p {\n  font-size: 1em;\n  color: #999;\n  margin: 1em 0;\n  margin: 16px 0px; }\n\n.btn {\n  background-color: #f9a300;\n  color: #ffffff; }\n\n.container1 {\n  position: relative;\n  width: 50%; }\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay1 {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container1:hover .overlay1 {\n  bottom: 0;\n  height: 100%; }\n\n.text1 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.container2 {\n  position: relative;\n  width: 50%; }\n\n.image2 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay2 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 0;\n  height: 100%;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container2:hover .overlay2 {\n  width: 100%; }\n\n.text2 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.container3 {\n  position: relative;\n  width: 50%; }\n\n.image3 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay3 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container3:hover .overlay3 {\n  height: 100%; }\n\n.text3 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.container4 {\n  position: relative;\n  width: 50%; }\n\n.image4 {\n  display: block;\n  width: 100%;\n  height: auto; }\n\n.overlay4 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(16, 16, 16, 0.47);\n  overflow: hidden;\n  width: 100%;\n  height: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease; }\n\n.container4:hover .overlay4 {\n  height: 100%; }\n\n.text4 {\n  white-space: nowrap;\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.dt {\n  margin: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9pbnRyb2R1Y2UvaW50cm9kdWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUpBQXlKO0VBQ3pKLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFFNUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUlBQWlJLEVBQUE7O0FBR3JJO0VBQ0kscUJBQ0osRUFBQTs7QUFDQTtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixVQUNKLEVBQUE7O0FBQ0E7RUFDSSxVQUNKLEVBQUE7O0FBQ0E7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUNKLEVBQUE7O0FBQ0E7RUFDSSxtQkFDSixFQUFBOztBQUNBO0VBQ0ksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksZ0JBQ0osRUFBQTs7QUFDQTtFQUNJLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osYUFBYTtFQUViLGNBQ0osRUFBQTs7QUFDQTtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLGNBQWM7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFDQSxFQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLHlCQUF5QjtFQUN6QixvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBRVosY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWM7RUFDZCw0Q0FBNEM7RUFDNUMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUNKLEVBQUE7O0FBQ0E7RUFDSSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQiw0Q0FBNEM7RUFDNUMsZ0JBQ0osRUFBQTs7QUFDQTtFQUNJLDRDQUE0QztFQUM1QyxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFDSixFQUFBOztBQUNBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQ0osRUFBQTs7QUFDQTtFQUNJLHlCQUF5QjtFQUN6QixjQUNKLEVBQUE7O0FBQ0E7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1Isd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUTtFQUNSLDRCQUFvQjtFQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DLEVBQUE7O0FBRXRDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFNBQVM7RUFDVCw0QkFBb0I7RUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DLEVBQUE7O0FBRXRDO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFNBQVM7RUFDVCw0QkFBb0I7RUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DLEVBQUE7O0FBRXRDO0VBQ0ksV0FDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW50cm9kdWNlL2ludHJvZHVjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZGVtby53M2xheW91dHMuY29tL2RlbW9zX25ldy90ZW1wbGF0ZV9kZW1vLzIwLTEwLTIwMTcvY19yZXN1bWUtZGVtb19GcmVlLzc2MDE0MjQ4MS93ZWIvaW1hZ2VzL2JhbjY2NjYuanBnJykgbm8tcmVwZWF0IC0xOTRweCAwcHg7O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIC8vIGhlaWdodDogNzB2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG59XG4uYmcye1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9kZW1vLnczbGF5b3V0cy5jb20vZGVtb3NfbmV3L3RlbXBsYXRlX2RlbW8vMjAtMTAtMjAxNy9jX3Jlc3VtZS1kZW1vX0ZyZWUvNzYwMTQyNDgxL3dlYi9pbWFnZXMvZG90dC5wbmcnKVxuXG59XG4uYWRke1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweFxufVxuLnBke1xuICAgIHBhZGRpbmctdG9wOiA5ZW07XG59XG4uaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBcbn1cbi5pbmZvID5saXtcbiAgICB3aWR0aDogMzAlXG59XG4uaW5mbyA+IGxpID5zcGFue1xuICAgIGNvbG9yOiAjZDllZGY3O1xufVxuLmluZm8ye1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiAjZmZmZmZmXG59XG4uaW5mbzMgPnVse1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbn1cbi51bmxpbmV7XG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdHRlZCAjMDBiY2Q0O1xufVxuLnVubGluZSA+bGl7XG4gICAgbWFyZ2luLXRvcDogMjBweFxufVxuLmNhcmQxe1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjM4LCAyMzgsIDIzOCwgMC41Myk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgLy8gcGFkZGluZzogNjNweDtcbiAgICBtYXJnaW46IDAgYXV0byBcbn1cbi5hdnQgPmltZ3tcbiAgICB3aWR0aDogMTMzcHg7XG4gICAgaGVpZ2h0OiAxMzNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG5tYXJnaW4tbGVmdDogYXV0bztcbm1hcmdpbi1yaWdodDogYXV0bztcbm1hcmdpbi10b3A6IDE2cHhcbn1cbi5jYXJkMT5oM3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZDEgPiBwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmYzUzZTtcbn1cbi5hYm91dHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZiOTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uYWJvdXQxe1xuICAgIG1hcmdpbjogYXV0bztcblxuICAgIHdpZHRoOiAzMCwzMzMlO1xufVxuLmFib3V0MSA+aDN7XG4gICAgY29sb3I6ICNmZGFjMTQ7XG4gICAgZm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiA2cHhcbn1cbi5hYm91dDEgPmg1e1xuICAgIGNvbG9yOiAjMDBiY2Q0O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjNlbVxufVxuaDN7XG4gICAgZm9udC1mYW1pbHk6ICdZYW5vbmUgS2FmZmVlc2F0eicsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5sZzEgPmgze1xuICAgIGNvbG9yOiAjZmRhYzE0O1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDIwcHggMHB4XG59XG4ubGcxID5we1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgbWFyZ2luOiAxNnB4IDBweFxufVxuLmJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhMzAwO1xuICAgIGNvbG9yOiAjZmZmZmZmXG59XG4uY29udGFpbmVyMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5pbWFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAub3ZlcmxheTEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2LCAxNiwgMTYsIDAuNDcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIH1cbiAgXG4gIC5jb250YWluZXIxOmhvdmVyIC5vdmVybGF5MSB7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLnRleHQxIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbi8vICAgc2xpZGUyXG4uY29udGFpbmVyMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5pbWFnZTIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLm92ZXJsYXkyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjQ3KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcjI6aG92ZXIgLm92ZXJsYXkyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnRleHQyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgLmNvbnRhaW5lcjMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAuaW1hZ2UzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5vdmVybGF5MyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDE2LCAxNiwgMC40Nyk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIH1cbiAgXG4gIC5jb250YWluZXIzOmhvdmVyIC5vdmVybGF5MyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAudGV4dDMge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICAuY29udGFpbmVyNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIC5pbWFnZTQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLm92ZXJsYXk0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNiwgMTYsIDE2LCAwLjQ3KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lcjQ6aG92ZXIgLm92ZXJsYXk0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC50ZXh0NCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC5kdHtcbiAgICAgIG1hcmdpbjogNnB4XG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/introduce/introduce.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/introduce/introduce.component.ts ***!
          \**************************************************/
        /*! exports provided: IntroduceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceComponent", function () { return IntroduceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var IntroduceComponent = /** @class */ (function () {
                function IntroduceComponent() {
                }
                IntroduceComponent.prototype.ngOnInit = function () {
                };
                return IntroduceComponent;
            }());
            IntroduceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-introduce',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./introduce.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/introduce/introduce.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./introduce.component.scss */ "./src/app/introduce/introduce.component.scss")).default]
                })
            ], IntroduceComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.scss": 
        /*!********************************************!*\
          !*** ./src/app/login/login.component.scss ***!
          \********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".login-form {\n  max-width: 300px; }\n\n.login-form-forgot {\n  float: right; }\n\n.login-form-button {\n  width: 100%; }\n\n.img {\n  max-width: 100%;\n  position: relative;\n  margin: auto; }\n\n.bg {\n  background-repeat: no-repeat;\n  height: 800px; }\n\n.lg {\n  font-weight: bold;\n  font-size: 43px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQTs7QUFFZjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFDRixFQUFBOztBQUlBO0VBQ0UsNEJBQTRCO0VBQzlCLGFBQWEsRUFBQTs7QUFHYjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cblxuICAubG9naW4tZm9ybS1mb3Jnb3Qge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbi5pbWd7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG9cbn1cbi8vIC5jYXJke1xuLy8gICB3aWR0aDogMzU2cHhcbi8vIH1cbi5iZyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5oZWlnaHQ6IDgwMHB4O1xuXG59XG4ubGd7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2Vcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(fb, authService, router) {
                    this.fb = fb;
                    this.authService = authService;
                    this.router = router;
                    this.errorMessage = '';
                    this.createForm();
                }
                LoginComponent.prototype.submitForm = function () {
                    for (var i in this.validateForm.controls) {
                        this.validateForm.controls[i].markAsDirty();
                        this.validateForm.controls[i].updateValueAndValidity();
                    }
                };
                LoginComponent.prototype.createForm = function () {
                    this.validateForm = this.fb.group({
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                    });
                };
                LoginComponent.prototype.tryLogin = function (value) {
                    var _this = this;
                    this.authService.doLogin(value).then(function (res) {
                        _this.router.navigate(['/user']);
                    }, function (err) {
                        console.log(err, 'loi dang nhap');
                        _this.errorMessage = err.message;
                    });
                };
                LoginComponent.prototype.ngOnInit = function () {
                    this.validateForm = this.fb.group({
                        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        remember: [true]
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/navigation/navigation.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-item {\n  margin: 0px 15px; }\n\n.lg > a {\n  color: #b40606 !important; }\n\n.nav-link-icon {\n  color: gray;\n  font-size: 18px;\n  margin-right: 10px; }\n\n.nav-link-icon > i {\n  margin-right: 6px; }\n\n.nav-link-inner--text {\n  font-size: 15px; }\n\n.bg-dark {\n  font-family: 'Open Sans', Arial, serif; }\n\n.nav-link {\n  font-size: 18px;\n  color: #b40606 !important; }\n\n.fa {\n  padding: 10px; }\n\n.nav-link-icon :hover {\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBaUIsRUFBQTs7QUFHakI7RUFFRSx5QkFBZ0MsRUFBQTs7QUFHakM7RUFDRSxXQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUNGLEVBQUE7O0FBQ0E7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxlQUNGLEVBQUE7O0FBSUE7RUFDSSxzQ0FBc0MsRUFBQTs7QUFFMUM7RUFDSSxlQUFlO0VBQ2xCLHlCQUFnQyxFQUFBOztBQUVqQztFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbXtcbiAgICBtYXJnaW46IDBweCAxNXB4IDtcbiAgICB9XG4gICAgXG4gICAgLmxnID4gYXtcbiAgICAgICAgLy8gIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgY29sb3I6IHJnYigxODAsIDYsIDYpICFpbXBvcnRhbnRcbiAgICBcbiAgICB9XG4gICAgIC5uYXYtbGluay1pY29ue1xuICAgICAgIGNvbG9yOmdyYXk7XG4gICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuICAgICB9XG4gICAgIC5uYXYtbGluay1pY29uPiBpe1xuICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICB9XG4gICAgIC5uYXYtbGluay1pbm5lci0tdGV4dCB7XG4gICAgICAgZm9udC1zaXplOiAxNXB4XG4gICAgIH1cbiAgICAvLyAgLm5hdmJhci1uYXZ7XG4gICAgLy8gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyAgfVxuICAgICAuYmctZGFya3tcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgQXJpYWwsIHNlcmlmO1xuICAgICB9XG4gICAgIC5uYXYtbGlua3tcbiAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiByZ2IoMTgwLCA2LCA2KSAhaW1wb3J0YW50XG4gICAgIH1cbiAgICAgLmZhe1xuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgIH1cbiAgICAgLm5hdi1saW5rLWljb24gOmhvdmVye1xuICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/navigation/navigation.component.ts ***!
          \****************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent() {
                }
                NavigationComponent.prototype.ngOnInit = function () {
                };
                return NavigationComponent;
            }());
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/signin/signin.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/signin/signin.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("[nz-form] {\n  max-width: 600px; }\n\n.ant-form-item-label {\n  text-align: left; }\n\n.phone-select {\n  width: 70px; }\n\n.register-are {\n  margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0ksZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1mb3JtXSB7XG4gIG1heC13aWR0aDogNjAwcHg7IH1cblxuLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5waG9uZS1zZWxlY3Qge1xuICB3aWR0aDogNzBweDsgfVxuXG4ucmVnaXN0ZXItYXJlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG4iLCJbbnotZm9ybV0ge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbiAgLmFudC1mb3JtLWl0ZW0tbGFiZWx7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxuICB9XG5cbiAgLnBob25lLXNlbGVjdCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxuICAucmVnaXN0ZXItYXJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/signin/signin.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signin/signin.component.ts ***!
          \********************************************/
        /*! exports provided: SigninComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function () { return SigninComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SigninComponent = /** @class */ (function () {
                function SigninComponent(fb, router, authService) {
                    var _this = this;
                    this.fb = fb;
                    this.router = router;
                    this.authService = authService;
                    this.errorMessage = '';
                    this.successMessage = '';
                    this.confirmationValidator = function (control) {
                        if (!control.value) {
                            return { required: true };
                        }
                        else if (control.value !== _this.validateForm.controls.password.value) {
                            return { confirm: true, error: true };
                        }
                        return {};
                    };
                    this.createFrom();
                }
                SigninComponent.prototype.submitForm = function () {
                    for (var i in this.validateForm.controls) {
                        this.validateForm.controls[i].markAsDirty();
                        this.validateForm.controls[i].updateValueAndValidity();
                    }
                };
                SigninComponent.prototype.updateConfirmValidator = function () {
                    var _this = this;
                    /** wait for refresh value */
                    Promise.resolve().then(function () { return _this.validateForm.controls.checkPassword.updateValueAndValidity(); });
                };
                SigninComponent.prototype.getCaptcha = function (e) {
                    e.preventDefault();
                };
                SigninComponent.prototype.createFrom = function () {
                    this.validateForm = this.fb.group({
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                    });
                };
                SigninComponent.prototype.tryRegister = function (value) {
                    var _this = this;
                    this.authService.doRegister(value)
                        .then(function (res) {
                        console.log(res);
                        _this.errorMessage = "";
                        _this.successMessage = "Your account has been created";
                    }, function (err) {
                        console.log(err);
                        _this.errorMessage = err.message;
                        _this.successMessage = "";
                    });
                };
                SigninComponent.prototype.ngOnInit = function () {
                    this.validateForm = this.fb.group({
                        email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        checkPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.confirmationValidator]],
                        nickname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        phoneNumberPrefix: ['+86'],
                        phoneNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        website: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        captcha: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                        agree: [false]
                    });
                };
                return SigninComponent;
            }());
            SigninComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.scss */ "./src/app/signin/signin.component.scss")).default]
                })
            ], SigninComponent);
            /***/ 
        }),
        /***/ "./src/app/user/user.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/user/user.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header {\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px; }\n\n.row {\n  margin-top: 10px; }\n\n.image {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW50aGFuaHR1bmcvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvc3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQ0YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIFxuICAucm93e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgXG4gIC5pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCVcbiAgfVxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/user/user.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/user/user.component.ts ***!
          \****************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
            /* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/auth.service */ "./src/app/core/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");
            var UserComponent = /** @class */ (function () {
                function UserComponent(userService, authService, route, location, fb) {
                    this.userService = userService;
                    this.authService = authService;
                    this.route = route;
                    this.location = location;
                    this.fb = fb;
                    this.user = new _core_user_model__WEBPACK_IMPORTED_MODULE_7__["User"]();
                    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
                    });
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.data.subscribe(function (routeData) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var data, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    data = routeData['data'];
                                    if (!data) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, this.userService.getUserProfile(data.uid)];
                                case 1:
                                    _a.user = _b.sent();
                                    _b.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); });
                };
                UserComponent.prototype.createForm = function () {
                    this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                        studentId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
                    });
                };
                UserComponent.prototype.save = function (value) {
                    this.userService.updateCurrentUser(this.user, value)
                        .then(function (res) {
                        console.log(res, 'thanh cong');
                    }, function (err) { return console.log(err, 'loi'); });
                };
                UserComponent.prototype.logout = function () {
                    var _this = this;
                    this.authService.doLogout()
                        .then(function (res) {
                        _this.location.back();
                    }, function (error) {
                        console.log("Logout error", error);
                    });
                };
                return UserComponent;
            }());
            UserComponent.ctorParameters = function () { return [
                { type: _core_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
            ]; };
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'page-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/user/user.resolver.ts": 
        /*!***************************************!*\
          !*** ./src/app/user/user.resolver.ts ***!
          \***************************************/
        /*! exports provided: UserResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function () { return UserResolver; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _core_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/user.service */ "./src/app/core/user.service.ts");
            /* harmony import */ var _core_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/user.model */ "./src/app/core/user.model.ts");
            var UserResolver = /** @class */ (function () {
                function UserResolver(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                UserResolver.prototype.resolve = function (route) {
                    var _this = this;
                    var user = new _core_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
                    return new Promise(function (resolve, reject) {
                        _this.userService.getCurrentUser().then(function (res) {
                            console.log('user resolve', res);
                            if (res.providerData[0].providerId == 'password') {
                                user.photoURL = 'https://via.placeholder.com/400x300';
                                user.displayName = res.displayName;
                                user.provider = res.providerData[0].providerId;
                                user.uid = res.uid;
                                user.email = res.email;
                                return resolve(user);
                            }
                            else {
                                user.photoURL = res.photoURL;
                                user.displayName = res.displayName;
                                user.provider = res.providerData[0].providerId;
                                user.uid = res.uid;
                                user.email = res.email;
                                return resolve(user);
                            }
                        }, function (err) {
                            _this.router.navigate(['/login']);
                            return reject(err);
                        });
                    });
                };
                return UserResolver;
            }());
            UserResolver.ctorParameters = function () { return [
                { type: _core_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UserResolver);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: 'AIzaSyAzFnJtyxVFUrTJ6pKfUATjzQ6gJuZUpIY',
                    authDomain: 'assignment-2e965.firebaseapp.com',
                    databaseURL: 'https://assignment-2e965.firebaseio.com',
                    projectId: 'assignment-2e965',
                    storageBucket: 'assignment-2e965.appspot.com',
                    messagingSenderId: 'G-NVP4NELJQ3'
                }
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/nguyenthanhtung/Documents/assignment/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map