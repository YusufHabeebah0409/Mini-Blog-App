import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-blog',
  imports: [CommonModule,RouterLink],
  templateUrl: './my-blog.html',
  styleUrl: './my-blog.css'
})
export class MyBlog {
   ngOnInit() {
     const getBlog = localStorage.getItem('blog');
    if(getBlog){
      this.createBlog = JSON.parse(getBlog);
      console.log(getBlog);
    }
    
  }

  createBlog: Array<any> = []

  delNote(index: number) {
    const removeItem = confirm("Are You Sure You Want To Delete This Note ")
    if (removeItem === true) {
      this.createBlog.splice(index, 1)
      localStorage.setItem('blog', JSON.stringify(this.createBlog))
    }
  }


}
