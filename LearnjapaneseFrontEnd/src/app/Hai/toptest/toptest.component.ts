import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../Thuan/service/lesson-service.service";
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Lesson} from "../../Thuan/model/lesson";
import {Exam} from "../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-toptest',
  templateUrl: './toptest.component.html',
  styleUrls: ['./toptest.component.css'],
  providers:[ExamserviceService]
})
export class ToptestComponent implements OnInit {

  id:number;
  ex: Exam[];
  b : number = 1;

  constructor( private examService : ExamserviceService ,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.list();
  }

  list(){
    this.examService.findAll().subscribe(data =>{
      this.ex = data;
      console.log(data);
    });
  }
}
