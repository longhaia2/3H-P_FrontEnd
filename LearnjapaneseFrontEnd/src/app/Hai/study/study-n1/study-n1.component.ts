import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n1',
  templateUrl: './study-n1.component.html',
  styleUrls: ['./study-n1.component.css']
})
export class StudyN1Component implements OnInit {
  // tslint:disable-next-line:ban-types
  logName: String = null;
  role: string = null;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if (userName != null) {
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

}
