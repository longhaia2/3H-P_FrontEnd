import { Component, OnInit } from '@angular/core';
import {Exam} from "../admin/model/Exam";
import {ActivatedRoute, Router} from "@angular/router";
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";

@Component({
  selector: 'app-starttestjnpt-n4',
  templateUrl: './starttestjnpt-n4.component.html',
  styleUrls: ['./starttestjnpt-n4.component.css'],
  providers: [ExamserviceService]

})
export class StarttestjnptN4Component implements OnInit {
  logName:string;
  id:number;
  ex : Exam=new Exam();
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
    }    this.id=this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data=>{
      this.ex=data
    },error => console.log(error));
  }

}
