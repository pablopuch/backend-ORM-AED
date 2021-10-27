import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

export class Clientes {
  _id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  endpoint = "http://localhost:8080/clientes";

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.endpoint).pipe(
      tap(clientes => console.log("Clientes retrieved")),
      catchError(this.handleError<Cliente[]>("Get cliente", []))
    );
  }

  getClienteById(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(this.endpoint + "/" + id).pipe(
      tap(_ => console.log(`Cliente fetched: ${id}`)),
      catchError(this.handleError<Cliente>(`Get Cliente id=${id}`))
    );
  }

  createCliente(cliente: Cliente): Observable<Cliente>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", cliente.nombre.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.post<Cliente>(this.endpoint, body, httpOptionsUsingUrlEncoded);
  }

  createClienteUsingJSON(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.endpoint, JSON.stringify(cliente), httpOptions).pipe(
      catchError(this.handleError<Cliente>("Error ocurred"))
    );
  }

  updateClientes(idCliente, cliente: Cliente): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("nombre", cliente.nombre.toString());
    const body = bodyEncoded.toString();
    return this.httpClient.put(this.endpoint + "/" + idCliente, body, httpOptionsUsingUrlEncoded).pipe(
      tap(_=> console.log(`Cliente update : ${idCliente}`)),
      catchError(this.handleError<Cliente[]>("Update cliente"))
    );
  }

  deleteCliente(idCliente: number): Observable<Cliente[]>{
   return this.httpClient.delete<Cliente[]>(this.endpoint + "/" + idCliente).pipe(
     tap(_=> console.log(`Cliente deleted: ${idCliente}`)),
     catchError(this.handleError<Cliente[]>("Delete cliente"))
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
