import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './angular-examples';
import { OuterComponent } from './change-detection-mit-verschachtelung-ng-content';
import { FirstLayerComponent } from './content-children-mehrere-ebenen';
import { OuterLayerComponent } from './content-zweimal-geht-nicht';
import { LayerOneComponent } from './injector-mehrere-ebenen';
import { NgContentHostContextComponent } from './ng-content-host-context.component';
import { NgContentInjectorTreeComponent } from './ng-content-injector-tree.component';
import { NgContentProjectingTwiceComponent } from './ng-content-projecting-twice.component';
import { NgContentSelectorsComponent } from './ng-content-selectors.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';
import { NgContentTwoLayersComponent } from './ng-content-two-layers.component';
import { ShoppingListComponent } from './ng-template-contentchildren';
import { NgTemplateContextComponent } from './ng-template-context.component';
import { NgTemplateInjectorComponent } from './ng-template-injector.component';
import { NgTemplateMultipleTemplatesComponent } from './ng-template-multiple-templates.component';
import { TemplateOutletComponent } from './ng-template-outlet';
import { NgTemplateSimpleComponent } from './ng-template-simple.component';
import { ShoppingLisWithTrackByComponent } from './ng-template-trackBy';
import { NgIfElseComponent } from './ngif-else';

const routes: Routes = [
  { path: 'ng-content-simple', component: NgContentSimpleComponent },
  { path: 'ng-content-selectors', component: NgContentSelectorsComponent },
  { path: 'ng-content-two-layers', component: NgContentTwoLayersComponent },
  { path: 'ng-content-projecting-twice', component: NgContentProjectingTwiceComponent },
  { path: 'ng-content-host-context', component: NgContentHostContextComponent },
  { path: 'ng-content-injector-tree', component: NgContentInjectorTreeComponent },
  
  { path: 'ng-template-simple', component: NgTemplateSimpleComponent },
  { path: 'ng-template-context', component: NgTemplateContextComponent },
  { path: 'ng-template-multiple-templates', component: NgTemplateMultipleTemplatesComponent },
  { path: 'ng-template-injector', component: NgTemplateInjectorComponent },

  { path: 'angular-example', component: MyComponent },
  { path: 'change-detection-mit-verschachtelung-ng-content', component: OuterComponent },
  { path: 'content-children-mehrere-ebenen', component: FirstLayerComponent },
  { path: 'injector-mehrere-ebenen', component: LayerOneComponent },
  { path: 'ngif-else', component: NgIfElseComponent },
  { path: 'template-outlet', component: TemplateOutletComponent },
  { path: 'template-select', component: ShoppingListComponent },
  { path: 'track-by', component: ShoppingLisWithTrackByComponent },
  { path: 'content-zweimal-geht-nicht', component: OuterLayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
