/********************************
*
* This file just for record 
*
********************************/

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var checkbox_1 = require("./components/checkbox");
var dimmer_1 = require("./components/dimmer");
var dropdown_1 = require("./components/dropdown");
var loader_1 = require("./components/loader");
var modal_1 = require("./components/modal");
var progress_1 = require("./components/progress");
var rating_1 = require("./components/rating");
var tab_1 = require("./components/tab");
var accordion_1 = require("./components/accordion");
var popup_1 = require("./components/popup");
var pagination_1 = require("./components/pagination");
var tags_input_1 = require("./components/tags-input");
__export(require("./components/checkbox"));
__export(require("./components/dimmer"));
__export(require("./components/dropdown"));
__export(require("./components/loader"));
__export(require("./components/modal"));
__export(require("./components/progress"));
__export(require("./components/rating"));
__export(require("./components/tab"));
__export(require("./components/accordion"));
__export(require("./components/popup"));
__export(require("./components/pagination"));
__export(require("./components/tags-input"));
exports.SEMANTIC_UI_COMPONENTS = accordion_1.ACCORDION_DIRECTIVES.concat(checkbox_1.CHECKBOX_DIRECTIVES, dimmer_1.DIMMER_DIRECTIVES, dropdown_1.DROPDOWN_DIRECTIVES, loader_1.LOADER_DIRECTIVES, modal_1.MODAL_DIRECTIVES, progress_1.PROGRESS_DIRECTIVES, rating_1.RATING_DIRECTIVES, tab_1.TAB_DIRECTIVES, popup_1.POPUP_DIRECTIVES, pagination_1.PAGINATION_DIRECTIVES, tags_input_1.TAGS_INPUT_DIRECTIVES);

// Not working in angular cli
// var L_SEMANTIC_UI_MODULE = (function () {
//     function L_SEMANTIC_UI_MODULE() {
//     }
//     return L_SEMANTIC_UI_MODULE;
// }());
// L_SEMANTIC_UI_MODULE = __decorate([
//     core_1.NgModule({
//         imports: [
//             forms_1.FormsModule,
//             forms_1.ReactiveFormsModule,
//             common_1.CommonModule,
//             animations_1.BrowserAnimationsModule
//         ],
//         declarations: exports.SEMANTIC_UI_COMPONENTS.slice(),
//         exports: exports.SEMANTIC_UI_COMPONENTS.slice()
//     })
// ], L_SEMANTIC_UI_MODULE);

// Working fined in angular cli
var L_SEMANTIC_UI_MODULE = (function () {
    function L_SEMANTIC_UI_MODULE() {
    }
    L_SEMANTIC_UI_MODULE.decorators = [
        {
            type: core_1.NgModule,
            args: [{
                imports: [
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    common_1.CommonModule,
                    animations_1.BrowserAnimationsModule
                ],
                declarations: exports.SEMANTIC_UI_COMPONENTS.slice(),
                exports: exports.SEMANTIC_UI_COMPONENTS.slice()
            }]
        }
    ]
    L_SEMANTIC_UI_MODULE.ctorParameters = function () { return []; };
    return L_SEMANTIC_UI_MODULE;
}());
exports.L_SEMANTIC_UI_MODULE = L_SEMANTIC_UI_MODULE;
