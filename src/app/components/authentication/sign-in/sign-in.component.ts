import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User

  constructor(private auth: AuthService, private router: Router) {
    this.user = new User()
  }

  onSubmit(): void {
    this.auth.login(this.user).subscribe((response)=>{ 
      this.router.navigate(['home']).catch((error)=>{console.log('Failed to navigate to home')})
      this.auth.saveLoggedInData(response)
    },
    (error)=>{
      alert("User authentication failed!")
    })
  }

  goToRegister(){
    this.router.navigate(['registration'])
  }

  ngOnInit(): void {
  }

}
