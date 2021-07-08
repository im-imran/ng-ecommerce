import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Order } from "./order-success/order.model";

@Injectable({providedIn: 'root'})
export class OrdersService {
    orders: Order[] = [];

    ordersSub = new BehaviorSubject<Order[]>(this.orders);

    addToOrders(order: Order) {
        this.orders.push(order);
        this.ordersSub.next(this.orders.slice());
    }

    getOrders() {
        return this.orders.slice();
    }
    
}