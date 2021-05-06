import {Component, OnInit} from '@angular/core';
import {Exam} from "../../admin/model/Exam";
import {Question} from "../../../Hien/model/question";
import {ReviewgrammarService} from "../../../Hien/servicesh/reviewgrammar.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogResultTestComponent} from "../dialog-result-test/dialog-result-test.component";
import {min} from "rxjs/operators";

export interface DialogData {
      sodiem: number;
} {

}
@Component({
  selector: 'app-testjlpt',
  templateUrl: './testjlpt.component.html',
  styleUrls: ['./testjlpt.component.css'],
  providers: [ReviewgrammarService]
})
export class TestjlptComponent implements OnInit {
  ex: Exam;
  fiveMinutes : number;
  a: number=0;
  b: number=0;

  selectedAS: string[];
  qs: Question[];
  review = false;
  public sodiem: number;
  constructor(private service: ReviewgrammarService, private  route: ActivatedRoute,
              private  router: Router,public dialog:MatDialog) {
  }

  ngOnInit(): void {
    // this.displayTimeRemaining();
    this.ex = new Exam();
    let levelCurent = this.route.snapshot.params['level'];
    this.qs = this.route.snapshot.params['id'];
    console.log(levelCurent + "-" + this.qs);
    this.service.getByLevelAndId(levelCurent, this.qs).subscribe(data => {
      console.log("kakak")
      this.qs = data;
      this.selectedAS = new Array(this.qs.length);
      console.log("abc: " + this.qs.length);
      for (let i = 0; i < this.qs.length; i++) {
        this.selectedAS[i] = "not select";
      }
    }, error => console.log(error));
    // @ts-ignore
    this.local();
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogResultTestComponent, {
      data:{sodiem:this.sodiem}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.sodiem=result;
    });
  }


  resultQS() {

    this.sodiem = 0;
    for (let rs of this.qs) {
      if (rs.ansCorrect.trim() === this.selectedAS[this.sodiem].trim()) {
        this.sodiem++;
      }
    }
    alert('Bạn đã làm đúng'+ ' ' +this.sodiem + ' '+ 'câu');
  }


  selectAt(index, value) {
    console.log("index: " + index + " -- value: " + value);
    this.selectedAS[index] = value;
  }
  local(){


    let minutes = 2;
    let currentTime = localStorage.getItem('currentTime');
    let targetTime = localStorage.getItem('targetTime');
    if (targetTime == null && currentTime == null) {
      // @ts-ignore
      currentTime = new Date();
      // @ts-ignore
      targetTime = new Date(currentTime.getTime() + (minutes * 60000));
      localStorage.setItem('currentTime', currentTime);
      localStorage.setItem('targetTime', targetTime);
    }
    else{
      // @ts-ignore
      currentTime = new Date(currentTime);
      // @ts-ignore
      targetTime = new Date(targetTime);
    }
// @ts-ignore
      const x = setInterval(()=> {
        if (currentTime > targetTime) {
          clearInterval(x);
          this.openDialog();
          // @ts-ignore
            targetTime=0;
            return localStorage.setItem('targetTime', targetTime);
        } else {
          // @ts-ignore
          currentTime = new Date();
          // @ts-ignore
          document.getElementById('timer').innerHTML = 'Thời Gian Làm Bài:' +' '+ Math.floor(((targetTime - currentTime)/1000)/60)+' phút' +' '+ Math.floor(((targetTime - currentTime)/1000)%60)+' Giây';

        }

      }, 1000);

    // function checkComplete() {
    //   if (currentTime > targetTime) {
    //     clearInterval(x);
    //     this.resultQS();
    //   } else {
    //     // @ts-ignore
    //     currentTime = new Date();
    //     // @ts-ignore
    //     document.getElementById('timerr').innerHTML = 'Time Remaining' + Math.floor((targetTime - currentTime)/1000) ;
    //   }
    // }
// @ts-ignore
    document.onbeforeunload = function(){
      localStorage.setItem('currentTime', currentTime);
    }
  }

}
