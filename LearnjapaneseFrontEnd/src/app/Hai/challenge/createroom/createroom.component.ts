import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.css'],
  providers: [ServiceService]
})
export class CreateroomComponent implements OnInit {

  cl:RoomChallenge;
  constructor(private csService: ServiceService) { }


  ngOnInit(): void {
    this.cl= new RoomChallenge();
  }
  add(){
    this.csService.create(this.cl).subscribe(data=>{
      this.cl=data;
      alert("Thành Công");
    });
    this.cl = new RoomChallenge();
  }
  onSubmint(){
    this.add();
  }
}
