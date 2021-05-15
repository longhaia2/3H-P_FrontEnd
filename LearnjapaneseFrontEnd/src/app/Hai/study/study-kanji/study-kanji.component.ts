import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-study-kanji',
  templateUrl: './study-kanji.component.html',
  styleUrls: ['./study-kanji.component.css']
})
export class StudyKanjiComponent implements OnInit {
  public logName:string;

  constructor() {
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];

  }

}
