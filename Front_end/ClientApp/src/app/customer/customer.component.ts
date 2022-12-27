import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
   
    customers: Customer[];

    constructor(private customerService: CustomerService,
        @Inject('baseURL') public baseURL: string) {
    }

    ngOnInit(): void {
        this.customerService.getCustomers()
            .subscribe(data => this.customers = data);
    }
}

