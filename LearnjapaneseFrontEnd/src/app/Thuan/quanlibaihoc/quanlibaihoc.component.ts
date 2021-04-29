import { Component, OnInit } from '@angular/core';
import {Lesson} from "../model/lesson";
import {LessonServiceService} from "../service/lesson-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogServiceService} from "../service/dialog-service.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-quanlibaihoc',
  templateUrl: './quanlibaihoc.component.html',
  styleUrls: ['./quanlibaihoc.component.css'],
  providers: [LessonServiceService]
})
export class QuanlibaihocComponent implements OnInit {
  ls: Lesson[];
  description: any;
  p : number = 1;
  constructor(private lessonService: LessonServiceService, private dialogService: DialogServiceService,
              private dialog: MatDialog ,private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {
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
        message: 'BẠN CÓ MUỐN XÓA HAY KHÔNG: '
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.ls = this.ls.filter(item => item.id !== id);
      }
      ;
    });
  }

  // delete(id: number) {
  //   alert("bạn có muốn xóa hay không ");
  //   this.lessonService.delete(id).subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //
  //       },
  //
  //       error => console.log(error));
  //   alert("xóa thành công");
  // }
   updatelesson(id: number){
    this.router.navigate(['/edit',id])
  }

  Search() {
    if (this.description == "") {
      this.ngOnInit();
    } else {
      this.ls = this.ls.filter( rs=>{
        return rs.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }
  }
}

