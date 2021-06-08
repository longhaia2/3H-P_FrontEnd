import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lesson} from "../../Thuan/model/lesson";
import {MGresultA} from "../../Hai/admin/model/MGresultA";
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
    return this.http.get(`http://localhost:8080/score/all-grammar?username=${username}`);
  }
  GetResultVocaById(username): Observable<any> {
    return this.http.get(`http://localhost:8080/score/all-voca?username=${username}`);
  }

  findAll(): Observable<MGresultA[]> {
    return this.http.get<MGresultA[]>(this.url + '/result-all');

  }
  delete(id): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/score/delete'}/${id}`);
  }
  findAllVoca(): Observable<MGresultA[]> {
    return this.http.get<MGresultA[]>(this.url + '/result-voca-all');

  }
  deleteVoca(id): Observable<any> {
    return this.http.delete(`${'http://localhost:8080/score/delete-voca'}/${id}`);
  }
  findByUserName(searchtext): Observable<MGresultA[]>{
    return this.http.get<MGresultA[]>(`${'http://localhost:8080/result-grammar/search'}/${searchtext}`);
  }
  findBycodeExam(searchtext): Observable<MGresultA[]>{
    return this.http.get<MGresultA[]>(`${'http://localhost:8080/result-grammar/search-code'}/${searchtext}`);
  }

}
