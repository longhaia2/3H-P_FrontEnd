import {Component, Input, OnInit} from '@angular/core';
import {UserServiceService} from "../servicem/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../modelm/user";
@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css'],
  providers: [UserServiceService]
})
export class DetailuserComponent implements OnInit {
  id: number;
  logName: string;
  us : User=new User();
  constructor(private Userservice: UserServiceService, private route: ActivatedRoute,
              private  router: Router) {
  }
  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    this.Userservice.get(this.id).subscribe(data=>{
      this.us=data
    },error => console.log(error));
  }
}
