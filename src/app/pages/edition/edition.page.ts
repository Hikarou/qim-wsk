import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { ProductDTO } from '../../core/dto/product.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edition',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edition.page.html',
  styleUrl: './edition.page.scss',
})
export class EditionPage {

  productService = inject(ProductService)

  product = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    thumbnail: new FormControl('', [Validators.required])
  });

  feedback = signal('') ;

  send() {
    console.log(this.product.value);

    if(this.product.invalid) return this.feedback.set('Formulaire invalide !');

    this.productService.create(
      this.product.value as Pick<ProductDTO, "title" | "description" | "price" | "thumbnail">
    );

    this.feedback.set('Produit créé avec succès !');
    this.product.reset();
  }

}
