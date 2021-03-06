import { Component, OnInit } from '@angular/core';
import { Exam} from "../../Hai/admin/model/Exam";
import { Question} from "../model/question";
import { ActivatedRoute, Router} from "@angular/router";
import {ReviewService} from "../servicesh/review.service";
import {Result} from '../model/result';
@Component({
  selector: 'app-reviewvocabulary',
  templateUrl: './reviewvocabulary.component.html',
  styleUrls: ['./reviewvocabulary.component.css'],
  providers: [ReviewService],
})
export class ReviewvocabularyComponent implements OnInit {
  rs: Result;
  logName: string;
  dem = 0;
  dateStr:string;
  ex: Exam;
  qs: Question[];
  resultAS:  string[];
  constructor(private service: ReviewService, private  route: ActivatedRoute,
              private  router: Router) { }
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];

    this.ex = new Exam();
    this.rs = new Result();
    this.qs = this.route.snapshot.params['id'];
    this.service.get(this.qs).subscribe(data => {
      this.qs = data;
      this.resultAS = new Array(this.qs.length);
      for (let i =0; i< this.qs.length; i++){
        this.resultAS[i] = "";
      }
    }, error => console.log(error));
  }
  selectAt(index, value) {
    this.resultAS[index] = value;
  }
  addResults(idResult){
    for (let i = 0; i < this.qs.length; i++) {
      if (this.qs[i].ansA === this.resultAS[i]||this.qs[i].ansA === this.resultAS[i]||
        this.qs[i].ansB === this.resultAS[i]||this.qs[i].ansC === this.resultAS[i]||this.qs[i].ansD === this.resultAS[i]) {
        this.dem++;
      }
    }
    this.rs.score = this.dem;
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.rs.user_id = user_id.userId;
    this.rs.exam_id = this.route.snapshot.params.id;
    this.rs.ansSelects = this.resultAS;
    var date = new Date();
    this.dateStr =
      ("00" + date.getDate()).slice(-2) + "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    this.rs.date_test=this.dateStr;
    this.service.addResults(this.rs).subscribe(data => {
      idResult = data.dataResponse;
      this.rs.id=idResult;
      this.service.updateRs(this.rs.id,this.rs).subscribe(data=>{
        console.log(data);
      });
      this.router.navigate(['resultsvocabulary/', idResult, this.rs.exam_id]);
    });
  }
}
