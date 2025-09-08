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
    const contentArea = document.querySelector('.text-editor textarea')as HTMLElement;
    const contentBox = document.querySelector('.content')as HTMLElement;
    const titleArea = document.querySelector('.idea-area input')as HTMLElement;
    const titlebox = document.querySelector('.title')as HTMLElement

    contentArea.style.height = 'auto';
    titleArea.style.height = 'auto',
    contentArea.style.height =contentBox.scrollHeight + 50 + 'px';
    titleArea.style.height =titlebox.scrollHeight + 50 + 'px';

  }
  


}
