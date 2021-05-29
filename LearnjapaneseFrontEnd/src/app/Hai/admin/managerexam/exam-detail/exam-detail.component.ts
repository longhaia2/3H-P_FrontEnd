import { Component, OnInit } from '@angular/core';
import {Exam} from "../../model/Exam";
import {ExamserviceService} from "../../serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../../../Hien/model/question";

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
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id = this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data => {
      this.exam = data;

      console.log(this.exam.level);
      this.examService.QsnotExam(this.exam.level).subscribe(data => {
        this.question = data;
        console.log(this.question);
      }, error => console.log(error));
    });

  }
}
