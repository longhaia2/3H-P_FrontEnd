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
<<<<<<< HEAD
  us : User=new User();
=======
  user: User;
  private user_name:string;

>>>>>>> b1da75e131d3dcf0c96c1e4b8876fc6dadddddfc
  constructor(private Userservice: UserServiceService, private route: ActivatedRoute,
              private  router: Router) {
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.Userservice.get(this.id).subscribe(data=>{
      this.user=data
    },error => console.log(error));
  }
}
