
import { Component, OnInit } from '@angular/core';
import {Exam} from '../../model/Exam';
import {ExamserviceService} from '../../serviceadmin/examservice.service';
import {Router} from '@angular/router';
import {RoomChallenge} from '../../../challenge/model/RoomChallenge';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-managerexamadd',
  templateUrl: './managerexamadd.component.html',
  styleUrls: ['./managerexamadd.component.css'],
  providers:[ExamserviceService, ToastrService]
})
export class ManagerexamaddComponent implements OnInit {

  // @ts-ignore
  AddForm = new FormGroup({
    tieude: new FormControl('',Validators.required),
    made: new  FormControl('',Validators.required),
    loaide: new  FormControl('',Validators.required),
    trinhdo: new  FormControl('',Validators.required),
    socauhoi: new  FormControl('',Validators.required),
    // @ts-ignore
    thoigian: new  FormControl('',Validators.required),
    noidung: new  FormControl('',Validators.required),

  });
  get tieude(){return this.AddForm.get('tieude') }
  get made(){return this.AddForm.get('made') }
  get loaide(){return this.AddForm.get('loaide') }
  get trinhdo(){return this.AddForm.get('trinhdo') }
  get socauhoi(){return this.AddForm.get('socauhoi') }
  get thoigian(){return this.AddForm.get('thoigian') }
  get noidung(){return this.AddForm.get('noidung') }

  logName: string

  ex:Exam;
  constructor(private examserviceService: ExamserviceService,private  tv: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.ex= new Exam();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }
  add() {
    this.examserviceService.create(this.ex).subscribe(data => {
      console.log(data);
      this.ex = data;
      this.tv.success('Thêm thành công', 'Thêm đề thi');
      this.ex = new Exam();
    });
    return this.AddForm.reset();
  }


}

