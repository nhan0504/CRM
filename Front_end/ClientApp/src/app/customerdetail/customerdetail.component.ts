import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/customer';
import { CustomerService } from '../services/customer.service';

@Component({
    selector: 'app-customerdetail-component',
    templateUrl: './customerdetail.component.html'
})
export class CustomerdetailComponent implements OnInit {

    id: string;
    customer: Customer;

    constructor(private route: ActivatedRoute,
        private customerService: CustomerService,
        @Inject('baseURL') public baseURL: string) { }

    ngOnInit(): void {
        this.route.params.subscribe(params =>  this.id = params.id);
        this.customerService.getCustomer(this.id)
            .subscribe(customer => this.customer = customer);
    }

}
