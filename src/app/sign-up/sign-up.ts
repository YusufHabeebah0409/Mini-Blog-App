import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp implements OnInit{

  ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      const userDetails = JSON.parse(getUserDetails);
      console.log(userDetails);
    }
  }
  

  userName = ""
  userEmail = ""
  userPassword = ""
  confirmUserPassword = ""

  userDetails: Array<any> = []

   

  signUp() {
    if(this.userName == "" || this.userEmail == "" || this.userPassword == "" || this.confirmUserPassword == ""){
      alert('All Input feild are required ')
    }else{
      this.userDetails.push({ username: this.userName, email: this.userEmail, password: this.userPassword, passwordConfirm: this.confirmUserPassword })
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails))
            
      this.userName = ''
      this.userEmail = ''
      this.userPassword = ''
      this.confirmUserPassword = ''

      window.location.href = '/sign-in'

    }

           
  }




}
