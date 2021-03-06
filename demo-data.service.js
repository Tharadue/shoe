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
var demo_data_1 = require('./demo-data');
var DemoDataService = (function () {
    function DemoDataService() {
    }
    DemoDataService.prototype.getDemoData = function () {
        return demo_data_1.SHOEDATA;
    };
    DemoDataService.prototype.getDemoDataById = function (id) {
        var result = demo_data_1.SHOEDATA.filter(function (obj) {
            return obj.id == id;
        });
        if (result.length > 0) {
            return result[0];
        }
        else {
            return null;
        }
    };
    DemoDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DemoDataService);
    return DemoDataService;
}());
exports.DemoDataService = DemoDataService;
//# sourceMappingURL=demo-data.service.js.map