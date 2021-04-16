import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('userNameDsp') userNameDsp: string;

  constructor( private tokenStorage: TokenStorageService, private  router: Router) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.tokenStorage.signOut();
    alert('Đăng xuất thành công!');
    // @ts-ignore
    this.router.navigate(['page-home']);
    // window.location.reload();
  }
}
