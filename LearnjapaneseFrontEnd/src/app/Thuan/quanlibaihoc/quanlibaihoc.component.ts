import { Component, OnInit } from '@angular/core';
import {Lesson} from "../model/lesson";
import {LessonServiceService} from "../service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quanlibaihoc',
  templateUrl: './quanlibaihoc.component.html',
  styleUrls: ['./quanlibaihoc.component.css'],
  providers: [LessonServiceService]
})
export class QuanlibaihocComponent implements OnInit {
  lesson: Lesson[];
  constructor(private lessonService: LessonServiceService, private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
      this.lessonService.findAll().subscribe(data =>{
        this.lesson =data;
      });
  }
detail(id: number){
    this.router.navigate(['/detail',id])
}
  delete(id: number) {
    this.lessonService.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  //ham update du lieu
   updatelesson(id: number){
    this.router.navigate(['/edit',id])
  }
}

