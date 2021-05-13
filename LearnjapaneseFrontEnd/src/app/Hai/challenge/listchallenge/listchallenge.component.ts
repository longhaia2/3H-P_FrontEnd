import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {RoomChallenge} from '../model/RoomChallenge';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomUsers} from '../model/RoomUsers';
import {Title} from "@angular/platform-browser";
import {User} from "../../../Manh/modelm/user";
import {ChallengeServiceService} from '../../Service/challenge-service.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogInputPassComponent} from '../dialog-input-pass/dialog-input-pass.component';
import {ChatService} from "../../Service/chat.service";


export interface DialogData {
  id_room: number;
}
@Component({
  selector: 'app-listchallenge',
  templateUrl: './listchallenge.component.html',
  styleUrls: ['./listchallenge.component.css'],
  providers: [ServiceService,ChallengeServiceService,ChatService]
})
export class ListchallengeComponent implements OnInit {
  id_room: number;
  form: any = {};
  cl: RoomChallenge;
  room_user: RoomUsers ;
  room_user_list: RoomUsers[];
  user: User;
  user_test: number;
  resultAS:  string[];
  room_id :any;
  public logName: string;
  p : number = 1;
  id: number;
  challenge: RoomChallenge[];
  sum :number =0;
  isDisabled= true;

  constructor(private chat: ChatService,private roomsv: ServiceService, private route: ActivatedRoute, private router: Router, private title: Title,private challengeSV:ChallengeServiceService, public dialog:MatDialog) {
      this.title.setTitle("Thử Thách");

  }

  ngOnInit(): void {
    this.cl = new RoomChallenge();
    this.room_user = new RoomUsers();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.user_test =user_id['userId'];
    this.room_user.user_id = user_id['userId'];
    this.room_user.room_id = this.cl.room_id;
    this.list();
  }

    list() {
      this.roomsv.findAll().subscribe(data => {
        this.challenge = data;
        this.resultAS = new Array(this.challenge.length);
        for (let i =0; i< this.challenge.length; i++){
          this.resultAS[i] = "";
        }
        this.challenge.forEach(element => {
            this.challengeSV.Dem(element.room_id).subscribe(data=>{
              this.sum=data;
              element.count = data;
              if(element.count===4){
                element.check=true;
              }
              else {
                element.check=false;
              }
            });
          }
        );
      });
    }

  Search() {
    if (this.room_id == "") {
      this.ngOnInit();
    } else {
      this.challenge = this.challenge.filter(rs => {
        return rs.room_id.toLocaleString().match(this.room_id.toLocaleLowerCase());
      });
    }
  }
  add(idRoom) {
      this.chat.send_idRoom(idRoom);
      this.room_user.room_id = idRoom;
      this.room_user.score = 0;
      this.room_user.banker=0;
      this.room_user.status=0;
      this.roomsv.addroom(this.room_user).subscribe(data => {
        this.router.navigate(['challenge/wait/',this.room_user.room_id]);
      })
  }
  openDialog(idRoom){
    this.id_room=idRoom;
    const dialogRef = this.dialog.open(DialogInputPassComponent, {
      data: {id_room:this.id_room}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.id_room = result;
    });
  }

}
