import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MathConfirmDialogComponent} from "../math-confirm-dialog/math-confirm-dialog.component";
import {EndtestjlptComponent} from "../../Hai/usertest/endtestjlpt/endtestjlpt.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg){
 return    this.dialog.open(MathConfirmDialogComponent,{
      width: '600px',
      height:'200px',
      // panelClass: 'confirm  dialog container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }
}
