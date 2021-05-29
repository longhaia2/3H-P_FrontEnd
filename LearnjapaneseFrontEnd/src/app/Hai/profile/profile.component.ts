import {Component, Inject, OnInit} from '@angular/core';
import {UserServiceService} from "../../Manh/servicem/user-service.service";
import {ToastrService} from "ngx-toastr";
import {User} from "../../Manh/modelm/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadFileServiceService} from "../../Manh/servicem/upload-file-service.service";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserServiceService, ToastrService]

})
export class ProfileComponent implements OnInit {
  url: string;
  id: number;
  idd : string;
  selectedImage: any = null;
  file: string;
  logName: string;
  us : User;
  role:string=null;
  registerForm = new FormGroup(
    {
      fullname: new  FormControl('',Validators.required),
      username: new  FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gt: new FormControl('', Validators.required),
      email: new  FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    }
  )
  get fullname(){return this.registerForm.get('fullname') }
  get username(){return this.registerForm.get('username') }
  get phone(){return this.registerForm.get('phone') }
  get gt(){return this.registerForm.get('gt') }
  get email(){return this.registerForm.get('email') }
  constructor(private UserService: UserServiceService,private route: ActivatedRoute, private router: Router,
              private tsv:ToastrService,@Inject(AngularFireStorage) private storage: AngularFireStorage,@Inject(UploadFileServiceService) private uploadFileService: UploadFileServiceService) { }

  ngOnInit(): void {

    let  userName = JSON.parse(sessionStorage.getItem('auth-user'));
    if(userName != null){
      this.logName = userName['username'];
      this.role=userName['role'];
    }
    this.id=this.route.snapshot.params['id'];
    this.UserService.get(this.id).subscribe(data=>{
      this.us=data;
      console.log(this.us);
    },error => console.log(error));
    this.uploadFileService.getImageDetailList();

  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  save() {
    const name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.uploadFileService.insertImageDetails(this.id, this.url);
          this.tsv.success('Cập nhật thành công', 'Cập nhật ảnh đại diện thành công ');
          this.us.image=this.url;
          this.UserService.update(this.id,this.us).subscribe();

        });
      })
    ).subscribe();
  }
  view() {
    console.log(this.uploadFileService.getImage(this.file));
  }

  updateUser(){
    this.UserService.update(this.id,this.us).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
      this.tsv.success('Cập nhật thành công', 'Cập nhật thông tin thành công ');
    },error => console.log(error));
  }

}
