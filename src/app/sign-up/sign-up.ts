import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, CommonModule, FormsModule,ReactiveFormsModule ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp implements OnInit{

  public builder = inject(FormBuilder);

  constructor(private router: Router){}

  signupForm = this.builder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  })

  password = this.signupForm.get('password')?.value;
  confirmPassword = this.signupForm.get('confirmPassword')?.value;


  userDetails: Array<any> = []

   ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      this.userDetails = JSON.parse(getUserDetails);
      // console.log(this.userDetails);
    }
  }
   

  signUp() {
    if(this.password != this.confirmPassword){
      alert('Password and Confirm Password should be same');
    }else{
      const value = this.signupForm.value;
       this.userDetails.push({
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirmPassword
      })
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
      this.router.navigate(['/sign-in'])
    }      
  }




}
