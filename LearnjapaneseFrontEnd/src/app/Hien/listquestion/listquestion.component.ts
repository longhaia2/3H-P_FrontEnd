import { Component, OnInit } from '@angular/core';
import {QuestionServiceService} from '../servicesh/question-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../model/question';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css'],
  providers: [QuestionServiceService]
})
export class ListquestionComponent implements OnInit {

  id: number;
  question: Question = new Question();
  constructor(private questionService: QuestionServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.questionService.get(this.id).subscribe(data => {
        // tslint:disable-next-line:no-shadowed-variable
        this.question = data; } ,
      // tslint:disable-next-line:no-shadowed-variable
      error => console.log(error));
  }
}

