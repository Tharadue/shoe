import { Component, OnInit } from '@angular/core';

class Newsletter {
    size:string;
    qty:string;
}

@Component({
    selector: 'newsletter',
    templateUrl: './app/newsletter.component.html'
})
export class NewsletterComponent implements OnInit {
    size:string[]= ["35", "36", "37", "40", "41", "42", "44"];

    newsletter:Newsletter = new Newsletter();

    submitted:boolean = false;

    constructor() { }

    ngOnInit() { }

    signup (){
        this.submitted = true;
    }
}