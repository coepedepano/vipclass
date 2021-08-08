import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICategorie } from 'src/app/model/categorie.model';
import { ICoin } from 'src/app/model/coin.model';
import { IStartDate } from 'src/app/model/startingDates.model';
import { BaseService } from 'src/app/services/base.service';
import { IProduct } from './product.model';


@Injectable()
export class ProductService extends BaseService {

  
    constructor(private http: HttpClient) { super() } 
    private urlStartDate = "/assets/api/initialDate.json";
    private urlExpirationDate = "/assets/api/especificDates.json";

    getAll(): Observable<IProduct[]> {
        return this.http
            .get<IProduct[]>(this.UrlServiceV1 + "Product", super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    getById(id: string): Observable<IProduct> {
        return this.http
            .get<IProduct>(this.UrlServiceV1 + "Product/" + id, super.ObterAuthHeaderJson())
            .pipe(catchError(super.serviceError));
    }

    new(product: IProduct): Observable<IProduct> {
        return this.http
            .post(this.UrlServiceV1 + "Product", product, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    update(product: IProduct): Observable<IProduct> {
        return this.http
            .put(this.UrlServiceV1 + "Product/" + product.productId, product, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    delete(id: string): Observable<IProduct> {
        return this.http
            .delete(this.UrlServiceV1 + "Product/" + id, super.ObterAuthHeaderJson())
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    

    getCategories(): Observable<ICategorie[]> {
        return this.http
            .get<ICategorie[]>(this.UrlServiceV1 + "Categories/GetAll")
            .pipe(catchError(super.serviceError));

    }
//this.UrlServiceV1 + "Comum/ListAllCategorie"
    getCoins(): Observable<ICoin[]> {
        return this.http
            .get<ICoin[]>(this.UrlServiceV1 + "Coins/GetAll") 
            .pipe(catchError(super.serviceError));      
    }
 //("https://localhost:44374/api/Comum/ListAllCoin")
 getStartDates():  Observable<IStartDate[]>{
     return this.http
         .get<IStartDate[]>(this.urlStartDate)
         .pipe(catchError(super.serviceError));  
 }
 getExpirationDates():  Observable<IStartDate[]>{
    return this.http
        .get<IStartDate[]>(this.urlExpirationDate)
        .pipe(catchError(super.serviceError));  
}
}
