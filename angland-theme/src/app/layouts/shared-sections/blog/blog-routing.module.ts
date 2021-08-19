import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModernWorkforaceIamStructureComponent} from "./modern-workforace-iam-structure/modern-workforace-iam-structure.component";
import {BlogListComponent} from "./blog-list/blog-list.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog-list',
    pathMatch: 'full'
  },
  {
    path: 'blog-list',
    component: BlogListComponent,
  },
  {
    path: 'modern-workforce-iam-structure',
    component: ModernWorkforaceIamStructureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
