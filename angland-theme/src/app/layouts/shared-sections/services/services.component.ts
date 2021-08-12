import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../../shared/services/landing-fix.service';
import {egretAnimations} from "../../../shared/animations/egret-animations";

@Component({
  selector: 'app-layout-two',
  templateUrl: './services.component.html',
  animations: egretAnimations,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
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
