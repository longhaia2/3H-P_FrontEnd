import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {RoomChallenge} from '../model/RoomChallenge';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomUsers} from '../model/RoomUsers';
import {Title} from "@angular/platform-browser";
import {User} from "../../../Manh/modelm/user";

@Component({
  selector: 'app-listchallenge',
  templateUrl: './listchallenge.component.html',
  styleUrls: ['./listchallenge.component.css'],
  providers: [ServiceService]
})
export class ListchallengeComponent implements OnInit {

  cout: number;
  cl: RoomChallenge;
  room_user: RoomUsers;
  user: User;
  room_id :any;
  public logName: string;
  p : number = 1;
  id: number;
  challenge: RoomChallenge[];
  check: boolean;

  constructor(private roomsv: ServiceService, private route: ActivatedRoute, private router: Router, private title: Title) {
      this.title.setTitle("Thử Thách");
  }

  ngOnInit(): void {
    this.cl = new RoomChallenge();
    this.room_user = new RoomUsers();
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.room_user.user_id = user_id['userId'];
    this.room_user.room_id = this.cl.room_id;
    this.list();
  }


  list() {
    this.roomsv.findAll().subscribe(data => {
      this.challenge = data;
      console.log(data);
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
      this.room_user.room_id = idRoom;
      this.roomsv.addroom(this.room_user).subscribe(data => {
        console.log(data);
        this.router.navigate(['challenge/wait/',this.room_user.room_id]);
      })
  }
}
