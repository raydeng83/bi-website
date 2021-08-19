import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ModernWorkforaceIamStructureComponent } from './modern-workforace-iam-structure/modern-workforace-iam-structure.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ModernWorkforaceIamStructureComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class BlogModule { }
