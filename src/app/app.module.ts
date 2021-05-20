import { CategoryModule } from './category/category.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, NgForm, NgModel } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailPageComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    CategoryModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
