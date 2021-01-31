import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentProjectingTwiceComponent } from './ng-content-projecting-twice.component';
import { NgContentSelectorsComponent } from './ng-content-selectors.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';
import { NgContentTwoLayersComponent } from './ng-content-two-layers.component';

const routes: Routes = [
  { path: 'ng-content-simple', component: NgContentSimpleComponent },
  { path: 'ng-content-selectors', component: NgContentSelectorsComponent },
  { path: 'ng-content-two-layers', component: NgContentTwoLayersComponent },
  { path: 'ng-content-projecting-twice', component: NgContentProjectingTwiceComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
