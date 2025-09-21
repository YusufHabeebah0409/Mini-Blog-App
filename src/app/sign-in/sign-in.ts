import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn implements OnInit {
  public builder = inject(FormBuilder);

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  signinForm = this.builder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
  })
  ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      this.userDetails = JSON.parse(getUserDetails);
      // console.log(this.userDetails);
    }
  }


  userDetails: Array<any> = []
  signIn() {

    const userEmail = this.signinForm.get('email')?.value;
    const userPassword = this.signinForm.get('password')?.value;
    
    const user = this.userDetails.find(user => user.email === userEmail && user.password === userPassword );

    if (user) {
      const value = this.signinForm.value;
      const email = value.email;
      const password = value.password;

      if (email === user.email && password === user.password) {
        
        localStorage.setItem('currentUser', JSON.stringify(user));

        this.snackBar.open('Sign In Successful ✅' + user.firstName, 'Close', {
          duration: 1000,
          horizontalPosition: 'left',
          verticalPosition: 'top',
        });

        this.signinForm.reset();

        setTimeout(() => {
          this.router.navigate(['/create'])
        }, 500);

      }


    } else {
      this.snackBar.open('Invalid email or password ❌' + user.firstName, 'Close', {
          duration: 1000,
          horizontalPosition: 'left',
          verticalPosition: 'top',
        });

    }
  }

}
