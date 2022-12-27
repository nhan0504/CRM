import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/customer';
import { CustomerService } from '../services/customer.service';

@Component({
    selector: 'app-customerdetail-component',
    templateUrl: './customerdetail.component.html'
})
export class CustomerdetailComponent implements OnInit {
    //customer!: Customer | null;
    //customerIds!: number[];
    id: String;

    //constructor(private customerService: CustomerService,
    //    @Inject('baseURL') public baseURL: string) {
    //}
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log('The id of this route is: ', params.id);
        });
        //this.customerService.getCustomerIds()
        //    .subscribe(customerIds => this.customerIds = customerIds);
    }

}
