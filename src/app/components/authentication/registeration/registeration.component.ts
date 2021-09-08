import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  states = [
    'Maharashtra',
    'Kerala',
    'Delhi',
    'Chennai'
  ]

  user: User

  constructor(private auth: AuthService) {
    this.user = new User()
  }

  onSubmit(): void {
    // Process checkout data here
    console.log(this.user)
    this.auth.registerUser(this.user).subscribe((response)=>{
    })
  }

  ngOnInit(): void {
  }

}
