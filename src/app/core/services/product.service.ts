import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { ProductDTO } from '../dto/product.dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);

  private data = signal<ProductDTO[]>([]);
  public products = computed(() => this.data());
  
  readAll() {
    this.http.get<ProductDTO[]>('http://localhost:5050/products')
    .subscribe((products) => this.data.set(products));
  }

  readOne(id: string) {
    this.http.get<ProductDTO>(`http://localhost:5050/products/${id}`)
    .subscribe((product) => this.data.set([product]));
  }

  create(product: Pick<ProductDTO, 'title' | 'description' | 'price' | 'thumbnail'>) {
    this.http.post<ProductDTO>('http://localhost:5050/products', product)
    .subscribe((newProduct) => this.data.update((products) => [...products, newProduct]));
  }

  delete(id: string) {
    this.http.delete<ProductDTO>(`http://localhost:5050/products/${id}`)
    .subscribe(() => this.data.update((products) => products.filter((p) => p.id !== id)));
  }
  
}
