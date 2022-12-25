import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { TransactionDetail } from '../shared/transactionDetail';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    //Get all products
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(baseURL + 'products');
    }

    //Get a product by ID
    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(baseURL + 'products/' + id);
    }

    //Get all transaction detail that contain the product
    getProInTransactions(id: string): Observable<TransactionDetail> {
        return this.http.get<TransactionDetail>(baseURL + 'products/' + id + '/inTransactions');
    }

    //Get the number of transaction that contain the product
    getProdNumTransaction(id: string): Observable<number> {
        return this.http.get<number>(baseURL + 'products/' + id + '/numTransactions');
    }

    //Get the number of item sold for a product
    getProdNumSold(id: string): Observable<number> {
        return this.http.get<number>(baseURL + 'products/' + id + '/numSold');
    }

    //Get the number of distinct product sold
    getProdSold(): Observable<number> {
        return this.http.get<number>(baseURL + 'products/sold');
    }

    //Get the total revenue of selling a product
    getProdRevenue(id: string): Observable<number> {
        return this.http.get<number>(baseURL + 'products/' + id + '/revenue');
    }

    //Add a product
    postProduct(product: Product): Observable<Product> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.post<Product>(baseURL + 'products/', product, httpOptions);
    }

    //Edit a product
    putProduct(product: Product): Observable<Product> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.put<Product>(baseURL + 'products/' + product.ID, product, httpOptions);
    }

    //Delete a product
    deleteProduct(id: string): Observable<Product> {
        return this.http.delete<Product>(baseURL + 'products/' + id);
    }
}