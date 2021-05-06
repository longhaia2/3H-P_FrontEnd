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


  constructor(public dialog:MatDialog, private title: Title, private service: ChallengeServiceService, private route: ActivatedRoute, private  router: Router, private userService: ServiceService) {
    this.title.setTitle("Đang Chiến");
  }

        ngOnInit() {
      this.dem();
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
          this.getuser();
          this.getListUsersByScore();
          this.getUsersRoomList();
        }

        dem(){
          let minutes = 2;
          let currentTime = localStorage.getItem('currentTime');
          let targetTime = localStorage.getItem('targetTime');
          if (targetTime == null && currentTime == null) {
            // @ts-ignore
            currentTime = new Date();
            // @ts-ignore
            targetTime = new Date(currentTime.getTime() + (minutes * 60000));
            localStorage.setItem('currentTime', currentTime);
            localStorage.setItem('targetTime', targetTime);
          }
          else{
            // @ts-ignore
            currentTime = new Date(currentTime);
            // @ts-ignore
            targetTime = new Date(targetTime);
          }

          // @ts-ignore
          // if(!checkComplete()){
          //   interval = setInterval(checkComplete, 1000);
          // }
            const x = setInterval(()=> {
              if (currentTime > targetTime) {
                clearInterval(x);
                // @ts-ignore
                targetTime=null;
                localStorage.setItem('targetTime', targetTime);
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
                this.room_user.status = 1;
                this.room_user.banker = Element.banker;
                console.log(this.score);
                this.room_user.score=this.score;
                this.service.upDateUser(Element.id, this.room_user).subscribe(data => {
                }, error => console.log(error));
                this.updateSubscription = interval(500).subscribe(
                  (val) => { this.getListUsersByScore()});
              }
            });

          } else {
            this.currentQuestion = this.questions[this.currentIndex];
            this.userRoom.forEach(Element => {
              if (Element.user_id == this.id_u_scrore) {
                this.room_user.status = 1;
                this.room_user.banker = Element.banker;
                this.room_user.score=this.score;
                this.service.upDateUser(Element.id, this.room_user).subscribe(data => {
                }, error => console.log(error));
                this.updateSubscription = interval(500).subscribe(
                  (val) => { this.getListUsersByScore()});
              }
          })
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
      }
