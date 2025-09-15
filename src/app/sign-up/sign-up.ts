import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp implements OnInit{
  constructor(private router: Router){}

  userName = ""
  userEmail = ""
  userPassword = ""
  confirmUserPassword = ""

  userDetails: Array<any> = []

   ngOnInit() {
    const getUserDetails = localStorage.getItem('userDetails');
    if (getUserDetails) {
      this.userDetails = JSON.parse(getUserDetails);
      console.log(this.userDetails);
    }
  }
   

  signUp() {
    if(this.userName == "" || this.userEmail == "" || this.userPassword == "" || this.confirmUserPassword == ""){
      alert('All Input feild are required ')
    }else if(this.userPassword != this.confirmUserPassword){
      alert('Password and Confirm Password should be same')
    }else{
      this.userDetails.push({ username: this.userName, email: this.userEmail, password: this.userPassword, passwordConfirm: this.confirmUserPassword })
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails))
            
      this.userName = ''
      this.userEmail = ''
      this.userPassword = ''
      this.confirmUserPassword = ''
       
      this.router.navigate(['/sign-in']);
    }      
  }




}
