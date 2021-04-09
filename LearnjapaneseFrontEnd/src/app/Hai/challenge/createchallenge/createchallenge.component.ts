import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../Thuan/model/lesson";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createchallenge',
  templateUrl: './createchallenge.component.html',
  styleUrls: ['./createchallenge.component.css'],
  providers: [LessonServiceService]
})
export class CreatechallengeComponent implements OnInit {

  ls:Lesson;

  constructor(private lsService:LessonServiceService,private route:Router) { }

  ngOnInit(): void {
  }

}
