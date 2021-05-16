import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from '../serviceadmin/examservice.service';
import {Exam} from '../model/Exam';
import {LessonServiceService} from "../../../Thuan/service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-managerexam',
  templateUrl: './managerexam.component.html',
  styleUrls: ['./managerexam.component.css'],
  providers:[ExamserviceService,ToastrService]
})
export class ManagerexamComponent implements OnInit {

  hocphan;
  trinhdo;
  searchText;
  id:number;
  logName: string;

  ex:Exam[];
  constructor(private examserviceService: ExamserviceService,private  trv: ToastrService,private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  this.list();
    this.id=this.route.snapshot.params['id'];
    this.examserviceService.get(this.id).subscribe(data=>{
      this.ex=data
    },error => console.log(error));

  }
  list(){
    this.examserviceService.findAll().subscribe(data =>{
      this.ex = data;
      console.log(data);
    });
  }
  delete(id: number){
    this.examserviceService.delete(id).subscribe(data=>{console.log(data);this.list();},
      error => console.log(error));
    this.trv.success('Thành công', 'Thêm đề thi');
    window.location.reload();
  }
  updateEx(id: number){
    this.router.navigate(['/edit',id])
  }
  timkiem(searchtext){
    if(searchtext==""){
      this.examserviceService.findAll().subscribe(data => {
        this.ex = data;
      });
    }else{
      this.examserviceService.findByCodeExam(searchtext).subscribe(data => {
        this.ex = data;
      });
    }
    console.log(this.ex);
  }

}
