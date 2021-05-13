import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../Manh/modelm/user';
import {Title} from "@angular/platform-browser";
import {RoomUsers} from "../model/RoomUsers";
import {ChallengeServiceService} from '../../Service/challenge-service.service';
import {ServicebtService} from '../../../Service/servicebt.service';
import {interval, Subscription} from "rxjs";
import {ChatService} from "../../Service/chat.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-waitlchallenge',
  templateUrl: './waitlchallenge.component.html',
  styleUrls: ['./waitlchallenge.component.css'],
  providers : [ServiceService, ChallengeServiceService, ChatService]
})
export class WaitlchallengeComponent implements OnInit {
  private updateSubscription: Subscription;
  public logName: string;
  room_user: RoomUsers = new RoomUsers();
  room: RoomChallenge = new RoomChallenge();
  r_s: RoomUsers[];
  r_s_1: RoomUsers[];
  r_s_2: RoomUsers[];
  id_u_scrore: number;
  selectedAS: string[];
  user: User[];
  users: User = new User();
  id: number;
  id_r: number;
  ready: boolean[];
  allReady: boolean;
  level: string;
  time: string;
  check: number;
  index:number=0;
  check1: number=0;
  index1:number=1;
  check2: number=0;
  index2:number=2;
  check3: number=0;
  index3:number=3;
  Test:number=0;

  constructor(private chat: ChatService, private  lessonServiceService: ServicebtService, private service: ServiceService, private  route: ActivatedRoute, private challengeServiceService: ChallengeServiceService,
              private  router: Router) {
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
          for (let i = 0; i <= this.r_s_1.length; i++) {
            if (Element.status == 0) {
              this.Test++;
            }
          }
        });
        if(this.Test==0){
          this.allReady = true;
        }
      if(this.r_s_1[0].status==1){
        this.index=0;
        this.check=1;
        this.ready[0] = true;
      }else {
        this.ready[0] = false;
        this.index=0;
        this.check=0;
      }
      if(this.r_s_1[1].status==1){
        this.index1=1;
        this.check1=1;
        this.ready[1] = true;
      }else {
        this.ready[2] = false;
        this.index1=1;
        this.check1=0;
      }
      if(this.r_s_1[2].status==1){
        this.ready[2] = true;
        this.index2=2;
        this.check2=1;
      }else {
        this.ready[2] = false;
        this.index2=2;
        this.check2=0;
      }
      if(this.r_s_1[3].status==1){
        this.ready[3] = true;
        this.index3=3;
        this.check3=1;
      }else {
        this.ready[3] = false;
        this.index3=3;
        this.check3=0;
      }
    });
    this.challengeServiceService.getOneUserByRoom(this.id_r,this.id_u_scrore).subscribe(data=>{
      this.r_s_2=data;
    });
    this.chat.room_id.subscribe(msg => {
      if(msg==this.id_r){
        this._document.defaultView.location.reload();
      }
    });
    this.startQuiz();
    this.load();
    this.getUserList();
  }
    loadbankker(){
      this.service.get(this.id).subscribe(data => {
        this.user = data;
        console.log(this.user.length);

      }, error => console.log(error));
    }
  load(){
    this.chat.id.subscribe(msg => {
      if(msg==this.id_u_scrore){
        this._document.defaultView.location.reload();
      }
    });
    this.chat.messages.subscribe(msg => {
      this.check = msg;
    });
    this.chat.messages1.subscribe(msg => {
      this.check1 = msg;
    });
    this.chat.messages2.subscribe(msg => {
      this.check2 = msg;
    });
    this.chat.messages3.subscribe(msg => {
      this.check3 = msg;
    });
    this.chat.mess_id.subscribe(data => {
      this.index=data;
    });
    this.chat.mess_id1.subscribe(data => {
      this.index1=data;
    });
    this.chat.mess_id2.subscribe(data => {
      this.index2=data;
    });
    this.chat.mess_id3.subscribe(data => {
      this.index3=data;
    });
  }

  getUserList() {
    this.service.getUsersRoomList(this.id_r).subscribe(data => {
      this.r_s_1 = data;
      this.r_s_1.forEach(Element => {
          for (let i = 0; i <= this.r_s_1.length; i++) {
            if (Element.status == 0) {
              this.Test++;
            }
          }
    });
      if(this.Test==0){
        this.allReady = true;
      }
  })
  }

  getRoom() {
    this.service.getroom(this.id_r).subscribe(data => {
      this.room = data;
    });
  }

  setBanker() {
    this.service.userRoomList(this.id_r).subscribe(data => {
      console.log(data);
      this.r_s = data;
    });
  }
     test(){
      window.location.reload();
     }
  start() {
    this.room.status = 0;
    this.challengeServiceService.updateRoom(this.room.room_id, this.room).subscribe(data => {
    }, error => console.log(error));
    this.chat.sendMsg(this.room.room_id);
  }

  startQuiz() {

    this.chat.messages.subscribe(msg => {
      this.check = msg;
      if (this.check == this.room.room_id) {

        this.router.navigate(['/question/N55TT/challenge/1/', this.room.room_id, this.id_u_scrore]);
        if (this.room.level == 'N5' && this.room.time == 5) {
          this.router.navigate(['/question/N55TT/challenge/1/', this.room.room_id, this.id_u_scrore]);
        }
        if (this.room.level == 'N5' && this.room.time == 10) {
          this.router.navigate(['/question/N510TT/challenge/2/', this.room.room_id, this.id_u_scrore]);
        }
        if (this.room.level == 'N5' && this.room.time == 15) {
          this.router.navigate(['/question/N515TT/challenge/3/', this.room.room_id, this.id_u_scrore]);
        }
        if (this.room.level == 'N4' && this.room.time == 5) {
          this.router.navigate(['/question/N45TT/challenge/4/', this.room.room_id, this.id_u_scrore]);
        }
      }
    });
  }

  startTrue(index: number) {
    this.service.userRoomList(this.id_r).subscribe(data => {
      console.log(data);
      this.r_s = data;
      this.chat.id_sent(this.r_s[0].user_id);
    });
    this.ready[index] = true;
    if(index==0){
      this.chat.sendMsg(1);
      this.chat.senID(0);
    }
    else if(index==1){
      this.chat.sendMsg1(1);
      this.chat.senID1(1)
    }
    else if(index==2){
      this.chat.sendMsg2(1);
      this.chat.senID2(2)
    }
    else
    {
      this.chat.sendMsg3(1);
      this.chat.senID3(3)
    }
  }
  startFalse(index: number) {
    this.service.userRoomList(this.id_r).subscribe(data => {
      this.r_s = data;
      this.chat.id_sent(this.r_s[0].user_id);
    });
    this.ready[index] = false;
    if(index==0){
      this.chat.sendMsg(0);
      this.chat.senID(0);
    }
    else if(index==1){
      this.chat.sendMsg1(0);
      this.chat.senID1(1)
    }
    else if(index==2){
      this.chat.sendMsg2(0);
      this.chat.senID2(2)
    }
    else
    {
      this.chat.sendMsg3(0);
      this.chat.senID3(3)
    }

  }
  //

  settrue() {
        this.r_s_2.forEach(Element => {
            this.room_user.status = 1;
            this.challengeServiceService.updateStatus(Element.id, this.room_user).subscribe(data => {
            }, error => console.log(error));
    });

  }

      setfalse()
      {
        this.r_s_2.forEach(Element => {
            this.room_user.status = 0;
            this.challengeServiceService.updateStatus(Element.id, this.room_user).subscribe(data => {
            }, error => console.log(error));
      });

     }
}
