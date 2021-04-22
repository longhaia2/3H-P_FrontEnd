import { Component, OnInit } from '@angular/core';
import {LessonServiceService} from "../../../../Thuan/service/lesson-service.service";
import {Lesson} from "../../../../Thuan/model/lesson";
import {ActivatedRoute, Router} from "@angular/router";
import {Exam} from "../../model/Exam";
import {ExamserviceService} from "../../serviceadmin/examservice.service";

@Component({
  selector: 'app-managerexamupdate',
  templateUrl: './managerexamupdate.component.html',
  styleUrls: ['./managerexamupdate.component.css'],
  providers:[ExamserviceService]
})
export class ManagerexamupdateComponent implements OnInit {

  id: number;
  ex: Exam =new Exam();

  constructor(private Exservice: ExamserviceService,private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log('====================');
    console.log(this.id);
    this.Exservice.get(this.id).subscribe(data=>{
      this.ex = data
    },error => console.log(error));
  }
  updateEx(){
    this.Exservice.update(this.id,this.ex).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
      alert("thành công");
    },error => console.log(error));
  }
}
