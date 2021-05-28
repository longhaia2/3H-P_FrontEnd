import { Component, OnInit } from '@angular/core';
import {Question} from "../../../../Hien/model/question";
import {ExamserviceService} from "../../serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionServiceService} from "../../../../Hien/servicesh/question-service.service";
import {DialogServiceService} from "../../../../Thuan/service/dialog-service.service";
import {MatDialog} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {DialogComponent} from "../../../../Thuan/dialog/dialog.component";

@Component({
  selector: 'app-list-question-by-exam',
  templateUrl: './list-question-by-exam.component.html',
  styleUrls: ['./list-question-by-exam.component.css'],
  providers:[ExamserviceService,QuestionServiceService,ToastrService]
})
export class ListQuestionByExamComponent implements OnInit {
p:number=1;
  hocphan;
  trinhdo;
  searchText;
  id:number;
  logName: string;
  question: Question[];
  constructor(private examService:ExamserviceService,private questionService: QuestionServiceService, private route: ActivatedRoute, private router: Router,
              private dialogService: DialogServiceService,
              private dialog: MatDialog, private tsv: ToastrService) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id=this.route.snapshot.params['id'];
    this.examService.getQSByExam(this.id).subscribe(data=>{
      this.question=data;
      console.log(data);
    },error => console.log(error));
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
            this.reloadData();
          });
        this.tsv.success('Xóa thành công', 'Xóa câu hỏi');
      }
    });
  }

  // tslint:disable-next-line:typedef
  private reloadData() {
    this.examService.getQSByExam(this.id).subscribe(data=>{
      this.question=data;
      console.log(data);
    },error => console.log(error));
  }
addQS(id){
    this.router.navigate(['admin/exam/detail/',id])

}
}
