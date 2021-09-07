import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

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
  pass: string

  constructor() {
    this.user = new User()
    this.pass = ''
  }

  ngOnInit(): void {
  }

}
