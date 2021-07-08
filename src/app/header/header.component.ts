import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  totalCartItems = 0;

  shoppingCartSub!: Subscription;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartSub = this.shoppingCartService.shoppingCartSub.subscribe(shoppingCart => {
      console.log(`from header`);
      console.log(shoppingCart);
      this.totalCartItems = shoppingCart.totalItems;
    });
  }

  ngOnDestroy(): void {
    this.shoppingCartSub.unsubscribe();
  }

}
