import {Component, Input, OnInit} from '@angular/core';
import { ReviewgrammarService} from "../servicesh/reviewgrammar.service";
import {Exam} from "../../Hai/admin/model/Exam";
import {Question} from "../model/question";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reviewgrammar',
  templateUrl: './reviewgrammar.component.html',
  styleUrls: ['./reviewgrammar.component.css'],
  providers: [ReviewgrammarService]
})
export class ReviewgrammarComponent implements OnInit {

  ex: Exam;
  selectedAS: string[];
  qs: Question[];

  constructor(
    private service: ReviewgrammarService, private  route: ActivatedRoute,
              private  router: Router) {
  }

  ngOnInit(): void {
    this.ex = new Exam();
    this.qs = this.route.snapshot.params['id'];
    this.service.get(this.qs).subscribe(data => {
      this.qs = data;
      this.selectedAS = new Array(this.qs.length);
    }, error => console.log(error));


  }

  resultQS() {
  //
  //   ;    var i = 0
  //     for (let rs of this.qs) {
  //       if (rs.ansCorrect === this.selectedAS[i]) {
  //         i++;
  //   }
  //   }
  //   alert('Bạn đã làm đúng ' + i + ' câu');
  // }
    var countCorrect = 0;
    for (let i =0; i < this.qs.length;i++) {
    if (this.qs[i].ansCorrect === this.selectedAS[i]) {
    countCorrect++;
      }
      }
        alert('Bạn đã làm đúng ' + countCorrect + ' câu');
      }

  selectAt(index, value) {
    console.log("index: "+index + " -- value: "+value);
    this.selectedAS[index] = value;
  }

}
