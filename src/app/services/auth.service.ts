import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_PATH = "http://apolis-grocery.herokuapp.com/api/"

  constructor(private http: HttpClient) { }

  registerUser(user: User):Observable<any>{
    let obj = {
      'firstName': user.name,
      'email': user.email,
      'mobile': user.phoneno,
      'password': user.password
    }
    return this.http.post<any>(this.BASE_PATH+'auth/register',obj)
  }
  login(user: User):Observable<any>{
    let obj = {
      'email': user.email,
      'password': user.password
    }
    return this.http.post<any>(this.BASE_PATH+'auth/login',obj)
  }
}
