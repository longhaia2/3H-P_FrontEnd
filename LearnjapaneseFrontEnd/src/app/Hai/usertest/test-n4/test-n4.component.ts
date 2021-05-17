import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-test-n4',
  templateUrl: './test-n4.component.html',
  styleUrls: ['./test-n4.component.css'],
  providers: [ExamserviceService]
})
export class TestN4Component implements OnInit {
  exam: Exam[];
  logName: string;


  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.reloadData();
  }
  reloadData() {
    this.examService.findBylevelCodeExam("N4").subscribe(data => {
      this.exam = data;
      console.log(this.exam);
      this.examService.getlistExamOrderByJLPTDesc("id");
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N4',id])
  }

}
