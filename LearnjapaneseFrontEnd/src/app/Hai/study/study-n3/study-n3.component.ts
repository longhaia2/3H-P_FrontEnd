import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n3',
  templateUrl: './study-n3.component.html',
  styleUrls: ['./study-n3.component.css']
})
export class StudyN3Component implements OnInit {
  logName: string = null;
  role: string= null;
  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

}
