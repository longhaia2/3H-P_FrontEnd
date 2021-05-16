import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";

@Component({
  selector: 'app-home-ontap',
  templateUrl: './home-ontap.component.html',
  styleUrls: ['./home-ontap.component.css'],
  providers: [ExamserviceService],
})
export class HomeOntapComponent implements OnInit {
  id:number;
  ex: Exam=new Exam();
  logName: string= null;
  role : string= null;

  constructor(private examService: ExamserviceService, private  route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName!=null){
      this.logName = userName['username'];
      this.role=userName['role'];
    }
    this.examService.get(this.id).subscribe(data=>{
      this.ex = data
    }, error => console.log(error));
  }
}

