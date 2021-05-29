import {Inject, Injectable} from '@angular/core';
// import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {Data} from "../modelm/Data";

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {
  imageDetailList: AngularFireList<any>;
  fileList: any[];
  dataSet: Data = {
    idd: '',
    url: ''

  };
  msg = 'error';


  constructor(@Inject(AngularFireDatabase) private firebase: AngularFireDatabase) {
  }

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
  }
  insertImageDetails(idd, url) {
    this.dataSet = {
      idd,
      url
    };
    this.imageDetailList.push(this.dataSet);
  }


  getImage(value) {
    this.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => {
          return item.payload.val();
        });
        this.fileList.forEach(element => {
          if (element.idd === value) {
            this.msg = element.url;
          }
        });
        if (this.msg === 'error') {
          alert('No record found');
        } else {
          window.open(this.msg);
          this.msg = 'error';
        }
      }
    );
  }
}

