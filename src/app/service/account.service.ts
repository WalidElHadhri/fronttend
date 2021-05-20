import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISignupRequest } from '../model/signuprequest.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  optionRequest ={
    headers : new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
   })
  };

  constructor(private http: HttpClient) { }
  signup(signuprequest: ISignupRequest) : Observable<any>{
    return this.http.post(environment.baseUrl + "api/sign-up", signuprequest, );
  }

  signin(signin) : Observable<any>{
    return this.http.post(environment.baseUrl + "api/authenticate", signin, );
  }
}
