import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CreateBlog } from './create-blog/create-blog';
import { BlogList } from './blog-list/blog-list';
import { PostDetail } from './post-detail/post-detail';
import { ErrorPage } from './error-page/error-page';

export const routes: Routes = [
    {path:'', component: CreateBlog },
    {path:'blog-list', component: BlogList},
    {path:'post-detail', component: PostDetail},
    {path:'**', component:ErrorPage}
];
