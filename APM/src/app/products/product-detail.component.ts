import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
  // The CLI generated the selector property. The selector property is only
  // required if the component will be nested within another component.
  // You don't need to nest this component, but instead display the component's view
  // as part of the routing. Leaving selector here to show with notes.
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor() { }

  ngOnInit() {
  }

}
