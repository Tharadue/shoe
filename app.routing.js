"use strict";
var router_1 = require('@angular/router');
var shoe_list_component_1 = require('./shoe-list.component');
var shoe_detail_component_1 = require('./shoe-detail.component');
var homepage_component_1 = require('./homepage.component');
var appRoutes = [
    {
        path: 'detail/:shoeId',
        component: shoe_detail_component_1.ShoeDetailComponent
    },
    {
        path: '',
        component: homepage_component_1.HomepageComponent
    },
    {
        path: 'shoelist',
        component: shoe_list_component_1.ShoeListComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map