import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Compra } from '../models/compra';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

export class Compras {
  _idcliente: number;
  idzapatillas: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  endpoint = "http://localhost:8080/compras";

  constructor(private httpClient: HttpClient) { }

  getCompras(): Observable<Compra[]>{
    return this.httpClient.get<Compra[]>(this.endpoint).pipe(
      tap(compras => console.log("Compras retrieved")),
      catchError(this.handleError<Compra[]>("Get Compra", []))
    );
  }

  createCompra(compra: Compra): Observable<Compra>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("idcliente", compra.idcliente.toString());
    bodyEncoded.append("idzapatillas", compra.idzapatillas.toString());
    bodyEncoded.append("cantidad", compra.cantidad.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.post<Compra>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  createCompraUsingJSON(compra: Compra): Observable<Compra>{
    console.log(JSON.stringify(compra));
    return this.httpClient.post<Compra>(this.endpoint, JSON.stringify(compra), httpOptions).pipe(
      catchError(this.handleError<Compra>("Error ocurred"))
    );
  }

  deleteCompra(idcliente: number, idzapatillas: number): Observable<Compra[]>{
    return this.httpClient.delete<Compra[]>(this.endpoint + "/" + idcliente + "/" + idzapatillas).pipe(
      tap(_=> console.log(`Compra deleted: ${idcliente}, ${idzapatillas}`)),
      catchError(this.handleError<Compra[]>("Delete Compra"))
    );
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
