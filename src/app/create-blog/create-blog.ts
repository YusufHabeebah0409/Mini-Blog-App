import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-blog',
  imports: [CommonModule, FormsModule, RouterLink, MatSnackBarModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css'
})
export class CreateBlog implements OnInit {
  constructor(private router: Router, private snackBar: MatSnackBar) { }
  userLoggedIn: any = null;

  menuOpen = false;

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.userLoggedIn = JSON.parse(currentUser);
      console.log("Logged in user:", this.userLoggedIn);
    } else {
      this.router.navigate(['/sign-in']);
      return;
    }

    const getCreateBlog = localStorage.getItem('blog');
    if (getCreateBlog) {
      this.createBlog = JSON.parse(getCreateBlog);
      // console.log(getCreateBlog);
    }

  }


  title = ""
  content = ""
  createBlog: Array<any> = []
  autoExpand() {
    const contentArea = document.querySelector('.text-editor textarea') as HTMLElement;
    const contentBox = document.querySelector('.content') as HTMLElement;

    if (contentArea && contentBox) {
      contentArea.style.height = 'auto';
      contentArea.style.height = contentBox.scrollHeight + 50 + 'px';
    }

  }

  postBlog() {
    if (this.title === '' || this.content === '') {
      this.snackBar.open('This field cannot be empty', 'Close', {
        duration: 1000,
        horizontalPosition: 'left',
        verticalPosition: 'top',
      });

    } else {
      this.createBlog.push({ title: this.title, content: this.content })
      localStorage.setItem('blog', JSON.stringify(this.createBlog))
      this.title = '';
      this.content = '';
      this.snackBar.open('Blog Created Successfully ✅', 'Close', {
        duration: 1000,
        horizontalPosition: 'left',
        verticalPosition: 'top',
      });
      // this.router.navigate(['/blog-list'])
    }

  }

  logout() {
    const logOut = confirm("Are you sure you want to log out?");
    
    if (logOut === true) {
      localStorage.removeItem('currentUser');
    this.router.navigate(['/sign-in']);
    this.snackBar.open('Logged out successfully 🚪', 'Close', {
      duration: 1500,
      horizontalPosition: 'left',
      verticalPosition: 'top',
    });

    }
    
  }

  openNav() {
    const panel = document.getElementById("mySidepanel");
    if (panel) {
      panel.style.width = "350px";
    }
  }

  closeNav() {
    const panel = document.getElementById("mySidepanel");
    if (panel) {
      panel.style.width = "0";
    }
  }

}





