import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_PATH = "http://apolis-grocery.herokuapp.com/api/"

  private user: User
  constructor(private http: HttpClient, private router: Router) {
    this.user = new User()
    this.loadLoggedInData()
  }

  registerUser(user: User): Observable<any> {
    let obj = {
      'firstName': user.name,
      'email': user.email,
      'mobile': user.phoneno,
      'password': user.password
    }
    return this.http.post<any>(this.BASE_PATH + 'auth/register', obj)
  }
  login(user: User): Observable<any> {
    let obj = {
      'email': user.email,
      'password': user.password
    }
    return this.http.post<any>(this.BASE_PATH + 'auth/login', obj)
  }

  saveLoggedInData(data: any) {
    let user = {
      'name': data.user.firstName,
      'phoneno': data.user.mobile,
      'email': data.user.email,
      'password': data.user.password,
      'createdAt': data.user.createdAt,
      'token': data.token
    }
    this.user.name = user.name
    this.user.phoneno = user.phoneno
    this.user.email = user.email
    this.user.password = user.password
    this.user.token = user.token
    this.user.createdAt = user.createdAt
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  loadLoggedInData() {
    let user = JSON.parse(localStorage.getItem('user')!)
    if(user == null){
      console.log('User not logged in')
    }
    else {
      this.user = user
      console.log(`${this.user.name} is logged in`)
    }
  }

  isLoggedIn():boolean{
    if (this.user.token == undefined) {
      return false
    }
    else {
      return true
    }
  }

  logout(){
    localStorage.removeItem('user')
    this.user = new User()
    this.router.navigate(['login']).catch((error)=>{console.log('Failed to navigate to home')})
  }

  getUsername():string{
    return this.user.name
  }
}
