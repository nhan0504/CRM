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
    public forecasts: WeatherForecast[];
    customers: Customer[];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //  }

    num: string;

    //constructor(http: HttpClient) {
    //    http.get<string>('https://localhost:44310/api/customers/0/totaltrans').subscribe(result => {
    //        this.num = result;
    //}

    //ngOnInit(): void {
    //    this.customerService.getCustomers()
    //        .subscribe(customers => this.customers = customers);
    //}
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}