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
  role:string;
  p:number=1;
  dateStr:string;
  ex: Exam;
  x:number;
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
    clearInterval(this.x);

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
    var date = new Date();
    this.dateStr =
      ("00" + date.getDate()).slice(-2) + "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    this.rs.date_test=this.dateStr;
    this.service.addResult(this.rs).subscribe(data => {
      idResult = data.dataResponse;
      this.rs.id=idResult;
      this.service.updategr(this.rs.id,this.rs).subscribe(data=>{
        console.log(data);
      });
      this.router.navigate(['resultsgrammar/', idResult, this.rs.exam_id]);
      localStorage.setItem('targetTime', null);
      localStorage.clear();
    });
  }


  selectAt(index, value) {
    this.selectedAS[index] = value;
  }
  local(){


    let minutes = 30;
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
    this.x = setInterval(()=> {
      // @ts-ignore
      if (Math.floor(((targetTime - currentTime)/1000))<2) {
        clearInterval(this.x);
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
        document.getElementById('timer').innerHTML = 'Th???i Gian L??m B??i:' +' '+ Math.floor(((targetTime - currentTime)/1000)/60)+' ph??t' +' '+ Math.floor(((targetTime - currentTime)/1000)%60)+' Gi??y';

      }

    }, 1000);

// @ts-ignore
    document.onbeforeunload = function(){
      localStorage.setItem('currentTime', currentTime);
    }
  }

}
