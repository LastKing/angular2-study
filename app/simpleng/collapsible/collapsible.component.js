"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Rain on 2016/10/20.
 */
var core_1 = require('@angular/core');
var Collapsible_Template = "\n  <ul class=\"collapsible\" data-collapsible=\"accordion\">\n    <li (click)=\"extend()\">\n      <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>First</div>\n      <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n    </li>\n    <li>\n      <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Second</div>\n      <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n    </li>\n    <li>\n      <div class=\"collapsible-header\"><i class=\"material-icons\">whatshot</i>Third</div>\n      <div class=\"collapsible-body\"><p>Lorem ipsum dolor sit amet.</p></div>\n    </li>\n  </ul>";
var CollapsibleComponent = (function () {
    function CollapsibleComponent(_el, _renderer) {
        this.isExpanded = true;
        this._el = _el;
        console.log(_el);
        this._renderer = _renderer;
        console.log(_renderer);
    }
    CollapsibleComponent.prototype.ngOnInit = function () {
        this.isExpanded = true;
        // this._renderer.setElementClass(this._el.nativeElement.querySelectorAll('.collapsible-header'), 'active',false);
        this._renderer.setElementStyle(this._el.nativeElement, 'height', 'auto');
    };
    ;
    CollapsibleComponent.prototype.extend = function () {
        console.log('tset');
    };
    __decorate([
        core_1.HostBinding('class.in'),
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', Boolean)
    ], CollapsibleComponent.prototype, "isExpanded", void 0);
    __decorate([
        core_1.HostBinding('style.display'), 
        __metadata('design:type', String)
    ], CollapsibleComponent.prototype, "display", void 0);
    CollapsibleComponent = __decorate([
        core_1.Component({
            selector: 'collapsible',
            template: Collapsible_Template
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], CollapsibleComponent);
    return CollapsibleComponent;
}());
exports.CollapsibleComponent = CollapsibleComponent;
//# sourceMappingURL=collapsible.component.js.map