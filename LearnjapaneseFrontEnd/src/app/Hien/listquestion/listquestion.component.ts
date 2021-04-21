// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {QuestionServiceService} from '../servicesh/question-service.service';
// @ts-ignore
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../model/question';

// @ts-ignore
@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css'],
  providers: [QuestionServiceService]
})
export class ListquestionComponent implements OnInit {

  id: number;
  question: Question[];
  constructor(private questionService: QuestionServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.list();
  }
  // tslint:disable-next-line:typedef
  list(){
    this.questionService.findAll().subscribe(data => {
      this.question = data;
      console.log(data);
    });
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    this.questionService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.questionService.findAll().subscribe(data => {
      this.question = data;
    });
  }
}

