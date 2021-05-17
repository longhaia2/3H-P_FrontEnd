import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n1',
  templateUrl: './study-n1.component.html',
  styleUrls: ['./study-n1.component.css']
})
export class StudyN1Component implements OnInit {
  // tslint:disable-next-line:ban-types
  logName: String;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

}
