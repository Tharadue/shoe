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
var core_1 = require('@angular/core');
var Newsletter = (function () {
    function Newsletter() {
    }
    return Newsletter;
}());
var NewsletterComponent = (function () {
    function NewsletterComponent() {
        this.newstype = ["Baking", "Starters", "Dinner"];
        this.newsletter = new Newsletter();
        this.submitted = false;
    }
    NewsletterComponent.prototype.ngOnInit = function () { };
    NewsletterComponent.prototype.signup = function () {
        this.submitted = true;
    };
    NewsletterComponent = __decorate([
        core_1.Component({
            selector: 'newsletter',
            templateUrl: './app/newsletter.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NewsletterComponent);
    return NewsletterComponent;
}());
exports.NewsletterComponent = NewsletterComponent;
//# sourceMappingURL=newsletter.component.js.map