import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../model/lesson";
import {LessonServiceService} from "../../service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-editbaihoc',
  templateUrl: './editbaihoc.component.html',
  styleUrls: ['./editbaihoc.component.css'],
  providers:[LessonServiceService,ToastrService]
})
export class EditbaihocComponent implements OnInit {
  FormSubmit = new FormGroup({
    baihoc: new FormControl('',Validators.required),
    mota: new  FormControl('',Validators.required),
    hocphan: new  FormControl('',Validators.required),
    trinhdo: new  FormControl('',Validators.required),
    noidung: new  FormControl('',Validators.required)
  })

  get baihoc(){return this.FormSubmit.get('baihoc') }
  get mota(){return this.FormSubmit.get('mota') }
  get hocphan(){return this.FormSubmit.get('hocphan') }
  get trinhdo(){return this.FormSubmit.get('trinhdo') }
  get noidung(){return this.FormSubmit.get('noidung') }
  logName: String;
  id:number;
  ls: Lesson=new Lesson();

  constructor(private lessonService: LessonServiceService,private route: ActivatedRoute,private tsv: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.lessonService.get(this.id).subscribe(data=>{
      this.ls = data
    },error => console.log(error));
  }
  updateLesson(){
    this.lessonService.update(this.id,this.ls).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
      this.tsv.success('Sửa thành công', 'Sửa bài học');
    },error => console.log(error));
  }
}
