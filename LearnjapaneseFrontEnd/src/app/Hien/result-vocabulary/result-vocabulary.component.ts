import { Component, OnInit } from '@angular/core';
import {Exam} from '../../Hai/admin/model/Exam';
import {Question} from '../model/question';
import {Result} from '../model/result';
import {ReviewService} from '../servicesh/review.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result-vocabulary',
  templateUrl: './result-vocabulary.component.html',
  styleUrls: ['./result-vocabulary.component.css'],
  providers: [ReviewService]
})
export class ResultVocabularyComponent implements OnInit {

  id: number;
  ex: Exam;
  selectedAS: string[];
  qs: Question[];
  rs: Result = new Result();
  logName: string;
  check: boolean;

  constructor(private service: ReviewService, private reviewService: ReviewService, private  route: ActivatedRoute) {
  }

  ngOnInit(): void {

    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    if(userName['role']=="ROLE_ADMIN") {
      this.Refresh()
    }
    this.ex = new Exam();
    this.rs = new Result();
    this.qs = this.route.snapshot.params.id;

    this.id = this.route.snapshot.params.id;

    this.reviewService.getResults(this.id).subscribe(data => {
      console.log(data);
      this.rs = data;
      // tslint:disable-next-line:no-shadowed-variable
      this.service.get(data.examId).subscribe(data => {
        this.qs = data;
      }, error => console.log(error));
    }, error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  selectAt(index, value) {
    console.log('index: ' + index + ' -- value: ' + value);
    this.selectedAS[index] = value;
  }

  Refresh(){
    if (localStorage.getItem('refreshed') === null) {
      localStorage['refreshed'] = true;
      window.location.reload(true);
    } else {
      localStorage.removeItem('refreshed');
    }
  }
}
