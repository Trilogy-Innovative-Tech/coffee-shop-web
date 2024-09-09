import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NgOptimizedImage} from "@angular/common";
import { ContactUsComponent } from './home-page/contact-us/contact-us.component';
import { AboutUsComponent } from './home-page/about-us/about-us.component';
import { GoogleMapComponent } from './home-page/google-map/google-map.component';
import { CustomerReviewComponent } from './home-page/customer-review/customer-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactUsComponent,
    AboutUsComponent,
    GoogleMapComponent,
    CustomerReviewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
