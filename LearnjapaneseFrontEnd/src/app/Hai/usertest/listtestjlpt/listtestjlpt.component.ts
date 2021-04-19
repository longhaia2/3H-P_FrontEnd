import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReviewgrammarService} from "../../../Hien/servicesh/reviewgrammar.service";
import {Question} from "../../../Hien/model/question";

@Component({
  selector: 'app-listtestjlpt',
  templateUrl: './listtestjlpt.component.html',
  styleUrls: ['./listtestjlpt.component.css'],
  providers: [ReviewgrammarService]
})
export class ListtestjlptComponent implements OnInit {

  public logName:string;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
  id:number;
  qs: Question=new Question();

  constructor(private grammar: ReviewgrammarService, private  route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.grammar.get(this.id).subscribe(data=>{
      this.qs = data
    }, error => console.log(error));

  }
}
