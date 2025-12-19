import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductDTO } from '../../core/dto/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {

  productService = inject(ProductService);

  async load(){
    const response = await this.productService.read();
    
    if(response.status === 'success') {
      this.products.set( response.payload as ProductDTO[]);
    }
    
  }
 
  products = signal<ProductDTO[]>([])
  
}
