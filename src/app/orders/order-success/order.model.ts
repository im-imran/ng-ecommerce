import { ShoppingCart } from "src/app/shopping-cart/models/shopping-cart.model";

export class Order {
    customerName: string;
    orderDate: Date;
    shoppingCart: ShoppingCart;

    constructor(customerName: string, orderDate: Date, shoppingCart: ShoppingCart) {
        this.customerName = customerName;
        this.orderDate = orderDate;
        this.shoppingCart = shoppingCart;
    }
}