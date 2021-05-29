import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {RoomUsers} from "../model/RoomUsers";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css'],
  providers: [ServiceService, ToastrService]
})
export class CreateroomComponent implements OnInit {
  room_user: RoomUsers;
  cl:RoomChallenge = new RoomChallenge();
  checkroom:boolean =false;
  public logName:string;
  role: string=null;
  constructor(private csService: ServiceService, private router: Router,private toastrService :ToastrService) {
  }



  ngOnInit(): void {
    this.room_user= new RoomUsers();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    if(userName!=null){
      this.logName = userName['username'];
      this.role=userName['role'];
    }

    this.cl.userCreate = userName['username'];

  }
  add(idRoom){
    if(this.logName==null){
      alert("Bạn vui lòng đăng nhập");
      this.router.navigate(['login']);
    }
    else {
      //Tạo phòng
      if (this.cl.room_name == null ||this.cl.level == null || this.cl.time == null ) {
        this.checkroom = false;
        this.toastrService.success('Vui lòng nhập đủ thông tin!!');
      } else {
        this.checkroom = true;
        this.cl.status=1
        this.csService.create(this.cl).subscribe(data => {
          this.cl.room_id = data;
          idRoom = data;
          let id = JSON.parse(sessionStorage.getItem('auth-user'));
          this.room_user.user_id = id['userId'];
          this.room_user.room_id = this.cl.room_id;
          this.room_user.banker = 1;
          this.room_user.score = 0;
          this.room_user.status = 1;
          //Thêm dữ liệu vào bảng phòng chờ rồi chuyển qua phòng chờ
          this.csService.addroom(this.room_user).subscribe(dt => {
            this.toastrService.success('Tạo Phòng Thành Công');
            this.router.navigate(['challenge/wait/', idRoom]);
          })
        });
      }
    }
  }
}
