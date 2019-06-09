import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://mvcmoviedatabase.azurewebsites.net/api/articulosApi/'
  //private productUrl = 'api/products/products.json'
  //private productUrl = 'http://localhost:1719/api/Articulosapi/'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError));
  }
  getProductDetail(id: number): Observable<IProduct> {
    console.log(`getProductDetail: ${id}`);
    return this.http.get<IProduct>(this.productUrl + id).pipe(
      tap(data => console.log('Detail: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }
  createProduct(product: IProduct) {

  }

  private handleError(err: HttpErrorResponse) {
    //TODO: Log errors to server
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error Ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status},
          error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}