import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Route[] = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  }, 
  {
    path: 'login', component: LoginComponent
  }, 
  {
    path: 'signup', component: SignupComponent
  }, 
  { 
    path: 'cart', component: CartComponent, canActivate: [AuthGuard] 
  },
  {
    path: '**', component: PagenotfoundComponent
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }