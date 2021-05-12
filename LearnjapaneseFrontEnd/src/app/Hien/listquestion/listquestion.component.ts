// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {QuestionServiceService} from '../servicesh/question-service.service';
// @ts-ignore
import {ActivatedRoute, Router} from '@angular/router';
import {Question} from '../model/question';
import {DialogComponent} from '../../Thuan/dialog/dialog.component';
import {DialogServiceService} from '../../Thuan/service/dialog-service.service';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

// @ts-ignore
@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css'],
  providers: [QuestionServiceService, ToastrService]
})
export class ListquestionComponent implements OnInit {

  hocphan;
  trinhdo;
  logName: String;
  id: number;
  question: Question[];
  constructor(private questionService: QuestionServiceService, private route: ActivatedRoute, private router: Router,
              private dialogService: DialogServiceService,
              private dialog: MatDialog, private tsv: ToastrService) { }

  ngOnInit(): void {
    this.list();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }
  // tslint:disable-next-line:typedef
  list(){
    this.questionService.findAll().subscribe(data => {
      this.question = data;
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
        this.questionService.delete(id).subscribe(
          data => {
            console.log(data);
            this.reloadData();
          });
        this.tsv.success('Xóa thành công', 'Xóa bài học');
      }
    });
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.questionService.findAll().subscribe(data => {
      this.question = data;
    });
  }
}

