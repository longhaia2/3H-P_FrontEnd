import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question';
import {Router} from '@angular/router';
import {QuestionServiceService} from '../servicesh/question-service.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
  providers: [QuestionServiceService]
})
export class AddquestionComponent implements OnInit {
  qs: Question;
  constructor(private qsQuestion: QuestionServiceService, private route: Router) { }

  ngOnInit(): void {
    this.qs = new Question();
  }
  // tslint:disable-next-line:typedef
  add(){
    this.qsQuestion.create(this.qs).subscribe(data => {
      this.qs = data;
      alert('Thành công');
    });
  }}
