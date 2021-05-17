import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-n3',
  templateUrl: './test-n3.component.html',
  styleUrls: ['./test-n3.component.css'],
  providers:[ExamserviceService]
})
export class TestN3Component implements OnInit {
  exam: Exam[];
  logName: string;
  role:string;

  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }
  reloadData() {
    this.examService.findBylevelCodeExam("N3").subscribe(data => {
      this.exam = data;
      console.log(this.exam);
      this.examService.getlistExamOrderByJLPTDesc("id");
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N3',id])
  }


}
