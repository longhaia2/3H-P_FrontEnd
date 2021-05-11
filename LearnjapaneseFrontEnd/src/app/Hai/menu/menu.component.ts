import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Router} from '@angular/router';
import {User} from "../../Manh/modelm/user";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']

})
export class MenuComponent implements OnInit {
  Users: User[];
  id_user:number;

  @Input('userNameDsp') userNameDsp: string;

  constructor( private tokenStorage: TokenStorageService, private  router: Router) { }
  us : User[];
  ngOnInit(): void {
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    this.id_user = id_score['userId'];
  }


  logout(): void {
    this.tokenStorage.signOut();
    confirm('Bạn thật sự muốn đăng xuất?');
    // @ts-ignore
    // this.router.navigate(['page-home']);
    window.location.reload();

  }
}
