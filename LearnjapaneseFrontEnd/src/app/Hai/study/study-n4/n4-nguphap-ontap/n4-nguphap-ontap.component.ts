import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n4-nguphap-ontap',
  templateUrl: './n4-nguphap-ontap.component.html',
  styleUrls: ['./n4-nguphap-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N4NguphapOntapComponent  implements OnInit {
  ex: Exam[];

  constructor(private examservice: ExamserviceService, private route: ActivatedRoute,
              private router: Router) {
  }
  logName:string;

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

  reloadData() {
    this.examservice.finByLevelTerm("N4", "Ngữ pháp").subscribe(data => {
      this.ex = data;
    });
  }
}

