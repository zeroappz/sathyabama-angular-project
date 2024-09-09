import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgForOf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {



  genders = ['Male', 'Female', 'Others']
  countries = ['IN', 'UK', 'USA', 'JPN']

  constructor(private router: Router) {

  }


  signUpForm = new FormGroup({
    firstName: new FormControl('First Name', Validators.required),
    lastName: new FormControl('Last Name'),
    email: new FormControl('example@gmail.com', Validators.required),
    password: new FormControl(Validators.minLength(6)),
    confirmPassword: new FormControl(Validators.minLength(6)),
    gender: new FormControl('Male', Validators.required),
    country: new FormControl('IN', Validators.required),
    address: new FormControl('Bengaluru, IN', Validators.required),
  })

  onSubmit() {
    if (this.signUpForm.invalid) {
      console.log("Form is Invalid")
      return;
    } else {
      if (this.signUpForm.value.password === this.signUpForm.value.confirmPassword) {
        console.log("Sign Up Successful")
        this.storeUserData()
        this.router.navigate(['users'])
      } else {
        console.log("Sign Up failed")
        alert("Password mismatched!, Re enter!")
      }
    }
  }

  storeUserData() {
    localStorage.setItem('user', JSON.stringify(this.signUpForm.value))
    console.log(localStorage.getItem('user'))
  }

  signInNav() {
    this.router.navigate(['signin'])
  }
}
