import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../orders/order-success/order.model';
import { OrdersService } from '../orders/orders.service';
import { ShoppingCart } from '../shopping-cart/models/shopping-cart.model';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit, OnDestroy {
  shoppingCartSub!: Subscription;
  shoppingCart!: ShoppingCart;
  totalCartPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router,
    private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.shoppingCartSub = this.shoppingCartService.shoppingCartSub.subscribe(
      (shoppingCart) => {
        this.shoppingCart = shoppingCart;
        this.totalCartPrice = 0;
        this.shoppingCart.cartItems.forEach((cartItem) => {
          this.totalCartPrice += cartItem.totalPrice;
        });
      }
    );
  }

  onPlaceOrder(f: NgForm) {
    const order: Order = new Order('Imran Ali', new Date(), this.shoppingCart);
    this.ordersService.addToOrders(order);
    this.shoppingCartService.resetShoppingCart();
    this.router.navigate(['order-success']);
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }
}
