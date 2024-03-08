import { Injectable } from '@angular/core';
import { User } from './User';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];

  constructor(private cartService: CartService) { }
  isLoggedIn = false;
  flag = false;

  signUp(username: string, password: string): void {
    const newUser = new User(username, password);
    this.users.push(newUser);
    this.flag = true;
    console.log(newUser);
    console.log(this.users);
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if(user) {
      this.isLoggedIn = true;
      console.log(username, password);
      return true;
    } else {
      return false;
    }
  }
  logout(): void {
    this.isLoggedIn = false;
    this.cartService.clearCart()
  }
}

