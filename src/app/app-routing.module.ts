import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSuccessComponent } from './orders/order-success/order-success.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsShell } from './products/products-shell';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component: ProductsShell},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path:'check-out', component: ShippingComponent},
  {path:'order-success', component: OrderSuccessComponent},
  {path: 'orders', component: OrdersComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
