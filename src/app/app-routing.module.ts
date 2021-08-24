import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [{
  path:"home", component: AppComponent},
  {path:"setup", component: AppComponent}, {path:"doc", component: AppComponent}, {path:"playground", component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
