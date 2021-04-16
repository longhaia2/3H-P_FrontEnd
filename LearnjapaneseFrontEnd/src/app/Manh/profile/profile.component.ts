import { Component, OnInit } from '@angular/core';
import {UserServiceService} from "../servicem/user-service.service";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFireDatabase} from "@angular/fire/database";
import firebase from "firebase";
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
  // @ts-ignore
  public featuredPhotoStream: FirebaseObjectObservable<FeaturedPhotoUrls>;



  constructor(private db: AngularFireDatabase) {
    this.featuredPhotoStream=this.db.object('/photos/featured');

  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  // ngOnInit(): void {
  // }
  featuredPhotoSelected(event: any){
    const file: File = event.target.file[0];
    console.log("Selected filename:",file.name);
  const metaData = {'contentType':file.type};
  const storageRef : firebase.storage.Reference=firebase.storage().ref('photos/featured/urli')
  storageRef.put(file,metaData);
  console.log("Uploading:",file.name);
  }
}





