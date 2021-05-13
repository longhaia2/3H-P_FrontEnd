import { Component, OnInit } from '@angular/core'
import {Title} from "@angular/platform-browser";
import {Question} from "../../../Hien/model/question";
import {Exam} from "../../admin/model/Exam";
import {ChallengeServiceService} from "../../Service/challenge-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../service.service";
import {RoomUsers} from "../model/RoomUsers";
import {User} from "../../../Manh/modelm/user";
import {UserScore} from '../model/UserScore';
import {interval, Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {DialogJoinRoomComponent} from '../dialog-join-room/dialog-join-room.component';
import {RoomChallenge} from "../model/RoomChallenge";

export interface DialogData{
  correctAnswers: number;
  questions:Question[];
}
@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers: [ChallengeServiceService, ServiceService]
})
export class CompetitionComponent implements OnInit {
       private updateSubscription: Subscription;
      public logName:string;
      room_ch: RoomChallenge= new RoomChallenge();
      room_user: RoomUsers = new RoomUsers();
      user: User[];
      userRoom: RoomUsers[];
      userScore:  UserScore[];
      id: number;
      ex: Exam;
      id_room:number;
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
      checktimer: boolean;
      x:number;
      minutes:number=1;


  constructor(public dialog:MatDialog, private title: Title, private service: ChallengeServiceService, private route: ActivatedRoute, private  router: Router, private userService: ServiceService) {
    this.title.setTitle("Đang Chiến");
  }

        ngOnInit() {
          let userName = JSON.parse(sessionStorage.getItem("auth-user"));
          this.logName = userName['username'];
          let id_score = JSON.parse(sessionStorage.getItem("auth-user"));
          this.id_u_scrore = id_score['userId'];
          //get đề thi
          this.ex = new Exam();
          let ex_id = this.route.snapshot.params['exam_id'];
          this.questions = this.route.snapshot.params['id'];
          this.service.getQuestionByLevelAndId(ex_id, this.questions).subscribe(data => {
            this.questions = data;
            this.selectedAS = new Array(this.questions.length);
          }, error => console.log(error));

          //get user in room
          this.room_user= new RoomUsers();
          this.id_room=this.route.snapshot.params['id_room'];
          this.userService.getroom(this.id_room).subscribe(data=>{
            this.room_ch=data;
          this.minutes= this.room_ch.time;
            console.log(this.room_ch.time);
           console.log(this.minutes);
            this.dem();
          });

          this.getuser();
          this.getListUsersByScore();
          this.getUsersRoomList();
        }

        dem(){
          let currentTime = localStorage.getItem('currentTime');
          let targetTime = localStorage.getItem('targetTime');
          if (targetTime == null && currentTime == null) {
            // @ts-ignore
            currentTime = new Date();
            // @ts-ignore
            targetTime = new Date(currentTime.getTime() + (this.minutes * 5000));
            localStorage.setItem('currentTime', currentTime);
            localStorage.setItem('targetTime', targetTime);
          }
          else{
            // @ts-ignore
            currentTime = new Date(currentTime);
            // @ts-ignore
            targetTime = new Date(targetTime);
          }

             this.x = setInterval(()=> {
               // @ts-ignore
              if (Math.floor(((targetTime - currentTime)/1000)%60) <1) {
                clearInterval(this.x);
                document.getElementById('timer').innerHTML = 'Hết Giờ';
               return  this.openDialog();
              } else {
                // @ts-ignore
                currentTime = new Date();
                // @ts-ignore

                if(Math.floor(((targetTime - currentTime)/1000)/60)<1){
                  // @ts-ignore
                  document.getElementById('timer').innerHTML = 'Hãy nhanh lên, bạn chỉ còn '+ Math.floor(((targetTime - currentTime)/1000)%60)+' Giây';

             }
             else {
                  // @ts-ignore
                  document.getElementById('timer').innerHTML =Math.floor(((targetTime - currentTime)/1000)/60)+' phút ' + Math.floor(((targetTime - currentTime)/1000)%60)+' Giây';

                }
              }
            }, 1000);

          // @ts-ignore
          document.onbeforeunload = function(){
            localStorage.setItem('currentTime', currentTime);
          }
        }

             openDialog(){
              const dialogRef = this.dialog.open(DialogJoinRoomComponent, {
                data: {correctAnswers:this.correctAnswers, questions:this.questions}
              });

              dialogRef.afterClosed().subscribe(result => {
                this.correctAnswers = result;
              });
            }


            end(){
              clearInterval(this.x);
            }
            getuser(){
              this.service.getuser(this.id_room).subscribe(data=>{
                this.user=data;
                console.log(data);
                this.selectdScode = new Array(this.user.length);
              },error => console.log(error));
            }

          getListUsersByScore(){
            this.userService.getListUsersByScore(this.id_room).subscribe(data => {
              this.userScore = data;
            });
          }

        getUsersRoomList(){
          this.userService.getUsersRoomList(this.id_room).subscribe(data => {
            this.userRoom = data;
          });
        }


        nextQuestion() {
          this.showExplanation = false;
          if (this.currentIndex >= this.questions.length) {
            this.quizOver = true;
            this.userRoom.forEach(Element => {
              if (Element.user_id == this.id_u_scrore) {
                this.room_user.banker = Element.banker;
                console.log(this.score);
                this.room_user.score=this.score;
                this.service.upDateUser(Element.id, this.room_user).subscribe(data => {
                }, error => console.log(error));
                this.updateSubscription = interval(500).subscribe(
                  (val) => { this.getListUsersByScore()});
                this.updateSubscription=interval(10000).subscribe(value => {
                  this.updateSubscription.unsubscribe();
                })
              }
            });

          } else {
            this.currentQuestion = this.questions[this.currentIndex];
            this.userRoom.forEach(Element => {
              if (Element.user_id == this.id_u_scrore) {
                this.room_user.banker = Element.banker;
                this.room_user.score=this.score;
                this.service.upDateUser(Element.id, this.room_user).subscribe(data => {
                }, error => console.log(error));
                this.updateSubscription = interval(500).subscribe(
                  (val) => { this.getListUsersByScore()});
                this.updateSubscription=interval(10000).subscribe(value => {
                  this.updateSubscription.unsubscribe();
                })
              }
          })
        }
        }
        selectAt(index, value) {
          this.selectedAS[index] = value;
          this.showExplanation = true;
          this.currentIndex++;
          for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].ansCorrect === this.selectedAS[i]) {
              this.hasAnsweredCorrectly = true;
              this.correctAnswers++;
              this.score = this.score + 5;
              break;
            } else {
              this.hasAnsweredCorrectly = false;
            }
          }
        }
      }
