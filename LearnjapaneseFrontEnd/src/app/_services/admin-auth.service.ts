import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate{

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.tokenStorageService.getToken();
    if (token == null) {
      // @ts-ignore
      return  this.router.navigate(['login']);
    } else if (!this.isRole()) {
      // @ts-ignore
      return this.router.navigate(['unaccess']);
    }  else {
      return true;
    }
  }
  isRole() {
    if (  this.tokenStorageService.getUser().role === 'ROLE_ADMIN') {
      return true;
    }
    return false;
  }
}
