import { Injectable } from '@angular/core';
import { TransactionDetail } from '../shared/transactionDetail';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TransactionDetailService {

    constructor(private http: HttpClient) { }

    //Get all transactions detail
    getTransactionsDetail(): Observable<TransactionDetail[]> {
        return this.http.get<TransactionDetail[]>(baseURL + 'transactionsdetails');
    }

    //Add transaction detail
    postTransactionDetail(transactionDetail: TransactionDetail): Observable<TransactionDetail> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.post<TransactionDetail>(baseURL + 'transactiondetails/', transactionDetail, httpOptions);
    }
}