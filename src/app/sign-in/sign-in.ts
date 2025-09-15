import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn implements OnInit{
  ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      const userDetails = JSON.parse(getUserDetails);
      console.log(userDetails);
    }
  }

  userEmail = ""
  userPassword = ""
  

}
