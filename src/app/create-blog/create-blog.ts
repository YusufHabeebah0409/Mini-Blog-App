import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  imports: [CommonModule,FormsModule],
  templateUrl: './create-blog.html',
  styleUrl: './create-blog.css'
})
export class CreateBlog {
  title = ""
  content = ""
  autoExpand() {
    const contentArea = document.querySelector('.idea-area .text-editor textarea')as HTMLElement;
    const contentBox = document.querySelector('.content')as HTMLElement;

    contentArea.style.height = 'auto';
    contentArea.style.height =contentBox.scrollHeight + 50 + 'px';
  }
  


}
