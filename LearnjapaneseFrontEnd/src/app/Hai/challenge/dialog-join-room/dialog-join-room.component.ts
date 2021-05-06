import {Component, Inject, Input, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {ChallengeServiceService} from '../../Service/challenge-service.service';
import {Question} from '../model/question';
import {DialogData} from '../competition/competition.component';

@Component({
  selector: 'app-dialog-join-room',
  templateUrl: './dialog-join-room.component.html',
  styleUrls: ['./dialog-join-room.component.css'],
  providers: [ServiceService,ChallengeServiceService, ToastrService]
})
export class DialogJoinRoomComponent implements OnInit {

  questions: Question[];
  correctAnswers: number;
  finalPercentage: number;
  constructor(private roomsv: ServiceService, private route: ActivatedRoute, private router: Router,public dialog:MatDialog,private toastrService: ToastrService,
              public dialogRef: MatDialogRef<DialogJoinRoomComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.correctAnswers=this.data.correctAnswers;
    // @ts-ignore
    this.questions=this.data.questions;
    this.finalPercentage = (this.data.correctAnswers * 100) / this.data.questions.length;

  }

    ReBack(){
      this.router.navigate(['listchalenge']);
      localStorage.clear();
    }


}
