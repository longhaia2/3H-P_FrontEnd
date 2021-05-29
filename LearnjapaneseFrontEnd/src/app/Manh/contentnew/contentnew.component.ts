import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentnew',
  templateUrl: './contentnew.component.html',
  styleUrls: ['./contentnew.component.css']
})
export class ContentnewComponent implements OnInit {
  logName:string;
  role:string=null;

  constructor() { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role=userName['role'];

    }
  }

}
