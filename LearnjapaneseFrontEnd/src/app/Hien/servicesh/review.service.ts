import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../model/question";
@Injectable()
export class ReviewService {
  url='http://localhost:8080/exam/list'
  constructor(private http:HttpClient) { }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam/list'}/${id}`);
  }
  getExamByQS(id_Exam): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question/list'}/${id_Exam}`);
  }
  // getListQuestionByExamid(id): Observable<Question[]>{
  //   return this.http.get<Question[]>(`${'http://localhost:8080/question/cauhoi'}/${id}`)
  // }
}
