import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-test-n3',
  templateUrl: './test-n3.component.html',
  styleUrls: ['./test-n3.component.css'],
  providers:[ExamserviceService]
})
export class TestN3Component implements OnInit {
exam: Exam[];
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
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
