import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n2-nguphap',
  templateUrl: './n2-nguphap.component.html',
  styleUrls: ['./n2-nguphap.component.css'],
  providers: [LessonServiceService]
})
export class N2NguphapComponent  implements OnInit {
  ls: Lesson[];
  logName: string;
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

  reloadData() {
    this.lessonService.findByidlevel("N2","Ngữ pháp").subscribe(data => {
      this.ls = data;
    });
  }

}
