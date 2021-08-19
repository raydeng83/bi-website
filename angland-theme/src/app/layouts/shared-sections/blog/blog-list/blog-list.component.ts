import { Component, OnInit } from '@angular/core';
import {LandingFixService} from "../../../../shared/services/landing-fix.service";
import {egretAnimations} from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  animations: egretAnimations,
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(
      private fix: LandingFixService
  ) { }

  scrollToTop() {
    window.scroll(0,0);
  }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }
}
