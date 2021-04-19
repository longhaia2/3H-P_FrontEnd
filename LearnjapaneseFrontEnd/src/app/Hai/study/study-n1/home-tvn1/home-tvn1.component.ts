import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-tvn1',
  templateUrl: './home-tvn1.component.html',
  styleUrls: ['./home-tvn1.component.css'],
  providers: [LessonServiceService]
})
export class HomeTvn1Component implements OnInit {
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

