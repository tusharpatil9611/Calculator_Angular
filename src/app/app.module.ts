import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NumButtonComponent } from './button/num-button/num-button.component';
import { FunButtonComponent } from './button/fun-button/fun-button.component';
import { OpButtonComponent } from './button/op-button/op-button.component';
import { DisplayComponent } from './display/display.component';

import { MyServiceService } from './my-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NumButtonComponent,
    FunButtonComponent,
    OpButtonComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
