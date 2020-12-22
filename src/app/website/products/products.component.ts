import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  type: string;
  constructor(
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.type = this.activeRoute.snapshot.params.type;
  }

}
