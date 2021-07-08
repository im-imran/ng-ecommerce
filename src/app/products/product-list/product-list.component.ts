import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  categories: string[] = [''];
  selectedCategory = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.selectedCategory = 'All Categories';
    this.categories = this.productsService.getProductCategories();
  }

  onSelectCategory(category: string) {
    this.selectedCategory = category;
    this.productsService.onSelectedCategoryChange(category);
  }

}
