import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail implements OnInit {
  constructor(private activeRouter: ActivatedRoute) {}
  
  
  title= '';
  content= '';
 
  ngOnInit() {
  const getBlog = localStorage.getItem('blog');
  if(getBlog){
    const allBlogs = JSON.parse(getBlog);
    const postId = Number(this.activeRouter.snapshot.params['id']);
    const post = allBlogs[postId]; 
    if(post){
      this.title = post.title;
      this.content = post.content;
    }
  }
}


  
 


}
