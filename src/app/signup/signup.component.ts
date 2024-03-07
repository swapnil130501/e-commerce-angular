import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signUp(): void {
    if (this.username && this.password) {
      this.authService.signUp(this.username, this.password);
      this.router.navigate(['/login']);
      console.log(this.username, this.password);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Please provide both username and password.';
    }
  }
}
