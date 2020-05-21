import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-angular-service',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.css']
})
export class AngularServiceComponent implements OnInit {

  msg1:string;
  msg2:string;
  constructor(public ser:SecondService) { } //Achieve DI for SecondSErvice class using Constructor

  ngOnInit(): void {
  }

  fun1() {
    //business logic
    let firstRef = new FirstService();
    this.msg1 = firstRef.display1();
  }
  fun2() {
    this.msg2 = this.ser.display2();
  }
}
