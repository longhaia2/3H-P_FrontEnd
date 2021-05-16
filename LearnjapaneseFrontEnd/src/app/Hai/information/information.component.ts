import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  public logName:string=null;
  role: string=null;
  constructor() {
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    if(userName!=null) {
      this.logName = userName['username'];
      this.role = userName['role'];
    }
    }

}
