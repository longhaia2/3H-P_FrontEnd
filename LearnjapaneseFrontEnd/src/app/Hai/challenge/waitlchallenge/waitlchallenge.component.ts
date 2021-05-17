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
import {GetUserByRoomAsc} from "../model/GetUserByRoomAsc";
import {DialogServiceService} from "../../../Thuan/service/dialog-service.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogExitRoomComponent} from "../dialog-exit-room/dialog-exit-room.component";

@Component({
  selector: 'app-waitlchallenge',
  templateUrl: './waitlchallenge.component.html',
  styleUrls: ['./waitlchallenge.component.css'],
  providers : [ServiceService, ChallengeServiceService, ChatService]
})
export class WaitlchallengeComponent implements OnInit {
  private updateSubscription: Subscription;
  public logName: string=null;
  role: string=null;
  room_user: RoomUsers = new RoomUsers();
  room: RoomChallenge = new RoomChallenge();
  r_s: RoomUsers[];
  r_s_1: RoomUsers[];
  r_s_2: RoomUsers[];
  id_u_scrore: number;
  selectedAS: string[];
  user: User[];
  GetUserByRoomAsc:GetUserByRoomAsc[];
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

  constructor(private dialog: MatDialog,private dialogService: DialogServiceService,private chat: ChatService
    , private  lessonServiceService: ServicebtService, private service: ServiceService
    , private  route: ActivatedRoute, private challengeServiceService: ChallengeServiceService,
              private  router: Router, private title: Title, @Inject(DOCUMENT) private _document: Document) {
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    if(userName!=null){
      this.logName = userName['username'];
      this.role=userName['role'];
    }
    this.id = this.route.snapshot.params['id'];
    this.service.GetUserByRoomAsc(this.id).subscribe(data => {
      this.GetUserByRoomAsc = data;
      this.selectedAS = new Array(this.GetUserByRoomAsc.length);
      this.ready = new Array(this.GetUserByRoomAsc.length);
      for (let i = 0; i <= this.GetUserByRoomAsc.length; i++) {
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
      this.chat.id_out.subscribe(data => {
        if(msg==this.id_r&&data==this.id_u_scrore){
          this.router.navigate(['listchalenge']);
        }
        if(msg==this.id_r&&data!=this.id_u_scrore){
          this._document.defaultView.location.reload();
        }
      });
    });
    // this.chat.room_id.subscribe(msg => {
    //   if(msg==this.id_r){
    //     this._document.defaultView.location.reload();
    //   }
    // });
    this.startQuiz();
    this.load();
    this.getUserList();
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
  start() {
    this.room.status = 0;
    this.challengeServiceService.updateRoom(this.room.room_id, this.room).subscribe(data => {
    }, error => console.log(error));
    this.chat.send_id_r_out(this.room.room_id);
  }

  startQuiz() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.chat.id_r_out.subscribe(msg => {
      this.check = msg;
      let number = getRandomInt(68,70);
      this.service.getUsersRoomList(this.id_r).subscribe(data => {
        this.r_s_1 = data;
        this.r_s_1.forEach(Element => {
          if (Element.room_id == this.room.room_id) {
            if (this.check == this.room.room_id) {
              if (this.room.level == 'N5' && this.room.time == 5) {
                this.router.navigate(['/question/N55TT/challenge/',68, this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=68;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N5' && this.room.time == 10) {
                let number = getRandomInt(4, 6);
                this.router.navigate(['/question/N510TT/challenge/55/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=55;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N5' && this.room.time == 15) {
                let number = getRandomInt(7, 9);
                this.router.navigate(['/question/N515TT/challenge/56/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=56;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N4' && this.room.time == 5) {
                this.router.navigate(['/question/N45TT/challenge/57/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=57;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N4' && this.room.time == 10) {
                let number = getRandomInt(4, 6);
                this.router.navigate(['/question/N410TT/challenge/60/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=60;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N4' && this.room.time == 15) {
                let number = getRandomInt(7, 9);
                this.router.navigate(['/question/N415TT/challenge/61/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=68;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N3' && this.room.time == 5) {
                this.router.navigate(['/question/N35TT/challenge/54/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=54;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N3' && this.room.time == 10) {
                this.router.navigate(['/question/N310TT/challenge/59/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=59;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
              if (this.room.level == 'N3' && this.room.time == 15) {
                this.router.navigate(['/question/N315TT/challenge/58/', this.room.room_id, this.id_u_scrore]);
                this.room_user.exam_id=58;
                this.challengeServiceService.updateRoomExam(Element.id,this.room_user).subscribe();
              }
            }
          }
        });
      });
    });
  }

  RandomNum() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let number = getRandomInt(1, 50);
    console.log(number);
  }

  startTrue(index: number) {
    this.service.userRoomList(this.id_r).subscribe(data => {
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

  delete(id: number) {
    const confirmDialog = this.dialog.open(DialogExitRoomComponent, {
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.chat.send_idRoom(this.id);
        this.chat.send_id_out(this.id_u_scrore);
        this.service.getUsersRoomList(this.id_r).subscribe(data => {
          this.r_s_1 = data;
          this.r_s_1.forEach(Element=>{
              if(Element.user_id==id&&Element.banker==1){
                this.r_s_1[1].banker=1;
                this.room_user.banker=this.r_s_1[1].banker;
                this.r_s_1[1].status=1;
                this.room_user.status=this.r_s_1[1].status;
                this.challengeServiceService.updateMember(this.r_s_1[1].id,this.room_user).subscribe(data=>{
                  this.service.delete(Element.id).subscribe(
                    data => {
                      this.router.navigate(['listchalenge']);

                    });
                })
              }
              else if(Element.user_id==id){
                this.service.delete(Element.id).subscribe(
                  data => {
                    this.router.navigate(['listchalenge']);
                  });
              }
            }
          )


        })
      }
    });
  }

}
