import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header.component';
import { FooterComponent } from './footer.component';
import { InfoComponent } from './info/info.component';
import { MainComponent } from './main/main.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { TdformComponent } from './tdform/tdform.component';
import { MdformComponent } from './mdform/mdform.component';
import { SampleComponent } from './sample/sample.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent, 
    InfoComponent, MainComponent, DataBindingComponent, StructureDirectiveComponent, TdformComponent, MdformComponent, SampleComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
