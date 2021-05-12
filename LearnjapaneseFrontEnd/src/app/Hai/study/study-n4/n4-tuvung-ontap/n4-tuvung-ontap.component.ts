import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../../admin/serviceadmin/examservice.service";
import {Exam} from "../../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-n4-tuvung-ontap',
  templateUrl: './n4-tuvung-ontap.component.html',
  styleUrls: ['./n4-tuvung-ontap.component.css'],
  providers: [ExamserviceService]
})
export class N4TuvungOntapComponent  implements OnInit {
  ex: Exam[];

  constructor(private examservice: ExamserviceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.examservice.finByLevelTerm("N4", "Từ vựng").subscribe(data => {
      this.ex = data;
    });
  }
}

