import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";

@Component({
  selector: 'app-test-n5',
  templateUrl: './test-n5.component.html',
  styleUrls: ['./test-n5.component.css'],
  providers: [ExamserviceService]
})
export class TestN5Component implements OnInit {
  exam: Exam[];
  logName: string;

  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
    }    this.reloadData();
  }
  reloadData() {
    this.examService.findBylevelCodeExam("N5").subscribe(data => {
      this.exam = data;
      console.log(this.exam);
      this.examService.getlistExamOrderByJLPTDesc("id");
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N5',id])
  }

}
