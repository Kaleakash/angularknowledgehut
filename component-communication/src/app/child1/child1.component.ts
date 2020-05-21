import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,AfterViewChecked {

  @Input()
  message:string;
  @Input()
  stdInfo:Array<string>;
  age:number=21;
  constructor() {
    sessionStorage.setItem("age",this.age.toString());
   }

  @Output()
  eventRef = new EventEmitter<number>();

  ngAfterViewChecked() {
    //business rules 
    
    sessionStorage.getItem("age");
    alert("fun called...")
    this.eventRef.emit(this.stdInfo.length);

  }

  ngOnInit(): void {
  }
  updateAge() {
    this.age = this.age +10;
  }
}
