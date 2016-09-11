import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { NewsletterComponent } from './newsletter.component';
import { ShoeListComponent } from './shoe-list.component'; 
import { routing } from './app.routing'

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
