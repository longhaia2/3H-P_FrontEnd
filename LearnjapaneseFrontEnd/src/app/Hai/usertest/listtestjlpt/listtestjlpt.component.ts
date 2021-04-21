import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listtestjlpt',
  templateUrl: './listtestjlpt.component.html',
  styleUrls: ['./listtestjlpt.component.css']
})
export class ListtestjlptComponent implements OnInit {

  public logName:string;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];

  }

}
