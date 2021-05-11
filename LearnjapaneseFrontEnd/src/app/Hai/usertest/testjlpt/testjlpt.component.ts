import {Component, OnInit} from '@angular/core';
import {Exam} from "../../admin/model/Exam";
import {Question} from "../../../Hien/model/question";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogResultTestComponent} from "../dialog-result-test/dialog-result-test.component";
import {ReviewgrammarService} from "../../../Hien/servicesh/reveiwgrammarservice.service";
import {ReviewService} from '../../../Hien/servicesh/review.service';
import {Result} from '../../../Hien/model/result';
import {MAT_RADIO_DEFAULT_OPTIONS} from "@angular/material/radio";

export interface DialogData {
  idResult: number;
  idExam: number;
}
@Component({
  selector: 'app-testjlpt',
  templateUrl: './testjlpt.component.html',
  styleUrls: ['./testjlpt.component.css'],
  providers: [ReviewgrammarService,ReviewService,{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
  }]

})
export class TestjlptComponent implements OnInit {
  logName: string;
  ex: Exam;
  a: number=0;
  b: number=0;
  rs: Result;
  dem = 0;
  selectedAS: string[];
  qs: Question[];
  public sodiem: number;
  constructor(private servicerv: ReviewgrammarService, private  route: ActivatedRoute,
              private  router: Router,public dialog:MatDialog, private service: ReviewService) {
  }

  ngOnInit(): void {

    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.ex = new Exam();
    this.rs = new Result();
    this.ex = new Exam();
    let levelCurent = this.route.snapshot.params['level'];
    this.qs = this.route.snapshot.params['id'];
    console.log(levelCurent + "-" + this.qs);
    this.servicerv.getByLevelAndId(levelCurent, this.qs).subscribe(data => {
      this.qs = data;
      this.selectedAS = new Array(this.qs.length);
    }, error => console.log(error));
    // @ts-ignore
    this.local();
  }

  openDialog(){
    this.service.addResult(this.rs).subscribe(data => {
     let idResult = data.dataResponse;
      const dialogRef = this.dialog.open(DialogResultTestComponent, {
        data:{idResult:idResult,idExam:this.rs.exam_id}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.sodiem=result;
      });
    });

  }


  addResult(idResult){
    for (let i = 0; i < this.qs.length; i++) {
      if (this.qs[i].ansCorrect === this.selectedAS[i]) {
        this.dem++;
      }
    }
    this.rs.score = this.dem;
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.rs.user_id = user_id.userId;
    this.rs.exam_id = this.route.snapshot.params.id;
    this.rs.ansSelects = this.selectedAS;

    this.service.addResult(this.rs).subscribe(data => {
      idResult = data.dataResponse;
      this.router.navigate(['resultsgrammar/', idResult, this.rs.exam_id]);
    });
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
        for (let i = 0; i < this.qs.length; i++) {
          if (this.qs[i].ansCorrect === this.selectedAS[i]) {
            this.dem++;
          }
        }
        this.rs.score = this.dem;
        let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
        this.rs.user_id = user_id.userId;
        this.rs.exam_id = this.route.snapshot.params.id;
        this.rs.ansSelects = this.selectedAS;
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

// @ts-ignore
    document.onbeforeunload = function(){
      localStorage.setItem('currentTime', currentTime);
    }
  }

}
