import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n3-tuvung-ontap',
  templateUrl: './n3-tuvung-ontap.component.html',
  styleUrls: ['./n3-tuvung-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N3TuvungOntapComponent  implements OnInit {
  ex: Exam[];
  logName:string= null;
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
    this.examservice.finByLevelTerm("N3", "Từ vựng").subscribe(data => {
      this.ex = data;
    });
  }
}
