import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";

@Component({
  selector: 'app-test-n5',
  templateUrl: './test-n5.component.html',
  styleUrls: ['./test-n5.component.css'],
  providers: [ExamserviceService]
})
export class TestN5Component implements OnInit {
  exam: Exam[];

  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.examService.findBylevel("N5").subscribe(data => {
      this.exam = data;
    });
  }
  detail(id: number){
    this.router.navigate(['/exam/N5',id])
  }

}
