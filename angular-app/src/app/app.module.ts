import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentTwiceComponent } from './content-twice.component';
import { HeaderComponent } from './header.component';
import { Layer1Component } from './layer1.component';
import { Layer2Component } from './layer2.component';
import { ListSimpleComponent } from './list-simple.component';
import { ModalSelectorsComponent } from './modal-selectors.component';
import { ModalSimpleComponent } from './modal-simple.component';
import { NgContentHostContextComponent } from './ng-content-host-context.component';
import { NgContentInjectorTreeComponent } from './ng-content-injector-tree.component';
import { NgContentProjectingTwiceComponent } from './ng-content-projecting-twice.component';
import { NgContentSelectorsComponent } from './ng-content-selectors.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';
import { NgContentTwoLayersComponent } from './ng-content-two-layers.component';
import { NgTemplateSimpleComponent } from './ng-template-simple.component';
import { TagDirective } from './tag.directive';
import { TextWrapperComponent } from './text-wrapper.component';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [
    TagDirective,
    
    AppComponent,
    
    ModalSimpleComponent,
    ModalSelectorsComponent,

    HeaderComponent,
    TextWrapperComponent,
    TextComponent,
    ContentTwiceComponent,
    Layer1Component,
    Layer2Component,
    ListSimpleComponent,

    NgContentSimpleComponent,
    NgContentSelectorsComponent,
    NgContentTwoLayersComponent,
    NgContentProjectingTwiceComponent,
    NgContentHostContextComponent,
    NgContentInjectorTreeComponent,

    NgTemplateSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }