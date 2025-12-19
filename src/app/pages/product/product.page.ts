import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { QuiModule , CardItem} from '../../bridges/qui-module';
import { ProductDTO } from '../../core/dto/product.dto';

@Component({
  selector: 'app-product',
  imports: [QuiModule],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss',
})
export class ProductPage {

  productService = inject(ProductService);

  async ngOnInit(){
    const response = await this.productService.read();
    if(response.status === 'success') {
      this.products.set( response.payload as ProductDTO[]);
    }
    
  }
 
  products = signal<ProductDTO[]>([])

  items = computed<CardItem[]>(
    () => this.products()
    .map((p) => ({
      id: p.id,
      title: p.title as CardItem['title'],
      description: p.description,
      url: p.thumbnail as CardItem['url'],
    }))

  );

}
