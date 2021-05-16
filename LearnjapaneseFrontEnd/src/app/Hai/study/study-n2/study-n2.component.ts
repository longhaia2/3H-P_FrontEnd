import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-n2',
  templateUrl: './study-n2.component.html',
  styleUrls: ['./study-n2.component.css']
})
export class StudyN2Component implements OnInit {

  constructor() { }
  logName: string = null;
  role: string = null;
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

}
