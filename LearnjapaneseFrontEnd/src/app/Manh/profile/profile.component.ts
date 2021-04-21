import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../servicem/user-service.service";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFireDatabase} from "@angular/fire/database";
import firebase from "firebase";
import {User} from "../modelm/user";
import {ActivatedRoute, Router} from "@angular/router";
interface FeaturedPhotoUrls {
  url1?: string;
  url2?: string;

}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserServiceService]

})
export class ProfileComponent implements OnInit {
  selectedImage: any=null;
  id:number;
  us: User=new User();
  // @ts-ignore
  public featuredPhotoStream: FirebaseObjectObservable<FeaturedPhotoUrls>;



  constructor(private db: AngularFireDatabase ,private userSV: UserServiceService,private route: ActivatedRoute,
              private router: Router ) {
    this.featuredPhotoStream=this.db.object('/photos/featured');
  }

  ngOnInit(): void {
        // throw new Error('Method not implemented.');
          this.id=this.route.snapshot.params['id'];
    console.log('====================');
    console.log(this.id);
    this.userSV.get(this.id).subscribe(data=>{
      this.us = data
    },error => console.log(error));
    }

  featuredPhotoSelected(event: any){
    const file: File = event.target.file[0];
    console.log("Selected filename:",file.name);
  const metaData = {'contentType':file.type};
  const storageRef : firebase.storage.Reference=firebase.storage().ref('photos/featured/urli')
  storageRef.put(file,metaData);
  console.log("Uploading:",file.name);
  }
  updateUser(){
    this.userSV.update(this.id,this.us).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
      alert("thành công");
    },error => console.log(error));
  }
}











