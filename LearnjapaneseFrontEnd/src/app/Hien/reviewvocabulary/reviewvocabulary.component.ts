import { Component, OnInit } from '@angular/core';
import { Exam} from "../../Hai/admin/model/Exam";
import { Question} from "../model/question";
import { ActivatedRoute, Router} from "@angular/router";
import {ReviewService} from "../servicesh/review.service";
@Component({
  selector: 'app-reviewvocabulary',
  templateUrl: './reviewvocabulary.component.html',
  styleUrls: ['./reviewvocabulary.component.css'],
  providers: [ReviewService],
})
export class ReviewvocabularyComponent implements OnInit {
  // checkAnswer = false;
  color = '';
  ex: Exam;
  qs: Question[];
  resultAS:  string[];
  constructor(private service: ReviewService, private  route: ActivatedRoute,
              private  router: Router) { }
  ngOnInit(): void {
    this.ex = new Exam();
    this.qs = this.route.snapshot.params['id'];
    this.service.getExamByQS(this.qs).subscribe(data => {
      this.qs = data;
      this.resultAS = new Array(this.qs.length);
      for (let i =0; i< this.qs.length; i++){
        this.resultAS[i] = "";
      }
    }, error => console.log(error));
  }
  results() {
    var countCorrect = 0;
    for (let i =0; i < this.qs.length;i++) {
      if (this.qs[i].ansCorrect === this.resultAS[i]) {
        countCorrect++;
      }
    }
    alert('Bạn đã làm đúng ' + countCorrect + ' câu');
  }
  selectAt(index, value) {
    console.log("index: "+index + " -- value: "+value)
    this.resultAS[index] = value;
  }
}
