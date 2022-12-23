import { Injectable } from '@angular/core';
import { Customer } from '../shared/customer';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    //Get all customers
    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(baseURL + 'Customers');
    }

    //Get a customer by ID
    getCustomer(id: string): Observable<Customer> {
        return this.http.get<Customer>(baseURL + 'Customers/' + id);
    }

    //Get a customer's total number of transactions
    getCustomerTotaltrans(id: string): Observable<Customer> {
        return this.http.get<Customer>(baseURL + 'Customers/' + id + '/totaltrans');
    }

    //Get a customer's all transactions details
    getCustomerTransaction(id: string): Observable<Customer> {
        return this.http.get<Customer>(baseURL + 'Customers/' + id + '/transaction');
    }

    //getFeaturedDish(): Observable<Customer> {
    //    return this.http.get<Customer[]>(baseURL + 'customers?featured=true')
    //        .pipe(map(customers => customers[0]));
    //}

    //getDishIds(): Observable<string[] | any> {
    //    return this.getCustomers().pipe(map(dishes => dishes.map(customer => customer.ID)))
    //        .pipe(catchError(error => error));
    //}

    //putCustomer(customer: Customer): Observable<Customer> {
    //    const httpOptions = {
    //        headers: new HttpHeaders({
    //            'content-Type': 'application/json'
    //        })
    //    }
    //    return this.http.put<Customer>(baseURL + 'customers/' + customer.ID, customer, httpOptions);
    //}

}