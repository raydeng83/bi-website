import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import {egretAnimations} from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-portfolio-carousel',
  templateUrl: './portfolio-carousel.component.html',
  animations: egretAnimations,
  styleUrls: ['./portfolio-carousel.component.scss']
})
export class PortfolioCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
