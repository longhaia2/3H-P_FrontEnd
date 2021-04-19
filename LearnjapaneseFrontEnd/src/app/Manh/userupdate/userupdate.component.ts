import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceService} from "../servicem/user-service.service";
import { User } from '../modelm/user';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css'],
  // providers:[UserServiceService]
})
export class UserupdateComponent implements OnInit {

//   id:number;
//   us: User=new User();
//
//   constructor(private userSV: UserServiceService,private route: ActivatedRoute,
//               private router: Router) { }
  constructor() {
  }
  ngOnInit(): void {
  }
}

//
//   ngOnInit(): void {
//     this.id=this.route.snapshot.params['id'];
//     console.log('====================');
//     console.log(this.id);
//     this.userSV.get(this.id).subscribe(data=>{
//       this.us = data
//     },error => console.log(error));
//   }
//   updateUser(){
//     this.userSV.update(this.id,this.us).subscribe(data=>{
//       console.log(data);
//       this.router.navigate(['list']);
//       alert("thành công");
//     },error => console.log(error));
//   }
