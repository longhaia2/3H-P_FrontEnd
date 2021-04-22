import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../../service.service';
import {RoomChallenge} from '../model/RoomChallenge';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomUsers} from '../model/RoomUsers';

@Component({
  selector: 'app-listchallenge',
  templateUrl: './listchallenge.component.html',
  styleUrls: ['./listchallenge.component.css'],
  providers: [ServiceService]
})
export class ListchallengeComponent implements OnInit {

  cl: RoomChallenge;
  rom: RoomUsers;
  public logName: string;
  id: number;
  challenge: RoomChallenge[];

  constructor(private roomsv: ServiceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.roomsv.findAll().subscribe(data => {
      this.challenge = data;
      console.log(data);
    });
  }


  add() {
    this.cl = new RoomChallenge();
    this.rom = new RoomUsers();
    let user_id = JSON.parse(sessionStorage.getItem('auth-user'));
    this.rom.user_id = user_id['userId'];
    this.rom.room_id = this.cl.room_id;

    this.roomsv.addroom(this.rom).subscribe(data=>{
      console.log(data);
      this.rom=data;
      this.router.navigate(['challenge/wait', this.id]);
    })
  }
}
