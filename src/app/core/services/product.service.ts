
import { Injectable } from '@angular/core';
import { ProductDTO } from '../dto/product.dto';
import { Qore } from '../../bridges/qore';


@Injectable({
  providedIn: 'root',
})
export class ProductService extends Qore.CrudService<ProductDTO> {
  override endpoint:Qore.Url =  `http://localhost:5050/products`;
  
  
}
