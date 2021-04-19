import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css'],
  providers: [ServiceService]
})
export class CreateroomComponent implements OnInit {

  cl:RoomChallenge;
  public logName:string;
  constructor(private csService: ServiceService, private router: Router, private title: Title) {
    this.title.setTitle("Tạo Phòng Chiến");
  }



  ngOnInit(): void {
    this.cl= new RoomChallenge();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.cl.userCreate = userName['username'];
    this.logName = userName['username'];
  }
  add(){
    if(this.logName==null){
      alert("Bạn vui lòng đăng nhập");
      this.router.navigate(['login']);
    }
    else {
      this.csService.create(this.cl).subscribe(data => {
        console.log(data);
        this.cl = data;
        alert("Thành Công");
        this.router.navigate(['challenge/wait', this.cl.room_id])

      })
    };
    this.cl = new RoomChallenge();
  }
  onSubmint(){
    this.add();
  }


}
