import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  scrolltoid(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
