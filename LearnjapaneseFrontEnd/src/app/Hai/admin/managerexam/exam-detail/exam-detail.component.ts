import { Component, OnInit } from '@angular/core';
import {Exam} from "../../model/Exam";
import {ExamserviceService} from "../../serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../../../Hien/model/question";
import {ExamQuestion} from "../../model/ExamQuestion";

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  p:number=1;
  hocphan;
  trinhdo;
  searchText;
  id:number;
  logName: string;
  question: Question[];
  exam:Exam;
  ex_Qs:ExamQuestion= new ExamQuestion();
  coutQS:number=0;
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id = this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data => {
      this.exam = data;
      this.examService.QsnotExam(this.exam.level).subscribe(data => {
        this.question = data;
      }, error => console.log(error));
    });
      this.examService.Dem(this.id).subscribe(data=>{
        this.coutQS=data;
      })
  }
  addQsInExam(){

  }
}
