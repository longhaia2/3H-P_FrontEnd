import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../model/lesson";
import {LessonServiceService} from "../../service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editbaihoc',
  templateUrl: './editbaihoc.component.html',
  styleUrls: ['./editbaihoc.component.css'],
  providers:[LessonServiceService]
})
export class EditbaihocComponent implements OnInit {

  id:number;
  ls: Lesson=new Lesson();

  constructor(private lessonService: LessonServiceService,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log('====================');
    console.log(this.id);
    this.lessonService.get(this.id).subscribe(data=>{
      this.ls = data
    },error => console.log(error));
  }
  updateLesson(){
    this.lessonService.update(this.id,this.ls).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
      alert("thành công");
    },error => console.log(error));
  }
}
