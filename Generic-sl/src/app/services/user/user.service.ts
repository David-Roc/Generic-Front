import { Injectable } from '@angular/core';

//Services modules
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpOptions: any;
  public token: string;

  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
   }

  public createUser(user)
  {
    return this.http.post('http://127.0.0.1:8000/user_signin', JSON.stringify(user), this.httpOptions);
  }
}

