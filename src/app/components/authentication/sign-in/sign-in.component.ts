import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User

  constructor(private auth: AuthService) {
    this.user = new User()
  }

  onSubmit(): void {
    this.auth.login(this.user).subscribe((response)=>{
      let user = {
        'name': response.user.firstName,
        'phoneno': response.user.mobile,
        'email': response.user.email,
        'password': response.user.password,
        'createdAt': response.user.createdAt,
        'token': response.token
      }
      console.log(user)
    },
    (error)=>{
      alert("User authentication failed!")
    })
  }

  ngOnInit(): void {
  }

}
