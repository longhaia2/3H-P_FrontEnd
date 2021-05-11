import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../Thuan/service/lesson-service.service";
import {Lesson} from "../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
import {Title} from '@angular/platform-browser';
import {UserServiceService} from "../../Manh/servicem/user-service.service";
import {User} from "../../Manh/modelm/user";
import {UserScore} from "../challenge/model/UserScore";
import {ResultTop} from "../challenge/model/ResultTop";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[LessonServiceService, ExamserviceService,]
})
export class HomepageComponent implements OnInit {


  logName: string;
  id: number;
  rt: ResultTop[];
  ls: Lesson[];
  ex: Exam[];
  us: UserScore[];
  p : number = 1;


  constructor(private lessonService: LessonServiceService, private examService: ExamserviceService, private title: Title) {
    this.title.setTitle("Trang Chủ");
  }


  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.reloadData();
    this.list();
    this.ListtopHigh()
  }

  reloadData() {
    this.lessonService.getLessonByDesc().subscribe(data => {
      this.ls = data;
    });
  }
  list(){
    this.examService.findAll().subscribe(data => {
      this.ex = data;
      console.log(data);
    });
  }
  ListtopHigh(){
    this.lessonService.getTopHighScoreByScore().subscribe(data => {
      this.rt = data;
    });
  }
}
