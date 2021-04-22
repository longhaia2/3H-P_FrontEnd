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
  room: RoomChallenge = new RoomChallenge();
  roomlist: RoomChallenge[];
  r_s: RoomUsers[];
  id_u_scrore: number;
  selectedAS: string[];
  user: User[];
  set: boolean;
  id: number;
  id_r:number;
  ready: boolean[];
  allReady: boolean;
  level: string;
  time: string;
  constructor(private service: ServiceService, private  route: ActivatedRoute,
              private  router: Router, private title: Title) {
    this.title.setTitle("Đợi Đối Thử");
  }

  ngOnInit(): void {
    this.room_user= new RoomUsers();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
        this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    this.service.get(this.id).subscribe(data=>{
      this.user=data;
      this.selectedAS = new Array(this.user.length);

      this.ready = new Array(this.user.length);
      for (let i =0; i< this.user.length; i++) {
        this.ready[i] = false;
      }
      this.allReady = false;
    },error => console.log(error));
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    this.id_u_scrore = id_score['userId'];
    this.id_r=this.route.snapshot.params['id'];
    this.service.getroom(this.id_r).subscribe(data => {
      this.room = data;
      console.log(data);
    });
  }
  startQuiz() {

    // console.log(this.room.time+' iddd')
    // console.log(this.room.level+' level')
    if(this.room.level=='N5'&& this.room.time=='5') {
      this.router.navigate(['/question/N55TT/challenge/1/',this.room.room_id,this.id_u_scrore]);
    }
    if(this.room.level=='N5'&& this.room.time=='10') {
      this.router.navigate(['/question/N510TT/challenge/2/',this.room.room_id,this.id_u_scrore]);
      // @ts-ignore
    }
    if(this.room.level=='N5'&& this.room.time=='15') {
      this.router.navigate(['/question/N515TT/challenge/3/',this.room.room_id,this.id_u_scrore]);
    }
    if(this.room.level=='N4'&& this.room.time=='5') {
      this.router.navigate(['/question/N45TT/challenge/4/',this.room.room_id, this.id_u_scrore]);
    }
  }
     setroom(idSet) {
         if (idSet == 0) {
           this.set = true;
         } else {
           this.set = false;
         }
       }
    settrue(index) {
        this.ready[index] = true;
        this.allReady = true;
        for(let element of this.ready){
          console.log("e:"+element);
          if(!element){
            this.allReady = false;
            break;
          }
        }
        console.log(this.allReady);
    }

    setfalse(index) {
      this.ready[index] = false;
      this.allReady = false;
    }


}
