import { Component, Inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html'
})
export class ProductComponent {
    products: Product[];

    constructor(private productService: ProductService,
        @Inject('baseURL') public baseURL: string) {
    }

    ngOnInit(): void {
        this.productService.getProducts()
            .subscribe(data => this.products = data);
    }
}
