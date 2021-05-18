import {Component, OnInit, ViewChild} from '@angular/core';
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-toptest',
  templateUrl: './toptest.component.html',
  styleUrls: ['./toptest.component.css'],
  providers:[ExamserviceService]
})
export class ToptestComponent implements OnInit {

  id:number;
  ex: Exam[];
  b : number = 1;

  constructor( private examService : ExamserviceService ,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.list();
  }
  list(){
    this.examService.getlistExamOrderByIdDesc().subscribe(data =>{
      this.ex = data;
      console.log(data);
    });
  }
}
