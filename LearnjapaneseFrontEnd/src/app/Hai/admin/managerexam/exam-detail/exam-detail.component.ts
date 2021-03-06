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
  x: number[]=new Array(0);
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
        this.examService.getListByExam(this.id).subscribe(data=>{
          this.ex_QsList=data;
          for (var i=0;i<this.question.length;i++){
            this.setCB[i] = false;
            this.setCBCh[i]=true;
            for (var j=0;j<this.ex_QsList.length;j++){
              if(this.question[i].id==this.ex_QsList[j].question_id){
                // console.log(i);
                this.question.splice(i, 1);
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
      this.tv.error('S??? l?????ng c??u h???i ???? ?????t m???c t???i ??a','Th??m th???t b???i');
    }
    else if(this.selectedAS.length==0){
      this.tv.error('B???n ch??a ch???n c??u h???i','Th??m th???t b???i');
    }
    else {
      this.selectedAS.forEach(Element => {
        this.ex_Qs.exam_id = id;
        this.ex_Qs.question_id = Element;
        this.examService.AddQsInExam(this.ex_Qs).subscribe(data => {
          this.reloadData();
        });
      });
      this.tv.success('Th??m c??u h???i th??nh c??ng!');
      this.selectedAS = new Array(0);
    }
  }
  selectAt(index,value) {
    this.setCB[index]=value;
  }
  selectAtQS(x:number,value) {
    this.selectedAS.push(value);
    this.x.push(x);
  }
  handlePageChange(event) {
    this.p = event;
   this.reloadData();
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
    let i=0;
    this.cout();
    this.examService.get(this.id).subscribe(data => {
      this.exam = data;
      this.examService.QsnotExam(this.exam.level).subscribe(data => {
        this.question = data;
        this.setCB = new Array(this.question.length);
        this.examService.getListByExam(this.id).subscribe(data=>{
          this.ex_QsList=data;
          for (i=0;i<=this.question.length;i++){
            for (var j=0;j<this.ex_QsList.length;j++){
              if(this.question[i].id==this.ex_QsList[j].question_id){
                this.question.splice(i, 1);
              }
              this.setCB[i] = false;
            }
          }

        });

      }, error => console.log(error));
    });
    this.selectedAS=new Array(0);
  }
}
