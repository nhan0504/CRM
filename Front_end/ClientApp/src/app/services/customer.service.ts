import { Injectable } from '@angular/core';
import { Customer } from '../shared/customer';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../shared/transaction';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    //Get all customers
    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(baseURL + 'customers');
    }

    //Get a customer by ID
    getCustomer(id: string): Observable<Customer> {
        return this.http.get<Customer>(baseURL + 'Customers/' + id);
    }

    //Get a customer's total number of transactions
    getCustomerTotaltrans(id: string): Observable<number> {
        return this.http.get<number>(baseURL + 'Customers/' + id + '/totaltrans');
    }

    //Get a customer's all transactions details
    getCustomerTransaction(id: string): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(baseURL + 'Customers/' + id + '/transaction');
    }

    //Edit a customer information
    putCustomer(customer: Customer): Observable<Customer> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.put<Customer>(baseURL + 'customers/' + customer.ID, customer, httpOptions);
    }

    //Add a customer
    postCustomer(customer: Customer): Observable<Customer> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.post<Customer>(baseURL + 'customers/', customer, httpOptions);
    }

    //Delete a customer
    deleteCustomer(id: string): Observable<Customer> {
        return this.http.delete<Customer>(baseURL + 'customers/' + id);
    }
}