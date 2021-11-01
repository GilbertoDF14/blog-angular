import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/blogrest/public/";

@Injectable({
  providedIn: 'root'
})
export class BlogrestService {

  constructor(private http: HttpClient) {}

  login(user:string, pass:string){
    return this.http.get(URL + "login/" + user + "/" + pass)
  }
  
}
