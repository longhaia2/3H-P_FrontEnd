import { Component, OnInit } from '@angular/core';
// import {Question} from "../model/question";
// @ts-ignore
// import * as data from "src/app/data.json";
// import {Option} from "../model/option";
import {Title} from "@angular/platform-browser";
import {Question} from "../../../Hien/model/question";
import {Exam} from "../../admin/model/Exam";
import {ChallengeServiceService} from "../../Service/challenge-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../service.service";
import {RoomUsers} from "../model/RoomUsers";
import {User} from "../../../Manh/modelm/user";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers: [ChallengeServiceService, ServiceService]
})
export class CompetitionComponent implements OnInit {

  public logName:string;
  room_user: RoomUsers = new RoomUsers();
  user: User[];
  id: number;
  ex: Exam;
  id_user:number;
  id_u_scrore:number;
  score: number =  0;
  questions: Question[];
  selectedAS: string[];
  selectdScode: string[];
  currentQuestion: Question;
  currentIndex: number = 0;
  correctAnswers: number = 0;
  showExplanation: boolean = false;
  hasAnsweredCorrectly: boolean;
  quizOver: boolean = false;


  constructor( private title: Title, private service: ChallengeServiceService, private route: ActivatedRoute, private  router: Router, private userService: ServiceService) {
    this.title.setTitle("Đang Chiến");
  }

  ngOnInit() {
    // this.currentQuestion = this.questions[this.currentIndex];
    let userName = JSON.parse(sessionStorage.getItem("auth-user"));
    this.logName = userName['username'];
    let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
    this.id_u_scrore = id_score['userId'];
    this.ex = new Exam();
    let ex_id = this.route.snapshot.params['exam_id'];
    this.questions = this.route.snapshot.params['id'];
    this.service.getQuestionByLevelAndId(ex_id, this.questions).subscribe(data => {
      this.questions = data;
      this.selectedAS = new Array(this.questions.length);
    }, error => console.log(error));
    this.room_user= new RoomUsers();
    this.id_user=this.route.snapshot.params['id_room'];
    this.service.getuser(this.id_user).subscribe(data=>{
      this.user=data;
      console.log(data);
      this.selectdScode = new Array(this.user.length);
    },error => console.log(error));


  }

  nextQuestion() {
    this.showExplanation = false;
    if (this.currentIndex >= this.questions.length) {
      this.quizOver = true;
      console.log(this.id_u_scrore+ 'heeeee')
      this.id_u_scrore=this.route.snapshot.params['id_score'];
      this.service.updatescore(this.id_u_scrore,this.room_user).subscribe(data=>{
        console.log(data);
      },error => console.log(error));

    } else {
      this.currentQuestion = this.questions[this.currentIndex];
      this.id_u_scrore=this.route.snapshot.params['id_score'];
      this.service.updatescore(this.id_u_scrore,this.room_user).subscribe(data=>{
        console.log(data);
      },error => console.log(error));

    }
  }

  selectAt(index, value) {
    this.selectedAS[index] = value;
    this.showExplanation = true;
    this.currentIndex++;
    for (let rs of this.questions) {
      if (rs.ansCorrect == this.selectedAS[index]) {
        this.hasAnsweredCorrectly = true;
        this.correctAnswers++;
        this.score = this.score + 5;
        console.log(this.score);
        break;
      } else {
        this.hasAnsweredCorrectly = false;
      }
    }
  }

  selectscore(index,value){
    this.selectdScode[index] = value;
    for (let rs of this.questions) {
      if (rs.ansCorrect == this.selectedAS[index]) {
        this.score = this.score + 5;
        console.log(this.score);
        break;
      }
    }
  }
  updateLesson(){
    this.id_u_scrore=this.route.snapshot.params['id'];
    this.service.updatescore(this.id_u_scrore,this.room_user).subscribe(data=>{
      console.log(data);
    },error => console.log(error));
  }

}
