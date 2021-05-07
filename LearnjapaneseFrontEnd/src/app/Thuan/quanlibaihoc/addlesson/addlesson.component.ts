import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../service/lesson-service.service";
import {Lesson} from "../../model/lesson";
import {Router} from "@angular/router";
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-addlesson',
  templateUrl: './addlesson.component.html',
  styleUrls: ['./addlesson.component.css'],
  providers: [LessonServiceService, ToastrService]
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
  logName: String;
  constructor(private lsService:LessonServiceService,private route:Router, private tsv: ToastrService) { }
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.ls= new  Lesson();
  }
  clicksub() {
    this.lsService.create(this.ls).subscribe(data=>{
      this.ls=data;
      this.tsv.success('Thành công', 'Thêm bài học');
      this.ls=new Lesson();
    })
    console.log(this.submitForm.value);
    this.submitForm.reset();
  }
}
