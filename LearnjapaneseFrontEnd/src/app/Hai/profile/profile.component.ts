import {Component, Inject, OnInit} from '@angular/core';
import {UserServiceService} from "../../Manh/servicem/user-service.service";
import {ToastrService} from "ngx-toastr";
import {User} from "../../Manh/modelm/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Lesson} from "../../Thuan/model/lesson";
import {UploadFileServiceService} from "../../Manh/servicem/upload-file-service.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserServiceService, ToastrService]

})
export class ProfileComponent implements OnInit {
  selectedImage: any = null;
  url: string;
  id: string;
  file: string;
  Users: User[];
  logName: string=null;
  role:string=null;
  registerForm = new FormGroup(
    {
      fullname: new  FormControl('',Validators.required),
      username: new  FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gt: new FormControl('', Validators.required),
      email: new  FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new  FormControl('', [Validators.required, Validators.minLength(6)])
    }
  );
  get fullname(){return this.registerForm.get('fullname') }
  get username(){return this.registerForm.get('username') }
  get phone(){return this.registerForm.get('phone') }
  get gt(){return this.registerForm.get('gt') }
  get email(){return this.registerForm.get('email') }
  get password(){return this.registerForm.get('password') }

  us : User=new User();
  constructor(private userService: UserServiceService,private formBuilder: FormBuilder,private route: ActivatedRoute,
              private router: Router, private tsv:ToastrService,
              @Inject(UploadFileServiceService) private upFileService: UploadFileServiceService) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    if(userName!=null){
      this.logName = userName['username'];
      this.role=userName['role'];
    }
    this.upFileService.getImageDetailList()
    this.id=this.route.snapshot.params['id'];
    this.userService.get(this.id).subscribe(data=>{
      this.us = data;
      console.log(this.us);
    },error => console.log(error));
  }

  showPreview(event:any){
    this.selectedImage=event.target.files[0];
  }
  save(){

  }
  view(){
    this.upFileService.getImage(this.file);
  }
  updateUser(){
    this.userService.update(this.id,this.us).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
      this.tsv.success('Sửa thành công', 'Sửa thông tin thành viên');
    },error => console.log(error));
  }

}
