import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class ReviewgrammarService {

  url='http://localhost:8080/question/list'
  qns: any = [];
  reviewQuestions: any=[];
  correctAnswerCount = 0;
  qnProgress: number;

  constructor(private http:HttpClient) { }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question/list'}/${id}`);
  }

  getByLevelAndId(level, id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question'}/${level}${'/testjnpt'}/${id}`);
  }

}
