import { inject, Injectable, signal } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ProductDTO } from '../../core/dto/product.dto';
import { ReactiveService, Mutation } from '@dev/qore';

export interface ProductMutation extends Mutation {
  type: 'READ_ALL_PRODUCT' | 'ADD_PRODUCT' | 'REMOVE_PRODUCT' | 'UPDATE_PRODUCT';
  payload: ProductDTO | ProductDTO[] | null;
};

@Injectable({
  providedIn: 'root',
})
export class ProductFacade implements ReactiveService<ProductDTO[], ProductMutation> {


  // Facade Signal exposing products data

  data = signal<ProductDTO[]>([]);

  async compute(mutation: ProductMutation): Promise<void> {
    switch (mutation.type) {
      case 'READ_ALL_PRODUCT':
        const response = await this.productService.read();
        this.data.set(response.payload ?? []);
        break
      default:
        console.warn(`Unknown mutation type: ${mutation.type}`);
    }
  }

  // Internals

  private productService = inject(ProductService);


}
