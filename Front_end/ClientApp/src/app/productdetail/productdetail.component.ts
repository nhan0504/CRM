import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-productdetail-component',
    templateUrl: './productdetail.component.html'
})
export class ProductdetailComponent implements OnInit {

    id: string;
    product: Product;

    constructor(private route: ActivatedRoute,
        private productService: ProductService,
        @Inject('baseURL') public baseURL: string) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => this.id = params.id);
        this.productService.getProduct(this.id)
            .subscribe(product => this.product = product);
    }

}
