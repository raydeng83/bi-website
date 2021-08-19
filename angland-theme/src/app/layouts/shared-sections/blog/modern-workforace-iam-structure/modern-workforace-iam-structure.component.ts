import { Component, OnInit } from '@angular/core';
import {LandingFixService} from "../../../../shared/services/landing-fix.service";
import {egretAnimations} from "../../../../shared/animations/egret-animations";

@Component({
  selector: 'app-modern-workforace-iam-structure',
  templateUrl: './modern-workforace-iam-structure.component.html',
  animations: egretAnimations,
  styleUrls: ['./modern-workforace-iam-structure.component.css']
})
export class ModernWorkforaceIamStructureComponent implements OnInit {

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
