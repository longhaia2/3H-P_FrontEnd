import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../listchallenge/listchallenge.component';
import {RoomChallenge} from '../model/RoomChallenge';
import {RoomUsers} from '../model/RoomUsers';
import {ServiceService} from '../../service.service';
import {ChallengeServiceService} from '../../Service/challenge-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogJoinRoomComponent} from '../dialog-join-room/dialog-join-room.component';
import {ToastrService} from 'ngx-toastr';
import {ChatService} from "../../Service/chat.service";

@Component({
  selector: 'app-dialog-input-pass',
  templateUrl: './dialog-input-pass.component.html',
  styleUrls: ['./dialog-input-pass.component.css'],
  providers: [ServiceService,ChallengeServiceService, ToastrService,ChatService]
})
export class DialogInputPassComponent implements OnInit {

  cl: RoomChallenge;
  room_user: RoomUsers;
  PassRoom: string;
  checkpass: boolean = true;
  user_id:number;

  constructor(private chat: ChatService,private roomsv: ServiceService, private route: ActivatedRoute, private router: Router,public dialog:MatDialog,private toastrService: ToastrService,
    public dialogRef: MatDialogRef<DialogInputPassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.cl = new RoomChallenge();
    this.room_user = new RoomUsers();
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.user_id = user_id['userId'];
    this.room_user.user_id = user_id['userId'];
    this.room_user.room_id = this.cl.room_id;
  }
  joinRoom(){
    this.roomsv.getroom(this.data.id_room).subscribe(data=>{
      this.cl=data;
      if(this.cl.pass==this.PassRoom){
        this.chat.send_idRoom(this.data.id_room);
        this.chat.send_id_out (this.user_id);
        this.room_user.room_id = this.data.id_room;
        this.room_user.score = 0;
        this.room_user.banker=0;
        this.room_user.status=0;
        this.roomsv.addroom(this.room_user).subscribe(data => {
      return  this.router.navigate(['challenge/wait/', this.room_user.room_id]);
        });
      }else  {
        this.toastrService.error('Sai m???t kh???u, vui l??ng th??? l???i nh??!!');
        const dialogRef = this.dialog.open(DialogInputPassComponent, {
        });
        dialogRef.afterClosed().subscribe(result => {
        });
      }
    });
  }
  selectAt(value) {
    this.PassRoom = value;
  }
}
