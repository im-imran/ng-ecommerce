import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  categories = [
    'Bread',
    'Dairy',
    'Fruits',
    'Seasonings and Spices',
    'Vegetables',
  ];

  selectedCategorySubject = new BehaviorSubject<string>('All Categories');

  products: Product[] = [
    {
      name: 'Raspberry',
      price: 3.4,
      imageUrl: '../../assets/fruits/raspberry.jpg',
      category: 'Fruits',
    },
    {
      name: 'Banana',
      price: 1.2,
      imageUrl: '../../assets/fruits/banana.jpg',
      category: 'Fruits',
    },
    {
      name: 'Black Grapes',
      price: 1.4,
      imageUrl: '../../assets/fruits/black-grapes.jpg',
      category: 'Fruits',
    },
    {
      name: 'Cherry',
      price: 2.4,
      imageUrl: '../../assets/fruits/cherry.jpg',
      category: 'Fruits',
    },
    {
      name: 'Mandarin',
      price: 2.4,
      imageUrl: '../../assets/fruits/mandarin.jpg',
      category: 'Fruits',
    },
    {
      name: 'Dragon Fruit',
      price: 2.4,
      imageUrl: '../../assets/fruits/dragon-fruit.jpg',
      category: 'Fruits',
    },
    {
      name: 'Papaya',
      price: 2.4,
      imageUrl: '../../assets/fruits/papaya.jpg',
      category: 'Fruits',
    },
    {
      name: 'Strawberry',
      price: 2.4,
      imageUrl: '../../assets/fruits/strawberry.jpg',
      category: 'Fruits',
    },
    {
      name: 'Melon',
      price: 2.4,
      imageUrl: '../../assets/fruits/melon.jpg',
      category: 'Fruits',
    },
    {
      name: 'White Bread',
      price: 1.4,
      imageUrl: '../../assets/bread/white-bread.jpg',
      category: 'Bread',
    },
    {
      name: 'Brioche',
      price: 1.4,
      imageUrl: '../../assets/bread/brioche.jpg',
      category: 'Bread',
    },
    {
      name: 'Croissants',
      price: 1.4,
      imageUrl: '../../assets/bread/croissants.jpg',
      category: 'Bread',
    },
    {
      name: 'Baguette',
      price: 1.4,
      imageUrl: '../../assets/bread/baguette.jpg',
      category: 'Bread',
    },
    {
      name: 'Banana Bread',
      price: 1.4,
      imageUrl: '../../assets/bread/banana-bread.jpg',
      category: 'Bread',
    },
    {
      name: 'Doughnut',
      price: 1.4,
      imageUrl: '../../assets/bread/doughnut.jpg',
      category: 'Bread',
    },
    {
      name: 'Muffin',
      price: 1.4,
      imageUrl: '../../assets/bread/muffin.jpg',
      category: 'Bread',
    },
    {
      name: 'Pretzel',
      price: 1.4,
      imageUrl: '../../assets/bread/pretzel.jpg',
      category: 'Bread',
    },
    {
      name: 'Bagel',
      price: 1.4,
      imageUrl: '../../assets/bread/bagel.jpg',
      category: 'Bread',
    },
    {
      name: 'Almond Milk',
      price: 1.4,
      imageUrl: '../../assets/dairy/almond-milk.jpg',
      category: 'Dairy',
    },
    {
      name: 'Cheese',
      price: 1.4,
      imageUrl: '../../assets/dairy/cheese.jpg',
      category: 'Dairy',
    },
    {
      name: 'Milk',
      price: 1.4,
      imageUrl: '../../assets/dairy/milk.jpg',
      category: 'Dairy',
    },
    {
      name: 'Custard',
      price: 1.4,
      imageUrl: '../../assets/dairy/custard.jpg',
      category: 'Dairy',
    },
    {
      name: 'Strawberry Yogurt',
      price: 1.4,
      imageUrl: '../../assets/dairy/strawberry-yogurt.jpg',
      category: 'Dairy',
    },
    {
      name: 'Soy Milk',
      price: 1.4,
      imageUrl: '../../assets/dairy/soy-milk.jpg',
      category: 'Dairy',
    },
    {
      name: 'Carrot',
      price: 1.4,
      imageUrl: '../../assets/vegetables/carrot.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Cauliflower',
      price: 1.4,
      imageUrl: '../../assets/vegetables/cauliflower.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Garlic',
      price: 1.4,
      imageUrl: '../../assets/vegetables/garlic.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Ginger',
      price: 1.4,
      imageUrl: '../../assets/vegetables/ginger.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Green Chillies',
      price: 1.4,
      imageUrl: '../../assets/vegetables/green-chillies.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Mint',
      price: 1.4,
      imageUrl: '../../assets/vegetables/mint.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Okra',
      price: 1.4,
      imageUrl: '../../assets/vegetables/okra.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Onion',
      price: 1.4,
      imageUrl: '../../assets/vegetables/onion.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Pumpkin',
      price: 1.4,
      imageUrl: '../../assets/vegetables/pumpkin.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Potato',
      price: 1.4,
      imageUrl: '../../assets/vegetables/potato.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Red Chillies',
      price: 1.4,
      imageUrl: '../../assets/vegetables//red-chillies.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Tomato',
      price: 1.4,
      imageUrl: '../../assets/vegetables/tomato.jpg',
      category: 'Vegetables',
    },
    {
      name: 'Cardamom',
      price: 1.4,
      imageUrl: '../../assets/seasonings and spices/cardamom.jpg',
      category: 'Seasonings and Spices',
    },
    {
      name: 'Cinnamon',
      price: 1.4,
      imageUrl: '../../assets/seasonings and spices/cinnamon.jpg',
      category: 'Seasonings and Spices',
    },
    {
      name: 'Cloves',
      price: 1.4,
      imageUrl: '../../assets/seasonings and spices/cloves.jpg',
      category: 'Seasonings and Spices',
    },
    {
      name: 'Mixed Spices',
      price: 1.4,
      imageUrl: '../../assets/seasonings and spices/mixed.jpg',
      category: 'Seasonings and Spices',
    },
  ];

  constructor() {}
  onSelectedCategoryChange(category: string) {
    this.selectedCategorySubject.next(category);
  }

  getProductCategories() {
    return this.categories.slice();
  }

  getProducts(category: string) {
    console.log(`In getProducts() and input category is `, category);
    if (category === 'All Categories') {
      return this.products.slice();
    }
    return this.products
      .filter((product) => product.category === category)
      .slice();
  }
}
