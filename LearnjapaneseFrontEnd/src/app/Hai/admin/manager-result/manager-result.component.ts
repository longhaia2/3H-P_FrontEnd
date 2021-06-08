import { Component, OnInit } from '@angular/core';
import {ScoreService} from "../../../Hien/servicesh/score.service";
import {MGresultA} from "../model/MGresultA";
import {DialogComponent} from "../../../Thuan/dialog/dialog.component";
import {ToastrService} from "ngx-toastr";
import {DialogServiceService} from "../../../Thuan/service/dialog-service.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manager-result',
  templateUrl: './manager-result.component.html',
  styleUrls: ['./manager-result.component.css'],
  providers:[ScoreService,ToastrService]
})
export class ManagerResultComponent implements OnInit {
  logName: string;
  searchText;
  result: MGresultA[];
  result2: MGresultA[];
  p:number=1;
  style:string='1';
  user_name:string;
  constructor(private scoresv: ScoreService,private tsv: ToastrService,private dialogService: DialogServiceService,
              private dialog: MatDialog ,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    let idScore = JSON.parse(sessionStorage.getItem("auth-user"));
    this.scoresv.findAll().subscribe(data => {
      this.result=data;
      console.log(data);
    });
    this.scoresv.findAllVoca().subscribe(data => {
      this.result2=data;
      console.log(data);
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
        this.scoresv.delete(id).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          });
        this.tsv.success('Xóa thành công');
      }
    });
  }
  deletevoca(id: number) {

    const confirmDialog = this.dialog.open(DialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'BẠN CÓ MUỐN XÓA HAY KHÔNG ? '
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.scoresv.deleteVoca(id).subscribe(
          data => {
            this.reloadData2();
          });
        this.tsv.success('Xóa thành công');
      }
    });
  }
  reloadData(){
    this.scoresv.findAll().subscribe(data => {
      this.result=data;
    })
  }
  reloadData2(){
    this.scoresv.findAllVoca().subscribe(data => {
      this.result2=data;
    })
  }

  Search(user_name){
    if(user_name==""){
      this.scoresv.findAll().subscribe(data => {
        this.result = data;
      });
    }
    if (this.result== null)
    {
      this.tsv.error('Không có tên người dùng như vậy.')
    }
    else{
      this.scoresv.findByUserName(user_name).subscribe(data => {
        this.result = data;
      });
    }
  }
  SearchCode(searchtext){
    if(searchtext==""){
      this.scoresv.findAll().subscribe(data => {
        this.result = data;
      });
    }
    if (this.result== null)
    {
      this.tsv.error('Không mã đề thi như vậy.')
    }
    else{
      this.scoresv.findBycodeExam(searchtext).subscribe(data => {
        this.result = data;
      });
    }
  }
  selectAt(value){
    this.style=value;
  }
}
