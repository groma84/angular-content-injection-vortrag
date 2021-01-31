import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ModalSelectorsComponent } from './modal-selectors.component';
import { ModalSimpleComponent } from './modal-simple.component';
import { NgContentSelectorsComponent } from './ng-content-selectors.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';
import { TextWrapperComponent } from './text-wrapper.component';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [
    AppComponent,
    
    ModalSimpleComponent,
    ModalSelectorsComponent,

    HeaderComponent,
    TextWrapperComponent,
    TextComponent,

    NgContentSimpleComponent,
    NgContentSelectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
