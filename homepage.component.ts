import { Component } from '@angular/core';
import { Shoe } from './shoe'; 
import { SHOEDATA } from './demo-data';
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'homepage',
    templateUrl: './app/homepage.component.html'
})
export class HomepageComponent {
    shoes:Shoe[];
 constructor(private demoDataService: DemoDataService) {
 }

    ngOnInit() { 
         this.shoes = this.demoDataService.getDemoData();
         
    }

}
