import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';
import {egretAnimations} from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  animations: egretAnimations,
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  public carouselOptions: any;
  public testimonials = [{
    photo: 'assets/images/user-thumb-1.jpg',
    text: `"With a decade of experiences on various IAM solution designs and implementations at industry level, we have acquired trust from our clients. We are destined to deliver our best knowledge and skills to the valued customers, not only from the perspective as a service provider, but also a fulfillment providing values to the entire industry in this era of  information technology explosion."`,
    title: 'Jhone Doe',
    subtitle: 'Boston Identity Team'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}
