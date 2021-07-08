import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CartItem } from "./models/cart-item.model";
import { ShoppingCart } from "./models/shopping-cart.model";

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  // shoppingCart: CartItem[] = [];

  shoppingCart: ShoppingCart= {
    cartItems: [],
    totalItems: 0,
  };

  shoppingCartSub = new BehaviorSubject<ShoppingCart>(this.shoppingCart);

  addToCart(itemName: string, price: number, imageUrl: string) {
    let cartItem = new CartItem(itemName, price, imageUrl);
    console.log(`adding cart item `);
    console.log(cartItem);
    this.shoppingCart.cartItems.push(cartItem);
    this.calculateTotalItems();
    this.shoppingCartSub.next({ ...this.shoppingCart });
  }

  removeFromCart(itemName: string) {
    const index = this.shoppingCart.cartItems.findIndex(
      (cartItem) => cartItem.itemName === itemName
    );
    if (index !== -1) {
      this.shoppingCart.cartItems.splice(index, 1);
      this.calculateTotalItems();
      this.shoppingCartSub.next({ ...this.shoppingCart });
    }
  }

  incrementCartItem(itemName: string) {
    const index = this.shoppingCart.cartItems.findIndex(
      (cartItem) => cartItem.itemName === itemName
    );
    if (index !== -1) {
      this.shoppingCart.cartItems.splice(index, 1, {
        ...this.shoppingCart.cartItems[index],
        quantity: this.shoppingCart.cartItems[index].quantity + 1,
        totalPrice:
          ++this.shoppingCart.cartItems[index].quantity *
          this.shoppingCart.cartItems[index].price,
      });
      this.calculateTotalItems();
      this.shoppingCartSub.next({ ...this.shoppingCart });
    }
  }

  decrementCartItem(itemName: string) {
    const index = this.shoppingCart.cartItems.findIndex(
      (cartItem) => cartItem.itemName === itemName
    );
    if (index !== -1) {
      if (this.shoppingCart.cartItems[index].quantity === 1) {
        this.shoppingCart.cartItems.splice(index, 1);
      } else {
        this.shoppingCart.cartItems.splice(index, 1, {
          ...this.shoppingCart.cartItems[index],
          quantity: this.shoppingCart.cartItems[index].quantity - 1,
          totalPrice:
            --this.shoppingCart.cartItems[index].quantity *
            this.shoppingCart.cartItems[index].price,
        });
      }
      this.calculateTotalItems();
      this.shoppingCartSub.next({ ...this.shoppingCart });
    }
  }

  resetShoppingCart() {
      this.shoppingCart.cartItems = [];
      this.shoppingCart.totalItems = 0;
      this.shoppingCartSub.next({...this.shoppingCart});
  }

  private calculateTotalItems(): void {
    if (this.shoppingCart.cartItems.length === 0) {
      this.shoppingCart.totalItems = 0;
    } else {
      const totalItems = this.shoppingCart?.cartItems?.reduce(
        (accumulator, cartItem) => {
          return {
            ...accumulator,
            quantity: cartItem.quantity + accumulator.quantity,
          };
        }
      );
      this.shoppingCart.totalItems = totalItems.quantity;
    }
    console.log(`from calculateTotalItems `);
    console.log(this.shoppingCart.totalItems);
    
  }
}