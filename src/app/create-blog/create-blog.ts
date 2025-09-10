import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-blog',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css'
})
export class CreateBlog {
  title = ""
  content = ""
  autoExpand() {
    const contentArea = document.querySelector('.text-editor textarea')as HTMLElement;
    const contentBox = document.querySelector('.content')as HTMLElement;

    if(contentArea && contentBox){
       contentArea.style.height = 'auto';
    contentArea.style.height =contentBox.scrollHeight + 50 + 'px';

    }
   
  }
  


}
