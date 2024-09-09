import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: any[];

  constructor() {
    this.users = [];
  }
  // Life cycle
  ngOnInit() {
    console.log("user component loaded")
    this.getUserData()
  }

  getUserData() {
    this.users = JSON.parse(localStorage.getItem('user') || '[]')
    console.log(this.users)

    // Object type to Array Type
    this.users = Object.keys(this.users).map(key => this.users[key as keyof typeof this.users])
    console.log(this.users)
  }
}
