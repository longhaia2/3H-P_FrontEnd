import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../service/lesson-service.service";
import {Lesson} from "../../model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [LessonServiceService]
})
export class DetailComponent implements OnInit {
  id:number;
  lesson: Lesson=new Lesson();

  constructor(private lessonService: LessonServiceService, private  route: ActivatedRoute,
  private  router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.lessonService.get(this.id).subscribe(data=>{
      this.lesson = data
    }, error => console.log(error));
  }
}
