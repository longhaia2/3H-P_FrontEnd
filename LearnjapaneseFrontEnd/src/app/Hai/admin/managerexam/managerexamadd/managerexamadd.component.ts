import { Component, OnInit } from '@angular/core';
import {Exam} from '../../model/Exam';
import {ExamserviceService} from '../../serviceadmin/examservice.service';
import {Router} from '@angular/router';
import {RoomChallenge} from '../../../challenge/model/RoomChallenge';

@Component({
  selector: 'app-managerexamadd',
  templateUrl: './managerexamadd.component.html',
  styleUrls: ['./managerexamadd.component.css'],
  providers:[ExamserviceService]
})
export class ManagerexamaddComponent implements OnInit {

  ex:Exam;
  constructor(private examserviceService: ExamserviceService,private router: Router) { }

  ngOnInit(): void {
    this.ex= new Exam();
  }
  add(){
    this.examserviceService.create(this.ex).subscribe(data=>{
      console.log(data);
      this.ex=data;
      alert("Thêm Thành Công");
    });
    this.ex = new Exam();
  }
  onSubmint(){
    this.add();
  }

}
