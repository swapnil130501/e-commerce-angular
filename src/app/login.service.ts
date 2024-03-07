import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false; 

  dummyUser = { username: 'test', password: 'test' };

  login(username: string, password: string): boolean {
    if (username === this.dummyUser.username && password === this.dummyUser.password) {
      this.isLoggedIn = true;
      console.log(username, password);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
