import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n3-nguphap-ontap',
  templateUrl: './n3-nguphap-ontap.component.html',
  styleUrls: ['./n3-nguphap-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N3NguphapOntapComponent  implements OnInit {
  ex: Exam[];
  role: string = null;
  logName: string = null;
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
    this.examservice.finByLevelTerm("N3", "Ngữ pháp").subscribe(data => {
      this.ex = data;
    });
  }
}
