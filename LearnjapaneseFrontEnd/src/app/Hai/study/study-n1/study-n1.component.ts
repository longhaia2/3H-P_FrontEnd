import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-study-n1',
  templateUrl: './study-n1.component.html',
  styleUrls: ['./study-n1.component.css'],
  providers: [LessonServiceService]
})
export class StudyN1Component implements OnInit {
  ls: Lesson[];

  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {

  }

}

