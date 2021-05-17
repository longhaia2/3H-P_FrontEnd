import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n1-tuvung',
  templateUrl: './n1-tuvung.component.html',
  styleUrls: ['./n1-tuvung.component.css'] ,
  providers: [LessonServiceService]
})
export class N1TuvungComponent  implements OnInit {
  ls: Lesson[];
  logName: String;
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.reloadData();
  }

  reloadData() {
    this.lessonService.findByidlevel("N1","Từ vựng").subscribe(data => {
      this.ls = data;
    });
  }

  detail(id: number) {
    this.router.navigate(['/detail', id])
  }

}
