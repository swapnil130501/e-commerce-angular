import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[]
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateCartData();
  }

  updateCartData(): void {
    this.totalItems = this.cartService.getTotalItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  increaseQuantity(item: Product): void {
    item.quantity++;
    this.updateCartData();
  }

  decreaseQuantity(item: Product): void {
    this.cartService.removeFromCart(item.id); 
    this.updateCartData();
  }
}
