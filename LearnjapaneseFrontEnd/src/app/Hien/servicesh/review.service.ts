import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../model/Result';
@Injectable()
export class ReviewService {
  url = 'http://localhost:8080/exam/list';
  constructor(private http: HttpClient) { }
  get(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/exam/list'}/${id}`);
  }
  addResult(data): Observable<any>{
    return this.http.post<Result>('http://localhost:8080/result-grammar/add', data);
  }
  getResult(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/result-grammar'}/${id}`);
  }
  addResults(data): Observable<any>{
    return this.http.post<Result>('http://localhost:8080/result-vocabulary/add', data);
  }
  getResults(id): Observable<any> {
    return this.http.get(`${'http://localhost:8080/result-vocabulary'}/${id}`);
  }
}
