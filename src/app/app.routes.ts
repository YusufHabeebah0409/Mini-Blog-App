import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CreateBlog } from './create-blog/create-blog';
import { BlogList } from './blog-list/blog-list';
import { PostDetail } from './post-detail/post-detail';
import { ErrorPage } from './error-page/error-page';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { MyBlog } from './my-blog/my-blog';
import { EditBlog } from './edit-blog/edit-blog';

export const routes: Routes = [
    {path:'', component: BlogList, title: 'Blog List'},
    {path:'create', component: CreateBlog, title: 'Create Blog'},
    {path:'sign-up', component:SignUp, title: 'Sign Up'},
    {path: 'sign-in', component: SignIn, title: 'Sign In'},
    {path:'my-blog', component: MyBlog, title: 'My Blog'},
    {path:'edit/:id', component:EditBlog, title:'Edit Blog'},
    {path:'post-detail/:id', component: PostDetail, title: 'Post Detail'},
    {path:'**', component: ErrorPage}
];
