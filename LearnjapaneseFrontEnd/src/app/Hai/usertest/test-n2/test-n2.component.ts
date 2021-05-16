import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-n2',
  templateUrl: './test-n2.component.html',
  styleUrls: ['./test-n2.component.css'],
  providers: [ExamserviceService]
})
export class TestN2Component implements OnInit {
  exam: Exam[];
  logName: string;
  role:string=null;


  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role=userName['role'];

    }    this.reloadData();
  }
  reloadData() {
    this.examService.findBylevelCodeExam("N2").subscribe(data => {
      this.exam = data;
      console.log(this.exam);
      this.examService.getlistExamOrderByJLPTDesc("id");
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N3',id])
  }

}
