import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../Manh/modelm/user';
import {Title} from "@angular/platform-browser";
import {RoomUsers} from "../model/RoomUsers";
import {ChallengeServiceService} from '../../Service/challenge-service.service';
import {ServicebtService} from '../../../Service/servicebt.service';

@Component({
  selector: 'app-waitlchallenge',
  templateUrl: './waitlchallenge.component.html',
  styleUrls: ['./waitlchallenge.component.css'],
  providers : [ServiceService, ChallengeServiceService]
})
export class WaitlchallengeComponent implements OnInit {
  public logName: string;
  room_user: RoomUsers = new RoomUsers();
  room: RoomChallenge = new RoomChallenge();
  r_s: RoomUsers[];
  r_s_1: RoomUsers[];
  id_u_scrore: number;
  selectedAS: string[];
  user: User[];
  users: User = new User();
  id: number;
  id_r: number;
  ready: boolean[];
  allReady: boolean ;
  level: string;
  time: string;

  constructor(private  lessonServiceService: ServicebtService,private service: ServiceService, private  route: ActivatedRoute, private challengeServiceService: ChallengeServiceService,
              private  router: Router, private title: Title) {
    this.title.setTitle("Đợi Đối Thử");
  }

  ngOnInit(): void {

    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
    this.id = this.route.snapshot.params['id'];
    this.service.get(this.id).subscribe(data => {
      this.user = data;
      this.selectedAS = new Array(this.user.length);
      this.ready = new Array(this.user.length);
      for (let i = 0; i <= this.user.length; i++) {
        this.ready[i] = false;
      }
      this.allReady = false;
    }, error => console.log(error));
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    this.id_u_scrore = id_score['userId'];
    this.id_r = this.route.snapshot.params['id'];
    this.getRoom();
    this.setBanker();
    this.service.getUsersRoomList(this.id_r).subscribe(data => {
      this.r_s_1 = data;
    this.r_s_1.forEach(Element => {
      console.log(Element);
      if(Element.status==1) {
        this.allReady=true;
        for (let i = 0; i <= this.user.length; i++) {
          this.ready[i] = true;
        }
      }else {
        this.allReady = false;
        for (let i = 0; i <= this.user.length; i++) {
          this.ready[i] = false;
        }
      }
    });
    });
  }

  getRoom() {
    this.service.getroom(this.id_r).subscribe(data => {
      this.room = data;
      console.log(data);
    });
  }

  setBanker() {
    this.service.userRoomList(this.id_r).subscribe(data => {
      console.log(data);
      this.r_s = data;
    });
  }


  startQuiz() {

    if (this.room.level == 'N5' && this.room.time == '5') {
      this.router.navigate(['/question/N55TT/challenge/1/', this.room.room_id, this.id_u_scrore]);
    }
    if (this.room.level == 'N5' && this.room.time == '10') {
      this.router.navigate(['/question/N510TT/challenge/2/', this.room.room_id, this.id_u_scrore]);
    }
    if (this.room.level == 'N5' && this.room.time == '15') {
      this.router.navigate(['/question/N515TT/challenge/3/', this.room.room_id, this.id_u_scrore]);
    }
    if (this.room.level == 'N4' && this.room.time == '5') {
      this.router.navigate(['/question/N45TT/challenge/4/', this.room.room_id, this.id_u_scrore]);
    }
  }

  settrue(index: number) {
    this.ready[index] = true;
    this.r_s_1.forEach(Element => {
      if ((Element.user_id == this.id_u_scrore)&&Element.banker!=1) {
        this.room_user.status = 1;
        this.room_user.banker = Element.banker;
        this.room_user.score = Element.score;
        this.challengeServiceService.upDateUser(Element.id, this.room_user).subscribe(data => {
        }, error => console.log(error));
      }
    console.log(Element.status);
    })
  }
  setfalse(index) {
    this.ready[index] = false;
    this.allReady = false;
    this.r_s_1.forEach(Element => {
      if (Element.user_id == this.id_u_scrore&&Element.banker!=1) {
        this.room_user.banker = Element.banker;
        this.room_user.score = Element.score;
        this.room_user.status = 0;
        this.challengeServiceService.upDateUser(Element.id, this.room_user).subscribe(data => {
          console.log(data);
        }, error => console.log(error));
      }
    });
  }
}
