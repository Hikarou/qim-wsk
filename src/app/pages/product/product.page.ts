import { Component, inject, signal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { QuiModule } from '../../bridges/qui-module';
import { ProductDTO } from '../../core/dto/product.dto';
import { ToCardItemPipe } from './to-card-item-pipe';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [QuiModule, ToCardItemPipe, NgTemplateOutlet, JsonPipe],
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

}
