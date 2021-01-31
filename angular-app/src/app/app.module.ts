import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalSimpleComponent } from './modal-simple.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalSimpleComponent,
    NgContentSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
