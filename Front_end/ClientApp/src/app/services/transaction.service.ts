import { Injectable } from '@angular/core';
import { Transaction } from '../shared/transaction';
import { TransactionDetail } from '../shared/transactionDetail';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    constructor(private http: HttpClient) { }

    //Get all transactions
    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>('https://localhost:44310/api/transactions');
    }

    //Get a transaction by ID
    getTransaction(id: string): Observable<Transaction> {
        return this.http.get<Transaction>(baseURL + 'transactions/' + id);
    }

    //Get all transaction detial of the products in a transaction
    getTransProd(id: string): Observable<TransactionDetail> {
        return this.http.get<TransactionDetail>(baseURL + 'transactions/' + id + '/products');
    }

    //Get the totalcost of a transaction
    getTransactionTotalCost(id: string): Observable<number> {
        return this.http.get<number>(baseURL + 'transactions/' + id + '/totalcost');
    }

    //Get the total revenue from all transactions
    getTransactionsRevenue(): Observable<number> {
        return this.http.get<number>(baseURL + 'transactions/revenue');
    }
   
    //Add a transaction
    postTransaction(transaction: Transaction): Observable<Transaction> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.post<Transaction>(baseURL + 'transactions/', transaction, httpOptions);
    }

    //Edit a transaction
    putProduct(transaction: Transaction): Observable<Transaction> {
        const httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/json'
            })
        }
        return this.http.put<Transaction>(baseURL + 'transactions/' + transaction.ID, transaction, httpOptions);
    }

    //Delete a transaction
    deleteTransaction(id: string): Observable<Transaction> {
        return this.http.delete<Transaction>(baseURL + 'transactions/' + id);
    }
}