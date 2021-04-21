import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../service/lesson-service.service";
import {Lesson} from "../../model/lesson";
import {Router} from "@angular/router";
import {FormControl,FormGroup,Validators} from "@angular/forms";

@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css'],
  providers: [LessonServiceService]
})
export class AddlessonComponent implements OnInit {
 submitForm = new FormGroup({
   baihoc: new FormControl('',Validators.required),
   mota: new  FormControl('',Validators.required),
   hocphan: new  FormControl('',Validators.required),
   trinhdo: new  FormControl('',Validators.required),
   noidung: new  FormControl('',Validators.required)
 })
  get baihoc(){return this.submitForm.get('baihoc') }
  get mota(){return this.submitForm.get('mota') }
  get hocphan(){return this.submitForm.get('hocphan') }
  get trinhdo(){return this.submitForm.get('trinhdo') }
  get noidung(){return this.submitForm.get('noidung') }
  ls:Lesson;

  constructor(private lsService:LessonServiceService,private route:Router) { }

  ngOnInit(): void {
    this.ls=new Lesson();
  }

  add(){
    this.lsService.create(this.ls).subscribe(data=>{
      this.ls=data;
      alert("thành công");
    })
    this.ls=new Lesson();
  }
onSubmint(){
  this.add();
}

}
