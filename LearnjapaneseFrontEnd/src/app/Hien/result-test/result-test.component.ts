import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../servicesh/review.service';
import {Result} from '../model/Result';
import {ActivatedRoute} from '@angular/router';
import {Exam} from '../../Hai/admin/model/Exam';
import {Question} from '../model/question';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css'],
  providers:[ReviewService]
})
export class ResultTestComponent implements OnInit {
  id:number;
  ex: Exam;
  selectedAS: string[];
  qs: Question[];
  rs: Result=new Result();
  logName: string;
  check: boolean;

  constructor(private service: ReviewService ,private reviewService: ReviewService, private  route: ActivatedRoute) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.ex = new Exam();
    this.rs = new Result();
    this.qs = this.route.snapshot.params.id;

    const userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id = this.route.snapshot.params['id'];

    this.reviewService.getResult(this.id).subscribe(data => {
      console.log(data);
      this.rs = data;
      this.service.get(data.examId).subscribe(data => {
        this.qs = data;
      }, error => console.log(error));
    }, error => console.log(error));

  }
  selectAt(index, value) {
    this.selectedAS[index] = value
  }

}
