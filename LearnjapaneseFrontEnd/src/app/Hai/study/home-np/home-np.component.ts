import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-np',
  templateUrl: './home-np.component.html',
  styleUrls: ['./home-np.component.css'],
  providers: [LessonServiceService],
})
export class HomeNpComponent implements OnInit {
  id:number;
  ls: Lesson=new Lesson();
  logName: String;


  constructor(private lessonService: LessonServiceService, private  route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];

    this.lessonService.get(this.id).subscribe(data=>{
      this.ls = data
    }, error => console.log(error));
  }
}
