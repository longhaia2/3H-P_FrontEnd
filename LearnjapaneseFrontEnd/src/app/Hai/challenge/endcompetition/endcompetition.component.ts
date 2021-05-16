import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../model/question";
import {Router} from '@angular/router';
import {UserScore} from "../model/UserScore";
import {ChallengeServiceService} from "../../Service/challenge-service.service";
import {ServiceService} from "../../service.service";

@Component({
  selector: 'app-endcompetition',
  templateUrl: './endcompetition.component.html',
  styleUrls: ['./endcompetition.component.css'],
  providers:[ServiceService]
})
export class EndcompetitionComponent implements OnInit {

  @Input() questions: Question[];
  @Input() correctAnswers: number;
  @Input() id_room:number;
  finalPercentage: number;
  @Input() userScore:  UserScore[];

  constructor(private router: Router, private userService: ServiceService ) {}

  ngOnInit() {
    this.finalPercentage = (this.correctAnswers * 100) / this.questions.length;
  }
  reload(): void {
    localStorage.setItem('targetTime', null);
    this.router.navigate(['listchalenge']);
    localStorage.clear();
  }
}
