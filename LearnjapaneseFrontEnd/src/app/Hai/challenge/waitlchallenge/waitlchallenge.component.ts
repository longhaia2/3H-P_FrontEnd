import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../Manh/modelm/user';
import {Title} from "@angular/platform-browser";
import {RoomUsers} from "../model/RoomUsers";

@Component({
  selector: 'app-waitlchallenge',
  templateUrl: './waitlchallenge.component.html',
  styleUrls: ['./waitlchallenge.component.css'],
  providers :[ServiceService]
})
export class WaitlchallengeComponent implements OnInit {
  public logName:string;
  room_user: RoomUsers;
  user: User[];
  id: number;
  constructor(private service: ServiceService, private  route: ActivatedRoute,
              private  router: Router, private title: Title) {
    this.title.setTitle("Đợi Đối Thử");
  }

  ngOnInit(): void {
    this.room_user= new RoomUsers();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
        this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    this.service.get(this.id).subscribe(data=>{this.user=data},error => console.log(error));

  }
  startQuiz() {
    this.router.navigateByUrl("/competition");
  }


}
