import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../Hien/servicesh/exam.service";
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {Exam} from "../../admin/model/Exam";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listtestjlpt',
  templateUrl: './listtestjlpt.component.html',
  styleUrls: ['./listtestjlpt.component.css'],
  providers:[ExamserviceService]
})
export class ListtestjlptComponent implements OnInit {
  exam:Exam[];
  role:string=null;
  p : number = 1;
  public logName:string;
  constructor(private examserve: ExamserviceService, private router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    if(userName != null){
      this.logName = userName['username'];
      this.role=userName['role'];

    }    this.examserve.getExamNew().subscribe(data=>{
      this.exam=data;
    })
  }
  detail(id: number){
    this.router.navigate(['/exam/N1',id])
  }

}
