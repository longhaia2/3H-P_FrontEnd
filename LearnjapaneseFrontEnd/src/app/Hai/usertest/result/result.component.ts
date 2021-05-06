import { Component, OnInit } from '@angular/core';
import {ReviewgrammarService} from "../../../Hien/servicesh/reviewgrammar.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ReviewgrammarService]

})
export class ResultComponent implements OnInit {

  constructor(private  service: ReviewgrammarService , private  route: ActivatedRoute,
              private  router: Router) { }
  pieChartOptions = {
    responsive: true
  };
  pieChartLabels = ['Correct Answers', 'Wrong Answers'];

  pieChartColor: any = [
    {
      backgroundColor: [
        'rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)'
      ]
    }
  ];

  pieChartData: any = [
    {
      data: [this.service.correctAnswerCount, this.service.qns.length - this.service.correctAnswerCount ]
    }
  ];

  ngOnInit(): void {
  }

}
