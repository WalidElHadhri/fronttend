import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent} from './pages/register/register.component';
import { AddProductComponent} from './pages/add-product/add-product.component';
import { ProfileComponent} from './pages/profile/profile.component';
import { ContactComponent} from './pages/contact/contact.component';
import { AboutComponent} from './pages/about/about.component';


const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomePageComponent },
  { path: 'Home/:categoryId', component: HomePageComponent },
  { path: 'Product/:id', component: ProductDetailPageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
