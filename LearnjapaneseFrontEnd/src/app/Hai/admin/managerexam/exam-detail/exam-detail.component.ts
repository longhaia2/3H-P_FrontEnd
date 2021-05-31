import { Component, OnInit } from '@angular/core';
import {Exam} from "../../model/Exam";
import {ExamserviceService} from "../../serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Question} from "../../../../Hien/model/question";
import {ExamQuestion} from "../../model/ExamQuestion";
import {ToastrService} from "ngx-toastr";
import {forEachComment} from "tslint";

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css'],
  providers:[ToastrService]
})
export class ExamDetailComponent implements OnInit {

  p:number=1;
  hocphan;
  trinhdo;
  id_qs:number;
  id:number;
  selectedAS: number[]=new Array(0);
  logName: string;
  setCB:boolean[];
  setCBCh:boolean[];
  question: Question[];
  question1: Question[];
  exam:Exam;
  ex_QsList:ExamQuestion[];
  ex_Qs:ExamQuestion= new ExamQuestion();
  coutQS:number=0;
  constructor(private examService: ExamserviceService, private route: ActivatedRoute,private  tv: ToastrService,
              private  router: Router) { }

  ngOnInit(): void {
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
    this.id = this.route.snapshot.params['id'];
    this.examService.get(this.id).subscribe(data => {
      this.exam = data;
      this.examService.QsnotExam(this.exam.level).subscribe(data => {
        this.question = data;
        this.setCB = new Array(this.question.length);
        this.setCBCh = new Array(this.question.length);
        for (let i = 0; i <= this.question.length; i++) {
          this.setCB[i] = false;
          this.setCBCh[i]=true;
        }
        this.examService.getListByExam(this.id).subscribe(data=>{
          this.ex_QsList=data;
          for (var i=0;i<this.question.length;i++){
            for (var j=0;j<this.ex_QsList.length;j++){
              if(this.question[i].id==this.ex_QsList[j].question_id){
                this.setCBCh[i]=false;
              }
            }
          }

        });

      }, error => console.log(error));
    });
      this.examService.Dem(this.id).subscribe(data=>{
        this.coutQS=data;
      });
    this.examService.getListByExam(this.id).subscribe(data=>{
      this.ex_QsList=data;
    });
  }
  addQsInExam(id){
    if(this.coutQS-this.exam.totalQuestion>=0){
      this.tv.error('Số lượng câu hỏi đã đạt mức tối đa','Thêm thất bại');
    }
    else if(this.selectedAS.length==0){
      this.tv.error('Bạn chưa chọn câu hỏi','Thêm thất bại');
    }
    else {
      this.selectedAS.forEach(Element => {
        this.ex_Qs.exam_id = id;
        this.ex_Qs.question_id = Element;
        this.examService.AddQsInExam(this.ex_Qs).subscribe(data => {
          this.reloadData();
        });
      });
      this.tv.success('Thêm câu hỏi thành công!');
      this.selectedAS = new Array(0);
    }
  }
  selectAt(index,value) {
    this.setCB[index]=value;
  }
  selectAtQS(x:number,value) {
    for (var i=0;i<this.ex_QsList.length;i++){
      if(this.ex_QsList[i].question_id==value){
        this.tv.error('Câu này đã có trong đề');
        return this.setCB[i]=false;
      }
    }
    this.selectedAS.push(value);


  }
  handlePageChange(event) {
    this.p = event;
    let i=0;
    if(this.p==2){ i=21}
    this.examService.get(this.id).subscribe(data => {
      this.exam = data;
      this.examService.QsnotExam(this.exam.level).subscribe(data => {
        this.question = data;
        this.setCB = new Array(this.question.length);
        this.setCBCh = new Array(this.question.length);
        for (i = 0; i <= this.question.length; i++) {
          this.setCB[i] = false;
          this.setCBCh[i]=true;
        }
        this.examService.getListByExam(this.id).subscribe(data=>{
          this.ex_QsList=data;
          for (i=0;i<this.question.length;i++){
            for (var j=0;j<this.ex_QsList.length;j++){
              if(this.question[i].id==this.ex_QsList[j].question_id){
                this.setCBCh[i]=false;
              }
            }
          }

        });

      }, error => console.log(error));
    });
  }
  set(event){

  }
  selectAt2(value) {
    this.selectedAS.splice(this.selectedAS.indexOf(value), 1);
  }
  cout(){
    this.examService.Dem(this.id).subscribe(data=>{
      this.coutQS=data;
    })
  }
  public reloadData() {
    this.cout();
    this.setCB = new Array(this.question.length);
    for (let i = 0; i <= this.question.length; i++) {
      this.setCB[i] = false;
    }
    this.selectedAS=new Array(0);
  }
}
