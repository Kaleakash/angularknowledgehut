import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MdformComponent implements OnInit {

  custInfo = new FormGroup({
    custId:new FormControl("",[Validators.required,Validators.pattern("\\d{3}")]),
    custName:new FormControl("",[Validators.required,Validators.minLength(4)]),
    custAge:new FormControl("",[Validators.required,Validators.pattern("(2[1-9]|[3-5][0-9]|60)")])
  });
  custDetails:string =""
  constructor() { }

  ngOnInit(): void {
  }

  storeCustInfo(): void {
    console.log("Event generated")
    console.log(this.custInfo);
    console.log("id is "+this.custInfo.get("custId").value);
    console.log("name is "+this.custInfo.get("custName").value);
    console.log("age is "+this.custInfo.get("custAge").value);
    this.custDetails="Id is "+this.custInfo.get("custId").value+" Name is "+this.custInfo.get("custName").value+" Age is "+this.custInfo.get("custAge").value;
  }
}
