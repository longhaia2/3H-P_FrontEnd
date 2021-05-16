import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Router} from '@angular/router';
import {User} from "../../Manh/modelm/user";
import {ConfirmLogoutComponent} from '../../Hien/confirm-logout/confirm-logout.component';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ToastrService, TokenStorageService]

})
export class MenuComponent implements OnInit {
  Users: User[];
  id_user:number;

  // tslint:disable-next-line:no-input-rename
  @Input('userNameDsp') userNameDsp: string;

  constructor( public dialog: MatDialog,  private tsv: ToastrService,private tokenStorage: TokenStorageService, private  router: Router) {

  }


  refreshPage() {
    window.location.reload();
  }
  us : User[];
  ngOnInit(): void {
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    if(id_score != null){
      this.id_user = id_score['userId'];
    }

    //
    // if (localStorage.getItem('refreshed') === null) {
    //   localStorage['refreshed'] = true;
    //   window.location.reload(true);
    // } else {
    //   localStorage.removeItem('refreshed');
    // }
  }


  logout(){
    this.dialog.open(ConfirmLogoutComponent);
  }

  score() {
   this.router.navigate(['score'])


  }


}
