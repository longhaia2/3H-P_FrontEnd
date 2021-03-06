import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../service/lesson-service.service";
import {Lesson} from "../model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-chitietlesson',
  templateUrl: './chitietlesson.component.html',
  styleUrls: ['./chitietlesson.component.css'],
  providers: [LessonServiceService]
})
export class ChitietlessonComponent implements OnInit {
  id:number;
  logName: string;
  ls: Lesson=new Lesson();

  constructor(private lessonService: LessonServiceService, private  route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id = this.route.snapshot.params['id'];
    this.lessonService.get(this.id).subscribe(data=>{
      this.ls = data
    }, error => console.log(error));
  }
}


