import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  url = 'http://localhost:8080/score';

  constructor(private http: HttpClient) {
  }

  getgrammar(username): Observable<any> {
    return this.http.get(`http://localhost:8080/score/grammar?username=${username}`);
  }

  getvocabulary(username): Observable<any> {
    return this.http.get(`http://localhost:8080/score/vocabulary?username=${username}`);
  }

  getexam(username): Observable<any> {
    return this.http.get(`http://localhost:8080/score/exam?username=${username}`);
  }

  GetResultById(username): Observable<any> {
    return this.http.get(`http://localhost:8080/score/all?username=${username}`);
  }
}
