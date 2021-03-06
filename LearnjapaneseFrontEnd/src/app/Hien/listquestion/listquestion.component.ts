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
import {ExamService} from "../servicesh/exam.service";
import {FormGroup} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css'],
  providers: [QuestionServiceService, ToastrService]
})
export class ListquestionComponent implements OnInit {
  p: number = 1;
  hocphan;
  trinhdo;
  logName: String;
  id: number;
  question: Question[];
  EX_QS: ExamService[];
  selectedFile:any=null;

  constructor(private questionService: QuestionServiceService, private route: ActivatedRoute, private router: Router,
              private dialogService: DialogServiceService,
              private dialog: MatDialog, private tsv: ToastrService) {
  }

  ngOnInit(): void {
    this.reloadData();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    // this.Refresh()

  }

  // tslint:disable-next-line:typedef
  list() {
    this.questionService.findAll().subscribe(data => {
      this.question = data;
      console.log(data);
    });
  }

  delete(id: number) {
    console.log(id);
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
        this.tsv.success('Xóa thành công', 'Xóa câu hỏi');
      }
    });
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.questionService.findAll().subscribe(data => {
      this.question = data;
    });
  }

  save(event:any) {
    this.selectedFile = event.target.files[0];
  }
  import() {
    console.log(this.selectedFile.name);
    this.reloadData();
    this.Refresh();
    this.questionService.upload(this.selectedFile).subscribe();
    
    this.tsv.success('Thêm thành công', 'Thêm câu hỏi');
    this.Refresh();
  }
  Refresh(){
    if (localStorage.getItem('refreshed') === null) {
      localStorage['refreshed'] = true;
      window.location.reload(true);
    } else {
      localStorage.removeItem('refreshed');
    }
  }

}

