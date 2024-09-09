import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  name = new FormControl()
  email = new FormControl()
  password = new FormControl()

  constructor(private router: Router) {
    console.log("Inside Login Controller")
  }


  onSubmit() {
    console.log("Inside on submit function")

    if (this.name.valid && this.email.valid && this.password.valid) {
      console.log("Data submitted")
      console.log(this.name.value)
      console.log(this.email.value)
      console.log(this.password.value)

      if (this.email.value === 'pravileaf@gmail.com'
        && this.password.value === '123456') {
        console.log("Successful Login")
        // this.storeLoginInformation()
        this.router.navigate(['users'])
      } else {
        console.log("Invalid credentials")
        alert("Enter valid information!")
      }
    } else {
      console.log("Invalid Form Data!.")
    }
  }

  signUpNav() {
    // window.location.href = 'signup'
    this.router.navigate(['signup'])
  }
}
