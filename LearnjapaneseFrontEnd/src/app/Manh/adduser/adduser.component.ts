// import { Component, OnInit } from '@angular/core';
// import {User} from "../modelm/user";
// import {UserServiceService} from "../servicem/user-service.service";
// import {ActivatedRoute, Router} from "@angular/router";
// import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// @Component({
//   selector: 'app-adduser',
//   templateUrl: './adduser.component.html',
//   styleUrls: ['./adduser.component.css'],
//   providers: [UserServiceService]
// })
// export class AdduserComponent implements OnInit {
//   us: User;
//   isSuccessful = false;
//   errorMessage = '';
//   registerForm: FormGroup;
//   constructor(private userService: UserServiceService,private formBuilder: FormBuilder,private route: ActivatedRoute,
//               private router: Router) { }ngOnInit(): void {
//     this.registerForm = this.formBuilder.group({
//       fullname: ['', Validators.required],
//       username: ['', Validators.required],
//       phone:['', Validators.required],
//       gt:['', Validators.required],
//       email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
//       password: ['', [Validators.required, Validators.minLength(6)]]
//     });
//
//     // @ts-ignore
//     this.us=new User();
//   }
//   onSubmit() {
//     this.userService.create(this.us).subscribe(data => {
//       this.us = data;
//       alert("thành công");
//       this.us = new User();
//     })
//     //   console.log(data);
//     //   this.isAddFailed = false;
//     //   this.isSuccessful = true;
//     //
//     //   // alert('Thêm thành công');
//     //   // this.router.navigate(['/admin/manage/user/add'])
//     // },
//     // err => {
//     //   // this.errorMessage = err.error.message;
//     //   // this.isAddFailed = true;
//     // // this.us=data;
//     //
//     // alert("thành công");
//     //   this.us=new User();
//     //
//     // })
//
//   }
//
// }
//
//
//


import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {UserServiceService} from "../servicem/user-service.service";
import {User} from "../modelm/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserServiceService, ToastrService]
})
export class AdduserComponent implements OnInit {
  Users: User[];
  us: User;
  logName: string

  isSuccessful = false;
  errorMessage = '';
  registerForm = new FormGroup(
    {
      fullname: new  FormControl('',Validators.required),
      username: new  FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gt: new FormControl('', Validators.required),
      email: new  FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new  FormControl('', [Validators.required, Validators.minLength(6)])
    }
  )

  get fullname(){return this.registerForm.get('fullname') }
  get username(){return this.registerForm.get('username') }
  get phone(){return this.registerForm.get('phone') }
  get gt(){return this.registerForm.get('gt') }
  get email(){return this.registerForm.get('email') }
  get password(){return this.registerForm.get('password') }
  constructor(private userService: UserServiceService,private formBuilder: FormBuilder,private route: ActivatedRoute,
              private router: Router, private toastrService:ToastrService) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.reloadData();
    // @ts-ignore
    this.us=new User();
  }
  reloadData() {
    this.userService.findAll().subscribe(data => {
      this.Users = data;
    });
  }
  onSubmit() {
    this.userService.create(this.us).subscribe(data => {
      this.us = data;
      this.toastrService.success('Thêm người dùng Thành Công','Thêm người dùng');
      this.us = new User();
    })
    console.log(this.registerForm.value);
    this.registerForm.reset();


  }

}



