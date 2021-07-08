import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Order } from "./order-success/order.model";
import { OrdersService } from "./orders.service";

@Component({
    selector:'orders',
    templateUrl:'./orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders: Order[] = [];

    constructor(private ordersService: OrdersService) {}

    ngOnInit(): void {
        this.orders = this.ordersService.getOrders();
    }
}