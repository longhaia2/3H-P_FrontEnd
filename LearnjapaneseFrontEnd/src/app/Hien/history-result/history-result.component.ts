import { Component, OnInit } from '@angular/core';
import {Result} from '../model/result';
import {ScoreService} from '../servicesh/score.service';
import {ResultByID} from '../model/ResultByID';

@Component({
  selector: 'app-history-result',
  templateUrl: './history-result.component.html',
  styleUrls: ['./history-result.component.css'],
  providers:[ScoreService]
})
export class HistoryResultComponent implements OnInit {

  rs: ResultByID[];
  logName: string;
  idNow:number;

  constructor(private scoresv: ScoreService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('auth-user'));

    const user = JSON.parse(sessionStorage.getItem('auth-user'));
    const username = user.username;
    this.logName = username;
    let idScore = JSON.parse(sessionStorage.getItem("auth-user"));
    this.idNow = idScore['userId'];

    this.scoresv.GetResultById(userName).subscribe(data => {
      console.log(data);
      this.rs = data.dataResponse;
      console.log(this.rs);
    })
  }
}
