import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(private authService: AuthService, private loginService: LoginService) {}

  flag(): boolean {
    return this.authService.flag;
  }

  flag2(): boolean {
    return this.authService.isLoggedIn;
  }

  flag3(): boolean {
    return this.authService.flag && this.authService.isLoggedIn;
  }
}
