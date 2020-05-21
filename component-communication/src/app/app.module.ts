import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { AngularServiceComponent } from './angular-service/angular-service.component';
import { SecondService } from './second.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    AngularServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SecondService],   //Userdefined service with DI
  bootstrap: [AppComponent]
})
export class AppModule { }




