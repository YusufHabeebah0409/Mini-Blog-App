import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  imports: [CommonModule,  FormsModule, MatSnackBarModule],
  templateUrl: './edit-blog.html',
  styleUrl: './edit-blog.css'
})
export class EditBlog implements OnInit {
  constructor(private activeRouter: ActivatedRoute, private router:Router, private snackBar: MatSnackBar) { }

  title = '';
  content = '';
  postId: number = -1;

  ngOnInit() {
    const getBlog = localStorage.getItem('blog');
    this.postId = Number(this.activeRouter.snapshot.params['id']);

    if (getBlog) {
      const allBlogs = JSON.parse(getBlog);
      const post = allBlogs[this.postId];
      if (post) {
        this.title = post.title;
        this.content = post.content;
      }
    }
  }




  editBlog() {
    const getBlog = localStorage.getItem('blog');
    if (getBlog) {
      const allBlogs = JSON.parse(getBlog);
      allBlogs[this.postId] = {
        title: this.title,
        content: this.content
      };

      localStorage.setItem('blog', JSON.stringify(allBlogs));

      this.snackBar.open('✅ Blog updated successfully!', 'Close', {
          duration: 1000,
          horizontalPosition: 'left',
          verticalPosition: 'top',
        });

      
      this.router.navigate(['/my-blog']);
    }
  }
}


