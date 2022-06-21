import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {catchError } from 'rxjs/operators';

import { throwError as observableThrowError } from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

const API_URL_BUSCAR_USUARIO= `${environment.apiUrl}/buscarUsuario?`;
const API_URL_OBTENER_TIPOS_DOCUMENTOS=  `${environment.apiUrl}/consultarTipoDocumento`;
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
 id: string;
 tipoDocumento: string;
  constructor(private http: HttpClient) { }

  getTipoDocumento(): Observable<any>{
    return this.http.get<any>(API_URL_OBTENER_TIPOS_DOCUMENTOS,
      {
        headers: new HttpHeaders({
        'content-type':'application/json',
        'Access-Control-Allow-Origin' : '*'
      

        })
      });
  }

  findUsuario( id: string,  tipoDocumento: string): Observable<any>  {
     return this.http.get<any>( API_URL_BUSCAR_USUARIO+"id="+id+"&tipoDocumento="+tipoDocumento,
      {
        headers: new HttpHeaders({
        "content-type":"application/json"
        })
      }).pipe(catchError(this.errorHandler));
    
  }

  errorHandler(error:HttpErrorResponse){
    return observableThrowError(error.message);
  }

 getId(){
  return this.id;

 }
 getTipoDoc(){
  return this.tipoDocumento;
 }

 setId(id){
  this.id=id;

 }
 setTipoDoc(tipoDoc){
  this.tipoDocumento=tipoDoc;
  
 }

}
