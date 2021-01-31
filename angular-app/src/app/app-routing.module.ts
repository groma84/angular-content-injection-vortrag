import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentSelectorsComponent } from './ng-content-selectors.component';
import { NgContentSimpleComponent } from './ng-content-simple.component';

const routes: Routes = [
  { path: 'ng-content-simple', component: NgContentSimpleComponent },
  { path: 'ng-content-selectors', component: NgContentSelectorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
