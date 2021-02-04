import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SomeDirective, SimpleService, MyComponent } from './angular-examples';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentTwiceComponent } from './content-twice.component';
import { FruitListItemComponent } from './fruit-list-item.component';
import { HeaderComponent } from './header.component';
import { Layer1Component } from './layer1.component';
import { Layer2Component } from './layer2.component';
import { ListContextComponent } from './list-context.component';
import { ListInjectorComponent } from './list-injector.component';
import { ListItemInjectorComponent } from './list-item-injector.component';
import { ListItemComponent } from './list-item.component';
import { ListMultipleTemplatesComponent } from './list-multiple-templates.component';
import { ListSimpleComponent } from './list-simple.component';
import { ModalSelectorsComponent } from './modal-selectors.component';
import { ModalSimpleComponent } from './modal-simple.component';
import { NgContentHostContextComponent } from './ng-content-host-context.component';
import { NgContentInjectorTreeComponent } from './ng-content-injector-tree.component';
import { NgContentProjectingTwiceComponent } from './ng-content-projecting-twice.component';
import { NgContentSelectorsComponent } from './ng-content-selectors.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';
import { NgContentTwoLayersComponent } from './ng-content-two-layers.component';
import { NgTemplateContextComponent } from './ng-template-context.component';
import { NgTemplateInjectorComponent } from './ng-template-injector.component';
import { NgTemplateMultipleTemplatesComponent } from './ng-template-multiple-templates.component';
import { NgTemplateSimpleComponent } from './ng-template-simple.component';
import { SweetsListItemComponent } from './sweets-list-item.component';
import { TagDirective } from './tag.directive';
import { TemplateTypeDirective } from './template-type.directive';
import { TextWrapperComponent } from './text-wrapper.component';
import { TextComponent } from './text.component';

@NgModule({
  declarations: [
    TagDirective,
    TemplateTypeDirective,
    
    AppComponent,

    SomeDirective,
    MyComponent,
    
    ModalSimpleComponent,
    ModalSelectorsComponent,

    HeaderComponent,
    TextWrapperComponent,
    TextComponent,
    ContentTwiceComponent,
    Layer1Component,
    Layer2Component,
    ListSimpleComponent,
    ListContextComponent,
    ListItemComponent,
    FruitListItemComponent,
    SweetsListItemComponent,
    ListItemInjectorComponent,
    ListMultipleTemplatesComponent,
    ListInjectorComponent,

    NgContentSimpleComponent,
    NgContentSelectorsComponent,
    NgContentTwoLayersComponent,
    NgContentProjectingTwiceComponent,
    NgContentHostContextComponent,
    NgContentInjectorTreeComponent,

    NgTemplateSimpleComponent,
    NgTemplateContextComponent,
    NgTemplateMultipleTemplatesComponent,
    NgTemplateInjectorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
