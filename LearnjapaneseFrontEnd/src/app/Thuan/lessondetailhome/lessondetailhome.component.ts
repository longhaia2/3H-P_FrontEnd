import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../service/lesson-service.service";
import {Lesson} from "../model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lessondetailhome',
  templateUrl: './lessondetailhome.component.html',
  styleUrls: ['./lessondetailhome.component.css'],
  providers: [LessonServiceService]
})
export class LessondetailhomeComponent implements OnInit {
  id:number;
  ls: Lesson=new Lesson();

  constructor(private lessonService: LessonServiceService, private  route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.lessonService.get(this.id).subscribe(data=>{
      this.ls = data
    }, error => console.log(error));
  }
}

