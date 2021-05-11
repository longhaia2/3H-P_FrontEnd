import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-n2',
  templateUrl: './test-n2.component.html',
  styleUrls: ['./test-n2.component.css'],
  providers: [ExamserviceService]
})
export class TestN2Component implements OnInit {
  exam: Exam[];

  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void { this.reloadData();
  }
  reloadData() {
    this.examService.findBylevel("N3").subscribe(data => {
      this.exam = data;
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N3',id])
  }

}
