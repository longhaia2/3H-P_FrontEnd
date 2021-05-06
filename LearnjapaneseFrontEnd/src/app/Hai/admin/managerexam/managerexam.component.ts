import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from '../serviceadmin/examservice.service';
import {Exam} from '../model/Exam';

@Component({
  selector: 'app-managerexam',
  templateUrl: './managerexam.component.html',
  styleUrls: ['./managerexam.component.css'],
  providers:[ExamserviceService]
})
export class ManagerexamComponent implements OnInit {
  logName: string
  ex:Exam[];
  constructor(private examserviceService: ExamserviceService) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
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

}
