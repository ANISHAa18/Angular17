import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';

export const routes: Routes = [
    
    {path:"post",component:PostComponent},
    {path:"get",component:GetComponent}
];
