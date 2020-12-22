import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  type: string;
  constructor(
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.params.type;
  }
  

}
