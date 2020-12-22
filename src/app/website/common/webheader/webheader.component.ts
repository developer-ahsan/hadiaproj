import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webheader',
  templateUrl: './webheader.component.html',
  styleUrls: ['./webheader.component.css']
})
export class WebheaderComponent implements OnInit {

  constructor(
    public route: Router
  ) { }

  ngOnInit() {
  }
  scrolltoid(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
}
