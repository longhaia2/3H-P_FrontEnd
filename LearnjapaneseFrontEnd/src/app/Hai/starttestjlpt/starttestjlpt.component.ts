import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../admin/serviceadmin/examservice.service";
import {Exam} from "../admin/model/Exam";
import {Question} from "../../Hien/model/question";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-starttestjlpt',
  templateUrl: './starttestjlpt.component.html',
  styleUrls: ['./starttestjlpt.component.css'],
  providers: [ExamserviceService]

})
export class StarttestjlptComponent implements OnInit {
  logName:string;
  role:string=null;
  id:number;
  ex : Exam=new Exam();
  qs : Question[];
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
