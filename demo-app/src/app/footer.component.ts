import {Component} from '@angular/core';

@Component({
    selector:"footer-data",
    template:`
        <div>
        Footer : {{msg}}
        </div>
    `,
    styles:["div{color:blue;font-size:30pt;}"]
})
export class FooterComponent {
    msg:string ="This is footer message";
}