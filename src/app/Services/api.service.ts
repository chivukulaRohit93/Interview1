import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public api1 = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http:HttpClient) { }

    get(){
      return this.http.get(this.api1);
    }
}
