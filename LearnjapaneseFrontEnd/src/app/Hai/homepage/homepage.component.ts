import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../Thuan/service/lesson-service.service";
import {Lesson} from "../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[LessonServiceService,ExamserviceService]
})
export class HomepageComponent implements OnInit {


  logName: string;
  id:number;
  ls: Lesson[];
  ex: Exam[];
  p : number = 1;
  constructor(private lessonService: LessonServiceService, private examService : ExamserviceService ,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.list();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
  }


  reloadData() {
    // @ts-ignore
    this.lessonService.getLessonByDesc().subscribe(data => {
      this.ls = data;
    });
  }
  list(){
    this.examService.findAll().subscribe(data =>{
      this.ex = data;
      console.log(data);
    });
  }
}
