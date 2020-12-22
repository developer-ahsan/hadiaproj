import { ProductsComponent } from './../products/products.component';
import { ProductdetailsComponent } from './../productdetails/productdetails.component';
import { WebhomeComponent } from './../webhome/webhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';


const routes: Routes = [
 { path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        component: WebhomeComponent,
      },
      {
        path: 'productdetails',
        component: ProductdetailsComponent,
      },
      {
        path: 'products/:type',
        component: ProductsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
