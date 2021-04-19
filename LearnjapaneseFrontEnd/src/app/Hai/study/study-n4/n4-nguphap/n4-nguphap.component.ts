import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n4-nguphap',
  templateUrl: './n4-nguphap.component.html',
  styleUrls: ['./n4-nguphap.component.css'],
  providers: [LessonServiceService]
})
export class N4NguphapComponent  implements OnInit {
  ls: Lesson[];
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.lessonService.findByidlevel("N4","Ngữ pháp").subscribe(data => {
      this.ls = data;
    });
  }

}
