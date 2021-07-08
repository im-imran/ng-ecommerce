import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartItem } from './models/cart-item.model';
import { ShoppingCart } from './models/shopping-cart.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {


  shoppingCartSub!: Subscription;
  shoppingCart!: ShoppingCart;

  totalCartPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.shoppingCartSub = this.shoppingCartService.shoppingCartSub.subscribe(
      shoppingCart => {
        this.shoppingCart = shoppingCart;
        this.totalCartPrice = 0;
        this.shoppingCart.cartItems.forEach(cartItem => {
          this.totalCartPrice += cartItem.totalPrice;
        });
      }
    );
  }

  onDecrement(name: string) {
    this.shoppingCartService.decrementCartItem(name);
  }

  onIncrement(name: string) {
    this.shoppingCartService.incrementCartItem(name);
  }

  onCheckOut() {
    this.router.navigate(['check-out']);
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }

}
