import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from '../model/question';
import {Observable} from 'rxjs';


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
}
