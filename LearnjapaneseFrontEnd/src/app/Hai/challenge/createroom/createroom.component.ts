import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";
import {RoomUsers} from "../model/RoomUsers";

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css'],
  providers: [ServiceService]
})
export class CreateroomComponent implements OnInit {
  room_user: RoomUsers;
  cl:RoomChallenge;

  public logName:string;

  constructor(private csService: ServiceService, private router: Router, private title: Title) {
    this.title.setTitle("Tạo Phòng Chiến");
  }



  ngOnInit(): void {
    this.cl= new RoomChallenge();
    this.room_user= new RoomUsers();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.cl.userCreate = userName['username'];
    this.logName = userName['username'];

  }
  add(idRoom){
    if(this.logName==null){
      alert("Bạn vui lòng đăng nhập");
      this.router.navigate(['login']);
    }
    else {
      this.csService.create(this.cl).subscribe(data => {
        console.log(data);
        this.cl = data;
        this.cl.room_id = idRoom;
        let id = JSON.parse(sessionStorage.getItem('auth-user'));
        this.room_user.user_id = id['userId'];
        this.room_user.room_id = this.cl.room_id;
        this.csService.addroom(this.room_user).subscribe(dt => {
          console.log(dt);
          this.router.navigate(['challenge/wait/',this.room_user.room_id]);
        })
      })
    }
    this.cl = new RoomChallenge();
  }
  // create(idRoom) {
  //   this.cl.room_id = idRoom;
  //   this.csService.addroom(this.room_user).subscribe(data => {
  //     console.log(data);
  //     this.router.navigate(['challenge/wait/',this.room_user.room_id]);
  //   })
  // }

}
