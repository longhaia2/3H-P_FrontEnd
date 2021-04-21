import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {LessonServiceService} from "../../Thuan/service/lesson-service.service";
import {Lesson} from "../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
=======
import {Title} from "@angular/platform-browser";
>>>>>>> b1da75e131d3dcf0c96c1e4b8876fc6dadddddfc

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[LessonServiceService,ExamserviceService]
})
export class HomepageComponent implements OnInit {
  public logName:string;

<<<<<<< HEAD
  id:number;
  ls: Lesson[];
  ex: Exam[];
  p : number = 1;
  constructor(private lessonService: LessonServiceService, private examService : ExamserviceService ,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    this.list();
    }

=======
  constructor(private title: Title) {
    this.title.setTitle("Trang Chủ");
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
  }
>>>>>>> b1da75e131d3dcf0c96c1e4b8876fc6dadddddfc

  reloadData() {
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
