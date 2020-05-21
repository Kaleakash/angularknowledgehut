import {Component} from '@angular/core';

@Component({
    selector:"header-data",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent {
msg:string ="This is a Angular header information"
}