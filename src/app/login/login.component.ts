import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string;

  constructor(private router: Router, private loginService: LoginService, private authService: AuthService) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
