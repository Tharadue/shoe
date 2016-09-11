import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Shoe } from './shoe';
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'product-overview',
    templateUrl: './app/product-overview.component.html'
})

export class ProductOverviewComponent {
        shoe: Shoe;

    constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) { }

    ngOnInit() {
        let shoeId = this.route.snapshot.params['shoeId'];
        this.shoe = this.demoDataService.getDemoDataById(shoeId);
    }
}