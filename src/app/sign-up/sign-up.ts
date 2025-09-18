import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule,MatSnackBarModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp implements OnInit {

  public builder = inject(FormBuilder);

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  signupForm = this.builder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  })


  userDetails: Array<any> = []

  ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      this.userDetails = JSON.parse(getUserDetails);
      // console.log(this.userDetails);
    }
  }


  signUp() {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;


    if (password != confirmPassword) {
      this.snackBar.open('Password and Confirm Password should be same ❌', 'Close', {
      duration: 1000, 
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
    } else {
      const value = this.signupForm.value;
      this.userDetails.push({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword
      })
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
      this.signupForm.reset();
      this.snackBar.open('Signup successful ✅', 'Close', {
        duration: 1000,
        horizontalPosition: 'left',
        verticalPosition: 'top',
      });
      setTimeout(() => {
        this.router.navigate(['/sign-in'])
      }, 500);
    }
    }





  }
