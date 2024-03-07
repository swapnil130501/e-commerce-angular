import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.model';
import { PRODUCTS } from '../Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {
    this.products = PRODUCTS;
  }

}
