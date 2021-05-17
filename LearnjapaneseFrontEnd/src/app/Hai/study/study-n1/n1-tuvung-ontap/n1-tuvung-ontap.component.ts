import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n1-tuvung-ontap',
  templateUrl: './n1-tuvung-ontap.component.html',
  styleUrls: ['./n1-tuvung-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N1TuvungOntapComponent  implements OnInit {
  ex: Exam[];

  constructor(private examservice: ExamserviceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.examservice.finByLevelTerm("N1", "Từ vựng").subscribe(data => {
      this.ex = data;
    });
  }
}
