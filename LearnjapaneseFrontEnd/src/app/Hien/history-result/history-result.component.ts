import { Component, OnInit } from '@angular/core';
import {Result} from '../model/result';
import {ScoreService} from '../servicesh/score.service';
import {ResultByID} from '../model/ResultByID';
import {MGresultA} from "../../Hai/admin/model/MGresultA";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-history-result',
  templateUrl: './history-result.component.html',
  styleUrls: ['./history-result.component.css'],
  providers:[ScoreService]
})
export class HistoryResultComponent implements OnInit {

  rs: ResultByID[];
  rs1: ResultByID[];
  logName: string;
  searchText;
  idNow:number;
  result: MGresultA[];
  result2: MGresultA[];
  p:number=1;
  style:string='1';

  constructor(private tsv: ToastrService,private scoresv: ScoreService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('auth-user'));

    const user = JSON.parse(sessionStorage.getItem('auth-user'));
    const username = user.username;
    this.logName = username;
    let idScore = JSON.parse(sessionStorage.getItem("auth-user"));
    this.idNow = idScore['userId'];

    // this.rs = new Result();

    // this.scoresv.getgrammar(username).subscribe(data => {
    //    this.rs = [...data.dataResponse];
    //    console.log(this.rs.length);
    // });
    //
    // this.scoresv.getvocabulary(username).subscribe(data => {
    //   this.rs = [...data.dataResponse];
    //   console.log(this.rs.length);
    // });
    this.scoresv.GetResultById(username).subscribe(data => {
      console.log(data);
      this.rs = data.dataResponse;
    });
    this.scoresv.GetResultVocaById(username).subscribe(data => {
      console.log(data);
      this.rs1 = data.dataResponse;
    })
  }
  selectAt(value){
    this.style=value;
  }
}
