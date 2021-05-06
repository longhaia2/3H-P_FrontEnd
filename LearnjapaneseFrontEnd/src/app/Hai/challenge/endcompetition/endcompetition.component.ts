import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../model/question";
import {Router} from '@angular/router';

@Component({
  selector: 'app-endcompetition',
  templateUrl: './endcompetition.component.html',
  styleUrls: ['./endcompetition.component.css']
})
export class EndcompetitionComponent implements OnInit {

  @Input() questions: Question[];
  @Input() correctAnswers: number;
  finalPercentage: number;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.questions);
    console.log(this.correctAnswers);
    this.finalPercentage = (this.correctAnswers * 100) / this.questions.length;
  }
  reload(): void {
    localStorage.setItem('targetTime', null);
    this.router.navigate(['listchalenge']);
    localStorage.clear();

  }
}
