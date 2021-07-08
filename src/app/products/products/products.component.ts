import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { Product } from '../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  category: string = '';
  categorySubscription!: Subscription;
  showCart = false;

  combinedProductInfo: { product: Product, orderedQuantity: number}[] = [];

  constructor(private productsService: ProductsService,
    private shoppingCartService: ShoppingCartService ) { }

  ngOnInit(): void {
    // this.categorySubscription = this.productsService.selectedCategorySubject.subscribe(category => {
    //   this.category = category;
    //   this.products = this.productsService.getProducts(this.category);
    // });

    this.categorySubscription = combineLatest([this.productsService.selectedCategorySubject,
    this.shoppingCartService.shoppingCartSub]).pipe(map(([category, shoppingCart]) => {
      console.log(`in combine latest`);
      console.log(category);
      console.log(shoppingCart);
      this.products = this.productsService.getProducts(category);
      console.log(this.products);
      this.combinedProductInfo = [];
      this.products.forEach( productInfo => {
        this.combinedProductInfo.push({product: productInfo, 
          orderedQuantity: 
          ((shoppingCart.totalItems > 0) && (shoppingCart.cartItems.filter(cartItem => cartItem.itemName === productInfo.name).length > 0)) ? 
          shoppingCart.cartItems.filter(cartItem => cartItem.itemName === productInfo.name)[0].quantity: 0 })
      });
    }))
    .subscribe();
  }

  onAddtoCart(product: Product) {
    this.showCart = true;
    this.shoppingCartService.addToCart(product.name, product.price, product.imageUrl);
  }

  onIncrement(product: Product) {
    this.shoppingCartService.incrementCartItem(product.name);
  }

  onDecrement(product: Product) {
    this.shoppingCartService.decrementCartItem(product.name);
  }

  ngOnDestroy(): void {
    this.categorySubscription.unsubscribe();
  }
}
