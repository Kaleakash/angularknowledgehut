import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'demo-app';
  name:string ="Akash - Angular Trainer"
  id:number=100;
  fname:string="Raj deep";
  salary:number=14000;
  result:boolean = true;

  display(): string {
    return "Welcome to Angular user "+this.fname;
  }
}
