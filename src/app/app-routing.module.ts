import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateAccountComponent} from "./create-account/create-account.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [ {
  path: 'sign-up',
  component: CreateAccountComponent
},
  {
    path: '',
    component: HomePageComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
