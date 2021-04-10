import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../service/lesson-service.service";
import {Lesson} from "../../model/lesson";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css'],
  providers: [LessonServiceService]
})
export class AddlessonComponent implements OnInit {

  //Tạo mới dữ liệu cho lesson
  ls:Lesson;

  constructor(private lsService:LessonServiceService,private route:Router) { }

  ngOnInit(): void {
    this.ls=new Lesson();
  }
  ckeditorContent ;

  add(){
    this.lsService.create(this.ls).subscribe(data=>{
      this.ls=data;
      alert("thành công");
    })
    this.ls=new Lesson();
  }

}
