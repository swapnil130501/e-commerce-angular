import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Product.model';
import { CartService } from '../cart.service';
import { PRODUCTS } from '../Products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() 
  product: Product;

  constructor(private cartService: CartService) { }

  addToCart(productId: number) {
    const productToAdd = PRODUCTS.find(product => product.id === productId);
    if (productToAdd) {
      this.cartService.addToCart(productToAdd);
      console.log(productToAdd)
    } else {
      console.error('Product not found with ID:', productId);
    }
  }

  ngOnInit(): void {
  }

}
