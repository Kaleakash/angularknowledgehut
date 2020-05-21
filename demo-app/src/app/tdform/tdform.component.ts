import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {
custDetails:string="";
  constructor() { }
flag:boolean = true;
  ngOnInit(): void {
    console.log("initialization method called...")
  }
  storeCustomerInfo(custInfo:any):void {
    console.log("Event Generated...")
    console.log(custInfo)
    console.log("customer id is "+custInfo.custId);
    console.log("customer Name is "+custInfo.custName);
    console.log("customer Age is "+custInfo.custAge);
    this.custDetails = "Id is "+custInfo.custId+" Name is "+custInfo.custName+" Age is "+custInfo.custAge+" Gender is "+custInfo.gender;
  }
  fun(): void {
    this.flag = false;
  }
}




