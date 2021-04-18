import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../service/lesson-service.service";
import {Lesson} from "../model/lesson";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-homelesson',
  templateUrl: './homelesson.component.html',
  styleUrls: ['./homelesson.component.css'],
  providers: [LessonServiceService]
})
export class HomelessonComponent implements OnInit {
  ls: Lesson[];

  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.lessonService.findByidlessson("N1","Bai 2").subscribe(data => {
      this.ls = data;
    });
  }

  detail(id: number) {
    this.router.navigate(['/detail', id])
  }

}
