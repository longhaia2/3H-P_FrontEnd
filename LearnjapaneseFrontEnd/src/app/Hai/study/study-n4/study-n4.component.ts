import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n4',
  templateUrl: './study-n4.component.html',
  styleUrls: ['./study-n4.component.css']
})
export class StudyN4Component implements OnInit {
  logName: string = null;
  role: string = null
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

}
