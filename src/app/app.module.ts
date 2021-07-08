import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsShell } from './products/products-shell';
import { ProductsComponent } from './products/products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FormsModule } from '@angular/forms';
import { OrderSuccessComponent } from './orders/order-success/order-success.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsShell,
    ProductListComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ShippingComponent,
    OrdersComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
