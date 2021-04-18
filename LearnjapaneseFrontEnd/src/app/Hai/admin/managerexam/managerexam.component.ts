import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from '../serviceadmin/examservice.service';
import {Exam} from '../model/Exam';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-managerexam',
  templateUrl: './managerexam.component.html',
  styleUrls: ['./managerexam.component.css'],
  providers:[ExamserviceService]
})
export class ManagerexamComponent implements OnInit {

  ex:Exam[];
  constructor(private examserviceService: ExamserviceService, private route: ActivatedRoute,
              private router: Router) { }
// (private lessonService: LessonServiceService, private route: ActivatedRoute,
//   private router: Router){}

  ngOnInit(): void {
this.list();
  }
  list(){
    this.examserviceService.findAll().subscribe(data =>{
      this.ex = data;
      console.log(data);
    });
  }
  delete(id: number){
    this.examserviceService.delete(id).subscribe(data=>{console.log(data);},
      error => console.log(error));
    alert("Xóa thành công")
    window.location.reload();
  }
  updateEx(id: number){
    this.router.navigate(['/edit',id])
  }


}
