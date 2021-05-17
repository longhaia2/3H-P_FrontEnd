import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n4-tuvung',
  templateUrl: './n4-tuvung.component.html',
  styleUrls: ['./n4-tuvung.component.css'],
  providers: [LessonServiceService]
})
export class N4TuvungComponent  implements OnInit {
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
    this.lessonService.findByidlevel("N4", "Từ vựng").subscribe(data => {
      this.ls = data;
    });
  }
}
