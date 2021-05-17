
import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../Thuan/service/lesson-service.service";
import {Lesson} from "../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
import {UserScore} from "../challenge/model/UserScore";
import {ResultTop} from "../challenge/model/ResultTop";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[LessonServiceService, ExamserviceService,]
})
export class HomepageComponent implements OnInit {


  logName: string=null;
  role: string=null;
  id: number;
  rt: ResultTop[];
  ls: Lesson[];
  ex: Exam[];
  us: UserScore[];
  p : number = 1;


  constructor(private lessonService: LessonServiceService, private examService: ExamserviceService) {
  }


  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
   if(userName!=null){
     this.logName = userName['username'];
     this.role=userName['role'];
   }


    this.getLesson();
    this.list();
    this.ListtopHigh();
    this.Refresh()
  }

  getLesson() {
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
  Refresh(){

    if (localStorage.getItem('refreshed') === null) {
      localStorage['refreshed'] = true;
      window.location.reload(true);
    } else {
      localStorage.removeItem('refreshed');
    }
  }
}
