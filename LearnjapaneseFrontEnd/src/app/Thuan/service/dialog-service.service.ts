import { Injectable } from '@angular/core';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private dialog: MatDialog) { }
  // tslint:disable-next-line:typedef
   openConfirmDialog(msg){
    return    this.dialog.open(DialogComponent, {
      width: '600px',
      height: '200px',

      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
