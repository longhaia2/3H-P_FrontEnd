import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Exam} from '../../Hai/admin/model/Exam';
import {Question} from '../model/question';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewService} from '../servicesh/review.service';
import {Result} from '../model/Result';
@Component({
  selector: 'app-reviewgrammar',
  templateUrl: './reviewgrammar.component.html',
  styleUrls: ['./reviewgrammar.component.css'],
  providers: [ReviewService]
})
export class ReviewgrammarComponent implements OnInit {
  ex: Exam;
  rs: Result;
  dem = 0;
  selectedAS: string[];
  qs: Question[];
  dateStr:string;
  logName: string;
  constructor(
    private service: ReviewService , private  route: ActivatedRoute,
    private  router: Router) {
  }
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));

    this.logName = userName['username'];
    // @ts-ignore
    this.ex = new Exam();
    this.rs = new Result();
    this.qs = this.route.snapshot.params.id;
    this.service.get(this.qs).subscribe(data => {
      this.qs = data;
      this.selectedAS = new Array(this.qs.length);
    }, error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  selectAt(index, value) {
    this.selectedAS[index] = value;
  }

  addResult(idResult){
    for (let i = 0; i < this.qs.length; i++) {
      if (this.qs[i].ansCorrect === this.selectedAS[i]) {
        this.dem++;
      }
    }
    this.rs.score = this.dem;
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.rs.user_id = user_id.userId;
    this.rs.exam_id = this.route.snapshot.params.id;
    this.rs.ansSelects = this.selectedAS;
    var date = new Date();
    this.dateStr =
      ("00" + date.getDate()).slice(-2) + "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    this.rs.date_test=this.dateStr;
    this.service.addResult(this.rs).subscribe(data => {
      idResult = data.dataResponse;
      this.rs.id=idResult;
      this.service.updategr(this.rs.id,this.rs).subscribe(data=>{
        console.log(data);
      });
      this.router.navigate(['resultsgrammar/', idResult, this.rs.exam_id]);
    });
  }
}
