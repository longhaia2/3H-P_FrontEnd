import { Component, OnInit } from '@angular/core';
import {RoomChallenge} from '../model/RoomChallenge';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../Manh/modelm/user';

@Component({
  selector: 'app-waitlchallenge',
  templateUrl: './waitlchallenge.component.html',
  styleUrls: ['./waitlchallenge.component.css'],
  providers :[ServiceService]
})
export class WaitlchallengeComponent implements OnInit {
  public logName:string;
  cl:RoomChallenge;
  user: User[];
  id: number;
  constructor(private service: ServiceService, private  route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit(): void {
    this.cl= new RoomChallenge();
    // let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    //     // this.cl.userCreate = userName['username'];
    //     // this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    this.service.get(this.id).subscribe(data=>{this.user=data},error => console.log(error));
  }


}
