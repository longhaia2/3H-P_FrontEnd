import {Component, Input, OnInit} from '@angular/core';
import {Exam} from '../../Hai/admin/model/Exam';
import {Question} from '../model/question';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from "../servicesh/review.service";
import {QuestionServiceService} from "../servicesh/question-service.service";
@Component({
  selector: 'app-reviewgrammar',
  templateUrl: './reviewgrammar.component.html',
  styleUrls: ['./reviewgrammar.component.css'],
  providers: [ReviewService, QuestionServiceService]
})
export class ReviewgrammarComponent implements OnInit {
  ex: Exam;
  selectedAS: string[];
  qs: Question[];

  constructor(private questionServiceService:QuestionServiceService,
    private service: ReviewService, private  route: ActivatedRoute,
    private  router: Router) {
  }
  ngOnInit(): void {
    this.ex = new Exam();
    this.qs = this.route.snapshot.params.id;
    this.questionServiceService.getExamByQS(this.qs).subscribe(data => {
      this.qs = data;
      console.log(this.qs);
      this.selectedAS = new Array(this.qs.length);
    }, error => console.log(error));
  }
  resultQS() {

    let countCorrect = 0;
    for (let i = 0; i < this.qs.length; i++) {
      if (this.qs[i].ansCorrect === this.selectedAS[i]) {
        countCorrect++;
      }
    }
    alert('Bạn đã làm đúng ' + countCorrect + ' câu');
  }
  // tslint:disable-next-line:typedef
  selectAt(index, value) {
    console.log('index: ' + index + ' -- value: ' + value);
    this.selectedAS[index] = value;
  }
}
