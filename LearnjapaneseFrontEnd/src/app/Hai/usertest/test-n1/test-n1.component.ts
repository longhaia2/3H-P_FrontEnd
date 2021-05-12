import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-n1',
  templateUrl: './test-n1.component.html',
  styleUrls: ['./test-n1.component.css'],
  providers: [ExamserviceService]
})
export class TestN1Component implements OnInit {
  exam : Exam[];
  logName: string

  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.reloadData();
  }
  reloadData() {
    this.examService.findBylevel("N1").subscribe(data => {
      this.exam = data;
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N1',id])
  }

}
