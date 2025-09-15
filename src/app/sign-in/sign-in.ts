import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink,CommonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn implements OnInit{
  constructor(private router:Router){}
  ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      this.userDetails = JSON.parse(getUserDetails);
      console.log(this.userDetails);
    }
  }

  userEmail = ""
  userPassword = ""
  userDetails: Array<any> = []
  signIn() {
    const user = this.userDetails.find(user => user.email === this.userEmail && user.password === this.userPassword);
    if (this.userEmail === '' || this.userPassword === '') {
      alert('Please enter both email and password');
    }else if(user) {
      alert('Sign In Successful ✅' + user.username);
      this.userEmail = '';
      this.userPassword = '';
      this.router.navigate(['/']);
      
    } else {
      alert('Invalid email or password ❌');
    }
  }

}
