import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n2-nguphap-ontap',
  templateUrl: './n2-nguphap-ontap.component.html',
  styleUrls: ['./n2-nguphap-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N2NguphapOntapComponent  implements OnInit {
  ex: Exam[];
  logName: string;

  constructor(private examservice: ExamserviceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

  reloadData() {
    this.examservice.finByLevelTerm("N2", "Ngữ pháp").subscribe(data => {
      this.ex = data;
    });
  }
}

