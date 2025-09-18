import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css'
})
export class BlogList implements OnInit {

  ngOnInit() {
     const getBlog = localStorage.getItem('blog');
    if(getBlog){
      this.createBlog = JSON.parse(getBlog);
      console.log(getBlog);
    }
    
  }

  createBlog: Array<any> = []

}
