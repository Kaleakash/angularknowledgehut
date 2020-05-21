import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit ,OnDestroy{

  constructor() { }

  ngOnInit(): void {
    console.log("Sample component init")
  }
  ngOnDestroy():void {
    console.log("Sample component destroy")
  }

}
