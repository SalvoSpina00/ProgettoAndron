import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = "  http://localhost:5001/garante/";
  public token : string;

  constructor(private http: HttpClient) { }


  createAuthHeader(){
    let headers= new HttpHeaders({
        'Authorization': 'Bearer ' + this.token,
        'Content-Type': 'application/json'
    })
    return headers
  }
  
  createHeader(){
    let headers= new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return headers
  }

  post({ path, data, httpHeaders=this.createAuthHeader() ,handler, error=(error)=>{} }){
    this.http.post(this.url+path, data, {headers: httpHeaders}).subscribe(
      {
        next: handler,
        error: error,
      }
    )
  }

  put({path, data={}, httpHeaders=this.createAuthHeader(), httpParam={} ,handler, error=(error)=>{}}){
    this.http.put(this.url+path,data,{ headers: httpHeaders, params:new HttpParams({fromObject: httpParam})}).subscribe(
      {
        next: handler,
        error: error,
      }
    )
  }  


  delete({path, httpHeaders=this.createAuthHeader(), httpParam , handler, error=(error)=>{}}){

    this.http.delete(this.url+path,{ headers: httpHeaders, params:new HttpParams({fromObject: httpParam})}).subscribe(
      {
        next: handler,
        error: error,
      }
    )
  }

  get({ path, handler, error=(error)=>{}, httpHeaders=this.createAuthHeader(), httpParam={} }){
    this.http.get(this.url+path,{ headers: httpHeaders, params:new HttpParams({fromObject: httpParam})}).subscribe(
      {
        next: handler,
        error: error,
      }
    )
  }



}
