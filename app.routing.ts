import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter.component';
import { ShoeListComponent } from './shoe-list.component'; 
import { ShoeDetailComponent } from './shoe-detail.component'; 
import { FilterComponent } from './filter.component'; 
import { HomepageComponent } from './homepage.component'; 

const appRoutes: Routes = [
    {
        path: 'detail/:shoeId',
        component: ShoeDetailComponent
    },
    {
        path: '',
        component: HomepageComponent
    }
    ,
    {
        path: 'shoelist',
        component: ShoeListComponent
    }
]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
