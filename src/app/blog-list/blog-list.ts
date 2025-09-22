import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css'
})
export class BlogList implements OnInit {
  author:any = null;

  ngOnInit() {
     const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.author = JSON.parse(currentUser);
      console.log("Logged in author:", this.author);
    }


     const getBlog = localStorage.getItem('blog');
    if(getBlog){
      this.createBlog = JSON.parse(getBlog);
      console.log(getBlog);
    }
    
  }

  createBlog: Array<any> = [];
}
