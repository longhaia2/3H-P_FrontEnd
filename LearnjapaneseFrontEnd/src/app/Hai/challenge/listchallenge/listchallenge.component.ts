import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {RoomChallenge} from '../model/RoomChallenge';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-listchallenge',
  templateUrl: './listchallenge.component.html',
  styleUrls: ['./listchallenge.component.css'],
  providers: [ServiceService]
})
export class ListchallengeComponent implements OnInit {

  challenge: RoomChallenge[];
  constructor(private roomsv: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.list();
  }
  list(){
    this.roomsv.findAll().subscribe(data =>{
      this.challenge = data;
    });
  }

}
