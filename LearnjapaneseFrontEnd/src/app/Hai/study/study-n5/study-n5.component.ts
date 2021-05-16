import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-study-n5',
  templateUrl: './study-n5.component.html',
  styleUrls: ['./study-n5.component.css']
})
export class StudyN5Component implements OnInit {

  constructor() {
  }
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
