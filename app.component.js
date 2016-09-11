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
var header_component_1 = require('./header.component');
var shoe_list_component_1 = require('./shoe-list.component');
var newsletter_component_1 = require('./newsletter.component');
var demo_data_service_1 = require('./demo-data.service');
var shoe_detail_component_1 = require('./shoe-detail.component');
var filter_component_1 = require('./filter.component');
var homepage_component_1 = require('./homepage.component');
var footer_component_1 = require('./footer.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Welcome to this site";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <my-header></my-header>\n    <router-outlet>\n    </router-outlet>\n    <my-footer></my-footer>\n    ",
            directives: [header_component_1.HeaderComponent, homepage_component_1.HomepageComponent, shoe_list_component_1.ShoeListComponent, newsletter_component_1.NewsletterComponent, shoe_detail_component_1.ShoeDetailComponent, footer_component_1.FooterComponent, filter_component_1.FilterComponent],
            providers: [demo_data_service_1.DemoDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map