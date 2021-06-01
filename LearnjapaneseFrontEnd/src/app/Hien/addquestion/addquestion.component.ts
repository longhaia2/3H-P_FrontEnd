import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionServiceService} from '../servicesh/question-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {DialogServiceService} from "../../Thuan/service/dialog-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
  providers: [QuestionServiceService, ToastrService]
})
export class AddquestionComponent implements OnInit {
  logName: string;
  selectedFile:any=null;
  submitForm = new FormGroup({
    content: new FormControl('', Validators.required),
    term: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    ansA: new FormControl('', Validators.required),
    ansB: new FormControl('', Validators.required),
    ansC: new FormControl('', Validators.required),
    ansD: new FormControl('', Validators.required),
    ansCorrect: new FormControl('', Validators.required),
  });
  get content(){return this.submitForm.get('content')}
  get term(){return this.submitForm.get('term')}
  get level(){return this.submitForm.get('level')}
  get ansA(){return this.submitForm.get('ansA')}
  get ansB(){return this.submitForm.get('ansB')}
  get ansC(){return this.submitForm.get('ansC')}
  get ansD(){return this.submitForm.get('ansD')}
  get ansCorrect(){return this.submitForm.get('ansCorrect')}
  qs: Question;
  question: Question[];
  constructor( private route: Router,
              private tsv: ToastrService,private questionService: QuestionServiceService) { }

  ngOnInit(): void {
    this.qs = new Question();
    let userName = JSON.parse(sessionStorage.getItem('auth-user'));
    this.logName = userName['username'];
  }
  // tslint:disable-next-line:typedef
  add(){
    this.questionService.create(this.qs).subscribe(data => {
      this.qs = data;

      this.tsv.success('Thêm câu hỏi thành công');
      this.qs=new Question();
    });
    this.submitForm.reset();
  }
  save(event:any) {
    this.selectedFile = event.target.files[0];
  }
  import() {
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
  private reloadData() {
    this.questionService.findAll().subscribe(data => {
      this.question = data;
    });
  }
}
