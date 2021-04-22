import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../servicem/user-service.service";
import {User} from "../modelm/user";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-manageruser',
  templateUrl: './manageruser.component.html',
  styleUrls: ['./manageruser.component.css'],
  providers: [UserServiceService]
})
export class ManageruserComponent implements OnInit {
  Users: User[];
  username: any;
  elseBlock: any;
  constructor(private Userservice: UserServiceService,private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit(): void {
    this.reloadData();
  }
  // get username(): string{
  //   return this.username;
  // }
  search(){
    if(this.username == ""){
      this.ngOnInit();
    }else {
      this.Users=this.Users.filter(res=>{
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase())
      })
    }
  }
  reloadData() {
    this.Userservice.findAll().subscribe(data => {
      this.Users = data;
    });
  }
  //hàm delete dùng cho html của list
  delete(id: number) {
    alert("bạn có muốn xóa hay không ");
    this.Userservice.delete(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },

      error => console.log(error));
    alert("xóa thành công");
  }
  updateUser(id: number){
    this.router.navigate(['/edit',id])
  }
}
