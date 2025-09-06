import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CreateBlog } from './create-blog/create-blog';
import { BlogList } from './blog-list/blog-list';
import { PostDetail } from './post-detail/post-detail';
import { ErrorPage } from './error-page/error-page';
import { SignUp } from './sign-up/sign-up';
import { SignIn } from './sign-in/sign-in';
import { MyBlog } from './my-blog/my-blog';

export const routes: Routes = [
    {path:'', component: CreateBlog },
    {path:'sign-up', component:SignUp},
    {path: 'sign-in', component: SignIn},
    {path:'blog-list', component: BlogList},
    {path:'my-blog', component: MyBlog},
    {path:'post-detail', component: PostDetail},
    {path:'**', component: ErrorPage}
];
