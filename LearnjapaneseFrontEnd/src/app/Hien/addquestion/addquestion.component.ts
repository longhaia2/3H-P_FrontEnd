import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question';
import {Router} from '@angular/router';
import {QuestionServiceService} from '../servicesh/question-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css'],
  providers: [QuestionServiceService, ToastrService]
})
export class AddquestionComponent implements OnInit {
  submitForm = new FormGroup({
    content: new FormControl('', Validators.required),
    term: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    ansA: new FormControl('', Validators.required),
    ansB: new FormControl('', Validators.required),
    ansC: new FormControl('', Validators.required),
    ansD: new FormControl('', Validators.required),
    ansCorrect: new FormControl('', Validators.required),
  })
  get content(){return this.submitForm.get('content')}
  get term(){return this.submitForm.get('term')}
  get level(){return this.submitForm.get('level')}
  get ansA(){return this.submitForm.get('ansA')}
  get ansB(){return this.submitForm.get('ansB')}
  get ansC(){return this.submitForm.get('ansC')}
  get ansD(){return this.submitForm.get('ansD')}
  get ansCorrect(){return this.submitForm.get('ansCorrect')}
  qs: Question;
  constructor(private qsQuestion: QuestionServiceService, private route: Router, private tsv: ToastrService) { }
  ngOnInit(): void {
    this.qs = new Question();
  }
  // tslint:disable-next-line:typedef
  add(){
    console.log(this.qs);
    this.qsQuestion.create(this.qs).subscribe(data => {
      this.qs = data;
      this.tsv.success('Thêm câu hỏi thành công');
      this.qs=new Question();
    })
    this.submitForm.reset();
  }
}
