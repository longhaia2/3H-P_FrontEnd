import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n3-nguphap',
  templateUrl: './n3-nguphap.component.html',
  styleUrls: ['./n3-nguphap.component.css'],
  providers: [LessonServiceService]
})
export class N3NguphapComponent  implements OnInit {
  ls: Lesson[];
  logName: string = null;
  role: string= null;
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

  reloadData() {
    this.lessonService.findByidlevel("N3","Ngữ pháp").subscribe(data => {
      this.ls = data;
    });
  }

}
