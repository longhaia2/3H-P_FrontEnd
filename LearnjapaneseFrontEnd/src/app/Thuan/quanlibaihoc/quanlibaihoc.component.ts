import { Component, OnInit } from '@angular/core';
import {Lesson} from "../model/lesson";
import {LessonServiceService} from "../service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogServiceService} from "../service/dialog-service.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-quanlibaihoc',
  templateUrl: './quanlibaihoc.component.html',
  styleUrls: ['./quanlibaihoc.component.css'],
  providers: [LessonServiceService, ToastrService]
})
export class QuanlibaihocComponent implements OnInit {
  ls: Lesson[];
  logName: String;
  hocphan;
  trinhdo;
  searchText;
  description: any;
  p : number = 1;
  constructor(private lessonService: LessonServiceService,private tsv: ToastrService,private dialogService: DialogServiceService,
              private dialog: MatDialog ,private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.reloadData();
  }
  reloadData(){

    this.lessonService.findAll().subscribe(data =>{
      this.ls =data;
    });
  }
  delete(id: number) {

    const confirmDialog = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'BẠN CÓ MUỐN XÓA HAY KHÔNG ? '
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.lessonService.delete(id).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          });
        this.tsv.success('Xóa thành công', 'Xóa bài học');
      }
    });
  }


  timkiem(searchtext){
    if(searchtext==""){
      this.lessonService.findAll().subscribe(data => {
        this.ls = data;
      });
    }
    if (this.ls== null)
    {
      alert("thất bại")
    }
      else{
      this.lessonService.findByLesson(searchtext).subscribe(data => {
        this.ls = data;
      });
    }
    console.log(this.ls);
  }
}

