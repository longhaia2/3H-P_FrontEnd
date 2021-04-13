import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';

@Component({
  selector: 'app-waitlchallenge',
  templateUrl: './waitlchallenge.component.html',
  styleUrls: ['./waitlchallenge.component.css']
})
export class WaitlchallengeComponent implements OnInit {
  public logName:string;
  cl:RoomChallenge;
  constructor() { }

  ngOnInit(): void {
    this.cl= new RoomChallenge();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.cl.userCreate = userName['username'];
    this.logName = userName['username'];
  }


}
