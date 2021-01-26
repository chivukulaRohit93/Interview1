import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  public api1 = "http://localhost:3000/users";
  createuser(user){
    return this.http.post(this.api1,user);
  }
  getuser(){
    return this.http.get(this.api1);
  }
}
