import { Injectable } from '@angular/core';
import { Product } from './Product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product); 
    }
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
  
  clearCart(): void {
    this.cartItems = [];
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalItems() {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }  
}
