// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Question} from '../model/question';
// @ts-ignore
import {Observable} from 'rxjs';


// @ts-ignore
@Injectable()
export class QuestionServiceService {
  url = 'http://localhost:8080/question';
  constructor(private http: HttpClient) { }
  findAll(): Observable<Question[]>{
    return this.http.get<Question[]>(this.url + '/all');
  }
  create(data): Observable<any>{
    return this.http.post<Question>(this.url + '/add', data);
  }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question/all'}/${id}`);
  }
  getExamByQS(id_Exam): Observable<any> {
    return this.http.get(`${'http://localhost:8080/question/list'}/${id_Exam}`);
  }

    delete(id): Observable<any> {
      return this.http.delete(`${'http://localhost:8080/question/delete'}/${id}`);
  }
}
