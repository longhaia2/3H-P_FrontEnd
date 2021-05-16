import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n5-nguphap-ontap',
  templateUrl: './n5-nguphap-ontap.component.html',
  styleUrls: ['./n5-nguphap-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N5NguphapOntapComponent  implements OnInit {
  ex: Exam[];
  logName: string = null;
  role: string = null ;

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
    this.examservice.finByLevelTerm("N5", "Ngữ pháp").subscribe(data => {
      this.ex = data;
    });
  }
}

