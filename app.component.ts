import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ShoeListComponent } from './shoe-list.component'; 
import { NewsletterComponent } from './newsletter.component';
import { DemoDataService } from './demo-data.service';
import { ShoeDetailComponent } from './shoe-detail.component';
import { FilterComponent } from './filter.component'; 
import { HomepageComponent } from './homepage.component';
import { FooterComponent } from './footer.component';
import { ProductOverviewComponent } from './product-overview.component';

@Component({
    selector: 'my-app',
    template: `
    <my-header></my-header>
    <router-outlet>
    </router-outlet>
    <my-footer></my-footer>
    `,
    directives: [ HeaderComponent, HomepageComponent, ShoeListComponent, NewsletterComponent, ShoeDetailComponent,FooterComponent, FilterComponent ],
    providers: [ DemoDataService ]
})

export class AppComponent {
    title: string = "Welcome to this site";

    }
