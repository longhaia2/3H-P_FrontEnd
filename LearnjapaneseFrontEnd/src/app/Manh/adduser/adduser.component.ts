import { Component, OnInit } from '@angular/core';
import {User} from "../modelm/user";
import {UserServiceService} from "../servicem/user-service.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserServiceService]
})
export class AdduserComponent implements OnInit {
  us: User;
  constructor(private userService: UserServiceService,private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    // @ts-ignore
    this.us=new User();
  }
  add(){
    this.userService.create(this.us).subscribe(data=>{
      this.us=data;
      alert("thành công");
    })
    // @ts-ignore
    this.us=new User();
  }
}
