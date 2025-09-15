import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-blog',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css'
})
export class CreateBlog implements OnInit {
  ngOnInit(){
    const getCreateBlog = localStorage.getItem('blog');
    if(getCreateBlog){
      this.createBlog = JSON.parse(getCreateBlog);
      console.log(getCreateBlog);
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
      alert('This field cannot be empty')

    } else {
      this.createBlog.push({ title: this.title, content: this.content })
      localStorage.setItem('blog', JSON.stringify(this.createBlog))
      this.title = '';
      this.content = '';
    }

  }







}
