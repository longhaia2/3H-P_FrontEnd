import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from "../../admin/serviceadmin/examservice.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Exam} from "../../admin/model/Exam";
import {Question} from "../../../Hien/model/question";
import {ReviewgrammarService} from "../../../Hien/servicesh/reviewgrammar.service";

@Component({
  selector: 'app-endtestjlpt',
  templateUrl: './endtestjlpt.component.html',
  styleUrls: ['./endtestjlpt.component.css'],
  providers: [ReviewgrammarService]
})
export class EndtestjlptComponent implements OnInit {
  ex: Exam;
  selectedAS: string[];
  qs: Question[];
  review = false;
  constructor(private service: ReviewgrammarService, private  route: ActivatedRoute,
              private  router: Router) {
  }
  ngOnInit(): void {
    window.onload = () => {
      const min = parseInt(window.localStorage.getItem("minutes"));
      const sec = parseInt(window.localStorage.getItem("seconds"));
      if (parseInt(String(min * sec))) {
        var fiveMinutes = (parseInt(String(min * 60))) + sec;
      } else {
        var fiveMinutes = 60 * 5;
      }
      const display = document.querySelector('#time');
      this.startTimer(fiveMinutes, display);
    };
  }
  startTimer( duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function() {
      minutes = parseInt(String(timer / 60), 10)
      seconds = parseInt(String(timer % 60), 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + " " + " " + seconds;
      if (--timer < 0) {
        timer = duration;
      }
      console.log(parseInt(seconds))
      window.localStorage.setItem("seconds", seconds)
      window.localStorage.setItem("minutes", minutes)
    }, 1000);
  }










}
