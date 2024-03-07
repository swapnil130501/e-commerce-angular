import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      console.log(this.router);
      return false;
    }
  }
}