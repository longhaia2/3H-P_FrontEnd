import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Router} from '@angular/router';
import {ConfirmLogoutComponent} from '../../Hien/confirm-logout/confirm-logout.component';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ToastrService, TokenStorageService]
})
export class MenuComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('userNameDsp') userNameDsp: string;

  constructor(public dialog: MatDialog, private tsv: ToastrService, private router: Router) { }

  logout(){
    this.dialog.open(ConfirmLogoutComponent);
  }

  score() {
   this.router.navigate(['score'])
  }
}
