import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public logName:string;

  constructor(private title: Title) {
    this.title.setTitle("Trang Chủ");
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
  }

}
