import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n3',
  templateUrl: './study-n3.component.html',
  styleUrls: ['./study-n3.component.css']
})
export class StudyN3Component implements OnInit {
  logName: string;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

}
