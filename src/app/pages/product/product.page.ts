import { Component, computed, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { QuiModule , CardItem} from '../../bridges/qui-module';

@Component({
  selector: 'app-product',
  imports: [QuiModule],
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
