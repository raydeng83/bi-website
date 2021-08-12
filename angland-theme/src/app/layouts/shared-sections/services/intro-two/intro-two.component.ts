import { Component, OnInit } from '@angular/core';
import {egretAnimations} from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  animations: egretAnimations,
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
