import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/customer';
import { CustomerService } from '../services/customer.service';
import { Transaction } from '../shared/transaction';

@Component({
    selector: 'app-customerdetail-component',
    templateUrl: './customerdetail.component.html'
})
export class CustomerdetailComponent implements OnInit {

    id: string;
    customer: Customer;
    totaltrans: number;
    transactions: Transaction[];

    constructor(private route: ActivatedRoute,
        private customerService: CustomerService,
        @Inject('baseURL') public baseURL: string) { }

    ngOnInit(): void {
        this.route.params.subscribe(params =>  this.id = params.id);
        this.customerService.getCustomer(this.id)
            .subscribe(customer => this.customer = customer);
        this.customerService.getCustomerTotaltrans(this.id)
            .subscribe(data => this.totaltrans = data);
        this.customerService.getCustomerTransaction(this.id)
            .subscribe(data => this.transactions = data);
    }

}
