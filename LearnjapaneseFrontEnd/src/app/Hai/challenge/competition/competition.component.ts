import { Component, OnInit } from '@angular/core';
import {Question} from "../model/question";
// @ts-ignore
import * as data from "src/app/data.json";
import {Option} from "../model/option";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  public logName:string;
  questions: Question[] = (data as any).default;
  currentQuestion: Question;
  currentIndex: number = 0;
  correctAnswers: number = 0;
  showExplanation: boolean = false;
  hasAnsweredCorrectly: boolean;
  quizOver: boolean = false;

  constructor( private title: Title) {
    this.title.setTitle("Đang Chiến");
  }

  ngOnInit() {
    this.currentQuestion = this.questions[this.currentIndex];
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];

  }

  answeredQuestion(option: Option) {
    this.showExplanation = true;
    this.currentIndex++;
    if (this.currentQuestion.rightAnswer._id === option._id) {
      this.hasAnsweredCorrectly = true;
      this.correctAnswers++;
    } else {
      this.hasAnsweredCorrectly = false;
    }
  }

  nextQuestion() {
    this.showExplanation = false;
    if (this.currentIndex >= this.questions.length) {
      this.quizOver = true;
    } else {
      this.currentQuestion = this.questions[this.currentIndex];
    }
  }

}
