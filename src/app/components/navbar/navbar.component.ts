import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string
  constructor(private auth: AuthService, private router: Router) {
    this.username = ''
  }
  isLoggedIn():boolean{
    return this.auth.isLoggedIn()
  }

  ngOnInit(): void {
  }

  goToCart(){
    this.router.navigate(['cart'])
  }

  logout() {
    this.auth.logout()
  }
}
