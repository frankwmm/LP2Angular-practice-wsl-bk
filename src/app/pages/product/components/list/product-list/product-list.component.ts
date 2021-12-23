import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
