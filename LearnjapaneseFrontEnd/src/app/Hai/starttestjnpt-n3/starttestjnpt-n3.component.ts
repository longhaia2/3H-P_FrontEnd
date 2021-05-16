import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-starttestjnpt-n3',
  templateUrl: './starttestjnpt-n3.component.html',
  styleUrls: ['./starttestjnpt-n3.component.css'],
  providers: [ExamserviceService]

})
export class StarttestjnptN3Component implements OnInit {
  logName:string;
  role:string=null;

  id:number;
  ex : Exam=new Exam();
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role=userName['role'];

    }
    this.id=this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data=>{
      this.ex=data
    },error => console.log(error));
  }

}
