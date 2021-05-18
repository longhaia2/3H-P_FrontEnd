import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-starttestjnpt-n1',
  templateUrl: './starttestjnpt-n1.component.html',
  styleUrls: ['./starttestjnpt-n1.component.css'],
  providers: [ExamserviceService]
})
export class StarttestjnptN1Component implements OnInit {
  logName:string;
  id:number;
  ex : Exam=new Exam();
  role: string;
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data=>{
      this.ex=data
    },error => console.log(error));
  }

}
