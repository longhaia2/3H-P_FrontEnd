import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-study-alphabet',
  templateUrl: './study-alphabet.component.html',
  styleUrls: ['./study-alphabet.component.css']
})
export class StudyAlphabetComponent implements OnInit {
  public logName:string;

  constructor(private title: Title) {
    this.title.setTitle("Học Chữ Cái");
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];

  }

}
