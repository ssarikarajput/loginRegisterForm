import { Injectable } from '@angular/core';
import { User } from './model/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  private baseUrl : string;
  

  constructor(private httpClient : HttpClient) {
   this.baseUrl = 'http://localhost:8080/';
   }

  public loginUserFromRemote(user : User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/loginuser", user);

  }

  public registerUserFromRemote(user : User): Observable<any>{
    return this.httpClient.post<any>("http://localhost:8080/registeruser", user);
  }

  
}
