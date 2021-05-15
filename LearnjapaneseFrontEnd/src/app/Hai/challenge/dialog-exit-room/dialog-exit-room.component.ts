import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-exit-room',
  templateUrl: './dialog-exit-room.component.html',
  styleUrls: ['./dialog-exit-room.component.css']
})
export class DialogExitRoomComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data,
              public dialogRef: MatDialogRef<DialogExitRoomComponent>) { }
  ngOnInit(): void {
  }
  closedDialog(){
    this.dialogRef.close(false);
  }

}
