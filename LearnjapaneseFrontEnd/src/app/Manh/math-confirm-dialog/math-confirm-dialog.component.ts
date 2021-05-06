import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-math-confirm-dialog',
  templateUrl: './math-confirm-dialog.component.html',
  styleUrls: ['./math-confirm-dialog.component.css']
})
export class MathConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data,  public dialogRef: MatDialogRef<MathConfirmDialogComponent>
  ) { }
  ngOnInit(): void {

  }
  closedDialog(){
  this.dialogRef.close(false);
  }


}
