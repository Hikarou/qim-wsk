import { Component, computed, inject } from '@angular/core';
import { CardItem, Card } from '../../components/card/card';
import { Button } from "../../components/button/button";
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product',
  imports: [Card, Button],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss',
})
export class ProductPage {

  productService = inject(ProductService);

  constructor() {
    console.log('ProductPage Instantiated');
  }

  ngOnInit(){
    console.log('ProductPage Initialized in DOM');
    this.productService.readAll();
  }

  ngOnDestroy(){
    console.log('ProductPage Destroyed from DOM');
  }

  items = computed<CardItem[]>(
    () => this.productService.products()
    .map((p) => ({
      id: p.id,
      title: p.title as CardItem['title'],
      description: p.description,
      url: p.thumbnail as CardItem['url'],
    }))

  );

}
