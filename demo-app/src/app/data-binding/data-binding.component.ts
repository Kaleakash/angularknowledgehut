import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  fname:string="Ravi Kumar";
  age:number=21;
  result:boolean= false;
  salary:number=12000;
  desg:string = "Tester";
  constructor() { }

  ngOnInit(): void {
  }
  fun():void {
    console.log("Event generated");
    this.salary = this.salary +2000;
  }
  sum:number;
  addNumber(n1:string,n2:string){
    let abc=  "10.10";
    let xyz = "20.20";
    console.log(abc+xyz)
    console.log(parseInt(abc)+parseInt(xyz));
    console.log(parseFloat(abc)+parseFloat(xyz));
    console.log(eval(abc)+eval(xyz));
    
    this.sum = eval(n1)+eval(n2);
  }
}
