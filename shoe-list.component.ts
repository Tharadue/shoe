import { Component } from '@angular/core';
import { Shoe } from './shoe'; 
import { SHOEDATA } from './demo-data';
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'shoe-list',
    templateUrl: './app/shoe-list.component.html'
})
export class ShoeListComponent {
    shoes:Shoe[];
 constructor(private demoDataService: DemoDataService) {
 }

    ngOnInit() { 
         this.shoes = this.demoDataService.getDemoData();
         
    }

}
