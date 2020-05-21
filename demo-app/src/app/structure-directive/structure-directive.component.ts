import { Component, OnInit } from '@angular/core';
import {Employee} from '../model.employee'
@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag:boolean = false;
  b1:string = "show";
  stdNames:Array<string>=["Ravi","Raju","Ramesh","Rajesh","Ramu"];
  empInfo:Array<Employee>;
  firstStyle={'color':'blue','background-color':'pink'}
  abc ={mno:true,xyz:false}
  constructor() {
    this.empInfo= new Array(); 
    let emp1 = new Employee(100,"Ravi",12000);
    let emp2 = new Employee(101,"Ajay",15000);
    let emp3 = new Employee(102,'Vijay',18000);
    let emp4 = new Employee(103,"Dinesh",20000);
    this.empInfo.push(emp1);
    this.empInfo.push(emp2);
    this.empInfo.push(emp3);
    this.empInfo.push(emp4);
  }

  ngOnInit(): void {
  }

  fun():void {
    if(this.b1=="show"){
      this.flag = true;
      this.b1 = "hide";
    }else {
      this.flag = false;
      this.b1 = "show";
    }
  }
  f1:boolean = true;
  f2:boolean = false;
  b2:string="Mno class"
  changeStyle():void{
    if(this.f1){
      this.f1 = false;
      this.f2 = true;
      this.b2 = "Xyz class";
    }else {
      this.f1 = true;
      this.f2 = false;
      this.b2 = "Mno class";
    }
  } 
}
