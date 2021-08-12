import { Component, OnInit } from '@angular/core';
import {LandingFixService} from "../../../shared/services/landing-fix.service";
import {egretAnimations} from "../../../shared/animations/egret-animations";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  animations: egretAnimations,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
      private fix: LandingFixService
  ) { }

  ngOnInit() {
    this.fix.addFix();
  }
  ngOnDestroy() {
    this.fix.removeFix();
  }

}
