import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n2-tuvung-ontap',
  templateUrl: './n2-tuvung-ontap.component.html',
  styleUrls: ['./n2-tuvung-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N2TuvungOntapComponent  implements OnInit {
  ex: Exam[];
  logName:string;
  constructor(private examservice: ExamserviceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }

  reloadData() {
    this.examservice.finByLevelTerm("N1", "Từ vựng").subscribe(data => {
      this.ex = data;
    });
  }
}
