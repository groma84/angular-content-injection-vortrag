import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentSimpleComponent } from './ng-content-simple.component';

const routes: Routes = [
  { path: 'ng-content-simple', component: NgContentSimpleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
