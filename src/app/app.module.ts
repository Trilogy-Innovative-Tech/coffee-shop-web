import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NgOptimizedImage} from "@angular/common";
import { ContactUsComponent } from './home-page/contact-us/contact-us.component';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { CustomerReviewComponent } from './home-page/customer-review/customer-review.component';
import { SignInComponent } from './home-page/sign-in/sign-in.component';
import { GoogleMapComponent } from './home-page/google-map/google-map.component';
import {FormsModule} from "@angular/forms";
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    CustomerReviewComponent,
    SignInComponent,
    GoogleMapComponent,
    CreateAccountComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
