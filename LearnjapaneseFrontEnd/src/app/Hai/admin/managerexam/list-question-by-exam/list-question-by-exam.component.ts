import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-question-by-exam',
  templateUrl: './list-question-by-exam.component.html',
  styleUrls: ['./list-question-by-exam.component.css']
})
export class ListQuestionByExamComponent implements OnInit {

  hocphan;
  trinhdo;
  searchText;

  logName: string;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

}
