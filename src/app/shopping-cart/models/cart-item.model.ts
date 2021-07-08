export class CartItem {
    itemName!: string;
    quantity!:  number;
    price!: number;
    totalPrice!: number;
    imageUrl!: string;

    constructor(name: string, price: number, imageUrl: string) {
        this.itemName = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = 1;
        this.totalPrice = this.price * this.quantity;
    }
}