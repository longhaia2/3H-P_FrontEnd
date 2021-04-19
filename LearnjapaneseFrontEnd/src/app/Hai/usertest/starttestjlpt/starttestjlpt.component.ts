import { Component, OnInit } from '@angular/core';
import {User} from "../../../Manh/modelm/user";
import {Exam} from "../../admin/model/Exam";
import {UserServiceService} from "../../../Manh/servicem/user-service.service";
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-starttestjlpt',
  templateUrl: './starttestjlpt.component.html',
  styleUrls: ['./starttestjlpt.component.css'],
  providers: [ExamserviceService]

})
export class StarttestjlptComponent implements OnInit {
  id:number;
  ex : Exam=new Exam();

  constructor(private examService: ExamserviceService, private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data=>{
      this.ex=data
    },error => console.log(error));
  }


}
