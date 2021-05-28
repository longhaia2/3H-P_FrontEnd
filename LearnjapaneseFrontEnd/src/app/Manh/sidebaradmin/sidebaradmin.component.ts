import {Component, Input, OnInit} from '@angular/core';
import {ServicebtService} from '../../Service/servicebt.service';
import {UserServiceService} from "../servicem/user-service.service";
import {User} from "../modelm/user";

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css'],
  providers: [ServicebtService,UserServiceService]
})
export class SidebaradminComponent implements OnInit {
   id:number;
  us : User;
  @Input('userNameDsp') userNameDsp: string;

  constructor(private  lessonServiceService: ServicebtService,private ussv:UserServiceService) {
    this.lessonServiceService.loaddCss("../../../assets/assets/css/custom.min.css");
  }

  ngOnInit(): void {
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    this.id = id_score['userId'];
    this.ussv.get(this.id).subscribe(data=>{
      this.us=data;
    },error => console.log(error));
  }

}
