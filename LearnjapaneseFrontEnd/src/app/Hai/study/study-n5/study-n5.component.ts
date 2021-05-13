import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n5',
  templateUrl: './study-n5.component.html',
  styleUrls: ['./study-n5.component.css']
})
export class StudyN5Component implements OnInit {

  constructor() { }
  logName: string;
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }
}
