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
    // Process checkout data here
    console.log(this.user)
    this.auth.login(this.user).subscribe((response)=>{
    })
  }

  ngOnInit(): void {
  }

}
