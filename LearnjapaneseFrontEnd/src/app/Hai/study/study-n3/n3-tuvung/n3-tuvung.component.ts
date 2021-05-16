import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n3-tuvung',
  templateUrl: './n3-tuvung.component.html',
  styleUrls: ['./n3-tuvung.component.css'],
  providers: [LessonServiceService]
})
export class N3TuvungComponent  implements OnInit {
  ls: Lesson[];
  role: string = null;
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }
  logName: string = null;
  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

  reloadData() {
    this.lessonService.findByidlevel("N3","Từ vựng").subscribe(data => {
      this.ls = data;
    });
  }

  detail(id: number) {
    this.router.navigate(['/detail', id])
  }

}

