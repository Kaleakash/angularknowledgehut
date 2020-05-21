import { Component, ViewChild, AfterViewInit, EventEmitter, AfterContentChecked, Output } from '@angular/core';
import { Child1Component } from './child1/child1.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'component-communication';
  msg:string="This is Parent component property";
  stdNames:Array<string>=new Array();
  
  @ViewChild(Child1Component)
  child1:Child1Component;
  numStd:number;
 
  childAge:number;
  store(name:string){
    this.stdNames.push(name);
  }


ngAfterViewInit() {
  //this.childAge = this.child1.age;
}
getAge() : void {
  this.childAge = this.child1.age;
  this.child1.updateAge();
}
}
