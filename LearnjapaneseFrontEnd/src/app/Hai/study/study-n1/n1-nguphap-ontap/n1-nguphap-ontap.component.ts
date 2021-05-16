import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";

@Component({
  selector: 'app-n1-nguphap-ontap',
  templateUrl: './n1-nguphap-ontap.component.html',
  styleUrls: ['./n1-nguphap-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N1NguphapOntapComponent  implements OnInit {
  ex: Exam[];
  logName: String = null;
  role: string = null;

  constructor(private examservice: ExamserviceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role = userName['role'];
    }
  }

  reloadData() {
    this.examservice.finByLevelTerm("N1", "Ngữ pháp").subscribe(data => {
      this.ex = data;
    });
  }
}
