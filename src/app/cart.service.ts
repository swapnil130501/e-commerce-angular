import { Injectable } from '@angular/core';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    console.log(this.cartItems)
    this.cartItems.push(product);
  }

  removeFromCart(productId: number) {
    const index = this.cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
      const item = this.cartItems[index];
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalItems() {
    return this.cartItems.length;
  }

  getTotalPrice() {
    if (this.cartItems && this.cartItems.length > 0) {
      return this.cartItems.reduce((acc, product) => acc + product.price, 0);
    } else {
      return 0; 
    }
  }
  
}
