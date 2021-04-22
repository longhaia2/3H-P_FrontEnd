import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Exam} from "../../admin/model/Exam";
import {Question} from "../../../Hien/model/question";
import {ReviewgrammarService} from "../../../Hien/servicesh/reviewgrammar.service";

@Component({
  selector: 'app-endtestjlpt',
  templateUrl: './endtestjlpt.component.html',
  styleUrls: ['./endtestjlpt.component.css'],
  providers: [ReviewgrammarService]
})
export class EndtestjlptComponent implements OnInit {
  ex: Exam;
  selectedAS: string[];
  qs: Question[];
  review = false;
  constructor(private service: ReviewgrammarService, private  route: ActivatedRoute,
              private  router: Router) {
  }
  ngOnInit(): void {
    this.displayTimeRemaining();
    this.ex = new Exam();
    let levelCurent = this.route.snapshot.params['level'];
    this.qs = this.route.snapshot.params['id'];
    console.log(levelCurent + "-" + this.qs);
    this.service.getByLevelAndId(levelCurent, this.qs).subscribe(data => {
      console.log("kakak")
      this.qs = data;
      this.selectedAS = new Array(this.qs.length);
      console.log("abc: " + this.qs.length);
      for (let i = 0; i < this.qs.length; i++) {
        this.selectedAS[i] = "not select";
      }
    }, error => console.log(error));
  this.resultQS();
  }
  displayTimeRemaining() {
    const countDownDate = new Date().getTime() + 10000;
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // alert('Hết thời gian');
        this.router.navigateByUrl('/endtest');
        clearInterval(x);
        this.resultQS();
      } else {document.getElementById('timer').innerHTML = 'Time Remaining' +  ' : '  + minutes + 'm '  + seconds + 's'; }
    }, 1000);
  }
  onSubmit() {
    if (this.service.qns.every(qn => qn.ansCorrect)) {
      this.service.qns.forEach(qn => qn.content.find(a => a.Id === qn.Answer).ansCorrect ? this.service.correctAnswerCount++ : null );
      this.router.navigateByUrl('/endtest');
    } else {
      this.service.reviewQuestions = this.service.qns.filter(qn => !qn.ansCorrect );
      this.review = true;
      this.service.qnProgress = 0;
    }
  }
  resultQS() {

    var i = 0;
    for (let rs of this.qs) {
      if (rs.ansCorrect.trim() === this.selectedAS[i].trim()) {
        i++;
      }
    }
    console.log(i);
  }

  selectAt(index, value) {
    console.log("index: " + index + " -- value: " + value);
    this.selectedAS[index] = value;
  }

}
