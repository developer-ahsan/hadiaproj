import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webhome',
  templateUrl: './webhome.component.html',
  styleUrls: ['./webhome.component.css']
})
export class WebhomeComponent implements OnInit {
  test = FormGroup
  constructor() { }

  ngOnInit() {
  }
  scrolltoid(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

}
