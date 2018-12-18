import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '', component: LoginComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/orderdetails', component: OrderDetailsComponent },
  { path: 'home/orderdetails/reviewpage', component: ReviewPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
