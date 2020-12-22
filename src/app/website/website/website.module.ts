import { ProductsComponent } from './../products/products.component';
import { ProductdetailsComponent } from './../productdetails/productdetails.component';
import { WebfooterComponent } from './../common/webfooter/webfooter.component';
import { WebheaderComponent } from './../common/webheader/webheader.component';
import { WebhomeComponent } from './../webhome/webhome.component';
import { WebsiteComponent } from './website.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';


@NgModule({
  declarations: [
    WebsiteComponent,
    WebheaderComponent,
    WebfooterComponent,
    WebhomeComponent,
    ProductdetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
