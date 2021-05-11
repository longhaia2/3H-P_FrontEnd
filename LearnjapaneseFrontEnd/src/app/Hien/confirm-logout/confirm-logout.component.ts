import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.css'],
  providers: [TokenStorageService],
})
export class ConfirmLogoutComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data,private tokenStorage: TokenStorageService,
              public dialogRef: MatDialogRef<ConfirmLogoutComponent>) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  closedDialog(){
    this.dialogRef.close(false);
  }
  // tslint:disable-next-line:typedef
  LogOut(){
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
