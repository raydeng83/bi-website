import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {egretAnimations} from "../../../../shared/animations/egret-animations";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: egretAnimations,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      company: ['', [Validators.required]],
      message: ['', Validators.required]
    })
  }

}
