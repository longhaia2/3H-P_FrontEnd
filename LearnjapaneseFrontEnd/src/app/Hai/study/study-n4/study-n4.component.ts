import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n4',
  templateUrl: './study-n4.component.html',
  styleUrls: ['./study-n4.component.css']
})
export class StudyN4Component implements OnInit {
  logName: string;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

}
