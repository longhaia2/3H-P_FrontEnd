import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthService implements CanActivate{

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.tokenStorageService.getToken();
    if (token == null) {
      this.router.navigate(['login']);
      return false;
    }else {
      return true;
    }
  }
}

